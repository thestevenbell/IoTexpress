  var socket = io();

  socket.on('weather', function(msg){
    $('#messages').append($('<li>').text("Temperature " + msg.temperature + "F, Humidity " + msg.humidity + "%"));
  });
