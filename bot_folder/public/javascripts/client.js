// connect to the socket server
var socket - io.connect();

//if we get an "info" emit from the socket server then console.log the data we receive
socket.on('info', function (data) {
	console.log(data);
});
