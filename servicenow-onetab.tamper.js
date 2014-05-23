// ==UserScript==
// @name           ServiceNow Tab opener to hit same tab
// @namespace      https://github.com/kstateome/userscript
// @version        0.0.1
// @description    modify servicenow links to add target="SN"
// @include        https://mail.google.com/mail/*
// @require        https://code.jquery.com/jquery-1.10.2.min.js
// @run-at         document-end
// ==/UserScript==



    $('body').on('click','[href*="https://kstate.service-now.com/"]', function(e) {
       window.open($(this).attr('href'),'SN');
       return false;
    });

