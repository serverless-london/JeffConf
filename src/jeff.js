function changeArticle(elementID) {
            var contentBody = document.getElementById("contentBody").children;
            for (var i = 0; i < contentBody.length; i++) {
                if (contentBody[i].id == elementID) {
                    contentBody[i].className = "dtc w-100"
                } else {
                contentBody[i].className ="dn";
                }
            }
    
} 