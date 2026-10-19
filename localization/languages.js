/* Column order follows the language header. Missing cells fall back to English. */
(function () {
  'use strict';
  
const languages = [
  [
    "en",
    "English"
  ]
];
const messages = {
  "main.swRegistered": [
    "[SW] Registered:"
  ],
  "main.swError": [
    "[SW] Error:"
  ],
  "main.connectionStatus": [
    "Connection status"
  ],
  "main.disconnected": [
    "Disconnected"
  ],
  "main.theme": [
    "Theme"
  ],
  "main.interrogate": [
    "▶ Interrogate"
  ],
  "main.settings": [
    "⚙ Settings"
  ],
  "main.tools": [
    "🔧 Tools ▾"
  ],
  "main.wizard": [
    "⚙ Setup wizard"
  ],
  "main.manualTopo": [
    "🌐 Manual positioning"
  ],
  "main.referenceBeacons": [
    "⚓ Reference beacons"
  ],
  "main.drmsReport": [
    "📊 DRMS report"
  ],
  "main.poiMenu": [
    "📍 POI ▸"
  ],
  "main.loadCSV": [
    "📂 Load from CSV"
  ],
  "main.saveCSV": [
    "💾 Save to CSV"
  ],
  "main.clearAll": [
    "🗑 Clear all"
  ],
  "main.coordinateConverter": [
    "🔄 Coordinate converter"
  ],
  "main.logParser": [
    "🔄 AzimuthConsole log parser"
  ],
  "main.calibrationsMenu": [
    "🔧 Calibrations ▸"
  ],
  "main.phiCloud": [
    "🔧 φ calibration (point cloud)"
  ],
  "main.phiKnown": [
    "🔧 φ calibration (known point)"
  ],
  "main.antennaTableWarning": [
    "⚠📡 Antenna calibration (table)"
  ],
  "main.export": [
    "📤 Export ▾"
  ],
  "main.csvTracks": [
    "📊 CSV (Antenna + beacon)"
  ],
  "main.ggaBeacon": [
    "📡 NMEA GGA (Beacon)"
  ],
  "main.ggaAntenna": [
    "📡 NMEA GGA (Antenna)"
  ],
  "main.psimBeacon": [
    "📡 NMEA PSIMSSB (Beacon)"
  ],
  "main.psimUTM": [
    "📡 NMEA PSIMSSB UTM (Beacon)"
  ],
  "main.logMenu": [
    "📋 Log ▾"
  ],
  "main.save": [
    "💾 Save"
  ],
  "main.open": [
    "📂 Open"
  ],
  "main.analyze": [
    "🔍 Analyze"
  ],
  "main.play": [
    "▶ Play"
  ],
  "main.stopPlayback": [
    "⏹ Stop"
  ],
  "main.latitude": [
    "Latitude:"
  ],
  "main.longitude": [
    "Longitude:"
  ],
  "main.accuracy": [
    "⚓ Accuracy:"
  ],
  "main.difference": [
    "Difference:"
  ],
  "main.azimuth": [
    "Azimuth:"
  ],
  "main.speed": [
    "Speed:"
  ],
  "main.course": [
    "Course:"
  ],
  "main.depth": [
    "Depth:"
  ],
  "main.temperature": [
    "Temp.:"
  ],
  "main.pitch": [
    "Pitch:"
  ],
  "main.roll": [
    "Roll:"
  ],
  "main.tracks": [
    "📐 Tracks"
  ],
  "main.clear": [
    "🗑 Clear"
  ],
  "main.ruler": [
    "📏 Ruler"
  ],
  "main.topoTitle": [
    "🌐 Positioning"
  ],
  "main.gnssDisconnected": [
    "External GNSS is disconnected"
  ],
  "main.mode": [
    "Mode:"
  ],
  "main.topoFull": [
    "🌍 Full (lat/lon + heading)"
  ],
  "main.topoHeading": [
    "🧭 Heading only (for ⚓)"
  ],
  "main.courseDegrees": [
    "Heading (°):"
  ],
  "main.apply": [
    "✓ Apply"
  ],
  "main.cancel": [
    "✕ Cancel"
  ],
  "main.reset": [
    "🗑 Reset"
  ],
  "main.inactive": [
    "Mode is inactive"
  ],
  "main.addReference": [
    "Add a reference beacon"
  ],
  "main.beacon": [
    "Beacon:"
  ],
  "main.depthMeters": [
    "Depth (m):"
  ],
  "main.add": [
    "➕ Add"
  ],
  "main.activate": [
    "▶ Activate"
  ],
  "main.setHeading": [
    "🧭 Set heading"
  ],
  "main.closeIcon": [
    "✕ Close"
  ],
  "main.phiTitle": [
    "🔧 φ calibration"
  ],
  "main.angleFrom": [
    "Start angle (°):"
  ],
  "main.angleTo": [
    "End angle (°):"
  ],
  "main.angleStep": [
    "Step (°):"
  ],
  "main.points": [
    "Points:"
  ],
  "main.collectedInitial": [
    "Collected: 0"
  ],
  "main.start": [
    "▶ Start"
  ],
  "main.stop": [
    "⏹ Stop"
  ],
  "main.remoteTitle": [
    "⚙ Beacon settings"
  ],
  "main.currentAddress": [
    "Current address:"
  ],
  "main.newAddress": [
    "New address:"
  ],
  "main.salinity": [
    "Salinity (PSU):"
  ],
  "main.send": [
    "📤 Send"
  ],
  "main.analysisTitle": [
    "🔍 Log analysis"
  ],
  "main.phiKnownTitle": [
    "🔧 φ calibration using a known point"
  ],
  "main.centroid": [
    "Centroid:"
  ],
  "main.actualLatitude": [
    "Actual latitude:"
  ],
  "main.actualLongitude": [
    "Actual longitude:"
  ],
  "main.calculatePhi": [
    "Calculate φ"
  ],
  "main.calculatedPhi": [
    "Calculated φ:"
  ],
  "main.applyPhi": [
    "✓ Apply φ"
  ],
  "main.copy": [
    "📋 Copy"
  ],
  "main.downloadCSV": [
    "💾 Download CSV"
  ],
  "main.antennaTable": [
    "📡 Antenna calibration (table)"
  ],
  "main.collectedPointsInitial": [
    "Points collected: 0"
  ],
  "main.tableNotBuilt": [
    "Table has not been built"
  ],
  "main.centroidInsufficient": [
    "Centroid: insufficient data"
  ],
  "main.coverageInitial": [
    "Coverage: --"
  ],
  "main.sectorStep": [
    "Angle step (°):"
  ],
  "main.build": [
    "🔨 Build"
  ],
  "main.download": [
    "💾 Download"
  ],
  "main.fullReport": [
    "📊 Full report"
  ],
  "main.suiteDocs": [
    "📖 AzimuthWebSuite Docs"
  ],
  "main.zimaDocs": [
    "📖 Zima2 Docs"
  ],
  "main.license": [
    "⚖️ GNU GPL v3.0 License"
  ],
  "main.organization": [
    "(C) UC&NL"
  ],
  "main.openSource": [
    "Pure Open Source"
  ],
  "main.changelog": [
    "Version history"
  ],
  "main.close": [
    "Close"
  ],
  "main.pollSettings": [
    "📡 Interrogation settings"
  ],
  "main.addressMask": [
    "Address mask:"
  ],
  "main.maxRange": [
    "Max. range (m):"
  ],
  "main.soundSpeed": [
    "Sound speed (m/s):"
  ],
  "main.auto": [
    "Auto"
  ],
  "main.gnssCompass": [
    "📡 GNSS compass"
  ],
  "main.compassMode": [
    "Compass mode:"
  ],
  "main.compassAuto": [
    "Auto (prefer HDT)"
  ],
  "main.compassHDT": [
    "HDT only (True)"
  ],
  "main.compassMagnetic": [
    "Magnetic only"
  ],
  "main.baudRate": [
    "Baud rate:"
  ],
  "main.offsets": [
    "📏 Antenna offsets"
  ],
  "main.offsetX": [
    "X (m):"
  ],
  "main.offsetY": [
    "Y (m):"
  ],
  "main.antennaPhi": [
    "Antenna φ (°):"
  ],
  "main.calibration": [
    "Calibration:"
  ],
  "main.load": [
    "📂 Load"
  ],
  "main.antennaMode": [
    "📍 Antenna mode"
  ],
  "main.operatingMode": [
    "Operating mode:"
  ],
  "main.geographic": [
    "🌍 Geographic"
  ],
  "main.cartesian": [
    "📐 Cartesian (stationary)"
  ],
  "main.referenced": [
    "⚓ Reference beacons"
  ],
  "main.cartesianHint": [
    "Cartesian mode: antenna at (0,0,0), beacon coordinates in meters (X→right, Y→forward, Z→depth)"
  ],
  "main.beaconFilter": [
    "🎯 Beacon filter (DH)"
  ],
  "main.maxBeaconSpeed": [
    "Max. speed (m/s):"
  ],
  "main.beaconSpeedRange": [
    "(0.5 - 5 m/s)"
  ],
  "main.beaconFilterHint": [
    "Beacon points exceeding this speed are discarded"
  ],
  "main.shipFilter": [
    "⚓ Vessel filter (DH, reference beacon mode)"
  ],
  "main.maxShipSpeed": [
    "Max. vessel speed (m/s):"
  ],
  "main.shipSpeedRange": [
    "(0.5 - 50 m/s)"
  ],
  "main.shipFilterHint": [
    "Vessel positions exceeding this speed are discarded (⚓ Reference beacon mode only)"
  ],
  "main.beaconTracks": [
    "📐 Beacon tracks"
  ],
  "main.maxPoints": [
    "Max. points on screen:"
  ],
  "main.minDistance": [
    "Min. distance (m):"
  ],
  "main.wizardTitle": [
    "⚙ Setup"
  ],
  "main.meters": [
    "m"
  ],
  "main.metersPerSecond": [
    "m/s"
  ],
  "main.emptyBeacons": [
    "No beacon data"
  ],
  "main.language": [
    "Language"
  ],
  "main.latitudeExample": [
    "55.123456"
  ],
  "main.longitudeExample": [
    "37.654321"
  ],
  "main.zeroExample": [
    "0"
  ],
  "main.depthExample": [
    "0.0"
  ],
  "app.analysis.empty": [
    "No data to analyze. Load a log."
  ],
  "app.analysis.copied": [
    "Report copied"
  ],
  "app.analysis.copyFailed": [
    "Could not copy the report"
  ],
  "app.drms.noTracksHint": [
    "No tracks to calculate. Record beacon tracks first."
  ],
  "app.follow.antenna": [
    "Following antenna"
  ],
  "app.reference.modeHint": [
    "Reference beacon mode. Press 🧭 in the ⚓ panel to set heading, then add a reference beacon."
  ],
  "app.connection.connecting": [
    "Connecting..."
  ],
  "app.connection.requestInfo": [
    "Connected. Requesting device information..."
  ],
  "app.connection.disconnecting": [
    "Disconnecting..."
  ],
  "app.connection.beaconConnected": [
    "Beacon connected"
  ],
  "app.connection.deviceDetected": [
    "Device detected. Starting interrogation..."
  ],
  "app.interrogation.active": [
    "Interrogation active"
  ],
  "app.interrogation.stopped": [
    "Interrogation stopped"
  ],
  "app.connection.disconnected": [
    "Disconnected"
  ],
  "app.gnss.connecting": [
    "Connecting GNSS..."
  ],
  "app.connection.none": [
    "No connection"
  ],
  "app.reference.selectBeacon": [
    "Select a beacon"
  ],
  "app.reference.invalidCoordinates": [
    "Enter valid coordinates"
  ],
  "app.reference.latitudeRange": [
    "Latitude must be between -90 and 90"
  ],
  "app.reference.longitudeRange": [
    "Longitude must be between -180 and 180"
  ],
  "app.reference.deactivated": [
    "Reference beacon mode deactivated"
  ],
  "app.reference.addFirst": [
    "Add at least one reference beacon first"
  ],
  "app.reference.activated": [
    "Reference beacon mode activated"
  ],
  "app.remote.addressRange": [
    "Address must be between 1 and 16"
  ],
  "app.log.empty": [
    "No data to save"
  ],
  "app.log.saved": [
    "Log saved"
  ],
  "app.log.loadFirst": [
    "No log loaded. Open a log file using 📂 Open."
  ],
  "app.playback.started": [
    "▶ Playing..."
  ],
  "app.playback.finished": [
    "Playback finished"
  ],
  "app.tracks.clearConfirm": [
    "Clear all beacon tracks?"
  ],
  "app.tracks.cleared": [
    "Tracks cleared"
  ],
  "app.poi.loadFailed": [
    "Could not load POI. Check the file format."
  ],
  "app.poi.noneToClear": [
    "No POI to clear"
  ],
  "app.poi.cleared": [
    "POI cleared"
  ],
  "app.poi.noCoordinates": [
    "The beacon has no coordinates yet"
  ],
  "app.poi.noneToExport": [
    "No POI to export"
  ],
  "app.drms.noTracks": [
    "No tracks to calculate"
  ],
  "app.drms.insufficient": [
    "Not enough data to calculate DRMS"
  ],
  "app.phi.coordinatesRequired": [
    "Enter the actual beacon coordinates"
  ],
  "app.phi.antennaRequired": [
    "No antenna coordinates. Set geographic reference first."
  ],
  "app.drms.noneToDownload": [
    "No DRMS data to download"
  ],
  "app.view.reset": [
    "View reset"
  ],
  "app.follow.off": [
    "Following disabled"
  ],
  "app.settings.applied": [
    "Settings applied"
  ],
  "export.noTracks": [
    "No track data"
  ],
  "export.noCoordinates": [
    "No points with coordinates"
  ],
  "export.noAntennaTrack": [
    "No antenna track data"
  ],
  "export.noRelativeCoordinates": [
    "No points with relative coordinates. Geographic reference is required."
  ],
  "export.noTracksToExport": [
    "No track data to export"
  ],
  "app.log.tooShort": [
    "The log is empty or too short"
  ],
  "app.calibration.cartesianUnavailable": [
    "Antenna table calibration is unavailable in fixed antenna mode.\nGeographic reference and geographic coordinates are required."
  ],
  "export.gga.cartesianUnavailable": [
    "GGA export is unavailable in Cartesian mode.\nSet geographic reference and recalculate coordinates first."
  ],
  "export.antennaGga.cartesianUnavailable": [
    "Antenna GGA export is unavailable in Cartesian mode."
  ],
  "export.psimssb.cartesianUnavailable": [
    "PSIMSSB UTM export is unavailable in Cartesian mode.\nSet geographic reference and recalculate coordinates first."
  ],
  "export.kml.cartesianUnavailable": [
    "KML export is unavailable in Cartesian mode.\nSet geographic reference and recalculate coordinates first."
  ],
  "app.playback.speed": [
    "Playback speed: {speed}x"
  ],
  "app.remote.changed": [
    "Beacon address changed to {address}"
  ],
  "app.reference.added": [
    "Reference beacon #{address} added"
  ],
  "app.reference.removed": [
    "Reference beacon #{address} removed"
  ],
  "app.remote.commandSent": [
    "Address change command sent: {address}"
  ],
  "app.log.loaded": [
    "Loaded {count} entries"
  ],
  "app.poi.loaded": [
    "Loaded {count} POI"
  ],
  "app.poi.marked": [
    "Marked: {name}"
  ],
  "app.poi.exported": [
    "Exported {count} POI"
  ],
  "app.follow.beacon": [
    "Following beacon #{address}"
  ],
  "app.follow.noCoordinates": [
    "Beacon #{address} has no coordinates"
  ],
  "app.drms.calculated": [
    "DRMS calculated for {count} beacons"
  ],
  "app.phi.applied": [
    "φ = {phi}° applied"
  ],
  "app.theme.changed": [
    "Theme: {name}"
  ],
  "app.connection.error": [
    "Error: {error}"
  ],
  "app.connection.portError": [
    "Port error: {error}"
  ],
  "app.gnss.connected": [
    "GNSS connected ({baud})"
  ],
  "app.gnss.error": [
    "GNSS error: {error}"
  ],
  "app.remote.sendError": [
    "Send error: {error}"
  ],
  "app.log.saveSession": [
    "Session finished. {count} log entries.\nSave the log?"
  ],
  "app.poi.clearConfirm": [
    "Clear all POI ({count} points)?"
  ],
  "app.analysis.title": [
    "🔍 Log analysis"
  ],
  "app.phi.title": [
    "🔧 φ calibration (known position)"
  ],
  "app.drms.title": [
    "📊 DRMS report"
  ],
  "app.remote.addressChanged": [
    "✓ Address changed to {address}"
  ],
  "app.remote.accepted": [
    "✓ Command accepted"
  ],
  "app.remote.codeError": [
    "✗ Error: code {code}"
  ],
  "app.remote.sending": [
    "⏳ Sending..."
  ],
  "app.remote.sendFailed": [
    "✗ Send failed"
  ],
  "app.gnss.external": [
    "✓ External GNSS"
  ],
  "app.interrogation.stop": [
    "⏸ Stop"
  ],
  "app.interrogation.start": [
    "▶ Interrogate"
  ],
  "app.reference.deactivate": [
    "⏸ Deactivate"
  ],
  "app.reference.activate": [
    "▶ Activate"
  ],
  "app.empty": [
    ""
  ],
  "app.tracks.visible": [
    "📐 Tracks"
  ],
  "app.tracks.hidden": [
    "📐 Hidden"
  ],
  "app.beacon.name": [
    "Beacon #{address}"
  ],
  "app.unit.m": [
    "m"
  ],
  "app.unit.s": [
    "s"
  ],
  "app.reference.none": [
    "No reference beacons"
  ],
  "app.reference.depth": [
    "Depth: {depth} m"
  ],
  "app.reference.remove": [
    "Remove reference beacon"
  ],
  "app.reference.emptyMask": [
    "— address mask is empty —"
  ],
  "app.reference.already": [
    " (already a reference)"
  ],
  "app.reference.noData": [
    " (no data)"
  ],
  "app.reference.active": [
    "✅ Mode active ({count} references)"
  ],
  "app.reference.ready": [
    "⚪ Ready to activate ({count} references)"
  ],
  "app.reference.inactive": [
    "⚪ Mode inactive"
  ],
  "app.reference.sourcesSpread": [
    "📊 Sources: {count}, spread: {spread} m"
  ],
  "app.reference.sources": [
    "📊 Sources: {count}"
  ],
  "app.reference.shipPosition": [
    "Ship position:"
  ],
  "app.reference.age": [
    "⏱ Age: {age} s"
  ],
  "app.reference.waiting": [
    "⏳ Waiting for reference beacon data..."
  ],
  "app.reference.waitingHint": [
    "Ensure beacons are being interrogated (▶ Interrogate button) and included in the address mask."
  ],
  "app.reference.addRequired": [
    "⚠ Add at least one reference beacon."
  ],
  "app.reference.positionHint": [
    "Position calculated from reference beacons"
  ],
  "app.reference.positionWaiting": [
    "⚓ waiting..."
  ],
  "app.reference.quality": [
    "±{spread}m ({count}×, {age}s)"
  ],
  "app.beacon.mark": [
    "Mark point"
  ],
  "app.page.unsaved": [
    "There are unsaved tracks or log data. Are you sure you want to close the page?"
  ],
  "export.kml.title": [
    "Zima2 Tracks"
  ],
  "export.kml.stationTrack": [
    "Station Track"
  ],
  "export.kml.beacon": [
    "Beacon #{address}"
  ],
  "export.kml.marked": [
    "Marked by operator"
  ],
  "export.kml.loaded": [
    "Loaded from CSV"
  ],
  "export.kml.description": [
    "Type: {type}\n                    Time: {time}\n                    Depth: {depth}"
  ],
  "app.rawStatus": [
    "{message}"
  ],
  "app.device.transponder": [
    "Transponder"
  ],
  "app.device.address": [
    "(address {address})"
  ],
  "app.device.configureAddress": [
    "Configure address"
  ],
  "app.connection.disconnectButton": [
    "⏏ AZM"
  ],
  "app.connection.connectButton": [
    "🔌 AZM"
  ],
  "app.gnss.disconnectButton": [
    "⏏ GNSS"
  ],
  "app.gnss.connectButton": [
    "📡 GNSS"
  ],
  "report.drms.cartesian": [
    "Beacon #{address}: DRMS={drms}m, 2DRMS={drms2}m, 3DRMS={drms3}m, σX={sigmaX}m, σY={sigmaY}m, points={count}\n  Centroid: X={x}m, Y={y}m\n\n"
  ],
  "report.drms.geographic": [
    "Beacon #{address}: DRMS={drms}m, 2DRMS={drms2}m, 3DRMS={drms3}m, σX={sigmaX}m, σY={sigmaY}m, points={count}\n  Centroid: {lat}, {lon}\n\n"
  ],
  "report.empty": [
    "No data to analyze."
  ],
  "report.general": [
    "📊 General statistics"
  ],
  "report.duration.label": [
    "Duration:"
  ],
  "report.entries": [
    "Total entries:"
  ],
  "report.commands": [
    "Commands:"
  ],
  "report.beacons": [
    "📡 Beacons"
  ],
  "report.beacons.empty": [
    "No beacon data in the log"
  ],
  "report.success": [
    "Success:"
  ],
  "report.range": [
    "Avg. range:"
  ],
  "report.msr": [
    "Avg. MSR:"
  ],
  "report.compass": [
    "🧭 Compass"
  ],
  "report.headingJumps": [
    "Heading jumps (>30°/s):"
  ],
  "report.maxHeadingRate": [
    "Max. heading change rate:"
  ],
  "report.noise.high": [
    "⚠️ Very high noise"
  ],
  "report.noise.elevated": [
    "⚠️ Elevated noise"
  ],
  "report.noise.acceptable": [
    "Acceptable noise level"
  ],
  "report.noise.excellent": [
    "✅ Excellent data quality"
  ],
  "report.maxJump": [
    "Max. jump:"
  ],
  "report.gnssGaps": [
    "GNSS gaps (>5s):"
  ],
  "report.avgSpeed": [
    "Avg. speed:"
  ],
  "report.duration.value": [
    "{minutes} min {seconds} s"
  ],
  "report.headingRate.detail": [
    " (Δ{delta}° over {duration}s, instantaneous: {rate}°/s)"
  ],
  "report.headingJump.value": [
    "{from}° → {to}° over {duration}s ({rate}°/s)"
  ],
  "app.diagnostic.storageUnavailable": [
    "IndexedDB unavailable:"
  ],
  "app.diagnostic.initializing": [
    "[App] Initializing..."
  ],
  "app.diagnostic.noCanvas": [
    "[App] Canvas not found!"
  ],
  "app.diagnostic.initialized": [
    "[App] Initialization complete"
  ],
  "app.diagnostic.closePrevious": [
    "[App] Closing previous connection..."
  ],
  "app.diagnostic.closePreviousError": [
    "[App] Error closing previous connection:"
  ],
  "app.diagnostic.connectionError": [
    "[App] Connection error:"
  ],
  "app.diagnostic.closeError": [
    "[App] Error closing connection:"
  ],
  "app.diagnostic.autoInterrogation": [
    "[Serial] → automatic interrogation start"
  ],
  "app.diagnostic.portError": [
    "[App] Port error:"
  ],
  "app.diagnostic.closed": [
    "[App] Connection closed"
  ],
  "app.diagnostic.gnssError": [
    "[GNSS] Error:"
  ],
  "app.diagnostic.startInterrogation": [
    "[Serial] → interrogation start"
  ],
  "app.diagnostic.stopInterrogation": [
    "[Serial] → interrogation stop"
  ],
  "app.diagnostic.loadError": [
    "[App] Error loading log:"
  ],
  "app.diagnostic.anchorSet": [
    "[App] Anchor set from reference beacon:"
  ],
  "app.diagnostic.closingPage": [
    "[App] Closing page, releasing port..."
  ],
  "app.log.diagnostic.firstBeacon": [
    "[Logger] First beacon point (status=1) found at index"
  ],
  "app.log.diagnostic.noBeacon": [
    "[Logger] No beacon points, starting at index"
  ],
  "app.log.diagnostic.storageRead": [
    "[Logger] Error reading IndexedDB:"
  ],
  "app.log.diagnostic.skipStart": [
    "[Logger] Starting at index (with skipping):"
  ],
  "app.log.diagnostic.start": [
    "[Logger] Starting at index (without skipping):"
  ],
  "app.log.diagnostic.indexOffset": [
    "[Logger] Starting at index {index} (beacon point offset: {offset} entries)"
  ],
  "export.diagnostic.antennaGga": [
    "[Export] Exported {count} antenna points to GGA"
  ],
  "module.calibration.count": [
    "Collected: {count}"
  ],
  "module.calibration.zero": [
    "Collected: 0"
  ],
  "module.calibration.started": [
    "Calibration started"
  ],
  "module.calibration.completed": [
    "Calibration completed. φ = {phi}°"
  ],
  "module.calibration.phi": [
    "✓ φ = {phi}°"
  ],
  "module.calibration.rejected": [
    "Rejected"
  ],
  "module.calibration.cancelled": [
    "Calibration rejected"
  ],
  "module.calibration.tooFew": [
    "Not enough points for calibration"
  ],
  "module.calibration.tooFewShort": [
    "Not enough points"
  ],
  "module.calibration.loadError": [
    "Loading error: {error}"
  ],
  "module.calibration.parserMissing": [
    "Calibration file parser is not configured"
  ],
  "module.calibration.loaded": [
    "Calibration loaded: {count} points"
  ],
  "module.calibration.formatError": [
    "File format error: {error}"
  ],
  "module.calibration.resetConfirm": [
    "Reset the antenna calibration table?"
  ],
  "module.calibration.reset": [
    "Calibration reset"
  ],
  "module.calibration.tableLoaded": [
    "✓ Loaded {count} points"
  ],
  "module.calibration.confirm": [
    "Calibration completed.\n\nφ = {phi}°\nCollected points: {count}\n\nApply this value?"
  ],
  "module.antennaCalibration.collecting": [
    "⚡ Collecting... Points collected: {count}"
  ],
  "module.antennaCalibration.count": [
    "Points collected: {count}"
  ],
  "module.antennaCalibration.sectors": [
    "Sectors: {used}/{total} ({coverage}%)"
  ],
  "module.antennaCalibration.noTable": [
    "Table not built"
  ],
  "module.antennaCalibration.centroid": [
    "Centroid: {lat}°, {lon}°"
  ],
  "module.antennaCalibration.noCentroid": [
    "Centroid: not enough data"
  ],
  "module.antennaCalibration.coverage": [
    "Coverage: {coverage}%"
  ],
  "module.antennaCalibration.noCoverage": [
    "Coverage: --"
  ],
  "module.antennaCalibration.started": [
    "📡 Antenna calibration: collecting points..."
  ],
  "module.antennaCalibration.stopped": [
    "Collection stopped. {count} points collected"
  ],
  "module.antennaCalibration.buildFailed": [
    "Could not build the table. Not enough data."
  ],
  "module.antennaCalibration.built": [
    "✅ Table built: {used} sectors, coverage {coverage}%"
  ],
  "module.antennaCalibration.applied": [
    "✅ Calibration table applied"
  ],
  "module.antennaCalibration.loaded": [
    "Table loaded into AntennaCorrector"
  ],
  "module.antennaCalibration.noApply": [
    "No table to apply"
  ],
  "module.antennaCalibration.downloaded": [
    "💾 Table downloaded"
  ],
  "module.antennaCalibration.fullDownloaded": [
    "💾 Full data downloaded"
  ],
  "module.antennaCalibration.instructions": [
    "Click ▶ Start, then ▶ Play log"
  ],
  "module.ruler.first": [
    "📏 Ruler: click to set the first point"
  ],
  "module.ruler.off": [
    "📏 Ruler off"
  ],
  "module.ruler.cancel": [
    "📏 Cancel"
  ],
  "module.ruler.button": [
    "📏 Ruler"
  ],
  "module.ruler.second": [
    "📏 Ruler: select the second point"
  ],
  "module.ruler.clickSecond": [
    "📏 Ruler: click to set the second point"
  ],
  "module.ruler.distance": [
    "📏 Ruler: distance {distance} m. Click to start a new line"
  ],
  "module.unit.meters": [
    "{value} m"
  ],
  "module.canvas.antenna": [
    "ANT"
  ],
  "module.canvas.rejected": [
    "REJECTED"
  ],
  "module.unit.kilometers": [
    "{value} km"
  ],
  "module.topo.referencePlaceholder": [
    "(from references)"
  ],
  "module.topo.referenceHint": [
    "⚓ Coordinates will be calculated from reference beacons. Set only the antenna heading."
  ],
  "module.topo.overwriteHint": [
    "⚠ Antenna mode: ⚓ reference beacons. Coordinates will be overwritten."
  ],
  "module.topo.gnssConnected": [
    "✓ External GNSS connected"
  ],
  "module.topo.gnssDisconnected": [
    "External GNSS disconnected"
  ],
  "module.topo.gpsUnavailable": [
    "GPS unavailable"
  ],
  "module.topo.gpsSearching": [
    "Searching for GPS..."
  ],
  "module.topo.error": [
    "Error: {error}"
  ],
  "module.topo.stable": [
    "Stable"
  ],
  "module.topo.unstable": [
    "Unstable"
  ],
  "module.topo.measuring": [
    "Measuring..."
  ],
  "module.topo.enterHeading": [
    "Enter the heading (antenna direction, 0–360°)"
  ],
  "module.topo.headingRange": [
    "Heading: 0…360°"
  ],
  "module.topo.enterCoordinates": [
    "Enter coordinates (or switch to “Heading only” mode)"
  ],
  "module.topo.latitudeRange": [
    "Latitude: -90…90"
  ],
  "module.topo.longitudeRange": [
    "Longitude: -180…180"
  ],
  "module.topo.headingApplied": [
    "Antenna heading: {heading}° (coordinates from reference beacons)"
  ],
  "module.topo.bindingApplied": [
    "Position binding: {lat}, {lon}, {heading}°"
  ],
  "module.topo.reset": [
    "Position binding reset"
  ],
  "module.topo.bindingLoaded": [
    "Binding loaded: {lat}, {lon}, {heading}°"
  ],
  "module.topo.headingLoaded": [
    "Heading loaded: {heading}° (coordinates from reference beacons)"
  ],
  "module.corrector.arrayLength": [
    "Arrays must have the same length"
  ],
  "module.corrector.minimum": [
    "The table must contain at least 2 points"
  ],
  "module.corrector.columns": [
    "Line {line}: expected 2 columns"
  ],
  "module.corrector.numbers": [
    "Line {line}: invalid number format"
  ],
  "module.corrector.points": [
    "Not enough points: {count}"
  ],
  "module.antennaCalibration.insufficientSectors": [
    "Not enough data.\nSectors with data: {sectors}/{total}\nSectors with >={minimum} points: {qualified}\nTry increasing the angle step or reducing the minimum point count"
  ],
  "module.antennaCalibration.noDownload": [
    "No data to download"
  ],
  "module.antennaCalibration.noExport": [
    "No data to export"
  ],
  "module.wizard.antennaTitle": [
    "⚙ Antenna mode"
  ],
  "module.wizard.referenceTitle": [
    "⚙ Reference beacons"
  ],
  "module.wizard.topoTitle": [
    "⚙ Antenna coordinates"
  ],
  "module.wizard.gnssTitle": [
    "⚙ GNSS compass connection"
  ],
  "module.wizard.fixedQuestion": [
    "Is the antenna stationary?"
  ],
  "module.wizard.fixed": [
    "Stationary"
  ],
  "module.wizard.fixedHint": [
    "Pier or secured vessel"
  ],
  "module.wizard.moving": [
    "Moving"
  ],
  "module.wizard.movingHint": [
    "Boat or buoy"
  ],
  "module.wizard.skip": [
    "✕ Skip"
  ],
  "module.wizard.next": [
    "Next →"
  ],
  "module.wizard.referenceQuestion": [
    "Is there a beacon with known coordinates?"
  ],
  "module.wizard.no": [
    "No"
  ],
  "module.wizard.normalHint": [
    "Standard mode (GNSS or position binding)"
  ],
  "module.wizard.referenceYes": [
    "Yes, use reference beacons ⚓"
  ],
  "module.wizard.referenceHint": [
    "Vessel coordinates from a reference beacon"
  ],
  "module.wizard.back": [
    "← Back"
  ],
  "module.wizard.finish": [
    "Done ✓"
  ],
  "module.wizard.topoQuestion": [
    "Do you know the antenna coordinates and heading?"
  ],
  "module.wizard.cartesianHint": [
    "Work in X,Y,Z meters relative to the antenna"
  ],
  "module.wizard.topoYes": [
    "Yes, enter them now"
  ],
  "module.wizard.topoHint": [
    "Geographic coordinates will be available"
  ],
  "module.wizard.movingCompass": [
    "The antenna is moving — an external compass is required."
  ],
  "module.wizard.baud": [
    "Port baud rate:"
  ],
  "module.wizard.connect": [
    "📡 Connect and check"
  ],
  "module.wizard.disconnected": [
    "Disconnected"
  ],
  "module.wizard.referenceDescription": [
    "This beacon can serve as a reference — vessel coordinates will be calculated from it without GNSS."
  ],
  "module.wizard.dontShow": [
    "Do not show again"
  ],
  "module.wizard.connecting": [
    "⏳ Connecting..."
  ],
  "module.wizard.connected": [
    "✓ Connected"
  ],
  "module.wizard.notConnected": [
    "✗ Disconnected"
  ],
  "module.wizard.error": [
    "✗ Error: {error}"
  ],
  "module.topo.coordinatesReceived": [
    "✓ Coordinates received ({lat}, {lon})"
  ],
  "module.topo.compassStarting": [
    "Starting compass..."
  ],
  "module.topo.azimuth": [
    "🧭 Azimuth: {heading}°"
  ],
  "module.topo.holdHorizontal": [
    "📱 Hold the device horizontally"
  ],
  "module.topo.alignAntenna": [
    "➡️ Align it with the antenna zero direction"
  ],
  "module.topo.stableAzimuth": [
    "✅ Azimuth is stable: {heading}°"
  ],
  "module.topo.canApply": [
    "Position binding can now be applied"
  ],
  "module.common.empty": [
    ""
  ],
  "module.calibration.loadDiagnostic": [
    "[UICalibration] Loading error:"
  ],
  "module.calibration.saveDiagnostic": [
    "Could not save calibration:"
  ],
  "module.calibration.storageDiagnostic": [
    "Error loading calibration from storage:"
  ],
  "module.manager.error": [
    "[AZM Manager] Error:"
  ],
  "module.poi.saveError": [
    "[POI] Could not save:"
  ],
  "module.poi.loadError": [
    "[POI] Loading error:"
  ],
  "module.storage.openError": [
    "[LogStorage] Error opening IndexedDB:"
  ],
  "module.storage.writeError": [
    "[LogStorage] Write error:"
  ],
  "module.storage.transactionError": [
    "[LogStorage] Transaction error:"
  ],
  "module.storage.readError": [
    "[LogStorage] Read error:"
  ],
  "module.storage.readTransactionError": [
    "[LogStorage] Read transaction error:"
  ],
  "module.storage.clearError": [
    "[LogStorage] Clear error:"
  ],
  "module.storage.clearTransactionError": [
    "[LogStorage] Clear transaction error:"
  ]
};
  languages.forEach(([code, name], column) => {
    const catalog = Object.fromEntries(Object.entries(messages)
      .filter(([, values]) => typeof values[column] === 'string')
      .map(([key, values]) => [key, values[column]]));
    I18n.registerLanguage(code, name, catalog);
  });
})();
