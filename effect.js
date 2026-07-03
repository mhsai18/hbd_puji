document.addEventListener("DOMContentLoaded", function () {

    const instruction = document.getElementById("instruction-page");
    const countdown = document.getElementById("countdown-overlay");
    const startBtn = document.getElementById("startJourney");

    // Hide countdown initially
    countdown.style.display = "none";

    startBtn.addEventListener("click", function () {

        instruction.style.display = "none";

        countdown.style.display = "flex";

    });

});
const isMobile =
/Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(
navigator.userAgent
);

if(isMobile){

const warning=document.createElement("div");

warning.id="desktop-warning";

warning.innerHTML=`

<div class="desktop-card">

<h1>💻 Desktop Recommended</h1>

<p>

This website has been specially crafted
for Desktop and Laptop.

For the best experience,
please open it on a computer/laptop.

</p>

<button id="continueBtn">

Continue Anyway

</button>

</div>

`;

document.body.appendChild(warning);

warning.style.display="flex";

document.getElementById("countdown-overlay").style.display="none";

document.getElementById("continueBtn").onclick=function(){

warning.remove();

document.getElementById("countdown-overlay").style.display="flex";

};

}
// Change to your birthday
const launchDate = new Date("2026-07-03T18:14:00").getTime();

const overlay = document.getElementById("countdown-overlay");

const timer = setInterval(() => {

    const now = new Date().getTime();

    const distance = launchDate - now;

    if(distance <= 0){

        clearInterval(timer);

        overlay.style.opacity = "0";
        overlay.style.transition = "1s";

        setTimeout(()=>{
            overlay.remove();
        },1000);

        return;
    }

    document.getElementById("days").innerHTML =
        Math.floor(distance/(1000*60*60*24));

    document.getElementById("hours").innerHTML =
        Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    document.getElementById("minutes").innerHTML =
        Math.floor((distance%(1000*60*60))/(1000*60));

    document.getElementById("seconds").innerHTML =
        Math.floor((distance%(1000*60))/1000);

},1000);
$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');

		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');

		// Show the album photos
		$('.album-photo').fadeIn('slow');

		$('.can-zoom').fadeIn('slow');

		});
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}
	function loopEight() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6',).addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		// loopEight();

		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b11').animate({top:240, left: vw-350},500);
		$('#b22').animate({top:240, left: vw-250},500);
		$('#b33').animate({top:240, left: vw-150},500);
		$('#b44').animate({top:240, left: vw-50},500);
		$('#b55').animate({top:240, left: vw+50},500);
		$('#b66').animate({top:240, left: vw+150},500);
		$('#b77').animate({top:240, left: vw+250},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});

		var $messages = $(".message p");   // only inside .message
		var totalMessages = $messages.length;

		function msgLoop(i) {
			if (i < totalMessages - 1) {
				$messages.eq(i).fadeIn('slow').delay(1500).fadeOut('slow').promise().done(function(){
					msgLoop(i + 1);
				});
			}else {

    // Last message stays
    $messages.eq(i).fadeIn('slow');

$('.cake').fadeIn('fast');

setTimeout(function () {

    playDirectorsCut();

}, 8000);

}
		}

		msgLoop(0);
	});

});

// Zoom (lightbox) feature
$('.album-photo').click(function() {
    var src = $(this).attr('src');
    $('#lightbox img').attr('src', src);

    // Force flex only when showing
    $('#lightbox').css('display', 'flex').hide().fadeIn('fast');
});

// Close when clicking outside image
$('#lightbox').click(function(e) {
    if (e.target !== this) return; // only close if background clicked
    $('#lightbox').fadeOut('fast');
});
function playDirectorsCut(){

const screen=document.getElementById("directorsCut");

const terminal=document.getElementById("terminal");
terminal.innerHTML = "";

screen.style.display="flex";

const lines=[

"> Opening Director's Cut...",

"",

"> Project : Birthday Surprise",

"> Developer : your gira,gold babu",

"> Time Spent : 150 hrs (Approx.)",

"",

"> Files Created : 52",

"> Lines of Code written : 3,395",

"> Bugs Fixed : 73",

"> No of days spent : 40",

"",

"> Final Build",

"✔ SUCCESS",

"",

"> Purpose : To create one unforgettable smile ",

"",

"> Thank you for being part of this journey.",

"",

"> Happy Birthday Pujitha 🎂❤️",

"",

"> Wait "

];


let i=0;

function typeLine(){

if (i >= lines.length) {

    terminal.innerHTML += "<br><span class='cursor'>█</span>";

    setTimeout(function () {

        document.getElementById("directorsCut").style.display = "none";

        playPostCredit();

    }, 5000);

    return;
}

let p=document.createElement("div");

terminal.appendChild(p);

let text=lines[i];

let j=0;

let typing=setInterval(()=>{

p.textContent=text.substring(0,j);

j++;

if(j>text.length){

clearInterval(typing);

i++;

setTimeout(typeLine,250);

}

},28);

}

typeLine();

}

document.addEventListener("keydown", function (e) {

    if (i >= lines.length) {

    terminal.innerHTML += "<br><span class='cursor'>█</span>";

    setTimeout(function () {

        document.getElementById("directorsCut").style.display = "none";

        playPostCredit();

    }, 5000);

    return;
}

});
function playPostCredit(){

    document.getElementById("directorsCut").style.display="none";

    

const post=document.getElementById("postCredit");

post.style.display="flex";

const lines=[

"If you're still here... ❤️",

"",

"Thank you for watching till the very end.",

"",

"You just made",

"this website complete.",
"",

"Crafted with Care by M.Hemanth sai any mistakes pls forgive",
"",
"Still a small suprise awaits but for now bye frndu..",
"",
"THE END"

];

const text=document.getElementById("postText");

text.innerHTML="";

let i=0;

function next(){

if(i>=lines.length)return;

text.innerHTML+=lines[i]+"<br>";

i++;

setTimeout(next,1800);

}

next();

}


//alert('hello');