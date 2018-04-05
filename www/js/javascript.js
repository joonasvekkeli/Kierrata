// Menubuttons
	$(document).ready(function(){
    $("#mapbutton").click(function(){
        $("#info").fadeOut("fast");
		$("#mapid").delay("fast").fadeIn("fast");
		$(".infoscreen").hide();
		$("#materialbutton").delay("fast").fadeIn("fast");
		$("#mapbutton").hide();
		$("#terms").hide();
		$("#main").show();
    });
    $("#materialbutton").click(function(){
        $("#info").delay("fast").fadeIn("fast");
		$("#mapid").fadeOut("fast");
		$(".infoscreen").fadeOut("fast");
		$("#materialbutton").hide();
		$("#mapbutton").delay("fast").fadeIn("fast");
		$("#terms").fadeOut("fast");
		$("#main").show();
    });
// Infoscreen backbutton
		$(".infoarrow").click(function(){
        $(".infoscreen").hide();
		$("#info").fadeIn("fast");
    });
// Sidebar
		$("#menubutton").click(function(){
        $("#sidebar").show("fast");
		$("#legend").hide("fast");
		$("#mapid").css("z-index", "-1");
    });
		$("#backtomenu").click(function(){
        $("#sidebar").hide("fast");
		$("#mapid").css("z-index", "1");
    });
// Legend
		$("#legendbutton").click(function(){
        $("#legend").toggle("fast");
		$("#mapid").css("z-index", "-1");
		$("#sidebar").hide("fast");
		$('.infobutton').prop('disabled', true);
	});
		$("#maincontent").click(function(){
        $("#legend").hide("fast");
		$("#sidebar").hide("fast");
		$("#mapid").css("z-index", "1");
		$('.infobutton').prop('disabled', false);
	});
// ToS
	$("#tos").click(function(){
		$("#terms").slideDown("slow");
        $("#sidebar").hide();
		$("#main").hide();
	});
	$("#exitToS").click(function(){
		$("#terms").hide();
		$("#main").fadeIn();
		$("#mapid").css("z-index", "1");
	});
// Individual infoscreens start
	$("#biobutton").click(function(){
        $("#bio").delay("fast").slideDown(100);
		$("#info").fadeOut("fast");
    });
	$("#sekabutton").click(function(){
        $("#seka").delay("fast").slideDown(100);
		$("#info").fadeOut("fast");
    });
	$("#kartonkibutton").click(function(){
        $("#kartonki").delay("fast").slideDown(100);
		$("#info").fadeOut("fast");
    });
	$("#papeributton").click(function(){
        $("#paperi").delay("fast").slideDown(100);
		$("#info").fadeOut("fast");
    });
	$("#metallibutton").click(function(){
        $("#metalli").delay("fast").slideDown(100);
		$("#info").fadeOut("fast");
    });
	$("#muovibutton").click(function(){
        $("#muovi").delay("fast").slideDown(100);
		$("#info").fadeOut("fast");
    });
	$("#lasibutton").click(function(){
        $("#lasi").delay("fast").slideDown(100);
		$("#info").fadeOut("fast");
    });
	$("#sähkbutton").click(function(){
        $("#sähk").delay("fast").slideDown(100);
		$("#info").fadeOut("fast");
    });
	$("#tekstiilibutton").click(function(){
        $("#tekstiili").delay("fast").slideDown(100);
		$("#info").fadeOut("fast");
    });
	$("#vaarabutton").click(function(){
        $("#vaara").delay("fast").slideDown(100);
		$("#info").fadeOut("fast");
    });
	$("#puutarhabutton").click(function(){
        $("#puutarha").delay("fast").slideDown(100);
		$("#info").fadeOut("fast");
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
	
	mymap.locate({setView: true, maxZoom: 15});
	
	function onLocationFound(e) {
    var radius = e.accuracy * 2;
	
    L.circle(e.latlng, radius).addTo(mymap);
	}

	mymap.on('locationfound', onLocationFound);
	
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

	var orangeIcon = new LeafIcon({iconUrl: 'images/icon_roori.png'});
	var cyanIcon = new LeafIcon({iconUrl: 'images/icon_imu.png'});
	var pinkIcon = new LeafIcon({iconUrl: 'images/icon_rode.png'});
	var blueIcon = new LeafIcon({iconUrl: 'images/icon_kierrata.png'});
	
	/*
	L.marker([60.197765, 24.972364], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>Pääkaupunkiseudun kierrätyskeskus Oy/<br>Kyläsaaren kauppa</b>");
	*/
	
// Käyttäjän 3 pisteet

	L.marker([60.233976, 25.116772], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>ALUEELLINEN KERÄYSPISTE PAPERINKERÄYS OY/<br>Naulakalliontie 13</b><br><ul><li>paperi</li></ul>");

	L.marker([60.236006, 25.102414], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>K-ALUEELLINEN KERÄYSPISTE PAPERINKERÄYS OY/<br>Humikkalantie 97</b><br><ul><li>paperi</li></ul>");

	L.marker([60.204276, 25.117751], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>KIERRÄTYSPISTE HSY:N JÄTEHUOLTO/<br>Meri-Rastilantie 4</b><br><ul><li>paperi</li><li>metalli</li><li>lasi</li></ul>");

	L.marker([60.207511, 25.145048], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>KIERRÄTYSPISTE HSY:N JÄTEHUOLTO/<br>Vuotie 45</b><br><ul><li>paperi</li><li>metalli</li><li>lasi</li><li>tekstiili</li></ul>");

	L.marker([60.209913, 24.961393], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>KIERRÄTYSPISTE HSY:N JÄTEHUOLTO/<br>Allastie 3</b><br><ul><li>paperi</li><li>metalli</li><li>lasi</li><li>tekstiili</li></ul>");

	L.marker([60.143540, 24.982730], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>Alueellinen kierrätyspiste/<br>Suomenlinna c28</b><br><ul><li>paperi</li></ul>");

	L.marker([60.210480, 24.941997], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>ALUEELLINEN KERÄYSPISTE PAPERINKERÄYS OY/<br>Kimmontie 4</b><br><ul><li>paperi</li></ul>");

	L.marker([60.213791, 24.939380], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>ALUEELLINEN KERÄYSPISTE PAPERINKERÄYS OY/<br>Ilmattarentie 33</b><br><ul><li>paperi</li></ul>");

	L.marker([60.145534, 24.988108], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>ALUEELLINEN KERÄYSPISTE/<br></b>Suomenlinna A4<br><ul><li>paperi</li></ul>");

	L.marker([60.193249, 24.936638], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>ALPPILAN AUTOHUOLTO OY/<br>Karjalankatu 2</b><br><ul><li>Ajoneuvoakut</li></ul>");

	L.marker([60.230211, 24.916882], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>KIERRÄTYSPISTE HSY:N JÄTEHUOLTO/<br>Pirkkolantie 25</b><br><ul><li>paperi</li><li>metalli</li><li>lasi</li><li>tekstiili</li><li>kartonki</li><li>muovi</li></ul>");

	L.marker([60.235034, 24.917843], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>ALUEELLINEN KERÄYSPISTE PAPERINKERÄYS OY/<br>Viidenrajantie 33</b><br><ul><li>paperi</li></ul>");

	L.marker([60.234180, 24.924312], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>ALUEELLINEN KERÄYSPISTE PAPERINKERÄYS OY/<br>Pirjontie 28</b><br><ul><li>paperi</li></ul>");

	L.marker([60.232419, 24.938128], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>ALUEELLINEN KERÄYSPISTE SUOMEN KERÄYSTUOTE OY/<br>Suursuontie 15</b><br><ul><li>paperi</li></ul>");

	L.marker([60.231446, 24.961417], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>ALUEELLINEN KERÄYSPISTE PAPERINKERÄYS OY/<br>Teinintie 12</b><br><ul><li>paperi</li></ul>");

	L.marker([60.234530, 24.954144], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>ALUEELLINEN KERÄYSPISTE PAPERINKERÄYS OY/<br>Hirsipadontie 8</b><br><ul><li>Kartonki</li></ul>");

	L.marker([60.212316, 24.900208], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>ALUEELLINEN KERÄYSPISTE/<br>Kylänevantie 2</b><br><ul><li>kartonki</li></ul>");

	L.marker([60.236909, 24.937834], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>ALUEELLINEN KERÄYSPISTE PAPERINKERÄYS OY/<br>Saarnaajantie 28</b><br><ul><li>paperi</li></ul>");

	L.marker([60.212127, 24.898577], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>Kierrätys/<br>Haagan tori</b><br><ul><li>paperi</li><li>metalli</li><li>kartonki</li><li>lasi</li></ul>");

	L.marker([60.212127, 24.898577], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>Kierrätyspiste/<br>Haagan tori</b><br><ul><li>paperi</li><li>metalli</li><li>kartonki</li><li>lasi</li></ul>");

	L.marker([60.228563, 24.977061], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>ALUEELLINEN KERÄYSPISTE PAPERINKERÄYS OY/<br>Aidasmäentie 19</b><br><ul><li>paperi</li></ul>");

// Käyttäjän 1 pisteet

	L.marker([60.225258, 24.972387], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>Alueellinen keräyspiste, Paperinkeräys oy/<br>Kirkkoherrantie 8</b><ul><li>paperi</li></ul>");
		
	L.marker([60.201546, 24.876830], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>Kierrätyspiste/<br>Laajalahdentie 13</b><ul><li>paperi</li><li>metalli</li><li>lasi</li><li>kartonki</li><li>tekstiili</li></ul>");
		
	L.marker([60.206456, 24.876816], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>Kierrätyspiste/<br>Naantalintie 2</b><ul><li>paperi</li><li>metalli</li><li>lasi</li><li>kartonki</li></ul>");
	
	L.marker([60.254023, 24.918439], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>Alueellinen keräyspiste, Paperinkeräys oy/<br>Pakilantie 122 - 124</b><ul><li>paperi</li></ul>");
	
	L.marker([60.250751, 24.899235], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>Alueellinen keräyspiste, Paperinkeräys oy/<br>Vannetie 61</b><ul><li>paperi</li></ul>");

	L.marker([60.218547, 24.854466], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>Kierrätyspiste/<br>Pajamäentie 12-14</b><ul><li>paperi</li><li>metalli</li><li>lasi</li><li>kartonki</li><li>tekstiili</li></ul>");

	L.marker([60.249266, 24.945318], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>Alueellinen keräyspiste, Paperinkeräys oy/<br>Paloheinäntie 13</b><ul><li>paperi</li></ul>");

	L.marker([60.239686, 24.962607], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>Alueellinen keräyspiste, Paperinkeräys oy/<br>Jahtivoudintie 1</b><ul><li>paperi</li></ul>");
	
	L.marker([60.262188, 24.950712], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>Alueellinen keräyspiste, Paperinkeräys oy/<br>Torpparinmäentie 15</b><ul><li>paperi</li></ul>");
	
	L.marker([60.226023, 24.846281], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>Alueellinen keräyspiste, Paperinkeräys oy/<br>Henrikintie 2</b><ul><li>paperi</li></ul>");
	
	L.marker([60.256958, 24.946002], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>Kierrätyspiste, HSY:n jätehuolto/<br>Torpparinmäentie 1a</b><ul><li>paperi</li><li>metalli</li><li>lasi</li><li>kartonki</li><li>tekstiili</li></ul>");
	
	L.marker([60.256707, 24.952132], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>Alueellinen keräyspiste, Paperinkeräys oy/<br>Lainkaarentie 1</b><ul><li>paperi</li></ul>");
	
	L.marker([60.243674, 24.841735], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>Alueellinen keräyspiste, Paperinkeräys oy/<br>Riukutie 1</b><ul><li>paperi</li></ul>");
	
	L.marker([60.240543, 24.849571], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>Kierrätyspiste/<br>Ristipellonkuja 1</b><ul><li>paperi</li><li>metalli</li><li>lasi</li><li>kartonki</li></ul>");
	
	L.marker([60.245556, 24.846172], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>Alueellinen keräyspiste/<br>Hankasuontie 1</b><ul><li>paperi</li><li>kartonki</li></ul>");
	
	L.marker([60.244927, 24.846501], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>Rinki-ekopiste/<br>Hankasuontie 2</b><ul><li>metalli</li><li>lasi</li><li>kartonki</li><li>muovi</li></ul>");
	
	L.marker([60.249235, 24.883557], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>Alueellinen keräyspiste, Paperinkeräys oy/<br>Runonlaulajantie 43</b><ul><li>paperi</li></ul>");
	
	L.marker([60.244478, 24.889257], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>Alueellinen keräyspiste, Paperinkeräys oy/<br>Tanotorventie 59</b><ul><li>paperi</li></ul>");
	
	L.marker([60.242191, 24.894928], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>Alueellinen keräyspiste, Paperinkeräys oy/<br>Kirjokalliontie 18</b><ul><li>paperi</li></ul>");
	
	L.marker([60.248409, 24.900004], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>Alueellinen keräyspiste, Paperinkeräys oy/<br>Juoksuhaudantie 18</b><ul><li>paperi</li></ul>");
	
	L.marker([60.250780, 24.889335], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>Alueellinen keräyspiste, Paperinkeräys oy/<br>Kalannintie 18-20 </b><ul><li>paperi</li></ul>");
	
	L.marker([60.254524, 24.887166], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>Alueellinen keräyspiste, Paperinkeräys oy/<br>Pannipolku 2</b><ul><li>paperi</li></ul>");
	
	L.marker([60.243493, 24.903567], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>Alueellinen keräyspiste, Paperinkeräys oy/<br>Kasemattikuja 1</b><ul><li>paperi</li></ul>");
	
	L.marker([60.250751, 24.899246], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>Alueellinen keräyspiste, Paperinkeräys oy/<br>Vannetie 61</b><ul><li>paperi</li></ul>");
		
//Käyttäjän 2 pisteet

	L.marker([60.169243, 24.937813], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>Gigantti Forum/<br>Mannerheimintie 20B</b><br><ul><li>Sähkölaitteet</li><li>Lamput</li><li>Paristot</li></ul>");

	L.marker([60.160357, 24.940385], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>VAARALLISTEN JÄTTEIDEN KERÄYSPISTE HSY/<br>Pursimiehenkatu 6</b><br><ul><li>Ajoneuvoakut</li><li>Lamput</li><li>Paristot</li><li>Vaarallinen jäte</li></ul>");

	L.marker([60.213876, 25.081507], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>ALUEELLINEN KERÄYSPISTE, PAPERINKERÄYS OY/<br>Korsholmantie 2</b><br><ul><li>Kartonkipakkaukset</li></ul>");

	L.marker([60.209846, 25.083743], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>RINKI-EKOPISTE,SUOMEN PAKKAUSKIERRÄTYS RINKI OY/<br>Kauppakartanonkatu 3</b><br><ul><li>Metallit</li><li>Lasipakkaukset</li><li>Kartonkipakkaukset</li></ul>");

	L.marker([60.216784, 25,094864], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>ALUEELLINEN KERÄYSPISTE,PAPERINKERÄYS OY/<br>Keltanotie 15 / Kukkaniityntie 2</b><br><ul><li>Paperi</li></ul>");

	L.marker([60.223182, 25.093842], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>ALUEELLINEN KERÄYSPISTE, PAPERINKERÄYS OY/<br>Savitaipaleentie 45</b><br><ul><li>Paperi</li></ul>");

	L.marker([60.220705, 25.047662], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>ALUEELLINEN KERÄYSPISTE, PAPERINKERÄYS OY/<br>Myllärintanhua 1</b><br><ul><li>Paperi</li></ul>");

	L.marker([60.216667, 25.063560], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>ALUEELLINEN KIERRÄTYSPISTE HSY:N JÄTEHUOLTO/<br>Ryynimyllynkatu 1</b><br><ul><li>Paperi</li><li>Metallit</li><li>Lasipakkaukset</li><li>Kartonkipakkaukset</li><li>Tekstiiili</li></ul>");

	L.marker([60.224486, 25.083056], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>ALUEELLINEN KERÄYSPISTE PAPERINKERÄYS OY/<br>Karjatanhuanpolku 1</b><br><ul><li>Paperi</li></ul>");

	L.marker([60.204391, 25.076875], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>ALUEELLINEN KERÄYSPISTE PAPERINKERÄYS OY/<br>Marjaniementie 58</b><br><ul><li>Paperi</li></ul>");

	L.marker([60.203170, 25.080160], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>ALUEELLINEN KERÄYSPISTE PAPERINKERÄYS OY/<br>Strömsintie 1-3</b><br><ul><li>Paperi</li></ul>");

	L.marker([60.204153, 25.089142], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>ALUEELLINEN KERÄYSPISTE PAPERINKERÄYS OY/<br>Vanha Koivuniementie 1</b><br><ul><li>Paperi</li></ul>");

	L.marker([60.203981, 25.094759], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>ALUEELLINEN KERÄYSPISTE PAPERINKERÄYS OY/<br>Niittyranta 10</b><br><ul><li>Paperi</li></ul>");

	L.marker([60.238357, 25.083058], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>KIERRÄTYSPISTE HSY:N JÄTEHUOLTO/<br>Ostostie 6</b><br><ul><li>Paperi</li><li>Metallit</li><li>Lasipakkaukset</li><li>Kartonkipakkaukset</li></ul>");

	L.marker([60.238456, 25.089085], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>ALUEELLINEN KERÄYSPISTE PAPERINKERÄYS OY/<br>Koskenhaantie 4</b><br><ul><li>Paperi</li></ul>");

	L.marker([60.236011, 25.102435], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>ALUEELLINEN KERÄYSPISTE PAPERINKERÄYS OY/<br>Humikkalantie 97</b><br><ul><li>Paperi</li></ul>");

	L.marker([60.232960, 25.110914], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>ALUEELLINEN KERÄYSPISTE PAPERINKERÄYS OY/<br>Untamalantie 2</b><br><ul><li>Paperi</li></ul>");

	L.marker([60.250550, 25.170767], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>ALUEELLINEN KERÄYSPISTE PAPERINKERÄYS OY/<br>Kraputie 1</b><br><ul><li>Paperi</li></ul>");

	L.marker([60.225049, 25.098590], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>ALUEELLINEN KERÄYSPISTE PAPERINKERÄYS OY/<br>Helytie 1-3</b><br><ul><li>Paperi</li></ul>");

	L.marker([60.225284, 25.085140], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>ALUEELLINEN KERÄYSPISTE PAPERINKERÄYS OY/<br>Ranckenintie 2</b><br><ul><li>Paperi</li></ul>");

	L.marker([60.223760, 25.093304], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>ALUEELLINEN KERÄYSPISTE PAPERINKERÄYS OY/<br>Soraharjuntie / Kiviportintie 50</b><br><ul><li>Paperi</li></ul>");

	L.marker([60.220809, 25.151872], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>ALUEELLINEN KERÄYSPISTE PAPERINKERÄYS OY/<br>Adalmiinankatu 1</b><br><ul><li>Paperi</li></ul>");
		
	L.marker([60.173894, 24.960360], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>KIERRÄTYSPISTE HSY:N JÄTEHUOLTO/<br>Maneesikatu/Pohjoisranta</b><br><ul><li>paperi</li><li>metalli</li><li>kartonki</li><li>muovi</li><li>lasi</li></ul>");

//loput pisteet 101-155 ei paperipisteitä

	L.marker([60.198672, 24.971263], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>HSY:n kierrätyspiste/<br>Kyläsaarenkatu 8</b><br><ul><li>paperi</li><li>metalli</li><li>lasi</li><li>kartonki</li><li>muovi</li><li>elektroniikka</li><li>tekstiili</li><li>paristot</li></ul>");
		
	L.marker([60.248612, 24.996239], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>HSY:n kierrätyspiste/<br>Kenttätie 3</b><br><ul><li>paperi</li><li>metalli</li><li>lasi</li><li>kartonki</li><li>muovi</li></ul>");
		
	L.marker([60.251888, 24.980660], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>HSY:n kierrätyspiste/<br>Simpukkakuja 2</b><br><ul><li>paperi</li><li>metalli</li><li>lasi</li><li>kartonki</li><li>tekstiili</li></ul>");
		
	L.marker([60.256127, 24.997985], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>HSY:n kierrätyspiste/<br>Takaniitynkuja 2</b><br><ul><li>paperi</li><li>metalli</li><li>lasi</li><li>kartonki</li><li>tekstiili</li></ul>");
		
	L.marker([60.260951, 25.073021], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>HSY:n kierrätyspiste/<br>Jakomäentie 2</b><br><ul><li>paperi</li><li>metalli</li><li>lasi</li><li>kartonki</li><li>muovi</li><li>tekstiili</li></ul>");
		
	L.marker([60.186060, 25.000644], {icon: blueIcon}).addTo(mymap)
		.bindPopup("<b>HSY:n kierrätyspiste/<br>Kulosaarentie 2</b><br><ul><li>paperi</li><li>metalli</li><li>lasi</li><li>kartonki</li><li>muovi</li><li>tekstiili</li></ul>");
	
// Röörin pisteet

	L.marker([60.158137, 24.911845], {icon: orangeIcon}).addTo(mymap)
		.bindPopup("<b>Kontti/<br>Länsisatamankatu 18</b><br><i>Vain Rööri-järjestelmän käyttäjille. Avataan isännöitsijällä saatavalla koodilla.</i><ul><li>lasi</li><li>metalli</li><li>suurikokoinen pahvi</li><li>suurikokoinen sekajäte</li></ul>");
		
	L.marker([60.156254, 24.920209], {icon: orangeIcon}).addTo(mymap)
		.bindPopup("<b>Kontti/<br>Hietasaarenkuja 14</b><br><i>Vain Rööri-järjestelmän käyttäjille. Avataan isännöitsijällä saatavalla koodilla.</i><ul><li>lasi</li><li>metalli</li><li>suurikokoinen pahvi</li><li>suurikokoinen sekajäte</li></ul>");

	L.marker([60.157715, 24.921405], {icon: orangeIcon}).addTo(mymap)
		.bindPopup("<b>Lajitteluhuone/<br>Kap Hornin katu 1</b><br><i>Pääsy vain RÖÖRI-avaimella.</i><ul><li>lasi</li><li>metalli</li><li>suurikokoinen pahvi</li><li>suurikokoinen sekajäte</li></ul>");

	L.marker([60.156263, 24.916260], {icon: orangeIcon}).addTo(mymap)
		.bindPopup("<b>Lajitteluhuone/<br>Hyväntoivonkatu 8</b><br><i>Pääsy vain RÖÖRI-avaimella.</i><ul><li>lasi</li><li>metalli</li><li>suurikokoinen pahvi</li><li>suurikokoinen sekajäte</li></ul>");	

	L.marker([60.158311, 24.914570], {icon: orangeIcon}).addTo(mymap)
		.bindPopup("<b>Lajitteluhuone/<br>Livornonkatu 3</b><br><i>Pääsy vain RÖÖRI-avaimella.</i><ul><li>lasi</li><li>metalli</li><li>suurikokoinen pahvi</li><li>suurikokoinen sekajäte</li></ul>");				
		
//Roden pisteet	

	L.marker([60.169175, 25.031490], {icon: pinkIcon}).addTo(mymap)
		.bindPopup("<b>Alueellinen lajitteluhuone/<br>Mellinintie 7</b><br><i>Pääsy vain RODE-avaimella.</i><ul><li>lasi</li><li>metalli</li><li>suurikokoinen pahvi</li><li>suurikokoinen sekajäte</li></ul>");

	L.marker([60.168546, 25.034535], {icon: pinkIcon}).addTo(mymap)
		.bindPopup("<b>Alueellinen lajitteluhuone/<br>Gunillantie 13</b><br><i>Pääsy vain RODE-avaimella.</i><ul><li>lasi</li><li>metalli</li><li>suurikokoinen pahvi</li><li>suurikokoinen sekajäte</li></ul>");

	L.marker([60.174619, 25.034059], {icon: pinkIcon}).addTo(mymap)
		.bindPopup("<b>Alueellinen lajitteluhuone/<br>Föglönkuja 5</b><br><i>Pääsy vain RODE-avaimella.</i><ul><li>lasi</li><li>metalli</li><li>suurikokoinen pahvi</li><li>suurikokoinen sekajäte</li></ul>");

	L.marker([60.174109, 25.030549], {icon: pinkIcon}).addTo(mymap)
		.bindPopup("<b>Alueellinen lajitteluhuone/<br>Rosalankuja 8</b><br><i>Pääsy vain RODE-avaimella.</i><ul><li>lasi</li><li>metalli</li><li>suurikokoinen pahvi</li><li>suurikokoinen sekajäte</li></ul>");

	L.marker([60.172027, 25.033708], {icon: pinkIcon}).addTo(mymap)
		.bindPopup("<b>Korttelikohtainen lajitteluhuone/<br>Koirasaarentie 34</b><br><i>Avataan mekaanisella avaimella.</i><ul><li>lasi</li><li>metalli</li><li>suurikokoinen pahvi</li><li>suurikokoinen sekajäte</li></ul>");

	L.marker([60.171457, 25.032356], {icon: pinkIcon}).addTo(mymap)
		.bindPopup("<b>Korttelikohtainen lajitteluhuone/<br>Gunillantie 24B</b><br><i>Avataan mekaanisella avaimella.</i><ul><li>lasi</li><li>metalli</li><li>suurikokoinen pahvi</li><li>suurikokoinen sekajäte</li></ul>");

// Imun pisteet

	L.marker([60.184516, 24.980187], {icon: cyanIcon}).addTo(mymap)     
		.bindPopup("<b>Korttelikohtainen lajitteluhuone/<br>Junonkatu 3</b><br><i>Kierrätyshuoneet aukeavat mekaanisella avaimella tai koodilla alueen asukkaille.</i><ul><li>lasi</li><li>metalli</li><li>suurikokoinen pahvi</li><li>suurikokoinen sekajäte</li></ul>");

	L.marker([60.186097, 24.981509], {icon: cyanIcon}).addTo(mymap)     
		.bindPopup("<b>Korttelikohtainen lajitteluhuone/<br>Arielinkatu 2</b><br><i>Lajitteluhuoneet aukeavat mekaanisella avaimella tai koodilla alueen asukkaille.</i><ul><li>lasi</li><li>metalli</li><li>suurikokoinen pahvi</li><li>suurikokoinen sekajäte</li></ul>");

	L.marker([60.184792, 24.980825], {icon: cyanIcon}).addTo(mymap)     
		.bindPopup("<b>Korttelikohtainen lajitteluhuone/<br>Antareksenkatu 4A</b><br><i>Lajitteluhuoneet aukeavat mekaanisella avaimella tai koodilla alueen asukkaille.</i><ul><li>lasi</li><li>metalli</li><li>suurikokoinen pahvi</li><li>suurikokoinen sekajäte</li></ul>");

	L.marker([60.184307, 24.981881], {icon: cyanIcon}).addTo(mymap)     
		.bindPopup("<b>Korttelikohtainen lajitteluhuone/<br>Capellan puistotie 6</b><br><i>Lajitteluhuoneet aukeavat mekaanisella avaimella tai koodilla alueen asukkaille.</i><ul><li>lasi</li><li>metalli</li><li>suurikokoinen pahvi</li><li>suurikokoinen sekajäte</li></ul>");

	L.marker([60.185236, 24.982777], {icon: cyanIcon}).addTo(mymap)     
		.bindPopup("<b>Korttelikohtainen lajitteluhuone/<br>Capellan puistotie 3-5</b><br><i>Lajitteluhuoneet aukeavat mekaanisella avaimella tai koodilla alueen asukkaille.</i><ul><li>lasi</li><li>metalli</li><li>suurikokoinen pahvi</li><li>suurikokoinen sekajäte</li></ul>");

	L.marker([60.183182, 24.980062], {icon: cyanIcon}).addTo(mymap)     
		.bindPopup("<b>Korttelikohtainen lajitteluhuone/<br>Junonkatu 8</b><br><i>Lajitteluhuoneet aukeavat mekaanisella avaimella tai koodilla alueen asukkaille.</i><ul><li>lasi</li><li>metalli</li><li>suurikokoinen pahvi</li><li>suurikokoinen sekajäte</li></ul>");

	L.marker([60.185101, 24.979679], {icon: cyanIcon}).addTo(mymap)     
		.bindPopup("<b>Korttelikohtainen lajitteluhuone/<br>Antareksenkatu 2a</b><br><i>Lajitteluhuoneet aukeavat mekaanisella avaimella tai koodilla alueen asukkaille.</i><ul><li>lasi</li><li>metalli</li><li>suurikokoinen pahvi</li><li>suurikokoinen sekajäte</li></ul>");

	L.marker([60.183317, 24.981786], {icon: cyanIcon}).addTo(mymap)     
		.bindPopup("<b>Korttelikohtainen lajitteluhuone/<br>Capellan puistotie 4</b><br><i>Lajitteluhuoneet aukeavat mekaanisella avaimella tai koodilla alueen asukkaille.</i><ul><li>lasi</li><li>metalli</li><li>suurikokoinen pahvi</li><li>suurikokoinen sekajäte</li></ul>");

	L.marker([60.184625, 24.983174], {icon: cyanIcon}).addTo(mymap)     
		.bindPopup("<b>Korttelikohtainen lajitteluhuone/<br>Leonkatu 21</b><br><i>Lajitteluhuoneet aukeavat mekaanisella avaimella tai koodilla alueen asukkaille.</i><ul><li>lasi</li><li>metalli</li><li>suurikokoinen pahvi</li><li>suurikokoinen sekajäte</li></ul>");

	L.marker([60.183557, 24.978262], {icon: cyanIcon}).addTo(mymap)     
		.bindPopup("<b>Korttelikohtainen lajitteluhuone/<br>Arcturuksenkatu 3</b><br><i>Lajitteluhuoneet aukeavat mekaanisella avaimella tai koodilla alueen asukkaille.</i><ul><li>lasi</li><li>metalli</li><li>suurikokoinen pahvi</li><li>suurikokoinen sekajäte</li></ul>");

	
	var popup = L.popup();
	
	/* debug feature
	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("Koordinaatit: " + e.latlng.toString())
			.openOn(mymap);
	}
	mymap.on('click', onMapClick);
	*/
