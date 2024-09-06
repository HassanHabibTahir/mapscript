let map;
// function myMap() {
//     var mapProp= {
//       center:new google.maps.LatLng(51.508742,-0.120850),
//       zoom:5,
//     };
//     var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
//     }
async function myMap() {
    const mapProp = {
        center: new google.maps.LatLng(-25.344, 131.031),
        zoom: 4,
    };
    map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    const response = await fetch('data.json');
    const trees = await response.json();
    const geocoder = new google.maps.Geocoder();
    let totalTreesPerYear = {};



     function geocodeAddress(address) {
        console.log(address,"address")

        geocoder.geocode( { 'address': address}, function(results, status) {
      console.log(results,"results");
            // if (status == google.maps.GeocoderStatus.OK) {
            //     var latitude = results[0].geometry.location.latitude;
            //     var longitude = results[0].geometry.location.longitude;
            
            //     // alert(latitude);
            //     } 
            });


        // return new Promise((resolve, reject) => {
        //     geocoder.geocode({ address }, (results, status) => {
                
        //         if (status === 'OK' && results[0]) {
        //             const { lat, lng } = results[0].geometry.location;
        //             resolve({ lat: lat(), lng: lng() });
        //         } else {
        //             reject('Geocode was not successful for the following reason: ' + status);
        //         }
        //     });
        // });
    }

    function filterValidLocations(data) {
        return data.filter(tree => tree.Location && tree.Location.trim());
    }
    for (const [year, data] of Object.entries(trees)) {
        const filteredData = filterValidLocations(data);
        for (const tree of filteredData) {
         
            const coords = await geocodeAddress(tree.Location);
        // console.log(coords,"coords");
                // try {
                    // const { lat, lng } = await geocodeAddress(tree.Location);
                    // tree.location = new google.maps.LatLng(lat, lng);
                    // totalTreesPerYear[year] = (totalTreesPerYear[year] || 0) + tree.TotalTrees;
                // } catch (error) {
                    // console.error(`Error geocoding address for ${tree.Location}:`, error);
                // }
            

        }
    }




//    
//     const treesDataScript = document.getElementById('treesData');
//     const trees = JSON.parse(treesDataScript.textContent);
//     // const trees = {
//     //     2018: [
//     //         { location: { lat: 40.712776, lng: -74.005974 }, value: 10, TotalTrees: 10 },
//     //         { location: { lat: 34.052235, lng: -118.243683 }, value: 20, TotalTrees: 20 },
//     //     ],
//     //     2019: [
//     //         { location: { lat: 37.774929, lng: -122.419418 }, value: 15, TotalTrees: 15 },
//     //         { location: { lat: 51.507351, lng: -0.127758 }, value: 25, TotalTrees: 25 },
//     //     ],
//     //     2020: [
//     //         { location: { lat: 48.856613, lng: 2.352222 }, value: 30, TotalTrees: 30 },
//     //         { location: { lat: -37.904202, lng: 116.407394 }, value: 35, TotalTrees: 35 },
//     //     ],
//     //     2024: [
//     //         { location: { lat: 0.0, lng: 0.0 }, value: 500, TotalTrees: 500 },
//     //         { location: { lat: -34.397, lng: 150.644 }, value: 600, TotalTrees: 600 },
//     //         { location: { lat: -37.8136, lng: 144.9631 }, value: 700, TotalTrees: 700 },
//     //         { location: { lat: -36.8485, lng: 174.7633 }, value: 800, TotalTrees: 800 },
//     //     ],
//     // };

//     let totalTreesPerYear = {};

//     for (const [year, data] of Object.entries(trees)) {
//         totalTreesPerYear[year] = 0;
//         data.forEach(tree => {
//             new google.maps.Marker({
//                 position: tree.location,
//                 map: map,
//                 title: `Year: ${year}, Value: ${tree.value}, Total Trees: ${tree.TotalTrees}`,
//                 icon: {
//                     url: "marker.png",
//                     labelOrigin: new google.maps.Point(35, 50) 
//                 },
//                 label: {
//                     text: `\n\n\n\n\n\n\n\n ${tree.value}`,
//                     fontSize: "1.2rem",
//                     fontWeight: "bold",
                    
//                 }
//             });
//             totalTreesPerYear[year] += tree.TotalTrees;
//         });
//     }

//     drawLineGraph(totalTreesPerYear);
// }

// function drawLineGraph(totalTreesPerYear) {
//     const ctx = document.getElementById('treeLineGraph').getContext('2d');
//     const labels = Object.keys(totalTreesPerYear);
//     const data = Object.values(totalTreesPerYear);

//     new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: labels,
//             datasets: [{
//                 label: 'Total Trees',
//                 data: data,
//                 backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                 borderColor: 'rgba(75, 192, 192, 1)',
//                 borderWidth: 2,
//                 fill: true,
//                 tension: 0.4
//             }]
//         },
//         options: {
//             scales: {
//                 y: {
//                     beginAtZero: true
//                 }
//             }
//         }
//     });
}
