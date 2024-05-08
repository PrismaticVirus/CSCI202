const iss = document.getElementById("iss");
const orbit = document.getElementById('orbit');

const orbitRadius = 150;

orbit.style.width = 2 * orbitRadius + "px";
orbit.style.height = 2 * orbitRadius + "px";

// Convert the longitute into X and Y 
function getCords(longitude, radius) {

    // Convert longitude to radians
    const radians = longitude * (Math.PI / 180);

    // Math
    const x = radius * Math.cos(radians);
    const y = radius * Math.sin(radians);

    // More Math

    const centerX = (window.innerWidth / 2) + x;
    const centerY = (window.innerHeight / 2) + y;

    return { x: centerX - 30, y: centerY - 30 };

}
function fetchData(){
fetch("http://api.open-notify.org/iss-now.json")

    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })

    .then(data => {
        const longitude = data.iss_position.longitude;

        iss.style.left = getCords(longitude, orbitRadius).x + "px";
        iss.style.top = getCords(longitude, orbitRadius).y + "px";
        

    })

    .catch(error => {
        console.error('Fetch error:', error);
    });

}

fetchData();

setInterval(fetchData, 5000);

window.addEventListener('resize', fetchData);
