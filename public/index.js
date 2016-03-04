  var socket = io();

  socket.on('weather', function(msg){
    $('#messages').append($('<li>').text("Emitting Data:  Temperature " + msg.temperature + "F, Humidity " + msg.humidity + "%"));
  });
