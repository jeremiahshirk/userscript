// ==UserScript==
// @name         GitHub goto org
// @namespace    https://github.com/
// @version      0.1
// @description  Automatically redirect to the kstateome GitHub org
// @author       Toby
// @match        https://github.com/
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

window.location.replace('https://github.com/orgs/kstateome/dashboard');
