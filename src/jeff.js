function changePage (elementID) {
	document.title="JeffConf 2017 - " + elementID;
	/*
	var pathName = window.location.pathname
	if (pathName > 1) {
		if (pathName.charAt(pathName.length-1)="/") {
			window.history.replaceState(null,null,elementID);
		}
	} else {
		window.history.pushState(null,null,elementID);
	}
	*/
	window.history.pushState(null,null,"/"+elementID);
	changeArticle(elementID);
};

function changeArticle(elementID) {
            var contentBody = document.getElementById("contentBody").children;
            for (var i = 0; i < contentBody.length; i++) {
                if (contentBody[i].id == elementID) {
                    contentBody[i].className = "dtc w-100";
                } else {
                contentBody[i].className ="dn";
                }
            }  
};

function pageLoad(){
	var siteMap = {
		"home": true,
		"agenda": true,
		"speakers": true,
		"venue": true,
		"partners": true,
		"coc": true,
		"tickets": true
	};

	if (window.location.pathname != "") {
		
		var sitePath=window.location.pathname.replace(/\//g, '');

		if(sitePath.length>0){
			/* 
			changeArticle(sitePath);
			*/
			if (siteMap[sitePath]) {
					changeArticle(sitePath)
			} else {
				changeArticle('home')
			}
	
		} else {
			changeArticle('home')
		};

	} else {
		changeArticle('home')
	};
};

function loadiFrames(){

	var iframeSrc = {
		"eventbrite": "//eventbrite.co.uk/tickets-external?eid=34905982734&ref=etckt",
	};

	var frames = document.querySelectorAll ('iframe');

	for (var i = 0; i < frames.length; i++) {
		var frameId = frames[i].id
		
		if (iframeSrc.hasOwnProperty(frameId)) {
			var currFrame = document.getElementById(frameId)
			currFrame.src = iframeSrc[frameId]	
		}
	}
};

window.onpopstate = function(event){
	if (event) {
		pageLoad()
	} 

};

window.onload = function(){
	pageLoad();
	loadiFrames()
};



