// ==UserScript==
// @name           ServiceNow Leankit Link Replacer
// @namespace      https://github.com/kstateome/userscript
// @version        0.0.5
// @description    replace servicenow and other identifiers in LeanKit with a link
// @include        https://ksu.leankit.com/*
// @run-at         document-end
// ==/UserScript==

// Takes a given div class and converts Service Now and 
//  bugzilla ticket references into html links
function link(divclass) {
  $(divclass).not(".wserewrite")
    .each(function () {
      label = $(this).text().replace(
          /((RITM|REQ|INC|TASK)[0-9]+)/,
          '<a target="_" style="color:blue" href="https://kstate.service-now.com/nav_to.do?uri=textsearch.do?sysparm_search=$1">$1</a>');
      label = label.replace(/(Bug )([0-9]+)/i,'<a target="_" style="color:blue" href="https://tools.ome.ksu.edu/bugzilla/show_bug.cgi?id=$2">$1$2</a>');
      $(this).html(label);
      $(this).addClass("wserewrite");
    });
}

setInterval(function(){
  link("div.text");
  link("div.kb-comment-info-section");
},1000);
