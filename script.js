$(document).ready(function() {

  // when the puppy is clicked, append below elements
  $('#puppy').click(function() {
    $('#hat').append('<img src="top-hat.png">');
    $('#glasses').append('<img src="glasses.png">');
    $('#mustache').append('<img src="mustache.png">');
    $('#thanks').append("<p>Thanks for decorating the puppy!</p>")
    $('#undecorate').append("<p>Click on each individual item to undecorate the puppy.</p>")
  });

  // when hat is clicked, remove it and remove messages
  $('#hat').click(function(){
    $('#hat').empty();
    $('#thanks').empty();
    $('#undecorate').empty();
  });

  // if mustache is clicked, remove it. if message are not gone yet, remove those too
  $('#mustache').click(function(){
    $('#mustache').empty();

    if ($('thanks').html != "") {
      $('#thanks').empty();
      $('#undecorate').empty();
    }
  });

  // if glasses are clicked, remove them. if messages are not gone yet, remove those too
  $('#glasses').click(function(){
    $('#glasses').empty();

    if ($('thanks').html != "") {
      $('#thanks').empty();
      $('#undecorate').empty();
    }
  });

});
