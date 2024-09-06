let map;
async function myMap() {
    const mapProp = {
        center: new google.maps.LatLng(-25.344, 131.031),
        zoom: 4,
      
    };

    map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    const response = await fetch('data.json');
    const trees = await response.json();
  
    let totalTreesPerYear = {};

    for (const [year, data] of Object.entries(trees)) {
        totalTreesPerYear[year] = 0;
        data.forEach(tree => {
            new google.maps.Marker({
                position: tree.Location,
                map: map,
                title: `Year: ${year}, Value: ${tree.Qty}, Total Trees: ${tree.TotalTrees}`,
                icon: {
                    url: "marker.png",
                    labelOrigin: new google.maps.Point(35, 50) 
                },
                label: {
                    text: `\n\n\n\n\n\n\n\n ${tree.Qty}`,
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    
                }
            });
            totalTreesPerYear[year] += tree.Qty;
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
                fill: false,
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


