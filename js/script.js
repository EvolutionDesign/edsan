var ImageController = (function(){

	var images = {
		portfolio : [
			"img/design.jpg",
			"img/design2.jpg",
			"img/design3.jpg",
			"img/design4.jpg",
			"img/design5.jpg",
			"img/design6.jpg",
			"img/design7.jpg",
			"img/design8.jpg",
			"img/design9.jpg",
			"img/design10.jpg",
			"img/design11.jpg",		
		],
		house : [
			"img/h1.jpg",
			"img/h2.jpg",
			"img/h3.jpg",
			"img/h4.jpg",
			"img/h5.jpg",
			"img/h6.jpg",
			"img/h7.jpg",
			"img/h8.jpg",
			"img/h9.jpg",
			"img/h10.jpg",
			"img/h11.jpg"
		],
		gypsum : [
			"img/f1.jpg",
			"img/f2.jpg",
			"img/f3.jpg",
			"img/f4.jpg",
			"img/f5.jpg",
			"img/f6.jpg",
			"img/f7.jpg",
			"img/f8.jpg",
			"img/f9.jpg",
			"img/f10.jpg"
		],
		wallpaper : [
			"img/w1.jpg",
			"img/w2.jpg",
			"img/w3.jpg",
			"img/w4.jpg",
			"img/w5.jpg",
			"img/w6.jpg",
			"img/w7.jpg",
			"img/w8.jpg",
			"img/w9.jpg"
		],
		drawing : [
			"img/q1.jpg",
			"img/q2.jpg",
			"img/q3.jpg",
			"img/q4.jpg",
			"img/q5.jpg",
			"img/q6.jpg",
			"img/q7.jpg",
			"img/q8.jpg",
			"img/FACADE.jpg",
		],
		paint : [
			"img/p1.jpg",
			"img/p2.jpg",
			"img/p3.jpg",
			"img/p4.jpg",
			"img/p5.jpg",
			"img/p6.jpg",
			"img/p7.jpg",
			"img/p8.jpg",
			"img/p9.jpg",
			"img/p10.jpg",
			"img/p11.jpg"
		]


	}


	//some code
   return{
	   getImages : images,
   }

})()


var UIController = (function(){

	//dom strings
	var DOMStrings = {
		nextButton : '#next',
		nextBtnGypsum : "#nextGypsum",
		nextBtnPaint : "#nextPaint",
		nextBtnWallpaper : "#nextWallpaper",
		nextBtnHouse : "#nextHouse",
		nextBtnDrawing : "#nextDrawing",
		prevButton : '#prev',
		prevBtnGypsum : "#prevGypsum",
		prevBtnPaint : "#prevPaint",
		prevBtnWallpaper : "#prevWallpaper",
		prevBtnDrawing : "#prevDrawing",
		prevBtnHouse : "#prevHouse",
		sliderPortfolio : '#sliderp',
		sliderGypsum : "#sliderGypsum",
		sliderDrawing : "#sliderDrawing",
		sliderWallpaper : "#sliderWallpaper",
		sliderHouse : "#sliderHouse",
		sliderPaint : "#sliderPaint"


	}
	var elementPortfolio = function(){
		var el

		//select the place in the DOM to be affected
		el = document.querySelector(DOMStrings.sliderPortfolio);

		return el;
	}
	var elementGypsum = function(){
		var element

		//select the place in the DOM to be affected
		element = document.querySelector(DOMStrings.sliderGypsum);

		return element;

	}

	var elementPaint = function(){
		var element

		//select the place in the DOM to be affected
		element = document.querySelector(DOMStrings.sliderPaint);

		return element;

	}
	var elementWallpaper = function(){
		var element

		//select the place in the DOM to be affected
		element = document.querySelector(DOMStrings.sliderWallpaper);

		return element;

	}

	var elementHouse = function(){
		var element

		//select the place in the DOM to be affected
		element = document.querySelector(DOMStrings.sliderHouse);

		return element;

	}
	var elementDrawing = function(){
		var element

		//select the place in the DOM to be affected
		element = document.querySelector(DOMStrings.sliderDrawing);

		return element;

	}
	var num;

	//number increments
	num = 0;

	//some code
	return{
	//gain Access to dom strings
	getDOM : DOMStrings,
	postNxtImage : function(newImg){
		
		if (num >= newImg.portfolio.length){
			num = 0;
		}
		num++;


		elementPortfolio().src = newImg.portfolio[num];

	},
	postPrevImage : function(newImg){
		
		if (num < 0){
			num = newImg.portfolio.length - 1;
		}
		num--;

		
		elementPortfolio().src = newImg.portfolio[num];
	}
	,
//popup Gysum
	postNxtImageGysum : function(newImg){

		if (num >= newImg.gypsum.length){
			num = 0;
		}
		num++;

		elementGypsum().src = newImg.gypsum[num];

	},
	postPrevGypsum : function(newImg){
		if (num < 0){
			num = newImg.portfolio.length - 1;
		}
		num--;

		elementGypsum().src = newImg.gypsum[num];

	},
//popup Paint
	postNxtImagePaint : function(newImg){

		if (num >= newImg.paint.length){
			num = 0;
		}
		num++;


		elementPaint().src = newImg.paint[num];

	},
	prevNxtImagePaint : function(newImg){
		if (num < 0){
			num = newImg.paint.length - 1;
		}
		num--;

		elementPaint().src = newImg.paint[num];

	},
//popup wallpaper
	postNxtImageWallpaper : function(newImg){

		if (num >= newImg.wallpaper.length){
			num = 0;
		}
		num++;


		elementWallpaper().src = newImg.wallpaper[num];

	},
	prevNxtImageWallpaper : function(newImg){
		if (num < 0){
			num = newImg.wallpaper.length - 1;
		}
		num--;

		elementWallpaper().src = newImg.wallpaper[num];

	},
//popup House
	postNxtImageHouse:function(newImg){

		if (num >= newImg.house.length){
			num = 0;
		}
		num++;

		elementHouse().src = newImg.house[num];

	},
	prevNxtImageHouse : function(newImg){
		if (num < 0){
			num = newImg.house.length - 1;
		}
		num--;

		elementHouse().src = newImg.house[num];

	},
//Drawing
	postNxtImageDrawing:function(newImg){

		if (num >= newImg.drawing.length){
			num = 0;
		}
		num++;

		elementDrawing().src = newImg.drawing[num];

	},
	prevNxtImageDrawing : function(newImg){
		if (num < 0){
			num = newImg.drawing.length - 1;
		}
		num--;

		elementDrawing().src = newImg.drawing[num];

	},

	}

})()

var Controller = (function(ICtrl,UICtrl){

	//Access to DOM strings
	var DOM = UICtrl.getDOM;

	//Button Setup
	var setUpEventsListners = function(){
		document.querySelector(DOM.nextButton).addEventListener('click', next);

		document.querySelector(DOM.prevButton).addEventListener('click', prev);
//popup Gysum
		document.querySelector(DOM.nextBtnGypsum).addEventListener('click', nextPopupGypsum);

		document.querySelector(DOM.prevBtnGypsum).addEventListener('click', prevPopupGypsum);
//popup Paint
		document.querySelector(DOM.nextBtnPaint).addEventListener('click', nextPopupPaint);

		document.querySelector(DOM.prevBtnPaint).addEventListener('click', prevPopupPaint);
//popup Wallpaper
		document.querySelector(DOM.nextBtnWallpaper).addEventListener('click', nextPopupWallpaper);

		document.querySelector(DOM.prevBtnWallpaper).addEventListener('click', prevPopupWallpaper);
//popup house
		document.querySelector(DOM.nextBtnHouse).addEventListener('click', nextPopupHouse);

		document.querySelector(DOM.prevBtnHouse).addEventListener('click', prevPopupHouse);
//popup Drawing
		document.querySelector(DOM.nextBtnDrawing).addEventListener('click', nextPopupDrawing);

		document.querySelector(DOM.prevBtnDrawing).addEventListener('click', prevPopupDrawing);
	}

		//new image from array function

		var newImage = function(){

			//remove image from arr
			var img = ICtrl.getImages;

			return img;
		}

//Our Portfolio
	var next = function(){
		//get the next image
		var newImg = newImage();


		//send image to UI
		UICtrl.postNxtImage(newImg);

	}

	var prev = function(){
		//get the prev image from array
		var newImg = newImage();


		//send image to UI
		UICtrl.postPrevImage(newImg);

	}

//Gypsum Popup
	var nextPopupGypsum = function (){
		//get the next image
		var newImg = newImage();


		UICtrl.postNxtImageGysum(newImg);
	
	}
	var prevPopupGypsum = function (){
		//get the prev image from array
		var newImg = newImage();


		//send image to UI
		UICtrl.postPrevGypsum(newImg);

	}
//popup Paint
	var nextPopupPaint = function(){
		
		//get the next image
		var newImg = newImage();


		UICtrl.postNxtImagePaint(newImg);
	}
	var prevPopupPaint = function(){

		//get the next image
		var newImg = newImage();

		UICtrl.prevNxtImagePaint(newImg);
	}
//popup Wallpaper
	var nextPopupWallpaper = function(){

		//get the next image
		var newImg = newImage();


		UICtrl.postNxtImageWallpaper(newImg);
	}

	var prevPopupWallpaper = function(){

		//get the next image
		var newImg = newImage();

		UICtrl.prevNxtImageWallpaper(newImg);
	}
//house
	var nextPopupHouse = function(){

		//get the next image
		var newImg = newImage();


		UICtrl.postNxtImageHouse(newImg);
	}
	var prevPopupHouse = function(){

		//get the next image
		var newImg = newImage();

		UICtrl.prevNxtImageHouse(newImg);
	}
//popup Drawing
	var nextPopupDrawing = function(){

		//get the next image
		var newImg = newImage();


		UICtrl.postNxtImageDrawing(newImg);
	}
	var prevPopupDrawing = function(){

		//get the next image
		var newImg = newImage();


		UICtrl.postNxtImageDrawing(newImg);
	}

	return{
		init : function(){
			setUpEventsListners();

			console.log('application has started')
		}
	}

})(ImageController, UIController);

Controller.init();
