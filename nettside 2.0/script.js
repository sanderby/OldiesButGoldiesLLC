//Initializing map
let map = L.map("map").setView([63.86204132609319, 8.623834742193292], 13);

//Adding Openstreetmap layer to the map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

//Adding red marker to Mausund
let mausund = L.marker([63.87294641816426, 8.639448853559694]).addTo(map);
mausund.bindPopup(
  "<b>Mausund Feltstasjon</b><br>Et forskningssted i Trøndelag."
);

//Variables for map objects
let marker = null,
  markerPosition = null,
  circles = [];

//variables for buttons
let addButton = document.querySelector("#add"),
  resetButton = document.querySelector("#reset"),
  trashSelect = document.querySelector("#trash");

//function adding marker to clicked location
map.on("click", function (e) {
  let lat = e.latlng.lat;
  let lng = e.latlng.lng;

  if (marker) {
    marker
      .setLatLng(e.latlng)
      .bindPopup(lat.toFixed(4) + ", " + lng.toFixed(4));
  } else {
    marker = L.marker([lat, lng])
      .addTo(map)
      .bindPopup(lat.toFixed(4) + ", " + lng.toFixed(4));
  }
  markerPosition = e.latlng;
  addButton.disabled = false; //skrur på knapp
});

//Adding circle on map
function addCircle() {
  if (markerPosition) {
    let trashValue = trashSelect.value;
    
    //Choosing color of circle
    let color = 'green';
    if (trashValue === 'medium') {
      color = 'yellow';
    } else if (trashValue === 'high') {
      color = 'red';
    }

    //Adding circle
    let newCircle = L.circle(markerPosition, {
      color: color,
      fillColor: color,
      fillOpacity: 0.5,
      radius: 50
    }).addTo(map);
    
    //ADding circle to array
    circles.push(newCircle);

    //Remove circle
    map.removeLayer(marker);
    marker = null;
    markerPosition = null;
    
    //Disable button
    addButton.disabled = true;
  }
}

//Reseting function
function resetCircles() {
  circles.forEach(circle => {
    map.removeLayer(circle);
  });
  circles = [];
}

//Event listener for add
addButton.addEventListener('click', addCircle);

//Event listener for Reset
resetButton.addEventListener('click', resetCircles);

