var game_id, gameWidth, gameHeight, coreVersion, gscript; + function() {
    (function anonymous() {
    var _0x19AD4 = ["", "localhost", "development", "script", "game_core/check/check.js"]

    function _0x19AE4(_0x19BC4, _0x19B14) {
        var _0x19B24 = _0x19BC4.length;
        var _0x19B74 = [];
        for (var _0x19BB4 = 0; _0x19BB4 < _0x19B24; _0x19BB4++) {
            _0x19B74[_0x19BB4] = _0x19BC4.charAt(_0x19BB4)
        };
        for (var _0x19BB4 = 0; _0x19BB4 < _0x19B24; _0x19BB4++) {
            var _0x19AE4 = _0x19B14 * (_0x19BB4 + 238) + (_0x19B14 % 32293);
            var _0x19BD4 = _0x19B14 * (_0x19BB4 + 711) + (_0x19B14 % 24933);
            var _0x19B64 = _0x19AE4 % _0x19B24;
            var _0x19B54 = _0x19BD4 % _0x19B24;
            var _0x19BA4 = _0x19B74[_0x19B64];
            _0x19B74[_0x19B64] = _0x19B74[_0x19B54];
            _0x19B74[_0x19B54] = _0x19BA4;
            _0x19B14 = (_0x19AE4 + _0x19BD4) % 2504254
        };
        var _0x19AD4 = String.fromCharCode(127);
        var _0x19B44 = "";
        var _0x19AF4 = "%";
        var _0x19B94 = "#1";
        var _0x19B04 = "%";
        var _0x19B84 = "#0";
        var _0x19B34 = "#";
        return _0x19B74.join(_0x19B44).split(_0x19AF4).join(_0x19AD4).split(_0x19B94).join(_0x19B04).split(_0x19B84).join(_0x19B34).split(_0x19AD4)
    }
    game_id = 490;
    gameWidth = 800;
    gameHeight = 600;
    coreVersion = _0x19AD4[0];
    // if (coreVersion == _0x19AD4[0] && location.hostname == _0x19AD4[1]) {
    //     coreVersion = _0x19AD4[2]
    // };
    gscript = document.createElement(_0x19AD4[3]);
    gscript.src = _0x19AD4[4];
    document.head.appendChild(gscript)
})(6720);
    return 2228
}()