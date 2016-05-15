$(function() {
	$('#btn1').click(function() {
		$(".menu").hide(1000);
		$("#img").hide(1000);
		$('.test1').fadeIn(2000);
	});

	$('#btn2').click(function() {
		$(".menu").hide(1000);
		$("#img").hide(1000);
		$('.test2').fadeIn(2000);
	});

	$('#back').click(function() {
		$('.test1').fadeOut(1000, function() {
			$(".menu").show(1000);
			$("#img").show(1000);
		});
	});

	$('#back2').click(function() {
		$('.test2').fadeOut(1000, function() {
			$(".menu").show(1000);
			$("#img").show(1000);
		});
	});

	$("#mujer").click(function() {
		$("#text2").slideToggle("slow");
	});

	$("#hombre").click(function() {
		$("#text1").slideToggle("slow");
	});

	$(".about").hover(function() {
		$(this).css({
			"opacity": "0.3", 
			"background-color": "#D3CFCA"
		});
		$("#about").slideDown(500);
	}, function() {
		$(this).css({
			"opacity": "1",
			"background-color": "#E7B928"
		});
		$("#about").slideUp(10);
	});

	$(".contacto").hover(function() {
		$(this).css({
			"opacity": "0.3", 
			"background-color": "#D3CFCA"
		});
		$("#contacto").slideDown(500);
	}, function() {
		$(this).css({
			"opacity": "1",
			"background-color": "#EFA62E"
		});
		$("#contacto").slideUp(10);
	});

	$(".perfiles").hover(function() {
		$(this).css({
			"opacity": "0.3", 
			"background-color": "#D3CFCA"
		});
		$("#perfiles").slideDown(500);
	}, function() {
		$(this).css({
			"opacity": "1",
			"background-color": "#EF832E"
		});
		$("#perfiles").slideUp(10);
	});

	$(".blog").hover(function() {
		$(this).css({
			"opacity": "0.3", 
			"background-color": "#D3CFCA"
		});
		$("#blog").slideDown(500);
	}, function() {
		$(this).css({
			"opacity": "1",
			"background-color": "#EF712E"
		});
		$("#blog").slideUp(10);
	});
});