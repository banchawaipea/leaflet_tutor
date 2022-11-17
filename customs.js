// lat = 13, long = 100 zoom ครั้งแรกที่เรียกหน้าเว็บ
const map = L.map('map', {
    // remove Zoom Control
    zoomControl: false
}).setView([13.5, 100.5], 10);


// BASE MAP
// const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
const tiles = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
// const tiles = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
// ตั้งค่า Zoom ได้แบบ ไม่มีจำกัด
    maxNativeZoom: 200,
    maxZoom: 200,
    attribution: '&copy; <a href="#">Developed By นายบัญชา ไวเปีย</a>',

}).addTo(map);

// ปิดการแสดง Leaflet ที่มุมขวา
map.attributionControl.setPrefix(false)


// Add Point Marker
var marker = L.marker([13.771399, 100.416523]).addTo(map);

// Add วงกลม 
var circle = L.circle([13.852747, 100.463344], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 1000
}).addTo(map);

// Add Polygon 
var polygon = L.polygon([
    [13.644652, 100.514209],
    [13.583256, 100.745167],
    [13.754059, 100.665432]
]);
polygon.addTo(map);

