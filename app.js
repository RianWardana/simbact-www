(function() {

    client = new Paho.MQTT.Client("test.mosquitto.org", Number(8081), Math.random().toString(16).replace(/[^a-z]+/g, '').substr(0, 5));
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;
    client.connect({onSuccess:onConnect, useSSL: true});

    function onConnect() {
        console.log("Komunikasi terhubung.");
        client.subscribe("proyekdo/001/oxy");
        client.subscribe("proyekdo/001/temp");
    }

    function onConnectionLost() {
        alert("Koneksi terputus.");
    }

    function onMessageArrived(message) {
        if (message.destinationName == "proyekdo/001/oxy") oxy.innerHTML = message.payloadString;
        else if (message.destinationName == "proyekdo/001/temp") temp.innerHTML = message.payloadString;
    }
}())
