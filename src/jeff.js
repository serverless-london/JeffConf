function changePage (elementID) {
	document.title="JeffConf 2017 - " + elementID;
	window.history.pushState(null,null,elementID);
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
		
		var sitePath=window.location.pathname.replace("/","");

		if(sitePath.length>0){
			changeArticle(sitePath);
			
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

window.onpopstate = function(event){
	if (event) {
		pageLoad()
	} 

};

window.onload = function(){
	pageLoad()
};