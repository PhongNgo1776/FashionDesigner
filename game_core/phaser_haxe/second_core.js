var buttonCSS, adCloseCSS, adGlareRequest, adSplash, skipText, cntnt, nextBut, adad, imgDiv, redirectUrl, interv, but_timer, total_timer, adImg, trackingDiv, trackingPixel, ad_is_idea_IGA, resumeGame, initIdeaIGA, showIdeaIGA, ideaIgaSplashClick, adCallback, showGame, showAd, initAdGlare, clickOnAd, wgAd, showISAdBut, timerFunc, skipISAd, isAd, isAdAfterSplash, adGlareListener, addSplash;
(function() {
    (function(
    /*``*/
) {
    var _0xC536 = ["position:absolute;bottom:40px;right:0px;min-width:200px;padding: 7px 6px 7px 10px;width: auto;line-height: normal;background: rgba(0,0,0,0.8);border: 1px solid rgba(255,255,255,0.5);border-right: 0;-webkit-tap-highlight-color: rgba(0,0,0,0);color: white;font-size: 13px;font-family: arial,sans-serif;font-weight: normal;","position: absolute;bottom: 15px;right: 20px;color: #999;font-family: Arial;font-size: 10pt;","","idea_IGA","load","GET","none","theGame","undefined","IS_TRIGGER","position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; z-index: 99999;","is-pre-splash-btn","click","content","absolute","div","content2","img","span","button","width:100%;height:100%;position:absolute;opacity: 0;transition: opacity 3s ease-out 0s;","Skip Ad","ISAdSkipText","display:inline-block;height:100%;vertical-align:middle;","vertical-align:middle;","isAd","width:100%;height:100%;text-align:center;background:linear-gradient(#333,#000) repeat scroll 0% 0% transparent;","IS_CLICK","18px","Ad will close in "," seconds","You can skip this ad in ","IS_AD","IS_SPLASH","13px","image","//www.gameswf.com/webgl/games_assets/v1/","style",".splash_but{    -webkit-animation-name: pulsate;    -webkit-animation-duration: 2s;    -webkit-animation-timing-function: ease-in-out;    -webkit-animation-iteration-count: infinite}@-webkit-keyframes pulsate {    0% { width:80%} 50% { width:90%}100% { width:80%}}","playButton.png","//gamesglue.com/assets_for_html5_games/","greyBar.png","sparkles.png","default.png","//gamesglue.com/assets_for_html5_games/splash_bgs/default.png","/","localhost:2000","default","bg.png","a","is-splash-pre","1","100%","position: absolute; top:0; left:0; width:100%; height:100%;background: rgba(18,13,35,.61);","position: absolute; top:0; left:0; width:100%; height:100%;","position:absolute; top:40%; width:100%; height:30%","position: absolute; width: 100%;height:100%","position:absolute; left:21%; width:58%; top:26%","cursor:pointer; display:inline-flex; width:44%; top:46%; height: 44% ;margin:0 auto; left:29%; position:absolute;","transform-origin:center; margin:auto; align-self:center; align-content:center; width:80%","splash_but","position: absolute;text-align: center; width: 100%; color: white; font-size: 1.4em; top:72%","The game will resume after a short advertisment"];

    function _0xC67A(_0xC5D8, _0xC56C) {
        var _0xC548 = _0xC5D8.length;
        var _0xC5A2 = [];
        for (var _0xC60E = 0; _0xC60E < _0xC548; _0xC60E++) {
            _0xC5A2[_0xC60E] = _0xC5D8.charAt(_0xC60E)
        };
        for (var _0xC60E = 0; _0xC60E < _0xC548; _0xC60E++) {
            var _0xC656 = _0xC56C * (_0xC60E + 428) + (_0xC56C % 46539);
            var _0xC536 = _0xC56C * (_0xC60E + 80) + (_0xC56C % 22100);
            var _0xC5FC = _0xC656 % _0xC548;
            var _0xC55A = _0xC536 % _0xC548;
            var _0xC5EA = _0xC5A2[_0xC5FC];
            _0xC5A2[_0xC5FC] = _0xC5A2[_0xC55A];
            _0xC5A2[_0xC55A] = _0xC5EA;
            _0xC56C = (_0xC656 + _0xC536) % 4609115
        };
        var _0xC5B4 = String.fromCharCode(127);
        var _0xC632 = "";
        var _0xC620 = "%";
        var _0xC5C6 = "#1";
        var _0xC644 = "%";
        var _0xC590 = "#0";
        var _0xC57E = "#";
        return _0xC5A2.join(_0xC632).split(_0xC620).join(_0xC5B4).split(_0xC5C6).join(_0xC644).split(_0xC590).join(_0xC57E).split(_0xC5B4)
    }

    function _0xC548() {
        _0xC5A2();
        muteAd(true);
        cntnt.style.display = _0xC536[6];
        if (ad_is_idea_IGA) {
            cntnt.removeChild(adSplash)
        }
    }

    function _0xC55A() {
        ad_is_idea_IGA = true;
        cntnt = document.getElementById(_0xC536[7]);
        adSplash = _0xC668()
    }

    function _0xC56C() {
        if (typeof(trackAnalyticsEvent) != _0xC536[8]) {
            trackAnalyticsEvent(_0xC536[9])
        };
        cntnt.appendChild(adSplash);
        cntnt.style.cssText = _0xC536[10];
        var _0xC548 = document.getElementById(_0xC536[11]);
        _0xC548.addEventListener(_0xC536[12], _0xC57E);
        if (typeof(initContainer) != _0xC536[8]) {
            initContainer()
        }
    }

    function _0xC57E() {
        var _0xC548 = document.getElementById(_0xC536[11]);
        _0xC548.removeEventListener(_0xC536[12], _0xC57E);
        startAd()
    }

    function _0xC590() {}

    function _0xC5A2() {
        muteAd(true);
        _0xC590()
    }

    function _0xC5B4() {
        if (ad_is_idea_IGA) {
            _0xC56C();
            return
        };
        if (config.adglare_campaign == _0xC536[2] || config.adglare_campaign == null) {
            _0xC5EA()
        } else {
            but_timer = 0;
            total_timer = 0;
            adGlareRequest.send()
        }
    }

    function _0xC5C6() {
        adSplash = _0xC668();
        cntnt2 = document.getElementById(_0xC536[13]);
        cntnt2.style.position = _0xC536[14];
        cntnt = document.createElement(_0xC536[15]);
        cntnt.style.cssText = cntnt2.style.cssText;
        cntnt.id = _0xC536[16];
        document.body.appendChild(cntnt);
        var _0xC548 = document.createElement(_0xC536[15]);
        imgDiv = document.createElement(_0xC536[17]);
        trackingDiv = document.createElement(_0xC536[17]);
        var _0xC55A = document.createElement(_0xC536[18]);
        nextBut = document.createElement(_0xC536[19]);
        adad = document.createElement(_0xC536[15]);
        skipText = document.createElement(_0xC536[15]);
        adad.style.cssText = _0xC536[20];
        nextBut.style.cssText = buttonCSS;
        nextBut.innerHTML = _0xC536[21];
        skipText.style.cssText = adCloseCSS;
        skipText.id = _0xC536[22];
        _0xC55A.style.cssText = _0xC536[23];
        imgDiv.style.cssText = _0xC536[24];
        imgDiv.id = _0xC536[25];
        trackingDiv.style.cssText = _0xC536[24];
        _0xC548.style.cssText = _0xC536[26];
        _0xC548.addEventListener(_0xC536[12], _0xC5D8);
        cntnt.style.zIndex = -1;
        _0xC548.style.zIndex = -1;
        _0xC548.appendChild(_0xC55A);
        _0xC548.appendChild(imgDiv);
        _0xC548.appendChild(trackingDiv);
        adad.appendChild(nextBut);
        adad.appendChild(_0xC548);
        adad.appendChild(skipText);
        cntnt.appendChild(adad)
    }

    function _0xC5D8() {
        if (redirectUrl != _0xC536[2]) {
            window.open(redirectUrl);
            if (typeof(trackAnalyticsEvent) != _0xC536[8]) {
                trackAnalyticsEvent(_0xC536[27])
            }
        }
    }

    function _0xC5EA() {
        $preroll.init()
    }

    function _0xC5FC() {
        nextBut.innerHTML = _0xC536[21];
        nextBut.style.fontSize = _0xC536[28];
        nextBut.addEventListener(_0xC536[12], _0xC620)
    }

    function _0xC60E() {
        if (total_timer == 0) {
            _0xC620()
        } else {
            skipText.innerHTML = _0xC536[29] + total_timer + _0xC536[30];
            total_timer--
        };
        if (but_timer == 0) {
            _0xC5FC()
        } else {
            nextBut.innerHTML = _0xC536[31] + but_timer;
            but_timer--
        }
    }

    function _0xC620() {
        _0xC590();
        trackingPixel = _0xC536[2];
        redirectUrl = _0xC536[2];
        cntnt.style.zIndex = -1;
        adad.style.opacity = 0;
        nextBut.removeEventListener(_0xC536[12], _0xC620);
        window.clearInterval(interv);
        muteAd(true);
        cntnt.removeChild(adSplash)
    }

    function _0xC632(_0xC55A) {
        if (typeof(trackAnalyticsEvent) != _0xC536[8]) {
            trackAnalyticsEvent(_0xC536[32])
        };
        trackingPixel = _0xC55A.campaign.custom_fields.tracking_pixel;
        cntnt.appendChild(adSplash);
        adSplash.style.zIndex = 1;
        adad.style.zIndex = -1;
        var _0xC548 = document.getElementById(_0xC536[11]);
        _0xC548.addEventListener(_0xC536[12], _0xC644);
        redirectUrl = _0xC55A.campaign.creative_data.click_url;
        but_timer = parseInt(_0xC55A.campaign.custom_fields.skip_time);
        total_timer = parseInt(_0xC55A.campaign.custom_fields.total_time);
        adImg = _0xC55A.campaign.creative_data.image_url;
        cntnt.style.zIndex = 1
    }

    function _0xC644() {
        if (typeof(trackAnalyticsEvent) != _0xC536[8]) {
            trackAnalyticsEvent(_0xC536[33])
        };
        nextBut.style.fontSize = _0xC536[34];
        skipText.innerHTML = _0xC536[29] + total_timer + _0xC536[30];
        nextBut.innerHTML = _0xC536[31] + but_timer;
        interv = setInterval(_0xC60E, 1000);
        imgDiv.src = adImg;
        trackingDiv.src = trackingPixel;
        adSplash.style.zIndex = -1;
        adad.style.opacity = 1;
        adad.style.zIndex = 1
    }

    function _0xC656() {
        if (this.responseText == _0xC536[2]) {
            _0xC5EA()
        } else {
            var _0xC548 = JSON.parse(this.responseText);
            if (_0xC548.response.success == 1) {
                if (_0xC548.response.campaign.creative_type == _0xC536[35]) {
                    _0xC632(_0xC548.response)
                }
            } else {
                if (_0xC548.response.success == 0) {
                    _0xC5EA()
                }
            }
        };
        adGlareRequest.open(_0xC536[5], config.adglare_campaign)
    }

    function _0xC668() {
        var _0xC5B4 = _0xC536[36];
        var _0xC5D8 = document.createElement(_0xC536[37]);
        _0xC5D8.innerHTML = _0xC536[38];
        document.head.appendChild(_0xC5D8);
        var _0xC644 = _0xC5B4 + _0xC536[39];
        var _0xC57E = _0xC536[40] + _0xC536[39];
        var _0xC5FC = _0xC5B4 + _0xC536[41];
        var _0xC56C = _0xC536[40] + _0xC536[41];
        var _0xC668 = _0xC5B4 + _0xC536[42];
        var _0xC590 = _0xC536[40] + _0xC536[42];
        var _0xC5A2 = _0xC5B4 + _0xC536[43];
        var _0xC55A = _0xC536[44];
        var _0xC67A = location.href.split(_0xC536[45]);
        var _0xC5EA = _0xC67A[_0xC67A.length - 2];
        if (_0xC5EA == _0xC536[46]) {
            _0xC5EA = _0xC536[47]
        };
        if (typeof(recievedJson) != _0xC536[8]) {
            _0xC5EA = recievedJson.name
        };
        var _0xC632 = _0xC5B4 + _0xC536[48];
        var _0xC68C = document.createElement(_0xC536[15]);
        var _0xC5C6 = document.createElement(_0xC536[15]);
        var _0xC6B0 = document.createElement(_0xC536[15]);
        var _0xC69E = document.createElement(_0xC536[17]);
        var _0xC6E6 = document.createElement(_0xC536[17]);
        var _0xC6C2 = document.createElement(_0xC536[49]);
        var _0xC656 = document.createElement(_0xC536[17]);
        var _0xC60E = document.createElement(_0xC536[17]);
        var _0xC6D4 = document.createElement(_0xC536[17]);
        var _0xC6F8 = document.createElement(_0xC536[15]);
        _0xC68C.id = _0xC536[50];
        _0xC68C.style.zIndex = _0xC536[51];
        _0xC68C.style.width = _0xC536[52];
        _0xC68C.style.height = _0xC536[52];
        var _0xC620 = new Image();
        var _0xC548 = new Image();
        _0xC548.onload = function() {
            _0xC69E.src = this.src
        };
        _0xC620.onload = function() {
            _0xC69E.src = this.src
        };
        _0xC620.onerror = function() {
            _0xC548.src = _0xC5A2;
            _0xC548.onerror = function() {
                _0xC548.src = _0xC55A
            }
        };
        _0xC620.src = _0xC632;
        _0xC6B0.style.cssText = _0xC536[53];
        _0xC69E.style.cssText = _0xC536[54];
        _0xC5C6.style.cssText = _0xC536[55];
        _0xC6E6.style.cssText = _0xC536[56];
        _0xC6E6.src = _0xC5FC;
        _0xC6E6.onerror = function() {
            _0xC6E6.src = _0xC56C
        };
        _0xC656.src = _0xC668;
        _0xC656.onerror = function() {
            _0xC656.src = _0xC590
        };
        _0xC656.style.cssText = _0xC536[57];
        _0xC6C2.style.cssText = _0xC536[58];
        _0xC6D4.style.cssText = _0xC536[59];
        _0xC6D4.src = _0xC644;
        _0xC6D4.onerror = function() {
            _0xC6D4.src = _0xC57E
        };
        _0xC6D4.id = _0xC536[11];
        _0xC6D4.classList.add(_0xC536[60]);
        _0xC6F8.style.cssText = _0xC536[61];
        _0xC6F8.innerHTML = _0xC536[62];
        _0xC5C6.appendChild(_0xC656);
        _0xC5C6.appendChild(_0xC6C2);
        _0xC6C2.appendChild(_0xC6D4);
        _0xC68C.appendChild(_0xC69E);
        _0xC68C.appendChild(_0xC6B0);
        _0xC68C.appendChild(_0xC6E6);
        _0xC68C.appendChild(_0xC5C6);
        return _0xC68C
    }
    resumeGame = _0xC548;
    initIdeaIGA = _0xC55A;
    showIdeaIGA = _0xC56C;
    ideaIgaSplashClick = _0xC57E;
    adCallback = _0xC590;
    showGame = _0xC5A2;
    showAd = _0xC5B4;
    initAdGlare = _0xC5C6;
    clickOnAd = _0xC5D8;
    wgAd = _0xC5EA;
    showISAdBut = _0xC5FC;
    timerFunc = _0xC60E;
    skipISAd = _0xC620;
    isAd = _0xC632;
    isAdAfterSplash = _0xC644;
    adGlareListener = _0xC656;
    addSplash = _0xC668;
    buttonCSS = _0xC536[0];
    adCloseCSS = _0xC536[1];
    redirectUrl = _0xC536[2];
    but_timer = 0;
    total_timer = 0;
    adImg = _0xC536[2];
    trackingPixel = _0xC536[2];
    ad_is_idea_IGA = false;
    // if (config.adglare_campaign != _0xC536[2] || config.ad_tag != _0xC536[2]) {
    //     if (config.adglare_campaign == _0xC536[3] || config.ad_tag != _0xC536[2]) {
    //         _0xC55A()
    //     } else {
    //         adGlareRequest = new XMLHttpRequest();
    //         adGlareRequest.addEventListener(_0xC536[4], _0xC656);
    //         adGlareRequest.open(_0xC536[5], config.adglare_campaign);
    //         _0xC5C6()
    //     }
    // };
})();
})()