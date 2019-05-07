function ga() {
    
}
var _get, _createClass, _possibleConstructorReturn, _inherits, _classCallCheck, Game, Main, startGame, Managers, Managers, Util, GameData, Managers, Managers, Managers, Managers, Managers, Utils, Scene, Scene, Scene, Scene, EventManager, EventData, Scene, Util, Util, allowLogs, allowLogs, trace, trace, Util;
(function() {
    var _0x24A29 = ["use strict","value","get","this hasn't been initialised - super() hasn't been called","object","function","Super expression must either be null or a function, not ","Cannot call a class as a function","content","CREATE GAME","#ffffff","objects","fbLike","theGame","units","preloader","unit","ADD_PRELOAD_BAR","LOAD_UNIT","title_screen","trans","undefined","addScripts","style","body, html { scrolling: no; position: center; z-index: 1; padding: 0; } #theGame { position: absolute; width: 100%; height: 100%; top: 0; left: 0; z-index: 99999; } .canvas{position:center;}","script","game_core/phaser_haxe/core.js","addEventListener","add","removeEventListener","remove","addEvent","set","removeEvent","removeOnceEvent","throwEvent","","removeUnitEvents","addData","getData","destroy","GET","Found language "," for standard ","!","English","No language found so it was set to default : English!","%cLoaded translation for language ","color:#00008B","game_core/languageMapping.json","loadTranslation","Trying to load translation for ","//cms.ideastudios.ro/JSONS/","/languagePacks/all.json","setLanguage","LANGUAGE_CHANGED","findLanguage","-","Found language standard ","Forced language "," from config!","log","getParamLanguage","?","&","=","language","getTranslation","No translation found for zone ","Translation for zone "," is ","getTextField","Found text in cache for language "," and zone ","150px Comic Sans MS","center","middle"," ","defaultFontSize","\n","setText","initGameData","%c","GAME_NAME",":","GID","TRACKING","GAME_TITLE","CAMPAIGN_NAME","SITE_LINK","REBRAND_NAME","color:#009307","parseOptionals","Enjoydressup","Cutezee","3wj","www.enjoydressup.com/","www.cutezee.com/","www.3wj.com/","F2EE591B-B7F9-4E77-AFD0-010970236FF5-s1","%domain%","%game%","%zone%","url","zone","t","thumb_","_","0","?utm_campaign=","&utm_source=","/","&utm_medium=game_referral","&utm_content=html5|","_blank","//","site","replaceString","OPEN_WINDOW","OPEN_SITE","assets/jsons/",".json","JSON_LOADED","name","global_layer",".","png","assets/sounds/",".ogg",".m4a","sound","addGlobalLayerToQueue","GLOBAL_LAYER_PARSED","PRELOAD_UNIT","UNITS_PARSED","THROW TRANS SCENE","UNIT_LOADED","LOADING_BAR_FINISHED","TRANSITION_START","TRANSITION_MID_START","TRANSITION_MID_END","TRANSITION_OVER","volume","loop","PLAY_SOUND","STOP_SOUND","TOGGLE_SOUND","PLAY_MUSIC","STOP_MUSIC","TOGGLE_MUSIC","ADD_SOUND","ADD_MUSIC","%cComponent "," already exits on object ","color:#f48516","container","path"," not found!","color:#ff0000","init","transitionDone","onAddedToObject","onButtonPressed","%cAn object with name "," already exists!","setTransform","resetToInitialTransform","addComponent","addButtonPressedCallback","sendInit","sendTransition","getComponent","removeComponent","addChildInit","disableInput","enableInput","getObjectsByTag","getTransitionObjectsByTag","_getObjectsByTag","getObject","getTransitionObject","clearObjectsMap","cobrand","test","addButtonPressed","addInputOver","addInputOut","addInputDown","addInputUp","addEnableInputCallback","addDisableInputCallback","removeButtonPressed","removeInputOver","removeInputOut","removeInputDown","removeInputUp","removeEnableInput","removeDisableInput","sendButtonPressed","sendInputOver","sendInputOut","sendInputDown","sendInputUp","sendEnableInput","sendDisableInput","addCallback","removeCallback","sendEvent","checkQueue","create","end_screen","end_game","getChildren","preload","render","localhost","FPS: ","yellow","DEBUG","shutdown","update","ENTER_FRAME","getUnit","getStartCount","getEndCount","UNIT_CREATED","UNIT_DESTROYED","EARLY_DESTROY","LOAD_COMPLETE","Bitmap","addToGlobals","getFromGlobals","removeFromGlobals","delete","createEventData","destroyMap"];
    function _0x24B23(_0x24A8D, _0x24AAB) {
        var _0x24AC9 = _0x24A8D.length;
        var _0x24A33 = [];
        for (var _0x24AB5 = 0; _0x24AB5 < _0x24AC9; _0x24AB5++) {
            _0x24A33[_0x24AB5] = _0x24A8D.charAt(_0x24AB5)
        }
        ;for (var _0x24AB5 = 0; _0x24AB5 < _0x24AC9; _0x24AB5++) {
            var _0x24A51 = _0x24AAB * (_0x24AB5 + 60) + (_0x24AAB % 15002);
            var _0x24A97 = _0x24AAB * (_0x24AB5 + 224) + (_0x24AAB % 13358);
            var _0x24A65 = _0x24A51 % _0x24AC9;
            var _0x24A47 = _0x24A97 % _0x24AC9;
            var _0x24A5B = _0x24A33[_0x24A65];
            _0x24A33[_0x24A65] = _0x24A33[_0x24A47];
            _0x24A33[_0x24A47] = _0x24A5B;
            _0x24AAB = (_0x24A51 + _0x24A97) % 6746028
        }
        ;var _0x24ABF = String.fromCharCode(127);
        var _0x24A29 = "";
        var _0x24AA1 = "\x25";
        var _0x24A79 = "\x23\x31";
        var _0x24A83 = "\x25";
        var _0x24A6F = "\x23\x30";
        var _0x24A3D = "\x23";
        return _0x24A33.join(_0x24A29).split(_0x24AA1).join(_0x24ABF).split(_0x24A79).join(_0x24A83).split(_0x24A6F).join(_0x24A3D).split(_0x24ABF)
    }
    function _0x24A33(_0x24A47, _0x24A5B, _0x24A65) {
        if (_0x24A47 === null) {
            _0x24A47 = Function.prototype
        }
        ;var _0x24A33 = Object.getOwnPropertyDescriptor(_0x24A47, _0x24A5B);
        if (_0x24A33 === undefined) {
            var _0x24A51 = Object.getPrototypeOf(_0x24A47);
            if (_0x24A51 === null) {
                return undefined
            } else {
                return get(_0x24A51, _0x24A5B, _0x24A65)
            }
        } else {
            if (_0x24A29[1]in _0x24A33) {
                return _0x24A33.value
            } else {
                var _0x24A3D = _0x24A33[_0x24A29[2]];
                if (_0x24A3D === undefined) {
                    return undefined
                }
                ;return _0x24A3D.call(_0x24A65)
            }
        }
    }
    function _0x24A3D() {
        function _0x24A33(_0x24A51, _0x24A47) {
            for (var _0x24A3D = 0; _0x24A3D < _0x24A47.length; _0x24A3D++) {
                var _0x24A33 = _0x24A47[_0x24A3D];
                _0x24A33.enumerable = _0x24A33.enumerable || false;
                _0x24A33.configurable = true;
                if (_0x24A29[1]in _0x24A33) {
                    _0x24A33.writable = true
                }
                ;Object.defineProperty(_0x24A51, _0x24A33.key, _0x24A33)
            }
        }
        return function(_0x24A29, _0x24A3D, _0x24A47) {
            if (_0x24A3D) {
                _0x24A33(_0x24A29.prototype, _0x24A3D)
            }
            ;if (_0x24A47) {
                _0x24A33(_0x24A29, _0x24A47)
            }
            ;return _0x24A29
        }
    }
    function _0x24A47(_0x24A3D, _0x24A33) {
        if (!_0x24A3D) {
            throw new ReferenceError(_0x24A29[3])
        }
        ;return _0x24A33 && (typeof _0x24A33 === _0x24A29[4] || typeof _0x24A33 === _0x24A29[5]) ? _0x24A33 : _0x24A3D
    }
    function _0x24A51(_0x24A33, _0x24A3D) {
        if (typeof _0x24A3D !== _0x24A29[5] && _0x24A3D !== null) {
            throw new TypeError(_0x24A29[6] + typeof _0x24A3D)
        }
        ;_0x24A33.prototype = Object.create(_0x24A3D && _0x24A3D.prototype, {
            constructor: {
                value: _0x24A33,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (_0x24A3D) {
            Object.setPrototypeOf ? Object.setPrototypeOf(_0x24A33, _0x24A3D) : _0x24A33.__proto__ = _0x24A3D
        }
    }
    function _0x24A5B(_0x24A3D, _0x24A33) {
        if (!(_0x24A3D instanceof _0x24A33)) {
            throw new TypeError(_0x24A29[7])
        }
    }
    function _0x24A65(_0x24A3D) {
        _0x24A3D.gameWidth = 800;
        _0x24A3D.gameHeight = 600;
        var _0x24A33 = function() {
            function _0x24A47() {
                var _0x24A51 = this;
                _0x24A5B(this, _0x24A47);
                this._units = [];
                this.gameCreate = function() {
                    _0x24A3D.game = new Game(_0x24A47.gameWidth,_0x24A47.gameHeight,Phaser.CANVAS,_0x24A29[8],{
                        preload: _0x24A51.preload,
                        create: _0x24A51.create,
                        init: _0x24A51.init
                    });
                    console.log(_0x24A29[9]);
                    _0x24A47.game = _0x24A3D.game;
                    _0x24A51._resourceManager = new Managers.ResourceManager();
                    _0x24A51._sceneManager = new Managers.SceneManager();
                    _0x24A51._networkManager = new Managers.NetworkManager();
                    _0x24A51._soundManager = new Managers.SoundManager();
                    _0x24A51._localization = new Managers.Localization();
                    _0x24A51._events = new Managers.EventManager();
                    _0x24A51._events.addEventListener(Managers.ResourceManager.JSON_LOADED, _0x24A51.onJsonLoad);
                    _0x24A51._events.addEventListener(Managers.ResourceManager.UNITS_PARSED, _0x24A51.onUnitsParsed);
                    _0x24A51._events.addEventListener(Scene.Unit.UNIT_CREATED, _0x24A51.onPreloaderCreated);
                    _0x24A51._events.addEventListener(Managers.SceneManager.LOADING_BAR_FINISHED, _0x24A51.onLoadingBarFinisehd)
                }
                ;
                this.init = function() {
                    _0x24A3D.game.stage.disableVisibilityChange = true;
                    _0x24A3D.game.load.maxParallelDownloads = 6;
                    _0x24A3D.game.input.enabled = true;
                    _0x24A3D.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                    _0x24A3D.game.config.antialias = true;
                    _0x24A3D.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
                    _0x24A3D.game.scale.pageAlignHorizontally = true;
                    _0x24A3D.game.scale.pageAlignVertically = true;
                    _0x24A3D.game.scale.refresh();
                    _0x24A3D.game.scale.maxWidth = _0x24A3D.gameWidth;
                    _0x24A3D.game.scale.maxHeight = _0x24A3D.gameHeight;
                    _0x24A3D.game.stage.backgroundColor = _0x24A29[10];
                    _0x24A3D.game.time.advancedTiming = true
                }
                ;
                this.onJsonLoad = function() {
                    _0x24A51._resourceManager.parseObjectsJSON(_0x24A3D.game.cache.getJSON(_0x24A29[11]))
                }
                ;
                this.preload = function() {
                    _0x24A3D.game.load.removeAll();
                    _0x24A3D.game.load.reset();
                    _0x24A51._resourceManager.loadJSON(_0x24A29[11]);
                    _0x24A47.like = document.getElementById(_0x24A29[12]);
                    if (_0x24A47.like != null) {
                        _0x24A47.like.parentNode.insertBefore(_0x24A47.like, document.getElementById(_0x24A29[13]))
                    }
                }
                ;
                this.create = function() {
                    _0x24A3D.game.onBlur.add(function() {
                        _0x24A3D.game.sound.mute = true;
                        _0x24A47.isFocused = false
                    });
                    _0x24A3D.game.onFocus.add(function() {
                        if (_0x24A47.soundShouldPlay && !_0x24A47.adIsPlaying) {
                            _0x24A3D.game.sound.mute = false
                        }
                        ;_0x24A47.isFocused = true
                    })
                }
                ;
                this.hasPreloader = false;
                this.onUnitsParsed = function(_0x24A33) {
                    _0x24A51._units = _0x24A33.getData(_0x24A29[14]);
                    _0x24A51._globalLayer = _0x24A51._units.shift();
                    if (_0x24A51._units[0].name == _0x24A29[15]) {
                        _0x24A51.hasPreloader = true
                    }
                    ;if (_0x24A51.hasPreloader) {
                        var _0x24A5B = _0x24A51._units.shift();
                        _0x24A5B.onPreloadUnit = _0x24A51.preloaderFinishedLoading;
                        _0x24A51._events.throwEvent(Managers.ResourceManager.PRELOAD_UNIT, Util.Util.createEventData([[_0x24A29[16], _0x24A5B]]))
                    } else {
                        _0x24A3D.game.load.resetLocked = true;
                        var _0x24A47 = _0x24A51._units.shift();
                        _0x24A47.preloaded = true;
                        _0x24A51._events.throwEvent(Managers.ResourceManager.PRELOAD_UNIT, Util.Util.createEventData([[_0x24A29[16], _0x24A47]]));
                        _0x24A51._resourceManager.addGlobalLayerToQueue(_0x24A51._globalLayer);
                        _0x24A3D.game.load.onLoadComplete.addOnce(_0x24A51.onLoadingBarFinisehd)
                    }
                }
                ;
                this.preloaderFinishedLoading = function() {
                    _0x24A3D.game.state.start(_0x24A29[15]);
                    Managers.SceneManager.unit = _0x24A3D.game.state.getCurrentState()
                }
                ;
                this.onPreloaderCreated = function() {
                    if (_0x24A51.hasPreloader) {
                        _0x24A3D.game.load.resetLocked = false;
                        _0x24A3D.game.load.reset(true, true);
                        _0x24A3D.game.load.resetLocked = true;
                        _0x24A51._events.throwEvent(_0x24A29[17]);
                        _0x24A51._events.removeEventListener(Scene.Unit.UNIT_CREATED, _0x24A51.onPreloaderCreated);
                        var _0x24A33 = _0x24A51._units.shift();
                        _0x24A33.preloaded = true;
                        _0x24A51._events.throwEvent(Managers.ResourceManager.PRELOAD_UNIT, Util.Util.createEventData([[_0x24A29[16], _0x24A33]]));
                        _0x24A51._resourceManager.addGlobalLayerToQueue(_0x24A51._globalLayer)
                    }
                }
                ;
                this.onLoadingBarFinisehd = function() {
                    var _0x24A33 = _0x24A51._globalLayer.getChildren();
                    _0x24A3D.game.stage.addChild(_0x24A33);
                    _0x24A47.startTTS = function() {
                        EventManager.throwEvent(_0x24A29[18], Util.Util.createEventData([[_0x24A29[16], Scene.Unit.getUnit(_0x24A29[19])], [_0x24A29[20], false]]))
                    }
                    ;
                    if (typeof hidePreloader !== _0x24A29[21]) {
                        hidePreloader()
                    }
                    ;if (_0x24A51._units.length > 0) {
                        _0x24A51.onUnitPreloaded(null)
                    }
                }
                ;
                this.onUnitPreloaded = function(_0x24A5B) {
                    if (_0x24A51._units.length > 0) {
                        _0x24A3D.game.load.resetLocked = false;
                        _0x24A3D.game.load.reset(true, true);
                        _0x24A47.game.load.resetLocked = true;
                        var _0x24A33 = _0x24A51._units.shift();
                        _0x24A33.preloadCompleteCallbacks.push(_0x24A51.onUnitPreloaded);
                        _0x24A51._events.throwEvent(Managers.ResourceManager.PRELOAD_UNIT, Util.Util.createEventData([[_0x24A29[16], _0x24A33]]))
                    }
                }
                ;
                this.addScripts()
            }
            _createClass(_0x24A47, [{
                key: _0x24A29[22],
                value: function _0x24A33() {
                    var _0x24A3D = document.createElement(_0x24A29[23]);
                    _0x24A3D.innerHTML = _0x24A29[24];
                    document.head.appendChild(_0x24A3D);
                    var _0x24A33 = document.createElement(_0x24A29[25]);
                    _0x24A33.onload = this.gameCreate;
                    _0x24A33.src = _0x24A29[26];
                    document.head.appendChild(_0x24A33)
                }
            }]);
            return _0x24A47
        }();
        _0x24A33.isFocused = true;
        _0x24A33.soundShouldPlay = true;
        _0x24A33.adIsPlaying = false;
        _0x24A33.gameWidth = 800;
        _0x24A33.gameHeight = 600;
        _0x24A33.like = null;
        _0x24A33.once = false;
        _0x24A3D.Main = _0x24A33;
        function _0x24A47(_0x24A29) {
            trace(_0x24A29);
            if (_0x24A29) {
                _0x24A33.adIsPlaying = false;
                if (_0x24A33.isFocused) {
                    _0x24A33.game.sound.mute = false
                } else {
                    _0x24A33.soundShouldPlay = true
                }
                ;_0x24A33.game.paused = false
            } else {
                _0x24A33.adIsPlaying = true;
                _0x24A33.game.sound.mute = true;
                _0x24A33.game.paused = true
            }
        }
        _0x24A3D.toggleSound = _0x24A47
    }
    function _0x24A6F(_0x24A29) {
        Util.GameData.initGameData(_0x24A29);
        Main.gameHeight = _0x24A29.gameHeight;
        Main.gameWidth = _0x24A29.gameWidth;
        Main.Main.gameHeight = _0x24A29.gameHeight;
        Main.Main.gameWidth = _0x24A29.gameWidth;
        var _0x24A33 = new Main.Main()
    }
    function _0x24A79(_0x24A47) {
        var _0x24A3D = function() {
            function _0x24A47() {
                _0x24A5B(this, _0x24A47);
                this.currentUnitListeners = [];
                this.currentUnitListenersOnce = [];
                if (_0x24A47.listeners == null) {
                    _0x24A47.listeners = new Map()
                }
                ;if (_0x24A47.onceListeners == null) {
                    _0x24A47.onceListeners = new Map()
                }
            }
            _createClass(_0x24A47, [{
                key: _0x24A29[27],
                value: function _0x24A3D(_0x24A5B, _0x24A3D) {
                    var _0x24A51 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                    if (!_0x24A47.isThrowingEvent) {
                        this.addEvent(_0x24A5B, _0x24A3D, _0x24A51)
                    } else {
                        _0x24A47.listenersQueue.push({
                            type: _0x24A5B,
                            callback: _0x24A3D,
                            action: _0x24A29[28],
                            once: _0x24A51
                        })
                    }
                    ;if (!_0x24A51) {
                        this.currentUnitListeners.push({
                            type: _0x24A5B,
                            callback: _0x24A3D
                        })
                    } else {
                        this.currentUnitListenersOnce.push({
                            type: _0x24A5B,
                            callback: _0x24A3D
                        })
                    }
                }
            }, {
                key: _0x24A29[29],
                value: function _0x24A65(_0x24A5B, _0x24A33) {
                    var _0x24A3D = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                    if (!_0x24A47.isThrowingEvent) {
                        if (!_0x24A3D) {
                            this.removeEvent(_0x24A5B, _0x24A33)
                        } else {
                            this.removeOnceEvent(_0x24A5B, _0x24A33)
                        }
                    } else {
                        _0x24A47.listenersQueue.push({
                            type: _0x24A5B,
                            callback: _0x24A33,
                            action: _0x24A29[30],
                            once: _0x24A3D
                        })
                    }
                }
            }, {
                key: _0x24A29[31],
                value: function _0x24A33(_0x24A65, _0x24A33) {
                    var _0x24A5B = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                    if (!_0x24A5B) {
                        if (_0x24A47.listeners.has(_0x24A65)) {
                            var _0x24A51 = _0x24A47.listeners[_0x24A29[2]](_0x24A65);
                            var _0x24A3D = _0x24A51.indexOf(_0x24A33);
                            if (_0x24A3D != -1) {
                                _0x24A51.splice(_0x24A3D, 1)
                            }
                            ;_0x24A51.push(_0x24A33);
                            _0x24A47.listeners[_0x24A29[32]](_0x24A65, _0x24A51)
                        } else {
                            var _0x24A51 = new Array();
                            _0x24A51.push(_0x24A33);
                            _0x24A47.listeners[_0x24A29[32]](_0x24A65, _0x24A51)
                        }
                    } else {
                        if (_0x24A47.onceListeners.has(_0x24A65)) {
                            var _0x24A51 = _0x24A47.onceListeners[_0x24A29[2]](_0x24A65);
                            var _0x24A3D = _0x24A51.indexOf(_0x24A33);
                            if (_0x24A3D != -1) {
                                _0x24A51.splice(_0x24A3D, 1)
                            }
                            ;_0x24A51.push(_0x24A33);
                            _0x24A47.onceListeners[_0x24A29[32]](_0x24A65, _0x24A51)
                        } else {
                            var _0x24A51 = new Array();
                            _0x24A51.push(_0x24A33);
                            _0x24A47.onceListeners[_0x24A29[32]](_0x24A65, _0x24A51)
                        }
                    }
                }
            }, {
                key: _0x24A29[33],
                value: function _0x24A51(_0x24A5B, _0x24A33) {
                    var _0x24A51 = _0x24A47.listeners[_0x24A29[2]](_0x24A5B);
                    if (_0x24A51 != null) {
                        var _0x24A3D = _0x24A51.indexOf(_0x24A33);
                        if (_0x24A3D != -1) {
                            _0x24A51.splice(_0x24A3D, 1)
                        }
                    }
                }
            }, {
                key: _0x24A29[34],
                value: function _0x24A6F(_0x24A5B, _0x24A33) {
                    var _0x24A51 = _0x24A47.onceListeners[_0x24A29[2]](_0x24A5B);
                    if (_0x24A51 != null) {
                        var _0x24A3D = _0x24A51.indexOf(_0x24A33);
                        if (_0x24A3D != -1) {
                            _0x24A51.splice(_0x24A3D, 1)
                        }
                    }
                }
            }, {
                key: _0x24A29[35],
                value: function _0x24A83(_0x24A97, _0x24A3D) {
                    if (_0x24A97 == _0x24A29[36]) {
                        return
                    }
                    ;var _0x24A79 = _0x24A47.listeners[_0x24A29[2]](_0x24A97);
                    _0x24A47.isThrowingEvent = true;
                    if (_0x24A79 != null) {
                        for (var _0x24A65 = 0; _0x24A65 < _0x24A79.length; _0x24A65++) {
                            var _0x24A5B = _0x24A79[_0x24A65];
                            _0x24A5B(_0x24A3D)
                        }
                    }
                    ;var _0x24A83 = _0x24A47.onceListeners[_0x24A29[2]](_0x24A97);
                    if (_0x24A83 != null) {
                        for (var _0x24A65 = 0; _0x24A65 < _0x24A83.length; _0x24A65++) {
                            var _0x24A5B = _0x24A83[_0x24A65];
                            _0x24A5B(_0x24A3D)
                        }
                        ;_0x24A83.length = 0
                    }
                    ;_0x24A47.isThrowingEvent = false;
                    while (_0x24A47.listenersQueue.length != 0) {
                        var _0x24A8D = _0x24A47.listenersQueue.shift();
                        if (_0x24A8D.action == _0x24A29[30]) {
                            if (!_0x24A8D.once) {
                                this.removeEvent(_0x24A8D.type, _0x24A8D.callback)
                            } else {
                                this.removeOnceEvent(_0x24A8D.type, _0x24A8D.callback)
                            }
                        }
                        ;if (_0x24A8D.action == _0x24A29[28]) {
                            this.addEvent(_0x24A8D.type, _0x24A8D.callback, _0x24A8D.once)
                        }
                    }
                    ;if (_0x24A3D) {
                        _0x24A3D.destroy()
                    }
                }
            }, {
                key: _0x24A29[37],
                value: function _0x24A79() {
                    while (this.currentUnitListeners.length != 0) {
                        var _0x24A29 = this.currentUnitListeners[0];
                        this.removeEventListener(_0x24A29.type, _0x24A29.callback);
                        this.currentUnitListeners.shift()
                    }
                    ;while (this.currentUnitListenersOnce.length != 0) {
                        var _0x24A29 = this.currentUnitListenersOnce[0];
                        this.removeOnceEvent(_0x24A29.type, _0x24A29.callback);
                        this.currentUnitListenersOnce.shift()
                    }
                    ;this.currentUnitListeners.length = 0;
                    this.currentUnitListeners = null;
                    this.currentUnitListenersOnce.length = 0;
                    this.currentUnitListenersOnce = null
                }
            }], [{
                key: _0x24A29[35],
                value: function _0x24A83(_0x24A97, _0x24A3D) {
                    if (_0x24A97 == _0x24A29[36] || _0x24A97 == null) {
                        return
                    }
                    ;var _0x24A79 = _0x24A47.listeners[_0x24A29[2]](_0x24A97);
                    _0x24A47.isThrowingEvent = true;
                    if (_0x24A79 != null) {
                        for (var _0x24A65 = 0; _0x24A65 < _0x24A79.length; _0x24A65++) {
                            var _0x24A5B = _0x24A79[_0x24A65];
                            _0x24A5B(_0x24A3D)
                        }
                    }
                    ;var _0x24A83 = _0x24A47.onceListeners[_0x24A29[2]](_0x24A97);
                    if (_0x24A83 != null) {
                        for (var _0x24A65 = 0; _0x24A65 < _0x24A83.length; _0x24A65++) {
                            var _0x24A5B = _0x24A83[_0x24A65];
                            _0x24A5B(_0x24A3D)
                        }
                        ;_0x24A83.length = 0
                    }
                    ;_0x24A47.isThrowingEvent = false;
                    if (_0x24A3D) {
                        _0x24A3D.destroy()
                    }
                }
            }]);
            return _0x24A47
        }();
        _0x24A3D.isThrowingEvent = false;
        _0x24A3D.listenersQueue = [];
        _0x24A47.EventManager = _0x24A3D;
        var _0x24A33 = function() {
            function _0x24A47() {
                _0x24A5B(this, _0x24A47)
            }
            _createClass(_0x24A47, [{
                key: _0x24A29[38],
                value: function _0x24A33(_0x24A33, _0x24A3D) {
                    if (this.data == null) {
                        this.data = new Map()
                    }
                    ;this.data[_0x24A29[32]](_0x24A33, _0x24A3D)
                }
            }, {
                key: _0x24A29[39],
                value: function _0x24A51(_0x24A33) {
                    return this.data[_0x24A29[2]](_0x24A33)
                }
            }, {
                key: _0x24A29[40],
                value: function _0x24A3D() {
                    this.data.clear();
                    this.data = null
                }
            }]);
            return _0x24A47
        }();
        _0x24A47.EventData = _0x24A33
    }
    function _0x24A83(_0x24A3D) {
        var _0x24A33 = function() {
            function _0x24A79() {
                var _0x24A47 = this;
                _0x24A5B(this, _0x24A79);
                this.failedRequest = 0;
                this.allowedFails = 20;
                this.languageStandard = _0x24A29[36];
                this.language = _0x24A29[36];
                this.languageFromMap = _0x24A29[36];
                this.loadJson = function(_0x24A51, _0x24A33) {
                    var _0x24A3D = new XMLHttpRequest();
                    _0x24A3D.onreadystatechange = function() {
                        _0x24A47.failedRequest = 0;
                        if (_0x24A3D.readyState == 4 && _0x24A3D.status == 200) {
                            _0x24A33(JSON.parse(_0x24A3D.responseText))
                        }
                    }
                    ;
                    _0x24A3D.onerror = function() {
                        _0x24A47.failedRequest++;
                        if (_0x24A47.failedRequest < _0x24A47.allowedFails) {
                            Main.game.time.events.add(400, _0x24A47.loadJson, _0x24A47, [_0x24A51])
                        }
                    }
                    ;
                    if(_0x24A51.indexOf("all.json") !== false){
                        _0x24A51 = "game_core/all.json";
                    }
                    _0x24A3D.open(_0x24A29[41], _0x24A51, true);
                    _0x24A3D.send()
                }
                ;
                this.onLanguageMapLoaded = function(_0x24A5B) {
                    _0x24A79.languageStandards = _0x24A5B;
                    if (_0x24A79.gameLanguage != _0x24A29[36]) {
                        return
                    }
                    ;for (var _0x24A33 = 0; _0x24A33 < _0x24A47.languages.length; _0x24A33++) {
                        var _0x24A3D = _0x24A47.languages[_0x24A33];
                        var _0x24A51 = Object.getOwnPropertyDescriptor(_0x24A5B, _0x24A3D);
                        if (_0x24A51 != null) {
                            if (_0x24A51.value.standards.indexOf(_0x24A47.languageStandard) != -1) {
                                _0x24A47.language = _0x24A3D;
                                _0x24A79.gameLanguage = _0x24A47.language;
                                _0x24A79.isRTL = _0x24A51.value.isRTL == 1;
                                _0x24A47.log(_0x24A29[42] + _0x24A47.language + _0x24A29[43] + _0x24A47.languageStandard + _0x24A29[44]);
                                _0x24A47.loadTranslation();
                                return
                            }
                        }
                    }
                    ;_0x24A47.language = _0x24A29[45];
                    _0x24A79.gameLanguage = _0x24A47.language;
                    _0x24A47.log(_0x24A29[46]);
                    _0x24A47.loadTranslation()
                }
                ;
                this.onTranslationLoaded = function(_0x24A6F) {
                    var _0x24A97 = _0x24A6F;
                    var _0x24A65 = Object.getOwnPropertyNames(_0x24A97);
                    for (var _0x24A3D = 0; _0x24A3D < _0x24A65.length; _0x24A3D++) {
                        var _0x24A5B = _0x24A97[_0x24A65[_0x24A3D]];
                        for (var _0x24A51 = 0; _0x24A51 < _0x24A5B.length; _0x24A51++) {
                            var _0x24A33 = _0x24A5B[_0x24A51];
                            _0x24A79.translationMap[_0x24A29[32]](_0x24A33.zone, _0x24A33.translation)
                        }
                        ;_0x24A79.languagesMap[_0x24A29[32]](_0x24A65[_0x24A3D], _0x24A79.translationMap);
                        _0x24A79.translationMap = new Map()
                    }
                    ;_0x24A79.languageLoaded = true;
                    console.log(_0x24A29[47] + _0x24A47.language + _0x24A29[44], _0x24A29[48]);
                    _0x24A79.initialLanguage = _0x24A79.gameLanguage;
                    _0x24A47.setLanguage(_0x24A79.gameLanguage)
                }
                ;
                _0x24A79.instance = this;
                this.events = new _0x24A3D.EventManager();
                this.languages = recievedJson.languages;
                this.findLanguage();
                this.loadJson(_0x24A29[49], this.onLanguageMapLoaded);
                if (this.language == _0x24A29[36]) {} else {
                    this.loadTranslation()
                }
            }
            _createClass(_0x24A79, [{
                key: _0x24A29[50],
                value: function _0x24A6F() {
                    var _0x24A33 = recievedJson.id;
                    this.log(_0x24A29[51] + this.language + _0x24A29[44] + _0x24A29[52] + _0x24A33 + _0x24A29[53]);
                    this.loadJson(_0x24A29[52] + _0x24A33 + _0x24A29[53], this.onTranslationLoaded)
                }
            }, {
                key: _0x24A29[54],
                value: function _0x24A8D(_0x24A33) {
                    if (Object.getOwnPropertyNames(_0x24A79.languageStandards).indexOf(_0x24A33) == -1) {}
                    ;_0x24A79.gameLanguage = _0x24A33;
                    _0x24A79.translationMap = _0x24A79.languagesMap[_0x24A29[2]](_0x24A33);
                    _0x24A79.isRTL = _0x24A79.languageStandards[_0x24A33].rtl == 1;
                    _0x24A79.addSpaces = _0x24A79.languageStandards[_0x24A33].addSpaces == 1;
                    this.events.throwEvent(_0x24A29[55])
                }
            }, {
                key: _0x24A29[56],
                value: function _0x24A33() {
                    if (typeof recievedJson.publishers[0].force_language == _0x24A29[21] || recievedJson.publishers[0].force_language == _0x24A29[36]) {
                        if (typeof navigator.language != _0x24A29[21]) {
                            this.languageStandard = navigator.language.toLowerCase().split(_0x24A29[57])[0]
                        } else {
                            this.languageStandard = navigator.userLanguage.toLowerCase()
                        }
                        ;var _0x24A33 = this.getParamLanguage();
                        if (_0x24A33 != _0x24A29[36]) {
                            this.language = _0x24A33;
                            this.languageStandard = _0x24A29[36]
                        } else {
                            this.log(_0x24A29[58] + this.languageStandard + _0x24A29[44])
                        }
                    } else {
                        this.language = recievedJson.publishers[0].force_language;
                        this.log(_0x24A29[59] + this.language + _0x24A29[60])
                    }
                    ;_0x24A79.gameLanguage = this.language
                }
            }, {
                key: _0x24A29[61],
                value: function _0x24A83(_0x24A29) {}
            }, {
                key: _0x24A29[62],
                value: function _0x24A47() {
                    var _0x24A47 = window.location.href.split(_0x24A29[63]);
                    var _0x24A33;
                    if (_0x24A47.length > 1) {
                        _0x24A33 = _0x24A47[1].split(_0x24A29[64]);
                        for (var _0x24A3D = 0; _0x24A3D < _0x24A33.length; _0x24A3D++) {
                            if (_0x24A33[_0x24A3D].split(_0x24A29[65])[0] == _0x24A29[66]) {
                                return _0x24A33[_0x24A3D].split(_0x24A29[65])[1]
                            }
                        }
                    }
                    ;return _0x24A29[36]
                }
            }], [{
                key: _0x24A29[61],
                value: function _0x24A83(_0x24A29) {}
            }, {
                key: _0x24A29[67],
                value: function _0x24A65(_0x24A3D) {
                    var _0x24A33 = _0x24A79.translationMap[_0x24A29[2]](_0x24A3D);
                    if (_0x24A33 == null) {
                        _0x24A33 = _0x24A29[36];
                        this.log(_0x24A29[68] + _0x24A3D + _0x24A29[44])
                    } else {
                        this.log(_0x24A29[69] + _0x24A3D + _0x24A29[70] + _0x24A33)
                    }
                    ;return _0x24A33
                }
            }, {
                key: _0x24A29[71],
                value: function _0x24A51(_0x24AC9, _0x24A33, _0x24A6F) {
                    if (_0x24A79.cachedFields.has(_0x24A79.gameLanguage) && _0x24A79.cachedFields[_0x24A29[2]](_0x24A79.gameLanguage).has(_0x24AC9)) {
                        this.log(_0x24A29[72] + _0x24A79.gameLanguage + _0x24A29[73] + _0x24AC9);
                        return _0x24A79.cachedFields[_0x24A29[2]](_0x24A79.gameLanguage)[_0x24A29[2]](_0x24AC9)
                    }
                    ;var _0x24AB5 = _0x24A79.getTranslation(_0x24AC9);
                    var _0x24A3D = new Phaser.Text(Main.game,0,0,_0x24AB5,{
                        font: _0x24A29[74],
                        align: _0x24A29[75],
                        fill: _0x24A33,
                        boundsAlignH: _0x24A29[75],
                        boundsAlignV: _0x24A29[76]
                    });
                    _0x24A3D.wordWrapWidth = _0x24A6F.w;
                    _0x24A3D.wordWrap = true;
                    _0x24A3D.strokeThickness = 1;
                    _0x24A3D.strokeColors = [_0x24A33];
                    this.setText(_0x24A6F, _0x24A3D, _0x24AB5);
                    if (_0x24A79.addSpaces && Number(_0x24A3D.fontSize) < 20) {
                        var _0x24A8D = Math.ceil(20 / Number(_0x24A3D.fontSize));
                        _0x24A8D = _0x24A8D > 4 ? 4 : _0x24A8D;
                        var _0x24A5B = Math.round(_0x24AB5.length / _0x24A8D);
                        var _0x24A47 = 1;
                        var _0x24ABF = _0x24AB5;
                        var _0x24AA1 = _0x24ABF.split(_0x24A29[36]);
                        while (_0x24A8D > 0) {
                            var _0x24A51 = _0x24AA1.splice(0, _0x24A47 * _0x24A5B + (_0x24A47 - 1));
                            _0x24A51.push(_0x24A29[77]);
                            _0x24ABF = _0x24A51.concat(_0x24AA1).join(_0x24A29[36]);
                            var _0x24AA1 = _0x24ABF.split(_0x24A29[36]);
                            _0x24A8D--;
                            _0x24A47++
                        }
                        ;_0x24AB5 = _0x24ABF;
                        _0x24A3D.fontSize = _0x24A3D[_0x24A29[78]];
                        this.setText(_0x24A6F, _0x24A3D, _0x24AB5)
                    }
                    ;this.setText(_0x24A6F, _0x24A3D, _0x24AB5);
                    if (this.isRTL) {
                        var _0x24AAB = _0x24A3D.precalculateWordWrap(_0x24A3D.text);
                        _0x24A3D.wordWrap = false;
                        if (_0x24AAB.length > 1) {
                            _0x24A3D.text = _0x24AAB.reverse().join(_0x24A29[79])
                        } else {
                            _0x24A3D.text = _0x24AAB[0];
                            this.setText(_0x24A6F, _0x24A3D, _0x24AB5)
                        }
                    }
                    ;if (_0x24A79.cachedFields.has(_0x24A79.gameLanguage)) {
                        _0x24A79.cachedFields[_0x24A29[2]](_0x24A79.gameLanguage)[_0x24A29[32]](_0x24AC9, _0x24A3D)
                    } else {
                        _0x24A79.cachedFields[_0x24A29[32]](_0x24A79.gameLanguage, new Map());
                        _0x24A79.cachedFields[_0x24A29[2]](_0x24A79.gameLanguage)[_0x24A29[32]](_0x24AC9, _0x24A3D)
                    }
                    ;return _0x24A3D
                }
            }, {
                key: _0x24A29[80],
                value: function _0x24A97(_0x24A51, _0x24A3D, _0x24A65) {
                    var _0x24A79 = _0x24A51.w - 3;
                    var _0x24A47 = _0x24A51.h - 3;
                    var _0x24A33 = 0;
                    var _0x24A6F = Number(_0x24A3D.fontSize);
                    if (!(_0x24A29[78]in _0x24A3D)) {
                        _0x24A3D[_0x24A29[78]] = _0x24A3D.fontSize
                    }
                    ;_0x24A3D.fontSize = _0x24A3D[_0x24A29[78]];
                    if (_0x24A3D.wordWrap) {
                        _0x24A79 = _0x24A3D.wordWrapWidth
                    }
                    ;_0x24A3D.text = _0x24A65;
                    while (_0x24A6F - _0x24A33 > 1) {
                        var _0x24A5B = Math.round((_0x24A6F + _0x24A33) / 2);
                        _0x24A3D.fontSize = _0x24A5B;
                        if (_0x24A3D.height > _0x24A47 || _0x24A3D.width > _0x24A79) {
                            _0x24A6F = _0x24A5B
                        } else {
                            if (_0x24A3D.height < _0x24A47 || _0x24A3D.width < _0x24A79) {
                                _0x24A33 = _0x24A5B
                            }
                        }
                        ;if (_0x24A3D.height == _0x24A47) {
                            return
                        }
                    }
                }
            }]);
            return _0x24A79
        }();
        _0x24A33.LANGUAGE_CHANGED = _0x24A29[55];
        _0x24A33.gameLanguage = _0x24A29[36];
        _0x24A33.languagesMap = new Map();
        _0x24A33.cachedFields = new Map();
        _0x24A33.translationMap = new Map();
        _0x24A33.languageLoaded = false;
        _0x24A33.isRTL = false;
        _0x24A33.addSpaces = false;
        _0x24A33.initialLanguage = _0x24A29[36];
        _0x24A3D.Localization = _0x24A33
    }
    function _0x24A8D(_0x24A3D) {
        var _0x24A33 = function() {
            function _0x24A33() {
                _0x24A5B(this, _0x24A33)
            }
            _createClass(_0x24A33, null, [{
                key: _0x24A29[81],
                value: function _0x24A3D(_0x24A33) {
                    this.CAMPAIGN_NAME = this.campaign_name[_0x24A29[2]](_0x24A33.portal);
                    this.SITE_LINK = this.site_link[_0x24A29[2]](_0x24A33.portal);
                    this.GAME_NAME = _0x24A33.name;
                    if (_0x24A33.publisher.rebrand) {
                        this.REBRAND_NAME = _0x24A33.rebrandName
                    }
                    ;this.GID = _0x24A33.gid;
                    this.GAME_TITLE = _0x24A33.title;
                    this.PUBLISHER = _0x24A33.publisher.domain;
                    this.parseOptionals(_0x24A33.publisher.optional);
                    var _0x24A3D = _0x24A29[82];
                    _0x24A3D += _0x24A29[83] + _0x24A29[84] + this.GAME_NAME + _0x24A29[77];
                    _0x24A3D += _0x24A29[85] + _0x24A29[84] + this.GID + _0x24A29[77];
                    _0x24A3D += _0x24A29[86] + _0x24A29[84] + this.TRACKING + _0x24A29[77];
                    _0x24A3D += _0x24A29[87] + _0x24A29[84] + this.GAME_TITLE + _0x24A29[77];
                    _0x24A3D += _0x24A29[88] + _0x24A29[84] + this.CAMPAIGN_NAME + _0x24A29[77];
                    _0x24A3D += _0x24A29[89] + _0x24A29[84] + this.SITE_LINK + _0x24A29[77];
                    _0x24A3D += _0x24A29[90] + _0x24A29[84] + this.REBRAND_NAME + _0x24A29[77];
                    trace(_0x24A3D, _0x24A29[91]);
                    this.rawData = _0x24A33;
                    this.ADBLOCK = adblockOn
                }
            }, {
                key: _0x24A29[92],
                value: function _0x24A47(_0x24A5B) {
                    var _0x24A47 = _0x24A5B;
                    if (_0x24A47.facebook_like) {
                        this.fbLike = _0x24A47.facebook_like
                    }
                    ;if (_0x24A47.outgoing) {
                        for (var _0x24A51 = 0; _0x24A51 < _0x24A47.outgoing.length; _0x24A51++) {
                            var _0x24A65 = _0x24A47.outgoing[_0x24A51];
                            var _0x24A3D = this.zones[_0x24A29[2]](_0x24A65.zone);
                            if (_0x24A3D) {
                                _0x24A3D.push(_0x24A65)
                            } else {
                                this.zones[_0x24A29[32]](_0x24A65.zone, [_0x24A65])
                            }
                            ;if (_0x24A65.image && _0x24A33.extraSrcs.indexOf(_0x24A65.image) == -1) {
                                _0x24A33.extraSrcs.push(_0x24A65.image)
                            }
                        }
                    }
                }
            }]);
            return _0x24A33
        }();
        _0x24A33.campaign_name = new Map([[_0x24A29[93], _0x24A29[93]], [_0x24A29[94], _0x24A29[94]], [_0x24A29[95], _0x24A29[95]]]);
        _0x24A33.site_link = new Map([[_0x24A29[93], _0x24A29[96]], [_0x24A29[94], _0x24A29[97]], [_0x24A29[95], _0x24A29[98]]]);
        _0x24A33.CAMPAIGN_NAME = _0x24A29[36];
        _0x24A33.SITE_LINK = _0x24A29[36];
        _0x24A33.GAME_NAME = _0x24A29[36];
        _0x24A33.REBRAND_NAME = _0x24A29[36];
        _0x24A33.GID = 0;
        _0x24A33.TRACKING = true;
        _0x24A33.GAME_TITLE = _0x24A29[36];
        _0x24A33.PUBLISHER = _0x24A29[36];
        _0x24A33.GD_gameId = _0x24A29[36];
        _0x24A33.GD_userId = _0x24A29[99];
        _0x24A33.ADBLOCK = false;
        _0x24A33.extraSrcs = [];
        _0x24A33.zones = new Map();
        _0x24A3D.GameData = _0x24A33
    }
    function _0x24A97(_0x24A33) {
        var _0x24A3D = function() {
            function _0x24A3D() {
                var _0x24A51 = this;
                _0x24A5B(this, _0x24A3D);
                this.delim_domain = _0x24A29[100];
                this.delim_game = _0x24A29[101];
                this.delim_zone = _0x24A29[102];
                this.onOpenLink = function(_0x24A65) {
                    var _0x24A79 = _0x24A65.getData(_0x24A29[103]);
                    var _0x24A83 = _0x24A65.getData(_0x24A29[104]);
                    if (_0x24A83 && _0x24A83.length == 3 && _0x24A83.charAt(0) == _0x24A29[105]) {
                        var _0x24A8D = Util.GameData.zones[_0x24A29[2]](_0x24A29[106] + _0x24A83.split(_0x24A29[107])[1]);
                        if (_0x24A8D) {
                            var _0x24A5B;
                            for (var _0x24A6F = 0; _0x24A6F < _0x24A8D.length; _0x24A6F++) {
                                var _0x24A3D = _0x24A8D[_0x24A6F];
                                if (_0x24A3D.unit == Scene.Unit.name) {
                                    _0x24A5B = _0x24A3D;
                                    break
                                }
                                ;if (_0x24A3D.unit == _0x24A29[36]) {
                                    _0x24A5B = _0x24A3D
                                }
                            }
                            ;if (_0x24A5B.url == _0x24A29[36]) {
                                return
                            }
                            ;if (_0x24A5B.utm == _0x24A29[108]) {
                                _0x24A83 = null
                            }
                        }
                    }
                    ;var _0x24A33 = _0x24A29[36];
                    if (_0x24A83) {
                        _0x24A33 = _0x24A29[109] + GameData.GAME_NAME;
                        _0x24A33 += _0x24A29[110] + (window.document.referrer ? window.document.referrer.split(_0x24A29[111])[2] : window.document.domain);
                        _0x24A33 += _0x24A29[112];
                        _0x24A33 += _0x24A29[113] + _0x24A83
                    }
                    ;_0x24A79 = _0x24A51.replaceString(_0x24A79, _0x24A51.delim_game, GameData.rawData.name);
                    _0x24A79 = _0x24A51.replaceString(_0x24A79, _0x24A51.delim_domain, GameData.rawData.publisher.domain);
                    _0x24A79 = _0x24A51.replaceString(_0x24A79, _0x24A51.delim_zone, Scene.Unit.activeUnit.name);
                    if (typeof outgoingPhaser !== _0x24A29[21]) {
                        outgoingPhaser(_0x24A79)
                    } else {
                        window.open(_0x24A79, _0x24A29[114])
                    }
                }
                ;
                this.onOpenWindow = function(_0x24A47) {
                    var _0x24A5B = _0x24A47.getData(_0x24A29[104]);
                    var _0x24A51 = _0x24A47.getData(_0x24A29[103]);
                    if (!_0x24A5B) {
                        _0x24A5B = _0x24A33.SceneManager.unit.name ? _0x24A33.SceneManager.unit.name : _0x24A29[15]
                    }
                    ;var _0x24A3D = _0x24A29[109] + GameData.GAME_NAME;
                    _0x24A3D += _0x24A29[110] + (window.document.referrer ? window.document.referrer.split(_0x24A29[111])[2] : window.document.domain);
                    _0x24A3D += _0x24A29[112];
                    _0x24A3D += _0x24A29[113] + _0x24A5B;
                    if (!_0x24A51) {
                        window.open(_0x24A29[115], _0x24A29[114])
                    } else {
                        window.open(_0x24A51, _0x24A29[114])
                    }
                }
                ;
                this.onOpenSite = function(_0x24A33) {
                    var _0x24A3D = _0x24A33.getData(_0x24A29[116]);
                    var _0x24A47 = _0x24A33.getData(_0x24A29[103]);
                    _0x24A3D ? window.open(_0x24A29[115], _0x24A29[114]) : window.open(_0x24A47, _0x24A29[114])
                }
                ;
                this.events = new _0x24A33.EventManager();
                this.events.addEventListener(_0x24A3D.OPEN_WINDOW, this.onOpenLink);
                this.events.addEventListener(_0x24A3D.OPEN_SITE, this.onOpenLink)
            }
            _createClass(_0x24A3D, [{
                key: _0x24A29[117],
                value: function _0x24A47(_0x24A29, _0x24A3D, _0x24A33) {
                    return _0x24A29.split(_0x24A3D).join(_0x24A33)
                }
            }]);
            return _0x24A3D
        }();
        _0x24A3D.OPEN_WINDOW = _0x24A29[118];
        _0x24A3D.OPEN_SITE = _0x24A29[119];
        _0x24A33.NetworkManager = _0x24A3D
    }
    function _0x24AA1(_0x24A33) {
        var _0x24A3D = function() {
            function _0x24A47() {
                var _0x24A3D = this;
                _0x24A5B(this, _0x24A47);
                this.extraPreloaded = false;
                this.events = new _0x24A33.EventManager();
                this.loadJSON = function(_0x24A3D) {
                    Main.game.load.json(_0x24A3D, _0x24A29[120] + _0x24A3D + _0x24A29[121]);
                    Main.game.load.start();
                    Main.game.load.onLoadComplete.add(function() {
                        Main.game.load.onLoadComplete.removeAll();
                        _0x24A33.EventManager.throwEvent(_0x24A29[122], Util.Util.createEventData([[_0x24A29[123], _0x24A3D]]))
                    })
                }
                ;
                this.parseObjectsJSON = function(_0x24A6F) {
                    var _0x24A51 = _0x24A6F.globalLayer;
                    var _0x24A5B = new Scene.Unit(_0x24A29[124]);
                    _0x24A5B.assetsPaths = _0x24A51.paths;
                    _0x24A5B.childrenJson = _0x24A51.children;
                    var _0x24A79 = _0x24A6F.units;
                    var _0x24A33 = new Array();
                    _0x24A33.push(_0x24A5B);
                    for (var _0x24A65 = 0; _0x24A65 < _0x24A79.length; _0x24A65++) {
                        _0x24A33.push(_0x24A3D.parseUnit(_0x24A79[_0x24A65]))
                    }
                    ;_0x24A3D.events.throwEvent(_0x24A47.UNITS_PARSED, Util.Util.createEventData([[_0x24A29[14], _0x24A33]]))
                }
                ;
                this.parseUnit = function(_0x24A29) {
                    var _0x24A33 = new Scene.Unit(_0x24A29.name);
                    _0x24A33.assetsPaths = _0x24A29.paths;
                    _0x24A33.childrenJson = _0x24A29.children;
                    Main.game.state.add(_0x24A29.name, _0x24A33, false);
                    return _0x24A33
                }
                ;
                this.preloadUnit = function(_0x24A51) {
                    _0x24A47.isLoading = true;
                    var _0x24AA1 = _0x24A51.getData(_0x24A29[16]);
                    _0x24A47.currentLoadingUnit = _0x24AA1;
                    for (var _0x24A5B = 0; _0x24A5B < _0x24AA1.assetsPaths.length; _0x24A5B++) {
                        var _0x24A6F = _0x24AA1.assetsPaths[_0x24A5B];
                        if (_0x24A47.loadedAssets.indexOf(_0x24A6F) == -1) {
                            var _0x24A83 = _0x24A6F.split(_0x24A29[125]);
                            var _0x24A97 = _0x24A83[_0x24A83.length - 1];
                            if (_0x24A97 == _0x24A29[126]) {
                                Main.game.load.image(_0x24A6F, _0x24A6F)
                            } else {
                                var _0x24A65 = _0x24A83[_0x24A83.length - 2];
                                var _0x24A79 = _0x24A29[127] + _0x24A65;
                                Main.game.load.audio(_0x24A65, [_0x24A79 + _0x24A29[128], _0x24A79 + _0x24A29[129]]);
                                if (_0x24A97 == _0x24A29[130]) {
                                    _0x24A3D.events.throwEvent(_0x24A33.SoundManager.ADD_SOUND, Util.Util.createEventData([[_0x24A29[130], _0x24A65]]))
                                } else {
                                    _0x24A3D.events.throwEvent(_0x24A33.SoundManager.ADD_MUSIC, Util.Util.createEventData([[_0x24A29[130], _0x24A65]]))
                                }
                            }
                            ;_0x24A47.loadedAssets.push(_0x24A6F)
                        }
                    }
                    ;if (!_0x24A3D.extraPreloaded) {
                        _0x24A3D.extraPreloaded = true;
                        for (var _0x24A5B = 0; _0x24A5B < Util.GameData.extraSrcs.length; _0x24A5B++) {
                            var _0x24A8D = Util.GameData.extraSrcs[_0x24A5B];
                            Main.game.load.image(_0x24A8D, _0x24A8D)
                        }
                    }
                    ;Main.game.load.onLoadComplete.addOnce(_0x24AA1.onPreloadUnit);
                    Main.game.load.resetLocked = true;
                    if (!_0x24AA1.preloaded) {
                        Main.game.load.start()
                    }
                }
                ;
                this.events.addEventListener(_0x24A47.PRELOAD_UNIT, this.preloadUnit)
            }
            _createClass(_0x24A47, [{
                key: _0x24A29[131],
                value: function _0x24A3D(_0x24A29) {
                    var _0x24A51 = _0x24A29;
                    for (var _0x24A33 = 0; _0x24A33 < _0x24A51.assetsPaths.length; _0x24A33++) {
                        var _0x24A3D = _0x24A51.assetsPaths[_0x24A33];
                        if (_0x24A47.loadedAssets.indexOf(_0x24A3D)) {
                            Main.game.load.image(_0x24A3D, _0x24A3D);
                            _0x24A47.loadedAssets.push(_0x24A3D)
                        }
                    }
                    ;Main.game.load.start()
                }
            }]);
            return _0x24A47
        }();
        _0x24A3D.GLOBAL_LAYER_PARSED = _0x24A29[132];
        _0x24A3D.PRELOAD_UNIT = _0x24A29[133];
        _0x24A3D.JSON_LOADED = _0x24A29[122];
        _0x24A3D.UNITS_PARSED = _0x24A29[134];
        _0x24A3D.isLoading = false;
        _0x24A3D.loadedAssets = [];
        _0x24A33.ResourceManager = _0x24A3D
    }
    function _0x24AAB(_0x24A33) {
        var _0x24A3D = function _0x24A3D() {
            var _0x24A47 = this;
            _0x24A5B(this, _0x24A3D);
            this.trans = false;
            this.onLoadUnit = function(_0x24A33) {
                _0x24A47.currentFramerate = Main.game.time.frames;
                _0x24A3D.unit = _0x24A33.getData(_0x24A29[16]);
                _0x24A47.trans = _0x24A33.getData(_0x24A29[20]);
                Main.game.input.enabled = false;
                if (_0x24A47.trans) {
                    _0x24A47.events.throwEvent(_0x24A3D.TRANSITION_START)
                } else {
                    _0x24A47.onTransitionMid(null)
                }
            }
            ;
            this.onUnitCreated = function(_0x24A51) {
                if (_0x24A47.trans) {
                    var _0x24A5B = Main.game.time.fps;
                    var _0x24A33 = (_0x24A47.currentFramerate - _0x24A5B) * 0.2;
                    _0x24A33 = _0x24A33 > 0.4 ? 0.4 : _0x24A33;
                    Main.game.time.events.add(_0x24A33 * 1000, function() {
                        _0x24A47.events.throwEvent(_0x24A3D.TRANSITION_MID_END)
                    }, _0x24A47)
                } else {
                    trace(_0x24A29[135]);
                    _0x24A47.events.throwEvent(_0x24A3D.TRANSITION_OVER);
                    Main.game.input.enabled = true
                }
            }
            ;
            this.onTransitionMid = function(_0x24A29) {
                if (_0x24A3D.unit.preloaded) {
                    _0x24A47.onPreloadUnitFinished(_0x24A3D.unit)
                } else {
                    _0x24A3D.unit.preloadCompleteCallbacks.push(_0x24A47.onPreloadUnitFinished)
                }
            }
            ;
            this.onPreloadUnitFinished = function(_0x24A51) {
                Main.game.state.start(_0x24A51.name, true);
                _0x24A3D.unit = _0x24A51;
                var _0x24A33 = _0x24A51.name;
                _0x24A47.events.removeEventListener(_0x24A29[136], _0x24A47.onUnitCreated);
                _0x24A47.events.addEventListener(_0x24A29[136], _0x24A47.onUnitCreated)
            }
            ;
            this.onUnitFinishedLoading = function() {}
            ;
            this.events = new _0x24A33.EventManager();
            this.events.addEventListener(_0x24A3D.LOAD_UNIT, this.onLoadUnit);
            this.events.addEventListener(_0x24A3D.TRANSITION_MID_START, this.onTransitionMid)
        };
        _0x24A3D.LOAD_UNIT = _0x24A29[18];
        _0x24A3D.LOADING_BAR_FINISHED = _0x24A29[137];
        _0x24A3D.TRANSITION_START = _0x24A29[138];
        _0x24A3D.TRANSITION_MID_START = _0x24A29[139];
        _0x24A3D.TRANSITION_MID_END = _0x24A29[140];
        _0x24A3D.TRANSITION_OVER = _0x24A29[141];
        _0x24A33.SceneManager = _0x24A3D
    }
    function _0x24AB5(_0x24A33) {
        var _0x24A3D = function _0x24A3D() {
            var _0x24A47 = this;
            _0x24A5B(this, _0x24A3D);
            this._sounds = [];
            this._music = [];
            this._playingSounds = [];
            this._stoppedSounds = [];
            this._loopedSounds = [];
            this.onToggleSound = function(_0x24A29) {
                _0x24A3D._soundsMuted = !_0x24A3D._soundsMuted;
                for (var _0x24A33 = 0; _0x24A33 < _0x24A47._playingSounds.length; _0x24A33++) {
                    var _0x24A51 = _0x24A47._playingSounds[_0x24A33];
                    if (!_0x24A51.isPlaying) {
                        _0x24A47._stoppedSounds.push(_0x24A51)
                    }
                    ;_0x24A51.mute = _0x24A3D._soundsMuted
                }
                ;for (var _0x24A33 = 0; _0x24A33 < _0x24A47._stoppedSounds.length; _0x24A33++) {
                    var _0x24A51 = _0x24A47._stoppedSounds[_0x24A33];
                    _0x24A47._playingSounds.splice(_0x24A47._playingSounds.indexOf(_0x24A51), 1)
                }
                ;_0x24A47._stoppedSounds = []
            }
            ;
            this.onToggleMusic = function(_0x24A29) {
                _0x24A3D._musicMuted = !_0x24A3D._musicMuted;
                _0x24A47._playingMusic.mute = _0x24A3D._musicMuted
            }
            ;
            this.addSound = function(_0x24A33) {
                var _0x24A3D = _0x24A33.getData(_0x24A29[130]);
                _0x24A47._sounds.push(_0x24A3D)
            }
            ;
            this.addMusic = function(_0x24A33) {
                var _0x24A3D = _0x24A33.getData(_0x24A29[130]);
                _0x24A47._music.push(_0x24A3D)
            }
            ;
            this.onPlaySound = function(_0x24A51) {
                var _0x24A65 = _0x24A51.getData(_0x24A29[130]);
                var _0x24A6F = _0x24A51.getData(_0x24A29[142]);
                var _0x24A5B = _0x24A51.getData(_0x24A29[143]);
                _0x24A6F = _0x24A6F && _0x24A6F >= 0 ? _0x24A6F : 1;
                var _0x24A33 = _0x24A47.game.sound.play(_0x24A65, _0x24A6F, _0x24A5B);
                _0x24A33.mute = _0x24A3D._soundsMuted;
                if (_0x24A5B) {
                    _0x24A47._loopedSounds.push(_0x24A33)
                }
                ;_0x24A47._playingSounds.push(_0x24A33)
            }
            ;
            this.onPlayMusic = function(_0x24A33) {
                var _0x24A51 = _0x24A33.getData(_0x24A29[130]);
                var _0x24A5B = _0x24A33.getData(_0x24A29[142]);
                _0x24A5B = _0x24A5B && _0x24A5B >= 0 ? _0x24A5B : 1;
                if (_0x24A47._playingMusic && _0x24A47._playingMusic.name == _0x24A51) {
                    return
                }
                ;if (_0x24A3D.musicSwitchTween) {
                    if (_0x24A47._playingMusic) {
                        Main.game.add.tween(_0x24A47._playingMusic).to({
                            volume: 0
                        }, 500, null, true).onComplete.addOnce(_0x24A47.onMusicTweenFinished);
                        _0x24A47._nextMusic = _0x24A51;
                        _0x24A47._nextVolume = _0x24A5B
                    } else {
                        _0x24A47._playingMusic = _0x24A47.game.sound.play(_0x24A51, _0x24A5B, true)
                    }
                } else {
                    if (_0x24A47._playingMusic) {
                        _0x24A47._playingMusic.stop()
                    }
                    ;_0x24A47._playingMusic = _0x24A47.game.sound.play(_0x24A51, _0x24A5B, true)
                }
            }
            ;
            this.onStopSound = function(_0x24A33) {
                var _0x24A65 = _0x24A33.getData(_0x24A29[130]);
                var _0x24A3D = [];
                var _0x24A6F = false;
                for (var _0x24A51 = 0; _0x24A51 < _0x24A47._loopedSounds.length; _0x24A51++) {
                    var _0x24A5B = _0x24A47._loopedSounds[_0x24A51];
                    if (_0x24A5B.name == _0x24A65) {
                        _0x24A5B.stop();
                        _0x24A3D.push(_0x24A5B);
                        _0x24A6F = true
                    }
                }
                ;for (var _0x24A51 = 0; _0x24A51 < _0x24A3D.length; _0x24A51++) {
                    var _0x24A5B = _0x24A3D[_0x24A51];
                    _0x24A47._loopedSounds.splice(_0x24A47._loopedSounds.indexOf(_0x24A5B), 1)
                }
                ;_0x24A3D.length = 0;
                if (!_0x24A6F) {
                    for (var _0x24A51 = 0; _0x24A51 < _0x24A47._playingSounds.length; _0x24A51++) {
                        var _0x24A5B = _0x24A47._playingSounds[_0x24A51];
                        if (_0x24A5B.name == _0x24A65) {
                            _0x24A5B.stop();
                            _0x24A47._stoppedSounds.push(_0x24A65)
                        }
                    }
                }
                ;for (var _0x24A51 = 0; _0x24A51 < _0x24A47._stoppedSounds.length; _0x24A51++) {
                    var _0x24A5B = _0x24A47._stoppedSounds[_0x24A51];
                    _0x24A47._playingSounds.splice(_0x24A47._playingSounds.indexOf(_0x24A5B), 1)
                }
                ;_0x24A47._stoppedSounds = []
            }
            ;
            this.onStopMusic = function(_0x24A29) {
                _0x24A47._playingMusic.stop()
            }
            ;
            this.onMusicTweenFinished = function() {
                _0x24A47._playingMusic = _0x24A47.game.sound.play(_0x24A47._nextMusic, 0, true);
                _0x24A47._playingMusic.mute = _0x24A3D._musicMuted;
                Main.game.add.tween(_0x24A47._playingMusic).to({
                    volume: 1
                }, 500, null, true)
            }
            ;
            this.events = new _0x24A33.EventManager();
            this.game = Main.game;
            this.events.addEventListener(_0x24A3D.PLAY_SOUND, this.onPlaySound);
            this.events.addEventListener(_0x24A3D.STOP_SOUND, this.onStopSound);
            this.events.addEventListener(_0x24A3D.TOGGLE_SOUND, this.onToggleSound);
            this.events.addEventListener(_0x24A3D.PLAY_MUSIC, this.onPlayMusic);
            this.events.addEventListener(_0x24A3D.STOP_MUSIC, this.onStopMusic);
            this.events.addEventListener(_0x24A3D.TOGGLE_MUSIC, this.onToggleMusic);
            this.events.addEventListener(_0x24A3D.ADD_SOUND, this.addSound);
            this.events.addEventListener(_0x24A3D.ADD_MUSIC, this.addMusic)
        };
        _0x24A3D.PLAY_SOUND = _0x24A29[144];
        _0x24A3D.STOP_SOUND = _0x24A29[145];
        _0x24A3D.TOGGLE_SOUND = _0x24A29[146];
        _0x24A3D.PLAY_MUSIC = _0x24A29[147];
        _0x24A3D.STOP_MUSIC = _0x24A29[148];
        _0x24A3D.TOGGLE_MUSIC = _0x24A29[149];
        _0x24A3D.ADD_SOUND = _0x24A29[150];
        _0x24A3D.ADD_MUSIC = _0x24A29[151];
        _0x24A3D.musicSwitchTween = true;
        _0x24A3D._soundsMuted = false;
        _0x24A3D._musicMuted = false;
        _0x24A33.SoundManager = _0x24A3D
    }
    function _0x24ABF(_0x24A33) {
        var _0x24A3D = function _0x24A3D() {
            var _0x24A33 = this;
            _0x24A5B(this, _0x24A3D);
            this.generateObjectsFromData = function(_0x24A47) {
                var _0x24A5B = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                var _0x24A65 = new Array();
                for (var _0x24A51 = 0; _0x24A51 < _0x24A47.length; _0x24A51++) {
                    var _0x24A3D = _0x24A47[_0x24A51];
                    _0x24A65.push(_0x24A33.generateFromData(_0x24A3D, _0x24A29[36], _0x24A5B))
                }
                ;return _0x24A65
            }
            ;
            this.generateFromData = function(_0x24A65) {
                var _0x24A97 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _0x24A29[36];
                var _0x24A83 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                var _0x24A6F;
                if (_0x24A65.type == _0x24A29[4]) {
                    _0x24A6F = new Scene.GameObject(Main.game,_0x24A65.name,_0x24A83);
                    _0x24A6F.setTransform(_0x24A65.transform);
                    if (_0x24A65.components) {
                        var _0x24A5B = [];
                        for (var _0x24A8D = _0x24A65.components.length - 1; _0x24A8D >= 0; _0x24A8D--) {
                            var _0x24A51 = _0x24A65.components[_0x24A8D];
                            var _0x24A47 = _0x24A33.generateComponent(_0x24A51);
                            if (_0x24A47 != null && _0x24A5B.indexOf(_0x24A51.path.split(_0x24A29[125])[1]) == -1) {
                                _0x24A6F.addComponent(_0x24A47)
                            } else {
                                trace(_0x24A29[152] + _0x24A51.path.split(_0x24A29[125])[1] + _0x24A29[153] + _0x24A65.name + _0x24A29[44], _0x24A29[154])
                            }
                            ;_0x24A5B.push(_0x24A51.path.split(_0x24A29[125])[1])
                        }
                    }
                } else {
                    if (_0x24A65.type == _0x24A29[155]) {
                        _0x24A6F = new Scene.GameObject(Main.game,_0x24A65.name,_0x24A83);
                        _0x24A6F.setTransform(_0x24A65.transform || {
                            x: 0,
                            y: 0,
                            scaleX: 1,
                            scaleY: 1,
                            alpha: 1,
                            rotation: 0,
                            regX: 0,
                            regY: 0
                        });
                        for (var _0x24A79 = 0; _0x24A79 < _0x24A65.children.length; _0x24A79++) {
                            var _0x24A3D = _0x24A65.children[_0x24A79];
                            _0x24A6F.addChild(_0x24A33.generateFromData(_0x24A3D, _0x24A29[36], _0x24A83))
                        }
                        ;if (_0x24A65.components) {
                            var _0x24A5B = [];
                            for (var _0x24A8D = _0x24A65.components.length - 1; _0x24A8D >= 0; _0x24A8D--) {
                                var _0x24A51 = _0x24A65.components[_0x24A8D];
                                var _0x24A47 = _0x24A33.generateComponent(_0x24A51);
                                if (_0x24A47 != null && _0x24A5B.indexOf(_0x24A51.path.split(_0x24A29[125])[1]) == -1) {
                                    _0x24A6F.addComponent(_0x24A47)
                                } else {
                                    trace(_0x24A29[152] + _0x24A51.path.split(_0x24A29[125])[1] + _0x24A29[153] + _0x24A65.name + _0x24A29[44], _0x24A29[154])
                                }
                                ;_0x24A5B.push(_0x24A51.path.split(_0x24A29[125])[1])
                            }
                        }
                    }
                }
                ;return _0x24A6F
            }
            ;
            this.generateComponent = function(_0x24A51) {
                var _0x24A47 = _0x24A51.path.split(_0x24A29[125])[1];
                try {
                    var _0x24A3D = new Components[_0x24A47]();
                    for (var _0x24A5B = 0; _0x24A5B < Object.getOwnPropertyNames(_0x24A51).length; _0x24A5B++) {
                        var _0x24A65 = Object.getOwnPropertyNames(_0x24A51)[_0x24A5B];
                        if (Object.getOwnPropertyDescriptor(_0x24A51, _0x24A65).value instanceof Array) {
                            var _0x24A33 = Object.getOwnPropertyDescriptor(_0x24A51, _0x24A65).value;
                            Object.defineProperty(_0x24A3D, _0x24A65, {
                                value: _0x24A33.slice(),
                                enumerable: true,
                                writable: true
                            })
                        } else {
                            if (_0x24A65 != _0x24A29[156]) {
                                Object.defineProperty(_0x24A3D, _0x24A65, Object.getOwnPropertyDescriptor(_0x24A51, _0x24A65))
                            }
                        }
                    }
                    ;return _0x24A3D
                } catch (ex) {
                    trace(_0x24A29[152] + _0x24A47 + _0x24A29[157], _0x24A29[158])
                }
                ;return null
            }
        };
        _0x24A33.UnitResourceManager = _0x24A3D
    }
    function _0x24AC9(_0x24A3D) {
        var _0x24A33 = function() {
            function _0x24A33() {
                _0x24A5B(this, _0x24A33);
                this.tags = [];
                this.events = new Managers.EventManager()
            }
            _createClass(_0x24A33, [{
                key: _0x24A29[159],
                value: function _0x24A47() {}
            }, {
                key: _0x24A29[160],
                value: function _0x24A6F() {}
            }, {
                key: _0x24A29[161],
                value: function _0x24A51() {
                    this.tags = this.gameObject.tags
                }
            }, {
                key: _0x24A29[162],
                value: function _0x24A65(_0x24A29) {}
            }, {
                key: _0x24A29[40],
                value: function _0x24A3D() {
                    this.events.removeUnitEvents();
                    var _0x24A3D = Object.getOwnPropertyNames(this);
                    for (var _0x24A33 = 0; _0x24A33 < _0x24A3D.length; _0x24A33++) {
                        var _0x24A29 = _0x24A3D[_0x24A33];
                        if (Object.getOwnPropertyDescriptor(this, _0x24A29).value instanceof Map) {
                            Util.Util.destroyMap(Object.getOwnPropertyDescriptor(this, _0x24A29).value)
                        }
                        ;if (Object.getOwnPropertyDescriptor(this, _0x24A29).value instanceof Array) {
                            Object.getOwnPropertyDescriptor(this, _0x24A29).value.length = 0
                        }
                        ;Object.defineProperty(this, _0x24A29, {
                            value: null
                        })
                    }
                }
            }]);
            return _0x24A33
        }();
        _0x24A3D.Component = _0x24A33
    }
    function _0x24AD3(_0x24A3D) {
        var _0x24A33 = function(_0x24A65) {
            _0x24A51(_0x24AB5, _0x24A65);
            function _0x24AB5(_0x24A65, _0x24A79) {
                var _0x24A6F = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                var _0x24A83 = arguments[3];
                _0x24A5B(this, _0x24AB5);
                var _0x24A33 = _0x24A47(this, (_0x24AB5.__proto__ || Object.getPrototypeOf(_0x24AB5)).call(this, _0x24A65, 0, 0));
                _0x24A33._components = [];
                _0x24A33._initAddedChildren = [];
                _0x24A33.shouldBeDestroyed = true;
                _0x24A33.tags = [];
                _0x24A33.onEnterBounds = function() {
                    _0x24A33.visible = true
                }
                ;
                _0x24A33.onOutOfBounds = function() {
                    _0x24A33.visible = false
                }
                ;
                _0x24A33.onButtonPressed = function(_0x24A51) {
                    for (var _0x24A47 = 0; _0x24A47 < _0x24A33._components.length; _0x24A47++) {
                        var _0x24A3D = _0x24A33._components[_0x24A47];
                        _0x24A3D.onButtonPressed(_0x24A51)
                    }
                    ;for (var _0x24A47 = 0; _0x24A47 < _0x24A33._extraButtonPressedCallbacks.length; _0x24A47++) {
                        var _0x24A29 = _0x24A33._extraButtonPressedCallbacks[_0x24A47];
                        _0x24A29(_0x24A51)
                    }
                    ;_0x24A33.inputEvents.sendButtonPressed()
                }
                ;
                _0x24A33._extraButtonPressedCallbacks = [];
                if (_0x24AB5.objects == null) {
                    _0x24AB5.objects = new Map()
                }
                ;if (_0x24AB5.transitionObjects == null) {
                    _0x24AB5.transitionObjects = new Map()
                }
                ;if (_0x24AB5.transitionTagObjects == null) {
                    _0x24AB5.transitionTagObjects = new Map()
                }
                ;if (_0x24AB5.tagObjects == null) {
                    _0x24AB5.tagObjects = new Map()
                }
                ;_0x24A33.name = _0x24A79;
                if (_0x24AB5.objects.has(_0x24A79)) {
                    trace(_0x24A29[163] + _0x24A79 + _0x24A29[164], _0x24A29[158])
                }
                ;if (_0x24A33.name.indexOf(_0x24A29[107]) != -1) {
                    _0x24A33.tags = _0x24A33.name.split(_0x24A29[107])
                }
                ;if (!_0x24A6F) {
                    _0x24AB5.objects[_0x24A29[32]](_0x24A79, _0x24A33);
                    var _0x24A8D = _0x24A79.split(_0x24A29[107]);
                    if (_0x24A8D.length > 1 && (Number(_0x24A8D[1]) || _0x24A8D[1] == _0x24A29[108])) {
                        var _0x24A51 = _0x24AB5.tagObjects[_0x24A29[2]](_0x24A8D[0]);
                        if (_0x24A51) {
                            _0x24A51.push(_0x24A33)
                        } else {
                            _0x24A51 = [_0x24A33]
                        }
                        ;_0x24AB5.tagObjects[_0x24A29[32]](_0x24A8D[0], _0x24A51)
                    }
                } else {
                    _0x24AB5.transitionObjects[_0x24A29[32]](_0x24A79, _0x24A33);
                    var _0x24A8D = _0x24A79.split(_0x24A29[107]);
                    if (_0x24A8D.length > 1 && (Number(_0x24A8D[1]) || _0x24A8D[1] == _0x24A29[108])) {
                        var _0x24A51 = _0x24AB5.transitionTagObjects[_0x24A29[2]](_0x24A8D[0]);
                        if (_0x24A51) {
                            _0x24A51.push(_0x24A33)
                        } else {
                            _0x24A51 = [_0x24A33]
                        }
                        ;_0x24AB5.transitionTagObjects[_0x24A29[32]](_0x24A8D[0], _0x24A51)
                    }
                }
                ;_0x24A33.inputEnabled = false;
                _0x24A33.inputEvents = new _0x24A3D.InputEvents(_0x24A33);
                _0x24A33.events.onOutOfBounds.add(_0x24A33.onOutOfBounds);
                _0x24A33.events.onEnterBounds.add(_0x24A33.onEnterBounds);
                return _0x24A33
            }
            _createClass(_0x24AB5, [{
                key: _0x24A29[165],
                value: function _0x24B19(_0x24A29) {
                    this._initialTransform = _0x24A29;
                    this.anchor.setTo(_0x24A29.regX / this.width, _0x24A29.regY / this.height);
                    this.x = _0x24A29.x;
                    this.y = _0x24A29.y;
                    this.scale.x = _0x24A29.scaleX;
                    this.scale.y = _0x24A29.scaleY;
                    this.angle = _0x24A29.angle;
                    this.alpha = _0x24A29.alpha
                }
            }, {
                key: _0x24A29[166],
                value: function _0x24AFB() {
                    if (this._initialTransform) {
                        this.scale.x = this.scale.y = 1;
                        this.angle = 0;
                        this.setTransform(this._initialTransform)
                    }
                }
            }, {
                key: _0x24A29[167],
                value: function _0x24A83(_0x24A29) {
                    this._components.push(_0x24A29);
                    _0x24A29.gameObject = this;
                    _0x24A29.onAddedToObject()
                }
            }, {
                key: _0x24A29[168],
                value: function _0x24A6F(_0x24A29) {
                    this._extraButtonPressedCallbacks.push(_0x24A29)
                }
            }, {
                key: _0x24A29[169],
                value: function _0x24B05() {
                    if (this.shouldBeDestroyed) {
                        for (var _0x24A47 = 0; _0x24A47 < this._components.length; _0x24A47++) {
                            var _0x24A33 = this._components[_0x24A47];
                            _0x24A33.init()
                        }
                        ;for (var _0x24A47 = 0; _0x24A47 < this.children.length; _0x24A47++) {
                            var _0x24A3D = this.children[_0x24A47];
                            if (_0x24A3D instanceof _0x24AB5) {
                                _0x24A3D.sendInit()
                            }
                        }
                        ;for (var _0x24A47 = 0; _0x24A47 < this._initAddedChildren.length; _0x24A47++) {
                            var _0x24A29 = this._initAddedChildren[_0x24A47];
                            if (_0x24A29.position || _0x24A29.position == 0) {
                                this.addChildAt(_0x24A29, _0x24A29.position)
                            } else {
                                this.addChild(_0x24A29.object)
                            }
                            ;if (_0x24A29.sendInit) {
                                _0x24A29.sendInit()
                            }
                        }
                    }
                }
            }, {
                key: _0x24A29[170],
                value: function _0x24B0F() {
                    for (var _0x24A3D = 0; _0x24A3D < this._components.length; _0x24A3D++) {
                        var _0x24A29 = this._components[_0x24A3D];
                        _0x24A29.transitionDone()
                    }
                    ;for (var _0x24A3D = 0; _0x24A3D < this.children.length; _0x24A3D++) {
                        var _0x24A33 = this.children[_0x24A3D];
                        if (_0x24A33 instanceof _0x24AB5) {
                            _0x24A33.sendTransition()
                        }
                    }
                }
            }, {
                key: _0x24A29[40],
                value: function _0x24A97() {
                    if (this.shouldBeDestroyed) {
                        this._extraButtonPressedCallbacks.length = 0;
                        this._extraButtonPressedCallbacks = null;
                        this.inputEvents.destroy();
                        this.inputEvents = null;
                        if (this._components) {
                            for (var _0x24A47 = 0; _0x24A47 < this._components.length; _0x24A47++) {
                                var _0x24A3D = this._components[_0x24A47];
                                _0x24A3D.destroy()
                            }
                        }
                        ;if (this.children) {
                            for (var _0x24A47 = 0; _0x24A47 < this.children.length; _0x24A47++) {
                                var _0x24A33 = this.children[_0x24A47];
                                _0x24A33.destroy()
                            }
                        }
                        ;this.tags.length = 0;
                        this._components.length = 0;
                        this._initAddedChildren.length = 0;
                        this._initialTransform = null;
                        _get(_0x24AB5.prototype.__proto__ || Object.getPrototypeOf(_0x24AB5.prototype), _0x24A29[40], this).call(this);
                        this.children = null;
                        this._components = null;
                        this._initialTransform = null;
                        this.kill();
                        this.game = null
                    } else {
                        if (this.parent) {
                            this.parent.removeChild(this)
                        }
                    }
                }
            }, {
                key: _0x24A29[171],
                value: function _0x24ABF(_0x24A33) {
                    for (var _0x24A3D = 0; _0x24A3D < this._components.length; _0x24A3D++) {
                        var _0x24A29 = this._components[_0x24A3D];
                        if (_0x24A29 instanceof _0x24A33) {
                            return _0x24A29
                        }
                    }
                    ;return null
                }
            }, {
                key: _0x24A29[172],
                value: function _0x24AF1(_0x24A33) {
                    var _0x24A3D = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                    for (var _0x24A47 = this._components.length - 1; _0x24A47 >= 0; _0x24A47--) {
                        var _0x24A29 = this._components[_0x24A47];
                        this._components.splice(_0x24A47, 1);
                        if (_0x24A3D) {
                            _0x24A29.destroy()
                        }
                    }
                }
            }, {
                key: _0x24A29[173],
                value: function _0x24A79(_0x24A29) {
                    var _0x24A33 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
                    var _0x24A3D = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                    if (_0x24A33 != -1) {
                        this._initAddedChildren.push({
                            object: _0x24A29,
                            sendInit: _0x24A3D
                        })
                    } else {
                        this._initAddedChildren.push({
                            object: _0x24A29,
                            sendInit: _0x24A3D,
                            position: _0x24A33
                        })
                    }
                }
            }, {
                key: _0x24A29[174],
                value: function _0x24AA1() {
                    if (this.input) {
                        this.events.onInputOut.dispatch();
                        this.events.onInputUp.dispatch();
                        this.input.enabled = false
                    }
                    ;var _0x24A29 = this.children.slice();
                    _0x24A29.forEach(function(_0x24A29) {
                        _0x24A29.disableInput()
                    });
                    _0x24A29.length = 0;
                    this.inputEvents.sendDisableInput()
                }
            }, {
                key: _0x24A29[175],
                value: function _0x24AAB() {
                    if (this.input) {
                        this.input.enabled = true;
                        if (this.input.checkPointerOver(this.game.input.activePointer)) {
                            this.events.onInputOver.dispatch()
                        }
                    }
                    ;var _0x24A29 = this.children.slice();
                    _0x24A29.forEach(function(_0x24A29) {
                        _0x24A29.enableInput()
                    });
                    this.inputEvents.sendEnableInput()
                }
            }], [{
                key: _0x24A29[176],
                value: function _0x24AD3(_0x24A51) {
                    var _0x24A47 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                    var _0x24A3D = arguments[2];
                    var _0x24A29 = arguments[3];
                    return this._getObjectsByTag(_0x24AB5.tagObjects, _0x24A51, _0x24A47, _0x24A3D, _0x24A29)
                }
            }, {
                key: _0x24A29[177],
                value: function _0x24AE7(_0x24A51) {
                    var _0x24A47 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                    var _0x24A3D = arguments[2];
                    var _0x24A29 = arguments[3];
                    return this._getObjectsByTag(_0x24AB5.transitionTagObjects, _0x24A51, _0x24A47, _0x24A3D, _0x24A29)
                }
            }, {
                key: _0x24A29[178],
                value: function _0x24A33(_0x24A51, _0x24A83) {
                    var _0x24A79 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                    var _0x24A6F = arguments[3];
                    var _0x24A33 = arguments[4];
                    var _0x24A65 = _0x24A51[_0x24A29[2]](_0x24A83);
                    var _0x24A5B = _0x24A65 ? _0x24A65.slice() : [];
                    if (_0x24A79 && _0x24A5B.length != 0) {
                        _0x24A5B.sort(function(_0x24A33, _0x24A3D) {
                            var _0x24A47 = _0x24A33.name.split(_0x24A29[107]);
                            var _0x24A51 = _0x24A3D.name.split(_0x24A29[107]);
                            if (Number(_0x24A47[1]) > Number(_0x24A51[1])) {
                                return 1
                            }
                            ;if (Number(_0x24A47[1]) == Number(_0x24A51[1])) {
                                if (Number(_0x24A47[2]) > Number(_0x24A51[2])) {
                                    return 1
                                }
                                ;if (Number(_0x24A47[2]) < Number(_0x24A51[2])) {
                                    return -1
                                }
                                ;if (_0x24A47.length > 3 || _0x24A51.length > 3) {
                                    if (Number(_0x24A47[3]) > Number(_0x24A51[3])) {
                                        return 1
                                    }
                                    ;if (Number(_0x24A47[3]) < Number(_0x24A51[3])) {
                                        return -1
                                    }
                                    ;return 0
                                }
                            }
                            ;return -1
                        })
                    }
                    ;for (var _0x24A47 = 0; _0x24A47 < _0x24A5B.length; _0x24A47++) {
                        var _0x24A3D = _0x24A5B[_0x24A47];
                        if (_0x24A6F || _0x24A6F == 0) {
                            _0x24A3D.scale[_0x24A29[32]](_0x24A6F, _0x24A6F)
                        }
                        ;if (_0x24A33 || _0x24A33 == 0) {
                            _0x24A3D.alpha = _0x24A33
                        }
                    }
                    ;return _0x24A5B
                }
            }, {
                key: _0x24A29[179],
                value: function _0x24AC9(_0x24A3D, _0x24A51, _0x24A33) {
                    var _0x24A47 = _0x24AB5.objects[_0x24A29[2]](_0x24A3D);
                    if (_0x24A47) {
                        if (_0x24A51 || _0x24A51 == 0) {
                            _0x24A47.scale[_0x24A29[32]](_0x24A51, _0x24A51)
                        }
                        ;if (_0x24A33 || _0x24A33 == 0) {
                            _0x24A47.alpha = _0x24A33
                        }
                        ;return _0x24A47
                    }
                    ;return null
                }
            }, {
                key: _0x24A29[180],
                value: function _0x24ADD(_0x24A3D, _0x24A51, _0x24A33) {
                    var _0x24A47 = _0x24AB5.transitionObjects[_0x24A29[2]](_0x24A3D);
                    if (_0x24A47) {
                        if (_0x24A51 || _0x24A51 == 0) {
                            _0x24A47.scale[_0x24A29[32]](_0x24A51, _0x24A51)
                        }
                        ;if (_0x24A33 || _0x24A33 == 0) {
                            _0x24A47.alpha = _0x24A33
                        }
                        ;return _0x24A47
                    }
                    ;return null
                }
            }, {
                key: _0x24A29[181],
                value: function _0x24A8D() {
                    Util.Util.destroyMap(_0x24AB5.tagObjects);
                    Util.Util.destroyMap(_0x24AB5.objects);
                    _0x24AB5.tagObjects = null;
                    _0x24AB5.objects = null
                }
            }]);
            return _0x24AB5
        }(Phaser.Sprite);
        _0x24A3D.GameObject = _0x24A33
    }
    function _0x24ADD(_0x24A3D) {
        var _0x24A33 = function(_0x24A33) {
            _0x24A51(_0x24A3D, _0x24A33);
            function _0x24A3D(_0x24A51, _0x24A83) {
                var _0x24A6F = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _0x24A29[182];
                var _0x24A65 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
                var _0x24A79 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _0x24A29[36];
                _0x24A5B(this, _0x24A3D);
                var _0x24A33 = _0x24A47(this, (_0x24A3D.__proto__ || Object.getPrototypeOf(_0x24A3D)).call(this, _0x24A51, _0x24A6F, _0x24A65, _0x24A79));
                _0x24A33._down = false;
                _0x24A33.onDown = function() {
                    _0x24A33._down = true
                }
                ;
                _0x24A33.onUp = function() {
                    if (_0x24A33._down) {
                        EventManager.throwEvent(Managers.NetworkManager.OPEN_SITE, Util.Util.createEventData([[_0x24A29[103], _0x24A33.url]]));
                        Managers.EventManager.throwEvent(_0x24A29[144], Util.Util.createEventData([[_0x24A29[130], _0x24A29[183]]]))
                    }
                    ;_0x24A33._down = false
                }
                ;
                _0x24A33.onInputOut = function() {
                    _0x24A33.scale.x -= 0.05;
                    _0x24A33.scale.y -= 0.05;
                    _0x24A33._down = false
                }
                ;
                _0x24A33.onInputOver = function() {
                    _0x24A33.scale.x += 0.05;
                    _0x24A33.scale.y += 0.05
                }
                ;
                _0x24A33.checkSave = function(_0x24A47) {
                    for (var _0x24A3D = 0; _0x24A3D < _0x24A47.children.length; _0x24A3D++) {
                        var _0x24A29 = _0x24A47.children[_0x24A3D];
                        _0x24A33.checkSave(_0x24A29);
                        if (_0x24A29.getComponent(Components.SaveImageComponent)) {
                            _0x24A29.getComponent(Components.SaveImageComponent).exclude.push(_0x24A33.name)
                        }
                    }
                }
                ;
                _0x24A33.url = _0x24A83;
                _0x24A33.inputEnabled = true;
                _0x24A33.buttonMode = true;
                _0x24A33.loadTexture(_0x24A79);
                _0x24A33.events.onInputDown.add(_0x24A33.onDown, _0x24A33);
                _0x24A33.events.onInputUp.add(_0x24A33.onUp, _0x24A33);
                _0x24A33.events.onInputOver.add(_0x24A33.onInputOver, _0x24A33);
                _0x24A33.events.onInputOut.add(_0x24A33.onInputOut, _0x24A33);
                _0x24A33.checkSave(Main.game.world);
                return _0x24A33
            }
            return _0x24A3D
        }(_0x24A3D.GameObject);
        _0x24A3D.GoCobrand = _0x24A33
    }
    function _0x24AE7(_0x24A3D) {
        var _0x24A33 = function() {
            function _0x24AA1(_0x24A29) {
                _0x24A5B(this, _0x24AA1);
                this.callbacks = new Map();
                this.callbacksOnce = new Map();
                this.queue = [];
                this.isThrowing = false;
                this.useHandCursor = false;
                this.gameObject = _0x24A29
            }
            _createClass(_0x24AA1, [{
                key: _0x24A29[184],
                value: function _0x24A33(_0x24A29) {
                    var _0x24A47 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                    this.addCallback(_0x24A29, this.addButtonPressed, _0x24A47)
                }
            }, {
                key: _0x24A29[185],
                value: function _0x24A79(_0x24A29) {
                    var _0x24A33 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                    this.addCallback(_0x24A29, this.addInputOver, _0x24A33)
                }
            }, {
                key: _0x24A29[186],
                value: function _0x24A6F(_0x24A29) {
                    var _0x24A33 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                    this.addCallback(_0x24A29, this.addInputOut, _0x24A33)
                }
            }, {
                key: _0x24A29[187],
                value: function _0x24A65(_0x24A29) {
                    var _0x24A33 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                    this.addCallback(_0x24A29, this.addInputDown, _0x24A33)
                }
            }, {
                key: _0x24A29[188],
                value: function _0x24A83(_0x24A29) {
                    var _0x24A33 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                    this.addCallback(_0x24A29, this.addInputUp, _0x24A33)
                }
            }, {
                key: _0x24A29[189],
                value: function _0x24A51(_0x24A29) {
                    var _0x24A33 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                    this.addCallback(_0x24A29, this.addEnableInputCallback, _0x24A33)
                }
            }, {
                key: _0x24A29[190],
                value: function _0x24A47(_0x24A29) {
                    var _0x24A33 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                    this.addCallback(_0x24A29, this.addDisableInputCallback, _0x24A33)
                }
            }, {
                key: _0x24A29[191],
                value: function _0x24AAB(_0x24A29) {
                    this.removeCallback(_0x24A29, this.addButtonPressed)
                }
            }, {
                key: _0x24A29[192],
                value: function _0x24AE7(_0x24A29) {
                    this.removeCallback(_0x24A29, this.addInputOver)
                }
            }, {
                key: _0x24A29[193],
                value: function _0x24ADD(_0x24A29) {
                    this.removeCallback(_0x24A29, this.addInputOut)
                }
            }, {
                key: _0x24A29[194],
                value: function _0x24AD3(_0x24A29) {
                    this.removeCallback(_0x24A29, this.addInputDown)
                }
            }, {
                key: _0x24A29[195],
                value: function _0x24AF1(_0x24A29) {
                    this.removeCallback(_0x24A29, this.addInputUp)
                }
            }, {
                key: _0x24A29[196],
                value: function _0x24AC9(_0x24A29) {
                    this.removeCallback(_0x24A29, this.addEnableInputCallback)
                }
            }, {
                key: _0x24A29[197],
                value: function _0x24ABF(_0x24A29) {
                    this.removeCallback(_0x24A29, this.addDisableInputCallback)
                }
            }, {
                key: _0x24A29[198],
                value: function _0x24AFB() {
                    this.sendEvent(this.addButtonPressed)
                }
            }, {
                key: _0x24A29[199],
                value: function _0x24B37() {
                    this.sendEvent(this.addInputOver)
                }
            }, {
                key: _0x24A29[200],
                value: function _0x24B2D() {
                    this.sendEvent(this.addInputOut)
                }
            }, {
                key: _0x24A29[201],
                value: function _0x24B23() {
                    this.sendEvent(this.addInputDown)
                }
            }, {
                key: _0x24A29[202],
                value: function _0x24B41() {
                    this.sendEvent(this.addInputUp)
                }
            }, {
                key: _0x24A29[203],
                value: function _0x24B0F() {
                    this.sendEvent(this.addEnableInputCallback)
                }
            }, {
                key: _0x24A29[204],
                value: function _0x24B05() {
                    this.sendEvent(this.addDisableInputCallback)
                }
            }, {
                key: _0x24A29[205],
                value: function _0x24A3D(_0x24A33, _0x24A47, _0x24A51) {
                    if (!this.isThrowing) {
                        if (!_0x24A51) {
                            var _0x24A3D = this.callbacks[_0x24A29[2]](_0x24A47);
                            if (_0x24A3D && _0x24A3D.indexOf(_0x24A33) == -1) {
                                _0x24A3D.push(_0x24A33)
                            } else {
                                this.callbacks[_0x24A29[32]](_0x24A47, [_0x24A33])
                            }
                        } else {
                            var _0x24A3D = this.callbacksOnce[_0x24A29[2]](_0x24A47);
                            if (_0x24A3D && _0x24A3D.indexOf(_0x24A33) == -1) {
                                _0x24A3D.push(_0x24A33)
                            } else {
                                this.callbacksOnce[_0x24A29[32]](_0x24A47, [_0x24A33])
                            }
                        }
                    } else {
                        this.queue.push({
                            type: _0x24A29[28],
                            callback: _0x24A33,
                            category: _0x24A47,
                            once: _0x24A51
                        })
                    }
                }
            }, {
                key: _0x24A29[206],
                value: function _0x24AB5(_0x24A33, _0x24A51) {
                    if (!this.isThrowing) {
                        var _0x24A3D = this.callbacks[_0x24A29[2]](_0x24A51);
                        var _0x24A47 = this.callbacksOnce[_0x24A29[2]](_0x24A51);
                        if (_0x24A3D) {
                            var _0x24A5B = _0x24A3D.indexOf(_0x24A33);
                            if (_0x24A5B != -1) {
                                _0x24A3D = _0x24A3D.splice(_0x24A5B, 1)
                            }
                            ;this.callbacks[_0x24A29[32]](_0x24A51, _0x24A3D)
                        }
                        ;if (_0x24A47) {
                            var _0x24A5B = _0x24A47.indexOf(_0x24A33);
                            if (_0x24A5B != -1) {
                                _0x24A47 = _0x24A47.splice(_0x24A5B, 1)
                            }
                            ;this.callbacksOnce[_0x24A29[32]](_0x24A51, _0x24A47)
                        }
                    } else {
                        this.queue.push({
                            type: _0x24A29[30],
                            callback: _0x24A33,
                            category: _0x24A51
                        })
                    }
                }
            }, {
                key: _0x24A29[207],
                value: function _0x24B19(_0x24A47) {
                    this.isThrowing = true;
                    var _0x24A33 = this.callbacks[_0x24A29[2]](_0x24A47);
                    var _0x24A3D = this.callbacksOnce[_0x24A29[2]](_0x24A47);
                    if (_0x24A33) {
                        for (var _0x24A5B = 0; _0x24A5B < _0x24A33.length; _0x24A5B++) {
                            var _0x24A51 = _0x24A33[_0x24A5B];
                            _0x24A51(this.gameObject)
                        }
                    }
                    ;if (_0x24A3D) {
                        for (var _0x24A5B = 0; _0x24A5B < _0x24A3D.length; _0x24A5B++) {
                            var _0x24A51 = _0x24A3D[_0x24A5B];
                            _0x24A51(this.gameObject)
                        }
                        ;_0x24A3D.length = 0
                    }
                    ;this.isThrowing = false;
                    this.checkQueue()
                }
            }, {
                key: _0x24A29[208],
                value: function _0x24A8D() {
                    for (var _0x24A33 = 0; _0x24A33 < this.queue.length; _0x24A33++) {
                        var _0x24A47 = this.queue[_0x24A33];
                        if (_0x24A47.type == _0x24A29[28]) {
                            this.addCallback(_0x24A47.callback, _0x24A47.category, _0x24A47.once)
                        }
                        ;if (_0x24A47.type == _0x24A29[30]) {
                            this.removeCallback(_0x24A47.callback, _0x24A47.category)
                        }
                    }
                    ;this.queue.length = 0
                }
            }, {
                key: _0x24A29[40],
                value: function _0x24A97() {
                    Util.Util.destroyMap(this.callbacks);
                    Util.Util.destroyMap(this.callbacksOnce);
                    this.callbacks = null;
                    this.callbacksOnce = null;
                    this.gameObject = null;
                    this.queue.length = 0;
                    this.queue = null
                }
            }]);
            return _0x24AA1
        }();
        _0x24A3D.InputEvents = _0x24A33
    }
    function _0x24AF1(_0x24A33) {
        var _0x24A3D = function(_0x24A3D) {
            _0x24A51(_0x24AC9, _0x24A3D);
            function _0x24AC9(_0x24A33) {
                _0x24A5B(this, _0x24AC9);
                var _0x24A29 = _0x24A47(this, (_0x24AC9.__proto__ || Object.getPrototypeOf(_0x24AC9)).call(this));
                _0x24A29.preloaded = false;
                _0x24A29.preloadCompleteCallbacks = [];
                _0x24A29._childs = [];
                _0x24A29.refocus = function() {
                    window.focus()
                }
                ;
                _0x24A29.onTransitionOver = function(_0x24A33) {
                    _0x24A29.game.input.enabled = true;
                    _0x24A29.sendTransition()
                }
                ;
                _0x24A29.onPreloadUnit = function(_0x24A3D) {
                    _0x24A29.preloaded = true;
                    Managers.ResourceManager.isLoading = false;
                    for (var _0x24A47 = 0; _0x24A47 < _0x24A29.preloadCompleteCallbacks.length; _0x24A47++) {
                        var _0x24A33 = _0x24A29.preloadCompleteCallbacks[_0x24A47];
                        _0x24A33(_0x24A29)
                    }
                    ;_0x24A29.preloadCompleteCallbacks = []
                }
                ;
                _0x24A29.events = new EventManager();
                _0x24A29.name = _0x24A33;
                _0x24A29.utmName = _0x24A33;
                _0x24AC9._units.push(_0x24A29);
                _0x24A29.resourceManager = new Managers.UnitResourceManager();
                _0x24A29.preload = null;
                _0x24AC9.unitNames.push(_0x24A33);
                return _0x24A29
            }
            _createClass(_0x24AC9, [{
                key: _0x24A29[209],
                value: function _0x24A65() {
                    if (_0x24AC9.startCount.has(this.name)) {
                        _0x24AC9.startCount[_0x24A29[32]](this.name, _0x24AC9.startCount[_0x24A29[2]](this.name) + 1)
                    } else {
                        _0x24AC9.startCount[_0x24A29[32]](this.name, 1)
                    }
                    ;this.resolutionScale = Main.gameWidth / 800;
                    _0x24AC9.activeUnit = this;
                    if (!Main.game.device.desktop) {
                        Main.game.input.mousePointer.active = false;
                        Main.game.input.mousePointer.exists = false;
                        Main.game.input.mouse.enabled = false
                    }
                    ;this.events.addEventListener(Managers.SceneManager.TRANSITION_OVER, this.onTransitionOver);
                    var _0x24A47 = this.resourceManager.generateObjectsFromData(this.childrenJson);
                    this.events.throwEvent(_0x24AC9.UNIT_CREATED);
                    this._childs = _0x24A47;
                    for (var _0x24A6F = 0; _0x24A6F < _0x24A47.length; _0x24A6F++) {
                        var _0x24A3D = _0x24A47[_0x24A6F];
                        this.game.add.existing(_0x24A3D)
                    }
                    ;if (Util.GameData.zones[_0x24A29[2]](_0x24A29[182])) {
                        var _0x24A65 = Util.GameData.zones[_0x24A29[2]](_0x24A29[182]);
                        var _0x24A5B = null;
                        for (var _0x24A6F = 0; _0x24A6F < _0x24A65.length; _0x24A6F++) {
                            if (_0x24A65[_0x24A6F].unit == this.name) {
                                _0x24A5B = _0x24A65[_0x24A6F];
                                break
                            }
                            ;if (_0x24A65[_0x24A6F].unit == _0x24A29[36]) {
                                _0x24A5B = _0x24A65[_0x24A6F]
                            }
                        }
                        ;if (_0x24A5B) {
                            var _0x24A51 = new _0x24A33.GoCobrand(this.game,_0x24A5B.url,_0x24A29[182],false,_0x24A5B.image);
                            this.game.add.existing(_0x24A51);
                            _0x24A51.x = Number(_0x24A5B.xpos * this.resolutionScale);
                            _0x24A51.y = Number(_0x24A5B.ypos * this.resolutionScale);
                            _0x24A51.scale.x = this.resolutionScale;
                            _0x24A51.scale.y = this.resolutionScale;
                            _0x24A51.anchor[_0x24A29[32]](0.5, 0.5);
                            _0x24A51.x += _0x24A51.width * _0x24A51.anchor.x;
                            _0x24A51.y += _0x24A51.height * _0x24A51.anchor.y;
                            if (_0x24A5B.url == _0x24A29[36]) {
                                _0x24A51.input.enabled = false
                            }
                            ;trace(_0x24A51);
                            this._childs.push(_0x24A51)
                        }
                    }
                    ;this.sendInit();
                    this.events.throwEvent(_0x24A29[136]);
                    this.events.throwEvent(_0x24AC9.LOAD_COMPLETE);
                    Main.game.input.onDown.add(this.refocus);
                    if (this.name == _0x24A29[210] && !_0x24AC9.endSendGoogleAnalytics && typeof trackAnalyticsEvent != _0x24A29[21]) {
                        trackAnalyticsEvent(_0x24A29[211]);
                        _0x24AC9.endSendGoogleAnalytics = true
                    }
                }
            }, {
                key: _0x24A29[212],
                value: function _0x24A6F() {
                    this.game = Main.game;
                    var _0x24A51 = new _0x24A33.GameObject(Main.game,_0x24A29[124]);
                    var _0x24A47 = this.resourceManager.generateObjectsFromData(this.childrenJson, true);
                    this._childs = _0x24A47;
                    for (var _0x24A5B = 0; _0x24A5B < _0x24A47.length; _0x24A5B++) {
                        var _0x24A3D = _0x24A47[_0x24A5B];
                        _0x24A51.addChild(_0x24A3D)
                    }
                    ;this.sendInit();
                    return _0x24A51
                }
            }, {
                key: _0x24A29[213],
                value: function _0x24A97() {}
            }, {
                key: _0x24A29[214],
                value: function _0x24AA1() {
                    if (window.document.domain == _0x24A29[215]) {
                        this.game.debug.text(_0x24A29[216] + this.game.time.fps.toString(), 20, 20, _0x24A29[217])
                    }
                    ;Managers.EventManager.throwEvent(_0x24A29[218])
                }
            }, {
                key: _0x24A29[219],
                value: function _0x24ABF() {
                    this.events.throwEvent(_0x24AC9.EARLY_DESTROY);
                    if (_0x24AC9.endCount.has(this.name)) {
                        _0x24AC9.endCount[_0x24A29[32]](this.name, _0x24AC9.endCount[_0x24A29[2]](this.name) + 1)
                    } else {
                        _0x24AC9.endCount[_0x24A29[32]](this.name, 1)
                    }
                    ;_get(_0x24AC9.prototype.__proto__ || Object.getPrototypeOf(_0x24AC9.prototype), _0x24A29[219], this).call(this);
                    this._childs.length = 0;
                    this._childs = null;
                    this.events.removeEventListener(Managers.SceneManager.TRANSITION_OVER, this.onTransitionOver);
                    _0x24A33.GameObject.clearObjectsMap();
                    this.events.throwEvent(_0x24AC9.UNIT_DESTROYED)
                }
            }, {
                key: _0x24A29[169],
                value: function _0x24AAB() {
                    for (var _0x24A33 = 0; _0x24A33 < this._childs.length; _0x24A33++) {
                        var _0x24A29 = this._childs[_0x24A33];
                        _0x24A29.sendInit()
                    }
                }
            }, {
                key: _0x24A29[170],
                value: function _0x24AB5() {
                    for (var _0x24A33 = 0; _0x24A33 < this._childs.length; _0x24A33++) {
                        var _0x24A29 = this._childs[_0x24A33];
                        _0x24A29.sendTransition()
                    }
                }
            }, {
                key: _0x24A29[220],
                value: function _0x24AD3() {
                    this.events.throwEvent(_0x24A29[221])
                }
            }], [{
                key: _0x24A29[222],
                value: function _0x24A8D(_0x24A3D) {
                    for (var _0x24A33 = 0; _0x24A33 < _0x24AC9._units.length; _0x24A33++) {
                        var _0x24A29 = _0x24AC9._units[_0x24A33];
                        if (_0x24A29.name == _0x24A3D) {
                            return _0x24A29
                        }
                    }
                    ;return null
                }
            }, {
                key: _0x24A29[223],
                value: function _0x24A83(_0x24A33) {
                    return _0x24AC9.startCount[_0x24A29[2]](_0x24A33)
                }
            }, {
                key: _0x24A29[224],
                value: function _0x24A79(_0x24A33) {
                    return _0x24AC9.endCount[_0x24A29[2]](_0x24A33)
                }
            }]);
            return _0x24AC9
        }(Phaser.State);
        _0x24A3D._units = [];
        _0x24A3D.startCount = new Map();
        _0x24A3D.endCount = new Map();
        _0x24A3D.UNIT_CREATED = _0x24A29[225];
        _0x24A3D.UNIT_DESTROYED = _0x24A29[226];
        _0x24A3D.EARLY_DESTROY = _0x24A29[227];
        _0x24A3D.LOAD_COMPLETE = _0x24A29[228];
        _0x24A3D.unitNames = [];
        _0x24A3D.endSendGoogleAnalytics = false;
        _0x24A33.Unit = _0x24A3D
    }
    function _0x24AFB(_0x24A3D) {
        var _0x24A33 = function(_0x24A33) {
            _0x24A51(_0x24A3D, _0x24A33);
            function _0x24A3D(_0x24A65, _0x24A51) {
                _0x24A5B(this, _0x24A3D);
                var _0x24A33 = _0x24A47(this, (_0x24A3D.__proto__ || Object.getPrototypeOf(_0x24A3D)).call(this, Main.game, _0x24A29[229] + _0x24A3D.totalCreated, _0x24A65, _0x24A51, true));
                _0x24A33.isDestroyed = false;
                _0x24A33.id = _0x24A29[36];
                _0x24A33.id = _0x24A29[229] + _0x24A3D.totalCreated;
                _0x24A3D.totalCreated++;
                return _0x24A33
            }
            _createClass(_0x24A3D, [{
                key: _0x24A29[40],
                value: function _0x24A6F() {
                    if (!this.isDestroyed && _0x24A3D.bitmapPool.indexOf(this) == -1) {
                        _0x24A3D.bitmapPool.push(this);
                        this.resize(1, 1);
                        this.update()
                    }
                    ;this.isDestroyed = true
                }
            }], [{
                key: _0x24A29[209],
                value: function _0x24A65(_0x24A51, _0x24A47) {
                    if (_0x24A3D.bitmapPool.length == 0) {
                        var _0x24A33 = new _0x24A3D(_0x24A51,_0x24A47);
                        return _0x24A33
                    } else {
                        var _0x24A29 = _0x24A3D.bitmapPool.shift();
                        _0x24A29.isDestroyed = false;
                        _0x24A29.blendDestinationOver();
                        _0x24A29.resize(_0x24A51, _0x24A47);
                        _0x24A29.clear();
                        _0x24A29.update();
                        _0x24A29.dirty = true;
                        return _0x24A29
                    }
                }
            }]);
            return _0x24A3D
        }(Phaser.BitmapData);
        _0x24A33.bitmapPool = [];
        _0x24A33.totalCreated = 0;
        _0x24A3D.Bitmap = _0x24A33
    }
    function _0x24B05(_0x24A47) {
        var _0x24A33 = Scene.GameObject;
        var _0x24A3D = function() {
            function _0x24A51() {
                _0x24A5B(this, _0x24A51)
            }
            _createClass(_0x24A51, null, [{
                key: _0x24A29[230],
                value: function _0x24A3D(_0x24A47, _0x24A3D) {
                    _0x24A51.removeFromGlobals(_0x24A47);
                    if (_0x24A3D instanceof _0x24A33) {
                        _0x24A3D.shouldBeDestroyed = false
                    }
                    ;trace(_0x24A3D);
                    _0x24A51.objects[_0x24A29[32]](_0x24A47, _0x24A3D)
                }
            }, {
                key: _0x24A29[231],
                value: function _0x24A47(_0x24A33) {
                    return _0x24A51.objects[_0x24A29[2]](_0x24A33)
                }
            }, {
                key: _0x24A29[232],
                value: function _0x24A65(_0x24A47) {
                    var _0x24A3D = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                    if (_0x24A51.objects.has(_0x24A47) && _0x24A51.objects[_0x24A29[2]](_0x24A47).destroy) {
                        var _0x24A5B = this.objects[_0x24A29[2]](_0x24A47);
                        trace(_0x24A5B);
                        if (_0x24A5B instanceof _0x24A33) {
                            if (_0x24A3D) {
                                Main.game.world.add(_0x24A5B);
                                _0x24A5B.shouldBeDestroyed = true
                            }
                        }
                        ;if (_0x24A3D) {
                            _0x24A5B.destroy()
                        }
                    }
                    ;_0x24A51.objects[_0x24A29[233]](_0x24A47)
                }
            }]);
            return _0x24A51
        }();
        _0x24A3D.objects = new Map();
        _0x24A47.Globals = _0x24A3D
    }
    function _0x24B0F() {}
    function _0x24B19(_0x24A3D) {
        var _0x24A33 = function() {
            function _0x24A47() {
                _0x24A5B(this, _0x24A47)
            }
            _createClass(_0x24A47, null, [{
                key: _0x24A29[234],
                value: function _0x24A33(_0x24A29) {
                    var _0x24A33 = new Managers.EventData();
                    for (var _0x24A47 = 0; _0x24A47 < _0x24A29.length; _0x24A47++) {
                        var _0x24A3D = _0x24A29[_0x24A47];
                        _0x24A33.addData(_0x24A3D[0], _0x24A3D[1])
                    }
                    ;return _0x24A33
                }
            }, {
                key: _0x24A29[235],
                value: function _0x24A3D(_0x24A51) {
                    var _0x24A3D = _0x24A51.keys();
                    var _0x24A47 = _0x24A3D.next();
                    while (!_0x24A47.done) {
                        var _0x24A33 = _0x24A51[_0x24A29[2]](_0x24A47.value);
                        if (_0x24A33 && _0x24A33.length) {
                            _0x24A33.length = 0
                        }
                        ;_0x24A51[_0x24A29[32]](_0x24A47.value, null);
                        _0x24A47 = _0x24A3D.next()
                    }
                    ;_0x24A51.clear()
                }
            }]);
            return _0x24A47
        }();
        _0x24A3D.Util = _0x24A33
    }
    _possibleConstructorReturn = _0x24A47;
    _inherits = _0x24A51;
    _classCallCheck = _0x24A5B;
    startGame = _0x24A6F;
    trace = _0x24B0F;
    _0x24A29[0];
    _get = _0x24A33;
    _createClass = _0x24A3D();
    Game = Phaser.Game;
    (_0x24A65)(Main || (Main = {}));
    (_0x24A79)(Managers || (Managers = {}));
    (_0x24A83)(Managers || (Managers = {}));
    (_0x24A8D)(Util || (Util = {}));
    GameData = Util.GameData;
    (_0x24A97)(Managers || (Managers = {}));
    (_0x24AA1)(Managers || (Managers = {}));
    (_0x24AAB)(Managers || (Managers = {}));
    (_0x24AB5)(Managers || (Managers = {}));
    (_0x24ABF)(Managers || (Managers = {}));
    Utils = Util.Util;
    (_0x24AC9)(Scene || (Scene = {}));
    (_0x24AD3)(Scene || (Scene = {}));
    (_0x24ADD)(Scene || (Scene = {}));
    (_0x24AE7)(Scene || (Scene = {}));
    EventManager = Managers.EventManager;
    EventData = Managers.EventData;
    (_0x24AF1)(Scene || (Scene = {}));
    (_0x24AFB)(Util || (Util = {}));
    (_0x24B05)(Util || (Util = {}));
    allowLogs = true;
    allowLogs = window.document.domain == _0x24A29[215];
    trace = _0x24B0F;
    if (allowLogs) {
        trace = console.log
    }
    ;(_0x24B19)(Util || (Util = {}))
}
)()
