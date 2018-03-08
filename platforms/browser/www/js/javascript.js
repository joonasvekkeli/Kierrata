//jQuery	
	$(document).ready(function(){
    $("#mapbutton").click(function(){
        $("#info").hide("fast");
		$("#mapid").show("fast");
		$("#paperi").hide("fast");
    });
    $("#materialbutton").click(function(){
        $("#info").show("fast");
		$("#mapid").hide("fast");
		$("#paperi").hide("fast");
    });
	$("#papeributton").click(function(){
        $("#paperi").show("fast");
		$("#info").hide("fast");
    });
		$(".infoarrow").click(function(){
        $(".infoscreen").hide("fast");
		$("#info").show("fast");
    });
		$("#back").click(function(){
        $("#mapid").show("fast");
		$("#paperi").hide("fast");
    });
		$("#menubutton").click(function(){
        $("#sidebar").show("fast");
		$("#mapid").css("z-index", "-1");
    });
		$("#backtomenu").click(function(){
        $("#sidebar").hide("fast");
		$("#mapid").css("z-index", "1");
    });
});

//Map
	var mymap = L.map('mapid').setView([60.171296, 24.941496], 13)
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoia2llcnJhdGEiLCJhIjoiY2plNDNsenE1NHluYzJ4cW81bDBnZzczNiJ9.tmwgU8Rg-tH8N_NehEBtrg', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(mymap);
	
	var LeafIcon = L.Icon.extend({
		options: {
			shadowUrl: 'images/marker-shadow.png',
			iconSize:     [25, 41],
			shadowSize:   [41, 41],
			iconAnchor:   [12, 41],
			shadowAnchor: [10, 41],
			popupAnchor:  [1, -41]
		}
	});

	var greenIcon = new LeafIcon({iconUrl: 'images/roori-icon.png'});

	L.marker([60.197765, 24.972364]).addTo(mymap)
		.bindPopup("<b>Pääkaupunkiseudun kierrätyskeskus Oy/<br>Kyläsaaren kauppa</b>");
		
	L.marker([60.157724, 24.921488], {icon: greenIcon}).addTo(mymap)
		.bindPopup("<b>Jätkäsaaren röörin kierrätyshuone/<br>Kap Hornin katu 1</b><br><i>Pääsy vain RÖÖRI-avaimella</i><ul><li>Kartonki</li><li>Paperi</li><li>jne</li></ul>");
		
	var popup = L.popup();
	
	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(mymap);
	}
	mymap.on('click', onMapClick);
	