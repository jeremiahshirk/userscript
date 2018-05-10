// ==UserScript==
// @name           EST Sharepoint documentation updates
// @namespace      https://github.com/kstateome/userscript
// @version        0.0.2
// @description    automate some sharepoint things
// @include        https://ksuemailprod.sharepoint.com/sites/est/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// @grant          GM_addStyle
// @run-at         document-end
// ==/UserScript==

$().ready(
  function() {
    if(window.location.pathname.indexOf('Pages/Forms/AllItems.aspx?id=')>0) {
	$("a:contains('Overview.aspx')").click();
    }
  }
);
