  var icons = new Skycons(),
          list  = [
            "clear-day", "clear-night", "partly-cloudy-day",
            "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
            "fog"
          ],
          i,
          icon = "clear-night";

          icons.set(icon, icon);
          icons.play();

for(i = list.length; i--; )
  icons.set(list[i], list[i]);
icons.play();


$(document).on('pageinit', "#demo-page", function(){
   $(document).on('swipe', "$demo-page", function( e ) {
     if (e.type === "swipeleft" ) {
        $("#hoy").text('hollo');
     } else if (e.type === "swiperight" ) {
        $("#hoy").text('hello');
     }
   });
});
