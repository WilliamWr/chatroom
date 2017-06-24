




//This was attempt
// our group attempt is below as well as an attempt at the api. 
// $(window).load(function() {
counter = 0
$(function(){

  console.log("hello world");



  $("#new-message-button").on( "click", function(){
    var msg = $("#new-message-body").val()
    var d = new Date();
    var time = d.getHours()+":"+d.getMinutes();

    var usernames = ["I", "Me","Myself"];

    var name = usernames[counter]
    counter = counter + 1
    if (counter == 3) {
      counter = 0
    }
    $("#conversation").append('<li class="message"><a class="delete" href="#">Delete</a><h3 class="author">'+name+'</h3><p class="message-body">'+msg+'</p><span class="timestamp">'+time+'</span></li>')
    // $("#conversation").append("<h1>Hi! Let's be friends =D</h1>")
      // console.log("new message");
      $("#new-message-body").val("");


  });

  $("#new-message-body").on( "keydown", function(event){
    if (event.which === 13 ) {
      var usernames = ["I", "Me","Myself"];
      var name = usernames[counter]
      var cat = $("#new-message-body").val()
      var d = new Date();
      var time = d.getHours()+":"+d.getMinutes();

      counter = counter + 1
      if (counter == 3) {
        counter = 0
      }
      $("#conversation").append('<li class="message"><a class="delete" href="#">Delete</a><h3 class="author">'+name+'</h3><p class="message-body">'+cat+'</p><span class="timestamp">'+time+'</span></li>')
      // $("#conversation").append("<h1>Hi! Let's be friends =D</h1>")
        // console.log("new message");
        $("#new-message-body").val("")
    }


  });

  $(document).on( "click", ".delete", function() {
    $(this).parent().remove()
  });
});







//   $('#new-message-body').keypress(function(event) {
//     if (event.keyCode == 13) {
//       $("#conversation").append('<li class="message"><a class="delete" href="#">Delete</a><h3 class="author">will</h3><p class="message-body">'+msg+'</p><span class="timestamp">01:12</span></li>')
//       $("#conversation").append("<h1>Hi! Let's be friends =D</h1>")
//         console.log("new message");
//         $("#new-message-body").val("");
//
//
//
//         // alert('Entered')
//         // $('new-message-button').click();
//     }
// });





// $(function() {
// var button = $('#new-message-button');
// console.log(button);
// });





	// 	var clientmsg = $("#usermsg").val();
	//
	// 	$("#usermsg").attr("value", "");
	// 	return false;
	// });


//   main = function(){
//     addBySend();
//     addByEnter();
//     imLonely();
//     deleteMessage();
//
//   }
//
//
//   addBySend = function(){  //add by pressing the button
//     $('#new-message-button').click(function() {     //when button is clicked do ...
//      addToConversation();
//     });
//   }
//
//   addByEnter = function(){   //add by  presing enter
//     $('#new-message-body').keypress(function(event){  //watch every keypress,naming it event
//       if(event.which == 13){  //when key press = 13(enter code) do this...
//         event.preventDefault();  //dont do what you usually do
//       addToConversation();
//       }
//     });
//   }
//
//   deleteMessage = function(){
//   $('#conversation').on('click','.delete',function(event){ //ON clicking this element delete do this
//   event.preventDefault(); // clears default .. instead of delete you can use
//   $('.delete').parent().remove();
//
//   });
//   }
//
//   getTime  = function(){
//     var time = new Date();
//     return time.getHours()+ ":" + time.getMinutes();
//   }
//
//   var turn = 0; //increments everytime a message is sent
//   username =function(){
//     var people = ["Me ","Myself ", "I "];
//     return people[turn ++ % 3];  //remainder will always be either 0 1 0r 2
//   }
//
//   message = function(textarea){  //append new message to chat
//      $("#conversation").append("<li class = 'message'><a class = 'delete' href = '#'>Delete</a><h3 class = 'author'>"+username()+"</h3> <p class= 'message-body'>" + textarea + "</p><span class='timestamp'>"+getTime()+"</span></li>");
//   }
//
//   addToConversation = function(){
//     var textarea = $("#new-message-body").val();
//     $("#new-message-body").val("");
//     message(textarea);
//   }
//
//   imLonely = function(){
//   $('#lonely').click(function(){
//     chuckAjax();
//
//   });
// }
//
// chuckAjax = function(){
//   $.ajax({
//     url: 'https://api.icndb.com/jokes/random',
//     success: function(data){
//
//       var joke = data.value.joke
//       message(joke)
//
//     }
//   });
// }
//   $(document).on("load ready", main);
