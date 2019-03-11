//Mostrando o icone de menu após o banner
$(window).scroll(function(){
	var scroll = $(window).scrollTop();

	if(scroll >= 680){
		$('#mobIcon').addClass('ativo');
	} else{
		$('#mobIcon').removeClass('ativo');
	}
});

//Icone mobile

function clickIcon(){
		var a = $('#mobIcon').attr("data-ativo");

		if (a == 0) {
			$('#mobIcon').attr("data-ativo", "1");
			$('#mobIcon span:nth-child(2)').addClass('spanAtivo');
			$('#mobIcon span:nth-child(3)').addClass('spanAtivoN');
			$('#mobIcon span:nth-child(1), #mobIcon span:nth-child(4)').addClass('spanAtivo');

			$('.contMenuMob').fadeIn();
		} else {
			$('#mobIcon').attr("data-ativo", "0");
			$('#mobIcon span:nth-child(2)').removeClass('spanAtivo');
			$('#mobIcon span:nth-child(3)').removeClass('spanAtivoN');
			$('#mobIcon span:nth-child(1), #mobIcon span:nth-child(4)').removeClass('spanAtivo');

			$('.contMenuMob').fadeOut();
		}
	}

$('#mobIcon').click(function(){

	clickIcon();


})


//Link ancora 
$('a[href^="#"]').bind('click.smoothscroll, click touchend',function (e) {
	e.preventDefault();
	
	var target = this.hash,
	$target = $(target);

	$('html, body').stop().animate({
		'scrollTop': $target.offset().top-80
	}, 800, 'swing', function () {
		
	});
});

//Efeito juntando texto banner
$(window).on('load', function(){
	$('.banner .infos h1 span').addClass('active');
	setTimeout(function(){ 
		$('.banner .infos h3').addClass('active');
	}, 500);
});
