---

---
# Changelog

## [1.6.0] - 2026-10-15
### Added
- Multilingual interface: Russian, English, Portuguese (BR). Language selector in the top bar and settings window.
- Modules localization/i18n.js and localization/languages.js.
- Language switching without reloading the page; the selection is saved in localStorage (key azimuth_language).
- Automatic language selection based on navigator.language on first launch (with English as the fallback).
- Portuguese is based on the Brazilian variant; users with pt-PT, pt-AO, and pt-MZ also receive it.
- Localized data-i18n attributes in index.html — text, headings, placeholders, aria-label, data-empty-label.
- Added a Localization document describing the translation catalogs and the rules for adding a language.

### Changed
- app.js: all user-facing strings moved to I18n.t / I18n.message / I18n.html / I18n.bindText.
- setStatus accepts a string or a {key, params} descriptor and updates the data-i18n binding — the status is redrawn when the language changes.
- The device label (device-label) is redrawn through renderDeviceLabel() with localized captions.
- Reports (DRMS, log analysis) are saved in analysisSnapshot and redrawn on language changes through languagechange.
- refreshLanguagePresentation() is the single refresh point for dynamic elements (beacon cards, reference beacon list, status bar, reports).
- Documentation: guide.md and guide_en.md updated for 1.6.0; typos corrected; links to localization added.

### Fixed
- UIWizard: the “Do not show again” checkbox no longer resets when switching radio buttons on the “Reference beacons” step (state saved and restored in onRender).
- Documentation: removed the duplicate “9. Calibration” item from the guide.md table of contents; corrected the numbering of subsequent items.
- Documentation: corrected Russian spelling errors (“маневрируе” → “маневрирует”, “перемещаеться” → “перемещаться”, “ячеки” → “ячейки”).
- Documentation: images in guide.md now have meaningful alt text instead of img.

### Notes
- All interface strings are in localization/languages.js; app.js and ui-*.js modules contain no hardcoded user-facing strings except console diagnostic messages (these are also translated through I18n.t).
- Backward compatibility: the zima2_settings format in localStorage is unchanged; saved tracks, POI, calibrations, geographic positioning settings, and reference beacons are restored without changes.
- Documentation localization (beyond RU/EN) is planned; the Portuguese guide_pt.md has not yet been created.


## [1.5.0] - 2026-10-14

### Fixed
- Eliminated false acknowledgment of write commands when transmission to the device fails.
- The serial port now closes correctly on disconnection and reconnection errors — reconnecting no longer gets stuck.
- Fixed corruption of multibyte characters at serial packet boundaries.
- Western longitude no longer becomes eastern longitude when calculating beacon coordinates.
- UNESCO sound speed calculation — eliminated overestimation when salinity is specified.
- NMEA GGA export brought into compliance with the standard (two-digit minutes, carry into degrees).
- CSV track export — eliminated the column shift in the station row.
- DRMS export to CSV — beacon data is now included in the file.
- PSIMSSB export with UTM brought into alignment with the reference projection (northing, zone at ±180°).
- POI export and import correctly handle names containing commas, quotation marks, and line breaks.
- The GNSS parser rejects invalid data (range, minutes ≥ 60, status, quality).
- Track filters — eliminated a source of errors after a hypothesis change and when the vessel moves while the beacon is stationary.
- ACHOD filter (compass only) — correctly handles the direction of rotation.
- Antenna calibration — clears the outdated table when measurements are added.
- φ calibration no longer returns the starting angle as the result when no solution is found.
- Track rendering in Cartesian mode — points without coordinates no longer move to (0, 0).
- Restoring geographic positioning settings with a heading only (without coordinates) no longer causes an error.
- ⚓ Reference beacon mode — an outdated vessel position is no longer used.
- Log import: “Save” downloads the loaded data rather than the previous recording.
- A log crossing midnight plays back with the correct progression of time.
- Log analysis: service records no longer distort the percentage of successful beacon responses.
- Heading source selection — “HDT only” and “Magnetic only” are applied consistently to all sources.
- Service Worker — does not delete other applications' caches or substitute index.html for missing documents.
- Web wrapper (Android) — fixed a memory leak during downloads.
- If local storage is unavailable, the application no longer interrupts initialization and settings operations.
- Protection against numerical outliers in haversine (antipodes).
- Numeric settings with a value of `0` are no longer replaced with the default value.

### Notes
- The changes are internal (filter processing order, port resource cleanup, rendering) — they do not change visible behavior, but eliminate sources of rare failures.
- Verified using recorded logs and in a browser. Physical hardware and native Android were not retested.
- Interface localization is not included in this version.

## [1.4.3] - 2026-10-06

### Added
- Added a utility for converting AzimuthConsole logs to CSV/KML/DXF (Tools > AzimuthConsole log parser)

## [1.4.2] - 2026-10-05

### Changed
- **Track rendering performance:** reworked the drawing loop — eliminated FPS drops during prolonged operation with large tracks
- **Track storage:** old points are now trimmed in blocks (amortized O(1)) instead of shifting array elements individually — eliminated periodic freezes as large tracks accumulate
- **“Max. points per track” setting** now controls only the rendering window and **does not affect** storage depth — data is always retained in full for export
- **Track rendering:** points falling within the same screen pixel are skipped (adaptive decimation) — the track looks the same but is drawn several times faster when zoomed out
- **CSS variable cache:** rendering colors are read once and reused (reset when the theme changes) — removed hundreds of `getComputedStyle` calls per second

### Added
- **Track tail glow:** the last 100 points of beacon tracks and the station track are highlighted with a translucent tail, making the head of the track (recent data) visible

### Fixed
- FPS drops during prolonged operation (several hours) with many beacons and accumulated tracks
- The “Max. points per track” setting no longer causes irreversible loss of data intended for export

## [1.4.1] - 2026-10-01

### Added
- **“🧭 Heading only”** mode in the manual positioning panel — for debugging and accuracy assessment in **⚓ Reference beacons** mode
  - Allows setting only the antenna heading (`heading`), without latitude and longitude
  - Antenna coordinates are calculated automatically from reference beacons
  - Mode selector in the positioning panel: **🌍 Full (lat/lon + heading)** / **🧭 Heading only (for ⚓)**
  - Latitude and longitude fields are automatically disabled, with the placeholder “(from references)”
  - A hint below the selector explains that coordinates will be calculated from reference beacons
- **“🧭 Set heading”** button in the **⚓ Reference beacons** panel — quickly opens the positioning panel in heading-only mode
- Automatically returns to the **⚓ Reference beacons** panel after applying a heading (only in `beacon_referenced` mode)
- Automatically switches the positioning panel to heading-only mode when the antenna mode changes to **⚓ Reference beacons**
- Saves the positioning mode (`full` / `heading_only`) in localStorage

### Changed
- **Setup wizard (UIWizard):** selecting **“Yes, use reference beacons ⚓”** no longer automatically opens the positioning panel — only the **⚓ Reference beacons** panel opens, with a hint to press **🧭 Set heading**
- **Setup wizard:** the GNSS port baud rate is not overwritten if the “GNSS compass” step was not shown (relevant to the ⚓ scenario without GNSS)
- **Setup wizard:** removed the unused `getActiveSteps()` function and step `showCondition` attributes (dead code)
- **Setup wizard:** protection against calling `finish()` twice (`isFinishing` flag)
- **Setup wizard:** switching radio buttons on the “Reference beacons” step no longer loses the “Do not show again” checkbox state
- In **⚓ Reference beacons** mode, the antenna panel replaces `--` with **“⚓ waiting...”** until the vessel position is calculated
- The positioning and reference beacon panels no longer open simultaneously (no overlapping modals)

### Fixed
- **Positioning panel:** saving/loading `NaN` in localStorage worked incorrectly (JSON converted `NaN` to `null`, breaking `isNaN` checks) — `null` is now explicitly interpreted as “not set”
- **Positioning panel:** closing the reference panel with the **🧭 Set heading** button no longer leaves dangling open panels
- **UIWizard:** the “Do not show again” checkbox on the “Reference beacons” step was reset when switching radio buttons

### Notes
- **“🧭 Heading only”** mode is primarily intended for debugging and accuracy assessment in `beacon_referenced`: it allows the antenna to be held stationary, its direction to be set, and the spread of the calculated vessel position (`⚓ Accuracy`) and the coordinates of the beacons being located to be observed
- Antenna heading can be set in two ways: manually (positioning panel) or from an external GNSS compass (HDT/HDM/HDG). Both sources are equivalent — GNSS is not blocked in `beacon_referenced` mode
- Full positioning (lat/lon + heading) remains available in `beacon_referenced` mode — the selector can be switched back to **🌍 Full**

## [1.4.0] - 2026-09-23

### Added
- New antenna operating mode: **⚓ Reference beacons** (`beacon_referenced`)
  - The vessel position is calculated from the known coordinates of one or more reference beacons (inverse geodetic problem)
  - Position averaging using the median (with multiple reference beacons), with spread and age monitoring
  - Position buffer with a 20-second lifetime (protection against stale data)
  - DH filter for the vessel position (protection against physically impossible jumps), shared by all reference beacons
  - Rejected vessel positions are displayed on the map as gray crosses labeled “REJECTED”
  - DH filter and smoother for the beacons being located (in geographic coordinates)
- **“⚓ Reference beacons”** panel in the Tools menu:
  - Add/remove reference beacons with coordinates and depth
  - Reference beacon list with removal controls
  - Status indicator (active/ready/waiting for data)
  - Current vessel position display (coordinates, sources, spread, age)
- **“⚓ Reference beacons”** option in the antenna mode settings
- New **“Reference beacons”** step in the startup setup wizard (UIWizard)
- **⚓** indicator in the antenna panel when the mode is active
- **“⚓ Accuracy”** row in the antenna panel — spread between reference beacons, number of sources, age (shown only with 2+ reference beacons)
- **“GNSS”** and **“Difference”** rows in the antenna panel — comparison of the position derived from reference beacons with the GNSS position (when GNSS data is available)
- **“Max. vessel speed”** setting in ⚙ Settings → Vessel filter (DH) — vessel position DH filter threshold (0.5–50 m/s, default 2.0)
- Mode visualization on the map:
  - Reference beacons are highlighted with a gold outline and a ⚓ icon
  - Dashed gold lines from reference beacons to the vessel position
  - A spread circle around the vessel position
- Saves reference beacons in localStorage (restored between sessions)
- Automatically sets the map anchor when a reference beacon is added/activated

### Changed
- **`azm-manager.js` refactoring:** `processBeaconData()` split into a dispatcher and strategies (`strategyCartesianFixed`, `strategyGeographic`, `strategyBeaconReferenced`) — simplifies adding new modes
- **CSS refactoring:** introduced `--radius-*` variables and a `--z-*` hierarchy; removed duplicates; dropdown menus and panels now use the `.visible` class instead of inline styles
- The **Log** button now matches the size of the other top-bar buttons
- All panels now have a consistent style (shared padding, border-radius, box-shadow)
- Buttons inside panels standardized through `.panel-btn-*` classes
- Playback progress indicator (`#playback-progress`) and speed control (`#playback-speed-control`) are managed through the `.active` class
- In `beacon_referenced` mode, the GNSS position is saved separately (for comparison) and does not overwrite the working vessel position
- Reference beacons are not added to beacon tracks and are not processed by the DH filter or smoother (their coordinates are set by the user and remain stable)
- The station track in `beacon_referenced` mode is built from the calculated vessel position (not GNSS)
- Documentation (guide and readme) updated

### Fixed
- **CSS:** fixed the `..dropdown-menu` typo (double dot), which prevented submenus in the Tools menu from working
- **CSS:** the `--radius-sm/--radius/--radius-lg` variables were undefined — rounded corners now work correctly
- **UI:** submenus (POI, Calibrations) are no longer permanently expanded; they respond to hover and tap
- **UI:** dropdown menus on mobile devices/tablets no longer extend beyond the screen edge
- **UI:** on narrow screens, submenus expand downward (as a tree) rather than sideways
- **Vessel position age** in the antenna panel showed billions of seconds (comparison of virtual and real time). Added an `updatedAt` field (real time) to `shipPosition`
- **`recalculateShipPosition`** used `Date.now()` instead of `timeProvider()` — during log playback, this caused all buffer entries to be considered stale
- **Vessel position DH filter** used degrees instead of radians (unlike `DHTrackFilter` for beacons), causing all positions to be rejected
- **Reference beacon** was not displayed at its coordinates if the map anchor was not set. The anchor is now set when a reference beacon is added/activated
- **Station track** was not built in `beacon_referenced` mode when there was only one reference beacon. A point is now added in the early return for a reference beacon

### Notes
- `beacon_referenced` mode requires **at least one reference beacon** with known coordinates
- In `beacon_referenced` mode, antenna offsets (`offsetX/offsetY`) **are not applied** — only the angular correction `phi` is used
- Position accuracy (`spread`) is evaluated **only with 2+ reference beacons**. With one beacon, `spread = 0` and the “⚓ Accuracy” row in the antenna panel is hidden
- The GNSS position (if present in the log) is displayed in the antenna panel for comparison with the position derived from reference beacons — the “GNSS” and “Difference” rows
- The position buffer is cleared when leaving `beacon_referenced` mode
- Reference beacons excluded from the interrogation mask are not removed automatically — the vessel position is frozen at the last value (for up to 20 seconds)


## [1.3.10] - 2026-09-21

### Fixed
- Removed the offset when using the ruler

### Added
- Support for \*\*HDG messages containing compass data
- Support for operation with compass readings only — outliers can be rejected even without a geographic antenna position

## [1.3.9] - 2026-09-14

### Added
- PWA shell: manifest (`manifest.json`) and Service Worker (`sw.js`) — the application can be installed as a standalone desktop application (Chrome, Edge)
- Application icons (192×192, 512×512)

### Changed
- The Service Worker is registered only in a secure context (http/https). Operation from `file://` and the Android Launcher is unaffected
- Automatic application updates through the Service Worker (`skipWaiting()` + `clients.claim()`) — a new version is applied on the next launch
- Static asset caching does not affect the Web Serial API (serial communicates directly with USB, bypassing the network)

### Notes
- In Vivaldi standalone mode, the Web Serial port selection dialog may not appear — this is a known browser bug. Standalone mode works correctly in Chrome and Edge


## [1.3.8] - 2026-09-01

### Added
- Ability to use an Android device's built-in compass for manual positioning

### Changed
- Improved handling of built-in Android device sensors


## [1.3.7] - 2026-07-29

### Added
- Track export to DXF (CAD)


## [1.3.6] - 2026-07-22

### Added
- Calibration of the angular offset between antenna zero and compass using a known point (DRMS report and Calibration menu)

### Fixed
- Improved handling of corrupted NMEA messages
- Text display in the DRMS report


## [1.3.5] - 2026-07-20

### Fixed
- Fixed track and beacon icon display in geographic mode


## [1.3.4] - 2026-07-17

### Added
- Coordinate converter utility: load CSV/KML and convert coordinates from geographic coordinates to meters and back
- Interactive azimuth angle adjustment (antenna direction) when converting from Cartesian coordinates

### Fixed
- Azimuth arrow display in Cartesian mode


## [1.3.3] - 2026-07-16

### Added
- Startup setup wizard (UIWizard): step-by-step selection of antenna mode, geographic positioning, and GNSS compass, with connection verification

### Fixed
- Antenna azimuth resets correctly when switching modes
- Fixed an error when processing a beacon service message on power-up
- Fixed calculation of the slant range projection when the antenna or beacon depth is unavailable
- Eliminated double application of the azimuth correction angle in Cartesian mode
- Fixed track display and the position of beacon icons relative to the track in Cartesian mode


## [1.3.2] - 2026-07-10

### Added
- Cartesian mode for operating with a stationary antenna in metric coordinates
- Separate DH filter for Cartesian coordinates (DHTrackFilterXYZ)
- Coordinate smoother for Cartesian mode (TrackMedianFilterXYZ)
- X/Y axis labels on the grid in Cartesian mode
- Beacon following in Cartesian coordinates (followCartesianPoint)
- CSV export with X,Y,Z columns in Cartesian mode (lat/lon are empty)

### Changed
- GNSS data is ignored in Cartesian mode (the antenna remains at 0,0,0)
- Antenna table calibration is disabled in Cartesian mode with a warning
- POI are not displayed in Cartesian mode (no geographic reference)
- The station track is not drawn in Cartesian mode
- The antenna card shows X/Y in Cartesian mode; azimuth is fixed at 0°
- GGA, KML, PSIMSSB UTM export is unavailable in Cartesian mode, with an explanation
- Geographic positioning settings are restored/reset when switching modes
- A double tap/double click resets the view according to the mode


## [1.3.1] - 2026-06-26

### Changed
- Cleaned up color schemes
- Improved port handling when connecting a beacon


## [1.3.0] - 2026-06-25

### Added
- Beacon configuration: when a beacon is connected, a button next to the device label opens the configuration dialog


## [1.2.9] - 2026-06-24

### Added
- Points of interest (POI): load from CSV, mark a beacon's current position (📌 on its card), display on the map
- Export POI to CSV and KML
- Save POI between sessions (localStorage)
- Statistical analysis (DRMS, etc.) in Tools → DRMS report

### Changed
- Tools menu reorganized: added Calibrations and POI submenus
- POI are displayed without distance (name and depth only)


## [1.2.8] - 2026-06-23

### Added
- Antenna calibration using a correction table: collect points while moving around a beacon, then build an error table by sector
- Ability to download the full calibration report (raw data + table) for analysis

### Changed
- Antenna calibration button moved from Log to Tools
- Calibration table loading and reset moved into callbacks to eliminate dependence on global variables

### Fixed
- Fixed loading a calibration table from a file in AntennaCorrector


## [1.2.7] - 2026-06-16

### Added
- Antenna track export to GGA
- Warning when closing the page if tracks or a log are present

### Fixed
- Time in GGA export


## [1.2.6] - 2026-06-10

### Fixed
- Beacon card display
- Automatic centering when clicking a beacon or station card


## [1.2.5] - 2026-06-10

### Changed
- Refactoring: extracted `ui-topo.js`, `ui-calibration.js`, `ui-canvas.js` modules and created `export.js`
- Eliminated duplicate geodetic calculation code (using `GeoUtils.geoToScreen()`)
- Optimized initialization and event handlers (mouse, touch)
- Simplified zoom and panning through `UICanvas`

### Fixed
- Added depth to KML export


## [1.2.4] - 2026-06-08

### Added
- Ruler tool for measuring distances on the map (two points, a rubber-band line, works while zooming/panning)

### Changed
- Refactoring: extracted `ui-themes.js`, `ui-settings.js`, `ui-ruler.js` modules
- Improved grid colors in dark themes (Jack Black, Dark Contrast, VAX)
- Application version updated to 1.2.4


## [1.2.3] - 2026-06-08

### Added
- Maximum beacon speed setting for the ACHOD filter (0.5–5 m/s)
- Different ACHOD filter operating modes for different ranges
- Skip empty time during log playback (up to the first beacon point)
- Accelerated log playback (2x, 4x, 8x)

### Changed
- ACHOD filter (DH-filter) adapted to work with different queue sizes
- Improved settings saving/loading
- Added maximum beacon speed setting

### Fixed
- Fixed incorrect display of the saved maximum speed in the settings window
- Manual positioning now allows changing only the azimuth without overwriting coordinates


## [1.2.2] - 2026-06-06

### Added
- Display of filter-rejected points (gray crosses) for diagnostics
- Beacon temperature on the card (in the VCC row)
- Adaptive DH filter threshold based on range
- Jack Black, Jack White, VAX themes added to the theme switching cycle

### Changed
- Coordinate smoothing is disabled at ranges > 1000 m
- Azimuth on the card: in parentheses when measured, without parentheses when absolute

### Fixed
- Range on the beacon card always shows the current measured value


## [1.2.1] - 2026-06-05

### Added
- Improved log analysis (extended heading statistics)
- Correct recalculation of deviation and variation in the HDG message

### Fixed
- Log parsing accounts for different sources (GNSS, HDM)


## [1.2.0] - 2026-06-02

### Added
- PSIMSSB export with UTM coordinates (C,E)
- Median coordinate filter
- Antenna angle corrector using a calibration table
- Automatic UNESCO sound speed calculation (temperature + salinity)

### Fixed
- Time in GGA/PSIMSSB without a date (hhmmss)
- xM/yM in degrees instead of radians


## [1.1.0] - 2026-05-15

### Added
- PSIMSSB export (C,H — Head-Up)
- Save relative coordinates in the track


## [1.0.0] - 2026-04-01

- First stable release
