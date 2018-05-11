// ==UserScript==
// @name           EST Sharepoint documentation updates
// @namespace      https://github.com/kstateome/userscript
// @version        0.0.8
// @description    automate some sharepoint things
// @include        https://ksuemailprod.sharepoint.com/sites/est/*
// @require        https://code.jquery.com/jquery-latest.min.js
// @grant          GM_addStyle
// @run-at         document-end
// ==/UserScript==

function loadoverview(){
    console.log("overview check");
	if(window.location.search.indexOf('id=')>0) {
	    over=$("a:contains('Overview.aspx')").attr('href');
	    if(over) {
		console.log("overview found");
		window.location = over;
		clearInterval(overviewchecker);
	    }
	}
}
if(window.location.pathname.indexOf('Pages/Forms/AllItems.aspx')>0) {
    loadoverview();
    var overviewchecker = setInterval(loadoverview,100);
}

// polling
// on change: div.ms-List-page

