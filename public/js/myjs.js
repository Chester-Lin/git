
$(window).load(function(){ _animation() });
$(function(){
	//返回顶部
	//$("#totop").on('touchend',function(){
			//$("html,body").animate({scrollTop:"0px"},500);
		//});
	ietester();
	preani();
	$(window).scroll(_animation);
	erji();

	//ibanner_full();
	//$(window).resize(function(){ibanner_full();});

	//客服代码
	var thisBox = $('.lanren');
	if(thisBox.length){
		var defaultTop = thisBox.offset().top;
		var slide_min = $('.lanren .slide_min');
		var slide_box = $('.lanren .slide_box');
		var closed = $('.lanren .slide_box h2');
		slide_min.on('click',function(){$(this).hide();	slide_box.show();});
		closed.on('click',function(){slide_box.hide();slide_min.show();});
		// 页面滚动的同时，悬浮框也跟着滚动
		$(window).on('scroll',function(){scro();});
		$(window).onload = scro();

		function scro(){
			var offsetTop = defaultTop + $(window).scrollTop()+'px';
			thisBox.animate({top:offsetTop},
			{	duration: 600,	//滑动速度
		     	queue: false    //此动画将不进入动画队列
		     });
		}
	}
	
	$('.soubtn').click(function(){
		if($(this).hasClass('on')){
			$('.sou,.soutxt,.soubtn').removeClass('on');
		}else{
			$('.sou,.soutxt,.soubtn').addClass('on');
		}
	});

	$('#totop').click(function(){
		$("html,body").stop(true,false).animate({scrollTop:"0px"},500,'swing');
	})
	//侧边回到顶部的显示隐藏
	//$(window).scroll(function(){
	//	var sh = $(window).scrollTop() || 0;
	//	if(sh<=500){$('#totop').hide();}
	//	else{$('#totop').show();}
	//});


	$('.footewm').on('mouseenter', function() {
		$('.footbigewm').fadeIn(300);
	}).on('mouseleave', function() {
		$('.footbigewm').fadeOut(300);
	})
	
	$('.sidehand').hover(function(){
		$(this).find('.sideinfo').toggleClass('on');
	})
	$('#totop').hover(function(){
		$(this).find('.sideinfo2').toggleClass('on');
	})
	$('a#liuyanbtn').click(function() { dinon()})


	var navtimer;
	//导航下拉菜单 二级菜单
	$('.nav li').hover(function(){
		var _this = $(this);
		navtimer = setTimeout(function(){
			var i = _this.index();
			_this.addClass('on').siblings('li').removeClass('on');
			if(i){
				$('.navzk').addClass('on');
				$('.zkone>li').removeClass('on').eq(i).addClass('on');

				var ultwo = $('.zkone>li').eq(i).find('.zktwo');
				var navzkleft = $('.navzk').offset().left;
				var tw = _this.outerWidth();
				if(i<=7 ){
					var xxleft = _this.offset().left - navzkleft + tw/2 - ultwo.width()/2;
					ultwo.css('left',xxleft+'px');
				}else{
					ultwo.css('float','left');
					var xxleft = _this.offset().left - navzkleft + tw - ultwo.width();
					ultwo.css('left',xxleft+'px');
				}
			}else{
				$('.navzk').removeClass('on');
				$('.zkone>li').removeClass('on');
			}
		},200)

	},function(e){

		clearTimeout(navtimer);

		var ev = window.event || e;
		if(ev.offsetY <= 55){
			$('.navzk').removeClass('on');
			$('.zkone>li').removeClass('on');
		}
		$(this).removeClass('on');
	});

	$('.navzk').mouseleave(function(e){
		var ev = window.event || e;
		var x1 = $('.nav').offset().left;
		var x2 = x1 + $('.nav').width();
		if(ev.offsetY<=10 && ev.clientX>=x1 && ev.clientX <= x2 );
		else{$(this).removeClass('on');}
	});


	//招聘展开
	$('.rec-hand').click(function(){
		var bool = $(this).parents('li').hasClass('on');
		$(this).parents('li').toggleClass('on');
		if(!bool){
			$(this).siblings('.rec-con').slideDown('600');
		}else{
			$(this).siblings('.rec-con').slideUp('600');
		}
	})

	//加盟优势
	$('.yslist li').hover(function(){
		$(this).addClass('on').siblings('li').removeClass('on');
		var i = $(this).index();
		$('.yscon').removeClass('on').eq(i).addClass('on');
	});

	//加盟支持
	$('.suptlist li').hover(function(){
		$(this).addClass('on').siblings('li').removeClass('on');
		var i = $(this).index();
		$('.suptcon').removeClass('on').eq(i).addClass('on');
	});

	//首页加盟
	$('.fjmlist li').hover(function(){
		$(this).addClass('on').siblings('li').removeClass('on');
		var i = $(this).index();
		$('.pinpaicon').removeClass('on').eq(i).addClass('on');
	});
	 

	//11资料，性别
	$('.sex label').click(function(){
		if( !$(this).hasClass('on') ){
			$('.sex label').removeClass('on');
			$(this).addClass('on');
			$(this).siblings('input[type=radio]').get(0).checked= true;
		}
	});

 	
	$('.msgbg').click(function(event){
		event = event ? event : window.event; 
		if(event.target==this){ msgoff();}
	})
	$('.selfclose').click(function(event){
		event = event ? event : window.event;
		if(event.target==this){ $(this).removeClass('on').fadeOut(300);}
	})

	//09案例详情点小图，看大图
	$('.smallpic').on('click','li',function(){
		if(!$(this).hasClass('on')){
			$(this).addClass('on').siblings('li').removeClass('on');
			smlmove(2,smlw,'smallpic','bigpic');
		}
	})

	var smlw = $('.smallpic').attr('data')-0;
	$('.xijie-prev').click(function(){smlmove(0,smlw,'smallpic','bigpic')})
	$('.xijie-next').click(function(){smlmove(1,smlw,'smallpic','bigpic')})


	// 07 三级导航的滚动
	if( $('#wrapper22').length>0){

		var lin = $('#wrapper22 ul li').length;
		
		if(lin<=2){
			$('.nav7').addClass('fen2'); return false;
		}else if(lin==3){
			$('.nav7').addClass('fen3'); return false;
		}else if(lin==4){
			$('.nav7').addClass('fen4'); return false;
		}else if(lin==5){
			$('.nav7').addClass('fen5'); return false;
		}else{
			$('.outnav3').addClass('on');
		}

		var lis;
		if( $(window).width()>750 ){
			lis = $('#wrapper22').width() /5;
		}else{
			lis = $('#wrapper22').width() /3;
		}

		$('#wrapper22 ul li').width(lis);
		$('#wrapper22 ul').width(lis*lin);

		//Scroll22是 二级导航条水平方向的拖动
		var Scroll22 = new iScroll('wrapper22',{hScrollbar:false, vScrollbar:false});
		

		$('.outnav3 .nav-left').click(function(){
			Scroll22.scrollTo(-lis, 0, 300, true);
		})
		$('.outnav3 .nav-right').click(function(){
			Scroll22.scrollTo(lis, 0, 300, true);
		})


		function setnav7pos(){

			var obj = $('.nav7').find('li.on');
			if(obj.length<=0) return false;
			var oleft = obj.offset().left;
			var owidth = obj.outerWidth();

			var outleft = $('#wrapper22').offset().left;
			var outwidth = $('#wrapper22').outerWidth();
			var outright = outleft + outwidth;
			var inleft = $('.nav7').offset().left;

			if( oleft < outleft ){
				Scroll22.scrollTo((inleft-oleft), 0, 0, false);
			}else if(oleft + owidth > outright){
				Scroll22.scrollTo((inleft-oleft+outwidth-owidth), 0, 0, false);
			}
		}


		setnav7pos();

	}
})

function mwon(cname){ $('.'+cname).fadeIn(300).addClass('on');}
function mwoff(cname){ $('.'+cname).removeClass('on').fadeOut(300);}
function msgon(){ $('.msgbg').fadeIn(300).addClass('on');}
function msgoff(){$('.msgbg').removeClass('on').fadeOut(300)}
function dinon(){$('#fudin').fadeIn(300).addClass('on');}
function dinoff(){ myreset('liuyan2'); $('#fudin').removeClass('on').fadeOut(100)}

function ibanner_full(){
	if( !$('#home_slider').length ) return false;
	var wh = $(window).height();
	var pw = wh * 32/15 ;
	$('#home_slider .slides').height(wh);
	$('#home_slider img').height(wh).width(pw).css('margin-left',-pw/2+'px');
}
		 
function erji(){
	if( $('.erji').length>0){
		var lin = $('.erji a').length;
		
		if(lin>=6){
			$('.erji').addClass('fen8');
		}else if(lin==5){
			$('.erji').addClass('fen5');
		}else{
			$('.erji').addClass('fen4');
		}
	}
}


function selfclose(obj){
	event = event ? event : window.event;
	if(event.target==obj){ $(obj).removeClass('on').fadeOut(300);}
}
function addmsg(){
		if($('.msgbg').length<=0){
			var ss = '<div class="msgbg" onclick="selfclose(this)"><div class="msg bsb guodu">\
			<p class="msgtxt"></p>\
			<input type="button" value="关闭" class="btn" onclick="msgoff()">\
			</div></div>';

		    $('body').append(ss);
		}
	}
var msgtimer;
function msgshow(msg,milisec){
	addmsg();
	$('.msgtxt').text(msg);
	msgon();

	if(milisec){
		clearTimeout(msgtimer);
		msgtimer = setTimeout(function(){msgoff()},milisec);
	}
}

var isIE ,IEno;
function ietester(){
    var UA = navigator.userAgent;
    if(/msie/i.test(UA)){
    	isIE = true;
    	IEno = UA.match(/msie (\d+\.\d+)/i)[1]-0;
    }else if(~UA.toLowerCase().indexOf('trident') && ~UA.indexOf('rv')){
    	isIE = true;
        IEno = UA.match(/rv:(\d+\.\d+)/)[1]-0;
    }else{
    	isIE = false;
    }
}

function headxifu(){
	var windowTop = $(window).scrollTop();
	if( !$('.head').hasClass('on') && windowTop>=40 ){
		$('.head').addClass('on');
	}else if( $('.head').hasClass('on') && windowTop<40 ){
		$('.head').removeClass('on');
	}
}

function myreset(formid){
	$('#'+formid).find('input[type=text]').removeClass('Validform_error').val('');
	$('#'+formid).find('span.Validform_checktip').removeClass('Validform_wrong Validform_right').text('');
}

function _animation(){

	if( isIE && IEno <= 9 ){ $('.hasani').addClass('ani').removeClass('hasani');}

	var windowTop = $(window).scrollTop();
	var windowBottom = windowTop + $(window).height();

	if(windowTop>=100){
		$('.head,.navzk').addClass('mini');
	}else{
		$('.head,.navzk').removeClass('mini');
	}

	$('.hasani').each(function(){

		var pageQ1 = $(this).offset().top;
		var pageQ3 = $(this).offset().top  + $(this).height() / 1;

		if( ( pageQ1 <= windowBottom ) && ( pageQ3 >= windowTop ) ){				
				if( !$(this).hasClass("ani") )  $(this).addClass('ani');
		}else {
			//$(this).removeClass("ani");
		}
	});	
}

function preani(){
	$('.anidelay1').each(function(){
		$(this).children().each(function(i){
			var ss = i <= 9 ? '0'+i : i;
			$(this).addClass('delay'+ss);
		})
	})
	$('.anidelay2').each(function(){
		$(this).children().each(function(i){
			var ss = i*2 <= 9 ? '0'+i*2 : i*2;
			$(this).addClass('delay'+ss);
		})
	})
	$('.anidelay3').each(function(){
		$(this).children().each(function(i){
			var ss = i*3 <= 9 ? '0'+i*3 : i*3;
			$(this).addClass('delay'+ss);
		})
	})
}


function datenow(){
	var myDate = new Date(),datestr="";
	//myDate.setDate(myDate.getDate());
	datestr+= myDate.getFullYear();

	var m = myDate.getMonth()-0+1; 
	if(m<10) m = '0'+m;
	datestr+='-'+m;

	var d = myDate.getDate();
	if(d<10) d = '0'+d;
	datestr+='-'+d;

   return datestr;
}


function xjsmallw(w){
	//w为单个li的外宽度，包括内外边距和边框
	if($('.smallpic').length){
		var n = $('.smallpic').find('li').size();
		$('.smallpic').width(w*n);
	}
}

function smlmove(dir,w,classname,imgid){
	//0左1右2当前
	var l = $('.'+classname+' li ').size();
	var n = $('.'+classname+' li.on ').index() || 0;
	if(dir==0){ n = n>0? n-1:l-1;
	}else if(dir==1){ n = n==l-1? 0:n+1;}

	var obj = $('.'+classname+' li').eq(n);
	obj.addClass('on').siblings('li').removeClass('on');
	var url = obj.find('img').attr('hdsrc') || obj.find('img').attr('src');
	//var txt = obj.find('img').attr('title');
	$('#'+imgid).attr('src',url);
	//$('#'+imgid+'txt').text(txt);
	//移动
	var outleft = $('.'+classname+'-out').offset().left;
	var outwidth = $('.'+classname+'-out').width();
	var outright = outleft + outwidth;
	var inleft = $('.'+classname).offset().left;

	if( w*n + inleft  < outleft ){
		$('.'+classname).stop(true).animate({'left': (-w*n)+'px'}, 300);
	}else if(w*n+w + inleft > outright){
		$('.'+classname).stop(true).animate({'left': (outwidth-w*n-w)+'px'}, 300);
	}
}