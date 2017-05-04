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


    // Sidebar on right side
    $(".sidebar.right").sidebar({side: "right"}).trigger("sidebar:open");

$(".my-sidebar").trigger("sidebar:open");
$(".my-sidebar").trigger("sidebar:close");
$(".my-sidebar").trigger("sidebar:toggle");
$(".my-sidebar").trigger("sidebar:close", [{ speed: 0 }]);
