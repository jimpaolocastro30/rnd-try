var pageMenu_do;
var thumb;

var body_el;
var td_els;
var mainHeader_el = null;
var menuHolder_el = null;
var firstExample_el = null;
var secondExample_el = null;
var productHolder_el = null;
// var productHolder2_el = null; // SAM
// var productHolder3_el = null; // SAM
var myDivAPI_el = null;
var whatIsMainText_el = null;
var logoImage_img = null;
var mainFeatureTableHolder_el = null;
var apiMainText_el = null;
var col1_el = null;
var col2_el = null;
var byFWD_img = null;
var specialNotes_el = null;
var apiMainVideoHolder_el = null;
var apiSeconsVideoHolder_el = null;
var apiLogger_el = null;
var textApiLogger_el = null;
var apiButtonsHolder_el = null;
var playButton;
var pauseButton;
var stopButton;
var scrubbButton;
var volumeButton;
var fullscreenButton;
var setPosterButton;
var setYoutubeButton;
var mp4Button;
var getCurrentTimeButton;
var getTotalTimeButton;
var buyButton;

var apiCheckerInterval;
var separatorWidth = 980;
var mainWidth = 980;
var byFWDImageWidth = 65;
var html5ImageWidth = 95;
var logoImageWidth = 387;
var productHolderWidth = 940;
var productHolderHeight = 550;
var whatIsImageWidth = 415;
var whyBuyImageWidth = 940;
var lastLoggerHeight;
var windowW = 0;
var windowH = 0;
var mainMenuId;
var secondMenuId;
var menuBackground;
var menuSeparator;
var button1NormalColor;
var button1SelectedColor;
var button2NormalColor;
var button2SelectedColor;
var buyButton = null;

var prevent;

var resizeHandlerId_to;

function init(){
	if(window.top != window && window.location.search.indexOf("EVPInstanceName") == -1){
		top.location.href = 'index.html';
	}else{
		pageInit(0,0, "#1f1f1f", "graphics/menu-button-separator.jpg", "#7a7a7a","#0099ff", "#FFFFFF", "#0099ff");
	}
}

function pageInit(p1, p2, p3, p4, p5, p6, p7, p8){

	mainMenuId = p1;
	secondMenuId = p2;
	menuBackground = p3;
	menuSeparator = p4;
	button1NormalColor = p5;
	button1SelectedColor = p6;
	button2NormalColor = p7;
	button2SelectedColor = p8;

	body_el = document.getElementsByTagName("body")[0];
	td_els = document.getElementsByTagName("td");
	specialNotes_el = document.getElementById("specialNotes");
	whatIsMainText_el = document.getElementById("whatIsMainText");
	mainFeatureTableHolder_el  = document.getElementById("mainFeatureTableHolder");
	col1_el = document.getElementById("col1");
	col2_el = document.getElementById("col2");
	mainHeader_el = document.getElementById("mainHeader");
	menuHolder_el = document.getElementById("menuHolder");
	productHolder_el = document.getElementById("myDiv");
	// productHolder2_el = document.getElementById("myDiv2"); // SAM
	// productHolder3_el = document.getElementById("myDiv3"); // SAM
	myDivAPI_el = document.getElementById("myDivAPI");
	// firstExample_el = document.getElementById("firstExample"); // SAM
	// secondExample_el = document.getElementById("secondExample"); // SAM
	// thirdExample_el = document.getElementById("thirdExample"); // SAm
	logoImage_img = document.getElementById("logoImage");
	apiMainText_el = document.getElementById("apiMainText");
	apiButtonsHolder_el = document.getElementById("apiButtonsHolder");
	apiLogger_el = document.getElementById("apiLogger");
	textApiLogger_el = document.getElementById("textApiLogger");
	apiMainVideoHolder_el  = document.getElementById("apiMainVideoHolder");
	apiSeconsVideoHolder_el = document.getElementById("apiSeconsVideoHolder");
	byFWD_img = document.getElementById("byFWD");

	productHolder_el.style.margin = "auto";
	// productHolder2_el.style.margin = "auto"; // SAM
	// productHolder3_el.style.margin = "auto"; // SAM

	// setupByFWD(); // SAM
	// setupMenu(); // SAM
	// setupVideoPlayer();
	// setupVideoPlayer2(); // SAM
	// setupVideoPlayer3(); // SAM
	setupAPIPlayer();
	regesterApi();
	// setupLightboxPlayer(); // SAM
	// setupBuyButton();

	// SAM
	// positionStuff();
	// setTimeout( function(){
	// 	positionStuff();
	// }, 300);

	if(window.addEventListener){
		window.addEventListener("resize", onResizeHandler);
	}else if(window.attachEvent){
		window.attachEvent("onresize", onResizeHandler);
	}


}

function clickHandler(e){

	if(e.mainButtonId == 0 && e.buttonId == 0){
		window.location.href = "index.html";
	}else if(e.mainButtonId == 0 && e.buttonId == 1){
		window.location.href = "minimal-white.html";
	}else if(e.mainButtonId == 1 && e.buttonId == 0){
		window.location.href = "modern-dark.html";
	}else if(e.mainButtonId == 1 && e.buttonId == 1){
		window.location.href = "modern-white.html";
	}else if(e.mainButtonId == 2 && e.buttonId == 0){
		window.location.href = "clasic-dark.html";
	}else if(e.mainButtonId == 2 && e.buttonId == 1){
		window.location.href = "clasic-white.html";
	}else if(e.mainButtonId == 3 && e.buttonId == 0){
		window.location.href = "metal-dark.html";
	}else if(e.mainButtonId == 3 && e.buttonId == 1){
		window.location.href = "metal-white.html";
	}else if(e.mainButtonId == 4 && e.buttonId == 0){
		window.location.href = "gr.html";
	}else if(e.mainButtonId == 4 && e.buttonId == 1){
		window.location.href = "hex.html";
	}else if(e.mainButtonId == 5 && e.buttonId == 0){
		window.location.href = "sticky.html";
	}
};

//#############################//
/* API */
//#############################//
function regesterApi(){
	clearInterval(apiCheckerInterval);
	if(!window.playerAPI){
		apiCheckerInterval = setInterval(regesterApi, 100);
	}else{
		// positionTextAndSeparators(); // SAM
		window.playerAPI.addListener(FWDEVPlayer.READY, apiReadyHandler);
		window.playerAPI.addListener(FWDEVPlayer.PLAY, apiPlayHandler);
		window.playerAPI.addListener(FWDEVPlayer.PAUSE, apiPauseHandler);
		window.playerAPI.addListener(FWDEVPlayer.STOP, apiStopHandler);
		window.playerAPI.addListener(FWDEVPlayer.ERROR, apiErrorHandler);
		window.playerAPI.addListener(FWDEVPlayer.UPDATE_POSTER_SOURCE, apiUpdatePosterSource);
		window.playerAPI.addListener(FWDEVPlayer.UPDATE_VIDEO_SOURCE, apiUpdateVideoSource);
		window.playerAPI.addListener(FWDEVPlayer.GO_FULLSCREEN, apiGoFullScreenHandler);
		window.playerAPI.addListener(FWDEVPlayer.GO_NORMALSCREEN, apiGoNormalScreenHandler);
		window.playerAPI.addListener(FWDEVPlayer.PLAY_COMPLETE, apiPlayCompleteHandler);
	}
}

function apiReadyHandler(){
	setupAPIButtons();
	addMessage("API ready!");
};

function apiPlayHandler(){
	addMessage("play");
};

function apiPauseHandler(){
	addMessage("pause");
};

function apiStopHandler(){
	addMessage("stop");
};

function apiErrorHandler(e){
	addMessage(e.error);
};

function apiUpdatePosterSource(){
	addMessage("poster source updated to " + "<font color='#0099FF'>" + playerAPI.getPosterSource() + "</font>");
}

function apiUpdateVideoSource(){
	addMessage("video source updated to " + "<font color='#0099FF'>" + playerAPI.getVideoSource() + "</font>");
}

function apiGoFullScreenHandler(){
	lastLoggerHeight = playerAPI.stageHeight + "px";
	prevent = true;
	addMessage("go fullscreen");
}

function apiGoNormalScreenHandler(){
	addMessage("exit fullscreen");
	prevent = true;
	if(!FWDEVPUtils.isIEAndLessThen9) apiLogger_el.style.height = lastLoggerHeight + "px";
	setTimeout(function(){
		prevent = false;
		positionTextAndSeparators();
	}, 500);
}

function apiPlayCompleteHandler(){
	addMessage("play complete");
};

// SAM
//########################################//
/* Setup buy button */
//########################################//
// function setupBuyButton(){
// 	FWDBuyButton.setPrototype();
// 	buyButton = new FWDBuyButton("graphics/buy.png","graphics/hello.png", 70,70,30,60);
// 	buyButton.setX(0);
// 	body_el.appendChild(buyButton.screen);
// 	self.positionBuyButton();
// }

// SAM
// function positionBuyButton(){
// 	if(buyButton){
// 		self.buyButton.setY(27)
// 	}
//
// 	if(windowW < 980){
// 		self.buyButton.setY(310)
// 	}
// }

//#####################################//
/* Setup API buttons */
//####################################//
function setupAPIButtons(){
	addMessage("Event listeners console...");
	FWDPageSimpleButton.setPrototype();
	playButton = new FWDPageSimpleButton("play", "#FFFFFF", "#000000",  "#000000", "#FFFFFF");
	playButton.getStyle().marginRight = "14px";
	playButton.getStyle().marginTop = "6px";
	playButton.addListener(FWDPageSimpleButton.CLICK, playClickHandler);

	FWDPageSimpleButton.setPrototype();
	pauseButton = new FWDPageSimpleButton("pause", "#FFFFFF", "#000000",  "#000000", "#FFFFFF");
	pauseButton.getStyle().marginRight = "14px";
	pauseButton.getStyle().marginTop = "6px";
	pauseButton.addListener(FWDPageSimpleButton.CLICK, pauseClickHandler);

	FWDPageSimpleButton.setPrototype();
	stopButton = new FWDPageSimpleButton("stop", "#FFFFFF", "#000000",  "#000000", "#FFFFFF");
	stopButton.getStyle().marginRight = "14px";
	stopButton.getStyle().marginTop = "5px";
	stopButton.addListener(FWDPageSimpleButton.CLICK, stopClickHandler);

	FWDPageSimpleButton.setPrototype();
	scrubbButton = new FWDPageSimpleButton("scrub to 50%", "#FFFFFF", "#000000",  "#000000", "#FFFFFF");
	scrubbButton.getStyle().marginRight = "14px";
	scrubbButton.getStyle().marginTop = "6px";
	scrubbButton.addListener(FWDPageSimpleButton.CLICK, scrubbClickHandler);

	FWDPageSimpleButton.setPrototype();
	volumeButton = new FWDPageSimpleButton("set volume to 50%", "#FFFFFF", "#000000",  "#000000", "#FFFFFF");
	volumeButton.getStyle().marginRight = "14px";
	volumeButton.getStyle().marginTop = "6px";
	volumeButton.addListener(FWDPageSimpleButton.CLICK, volumeClickHandler);

	FWDPageSimpleButton.setPrototype();
	fullscreenButton = new FWDPageSimpleButton("go fullscreen", "#FFFFFF", "#000000",  "#000000", "#FFFFFF");
	fullscreenButton.getStyle().marginRight = "14px";
	fullscreenButton.getStyle().marginTop = "6px";
	fullscreenButton.addListener(FWDPageSimpleButton.CLICK, fullscreenClickHandler);

	FWDPageSimpleButton.setPrototype();
	setPosterButton = new FWDPageSimpleButton("set poster src", "#FFFFFF", "#000000",  "#000000", "#FFFFFF");
	setPosterButton.getStyle().marginRight = "14px";
	setPosterButton.getStyle().marginTop = "6px";
	setPosterButton.addListener(FWDPageSimpleButton.CLICK, setPosterClickHandler);

	FWDPageSimpleButton.setPrototype();
	setYoutubeButton = new FWDPageSimpleButton("set youtube src", "#FFFFFF", "#000000",  "#000000", "#FFFFFF");
	setYoutubeButton.getStyle().marginRight = "14px";
	setYoutubeButton.getStyle().marginTop = "6px";
	setYoutubeButton.addListener(FWDPageSimpleButton.CLICK, setYoutubeClickHandler);

	FWDPageSimpleButton.setPrototype();
	vimeoYoutubeButton = new FWDPageSimpleButton("set vimeo src", "#FFFFFF", "#000000",  "#000000", "#FFFFFF");
	vimeoYoutubeButton.getStyle().marginRight = "14px";
	vimeoYoutubeButton.getStyle().marginTop = "6px";
	vimeoYoutubeButton.addListener(FWDPageSimpleButton.CLICK, setVimeoClickHandler);

	FWDPageSimpleButton.setPrototype();
	mp4Button = new FWDPageSimpleButton("set mp4 source", "#FFFFFF", "#000000",  "#000000", "#FFFFFF");
	mp4Button.getStyle().marginRight = "14px";
	mp4Button.getStyle().marginTop = "6px";
	mp4Button.addListener(FWDPageSimpleButton.CLICK, setMp4ClickHandler);

	FWDPageSimpleButton.setPrototype();
	mp4Button = new FWDPageSimpleButton("set mp4 source", "#FFFFFF", "#000000",  "#000000", "#FFFFFF");
	mp4Button.getStyle().marginRight = "14px";
	mp4Button.getStyle().marginTop = "6px";
	mp4Button.addListener(FWDPageSimpleButton.CLICK, setMp4ClickHandler);

	FWDPageSimpleButton.setPrototype();
	getCurrentTimeButton = new FWDPageSimpleButton("get time", "#FFFFFF", "#000000",  "#000000", "#FFFFFF");
	getCurrentTimeButton.getStyle().marginRight = "14px";
	getCurrentTimeButton.getStyle().marginTop = "6px";
	getCurrentTimeButton.addListener(FWDPageSimpleButton.CLICK, getCurrentTimeClickHandler);

	FWDPageSimpleButton.setPrototype();
	getTotalTimeButton = new FWDPageSimpleButton("get duration", "#FFFFFF", "#000000",  "#000000", "#FFFFFF");
	getTotalTimeButton.getStyle().marginRight = "14px";
	getTotalTimeButton.getStyle().marginTop = "6px";
	getTotalTimeButton.addListener(FWDPageSimpleButton.CLICK, getTotalTimeClickHandler);

	// SAM
	// apiButtonsHolder_el.appendChild(playButton.screen);
	// apiButtonsHolder_el.appendChild(pauseButton.screen);
	// apiButtonsHolder_el.appendChild(stopButton.screen);
	// apiButtonsHolder_el.appendChild(scrubbButton.screen);
	// apiButtonsHolder_el.appendChild(volumeButton.screen);
	// apiButtonsHolder_el.appendChild(fullscreenButton.screen);
	// apiButtonsHolder_el.appendChild(setPosterButton.screen);
	// apiButtonsHolder_el.appendChild(setYoutubeButton.screen);
	// apiButtonsHolder_el.appendChild(vimeoYoutubeButton.screen);
	// apiButtonsHolder_el.appendChild(mp4Button.screen);
	// apiButtonsHolder_el.appendChild(getCurrentTimeButton.screen);
	// apiButtonsHolder_el.appendChild(getTotalTimeButton.screen);
};

function playClickHandler(){
	playerAPI.play();
}

function pauseClickHandler(){
	playerAPI.pause();
}

function stopClickHandler(){
	playerAPI.stop();
}

function scrubbClickHandler(){
	playerAPI.scrub(.5);
}

function volumeClickHandler(){
	playerAPI.setVolume(.5);
}

function fullscreenClickHandler(){
	playerAPI.goFullScreen();
}

function setPosterClickHandler(){
	playerAPI.setPosterSource("content/posters/youtube-poster.jpg, content/posters/youtube-poster-mobile.jpg");
}

function setVimeoClickHandler(){
	playerAPI.setVideoSource("https://vimeo.com/245771395");
}

function setYoutubeClickHandler(){
	playerAPI.setVideoSource("https://www.youtube.com/watch?v=-1KMSzY6tQc");
}

function setMp4ClickHandler(){
	playerAPI.setVideoSource("content/videos/desktop.mp4, content/videos/mobile.mp4");
}

function getCurrentTimeClickHandler(){
	addMessage("current time: " +  "<font color='#0099FF'>"+  playerAPI.getCurrentTime() + "</font>");
}

function getTotalTimeClickHandler(){
	addMessage("total time: " +  "<font color='#0099FF'>" + playerAPI.getTotalTime() + "</font>");
}


// SAM
function addMessage(message){
	// var currentInnerHTML = textApiLogger_el.innerHTML + message + "<br>";
	// self.textApiLogger_el.innerHTML = currentInnerHTML;
	// var top = -(textApiLogger_el.offsetHeight -  apiLogger_el.offsetHeight);
	// if(top > 0) top = 0;
	// setTimeout(function(){
	// 	self.textApiLogger_el.style.top = top + "px";
	// });
};

//#####################################//
/* Position stuff */
//#####################################//
function positionStuff(){
	// windowW = menuHolder_el.offsetWidth;
	// pageMenu_do.positionAndResize(windowW);
	// positionLogoImage();
	// positionTextAndSeparators();
	// positionBuyButton();
}

function setupVideoPlayerForSideVideo(videoLinks, videoId, instanceName){
	$('#'+ videoId).empty();
	var defaultVideoLinkIndex = 0;
	console.log(instanceName, videoId, videoLinks);
	FWDEVPlayer.videoStartBehaviour = "stop";

	new FWDEVPlayer({
		//main settings
		useYoutube:"yes",
		useVimeo:"no",
		instanceName:instanceName,
		parentId:videoId,
		mainFolderPath:"js/video_player/content",
		skinPath:"minimal_skin_dark",
		displayType:"responsive",
		autoScale:"yes",
		fillEntireVideoScreen:"yes",
		useHEXColorsForSkin:"no",
		normalHEXButtonsColor:"#FF0000",
		selectedHEXButtonsColor:"#FFFFFF",
		startAtVideoSource:defaultVideoLinkIndex,
		videoSource: videoLinks,
		posterPath:"",
		rightClickContextMenu:"disabled",
		useChromeless:"no",
		addKeyboardSupport:"no",
		showPreloader:"yes",
		preloaderColors:["#999999", "#FFFFFF"],
		autoPlay:"no",
		loop:"no",
		maxWidth:980,
		maxHeight:552,
		volume:.8,
		backgroundColor:"#000000",
		posterBackgroundColor:"#3b9946",
		//logo settings
		showLogo:"yes",
		hideLogoWithController:"yes",
		logoPosition:"topRight",
		logoLink:"http://www.google.com",
		logoPath:"/img/playerIcon70x70.png",
		logoMargins:5,
		//controller settings
		showController:"yes",
		showControllerWhenVideoIsStopped:"yes",
		showVolumeScrubber:"yes",
		showVolumeButton:"yes",
		showTime:"yes",
		showRewindButton:"no",
		showQualityButton:"yes",
		showShareButton:"no",
		showEmbedButton:"no",
		showDownloadButton:"no",
		showFullScreenButton:"yes",
		repeatBackground:"yes",
		controllerHeight:41,
		controllerHideDelay:3,
		startSpaceBetweenButtons:7,
		spaceBetweenButtons:9,
		mainScrubberOffestTop:14,
		scrubbersOffsetWidth:4,
		timeOffsetLeftWidth:5,
		timeOffsetRightWidth:3,
		volumeScrubberWidth:80,
		volumeScrubberOffsetRightWidth:0,
		timeColor:"#888888",
		youtubeQualityButtonNormalColor:"#888888",
		youtubeQualityButtonSelectedColor:"#FFFFFF",
		//playback rate / speed
		showPlaybackRateButton:"no",
		defaultPlaybackRate:"1", //0.25, 0.5, 1, 1.25, 1.5, 2
		//embed window
		embedWindowCloseButtonMargins:0,
		borderColor:"#333333",
		mainLabelsColor:"#FFFFFF",
		secondaryLabelsColor:"#a1a1a1",
		shareAndEmbedTextColor:"#5a5a5a",
		inputBackgroundColor:"#000000",
		inputColor:"#FFFFFF",
		//subtitles
		showSubtitleButton:"no",
		subtitlesOffLabel:"Subtitle off",
		startAtSubtitle:1,
		subtitlesSource:[
			// {subtitlePath:"content/english_subtitle.txt", subtileLabel:"English"},
			// {subtitlePath:"content/romanian_subtitle.txt", subtileLabel:"Romanian"},
			// {subtitlePath:"content/spanish_subtitle.txt", subtileLabel:"Spanish"}
		],
		//annotations
		annotiationsListId:"none",
		showAnnotationsPositionTool:"no",
		//ads
		openNewPageAtTheEndOfTheAds:"no",
		adsSource:null,
		adsButtonsPosition:"right",
		skipToVideoText:"You can skip to video in: ",
		skipToVideoButtonText:"Skip Ad",
		timeToHoldAds:4,
		adsTextNormalColor:"#999999",
		adsTextSelectedColor:"#FFFFFF",
		adsBorderNormalColor:"#666666",
		adsBorderSelectedColor:"#FFFFFF"
	});
	setTimeout(function(){
		$('#'+ videoId +' div:nth-child(2)').css('display', 'none');
	}, 10);
	regesterApi();

	positionStuff();
	setTimeout( function(){
		positionStuff();
		}, 300);

	if(window.addEventListener){
		window.addEventListener("resize", onResizeHandler);
	}else if(window.attachEvent){
		window.attachEvent("onresize", onResizeHandler);
	}
}

function setupVideoPlayerForMainContentMovie(videoLinks, videoId, instanceName, posterLink){
	$('#'+ videoId).empty();
	var defaultVideoLinkIndex = 0;
	console.log(instanceName, videoId, videoLinks);
	FWDEVPlayer.videoStartBehaviour = "stop";


	var ads = [{
		source:"https://d1cb8o42xlcwfb.cloudfront.net/media/Videos/Featured/PILIPINAS%20HD/Pilipinas%20HD/Pilipinas%20HD%20Teaser%20Files%20A/Pilipinas%20HD_Teaser_Bahay%20Na%20Tisa.mp4",
		timeStart:"00:00:05",
		timeToHoldAds:4,
		thumbnailSource:posterLink,
		link:"https://www.boysen.com.ph/",
		target:"_blank"
	}]
	new FWDEVPlayer({
		//main settings
		useYoutube:"no",
		useVimeo:"no",
		instanceName:instanceName,
		parentId:videoId,
		mainFolderPath:"js/video_player/content",
		skinPath:"minimal_skin_dark",
		displayType:"responsive",
		autoScale:"yes",
		fillEntireVideoScreen:"yes",
		useHEXColorsForSkin:"no",
		normalHEXButtonsColor:"#FF0000",
		selectedHEXButtonsColor:"#FFFFFF",
		startAtVideoSource:defaultVideoLinkIndex,
		videoSource: videoLinks,
		posterPath:posterLink,
		rightClickContextMenu:"disabled",
		useChromeless:"no",
		addKeyboardSupport:"no",
		showPreloader:"yes",
		preloaderColors:["#999999", "#FFFFFF"],
		autoPlay:"no",
		loop:"no",
		maxWidth:980,
		maxHeight:552,
		volume:.8,
		backgroundColor:"#000000",
		posterBackgroundColor:"#000000",
		//logo settings
		showLogo:"yes",
		hideLogoWithController:"yes",
		logoPosition:"topRight",
		logoLink:"http://www.google.com",
		logoPath:"/img/playerIcon70x70.png",
		logoMargins:5,
		//controller settings
		showController:"yes",
		showControllerWhenVideoIsStopped:"yes",
		showVolumeScrubber:"yes",
		showVolumeButton:"yes",
		showTime:"yes",
		showRewindButton:"no",
		showQualityButton:"yes",
		showShareButton:"no",
		showEmbedButton:"no",
		showDownloadButton:"no",
		showFullScreenButton:"yes",
		repeatBackground:"yes",
		controllerHeight:41,
		controllerHideDelay:3,
		startSpaceBetweenButtons:7,
		spaceBetweenButtons:9,
		mainScrubberOffestTop:14,
		scrubbersOffsetWidth:4,
		timeOffsetLeftWidth:5,
		timeOffsetRightWidth:3,
		volumeScrubberWidth:80,
		volumeScrubberOffsetRightWidth:0,
		timeColor:"#888888",
		youtubeQualityButtonNormalColor:"#888888",
		youtubeQualityButtonSelectedColor:"#FFFFFF",
		//playback rate / speed
		showPlaybackRateButton:"no",
		defaultPlaybackRate:"1", //0.25, 0.5, 1, 1.25, 1.5, 2
		//embed window
		embedWindowCloseButtonMargins:0,
		borderColor:"#333333",
		mainLabelsColor:"#FFFFFF",
		secondaryLabelsColor:"#a1a1a1",
		shareAndEmbedTextColor:"#5a5a5a",
		inputBackgroundColor:"#000000",
		inputColor:"#FFFFFF",
		//subtitles
		showSubtitleButton:"no",
		subtitlesOffLabel:"Subtitle off",
		startAtSubtitle:1,
		subtitlesSource:[
			// {subtitlePath:"content/english_subtitle.txt", subtileLabel:"English"},
			// {subtitlePath:"content/romanian_subtitle.txt", subtileLabel:"Romanian"},
			// {subtitlePath:"content/spanish_subtitle.txt", subtileLabel:"Spanish"}
		],
		//annotations
		annotiationsListId:"none",
		showAnnotationsPositionTool:"no",
		//ads
		openNewPageAtTheEndOfTheAds:"no",
		adsSource:ads,
		adsButtonsPosition:"right",
		skipToVideoText:"You can skip to video in: ",
		skipToVideoButtonText:"Skip Ad",
		timeToHoldAds:4,
		adsTextNormalColor:"#999999",
		adsTextSelectedColor:"#FFFFFF",
		adsBorderNormalColor:"#666666",
		adsBorderSelectedColor:"#FFFFFF"
	});

	console.log(instanceName.instanceName_str);

	setTimeout(function(){
		$('#'+ videoId +' div:nth-child(2)').css('display', 'none');
	}, 10);
	regesterApi();

	positionStuff();
	setTimeout( function(){
		positionStuff();
		}, 300);

	if(window.addEventListener){
		window.addEventListener("resize", onResizeHandler);
	}else if(window.attachEvent){
		window.attachEvent("onresize", onResizeHandler);
	}
	$('#myDiv div:first-child div:first-child').addClass('w-100');
}

function setupVideoPlayerForMainContentSeries(videoLinks, videoId, instanceName, posterLink){
	$('#'+ videoId).empty();
	var defaultVideoLinkIndex = 0;
	console.log(instanceName, videoId, videoLinks);
	FWDEVPlayer.videoStartBehaviour = "stop";

	console.log(window.instanceName.instanceName_str);

	var ads = [{
		source:"https://d1cb8o42xlcwfb.cloudfront.net/media/Videos/Featured/PILIPINAS%20HD/Pilipinas%20HD/Pilipinas%20HD%20Teaser%20Files%20A/Pilipinas%20HD_Teaser_Bahay%20Na%20Tisa.mp4",
		timeStart:"00:00:05",
		timeToHoldAds:4,
		thumbnailSource:posterLink,
		link:"https://www.boysen.com.ph/",
		target:"_blank"
	}]
	new FWDEVPlayer({
		//main settings
		useYoutube:"no",
		useVimeo:"no",
		instanceName:instanceName,
		parentId:videoId,
		mainFolderPath:"js/video_player/content",
		skinPath:"minimal_skin_dark",
		displayType:"responsive",
		autoScale:"yes",
		fillEntireVideoScreen:"yes",
		useHEXColorsForSkin:"no",
		normalHEXButtonsColor:"#FF0000",
		selectedHEXButtonsColor:"#FFFFFF",
		startAtVideoSource:defaultVideoLinkIndex,
		videoSource: videoLinks,
		posterPath:posterLink,
		rightClickContextMenu:"disabled",
		useChromeless:"no",
		addKeyboardSupport:"no",
		showPreloader:"yes",
		preloaderColors:["#999999", "#FFFFFF"],
		autoPlay:"no",
		loop:"no",
		maxWidth:980,
		maxHeight:552,
		volume:.8,
		backgroundColor:"#000000",
		posterBackgroundColor:"#000000",
		//logo settings
		showLogo:"yes",
		hideLogoWithController:"yes",
		logoPosition:"topRight",
		logoLink:"http://www.google.com",
		logoPath:"/img/playerIcon70x70.png",
		logoMargins:5,
		//controller settings
		showController:"yes",
		showControllerWhenVideoIsStopped:"yes",
		showVolumeScrubber:"yes",
		showVolumeButton:"yes",
		showTime:"yes",
		showRewindButton:"no",
		showQualityButton:"yes",
		showShareButton:"no",
		showEmbedButton:"no",
		showDownloadButton:"no",
		showFullScreenButton:"yes",
		repeatBackground:"yes",
		controllerHeight:41,
		controllerHideDelay:3,
		startSpaceBetweenButtons:7,
		spaceBetweenButtons:9,
		mainScrubberOffestTop:14,
		scrubbersOffsetWidth:4,
		timeOffsetLeftWidth:5,
		timeOffsetRightWidth:3,
		volumeScrubberWidth:80,
		volumeScrubberOffsetRightWidth:0,
		timeColor:"#888888",
		youtubeQualityButtonNormalColor:"#888888",
		youtubeQualityButtonSelectedColor:"#FFFFFF",
		//playback rate / speed
		showPlaybackRateButton:"no",
		defaultPlaybackRate:"1", //0.25, 0.5, 1, 1.25, 1.5, 2
		//embed window
		embedWindowCloseButtonMargins:0,
		borderColor:"#333333",
		mainLabelsColor:"#FFFFFF",
		secondaryLabelsColor:"#a1a1a1",
		shareAndEmbedTextColor:"#5a5a5a",
		inputBackgroundColor:"#000000",
		inputColor:"#FFFFFF",
		//subtitles
		showSubtitleButton:"no",
		subtitlesOffLabel:"Subtitle off",
		startAtSubtitle:1,
		subtitlesSource:[
			// {subtitlePath:"content/english_subtitle.txt", subtileLabel:"English"},
			// {subtitlePath:"content/romanian_subtitle.txt", subtileLabel:"Romanian"},
			// {subtitlePath:"content/spanish_subtitle.txt", subtileLabel:"Spanish"}
		],
		//annotations
		annotiationsListId:"none",
		showAnnotationsPositionTool:"no",
		//ads
		openNewPageAtTheEndOfTheAds:"no",
		adsSource:ads,
		adsButtonsPosition:"right",
		skipToVideoText:"You can skip to video in: ",
		skipToVideoButtonText:"Skip Ad",
		timeToHoldAds:4,
		adsTextNormalColor:"#999999",
		adsTextSelectedColor:"#FFFFFF",
		adsBorderNormalColor:"#666666",
		adsBorderSelectedColor:"#FFFFFF"
	});

	setTimeout(function(){
		$('#'+ videoId +' div:nth-child(2)').css('display', 'none');
	}, 10);
	regesterApi();

	positionStuff();
	setTimeout( function(){
		positionStuff();
		}, 300);

	if(window.addEventListener){
		window.addEventListener("resize", onResizeHandler);
	}else if(window.attachEvent){
		window.attachEvent("onresize", onResizeHandler);
	}
	$('#myDiv div:first-child div:first-child').addClass('w-100');
}

function onResizeHandler(){
	positionStuff();
	setTimeout(positionStuff, 50);
}

function setupAPIPlayer(){
	var videoLinks = [
											{source:"https://www.youtube.com/watch?v=54F0Tk0AbNY", label:"small version"},
											{source:"https://www.youtube.com/watch?v=RgsYs5tyA1k", label:"hd720"},
											{source:"https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8", label:"hd1080"}
									 ],
			ads = [{
								source:"https://www.youtube.com/watch?v=UVXsPV2buuA",
								timeStart:"00:00:00",
								timeToHoldAds:4,
								thumbnailSource:"http://englishbookgeorgia.com/blogebg/wp-content/uploads/2015/01/Lego.jpg",
								link:"http://www.webdesign-flash.ro",
								target:"_blank"
						}],
			defaultVideoLinkIndex = 0;

	new FWDEVPlayer({
		//main settings
		useYoutube:"yes",
		useVimeo:"yes",
		instanceName:instanceName,
		// parentId:"myDivAPI",
		parentId:videoId, // SAM
		mainFolderPath:"js/video_player/content",
		skinPath:"minimal_skin_dark",
		displayType:"responsive",
		autoScale:"yes",
		facebookAppId:"213684265480896",
		fillEntireVideoScreen:"yes",
		useHEXColorsForSkin:"no",
		normalHEXButtonsColor:"#FF0000",
		selectedHEXButtonsColor:"#FFFFFF",
		startAtVideoSource:defaultVideoLinkIndex,
		videoSource:videoLinks,
		posterPath:"",
		rightClickContextMenu:"disabled",
		useChromeless:"no",
		addKeyboardSupport:"no",
		showPreloader:"yes",
		preloaderColors:["#999999", "#FFFFFF"],
		autoPlay:"yes",
		loop:"no",
		maxWidth:800,
		maxHeight:550,
		volume:.8,
		backgroundColor:"#000000",
		posterBackgroundColor:"#0099FF",
		//logo settings
		showLogo:"yes",
		hideLogoWithController:"yes",
		logoPosition:"topRight",
		logoLink:"",
		logoPath:"",
		logoMargins:5,
		//controller settings
		showController:"yes",
		showControllerWhenVideoIsStopped:"yes",
		showVolumeScrubber:"yes",
		showVolumeButton:"yes",
		showTime:"yes",
		showRewindButton:"no",
		showYoutubeQualityButton:"yes",
		showFacebookButton:"no",
		showEmbedButton:"no",
		showFullScreenButton:"yes",
		showQualityButton:"yes",
		showShareButton:"no",
		showDownloadButton:"no",
		repeatBackground:"yes",
		controllerHeight:41,
		controllerHideDelay:3,
		startSpaceBetweenButtons:7,
		spaceBetweenButtons:9,
		mainScrubberOffestTop:14,
		scrubbersOffsetWidth:4,
		timeOffsetLeftWidth:5,
		timeOffsetRightWidth:3,
		volumeScrubberWidth:80,
		volumeScrubberOffsetRightWidth:0,
		timeColor:"#888888",
		youtubeQualityButtonNormalColor:"#888888",
		youtubeQualityButtonSelectedColor:"#FFFFFF",
		//playback rate / speed
		showPlaybackRateButton:"no",
		defaultPlaybackRate:"1", //0.25, 0.5, 1, 1.25, 1.5, 2
		//embed window
		embedWindowCloseButtonMargins:0,
		borderColor:"#333333",
		mainLabelsColor:"#FFFFFF",
		secondaryLabelsColor:"#a1a1a1",
		shareAndEmbedTextColor:"#5a5a5a",
		inputBackgroundColor:"#000000",
		inputColor:"#FFFFFF",
		//subtitles
		showSubtitleButton:"no",
		subtitlesOffLabel:"Subtitle off",
		startAtSubtitle:1,
		subtitlesSource:[
			// {subtitlePath:"content/english_subtitle.txt", subtileLabel:"English"},
			// {subtitlePath:"content/romanian_subtitle.txt", subtileLabel:"Romanian"},
			// {subtitlePath:"content/spanish_subtitle.txt", subtileLabel:"Spanish"}
		],
		//annotations
		annotiationsListId:"none",
		showAnnotationsPositionTool:"no",
		//ads
		openNewPageAtTheEndOfTheAds:"no",
		adsSource:ads,
		adsButtonsPosition:"right",
		skipToVideoText:"You can skip to video in: ",
		skipToVideoButtonText:"Skip Ad",
		timeToHoldAds:4,
		adsTextNormalColor:"#999999",
		adsTextSelectedColor:"#FFFFFF",
		adsBorderNormalColor:"#666666",
		adsBorderSelectedColor:"#FFFFFF"
	});
}

function player(videoLinks, videoId, instanceName, posterLink = "", adsLink = []){
	var defaultVideoLinkIndex = 0,
			adsStartTime = '00:10:00';
	FWDEVPlayer.videoStartBehaviour = "stop";
	console.log(adsLink);

	var adsObj = [{
		source:adsLink[0],
		timeStart:adsStartTime,
		timeToHoldAds:1,
		thumbnailSource:posterLink,
		link:"https://www.boysen.com.ph/",
		target:"_blank"
	}]

	if(adsLink.length == 0 || adsLink == "none"){
		adsObj = null;
	}

	new FWDEVPlayer({
		//main settings
		useYoutube:"no",
		useVimeo:"no",
		instanceName:instanceName,
		parentId:videoId,
		mainFolderPath:"js/video_player/content",
		skinPath:"minimal_skin_dark",
		displayType:"responsive",
		autoScale:"yes",
		fillEntireVideoScreen:"yes",
		useHEXColorsForSkin:"no",
		normalHEXButtonsColor:"#FF0000",
		selectedHEXButtonsColor:"#FFFFFF",
		startAtVideoSource:defaultVideoLinkIndex,
		videoSource: videoLinks,
		posterPath:posterLink,
		rightClickContextMenu:"disabled",
		useChromeless:"no",
		addKeyboardSupport:"no",
		showPreloader:"yes",
		preloaderColors:["#999999", "#FFFFFF"],
		autoPlay:"no",
		loop:"no",
		maxWidth:980,
		maxHeight:552,
		volume:.8,
		backgroundColor:"#000000",
		posterBackgroundColor:"#000000",
		//logo settings
		showLogo:"yes",
		hideLogoWithController:"yes",
		logoPosition:"topRight",
		logoLink:"http://www.google.com",
		// logoPath:"/img/playerIcon70x70.png",
		logoPath:"",
		logoMargins:5,
		//controller settings
		showController:"yes",
		showControllerWhenVideoIsStopped:"yes",
		showVolumeScrubber:"yes",
		showVolumeButton:"yes",
		showTime:"yes",
		showRewindButton:"no",
		showQualityButton:"yes",
		showShareButton:"no",
		showEmbedButton:"no",
		showDownloadButton:"no",
		showFullScreenButton:"yes",
		repeatBackground:"yes",
		controllerHeight:41,
		controllerHideDelay:3,
		startSpaceBetweenButtons:7,
		spaceBetweenButtons:9,
		mainScrubberOffestTop:14,
		scrubbersOffsetWidth:4,
		timeOffsetLeftWidth:5,
		timeOffsetRightWidth:3,
		volumeScrubberWidth:80,
		volumeScrubberOffsetRightWidth:0,
		timeColor:"#888888",
		youtubeQualityButtonNormalColor:"#888888",
		youtubeQualityButtonSelectedColor:"#FFFFFF",
		//playback rate / speed
		showPlaybackRateButton:"no",
		defaultPlaybackRate:"1", //0.25, 0.5, 1, 1.25, 1.5, 2
		//embed window
		embedWindowCloseButtonMargins:0,
		borderColor:"#333333",
		mainLabelsColor:"#FFFFFF",
		secondaryLabelsColor:"#a1a1a1",
		shareAndEmbedTextColor:"#5a5a5a",
		inputBackgroundColor:"#000000",
		inputColor:"#FFFFFF",
		//subtitles
		showSubtitleButton:"no",
		subtitlesOffLabel:"Subtitle off",
		startAtSubtitle:1,
		subtitlesSource:[],
		//annotations
		annotiationsListId:"none",
		showAnnotationsPositionTool:"no",
		//ads
		openNewPageAtTheEndOfTheAds:"no",
		adsSource:adsObj,
		adsButtonsPosition:"right",
		skipToVideoText:"You can skip to video in: ",
		skipToVideoButtonText:"Video will resume <br/> after the ad",
		timeToHoldAds:4,
		adsTextNormalColor:"#999999",
		adsTextSelectedColor:"#FFFFFF",
		adsBorderNormalColor:"#666666",
		adsBorderSelectedColor:"#FFFFFF"
	});

	regesterApi();
	positionStuff();
	setTimeout( function(){
		positionStuff();
	}, 300);

	if(window.addEventListener){
		window.addEventListener("resize", onResizeHandler);
	}else if(window.attachEvent){
		window.attachEvent("onresize", onResizeHandler);
	}

	setTimeout(function(){
		// REMOVE COUNTDOWN OF ADS
		$('#myDiv div:nth-child(1) div:nth-child(11)').css('display', 'none');
		// ADS REDESIGN
		$('#myDiv div:nth-child(1) div:nth-child(10) div:nth-child(1) div:nth-child(2)').css({
			'text-align' 		: 'center',
			'font-size'	 		: '19px'
		});
	}, 500);
}

//#####################################//
/* open popup */
//#####################################//
function openPopup(page, width, height){
	var left = parseInt((screen.width - width)/2);
	var top =  parseInt((screen.height - height)/2);

	if(FWDEVPUtils.isMobile){
		self.popupWindow = window.open(page);
	}else{
		self.popupWindow = window.open(page,"",'width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);
	}
};

function makeid() {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for (var i = 0; i < 5; i++)
	  text += possible.charAt(Math.floor(Math.random() * possible.length));

	return text;
  }
