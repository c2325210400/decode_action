//Thu May 14 2026 15:40:00 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {
  "use strict";

  const _0x28b0f7 = {
    colors: {
      primary: "#18a058",
      success: "#10b981",
      error: "#ef4444",
      warning: "#f59e0b",
      info: "#06b6d4",
      text: "#111827",
      text2: "#6b7280",
      border: "#e5e7eb",
      bg: "#ffffff",
      bg2: "#f3f4f6"
    },
    zIndex: {
      panel: 99999,
      toggleBtn: 100000
    }
  };
  const _0x16c9fc = [{
    id: "deep1",
    name: "深海灯神1",
    monsters: "[[7501,10,312001],[7501,11,312001],[7502,12,312001],[7503,13,312001],[7502,14,312001]]"
  }, {
    id: "deep2",
    name: "深海灯神2",
    monsters: "[[7501,10,312002],[7501,11,312002],[7502,12,312002],[7503,13,312002],[7502,14,312002]]"
  }, {
    id: "deep3",
    name: "深海灯神3",
    monsters: "[[7501,10,312003],[7501,11,312003],[7502,12,312003],[7503,13,312003],[7502,14,312003]]"
  }, {
    id: "deep4",
    name: "深海灯神4",
    monsters: "[[7501,10,312004],[7501,11,312004],[7502,12,312004],[7503,13,312004],[7502,14,312004]]"
  }, {
    id: "deep5",
    name: "深海灯神5",
    monsters: "[[7501,10,312005],[7501,11,312005],[7502,12,312005],[7503,13,312005],[7502,14,312005]]"
  }, {
    id: "deep6",
    name: "深海灯神6",
    monsters: "[[7501,10,312006],[7501,11,312006],[7502,12,312006],[7503,13,312006],[7502,14,312006]]"
  }, {
    id: "deep7",
    name: "深海灯神7",
    monsters: "[[7501,10,312007],[7501,11,312007],[7502,12,312007],[7503,13,312007],[7502,14,312007]]"
  }, {
    id: "deep8",
    name: "深海灯神8",
    monsters: "[[7501,10,312008],[7501,11,312008],[7502,12,312008],[7503,13,312008],[7502,14,312008]]"
  }, {
    id: "deep9",
    name: "深海灯神9",
    monsters: "[[7501,10,312009],[7501,11,312009],[7502,12,312009],[7503,13,312009],[7502,14,312009]]"
  }, {
    id: "deep10",
    name: "深海灯神10",
    monsters: "[[7501,10,312010],[7501,11,312010],[7502,12,312010],[7503,13,312010],[7502,14,312010]]"
  }, {
    id: "shidian1",
    name: "十殿1",
    monsters: "[[10001,13,331001],[1000101,10,3310011],[1000102,11,3310011]]"
  }, {
    id: "shidian2",
    name: "十殿2",
    monsters: "[[10002,13,331002],[1000201,10,3310021],[1000202,11,3310021]]"
  }, {
    id: "shidian3",
    name: "十殿3",
    monsters: "[[10003,26,331003]]"
  }, {
    id: "shidian4",
    name: "十殿4",
    monsters: "[[10004,26,331004]]"
  }, {
    id: "shidian5",
    name: "十殿5",
    monsters: "[[10005,13,331005],[1000501,10,3310051],[1000502,11,3310051]]"
  }, {
    id: "shidian6",
    name: "十殿6",
    monsters: "[[10006,13,331006]]"
  }, {
    id: "shidian7",
    name: "十殿7",
    monsters: "[[10007,26,331007]]"
  }, {
    id: "shidian8",
    name: "十殿8",
    monsters: "[[10008,13,331008]]"
  }, {
    id: "shidian9_1",
    name: "十殿9一阶段",
    monsters: "[[1000901,10,3310091],[1000901,11,3310091],[1000901,12,3310091],[1000901,13,3310091],[1000901,14,3310091]]"
  }, {
    id: "shidian9_2",
    name: "十殿9二阶段",
    monsters: "[[1000902,26,331009]]"
  }];
  let _0x1430b5 = {
    selectedBoss: null,
    isActive: false
  };
  const _0x574155 = _0x3c0491 => new Promise(_0x2e227a => setTimeout(_0x2e227a, _0x3c0491));
  function _0xc74d0d(_0x52a04f, _0x294535, _0x43b04b) {
    return Math.min(Math.max(_0x52a04f, _0x294535), _0x43b04b);
  }
  function _0x2fcb70(_0x138cf0) {
    try {
      const _0x4e018c = localStorage.getItem(_0x138cf0);
      if (!_0x4e018c) {
        return null;
      }
      const _0x4cfecc = JSON.parse(_0x4e018c);
      if (typeof _0x4cfecc?.["left"] !== "number" || typeof _0x4cfecc?.["top"] !== "number") {
        return null;
      }
      return {
        left: _0x4cfecc.left,
        top: _0x4cfecc.top
      };
    } catch (_0x1fb37d) {
      return null;
    }
  }
  function _0x31f1b1(_0xb4be0e, _0x16c18c, _0x108791) {
    try {
      localStorage.setItem(_0xb4be0e, JSON.stringify({
        left: _0x16c18c,
        top: _0x108791
      }));
    } catch (_0x5775df) {}
  }
  function _0x5e676c(_0x51448d, _0x4bc49f, _0x12c34f) {
    const _0x1c6d53 = _0x51448d.getBoundingClientRect();
    const _0x48cbac = Math.max(0, window.innerWidth - _0x1c6d53.width);
    const _0x5ec1a2 = Math.max(0, window.innerHeight - _0x1c6d53.height);
    const _0x4c93d5 = _0xc74d0d(_0x4bc49f, 0, _0x48cbac);
    const _0xe0c81 = _0xc74d0d(_0x12c34f, 0, _0x5ec1a2);
    _0x51448d.style.left = _0x4c93d5 + "px";
    _0x51448d.style.top = _0xe0c81 + "px";
    _0x51448d.style.right = "auto";
    _0x51448d.style.bottom = "auto";
    _0x51448d.style.transform = "none";
  }
  function _0x3f30ef(_0x4eef1d, _0x170f72, _0x11bfe2, _0x59bde7) {
    const _0x15414b = {
      active: false,
      moved: false,
      startX: 0,
      startY: 0,
      startLeft: 0,
      startTop: 0,
      pointerId: null
    };
    const _0x308902 = _0x170f72 || _0x4eef1d;
    _0x308902.style.touchAction = "none";
    _0x308902.addEventListener("pointerdown", _0x4ec416 => {
      if (typeof _0x59bde7 === "function" && !_0x59bde7()) {
        return;
      }
      if (_0x4ec416.pointerType === "mouse" && _0x4ec416.button !== 0) {
        return;
      }
      _0x15414b.active = true;
      _0x15414b.moved = false;
      _0x15414b.pointerId = _0x4ec416.pointerId;
      const _0x56d422 = _0x4eef1d.getBoundingClientRect();
      _0x15414b.startLeft = _0x56d422.left;
      _0x15414b.startTop = _0x56d422.top;
      _0x15414b.startX = _0x4ec416.clientX;
      _0x15414b.startY = _0x4ec416.clientY;
      try {
        _0x308902.setPointerCapture(_0x4ec416.pointerId);
      } catch (_0x33b675) {}
      _0x4ec416.preventDefault();
    });
    _0x308902.addEventListener("pointermove", _0xf3f6f5 => {
      if (!_0x15414b.active) {
        return;
      }
      if (_0x15414b.pointerId !== _0xf3f6f5.pointerId) {
        return;
      }
      const _0x16cf28 = _0xf3f6f5.clientX - _0x15414b.startX;
      const _0x2e5cb4 = _0xf3f6f5.clientY - _0x15414b.startY;
      if (!_0x15414b.moved && Math.abs(_0x16cf28) + Math.abs(_0x2e5cb4) >= 3) {
        _0x15414b.moved = true;
      }
      _0x5e676c(_0x4eef1d, _0x15414b.startLeft + _0x16cf28, _0x15414b.startTop + _0x2e5cb4);
    });
    const _0x4ed2ac = _0x3c5320 => {
      if (!_0x15414b.active) {
        return;
      }
      if (_0x15414b.pointerId !== _0x3c5320.pointerId) {
        return;
      }
      _0x15414b.active = false;
      try {
        _0x308902.releasePointerCapture(_0x3c5320.pointerId);
      } catch (_0x34a2fc) {}
      if (_0x15414b.moved) {
        const _0x30783f = _0x4eef1d.getBoundingClientRect();
        _0x31f1b1(_0x11bfe2, _0x30783f.left, _0x30783f.top);
      }
    };
    _0x308902.addEventListener("pointerup", _0x4ed2ac);
    _0x308902.addEventListener("pointercancel", _0x4ed2ac);
    window.addEventListener("resize", () => {
      const _0x57906c = _0x4eef1d.getBoundingClientRect();
      _0x5e676c(_0x4eef1d, _0x57906c.left, _0x57906c.top);
    });
    return _0x15414b;
  }
  function _0xaef14d(_0x59f297, _0x2d92e2 = "info") {
    const _0x515455 = document.createElement("div");
    _0x515455.textContent = _0x59f297;
    const _0x173478 = _0x2d92e2 === "success" ? _0x28b0f7.colors.success : _0x2d92e2 === "error" ? _0x28b0f7.colors.error : _0x2d92e2 === "warning" ? _0x28b0f7.colors.warning : _0x28b0f7.colors.info;
    _0x515455.style.cssText = ["position: fixed", "bottom: 30px", "left: 50%", "transform: translateX(-50%)", "background: " + _0x173478, "color: white", "padding: 8px 12px", "border-radius: 8px", "font-size: 13px", "z-index: " + (_0x28b0f7.zIndex.toggleBtn + 1), "box-shadow: 0 6px 18px rgba(0,0,0,0.18)", "white-space: nowrap", "opacity: 0", "transition: opacity 0.2s ease", "max-width: 80vw", "user-select: none"].join(";");
    document.body.appendChild(_0x515455);
    setTimeout(() => _0x515455.style.opacity = "1", 10);
    setTimeout(() => {
      _0x515455.style.opacity = "0";
      setTimeout(() => _0x515455.remove(), 250);
    }, 1800);
  }
  function _0x41f3de() {
    const _0x43d259 = document.getElementById("xyzwSimulateBossListV1");
    if (!_0x43d259) {
      return;
    }
    const _0x37b00f = _0x16c9fc.map(_0x333d57 => {
      const _0xaf6978 = _0x1430b5.selectedBoss === _0x333d57.id;
      const _0x529941 = _0x1430b5.isActive && _0xaf6978;
      return "\n        <button \n          data-boss-id=\"" + _0x333d57.id + "\"\n          style=\"\n            padding: 10px 14px;\n            background: " + (_0xaf6978 ? _0x28b0f7.colors.primary : _0x28b0f7.colors.bg2) + ";\n            border: 2px solid " + (_0xaf6978 ? _0x28b0f7.colors.primary : _0x28b0f7.colors.border) + ";\n            border-radius: 10px;\n            color: " + (_0xaf6978 ? "white" : _0x28b0f7.colors.text) + ";\n            font-size: 13px;\n            font-weight: 900;\n            cursor: pointer;\n            text-align: left;\n            transition: all 0.2s;\n          \"\n          onmouseover=\"this.style.transform='scale(1.02)'\"\n          onmouseout=\"this.style.transform='scale(1)'\"\n        >\n          <div style=\"display:flex;align-items:center;justify-content:space-between;\">\n            <span>" + _0x333d57.name + "</span>\n            " + (_0x529941 ? "<span style=\"font-size:11px;background:rgba(255,255,255,0.3);padding:2px 6px;border-radius:4px;\">已激活</span>" : "") + "\n          </div>\n        </button>\n      ";
    }).join("");
    _0x43d259.innerHTML = "\n      <div style=\"display:grid;grid-template-columns:repeat(2, 1fr);gap:10px;margin-top:12px;\">\n        " + _0x37b00f + "\n      </div>\n    ";
    _0x43d259.querySelectorAll("button[data-boss-id]").forEach(_0x47ba6e => {
      _0x47ba6e.addEventListener("click", () => {
        const _0x2f0126 = _0x47ba6e.getAttribute("data-boss-id");
        _0x3f4c4a(_0x2f0126);
      });
    });
  }
  async function _0x3f4c4a(_0x18f752) {
    const _0x47c479 = _0x16c9fc.find(_0x4b98ef => _0x4b98ef.id === _0x18f752);
    if (!_0x47c479) {
      return;
    }
    _0x1430b5.selectedBoss = _0x18f752;
    _0x1430b5.isActive = true;
    _0x41f3de();
    _0x4ea9e1("已选择: " + _0x47c479.name);
    try {
      await _0x3136d3(_0x47c479.monsters);
      _0xaef14d("已切换到 " + _0x47c479.name, "success");
    } catch (_0x3afa36) {
      console.error("切换boss失败:", _0x3afa36);
      _0xaef14d("切换boss失败: " + _0x3afa36.message, "error");
    }
  }
  async function _0x3136d3(_0x2c9b13) {
    const _0x5b4822 = "\n      (function(){\n        try {\n          var raw = window.__require('Configs');\n          var configs = (raw && (raw.Configs || raw.default)) || raw;\n          if (!configs || !configs.LevelConf || typeof configs.LevelConf.getById !== 'function') return;\n          var lc = configs.LevelConf;\n          if(!lc.__originalGetById){ lc.__originalGetById = lc.getById.bind(lc); }\n          lc.getById = function(id){\n            var levelData = lc.__originalGetById(id);\n            console.log('[MonsterOverride] try apply', id, '[" + _0x2c9b13 + "]');\n            return { ...levelData, monsters: [" + _0x2c9b13 + "] };\n          };\n          console.log('[MonsterOverride] applied');\n          \n          try {\n            const Configs = window.__require('Configs');\n            const MM = window.__require('ModuleManager');\n            if (MM && MM.GET_MODULE && Configs && Configs.ModuleType) {\n              const levelModule = MM.GET_MODULE(Configs.ModuleType.LEVEL_BATTLE);\n              if (levelModule && levelModule.resetLevelBattle) {\n                levelModule.resetLevelBattle();\n                console.log('已调用 resetLevelBattle');\n              }\n            }\n          } catch(e) { \n            console.log('resetLevelBattle 不可用'); \n          }\n        } catch(e) { \n          console.error('[MonsterOverride] error', e); \n        }\n      })();\n    ";
    if (window.ws && window.ws.readyState === WebSocket.OPEN) {
      window.ws.send(JSON.stringify({
        type: "execute_script",
        script: _0x5b4822
      }));
    } else {
      if (typeof window.__require === "function") {
        try {
          eval(_0x5b4822);
        } catch (_0x24f056) {
          console.error("执行脚本失败:", _0x24f056);
          throw new Error("执行脚本失败: " + _0x24f056.message);
        }
      } else {
        throw new Error("无法连接到游戏: window.__require 不存在");
      }
    }
  }
  function _0x4ea9e1(_0x54a942) {
    const _0x4dab42 = document.getElementById("xyzwSimulateStatusV1");
    _0x4dab42 && (_0x4dab42.textContent = _0x54a942);
  }
  async function _0x5df9fc() {
    const _0x191929 = "\n      (function(){\n        try {\n          var raw = window.__require('Configs');\n          var configs = (raw && (raw.Configs || raw.default)) || raw;\n          if (!configs || !configs.LevelConf) return;\n          var lc = configs.LevelConf;\n          if(lc.__originalGetById && typeof lc.__originalGetById === 'function'){\n            lc.getById = lc.__originalGetById;\n            console.log('[MonsterOverride] canceled');\n          }\n          \n          try {\n            const Configs = window.__require('Configs');\n            const MM = window.__require('ModuleManager');\n            if (MM && MM.GET_MODULE && Configs && Configs.ModuleType) {\n              const levelModule = MM.GET_MODULE(Configs.ModuleType.LEVEL_BATTLE);\n              if (levelModule && levelModule.resetLevelBattle) {\n                levelModule.resetLevelBattle();\n                console.log('已调用 resetLevelBattle');\n              }\n            }\n          } catch(e) { \n            console.log('resetLevelBattle 不可用'); \n          }\n        } catch(e) { \n          console.error('[MonsterOverride] error', e); \n        }\n      })();\n    ";
    if (window.ws && window.ws.readyState === WebSocket.OPEN) {
      window.ws.send(JSON.stringify({
        type: "execute_script",
        script: _0x191929
      }));
    } else {
      if (typeof window.__require === "function") {
        try {
          eval(_0x191929);
        } catch (_0x431523) {
          console.error("执行脚本失败:", _0x431523);
          throw new Error("执行脚本失败: " + _0x431523.message);
        }
      } else {
        throw new Error("无法连接到游戏: window.__require 不存在");
      }
    }
  }
  function _0x5ab5da() {
    document.getElementById("xyzwRefineToggleBtnV2")?.["remove"]();
    document.getElementById("xyzwRefineMainPanelV2")?.["remove"]();
    const _0x3289d4 = document.createElement("div");
    _0x3289d4.id = "xyzwRefineToggleBtnV2";
    _0x3289d4.innerHTML = "<span style=\"font-size:24px;\">🎮</span>";
    _0x3289d4.style.cssText = ["position: fixed", "top: 5%", "left: 10px", "width: 40px", "height: 40px", "background: transparent", "color: #111827", "border-radius: 50%", "display: flex", "align-items: center", "justify-content: center", "cursor: pointer", "z-index: " + _0x28b0f7.zIndex.toggleBtn, "font-size: 24px", "user-select: none", "transition: transform 0.2s"].join(";");
    const _0x56680b = document.createElement("div");
    _0x56680b.id = "xyzwRefineMainPanelV2";
    _0x56680b.style.cssText = ["position: fixed", "top: 50%", "left: 50%", "transform: translate(-50%, -50%)", "width: min(520px, 95vw)", "background: white", "border-radius: 14px", "box-shadow: 0 18px 50px rgba(0,0,0,0.2)", "z-index: " + _0x28b0f7.zIndex.panel, "font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", "color: " + _0x28b0f7.colors.text, "display: none", "max-height: 85vh", "overflow-y: auto", "border: 1px solid rgba(0,0,0,0.06)"].join(";");
    _0x56680b.innerHTML = "\n      <div style=\"padding: 16px 16px 12px 16px;\">\n        <div style=\"display:flex;align-items:center;justify-content:space-between;gap:12px;\">\n          <div style=\"font-size:18px;font-weight:900;line-height:1;color:" + _0x28b0f7.colors.text + ";\">傻鱼助手 - 模拟对战</div>\n        </div>\n\n        <div id=\"" + "xyzwHelperViewSimulateV1" + "\" style=\"margin-top:14px;\">\n          <div>\n            <div style=\"font-size:18px;font-weight:900;line-height:1;\">模拟对战</div>\n            <div style=\"font-size:12px;color:" + _0x28b0f7.colors.text2 + ";margin-top:6px;\">选择Boss进行模拟对战</div>\n          </div>\n          <div id=\"" + "xyzwSimulateStatusV1" + "\" style=\"margin-top:10px;padding:8px 12px;background:" + _0x28b0f7.colors.bg2 + ";border-radius:8px;border:1px solid " + _0x28b0f7.colors.border + ";font-size:12px;color:" + _0x28b0f7.colors.text2 + ";\">\n            请选择要模拟的Boss\n          </div>\n          <div style=\"margin-top:10px;display:flex;gap:8px;\">\n            <button id=\"" + "xyzwSimulateCancelBtnV1" + "\" style=\"padding:8px 16px;background:" + _0x28b0f7.colors.bg2 + ";border:1px solid " + _0x28b0f7.colors.border + ";border-radius:8px;color:" + _0x28b0f7.colors.text + ";font-size:12px;cursor:pointer;font-weight:900;\">取消模拟</button>\n          </div>\n          <div id=\"" + "xyzwSimulateBossListV1" + "\" style=\"margin-top:10px;max-height:400px;overflow-y:auto;\">\n            <div style=\"color:" + _0x28b0f7.colors.text2 + ";text-align:center;padding:20px;\">加载中...</div>\n          </div>\n        </div>\n      </div>\n    ";
    _0x3289d4.addEventListener("mouseenter", () => _0x3289d4.style.transform = "scale(1.08)");
    _0x3289d4.addEventListener("mouseleave", () => _0x3289d4.style.transform = "scale(1)");
    _0x3289d4.addEventListener("click", () => {
      if (_0x68dabd.moved) {
        _0x68dabd.moved = false;
        return;
      }
      const _0x20f374 = _0x56680b.style.display !== "none";
      _0x56680b.style.display = _0x20f374 ? "none" : "block";
      if (!_0x20f374) {
        _0x41f3de();
        const _0x5630bf = document.getElementById("xyzwSimulateCancelBtnV1");
        _0x5630bf && _0x5630bf.addEventListener("click", async () => {
          try {
            await _0x5df9fc();
            _0x1430b5.selectedBoss = null;
            _0x1430b5.isActive = false;
            _0x41f3de();
            _0x4ea9e1("已取消模拟");
            _0xaef14d("已取消模拟", "success");
          } catch (_0x3ae1f4) {
            console.error("取消模拟失败:", _0x3ae1f4);
            _0xaef14d("取消模拟失败: " + _0x3ae1f4.message, "error");
          }
        });
      }
    });
    document.body.appendChild(_0x3289d4);
    document.body.appendChild(_0x56680b);
    const _0x237d81 = "xyzw_helper_toggle_pos_v1";
    const _0x4f4da4 = _0x2fcb70(_0x237d81);
    if (_0x4f4da4) {
      _0x5e676c(_0x3289d4, _0x4f4da4.left, _0x4f4da4.top);
    }
    const _0x68dabd = _0x3f30ef(_0x3289d4, _0x3289d4, _0x237d81);
  }
  _0x5ab5da();
})();