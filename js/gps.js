function showPosition(position) {
    console.log("Latitude" + position.coords.latitude);
    console.log("Longitude" + position.coords.longitude);
    console.log("Speed" + position.coords.speed);

    document.getElementById('lat').innerHTML = position.coords.latitude
    document.getElementById('lon').innerHTML = position.coords.latitude

}

if (navigator.geolocation) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
                showPosition),
            null, {
                enableHighAccuracy: true,
                maximunAge: 60000,
                timeout: 1000
            }
    }
}