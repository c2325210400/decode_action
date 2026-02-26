//Thu Feb 26 2026 06:31:51 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {
  try {
    function _0x2717c7(_0x230dc8) {
      var _0x5e6d04 = new RegExp("(^|&)" + _0x230dc8 + "=([^&]*)(&|$)");
      var _0x1574a3 = window.location.search.substr(1).match(_0x5e6d04);
      if (_0x1574a3 != null) {
        return unescape(_0x1574a3[2]);
      }
      return null;
    }
    if (_0x2717c7("mute") === "false") {
      return;
    }
    var _0x2ee770 = window.AudioContext || window.webkitAudioContext;
    if (_0x2ee770) {
      var _0x592d07 = _0x2ee770;
      window.AudioContext = window.webkitAudioContext = function (_0x58fc3e) {
        var _0x41b45b = new _0x592d07(_0x58fc3e);
        try {
          _0x41b45b.suspend();
        } catch (_0x5dcbb9) {}
        return _0x41b45b;
      };
      window.AudioContext.prototype = _0x592d07.prototype;
    }
    var _0xe78996 = HTMLMediaElement.prototype.play;
    HTMLMediaElement.prototype.play = function () {
      this.muted = true;
      return Promise.resolve();
    };
  } catch (_0x4c5b57) {}
})();