//First example
// (function() {
//     // Example data object with locations
//     var trees = {
//         2018: [
//             { location: { lat: 40.712776, lng: -74.005974 }, value: 10 },
//             { location: { lat: 34.052235, lng: -118.243683 }, value: 20 }
//         ],
//         2019: [
//             { location: { lat: 37.774929, lng: -122.419418 }, value: 15 },
//             { location: { lat: 51.507351, lng: -0.127758 }, value: 25 }
//         ],
//         2020: [
//             { location: { lat: 48.856613, lng: 2.352222 }, value: 30 },
//             { location: { lat: 39.904202, lng: 116.407394 }, value: 35 }
//         ]
//     };

//     // Function to initialize the Leaflet map
//     function initMap() {
//         // Check if the map container exists
//         var mapContainer = document.getElementById('show-google-map');
//         if (!mapContainer) {
//             console.error('Map container with ID "show-google-map" not found.');
//             return;
//         }

//         // Create a map centered at the first location or any default location
//         var map = L.map('show-google-map').setView([20.0, 0.0], 2);

//         // Add the OpenStreetMap tiles
//         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//             maxZoom: 18,
//         }).addTo(map);

//         // Iterate over the data object and place markers on the map
//         for (var year in trees) {
//             if (trees.hasOwnProperty(year)) {
//                 trees[year].forEach(function(tree) {
//                     L.marker([tree.location.lat, tree.location.lng])
//                         .addTo(map)
//                         .bindPopup(`Year: ${year}<br>Value: ${tree.value}`);
//                 });
//             }
//         }
//     }

//     // Load Leaflet CSS and JS dynamically
//     function loadLeafletAssets(callback) {
//         var leafletCSS = document.createElement('link');
//         leafletCSS.rel = 'stylesheet';
//         leafletCSS.href = 'https://unpkg.com/leaflet@1.9.3/dist/leaflet.css';
//         document.head.appendChild(leafletCSS);

//         var leafletJS = document.createElement('script');
//         leafletJS.src = 'https://unpkg.com/leaflet@1.9.3/dist/leaflet.js';
//         leafletJS.onload = callback;
//         document.head.appendChild(leafletJS);
//     }

//     // Load Leaflet and initialize the map
//     document.addEventListener('DOMContentLoaded', function() {
//         loadLeafletAssets(initMap);
//     });
// })();
// Second Example
(function() {
    // Function to initialize the Leaflet map
    function initMap() {
        // Check if the map container exists
        var mapContainer = document.getElementById('show-google-map');
        if (!mapContainer) {
            console.error('Map container with ID "show-google-map" not found.');
            return;
        }

        // Create a map centered at the first location or any default location
        var map = L.map('show-google-map').setView([20.0, 0.0], 2);

        // Add the OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
        }).addTo(map);

        // Access the 'trees' data from the global window object
        var trees = window.trees;

        // Iterate over the data object and place markers on the map
        for (var year in trees) {
            if (trees.hasOwnProperty(year)) {
                trees[year].forEach(function(tree) {
                    L.marker([tree.location.lat, tree.location.lng])
                        .addTo(map)
                        .bindPopup(`Year: ${year}<br>Value: ${tree.value}`);
                });
            }
        }
    }

    // Load Leaflet CSS and JS dynamically
    function loadLeafletAssets(callback) {
        var leafletCSS = document.createElement('link');
        leafletCSS.rel = 'stylesheet';
        leafletCSS.href = 'https://unpkg.com/leaflet@1.9.3/dist/leaflet.css';
        document.head.appendChild(leafletCSS);

        var leafletJS = document.createElement('script');
        leafletJS.src = 'https://unpkg.com/leaflet@1.9.3/dist/leaflet.js';
        leafletJS.onload = callback;
        document.head.appendChild(leafletJS);
    }

    // Load Leaflet and initialize the map
    document.addEventListener('DOMContentLoaded', function() {
        loadLeafletAssets(initMap);
    });
})();
