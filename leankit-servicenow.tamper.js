// ==UserScript==
// @name           ServiceNow Leankit Link Replacer
// @namespace      https://github.com/jeremiahshirk/userscript
// @version        0.0.4
// @description    replace servicenow identifiers in LeanKit with a link
// @include        https://ksu.leankit.com/*
// @run-at         document-end
// ==/UserScript==

setInterval(function(){
  $("div.text").not(".wserewrite")
    .each(function () {
      label = $(this).text().replace(
          /((RITM|REQ|INC|TASK)[0-9]+)/,
          '<a target="_" style="color:blue" href="https://kstate.service-now.com/nav_to.do?uri=textsearch.do?sysparm_search=$1">$1</a>');
      label = label.replace(/(Bug )([0-9]+)/i,'<a target="_" style="color:blue" href="https://tools.ome.ksu.edu/bugzilla/show_bug.cgi?id=$2">$1$2</a>');
      $(this).html(label);
      $(this).addClass("wserewrite");
    });
},1000);
