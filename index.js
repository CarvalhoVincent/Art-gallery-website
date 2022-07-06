var map = L.map('map', {
    zoomControl: false,
    center: ([41.4823, -71.3103])
}).setView([41.482149, -71.311064], 15);
var icon = L.icon({
    iconUrl: './assets/icon-location.svg'
});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([41.48274991333008, -71.31236428710938], {icon: icon}).addTo(map);

