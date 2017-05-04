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

$('#right').on('click',function(e) {
   $('hey').text('wow');
 });
