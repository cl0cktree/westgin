$(document).ready(function(){
	// a 의 href 속성이 # 일 경우 클릭 시 위로 튕기는 현상 방지
	$('a[href=#]').click(function(e){
		e.preventDefault();
	});
	// GNB 오파시티(애니메이션 효과)
	$('#gnb > li ul').css({'opacity':'0'}); // 구형버전의 IE를 위해 자바스크립트에서 opacity 초기값 선언
	$('#gnb > li > a').on('mouseenter focusin', function(){
		var index = $('#gnb > li > a').index(this);
		$('#gnb > li ul').css({'display':'none', 'opacity':'0'});
		$('#gnb > li').removeClass('on');
		$('#gnb > li:eq('+ index +') ul').css({'display':'block'});
		$('#gnb > li:eq('+ index +') ul').stop().animate({'opacity':'1'}, 300);
		$('#gnb > li:eq('+ index +')').addClass('on');
		$('.movebar').animate({'height':'30px'},200)	
	});
	$('#gnb').on('mouseleave focusout', function(){
		$('#gnb > li ul').css({'opacity':'0'});
		$('#gnb > li ul').css({'display':'none'});
		$('#gnb > li').removeClass('on');
		$('.movebar').animate({'height':'0px'},200)	
	});
});

/* $(function(){
	
	$('#wrap').mouseOver(function(){
		$('.topbar').animate({'height':'120px'},300)
	})
 	$('#wrap').mouseOut(function(){
		$('.topbar').animate({'height':''},300)
	})

});*/