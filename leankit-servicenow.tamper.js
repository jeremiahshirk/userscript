// ==UserScript==
// @name           ServiceNow Leankit Link Replacer
// @namespace      https://github.com/kstateome/userscript
// @version        0.0.13
// @description    replace servicenow identifiers in LeanKit with a link
// @include        https://ksu.leankit.com/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// @grant          GM_addStyle
// @run-at         document-end
// ==/UserScript==

setInterval(function(){
  $("div.text, div.kb-comment-info-section, div.card-text").not(".wserewrite")
    .each(function () {
      label = $(this).text().replace(
          /((PRB|RITM|REQ|INC|TASK|CHG|ENHC|PRJ)[0-9]+)/g,
          '<a target="_" style="color:blue" href="https://kstate.service-now.com/nav_to.do?uri=text_search_exact_match.do?sysparm_search=$1" onclick="event.stopPropagation();">$1</a>');
      label = label.replace(/(Bug )([0-9]+)/i,'<a target="_" style="color:blue" href="https://tools.ome.ksu.edu/bugzilla/show_bug.cgi?id=$2">$1$2</a>');
      $(this).html(label);
      $(this).addClass("wserewrite");
    });
},1000);
