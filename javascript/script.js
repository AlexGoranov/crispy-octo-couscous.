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


$(document).on('pageinit', function(event){
   
$("div[data-role='header'").on("swipe",function(){
  $("#hoy").text('hollo');
});

$("div[data-role='header']").on("click", function() {
   $("#hey").text('hello');
});
});
