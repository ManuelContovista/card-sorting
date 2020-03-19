$( document ).ready(function() {

  var allcards = "Logo, Counterpary, Amount, Date, Spending category, Time stamp, Location, Type of transaction: online - pos - credit card, Excluded from the analysis";
  
  var cards = allcards.split(',');
  shuffle(cards);
  for (i = 0; i < cards.length; i++) { 
    
   $('.cards').append('<li class="card ui-state-default" data-value="'+cards[i]+'">'+cards[i]+'</li>');
    
  }
  $(".cards").sortable();
  
  $( "ul.droptrue" ).sortable({
      connectWith: "ul"
    });
 
    $( "ul.dropfalse" ).sortable({
      connectWith: "ul",
      dropOnEmpty: true
    });
 
    $( ".cards" ).disableSelection();
  
  //$( ".cards" ).disableSelection();
  //$(".card").draggable({ snap: ".column"});
  /*$(".card").draggable({
      start: function() {
        $(this).addClass('active');
      },
      stop: function() {
        $(this).removeClass('active');
      }
  });*/
  
  function shuffle (array) {
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}
  
});