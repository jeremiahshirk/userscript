// ==UserScript==
// @name           ServiceNow Leankit Link Replacer
// @namespace      https://github.com/jeremiahshirk/userscript
// @version        0.0.2
// @description    replace servicenow identifiers in LeanKit with a link
// @include        https://ksu.leankit.com/*
// @run-at         document-end
// ==/UserScript==

setInterval(function(){
  $("div.text").not(".wserewrite")
    .each(function () {
      label = $(this).text().replace(
          /((RITM|REQ|INC)[0-9]+)/,
          '<a target="_" style="color:blue" href="https://kstate.service-now.com/nav_to.do?uri=textsearch.do?sysparm_search=$1">$1</a>');
      $(this).html(label);
      $(this).addClass("wserewrite");
    });
},1000);
