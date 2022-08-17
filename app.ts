import socketClusterClient from "socketcluster-client";

for (let i = 0; i < 5000; i++) {
	let socket = socketClusterClient.create({
		hostname: "internet-facing-371961340.ap-southeast-1.elb.amazonaws.com",
		port: 80,
	});
	console.log("connected");
}
