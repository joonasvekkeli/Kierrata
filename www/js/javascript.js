//jQuery
// Menubuttons
	$(document).ready(function(){
    $("#mapbutton").click(function(){
        $("#info").hide("fast");
		$("#mapid").show("fast");
		$(".infoscreen").hide("fast");
		$("#mapbutton").css("background", "#94db8a");
		$("#materialbutton").css("background", "#9acd9c");
    });
	$( "#mapbutton" ).one( "click", function() {
		setTimeout(function() { alert("Jos kartta ei näy kunnolla, kokeile kääntää laitteen näyttö sivusuuntaan, ja sitten takaisin."); }, 1000);
	});
    $("#materialbutton").click(function(){
        $("#info").show("fast");
		$("#mapid").hide("fast");
		$(".infoscreen").hide("fast");
		$("#mapbutton").css("background", "#9acd9c");
		$("#materialbutton").css("background", "#94db8a");
    });
// Infoscreen backbutton
		$(".infoarrow").click(function(){
        $(".infoscreen").hide("fast");
		$("#info").show("fast");
    });
// Open map from infoscreen
		$(".back").click(function(){
        $("#mapid").show("fast");
		$(".infoscreen").hide("fast");
		$("#mapbutton").css("background", "#94db8a");
		$("#materialbutton").css("background", "#9acd9c");
    });
// Hamburger button
		$("#menubutton").click(function(){
        $("#sidebar").show("fast");
		$("#mapid").css("z-index", "-1");
    });
// Sidescreen exit
		$("#backtomenu").click(function(){
        $("#sidebar").hide("fast");
		$("#mapid").css("z-index", "1");
    });
// Individual infoscreens start
	$("#biobutton").click(function(){
        $("#bio").show("fast");
		$("#info").hide("fast");
    });
	$("#sekabutton").click(function(){
        $("#seka").show("fast");
		$("#info").hide("fast");
    });
	$("#kartonkibutton").click(function(){
        $("#kartonki").show("fast");
		$("#info").hide("fast");
    });
	$("#papeributton").click(function(){
        $("#paperi").show("fast");
		$("#info").hide("fast");
    });
	$("#metallibutton").click(function(){
        $("#metalli").show("fast");
		$("#info").hide("fast");
    });
	$("#muovibutton").click(function(){
        $("#muovi").show("fast");
		$("#info").hide("fast");
    });
	$("#lasibutton").click(function(){
        $("#lasi").show("fast");
		$("#info").hide("fast");
    });
	$("#sähkbutton").click(function(){
        $("#sähk").show("fast");
		$("#info").hide("fast");
    });
	$("#tekstiilibutton").click(function(){
        $("#tekstiili").show("fast");
		$("#info").hide("fast");
    });
	$("#vaarabutton").click(function(){
        $("#vaara").show("fast");
		$("#info").hide("fast");
    });
	$("#puutarhabutton").click(function(){
        $("#puutarha").show("fast");
		$("#info").hide("fast");
    });
// Individual infoscreens end
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
	