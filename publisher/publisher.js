const mqtt = require('mqtt');
/*
 Mqtt broker location, use localhost if your hosting the broker or
 use the url if the broker is hosted remotly such as
  mqtt://test.mosquitto.org for testing, DON'T GO TO PROD With IT
*/
const client  = mqtt.connect('mqtt://localhost');
let counter = 0;

client.on('connect', () => {
	setInterval(() => {
		client.publish('myTopic', 'Hi mqtt ' + counter++, {qos: 1});
		console.log('Message Sent');
	}, 5000);
});

/*
for more info check
https://github.com/mqttjs/MQTT.js
*/
