const mqtt = require('mqtt');

/*
 pass Mqtt broker location i hosted locally or remotly
 if you need to get the offline messages (you need to be subscribed first)
 client needs an unique id (string) and set clean to false
*/
const client  = mqtt.connect('mqtt://localhost', {clientId: '12345', clean: false});

client.on('connect', () => {
	client.subscribe('myTopic');
});

client.on('message', (topic, message) => {
	// message is buffer
	let context = message.toString();
	console.log(context)
});

/*
for more info check
https://github.com/mqttjs/MQTT.js
*/
