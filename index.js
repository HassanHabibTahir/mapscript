let map;
// function myMap() {
//     var mapProp= {
//       center:new google.maps.LatLng(51.508742,-0.120850),
//       zoom:5,
//     };
//     var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
//     }
function myMap() {
    const mapProp = {
        center: new google.maps.LatLng(-25.344, 131.031),
        zoom: 4,
      
    };

    map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    const trees = {
        2018: [
            { location: { lat: 40.712776, lng: -74.005974 }, value: 10, TotalTrees: 10 },
            { location: { lat: 34.052235, lng: -118.243683 }, value: 20, TotalTrees: 20 },
        ],
        2019: [
            { location: { lat: 37.774929, lng: -122.419418 }, value: 15, TotalTrees: 15 },
            { location: { lat: 51.507351, lng: -0.127758 }, value: 25, TotalTrees: 25 },
        ],
        2020: [
            { location: { lat: 48.856613, lng: 2.352222 }, value: 30, TotalTrees: 30 },
            { location: { lat: 39.904202, lng: 116.407394 }, value: 35, TotalTrees: 35 },
        ],
        2024: [
            { location: { lat: 0.0, lng: 0.0 }, value: 500, TotalTrees: 500 },
        ],
    };

    let totalTreesPerYear = {};

    for (const [year, data] of Object.entries(trees)) {
        totalTreesPerYear[year] = 0;
        data.forEach(tree => {
            new google.maps.Marker({
                position: tree.location,
                map: map,
                title: `Year: ${year}, Value: ${tree.value}, Total Trees: ${tree.TotalTrees}`,
                icon:"marker.png"
            });
            totalTreesPerYear[year] += tree.TotalTrees;
        });
    }

    drawLineGraph(totalTreesPerYear);
}

function drawLineGraph(totalTreesPerYear) {
    const ctx = document.getElementById('treeLineGraph').getContext('2d');
    const labels = Object.keys(totalTreesPerYear);
    const data = Object.values(totalTreesPerYear);

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Total Trees',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
