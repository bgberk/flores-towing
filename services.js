var myCenter = new google.maps.LatLng(38.7514, -77.4764);

function initialize() {
var mapProp = {
center:myCenter,
zoom:8,
scrollwheel:false,
mapTypeId:google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

var contentString = 
	'Sorry, we only service <br/> Virginia, not DC or MD!';

var washington = new google.maps.LatLng(38.9047, -77.0164);

var infowindow = new google.maps.InfoWindow({
	content: contentString,
	position: washington
});

infowindow.open(map);

var serviceArea = new google.maps.Circle({
  center:myCenter,
  radius:80500,
  strokeColor:"#96281b",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor:"#96281b",
  fillOpacity:0.4
});

serviceArea.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, 'resize', initialize);

$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

  // Prevent default anchor click behavior
  event.preventDefault();

  // Store hash
  var hash = this.hash;

  // Using jQuery's animate() method to add smooth page scroll
  // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 900, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
    });
  });
});

$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});