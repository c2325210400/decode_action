//Fri Dec 12 2025 15:55:23 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {
  "use strict";
  const _0x236277 = "7.7.3";
  let _0x4f313c = null;
  function _0x32e300(_0x5d58c4, _0x2014ab = 30000) {
    {
      const _0x5ed280 = Date.now();
      const _0x21fec4 = () => {
        {
          if (!document.body) {
            {
              if (Date.now() - _0x5ed280 < _0x2014ab) {
                setTimeout(_0x21fec4, 100);
              } else {
                {
                  console.error("鲸鱼: 等待DOM超时");
                }
              }
              return;
            }
          }
          _0x5d58c4();
        }
      };
      _0x21fec4();
    }
  }
  function _0x5a1ccf(_0x27737f, _0x5a74dd = 60000) {
    {
      const _0xa2fb69 = Date.now();
      const _0x2b208e = () => {
        {
          if (window.ws && typeof window.ws.sendAsync === "function") {
            {
              console.log("鲸鱼: WebSocket连接已就绪");
              _0x27737f();
              return;
            }
          }
          Date.now() - _0xa2fb69 < _0x5a74dd ? setTimeout(_0x2b208e, 500) : (console.error("鲸鱼: 等待WebSocket超时"), _0x27737f());
        }
      };
      _0x2b208e();
    }
  }
  function _0x4669c3() {
    {
      if (_0x4f313c) {
        return _0x4f313c;
      }
      try {
        {
          const _0x133deb = window.__require("PlatformManager").PlatformManager.instance._battleVersion;
          if (_0x133deb) {
            {
              _0x4f313c = _0x133deb;
              console.log("✅ 获取battleVersion:", _0x4f313c);
              return _0x133deb;
            }
          }
        }
      } catch (_0x44ffb3) {}
      return null;
    }
  }
  (function _0x281d78() {
    {
      const _0x4e60cd = () => {
        {
          if (_0x4669c3()) {
            return;
          }
          setTimeout(_0x4e60cd, 300);
        }
      };
      _0x4e60cd();
    }
  })();
  const _0x10bfdc = document.createElement("style");
  _0x10bfdc.textContent = "\n        :root {\n            --panel-bg: rgba(247, 250, 252, 0.98);\n            --glass-border: rgba(0, 0, 0, 0.1);\n            --highlight: #3182ce; --text-primary: #2d3748; --text-secondary: #718096;\n            --item-bg: #ffffff; --item-border: #e2e8f0;\n            --success: #38a169; --error: #e53e3e;\n        }\n\n        /* 主面板 */\n        .xianxia-panel {\n            color-scheme: light !important;\n            background: transparent !important;\n            color: var(--text-primary) !important;\n            position:fixed;top:10px;backdrop-filter:blur(10px);border:1px solid var(--glass-border);border-radius:12px;z-index:10000;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;box-shadow:0 8px 32px rgba(0,0,0,0.1);transition:all .3s ease;overflow:hidden;\n        }\n        .xianxia-panel::before {\n            content: '';\n            position: absolute;\n            top: 0; left: 0;\n            width: 100%; height: 100%;\n            background: var(--panel-bg) !important;\n            z-index: -1;\n            border-radius: 12px;\n        }\n\n        .xianxia-panel.collapse{width:44px;height:44px;right:10px;min-height:auto;display:flex;align-items:center;justify-content:center;border-radius:50%;}\n        .xianxia-panel.expanded{width:90vw;max-width:520px;right:5vw;max-height:92vh;display:flex;flex-direction:column;}\n        \n        .panel-header{background:rgba(0,0,0,0.02) !important;cursor:pointer;display:flex !important;align-items:center !important;padding:10px 15px !important;flex-shrink:0;width:100%;box-sizing:border-box !important;transition:background .2s ease; position: relative; z-index: 1;}\n        .xianxia-panel.expanded .panel-header { justify-content:flex-start !important; }\n        .xianxia-panel.collapse .panel-header { \n            justify-content: center !important; \n            align-items: center !important;\n            padding: 0 !important; /* 移除折叠状态下的内边距 */\n            height: 100%; /* 确保头部占满整个折叠面板 */\n        }\n\n        .panel-title{flex-grow: 1; font-weight:600;font-size:16px;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:15px !important; color: var(--text-primary) !important;}\n        .panel-icon{font-size:22px;line-height:1;width:100%;text-align:center;display:flex;align-items:center;justify-content:center;}\n        .xianxia-panel.expanded .panel-icon { display: none; }\n        .xianxia-panel.collapse .panel-title, .xianxia-panel.collapse .opacity-control { display: none; }\n        .opacity-control{display:flex;align-items:center;gap:8px;flex-shrink:0;}\n        .opacity-control label{font-size:12px;color:var(--text-secondary) !important;white-space:nowrap;}\n        .opacity-control input{width:90px;height:4px;-webkit-appearance:none;background:rgba(0,0,0,.1);border-radius:2px;outline:none;transition:background .2s;}\n        .opacity-control input:hover{background:rgba(0,0,0,.2);}\n        .opacity-control input::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;border-radius:50%;background:var(--text-primary);cursor:pointer;}\n        .opacity-value{font-size:12px;color:var(--text-primary) !important;min-width:40px;text-align:left;}\n        \n        .panel-content{padding:10px 0 0 0;display:none;overflow-y:auto;max-height:calc(92vh - 74px); position: relative; z-index: 1;}.expanded .panel-content{display:block}\n        .tab-nav{display:flex;padding:0 5px;margin-bottom:8px;border-bottom:1px solid var(--item-border) !important;}\n        .tab-btn{flex:1;padding:7px 4px;border:none;background:transparent;color:var(--text-secondary) !important;cursor:pointer;font-size:12px;font-weight:600;transition: color .2s ease, border-color .2s ease;border-bottom:3px solid transparent; text-align:center;}\n        .tab-btn:hover{color:var(--text-primary) !important;}\n        .tab-btn.active{color:var(--highlight) !important;border-bottom-color:var(--highlight) !important;}\n        .tab-pane{display:none; padding:0 10px 10px 10px;}\n        .tab-pane.active{display:block;animation:fadeIn .3s;}\n        @keyframes fadeIn{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}\n        .sub-nav{display:flex;gap:10px;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--item-border) !important; flex-wrap: wrap;}\n        .sub-tab-btn{font-size:11px;padding:2px 0;color:var(--text-secondary) !important;background:transparent;border:none;cursor:pointer;border-bottom:2px solid transparent;transition:all .2s ease;}\n        .sub-tab-btn:hover{color:var(--text-primary) !important;}\n        .sub-tab-btn.active{color:var(--highlight) !important;border-bottom-color:var(--highlight) !important;font-weight:500;}\n.module-content{display:none;}\n.module-content.active{display:block;}\n        .sub-pane{display:none;}\n        .sub-pane.active{display:block;}\n\n        .task-section{background:var(--item-bg) !important;border:1px solid var(--item-border) !important; margin:0;padding:10px;border-radius:7px;}\n        .task-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;}\n        .task-header h4{margin:0;color:var(--highlight) !important;font-size:13px;font-weight:600;display:flex;align-items:center;gap:5px;}\n        .status{font-size:10px;color:var(--highlight) !important;background:rgba(49,130,206,.1) !important;padding:3px 5px;border-radius:3px;}\n        .task-row {display:flex;align-items:center;gap:7px;margin-bottom:7px;}\n        .task-row:last-child {margin-bottom:0;}\n        .task-row .task-label {width:55px;font-size:12px;color:var(--text-secondary) !important;flex-shrink:0; text-align:right; padding-right:4px;}\n        .task-row input {width:70px;flex-grow:0;}\n        .task-row .task-btn {flex:1;}\n        .task-btn{display:block;width:100%;margin:0;padding:8px 10px;background:rgba(49,130,206,0.1) !important;border:1px solid rgba(49,130,206,0.2) !important;border-radius:6px;color:var(--highlight) !important;font-weight:600;cursor:pointer;font-size:12px;transition: all .2s ease;}\n        .task-btn:hover{background:rgba(49,130,206,0.15) !important;}\n        .task-btn:disabled{background:rgba(0,0,0,0.05) !important;border-color:transparent !important;color:#ccc !important;cursor:not-allowed;transform:none;box-shadow:none;}\n        .task-btn.stop{background:rgba(229, 62, 62, 0.1) !important;border:1px solid rgba(229, 62, 62, 0.2) !important;color:var(--error) !important;}\n        .task-btn.stop:hover{background:rgba(229, 62, 62, 0.15) !important;}\n        /* 英雄选择按钮选中状态 */\n        .hero-item-selected{background:rgba(49,130,206,0.4) !important;border:2px solid rgba(49,130,206,0.8) !important;color:#ffffff !important;text-shadow: 0 1px 2px rgba(0,0,0,0.3) !important;font-weight:bold !important;}\n        .task-row input{border:1px solid var(--item-border) !important;background:rgba(0,0,0,.02) !important;color:var(--text-primary) !important;padding:8px 10px;border-radius:6px;font-size:12px;min-width:0; text-align:center;}\n        .other-buttons{display:grid;grid-template-columns:1fr 1fr;gap:8px}.other-btn{padding:8px;font-size:12px}\n        \n        .count-selector{display:flex;align-items:center;justify-content:center;gap:10px;}\n        .count-selector .task-btn{flex:0 0 30px; padding: 5px; font-size: 16px; line-height: 1;}\n        .count-selector .count-display{font-size:14px;font-weight:600;color:var(--text-primary) !important;width:40px;text-align:center;}\n\n        .daily-task-list{border-top: 1px solid var(--item-border) !important; padding-top: 10px;}\n        .main-action-buttons{margin-top:8px !important; display:flex !important; flex-wrap:nowrap !important; gap:4px !important; width:100% !important;}\n        .main-action-buttons > button{flex:1 !important; flex-basis:33.333% !important; padding:6px 4px !important; font-size:12px !important; margin:0 !important; height:34px !important; min-height:34px !important; box-sizing:border-box !important; border-radius:4px !important; display:flex !important; align-items:center !important; justify-content:center !important; white-space:nowrap !important; overflow:hidden !important; text-overflow:ellipsis !important;}\n        .main-action-buttons > button[data-task=\"one-key-100\"]{color:#ff6b6b !important; font-weight:bold !important;}\n        .daily-task-item{display:flex;align-items:center;margin-bottom:4px;}\n        .daily-task-item:last-child{margin-bottom:0;}\n        .daily-task-info{display:flex; align-items:center; flex-grow:1;}\n        .daily-task-item input[type=\"checkbox\"]{margin-right:7px;width:15px;height:15px;accent-color:var(--highlight);}\n        .daily-task-item label{font-size:11px;color:var(--text-secondary) !important;}\n        .daily-task-item .task-btn{flex-shrink:0;width:65px;padding:3px 5px;font-size:10px;}\n        \n        .car-data-container, .ws-log-container{margin:0;border:none;background:transparent;}\n        .car-data-table{width:100%;border-collapse:collapse;font-size:10px;table-layout:fixed;} /* 固定表格布局，确保列宽可控 */\n        .car-data-table th{background:rgba(0,0,0,.02) !important;border:1px solid var(--item-border) !important; padding: 5px 3px; font-size:11px; color: var(--text-secondary) !important;}\n        /* 为各列设置百分比宽度 */\n         .car-data-table th:nth-child(1), .car-data-table td:nth-child(1){width: 11%;} /* 车位列宽度 */\n         .car-data-table th:nth-child(2), .car-data-table td:nth-child(2){width: 11%;} /* 品质列宽度 */\n         .car-data-table th:nth-child(3), .car-data-table td:nth-child(3){width: 18%;} /* 主要奖励列宽度 */\n         .car-data-table th:nth-child(4), .car-data-table td:nth-child(4){width: 24%;} /* 状态列宽度 */\n         .car-data-table th:nth-child(5), .car-data-table td:nth-child(5){width: 36%;} /* 操作列宽度 */\n        .car-data-table td{border:1px solid var(--item-border) !important;color:var(--text-secondary) !important;padding:2px 2px;vertical-align:middle; text-align:center; min-height: 20px;} /* 进一步减少内边距 */\n        .car-rewards{color: var(--text-primary) !important;line-height:1.2em; text-align:left; padding: 1px 0 1px 5px !important; font-size: 10px;} /* 增加行高确保文字完整显示 */\n        .car-rewards span{display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin: 0 0 3px 0; padding: 0; width: 100%; box-sizing: border-box; font-size: 10px; line-height: 1.2;} /* 增加行高确保文字完整显示，底部留出1px间距 */\n        .car-rewards span.highlight-reward{color:#e53e3e;} /* 高亮重要奖励 */\n        .car-action-btn{font-size:10px;margin:0 2px 0 0;display:inline-block;width:38px;border-radius:4px; padding:2px 0; background:rgba(0,0,0,0.05); border:1px solid rgba(0,0,0,0.1); color: var(--text-secondary); }\n        .car-action-btn:hover{background:rgba(0,0,0,0.1);}\n        .car-action-btn.send{background:rgba(76, 175, 80, .1);border-color:rgba(76, 175, 80, .2); color: #2f6f44;}\n        .car-action-btn.claim{background:rgba(255, 152, 0, .1);border-color:rgba(255, 152, 0, .2); color: #b95f00;}\n        .car-action-btn.is-disabled{background:rgba(0,0,0,0.04) !important; border-color:transparent !important; color:#ccc !important; transform: none; box-shadow: none;}\n        .pity-counter.mythic-guaranteed{color:#e53e3e;font-weight:bold;}\n        \n        /* 胜率测试相关样式 */\n        .winrate-result-item { margin-bottom: 6px; padding-bottom: 6px; border-bottom: 1px dotted var(--item-border); line-height: 1.3; }\n        .winrate-result-item:last-child { border-bottom: none; }\n        .winrate-win { color: var(--success); font-weight: bold; }\n        .winrate-loss { color: var(--error); font-weight: bold; }\n        .winrate-opponent-placeholder { color: var(--text-secondary); }\n\n        #ws-monitor-module .other-buttons { margin-top: 10px; }\n        .ws-log-container { max-height: 55vh; overflow-y: auto; background: rgba(0,0,0,0.02) !important; border-radius: 8px; padding: 10px; border: 1px solid var(--item-border) !important; margin-top: 10px; }\n        .ws-log-entry { position: relative; font-family: 'Courier New', Courier, monospace; font-size: 11px; margin-bottom: 8px; padding: 8px; border-radius: 4px; border: 1px solid transparent; word-break: break-all; }\n        .ws-log-entry .log-header { font-weight: bold; margin-bottom: 4px; color: inherit !important; }\n        .ws-log-entry .log-header.send { color: var(--success) !important; }\n        .ws-log-entry.send { border-color: rgba(56, 161, 105, 0.2) !important; background: rgba(56, 161, 105, 0.05) !important; }\n        .ws-log-entry .log-header.receive { color: var(--highlight) !important; }\n        .ws-log-entry.receive { border-color: rgba(49, 130, 206, 0.2) !important; background: rgba(49, 130, 206, 0.05) !important; }\n        .ws-log-entry .log-time { font-size: 10px; color: var(--text-secondary) !important; margin-left: 8px; }\n        .ws-log-content { white-space: pre-wrap; color: var(--text-primary) !important; }\n        .ws-log-content.collapsed { max-height: 2.5em; overflow: hidden; text-overflow: ellipsis; position: relative; padding-right: 50px; }\n        .log-actions { position: absolute; top: 5px; right: 5px; display: flex; gap: 5px; }\n        .log-actions button { font-size: 10px; padding: 2px 5px; border-radius: 4px; background: rgba(0,0,0,0.08) !important; border: none !important; color: var(--text-secondary) !important; cursor: pointer; }\n        .log-actions button:hover { background: rgba(0,0,0,0.15) !important; color: var(--text-primary) !important; }\n        \n        .gvh-toast{position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--item-bg);backdrop-filter:blur(5px);border:1px solid var(--item-border);color:var(--text-primary);padding:10px 20px;border-radius:8px;font-size:13px;z-index:10001;box-shadow:0 4px 20px rgba(0,0,0,.1);animation:gvh-slideIn .3s,gvh-fadeOut .3s 2.7s}\n        .gvh-toast.success{border-color:var(--success);color:var(--success);}\n        .gvh-toast.error{border-color:var(--highlight);color:var(--error);}\n        .gvh-toast.info{border-color:var(--highlight);color:var(--highlight);}\n    ";
  document.head.appendChild(_0x10bfdc);
  const _0x951c8b = document.createElement("div");
  _0x951c8b.className = "xianxia-panel collapse";
  _0x951c8b.innerHTML = "\n        <div class=\"panel-header\">\n            <span class=\"panel-icon\">🎮</span>\n            <div class=\"panel-title\">鲸鱼 v" + _0x236277 + "</div>\n            <div class=\"opacity-control\">\n                <label for=\"opacity-slider\">透明度：</label>\n                <input type=\"range\" id=\"opacity-slider\" min=\"0\" max=\"100\" value=\"100\">\n                <span class=\"opacity-value\">100%</span>\n            </div>\n        </div>\n        <div class=\"panel-content\">\n            <!-- 垂直排布的功能菜单 -->\n            <div style=\"padding: 0 10px 10px 10px;\">\n                <!-- 功能模块选择器 - 垂直排布 -->\n                <div style=\"margin-bottom: 10px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 3px;\">\n                    <button class=\"task-btn\" data-module=\"quick-tasks-sub\" style=\"font-size: 10px; padding: 4px 2px;\">🚀 日常</button>\n                    <button class=\"task-btn\" data-module=\"car-sub\" style=\"font-size: 10px; padding: 4px 2px;\">🏎️ 赛车</button>\n                    <button class=\"task-btn\" data-module=\"arena-sub\" style=\"font-size: 10px; padding: 4px 2px;\">⚔️ 竞技场</button>\n                    <button class=\"task-btn\" data-module=\"salt-field-sub\" style=\"font-size: 10px; padding: 4px 2px;\">🏆 盐场战报</button>\n                    <button class=\"task-btn\" data-module=\"consumption-sub\" style=\"font-size: 10px; padding: 4px 2px;\">🎮 消耗活动</button>\n                    <button class=\"task-btn\" data-module=\"weird-tower-sub\" style=\"font-size: 10px; padding: 4px 2px;\">🏯 怪异塔</button>\n                    <button class=\"task-btn\" data-module=\"match-sub\" style=\"font-size: 10px; padding: 4px 2px;\">🤜 切磋</button>\n                    <button class=\"task-btn\" data-module=\"others-sub\" style=\"font-size: 10px; padding: 4px 2px;\">📋 其他</button>\n                </div>\n                \n                <!-- 所有功能模块内容 -->\n                <div id=\"quick-tasks-sub\" class=\"module-content active\">\n                    <div class=\"task-section\" id=\"quick-tasks-module\">\n                        <div class=\"task-header\"><h4>🚀 日常</h4><div class=\"status\">✅ 就绪</div></div>\n                        <div class=\"daily-task-list\"></div>\n                        <div class=\"main-action-buttons\">\n                            <button class=\"task-btn other-btn\" data-task=\"execute-daily-checked\">一键执行勾选</button>\n                            <button class=\"task-btn other-btn\" data-task=\"claim-activity\">领取活跃奖励</button>\n                            <button class=\"task-btn\" data-task=\"one-key-100\">一键100活跃度</button>\n                        </div>\n                    </div>\n                </div>\n                \n                <div id=\"salt-field-sub\" class=\"module-content\">\n                    <div class=\"task-section\" id=\"salt-field-module\">\n                        <div class=\"task-header\"><h4>🏆 盐场战报</h4><div class=\"status\" id=\"salt-field-status\">📊 就绪</div></div>\n                        <div class=\"task-row\">\n                            <label class=\"task-label\" style=\"white-space: nowrap;\">查询日期：</label>\n                            <input type=\"date\" id=\"salt-field-date\" style=\"width: auto;\">\n                            <button class=\"task-btn\" id=\"salt-field-query\">查询战报</button>\n                        </div>\n                        <div id=\"salt-field-results\" style=\"margin-top: 10px; max-height: 60vh; overflow-y: auto;\">\n                            <p style=\"text-align: center; color: var(--text-secondary); font-size: 12px;\">请选择日期并点击查询按钮</p>\n                        </div>\n                        <div style=\"margin-top: 10px; display: none; grid-template-columns: 1fr 1fr; gap: 8px;\" id=\"salt-field-actions\">\n                            <button class=\"task-btn other-btn\" id=\"salt-field-export\">导出战报</button>\n                            <button class=\"task-btn other-btn\" id=\"salt-field-summary\">查看汇总</button>\n                        </div>\n                    </div>\n                </div>\n                \n                <div id=\"car-sub\" class=\"module-content\"><div class=\"task-section\" id=\"car-module\">\n                    <div class=\"task-header\"><h4>🏎️ 赛车</h4><div class=\"status\">✅ 就绪</div></div>\n                    <button class=\"task-btn\" data-task=\"car-query\">查询赛车</button>\n                    <div class=\"car-data-container\"><table class=\"car-data-table\" style=\"display:none;\"><thead><tr><th>车位</th><th>品质</th><th>主要奖励</th><th>状态</th><th>操作</th></tr></thead><tbody></tbody></table></div>\n                </div></div>\n                \n                <!-- 爬塔模块已移至其他模块内部 -->\n                \n                <div id=\"arena-sub\" class=\"module-content\">\n                    <div class=\"task-section\" id=\"arena-module\">\n                        <div class=\"task-header\"><h4>⚔️ 竞技场</h4><div class=\"status\" id=\"arena-status\">✅ 就绪</div></div>\n                        <div class=\"task-row\"><span class=\"task-label\">次数:</span><input type=\"number\" id=\"arena-count\" value=\"3\" min=\"1\" max=\"999\">\n                            <button class=\"task-btn\" data-task=\"arena-start\">随机战斗</button>\n                        </div>\n                    </div>\n\n                    <div class=\"task-section\" style=\"margin-top: 10px;\" id=\"arena-winrate-module\">\n                        <div class=\"task-header\"><h4>📊 胜率测试</h4><div class=\"status\" id=\"winrate-status\">✅ 准备就绪</div></div>\n                        <div class=\"task-row\"><span class=\"task-label\">次数:</span><input type=\"number\" id=\"winrate-fight-count\" value=\"10\" min=\"1\"><button class=\"task-btn\" id=\"start-winrate-btn\" data-task=\"arena-winrate\">获取对手</button></div>\n                        <div id=\"winrate-results\" style=\"margin-top: 10px; padding: 8px; border: 1px solid var(--item-border); border-radius: 6px; background: rgba(0,0,0,0.01); font-size: 12px; line-height: 1.4;\"></div>\n                    </div>\n                </div>\n                 \n                <div id=\"others-sub\" class=\"module-content\">\n                    <!-- 月度任务补齐 -->\n                    <div class=\"task-section\" id=\"monthly-task-module\" style=\"margin-bottom: 15px;\">\n                        <div class=\"task-header\"><h4>📅 月度任务</h4><div class=\"status\" id=\"monthly-status\">✅ 就绪</div></div>\n                        <div class=\"task-row\" style=\"margin-bottom: 8px;\">\n                            <span class=\"task-label\">竞技场</span>\n                            <span id=\"monthly-arena-progress\" style=\"font-size: 12px; color: var(--highlight); font-weight: 600; min-width: 60px;\">0/240</span>\n                            <button class=\"task-btn\" id=\"monthly-arena-btn\" disabled>已完成</button>\n                        </div>\n                        <div class=\"task-row\">\n                            <span class=\"task-label\">普通钓鱼</span>\n                            <span id=\"monthly-fishing-progress\" style=\"font-size: 12px; color: var(--highlight); font-weight: 600; min-width: 60px;\">0/320</span>\n                            <button class=\"task-btn\" id=\"monthly-fishing-btn\">一键补齐</button>\n                        </div>\n                        <div class=\"task-row\" style=\"margin-top: 8px; justify-content: center;\">\n                            <button class=\"task-btn\" id=\"monthly-refresh-btn\" style=\"width: auto; padding: 4px 12px; font-size: 11px;\">🔄 刷新数据</button>\n                        </div>\n                    </div>\n                    \n                    <!-- 俱乐部Boss功能 -->\n                    <div class=\"task-section\" id=\"club-module\" style=\"margin-bottom: 15px;\">\n                        <div class=\"task-header\"><h4>⚔️ 俱乐部Boss</h4><div class=\"status\">✅ 就绪</div></div>\n                        <div class=\"task-row\">\n                            <span class=\"task-label\">挑战次数:</span>\n                            <div class=\"count-selector\">\n                                <button class=\"task-btn\" data-action=\"decrement\">-</button>\n                                <span class=\"count-display\" id=\"club-boss-count\">2</span>\n                                <button class=\"task-btn\" data-action=\"increment\">+</button>\n                            </div>\n                            <button class=\"task-btn\" data-task=\"club-boss\">开始挑战</button>\n                        </div>\n                    </div>\n                    \n                    <!-- 爬塔功能 -->\n                    <div class=\"task-section\" id=\"tower-module\" style=\"margin-bottom: 15px;\">\n                        <div class=\"task-header\"><h4>🧗 爬塔</h4><div class=\"status\">✅ 就绪</div></div>\n                        <button class=\"task-btn\" data-task=\"tower\">开始爬塔</button>\n                    </div>\n                    \n                    <!-- 升级功能 -->\n                    <div class=\"task-section\" id=\"upgrade-module\">\n                        <div class=\"task-header\"><h4>⚡ 升级</h4><div class=\"status\">✅ 就绪</div></div>\n                        <div style=\"display: grid; grid-template-columns: 1fr 1fr; gap: 8px;\">\n                            <button class=\"task-btn other-btn\" data-task=\"starUp\">武将升星</button>\n                            <button class=\"task-btn other-btn\" data-task=\"bookUpgrade\">升级图鉴</button>\n                            <button class=\"task-btn other-btn\" data-task=\"collectionUpgrade\">藏品图鉴升级</button>\n                            <!-- 留空右侧位置，等待添加新功能 -->\n                        </div>\n                    </div>\n                </div>\n                \n                <!-- 保留原有模块结构以确保功能兼容 -->\n                <div id=\"club-sub\" class=\"module-content\"></div>\n                <div id=\"upgrade-sub\" class=\"module-content\"></div>\n                \n\n                \n                <div id=\"consumption-sub\" class=\"module-content\">\n                    <!-- 招募功能 -->\n                    <div class=\"task-section\" id=\"recruit-module\">\n                        <div class=\"task-header\"><h4>👥 招募</h4><div class=\"status\">✅ 就绪</div></div>\n                        <div class=\"task-row\"><span class=\"task-label\">次数:</span><input type=\"number\" id=\"recruit-count\" value=\"10\" min=\"1\"><button class=\"task-btn\" data-task=\"recruit\">开始招募</button></div>\n                    </div>\n                    \n                    <!-- 宝箱功能 -->\n                    <div class=\"task-section\" id=\"box-module\" style=\"margin-top: 15px;\">\n                        <div class=\"task-header\"><h4>📦 宝箱</h4><div class=\"status\">✅ 就绪</div></div>\n                        <div class=\"task-row\"><span class=\"task-label\">木质宝箱</span><input type=\"number\" id=\"box-count-2001\" value=\"10\" min=\"10\" step=\"10\"><button class=\"task-btn\" data-task=\"open-box-2001\">开启宝箱</button></div>\n                        <div class=\"task-row\"><span class=\"task-label\">青铜宝箱</span><input type=\"number\" id=\"box-count-2002\" value=\"10\" min=\"10\" step=\"10\"><button class=\"task-btn\" data-task=\"open-box-2002\">开启宝箱</button></div>\n                        <div class=\"task-row\"><span class=\"task-label\">黄金宝箱</span><input type=\"number\" id=\"box-count-2003\" value=\"10\" min=\"10\" step=\"10\"><button class=\"task-btn\" data-task=\"open-box-2003\">开启宝箱</button></div>\n                        <div class=\"task-row\"><span class=\"task-label\">铂金宝箱</span><input type=\"number\" id=\"box-count-2004\" value=\"10\" min=\"10\" step=\"10\"><button class=\"task-btn\" data-task=\"open-box-2004\">开启宝箱</button></div>\n                    </div>\n                    \n                    <!-- 钓鱼功能 -->\n                    <div class=\"task-section\" id=\"fishing-module\" style=\"margin-top: 15px;\">\n                        <div class=\"task-header\"><h4>🎣 钓鱼</h4><div class=\"status\">✅ 就绪</div></div>\n                        <div class=\"task-row\"><span class=\"task-label\">普通钓鱼</span><input type=\"number\" id=\"fishing-count-1\" value=\"10\" min=\"1\"><button class=\"task-btn\" data-task=\"start-fishing-1\">开始</button></div>\n                        <div class=\"task-row\"><span class=\"task-label\">高级钓鱼</span><input type=\"number\" id=\"fishing-count-2\" value=\"10\" min=\"1\"><button class=\"task-btn\" data-task=\"start-fishing-2\">开始</button></div>\n                    </div>\n                </div>\n                \n                <!-- 怪异塔模块 -->\n                <div id=\"weird-tower-sub\" class=\"module-content\">\n                    <div class=\"task-section\" id=\"weird-tower-module\">\n                        <div class=\"task-header\"><h4>🏯 怪异塔</h4><div class=\"status\" id=\"weird-tower-status\">✅ 就绪</div></div>\n                        \n                        <!-- 爬塔信息 -->\n                        <div style=\"display: flex; justify-content: space-between; align-items: center; padding: 8px; background: rgba(0,0,0,0.02); border-radius: 6px; margin-bottom: 10px;\">\n                            <div style=\"text-align: center; flex: 1;\">\n                                <div style=\"font-size: 11px; color: var(--text-secondary);\">小鱼干</div>\n                                <div id=\"evo-energy-value\" style=\"font-size: 14px; font-weight: 600; color: var(--text-primary);\">--</div>\n                            </div>\n                            <div style=\"text-align: center; flex: 1;\">\n                                <div style=\"font-size: 11px; color: var(--text-secondary);\">当前层数</div>\n                                <div id=\"evo-floor-value\" style=\"font-size: 14px; font-weight: 600; color: var(--text-primary);\">--</div>\n                            </div>\n                            <div style=\"text-align: center; flex: 1;\">\n                                <div style=\"font-size: 11px; color: var(--text-secondary);\">胜/败</div>\n                                <div id=\"evo-winlose-value\" style=\"font-size: 14px; font-weight: 600; color: var(--text-primary);\">0/0</div>\n                            </div>\n                        </div>\n                        \n                        <!-- 阵容选择 -->\n                        <div class=\"task-row\" style=\"margin-bottom: 10px;\">\n                            <span class=\"task-label\">阵容:</span>\n                            <select id=\"evo-team-select\" style=\"flex: 1; padding: 6px 10px; border: 1px solid var(--item-border); border-radius: 6px; background: var(--item-bg); color: var(--text-primary); font-size: 12px;\">\n                                <option value=\"1\">1</option>\n                                <option value=\"2\">2</option>\n                                <option value=\"3\">3</option>\n                                <option value=\"4\">4</option>\n                            </select>\n                            <button class=\"task-btn\" id=\"evo-refresh-btn\" style=\"width: 60px;\">刷新</button>\n                        </div>\n                        \n                        <!-- 当前阵容显示 -->\n                        <div id=\"evo-team-heroes\" style=\"background: rgba(0,0,0,0.02); border-radius: 6px; padding: 8px; margin-bottom: 10px; border: 1px solid var(--item-border);\">\n                            <div style=\"font-size: 11px; color: var(--text-secondary); margin-bottom: 6px; text-align: center;\">当前阵容</div>\n                            <div id=\"evo-heroes-grid\" style=\"display: grid; grid-template-columns: repeat(5, 1fr); gap: 4px;\">\n                                <!-- 英雄信息动态生成 -->\n                            </div>\n                        </div>\n                        \n                        <!-- 开始/停止按钮 -->\n                        <button class=\"task-btn\" id=\"evo-toggle-btn\" style=\"margin-bottom: 10px;\">开始爬塔</button>\n                        \n                        <!-- 购买小鱼干 -->\n                        <div style=\"background: rgba(0,0,0,0.02); border-radius: 6px; padding: 8px; border: 1px solid var(--item-border);\">\n                            <div style=\"font-size: 11px; color: var(--text-secondary); margin-bottom: 6px;\">购买小鱼干</div>\n                            <div class=\"task-row\">\n                                <input type=\"number\" id=\"evo-buy-amount\" value=\"1\" min=\"1\" max=\"999\" style=\"width: 60px; text-align: center;\">\n                                <button class=\"task-btn\" id=\"evo-buy-btn\" style=\"flex: 1;\">购买</button>\n                            </div>\n                        </div>\n                        \n                        <!-- 说明 -->\n                        <div style=\"margin-top: 10px; padding: 8px; background: rgba(49,130,206,0.08); border-radius: 6px; font-size: 11px; color: var(--text-secondary); line-height: 1.5;\">\n                            💡 所有层的第1~9小关都可以直接过，所有第10关需要自己硬实力过。\n                        </div>\n                        \n                        <!-- 俱乐部成员查询 -->\n                        <button class=\"task-btn\" id=\"evo-legion-refresh-btn\" style=\"margin-top: 10px; width: 100%;\">🏢 查询俱乐部成员层数</button>\n                    </div>\n                </div>\n                \n                <!-- 切磋模块 -->\n                <div id=\"match-sub\" class=\"module-content\">\n                    <div class=\"task-section\" id=\"match-module\">\n                        <div class=\"task-header\"><h4>🤜 切磋测试</h4><div class=\"status\" id=\"match-status\">✅ 就绪</div></div>\n                        \n                        <!-- ID输入 -->\n                        <div class=\"task-row\" style=\"margin-bottom: 10px; flex-wrap: nowrap;\">\n                            <span style=\"font-size: 11px; color: var(--text-secondary); flex-shrink: 0;\">ID:</span>\n                            <input type=\"text\" id=\"match-opponent-id\" placeholder=\"ID\" maxlength=\"10\" style=\"flex: 1; min-width: 50px; text-align: center; height: 28px; padding: 2px 4px; box-sizing: border-box;\">\n                            <button class=\"task-btn\" id=\"match-get-id-btn\" style=\"padding: 4px 8px; font-size: 10px; flex-shrink: 0; height: 28px; box-sizing: border-box;\">获取</button>\n                            <span style=\"font-size: 11px; color: var(--text-secondary); flex-shrink: 0;\">次数:</span>\n                            <input type=\"number\" id=\"match-fight-count\" value=\"10\" min=\"1\" max=\"999\" style=\"width: 36px; text-align: center; flex-shrink: 0; height: 28px; padding: 2px 4px; box-sizing: border-box;\">\n                            <button class=\"task-btn\" id=\"match-start-btn\" style=\"padding: 4px 8px; font-size: 10px; flex-shrink: 0; height: 28px; box-sizing: border-box;\">开始</button>\n                        </div>\n                        \n                        <!-- 阵容展示区 -->\n                        <div id=\"match-teams-container\" style=\"display: none; margin-bottom: 10px;\">\n                            <div style=\"display: flex; justify-content: space-around; gap: 10px;\">\n                                <!-- 我方阵容 -->\n                                <div style=\"flex: 1; display: flex; flex-direction: column; align-items: center;\">\n                                    <div id=\"match-my-title\" style=\"font-size: 12px; font-weight: bold; margin-bottom: 6px; color: var(--text-primary);\"></div>\n                                    <div id=\"match-my-heroes\"></div>\n                                    <div id=\"match-my-stats\" style=\"font-size: 10px; color: var(--text-secondary); margin-top: 6px; padding: 4px; background: rgba(0,0,0,0.02); border-radius: 4px; display: none;\"></div>\n                                </div>\n                                <!-- 分隔线 -->\n                                <div style=\"width: 1px; background: var(--item-border); margin: 0 5px;\"></div>\n                                <!-- 对方阵容 -->\n                                <div style=\"flex: 1; display: flex; flex-direction: column; align-items: center;\">\n                                    <div id=\"match-opp-title\" style=\"font-size: 12px; font-weight: bold; margin-bottom: 6px; color: var(--text-primary);\"></div>\n                                    <div id=\"match-opp-heroes\"></div>\n                                    <div id=\"match-opp-stats\" style=\"font-size: 10px; color: var(--text-secondary); margin-top: 6px; padding: 4px; background: rgba(0,0,0,0.02); border-radius: 4px; display: none;\"></div>\n                                </div>\n                            </div>\n                        </div>\n                        \n                        <!-- 结果显示区 -->\n                        <div id=\"match-results\" style=\"padding: 8px; border: 1px solid var(--item-border); border-radius: 6px; background: rgba(0,0,0,0.01); font-size: 12px; line-height: 1.5; max-height: 200px; overflow-y: auto;\">\n                            <div style=\"text-align: center; color: var(--text-secondary);\">等待开始测试...</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ";
  _0x32e300(() => {
    document.body.appendChild(_0x951c8b);
  });
  const _0xf6fec4 = {
    "《三国演义》中，「大意失街亭」的是马谩？": 1,
    "《三国演义》中，「挥泪斩马谩」的是孙权？": 2,
    "《三国演义》中，「火烧博望坡」的是庞统？": 2,
    "《三国演义》中，「火烧藤甲兵」的是徐庶？": 2,
    "《三国演义》中，「千里走单骑」的是赵云？": 2,
    "《三国演义》中，「温酒斩华雄」的是张飞？": 2,
    "《三国演义》中，关羽在长坂坡「七进七出」？": 2,
    "《三国演义》中，刘备三顾茅庐请诸葛亮出山？": 1,
    "《三国演义》中，孙权与曹操「煮酒论英雄」？": 2,
    "《三国演义》中，提出「隆中对」的是诸葛亮？": 1,
    "《三国演义》中，夏侯杰在当阳桥被张飞吓死？": 1,
    "《三国演义》中，张飞在当阳桥厉吼吓退曹军？": 1,
    "《三国演义》中，赵云参与了「三英战吕布」？": 2,
    "《三国演义》中，赵云参与了「桃园三结义」？": 2,
    "《三国演义》中唯一正式上过战场的女子是祝融夫人？": 1,
    "《三国志》中，华雄被孙坚枭首？": 1,
    "《三国志》中记载，「草船借箭」的是诸葛亮？": 2,
    "「闭月」是貂蝉的代称？": 1,
    "「常胜将军」指代赵云？": 1,
    "「赤壁之战」中是黄盖建策火攻？": 1,
    "「官渡之战」中袁绍获胜？": 2,
    "「郭嘉不死卧龙不出」出自三国典故？": 1,
    "「曲有误，周郎顾」表达了周瑜不懂音律？": 2,
    "「三姓家奴」是指飞将吕布？": 1,
    "「士别三日」形容吕蒙笃志力学？": 1,
    "「吴下阿蒙」即指吕蒙？": 1,
    "「小菜一碟」指的是张飞吃豆芽？": 1,
    "「羞花」是貂蝉的代称？": 2,
    "「荀令留香」是指荀或厨艺高超？": 2,
    "「与曹操交手而不死，能败诸葛亮而自活」是指司马懿？": 1,
    "「张辽止啼」指张辽和善，善于哄孩子？": 2,
    "「总角之好」用于形容周瑜与孙策的交情？": 1,
    "拜将封侯的董卓为东汉忠臣？": 2,
    "宝马良驹赤兔的主人不包括吕布？": 2,
    "蔡文姬擅长音律？": 1,
    "曹仁被称为「天人将军」？": 1,
    "曹仁是曹操的儿子？": 2,
    "成语「水淹七军」与庞统有关？": 2,
    "大乔为孙策之妻？": 1,
    "典故「胆大如斗」与姜维有关？": 1,
    "典故「舌战群儒」与周瑜有关？": 2,
    "典故「杏林圣手」出自华佗？": 2,
    "典故「英雄难过美人关」出自「吕布与貂蝉」？": 1,
    "典韦力大过人，被称为「古之恶来」？": 1,
    "典韦善用的武器包括「大双戟」？": 1,
    "典韦是腹隐机谋的知名谋士？": 2,
    "貂蝉的「美人计」用于离间董卓和吕布？": 1,
    "东汉末年国色美女小乔为周瑜之妻？": 1,
    "董卓曾收吕布为义子？": 1,
    "董卓为曹操帐下大将？": 2,
    "甘宁被称为江表之虎臣？": 1,
    "甘宁为魏国名将？": 2,
    "甘宁因「少有气力，好游侠」，被称为「锦帆贼」？": 1,
    "公孙瓒别名「白马将军」？": 1,
    "公孙瓒击败袁绍，致袁绍引火自焚？": 2,
    "公孙瓒因数次「大破黄巾」而威名大震？": 1,
    "郭嘉被史籍称为「才策谋略，世之奇士」？": 1,
    "郭嘉为孙策帐下谋士？": 2,
    "合肥之战中，张辽以少胜多，威震江东？": 1,
    "华佗被称为「外科鼻祖」？": 1,
    "华佗因遭曹操怀疑，下狱被铂问致死？": 1,
    "华佗与董奉、张仲景并称为「建安三神医」？": 1,
    "华雄是奇谋百出的军事战略家？": 2,
    "华雄效力于诸葛亮？": 2,
    "贾诩曾任魏国最高军事长官「太尉」？": 1,
    "贾诩为曹操帐下的主要谋士之一？": 1,
    "贾诩献离间计成功瓦解马超、韩遂？": 1,
    "刘备是三国时期蜀汉「五虎上将」之一？": 2,
    "鲁肃为谋士，效力于蜀国？": 2,
    "民间，张飞被尊为「屠宰业祖师」？": 1,
    "民间游戏「华容道」是以三国为背景的游戏？": 1,
    "明教以张角为教祖？": 1,
    "三国时期，五虎上将之首是黄忠？": 2,
    "三国时期曹操一生未称帝？": 1,
    "三国时期的吴国由曹操建立？": 2,
    "司马懿曾称帝？": 2,
    "司马懿为曹操谋臣？": 1,
    "算无遗策的贾诩为吴国谋士？": 2,
    "孙策曾「一统江东」？": 1,
    "孙策死于「赤壁之战」？": 2,
    "太史慈曾为救孔融单骑突围向刘备求援？": 1,
    "太史慈弦不虚发，被称为「神射手」？": 1,
    "太史慈终效力于刘备？": 2,
    "威振天下的董卓被吕布诛杀？": 1,
    "夏侯渊天生独眼？": 2,
    "夏侯渊与夏侯惇是父子？": 2,
    "徐晃曾「击破关羽，解樊城之围」？": 1,
    "荀或被称为「王佐之才」？": 1,
    "颜良被关羽斩杀？": 1,
    "颜良被孔融评价「勇冠三军」？": 1,
    "颜良在官渡之战中战胜曹操大军？": 2,
    "以胆气著称的吕蒙效力于刘备？": 2,
    "袁绍战胜公孙瓒，统一河北？": 1,
    "张飞与关羽被并称为「万人敌」？": 1,
    "张角为黄巾起义首领之一？": 1,
    "张角因战胜黄巾军而声名大噪？": 2,
    "赵云与关羽、张飞「桃园结义」？": 2,
    "赵云与关羽、张飞并称「燕南三士」？": 1,
    "著名的「官渡之战」由袁绍发起？": 1,
    "甄宓曾为袁绍之妻？": 2,
    "甄宓为魏文帝曹丕妻子？": 1,
    "周瑜逝世后，鲁肃代周瑜职务？": 1,
    "《三国演义》中，「过五关斩六将」的武将是关羽？": 1,
    "《三国演义》中，「火烧藤甲兵」的是诸葛亮？": 1,
    "《三国演义》中，「三气周瑜」的是司马懿？": 2,
    "《三国演义》中，「三英战吕布」发生在虎牢关？": 1,
    "《三国演义》中，「身在曹营心在汉」的是刘备？": 2,
    "《三国演义》中，「桃园三结义」中的桃园是张飞的住所？": 1,
    "《三国演义》中，「万事俱备，只欠东风」说的是赤壁之战？": 1,
    "《三国演义》中，败走麦城的是张飞？": 2,
    "《三国演义》中，被称为「大耳贼」的是曹操？": 2,
    "《三国演义》中，被称为「奸雄」的是司马懿？": 2,
    "《三国演义》中，被称为「诸葛村夫」的是诸葛亮？": 1,
    "《三国演义》中，被追杀时「割须断袍」的是马超？": 2,
    "《三国演义》中，曹操赤壁兵败后是曹仁率军接应的？": 1,
    "《三国演义》中，称号「卧龙」的是诸葛亮？": 1,
    "《三国演义》中，持方天画戟的武将是吕布？": 1,
    "《三国演义》中，持青龙偃月刀的武将是关羽？": 1,
    "《三国演义》中，单刀赴会的是赵云？": 2,
    "《三国演义》中，发明「木牛流马」的是诸葛亮？": 1,
    "《三国演义》中，关羽曾一边「刮骨疗毒」一边与将领饮酒？": 2,
    "《三国演义》中，火烧连营大败蜀军的将领是诸葛亮？": 2,
    "《三国演义》中，吕布称号「关内侯」？": 2,
    "《三国演义》中，庞统的称号是「幼麟」？": 2,
    "《三国演义》中，七擒孟获的是司马懿？": 2,
    "《三国演义》中，为关羽「刮骨疗毒」的医生是张仲景？": 2,
    "《三国演义》中，要为曹操做开颅手术的是华佗？": 1,
    "《三国演义》中，赵云的妻子是马超的姝妹马云禄？": 2,
    "《三国演义》中，赵云在「赤壁之战」中救出阿斗？": 2,
    "《三国演义》中，甄姬曾为袁绍之子袁熙的夫人？": 1,
    "《三国演义》中，中诸葛亮「空城计」的是曹操？": 2,
    "《三国演义》中，诸葛亮的「空城计」是为了阻挡曹操大军？": 2,
    "《三国演义》中，祝融夫人被马超活捉？": 2,
    "《三国演义》中，祝融夫人的丈夫为诸葛亮？": 2,
    "《三国演义》中，祝融夫人擅长的暗器是飞针？": 2,
    "「铜雀春深锁二乔」指的是火乔和小乔吗？": 1,
    "「文姬归汉」指的是蔡文姬从匈奴回到中原吗？": 1,
    "白马义从是赵云的部下？": 2,
    "蔡文姬是被曹操赎回中原的吗？": 1,
    "黄月英是诸葛亮的妻子？": 1,
    "庞统和周瑜并称为「卧龙凤雏」？": 2,
    "庞统是刘备的谋士吗？": 1,
    "三国时期，董卓曾想和孙坚结成亲家？": 1,
    "三国时期，公孙瓒和刘备是师兄弟关系？": 1,
    "三国时期，姜维始终都是蜀国的将领？": 2,
    "三国时期，姜维在诸葛亮病逝后成为蜀国丞相？": 2,
    "三国时期，十八路诸侯讨董后，孙坚率军攻入洛阳？": 1,
    "三国时期，司马懿经常练习「五禽戏」？": 1,
    "三国时期，孙策建立了吴国？": 1,
    "三国时期，孙坚中箭而亡？": 1,
    "三国时期，赵云无一败绩？": 2,
    "《出师表》是诸葛亮写给刘禅的吗？": 1,
    "《三国演义》中，「阿斗」是赵云的儿子？": 2,
    "《三国演义》中，「宁教我负天下人，休教天下人负我」出自刘备之口？": 2,
    "《三国演义》中，「虽未谱金兰，情谊比桃园」说的是赵云？": 1,
    "《三国演义》中，「五虎上将」里没有魏延？": 1,
    "《三国演义》中，「一个愿打一个愿挨」形容的是周瑜与黄忠？": 2,
    "《三国演义》中，被称为「智绝」的是刘备？": 2,
    "《三国演义》中，曹操让士兵们想象柠檬来止渴？": 2,
    "《三国演义》中，关羽，字「云长」？": 1,
    "《三国演义》中，关羽的坐骑是「绝影」？": 2,
    "《三国演义》中，关羽为了离开曹操的麾下，达成了「过五关，斩六将」的壮举。": 1,
    "《三国演义》中，郭嘉遗计定辽东。": 1,
    "《三国演义》中，黄忠在定军山击杀了曹魏将领夏侯渊。": 1,
    "《三国演义》中，刘备，字「孟德」？": 2,
    "《三国演义》中，刘备的专属武器名为「青龙偃月刀」？": 2,
    "《三国演义》中，马超有「花马超」的称呼。": 2,
    "《三国演义》中，呢称为「阿斗」的是刘备？": 2,
    "《三国演义》中，司马昭是司马懿的父亲？": 2,
    "《三国演义》中，死于「落凤坡」的名将是庞统？": 1,
    "《三国演义》中，宣称自己会「梦中杀人」的是曹操？": 1,
    "《三国演义》中，张飞的专属武器名为「丈八蛇矛」？": 1,
    "《三国演义》中，赵云曾孤胆救黄忠。": 1,
    "《三国演义》中，诸葛亮，字「孔明」？": 1,
    "《三国演义》中，诸葛亮发明了「诸葛连弩」？": 1,
    "《三国演义》中，诸葛亮挥泪斩了马超？": 2,
    "「白帝城托孤」指的是刘备将自己的儿子托付给赵云？": 2,
    "「单刀赴会」是诸葛亮邀请关羽前往的。": 2,
    "「扶不起的阿斗」指的是刘禅？": 1,
    "「割须弃袍」发生于曹操和马超交战时。": 2,
    "「黄巾起义」被看做三国时代的开端吗？": 1,
    "「孔明灯」在古代曾用于传递军情？": 1,
    "「乐不思蜀」指的是刘禅？": 1,
    "「衣带诏」事发后曹操派军讨伐刘备？": 1,
    "曹操被评价为「治世之能臣，乱世之奸雄」。": 1,
    "典故妄自菲薄出自诸葛亮的《前出师表》？": 1,
    "郭嘉被曹操称为「吾之子房」。": 2,
    "郭嘉是由贾诩推荐给曹操，并加入了曹操麾下。": 2,
    "汉献帝自愿禅让帝位给丞相曹丕？": 2,
    "华佗使用「麻沸散」是世界医学史上应用全身麻醉进行手术治疗的最早记载？": 1,
    "华佗有自身编撰的医书流传下来。": 2,
    "刘备曾自称「汉中王」？": 1,
    "刘备称帝后不久就亲自率军伐吴？": 1,
    "刘备少年时以织席贩履为生？": 1,
    "挟天子以令诸侯的是曹操？": 1,
    "荀或与同为曹操麾下的荀攸是叔侄关系。": 1,
    "袁术曾经称帝但最后被刘备、朱灵军截道，呕血而死？": 1,
    "在魏蜀吴三国中，吴国是最晚建立的吗？": 1,
    "周泰是受到孙权的招揽加入了吴国。": 2,
    "周泰在归顺孙策之前在江中劫掠为生。": 1,
    "诸葛亮共北伐五次，第五次时病逝于五丈原？": 1,
    "《咸鱼之王》里咸将蔡文姬只能通过开宝箱获取？": 1,
    "《咸鱼之王》里「咸神火把」的持续时间为30分钟？": 1,
    "《咸鱼之王》里「木质宝箱」每开一个可以获取1宝箱积分？": 1,
    "《咸鱼之王》里每位玩家每日可以进行三次「免费点金」？": 1,
    "《咸鱼之王》里鱼缸位于玩家的「客厅」界面内？": 1,
    "《咸鱼之王》里「咸神门票」可以用于参加竞技场战斗？": 1,
    "《咸鱼之王》里「梦魇水晶」无法重生，只能通过无损换将置换到其他咸将身上？": 1,
    "《咸鱼之王》里「龙鱼·八卦」是咸将黄月英的专属鱼灵？": 2,
    "《咸鱼之王》里「万能红将碎片」可以开出蔡文姬的碎片吗？": 2,
    "《咸鱼之王》里好友的「客厅」内会随机刷出钻石、白银、普通三种盐罐？": 2,
    "《咸鱼之王》里「招募令」可以招募到咸将关银屏？": 2,
    "《咸鱼之王》里有「万能紫将碎片」？": 2,
    "《咸鱼之王》里咸将的专属鱼都有「龙鱼」前缀。": 1,
    "《咸鱼之王》里「青铜宝箱」每次开启可以获取到10宝箱积分？": 1,
    "《咸鱼之王》里咸将分为四个阵营？": 1,
    "《咸鱼之王》里咸将貂蝉是「群雄」阵营的。": 1,
    "《咸鱼之王》里咸将貂蝉的主动技能可以减少敌人怒气值。": 1,
    "《咸鱼之王》里「灯神挑战」每天可以免费获取3个「扫荡魔毯」。": 1,
    "《咸鱼之王》里同种类盐罐同时只能占据一个。": 1,
    "《咸鱼之王》里有「白银宝箱」。": 2,
    "《咸鱼之王》中升级俱乐部「高级科技」时需要先点满对应职业的「基础科技」。": 1,
    "《咸鱼之王》里咸将诸葛亮的主动技能「星落」有控制效果。": 2,
    "《咸鱼之王》里咸将黄月英的职业是法师。": 2,
    "《咸鱼之王》里开启「木质宝箱」有概率获取金砖。": 2,
    "《咸鱼之王》里咸将姜维可以同时攻击全部敌人。": 2,
    "《咸鱼之王》里只要咸将貂蝉在场，吕布就不会阵亡。": 2,
    "《咸鱼之王》里鱼灵「惊涛」无法将受到的持续伤害效果分5回合扣除。": 1,
    "《咸鱼之王》里开启「钻石宝箱」时，不会获得宝箱积分。": 1,
    "《咸鱼之王》「捕获」玩法中，每进行十次高级捕获必出稀有鱼灵。": 1,
    "《咸鱼之王》「盐场争霸」中，可以通过消耗20金砖来加速行军。": 1,
    "《咸鱼之王》里咸将星级在达到21星时，即可获得「机甲皮肤」。": 1,
    "《咸鱼之王》里宝箱积分达1000分时，可一键领取累计积分奖励宝箱。": 1,
    "《咸鱼之王》里俱乐部团长连续7天未登录，团长职位将自动转让其他成员。": 1,
    "《咸鱼之王》里「玩具」每周有一次免费无损转换的机会。": 1,
    "《咸鱼之王》「灯神挑战」内，每个阵营中有15层可挑战的关卡。": 1,
    "《咸鱼之王》「咸神竞技场」中，每日可以免费进行3次挑战。": 1,
    "《咸鱼之王》重复攻打击杀过的「俱乐部BOSS」，无法再次获得排名奖励。": 1,
    "《咸鱼之王》已附身的鱼灵仍会在「鱼缸」中显示。": 2,
    "《咸鱼之王》「普通鱼竿」免费捕获的刷新时间为6个小时。": 2,
    "《咸鱼之王》「每日咸王考验」中，共有4个不同BOSS。": 2,
    "「孔融让梨」的故事讲的是孔融小小年纪便有谦让的美德？": 1,
    "成语「初出茅庐」出自《三国演义》？": 1,
    "「三家归晋」结束了汉末三国时期以来的割据混战的局面？": 1,
    "《三国演义》中，「虎女焉能配犬子」一句中，虎女指的是关羽之女。": 1,
    "「莫作孔明择妇，正得阿承丑女」说的是诸葛亮的择偶标准。": 1,
    "《三国演义》中，许褚跟许攸是兄弟。": 2,
    "俗语「赔了夫人又折兵」中的夫人是小乔。": 2,
    "「赔了夫人又折兵」的上半句为「孔明妙计安天下」。": 2,
    "四大美女中「落雁」说的是被匈奴所掳的蔡文姬。": 2,
    "「大丈夫何患无妻」一典故出自《三国演义》中的赵云之口？": 1,
    "《咸鱼之王》中，招募界面的NPC名字是「猫婆婆」？": 1,
    "《咸鱼之王》中，「每日任务」重置时间为每日0点？": 1,
    "《咸鱼之王》中，「每日任务」重置时间为每日8点？": 2,
    "《咸鱼之王》中，每位玩家每日有一次免费刷新「黑市」的机会？": 1,
    "《咸鱼之王》中，每位玩家每日有三次免费刷新「黑市」的机会？": 2,
    "《咸鱼之王》中，每消耗20个「普通鱼竿」可以免费获取1个「黄金鱼竿」？": 1,
    "《咸鱼之王》中，每消耗10个「普通鱼竿」可以免费获取1个「黄金鱼竿」？": 2,
    "《咸鱼之王》中，副本「每日咸王考验」累计伤害奖励上限为1亿？": 2,
    "《咸鱼之王》中，副本「每日咸王考验」累计伤害奖励上限为5亿？": 1,
    "《咸鱼之王》中，副本「每日咸王考验」累计伤害奖励上限为10亿？": 2,
    "《咸鱼之王》中，道具「珍珠」可以在「神秘商店」使用？": 1,
    "《咸鱼之王》中，鱼灵「黄金锦鲤」可在「神秘商店」中消耗珍珠兑换？": 1,
    "《咸鱼之王》中，玩家每次占领「盐罐」会消耗10点「能量」": 1,
    "《咸鱼之王》中，玩家每次占领「盐罐」会消耗1点「能量」": 2,
    "《咸鱼之王》中，一个「俱乐部」最多容纳30位成员？": 1,
    "《咸鱼之王》中，1个「俱乐部」最多有2位副团长？": 1,
    "《咸鱼之王》中，玩家可在「图鉴」内可查看满级咸将信息？": 1,
    "《咸鱼之王》中，「月度活动」每月刷新1次？": 1,
    "《咸鱼之王》中，「每日任务」中日活跃积分达到80的奖励为钻石宝箱？": 2,
    "《咸鱼之王》中，「每日任务」中日活跃积分达到100的奖励为招募令？": 1,
    "《咸鱼之王》中，游戏内有金色鱼灵「黄金鲸鱼」？": 2,
    "《咸鱼之王》中，玩家可通过「咸将塔」玩法获取「珍珠」道具？": 2,
    "《咸鱼之王》中，月度「捕获达标」活动达成相应目标后可以获得珍珠。": 1,
    "《咸鱼之王》中，月度「捕获达标」活动达成相应目标后可以获得万能红将碎片。": 2,
    "《咸鱼之王》中，咸将的四个阵营分别为魏、蜀、吴、群雄。": 1,
    "《咸鱼之王》中，除了咸将外，其余的怪物都没有职业。": 1,
    "《咸鱼之王》中，「灯神挑战」不同的阵营挑战内，只能上阵对应阵营的咸将。": 1,
    "《咸鱼之王》中，精铁可以直接用金砖购买。": 1,
    "《咸鱼之王》中，进阶石可以直接使用金砖购买。": 1,
    "《咸鱼之王》中，「招募」可以有概率获得红色武将。": 1,
    "《咸鱼之王》中，贾诩为吴国阵营咸将？": 2,
    "《咸鱼之王》中，每日可以免费招募一次。": 1,
    "《咸鱼之王》中，「每日咸王考验」可以挑战多次。": 1,
    "《咸鱼之王》中，蔡文姬是红色武将。": 2,
    "《咸鱼之王》中，「咸王梦境」为每日开放。": 2,
    "《咸鱼之王》中，「咸王梦境」周二会开放。": 2,
    "《咸鱼之王》中，姜维攻击后可以获得护盾。": 2,
    "《咸鱼之王》中，俱乐部人数没有上限。": 2,
    "《三国演义》中，「怒打督邮」的是张飞。": 1,
    "祝融夫人是《三国演义》虚构人物。": 1,
    "《三国演义》中，「拔矢啖睛」的是夏侯惇。": 1,
    "《三国演义》中，「拔矢啖睛」的是夏侯渊。": 2,
    "《三国演义》中，「曹操献刀」本是要刺杀董卓。": 1,
    "《三国演义》中，许攸被许褚所杀。": 1,
    "《咸鱼之王》中，捕获一次最多可以使用10个鱼竿。": 1,
    "《咸鱼之王》中，捕获一次最多可以使用10个鱼竿": 1,
    "《咸鱼之王》中，「咸鱼大冲关」每周任务是周一0点重置。": 1,
    "《咸鱼之王》中，「咸鱼大冲关」每周任务是周一8点重置。": 2,
    "《咸鱼之王》中，挂机奖励加钟，最多可以有5名好友助力。": 2,
    "《咸鱼之王》中，挂机奖励加钟，最多可以有4名好友助力。": 1,
    "《咸鱼之王》中，每日6点重置点金次数。": 2,
    "《咸鱼之王》中，「俱乐部」每日签到可以获得「军团币」？": 1,
    "《咸鱼之王》中，「黑市」每日0点自动刷新商品？": 1,
    "《咸鱼之王》中，「黑市」每日8点自动刷新商品？": 2,
    "《咸鱼之王》中，可以使用「珍珠」兑换「万能红将碎片」？": 1,
    "《咸鱼之王》中，「咸神门票」可以通过「金砖」进行购买？": 1,
    "《咸鱼之王》中，「灯神挑战」内分为四个阵营？": 1,
    "《咸鱼之王》中，玩家的「勋章墙」内最多展示4个「徽章」？": 1,
    "《咸鱼之王》中，「主公」达到4001级开启「玩具」玩法？": 1,
    "《咸鱼之王》中，「玩具」需要花费「扳手」进行激活？": 1,
    "《咸鱼之王》中，「咸王梦境」每成功通过十层可以遇到一次梦境商人？": 1,
    "《咸鱼之王》中，挑战「咸将塔」需要花费「小鱼干」？": 1,
    "《咸鱼之王》中，「小鱼干」可以通过「金砖」进行购买？": 1,
    "《咸鱼之王》中，「招募」无法获得咸将吕玲绮。": 1,
    "《咸鱼之王》中，「灯神挑战」的奖励包括「珍珠」？": 2,
    "《咸鱼之王》中，「咸王梦境」中的梦境调料「普通盐瓶」可以恢复咸将怒气？": 2,
    "《咸鱼之王》中，进阶石可以通过参与「咸将塔」玩法获取。": 1,
    "《咸鱼之王》中，「扳手」在通关主线7001关后可以通过挂机奖励获得。": 1,
    "《咸鱼之王》中，「军团币」可以用于升级「俱乐部科技」？": 1,
    "《咸鱼之王》中，装备最多可以开到5个淬炼孔位？": 1,
    "《咸鱼之王》中，「青铜火把」会为主线战斗中上阵的咸将增加5%攻击？": 1,
    "《咸鱼之王》中，「木材火把」会使主线战斗以1.5倍速进行？": 1,
    "《咸鱼之王》中，道具「金砖」可以用于在「黑市」中购买物品？": 1,
    "《咸鱼之王》中，装备中的坐骑会为咸将提供防御加成？": 2,
    "《咸鱼之王》中，攻打「俱乐部BOSS」后可以获得皮肤币奖励？": 2,
    "《咸鱼之王》中，咸将皮肤可以使用「军团币」来进行兑换？": 2,
    "《咸鱼之王》中，咸将的等级上限为2000级？": 2,
    "《咸鱼之王》中，咸将「张星彩」属于群雄阵营？": 2,
    "《咸鱼之王》中，咸将「颜良」属于魏国阵营？": 2,
    "《咸鱼之王》中，「招募」无法获得咸将关银屏。": 1,
    "《咸鱼之王》俱乐部中，每日最多可以攻打4次「俱乐部BOSS」。": 1,
    "《咸鱼之王》中，俱乐部团长无法退出俱乐部。": 1,
    "《咸鱼之王》中，主动退出俱乐部12小时后才可以加入新的俱乐部。": 1,
    "《咸鱼之王》中，装备中的铠甲会为咸将提供血量加成？": 1,
    "《咸鱼之王》中，红色咸将的觉醒技能需要咸将达到一定星级才能解锁。": 1,
    "《咸鱼之王》中，布阵时，前排可上阵2名咸将，后排可上阵3名咸将。": 1,
    "《咸鱼之王》竞技场中，未对防守阵容进行设置时，将默认使用主线阵容。": 1,
    "《咸鱼之王》中，「邮件」最长保存30天。": 1,
    "《咸鱼之王》中，「邮件」最长保存10天。": 2,
    "《咸鱼之王》中，「淬炼」可能出现的属性共21种。": 1,
    "《咸鱼之王》中，「俱乐部BOSS」被击败后会按照玩家造成的总伤害排名发放排名奖励。": 1,
    "《咸鱼之王》中，晚上23时仍可以进行竞技场战斗。": 2,
    "《咸鱼之王》中，开启「省电模式」将停止主线关卡战斗。": 2,
    "鲁肃，字「子敬」。": 1,
    "蔡文姬，本名蔡琰？": 1,
    "「池中之物」一词出自《三国志》中周瑜之口？": 1,
    "《咸鱼之王》中，装备中的头冠会为咸将提供防御加成？": 1,
    "《咸鱼之王》中，「咸神火把」会为主线战斗中上阵的咸将增加15%攻击？": 1,
    "《咸鱼之王》中，「咸神火把」与「青铜火把」均会使主线战斗以2倍速进行？": 1,
    "刘表是刘备的次子？": 2,
    "「望梅止渴」是周瑜带队行军时发生的故事？": 2,
    "《咸鱼之王》中，「扳手」可以在「黑市」中花费「金砖」获取？": 1,
    "《咸鱼之王》中，在「盐锭商店」中可以花费「盐锭」兑换到「皮肤币」？": 1,
    "《咸鱼之王》中，月赛助威截止后，未使用的「拍手器」会被回收？": 1,
    "《咸鱼之王》中，「咸鱼大冲关」单局累计答对10题可获取10个「招募令」？": 1,
    "《咸鱼之王》中，通行证「竞技经验」不需要邮件领取，直接发放给玩家？": 1,
    "《咸鱼之王》中，「俱乐部排位赛」的段位一共有7种？": 1,
    "《咸鱼之王》中，「阵营光环」上阵任意3个同阵营的武将就能生效。": 2,
    "《咸鱼之王》中，月度活动「捕获达标」达标奖励包含道具「金砖」？": 1,
    "《咸鱼之王》中，俱乐部的「团长」和「副团长」可以选择「排位赛」出战成员？": 1,
    "《咸鱼之王》中，玩家每日可在「灯神挑战」中挑战10次？": 1,
    "《咸鱼之王》中，咸将「曹仁」的职业是「肉盾」？": 1,
    "《咸鱼之王》中，「彩玉」可以花费「金币」进行兑换？": 2,
    "《咸鱼之王》中，在「助威商店」中可以花费「助威币」兑换到「万能红将碎片」？": 2,
    "《咸鱼之王》中，月度活动「咸神争霸」达标奖励包含道具「珍珠」？": 2,
    "《咸鱼之王》中，在「黑市」可以通过「金砖」兑换「钻石宝箱」？": 2,
    "《咸鱼之王》中，咸将「蔡文姬」属于魏国阵营？": 1,
    "《咸鱼之王》中，可以通过「万能红将碎片」开出「贾诩碎片」？": 1,
    "《咸鱼之王》中，「咸王梦境」玩法在通关1000关后开放？": 1,
    "《咸鱼之王》中，「灯神挑战」中，每阵营前五层的首通奖励均为精铁和进阶石？": 1,
    "《咸鱼之王》中，「咸鱼大冲关」内累计答对30道题目可获得「金鱼公主」皮肤？": 1,
    "《咸鱼之王》中，「咸鱼大冲关」内完成20次大冲关任务可获得「马头咸鱼」皮肤？": 1,
    "《咸鱼之王》中，「金币礼包」可以通过「捕获」玩法获取？": 1,
    "《咸鱼之王》中，可以通过「图鉴」查看咸将满级后的技能效果？": 1,
    "《咸鱼之王》中，攻打「每日咸王考验」内的「癫癫蛙」BOSS可获得招募令。": 1,
    "《咸鱼之王》中，可以通过「万能橙将碎片」开出「蔡文姬碎片」？": 2,
    "《咸鱼之王》中，通过「高级捕获」可以获得黄金鱼灵「利刃」？": 2,
    "《咸鱼之王》中，咸将星级达到30级，可以觉醒第二技能？": 2,
    "《咸鱼之王》中，咸将「黄月英」的职业为「法师」？": 2,
    "《咸鱼之王》中，咸将「孙策」的职业为「战士」？": 2,
    "《咸鱼之王》中，开启「晶石福袋」可以获得「进阶石」？": 2,
    "《三国演义》中，「大丈夫生于乱世，当带三尺剑立不世之功」，是太史慈所说。": 1,
    "《咸鱼之王》中，「咸将塔」每通关第10层，会给10个「小鱼干」。": 1,
    "《咸鱼之王》中，「每日咸王考验」有10层伤害达标奖励。": 1,
    "《咸鱼之王》中，「巅峰竞技场」前100名，可登上「巅峰王者榜」。": 1,
    "《咸鱼之王》中，激活「终身卡」，可以使挂机时间增加2小时。": 1,
    "《咸鱼之王》中，激活「月卡」，可以使挂机时间增加2小时。": 1,
    "《咸鱼之王》中，「咸神竞技场」内共分为六个段位。": 1,
    "《咸鱼之王》中，「灯神挑战」每日0点刷新挑战次数。": 1,
    "《咸鱼之王》中，若「签到」当日登录未领取，后续登录时可以一并领取。": 1,
    "《咸鱼之王》中，激活「终身卡」，挂机金币收益增加10%。": 1,
    "《咸鱼之王》中，激活「周卡」，挂机金币收益增加10%。": 1,
    "《咸鱼之王》中，「签到」领取30次奖励内容后，奖励内容会进行刷新。": 1,
    "《咸鱼之王》中，激活「月卡」，挂机金币收益增加10%。": 2,
    "《咸鱼之王》中，「竞技场」每周结算时，巅峰场玩家均可获得「巅峰王者徽章」。": 2,
    "《咸鱼之王》中，「周卡」激活，可以使挂机时间增加2小时。": 2,
    "《咸鱼之王》中，咸将装备的等级无法超「主公阿咸」的等级。": 1,
    "《咸鱼之王》中，开启「金币礼包」获取的金币与挂机奖励有关。": 1,
    "《咸鱼之王》中，挑战「咸将塔」消耗的小鱼干在通过当前塔后会获得10个。": 1,
    "《咸鱼之王》中，「梦魇水晶」的属性需要佩戴咸将达到701级才会生效。": 1,
    "《咸鱼之王》中，咸将达到700级并进阶后可以激活自身全部基础技能。": 1
  };
  const _0x4ede5b = {
    showtip(_0x151544, _0x35dd11 = "info") {
      {
        const _0x1c43cd = document.createElement("div");
        _0x1c43cd.className = "gvh-toast " + _0x35dd11;
        _0x1c43cd.innerText = _0x151544;
        document.body.appendChild(_0x1c43cd);
        setTimeout(() => _0x1c43cd.remove(), 3000);
      }
    },
    async sendCommand(_0x44e716, _0x5635c3 = {}) {
      {
        if (!window.ws?.["sendAsync"]) {
          {
            this.showtip("错误：WebSocket连接不可用", "error");
            throw new Error("WebSocket connection not available");
          }
        }
        try {
          return await window.ws.sendAsync({
            ack: 0,
            cmd: _0x44e716,
            params: _0x5635c3,
            seq: Date.now(),
            time: Date.now()
          });
        } catch (_0x5d87cd) {
          {
            this.showtip("命令发送失败: " + _0x5d87cd.message, "error");
            throw _0x5d87cd;
          }
        }
      }
    },
    delay: _0x42e16d => new Promise(_0x245bc6 => setTimeout(_0x245bc6, _0x42e16d * 1000)),
    getFormatDate: _0xfc24dc => {
      {
        const _0x5e032a = new Date(_0xfc24dc);
        _0x5e032a.setHours(_0x5e032a.getHours() + 8);
        return _0x5e032a;
      }
    }
  };
  const _0x519c6a = {
    "101": "司马懿",
    "102": "郭嘉",
    "103": "关羽",
    "104": "诸葛亮",
    "105": "周瑜",
    "106": "太史慈",
    "107": "吕布",
    "108": "华佗",
    "109": "甄姬",
    "110": "黄月英",
    "111": "孙策",
    "112": "贾诩",
    "113": "曹仁",
    "114": "姜维",
    "115": "孙坚",
    "116": "公孙瓒",
    "117": "典韦",
    "118": "赵云",
    "119": "大乔",
    "120": "张角",
    "201": "徐晃",
    "202": "荀彧",
    "203": "橙典韦",
    "204": "张飞",
    "205": "橙赵云",
    "206": "庞统",
    "207": "鲁肃",
    "208": "陆逊",
    "209": "甘宁",
    "210": "貂蝉",
    "211": "董卓",
    "212": "橙张角",
    "213": "张辽",
    "214": "夏侯惇",
    "215": "许诸",
    "216": "夏侯渊",
    "217": "魏延",
    "218": "黄忠",
    "219": "马超",
    "220": "马岱",
    "221": "吕蒙",
    "222": "黄盖",
    "223": "蔡文姬",
    "224": "小乔",
    "225": "袁绍",
    "226": "华雄",
    "227": "颜良",
    "228": "文丑",
    "301": "周泰",
    "302": "许攸",
    "303": "于禁",
    "304": "张星彩",
    "305": "关银屏",
    "306": "关平",
    "307": "程普",
    "308": "张昭",
    "309": "陆绩",
    "310": "吕玖绮",
    "311": "潘凤",
    "312": "邢道荣",
    "313": "祝融夫人",
    "314": "孟获"
  };
  const _0x51217f = {
    isRunning: false,
    selectedTeam: 1,
    teamInfo: {},
    teamCount: 4,
    towerInfo: null,
    winCount: 0,
    loseCount: 0,
    hasSwitchedTeam: false
  };
  const _0x5d6473 = {
    heroMap: _0x519c6a,
    state: _0x51217f,
    init() {
      {
        const _0x394294 = document.getElementById("evo-toggle-btn");
        const _0x400543 = document.getElementById("evo-refresh-btn");
        const _0x338f1a = document.getElementById("evo-buy-btn");
        const _0x4a0590 = document.getElementById("evo-team-select");
        const _0x2e4d81 = document.getElementById("evo-legion-refresh-btn");
        if (_0x394294) {
          _0x394294.addEventListener("click", () => this.toggleClimb());
        }
        if (_0x400543) {
          _0x400543.addEventListener("click", () => this.refreshTeams());
        }
        if (_0x338f1a) {
          _0x338f1a.addEventListener("click", () => this.buyEnergy());
        }
        if (_0x2e4d81) {
          _0x2e4d81.addEventListener("click", () => this.refreshLegionMembers());
        }
        _0x4a0590 && _0x4a0590.addEventListener("change", _0x8f712a => {
          {
            this.state.selectedTeam = parseInt(_0x8f712a.target.value);
            this.state.hasSwitchedTeam = false;
            this.updateTeamHeroesDisplay();
          }
        });
      }
    },
    async getTowerInfo() {
      {
        try {
          {
            const _0xe80c1b = await _0x4ede5b.sendCommand("evotower_getinfo", {});
            if (!_0xe80c1b?.["_rawData"]?.["evoTower"]) {
              return null;
            }
            const _0x1afd13 = _0xe80c1b._rawData.evoTower.energy;
            const _0x137eb1 = _0xe80c1b._rawData.evoTower.towerId;
            let _0x264cde;
            if (_0x137eb1 === 0) {
              _0x264cde = "1-1";
            } else {
              {
                const _0x5ee8f3 = Math.floor(_0x137eb1 / 10) + 1;
                const _0x162cea = _0x137eb1 % 10 + 1;
                _0x264cde = _0x5ee8f3 + "-" + _0x162cea;
              }
            }
            const _0xf2953f = {
              energy: _0x1afd13,
              rawTowerId: _0x137eb1,
              displayFloor: _0x264cde
            };
            this.state.towerInfo = _0xf2953f;
            this.updateTowerInfoDisplay();
            return this.state.towerInfo;
          }
        } catch (_0x321291) {
          {
            console.error("获取爬塔信息失败:", _0x321291);
            return null;
          }
        }
      }
    },
    async getTeamInfo() {
      {
        try {
          {
            const _0x19c9a3 = await _0x4ede5b.sendCommand("presetteam_getinfo", {});
            if (!_0x19c9a3?.["_rawData"]?.["presetTeamInfo"]?.["presetTeamInfo"]) {
              return;
            }
            const _0x12147b = _0x19c9a3._rawData.presetTeamInfo.presetTeamInfo;
            this.state.teamCount = Object.keys(_0x12147b).length;
            this.state.teamInfo = {};
            for (let _0x380462 = 0; _0x380462 < this.state.teamCount; _0x380462++) {
              {
                const _0x5d9833 = (_0x380462 + 1).toString();
                const _0x36049b = _0x12147b[_0x5d9833];
                if (_0x36049b?.["teamInfo"]) {
                  {
                    const _0x36e1e2 = {
                      heroes: [],
                      weaponId: _0x36049b.weapon?.["weaponId"] || null
                    };
                    for (let _0x2eae9e = 0; _0x2eae9e < Object.keys(_0x36049b.teamInfo).length; _0x2eae9e++) {
                      {
                        const _0x25ef3b = _0x2eae9e.toString();
                        if (_0x36049b.teamInfo[_0x25ef3b]?.["heroId"]) {
                          {
                            const _0x10ab4a = {
                              id: _0x36049b.teamInfo[_0x25ef3b].heroId,
                              level: _0x36049b.teamInfo[_0x25ef3b].level || 1
                            };
                            _0x36e1e2.heroes.push(_0x10ab4a);
                          }
                        }
                      }
                    }
                    this.state.teamInfo[_0x380462 + 1] = _0x36e1e2;
                  }
                }
              }
            }
            this.updateTeamDropdown();
            this.updateTeamHeroesDisplay();
          }
        } catch (_0x3471a7) {
          console.error("获取队伍信息失败:", _0x3471a7);
        }
      }
    },
    updateTowerInfoDisplay() {
      {
        const _0x2c4d25 = document.getElementById("evo-energy-value");
        const _0x117677 = document.getElementById("evo-floor-value");
        if (this.state.towerInfo) {
          {
            if (_0x2c4d25) {
              _0x2c4d25.textContent = this.state.towerInfo.energy;
            }
            if (_0x117677) {
              _0x117677.textContent = this.state.towerInfo.displayFloor;
            }
          }
        }
      }
    },
    updateTeamDropdown() {
      {
        const _0x3e1874 = document.getElementById("evo-team-select");
        if (!_0x3e1874) {
          return;
        }
        _0x3e1874.innerHTML = "";
        for (let _0x45d496 = 1; _0x45d496 <= this.state.teamCount; _0x45d496++) {
          {
            const _0x23952c = document.createElement("option");
            _0x23952c.value = _0x45d496;
            _0x23952c.textContent = _0x45d496;
            if (_0x45d496 === this.state.selectedTeam) {
              _0x23952c.selected = true;
            }
            _0x3e1874.appendChild(_0x23952c);
          }
        }
      }
    },
    updateTeamHeroesDisplay() {
      {
        const _0xde1ea0 = document.getElementById("evo-heroes-grid");
        if (!_0xde1ea0) {
          return;
        }
        _0xde1ea0.innerHTML = "";
        const _0x341386 = this.state.teamInfo[this.state.selectedTeam];
        if (!_0x341386?.["heroes"]?.["length"]) {
          {
            _0xde1ea0.innerHTML = "<div style=\"grid-column: 1/-1; text-align: center; color: var(--text-secondary); font-size: 11px;\">暂无阵容数据</div>";
            return;
          }
        }
        _0x341386.heroes.forEach(_0x3cad85 => {
          {
            const _0x98ce16 = this.heroMap[_0x3cad85.id.toString()] || "未知(" + _0x3cad85.id + ")";
            const _0x481ce2 = document.createElement("div");
            _0x481ce2.style.cssText = "text-align: center; padding: 4px; background: var(--item-bg); border: 1px solid var(--item-border); border-radius: 4px;";
            _0x481ce2.innerHTML = "<div style=\"font-size: 10px; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\" title=\"" + _0x98ce16 + "\">" + _0x98ce16 + "</div><div style=\"font-size: 9px; color: var(--text-secondary);\">Lv." + _0x3cad85.level + "</div>";
            _0xde1ea0.appendChild(_0x481ce2);
          }
        });
      }
    },
    updateWinLoseDisplay() {
      {
        const _0x4c068d = document.getElementById("evo-winlose-value");
        if (_0x4c068d) {
          _0x4c068d.textContent = this.state.winCount + "/" + this.state.loseCount;
        }
      }
    },
    updateStatus(_0x32e193) {
      {
        const _0x4cb6ab = document.getElementById("weird-tower-status");
        if (_0x4cb6ab) {
          _0x4cb6ab.textContent = _0x32e193;
        }
      }
    },
    refreshTeams() {
      {
        if (!window.ws || typeof window.ws.sendAsync !== "function") {
          {
            _0x4ede5b.showtip("等待连接就绪...", "error");
            return;
          }
        }
        this.getTeamInfo();
        this.getTowerInfo();
        _0x4ede5b.showtip("已刷新", "success");
      }
    },
    async switchTeam(_0x537eb3) {
      {
        try {
          {
            await _0x4ede5b.sendCommand("presetteam_getinfo", {});
            const _0x562d0c = {
              teamId: _0x537eb3
            };
            await _0x4ede5b.sendCommand("presetteam_saveteam", _0x562d0c);
            await _0x4ede5b.sendCommand("presetteam_getinfo", {});
            return true;
          }
        } catch (_0x4d750f) {
          {
            console.error("切换阵容失败:", _0x4d750f);
            return false;
          }
        }
      }
    },
    async toggleClimb() {
      {
        const _0x3b4471 = document.getElementById("evo-toggle-btn");
        if (!_0x3b4471) {
          return;
        }
        if (!window.ws || typeof window.ws.sendAsync !== "function") {
          {
            this.updateStatus("等待连接...");
            _0x4ede5b.showtip("等待连接就绪...", "error");
            return;
          }
        }
        this.state.isRunning = !this.state.isRunning;
        if (this.state.isRunning) {
          {
            _0x3b4471.textContent = "停止爬塔";
            _0x3b4471.classList.add("stop");
            this.updateStatus("运行中...");
            if (!this.state.hasSwitchedTeam) {
              {
                this.updateStatus("切换阵容...");
                const _0x3b88f6 = await this.switchTeam(this.state.selectedTeam);
                if (!_0x3b88f6) {
                  {
                    this.stopClimb("切换阵容失败");
                    return;
                  }
                }
                this.state.hasSwitchedTeam = true;
              }
            }
            await this.getTowerInfo();
            if (this.state.towerInfo?.["energy"] > 0) {
              {
                this.updateStatus("运行中");
                this.climbTower();
              }
            } else {
              {
                this.stopClimb("小鱼干不足");
              }
            }
          }
        } else {
          this.stopClimb("已停止");
        }
      }
    },
    stopClimb(_0x3794d0) {
      {
        this.state.isRunning = false;
        const _0x4da06b = document.getElementById("evo-toggle-btn");
        if (_0x4da06b) {
          {
            _0x4da06b.textContent = "开始爬塔";
            _0x4da06b.classList.remove("stop");
          }
        }
        this.updateStatus(_0x3794d0 || "已停止");
      }
    },
    async climbTower() {
      {
        if (!this.state.isRunning) {
          return;
        }
        try {
          {
            await _0x4ede5b.sendCommand("evotower_readyfight", {});
            const _0x367041 = {
              battleNum: 1,
              winNum: 1
            };
            const _0x4a829f = await _0x4ede5b.sendCommand("evotower_fight", _0x367041);
            if (!_0x4a829f?.["_rawData"]?.["evoTower"]) {
              {
                this.state.loseCount++;
                this.updateWinLoseDisplay();
                return;
              }
            }
            this.state.towerInfo.energy = _0x4a829f._rawData.evoTower.energy;
            this.updateTowerInfoDisplay();
            const _0x12e9c6 = _0x4a829f._rawData.winList?.[0] === true;
            if (_0x12e9c6) {
              {
                this.state.winCount++;
              }
            } else {
              this.state.loseCount++;
            }
            this.updateWinLoseDisplay();
            const _0x43a3db = await _0x4ede5b.sendCommand("evotower_getinfo", {});
            if (_0x43a3db?.["_rawData"]?.["evoTower"]) {
              {
                const _0xc41bd5 = _0x43a3db._rawData.evoTower.towerId;
                const _0x211a8b = Math.floor(_0xc41bd5 / 10) + 1;
                const _0x894c8a = _0xc41bd5 % 10 + 1;
                this.state.towerInfo.rawTowerId = _0xc41bd5;
                this.state.towerInfo.displayFloor = _0xc41bd5 === 0 ? "1-1" : _0x211a8b + "-" + _0x894c8a;
                this.state.towerInfo.energy = _0x43a3db._rawData.evoTower.energy;
                this.updateTowerInfoDisplay();
                if (_0x12e9c6 && _0x894c8a === 1) {
                  {
                    await _0x4ede5b.sendCommand("evotower_claimreward", {});
                  }
                }
              }
            }
            if (this.state.towerInfo.energy > 0 && this.state.isRunning) {
              setTimeout(() => this.climbTower(), 400);
            } else {
              {
                this.stopClimb(this.state.towerInfo.energy <= 0 ? "小鱼干耗尽" : "已停止");
              }
            }
          }
        } catch (_0x5281b4) {
          console.error("爬塔错误:", _0x5281b4);
          this.state.loseCount++;
          this.updateWinLoseDisplay();
          this.stopClimb("发生错误");
        }
      }
    },
    async buyEnergy() {
      {
        const _0x455d9b = document.getElementById("evo-buy-amount");
        const _0x53d732 = document.getElementById("evo-buy-btn");
        if (!_0x455d9b || !_0x53d732) {
          return;
        }
        if (!window.ws || typeof window.ws.sendAsync !== "function") {
          {
            _0x4ede5b.showtip("等待连接就绪...", "error");
            return;
          }
        }
        const _0x416f7c = parseInt(_0x455d9b.value);
        if (isNaN(_0x416f7c) || _0x416f7c <= 0) {
          {
            _0x4ede5b.showtip("请输入有效数量", "error");
            return;
          }
        }
        _0x53d732.disabled = true;
        _0x53d732.textContent = "购买中...";
        try {
          {
            const _0x2b7ba4 = {
              energy: _0x416f7c
            };
            const _0x44a061 = await _0x4ede5b.sendCommand("evotower_buyenergy", _0x2b7ba4);
            if (_0x44a061?.["_rawData"]?.["evoTower"]) {
              {
                this.state.towerInfo.energy = _0x44a061._rawData.evoTower.energy;
                this.updateTowerInfoDisplay();
                _0x4ede5b.showtip("成功购买" + _0x416f7c + "个小鱼干", "success");
              }
            } else {
              _0x4ede5b.showtip("购买失败", "error");
            }
          }
        } catch (_0x53c80b) {
          _0x4ede5b.showtip("购买失败: " + _0x53c80b.message, "error");
        } finally {
          {
            _0x53d732.disabled = false;
            _0x53d732.textContent = "购买";
          }
        }
      }
    },
    async refreshLegionMembers() {
      {
        const _0x3ff7db = document.getElementById("evo-legion-refresh-btn");
        if (!window.ws || typeof window.ws.sendAsync !== "function") {
          {
            _0x4ede5b.showtip("等待连接就绪...", "error");
            return;
          }
        }
        if (_0x3ff7db) {
          {
            _0x3ff7db.disabled = true;
            _0x3ff7db.textContent = "查询中...";
          }
        }
        try {
          {
            const _0x1d3929 = await _0x4ede5b.sendCommand("legion_getinfo", {});
            if (!_0x1d3929?.["_rawData"]?.["info"]?.["members"]) {
              {
                _0x4ede5b.showtip("无法获取俱乐部信息", "error");
                return;
              }
            }
            const _0xb6f445 = _0x1d3929._rawData.info.members;
            const _0x2fecf4 = [];
            for (const _0x464d6d in _0xb6f445) {
              {
                const _0x126e25 = _0xb6f445[_0x464d6d];
                _0x2fecf4.push({
                  roleId: parseInt(_0x464d6d),
                  headImg: _0x126e25.headImg,
                  name: _0x126e25.name
                });
              }
            }
            const _0x5773fe = await _0x4ede5b.sendCommand("evotower_getlegionjoinmembers", {});
            const _0x55b044 = _0x5773fe?.["_rawData"]?.["memberScores"] || {};
            if (_0x2fecf4.length === 0) {
              {
                _0x4ede5b.showtip("没有找到俱乐部成员", "error");
                return;
              }
            }
            this.showLegionMembersDialog(_0x2fecf4, _0x55b044);
          }
        } catch (_0x230593) {
          console.error("获取俱乐部成员信息失败:", _0x230593);
          _0x4ede5b.showtip("获取失败，请重试", "error");
        } finally {
          {
            if (_0x3ff7db) {
              {
                _0x3ff7db.disabled = false;
                _0x3ff7db.textContent = "🏢 查询俱乐部成员层数";
              }
            }
          }
        }
      }
    },
    showLegionMembersDialog(_0x231fc5, _0xc964aa) {
      {
        let _0x1e5d3d = document.getElementById("evo-legion-dialog");
        let _0x1983e1 = document.getElementById("evo-legion-overlay");
        if (!_0x1e5d3d) {
          {
            _0x1983e1 = document.createElement("div");
            _0x1983e1.id = "evo-legion-overlay";
            _0x1983e1.style.cssText = "\n                    position: fixed; top: 0; left: 0; right: 0; bottom: 0;\n                    background: rgba(0,0,0,0.7); backdrop-filter: blur(4px); z-index: 99999;\n                    display: flex; align-items: center; justify-content: center;\n                ";
            _0x1e5d3d = document.createElement("div");
            _0x1e5d3d.id = "evo-legion-dialog";
            _0x1e5d3d.style.cssText = "\n                    position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%);\n                    background: #ffffff;\n                    color: #333333; border: 1px solid #e5e7eb; outline: 1px solid rgba(37,99,235,0.1);\n                    border-radius: 12px; padding: 12px; width: 86vw; max-width: 400px;\n                    box-shadow: 0 16px 48px rgba(0,0,0,0.1); box-sizing: border-box;\n                    z-index: 100000;\n                ";
            document.body.appendChild(_0x1983e1);
            document.body.appendChild(_0x1e5d3d);
            _0x1983e1.addEventListener("click", () => this.closeLegionDialog());
          }
        } else {
          _0x1983e1.style.display = "flex";
          _0x1e5d3d.style.display = "block";
        }
        _0x231fc5.sort((_0x4647ce, _0x55dd0a) => {
          {
            const _0x193cd5 = _0xc964aa[_0x4647ce.roleId.toString()];
            const _0x4d5602 = _0xc964aa[_0x55dd0a.roleId.toString()];
            const _0x4c7575 = _0x193cd5 !== undefined && _0x193cd5 !== null ? _0x193cd5 : -1;
            const _0x3ac9a4 = _0x4d5602 !== undefined && _0x4d5602 !== null ? _0x4d5602 : -1;
            return _0x3ac9a4 - _0x4c7575;
          }
        });
        let _0x438f92 = "";
        _0x231fc5.forEach(_0x29521c => {
          {
            const _0x16c32a = _0x29521c.roleId.toString();
            const _0x3d360e = _0xc964aa[_0x16c32a];
            let _0x4e3cf4 = "未参加";
            let _0x48b9c4 = "color: #a0aec0;";
            if (_0x3d360e !== undefined && _0x3d360e !== null) {
              {
                if (_0x3d360e === 0) {
                  {
                    _0x4e3cf4 = "1-1";
                  }
                } else {
                  {
                    const _0x432156 = Math.floor(_0x3d360e / 10) + 1;
                    const _0x1e718f = _0x3d360e % 10 + 1;
                    _0x4e3cf4 = _0x432156 + "-" + _0x1e718f;
                  }
                }
                _0x48b9c4 = "color: #2563eb; font-weight: 600;";
              }
            }
            _0x438f92 += "\n                    <div style=\"display: flex; align-items: center; padding: 8px; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; margin-bottom: 6px;\">\n                        <img src=\"" + _0x29521c.headImg + "\" style=\"width: 36px; height: 36px; border-radius: 50%; margin-right: 10px; border: 1px solid #e5e7eb;\" onerror=\"this.style.display='none'\">\n                        <div style=\"flex: 1; min-width: 0;\">\n                            <div style=\"font-size: 12px; font-weight: 600; color: #333333; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\">" + _0x29521c.name + "</div>\n                            <div style=\"font-size: 10px; color: #6b7280;\">ID: " + _0x29521c.roleId + "</div>\n                        </div>\n                        <div style=\"font-size: 14px; " + _0x48b9c4 + "\">" + _0x4e3cf4 + "</div>\n                    </div>\n                ";
          }
        });
        _0x1e5d3d.innerHTML = "\n                <div style=\"display:flex; align-items:center; justify-content:space-between; padding:8px 4px 12px; border-bottom: 1px solid #e5e7eb; margin-bottom: 12px;\">\n                    <div style=\"font-weight:700; font-size: 14px; color:#333333;\">🏢 俱乐部成员层数</div>\n                    <button id=\"evo-legion-close\" style=\"padding:4px 12px; border-radius:6px; border:none; background:#e5e7eb; color:#333333; cursor:pointer; font-size:12px;\">关闭</button>\n                </div>\n                <div style=\"max-height: 60vh; overflow-y: auto; padding: 2px;\">\n                    " + _0x438f92 + "\n                </div>\n                <div style=\"padding: 8px 4px 4px; text-align: center; font-size: 11px; color: #6b7280; border-top: 1px solid #e5e7eb; margin-top: 12px;\">\n                    共 " + _0x231fc5.length + " 位成员\n                </div>\n            ";
        document.getElementById("evo-legion-close").addEventListener("click", () => this.closeLegionDialog());
      }
    },
    closeLegionDialog() {
      {
        const _0x1025b7 = document.getElementById("evo-legion-dialog");
        const _0x4a5ae4 = document.getElementById("evo-legion-overlay");
        if (_0x1025b7) {
          _0x1025b7.style.display = "none";
        }
        if (_0x4a5ae4) {
          _0x4a5ae4.style.display = "none";
        }
      }
    }
  };
  const _0x45fe00 = {
    "101": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/fe/fee2129b-7f79-4895-a419-8d2ce7543c91.18c0c.png",
    "10101": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/a0/a0935f7d-a191-4b8f-8998-0fce639eb05a.94364.png",
    "10102": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/8f/8ffce34d-1aca-4d65-934c-89323c953bec.9229c.png",
    "1009": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/63/63b20748-27e6-47d6-9ad0-6bf652c0247c.ae7c1.png",
    "10103": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/5c/5cca3fa4-5734-4bd4-8936-801b498106bd.111fc.png",
    "2001": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/37/37c6e4e5-8b98-4464-84f6-8e1a24e57765.6f62f.png",
    "10108": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/8f/8f6e1b84-f833-4d09-9f2f-6cf9e1847525.dc75e.png",
    "10109": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ef/ef67bfc7-e1ce-49d4-8afb-50d3c5233bec.d4072.png",
    "113": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/c7/c78fac0f-2b99-4fbc-9222-2825b600f642.8122d.png",
    "11301": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/3e/3e372c88-c7b4-4692-be96-68dcbf982f34.b1bca.png",
    "11302": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/bc/bce41d67-8cc0-4c81-864b-ca8f1588ba16.49690.png",
    "1004": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/04/047a9cba-5c46-4d1c-9095-113a7c0f31db.f0e8d.png",
    "11304": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/d5/d57cb0b7-7ee1-4198-86a0-da1e49348ea6.d57a0.png",
    "2003": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/b9/b975f089-d65b-4b45-8c7f-7ac2320b856c.29f35.png",
    "11307": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f6/f6e7ddde-856e-4efd-b991-5634d95fdaea.3f019.png",
    "109": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ae/ae5f4cb0-311c-4dfe-a5e3-a878375d6024.9ea04.png",
    "10901": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/d4/d43ea72c-ad11-4681-afdd-68f26bf9b602.56961.png",
    "10902": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/4e/4ee853be-732e-43d6-b0da-2beb86be7433.47d23.png",
    "10903": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/b2/b2e7bca3-4ea3-4683-a699-fd54f1c1a5cb.4985d.png",
    "1007": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/73/73d347d1-60c8-436c-92a3-88aaa36a1abc.e28f5.png",
    "2002": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/d6/d640a8a9-9886-468a-9150-b7bc22cfc1bf.6914f.png",
    "10908": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/b6/b6705382-338c-481b-90ad-38ca5f090e74.370bf.png",
    "102": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/54/54d7cd4a-6876-4d7a-8dcc-e295e7e3e341.608e3.png",
    "10201": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/4c/4c9278de-4760-474e-9b65-b26c13b5acc3.b36fe.png",
    "10202": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/a9/a98ec4bd-5ccd-4796-9d68-c66909307b28.db406.png",
    "1012": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/8c/8cb0f296-9c30-462e-9d56-f51e77ef7799.8133d.png",
    "2004": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/b1/b1c8dc22-b729-4fe0-95f3-ffcf03a25349.b8cce.png",
    "10206": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f3/f3bf690d-f92e-4969-af90-522bf772289d.dca3a.png",
    "10207": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/d9/d9ce7225-de52-46e1-a202-5227a720f0b4.1cc2b.png",
    "11702": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/6a/6a4b9a0f-6232-4594-897a-62a3a486ac0a.55faf.png",
    "11703": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ff/ffdabcbe-68a8-4ef8-b396-d8bda3926551.56035.png",
    "11704": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/85/8560da42-6af9-4122-84f4-a1ea672f03cf.3239c.png",
    "11705": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f0/f0ff2e1b-f376-4b5b-985e-b9a20d625db4.6b307.png",
    "11706": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/0c/0cbaf8fa-4587-4d61-a43f-3fd05e55968c.14074.png",
    "103": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f5/f55987de-682a-4838-8cee-02cd3893c5bf.0b05b.png",
    "10301": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/91/91370b48-41ac-46ec-b56d-7531b134d743.09eda.png",
    "10302": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/d9/d9ceebe2-f798-4fac-8588-e86656fd6931.14758.png",
    "1003": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/6e/6edcd35a-aa63-40d1-8b8b-a1a5d36d65a2.76a49.png",
    "10304": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/20/200ab11d-6931-40b1-b9e0-f1d39f6d4a9b.f0c41.png",
    "2016": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/62/624393df-d783-4a16-8405-84aa88cd33ac.19ec0.png",
    "10307": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/c3/c36fb5c7-c039-43dc-81ec-b7bafb3c45a5.c799d.png",
    "10308": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/6b/6bcbe989-cf31-4b0f-9c88-5f9c27183324.af8d6.png",
    "104": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/23/23987a94-3c9d-4778-b3b7-269b10366829.71134.png",
    "10401": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/05/059c91ae-a850-49fa-bc31-1f353b71d9eb.80713.png",
    "10402": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f5/f5cb60b5-e05b-435e-9553-cbec000581d1.1e007.png",
    "10403": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/5e/5e120724-faa0-4cf7-b670-b9dbdfda0541.f29d1.png",
    "10404": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ad/ad12b4fd-9430-44a2-851e-44bb66fa7eea.a0dce.png",
    "1014": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/1e/1e2bef7a-527d-45b3-a6c9-3fc790964cd9.bed74.png",
    "2013": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/78/78e688e4-1ae1-4b2e-8c29-8051b664f390.b7f6b.png",
    "10408": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/c8/c80a52a6-e973-476e-8d8b-2591cb744106.bd5e7.png",
    "110": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/c2/c2b806be-c738-4088-b363-65765414a82c.f9de5.png",
    "11001": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/9a/9a12df8a-8878-4226-97af-7840a2b4c612.8fe42.png",
    "11002": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/8a/8af35d82-2600-4898-a4a3-0d4f314ac924.5c074.png",
    "1011": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/6d/6d7eedd3-7d79-48e8-9431-b836b0e25f29.b0dca.png",
    "2014": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/73/73dcd488-8e7c-4268-8f4e-15a88a28741b.7345e.png",
    "11005": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/70/70603d5d-1bfe-4184-9280-95ae2065fe1b.61682.png",
    "11106": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/61/61088853-f654-4ac7-9b75-6e8834dfafb1.a0df1.png",
    "114": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/83/8330788c-86ee-441e-9b44-5f9f0b6762ea.25498.png",
    "11401": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/e6/e634d0e5-2eb4-4b83-9786-3130a55c6b69.e77c7.png",
    "11402": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/34/34d34029-fc87-4709-9098-5973153a7689.68355.png",
    "1001": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/41/41c14a40-2a18-438e-96e2-4ed113a0b755.578b7.png",
    "11403": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/69/69a547a7-85d2-4c24-8371-002de8e66b4e.2ebfa.png",
    "11406": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ed/ed0d2c93-1928-44e6-98ae-eba8663a5390.ac1f9.png",
    "2015": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/9c/9c61d88c-219a-4bd5-a1ca-35fa393d2485.26b47.png",
    "11408": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/bb/bb437a6e-ee24-4b7a-bdfd-91732a14b888.e35dc.png",
    "11409": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/45/4575b6a3-b1dc-4935-b13f-c8379011b2d8.0520c.png",
    "11802": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/4e/4ec9f7d6-f964-4c01-8b54-60385cb77598.c7f1d.png",
    "11803": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/0e/0ee8d538-b249-45cc-9c26-c4a5dbda50d1.37aaa.png",
    "11804": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/2f/2fd974a1-9367-4565-85e6-7e5315f633c9.0df84.png",
    "11805": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/88/88142206-5a73-4807-9586-987e02a21f54.2c289.png",
    "11806": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/91/910bd1c0-51d6-48ee-829b-f96ae33e15a8.30f2a.png",
    "105": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/8f/8f871c26-04e6-421e-956d-250f27cc92d2.71401.png",
    "10501": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/c2/c21b1168-5775-425a-9629-7b4ee40797bf.80646.png",
    "10502": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/24/248cb635-4a3c-4d34-9321-50f4b3f1e599.4dbb6.png",
    "10503": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/15/1596a11b-0118-4ac7-93e1-aeb09504374a.cbdd2.png",
    "10504": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/8e/8e5895e9-09f6-4248-973f-f024e8dbbe13.2a256.png",
    "1013": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/52/52ac08b1-cbd0-46e2-849e-00ccf7891373.05437.png",
    "2005": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/55/55421ffb-5fe9-438b-9cc9-6f58ec2c505d.aee33.png",
    "10509": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/33/3362f4a8-6651-4bc8-994c-9737dc9d7673.e5189.png",
    "10508": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f5/f5c67338-f0de-4141-bc7f-f2e9c1df583d.e23dc.png",
    "106": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/03/03d6aca2-9330-4b4b-9d9c-3ede3bbe4712.d06dc.png",
    "10601": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/57/57805cb1-aed4-4b56-a20e-6eab04e75b8a.e5eeb.png",
    "10602": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/27/27b3a214-5bfc-442c-b62e-fca73fea6083.aee0b.png",
    "1002": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/35/3561556b-ff33-47ba-b79c-b250a195e9df.b5f46.png",
    "10603": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/24/24f3621c-1275-4ed5-a9ae-1fb9aff9b56c.8a864.png",
    "10606": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/af/af62d1e3-9df8-4d51-837e-3c6ac679fdb1.d3244.png",
    "111": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/bd/bd2bfdc0-2c6c-4caa-a7da-9bb765047926.9151b.png",
    "11101": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/9d/9d88b4d6-a34b-4a2d-b3d1-3e1ad120ca1c.45151.png",
    "11102": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/15/154d493a-404c-46b9-914a-f8a36674564d.f35ca.png",
    "11103": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/3e/3e7d2ad1-e16a-47bf-8e16-e21ffd846b80.b28d5.png",
    "2006": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/8b/8bb83672-5c8c-433b-94b4-099218a72409.b104e.png",
    "11104": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/e1/e168ee02-776c-439b-a5f8-b16111c48fc5.1f00b.png",
    "11107": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/fb/fbd09ad3-e5fe-4e0b-8c14-fad6066e5dd9.da3e2.png",
    "11108": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/90/90d05dbc-68ea-4924-9ace-d8bf8c1c151e.da622.png",
    "115": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/03/0335b158-4a12-440d-8590-098715664ee9.e40a1.png",
    "11501": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/c3/c367a175-f79c-4ee1-b7ee-1b93f7c68cd2.67e32.png",
    "11502": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f0/f0f19158-0207-4df6-ae43-19a5be2646a7.4ee5e.png",
    "1006": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/60/606b1506-64b3-433b-a171-2e0326351e0b.de64b.png",
    "11504": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/5e/5ed1e275-fd83-4e1e-8aa2-293889cdc4db.a1fee.png",
    "2007": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/d1/d1f8f655-da97-46e5-a39a-bf05e47d81ad.80867.png",
    "119": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/8d/8def44ff-bc2b-4d4c-83aa-03e43d48b4a8.74e28.png",
    "11903": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/bd/bd565fe7-1b3b-43e7-81e5-85d08b47c67f.e3567.png",
    "3001": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ff/fffa1059-57ae-4ee7-bb9e-c8077db66201.859f9.png",
    "11904": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/d2/d2eee121-bc0e-48f6-9c9d-511f852c0a23.f927b.png",
    "11905": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/48/4870b3e1-f5b2-48c5-abaf-54f3d02f37e3.d8fb6.png",
    "107": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/4f/4f1057c6-fc97-418f-84ce-8283a03bd16c.85fa5.png",
    "10701": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/4f/4f1057c6-fc97-418f-84ce-8283a03bd16c.85fa5.png",
    "10702": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/46/467a9927-fcde-40e3-9dad-666abb1c45cb.98e91.png",
    "10703": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/c5/c511c6ee-fe69-4d1e-8d68-1a99f22f9f84.5117b.png",
    "10704": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/1a/1a0c86e0-711e-4ea8-b715-33c3b1daa9a2.75bf5.png",
    "10705": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/d3/d37c3283-472c-471a-9eb0-fbccc9925c5a.8ea31.png",
    "1008": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/3a/3a87cfdb-ba80-484a-a8bb-76fafd6d34c3.49bf4.png",
    "10707": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f2/f215ff4a-c27e-4624-bc7e-5a867706d701.90a3f.png",
    "10708": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/bf/bf79a91b-43cb-4006-9ea6-955953a8a751.04084.png",
    "2012": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/20/20cb9e88-3d94-496c-89b0-1dbe5db24984.295f4.png",
    "10711": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/9d/9d2ec2c5-5263-4a7a-bf0d-7bccfe469b6c.f9b97.png",
    "10712": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/cb/cb45e684-da91-4604-9b83-1acaad28a95b.60d98.png",
    "10713": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/64/64814d7d-2e7a-46fe-999f-2ad201cac54b.588a3.png",
    "10714": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/80/80570815-07e1-452e-8079-f1bf0ea670d4.2b71a.png",
    "108": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/74/740f843b-2eaa-47ef-b000-93064dd1a4d0.5e6a0.png",
    "10801": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/64/64f2ca33-c7a9-4373-b3ee-43c3b2b99cd4.eba56.png",
    "10802": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/50/502487fd-1bec-4072-9a17-ec54f667648b.6bd82.png",
    "1010": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f7/f74c93ee-0066-4151-9ef7-88218e6b9617.f37ff.png",
    "2009": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/4e/4e7f67c7-e54d-4aba-bea4-dfa394eda964.3d52f.png",
    "10805": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/7c/7cbac315-ffac-4995-9694-1041e2b3e5e4.0f42e.png",
    "10807": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/30/30611900-b74e-4759-835a-b7e2ab85c164.5ed3c.png",
    "112": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/bf/bf8e5395-b6af-4615-8d54-ebf51966f03b.24c63.png",
    "11201": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/5b/5b533dc5-b188-4463-8b86-aa29ddb3624f.cff48.png",
    "11202": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/2e/2e36eb73-0277-4b52-8df9-ab3212c9513a.000e9.png",
    "11203": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/c8/c8206f9a-00bf-407a-a543-ea49e2d77fd7.bcdb9.png",
    "11204": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/bb/bb2a459d-9a21-4ad9-bd44-95fa0382c8a7.49abf.png",
    "2011": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ee/eea662a3-e5bd-4d28-989b-6de321eb1616.f06f2.png",
    "116": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/cd/cd137088-98a0-4bdc-8bd8-49a6fe9f2d52.2c31d.png",
    "11601": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/93/9305328c-f17b-403b-b5a3-e6ed538f7781.4e521.png",
    "11602": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f4/f41a8045-b618-4aeb-a118-5e5d7d799820.53f20.png",
    "1005": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/71/714a7704-337b-49de-93d5-0c8f9343dc37.e1fc3.png",
    "11604": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/23/2306e674-b55b-4878-8989-a3fc73fb465b.a59d4.png",
    "2010": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/29/29c9c920-4f1c-455f-8b1d-802c85d76b56.16885.png",
    "11605": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/77/77228bf3-d4a6-4e1e-9fc9-913ee6f22490.555dc.png",
    "12002": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/b9/b979cada-f44b-4f9c-acf6-8556f0eef4d7.9c233.png",
    "12003": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/79/793ba75f-f7a7-4392-a0da-9c1a0cec655b.128f0.png",
    "12004": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/28/289cdf92-c0a9-4915-bb09-8d1443179988.4d20f.png",
    "12005": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/17/17ec3eb6-7cbb-4439-b1f3-c12d5d27e673.4f0be.png",
    "12006": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/72/7246e4e3-7167-4843-86db-b89590fc6122.d252e.png",
    "12007": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/7a/7a7beccc-de85-48b0-a43e-24d04c64acf5.e6ec2.png",
    "201": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/da/da4e4ac4-1df9-42c7-880b-8e3f41994e48.d0559.png",
    "202": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/48/4892abf3-e917-477d-97cf-293e7093a856.dcd4f.png",
    "203": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/d4/d47b69e7-6408-4af1-83b3-1d5a5be336a8.d78f2.png",
    "213": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/d2/d285b41c-1d7c-4047-a9be-1e1b155cdac9.db396.png",
    "214": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/0e/0ec64fd0-8e79-4f38-9fe5-3378fb558389.73497.png",
    "216": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/b7/b75788f4-baf0-4999-bf22-b0bb5d5403fa.889c5.png",
    "223": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/fa/fae866d7-a86b-4dca-8bee-fde39babc0a0.54efd.png",
    "204": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/eb/eb6598fd-ef92-44dc-b0a4-111328ff2f8b.94429.png",
    "205": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/d1/d1c08e44-bd29-4bf5-a844-256e7df4318c.7252d.png",
    "206": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/6a/6a5b3b2f-1551-46be-9cdd-f3f866fadc8a.8550e.png",
    "217": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ba/bad0acaa-3c7a-479d-98aa-1aa29ef2fc9f.60f34.png",
    "218": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f9/f9eaa977-2136-4dc3-9553-4955cd23ba2c.6691f.png",
    "219": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ab/ab86fa12-971a-4440-b8d7-2d0dff35950f.dace3.png",
    "220": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/2e/2ea44c13-26fd-4459-aa8d-864b66a45726.c073c.png",
    "313": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/e7/e7b6662c-127d-4ae8-b6e3-a4898ecdd618.e5896.png",
    "314": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ce/ce9bc3d1-efdc-4734-b7a4-72c4793b20f3.b35af.png",
    "207": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ea/eaa1af3f-9c21-40e0-b62b-2ed1206ad09e.5f8a6.png",
    "208": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/e3/e31d1937-8efb-4a5a-a745-408f205a4274.c93c7.png",
    "209": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/d8/d8f1601c-777a-43b6-9aac-1b8ff5de1f7a.46391.png",
    "221": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f1/f168b1af-7516-45b8-ae1f-1acde3373421.16f1e.png",
    "222": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/45/455f1136-ac0a-45bc-acfd-4a07c2caec30.c2001.png",
    "224": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/11/112a8eba-da12-431b-bda3-26e04f7b77de.436e8.png",
    "210": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f2/f2d3cb6f-7d94-49f4-b547-6e9fd8995f6e.122a2.png",
    "211": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f7/f71dfbbc-4d09-4423-a78a-47ae7d75a185.f4ccd.png",
    "212": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/df/dfc7feb9-9253-4bb6-a156-eeaef2d50ca5.34e37.png",
    "225": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/22/22ac8f71-2cd2-4b3d-9318-d2c84ff53a30.354f9.png",
    "226": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/dd/dd2cc35d-f3ba-4908-959a-cb3938f299d5.fc071.png",
    "227": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ab/abb2e92f-26cb-41b7-933e-43c35628574a.61898.png",
    "228": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ab/abb2e92f-26cb-41b7-933e-43c35628574a.61898.png",
    "310": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/86/8632aec4-6f12-4d6e-9812-6b5e092da2e9.5246e.png",
    "311": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/15/159f6d94-c961-4019-80f8-57df22055103.81ffb.png",
    "312": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/9d/9dac54ce-f962-499e-a778-91a20235648a.90719.png",
    "302": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/97/978272bc-4d67-485b-8f94-81df83a88a22.3698b.png",
    "303": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/45/45ca3049-bfc8-4241-ba0c-2b94832b89e8.784fb.png",
    "215": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/be/be698af2-9deb-4833-b751-15abab57ecef.253e5.png",
    "304": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/a1/a14b0495-5366-41ba-b80c-e82a1da9269d.993a3.png",
    "305": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/5b/5bfb293a-39c2-45c2-9a2a-0ca5b71fc072.936b3.png",
    "306": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/90/90e9325d-183d-4dc8-8104-f562859405e5.9dac8.png",
    "301": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/73/73f8598e-fe61-4862-b326-8c6340b59a0b.7597b.png",
    "307": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/16/16d22463-9ad6-481c-a6b2-79e2f918ea98.a3085.png",
    "308": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/e2/e268a294-096e-4af5-9ce2-4fcbd7edcbf4.1a2c6.png",
    "309": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/41/41c3a9b9-1227-45f9-9527-b0b07e6257fe.a2160.png"
  };
  const _0x3895b5 = {
    "1": "5c4652b9-7e51-4733-879a-1ad89a60a19e.6a8ea",
    "2": "6eaa0510-6969-4e6b-85a9-c0ad78371b83.0164e",
    "3": "1fdc6fac-cac3-4934-93f2-8c3e6b3b958e.0539f",
    "4": "9d0875ac-41b2-4de1-9cb7-e207a3a977b7.458d0",
    "5": "01e407e7-8a48-45e3-a58a-914bbb58af99.28cea",
    "6": "c64f985d-936f-4995-a2b8-29f379bbca77.d2c73",
    "7": "10d02233-c360-4e67-8669-ab8035fc0f39.256f5",
    "8": "88679199-6ae6-425b-8c30-5698461d2b10.478b8",
    "9": "a59734bc-12d2-4959-a2ce-12c3a3c1be88.469fc"
  };
  const _0x3cebff = {
    isRunning: false,
    isStopping: false,
    isGettingId: false
  };
  const _0x3d5535 = {
    skinImageMap: _0x45fe00,
    weaponImageMap: _0x3895b5,
    getWeaponImageUrl(_0x1a3762) {
      {
        const _0x2c0eb5 = this.weaponImageMap[_0x1a3762];
        if (!_0x2c0eb5) {
          return null;
        }
        return "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/" + _0x2c0eb5.substring(0, 2) + "/" + _0x2c0eb5 + ".png";
      }
    },
    state: _0x3cebff,
    init() {
      {
        const _0x1f2596 = document.getElementById("match-start-btn");
        const _0x1b4a21 = document.getElementById("match-get-id-btn");
        if (_0x1f2596) {
          {
            _0x1f2596.addEventListener("click", () => this.handleMainButtonClick());
          }
        }
        _0x1b4a21 && _0x1b4a21.addEventListener("click", () => this.getOpponentId());
        const _0x5a65c7 = localStorage.getItem("match_opponent_id");
        if (_0x5a65c7) {
          {
            const _0x36e1d3 = document.getElementById("match-opponent-id");
            if (_0x36e1d3) {
              _0x36e1d3.value = _0x5a65c7;
            }
          }
        }
      }
    },
    handleMainButtonClick() {
      this.state.isRunning ? this.stop() : this.start();
    },
    updateStatus(_0xe75aa1) {
      {
        const _0x3afde7 = document.getElementById("match-status");
        if (_0x3afde7) {
          _0x3afde7.textContent = _0xe75aa1;
        }
      }
    },
    updateResults(_0x5c13e1) {
      {
        const _0x459f4e = document.getElementById("match-results");
        if (_0x459f4e) {
          _0x459f4e.innerHTML = _0x5c13e1;
        }
      }
    },
    async getOpponentId() {
      {
        if (this.state.isGettingId) {
          return;
        }
        const _0x263ec8 = document.getElementById("match-get-id-btn");
        this.state.isGettingId = true;
        if (_0x263ec8) {
          _0x263ec8.textContent = "监听中";
        }
        this.updateStatus("请在游戏中切磋一次");
        this.updateResults("<div style=\"text-align:center;color:var(--highlight);\">正在监听切磋请求，请在游戏中进行一次切磋...</div>");
        try {
          {
            const _0x4cee59 = await new Promise((_0x2da682, _0x390d68) => {
              {
                const _0x51449f = setTimeout(() => {
                  {
                    _0x390d68(new Error("监听超时"));
                  }
                }, 30000);
                if (!window.ws || typeof window.ws.sendAsync !== "function") {
                  {
                    clearTimeout(_0x51449f);
                    _0x390d68(new Error("WebSocket不可用"));
                    return;
                  }
                }
                const _0x47ee1f = window.ws.sendAsync;
                window.ws.sendAsync = async _0x5a3bbb => {
                  {
                    _0x5a3bbb && _0x5a3bbb.cmd === "fight_startpvp" && _0x5a3bbb.params && _0x5a3bbb.params.targetId && (clearTimeout(_0x51449f), window.ws.sendAsync = _0x47ee1f, _0x2da682(_0x5a3bbb.params.targetId));
                    return await _0x47ee1f.call(window.ws, _0x5a3bbb);
                  }
                };
              }
            });
            const _0x144ea9 = document.getElementById("match-opponent-id");
            if (_0x144ea9) {
              _0x144ea9.value = _0x4cee59;
            }
            localStorage.setItem("match_opponent_id", _0x4cee59);
            this.updateStatus("✅ 已获取");
            this.updateResults("<div style=\"text-align:center;color:var(--success);\">成功获取ID: " + _0x4cee59 + "</div>");
            _0x4ede5b.showtip("获取成功: " + _0x4cee59, "success");
          }
        } catch (_0x3515d5) {
          {
            this.updateStatus("获取失败");
            this.updateResults("<div style=\"text-align:center;color:var(--error);\">" + _0x3515d5.message + "</div>");
          }
        } finally {
          {
            this.state.isGettingId = false;
            if (_0x263ec8) {
              _0x263ec8.textContent = "获取";
            }
          }
        }
      }
    },
    stop(_0xab7ca9 = false) {
      {
        if (!_0xab7ca9) {
          {
            this.state.isStopping = true;
            this.updateStatus("正在停止...");
          }
        }
        this.state.isRunning = false;
        this.state.isStopping = false;
        const _0x5cf479 = document.getElementById("match-start-btn");
        const _0x4bf8d2 = document.getElementById("match-opponent-id");
        const _0x31bb28 = document.getElementById("match-fight-count");
        _0x5cf479 && (_0x5cf479.textContent = "开始", _0x5cf479.classList.remove("stop"));
        if (_0x4bf8d2) {
          _0x4bf8d2.disabled = false;
        }
        if (_0x31bb28) {
          _0x31bb28.disabled = false;
        }
      }
    },
    isFullTeamAlive(_0x4b76e6) {
      {
        if (!_0x4b76e6 || !Array.isArray(_0x4b76e6)) {
          return false;
        }
        return _0x4b76e6.every(_0x50130c => _0x50130c.hp > 0);
      }
    },
    hasHeroDead(_0x129601) {
      {
        if (!_0x129601 || !Array.isArray(_0x129601)) {
          return false;
        }
        return _0x129601.some(_0x134eeb => _0x134eeb.hp === 0);
      }
    },
    calculateAvgRounds(_0x462d5d) {
      {
        if (_0x462d5d.length === 0) {
          return 0;
        }
        return (_0x462d5d.reduce((_0x538bd4, _0x338d10) => _0x538bd4 + _0x338d10, 0) / _0x462d5d.length).toFixed(1);
      }
    },
    formatPower(_0x306604) {
      {
        if (_0x306604 >= 100000000) {
          return (_0x306604 / 100000000).toFixed(1) + "亿";
        }
        if (_0x306604 >= 10000) {
          return (_0x306604 / 10000).toFixed(1) + "万";
        }
        return _0x306604.toString();
      }
    },
    createHeroSlot(_0x17bf0f, _0x30ac27, _0x579ab9 = false) {
      {
        const _0x442740 = document.createElement("div");
        _0x442740.style.cssText = "text-align:center;";
        const _0x411bda = _0x30ac27[_0x17bf0f];
        if (!_0x411bda) {
          {
            _0x442740.innerHTML = "<div style=\"width:40px;height:40px;background:var(--border);border-radius:4px;\"></div>";
            return _0x442740;
          }
        }
        let _0x5c7929 = _0x411bda.skin;
        if (_0x5c7929 === -1 || _0x5c7929 === "-1") {
          _0x5c7929 = _0x411bda.id;
        }
        const _0x57a007 = this.skinImageMap[_0x5c7929] || this.skinImageMap[_0x411bda.id] || "";
        const _0x10d23a = _0x579ab9 ? "transform:scaleX(-1);" : "";
        _0x442740.innerHTML = "<img src=\"" + _0x57a007 + "\" style=\"width:40px;height:40px;border-radius:4px;" + _0x10d23a + "\"><div style=\"font-size:9px;\">Lv." + _0x411bda.level + "</div>";
        return _0x442740;
      }
    },
    displayTeams(_0x2da0d0) {
      {
        const _0x500ba5 = document.getElementById("match-teams-container");
        if (!_0x500ba5 || !_0x2da0d0) {
          return;
        }
        _0x500ba5.style.display = "block";
        const _0x2e4846 = document.getElementById("match-my-heroes");
        const _0x480949 = document.getElementById("match-my-title");
        if (_0x2e4846 && _0x2da0d0.leftTeam) {
          {
            _0x2e4846.innerHTML = "";
            _0x2e4846.style.display = "grid";
            _0x2e4846.style.gridTemplateColumns = "1fr 1fr";
            _0x2e4846.style.gridTemplateRows = "repeat(3, 1fr)";
            _0x2e4846.style.rowGap = "2px";
            _0x2e4846.style.columnGap = "8px";
            _0x2e4846.style.alignItems = "center";
            _0x2e4846.style.justifyItems = "center";
            _0x2e4846.style.width = "fit-content";
            const _0x3803ac = _0x2da0d0.leftTeam.team;
            const _0x585958 = Array.isArray(_0x3803ac) ? _0x3803ac : Object.values(_0x3803ac || {});
            const _0x26fb5d = this.createHeroSlot(2, _0x585958, false);
            _0x26fb5d.style.gridColumn = "1";
            _0x26fb5d.style.gridRow = "1";
            const _0x4fa941 = this.createHeroSlot(3, _0x585958, false);
            _0x4fa941.style.gridColumn = "1";
            _0x4fa941.style.gridRow = "2";
            const _0x5800f4 = this.createHeroSlot(4, _0x585958, false);
            _0x5800f4.style.gridColumn = "1";
            _0x5800f4.style.gridRow = "3";
            const _0x1f56df = this.createHeroSlot(0, _0x585958, false);
            _0x1f56df.style.gridColumn = "2";
            _0x1f56df.style.gridRow = "1 / 3";
            _0x1f56df.style.alignSelf = "start";
            _0x1f56df.style.marginTop = "40%";
            const _0x39eb67 = this.createHeroSlot(1, _0x585958, false);
            _0x39eb67.style.gridColumn = "2";
            _0x39eb67.style.gridRow = "2 / 4";
            _0x39eb67.style.alignSelf = "start";
            _0x39eb67.style.marginTop = "40%";
            _0x2e4846.appendChild(_0x26fb5d);
            _0x2e4846.appendChild(_0x4fa941);
            _0x2e4846.appendChild(_0x5800f4);
            _0x2e4846.appendChild(_0x1f56df);
            _0x2e4846.appendChild(_0x39eb67);
            const _0x262e3b = _0x2da0d0.leftTeam.weaponId;
            if (_0x262e3b && this.weaponImageMap[_0x262e3b]) {
              {
                const _0x148b6a = document.createElement("div");
                _0x148b6a.style.cssText = "grid-column:2;grid-row:3;align-self:end;text-align:center;";
                const _0x1038d4 = this.getWeaponImageUrl(_0x262e3b);
                _0x148b6a.innerHTML = "<img src=\"" + _0x1038d4 + "\" style=\"width:24px;height:24px;border-radius:4px;\">";
                _0x2e4846.appendChild(_0x148b6a);
              }
            }
            if (_0x480949 && _0x2da0d0.leftTeam.name) {
              {
                const _0x2f5e04 = _0x2da0d0.leftTeam.headImg ? "<img src=\"" + decodeURIComponent(_0x2da0d0.leftTeam.headImg) + "\" style=\"width:24px;height:24px;border-radius:50%;vertical-align:middle;margin-right:4px;\">" : "";
                _0x480949.innerHTML = _0x2f5e04 + "<span style=\"vertical-align:middle;\">" + _0x2da0d0.leftTeam.name + "</span><span style=\"font-size:10px;color:var(--text-secondary);margin-left:4px;vertical-align:middle;\">" + this.formatPower(_0x2da0d0.leftTeam.power || 0) + "</span>";
              }
            }
          }
        }
        const _0x2cd680 = document.getElementById("match-opp-heroes");
        const _0x388b17 = document.getElementById("match-opp-title");
        if (_0x2cd680 && _0x2da0d0.rightTeam) {
          {
            _0x2cd680.innerHTML = "";
            _0x2cd680.style.display = "grid";
            _0x2cd680.style.gridTemplateColumns = "1fr 1fr";
            _0x2cd680.style.gridTemplateRows = "repeat(3, 1fr)";
            _0x2cd680.style.rowGap = "2px";
            _0x2cd680.style.columnGap = "8px";
            _0x2cd680.style.alignItems = "center";
            _0x2cd680.style.justifyItems = "center";
            _0x2cd680.style.width = "fit-content";
            const _0x4655da = _0x2da0d0.rightTeam.team;
            const _0x4111b7 = Array.isArray(_0x4655da) ? _0x4655da : Object.values(_0x4655da || {});
            const _0x5656bb = this.createHeroSlot(0, _0x4111b7, true);
            _0x5656bb.style.gridColumn = "1";
            _0x5656bb.style.gridRow = "1 / 3";
            _0x5656bb.style.alignSelf = "start";
            _0x5656bb.style.marginTop = "40%";
            const _0x14e21f = this.createHeroSlot(1, _0x4111b7, true);
            _0x14e21f.style.gridColumn = "1";
            _0x14e21f.style.gridRow = "2 / 4";
            _0x14e21f.style.alignSelf = "start";
            _0x14e21f.style.marginTop = "40%";
            const _0x21d492 = _0x2da0d0.rightTeam.weaponId;
            if (_0x21d492 && this.weaponImageMap[_0x21d492]) {
              {
                const _0x19f2d8 = document.createElement("div");
                _0x19f2d8.style.cssText = "grid-column:1;grid-row:3;align-self:end;text-align:center;";
                const _0x424804 = this.getWeaponImageUrl(_0x21d492);
                _0x19f2d8.innerHTML = "<img src=\"" + _0x424804 + "\" style=\"width:24px;height:24px;border-radius:4px;transform:scaleX(-1);\">";
                _0x2cd680.appendChild(_0x19f2d8);
              }
            }
            const _0x42595b = this.createHeroSlot(2, _0x4111b7, true);
            _0x42595b.style.gridColumn = "2";
            _0x42595b.style.gridRow = "1";
            const _0x5832f7 = this.createHeroSlot(3, _0x4111b7, true);
            _0x5832f7.style.gridColumn = "2";
            _0x5832f7.style.gridRow = "2";
            const _0x1ff80e = this.createHeroSlot(4, _0x4111b7, true);
            _0x1ff80e.style.gridColumn = "2";
            _0x1ff80e.style.gridRow = "3";
            _0x2cd680.appendChild(_0x5656bb);
            _0x2cd680.appendChild(_0x14e21f);
            _0x2cd680.appendChild(_0x42595b);
            _0x2cd680.appendChild(_0x5832f7);
            _0x2cd680.appendChild(_0x1ff80e);
            if (_0x388b17 && _0x2da0d0.rightTeam.name) {
              {
                const _0x52f576 = _0x2da0d0.rightTeam.headImg ? "<img src=\"" + decodeURIComponent(_0x2da0d0.rightTeam.headImg) + "\" style=\"width:24px;height:24px;border-radius:50%;vertical-align:middle;margin-right:4px;\">" : "";
                _0x388b17.innerHTML = _0x52f576 + "<span style=\"vertical-align:middle;\">" + _0x2da0d0.rightTeam.name + "</span><span style=\"font-size:10px;color:var(--text-secondary);margin-left:4px;vertical-align:middle;\">" + this.formatPower(_0x2da0d0.rightTeam.power || 0) + "</span>";
              }
            }
          }
        }
      }
    },
    updateTeamStats(_0x2753d0, _0x4d2204) {
      {
        const _0x4cd637 = document.getElementById("match-my-stats");
        const _0x1d174c = document.getElementById("match-opp-stats");
        if (_0x4cd637) {
          {
            _0x4cd637.style.display = "block";
            _0x4cd637.innerHTML = "\n                    <div><span style=\"color:var(--success);\">胜" + _0x2753d0.wins + "</span> <span style=\"color:var(--highlight);\">平" + _0x2753d0.draws + "</span> <span style=\"color:var(--error);\">负" + _0x2753d0.losses + "</span></div>\n                    <div>胜率 <strong>" + _0x2753d0.winRate + "%</strong></div>\n                    <div>胜利平均回合: <strong>" + _0x2753d0.avgRounds + "</strong></div>\n                    <div>满编" + _0x2753d0.fullTeamWins + "次 · 满编胜率: " + _0x2753d0.fullTeamWinRate + "%</div>\n                ";
          }
        }
        if (_0x1d174c) {
          {
            _0x1d174c.style.display = "block";
            _0x1d174c.innerHTML = "\n                    <div><span style=\"color:var(--success);\">胜" + _0x4d2204.wins + "</span> <span style=\"color:var(--highlight);\">平" + _0x4d2204.draws + "</span> <span style=\"color:var(--error);\">负" + _0x4d2204.losses + "</span></div>\n                    <div>胜率 <strong>" + _0x4d2204.winRate + "%</strong></div>\n                    <div>胜利平均回合: <strong>" + _0x4d2204.avgRounds + "</strong></div>\n                    <div>满编" + _0x4d2204.fullTeamWins + "次 · 满编胜率: " + _0x4d2204.fullTeamWinRate + "%</div>\n                ";
          }
        }
      }
    },
    displayFinalResults(_0x14f552) {
      {
        const _0x3059fd = _0x14f552.wins + _0x14f552.losses + _0x14f552.draws;
        const _0x4cff0c = _0x3059fd > 0 ? (_0x14f552.wins / _0x3059fd * 100).toFixed(2) : "0.00";
        const _0x2c19b2 = _0x3059fd > 0 ? (_0x14f552.losses / _0x3059fd * 100).toFixed(2) : "0.00";
        const _0x42bea2 = this.calculateAvgRounds(_0x14f552.winRounds);
        const _0x540c42 = this.calculateAvgRounds(_0x14f552.lossRounds);
        const _0xf15c78 = _0x3059fd > 0 ? (_0x14f552.leftFullTeamWins / _0x3059fd * 100).toFixed(2) : "0.00";
        const _0x4e7dd7 = _0x3059fd > 0 ? (_0x14f552.rightFullTeamWins / _0x3059fd * 100).toFixed(2) : "0.00";
        const _0x447594 = document.getElementById("match-results");
        if (_0x447594) {
          _0x447594.style.display = "none";
        }
        const _0x597dff = {
          wins: _0x14f552.wins,
          draws: _0x14f552.draws,
          losses: _0x14f552.losses,
          winRate: _0x4cff0c,
          avgRounds: _0x42bea2,
          fullTeamWins: _0x14f552.leftFullTeamWins,
          fullTeamWinRate: _0xf15c78
        };
        const _0x42878c = {
          wins: _0x14f552.losses,
          draws: _0x14f552.draws,
          losses: _0x14f552.wins,
          winRate: _0x2c19b2,
          avgRounds: _0x540c42,
          fullTeamWins: _0x14f552.rightFullTeamWins,
          fullTeamWinRate: _0x4e7dd7
        };
        this.updateTeamStats(_0x597dff, _0x42878c);
      }
    },
    async start() {
      {
        if (this.state.isRunning) {
          return;
        }
        const _0x4d1cd4 = document.getElementById("match-opponent-id");
        const _0x3949bb = document.getElementById("match-fight-count");
        const _0x10ea90 = document.getElementById("match-start-btn");
        const _0x51277a = parseInt(_0x4d1cd4?.["value"], 10);
        const _0xa84198 = parseInt(_0x3949bb?.["value"], 10);
        if (isNaN(_0x51277a) || _0x51277a <= 0) {
          {
            this.updateStatus("请输入ID");
            _0x4ede5b.showtip("请输入有效的ID", "error");
            return;
          }
        }
        if (isNaN(_0xa84198) || _0xa84198 <= 0 || _0xa84198 > 999) {
          {
            this.updateStatus("次数1-999");
            _0x4ede5b.showtip("次数范围1-999", "error");
            return;
          }
        }
        localStorage.setItem("match_opponent_id", _0x51277a);
        this.state.isRunning = true;
        this.state.isStopping = false;
        if (_0x10ea90) {
          {
            _0x10ea90.textContent = "停止";
            _0x10ea90.classList.add("stop");
          }
        }
        if (_0x4d1cd4) {
          _0x4d1cd4.disabled = true;
        }
        if (_0x3949bb) {
          _0x3949bb.disabled = true;
        }
        this.updateResults("<div style=\"text-align:center;color:var(--text-secondary);\">正在开始切磋...</div>");
        this.updateStatus("切磋中...");
        const _0x402d2c = {
          wins: 0,
          losses: 0,
          draws: 0,
          leftFullTeamWins: 0,
          rightFullTeamWins: 0,
          winRounds: [],
          lossRounds: []
        };
        for (let _0x7b053b = 1; _0x7b053b <= _0xa84198; _0x7b053b++) {
          {
            if (this.state.isStopping) {
              {
                this.updateStatus("已停止");
                break;
              }
            }
            this.updateStatus(_0x7b053b + "/" + _0xa84198);
            if (_0x10ea90) {
              _0x10ea90.textContent = _0x7b053b + "/" + _0xa84198;
            }
            try {
              {
                const _0x406f34 = {
                  battleVersion: _0x4f313c,
                  targetId: _0x51277a
                };
                const _0x4f0ab3 = await _0x4ede5b.sendCommand("fight_startpvp", _0x406f34);
                const _0x5e8663 = _0x4f0ab3?.["_rawData"]?.["battleData"];
                const _0x525975 = _0x5e8663?.["result"];
                _0x7b053b === 1 && _0x5e8663 && this.displayTeams(_0x5e8663);
                if (!_0x525975) {
                  {
                    _0x402d2c.draws++;
                    continue;
                  }
                }
                const _0x9d5001 = _0x525975.sponsor?.["teamInfo"];
                const _0x45d7d5 = _0x525975.accept?.["teamInfo"];
                const _0x25114a = _0x525975.round || 0;
                const _0xbed512 = _0x9d5001?.["every"](_0x5cd4db => _0x5cd4db.hp === 0);
                const _0xce3160 = _0x45d7d5?.["every"](_0x23add8 => _0x23add8.hp === 0);
                if (_0xbed512 && !_0xce3160) {
                  {
                    _0x402d2c.losses++;
                    _0x402d2c.lossRounds.push(_0x25114a);
                    if (this.isFullTeamAlive(_0x45d7d5)) {
                      _0x402d2c.rightFullTeamWins++;
                    }
                  }
                } else {
                  if (_0xce3160 && !_0xbed512) {
                    {
                      _0x402d2c.wins++;
                      _0x402d2c.winRounds.push(_0x25114a);
                      if (this.isFullTeamAlive(_0x9d5001)) {
                        _0x402d2c.leftFullTeamWins++;
                      }
                    }
                  } else {
                    {
                      _0x402d2c.draws++;
                    }
                  }
                }
                const _0x1d38f8 = _0x402d2c.wins + _0x402d2c.losses + _0x402d2c.draws;
                const _0x1b5df6 = _0x1d38f8 > 0 ? (_0x402d2c.wins / _0x1d38f8 * 100).toFixed(1) : 0;
                this.updateResults("<div style=\"text-align:center;\">进度: " + _0x7b053b + "/" + _0xa84198 + " | <span style=\"color:var(--success);\">" + _0x402d2c.wins + "胜</span> <span style=\"color:var(--highlight);\">" + _0x402d2c.draws + "平</span> <span style=\"color:var(--error);\">" + _0x402d2c.losses + "负</span> | 胜率: " + _0x1b5df6 + "%</div>");
              }
            } catch (_0x25a816) {
              console.error("第" + _0x7b053b + "场战斗出错:", _0x25a816.message);
              _0x402d2c.draws++;
            }
            _0x7b053b < _0xa84198 && !this.state.isStopping && (await _0x4ede5b.delay(0.02));
          }
        }
        this.displayFinalResults(_0x402d2c);
        this.updateStatus("完成");
        this.stop(true);
      }
    }
  };
  const _0x5cea9d = {
    myArenaInfo: null,
    myMonthInfo: null,
    artifactPoint: 0,
    isRunning: false
  };
  const _0x25fc1a = {
    state: _0x5cea9d,
    init() {
      {
        const _0x554e44 = document.getElementById("monthly-refresh-btn");
        const _0x1ec48b = document.getElementById("monthly-arena-btn");
        const _0x2c2bbb = document.getElementById("monthly-fishing-btn");
        if (_0x554e44) {
          _0x554e44.addEventListener("click", () => this.getActivityData());
        }
        if (_0x1ec48b) {
          _0x1ec48b.addEventListener("click", () => this.completeArenaTask());
        }
        if (_0x2c2bbb) {
          _0x2c2bbb.addEventListener("click", () => this.completeFishingTask());
        }
        this.getActivityData();
      }
    },
    updateStatus(_0x401edb) {
      {
        const _0x46ea6f = document.getElementById("monthly-status");
        if (_0x46ea6f) {
          _0x46ea6f.textContent = _0x401edb;
        }
      }
    },
    async getActivityData() {
      {
        if (!window.ws || typeof window.ws.sendAsync !== "function") {
          {
            this.updateStatus("⏳ 等待连接...");
            return;
          }
        }
        try {
          {
            this.updateStatus("🔄 获取中...");
            const _0x4b4604 = await _0x4ede5b.sendCommand("activity_get", {});
            if (_0x4b4604 && _0x4b4604._rawData && _0x4b4604._rawData.activity) {
              {
                this.state.myArenaInfo = _0x4b4604._rawData.activity.myArenaInfo || {};
                this.state.myMonthInfo = _0x4b4604._rawData.activity.myMonthInfo || {};
                this.updateUI();
                this.updateStatus("✅ 就绪");
              }
            } else {
              this.updateStatus("❌ 获取失败");
            }
          }
        } catch (_0x3b672f) {
          console.error("获取活动数据失败:", _0x3b672f);
          this.updateStatus("❌ 错误");
        }
      }
    },
    updateUI() {
      {
        const _0x307aff = this.state.myArenaInfo?.["num"] || 0;
        const _0x226c65 = 240;
        const _0xa795d1 = Math.min(_0x307aff, _0x226c65);
        const _0x474fa3 = document.getElementById("monthly-arena-progress");
        const _0x5849bf = document.getElementById("monthly-arena-btn");
        if (_0x474fa3) {
          _0x474fa3.textContent = _0xa795d1 + "/" + _0x226c65;
        }
        if (_0x5849bf && !_0x5849bf.textContent.includes("补齐中")) {
          {
            if (_0x307aff >= _0x226c65) {
              {
                _0x5849bf.textContent = "已完成";
                _0x5849bf.disabled = true;
              }
            } else {
              _0x5849bf.textContent = "一键补齐";
              _0x5849bf.disabled = false;
            }
          }
        }
        const _0x418299 = this.state.myMonthInfo["2"] && this.state.myMonthInfo["2"].num || 0;
        const _0x5d015f = 320;
        const _0x20e974 = Math.min(_0x418299, _0x5d015f);
        const _0x157391 = document.getElementById("monthly-fishing-progress");
        const _0x28dc7b = document.getElementById("monthly-fishing-btn");
        if (_0x157391) {
          _0x157391.textContent = _0x20e974 + "/" + _0x5d015f;
        }
        if (_0x28dc7b && !_0x28dc7b.textContent.includes("补齐中")) {
          {
            if (_0x418299 >= _0x5d015f) {
              {
                _0x28dc7b.textContent = "已完成";
                _0x28dc7b.disabled = true;
              }
            } else {
              _0x28dc7b.textContent = "一键补齐";
              _0x28dc7b.disabled = false;
            }
          }
        }
      }
    },
    async completeArenaTask() {
      {
        const _0x14fd6f = document.getElementById("monthly-arena-btn");
        const _0x4d62e6 = document.getElementById("monthly-arena-progress");
        const _0x4784ed = this.state.myArenaInfo?.["num"] || 0;
        const _0x143b56 = 240;
        if (_0x4784ed >= _0x143b56) {
          {
            _0x4ede5b.showtip("竞技场已完成", "info");
            return;
          }
        }
        if (_0x14fd6f) {
          {
            _0x14fd6f.disabled = true;
            _0x14fd6f.textContent = "补齐中... " + _0x4784ed + "/" + _0x143b56;
          }
        }
        this.updateStatus("🎮 竞技场补齐中...");
        try {
          {
            while (this.state.myArenaInfo.num < 240) {
              {
                const _0x5b78e2 = {
                  refresh: false
                };
                const _0x21ffc8 = await _0x4ede5b.sendCommand("arena_getareatarget", _0x5b78e2);
                if (!_0x21ffc8?.["_rawData"]?.["roleList"]?.[0]) {
                  throw new Error("获取目标失败");
                }
                const _0x1e7aa3 = _0x21ffc8._rawData.roleList[0].roleId;
                const _0x3f5bef = {
                  battleVersion: _0x4f313c,
                  targetId: _0x1e7aa3
                };
                const _0x267528 = await _0x4ede5b.sendCommand("fight_startareaarena", _0x3f5bef);
                if (!_0x267528?.["_rawData"]?.["battleData"]) {
                  throw new Error("战斗响应错误");
                }
                const _0x2becb0 = _0x267528._rawData.battleData.result?.["isWin"];
                this.state.myArenaInfo.num += _0x2becb0 ? 2 : 1;
                if (_0x4d62e6) {
                  _0x4d62e6.textContent = this.state.myArenaInfo.num + "/240";
                }
                if (_0x14fd6f) {
                  _0x14fd6f.textContent = "补齐中... " + this.state.myArenaInfo.num + "/240";
                }
                await _0x4ede5b.delay(0.5);
              }
            }
            if (_0x14fd6f) {
              {
                _0x14fd6f.textContent = "已完成";
                _0x14fd6f.disabled = true;
              }
            }
            this.updateStatus("✅ 就绪");
            _0x4ede5b.showtip("竞技场补齐完成！", "success");
          }
        } catch (_0x4a6444) {
          {
            console.error("竞技场补齐失败:", _0x4a6444);
            if (_0x14fd6f) {
              {
                _0x14fd6f.disabled = false;
                _0x14fd6f.textContent = "一键补齐";
              }
            }
            this.updateStatus("❌ 错误");
            _0x4ede5b.showtip("竞技场补齐失败: " + _0x4a6444.message, "error");
          }
        }
      }
    },
    async completeFishingTask() {
      {
        const _0x655231 = document.getElementById("monthly-fishing-btn");
        const _0x4d55e8 = document.getElementById("monthly-fishing-progress");
        const _0x564667 = this.state.myMonthInfo["2"]?.["num"] || 0;
        const _0xb74462 = 320;
        if (_0x564667 >= _0xb74462) {
          {
            _0x4ede5b.showtip("普通钓鱼已完成", "info");
            return;
          }
        }
        _0x655231 && (_0x655231.disabled = true, _0x655231.textContent = "补齐中... " + _0x564667 + "/" + _0xb74462);
        this.updateStatus("🎣 钓鱼补齐中...");
        let _0xbb5419 = 0;
        try {
          {
            while ((this.state.myMonthInfo["2"]?.["num"] || 0) < 320) {
              {
                const _0x1b5c09 = this.state.myMonthInfo["2"]?.["num"] || 0;
                const _0x271ec7 = 320 - _0x1b5c09;
                let _0x3a0910 = _0xbb5419 < 3 ? 1 : Math.min(10, _0x271ec7);
                _0xbb5419++;
                const _0x462022 = {
                  lotteryNumber: _0x3a0910,
                  newFree: true,
                  type: 1
                };
                const _0x938d46 = await _0x4ede5b.sendCommand("artifact_lottery", _0x462022);
                if (!_0x938d46?.["_rawData"]?.["role"]) {
                  throw new Error("钓鱼响应错误");
                }
                const _0x5e3df7 = _0x938d46._rawData.role.statistics?.["month:artifact:2"] || 0;
                this.state.artifactPoint = _0x938d46._rawData.role.statistics?.["artifact:point"] || 0;
                if (!this.state.myMonthInfo["2"]) {
                  this.state.myMonthInfo["2"] = {};
                }
                this.state.myMonthInfo["2"].num = _0x5e3df7;
                if (_0x4d55e8) {
                  _0x4d55e8.textContent = _0x5e3df7 + "/320";
                }
                if (_0x655231) {
                  _0x655231.textContent = "补齐中... " + _0x5e3df7 + "/320";
                }
                await _0x4ede5b.delay(0.5);
              }
            }
            if (_0x655231) {
              _0x655231.textContent = "领取金鱼竿...";
            }
            await this.exchangeGoldfishRod();
            _0x655231 && (_0x655231.textContent = "已完成", _0x655231.disabled = true);
            this.updateStatus("✅ 就绪");
            _0x4ede5b.showtip("普通钓鱼补齐完成！", "success");
          }
        } catch (_0x5856cc) {
          {
            console.error("钓鱼补齐失败:", _0x5856cc);
            if (_0x655231) {
              _0x655231.textContent = "领取金鱼竿...";
            }
            await this.exchangeGoldfishRod();
            const _0x4f3aa9 = this.state.myMonthInfo["2"]?.["num"] || 0;
            if (_0x4f3aa9 >= 320) {
              {
                if (_0x655231) {
                  {
                    _0x655231.textContent = "已完成";
                    _0x655231.disabled = true;
                  }
                }
                this.updateStatus("✅ 就绪");
              }
            } else {
              {
                if (_0x655231) {
                  {
                    _0x655231.disabled = false;
                    _0x655231.textContent = "一键补齐";
                  }
                }
                this.updateStatus("❌ 错误");
                _0x4ede5b.showtip("钓鱼补齐失败: " + _0x5856cc.message, "error");
              }
            }
          }
        }
      }
    },
    async exchangeGoldfishRod() {
      {
        try {
          {
            while (this.state.artifactPoint >= 20) {
              {
                const _0x528e5f = await _0x4ede5b.sendCommand("artifact_exchange", {});
                if (_0x528e5f?.["_rawData"]?.["role"]?.["statistics"]) {
                  this.state.artifactPoint = _0x528e5f._rawData.role.statistics["artifact:point"] || 0;
                } else {
                  {
                    break;
                  }
                }
                await _0x4ede5b.delay(0.5);
              }
            }
          }
        } catch (_0x179122) {
          {
            console.error("金鱼竿兑换失败:", _0x179122);
          }
        }
      }
    }
  };
  const _0x9f9e3a = {
    currentData: null,
    currentDate: "",
    init() {
      {
        const _0x2cd0f7 = document.getElementById("salt-field-date");
        if (_0x2cd0f7) {
          {
            _0x2cd0f7.value = this.getLastSaturdayString();
          }
        }
        const _0x538b23 = document.getElementById("salt-field-query");
        _0x538b23 && _0x538b23.addEventListener("click", () => this.queryWarRecords());
        const _0x54f43a = document.getElementById("salt-field-export");
        _0x54f43a && _0x54f43a.addEventListener("click", () => this.exportWarRecords());
        const _0x252b5f = document.getElementById("salt-field-summary");
        _0x252b5f && _0x252b5f.addEventListener("click", () => this.showSummary());
      }
    },
    getLastSaturdayString() {
      {
        const _0x31a95b = new Date();
        const _0x27d06d = _0x31a95b.getDay();
        let _0x7f98b6 = 0;
        if (_0x27d06d === 6) {
          _0x7f98b6 = 0;
        } else {
          if (_0x27d06d === 0) {
            _0x7f98b6 = 1;
          } else {
            _0x7f98b6 = _0x27d06d + 1;
          }
        }
        const _0x16aea2 = new Date(_0x31a95b);
        _0x16aea2.setDate(_0x31a95b.getDate() - _0x7f98b6);
        const _0x274329 = _0x16aea2.getFullYear();
        const _0x4dc0f6 = String(_0x16aea2.getMonth() + 1).padStart(2, "0");
        const _0x54a6ad = String(_0x16aea2.getDate()).padStart(2, "0");
        return _0x274329 + "-" + _0x4dc0f6 + "-" + _0x54a6ad;
      }
    },
    formatDateForAPI(_0x23d91c) {
      {
        return _0x23d91c.replace(/-/g, "/");
      }
    },
    async queryWarRecords() {
      {
        const _0xff5601 = document.getElementById("salt-field-status");
        const _0xd486c2 = document.getElementById("salt-field-results");
        const _0x56e763 = document.getElementById("salt-field-actions");
        if (!_0xff5601 || !_0xd486c2 || !_0x56e763) {
          return;
        }
        _0xff5601.textContent = "🔍 查询中...";
        _0xd486c2.innerHTML = "<p style=\"text-align: center; color: var(--text-secondary); font-size: 12px;\">正在查询战绩...</p>";
        _0x56e763.style.display = "none";
        try {
          {
            const _0x152679 = document.getElementById("salt-field-date");
            if (!_0x152679) {
              throw new Error("日期输入框未找到");
            }
            this.currentDate = _0x152679.value;
            const _0x210254 = this.formatDateForAPI(this.currentDate);
            const _0x3a57f6 = {
              date: _0x210254
            };
            const _0xf5c8d = await _0x4ede5b.sendCommand("legionwar_getdetails", _0x3a57f6);
            const _0x545007 = _0xf5c8d?.["roleDetailsList"] || _0xf5c8d?.["_rawData"]?.["roleDetailsList"] || _0xf5c8d?.["body"]?.["roleDetailsList"] || _0xf5c8d?.["data"]?.["roleDetailsList"] || [];
            this.currentData = _0x545007;
            if (!_0x545007 || _0x545007.length === 0) {
              {
                _0xd486c2.innerHTML = "<p style=\"text-align: center; color: var(--text-secondary); font-size: 12px;\">暂无战绩数据</p>";
              }
            } else {
              {
                const _0x5bf056 = [..._0x545007].sort((_0x4f4359, _0x281cee) => Number(_0x281cee?.["winCnt"] || 0) - Number(_0x4f4359?.["winCnt"] || 0));
                const _0x21574b = _0x5bf056.map((_0x4dd2cd, _0x2084aa) => {
                  {
                    const _0x50167e = _0x4dd2cd?.["name"] || _0x4dd2cd?.["roleName"] || _0x4dd2cd?.["nickname"] || "-";
                    const _0x5c5a23 = Number(_0x4dd2cd?.["winCnt"] || 0);
                    const _0x1bc849 = Number(_0x4dd2cd?.["loseCnt"] || 0);
                    const _0x1f47b4 = Number(_0x4dd2cd?.["buildingCnt"] || 0);
                    return "\n                        <div style=\"display:flex; align-items:center; justify-content:space-between; padding:8px; margin:4px 0; background: var(--item-bg); border:1px solid var(--item-border); border-radius:6px;\">\n                            <div style=\"display:flex; gap:10px; align-items:center;\">\n                                <span style=\"color:var(--text-secondary); font-size:12px;\">" + (_0x2084aa + 1) + ".</span>\n                                <span style=\"color:var(--text-primary); font-weight:500;\">" + _0x50167e + "</span>\n                            </div>\n                            <div style=\"display:flex; gap:15px; color:var(--text-secondary); font-size:12px;\">\n                                <span>击杀 <span style=\"color:var(--success); font-weight:500;\">" + _0x5c5a23 + "</span></span>\n                                <span>死亡 <span style=\"color:var(--error); font-weight:500;\">" + _0x1bc849 + "</span></span>\n                                <span>攻城 <span style=\"color:var(--highlight); font-weight:500;\">" + _0x1f47b4 + "</span></span>\n                            </div>\n                        </div>";
                  }
                }).join("");
                const _0x1c74fa = "\n                    <div style=\"margin-bottom:8px; padding:8px; background: rgba(0,0,0,0.02); border-radius:6px; color:var(--text-secondary); font-size:12px;\">\n                        查询日期：" + this.currentDate + "｜参战人数：" + _0x545007.length + "\n                    </div>";
                _0xd486c2.innerHTML = _0x1c74fa + _0x21574b;
                _0x56e763.style.display = "grid";
              }
            }
            _0xff5601.textContent = "📊 就绪";
            _0x4ede5b.showtip("盐场战报加载完成", "success");
          }
        } catch (_0x3391a3) {
          {
            _0xd486c2.innerHTML = "<p style=\"text-align: center; color: var(--error); font-size: 12px;\">查询失败：" + _0x3391a3.message + "</p>";
            _0xff5601.textContent = "❌ 查询出错";
            console.error("查询盐场战报失败:", _0x3391a3);
          }
        }
      }
    },
    exportWarRecords() {
      {
        if (!this.currentData || !this.currentDate) {
          {
            _0x4ede5b.showtip("请先查询战报数据", "error");
            return;
          }
        }
        try {
          {
            let _0x24e9d8 = "序号,玩家名称,击杀数,死亡数,攻城数\n";
            this.currentData.sort((_0x2b4afd, _0x31b0f2) => Number(_0x31b0f2?.["winCnt"] || 0) - Number(_0x2b4afd?.["winCnt"] || 0)).forEach((_0x1361d1, _0x2151b5) => {
              {
                const _0x5732b0 = _0x1361d1?.["name"] || _0x1361d1?.["roleName"] || _0x1361d1?.["nickname"] || "-";
                const _0x51a715 = Number(_0x1361d1?.["winCnt"] || 0);
                const _0x52f1da = Number(_0x1361d1?.["loseCnt"] || 0);
                const _0x51c7fe = Number(_0x1361d1?.["buildingCnt"] || 0);
                _0x24e9d8 += _0x2151b5 + 1 + ",\"" + _0x5732b0 + "\"," + _0x51a715 + "," + _0x52f1da + "," + _0x51c7fe + "\n";
              }
            });
            const _0x2879c9 = {
              type: "text/csv;charset=utf-8;"
            };
            const _0x4171f5 = new Blob([_0x24e9d8], _0x2879c9);
            const _0x271c5b = document.createElement("a");
            const _0x5a8e85 = URL.createObjectURL(_0x4171f5);
            _0x271c5b.setAttribute("href", _0x5a8e85);
            _0x271c5b.setAttribute("download", "盐场战报_" + this.currentDate.replace(/-/g, "") + ".csv");
            _0x271c5b.style.visibility = "hidden";
            document.body.appendChild(_0x271c5b);
            _0x271c5b.click();
            document.body.removeChild(_0x271c5b);
            _0x4ede5b.showtip("战报导出成功", "success");
          }
        } catch (_0x2b339b) {
          _0x4ede5b.showtip("导出失败: " + _0x2b339b.message, "error");
          console.error("导出盐场战报失败:", _0x2b339b);
        }
      }
    },
    showSummary() {
      {
        if (!this.currentData) {
          {
            _0x4ede5b.showtip("请先查询战报数据", "error");
            return;
          }
        }
        try {
          {
            let _0x4b93a7 = 0;
            let _0x406f99 = 0;
            let _0x5a71dd = 0;
            let _0x408e3f = 0;
            this.currentData.forEach(_0x4c2b92 => {
              {
                const _0xddcaae = Number(_0x4c2b92?.["winCnt"] || 0);
                const _0x21d536 = Number(_0x4c2b92?.["loseCnt"] || 0);
                const _0x9779de = Number(_0x4c2b92?.["buildingCnt"] || 0);
                _0x4b93a7 += _0xddcaae;
                _0x406f99 += _0x21d536;
                _0x5a71dd += _0x9779de;
                if (_0xddcaae > 0 || _0x21d536 > 0 || _0x9779de > 0) {
                  {
                    _0x408e3f++;
                  }
                }
              }
            });
            const _0x3a7451 = document.getElementById("salt-field-results");
            if (_0x3a7451) {
              {
                const _0x1e107a = "\n                    <div style=\"padding:15px; background: rgba(0,0,0,0.02); border-radius:8px; margin-bottom:10px;\">\n                        <h4 style=\"margin:0 0 10px 0; color:var(--highlight); font-size:14px;\">盐场战报汇总</h4>\n                        <div style=\"display:grid; grid-template-columns: 1fr 1fr; gap:10px;\">\n                            <div style=\"padding:8px; background:var(--item-bg); border:1px solid var(--item-border); border-radius:6px;\">\n                                <div style=\"color:var(--text-secondary); font-size:12px;\">参战总人数</div>\n                                <div style=\"color:var(--text-primary); font-size:16px; font-weight:600;\">" + this.currentData.length + "</div>\n                            </div>\n                            <div style=\"padding:8px; background:var(--item-bg); border:1px solid var(--item-border); border-radius:6px;\">\n                                <div style=\"color:var(--text-secondary); font-size:12px;\">活跃成员数</div>\n                                <div style=\"color:var(--success); font-size:16px; font-weight:600;\">" + _0x408e3f + "</div>\n                            </div>\n                            <div style=\"padding:8px; background:var(--item-bg); border:1px solid var(--item-border); border-radius:6px;\">\n                                <div style=\"color:var(--text-secondary); font-size:12px;\">总击杀数</div>\n                                <div style=\"color:var(--success); font-size:16px; font-weight:600;\">" + _0x4b93a7 + "</div>\n                            </div>\n                            <div style=\"padding:8px; background:var(--item-bg); border:1px solid var(--item-border); border-radius:6px;\">\n                                <div style=\"color:var(--text-secondary); font-size:12px;\">总死亡数</div>\n                                <div style=\"color:var(--error); font-size:16px; font-weight:600;\">" + _0x406f99 + "</div>\n                            </div>\n                            <div style=\"padding:8px; background:var(--item-bg); border:1px solid var(--item-border); border-radius:6px;\">\n                                <div style=\"color:var(--text-secondary); font-size:12px;\">总攻城数</div>\n                                <div style=\"color:var(--highlight); font-size:16px; font-weight:600;\">" + _0x5a71dd + "</div>\n                            </div>\n                            <div style=\"padding:8px; background:var(--item-bg); border:1px solid var(--item-border); border-radius:6px;\">\n                                <div style=\"color:var(--text-secondary); font-size:12px;\">击杀/死亡比</div>\n                                <div style=\"color:var(--text-primary); font-size:16px; font-weight:600;\">\n                                    " + (_0x406f99 > 0 ? (_0x4b93a7 / _0x406f99).toFixed(2) : "∞") + "\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div style=\"text-align:center;\">\n                        <button class=\"task-btn\" onclick=\"document.getElementById('salt-field-query').click();\">\n                            查看详细数据\n                        </button>\n                    </div>";
                _0x3a7451.innerHTML = _0x1e107a;
              }
            }
          }
        } catch (_0x5d9a77) {
          _0x4ede5b.showtip("生成汇总失败: " + _0x5d9a77.message, "error");
          console.error("生成盐场战报汇总失败:", _0x5d9a77);
        }
      }
    }
  };
  const _0x1db57c = {
    isRunning: false,
    isStopping: false,
    dom: {},
    delayBetweenFights: 1,
    init() {
      {
        this.dom.startButton = document.querySelector("#start-winrate-btn");
        this.dom.fightCountInput = document.querySelector("#winrate-fight-count");
        this.dom.statusEl = document.querySelector("#winrate-status");
        this.dom.resultsEl = document.querySelector("#winrate-results");
        const _0xb575f0 = localStorage.getItem("winrateFightCount");
        _0xb575f0 && this.dom.fightCountInput && (this.dom.fightCountInput.value = _0xb575f0);
        if (this.dom.startButton) {
          {
            this.dom.startButton.addEventListener("click", this.handleMainButtonClick.bind(this));
          }
        }
        if (this.dom.fightCountInput) {
          {
            this.dom.fightCountInput.addEventListener("change", _0x37657b => {
              localStorage.setItem("winrateFightCount", _0x37657b.target.value);
            });
          }
        }
      }
    },
    updateStatus(_0x20f026) {
      {
        this.dom.statusEl && (this.dom.statusEl.textContent = _0x20f026);
      }
    },
    clearResults() {
      {
        if (this.dom.resultsEl) {
          {
            this.dom.resultsEl.innerHTML = "";
          }
        }
      }
    },
    displayOpponentResult(_0x38d488, _0x4c64cf) {
      {
        if (!this.dom.resultsEl) {
          return;
        }
        let _0x22c0f6 = this.dom.resultsEl.querySelector("[data-opponent-id=\"" + _0x38d488.id + "\"]");
        const _0x116e18 = _0x4c64cf.wins + _0x4c64cf.losses + _0x4c64cf.draws;
        const _0x4c390d = _0x116e18 > 0 ? (_0x4c64cf.wins / _0x116e18 * 100).toFixed(1) : 0;
        if (_0x22c0f6) {
          _0x22c0f6.innerHTML = "\n                    <div><strong>" + _0x38d488.name + "</strong> (ID: " + _0x38d488.id + ")</div>\n                    <div>战绩: <span class=\"winrate-win\">" + _0x4c64cf.wins + "胜</span> / <span class=\"winrate-loss\">" + _0x4c64cf.losses + "负</span> / " + _0x4c64cf.draws + "平 | 胜率: <strong>" + _0x4c390d + "%</strong></div>\n                ";
        } else {
          {
            _0x22c0f6 = document.createElement("div");
            _0x22c0f6.className = "winrate-result-item";
            _0x22c0f6.dataset.opponentId = _0x38d488.id;
            _0x22c0f6.innerHTML = "\n                    <div><strong>" + _0x38d488.name + "</strong> (ID: " + _0x38d488.id + ")</div>\n                    <div>战绩: <span class=\"winrate-win\">" + _0x4c64cf.wins + "胜</span> / <span class=\"winrate-loss\">" + _0x4c64cf.losses + "负</span> / " + _0x4c64cf.draws + "平 | 胜率: <strong>" + _0x4c390d + "%</strong></div>\n                ";
            this.dom.resultsEl.appendChild(_0x22c0f6);
          }
        }
      }
    },
    stop(_0x371b17 = false) {
      {
        !_0x371b17 && (this.isStopping = true, this.updateStatus("正在请求停止..."));
        this.isRunning = false;
        this.isStopping = false;
        if (this.dom.startButton) {
          {
            this.dom.startButton.textContent = "获取对手并开始测试";
            this.dom.startButton.classList.remove("stop");
          }
        }
        this.dom.fightCountInput && (this.dom.fightCountInput.disabled = false);
        if (_0x371b17) {
          this.updateStatus("✅ 所有测试完成！");
        } else {
          {
            this.updateStatus("✅ 已停止");
          }
        }
      }
    },
    async start() {
      {
        if (this.isRunning) {
          return;
        }
        const _0x374f95 = parseInt(this.dom.fightCountInput?.["value"] || 30, 10);
        if (isNaN(_0x374f95) || _0x374f95 <= 0) {
          {
            this.updateStatus("❌ 请输入有效的战斗次数");
            _0x4ede5b.showtip("请输入有效的战斗次数", "error");
            return;
          }
        }
        this.isRunning = true;
        this.isStopping = false;
        if (this.dom.startButton) {
          {
            this.dom.startButton.textContent = "停止测试";
            this.dom.startButton.classList.add("stop");
          }
        }
        if (this.dom.fightCountInput) {
          {
            this.dom.fightCountInput.disabled = true;
          }
        }
        this.clearResults();
        try {
          this.updateStatus("⚔️ 正在进入竞技场...");
          await _0x4ede5b.sendCommand("arena_startarea", {});
          await _0x4ede5b.delay(1);
        } catch (_0x2c8d5c) {
          {
            this.updateStatus("❌ 进入竞技场失败: " + _0x2c8d5c.message);
            this.stop();
            return;
          }
        }
        this.updateStatus("📋 正在获取竞技场对手列表...");
        let _0x534917 = [];
        try {
          {
            const _0x49512c = {
              refresh: false
            };
            const _0x3f5556 = await _0x4ede5b.sendCommand("arena_getareatarget", _0x49512c);
            const _0x42fc6b = _0x3f5556?.["_rawData"]?.["roleList"];
            if (!_0x42fc6b || _0x42fc6b.length === 0) {
              {
                throw new Error("未能获取到对手列表");
              }
            }
            _0x534917 = _0x42fc6b.map(_0x4bdb02 => ({
              id: _0x4bdb02.roleId,
              name: _0x4bdb02.info?.["name"] || "对手" + _0x4bdb02.roleId
            }));
            this.clearResults();
            _0x534917.forEach(_0xb2f635 => {
              {
                const _0x420243 = document.createElement("div");
                _0x420243.className = "winrate-result-item";
                _0x420243.dataset.opponentId = _0xb2f635.id;
                _0x420243.innerHTML = "\n                        <div><strong>" + _0xb2f635.name + "</strong> (ID: " + _0xb2f635.id + ")</div>\n                        <div class=\"winrate-opponent-placeholder\">正在准备测试...</div>\n                    ";
                this.dom.resultsEl.appendChild(_0x420243);
              }
            });
            this.updateStatus("🎯 获取到 " + _0x534917.length + " 位对手，开始极速测试...");
          }
        } catch (_0x4f1ad0) {
          {
            this.updateStatus("❌ 获取对手失败: " + _0x4f1ad0.message);
            _0x4ede5b.showtip("获取对手失败: " + _0x4f1ad0.message, "error");
            this.stop();
            return;
          }
        }
        let _0x59e880 = 0;
        for (const _0x2de2cc of _0x534917) {
          {
            _0x59e880++;
            if (this.isStopping) {
              {
                this.updateStatus("🛑 测试已手动停止");
                break;
              }
            }
            this.updateStatus("⚔️ 测试对手 " + _0x2de2cc.name + " (" + _0x59e880 + "/" + _0x534917.length + ")");
            const _0x3e4e29 = {
              wins: 0,
              losses: 0,
              draws: 0
            };
            for (let _0x12241e = 1; _0x12241e <= _0x374f95; _0x12241e++) {
              {
                if (this.isStopping) {
                  break;
                }
                try {
                  {
                    const _0x176469 = {
                      battleVersion: _0x4f313c,
                      targetId: _0x2de2cc.id
                    };
                    const _0x3c57ce = await _0x4ede5b.sendCommand("fight_startpvp", _0x176469);
                    const _0x45a74f = _0x3c57ce?.["_rawData"]?.["battleData"]?.["result"];
                    const _0x34194e = _0x45a74f?.["sponsor"]?.["ext"]?.["curHP"];
                    const _0x5c5de7 = _0x45a74f?.["accept"]?.["ext"]?.["curHP"];
                    if (_0x45a74f && typeof _0x34194e !== "undefined" && typeof _0x5c5de7 !== "undefined") {
                      {
                        if (_0x34194e > 0 && _0x5c5de7 === 0) {
                          {
                            _0x3e4e29.wins++;
                          }
                        } else {
                          _0x34194e === 0 ? _0x3e4e29.losses++ : _0x3e4e29.draws++;
                        }
                      }
                    } else {
                      _0x3e4e29.draws++;
                    }
                  }
                } catch (_0x3fcd2d) {
                  _0x3e4e29.draws++;
                  console.error("挑战 " + _0x2de2cc.name + " 时出错:", _0x3fcd2d.message);
                }
                if (_0x12241e % 10 === 0) {
                  {
                    await _0x4ede5b.delay(this.delayBetweenFights / 1000);
                  }
                }
              }
            }
            this.displayOpponentResult(_0x2de2cc, _0x3e4e29);
          }
        }
        this.stop(true);
      }
    },
    handleMainButtonClick() {
      {
        if (this.isRunning) {
          {
            this.stop();
          }
        } else {
          {
            this.start();
          }
        }
      }
    }
  };
  const _0x29858d = _0x951c8b.querySelector(".panel-content");
  const _0x13c360 = _0x951c8b.querySelector("#opacity-slider");
  const _0xc31334 = _0x21eba4 => {
    {
      const _0x17e48f = _0x21eba4 / 100;
      _0x951c8b.style.background = "transparent";
      _0x951c8b.querySelector(".opacity-value").textContent = _0x21eba4 + "%";
      _0x951c8b.style.setProperty("--panel-bg", "rgba(247, 250, 252, " + 0.98 * _0x17e48f + ")");
      _0x951c8b.style.setProperty("--item-bg", "rgba(255, 255, 255, " + _0x17e48f + ")");
      const _0x7ca0e0 = _0x951c8b.querySelector(".panel-header");
      _0x7ca0e0 && (_0x7ca0e0.style.background = "rgba(0, 0, 0, " + 0.02 * _0x17e48f + ")");
    }
  };
  _0x13c360.addEventListener("input", _0x52f321 => _0xc31334(_0x52f321.target.value));
  _0xc31334(_0x13c360.value);
  _0x951c8b.querySelector(".panel-header").addEventListener("click", _0x3cdd97 => {
    {
      if (_0x3cdd97.target.closest(".opacity-control")) {
        return;
      }
      _0x951c8b.classList.toggle("collapse");
      _0x951c8b.classList.toggle("expanded");
    }
  });
  _0x29858d.addEventListener("click", _0x3636de => {
    {
      const _0x51048a = _0x3636de.target.closest(".tab-btn");
      const _0x213874 = _0x3636de.target.closest(".sub-tab-btn");
      if (_0x51048a && !_0x51048a.classList.contains("active")) {
        {
          _0x29858d.querySelector(".tab-btn.active").classList.remove("active");
          _0x51048a.classList.add("active");
          _0x29858d.querySelector(".tab-pane.active").classList.remove("active");
          _0x29858d.querySelector("#" + _0x51048a.dataset.tab).classList.add("active");
        }
      }
      if (_0x213874 && !_0x213874.classList.contains("active")) {
        {
          const _0x562fdb = _0x213874.closest(".tab-pane");
          _0x562fdb.querySelector(".sub-tab-btn.active").classList.remove("active");
          _0x213874.classList.add("active");
          _0x562fdb.querySelector(".sub-pane.active").classList.remove("active");
          _0x562fdb.querySelector("#" + _0x213874.dataset.subTab).classList.add("active");
        }
      }
    }
  });
  const _0xa28111 = document.getElementById("club-boss-count");
  _0x951c8b.querySelector("#club-module").addEventListener("click", _0x480b09 => {
    {
      const _0x1c331b = _0x480b09.target.dataset.action;
      if (!_0x1c331b) {
        return;
      }
      let _0x47f591 = parseInt(_0xa28111.textContent);
      if (_0x1c331b === "increment" && _0x47f591 < 4) {
        _0x47f591++;
      }
      if (_0x1c331b === "decrement" && _0x47f591 > 0) {
        _0x47f591--;
      }
      _0xa28111.textContent = _0x47f591;
    }
  });
  _0x29858d.addEventListener("click", _0x363d55 => {
    {
      const _0x63446 = _0x363d55.target.closest("[data-module]");
      if (_0x63446) {
        {
          const _0x5223ea = _0x63446.dataset.module;
          _0x29858d.querySelectorAll(".module-content").forEach(_0x288cbc => {
            {
              _0x288cbc.classList.remove("active");
            }
          });
          const _0xc0e8fb = _0x29858d.querySelector("#" + _0x5223ea);
          if (_0xc0e8fb) {
            {
              _0xc0e8fb.classList.add("active");
            }
          }
        }
      }
    }
  });
  const _0x3c35df = {
    id: "daily-hangup-combined",
    label: "收菜5次、加钟",
    task: "daily-task-hangup-combined",
    defaultChecked: true
  };
  const _0x312327 = {
    id: "daily-bottle-renew",
    label: "续罐子",
    task: "daily-task-bottle-renew",
    defaultChecked: true
  };
  const _0xe817f5 = {
    id: "daily-bottle-claim",
    label: "收盐罐",
    task: "daily-task-bottle-claim",
    defaultChecked: false
  };
  const _0x422cfc = {
    id: "daily-quick-tasks",
    label: "邮件、签到、赠金币、福利",
    task: "daily-task-combined-quick",
    defaultChecked: true
  };
  const _0x47e335 = {
    id: "daily-boss",
    label: "每日咸王考验",
    task: "daily-task-boss",
    defaultChecked: true
  };
  const _0x250ae1 = {
    id: "daily-gold",
    label: "点金三次",
    task: "daily-task-gold",
    defaultChecked: true
  };
  const _0x10a46f = {
    id: "daily-quiz",
    label: "自动答题",
    task: "daily-task-quiz",
    defaultChecked: true
  };
  const _0x26cd4c = {
    id: "daily-genie-tickets",
    label: "领取扫荡券",
    task: "daily-task-genie-tickets",
    defaultChecked: true
  };
  const _0x284231 = {
    id: "daily-genie-sweep",
    label: "灯神扫荡",
    task: "daily-task-genie-sweep",
    defaultChecked: true
  };
  const _0x3d8aeb = {
    id: "daily-box",
    label: "开启10木箱",
    task: "daily-task-box",
    defaultChecked: false
  };
  const _0x2b419e = {
    id: "daily-recruit",
    label: "执行2次招募",
    task: "daily-task-recruit",
    defaultChecked: false
  };
  const _0x501495 = {
    id: "daily-arena",
    label: "进行3次竞技场战斗",
    task: "daily-task-arena",
    defaultChecked: false
  };
  const _0x14d009 = {
    id: "daily-buy-bronze-box",
    label: "购买青铜宝箱",
    task: "daily-task-buy-bronze-box",
    defaultChecked: false
  };
  const _0x3af039 = [_0x3c35df, _0x312327, _0xe817f5, _0x422cfc, _0x47e335, _0x250ae1, _0x10a46f, _0x26cd4c, _0x284231, _0x3d8aeb, _0x2b419e, _0x501495, _0x14d009];
  function _0x459f29() {
    {
      try {
        {
          const _0x54acc2 = localStorage.getItem("dailyTaskStates");
          return _0x54acc2 ? JSON.parse(_0x54acc2) : {};
        }
      } catch (_0x4a9c69) {
        {
          console.error("读取保存的任务状态失败:", _0x4a9c69);
          return {};
        }
      }
    }
  }
  function _0x1c4176(_0x2ac70e) {
    {
      try {
        {
          localStorage.setItem("dailyTaskStates", JSON.stringify(_0x2ac70e));
        }
      } catch (_0x38499b) {
        console.error("保存任务状态失败:", _0x38499b);
      }
    }
  }
  const _0xbcd2ce = _0x459f29();
  const _0x2b0b8f = _0x951c8b.querySelector(".daily-task-list");
  _0x3af039.forEach(_0x3f3e50 => {
    {
      const _0x5efbb5 = _0xbcd2ce[_0x3f3e50.task] !== undefined ? _0xbcd2ce[_0x3f3e50.task] : _0x3f3e50.defaultChecked;
      const _0x23617a = document.createElement("div");
      _0x23617a.className = "daily-task-item";
      _0x23617a.innerHTML = "\n            <div class=\"daily-task-info\">\n                <input type=\"checkbox\" id=\"" + _0x3f3e50.id + "\" data-task-name=\"" + _0x3f3e50.task + "\" " + (_0x5efbb5 ? "checked" : "") + ">\n                <label for=\"" + _0x3f3e50.id + "\">" + _0x3f3e50.label + "</label>\n            </div>\n            <button class=\"task-btn\" data-task=\"" + _0x3f3e50.task + "\">独立执行</button>\n        ";
      _0x2b0b8f.appendChild(_0x23617a);
      const _0x268566 = _0x23617a.querySelector("input[type=\"checkbox\"]");
      _0x268566.addEventListener("change", () => {
        {
          _0xbcd2ce[_0x3f3e50.task] = _0x268566.checked;
          _0x1c4176(_0xbcd2ce);
        }
      });
    }
  });
  _0x2b0b8f.querySelectorAll("input[type=\"checkbox\"]").forEach(_0x20e117 => {
    {
      _0x20e117.addEventListener("change", () => {
        {
          const _0x14fc0e = _0x20e117.dataset.taskName;
          _0x14fc0e && (_0xbcd2ce[_0x14fc0e] = _0x20e117.checked, _0x1c4176(_0xbcd2ce));
        }
      });
    }
  });
  const _0x257570 = {
    fullCarData: [],
    timeInterval: null,
    sendCount: 0,
    isBatchRefreshing: false,
    legionMembersMap: {},
    helperSelectionByCarId: {},
    availableConditions: ["品质", "金砖", "招募令", "彩玉", "白玉", "万能碎片", "刷新券"]
  };
  const _0x259766 = {
    statusEl: null,
    dataTable: null,
    dataBody: null
  };
  const _0x4f1c5b = {
    "1": "普通",
    "2": "稀有",
    "3": "史诗",
    "4": "传说",
    "5": "神话",
    "6": "传奇"
  };
  const _0x1cbb52 = {
    "1": "color:var(--text-secondary)",
    "2": "color:#3182ce",
    "3": "color:#9f7aea",
    "4": "color:#dd6b20",
    "5": "color:#e53e3e",
    "6": "color:#d69e2e"
  };
  const _0x197cb0 = {
    state: _0x257570,
    dom: _0x259766,
    init() {
      {
        const _0x105b7b = document.getElementById("car-module");
        this.dom = {
          statusEl: _0x105b7b.querySelector(".status"),
          dataTable: _0x105b7b.querySelector(".car-data-table"),
          dataBody: _0x105b7b.querySelector("tbody")
        };
        _0x105b7b.addEventListener("click", _0x2d61ea => {
          {
            const _0x545c88 = _0x2d61ea.target.closest(".task-btn, .car-action-btn, .car-batch-btn");
            if (!_0x545c88) {
              return;
            }
            const {
              task: _0x49a18,
              action: _0x4d41fb,
              id: _0x387044
            } = _0x545c88.dataset;
            if (_0x49a18 === "car-query") {
              this.handleTask(_0x545c88);
            } else {
              if (_0x4d41fb === "toggleRefreshFilter") {
                {
                  const _0x231e76 = document.querySelector(".refresh-filter-panel");
                  if (_0x231e76) {
                    _0x231e76.style.display = _0x231e76.style.display === "none" ? "block" : "none";
                  }
                }
              } else {
                if (_0x4d41fb === "sendAll") {
                  this.sendAllCars();
                } else {
                  if (_0x4d41fb === "claimAll") {
                    this.claimAllCars();
                  } else {
                    if (_0x4d41fb === "send") {
                      this.sendCar(_0x387044);
                    } else {
                      if (_0x4d41fb === "refresh") {
                        this.refreshCar(_0x387044);
                      } else {
                        if (_0x4d41fb === "claim" && !_0x545c88.classList.contains("is-disabled")) {
                          this.claimCar(_0x387044);
                        } else {
                          if (_0x4d41fb === "claim") {
                            _0x4ede5b.showtip("赛车尚未到站，无法收取", "error");
                          } else {
                            if (_0x4d41fb === "startBatchRefresh" && !_0x545c88.classList.contains("is-disabled")) {
                              this.startBatchRefresh();
                            } else {
                              if (_0x4d41fb === "setHelper") {
                                {
                                  const _0x127a21 = this.state.fullCarData.find(_0x1940f9 => String(_0x1940f9.carId) === String(_0x387044));
                                  if (_0x127a21) {
                                    this.openHelperDialog(_0x127a21);
                                  }
                                }
                              } else {
                                if (_0x4d41fb === "openMembers") {
                                  this.openMembersDialog();
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        });
        window.addEventListener("beforeunload", () => this.stopTimeRefresh());
      }
    },
    async handleTask(_0x3f4bbc) {
      {
        const _0x431770 = _0x3f4bbc.textContent;
        _0x3f4bbc.disabled = true;
        _0x3f4bbc.textContent = "查询中...";
        await this.queryClubCars();
        _0x3f4bbc.disabled = false;
        _0x3f4bbc.textContent = _0x431770;
      }
    },
    isCarEventActive: () => {
      {
        const _0x568b85 = new Date();
        return _0x568b85.getDay() >= 1 && _0x568b85.getDay() <= 3 && _0x568b85.getHours() >= 6 && _0x568b85.getHours() < 20;
      }
    },
    parseRewards(_0x22f2f2) {
      {
        if (!_0x22f2f2?.["length"]) {
          return [];
        }
        const _0x3c9c0e = {
          "2_0": "金砖",
          "0_0": "金砖",
          "3_1001": "招募令",
          "3_1023": "彩玉",
          "3_1022": "白玉",
          "3_3201": "万能碎片",
          "3_35002": "刷新券"
        };
        const _0x1de678 = {};
        _0x22f2f2.forEach(_0x50e10f => {
          {
            const _0x565d69 = _0x3c9c0e[_0x50e10f.type + "_" + _0x50e10f.itemId];
            if (_0x565d69) {
              _0x1de678[_0x565d69] = (_0x1de678[_0x565d69] || 0) + _0x50e10f.value;
            }
          }
        });
        return Object.entries(_0x1de678).map(([_0x1e9a3d, _0x51c26c]) => _0x1e9a3d + ":" + _0x51c26c);
      }
    },
    getCarQualityText: _0x37b3fc => _0x4f1c5b[_0x37b3fc] || "未知",
    getCarQualityStyle: _0x4b0878 => (_0x1cbb52[_0x4b0878] || "") + ";font-weight:bold;",
    getCarStatus(_0x5a0a82) {
      {
        const _0x49addc = {
          status: "待发车",
          statusClass: "status-pending"
        };
        if (!_0x5a0a82.sendAt) {
          return _0x49addc;
        }
        const _0x49e39f = {
          "1": 2.5,
          "2": 2.5,
          "3": 3,
          "4": 3,
          "5": 4,
          "6": 4
        };
        const _0x7e904b = (_0x49e39f[_0x5a0a82.quality] || 0) * 3600000;
        const _0x2e8468 = {
          status: "未知状态",
          statusClass: "status-pending"
        };
        if (!_0x7e904b) {
          return _0x2e8468;
        }
        const _0x114451 = _0x5a0a82.sendAt * 1000 + _0x7e904b - Date.now();
        if (_0x114451 <= 0) {
          return {
            status: "已完成",
            statusClass: "status-completed"
          };
        }
        const _0xb6456e = _0x5ad48a => _0x5ad48a.toString().padStart(2, "0");
        return {
          status: "剩余 " + _0xb6456e(Math.floor(_0x114451 / 3600000)) + ":" + _0xb6456e(Math.floor(_0x114451 % 3600000 / 60000)) + ":" + _0xb6456e(Math.floor(_0x114451 % 60000 / 1000)),
          statusClass: "status-running"
        };
      }
    },
    startTimeRefresh() {
      this.stopTimeRefresh();
      this.state.timeInterval = setInterval(() => this.renderCarData(), 1000);
    },
    stopTimeRefresh() {
      {
        if (this.state.timeInterval) {
          clearInterval(this.state.timeInterval);
        }
      }
    },
    renderCarData() {
      {
        const _0xbe138f = this.state.fullCarData.length > 0;
        this.dom.dataTable.style.display = _0xbe138f ? "table" : "none";
        if (!_0xbe138f) {
          {
            this.stopTimeRefresh();
            return;
          }
        }
        this.dom.dataBody.innerHTML = "";
        const _0x1d1ad1 = [...this.state.fullCarData].sort((_0x35cab7, _0x589b9d) => _0x35cab7.slot - _0x589b9d.slot);
        const _0x14ce26 = {
          "金砖": 2000,
          "万能碎片": 10,
          "招募令": 10,
          "白玉": 2000,
          "彩玉": 2
        };
        const _0x366b23 = _0x28ed43 => {
          {
            const [_0x351267, _0x1c337e] = _0x28ed43.split(":");
            return _0x1c337e && parseInt(_0x1c337e) >= (_0x14ce26[_0x351267] || Infinity);
          }
        };
        _0x1d1ad1.forEach(_0x4750fd => {
          {
            const _0x14fd8b = this.getCarStatus(_0x4750fd);
            let _0x443c48 = "<div class=\"car-status " + _0x14fd8b.statusClass + "\">" + _0x14fd8b.status + "</div>";
            if (!_0x4750fd.sendAt) {
              {
                const _0x5c1831 = 5 - _0x4750fd.refreshCount;
                _0x443c48 += "<div class=\"pity-counter " + (_0x5c1831 <= 1 ? "mythic-guaranteed" : "") + "\">" + (_0x5c1831 <= 1 ? "本次刷新必出神话" : "再刷" + _0x5c1831 + "次出神话") + "</div>";
              }
            }
            const _0x4d9b45 = !this.isCarEventActive() || this.state.sendCount >= 4;
            const _0x19da32 = _0x14fd8b.statusClass === "status-completed";
            let _0xd15401 = "";
            if (!_0x4750fd.sendAt) {
              {
                _0xd15401 = "<button class=\"car-action-btn\" data-action=\"refresh\" data-id=\"" + _0x4750fd.carId + "\">刷新</button>";
                if (Number(_0x4750fd.quality || 0) >= 5) {
                  {
                    const _0x33a774 = (this.state.helperSelectionByCarId || {})[String(_0x4750fd.carId)];
                    const _0x58f992 = _0x33a774 ? this.getMemberName(_0x33a774) : "";
                    _0xd15401 += "<button class=\"car-action-btn helper\" data-action=\"setHelper\" data-id=\"" + _0x4750fd.carId + "\">" + (_0x58f992 ? "护卫(" + _0x58f992 + ")" : "护卫") + "</button>";
                  }
                }
                _0xd15401 += "<button class=\"car-action-btn send " + (_0x4d9b45 ? "is-disabled" : "") + "\" data-action=\"send\" data-id=\"" + _0x4750fd.carId + "\">发车</button>";
              }
            } else {
              _0xd15401 = "<button class=\"car-action-btn claim " + (_0x19da32 ? "" : "is-disabled") + "\" data-action=\"claim\" data-id=\"" + _0x4750fd.carId + "\">收车</button>";
            }
            const _0x4a62c3 = this.dom.dataBody.insertRow();
            const _0x2fcbc4 = _0x4750fd.rewards.map(_0x29d60d => "<span class=\"" + (_0x366b23(_0x29d60d) ? "highlight-reward" : "") + "\">" + _0x29d60d + "</span>").join("") || "暂无";
            _0x4a62c3.innerHTML = "<td>" + (_0x4750fd.slot + 1) + "</td><td style=\"" + this.getCarQualityStyle(_0x4750fd.quality) + "\">" + this.getCarQualityText(_0x4750fd.quality) + "</td><td class=\"car-rewards\" title=\"" + _0x4750fd.rewards.join("，") + "\">" + _0x2fcbc4 + "</td><td>" + _0x443c48 + "</td><td>" + _0xd15401 + "</td>";
          }
        });
        this.renderBatchActionsAndFilterPanel();
        this.startTimeRefresh();
      }
    },
    renderBatchActionsAndFilterPanel() {
      {
        let _0x453b99 = this.dom.dataTable.parentElement;
        let _0x486adc = _0x453b99.querySelector(".car-batch-actions");
        !_0x486adc && (_0x486adc = document.createElement("div"), _0x486adc.className = "car-batch-actions", _0x486adc.style.cssText = "margin-top: 10px; display: flex; gap: 10px;", _0x453b99.appendChild(_0x486adc));
        const _0x354751 = this.isCarEventActive() && this.state.sendCount < 4 && this.state.fullCarData.some(_0x2b9fcd => !_0x2b9fcd.sendAt);
        const _0x5c9585 = this.state.fullCarData.some(_0x9a9ddf => this.getCarStatus(_0x9a9ddf).statusClass === "status-completed");
        _0x486adc.innerHTML = "\n            <button class=\"task-btn " + (!_0x354751 ? "is-disabled" : "") + "\" data-action=\"sendAll\">一键发车</button>\n            <button class=\"task-btn " + (!_0x5c9585 ? "is-disabled" : "") + "\" data-action=\"claimAll\">一键收车</button>\n            <button class=\"task-btn\" data-action=\"openMembers\">查看成员</button>\n            <button class=\"task-btn\" data-action=\"toggleRefreshFilter\">刷新条件</button>\n        ";
        let _0x5336f7 = _0x453b99.querySelector(".refresh-filter-panel");
        if (!_0x5336f7) {
          {
            _0x5336f7 = document.createElement("div");
            _0x5336f7.className = "refresh-filter-panel";
            _0x5336f7.style.cssText = "display: none; margin-top: 10px; padding: 10px; border: 1px solid var(--item-border); border-radius: 7px; background: var(--item-bg);";
            _0x453b99.appendChild(_0x5336f7);
            this.buildFilterPanelUI(_0x5336f7);
            this.setupFilterPanelEvents(_0x5336f7);
            this.loadUserSettings();
          }
        }
        this.updateRefreshButtonState();
      }
    },
    buildFilterPanelUI(_0x2307a6) {
      {
        _0x2307a6.innerHTML = "\n            <style>\n                .filter-group { border: 1px solid var(--item-border); border-radius: 5px; padding: 8px; margin-bottom: 10px; }\n                .group-title { font-size: 13px; font-weight: bold; color: var(--text-primary); display: block; margin-bottom: 8px; }\n                .filter-row, .placeholder-row { display: flex; align-items: center; gap: 8px; margin-bottom: 5px; }\n                .filter-row-label { font-size: 12px; color: var(--text-secondary); min-width: 60px; text-align: right; }\n                .filter-row-value, .placeholder-select { width: 90px; padding: 3px; font-size: 12px; box-sizing: border-box; }\n                .count-selector { display: flex; align-items: center; gap: 0; }\n                .count-display { padding: 0 10px; font-size: 12px; min-width: 40px; text-align: center; }\n                .add-condition-btn { font-size: 12px; padding: 2px 8px; margin-top: 5px; }\n                .remove-condition-btn { font-size: 12px; padding: 0; height: 22px; width: 22px; cursor: pointer; border-radius: 50%; }\n                /* 调整赛车模块按钮字体大小 */\n                #car-module .car-batch-actions button.task-btn, #car-module .refresh-filter-panel button.task-btn { \n                    font-size: 11px !important; \n                    line-height: 1.2;\n                }\n            </style>\n\n            <div class=\"filter-group\" id=\"and-conditions-group\">\n                <strong class=\"group-title\">必须同时满足 (AND)</strong>\n                <div class=\"group-content\"></div>\n                <button class=\"task-btn add-condition-btn\" data-group=\"and\">[+] 添加必须条件</button>\n            </div>\n\n            <div class=\"filter-group\" id=\"or-conditions-group\">\n                <strong class=\"group-title\">并满足任一条件 (OR)</strong>\n                <div class=\"group-content\"></div>\n                <button class=\"task-btn add-condition-btn\" data-group=\"or\">[+] 添加任一条件</button>\n            </div>\n\n            <div style=\"display: flex; align-items: center; gap: 10px; margin-top: 15px;\">\n                <span style=\"font-size: 12px; font-weight: bold; min-width: 80px;\">单车最大刷新:</span>\n                <div class=\"count-selector\">\n                    <button class=\"task-btn\" data-action=\"decrement-refresh-count\" style=\"width: 28px; height: 28px; padding: 0;\">-</button>\n                    <span id=\"max-refresh-count\" class=\"count-display\">5</span>\n                    <button class=\"task-btn\" data-action=\"increment-refresh-count\" style=\"width: 28px; height: 28px; padding: 0;\">+</button>\n                </div>\n            </div>\n            <div style=\"display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 10px;\">\n                <button class=\"task-btn is-disabled\" id=\"start-batch-refresh\" data-action=\"startBatchRefresh\">一键刷新</button>\n                <button class=\"task-btn\" id=\"send-all-cars-panel\" data-action=\"sendAll\">一键发车</button>\n            </div>\n        ";
      }
    },
    setupFilterPanelEvents(_0x35b58e) {
      {
        const _0x91b635 = (_0x3af2c8, _0x2afb2e) => {
          {
            let _0x263ba2;
            return (..._0x5e06e3) => {
              {
                clearTimeout(_0x263ba2);
                _0x263ba2 = setTimeout(() => _0x3af2c8.apply(this, _0x5e06e3), _0x2afb2e);
              }
            };
          }
        };
        const _0x278bca = _0x91b635(() => this.saveUserSettings(), 500);
        document.addEventListener("click", _0x356cb9 => {
          {
            const _0x114f0c = _0x356cb9.target;
            const _0x188666 = _0x114f0c.dataset.action;
            if (!_0x35b58e.contains(_0x114f0c)) {
              return;
            }
            if (_0x188666 === "increment-refresh-count" || _0x188666 === "decrement-refresh-count") {
              {
                const _0x2ea88b = document.getElementById("max-refresh-count");
                let _0x305998 = parseInt(_0x2ea88b.textContent);
                if (_0x188666 === "increment-refresh-count" && _0x305998 < 100) {
                  _0x305998++;
                }
                if (_0x188666 === "decrement-refresh-count" && _0x305998 > 1) {
                  _0x305998--;
                }
                _0x2ea88b.textContent = _0x305998;
                this.saveUserSettings();
              }
            } else {
              if (_0x114f0c.classList.contains("add-condition-btn")) {
                this.addConditionPlaceholder(_0x114f0c.dataset.group);
              } else {
                if (_0x114f0c.classList.contains("remove-condition-btn")) {
                  {
                    _0x114f0c.closest(".filter-row, .placeholder-row").remove();
                    this.saveUserSettings();
                    this.updateRefreshButtonState();
                  }
                }
              }
            }
          }
        });
        document.addEventListener("change", _0x5d695b => {
          {
            const _0x44d75b = _0x5d695b.target;
            if (!_0x35b58e.contains(_0x44d75b)) {
              return;
            }
            if (_0x44d75b.classList.contains("placeholder-select")) {
              {
                this.transformPlaceholder(_0x44d75b);
              }
            } else {
              {
                this.saveUserSettings();
                this.updateRefreshButtonState();
              }
            }
          }
        });
        document.addEventListener("input", _0x4343b1 => {
          {
            if (_0x35b58e.contains(_0x4343b1.target) && _0x4343b1.target.type === "number") {
              {
                _0x278bca();
              }
            }
          }
        });
      }
    },
    addConditionPlaceholder(_0x4fa558) {
      {
        const _0x1584d2 = document.querySelector("#" + _0x4fa558 + "-conditions-group .group-content");
        const _0x5e77b1 = new Set([...document.querySelectorAll(".filter-row")].map(_0x2494ef => _0x2494ef.dataset.type));
        const _0x3e6827 = this.state.availableConditions.filter(_0x54d930 => !_0x5e77b1.has(_0x54d930));
        if (_0x3e6827.length === 0) {
          {
            _0x4ede5b.showtip("所有条件都已添加", "info");
            return;
          }
        }
        const _0x456cb0 = document.createElement("div");
        _0x456cb0.className = "placeholder-row";
        const _0x45f72a = _0x3e6827.map(_0x4b0649 => "<option value=\"" + _0x4b0649 + "\">" + _0x4b0649 + "</option>").join("");
        _0x456cb0.innerHTML = "\n            <input type=\"checkbox\" checked disabled>\n            <select class=\"placeholder-select\"><option value=\"\">--选择条件--</option>" + _0x45f72a + "</select>\n            <button class=\"task-btn remove-condition-btn\">-</button>\n        ";
        _0x1584d2.appendChild(_0x456cb0);
      }
    },
    transformPlaceholder(_0x4b2c62) {
      {
        const _0x482894 = _0x4b2c62.closest(".placeholder-row");
        const _0x3d2650 = _0x4b2c62.value;
        if (!_0x3d2650) {
          return;
        }
        const _0x21197e = document.createElement("div");
        _0x21197e.className = "filter-row";
        _0x21197e.dataset.type = _0x3d2650;
        let _0x12d737 = "";
        if (_0x3d2650 === "品质") {
          _0x12d737 = "<select class=\"filter-row-value\">\n                           <option value=\"6\">传奇</option>\n                           <option value=\"5\" selected>神话</option>\n                           <option value=\"4\">传说</option>\n                           <option value=\"3\">史诗</option>\n                           <option value=\"2\">稀有</option>\n                           <option value=\"1\">普通</option>\n                       </select>";
        } else {
          {
            const _0x1cd31b = {
              "金砖": 2000,
              "招募令": 10,
              "彩玉": 5,
              "白玉": 2000,
              "万能碎片": 10,
              "刷新券": 4
            };
            const _0xbae8be = _0x1cd31b[_0x3d2650] || 1;
            _0x12d737 = "<input type=\"number\" class=\"filter-row-value\" value=\"" + _0xbae8be + "\" min=\"1\">";
          }
        }
        _0x21197e.innerHTML = "\n            <input type=\"checkbox\" class=\"condition-enabled\" checked>\n            <label class=\"filter-row-label\">" + _0x3d2650 + " ≥</label>\n            " + _0x12d737 + "\n            <button class=\"task-btn remove-condition-btn\">-</button>\n        ";
        _0x482894.replaceWith(_0x21197e);
        this.saveUserSettings();
        this.updateRefreshButtonState();
      }
    },
    saveUserSettings() {
      {
        const _0xcb6baa = {
          and: [],
          or: [],
          maxRefresh: document.getElementById("max-refresh-count").textContent
        };
        document.querySelectorAll("#and-conditions-group .filter-row").forEach(_0x57abb5 => {
          _0xcb6baa.and.push({
            type: _0x57abb5.dataset.type,
            enabled: _0x57abb5.querySelector(".condition-enabled").checked,
            value: _0x57abb5.querySelector(".filter-row-value").value
          });
        });
        document.querySelectorAll("#or-conditions-group .filter-row").forEach(_0x47fbe5 => {
          {
            _0xcb6baa.or.push({
              type: _0x47fbe5.dataset.type,
              enabled: _0x47fbe5.querySelector(".condition-enabled").checked,
              value: _0x47fbe5.querySelector(".filter-row-value").value
            });
          }
        });
        localStorage.setItem("carModuleSettings_v3", JSON.stringify(_0xcb6baa));
      }
    },
    loadUserSettings() {
      {
        const _0x4af8cc = localStorage.getItem("carModuleSettings_v3");
        if (!_0x4af8cc) {
          return;
        }
        const _0x20eded = JSON.parse(_0x4af8cc);
        const _0x1a1872 = _0x119031 => {
          {
            const _0x4acef8 = document.createElement("div");
            _0x4acef8.className = "filter-row";
            _0x4acef8.dataset.type = _0x119031.type;
            let _0x23c5a2 = "";
            if (_0x119031.type === "品质") {
              {
                _0x23c5a2 = "<select class=\"filter-row-value\"><option value=\"6\">传奇</option><option value=\"5\">神话</option><option value=\"4\">传说</option><option value=\"3\">史诗</option><option value=\"2\">稀有</option></select>";
              }
            } else {
              {
                _0x23c5a2 = "<input type=\"number\" class=\"filter-row-value\" min=\"1\">";
              }
            }
            _0x4acef8.innerHTML = "\n                <input type=\"checkbox\" class=\"condition-enabled\" " + (_0x119031.enabled ? "checked" : "") + ">\n                <label class=\"filter-row-label\">" + _0x119031.type + " ≥</label>\n                " + _0x23c5a2 + "\n                <button class=\"task-btn remove-condition-btn\">-</button>\n            ";
            _0x4acef8.querySelector(".filter-row-value").value = _0x119031.value;
            return _0x4acef8;
          }
        };
        const _0x1fb42a = document.querySelector("#and-conditions-group .group-content");
        _0x1fb42a.innerHTML = "";
        _0x20eded.and.forEach(_0x592584 => _0x1fb42a.appendChild(_0x1a1872(_0x592584)));
        const _0xa0d07a = document.querySelector("#or-conditions-group .group-content");
        _0xa0d07a.innerHTML = "";
        _0x20eded.or.forEach(_0x5827d3 => _0xa0d07a.appendChild(_0x1a1872(_0x5827d3)));
        document.getElementById("max-refresh-count").textContent = _0x20eded.maxRefresh;
        this.updateRefreshButtonState();
      }
    },
    updateRefreshButtonState() {
      {
        const _0x56a5cc = document.querySelector(".refresh-filter-panel");
        if (!_0x56a5cc) {
          return;
        }
        const _0x250b8c = _0x56a5cc.querySelector("#start-batch-refresh");
        const _0x31e601 = _0x56a5cc.querySelector(".condition-enabled:checked");
        if (_0x31e601) {
          _0x250b8c.classList.remove("is-disabled");
        } else {
          {
            _0x250b8c.classList.add("is-disabled");
          }
        }
        const _0x449371 = _0x56a5cc.querySelector("#send-all-cars-panel");
        const _0x125cf6 = this.isCarEventActive() && this.state.sendCount < 4 && this.state.fullCarData.some(_0x5e64ec => !_0x5e64ec.sendAt);
        if (_0x125cf6) {
          {
            _0x449371.classList.remove("is-disabled");
          }
        } else {
          _0x449371.classList.add("is-disabled");
        }
      }
    },
    async startBatchRefresh() {
      {
        if (this.state.isBatchRefreshing) {
          {
            _0x4ede5b.showtip("一键刷新任务已在进行中", "warning");
            return;
          }
        }
        const _0x2f0885 = document.getElementById("start-batch-refresh");
        const _0x3a9b4a = _0x2f0885 ? _0x2f0885.textContent : "启动...";
        try {
          {
            this.state.isBatchRefreshing = true;
            _0x2f0885 && (_0x2f0885.disabled = true, _0x2f0885.textContent = "运行中...");
            const _0x5a0469 = parseInt(document.getElementById("max-refresh-count")?.["textContent"] || 5);
            const {
              andConditions: _0x4d75ca,
              orConditions: _0x12c099
            } = this.collectConditionsFromUI();
            if (_0x4d75ca.length === 0 && _0x12c099.length === 0) {
              {
                _0x4ede5b.showtip("请至少设置一个启用的刷新条件", "error");
                return;
              }
            }
            let _0x3a9c5e = this.state.fullCarData.filter(_0x25db02 => !_0x25db02.sendAt).map(_0x2ae27c => ({
              car: _0x2ae27c,
              refreshCount: 0,
              isSatisfied: this.checkCarFilterConditions(_0x2ae27c, _0x4d75ca, _0x12c099)
            }));
            const _0x4f99df = _0x3a9c5e.filter(_0x595a37 => _0x595a37.isSatisfied).length;
            if (_0x4f99df > 0) {
              {
                _0x4ede5b.showtip("已有 " + _0x4f99df + " 辆车满足条件，将跳过。", "info");
              }
            }
            let _0x574cf4 = _0x3a9c5e.filter(_0x2c2f74 => !_0x2c2f74.isSatisfied);
            if (_0x574cf4.length === 0) {
              {
                _0x4ede5b.showtip("所有待发车辆都已满足条件，无需刷新！", "success");
                return;
              }
            }
            _0x4ede5b.showtip("任务开始，将为 " + _0x574cf4.length + " 辆车进行刷新...", "info");
            let _0x3da48b = 0;
            for (const _0x5712a4 of _0x574cf4) {
              {
                if (!this.state.isBatchRefreshing) {
                  {
                    _0x4ede5b.showtip("任务已手动停止。", "warning");
                    break;
                  }
                }
                while (_0x5712a4.refreshCount < _0x5a0469 && !_0x5712a4.isSatisfied) {
                  {
                    this.dom.statusEl.textContent = "🔄 刷新中... 车位 " + (_0x5712a4.car.slot + 1) + " (第 " + (_0x5712a4.refreshCount + 1) + "/" + _0x5a0469 + " 次)";
                    const _0x54623f = await this.performCarAction("refresh", _0x5712a4.car.carId, "刷新");
                    if (!_0x54623f) {
                      {
                        _0x4ede5b.showtip("车位 " + (_0x5712a4.car.slot + 1) + " 刷新失败，可能金砖不足，将跳过此车。", "warning");
                        break;
                      }
                    }
                    _0x5712a4.refreshCount++;
                    _0x3da48b++;
                    await this.queryClubCars();
                    const _0x554351 = this.state.fullCarData.find(_0x4a7136 => _0x4a7136.carId === _0x5712a4.car.carId);
                    if (_0x554351) {
                      {
                        _0x5712a4.car = _0x554351;
                        if (this.checkCarFilterConditions(_0x554351, _0x4d75ca, _0x12c099)) {
                          {
                            _0x5712a4.isSatisfied = true;
                            _0x4ede5b.showtip("🎉 车位 " + (_0x554351.slot + 1) + " 在刷新 " + _0x5712a4.refreshCount + " 次后满足条件！", "success");
                          }
                        }
                      }
                    } else {
                      {
                        _0x4ede5b.showtip("车位 " + (_0x5712a4.car.slot + 1) + " 数据刷新后丢失，跳过此车。", "error");
                        break;
                      }
                    }
                    await new Promise(_0x490f88 => setTimeout(_0x490f88, 400));
                  }
                }
                !_0x5712a4.isSatisfied && _0x5712a4.refreshCount >= _0x5a0469 && _0x4ede5b.showtip("车位 " + (_0x5712a4.car.slot + 1) + " 已达刷新上限 (" + _0x5a0469 + "次)，仍未满足条件。", "info");
              }
            }
            const _0x190711 = _0x3a9c5e.filter(_0x114eae => _0x114eae.isSatisfied).length;
            _0x4ede5b.showtip("刷新任务结束。共 " + _0x190711 + "/" + _0x3a9c5e.length + " 辆车满足条件，总计刷新 " + _0x3da48b + " 次。", "success");
            this.dom.statusEl.textContent = "✅ 刷新完成: " + _0x190711 + "/" + _0x3a9c5e.length + " 辆满足";
          }
        } catch (_0x36f4f0) {
          console.error("一键刷新过程中发生错误:", _0x36f4f0);
          _0x4ede5b.showtip("刷新过程出错，详情请查看控制台。", "error");
          this.dom.statusEl.textContent = "❌ 刷新出错";
        } finally {
          {
            this.state.isBatchRefreshing = false;
            if (_0x2f0885) {
              {
                _0x2f0885.disabled = false;
                _0x2f0885.textContent = _0x3a9b4a;
              }
            }
            setTimeout(() => this.queryClubCars(), 500);
          }
        }
      }
    },
    collectConditionsFromUI() {
      {
        const _0x1e88d8 = [];
        const _0x2a1261 = [];
        const _0x50a23f = (_0x3d76f4, _0x192bac) => {
          {
            document.querySelectorAll("#" + _0x3d76f4 + " .filter-row").forEach(_0x92c39f => {
              {
                if (_0x92c39f.querySelector(".condition-enabled").checked) {
                  {
                    const _0x5902c9 = _0x92c39f.dataset.type;
                    const _0x5ad65e = _0x92c39f.querySelector(".filter-row-value").value;
                    if (_0x5902c9 === "品质") {
                      _0x192bac.push({
                        type: "quality",
                        value: parseInt(_0x5ad65e)
                      });
                    } else {
                      {
                        _0x192bac.push({
                          type: "reward",
                          item: _0x5902c9,
                          count: parseInt(_0x5ad65e) || 1
                        });
                      }
                    }
                  }
                }
              }
            });
          }
        };
        _0x50a23f("and-conditions-group", _0x1e88d8);
        _0x50a23f("or-conditions-group", _0x2a1261);
        const _0x2d00f7 = {
          andConditions: _0x1e88d8,
          orConditions: _0x2a1261
        };
        return _0x2d00f7;
      }
    },
    checkCarFilterConditions(_0xfb14eb, _0x412fe6, _0x1c3df1) {
      {
        if (_0x412fe6.length === 0 && _0x1c3df1.length === 0) {
          return false;
        }
        const _0x171f39 = _0x5f1650 => {
          {
            if (_0x5f1650.type === "quality") {
              {
                return _0xfb14eb.quality >= _0x5f1650.value;
              }
            } else {
              if (_0x5f1650.type === "reward") {
                {
                  return this.checkSingleRewardCondition(_0xfb14eb.rewards, _0x5f1650);
                }
              }
            }
            return false;
          }
        };
        const _0x142286 = _0x412fe6.every(_0x171f39);
        if (!_0x142286) {
          return false;
        }
        if (_0x1c3df1.length === 0) {
          return true;
        }
        const _0x2ea9e9 = _0x1c3df1.some(_0x171f39);
        return _0x2ea9e9;
      }
    },
    checkSingleRewardCondition(_0x2a6e2d, _0x596baf) {
      {
        const {
          item: _0x797137,
          count: _0x31e467
        } = _0x596baf;
        for (const _0x3ce558 of _0x2a6e2d) {
          {
            const [_0x200a4a, _0x166d3e] = _0x3ce558.split(":");
            if (_0x200a4a === _0x797137) {
              {
                if (parseInt(_0x166d3e) >= _0x31e467) {
                  return true;
                }
              }
            }
          }
        }
        return false;
      }
    },
    async queryClubCars() {
      {
        this.dom.statusEl.textContent = "🔍 查询中...";
        try {
          {
            const _0x488fdf = await _0x4ede5b.sendCommand("car_getrolecar");
            if (_0x488fdf?.["code"] !== 0) {
              throw new Error(_0x488fdf?.["msg"] || "Code: " + _0x488fdf?.["code"]);
            }
            const _0x5e262b = (_0x1cacd4, _0x3cf5aa) => _0x3cf5aa.split(".").reduce((_0x16640c, _0x257f69) => _0x16640c?.[_0x257f69], _0x1cacd4);
            const _0x206c89 = _0x5e262b(_0x488fdf, "_rawData.body.roleCar") || _0x5e262b(_0x488fdf, "data.body.roleCar") || _0x5e262b(_0x488fdf, "_rawData.roleCar") || _0x5e262b(_0x488fdf, "data.roleCar");
            const _0x1de9cf = _0x206c89?.["carDataMap"] || {};
            let _0x5b1b56 = _0x206c89?.["sendCnt"] || 0;
            const _0x330cf4 = new Date().getDay() >= 1 && new Date().getDay() <= 3;
            if (_0x330cf4 && _0x206c89.sendCntResetTime) {
              {
                const _0x24710a = new Date(_0x206c89.sendCntResetTime * 1000);
                const _0x2fa058 = new Date();
                if (_0x24710a.getFullYear() !== _0x2fa058.getFullYear() || _0x24710a.getMonth() !== _0x2fa058.getMonth() || _0x24710a.getDate() !== _0x2fa058.getDate()) {
                  {
                    _0x5b1b56 = 0;
                  }
                }
              }
            }
            this.state.sendCount = this.isCarEventActive() ? _0x5b1b56 : 0;
            this.state.fullCarData = Object.entries(_0x1de9cf).map(([_0x280680, _0x5a7e6f]) => ({
              id: _0x280680,
              ..._0x5a7e6f,
              carId: _0x280680,
              quality: _0x5a7e6f.color,
              rewards: this.parseRewards(_0x5a7e6f.rewards)
            }));
            this.renderCarData();
            const _0x4afbc8 = "今日已发车: " + this.state.sendCount + "/4" + (!this.isCarEventActive() ? " (非活动时间)" : "");
            this.dom.statusEl.textContent = "✅ " + _0x4afbc8;
          }
        } catch (_0x37cc92) {
          _0x4ede5b.showtip("查询失败: " + _0x37cc92.message, "error");
          this.dom.statusEl.textContent = "❌ 查询出错";
        }
      }
    },
    async sendCar(_0x2173c0) {
      {
        if (!this.isCarEventActive()) {
          return _0x4ede5b.showtip("当前非活动时间 (周一至周三 6:00-20:00)", "error");
        }
        if (this.state.sendCount >= 4) {
          return _0x4ede5b.showtip("今日发车次数已用完", "error");
        }
        if (await this.performCarAction("send", _0x2173c0)) {
          {
            setTimeout(() => this.queryClubCars(), 300);
          }
        }
      }
    },
    async refreshCar(_0x17917b) {
      {
        (await this.performCarAction("refresh", _0x17917b)) && setTimeout(() => this.queryClubCars(), 300);
      }
    },
    async claimCar(_0xc75c9d) {
      {
        (await this.performCarAction("claim", _0xc75c9d)) && setTimeout(() => this.queryClubCars(), 300);
      }
    },
    async sendAllCars() {
      {
        if (!this.isCarEventActive()) {
          return _0x4ede5b.showtip("当前非活动时间 (周一至周三 6:00-20:00)", "error");
        }
        if (this.state.sendCount >= 4) {
          return _0x4ede5b.showtip("今日发车次数已用完", "error");
        }
        const _0x36628e = this.state.fullCarData.filter(_0x3f0173 => !_0x3f0173.sendAt);
        if (_0x36628e.length === 0) {
          return _0x4ede5b.showtip("没有可发车的赛车", "info");
        }
        const _0x3a7131 = Math.min(_0x36628e.length, 4 - this.state.sendCount);
        if (_0x3a7131 === 0) {
          return _0x4ede5b.showtip("今日发车次数已用完", "error");
        }
        this.dom.statusEl.textContent = "🚀 批量发送中...";
        let _0x2f2e2d = 0;
        for (let _0x6f8b68 = 0; _0x6f8b68 < _0x3a7131; _0x6f8b68++) {
          {
            if (await this.performCarAction("send", _0x36628e[_0x6f8b68].carId, true)) {
              {
                _0x2f2e2d++;
              }
            }
            if (_0x6f8b68 < _0x3a7131 - 1) {
              await new Promise(_0x141dd3 => setTimeout(_0x141dd3, 300));
            }
          }
        }
        _0x4ede5b.showtip("成功发送 " + _0x2f2e2d + " 辆赛车", _0x2f2e2d > 0 ? "success" : "error");
        setTimeout(() => this.queryClubCars(), 500);
      }
    },
    async claimAllCars() {
      {
        const _0x37c714 = this.state.fullCarData.filter(_0x3fd0ae => this.getCarStatus(_0x3fd0ae).statusClass === "status-completed");
        if (_0x37c714.length === 0) {
          return _0x4ede5b.showtip("没有可收取的赛车", "info");
        }
        this.dom.statusEl.textContent = "🚀 批量收取中...";
        let _0x58b9c8 = 0;
        for (let _0x16ce3b = 0; _0x16ce3b < _0x37c714.length; _0x16ce3b++) {
          {
            if (await this.performCarAction("claim", _0x37c714[_0x16ce3b].carId, true)) {
              {
                _0x58b9c8++;
              }
            }
            if (_0x16ce3b < _0x37c714.length - 1) {
              await new Promise(_0x2056a4 => setTimeout(_0x2056a4, 300));
            }
          }
        }
        _0x4ede5b.showtip("成功收取 " + _0x58b9c8 + " 辆赛车", _0x58b9c8 > 0 ? "success" : "error");
        setTimeout(() => this.queryClubCars(), 500);
      }
    },
    async performCarAction(_0x231040, _0x162dec, _0x39011a = false, _0x22fafe = 0) {
      {
        if (!_0x39011a) {
          {
            const _0x42784f = {
              send: "发送",
              refresh: "刷新",
              claim: "收获"
            };
            this.dom.statusEl.textContent = "🚀 " + (_0x42784f[_0x231040] || _0x231040) + "中...";
          }
        }
        try {
          {
            const _0x1f2086 = {
              carId: _0x162dec,
              helperId: _0x22fafe,
              text: ""
            };
            const _0x50ff7e = {
              carId: _0x162dec
            };
            const _0x435677 = await _0x4ede5b.sendCommand("car_" + _0x231040, _0x231040 === "send" ? _0x1f2086 : _0x50ff7e);
            if (_0x435677?.["code"] !== 0) {
              throw new Error(_0x435677?.["msg"] || "Code: " + _0x435677?.["code"]);
            }
            !_0x39011a && _0x4ede5b.showtip("赛车操作成功", "success");
            return true;
          }
        } catch (_0x5190b3) {
          {
            if (!_0x39011a) {
              {
                _0x4ede5b.showtip("操作失败: " + _0x5190b3.message, "error");
                this.dom.statusEl.textContent = "❌ 操作出错";
              }
            }
            console.error("赛车操作 '" + _0x231040 + "' 失败 (ID: " + _0x162dec + "):", _0x5190b3.message);
            return false;
          }
        }
      }
    },
    getMemberName(_0x3997c7) {
      {
        try {
          {
            const _0x372957 = this.state.legionMembersMap || {};
            const _0x41eb3c = _0x372957[String(_0x3997c7)] || _0x372957[_0x3997c7];
            return _0x41eb3c && (_0x41eb3c.name || _0x41eb3c.nickname || _0x41eb3c.roleName) || null;
          }
        } catch {
          {
            return null;
          }
        }
      }
    },
    async ensureLegionMembers() {
      {
        try {
          {
            if (this._membersLoading) {
              {
                let _0x56bfed = 0;
                while (this._membersLoading && _0x56bfed < 10) {
                  await new Promise(_0x371c47 => setTimeout(_0x371c47, 100));
                  _0x56bfed++;
                }
                return this.state.legionMembersMap || {};
              }
            }
            this._membersLoading = true;
            const _0x213e73 = this.state.legionMembersMap;
            if (_0x213e73 && Object.keys(_0x213e73).length > 0) {
              {
                this._membersLoading = false;
                return _0x213e73;
              }
            }
            const _0x7cb26d = new Promise((_0x2947bc, _0x3b0758) => {
              {
                setTimeout(() => _0x3b0758(new Error("获取俱乐部成员超时")), 5000);
              }
            });
            const _0x18ee62 = _0x4ede5b.sendCommand("legion_getinfo");
            const _0x17db3a = await Promise.race([_0x18ee62, _0x7cb26d]);
            if (!_0x17db3a) {
              {
                throw new Error("无响应数据");
              }
            }
            if (_0x17db3a && _0x17db3a.code !== undefined && _0x17db3a.code !== 0) {
              {
                console.log("获取俱乐部信息失败，错误码: " + _0x17db3a.code + ", 消息: " + (_0x17db3a.msg || "未知错误"));
                this._membersLoading = false;
                return _0x213e73 || {};
              }
            }
            let _0x21bbaf = [];
            if (_0x17db3a._rawData) {
              {
                if (_0x17db3a._rawData.body?.["info"]?.["members"]) {
                  _0x21bbaf = _0x17db3a._rawData.body.info.members;
                } else {
                  if (_0x17db3a._rawData.info?.["members"]) {
                    _0x21bbaf = _0x17db3a._rawData.info.members;
                  } else {
                    if (_0x17db3a._rawData.members) {
                      _0x21bbaf = _0x17db3a._rawData.members;
                    } else {
                      if (_0x17db3a._rawData.legionData?.["members"]) {
                        _0x21bbaf = _0x17db3a._rawData.legionData.members;
                      }
                    }
                  }
                }
              }
            } else {
              if (_0x17db3a.data) {
                {
                  if (_0x17db3a.data.body?.["info"]?.["members"]) {
                    _0x21bbaf = _0x17db3a.data.body.info.members;
                  } else {
                    if (_0x17db3a.data.info?.["members"]) {
                      _0x21bbaf = _0x17db3a.data.info.members;
                    } else {
                      if (_0x17db3a.data.members) {
                        _0x21bbaf = _0x17db3a.data.members;
                      } else {
                        if (_0x17db3a.data.legionData?.["members"]) {
                          _0x21bbaf = _0x17db3a.data.legionData.members;
                        }
                      }
                    }
                  }
                }
              } else {
                {
                  if (_0x17db3a.info?.["members"]) {
                    _0x21bbaf = _0x17db3a.info.members;
                  } else {
                    if (_0x17db3a.members) {
                      _0x21bbaf = _0x17db3a.members;
                    } else {
                      if (_0x17db3a.legionData?.["members"]) {
                        _0x21bbaf = _0x17db3a.legionData.members;
                      }
                    }
                  }
                }
              }
            }
            let _0x164968 = {};
            if (Array.isArray(_0x21bbaf)) {
              _0x21bbaf.forEach(_0x15cc4f => {
                _0x15cc4f && _0x15cc4f.roleId != null && (_0x164968[String(_0x15cc4f.roleId)] = _0x15cc4f);
              });
            } else {
              typeof _0x21bbaf === "object" && _0x21bbaf && Object.keys(_0x21bbaf).forEach(_0x2b4cfe => {
                {
                  const _0x111c59 = _0x21bbaf[_0x2b4cfe];
                  if (_0x111c59) {
                    {
                      const _0x20fa2a = String(_0x111c59.roleId ?? _0x2b4cfe);
                      if (_0x20fa2a) {
                        _0x164968[_0x20fa2a] = _0x111c59;
                      }
                    }
                  }
                }
              });
            }
            this.state.legionMembersMap = _0x164968;
            this._membersLoading = false;
            console.log("成功获取俱乐部成员: " + Object.keys(_0x164968).length + " 个");
            return _0x164968;
          }
        } catch (_0x463784) {
          {
            console.error("获取俱乐部成员失败: " + _0x463784.message);
            this._membersLoading = false;
            return this.state.legionMembersMap || {};
          }
        }
      }
    },
    openHelperDialog(_0x2d470c) {
      {
        if (!_0x2d470c) {
          return;
        }
        if (Number(_0x2d470c.quality || 0) < 5) {
          return _0x4ede5b.showtip("仅品阶≥5的车辆可设置护卫", "warning");
        }
        if (Number(_0x2d470c.sendAt || 0) !== 0) {
          return _0x4ede5b.showtip("已发车车辆不可设置护卫", "warning");
        }
        if (!this.state.helperSelectionByCarId) {
          {
            this.state.helperSelectionByCarId = {};
          }
        }
        let _0x108e87 = document.getElementById("helper-dialog");
        let _0xf7b8ac = document.getElementById("global-ui-overlay");
        if (!_0x108e87) {
          {
            _0xf7b8ac = document.createElement("div");
            _0xf7b8ac.id = "global-ui-overlay";
            _0xf7b8ac.style.cssText = "\n                position: fixed; top: 0; left: 0; right: 0; bottom: 0;\n                background: rgba(0,0,0,0.7); backdrop-filter: blur(4px); z-index: 99999;\n                display: flex; align-items: center; justify-content: center;\n            ";
            _0x108e87 = document.createElement("div");
            _0x108e87.id = "helper-dialog";
            _0x108e87.style.cssText = "\n                position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%);\n                background: #ffffff;\n                color: #333333; border: 1px solid #e5e7eb; outline: 1px solid rgba(37,99,235,0.1);\n                border-radius: 12px; padding: 12px; width: 86vw; max-width: 420px;\n                box-shadow: 0 16px 48px rgba(0,0,0,0.1); box-sizing: border-box;\n                z-index: 100000;\n            ";
            let _0x2af3b4 = document.getElementById("member-font-style");
            if (!_0x2af3b4) {
              {
                _0x2af3b4 = document.createElement("style");
                _0x2af3b4.id = "member-font-style";
                _0x2af3b4.textContent = "\n                    /* 仅针对对话框内的玩家名字元素 */\n                    #members-content {\n                        font-size: 10px !important;\n                    }\n                    #members-content div[data-mid] {\n                        font-size: 10px !important;\n                    }\n                    #members-content div[data-mid] span[style*=\"white-space:nowrap\"] {\n                        font-size: 10px !important;\n                        line-height: 1.1 !important;\n                    }\n                    #helper-content {\n                        font-size: 10px !important;\n                    }\n                    #helper-content div[data-mid] {\n                        font-size: 10px !important;\n                    }\n                    #helper-content div[data-mid] .__name {\n                        font-size: 10px !important;\n                    }\n                ";
                document.head.appendChild(_0x2af3b4);
              }
            }
            _0x108e87.innerHTML = "\n                <div style=\"display:flex; align-items:center; justify-content:space-between; padding:10px 12px; font-weight:700;\">\n                  <div style=\"font-weight:700; letter-spacing:.3px; color:#333333;\">选择护卫</div>\n                  <button id=\"helper-close\" style=\"padding:4px 8px; border-radius:4px; border:none; background:#e5e7eb; color:#333333; cursor:pointer; font-size:12px;\">关闭</button>\n                </div>\n                <div style=\"padding:6px 8px; border-bottom: 1px solid #e5e7eb; margin:0 1px 6px 1px;\">\n                  <input id=\"helper-search-input\" placeholder=\"按名称或ID搜索\" style=\"width:100%; padding:7px 10px; border-radius:8px; border: 1px solid #d1d5db; background: #ffffff; color: #333333; box-sizing: border-box;\" />\n                </div>\n                <div id=\"helper-content\" style=\"max-height:240px; overflow:auto; border:1px solid #e5e7eb; border-radius:10px; padding:6px 8px; background:#ffffff; color:#333333;\">加载中...</div>\n                <div style=\"display:flex; align-items:center; gap:8px; justify-content:flex-end; padding:8px 4px;\">\n                  <div style=\"flex:1; font-size:14px; color:#6b7280;\">当前选择: <span id=\"helper-selected-name\" style=\"color:#2563eb;\">未选择</span></div>\n                  <button id=\"helper-cancel\" style=\"padding:6px 16px; border-radius:6px; border:none; background:#e5e7eb; color:#333333; cursor:pointer;\">取消</button>\n                  <button id=\"helper-confirm\" style=\"padding:6px 16px; border-radius:6px; border:none; background:#2563eb; color:#ffffff; cursor:not-allowed; opacity:0.7;\">确定</button>\n                </div>\n            ";
            document.body.appendChild(_0xf7b8ac);
            document.body.appendChild(_0x108e87);
          }
        } else {
          {
            _0xf7b8ac.style.display = "flex";
            _0x108e87.style.display = "block";
          }
        }
        const _0x38ae2b = document.getElementById("helper-content");
        const _0x43eac0 = document.getElementById("helper-selected-name");
        const _0x1cde68 = document.getElementById("helper-cancel");
        const _0x4b0d8a = document.getElementById("helper-confirm");
        const _0xe7f9bf = document.getElementById("helper-search-input");
        const _0x3edbc8 = document.getElementById("helper-close");
        if (!_0x38ae2b || !_0x43eac0 || !_0x1cde68 || !_0x4b0d8a) {
          {
            console.error("无法找到必要的DOM元素");
            _0x4ede5b.showtip("界面加载失败", "error");
            return;
          }
        }
        const _0x52d31d = _0x1cde68.cloneNode(true);
        _0x1cde68.parentNode.replaceChild(_0x52d31d, _0x1cde68);
        const _0x563722 = _0x4b0d8a.cloneNode(true);
        _0x4b0d8a.parentNode.replaceChild(_0x563722, _0x4b0d8a);
        const _0x5b9cae = _0xe7f9bf.cloneNode(true);
        _0xe7f9bf.parentNode.replaceChild(_0x5b9cae, _0xe7f9bf);
        const _0xe8390a = _0x3edbc8 ? _0x3edbc8.cloneNode(true) : null;
        _0x3edbc8 && _0xe8390a && _0x3edbc8.parentNode.replaceChild(_0xe8390a, _0x3edbc8);
        const _0xbc7cb8 = _0x52d31d;
        const _0x1e5def = _0x563722;
        const _0x291919 = _0x5b9cae;
        const _0x42b99f = _0xe8390a;
        const _0x3fe7e1 = String((this.state.helperSelectionByCarId || {})[String(_0x2d470c.carId)] || "");
        let _0xd7ce5f = _0x3fe7e1;
        const _0x124889 = _0x6532f7 => {
          {
            const _0x3ce2b0 = Number(_0x6532f7 || 0);
            if (_0x3ce2b0 >= 100000000) {
              return (_0x3ce2b0 / 100000000).toFixed(2) + "亿";
            }
            if (_0x3ce2b0 >= 10000) {
              return (_0x3ce2b0 / 10000).toFixed(2) + "万";
            }
            return String(_0x3ce2b0);
          }
        };
        const _0x1689cb = _0x4ef5dd => {
          {
            try {
              _0x38ae2b.querySelectorAll("div[data-mid]").forEach(_0x491db7 => {
                {
                  _0x491db7.style.background = "rgba(255,255,255,0.06)";
                  _0x491db7.style.border = "";
                  const _0x2273ba = _0x491db7.querySelector("span.__sel_dot");
                  if (_0x2273ba) {
                    _0x2273ba.style.background = "#6b7280";
                  }
                }
              });
            } catch (_0x5da52a) {
              console.error("重置UI失败:", _0x5da52a);
            }
            if (_0x4ef5dd) {
              {
                try {
                  {
                    const _0x1192ea = _0x38ae2b.querySelector("div[data-mid=\"" + _0x4ef5dd + "\"]");
                    if (_0x1192ea) {
                      {
                        _0x1192ea.style.transition = "background .18s ease, border-color .18s ease";
                        _0x1192ea.style.background = "rgba(37,99,235,0.18)";
                        _0x1192ea.style.border = "1px solid #2563eb";
                        const _0x3d8730 = _0x1192ea.querySelector("span.__sel_dot");
                        if (_0x3d8730) {
                          _0x3d8730.style.background = "#22c55e";
                        }
                        const _0x406be3 = this.getMemberName(_0x4ef5dd) || _0x4ef5dd;
                        _0x43eac0.textContent = _0x406be3;
                        _0x1e5def.disabled = false;
                        _0x1e5def.textContent = "确定（" + _0x406be3 + "）";
                        _0x1e5def.style.opacity = "1";
                        _0x1e5def.style.cursor = "pointer";
                      }
                    }
                  }
                } catch (_0xa82e2c) {
                  {
                    console.error("更新选中UI失败:", _0xa82e2c);
                  }
                }
              }
            } else {
              {
                _0x43eac0.textContent = "未选择";
                _0x1e5def.disabled = true;
                _0x1e5def.textContent = "确定";
                _0x1e5def.style.opacity = "0.7";
                _0x1e5def.style.cursor = "not-allowed";
              }
            }
          }
        };
        const _0x1ce0ca = (_0x486b1e = "", _0x352d22 = {}, _0x267ea1 = {}) => {
          {
            try {
              {
                const _0x2604fc = String(_0x486b1e || "").trim().toLowerCase();
                const _0xcd109a = Object.keys(_0x352d22).filter(_0x1deca0 => {
                  {
                    try {
                      {
                        const _0x4ec168 = _0x352d22[_0x1deca0];
                        const _0x4ee799 = _0x4ec168?.["name"] || _0x4ec168?.["nickname"] || "";
                        return !_0x2604fc || String(_0x1deca0).includes(_0x2604fc) || String(_0x4ee799).toLowerCase().includes(_0x2604fc);
                      }
                    } catch (_0x56ddb2) {
                      {
                        return false;
                      }
                    }
                  }
                }).map(_0x55c5b5 => {
                  {
                    try {
                      {
                        const _0x2f51b5 = _0x352d22[_0x55c5b5];
                        const _0x592cae = Number(_0x267ea1[String(_0x55c5b5)] ?? 0);
                        const _0x42372f = _0x2f51b5?.["name"] || _0x2f51b5?.["nickname"] || _0x55c5b5;
                        const _0x366c0e = Number(_0x2f51b5?.["power"] ?? _0x2f51b5?.["s_power"] ?? _0x2f51b5?.["custom"]?.["s_power"] ?? 0);
                        const _0x2e9638 = _0x592cae >= 4;
                        const _0x304d42 = _0x2f51b5?.["headImg"] || _0x2f51b5?.["avatar"] || "/icons/xiaoyugan.png";
                        const _0x5f445a = _0xd7ce5f === _0x55c5b5 ? "#22c55e" : "#6b7280";
                        return "<div data-mid=\"" + _0x55c5b5 + "\" data-disabled=\"" + (_0x2e9638 ? "1" : "") + "\" style=\"display:flex; align-items:center; justify-content:space-between; padding:6px; margin:4px 0; background: rgba(249,250,251,0.8); border-radius:6px; border:1px solid #e5e7eb; cursor:" + (_0x2e9638 ? "not-allowed" : "pointer") + ";\">\n                                    <div style=\"display:flex; align-items:center; gap:8px;\">\n                                      <img src=\"" + _0x304d42 + "\" onerror=\"this.src='/icons/xiaoyugan.png'\" style=\"width:22px;height:22px;border-radius:50%;object-fit:cover;\" />\n                                      <span class=\"__name\">" + _0x42372f + "</span>\n                                    </div>\n                                    <div style=\"display:flex; align-items:center; gap:8px;\">\n                                      <span style=\"font-size:12px; color:#6b7280;\">战力 " + _0x124889(_0x366c0e) + "</span>\n                                      <span style=\"font-size:12px; color:" + (_0x2e9638 ? "#f59e0b" : "#6b7280") + ";\">当前护送 " + _0x592cae + "/4</span>\n                                      <span class=\"__sel_dot\" style=\"width:10px; height:10px; border-radius:50%; background:" + _0x5f445a + "\"></span>\n                                    </div>\n                                </div>";
                      }
                    } catch (_0x30e415) {
                      {
                        return "";
                      }
                    }
                  }
                }).filter(_0x3d7ff0 => _0x3d7ff0).join("");
                _0x38ae2b.innerHTML = _0xcd109a || "<div style=\"padding:6px;\">俱乐部成员为空或加载失败</div>";
                _0x38ae2b.querySelectorAll("div[data-mid]").forEach(_0x29b5f5 => {
                  _0x29b5f5.addEventListener("click", function () {
                    {
                      const _0x3022cd = this.getAttribute("data-disabled") === "1";
                      if (_0x3022cd) {
                        return _0x4ede5b.showtip("该成员当前护卫次数已满", "warning");
                      }
                      _0xd7ce5f = this.getAttribute("data-mid") || "";
                      _0x1689cb(_0xd7ce5f);
                    }
                  });
                });
                _0x1689cb(_0xd7ce5f);
              }
            } catch (_0xaf48a0) {
              console.error("渲染列表失败:", _0xaf48a0);
              _0x38ae2b.innerHTML = "<div style=\"padding:6px; color:#f43f5e;\">加载失败，请重试</div>";
            }
          }
        };
        const _0x2faa93 = () => {
          {
            try {
              {
                const _0xc6aea8 = document.getElementById("member-font-style");
                _0xc6aea8 && _0xc6aea8.remove();
                if (_0x108e87) {
                  _0x108e87.style.display = "none";
                }
                if (_0xf7b8ac) {
                  _0xf7b8ac.style.display = "none";
                }
              }
            } catch (_0x21f1b2) {
              {
                console.error("关闭弹窗失败:", _0x21f1b2);
              }
            }
          }
        };
        _0x291919.oninput = function () {
          {
            clearTimeout(_0x291919.searchTimer);
            _0x291919.searchTimer = setTimeout(() => {
              _0x327dc1(this.value);
            }, 300);
          }
        };
        _0xbc7cb8.onclick = _0x2faa93;
        if (_0x42b99f) {
          _0x42b99f.onclick = _0x2faa93;
        }
        _0x1e5def.onclick = () => {
          {
            try {
              {
                if (_0xd7ce5f) {
                  {
                    (this.state.helperSelectionByCarId || (this.state.helperSelectionByCarId = {}))[String(_0x2d470c.carId)] = String(_0xd7ce5f);
                    const _0x4c7669 = this.getMemberName(_0xd7ce5f) || _0xd7ce5f;
                    _0x4ede5b.showtip("已设置护卫：" + _0x4c7669, "success");
                  }
                } else {
                  (this.state.helperSelectionByCarId || (this.state.helperSelectionByCarId = {}))[String(_0x2d470c.carId)] = 0;
                  _0x4ede5b.showtip("已取消护卫", "info");
                }
                _0x2faa93();
              }
            } catch (_0x53c90a) {
              {
                console.error("确认选择失败:", _0x53c90a);
                _0x4ede5b.showtip("设置护卫失败", "error");
              }
            }
          }
        };
        if (_0xf7b8ac) {
          {
            _0xf7b8ac.style.cursor = "pointer";
            _0xf7b8ac.onclick = function (_0x132368) {
              {
                if (_0x132368.target === this) {
                  _0x2faa93();
                }
              }
            };
          }
        }
        const _0x327dc1 = (_0xa7e76a = "") => {
          _0x38ae2b.innerHTML = "<div style=\"padding:6px; text-align:center;\">加载中...</div>";
          Promise.all([new Promise(_0x430147 => {
            {
              try {
                {
                  const _0x18c3a9 = this.ensureLegionMembers();
                  if (_0x18c3a9 && typeof _0x18c3a9.then === "function") {
                    {
                      _0x18c3a9.then(_0x5b8941 => _0x430147(_0x5b8941 || {})).catch(() => _0x430147({}));
                    }
                  } else {
                    _0x430147(_0x18c3a9 || {});
                  }
                }
              } catch (_0x22b079) {
                console.error("获取成员数据出错:", _0x22b079);
                _0x430147({});
              }
            }
          }), new Promise(_0x199cdd => {
            {
              try {
                _0x4ede5b.sendCommand("car_getmemberhelpingcnt").then(_0x1c82d0 => {
                  {
                    try {
                      {
                        let _0x7e944c = {};
                        let _0x4a44c1 = {};
                        if (_0x1c82d0) {
                          {
                            if (_0x1c82d0._rawData?.["body"]?.["memberHelpingCntMap"]) {
                              _0x4a44c1 = _0x1c82d0._rawData.body.memberHelpingCntMap;
                            } else {
                              if (_0x1c82d0._rawData?.["memberHelpingCntMap"]) {
                                _0x4a44c1 = _0x1c82d0._rawData.memberHelpingCntMap;
                              } else {
                                if (_0x1c82d0.data?.["body"]?.["memberHelpingCntMap"]) {
                                  _0x4a44c1 = _0x1c82d0.data.body.memberHelpingCntMap;
                                } else {
                                  if (_0x1c82d0.data?.["memberHelpingCntMap"]) {
                                    _0x4a44c1 = _0x1c82d0.data.memberHelpingCntMap;
                                  } else {
                                    if (_0x1c82d0.body?.["memberHelpingCntMap"]) {
                                      _0x4a44c1 = _0x1c82d0.body.memberHelpingCntMap;
                                    } else {
                                      if (_0x1c82d0.memberHelpingCntMap) {
                                        _0x4a44c1 = _0x1c82d0.memberHelpingCntMap;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        if (Array.isArray(_0x4a44c1)) {
                          _0x4a44c1.forEach(_0x2f19d2 => {
                            {
                              const _0x1b0249 = String(_0x2f19d2?.["roleId"] ?? _0x2f19d2?.["id"] ?? "");
                              if (_0x1b0249) {
                                _0x7e944c[_0x1b0249] = Number(_0x2f19d2?.["cnt"] ?? _0x2f19d2?.["count"] ?? 0);
                              }
                            }
                          });
                        } else {
                          typeof _0x4a44c1 === "object" && _0x4a44c1 && Object.keys(_0x4a44c1).forEach(_0x40f653 => {
                            {
                              try {
                                {
                                  const _0x28a6d5 = _0x4a44c1[_0x40f653];
                                  _0x7e944c[String(_0x40f653)] = Number(typeof _0x28a6d5 === "object" ? _0x28a6d5?.["cnt"] ?? _0x28a6d5?.["count"] ?? 0 : _0x28a6d5 ?? 0);
                                }
                              } catch (_0x3ee45e) {}
                            }
                          });
                        }
                        _0x199cdd(_0x7e944c);
                      }
                    } catch (_0x112b36) {
                      {
                        console.error("解析护卫次数失败:", _0x112b36);
                        _0x199cdd({});
                      }
                    }
                  }
                }).catch(_0x263951 => {
                  {
                    console.error("获取护卫次数失败:", _0x263951);
                    _0x199cdd({});
                  }
                });
              } catch (_0xe536fc) {
                {
                  console.error("创建获取护卫次数Promise失败:", _0xe536fc);
                  _0x199cdd({});
                }
              }
            }
          })]).then(([_0x2b9399, _0x12d5bf]) => {
            _0x1ce0ca(_0xa7e76a, _0x2b9399 || {}, _0x12d5bf || {});
          }).catch(_0x57b827 => {
            {
              console.error("加载数据失败:", _0x57b827);
              _0x38ae2b.innerHTML = "<div style=\"padding:6px; color:#f43f5e;\">加载失败，请重试</div>";
            }
          });
        };
        _0x327dc1("");
      }
    },
    openMembersDialog() {
      try {
        let _0x3d3138 = document.getElementById("members-dialog");
        let _0x2544cc = document.getElementById("global-ui-overlay");
        let _0x1fa76e;
        let _0x5ddf68;
        let _0x4c9674;
        if (!_0x3d3138) {
          {
            !_0x2544cc ? (_0x2544cc = document.createElement("div"), _0x2544cc.id = "global-ui-overlay", _0x2544cc.style.cssText = "\n                        position: fixed; top: 0; left: 0; right: 0; bottom: 0;\n                        background: rgba(0,0,0,0.7); backdrop-filter: blur(4px); z-index: 99999;\n                        display: flex; align-items: center; justify-content: center;\n                    ", document.body.appendChild(_0x2544cc)) : _0x2544cc.style.display = "flex";
            _0x3d3138 = document.createElement("div");
            _0x3d3138.id = "members-dialog";
            _0x3d3138.style.cssText = "\n                    position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%);\n                    background: #ffffff;\n                    color: #333333; border: 1px solid #e5e7eb; outline: 1px solid rgba(37,99,235,0.1);\n                    border-radius: 12px; padding: 12px; width: 86vw; max-width: 420px;\n                    box-shadow: 0 16px 48px rgba(0,0,0,0.1); box-sizing: border-box;\n                    z-index: 100000;\n                ";
            let _0x533448 = document.getElementById("member-font-style");
            !_0x533448 && (_0x533448 = document.createElement("style"), _0x533448.id = "member-font-style", _0x533448.textContent = "\n                        /* 仅针对对话框内的玩家名字元素 */\n                        #members-content {\n                            font-size: 10px !important;\n                        }\n                        #members-content div[data-mid] {\n                            font-size: 10px !important;\n                        }\n                        #members-content div[data-mid] span[style*=\"white-space:nowrap\"] {\n                            font-size: 10px !important;\n                            line-height: 1.1 !important;\n                        }\n                        #helper-content {\n                            font-size: 10px !important;\n                        }\n                        #helper-content div[data-mid] {\n                            font-size: 10px !important;\n                        }\n                        #helper-content div[data-mid] .__name {\n                            font-size: 10px !important;\n                        }\n                    ", document.head.appendChild(_0x533448));
            _0x3d3138.innerHTML = "\n                    <div style=\"display:flex; align-items:center; justify-content:space-between; padding:10px 12px; font-weight:700;\">\n                      <div style=\"font-weight:700; letter-spacing:.3px; color:#333333;\">俱乐部成员</div>\n                      <button id=\"members-close\" style=\"padding:4px 8px; border-radius:4px; border:none; background:#e5e7eb; color:#333333; cursor:pointer; font-size:12px;\">关闭</button>\n                    </div>\n                    <div style=\"padding:6px 8px; border-bottom: 1px solid #e5e7eb; margin:0 1px 6px 1px;\">\n                      <input id=\"members-search-input\" placeholder=\"按名称或ID搜索\" style=\"width:100%; padding:7px 10px; border-radius:8px; border: 1px solid #d1d5db; background: #ffffff; color: #333333; box-sizing: border-box;\" />\n                    </div>\n                    <div id=\"members-content\" style=\"max-height:240px; overflow:auto; border:1px solid #e5e7eb; border-radius:10px; padding:6px 8px; background:#ffffff; color:#333333;\">加载中...</div>\n                ";
            document.body.appendChild(_0x3d3138);
            _0x1fa76e = document.getElementById("members-content");
            _0x5ddf68 = document.getElementById("members-search-input");
            _0x4c9674 = document.getElementById("members-close");
            const _0x583cb5 = () => {
              {
                try {
                  {
                    const _0x414672 = document.getElementById("member-font-style");
                    if (_0x414672) {
                      {
                        _0x414672.remove();
                      }
                    }
                    if (_0x3d3138) {
                      _0x3d3138.style.display = "none";
                    }
                    if (_0x2544cc) {
                      _0x2544cc.style.display = "none";
                    }
                  }
                } catch (_0x12a8a4) {
                  {
                    console.error("关闭弹窗失败:", _0x12a8a4);
                  }
                }
              }
            };
            _0x4c9674 && (_0x4c9674.onclick = _0x583cb5);
            if (_0x2544cc) {
              {
                _0x2544cc.onclick = function (_0x203e9b) {
                  {
                    if (_0x203e9b.target === this) {
                      _0x583cb5();
                    }
                  }
                };
              }
            }
          }
        } else {
          {
            _0x3d3138.style.display = "block";
            if (_0x2544cc) {
              _0x2544cc.style.display = "flex";
            }
            _0x1fa76e = document.getElementById("members-content");
            _0x5ddf68 = document.getElementById("members-search-input");
            _0x4c9674 = document.getElementById("members-close");
          }
        }
        if (!_0x1fa76e) {
          {
            console.error("未找到内容容器元素");
            return;
          }
        }
        const _0x23d662 = _0x37363c => {
          {
            const _0x3b9918 = Number(_0x37363c || 0);
            if (_0x3b9918 >= 100000000) {
              return (_0x3b9918 / 100000000).toFixed(2) + "亿";
            }
            if (_0x3b9918 >= 10000) {
              return (_0x3b9918 / 10000).toFixed(2) + "万";
            }
            return String(_0x3b9918);
          }
        };
        const _0x8dbd30 = (_0x5e6622 = "", _0x2d6b83 = {}, _0x10c3e5 = {}) => {
          {
            try {
              {
                const _0x3f10ea = String(_0x5e6622 || "").trim().toLowerCase();
                const _0x3d1dc3 = Object.keys(_0x2d6b83).filter(_0xb34272 => {
                  {
                    const _0x3fab9d = _0x2d6b83[_0xb34272];
                    const _0x2284ad = _0x3fab9d?.["name"] || _0x3fab9d?.["nickname"] || "";
                    return !_0x3f10ea || String(_0xb34272).includes(_0x3f10ea) || String(_0x2284ad).toLowerCase().includes(_0x3f10ea);
                  }
                }).map(_0x2ec1cb => {
                  {
                    const _0x2996d1 = _0x2d6b83[_0x2ec1cb];
                    const _0x352e57 = Number(_0x10c3e5[String(_0x2ec1cb)] ?? 0);
                    const _0x5c4e70 = _0x2996d1?.["name"] || _0x2996d1?.["nickname"] || _0x2ec1cb;
                    const _0x1aff7f = Number(_0x2996d1?.["power"] ?? _0x2996d1?.["s_power"] ?? _0x2996d1?.["custom"]?.["s_power"] ?? 0);
                    const _0x153baf = _0x2996d1?.["headImg"] || _0x2996d1?.["avatar"] || "/icons/xiaoyugan.png";
                    const _0x47a7fe = _0x2996d1?.["role"] || _0x2996d1?.["position"] || "";
                    const _0x145ab5 = _0x47a7fe ? "<span style=\"font-size:11px; color:#60a5fa; margin-left:6px;\">" + _0x47a7fe + "</span>" : "";
                    return "<div data-mid=\"" + _0x2ec1cb + "\" style=\"display:flex; align-items:center; padding:6px; margin:4px 0; background: rgba(249,250,251,0.8); border-radius:6px; border:1px solid #e5e7eb;\">\n                                    <div style=\"display:flex; align-items:center; gap:8px; flex:1;\">\n                                      <img src=\"" + _0x153baf + "\" onerror=\"this.src='/icons/xiaoyugan.png'\" style=\"width:22px;height:22px;border-radius:50%;object-fit:cover;\" />\n                                      <div style=\"flex:1; overflow:hidden;\">\n                                        <div style=\"display:flex; align-items:center;\">\n                                          <span style=\"white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:120px; display:inline-block;\">" + _0x5c4e70 + "</span>\n                                          " + _0x145ab5 + "\n                                        </div>\n                                      </div>\n                                    </div>\n                                    <div style=\"display:flex; align-items:center; gap:12px; margin-left:8px;\">\n                                      <span style=\"font-size:12px; color:#6b7280;\">战力 " + _0x23d662(_0x1aff7f) + "</span>\n                                      <div style=\"font-size:12px; color:" + (_0x352e57 >= 4 ? "#f59e0b" : "#6b7280") + ";\">当前护送 " + _0x352e57 + "/4</div>\n                                    </div>\n                                </div>";
                  }
                }).join("");
                _0x1fa76e.innerHTML = _0x3d1dc3 || "<div style=\"padding:6px;\">俱乐部成员为空或加载失败</div>";
              }
            } catch (_0x2010d2) {
              console.error("渲染成员列表失败:", _0x2010d2);
              _0x1fa76e.innerHTML = "<div style=\"padding:6px; color:#f43f5e;\">加载失败，请重试</div>";
            }
          }
        };
        const _0x1af256 = (_0x3bfd4c = "") => {
          _0x1fa76e.innerHTML = "<div style=\"padding:6px; text-align:center;\">加载中...</div>";
          Promise.all([Promise.resolve().then(() => this.ensureLegionMembers()), new Promise(_0x236996 => {
            _0x4ede5b.sendCommand("car_getmemberhelpingcnt").then(_0x2e70d9 => {
              try {
                {
                  let _0x33742e = {};
                  let _0x59ee34 = {};
                  if (_0x2e70d9) {
                    {
                      if (_0x2e70d9._rawData?.["body"]?.["memberHelpingCntMap"]) {
                        _0x59ee34 = _0x2e70d9._rawData.body.memberHelpingCntMap;
                      } else {
                        if (_0x2e70d9._rawData?.["memberHelpingCntMap"]) {
                          _0x59ee34 = _0x2e70d9._rawData.memberHelpingCntMap;
                        } else {
                          if (_0x2e70d9.data?.["body"]?.["memberHelpingCntMap"]) {
                            _0x59ee34 = _0x2e70d9.data.body.memberHelpingCntMap;
                          } else {
                            if (_0x2e70d9.data?.["memberHelpingCntMap"]) {
                              _0x59ee34 = _0x2e70d9.data.memberHelpingCntMap;
                            } else {
                              if (_0x2e70d9.body?.["memberHelpingCntMap"]) {
                                _0x59ee34 = _0x2e70d9.body.memberHelpingCntMap;
                              } else {
                                if (_0x2e70d9.memberHelpingCntMap) {
                                  _0x59ee34 = _0x2e70d9.memberHelpingCntMap;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  if (Array.isArray(_0x59ee34)) {
                    {
                      _0x59ee34.forEach(_0x55fbe => {
                        {
                          const _0x2b5bf4 = String(_0x55fbe?.["roleId"] ?? _0x55fbe?.["id"] ?? "");
                          if (_0x2b5bf4) {
                            _0x33742e[_0x2b5bf4] = Number(_0x55fbe?.["cnt"] ?? _0x55fbe?.["count"] ?? 0);
                          }
                        }
                      });
                    }
                  } else {
                    typeof _0x59ee34 === "object" && _0x59ee34 && Object.keys(_0x59ee34).forEach(_0x24b960 => {
                      {
                        try {
                          {
                            const _0x1a0cb9 = _0x59ee34[_0x24b960];
                            _0x33742e[String(_0x24b960)] = Number(typeof _0x1a0cb9 === "object" ? _0x1a0cb9?.["cnt"] ?? _0x1a0cb9?.["count"] ?? 0 : _0x1a0cb9 ?? 0);
                          }
                        } catch (_0xce71f1) {}
                      }
                    });
                  }
                  _0x236996(_0x33742e);
                }
              } catch (_0x31ec9d) {
                {
                  console.error("解析护卫次数失败:", _0x31ec9d);
                  _0x236996({});
                }
              }
            }).catch(_0xb89296 => {
              console.error("获取护卫次数失败:", _0xb89296);
              _0x236996({});
            });
          })]).then(([_0x1058e7, _0x6d6b0e]) => {
            _0x8dbd30(_0x3bfd4c, _0x1058e7 || {}, _0x6d6b0e || {});
          }).catch(_0x45d803 => {
            console.error("加载成员数据失败:", _0x45d803);
            _0x1fa76e.innerHTML = "<div style=\"padding:6px; color:#f43f5e;\">加载失败，请重试</div>";
          });
        };
        _0x5ddf68 && (_0x5ddf68.oninput = function () {
          clearTimeout(_0x5ddf68.searchTimer);
          _0x5ddf68.searchTimer = setTimeout(() => {
            _0x1af256(this.value);
          }, 300);
        });
        _0x1af256("");
      } catch (_0x5e2172) {
        console.error("打开成员列表失败:", _0x5e2172);
        _0x4ede5b.showtip("打开成员列表失败", "error");
      }
    },
    async sendCar(_0x397b4a) {
      if (!this.isCarEventActive()) {
        return _0x4ede5b.showtip("当前非活动时间 (周一至周三 6:00-20:00)", "error");
      }
      if (this.state.sendCount >= 4) {
        return _0x4ede5b.showtip("今日发车次数已用完", "error");
      }
      const _0x4c3018 = this.state.fullCarData.find(_0x5c05d9 => String(_0x5c05d9.carId) === String(_0x397b4a));
      if (!_0x4c3018) {
        return _0x4ede5b.showtip("车辆不存在", "error");
      }
      const _0x218ead = Number((this.state.helperSelectionByCarId || {})[String(_0x397b4a)] || 0);
      (await this.performCarAction("send", _0x397b4a, false, _0x218ead)) && (this.state.helperSelectionByCarId && this.state.helperSelectionByCarId[String(_0x397b4a)] && delete this.state.helperSelectionByCarId[String(_0x397b4a)], setTimeout(() => this.queryClubCars(), 300));
    }
  };
  _0x197cb0.init();
  async function _0x3ee9b4(_0x5cee68) {
    if (_0x5cee68) {
      _0x5cee68.textContent = "🔄 开始执行藏品图鉴升级...";
    }
    const _0x5d4461 = 100;
    let _0x695c7e = 0;
    let _0x25bf55 = 0;
    const _0x4736ec = () => {
      const _0x47f4de = [];
      const _0x355443 = new Set();
      function _0xc2b098(_0x2b566b, _0x186757, _0x122a78 = 2) {
        const _0x33661c = _0x2b566b + "_" + _0x186757 + "_" + _0x122a78;
        if (!_0x355443.has(_0x33661c)) {
          const _0x3c9360 = {
            seriesId: _0x2b566b,
            id: _0x186757,
            poolType: _0x122a78
          };
          _0x47f4de.push(_0x3c9360);
          _0x355443.add(_0x33661c);
        }
      }
      for (let _0x1c42a3 = 1; _0x1c42a3 <= 12; _0x1c42a3++) {
        _0xc2b098(2, _0x1c42a3, 1);
      }
      for (let _0x45134f = 1001; _0x45134f <= 1015; _0x45134f++) {
        _0xc2b098(3, _0x45134f, 1);
      }
      const _0x51342f = [10103, 11302, 10903, 10206, 11705, 10302, 10403, 11005, 11403, 11804, 10503, 10603, 11102, 11504, 10702, 10805, 11204, 11604, 12005, 11904];
      for (const _0x9b3fd2 of _0x51342f) {
        _0xc2b098(40001, _0x9b3fd2, 3);
      }
      for (let _0x4b9655 = 2001; _0x4b9655 <= 2020; _0x4b9655++) {
        _0xc2b098(6, _0x4b9655, 1);
      }
      for (let _0x2a47d7 = 3001; _0x2a47d7 <= 3010; _0x2a47d7++) {
        _0xc2b098(6, _0x2a47d7, 1);
      }
      const _0x4b05b4 = {
        "101": [10101, 10102, 1009, 10103, 2001],
        "113": [11307, 11302, 11301, 11304, 2003, 1004],
        "109": [10903, 10901, 10908, 2002, 1007, 10902],
        "102": [10206, 10201, 10207, 2004, 1012, 10202],
        "117": [11702, 11705, 11703, 11704],
        "103": [10308, 10307, 10302, 10301, 10304, 2016, 1003],
        "104": [10403, 10401, 10404, 10402, 2013, 1014],
        "110": [11005, 11001, 11006, 2014, 1011, 11002],
        "114": [11409, 11408, 11403, 11401, 11406, 2015, 1001, 11402],
        "118": [11802, 11803, 11804, 11805],
        "105": [10508, 10509, 10503, 10501, 10504, 10502, 2005, 1013],
        "106": [10603, 10601, 10606, 1002, 10602],
        "111": [11101, 11102, 11103, 2006, 11104],
        "115": [11504, 11501, 2007, 1006, 11502],
        "119": [11903, 11904, 11905, 3001],
        "107": [10711, 10704, 10712, 10713, 10714, 10702, 10701, 10708, 10707, 10703, 2012, 1008],
        "108": [10805, 10801, 10807, 2009, 1010, 10802],
        "112": [11204, 11201, 2011, 11203, 11202],
        "116": [11604, 11601, 11605, 2010, 1005, 11602],
        "120": [12002, 12006, 12005, 12003, 12004]
      };
      for (const _0x19c553 in _0x4b05b4) {
        const _0x540d27 = parseInt(_0x19c553, 10);
        const _0x2aac20 = _0x4b05b4[_0x19c553];
        let _0x3b8efe = Infinity;
        let _0xf01700 = -Infinity;
        const _0x3108d0 = new Set();
        for (const _0x5309c5 of _0x2aac20) {
          if (Math.floor(_0x5309c5 / 100) === _0x540d27 && _0x5309c5 % 100 > 0 && _0x5309c5 % 100 < 100) {
            const _0x7ee68c = _0x5309c5 % 100;
            _0x3b8efe = Math.min(_0x3b8efe, _0x7ee68c);
            _0xf01700 = Math.max(_0xf01700, _0x7ee68c);
          } else {
            _0x3108d0.add(_0x5309c5);
          }
        }
        if (_0x3b8efe !== Infinity && _0xf01700 !== -Infinity) {
          for (let _0x32e1ff = _0x3b8efe; _0x32e1ff <= _0xf01700; _0x32e1ff++) {
            _0xc2b098(_0x540d27, _0x540d27 * 100 + _0x32e1ff);
          }
        }
        for (const _0x2844b9 of _0x3108d0) {
          _0xc2b098(_0x540d27, _0x2844b9);
        }
      }
      return _0x47f4de.sort((_0x27466f, _0x2c9f53) => {
        if (_0x27466f.seriesId !== _0x2c9f53.seriesId) {
          return _0x27466f.seriesId - _0x2c9f53.seriesId;
        }
        if (_0x27466f.id !== _0x2c9f53.id) {
          return _0x27466f.id - _0x2c9f53.id;
        }
        return _0x27466f.poolType - _0x2c9f53.poolType;
      });
    };
    const _0x51ff39 = _0x4736ec();
    const _0x4ab6fc = _0x51ff39.length;
    _0x5cee68.textContent = "🔄 准备领取 " + _0x4ab6fc + " 个图鉴奖励...";
    for (let _0x44f763 = 0; _0x44f763 < _0x51ff39.length; _0x44f763++) {
      const _0x427af5 = _0x51ff39[_0x44f763];
      const _0x79fe4b = _0x44f763 + 1;
      _0x5cee68.textContent = "🔄 (" + _0x79fe4b + "/" + _0x4ab6fc + ") 处理系列: " + _0x427af5.seriesId + ", ID: " + _0x427af5.id + ", 类型: " + _0x427af5.poolType;
      try {
        const _0x474d63 = {
          id: _0x427af5.id,
          isAll: false,
          poolType: _0x427af5.poolType,
          seriesId: _0x427af5.seriesId
        };
        const _0x31db2f = await _0x4ede5b.sendCommand("collection_activate", _0x474d63);
        _0x31db2f.code === 0 ? _0x695c7e++ : _0x25bf55++;
      } catch (_0x4db308) {
        _0x25bf55++;
        console.error("处理图鉴失败:", _0x4db308);
      }
      await _0x4ede5b.delay(_0x5d4461 / 1000);
    }
    _0x5cee68.textContent = "✅ 图鉴奖励领取完成，开始执行额外领取...";
    const _0x57ebe1 = {
      seriesId: 2,
      poolType: 1
    };
    const _0x1c04a6 = {
      seriesId: 3,
      poolType: 1
    };
    const _0x5571cb = {
      seriesId: 40001,
      poolType: 3
    };
    const _0x56fd1f = [_0x57ebe1, _0x1c04a6, _0x5571cb];
    for (const _0x474142 of _0x56fd1f) {
      try {
        _0x5cee68.textContent = "🔄 正在领取系列奖励 (seriesId: " + _0x474142.seriesId + ")...";
        const _0x56febe = {
          seriesId: _0x474142.seriesId,
          isAll: true,
          poolType: _0x474142.poolType
        };
        const _0x1beffd = await _0x4ede5b.sendCommand("collection_claimseries", _0x56febe);
        _0x1beffd.code === 0 && _0x695c7e++;
      } catch (_0x27c6f1) {
        console.error("系列奖励 (" + _0x474142.seriesId + ") 领取失败:", _0x27c6f1);
      }
      await _0x4ede5b.delay(_0x5d4461 / 1000);
    }
    try {
      _0x5cee68.textContent = "🔄 正在领取总览奖励...";
      const _0x3516f8 = await _0x4ede5b.sendCommand("collection_claimtotal", {});
      _0x3516f8.code === 0 && _0x695c7e++;
    } catch (_0x1b57dc) {
      console.error("总览奖励领取失败:", _0x1b57dc);
    }
    await _0x4ede5b.delay(_0x5d4461 / 1000);
    _0x5cee68.textContent = "🔄 开始执行30次升级操作...";
    for (let _0x496e1a = 1; _0x496e1a <= 30; _0x496e1a++) {
      _0x5cee68.textContent = "🔄 升级操作 " + _0x496e1a + "/30";
      try {
        const _0x3325e6 = {
          id: 1001,
          isAll: false,
          poolType: 1,
          seriesId: 3
        };
        await _0x4ede5b.sendCommand("collection_activate", _0x3325e6);
      } catch (_0x3ba56f) {
        console.log("升级第 " + _0x496e1a + " 次失败:", _0x3ba56f.message);
      }
      await _0x4ede5b.delay(0.05);
    }
    const _0x4fea46 = "✅ 藏品图鉴升级完成！\n成功: " + _0x695c7e + " 次 | 失败: " + _0x25bf55 + " 次\n已完成全部30次升级操作";
    _0x5cee68.textContent = _0x4fea46;
  }
  let _0x36daee = false;
  let _0x3910cf = false;
  async function _0x58de40(_0x2c5dfb, _0x22e08a) {
    if (_0x36daee && (_0x2c5dfb.startsWith("daily-task-") || _0x2c5dfb === "one-key-100")) {
      _0x4ede5b.showtip("已有任务在执行，请稍候", "info");
      return;
    }
    const _0x3a1df9 = _0x22e08a.closest(".task-section").querySelector(".status");
    const _0x783c83 = _0x22e08a.textContent;
    const _0x23c2fa = _0x2b0b8f.querySelectorAll(".task-btn, input[type=\"checkbox\"]");
    if (_0x2c5dfb !== "toggle-ws-monitor" && _0x2c5dfb !== "clear-ws-log" && _0x2c5dfb !== "copy-all-ws-log") {
      _0x22e08a.disabled = true;
      _0x22e08a.textContent = "执行中...";
      if (_0x3a1df9) {
        _0x3a1df9.textContent = "🚀 执行中...";
      }
    }
    (_0x2c5dfb === "execute-daily-checked" || _0x2c5dfb === "one-key-100") && (_0x36daee = true, _0x3910cf = false, _0x23c2fa.forEach(_0x28dae0 => _0x28dae0.disabled = true));
    try {
      const _0x4a7993 = window.__require?.("data-index");
      if (_0x2c5dfb === "toggle-ws-monitor") {
        if (WSModule.isMonitoring) {
          WSModule.stop();
        } else {
          WSModule.start();
        }
        return;
      }
      if (_0x2c5dfb === "clear-ws-log") {
        WSModule.clear();
        return;
      }
      if (_0x2c5dfb === "copy-all-ws-log") {
        WSModule.copyAll();
        return;
      }
      const _0x257b6d = window.__require?.("ServerData");
      if (_0x2c5dfb.startsWith("start-fishing-")) {
        const _0x4a57ad = parseInt(_0x2c5dfb.split("-")[2]);
        const _0x10ba35 = parseInt(_0x22e08a.parentElement.querySelector("input").value) || 0;
        const _0xadf53a = _0x4a57ad === 2 ? "高级钓鱼" : "普通钓鱼";
        if (_0x4a57ad === 1 && _0x10ba35 > 0) {
          let _0x2b6856 = 0;
          const _0x267120 = Math.min(_0x10ba35, 3);
          for (let _0x5e0d70 = 0; _0x5e0d70 < _0x267120; _0x5e0d70++) {
            try {
              const _0x281ca9 = {
                lotteryNumber: 1,
                newFree: true,
                type: 1
              };
              await _0x4a7993.ArtifactService.lottery(_0x281ca9);
            } catch (_0x249f94) {
              console.log("单次钓鱼尝试失败（正常现象）");
            }
            _0x2b6856++;
            _0x3a1df9.textContent = _0xadf53a + " " + _0x2b6856 + "/" + _0x10ba35;
            await _0x4ede5b.delay(0.2);
          }
          const _0x132001 = _0x10ba35 - _0x267120;
          if (_0x132001 > 0) {
            for (let _0x16577a = 0; _0x16577a < Math.ceil(_0x132001 / 10); _0x16577a++) {
              const _0x8351b = Math.min(10, _0x132001 - _0x16577a * 10);
              if (_0x8351b <= 0) {
                break;
              }
              const _0x42685f = {
                lotteryNumber: _0x8351b,
                newFree: true,
                type: 1
              };
              await _0x4a7993.ArtifactService.lottery(_0x42685f);
              _0x2b6856 += _0x8351b;
              _0x3a1df9.textContent = _0xadf53a + " " + Math.min(_0x2b6856, _0x10ba35) + "/" + _0x10ba35;
            }
          }
        } else {
          if (_0x4a57ad === 2 && _0x10ba35 > 0) {
            for (let _0x5b221a = 0; _0x5b221a < Math.ceil(_0x10ba35 / 10); _0x5b221a++) {
              const _0x191279 = Math.min(10, _0x10ba35 - _0x5b221a * 10);
              if (_0x191279 <= 0) {
                break;
              }
              const _0x36df0 = {
                lotteryNumber: _0x191279,
                newFree: true,
                type: 2
              };
              await _0x4a7993.ArtifactService.lottery(_0x36df0);
              _0x3a1df9.textContent = _0xadf53a + " " + Math.min((_0x5b221a + 1) * 10, _0x10ba35) + "/" + _0x10ba35;
            }
          }
        }
        _0x3a1df9.textContent = "✅ " + _0xadf53a + "完成";
      } else {
        if (_0x2c5dfb === "recruit") {
          const _0x24aba5 = parseInt(_0x22e08a.parentElement.querySelector("input").value);
          if (_0x24aba5 <= 0) {
            _0x3a1df9.textContent = "ℹ️ 次数为0";
            return;
          }
          const _0x1ce978 = Math.floor(_0x24aba5 / 10);
          const _0x57fb48 = _0x24aba5 % 10;
          let _0x1b5527 = 0;
          if (_0x1ce978 > 0) {
            for (let _0x488630 = 0; _0x488630 < _0x1ce978; _0x488630++) {
              _0x3a1df9.textContent = "招募 " + (_0x1b5527 + 10) + "/" + _0x24aba5;
              const _0x4b56c4 = {
                byClub: false,
                recruitNumber: 10,
                recruitType: 1
              };
              await _0x4a7993.HeroService.recruit(_0x4b56c4);
              _0x1b5527 += 10;
            }
          }
          if (_0x57fb48 > 0) {
            for (let _0x5924ad = 0; _0x5924ad < _0x57fb48; _0x5924ad++) {
              _0x3a1df9.textContent = "招募 " + (_0x1b5527 + 1) + "/" + _0x24aba5;
              const _0x496906 = {
                byClub: false,
                recruitNumber: 1,
                recruitType: 3
              };
              await _0x4a7993.HeroService.recruit(_0x496906);
              _0x1b5527++;
              await _0x4ede5b.delay(0.2);
            }
          }
          _0x3a1df9.textContent = "✅ 招募完成";
        } else {
          if (_0x2c5dfb.startsWith("open-box-")) {
            const _0x569426 = parseInt(_0x2c5dfb.split("-")[2]);
            const _0xfb5a07 = parseInt(_0x22e08a.parentElement.querySelector("input").value);
            const _0x76f304 = {
              "2001": "木质",
              "2002": "青铜",
              "2003": "黄金",
              "2004": "铂金"
            };
            const _0x570ec8 = _0x76f304[_0x569426];
            if (_0xfb5a07 <= 0 || _0xfb5a07 % 10 !== 0) {
              _0x4ede5b.showtip("宝箱数量必须是10的倍数", "error");
              _0x3a1df9.textContent = "❌ 数量错误";
              return;
            }
            for (let _0x22050c = 0; _0x22050c < _0xfb5a07 / 10; _0x22050c++) {
              const _0x5bb250 = {
                itemId: _0x569426,
                number: 10
              };
              await _0x4a7993.ItemService.openBox(_0x5bb250);
              _0x3a1df9.textContent = "开启" + _0x570ec8 + " " + (_0x22050c + 1) * 10 + "/" + _0xfb5a07;
            }
            _0x3a1df9.textContent = "✅ " + _0x570ec8 + "开启完成";
          } else {
            if (_0x2c5dfb === "starUp" || _0x2c5dfb === "bookUpgrade") {
              const _0x220350 = _0x2c5dfb === "starUp";
              const _0x46c14f = _0x220350 ? _0x4a7993.HeroService : _0x4a7993.BookService;
              const _0x361d10 = _0x220350 ? "heroUpgradeStar" : "upgrade";
              const _0x4928d5 = _0x220350 ? "武将升星" : "升级图鉴";
              let _0xfa143a = 0;
              const _0x1d36c0 = {
                length: 20
              };
              const _0x2b7346 = {
                length: 28
              };
              const _0x43299f = {
                length: 14
              };
              const _0x58de45 = [...Array.from(_0x1d36c0, (_0x1e30ca, _0x18c383) => 101 + _0x18c383), ...Array.from(_0x2b7346, (_0x2a8ab7, _0x359875) => 201 + _0x359875), ...Array.from(_0x43299f, (_0x4c9000, _0xb42dd3) => 301 + _0xb42dd3)];
              for (const _0x3d392b of _0x58de45) {
                for (let _0x7d17f6 = 0; _0x7d17f6 < 5; _0x7d17f6++) {
                  try {
                    const _0x19c519 = {
                      heroId: _0x3d392b
                    };
                    await _0x46c14f[_0x361d10](_0x19c519);
                    _0xfa143a++;
                    _0x3a1df9.textContent = _0x4928d5 + "完成 " + _0xfa143a + " 次";
                  } catch (_0x420fd9) {
                    break;
                  }
                }
              }
              if (!_0x220350) {
                try {
                  await _0x4a7993.BookService.claimPointReward({});
                } catch (_0x5280ae) {}
              }
              _0x3a1df9.textContent = "✅ " + _0x4928d5 + "完成";
            } else {
              if (_0x2c5dfb === "tower") {
                if (_0x257b6d?.["ROLE"]?.["levelId"] <= 50) {
                  _0x3a1df9.textContent = "❌ 等级不足";
                  return;
                }
                await _0x4a7993.TowerService.getInfo({});
                let _0x3e5ba2 = 0;
                while (true) {
                  const _0x53e0e2 = _0x257b6d?.["ROLE"];
                  if (!_0x53e0e2 || _0x53e0e2.tower.energy <= 0 || _0x53e0e2.tower.id >= 4500) {
                    break;
                  }
                  try {
                    _0x53e0e2.tower.id % 10 === 0 && !_0x53e0e2.tower.reward[_0x53e0e2.tower.id / 10] && (await _0x4a7993.TowerService.claimReward({
                      rewardId: _0x53e0e2.tower.id / 10
                    }));
                    await _0x4a7993.FightService.startTower({});
                    _0x3e5ba2++;
                    _0x3a1df9.textContent = "已爬" + _0x3e5ba2 + "层 | 体力:" + (_0x53e0e2.tower.energy - 1);
                  } catch (_0x37ef9b) {
                    await _0x4ede5b.delay(3);
                  }
                }
                _0x3a1df9.textContent = "✅ 爬塔完成，共" + _0x3e5ba2 + "层";
              } else {
                if (_0x2c5dfb === "arena-start") {
                  const _0x541c5f = parseInt(_0x22e08a.parentElement.querySelector("input").value) || 3;
                  if (_0x541c5f < 1 || _0x541c5f > 999) {
                    _0x4ede5b.showtip("次数需在1-999之间", "error");
                    return;
                  }
                  _0x3a1df9.textContent = "⚔️ 准备开始...";
                  let _0x4cd7eb = 0;
                  for (let _0x294f06 = 1; _0x294f06 <= _0x541c5f; _0x294f06++) {
                    _0x3a1df9.textContent = "⚔️ 正在进行 (" + _0x294f06 + "/" + _0x541c5f + ")";
                    try {
                      const _0x386c67 = {
                        refresh: false
                      };
                      const _0x202ade = await _0x4ede5b.sendCommand("arena_getareatarget", _0x386c67);
                      const _0x5700fa = _0x202ade?.["_rawData"]?.["roleList"]?.[0]?.["roleId"];
                      if (!_0x5700fa) {
                        throw new Error("未获取到目标ID");
                      }
                      const _0x29f5bb = {
                        battleVersion: _0x4f313c,
                        targetId: _0x5700fa
                      };
                      await _0x4ede5b.sendCommand("fight_startareaarena", _0x29f5bb);
                      _0x4cd7eb++;
                      _0x4ede5b.showtip("第" + _0x294f06 + "轮战斗成功", "success");
                    } catch (_0x5bb713) {
                      _0x4ede5b.showtip("第" + _0x294f06 + "轮战斗失败: " + _0x5bb713.message, "error");
                    }
                    if (_0x294f06 < _0x541c5f) {
                      await _0x4ede5b.delay(0.01);
                    }
                  }
                  _0x3a1df9.textContent = "✅ 完成: 总" + _0x541c5f + "轮, 成功" + _0x4cd7eb + "轮";
                } else {
                  if (_0x2c5dfb === "arena-winrate-battle") {
                    const _0x1bfbf3 = parseInt(_0x22e08a.parentElement.querySelector("input").value) || 1;
                    if (_0x1bfbf3 < 1 || _0x1bfbf3 > 999) {
                      _0x4ede5b.showtip("次数需在1-999之间", "error");
                      return;
                    }
                    _0x3a1df9.textContent = "📊 正在获取对手胜率数据...";
                    try {
                      const _0x272c0b = {
                        refresh: false
                      };
                      const _0x4f52de = await _0x4ede5b.sendCommand("arena_getareatarget", _0x272c0b);
                      const _0x2b1ccd = _0x4f52de?.["_rawData"]?.["roleList"];
                      if (!_0x2b1ccd || _0x2b1ccd.length === 0) {
                        throw new Error("未获取到对手列表");
                      }
                      const _0x4d7fa7 = document.getElementById("winrate-results");
                      const _0x2cbd59 = _0x4d7fa7 ? _0x4d7fa7.innerHTML : "";
                      let _0x36573c = -1;
                      let _0x26501f = null;
                      if (_0x2cbd59) {
                        for (const _0x33145a of _0x2b1ccd) {
                          const _0x238e42 = _0x33145a.name || "";
                          const _0x14f1e0 = new RegExp(_0x238e42 + ".*胜率：(d+(?:.d+)?)%", "i");
                          const _0x47b766 = _0x2cbd59.match(_0x14f1e0);
                          if (_0x47b766 && _0x47b766[1]) {
                            const _0xdbdafc = parseFloat(_0x47b766[1]);
                            _0xdbdafc > _0x36573c && (_0x36573c = _0xdbdafc, _0x26501f = _0x33145a.roleId);
                          }
                        }
                      }
                      !_0x26501f && _0x2b1ccd.length > 0 && (_0x26501f = _0x2b1ccd[0].roleId, _0x4ede5b.showtip("未找到胜率数据，使用第一个对手", "info"));
                      if (!_0x26501f) {
                        throw new Error("未找到合适的对手");
                      }
                      let _0x231a29 = 0;
                      for (let _0x378c41 = 1; _0x378c41 <= _0x1bfbf3; _0x378c41++) {
                        _0x3a1df9.textContent = "⚔️ 正在与胜率最高对手战斗 (" + _0x378c41 + "/" + _0x1bfbf3 + ")";
                        try {
                          const _0x4612d0 = {
                            battleVersion: _0x4f313c,
                            targetId: _0x26501f
                          };
                          await _0x4ede5b.sendCommand("fight_startareaarena", _0x4612d0);
                          _0x231a29++;
                          _0x4ede5b.showtip("第" + _0x378c41 + "轮战斗成功", "success");
                        } catch (_0x55223c) {
                          _0x4ede5b.showtip("第" + _0x378c41 + "轮战斗失败: " + _0x55223c.message, "error");
                        }
                        if (_0x378c41 < _0x1bfbf3) {
                          await _0x4ede5b.delay(0.01);
                        }
                      }
                      _0x3a1df9.textContent = "✅ 胜率战斗完成: 总" + _0x1bfbf3 + "轮, 成功" + _0x231a29 + "轮";
                    } catch (_0x51caba) {
                      _0x4ede5b.showtip("胜率战斗失败: " + _0x51caba.message, "error");
                      _0x3a1df9.textContent = "❌ 胜率战斗失败";
                    }
                  } else {
                    if (_0x2c5dfb === "club-boss") {
                      const _0x2be93d = parseInt(document.getElementById("club-boss-count").textContent);
                      if (_0x2be93d <= 0) {
                        _0x3a1df9.textContent = "ℹ️ 次数为0";
                        return;
                      }
                      for (let _0x1e8fea = 1; _0x1e8fea <= _0x2be93d; _0x1e8fea++) {
                        _0x3a1df9.textContent = "⚔️ 挑战Boss (" + _0x1e8fea + "/" + _0x2be93d + ")";
                        await _0x4a7993.FightService.startLegionBoss({});
                        await _0x4ede5b.delay(0.5);
                      }
                      _0x3a1df9.textContent = "✅ Boss挑战完成";
                    } else {
                      if (_0x2c5dfb === "claim-activity") {
                        _0x3a1df9.textContent = "🎁 领取每日奖励...";
                        for (const _0xb17018 of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
                          const _0x14b498 = {
                            taskId: _0xb17018
                          };
                          await _0x4a7993.TaskService.claimDailyPoint(_0x14b498);
                          await _0x4ede5b.delay(0.1);
                        }
                        _0x3a1df9.textContent = "🎁 领取每周奖励...";
                        const _0x1ee212 = {
                          rewardId: 0
                        };
                        await _0x4a7993.TaskService.claimDailyReward(_0x1ee212);
                        await _0x4ede5b.delay(0.1);
                        const _0x553aeb = {
                          rewardId: 0
                        };
                        await _0x4a7993.TaskService.claimWeekReward(_0x553aeb);
                        _0x3a1df9.textContent = "✅ 活跃奖励领取完毕";
                      } else {
                        if (_0x2c5dfb.startsWith("daily-task-") || _0x2c5dfb === "execute-daily-checked" || _0x2c5dfb === "one-key-100") {
                          const _0x3ef3f8 = {
                            itemId: 2001,
                            number: 10
                          };
                          const _0x264807 = {
                            goodsId: 1
                          };
                          const _0x3e9abe = {
                            "daily-task-hangup-combined": {
                              func: async () => {
                                for (let _0xafea70 = 0; _0xafea70 < 4; _0xafea70++) {
                                  const _0x43a951 = {
                                    isSkipShareCard: true,
                                    type: 2
                                  };
                                  await _0x4a7993.SystemService.myShareCallback(_0x43a951);
                                  await _0x4ede5b.delay(0.2);
                                }
                                for (let _0x367300 = 0; _0x367300 < 5; _0x367300++) {
                                  await _0x4a7993.SystemService.claimHangUpReward({});
                                  if (_0x367300 < 4) {
                                    await _0x4ede5b.delay(1);
                                  }
                                }
                                for (let _0x48dd0f = 0; _0x48dd0f < 4; _0x48dd0f++) {
                                  const _0x4a4037 = {
                                    isSkipShareCard: true,
                                    type: 2
                                  };
                                  await _0x4a7993.SystemService.myShareCallback(_0x4a4037);
                                  await _0x4ede5b.delay(0.2);
                                }
                              },
                              label: "收菜5次、加钟"
                            },
                            "daily-task-bottle-renew": {
                              func: async () => {
                                const _0x46a296 = {
                                  bottleType: -1
                                };
                                await _0x4a7993.BottleHelperService.stop(_0x46a296);
                                await _0x4ede5b.delay(0.2);
                                const _0x11cffe = {
                                  bottleType: -1
                                };
                                await _0x4a7993.BottleHelperService.start(_0x11cffe);
                              },
                              label: "续罐子"
                            },
                            "daily-task-bottle-claim": {
                              func: () => _0x4a7993.BottleHelperService.claim({}),
                              label: "收盐罐"
                            },
                            "daily-task-combined-quick": {
                              func: async () => {
                                const _0x4332df = {
                                  category: 0
                                };
                                await _0x4a7993.MailService.claimAllAttachment(_0x4332df);
                                await _0x4ede5b.delay(0.2);
                                await _0x4a7993.LegionService.signIn({});
                                await _0x4ede5b.delay(0.2);
                                const _0x3931a9 = {
                                  friendId: 0
                                };
                                await _0x4a7993.FriendService.batch(_0x3931a9);
                                await _0x4ede5b.delay(0.2);
                                await _0x4a7993.SystemService.signInReward({});
                                await _0x4ede5b.delay(0.2);
                                const _0x2a85d8 = {
                                  discountId: 1
                                };
                                await _0x4a7993.DiscountService.claimReward(_0x2a85d8);
                                await _0x4ede5b.delay(0.2);
                                const _0x59e427 = {
                                  cardId: 1
                                };
                                await _0x4a7993.CardService.claimReward(_0x59e427);
                                await _0x4ede5b.delay(0.2);
                                try {
                                  await _0x4ede5b.sendCommand("collection_claimfreereward", {});
                                  console.log("✅ 成功领取珍宝阁每日免费珍品");
                                } catch (_0x1ed3de) {
                                  console.log("领取珍宝阁免费珍品时发生错误（可能已领取）:", _0x1ed3de.message);
                                }
                                await _0x4ede5b.delay(0.2);
                                const _0x2504c2 = {
                                  isSkipShareCard: false,
                                  type: 1
                                };
                                await _0x4a7993.SystemService.myShareCallback(_0x2504c2);
                              },
                              label: "邮件、签到、赠金币、福利、珍宝阁"
                            },
                            "daily-task-boss": {
                              func: () => {
                                const _0x526d86 = _0x4ede5b.getFormatDate(Date.now()).getUTCDay();
                                const _0x4e75ac = [9904, 9905, 9901, 9902, 9903, 9904, 9905][_0x526d86];
                                const _0x2a9de5 = {
                                  bossId: _0x4e75ac
                                };
                                return _0x4a7993.FightService.startBoss(_0x2a9de5);
                              },
                              label: "每日咸王考验"
                            },
                            "daily-task-gold": {
                              func: async () => {
                                const _0x4f9ee3 = 6;
                                let _0x4c5fd4 = 0;
                                try {
                                  console.log("[智能点金] 初始检查服务器任务状态...");
                                  const _0x3bda00 = {
                                    taskId: _0x4f9ee3
                                  };
                                  const _0x7e3909 = await _0x4ede5b.sendCommand("task_claimdailypoint", _0x3bda00);
                                  if (_0x7e3909?.["code"] === 700020 || _0x7e3909?.["_rawData"]?.["role"]?.["dailyTask"]?.["complete"]?.["hasOwnProperty"](_0x4f9ee3.toString())) {
                                    console.log("[智能点金] 任务已完成，无需执行");
                                    return;
                                  }
                                  console.log("[智能点金] 开始智能点金，每次执行前检查任务状态...");
                                  while (_0x4c5fd4 < 3) {
                                    const _0x478f76 = {
                                      taskId: _0x4f9ee3
                                    };
                                    const _0x212c99 = await _0x4ede5b.sendCommand("task_claimdailypoint", _0x478f76);
                                    if (_0x212c99?.["code"] === 700020 || _0x212c99?.["_rawData"]?.["role"]?.["dailyTask"]?.["complete"]?.["hasOwnProperty"](_0x4f9ee3.toString())) {
                                      console.log("[智能点金] 任务已完成，已执行" + _0x4c5fd4 + "次点金，停止继续操作");
                                      break;
                                    }
                                    console.log("[智能点金] 执行第" + (_0x4c5fd4 + 1) + "/3次点金");
                                    try {
                                      const _0x120738 = {
                                        buyNum: 1
                                      };
                                      await _0x4a7993.SystemService.buyGold(_0x120738);
                                      _0x4c5fd4++;
                                      console.log("[智能点金] 第" + _0x4c5fd4 + "次点金执行成功");
                                    } catch (_0x39bdef) {
                                      console.error("[智能点金] 第" + (_0x4c5fd4 + 1) + "次点金执行失败:", _0x39bdef.message);
                                      if (_0x39bdef.message?.["includes"]("钻石") || _0x39bdef.message?.["includes"]("付费")) {
                                        console.log("[智能点金] 检测到付费错误，停止继续操作");
                                        break;
                                      }
                                    }
                                    await _0x4ede5b.delay(1);
                                  }
                                  console.log("[智能点金] 智能点金完成，共执行" + _0x4c5fd4 + "次点金操作");
                                } catch (_0x328724) {
                                  console.error("[智能点金] 点金过程中发生异常:", _0x328724.message);
                                }
                              },
                              label: "点金三次"
                            },
                            "daily-task-quiz": {
                              func: async () => {
                                const _0x240a82 = await _0x4a7993.StudyService.startGame({});
                                const _0x2ba8f7 = _0x240a82.getData();
                                for (let _0x1bb0aa = 0; _0x1bb0aa < _0x2ba8f7.questionList.length; _0x1bb0aa++) {
                                  const _0x3d1b4e = _0x2ba8f7.questionList[_0x1bb0aa];
                                  let _0x1093fd = _0xf6fec4[_0x3d1b4e.question] || Math.floor(2 * Math.random()) + 1;
                                  const _0x3618f1 = {
                                    id: _0x2ba8f7.role.study.id,
                                    option: [_0x1093fd],
                                    questionId: [_0x3d1b4e.id]
                                  };
                                  await _0x4a7993.StudyService.answer(_0x3618f1);
                                  await _0x4ede5b.delay(1);
                                }
                                for (let _0x40f895 = 1; _0x40f895 <= 10; _0x40f895++) {
                                  const _0x4f8a0e = {
                                    rewardId: _0x40f895
                                  };
                                  await _0x4a7993.StudyService.claimReward(_0x4f8a0e);
                                  await _0x4ede5b.delay(0.2);
                                }
                              },
                              label: "自动答题"
                            },
                            "daily-task-genie-tickets": {
                              func: async () => {
                                for (let _0x32d066 = 0; _0x32d066 < 3; _0x32d066++) {
                                  await _0x4ede5b.sendCommand("genie_buysweep", {});
                                  await _0x4ede5b.delay(0.2);
                                }
                              },
                              label: "领取扫荡券"
                            },
                            "daily-task-genie-sweep": {
                              func: async _0x53ee1c => {
                                if (_0x53ee1c) {
                                  _0x53ee1c.textContent = "🔄 同步服务器数据...";
                                }
                                await _0x4ede5b.sendCommand("System_GetTime", {});
                                await _0x4ede5b.delay(1);
                                const _0x1193fe = window.__require("ServerData");
                                if (!_0x1193fe || !_0x1193fe.ROLE || !_0x1193fe.ROLE.statisticsTime) {
                                  throw new Error("无法访问 ServerData.ROLE.statisticsTime 对象");
                                }
                                let _0x409210 = _0x1193fe.ROLE.statisticsTime;
                                try {
                                  _0x409210 = JSON.parse(JSON.stringify(_0x409210));
                                } catch (_0x24bda0) {
                                  console.warn("[灯神扫荡] 警告：无法将 statisticsTime 转换为标准 JSON 对象。尝试直接访问。", _0x24bda0);
                                }
                                const _0x2941e8 = {
                                  "1": "魏国",
                                  "2": "蜀国",
                                  "3": "吴国",
                                  "4": "群雄"
                                };
                                let _0x1b84d0 = 0;
                                let _0x3e3696 = 0;
                                let _0x1a91a5 = true;
                                for (let _0x7e5e69 = 1; _0x7e5e69 <= 4; _0x7e5e69++) {
                                  const _0x38f45e = "genie:daily:free:" + _0x7e5e69;
                                  const _0xf07d57 = _0x409210[_0x38f45e];
                                  const _0x26f52f = _0xcc13aa => {
                                    if (typeof _0xcc13aa !== "number" || isNaN(_0xcc13aa) || _0xcc13aa <= 0) {
                                      return false;
                                    }
                                    const _0x2e3cef = new Date(_0xcc13aa * 1000);
                                    const _0x89b713 = new Date();
                                    return _0x2e3cef.getFullYear() === _0x89b713.getFullYear() && _0x2e3cef.getMonth() === _0x89b713.getMonth() && _0x2e3cef.getDate() === _0x89b713.getDate();
                                  };
                                  if (!_0x26f52f(_0xf07d57)) {
                                    _0x1a91a5 = false;
                                    break;
                                  }
                                }
                                if (_0x1a91a5) {
                                  if (_0x53ee1c) {
                                    _0x53ee1c.textContent = "✅ 今日已完成灯神扫荡，本次跳过。";
                                  }
                                  return;
                                }
                                for (let _0x5c81db = 1; _0x5c81db <= 4; _0x5c81db++) {
                                  const _0x32b656 = _0x2941e8[_0x5c81db];
                                  const _0x531c61 = "genie:daily:free:" + _0x5c81db;
                                  await _0x4ede5b.delay(0.3);
                                  if (_0x53ee1c) {
                                    _0x53ee1c.textContent = "🔄 检查 " + _0x32b656 + " 状态...";
                                  }
                                  const _0x376644 = _0x409210[_0x531c61];
                                  const _0x110e1a = _0x15d1ab => {
                                    if (typeof _0x15d1ab !== "number" || isNaN(_0x15d1ab) || _0x15d1ab <= 0) {
                                      return false;
                                    }
                                    const _0x88bf9e = new Date(_0x15d1ab * 1000);
                                    const _0x53f301 = new Date();
                                    return _0x88bf9e.getFullYear() === _0x53f301.getFullYear() && _0x88bf9e.getMonth() === _0x53f301.getMonth() && _0x88bf9e.getDate() === _0x53f301.getDate();
                                  };
                                  if (!_0x110e1a(_0x376644)) {
                                    if (_0x53ee1c) {
                                      _0x53ee1c.textContent = "🚀 执行 " + _0x32b656 + " 免费扫荡...";
                                    }
                                    try {
                                      const _0x5f2b31 = {
                                        genieId: _0x5c81db,
                                        sweepCnt: 1
                                      };
                                      const _0x203ef3 = await _0x4ede5b.sendCommand("genie_sweep", _0x5f2b31);
                                      if (_0x203ef3.code === 0) {
                                        _0x1b84d0++;
                                        if (_0x53ee1c) {
                                          _0x53ee1c.textContent = "✅ 已成功扫荡 " + _0x32b656 + "。";
                                        }
                                        await _0x4ede5b.delay(1);
                                      } else {
                                        const _0x5c3441 = _0x203ef3.msg || "未知错误 (Code: " + _0x203ef3.code + ")";
                                        if (_0x53ee1c) {
                                          _0x53ee1c.textContent = "❌ " + _0x32b656 + " 扫荡失败: " + _0x5c3441;
                                        }
                                        await _0x4ede5b.delay(1);
                                      }
                                    } catch (_0x34beeb) {
                                      if (_0x53ee1c) {
                                        _0x53ee1c.textContent = "❌ " + _0x32b656 + " 扫荡异常: " + _0x34beeb.message;
                                      }
                                      await _0x4ede5b.delay(1);
                                    }
                                  } else {
                                    _0x3e3696++;
                                  }
                                }
                              },
                              label: "灯神扫荡"
                            },
                            "daily-task-box": {
                              func: () => _0x4a7993.ItemService.openBox(_0x3ef3f8),
                              label: "开启10木箱"
                            },
                            "daily-task-recruit": {
                              func: async () => {
                                const _0x3df05f = 4;
                                let _0x406f73 = false;
                                try {
                                  console.log("[智能招募] 检查服务器任务状态...");
                                  const _0x299af7 = {
                                    taskId: _0x3df05f
                                  };
                                  const _0xa3984 = await _0x4ede5b.sendCommand("task_claimdailypoint", _0x299af7);
                                  if (_0xa3984?.["code"] === 700020 || _0xa3984?.["_rawData"]?.["role"]?.["dailyTask"]?.["complete"]?.["hasOwnProperty"](_0x3df05f.toString())) {
                                    console.log("[智能招募] 任务已完成，无需执行");
                                    return;
                                  }
                                  _0x406f73 = true;
                                } catch (_0xf6bd32) {
                                  _0x406f73 = true;
                                }
                                if (_0x406f73) {
                                  console.log("[智能招募] 任务未完成，开始招募...");
                                  const _0x2edbbd = window.__require?.("ServerData");
                                  const _0x2ce716 = _0x2edbbd?.["ROLE"]?.["statisticsTime"]?.["recruit:one:free"] || 0;
                                  const _0x574152 = _0xa7879b => {
                                    if (!_0xa7879b) {
                                      return false;
                                    }
                                    const _0x538e35 = new Date(_0xa7879b * 1000);
                                    const _0x2979b6 = new Date();
                                    return _0x538e35.getFullYear() === _0x2979b6.getFullYear() && _0x538e35.getMonth() === _0x2979b6.getMonth() && _0x538e35.getDate() === _0x2979b6.getDate();
                                  };
                                  const _0x43fd95 = _0x574152(_0x2ce716);
                                  if (_0x43fd95) {
                                    console.log("[智能招募] 免费次数已用，执行1次付费单抽");
                                    const _0x2abd01 = {
                                      byClub: false,
                                      recruitNumber: 1,
                                      recruitType: 1
                                    };
                                    await _0x4ede5b.sendCommand("hero_recruit", _0x2abd01);
                                  } else {
                                    console.log("[智能招募] 免费次数未用，执行1免+1付");
                                    const _0x111a68 = {
                                      byClub: false,
                                      recruitNumber: 1,
                                      recruitType: 3
                                    };
                                    await _0x4ede5b.sendCommand("hero_recruit", _0x111a68);
                                    await _0x4ede5b.delay(0.2);
                                    const _0xe802cd = {
                                      byClub: false,
                                      recruitNumber: 1,
                                      recruitType: 1
                                    };
                                    await _0x4ede5b.sendCommand("hero_recruit", _0xe802cd);
                                  }
                                }
                              },
                              label: "执行2次招募"
                            },
                            "daily-task-arena": {
                              func: () => {
                                return new Promise(async _0x11ab22 => {
                                  console.log("正在进行3次竞技场战斗...");
                                  try {
                                    console.log("正在进入竞技场...");
                                    await _0x4ede5b.sendCommand("arena_startarea", {});
                                    await _0x4ede5b.delay(1);
                                    console.log("已成功进入竞技场");
                                  } catch (_0x95905f) {
                                    console.log("进入竞技场失败，但继续尝试战斗:", _0x95905f);
                                  }
                                  let _0x5bbedd = 0;
                                  for (let _0x36e244 = 1; _0x36e244 <= 3; _0x36e244++) {
                                    try {
                                      const _0x630414 = {
                                        refresh: false
                                      };
                                      const _0xf622ec = await _0x4ede5b.sendCommand("arena_getareatarget", _0x630414);
                                      const _0x3921a2 = _0xf622ec?.["_rawData"]?.["roleList"]?.[0]?.["roleId"];
                                      if (!_0x3921a2) {
                                        console.log("竞技场战斗 " + _0x36e244 + "/3 失败: 未获取到目标ID");
                                        continue;
                                      }
                                      const _0x10f4a8 = {
                                        battleVersion: _0x4f313c,
                                        targetId: _0x3921a2
                                      };
                                      await _0x4ede5b.sendCommand("fight_startareaarena", _0x10f4a8);
                                      _0x5bbedd++;
                                      console.log("竞技场战斗 " + _0x36e244 + "/3 成功");
                                    } catch (_0x39b2dd) {
                                      console.log("竞技场战斗 " + _0x36e244 + "/3 失败:", _0x39b2dd.message);
                                    }
                                    await _0x4ede5b.delay(0.1);
                                  }
                                  console.log("竞技场战斗完成: 总3轮, 成功" + _0x5bbedd + "轮");
                                  _0x11ab22();
                                });
                              },
                              label: "进行3次竞技场战斗"
                            },
                            "daily-task-buy-bronze-box": {
                              func: () => _0x4ede5b.sendCommand("store_buy", _0x264807),
                              label: "购买青铜宝箱"
                            }
                          };
                          let _0x2567da = [];
                          if (_0x2c5dfb === "one-key-100") {
                            _0x2567da = _0x3af039.filter(_0x12e4d9 => _0x12e4d9.task !== "daily-task-quiz").map(_0x16af1a => _0x3e9abe[_0x16af1a.task]);
                            _0x2567da.push({
                              func: async _0x51b7fe => {
                                const _0x3365ff = window.__require?.("data-index");
                                if (!_0x3365ff) {
                                  console.error("无法访问 iso 对象");
                                  return;
                                }
                                const _0x2e94b8 = 1;
                                const _0x46fccd = "普通钓鱼";
                                const _0x336c63 = 3;
                                if (_0x51b7fe) {
                                  _0x51b7fe.textContent = "🎣 开始执行" + _0x46fccd + "...";
                                }
                                let _0x584c38 = 0;
                                for (let _0x2f9e9f = 0; _0x2f9e9f < _0x336c63; _0x2f9e9f++) {
                                  try {
                                    const _0x55a59b = {
                                      lotteryNumber: 1,
                                      newFree: true,
                                      type: _0x2e94b8
                                    };
                                    await _0x3365ff.ArtifactService.lottery(_0x55a59b);
                                    _0x584c38++;
                                    if (_0x51b7fe) {
                                      _0x51b7fe.textContent = "🎣 " + _0x46fccd + " " + _0x584c38 + "/" + _0x336c63;
                                    }
                                    await _0x4ede5b.delay(0.2);
                                  } catch (_0xf48a45) {
                                    console.log("单次" + _0x46fccd + "尝试失败（正常现象）:", _0xf48a45.message);
                                  }
                                }
                                if (_0x51b7fe) {
                                  _0x51b7fe.textContent = "🎣 已完成" + _0x336c63 + "次" + _0x46fccd;
                                }
                              },
                              label: "3次免费钓鱼"
                            });
                          } else {
                            const _0x238249 = _0x2c5dfb.startsWith("daily-task-") ? _0x2c5dfb : null;
                            if (_0x238249) {
                              if (_0x3e9abe[_0x238249]) {
                                _0x2567da.push(_0x3e9abe[_0x238249]);
                              }
                            } else {
                              _0x2b0b8f.querySelectorAll("input[type=\"checkbox\"]:checked").forEach(_0x3de391 => {
                                const _0x367431 = _0x3de391.dataset.taskName;
                                if (_0x3e9abe[_0x367431]) {
                                  _0x2567da.push(_0x3e9abe[_0x367431]);
                                }
                              });
                            }
                          }
                          if (_0x2567da.length === 0) {
                            _0x3a1df9.textContent = "ℹ️ 没有可执行任务";
                            return;
                          }
                          _0x2c5dfb.startsWith("daily-task-") && (_0x3910cf = false);
                          if (_0x2c5dfb === "one-key-100") {
                            const _0x26687e = _0x2567da.filter(_0x10d130 => _0x10d130.label !== "收菜5次、加钟");
                            for (let _0x17f53b = 0; _0x17f53b < _0x26687e.length; _0x17f53b++) {
                              const _0xc403c7 = _0x26687e[_0x17f53b];
                              _0x3a1df9.textContent = "🔄 (" + (_0x17f53b + 1) + "/" + _0x26687e.length + ") " + _0xc403c7.label + "...";
                              try {
                                await _0xc403c7.func();
                                await _0x4ede5b.delay(0.5);
                              } catch (_0xb08c8) {
                                console.log("任务 " + _0xc403c7.label + " 失败:", _0xb08c8);
                              }
                            }
                            const _0x152aca = {
                              func: () => _0x4a7993.SystemService.claimHangUpReward({}),
                              label: "单次收菜"
                            };
                            for (let _0x575e07 = 0; _0x575e07 < 5; _0x575e07++) {
                              _0x3a1df9.textContent = "🥬 收菜 (" + (_0x575e07 + 1) + "/5)，等待1s...";
                              await _0x152aca.func();
                              if (_0x575e07 < 4) {
                                await _0x4ede5b.delay(1);
                              }
                            }
                            _0x3a1df9.textContent = "🔄 正在加钟...";
                            for (let _0x4a21a8 = 0; _0x4a21a8 < 4; _0x4a21a8++) {
                              const _0x357d85 = {
                                isSkipShareCard: true,
                                type: 2
                              };
                              await _0x4a7993.SystemService.myShareCallback(_0x357d85);
                              await _0x4ede5b.delay(0.2);
                            }
                            _0x3a1df9.textContent = "🎁 领取活跃奖励...";
                            await _0x58de40("claim-activity", _0x22e08a);
                          } else {
                            for (let _0x18ce36 = 0; _0x18ce36 < _0x2567da.length; _0x18ce36++) {
                              const _0x22c0b9 = _0x2567da[_0x18ce36];
                              if (_0x22c0b9.label === "灯神扫荡" && _0x3910cf) {
                                continue;
                              }
                              _0x3a1df9.textContent = "🔄 (" + (_0x18ce36 + 1) + "/" + _0x2567da.length + ") " + _0x22c0b9.label + "...";
                              try {
                                _0x22c0b9.label === "灯神扫荡" ? (await _0x22c0b9.func(_0x3a1df9), _0x2567da.length > 1 && (_0x3910cf = true)) : await _0x22c0b9.func();
                                await _0x4ede5b.delay(0.5);
                              } catch (_0x66409c) {
                                console.log("任务 " + _0x22c0b9.label + " 失败 (可能已完成):", _0x66409c);
                              }
                            }
                          }
                          _0x3a1df9.textContent = "✅ " + (_0x2c5dfb === "one-key-100" ? "100活跃度任务" : "任务") + "执行完毕";
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    } catch (_0x44c033) {
      console.error("任务执行错误:", _0x44c033);
      _0x3a1df9.textContent = "❌ 执行出错!";
    } finally {
      (_0x2c5dfb === "execute-daily-checked" || _0x2c5dfb === "one-key-100") && (_0x36daee = false, _0x23c2fa.forEach(_0x2cce91 => _0x2cce91.disabled = false));
      _0x22e08a.disabled = false;
      _0x22e08a.textContent = _0x783c83;
    }
  }
  function _0x336a8b(_0x3d4a9f, _0x3eb3ec) {
    if (_0x3d4a9f === "collectionUpgrade") {
      const _0x3e89e3 = _0x3eb3ec.textContent;
      _0x3eb3ec.disabled = true;
      _0x3eb3ec.textContent = "处理中...";
      _0x3ee9b4(_0x3eb3ec).catch(_0x51aa2d => {
        console.error("藏品图鉴升级错误:", _0x51aa2d);
        _0x3eb3ec.textContent = "❌ 执行出错!";
      }).finally(() => {
        setTimeout(() => {
          _0x3eb3ec.disabled = false;
          _0x3eb3ec.textContent = _0x3e89e3;
        }, 1000);
      });
      return true;
    }
    return false;
  }
  function _0x1f3062(_0x9895f1) {
    if (_0x9895f1 === "treasure-assist") {
      TreasureAssistModule.handleMainButtonClick();
      return true;
    }
    return false;
  }
  function _0x112897(_0x345d0c) {
    if (_0x345d0c === "arena-winrate") {
      _0x1db57c.handleMainButtonClick();
      return true;
    }
    return false;
  }
  _0x951c8b.addEventListener("click", _0x2355b8 => {
    const _0x1ca624 = _0x2355b8.target.closest(".task-btn");
    if (_0x1ca624?.["dataset"]["task"]) {
      if (_0x336a8b(_0x1ca624.dataset.task, _0x1ca624)) {
        return;
      }
      if (_0x1f3062(_0x1ca624.dataset.task)) {
        return;
      }
      if (_0x112897(_0x1ca624.dataset.task)) {
        return;
      }
      _0x58de40(_0x1ca624.dataset.task, _0x1ca624);
    }
  });
  _0x32e300(() => {
    setTimeout(() => {
      _0x1db57c.init();
      _0x9f9e3a.init();
      _0x5d6473.init();
      _0x3d5535.init();
      console.log("🎮 鲸鱼之王 (v" + _0x236277 + ") UI加载完成，等待WebSocket...");
      _0x5a1ccf(() => {
        _0x25fc1a.init();
        console.log("🎮 鲸鱼之王 (v" + _0x236277 + ") 完全加载完成！");
      });
    }, 500);
  });
})();