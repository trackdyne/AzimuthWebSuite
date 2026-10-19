---

---

# [AzimuthWebSuite](https://docs.unavlab.com/AzimuthWebSuite/)

[Version history](CHANGELOG.md)
[User guide](docs/guide.md)

**Web application for working with the Zima2 USBL underwater acoustic positioning system.**

A fully browser-based PWA (Progressive Web Application). No installation is required; it uses the Web Serial API. Replaces the AzimuthSuite desktop application.

## Features

### Connection and positioning
- **Connect to Zima2 USBL** through a serial port (USB/RS-232/RS-422)
- **Connect an external GNSS compass** (NMEA 0183) through a second serial port
- **Geographic positioning** — automatic via GNSS or manual entry of coordinates and heading
- **“⚓ Reference beacons” mode** — determine the vessel position without GNSS using the known coordinates of one or more reference beacons (inverse geodetic problem)
- **Real-time display of transponder beacons** — range, azimuth, depth, signal, voltage, temperature
- **Beacon and station tracks** with saving and export
- **DH filter** (ACHOD) with an adaptive threshold and coordinate smoothing
- **Vessel position DH filter** — protection against physically impossible jumps (for ⚓ mode)
- **Position comparison** — when GNSS is available, displays the difference between the GNSS position and the position derived from reference beacons

### Calibration
- **Antenna angular offset calibration (φ)** — automatic selection by minimizing the DRMS of a point cloud
- **Antenna calibration using a correction table** — collect points while the vessel moves around a beacon and build an error table by encoder sector
- **Calibration table** — load/save CSV and apply corrections in real time

> **Note:** Calibration data collection is available only in **🌍 Geographic** mode. An already loaded table can be applied in all modes.

### Points of interest (POI)
- **Load POI from CSV** — target points for ROV navigation
- **Mark a beacon's current position** — save findings during operation
- **Display on the map** — loaded (📍) and marked (⭐) points with names and depths
- **Persistence between sessions** (localStorage)
- **Export POI** to CSV and KML

### Analysis and statistics
- **DRMS report** — calculate the root mean square deviation of beacon tracks and export to CSV
- **Record and play back logs** of communication with the device (at 2x/4x/8x speed)
- **Log analysis** — beacon statistics and compass anomaly detection

### Data export
- CSV (beacon and station tracks)
- NMEA GGA (with hexadecimal beacon addressing)
- NMEA GGA (antenna track)
- NMEA PSIMSSB (HiPAP emulation, Head-Up and UTM)
- KML (tracks and POI for Google Earth/QGIS)
- [Coordinate converter](https://docs.unavlab.com/AzimuthWebSuite/tools/coord-converter.html) utility (Geographic (Lat, Lon) <> Local (meters))

### Interface
- **Startup setup wizard** — step-by-step selection of the antenna operating mode, including ⚓ mode
- **Six themes:** Indoor, Light, Dark Contrast, Jack Black, Jack White, VAX
- **Ruler** for measuring distances on the map
- **Responsive design** — desktop, tablet, phone
- **Automatic sound speed calculation** from temperature and salinity (UNESCO)
- **Reference beacons panel** — add and remove beacons, monitor status and position accuracy

## Usage

### Online (GitHub Pages)

Open `https://docs.unavlab.com/AzimuthWebSuite/` in Chrome/Edge.

### Locally

Copy all files into a folder and open `index.html` in a browser. No server is required.

### On Android

Use [UCNL Launcher](https://github.com/ucnl/UCNL_Launcher), a WebView wrapper with Web Serial API support for Android devices.

## Supported browsers

- Google Chrome 89+
- Microsoft Edge 89+
- Opera 75+
- Other Chromium-based browsers

> Firefox and Safari **do not support** the Web Serial API.

## Log format

Compatible with AzimuthSuite (C#) logs. Logs from AzimuthSuite and AzimuthConsole can be loaded and played back.

## License

[GNU GPL v3.0](https://github.com/ucnl/AzimuthWebSuite/blob/main/LICENSE)

## Links

- [Zima2 documentation](https://docs.unavlab.com/navigation_and_tracking_systems_ru.html#zima)
- [UCNL Launcher (Android WebView)](https://github.com/ucnl/UCNL_Launcher)
- [AzimuthSuite (desktop)](https://github.com/ucnl/AzimuthConsole)

---

&copy; 2026 [UC&NL](https://unavlab.com)
