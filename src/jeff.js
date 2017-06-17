
function changePage (elementID) {
	history.pushState(elementID,null,elementID);
	changeArticle(elementID);
	console.log("Change Page: "+ elementID)
};

function changeArticle(elementID) {
            var contentBody = document.getElementById("contentBody").children;
            for (var i = 0; i < contentBody.length; i++) {
                if (contentBody[i].id == elementID) {
                    contentBody[i].className = "dtc w-100";
                    console.log("Change Article: " + elementID)
                } else {
                contentBody[i].className ="dn";
                }
            }  
};

function loadPage(event){
	console.log ("Load Page called");

	var siteMap = {
		"home": true,
		"agenda": true,
		"speakers": true,
		"venue": true,
		"partners": true,
		"coc": true,
		"tickets": true
	};

	console.log(siteMap)

	console.log ("Window Location: " + window.location.pathname)
	if (window.location.pathname != "") {
		
		var sitePath=window.location.pathname.replace("/","");
		console.log(sitePath);
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

	};
};

window.onpopstate = loadPage(event);
