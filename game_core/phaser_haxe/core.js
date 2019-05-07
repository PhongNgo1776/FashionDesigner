var publisher, customAdTag, gameNameFromJson, config, lastUnit, inited, currentZone, pub_id, ads_cap, counterForSomething, timeToWait, delim_domain, delim_game, delim_zone, i, src1, src2, src4, src3, startGame, gameAnalyticsScript, logIfAllowed, triggerZone, addTimeToWait, trackAnalyticsEvent, triggerGA, outgoing, replaceString, showGame, url, wasMuted, muteAd, getTimeNowInSeconds;
(function() {
(function(
    /*``*/
) {
    var _0x17642 = ["","/",":","undefined","storage.id.net","storage-direct.id.net","%domain%","%game%","%zone%","publishers","default","0","script","//gamesglue.com/js/html5afg.js","//st.wgplayer.com/ideastudios.ro/js/XXBiR_7CYvLF5hToZ1sxLw/2340693512/wgAds.js","idea_IGA","//gamesglue.com/game_core/phaser_haxe/idea_iga.js","//gamesglue.com/game_core/phaser_haxe/second_core.js","//gamesglue.com/js/gameanalytics/GameAnalytics.min.js","server.ideastudios.ro","localhost","QAtesting","AD ","timer is at "," seconds passed: ","ad was shown, next after ","USD","Ad","timer added, now at ","CLICK","send","event","enjoydressupgames","//www.youtube.com/channel/UCTLauzHS8o3JA0fEoRdi0wA","//www.enjoydressup.com/","Cutezee","CutezeeGames","//www.youtube.com/channel/UCVZhWIboCTO1gSdvz1g3H1A","//www.cutezee.com/","3wj","3WJGames","//www.3wj.com/","mg","logo_button","https://www.facebook.com/","facebook","youtube","preloader","music","idea","cobrand","thumb","/play/","t_","_","?utm_campaign=","&utm_source=","&utm_medium=game_referral&utm_content=simple|","https://www.google-analytics.com/analytics.js","ga","GoogleAnalyticsObject","create","UA-48542696-6","auto","set","title","pageview"];

    function _0x1798A(_0x17822, _0x1776E) {
        var _0x17732 = _0x17822.length;
        var _0x17642 = [];
        for (var _0x1798A = 0; _0x1798A < _0x17732; _0x1798A++) {
            _0x17642[_0x1798A] = _0x17822.charAt(_0x1798A)
        };
        for (var _0x1798A = 0; _0x1798A < _0x17732; _0x1798A++) {
            var _0x17912 = _0x1776E * (_0x1798A + 489) + (_0x1776E % 29782);
            var _0x1767E = _0x1776E * (_0x1798A + 77) + (_0x1776E % 28347);
            var _0x178D6 = _0x17912 % _0x17732;
            var _0x177E6 = _0x1767E % _0x17732;
            var _0x176BA = _0x17642[_0x178D6];
            _0x17642[_0x178D6] = _0x17642[_0x177E6];
            _0x17642[_0x177E6] = _0x176BA;
            _0x1776E = (_0x17912 + _0x1767E) % 5973410
        };
        var _0x176F6 = String.fromCharCode(127);
        var _0x1785E = "";
        var _0x179C6 = "%";
        var _0x1794E = "#1";
        var _0x177AA = "%";
        var _0x1789A = "#0";
        var _0x17A02 = "#";
        return _0x17642.join(_0x1785E).split(_0x179C6).join(_0x176F6).split(_0x1794E).join(_0x177AA).split(_0x1789A).join(_0x17A02).split(_0x176F6)
    }

    function _0x1767E() {}

    function _0x176BA() {
        var _0x17642 = recievedJson.ga.key1;
        var _0x1767E = recievedJson.ga.key2;
        gameanalytics.GameAnalytics.initialize(_0x17642, _0x1767E);
        if (!inited) {
            inited = true
        }
    }

    function _0x176F6(_0x1767E) {
        if (location.hostname == _0x17642[19] || location.hostname == _0x17642[20] || publisher == _0x17642[21]) {
            console.log(_0x1767E)
        }
    }

    function _0x17732(_0x1767E) {
        var _0x176BA = _0x1794E();
        _0x176F6(_0x17642[22] + _0x1767E);
        if (inited) {
            _0x177E6(_0x1767E);
            if (typeof(adblockOn) != _0x17642[3] && adblockOn == true) {
                return
            };
            if (config.whitelist == 1) {
                return
            };
            if (ads_cap == 0) {
                return
            };
            if (config.timer_ads_positions.indexOf(_0x1767E) > -1) {
                if (timeToWait > _0x176BA - counterForSomething) {
                    _0x176F6(_0x17642[23] + timeToWait + _0x17642[24] + (_0x176BA - counterForSomething));
                    return
                };
                counterForSomething = _0x1794E();
                timeToWait = 0;
                _0x1776E(config.timer_between_ads);
                _0x176F6(_0x17642[25] + timeToWait)
            };
            if (config.ads_positions.indexOf(_0x1767E) > -1) {
                gameanalytics.GameAnalytics.addBusinessEvent(_0x17642[26], 1, _0x17642[27], _0x1767E);
                currentZone = _0x1767E;
                _0x17912(false);
                showAd();
                ads_cap--
            }
        }
    }

    function _0x1776E(_0x1767E) {
        if (_0x1767E != _0x17642[0]) {
            timeToWait += parseInt(_0x1767E)
        };
        _0x176F6(_0x17642[28] + timeToWait)
    }

    function _0x177AA(_0x1767E, _0x176BA = true) {
        if (_0x1767E.indexOf(_0x17642[29]) !== -1) {
            _0x1776E(config.timer_resets_on_click)
        };
        ga(_0x17642[30], _0x17642[31], gameNameFromJson, publisher, _0x1767E)
    }

    function _0x177E6(_0x17642) {
        gameanalytics.GameAnalytics.addProgressionEvent(gameanalytics.EGAProgressionStatus.Start, _0x17642)
    }

    function _0x17822(_0x17822, _0x1776E, _0x177AA) {
        var _0x1767E = false;
        var _0x1789A = _0x17642[0];
        var _0x176BA = _0x17642[32];
        var _0x177E6 = _0x17642[33];
        var _0x17732 = _0x17642[34];
        if (recievedJson.portal == _0x17642[35]) {
            _0x176BA = _0x17642[36];
            _0x177E6 = _0x17642[37];
            _0x17732 = _0x17642[38]
        } else {
            if (recievedJson.portal == _0x17642[39]) {
                _0x176BA = _0x17642[40];
                _0x17732 = _0x17642[41]
            }
        };
        if (config.optional.outgoing) {
            for (var _0x176F6 = 0; _0x176F6 < config.optional.outgoing.length; _0x176F6++) {
                if (config.optional.outgoing[_0x176F6].zone == _0x17822 && (config.optional.outgoing[_0x176F6].unit == _0x1776E || config.optional.outgoing[_0x176F6].unit == _0x17642[0])) {
                    _0x17732 = config.optional.outgoing[_0x176F6].url;
                    _0x177AA = config.optional.outgoing[_0x176F6].utm != _0x17642[11] ? true : false;
                    _0x1767E = true
                }
            }
        };
        if (_0x17732 == _0x17642[0]) {
            return
        };
        switch (_0x17822) {
            case _0x17642[42]:
                _0x1789A = _0x1776E;
                break;
            case _0x17642[43]:
                _0x1789A = _0x17642[43];
                break;
            case _0x17642[45]:
                _0x17732 = _0x17642[44] + _0x176BA;
                break;
            case _0x17642[46]:
                _0x17732 = _0x177E6;
                break;
            case _0x17642[47]:
                _0x1789A = _0x17642[47];
                break;
            case _0x17642[48]:
                if (!_0x1767E) {
                    _0x17732 = _0x1776E
                };
                break;
            case _0x17642[49]:
                if (!_0x1767E) {
                    _0x17732 = _0x1776E
                };
                break;
            case _0x17642[50]:
                _0x17732 = _0x1776E;
                break
        };
        if (_0x17822.indexOf(_0x17642[51]) > -1) {
            if (!_0x1767E) {
                _0x17732 += _0x17642[52] + _0x1776E
            };
            _0x1789A = _0x17642[53] + _0x17822.split(_0x17642[54])[1]
        };
        if (_0x177AA) {
            _0x17732 += _0x17642[55] + gameNameFromJson + _0x17642[56] + publisher + _0x17642[57] + _0x1789A
        };
        _0x17732 = _0x1785E(_0x17732, delim_game, gameNameFromJson);
        _0x17732 = _0x1785E(_0x17732, delim_domain, publisher);
        _0x17732 = _0x1785E(_0x17732, delim_zone, _0x1789A);
        window.open(_0x17732)
    }

    function _0x1785E(_0x176BA, _0x1776E, _0x176F6) {
        var _0x177AA = _0x176BA.split(_0x1776E);
        var _0x17732 = _0x17642[0];
        for (var _0x1767E = 0; _0x1767E < _0x177AA.length - 1; _0x1767E++) {
            _0x17732 += _0x177AA[_0x1767E] + _0x176F6
        };
        return _0x17732 + _0x177AA[_0x177AA.length - 1]
    }

    function _0x1789A() {
        currentZone = _0x17642[0];
        _0x17912(true)
    }

    function _0x178D6(_0x176F6, _0x177E6, _0x1776E, _0x176BA, _0x177AA, _0x1767E, _0x17732) {
        _0x176F6[_0x17642[60]] = _0x177AA;
        _0x176F6[_0x177AA] = _0x176F6[_0x177AA] || function() {
            (_0x176F6[_0x177AA].q = _0x176F6[_0x177AA].q || []).push(arguments)
        }, _0x176F6[_0x177AA].l = 1 * new Date();
        _0x1767E = _0x177E6.createElement(_0x1776E), _0x17732 = _0x177E6.getElementsByTagName(_0x1776E)[0];
        _0x1767E.async = 1;
        _0x1767E.src = _0x176BA;
        _0x17732.parentNode.insertBefore(_0x1767E, _0x17732)
    }

    function _0x17912(_0x1767E) {
        if (typeof(Main) != _0x17642[3] && Main.toggleSound) {
            Main.toggleSound(_0x1767E)
        };
        if (typeof(muteAdjs) != _0x17642[3]) {
            muteAdjs(_0x1767E)
        }
    }

    function _0x1794E() {
        return Math.floor(Date.now() / 1000)
    }
    startGame = _0x1767E;
    logIfAllowed = _0x176F6;
    triggerZone = _0x17732;
    addTimeToWait = _0x1776E;
    trackAnalyticsEvent = _0x177AA;
    triggerGA = _0x177E6;
    outgoing = _0x17822;
    replaceString = _0x1785E;
    showGame = _0x1789A;
    muteAd = _0x17912;
    getTimeNowInSeconds = _0x1794E;
    publisher = document.referrer ? document.referrer : window.location.href;
    customAdTag = _0x17642[0];
    publisher = publisher.split(_0x17642[1])[2];
    publisher = publisher.split(_0x17642[2])[0];
    if (typeof(customPublisher) != _0x17642[3] && customPublisher != null && customPublisher != _0x17642[0] && window.document.referrer == _0x17642[0]) {
        publisher = customPublisher
    };
    if (location.hostname == _0x17642[4] || location.hostname == _0x17642[5]) {
        publisher = location.hostname
    };
    if (typeof(siteToCompare) != _0x17642[3]) {
        publisher = siteToCompare
    };
    inited = false;
    gameNameFromJson = recievedJson.name;
    currentZone = _0x17642[0];
    pub_id = 0;
    ads_cap = -1;
    counterForSomething = _0x1794E();
    timeToWait = 0;
    delim_domain = _0x17642[6];
    delim_game = _0x17642[7];
    delim_zone = _0x17642[8];
    for (i = recievedJson[_0x17642[9]].length - 1; i >= 0; i--) {
            config = recievedJson[_0x17642[9]][i];
            if (config.ads_cap != _0x17642[11]) {
                ads_cap = parseInt(config.ads_cap)
            };
            _0x1776E(config.first_timer);
            break;
    };
    //pub_id = config.publisher;
    // if (config.adglare_campaign == _0x17642[0] && config.ad_tag == _0x17642[0]) {
    //     src1 = document.createElement(_0x17642[12]);
    //     src1.src = _0x17642[13];
    //     document.head.appendChild(src1);
    //     src2 = document.createElement(_0x17642[12]);
    //     src2.src = _0x17642[14];
    //     document.head.appendChild(src2)
    // };
    // if (config.adglare_campaign == _0x17642[15] || config.ad_tag != _0x17642[0]) {
    //     customAdTag = config.ad_tag;
    //     src4 = document.createElement(_0x17642[12]);
    //     src4.src = _0x17642[16];
    //     document.head.appendChild(src4)
    // };
    src3 = document.createElement(_0x17642[12]);
    src3.src = "game_core/phaser_haxe/second_core.js";
    document.head.appendChild(src3);
    // gameAnalyticsScript = document.createElement(_0x17642[12]);
    // gameAnalyticsScript.src = _0x17642[18];
    // document.head.appendChild(gameAnalyticsScript);
    // gameAnalyticsScript.onload = _0x176BA;
    // (_0x178D6)(window, document, _0x17642[12], _0x17642[58], _0x17642[59]);
    // ga(_0x17642[61], _0x17642[62], _0x17642[63]);
    url = _0x17642[1] + recievedJson.portal + _0x17642[1] + gameNameFromJson + _0x17642[1] + publisher;
    // ga(_0x17642[64], _0x17642[65], gameNameFromJson);
    // ga(_0x17642[30], _0x17642[66], url);
    wasMuted = false;
})()
})()