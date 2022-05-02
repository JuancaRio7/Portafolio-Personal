$(document).ready(function(){
	
	//Slider
	
	if(window.location.href.indexOf('index') > -1){
	$('.galeria').bxSlider({
		mode: 'fade',
		captions: true, 
		slideWidth: 1200,
		//pager: false
	});
}
	
	//Posts
	if(window.location.href.indexOf('index') > -1){
	var posts = [
	{
		title: 'Prueba de título 1',
		date:'Publicado el día ' + moment().date() + ' de ' + moment().format('MMMM')+ ' de ' + moment().format('YYYY'),
		content:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'
	},
	{
		title: 'Prueba título 2',
		date:'Publicado el día ' + moment().date() + ' de ' + moment().format('MMMM')+ ' de ' + moment().format('YYYY'),
		content : 'Expetenda tincidunt in sed, ex partem placerat sea, porro commodo ex eam. His putant aeterno interesset at. Usu ea mundi tincidunt, omnium virtute aliquando ius ex. Ea aperiri sententiae duo. Usu nullam dolorum quaestio ei, sit vidit facilisis ea. Per ne impedit iracundia neglegentur. Consetetur neglegentur eum ut, vis animal legimus inimicus id.'
	},
	{
		title: 'Prueba título 3',
		date:'Publicado el día ' + moment().date() + ' de ' + moment().format('MMMM')+ ' de ' + moment().format('YYYY'),
		content: 'Est ei erat mucius quaeque. Ei his quas phaedrum, efficiantur mediocritatem ne sed, hinc oratio blandit ei sed. Blandit gloriatur eam et. Brute noluisse per et, verear disputando neglegentur at quo. Sea quem legere ei, unum soluta ne duo. Ludus complectitur quo te, ut vide autem homero pro.'
	},
	{
		title: 'Prueba título 4',
		date:'Publicado el día ' + moment().date() + ' de ' + moment().format('MMMM')+ ' de ' + moment().format('YYYY'),
		content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'
	},
	{
		title: 'Prueba de título 5',
		date:'Publicado el día ' + moment().date() + ' de ' + moment().format('MMMM')+ ' de ' + moment().format('YYYY'),
		content: 'Meis vocent signiferumque pri et. Facilis corpora recusabo ne quo, eum ne eruditi blandit suscipiantur. Mazim sapientem sed id, sea debet commune iracundia in. Eius falli propriae te usu. In usu nonummy volumus expetenda, sint quando facilisis ei per, delectus constituto sea te.'
	},
	];
	
	posts.forEach(( item, index) =>{
		var post = `
	<article class = "post">
		<h2>${item.title}</h2>
		<span class = "date">${item.date}</span>
		<p>${item.content}</p>
			<a href = "#" class = "button-more">Leer más</a>
	</article>
		`;
	
	$('#posts').append(post);
	});
}
	
	//Selector de tema
	
	var theme = $("#theme");
	
	$('#to-green').click(function(){
		theme.attr("href", "css/green.css");
	});
	
	$('#to-red').click(function(){
		theme.attr("href" , "css/red.css")
	});
	
	$('#to-blue').click(function(){
		theme.attr("href" , "css/blue.css")
	});
	
	//Scrool arriba de la web
	
	$('.subir').click(function(e){
		e.preventDefault();
		
		$('html, body').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
	
	//Login falso
	
	$('#login form').submit(function(){
		var form_name = $("#form_name").val();
		
		localStorage.setItem("form_name", form_name);
	});
	
	var form_name = localStorage.getItem("form_name");
	if(form_name != null && form_name != "undefined"){
		var about_parrafo = $("#about p");
		about_parrafo.html("<br><strong>Bienvenido " + form_name+"</strong>");
		about_parrafo.append("<a href = '#' id = 'logout'>Cerrar sesión</a>");
		$("#login").hide();	

		$("#logout").click(function() {
			localStorage.clear();
			location.reload();
		});
		
	}
	
	//Acordeón
	if(window.location.href.indexOf('about') > -1){
		$("#acordeon").accordion();
	}
	
	//Reloj
	if(window.location.href.indexOf('reloj') > -1){
		
		setInterval(function(){
		var reloj = moment().format('hh:mm:ss');
		$("#reloj").html(reloj);
	},1000);
	
	}
	
	//Validación 
	if(window.location.href.indexOf('contact') > -1){
		
	$("form input[name = 'date']").datepicker({
		dateFormat: 'dd-mm-yyyy'
	});
	
	$.validate({
		lang: 'es',
		errorMessagePosition: 'top',
		scrollToTopOnError: true
	});
}
});
