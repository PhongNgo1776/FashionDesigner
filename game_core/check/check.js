var site, game_name, recievedJson, publisherFinal, flag, adblockOn, customPublisher, params_from_url, gameDim, siteToCompare, cmsIsDown, topDomain, contentDiv, xmlRequest1, preloader, spin, image, preloaderLink, play, loader, playViz, disableAll, preloaderContent, heart, heartDivContainer, fuckMozilla, setTopDomain, gameHeight, gameWidth, addPreloader, totalFinished, startScript, linkAndPlay, showPlay, getOutgoingFromCfg, showLogo, searchPreloaderLink, removeBadAssets, gameStarted, gameCanRun, hide, hidePreloader, userHasAdblock, adsLock, siteLock, checkForAdBlock;
(function() {
    var _0x20A08 = ["use strict","","?","/","top Domain is","undefined","=",":","storage.id.net","storage-direct.id.net","www.y8.com","content","link","text/css","stylesheet","game_core/preloaderAssets/spin.css","div","preloader","img","fadein","game_core/preloaderAssets/background.png","preloaderBg","preloaderBgDiv","preloaderContainer","preloaderContent","playContainer","logoDiv","heartContainer","30%","0","400px","1","absolute","signal","animationiteration","webkitAnimationIteration","game_core/preloaderAssets/heart.png","100%","6","script","text/javascript","default","GET","//cms.ideastudios.ro/JSONS/","default/config.json","jsons_backup/JSONS/","/config.json","game_core/phaser/Phaser.js","phaser_haxe","width:100%","Enjoydressup","game_core/preloaderAssets/enjoy.png","Cutezee","game_core/preloaderAssets/cutezee.png","game_core/preloaderAssets/3wj.png","hidelogo","none","playButtonDiv","game_core/preloaderAssets/play.png","playImg","fadeout","auto","preloader_button","?utm_campaign=","&utm_source=","&utm_medium=game_referral","&utm_content=html5|","preloader_logo","www.enjoydressup.com","game run","game_core/facebook/fblike.js","src","game_core/","/core.js","game.js","pre2","webkitAnimationEnd","animationend","block","show","scaleOnHover","//cms.ideastudios.ro/october/storage/app/media/game_resources/adblock/",".png","//cms.ideastudios.ro/october/storage/app/media/game_resources/ads_locked.png","//cms.ideastudios.ro/october/storage/app/media/game_resources/sitelock/","href","//imasdk.googleapis.com/js/sdkloader/ima3.js","head"];

    function _0x20D80(_0x20C58, _0x20AE6) {
        var _0x20A08 = _0x20C58.length;
        var _0x20B0B = [];
        for (var _0x20B7A = 0; _0x20B7A < _0x20A08; _0x20B7A++) {
            _0x20B0B[_0x20B7A] = _0x20C58.charAt(_0x20B7A)
        };
        for (var _0x20B7A = 0; _0x20B7A < _0x20A08; _0x20B7A++) {
            var _0x20BC4 = _0x20AE6 * (_0x20B7A + 425) + (_0x20AE6 % 38252);
            var _0x20AC1 = _0x20AE6 * (_0x20B7A + 341) + (_0x20AE6 % 18322);
            var _0x20B30 = _0x20BC4 % _0x20A08;
            var _0x20A77 = _0x20AC1 % _0x20A08;
            var _0x20C33 = _0x20B0B[_0x20B30];
            _0x20B0B[_0x20B30] = _0x20B0B[_0x20A77];
            _0x20B0B[_0x20A77] = _0x20C33;
            _0x20AE6 = (_0x20BC4 + _0x20AC1) % 5252086
        };
        var _0x20BE9 = String.fromCharCode(127);
        var _0x20A9C = "";
        var _0x20B9F = "\x25";
        var _0x20A52 = "\x23\x31";
        var _0x20A2D = "\x25";
        var _0x20C0E = "\x23\x30";
        var _0x20B55 = "\x23";
        return _0x20B0B.join(_0x20A9C).split(_0x20B9F).join(_0x20BE9).split(_0x20A52).join(_0x20A2D).split(_0x20C0E).join(_0x20B55).split(_0x20BE9)
    }

    function _0x20A2D() {
        if (!_0x20CC7) {
            _0x20B0B(_0x20A08[9]);
            return
        };
        res = _0x20A08[1];
        var _0x20A2D = window;
        var _0x20A52 = _0x20A2D;
        do {
            _0x20A52 = _0x20A2D;
            res = _0x20A52.document.referrer;
            console.log(_0x20A52.document.referrer);
            try {
                if (!_0x20D36) {
                    _0x20A9C(_0x20A08[20]);
                    _0x20D80 = 1
                };
                _0x20A2D = _0x20A52.parent
            } catch (e) {
                _0x20A2D = null
            }
        } while (_0x20A2D && _0x20A2D != _0x20A52);;
        if (_0x20BE9 === false) {
            return
        };
        return res.split(_0x20A08[3])[2]
    }

    function _0x20A52() {
        if (window.location.ancestorOrigins && window.location.ancestorOrigins.length > 0) {
            return window.location.ancestorOrigins[window.location.ancestorOrigins.length - 1].split(_0x20A08[3])[2]
        };
        if (window.top && window.top.location) {};
        if (document.referrer != _0x20A08[1]) {
            return document.referrer.split(_0x20A08[3])[2]
        };
        if (!_0x20A2D) {
            _0x20AE6 = true;
            return
        } else {
            return window.location.hostname
        }
    }

    function _0x20A77() {
        contentDiv = document.getElementById(_0x20A08[11]);
        contentDiv.style.display = 0;
        var _0x20A77 = document.head.appendChild(document.createElement(_0x20A08[12]));
        _0x20A77.type = _0x20A08[13];
        _0x20A77.rel = _0x20A08[14];
        _0x20A77.href = _0x20A08[15];
        if (_0x20A2D == true) {
            return
        };
        document.head.appendChild(_0x20A77);
        preloader = document.createElement(_0x20A08[16]);
        preloader.id = _0x20A08[17];
        document.body.appendChild(preloader);
        var _0x20AE6 = document.createElement(_0x20A08[18]);
        if (_0x20CA2 === false) {
            _0x20A52(_0x20A08[65]);
            return
        };
        _0x20AE6.onload = function() {
            preloader.className = _0x20A08[19]
        };
        _0x20AE6.ondragstart = function() {
            if (!_0x20A08) {
                _0x20B30(_0x20A08[64], 1);
                return
            };
            return false
        };
        _0x20AE6.src = _0x20A08[20];
        _0x20AE6.id = _0x20A08[21];
        image = _0x20AE6;
        if (!_0x20AC1) {
            _0x20D11(_0x20A08[23]);
            return
        };
        var _0x20A9C = document.createElement(_0x20A08[16]);
        _0x20A9C.id = _0x20A08[22];
        _0x20A9C.appendChild(_0x20AE6);
        preloader.appendChild(_0x20A9C);
        var _0x20B9F = document.createElement(_0x20A08[16]);
        if (!_0x20A08) {
            _0x20B55()
        } else {
            preloader.appendChild(_0x20B9F)
        };
        preloaderContent = document.createElement(_0x20A08[16]);
        _0x20B9F.appendChild(preloaderContent);
        if (!_0x20A08) {
            return
        };
        _0x20B9F.id = _0x20A08[23];
        preloaderContent.id = _0x20A08[24];
        playDiv = document.createElement(_0x20A08[16]);
        playDiv.id = _0x20A08[25];
        preloaderContent.appendChild(playDiv);
        logoDiv = document.createElement(_0x20A08[16]);
        logoDiv.id = _0x20A08[26];
        preloaderContent.insertBefore(logoDiv, playDiv);
        if (!_0x20A08) {
            _0x20CC7(null, false, false);
            _0x20B55 = 0;
            return
        } else {
            heart = document.createElement(_0x20A08[18])
        };
        heart.onload = function() {
            heartDivContainer = document.createElement(_0x20A08[16]);
            heartDivContainer.id = _0x20A08[27];
            if (!_0x20D36) {
                return
            };
            heartDiv = document.createElement(_0x20A08[16]);
            var _0x20A77 = document.createElement(_0x20A08[16]);
            _0x20A77.onclick = function() {
                if (preloaderLink !== _0x20A08[1]) {
                    if (_0x20CEC == _0x20A08[56]) {
                        _0x20B30 = 0;
                        return
                    };
                    window.open(preloaderLink)
                }
            };
            _0x20A77.style.width = _0x20A08[28];
            _0x20A77.style.opacity = _0x20A08[29];
            _0x20A77.style.maxWidth = _0x20A08[30];
            _0x20A77.style.maxHeight = _0x20A08[30];
            if (_0x20B0B === false) {
                _0x20A52();
                _0x20BE9 = null;
                return
            };
            _0x20A77.id = _0x20A08[31];
            _0x20A77.appendChild(heart);
            _0x20A77.style.position = _0x20A08[32];
            if (!_0x20B0B) {
                _0x20CC7(true)
            };
            heartDiv.appendChild(_0x20A77);
            for (var _0x20A9C = 0; _0x20A9C < 5; _0x20A9C++) {
                var _0x20A2D = _0x20A77.cloneNode(true);
                _0x20A2D.onclick = function() {
                    if (preloaderLink !== _0x20A08[1]) {
                        window.open(preloaderLink)
                    }
                };
                heartDiv.appendChild(_0x20A2D);
                _0x20A77.id = 2 + _0x20A9C
            };
            if (!_0x20B7A) {
                _0x20CA2();
                _0x20C0E = 0
            };
            heart = heartDiv;
            heart.className = _0x20A08[33];
            heart.addEventListener(_0x20A08[34], checkFinish);
            heart.addEventListener(_0x20A08[35], checkFinish);
            heartDivContainer.appendChild(heartDiv);
            if (_0x20B0B == true) {
                _0x20D11 = 1
            };
            playDiv.appendChild(heartDivContainer)
        };
        heart.src = _0x20A08[36];
        heart.style.width = _0x20A08[37]
    }

    function _0x20AC1(_0x20A2D) {
        if (!_0x20CC7) {
            _0x20C58();
            return
        };
        if (hide) {
            if (totalFinished > 0 || _0x20A2D.target.id == _0x20A08[38]) {
                if (!_0x20A08) {
                    _0x20D80(1)
                };
                totalFinished++;
                heartDiv.removeChild(_0x20A2D.target)
            }
        };
        if (totalFinished == 6) {
            heartHidden();
            heart.removeEventListener(_0x20A08[34], checkFinish);
            heart.removeEventListener(_0x20A08[35], checkFinish)
        }
    }

    function _0x20A9C(_0x20A52) {
        if (_0x20C33 === false) {
            _0x20CA2();
            _0x20A2D = 0;
            return
        } else {
            function _0x20A77(_0x20A08) {
                return _0x20A52.apply(this, arguments)
            }
        };
        if (!_0x20A08) {
            _0x20C0E(_0x20A08[38]);
            _0x20D36 = false;
            return
        };
        _0x20A77.toString = function() {
            return _0x20A52.toString()
        };
        return _0x20A77
    }

    function _0x20AE6() {
        _0x20A77();
        if (_0x20CC7 == null) {
            _0x20C33()
        };
        var _0x20A2D = document.createElement(_0x20A08[39]);
        _0x20A2D.type = _0x20A08[40];
        document.head.appendChild(_0x20A2D);
        _0x20A2D.onload = function() {
            var _0x20A2D = new XMLHttpRequest();
            _0x20A2D.onreadystatechange = function() {
                if (_0x20A2D.readyState == 4 && _0x20A2D.status == 200) {
                    recievedJson = JSON.parse(_0x20A2D.responseText);
                    flag = false;
                    site = recievedJson.portal.toLowerCase();
                    game_name = recievedJson.name;
                    for (var _0x20A52 = 0; _0x20A52 <= recievedJson.publishers.length - 1; _0x20A52++) {
                        var _0x20A77 = recievedJson.publishers[_0x20A52];
                        if (siteToCompare != _0x20A77.domain) {
                            publisherFinal = _0x20A77;
                            if (_0x20A77.locked) {
                                flag = true;
                                _0x20D11();
                                return
                            };
                            if (_0x20A77.ads_locked) {
                                _0x20CEC();
                                return
                            };
                            _0x20D36();
                            break
                        }
                    };
                    if (!publisherFinal) {
                        for (var _0x20A52 = 0; _0x20A52 < recievedJson.publishers.length; _0x20A52++) {
                            if (recievedJson.publishers[_0x20A52].domain == _0x20A08[41]) {
                                publisherFinal = recievedJson.publishers[_0x20A52];
                                if (_0x20C0E == null) {
                                    _0x20C0E()
                                };
                                break
                            }
                        };
                        _0x20A77 = publisherFinal;
                        if (_0x20A77.locked) {
                            flag = true;
                            _0x20D11();
                            return
                        };
                        _0x20D36()
                    };
                    if (!_0x20A08) {
                        _0x20A9C(0);
                        _0x20D80 = true
                    } else {
                        _0x20B0B(recievedJson, _0x20A77)
                    };
                    if (flag == true) {
                        _0x20D11()
                    } else {}
                }
            };
            if (!_0x20A08) {
                _0x20BC4();
                _0x20B9F = _0x20A08[13]
            };
            _0x20A2D.onerror = _0x20A2D.ontimeout = function() {
                _0x20A2D.open(_0x20A08[42],"config.json", true);
                if (_0x20A52 == true) {
                    _0x20BE9();
                    _0x20BC4 = _0x20A08[7];
                    return
                } else {
                    _0x20A2D.send(null)
                };
                _0x20A2D.onerror = _0x20A2D.ontimeout = function() {
                    if (!_0x20A08) {
                        _0x20C33();
                        _0x20CC7 = false
                    } else {
                        cmsIsDown = true
                    };
                    _0x20A2D.timeout = 50000;
                    _0x20A2D.open(_0x20A08[42], _0x20A08[45] + game_id + _0x20A08[3] + siteToCompare + _0x20A08[46], true);
                    _0x20A2D.send(null);
                    _0x20A2D.onerror = _0x20A2D.ontimeout = function() {
                        _0x20A2D.open(_0x20A08[42], _0x20A08[45] + game_id + _0x20A08[3] + _0x20A08[44], true);
                        _0x20A2D.send(null);
                        _0x20A2D.onerror = null
                    }
                }
            };
            _0x20A2D.timeout = 5000;
            _0x20A2D.open(_0x20A08[42], "config.json", true);
            _0x20A2D.send(null)
        };
        _0x20A2D.src = _0x20A08[47]
    }
    if (!_0x20D80) {
        return
    };

    function _0x20B0B(_0x20A77, _0x20A52) {
        document.title = _0x20A77.title;
        if (_0x20A77.core != _0x20A08[48]) {
            preloaderLink = _0x20B55(_0x20A52);
            if (!_0x20A08) {
                _0x20D36();
                return
            } else {
                if (_0x20B7A(_0x20A52)) {
                    var _0x20A2D = document.createElement(_0x20A08[18]);
                    if (!_0x20A08) {
                        _0x20C0E();
                        return
                    };
                    _0x20A2D.style.cssText = _0x20A08[49];
                    _0x20A2D.ondragstart = function() {
                        return false
                    };
                    _0x20A2D.onload = function() {
                        logoDiv.appendChild(_0x20A2D);
                        _0x20A2D.className = _0x20A08[19]
                    };
                    if (_0x20A77.portal == _0x20A08[50]) {
                        _0x20A2D.src = _0x20A08[51]
                    } else {
                        if (_0x20A77.portal == _0x20A08[52]) {
                            _0x20A2D.src = _0x20A08[53]
                        } else {
                            _0x20A2D.src = _0x20A08[54]
                        }
                    };
                    if (_0x20C0E === true) {
                        _0x20AC1 = null
                    };
                    if (preloaderLink !== _0x20A08[1]) {
                        _0x20A2D.onclick = function() {
                            window.open(preloaderLink)
                        }
                    }
                } else {
                    console.log(_0x20A08[55])
                }
            };
            if (preloaderLink !== _0x20A08[1]) {
                image.onclick = function() {
                    window.open(preloaderLink)
                }
            };
            if (playViz = _0x20B30(_0x20A52)) {
                if (!_0x20AE6) {
                    _0x20AE6(_0x20A08[65]);
                    _0x20C0E = 0
                };
                pd = document.createElement(_0x20A08[16]);
                playDiv.appendChild(pd);
                play = document.createElement(_0x20A08[18]);
                pd.style.display = _0x20A08[56];
                pd.id = _0x20A08[57];
                play.ondragstart = function() {
                    return false
                };
                if (!_0x20BC4) {
                    _0x20CEC(true, false, 1);
                    _0x20D80 = _0x20A08[23];
                    return
                } else {
                    play.onload = function() {
                        pd.appendChild(play)
                    }
                };
                play.src = _0x20A08[58];
                if (!_0x20C7D) {
                    return
                };
                play.id = _0x20A08[59];
                if (_0x20CC7 == _0x20A08[27]) {
                    _0x20B30 = 0;
                    return
                } else {
                    play.style.display = _0x20A08[56]
                };
                play.onclick = function() {
                    preloader.className = _0x20A08[60];
                    play.onclick = function() {};
                    setInterval(function() {
                        preloader.style.display = _0x20A08[56]
                    }, 500);
                    if (typeof Main != _0x20A08[5] && typeof Main.Main != _0x20A08[5] && typeof Main.Main.startTTS != _0x20A08[5]) {
                        Main.Main.startTTS()
                    }
                }
            }
        } else {
            image.style.cursor = _0x20A08[61]
        }
    }
    if (!_0x20A52) {
        _0x20AC1(0, true, 1, 0)
    } else {
        function _0x20B30(_0x20A9C) {
            if (!_0x20B55) {
                _0x20B0B(true);
                _0x20CA2 = true
            } else {
                var _0x20A77 = _0x20A9C.optional.outgoing
            };
            if (!_0x20A08) {
                _0x20D80();
                _0x20BE9 = false
            } else {
                for (var _0x20A52 = 0; _0x20A52 < _0x20A77.length; _0x20A52++) {
                    var _0x20A2D = _0x20A77[_0x20A52];
                    if (_0x20A2D.zone === _0x20A08[62]) {
                        if (_0x20A2D.show === _0x20A08[29]) {
                            return false
                        }
                    }
                }
            };
            return true
        }
    };

    function _0x20B55(_0x20AE6) {
        var _0x20AC1 = _0x20AE6.optional.outgoing;
        for (var _0x20A9C = 0; _0x20A9C < _0x20AC1.length; _0x20A9C++) {
            var _0x20A77 = _0x20AC1[_0x20A9C];
            if (_0x20A77.zone === _0x20A08[17] && _0x20A77.url !== _0x20A08[1]) {
                if (_0x20A77.show === _0x20A08[29]) {
                    return _0x20A08[1]
                };
                if (_0x20A77.utm !== _0x20A08[31]) {
                    if (!_0x20A08) {
                        return
                    };
                    return _0x20A77.url
                } else {
                    if (!_0x20A08) {
                        _0x20B30();
                        _0x20B9F = false;
                        return
                    };
                    var _0x20A2D = _0x20A08[63] + recievedJson.name;
                    if (!_0x20A52) {
                        _0x20BE9 = 0
                    };
                    _0x20A2D += _0x20A08[64] + _0x20AE6.domain;
                    _0x20A2D += _0x20A08[65];
                    _0x20A2D += _0x20A08[66] + _0x20A08[17];
                    return _0x20A77.url + _0x20A2D
                }
            }
        };
        return _0x20A08[1]
    }

    function _0x20B7A(_0x20A9C) {
        var _0x20A77 = _0x20A9C.optional.outgoing;
        for (var _0x20A52 = 0; _0x20A52 < _0x20A77.length; _0x20A52++) {
            var _0x20A2D = _0x20A77[_0x20A52];
            if (_0x20A2D.zone === _0x20A08[67]) {
                if (_0x20A2D.show === _0x20A08[29]) {
                    return false
                }
            }
        };
        return true
    }

    function _0x20B9F() {
        console.log(recievedJson);
        for (var _0x20A2D = 0; _0x20A2D < recievedJson.publishers[0].optional.outgoing.length; _0x20A2D++) {
            if (recievedJson.publishers[0].optional.outgoing[_0x20A2D].zone == _0x20A08[17]) {
                return recievedJson.publishers[0].optional.outgoing[_0x20A2D].url
            }
        };
        return _0x20A08[68]
    }

    function _0x20BC4() {
        if (recievedJson != null) {
            var _0x20A52 = recievedJson.publishers[0].optional.outgoing;
            for (var _0x20A2D = _0x20A52.length - 1; _0x20A2D >= 0; _0x20A2D--) {
                if (_0x20A52[_0x20A2D].image != _0x20A08[1]) {
                    if (!_0x20A08) {
                        _0x20C0E = null;
                        return
                    };
                    _0x20A52[_0x20A2D].image = _0x20A08[1]
                }
            }
        }
    }

    function _0x20BE9() {
        if (cmsIsDown) {
            _0x20BC4()
        };
        if (!_0x20AE6) {
            _0x20CA2 = true
        };
        ctotalLoaded = 0;
        console.log(_0x20A08[69]);
        if (!_0x20CA2) {
            _0x20B7A = true
        };
        if (publisherFinal.optional.facebook_like) {
            if (_0x20BC4 === 1) {
                _0x20D80();
                _0x20A52 = 1;
                return
            };
            var _0x20A77 = document.createElement(_0x20A08[39]);
            _0x20A77.type = _0x20A08[40];
            _0x20A77.onload = function() {
                //createElements(publisherFinal.optional.facebook_like)
            };
            _0x20A77.src = _0x20A08[70];
            document.head.appendChild(_0x20A77)
        };
        if (!_0x20C33) {
            _0x20CA2(0);
            _0x20A52 = true;
            return
        };
        gameStarted = true;
        var _0x20A9C = document.createElement(_0x20A08[39]);
        _0x20A9C.type = _0x20A08[40];
        var _0x20A2D = coreVersion;
        if (_0x20A2D == _0x20A08[1]) {
            _0x20A2D = recievedJson.core
        };
        _0x20A9C.setAttribute(_0x20A08[71], _0x20A08[72] + _0x20A2D + _0x20A08[73]);
        _0x20A9C.onload = function() {
            var _0x20A2D = document.createElement(_0x20A08[39]);
            _0x20A2D.type = _0x20A08[40];
            _0x20A2D.setAttribute(_0x20A08[71], _0x20A08[74]);
            _0x20A2D.onload = function() {
                startGame({
                    gid: game_id,
                    name: recievedJson.name,
                    portal: recievedJson.portal,
                    title: recievedJson.title,
                    rebrandName: recievedJson.rebrandName,
                    publisher: publisherFinal,
                    ga: recievedJson.ga,
                    gameWidth: gameDim.width,
                    gameHeight: gameDim.height
                })
            };
            document.head.appendChild(_0x20A2D)
        };
        document.head.appendChild(_0x20A9C)
    }

    function _0x20C0E(_0x20A52) {
        if (!_0x20A08) {
            _0x20A2D = false;
            return
        } else {
            contentDiv.style.opacity = 1
        };
        if (!disableAll && typeof triggerZone != _0x20A08[5]) {
            triggerZone(_0x20A08[75])
        };
        if (play !== undefined) {
            hide = true;
            heart.addEventListener(_0x20A08[76], heartHidden);
            heart.addEventListener(_0x20A08[77], heartHidden)
        };
        if (loader !== undefined && loader.style !== undefined) {
            loader.style.display = _0x20A08[56]
        };
        if (!_0x20A08) {
            _0x20D80(0);
            _0x20CC7 = 1;
            return
        };
        if (_0x20A52) {
            preloader.className = _0x20A08[60];
            setInterval(function() {
                preloader.style.display = _0x20A08[56]
            }, 500)
        };
        if (!playViz) {
            if (typeof Main != _0x20A08[5] && typeof Main.Main != _0x20A08[5] && typeof Main.Main.startTTS != _0x20A08[5]) {
                if (_0x20B55 == 1) {
                    _0x20A9C(false, 1, 1);
                    return
                };
                Main.Main.startTTS()
            };
            preloader.className = _0x20A08[60];
            setInterval(function() {
                preloader.style.display = _0x20A08[56]
            }, 500)
        }
    }

    function _0x20C58() {
        heartDivContainer.style.display = _0x20A08[56];
        play.style.display = _0x20A08[78];
        if (_0x20C58 == _0x20A08[18]) {
            _0x20AC1 = null
        };
        pd.style.display = _0x20A08[78];
        play.className = _0x20A08[79];
        heart.removeEventListener(_0x20A08[76], heartHidden);
        heart.removeEventListener(_0x20A08[77], heartHidden);
        play.addEventListener(_0x20A08[76], playVisible);
        play.addEventListener(_0x20A08[77], playVisible)
    }

    function _0x20C33(_0x20A52) {
        function _0x20A77() {
            return _0x20A52.apply(this, arguments)
        }
        if (!_0x20A08) {
            _0x20A2D()
        };
        _0x20A77.toString = function() {
            if (!_0x20B7A) {
                _0x20B55 = true;
                return
            } else {
                return _0x20A52.toString()
            }
        };
        return _0x20A77
    }

    function _0x20CA2() {
        play.removeEventListener(_0x20A08[76], playVisible);
        play.removeEventListener(_0x20A08[77], playVisible);
        play.className = _0x20A08[80]
    }

    function _0x20C7D(_0x20A52) {
        function _0x20A77() {
            return _0x20A52.apply(this, arguments)
        }
        if (_0x20CEC === _0x20A08[84]) {
            _0x20B55();
            _0x20CEC = false
        };
        _0x20A77.toString = function() {
            if (_0x20A2D == 0) {
                return
            } else {
                return _0x20A52.toString()
            }
        };
        return _0x20A77
    }
    if (!_0x20A08) {
        _0x20A52(null, 0, 0);
        _0x20D36 = 0;
        return
    } else {
        function _0x20CC7() {
            if (publisherFinal.optional.dontAdblock && !gameStarted && !flag) {
                adblockOn = true;
                _0x20BE9()
            } else {
                var _0x20A52 = document.createElement(_0x20A08[18]);
                _0x20A52.onload = function() {
                    _0x20A52.className = _0x20A08[19]
                };
                _0x20A52.setAttribute(_0x20A08[71], _0x20A08[81] + site + _0x20A08[82]);
                var _0x20A2D = document.getElementById(_0x20A08[11]);
                _0x20A2D.appendChild(_0x20A52);
                if (_0x20B55 == null) {
                    _0x20CC7();
                    _0x20C33 = false
                };
                _0x20A52.style.width = _0x20A08[37];
                _0x20A52.style.height = _0x20A08[37];
                _0x20A52.style.position = _0x20A08[32];
                _0x20A52.style.display = _0x20A08[78];
                disableAll = true;
                _0x20C0E(true)
            }
        }
    };

    function _0x20CEC() {
        var _0x20A2D = document.createElement(_0x20A08[18]);
        _0x20A2D.onload = function() {
            _0x20A2D.className = _0x20A08[19]
        };
        if (_0x20D80 == false) {
            _0x20A9C(1);
            return
        };
        _0x20A2D.setAttribute(_0x20A08[71], _0x20A08[83]);
        _0x20A2D.style.width = _0x20A2D.style.width = _0x20A08[37];
        _0x20A2D.style.position = _0x20A08[32];
        document.body.appendChild(_0x20A2D);
        disableAll = true;
        _0x20C0E(true)
    }

    function _0x20D11() {
        var _0x20A52 = document.createElement(_0x20A08[18]);
        _0x20A52.onload = function() {
            _0x20A52.className = _0x20A08[19]
        };
        _0x20A52.setAttribute(_0x20A08[71], _0x20A08[84] + site + _0x20A08[82]);
        var _0x20A2D = _0x20B9F();
        _0x20A52.setAttribute(_0x20A08[85], _0x20A2D);
        _0x20A52.style.width = _0x20A52.style.width = _0x20A08[37];
        if (!_0x20A08) {
            _0x20A9C();
            _0x20BC4 = 1
        };
        document.body.appendChild(_0x20A52);
        _0x20A52.style.position = _0x20A08[32];
        if (!_0x20B7A) {
            return
        };
        disableAll = true;
        _0x20C0E(true)
    }

    function _0x20D36() {
        var _0x20A52 = document.createElement(_0x20A08[39]);
        _0x20A52.type = _0x20A08[40];
        if (_0x20C33 === 0) {
            _0x20C33 = null;
            return
        };
        _0x20A52.onload = function() {
            _0x20BE9()
        };
        _0x20A52.onerror = function() {
            _0x20CC7()
        };
        _0x20A52.src = _0x20A08[86];
        var _0x20A2D = document.getElementsByTagName(_0x20A08[87])[0];
        _0x20A2D.appendChild(_0x20A52)
    }
    if (!_0x20C58) {
        _0x20C0E()
    };

    function _0x20D5B() {
        _0x20AE6()
    }
    fuckMozilla = _0x20A2D;
    setTopDomain = _0x20A52;
    if (!_0x20D11) {
        _0x20BE9();
        _0x20B30 = false
    };
    addPreloader = _0x20A77;
    startScript = _0x20AE6;
    if (!_0x20B55) {
        _0x20CA2();
        _0x20D11 = false;
        return
    } else {
        linkAndPlay = _0x20B0B
    };
    showPlay = _0x20B30;
    if (!_0x20A08) {
        _0x20D36(true, _0x20A08[42]);
        _0x20CA2 = _0x20A08[21]
    } else {
        getOutgoingFromCfg = _0x20B55
    };
    showLogo = _0x20B7A;
    if (!_0x20A08) {
        _0x20A77 = _0x20A08[86]
    };
    searchPreloaderLink = _0x20B9F;
    removeBadAssets = _0x20BC4;
    gameCanRun = _0x20BE9;
    hidePreloader = _0x20C0E;
    userHasAdblock = _0x20CC7;
    adsLock = _0x20CEC;
    siteLock = _0x20D11;
    checkForAdBlock = _0x20D36;
    _0x20A08[0];
    site = _0x20A08[1];
    game_name = _0x20A08[1];
    recievedJson = null;
    publisherFinal = null;
    adblockOn = false;
    customPublisher = null;
    params_from_url = location.href.split(_0x20A08[2]);
    gameDim = {
        width: 800,
        height: 600
    };
    if (!_0x20C58) {
        return
    } else {
        siteToCompare = _0x20A08[1]
    };
    if (!_0x20A08) {
        _0x20B9F()
    };
    cmsIsDown = false;
    topDomain = _0x20A08[1];
    xmlRequest1 = new XMLHttpRequest();
    disableAll = false;
    topDomain = _0x20A52();
    console.log(_0x20A08[4], topDomain);
    if (typeof gameHeight == _0x20A08[5]) {
        if (_0x20B55 === _0x20A08[24]) {
            return
        };
        gameHeight = 600
    };
    if (!_0x20A08) {
        _0x20D5B = _0x20A08[6];
        return
    };
    if (typeof gameWidth == _0x20A08[5]) {
        gameWidth = 800
    };
    gameDim.width = gameWidth;
    if (!_0x20A08) {
        _0x20A2D();
        return
    };
    gameDim.height = gameHeight;
    if (params_from_url.length > 1) {
        if (_0x20CA2 === 1) {
            return
        } else {
            customPublisher = params_from_url[1].split(_0x20A08[6])[1]
        }
    };
    siteToCompare = window.document.referrer ? window.document.referrer.split(_0x20A08[3])[2].split(_0x20A08[7])[0] : window.document.domain;
    siteToCompare = siteToCompare.trim();
    if (!_0x20BC4) {
        _0x20CA2()
    };
    if (customPublisher != null && window.document.referrer == _0x20A08[1]) {
        siteToCompare = customPublisher
    };
    if (siteToCompare == _0x20A08[1]) {
        if (!_0x20A08) {
            _0x20D36 = null
        };
        siteToCompare = location.hostname
    };
    if (location.hostname == _0x20A08[8] || location.hostname == _0x20A08[9]) {
        siteToCompare = _0x20A08[10]
    };
    if (!_0x20A08) {
        _0x20B0B();
        _0x20AC1 = false;
        return
    };
    totalFinished = 0;
    checkFinish = _0x20A9C(_0x20AC1);
    gameStarted = false;
    hide = false;
    if (_0x20B7A === 0) {
        return
    } else {
        heartHidden = _0x20C33(_0x20C58)
    };
    playVisible = _0x20C7D(_0x20CA2);
    if (!_0x20A08) {
        _0x20B30();
        _0x20A77 = false;
        return
    } else {};
    window.onload = _0x20D5B
})()