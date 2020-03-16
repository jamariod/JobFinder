if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords;
        let pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        $.getJSON(`https://geocode.xyz/${latitude},${longitude}?json=1`, function (data) {
            let state = `${data.statename}`
            let city = `${data.city}`
            console.log(state)
            console.log(city)
        });
        const currentLocation = `https://geocode.xyz/${latitude},${longitude}?json=1`
        console.log(currentLocation)



    })
};
