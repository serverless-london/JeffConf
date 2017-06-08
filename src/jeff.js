function changeArticle(elementID) {
            var contentBody = document.getElementById("contentBody").children;
            for (var i = 0; i < contentBody.length; i++) {
                if (contentBody[i].id == elementID) {
                    contentBody[i].className = "dtc w-100";
                    history.pushState(null,null,elementID)
//                    console.log(elementID)
                } else {
                contentBody[i].className ="dn";
                }
            }   
}

function loadPage(){


	var siteMap = {
		"home": true,
		"agenda": true,
		"speakers": true,
		"venue": true,
		"partners": false,
		"coc": true,
		"tickets": true
	};
	
//	console.log (window.location.pathname)
	if (window.location.pathname != "") {
		
		var sitePath=window.location.pathname.replace("/","");

		if(sitePath.length>0){
			changeArticle(sitePath);
	/*		
			if (typeof siteMap(sitePath) === 'object') {
				if (siteMap(sitePath)) {
					changeArticle(sitePath)
				} else {
					changeArticle('home')
				}
			} else {
				changeArticle('home')
			}
	*/
		} else {
			changeArticle('home')
		};

	};
}