# Graph Report - /media/veracrypt7/Cardenas/6a21a21e0-arg  (2026-05-09)

## Corpus Check
- Corpus is ~4,364 words - fits in a single context window. You may not need a graph.

## Summary
- 23 nodes · 38 edges · 4 communities (2 shown, 2 thin omitted)
- Extraction: 87% EXTRACTED · 13% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.89)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Login Pages & UI Controls|Login Pages & UI Controls]]
- [[_COMMUNITY_Data Capture & Discord Pipeline|Data Capture & Discord Pipeline]]
- [[_COMMUNITY_Logger API Functions|Logger API Functions]]
- [[_COMMUNITY_Static Assets|Static Assets]]

## God Nodes (most connected - your core abstractions)
1. `Desktop Login Page` - 9 edges
2. `Mobile Login Page` - 9 edges
3. `Facial Recognition Page` - 9 edges
4. `Santander Logger Module` - 5 edges
5. `Credential Capture Flow` - 5 edges
6. `Attempt Tracking Mechanism` - 4 edges
7. `Error Page Redirect Mechanism` - 4 edges
8. `Discord Webhook Integration` - 3 edges
9. `Password Visibility Toggle` - 3 edges
10. `Santander Branding Assets` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Desktop Login Page` --references--> `Santander Logger Module`  [EXTRACTED]
  https:/www.personas.santander.com.ar/indexDesktop.html → js/santander-logger.js
- `Mobile Login Page` --references--> `Santander Logger Module`  [EXTRACTED]
  https:/www.personas.santander.com.ar/indexMovil.html → js/santander-logger.js
- `Facial Recognition Page` --shares_data_with--> `LocalStorage Flow Data Persistence`  [EXTRACTED]
  https:/www.personas.santander.com.ar/bio.html → js/santander-logger.js
- `Facial Recognition Page` --references--> `Santander Branding Assets`  [EXTRACTED]
  https:/www.personas.santander.com.ar/bio.html → images/logo.svg
- `IP Geolocation Service` --shares_data_with--> `Credential Capture Flow`  [EXTRACTED]
  js/santander-logger.js → https:/www.personas.santander.com.ar/indexDesktop.html

## Hyperedges (group relationships)
- **Login Error Retry Flow** — indexdesktop_login_page, indexmovil_login_page, error_connection_page, attempt_tracking_mechanism, localstorage_flow_data [EXTRACTED 0.95]
- **Discord Data Collection Pipeline** — credential_capture_flow, webcam_photo_capture, discord_webhook_integration, ip_geolocation_service, santander_logger_module [EXTRACTED 0.95]
- **Full Multi-Page User Flow** — index_device_router, indexdesktop_login_page, indexmovil_login_page, error_connection_page, bio_facial_recognition [EXTRACTED 1.00]

## Communities (4 total, 2 thin omitted)

### Community 0 - "Login Pages & UI Controls"
Cohesion: 0.39
Nodes (9): Attempt Tracking Mechanism, Connection Error Page, Error Page Redirect Mechanism, Eyes Close SVG Icon, Device Router, Desktop Login Page, Mobile Login Page, Password Visibility Toggle (+1 more)

### Community 1 - "Data Capture & Discord Pipeline"
Cohesion: 0.36
Nodes (8): Facial Recognition Page, Credential Capture Flow, Discord Webhook Integration, Facial Verification Simulation, IP Geolocation Service, LocalStorage Flow Data Persistence, Santander Logger Module, Webcam Photo Capture

## Knowledge Gaps
- **3 isolated node(s):** `Eyes Close SVG Icon`, `Favicon PNG`, `Facial Verification Simulation`
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Facial Recognition Page` connect `Data Capture & Discord Pipeline` to `Login Pages & UI Controls`?**
  _High betweenness centrality (0.165) - this node is a cross-community bridge._
- **Why does `Desktop Login Page` connect `Login Pages & UI Controls` to `Data Capture & Discord Pipeline`?**
  _High betweenness centrality (0.119) - this node is a cross-community bridge._
- **Why does `Mobile Login Page` connect `Login Pages & UI Controls` to `Data Capture & Discord Pipeline`?**
  _High betweenness centrality (0.119) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Desktop Login Page` (e.g. with `Error Page Redirect Mechanism` and `Mobile Login Page`) actually correct?**
  _`Desktop Login Page` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 3 inferred relationships involving `Mobile Login Page` (e.g. with `Credential Capture Flow` and `Error Page Redirect Mechanism`) actually correct?**
  _`Mobile Login Page` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Eyes Close SVG Icon`, `Favicon PNG`, `Facial Verification Simulation` to the rest of the system?**
  _3 weakly-connected nodes found - possible documentation gaps or missing edges._