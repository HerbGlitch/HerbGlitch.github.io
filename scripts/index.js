var slides = [
"ps-ss-flowers",
"ps-ss-barbwire",
"ps-ss-sunset"
];
var slideNum = 0;


//var start = setInterval(nextSlide(), 1000);

function nextSlide(){
	var prevSlideNum = slideNum;
	slideNum++;
	if(slideNum >= slides.length){
		slideNum = 0;
	}
	document.getElementById(slides[prevSlideNum]).id = slides[slideNum];
}

function previousSlide(){
	var prevSlideNum = slideNum;
	slideNum--;
	if(slideNum < 0){
		slideNum = slides.length - 1;
	}
	document.getElementById(slides[prevSlideNum]).id = slides[slideNum];
}