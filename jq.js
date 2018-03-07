<!DOCTYPE html>
<meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi" />
<html>
<head>
	<title>SevenSevenOne</title>
	<script src="js/jquery.js"></script>
	<link rel="stylesheet" href="style/myStyle.css">
	<script src="js/myScript.js"></script>
	<script type="text/javascript">
		$( document ).ready(function() {

            var audio = new Audio("music/Ocean.mp3");
            audio.addEventListener('ended', function() {
                this.currentTime = 0;
                this.play();
            }, false);
            audio.play();

  			/*function bgItem_sizes(){
  				var w_h = $( window ).height();
				var bgItem_w = (w_h*1.4);
				$('.bgItem').width(bgItem_w);
				var bgItem_margin = ( $( window ).width() - bgItem_w )/2;
				$('.bgItem').css({'left':''+bgItem_margin+'px' });
  			};
  			bgItem_sizes();
			//resize
			$( window ).resize(function() {
				bgItem_sizes();
			});*/
			var i =0;
			setInterval(function(){
				//console.log('.bgItem_'+ (i) +'');
				$('.bgItem').each(function () {
		            $(this).fadeOut(3500);
		        });
		        $('.bgItem_'+ (i++) +'').fadeIn(3500);

		        if(i > 4) i = 0;

		        $('.bgSlide').each(function () {
		            $(this).fadeOut(3500);
		        });
		        $('.bgSlide_'+ (i) +'').fadeIn(3500);
			}, 8000);

			//redirect to secondPage
			$( ".bgItem_1" ).click(function() {
				//window.location.href = "http://sevensevenone.smartline.am/sso/Winter/secondPage.html";
				//window.location.href = "http://sevensevenone.smartline.am/sso/secondPage.html#win"; Commented By Armen Varosyan
			});
			$( ".bgItem_2" ).click(function() {
				//window.location.href = "http://sevensevenone.smartline.am/sso/Summer/secondPage.html";
				//window.location.href = "http://sevensevenone.smartline.am/sso/secondPage.html#spr"; Commented By Armen Varosyan
			});
			$( ".bgItem_3" ).click(function() {
				//window.location.href = "http://sevensevenone.smartline.am/sso/Spring/secondPage.html";
				//window.location.href = "http://sevensevenone.smartline.am/sso/secondPage.html#sum"; Commented By Armen Varosyan
			});
			$( ".bgItem_4" ).click(function() {
				//window.location.href = "http://sevensevenone.smartline.am/sso/Autumn/secondPage.html";
				//window.location.href = "http://sevensevenone.smartline.am/sso/secondPage.html#aut"; Commented By Armen Varosyan
			});

		});
	</script>
	<style>
        div.mainContainer {
            background-image: none;
        }
        div.bgSlide{
        	position: absolute;
		    width: 100%;
		    height: 100%;

		    background-repeat: no-repeat;
		    background-size: 100% 100%;
        }

		div.bgSlide_0{
			background-image: url(img/frames/aut.png);
		}
        div.bgSlide_1{
        	background-image: url(img/frames/aut.png);
			display: none;
        }
        div.bgSlide_2{
        	background-image: url(img/frames/win.png);
        	display: none;
        }
        div.bgSlide_3{
        	background-image: url(img/frames/spr.png);
        	display: none;
        }
        div.bgSlide_4{
        	background-image: url(img/frames/sum.png);
        	display: none;
        }
    </style>
</head>
<body>
	<section class="mainContainerBlock">
		<div class="bgSlide bgSlide_0"></div>
		<div class="bgSlide bgSlide_1"></div>
		<div class="bgSlide bgSlide_2"></div>
		<div class="bgSlide bgSlide_3"></div>
		<div class="bgSlide bgSlide_4"></div>

			<div class="mainContainer">
				<div class="resBlock ">
					<div class="bgItem bgItem_0"></div>
					<div class="bgItem bgItem_1"></div>
					<div class="bgItem bgItem_2"></div>
					<div class="bgItem bgItem_3"></div>
					<div class="bgItem bgItem_4"></div>
				</div>
			</div>
	</section>
	<!--
	<section class="mainBlockCont">
			<div class="bgBlock">
				<div class="bgItem bgItem_1"></div>
				<div class="bgItem bgItem_2"></div>
				<div class="bgItem bgItem_3"></div>
				<div class="bgItem bgItem_4"></div>
			</div>
	</section>-->
	<img src="" id="img_0" style='display: none;'>
	<img src="" id="img_1" style='display: none;'>
	<img src="" id="img_2" style='display: none;'>
	<img src="" id="img_3" style='display: none;'>
	<img src="" id="img_4" style='display: none;'>


</body>
<!--<audio autoplay>
<source src="music/Ocean.mp3" type="audio/mpeg">
</audio>-->
</html>
