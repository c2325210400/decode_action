//Sat Nov 29 2025 10:44:39 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {
  "use strict";
  const _0x28f203 = "7.5.1";
  const _0x5071ce = document.createElement("style");
  _0x5071ce.textContent = "\n        :root {\n            --panel-bg: rgba(247, 250, 252, 0.98);\n            --glass-border: rgba(0, 0, 0, 0.1);\n            --highlight: #3182ce; --text-primary: #2d3748; --text-secondary: #718096;\n            --item-bg: #ffffff; --item-border: #e2e8f0;\n            --success: #38a169; --error: #e53e3e;\n        }\n\n        /* 主面板 */\n        .xianxia-panel {\n            color-scheme: light !important;\n            background: transparent !important;\n            color: var(--text-primary) !important;\n            position:fixed;top:10px;backdrop-filter:blur(10px);border:1px solid var(--glass-border);border-radius:12px;z-index:10000;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;box-shadow:0 8px 32px rgba(0,0,0,0.1);transition:all .3s ease;overflow:hidden;\n        }\n        .xianxia-panel::before {\n            content: '';\n            position: absolute;\n            top: 0; left: 0;\n            width: 100%; height: 100%;\n            background: var(--panel-bg) !important;\n            z-index: -1;\n            border-radius: 12px;\n        }\n\n        .xianxia-panel.collapse{width:44px;height:44px;right:10px;min-height:auto;display:flex;align-items:center;justify-content:center;border-radius:50%;}\n        .xianxia-panel.expanded{width:90vw;max-width:520px;right:5vw;max-height:85vh;display:flex;flex-direction:column;}\n        \n        .panel-header{background:rgba(0,0,0,0.02) !important;cursor:pointer;display:flex !important;align-items:center !important;padding:10px 15px !important;flex-shrink:0;width:100%;box-sizing:border-box !important;transition:background .2s ease; position: relative; z-index: 1;}\n        .xianxia-panel.expanded .panel-header { justify-content:flex-start !important; }\n        .xianxia-panel.collapse .panel-header { \n            justify-content: center !important; \n            align-items: center !important;\n            padding: 0 !important; /* 移除折叠状态下的内边距 */\n            height: 100%; /* 确保头部占满整个折叠面板 */\n        }\n\n        .panel-title{flex-grow: 1; font-weight:600;font-size:16px;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:15px !important; color: var(--text-primary) !important;}\n        .panel-icon{font-size:22px;line-height:1;width:100%;text-align:center;display:flex;align-items:center;justify-content:center;}\n        .xianxia-panel.expanded .panel-icon { display: none; }\n        .xianxia-panel.collapse .panel-title, .xianxia-panel.collapse .opacity-control { display: none; }\n        .opacity-control{display:flex;align-items:center;gap:8px;flex-shrink:0;}\n        .opacity-control label{font-size:12px;color:var(--text-secondary) !important;white-space:nowrap;}\n        .opacity-control input{width:90px;height:4px;-webkit-appearance:none;background:rgba(0,0,0,.1);border-radius:2px;outline:none;transition:background .2s;}\n        .opacity-control input:hover{background:rgba(0,0,0,.2);}\n        .opacity-control input::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;border-radius:50%;background:var(--text-primary);cursor:pointer;}\n        .opacity-value{font-size:12px;color:var(--text-primary) !important;min-width:40px;text-align:left;}\n        \n        .panel-content{padding:10px 0 0 0;display:none;overflow-y:auto;max-height:calc(85vh - 74px); position: relative; z-index: 1;}.expanded .panel-content{display:block}\n        .tab-nav{display:flex;padding:0 5px;margin-bottom:8px;border-bottom:1px solid var(--item-border) !important;}\n        .tab-btn{flex:1;padding:7px 4px;border:none;background:transparent;color:var(--text-secondary) !important;cursor:pointer;font-size:12px;font-weight:600;transition: color .2s ease, border-color .2s ease;border-bottom:3px solid transparent; text-align:center;}\n        .tab-btn:hover{color:var(--text-primary) !important;}\n        .tab-btn.active{color:var(--highlight) !important;border-bottom-color:var(--highlight) !important;}\n        .tab-pane{display:none; padding:0 10px 10px 10px;}\n        .tab-pane.active{display:block;animation:fadeIn .3s;}\n        @keyframes fadeIn{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}\n        .sub-nav{display:flex;gap:10px;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--item-border) !important; flex-wrap: wrap;}\n        .sub-tab-btn{font-size:11px;padding:2px 0;color:var(--text-secondary) !important;background:transparent;border:none;cursor:pointer;border-bottom:2px solid transparent;transition:all .2s ease;}\n        .sub-tab-btn:hover{color:var(--text-primary) !important;}\n        .sub-tab-btn.active{color:var(--highlight) !important;border-bottom-color:var(--highlight) !important;font-weight:500;}\n.module-content{display:none;}\n.module-content.active{display:block;}\n        .sub-pane{display:none;}\n        .sub-pane.active{display:block;}\n\n        .task-section{background:var(--item-bg) !important;border:1px solid var(--item-border) !important; margin:0;padding:10px;border-radius:7px;}\n        .task-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;}\n        .task-header h4{margin:0;color:var(--highlight) !important;font-size:13px;font-weight:600;display:flex;align-items:center;gap:5px;}\n        .status{font-size:10px;color:var(--highlight) !important;background:rgba(49,130,206,.1) !important;padding:3px 5px;border-radius:3px;}\n        .task-row {display:flex;align-items:center;gap:7px;margin-bottom:7px;}\n        .task-row:last-child {margin-bottom:0;}\n        .task-row .task-label {width:55px;font-size:12px;color:var(--text-secondary) !important;flex-shrink:0; text-align:right; padding-right:4px;}\n        .task-row input {width:70px;flex-grow:0;}\n        .task-row .task-btn {flex:1;}\n        .task-btn{display:block;width:100%;margin:0;padding:8px 10px;background:rgba(49,130,206,0.1) !important;border:1px solid rgba(49,130,206,0.2) !important;border-radius:6px;color:var(--highlight) !important;font-weight:600;cursor:pointer;font-size:12px;transition: all .2s ease;}\n        .task-btn:hover{background:rgba(49,130,206,0.15) !important;}\n        .task-btn:disabled{background:rgba(0,0,0,0.05) !important;border-color:transparent !important;color:#ccc !important;cursor:not-allowed;transform:none;box-shadow:none;}\n        .task-btn.stop{background:rgba(229, 62, 62, 0.1) !important;border:1px solid rgba(229, 62, 62, 0.2) !important;color:var(--error) !important;}\n        .task-btn.stop:hover{background:rgba(229, 62, 62, 0.15) !important;}\n        .task-row input{border:1px solid var(--item-border) !important;background:rgba(0,0,0,.02) !important;color:var(--text-primary) !important;padding:8px 10px;border-radius:6px;font-size:12px;min-width:0; text-align:center;}\n        .other-buttons{display:grid;grid-template-columns:1fr 1fr;gap:8px}.other-btn{padding:8px;font-size:12px}\n        \n        .count-selector{display:flex;align-items:center;justify-content:center;gap:10px;}\n        .count-selector .task-btn{flex:0 0 30px; padding: 5px; font-size: 16px; line-height: 1;}\n        .count-selector .count-display{font-size:14px;font-weight:600;color:var(--text-primary) !important;width:40px;text-align:center;}\n\n        .daily-task-list{border-top: 1px solid var(--item-border) !important; padding-top: 10px;}\n        .main-action-buttons{margin-top:8px !important; display:flex !important; flex-wrap:nowrap !important; gap:4px !important; width:100% !important;}\n        .main-action-buttons > button{flex:1 !important; flex-basis:33.333% !important; padding:6px 4px !important; font-size:12px !important; margin:0 !important; height:34px !important; min-height:34px !important; box-sizing:border-box !important; border-radius:4px !important; display:flex !important; align-items:center !important; justify-content:center !important; white-space:nowrap !important; overflow:hidden !important; text-overflow:ellipsis !important;}\n        .main-action-buttons > button[data-task=\"one-key-100\"]{color:#ff6b6b !important; font-weight:bold !important;}\n        .daily-task-item{display:flex;align-items:center;margin-bottom:4px;}\n        .daily-task-item:last-child{margin-bottom:0;}\n        .daily-task-info{display:flex; align-items:center; flex-grow:1;}\n        .daily-task-item input[type=\"checkbox\"]{margin-right:7px;width:15px;height:15px;accent-color:var(--highlight);}\n        .daily-task-item label{font-size:11px;color:var(--text-secondary) !important;}\n        .daily-task-item .task-btn{flex-shrink:0;width:65px;padding:3px 5px;font-size:10px;}\n        \n        .car-data-container, .ws-log-container{margin:0;border:none;background:transparent;}\n        .car-data-table{width:100%;border-collapse:collapse;font-size:10px;}\n        .car-data-table th{background:rgba(0,0,0,.02) !important;border:1px solid var(--item-border) !important; padding: 5px 3px; font-size:11px; color: var(--text-secondary) !important;}\n        .car-data-table td{border:1px solid var(--item-border) !important;color:var(--text-secondary) !important;padding:5px 3px;vertical-align:middle; text-align:center;}\n        .car-rewards{color: var(--text-primary) !important;line-height:1.4em; text-align:left; padding-left:5px !important;}\n        .car-action-btn{font-size:10px;margin:2px auto;width:50px;border-radius:4px; padding:3px 0; background:rgba(0,0,0,0.05); border:1px solid rgba(0,0,0,0.1); color: var(--text-secondary); }\n        .car-action-btn:hover{background:rgba(0,0,0,0.1);}\n        .car-action-btn.send{background:rgba(76, 175, 80, .1);border-color:rgba(76, 175, 80, .2); color: #2f6f44;}\n        .car-action-btn.claim{background:rgba(255, 152, 0, .1);border-color:rgba(255, 152, 0, .2); color: #b95f00;}\n        .car-action-btn.is-disabled{background:rgba(0,0,0,0.04) !important; border-color:transparent !important; color:#ccc !important; transform: none; box-shadow: none;}\n        .pity-counter.mythic-guaranteed{color:#e53e3e;font-weight:bold;}\n        \n        /* 胜率测试相关样式 */\n        .winrate-result-item { margin-bottom: 6px; padding-bottom: 6px; border-bottom: 1px dotted var(--item-border); line-height: 1.3; }\n        .winrate-result-item:last-child { border-bottom: none; }\n        .winrate-win { color: var(--success); font-weight: bold; }\n        .winrate-loss { color: var(--error); font-weight: bold; }\n        .winrate-opponent-placeholder { color: var(--text-secondary); }\n\n        #ws-monitor-module .other-buttons { margin-top: 10px; }\n        .ws-log-container { max-height: 55vh; overflow-y: auto; background: rgba(0,0,0,0.02) !important; border-radius: 8px; padding: 10px; border: 1px solid var(--item-border) !important; margin-top: 10px; }\n        .ws-log-entry { position: relative; font-family: 'Courier New', Courier, monospace; font-size: 11px; margin-bottom: 8px; padding: 8px; border-radius: 4px; border: 1px solid transparent; word-break: break-all; }\n        .ws-log-entry .log-header { font-weight: bold; margin-bottom: 4px; color: inherit !important; }\n        .ws-log-entry .log-header.send { color: var(--success) !important; }\n        .ws-log-entry.send { border-color: rgba(56, 161, 105, 0.2) !important; background: rgba(56, 161, 105, 0.05) !important; }\n        .ws-log-entry .log-header.receive { color: var(--highlight) !important; }\n        .ws-log-entry.receive { border-color: rgba(49, 130, 206, 0.2) !important; background: rgba(49, 130, 206, 0.05) !important; }\n        .ws-log-entry .log-time { font-size: 10px; color: var(--text-secondary) !important; margin-left: 8px; }\n        .ws-log-content { white-space: pre-wrap; color: var(--text-primary) !important; }\n        .ws-log-content.collapsed { max-height: 2.5em; overflow: hidden; text-overflow: ellipsis; position: relative; padding-right: 50px; }\n        .log-actions { position: absolute; top: 5px; right: 5px; display: flex; gap: 5px; }\n        .log-actions button { font-size: 10px; padding: 2px 5px; border-radius: 4px; background: rgba(0,0,0,0.08) !important; border: none !important; color: var(--text-secondary) !important; cursor: pointer; }\n        .log-actions button:hover { background: rgba(0,0,0,0.15) !important; color: var(--text-primary) !important; }\n        \n        .gvh-toast{position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--item-bg);backdrop-filter:blur(5px);border:1px solid var(--item-border);color:var(--text-primary);padding:10px 20px;border-radius:8px;font-size:13px;z-index:10001;box-shadow:0 4px 20px rgba(0,0,0,.1);animation:gvh-slideIn .3s,gvh-fadeOut .3s 2.7s}\n        .gvh-toast.success{border-color:var(--success);color:var(--success);}\n        .gvh-toast.error{border-color:var(--highlight);color:var(--error);}\n        .gvh-toast.info{border-color:var(--highlight);color:var(--highlight);}\n    ";
  document.head.appendChild(_0x5071ce);
  const _0x347846 = document.createElement("div");
  _0x347846.className = "xianxia-panel collapse";
  _0x347846.innerHTML = "\n        <div class=\"panel-header\">\n            <span class=\"panel-icon\">🎮</span>\n            <div class=\"panel-title\">鲸鱼 v" + _0x28f203 + "</div>\n            <div class=\"opacity-control\">\n                <label for=\"opacity-slider\">透明度：</label>\n                <input type=\"range\" id=\"opacity-slider\" min=\"0\" max=\"100\" value=\"100\">\n                <span class=\"opacity-value\">100%</span>\n            </div>\n        </div>\n        <div class=\"panel-content\">\n            <!-- 垂直排布的功能菜单 -->\n            <div style=\"padding: 0 10px 10px 10px;\">\n                <!-- 功能模块选择器 - 垂直排布 -->\n                <div style=\"margin-bottom: 10px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 3px;\">\n                    <button class=\"task-btn\" data-module=\"quick-tasks-sub\" style=\"font-size: 10px; padding: 4px 2px;\">🚀 日常</button>\n                    <button class=\"task-btn\" data-module=\"car-sub\" style=\"font-size: 10px; padding: 4px 2px;\">🏎️ 赛车</button>\n                    <button class=\"task-btn\" data-module=\"tower-sub\" style=\"font-size: 10px; padding: 4px 2px;\">🧗 爬塔</button>\n                    <button class=\"task-btn\" data-module=\"arena-sub\" style=\"font-size: 10px; padding: 4px 2px;\">⚔️ 竞技场</button>\n                    <button class=\"task-btn\" data-module=\"club-sub\" style=\"font-size: 10px; padding: 4px 2px;\">⚔️ 俱乐部Boss</button>\n                    <button class=\"task-btn\" data-module=\"upgrade-sub\" style=\"font-size: 10px; padding: 4px 2px;\">⚡ 升级</button>\n                    <button class=\"task-btn\" data-module=\"treasure-assist-sub\" style=\"font-size: 10px; padding: 4px 2px;\">🏆 宝库助战</button>\n                    <button class=\"task-btn\" data-module=\"salt-field-sub\" style=\"font-size: 10px; padding: 4px 2px;\">🏆 盐场战报</button>\n                    <button class=\"task-btn\" data-module=\"fishing-sub\" style=\"font-size: 10px; padding: 4px 2px;\">🎣 钓鱼</button>\n                    <button class=\"task-btn\" data-module=\"recruit-sub\" style=\"font-size: 10px; padding: 4px 2px;\">👥 招募</button>\n                    <button class=\"task-btn\" data-module=\"box-sub\" style=\"font-size: 10px; padding: 4px 2px;\">📦 宝箱</button>\n                </div>\n                \n                <!-- 所有功能模块内容 -->\n                <div id=\"quick-tasks-sub\" class=\"module-content active\">\n                    <div class=\"task-section\" id=\"quick-tasks-module\">\n                        <div class=\"task-header\"><h4>🚀 日常</h4><div class=\"status\">✅ 就绪</div></div>\n                        <div class=\"daily-task-list\"></div>\n                        <div class=\"main-action-buttons\">\n                            <button class=\"task-btn other-btn\" data-task=\"execute-daily-checked\">一键执行勾选</button>\n                            <button class=\"task-btn other-btn\" data-task=\"claim-activity\">领取活跃奖励</button>\n                            <button class=\"task-btn\" data-task=\"one-key-100\">一键100活跃度</button>\n                        </div>\n                    </div>\n                </div>\n                \n                <div id=\"salt-field-sub\" class=\"module-content\">\n                    <div class=\"task-section\" id=\"salt-field-module\">\n                        <div class=\"task-header\"><h4>🏆 盐场战报</h4><div class=\"status\" id=\"salt-field-status\">📊 就绪</div></div>\n                        <div class=\"task-row\">\n                            <label class=\"task-label\" style=\"white-space: nowrap;\">查询日期：</label>\n                            <input type=\"date\" id=\"salt-field-date\" style=\"width: auto;\">\n                            <button class=\"task-btn\" id=\"salt-field-query\">查询战报</button>\n                        </div>\n                        <div id=\"salt-field-results\" style=\"margin-top: 10px; max-height: 60vh; overflow-y: auto;\">\n                            <p style=\"text-align: center; color: var(--text-secondary); font-size: 12px;\">请选择日期并点击查询按钮</p>\n                        </div>\n                        <div style=\"margin-top: 10px; display: none; grid-template-columns: 1fr 1fr; gap: 8px;\" id=\"salt-field-actions\">\n                            <button class=\"task-btn other-btn\" id=\"salt-field-export\">导出战报</button>\n                            <button class=\"task-btn other-btn\" id=\"salt-field-summary\">查看汇总</button>\n                        </div>\n                    </div>\n                </div>\n                \n                <div id=\"car-sub\" class=\"module-content\"><div class=\"task-section\" id=\"car-module\">\n                    <div class=\"task-header\"><h4>🏎️ 赛车</h4><div class=\"status\">✅ 就绪</div></div>\n                    <button class=\"task-btn\" data-task=\"car-query\">查询赛车</button>\n                    <div class=\"car-data-container\"><table class=\"car-data-table\" style=\"display:none;\"><thead><tr><th>车位</th><th>品质</th><th>主要奖励</th><th>状态</th><th>操作</th></tr></thead><tbody></tbody></table></div>\n                </div></div>\n                \n                <style>\n                    /* 调小所有相关按钮字体，确保与一键刷新按钮样式一致 */\n                    button[data-action=\"sendAll\"], button[data-action=\"claimAll\"], #send-all-cars-panel,\n                    button[data-action=\"refresh\"], button[data-action=\"send\"], button[data-action=\"refresh-car\"],\n                    button[data-action=\"openMembers\"], button[data-action=\"toggleRefreshFilter\"], button[data-action=\"startBatchRefresh\"],\n                    button[id=\"start-batch-refresh\"] {\n                        font-size: 10px !important;\n                    }\n                    /* 调小玩家名字字体 */\n                    #members-content span, #helper-selected-name, .__name {\n                        font-size: 11px !important;\n                    }\n                </style>\n                \n                <div id=\"tower-sub\" class=\"module-content\">\n                    <div class=\"task-section\" id=\"tower-module\">\n                        <div class=\"task-header\"><h4>🧗 爬塔</h4><div class=\"status\">✅ 就绪</div></div>\n                        <button class=\"task-btn\" data-task=\"tower\">开始爬塔</button>\n                    </div>\n                </div>\n                \n                <div id=\"arena-sub\" class=\"module-content\">\n                    <div class=\"task-section\" id=\"arena-module\">\n                        <div class=\"task-header\"><h4>⚔️ 竞技场</h4><div class=\"status\" id=\"arena-status\">✅ 就绪</div></div>\n                        <div class=\"task-row\"><span class=\"task-label\">次数:</span><input type=\"number\" id=\"arena-count\" value=\"3\" min=\"1\" max=\"99\">\n                            <button class=\"task-btn\" data-task=\"arena-start\">随机战斗</button>\n                        </div>\n                    </div>\n                    \n                    <div class=\"task-section\" style=\"margin-top: 10px;\" id=\"arena-winrate-module\">\n                        <div class=\"task-header\"><h4>📊 胜率测试</h4><div class=\"status\" id=\"winrate-status\">✅ 准备就绪</div></div>\n                        <div class=\"task-row\"><span class=\"task-label\">次数:</span><input type=\"number\" id=\"winrate-fight-count\" value=\"10\" min=\"1\"><button class=\"task-btn\" id=\"start-winrate-btn\" data-task=\"arena-winrate\">获取对手</button></div>\n                        <div id=\"winrate-results\" style=\"margin-top: 10px; padding: 8px; border: 1px solid var(--item-border); border-radius: 6px; background: rgba(0,0,0,0.01); font-size: 12px; line-height: 1.4;\"></div>\n                    </div>\n                </div>\n                 \n                <div id=\"club-sub\" class=\"module-content\"><div class=\"task-section\" id=\"club-module\">\n                    <div class=\"task-header\"><h4>⚔️ 俱乐部Boss</h4><div class=\"status\">✅ 就绪</div></div>\n                    <div class=\"task-row\">\n                        <span class=\"task-label\">挑战次数:</span>\n                        <div class=\"count-selector\">\n                            <button class=\"task-btn\" data-action=\"decrement\">-</button>\n                            <span class=\"count-display\" id=\"club-boss-count\">2</span>\n                            <button class=\"task-btn\" data-action=\"increment\">+</button>\n                        </div>\n                        <button class=\"task-btn\" data-task=\"club-boss\">开始挑战</button>\n                    </div>\n                </div></div>\n                \n                <div id=\"upgrade-sub\" class=\"module-content\"><div class=\"task-section\" id=\"upgrade-module\">\n                    <div class=\"task-header\"><h4>⚡ 升级</h4><div class=\"status\">✅ 就绪</div></div>\n                    <div style=\"display: grid; grid-template-columns: 1fr 1fr; gap: 8px;\">\n                        <button class=\"task-btn other-btn\" data-task=\"starUp\">武将升星</button>\n                        <button class=\"task-btn other-btn\" data-task=\"bookUpgrade\">升级图鉴</button>\n                        <button class=\"task-btn other-btn\" data-task=\"collectionUpgrade\">藏品图鉴升级</button>\n                        <!-- 留空右侧位置，等待添加新功能 -->\n                    </div>\n                </div></div>\n                \n                <div id=\"treasure-assist-sub\" class=\"module-content\">\n                    <div class=\"task-section\" id=\"treasure-assist-module\">\n                        <div class=\"task-header\"><h4>🏆 宝库助战</h4><div class=\"status\" style=\"color: #e53e3e; background: rgba(229, 62, 62, 0.1);\">❌ 已禁用</div></div>\n                    <button class=\"task-btn\" id=\"treasure-start-assist-btn\" data-task=\"treasure-assist\">开始助战</button>\n                </div></div>\n                \n                <div id=\"fishing-sub\" class=\"module-content\"><div class=\"task-section\" id=\"fishing-module\">\n                     <div class=\"task-header\"><h4>🎣 钓鱼</h4><div class=\"status\">✅ 就绪</div></div>\n                     <div class=\"task-row\"><span class=\"task-label\">普通钓鱼</span><input type=\"number\" id=\"fishing-count-1\" value=\"10\" min=\"1\"><button class=\"task-btn\" data-task=\"start-fishing-1\">开始</button></div>\n                     <div class=\"task-row\"><span class=\"task-label\">高级钓鱼</span><input type=\"number\" id=\"fishing-count-2\" value=\"10\" min=\"1\"><button class=\"task-btn\" data-task=\"start-fishing-2\">开始</button></div>\n                </div></div>\n                \n                <div id=\"recruit-sub\" class=\"module-content\"><div class=\"task-section\" id=\"recruit-module\">\n                    <div class=\"task-header\"><h4>👥 招募</h4><div class=\"status\">✅ 就绪</div></div>\n                    <div class=\"task-row\"><span class=\"task-label\">次数:</span><input type=\"number\" id=\"recruit-count\" value=\"10\" min=\"1\"><button class=\"task-btn\" data-task=\"recruit\">开始招募</button></div>\n                </div></div>\n                \n                <div id=\"box-sub\" class=\"module-content\"><div class=\"task-section\" id=\"box-module\">\n                    <div class=\"task-header\"><h4>📦 宝箱</h4><div class=\"status\">✅ 就绪</div></div>\n                    <div class=\"task-row\"><span class=\"task-label\">木质宝箱</span><input type=\"number\" id=\"box-count-2001\" value=\"10\" min=\"10\" step=\"10\"><button class=\"task-btn\" data-task=\"open-box-2001\">开启宝箱</button></div>\n                    <div class=\"task-row\"><span class=\"task-label\">青铜宝箱</span><input type=\"number\" id=\"box-count-2002\" value=\"10\" min=\"10\" step=\"10\"><button class=\"task-btn\" data-task=\"open-box-2002\">开启宝箱</button></div>\n                    <div class=\"task-row\"><span class=\"task-label\">黄金宝箱</span><input type=\"number\" id=\"box-count-2003\" value=\"10\" min=\"10\" step=\"10\"><button class=\"task-btn\" data-task=\"open-box-2003\">开启宝箱</button></div>\n                    <div class=\"task-row\"><span class=\"task-label\">铂金宝箱</span><input type=\"number\" id=\"box-count-2004\" value=\"10\" min=\"10\" step=\"10\"><button class=\"task-btn\" data-task=\"open-box-2004\">开启宝箱</button></div>\n                </div></div>\n            </div>\n        </div>\n    ";
  document.body.appendChild(_0x347846);
  const _0x4b9636 = {
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
  const _0x37bc18 = {
    showtip(_0x1fd625, _0x3cfdbc = "info") {
      {
        const _0x3294e4 = document.createElement("div");
        _0x3294e4.className = "gvh-toast " + _0x3cfdbc;
        _0x3294e4.innerText = _0x1fd625;
        document.body.appendChild(_0x3294e4);
        setTimeout(() => _0x3294e4.remove(), 3000);
      }
    },
    async sendCommand(_0x1c708a, _0x3963ea = {}) {
      {
        if (!window.ws?.["sendAsync"]) {
          {
            this.showtip("错误：WebSocket连接不可用", "error");
            throw new Error("WebSocket connection not available");
          }
        }
        try {
          {
            return await window.ws.sendAsync({
              ack: 0,
              cmd: _0x1c708a,
              params: _0x3963ea,
              seq: Date.now(),
              time: Date.now()
            });
          }
        } catch (_0x24788c) {
          {
            this.showtip("命令发送失败: " + _0x24788c.message, "error");
            throw _0x24788c;
          }
        }
      }
    },
    delay: _0x30a788 => new Promise(_0x12624a => setTimeout(_0x12624a, _0x30a788 * 1000)),
    getFormatDate: _0x2a4e7c => {
      {
        const _0x16ef22 = new Date(_0x2a4e7c);
        _0x16ef22.setHours(_0x16ef22.getHours() + 8);
        return _0x16ef22;
      }
    }
  };
  const _0x2e4691 = {
    currentData: null,
    currentDate: "",
    init() {
      {
        const _0x32bf38 = document.getElementById("salt-field-date");
        _0x32bf38 && (_0x32bf38.value = this.getLastSaturdayString());
        const _0x45fea7 = document.getElementById("salt-field-query");
        if (_0x45fea7) {
          {
            _0x45fea7.addEventListener("click", () => this.queryWarRecords());
          }
        }
        const _0x295aec = document.getElementById("salt-field-export");
        _0x295aec && _0x295aec.addEventListener("click", () => this.exportWarRecords());
        const _0x40edab = document.getElementById("salt-field-summary");
        if (_0x40edab) {
          {
            _0x40edab.addEventListener("click", () => this.showSummary());
          }
        }
      }
    },
    getLastSaturdayString() {
      {
        const _0x3b701c = new Date();
        const _0xd2ce6 = _0x3b701c.getDay();
        let _0x23cb71 = 0;
        if (_0xd2ce6 === 6) {
          _0x23cb71 = 0;
        } else {
          if (_0xd2ce6 === 0) {
            _0x23cb71 = 1;
          } else {
            _0x23cb71 = _0xd2ce6 + 1;
          }
        }
        const _0x556e8c = new Date(_0x3b701c);
        _0x556e8c.setDate(_0x3b701c.getDate() - _0x23cb71);
        const _0x45ba2a = _0x556e8c.getFullYear();
        const _0x3bb927 = String(_0x556e8c.getMonth() + 1).padStart(2, "0");
        const _0x2bbba2 = String(_0x556e8c.getDate()).padStart(2, "0");
        return _0x45ba2a + "-" + _0x3bb927 + "-" + _0x2bbba2;
      }
    },
    formatDateForAPI(_0x46b9bf) {
      {
        return _0x46b9bf.replace(/-/g, "/");
      }
    },
    async queryWarRecords() {
      {
        const _0xc3fb2f = document.getElementById("salt-field-status");
        const _0x2824c4 = document.getElementById("salt-field-results");
        const _0x24e459 = document.getElementById("salt-field-actions");
        if (!_0xc3fb2f || !_0x2824c4 || !_0x24e459) {
          return;
        }
        _0xc3fb2f.textContent = "🔍 查询中...";
        _0x2824c4.innerHTML = "<p style=\"text-align: center; color: var(--text-secondary); font-size: 12px;\">正在查询战绩...</p>";
        _0x24e459.style.display = "none";
        try {
          {
            const _0x30da89 = document.getElementById("salt-field-date");
            if (!_0x30da89) {
              throw new Error("日期输入框未找到");
            }
            this.currentDate = _0x30da89.value;
            const _0x39049b = this.formatDateForAPI(this.currentDate);
            const _0x22b344 = {
              date: _0x39049b
            };
            const _0x357d40 = await _0x37bc18.sendCommand("legionwar_getdetails", _0x22b344);
            const _0x4a7ab9 = _0x357d40?.["roleDetailsList"] || _0x357d40?.["_rawData"]?.["roleDetailsList"] || _0x357d40?.["body"]?.["roleDetailsList"] || _0x357d40?.["data"]?.["roleDetailsList"] || [];
            this.currentData = _0x4a7ab9;
            if (!_0x4a7ab9 || _0x4a7ab9.length === 0) {
              _0x2824c4.innerHTML = "<p style=\"text-align: center; color: var(--text-secondary); font-size: 12px;\">暂无战绩数据</p>";
            } else {
              {
                const _0x4b242d = [..._0x4a7ab9].sort((_0x141c8e, _0x5c78ff) => Number(_0x5c78ff?.["winCnt"] || 0) - Number(_0x141c8e?.["winCnt"] || 0));
                const _0x5473a8 = _0x4b242d.map((_0x4e2bd4, _0x21368b) => {
                  {
                    const _0x3bcfc9 = _0x4e2bd4?.["name"] || _0x4e2bd4?.["roleName"] || _0x4e2bd4?.["nickname"] || "-";
                    const _0x229e0a = Number(_0x4e2bd4?.["winCnt"] || 0);
                    const _0x1202f5 = Number(_0x4e2bd4?.["loseCnt"] || 0);
                    const _0x328f21 = Number(_0x4e2bd4?.["buildingCnt"] || 0);
                    return "\n                        <div style=\"display:flex; align-items:center; justify-content:space-between; padding:8px; margin:4px 0; background: var(--item-bg); border:1px solid var(--item-border); border-radius:6px;\">\n                            <div style=\"display:flex; gap:10px; align-items:center;\">\n                                <span style=\"color:var(--text-secondary); font-size:12px;\">" + (_0x21368b + 1) + ".</span>\n                                <span style=\"color:var(--text-primary); font-weight:500;\">" + _0x3bcfc9 + "</span>\n                            </div>\n                            <div style=\"display:flex; gap:15px; color:var(--text-secondary); font-size:12px;\">\n                                <span>击杀 <span style=\"color:var(--success); font-weight:500;\">" + _0x229e0a + "</span></span>\n                                <span>死亡 <span style=\"color:var(--error); font-weight:500;\">" + _0x1202f5 + "</span></span>\n                                <span>攻城 <span style=\"color:var(--highlight); font-weight:500;\">" + _0x328f21 + "</span></span>\n                            </div>\n                        </div>";
                  }
                }).join("");
                const _0x35e11f = "\n                    <div style=\"margin-bottom:8px; padding:8px; background: rgba(0,0,0,0.02); border-radius:6px; color:var(--text-secondary); font-size:12px;\">\n                        查询日期：" + this.currentDate + "｜参战人数：" + _0x4a7ab9.length + "\n                    </div>";
                _0x2824c4.innerHTML = _0x35e11f + _0x5473a8;
                _0x24e459.style.display = "grid";
              }
            }
            _0xc3fb2f.textContent = "📊 就绪";
            _0x37bc18.showtip("盐场战报加载完成", "success");
          }
        } catch (_0xf2bee4) {
          _0x2824c4.innerHTML = "<p style=\"text-align: center; color: var(--error); font-size: 12px;\">查询失败：" + _0xf2bee4.message + "</p>";
          _0xc3fb2f.textContent = "❌ 查询出错";
          console.error("查询盐场战报失败:", _0xf2bee4);
        }
      }
    },
    exportWarRecords() {
      {
        if (!this.currentData || !this.currentDate) {
          {
            _0x37bc18.showtip("请先查询战报数据", "error");
            return;
          }
        }
        try {
          {
            let _0x2c3c35 = "序号,玩家名称,击杀数,死亡数,攻城数\n";
            this.currentData.sort((_0x588c6, _0x2bf1a9) => Number(_0x2bf1a9?.["winCnt"] || 0) - Number(_0x588c6?.["winCnt"] || 0)).forEach((_0x588129, _0x538979) => {
              {
                const _0x1f2310 = _0x588129?.["name"] || _0x588129?.["roleName"] || _0x588129?.["nickname"] || "-";
                const _0x1b2fcc = Number(_0x588129?.["winCnt"] || 0);
                const _0x22df75 = Number(_0x588129?.["loseCnt"] || 0);
                const _0x2a7f36 = Number(_0x588129?.["buildingCnt"] || 0);
                _0x2c3c35 += _0x538979 + 1 + ",\"" + _0x1f2310 + "\"," + _0x1b2fcc + "," + _0x22df75 + "," + _0x2a7f36 + "\n";
              }
            });
            const _0x1ed66a = {
              type: "text/csv;charset=utf-8;"
            };
            const _0x3b275d = new Blob([_0x2c3c35], _0x1ed66a);
            const _0x7a77d5 = document.createElement("a");
            const _0x452468 = URL.createObjectURL(_0x3b275d);
            _0x7a77d5.setAttribute("href", _0x452468);
            _0x7a77d5.setAttribute("download", "盐场战报_" + this.currentDate.replace(/-/g, "") + ".csv");
            _0x7a77d5.style.visibility = "hidden";
            document.body.appendChild(_0x7a77d5);
            _0x7a77d5.click();
            document.body.removeChild(_0x7a77d5);
            _0x37bc18.showtip("战报导出成功", "success");
          }
        } catch (_0x35d4ff) {
          {
            _0x37bc18.showtip("导出失败: " + _0x35d4ff.message, "error");
            console.error("导出盐场战报失败:", _0x35d4ff);
          }
        }
      }
    },
    showSummary() {
      {
        if (!this.currentData) {
          {
            _0x37bc18.showtip("请先查询战报数据", "error");
            return;
          }
        }
        try {
          {
            let _0x43dcf5 = 0;
            let _0x37915c = 0;
            let _0x49cb36 = 0;
            let _0x201960 = 0;
            this.currentData.forEach(_0x50bb26 => {
              {
                const _0x5a7151 = Number(_0x50bb26?.["winCnt"] || 0);
                const _0x222e48 = Number(_0x50bb26?.["loseCnt"] || 0);
                const _0x5e82c3 = Number(_0x50bb26?.["buildingCnt"] || 0);
                _0x43dcf5 += _0x5a7151;
                _0x37915c += _0x222e48;
                _0x49cb36 += _0x5e82c3;
                (_0x5a7151 > 0 || _0x222e48 > 0 || _0x5e82c3 > 0) && _0x201960++;
              }
            });
            const _0x2e6f7e = document.getElementById("salt-field-results");
            if (_0x2e6f7e) {
              {
                const _0x2d72d2 = "\n                    <div style=\"padding:15px; background: rgba(0,0,0,0.02); border-radius:8px; margin-bottom:10px;\">\n                        <h4 style=\"margin:0 0 10px 0; color:var(--highlight); font-size:14px;\">盐场战报汇总</h4>\n                        <div style=\"display:grid; grid-template-columns: 1fr 1fr; gap:10px;\">\n                            <div style=\"padding:8px; background:var(--item-bg); border:1px solid var(--item-border); border-radius:6px;\">\n                                <div style=\"color:var(--text-secondary); font-size:12px;\">参战总人数</div>\n                                <div style=\"color:var(--text-primary); font-size:16px; font-weight:600;\">" + this.currentData.length + "</div>\n                            </div>\n                            <div style=\"padding:8px; background:var(--item-bg); border:1px solid var(--item-border); border-radius:6px;\">\n                                <div style=\"color:var(--text-secondary); font-size:12px;\">活跃成员数</div>\n                                <div style=\"color:var(--success); font-size:16px; font-weight:600;\">" + _0x201960 + "</div>\n                            </div>\n                            <div style=\"padding:8px; background:var(--item-bg); border:1px solid var(--item-border); border-radius:6px;\">\n                                <div style=\"color:var(--text-secondary); font-size:12px;\">总击杀数</div>\n                                <div style=\"color:var(--success); font-size:16px; font-weight:600;\">" + _0x43dcf5 + "</div>\n                            </div>\n                            <div style=\"padding:8px; background:var(--item-bg); border:1px solid var(--item-border); border-radius:6px;\">\n                                <div style=\"color:var(--text-secondary); font-size:12px;\">总死亡数</div>\n                                <div style=\"color:var(--error); font-size:16px; font-weight:600;\">" + _0x37915c + "</div>\n                            </div>\n                            <div style=\"padding:8px; background:var(--item-bg); border:1px solid var(--item-border); border-radius:6px;\">\n                                <div style=\"color:var(--text-secondary); font-size:12px;\">总攻城数</div>\n                                <div style=\"color:var(--highlight); font-size:16px; font-weight:600;\">" + _0x49cb36 + "</div>\n                            </div>\n                            <div style=\"padding:8px; background:var(--item-bg); border:1px solid var(--item-border); border-radius:6px;\">\n                                <div style=\"color:var(--text-secondary); font-size:12px;\">击杀/死亡比</div>\n                                <div style=\"color:var(--text-primary); font-size:16px; font-weight:600;\">\n                                    " + (_0x37915c > 0 ? (_0x43dcf5 / _0x37915c).toFixed(2) : "∞") + "\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div style=\"text-align:center;\">\n                        <button class=\"task-btn\" onclick=\"document.getElementById('salt-field-query').click();\">\n                            查看详细数据\n                        </button>\n                    </div>";
                _0x2e6f7e.innerHTML = _0x2d72d2;
              }
            }
          }
        } catch (_0x53a1df) {
          {
            _0x37bc18.showtip("生成汇总失败: " + _0x53a1df.message, "error");
            console.error("生成盐场战报汇总失败:", _0x53a1df);
          }
        }
      }
    }
  };
  const _0x5b020c = {
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
        if (this.dom.startButton) {
          {
            this.dom.startButton.addEventListener("click", this.handleMainButtonClick.bind(this));
          }
        }
      }
    },
    updateStatus(_0x2476e8) {
      {
        if (this.dom.statusEl) {
          {
            this.dom.statusEl.textContent = _0x2476e8;
          }
        }
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
    displayOpponentResult(_0x4444b4, _0x39ccd0) {
      {
        if (!this.dom.resultsEl) {
          return;
        }
        let _0x474961 = this.dom.resultsEl.querySelector("[data-opponent-id=\"" + _0x4444b4.id + "\"]");
        const _0x1f87a2 = _0x39ccd0.wins + _0x39ccd0.losses + _0x39ccd0.draws;
        const _0x4cedee = _0x1f87a2 > 0 ? (_0x39ccd0.wins / _0x1f87a2 * 100).toFixed(1) : 0;
        if (_0x474961) {
          {
            _0x474961.innerHTML = "\n                    <div><strong>" + _0x4444b4.name + "</strong> (ID: " + _0x4444b4.id + ")</div>\n                    <div>战绩: <span class=\"winrate-win\">" + _0x39ccd0.wins + "胜</span> / <span class=\"winrate-loss\">" + _0x39ccd0.losses + "负</span> / " + _0x39ccd0.draws + "平 | 胜率: <strong>" + _0x4cedee + "%</strong></div>\n                ";
          }
        } else {
          {
            _0x474961 = document.createElement("div");
            _0x474961.className = "winrate-result-item";
            _0x474961.dataset.opponentId = _0x4444b4.id;
            _0x474961.innerHTML = "\n                    <div><strong>" + _0x4444b4.name + "</strong> (ID: " + _0x4444b4.id + ")</div>\n                    <div>战绩: <span class=\"winrate-win\">" + _0x39ccd0.wins + "胜</span> / <span class=\"winrate-loss\">" + _0x39ccd0.losses + "负</span> / " + _0x39ccd0.draws + "平 | 胜率: <strong>" + _0x4cedee + "%</strong></div>\n                ";
            this.dom.resultsEl.appendChild(_0x474961);
          }
        }
      }
    },
    stop(_0x3a65ee = false) {
      {
        if (!_0x3a65ee) {
          {
            this.isStopping = true;
            this.updateStatus("正在请求停止...");
          }
        }
        this.isRunning = false;
        this.isStopping = false;
        if (this.dom.startButton) {
          {
            this.dom.startButton.textContent = "获取对手并开始测试";
            this.dom.startButton.classList.remove("stop");
          }
        }
        this.dom.fightCountInput && (this.dom.fightCountInput.disabled = false);
        if (_0x3a65ee) {
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
        const _0x4584cc = parseInt(this.dom.fightCountInput?.["value"] || 30, 10);
        if (isNaN(_0x4584cc) || _0x4584cc <= 0) {
          {
            this.updateStatus("❌ 请输入有效的战斗次数");
            _0x37bc18.showtip("请输入有效的战斗次数", "error");
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
        this.dom.fightCountInput && (this.dom.fightCountInput.disabled = true);
        this.clearResults();
        try {
          {
            this.updateStatus("⚔️ 正在进入竞技场...");
            await _0x37bc18.sendCommand("arena_startarea", {});
            await _0x37bc18.delay(1);
          }
        } catch (_0x2f5b14) {
          {
            this.updateStatus("❌ 进入竞技场失败: " + _0x2f5b14.message);
            this.stop();
            return;
          }
        }
        this.updateStatus("📋 正在获取竞技场对手列表...");
        let _0x262b9c = [];
        try {
          {
            const _0x4776cf = {
              refresh: false
            };
            const _0x222964 = await _0x37bc18.sendCommand("arena_getareatarget", _0x4776cf);
            const _0x4250d1 = _0x222964?.["_rawData"]?.["roleList"];
            if (!_0x4250d1 || _0x4250d1.length === 0) {
              {
                throw new Error("未能获取到对手列表");
              }
            }
            _0x262b9c = _0x4250d1.map(_0x3fd045 => ({
              id: _0x3fd045.roleId,
              name: _0x3fd045.info?.["name"] || "对手" + _0x3fd045.roleId
            }));
            this.clearResults();
            _0x262b9c.forEach(_0x3f2ec9 => {
              {
                const _0x5b8a5d = document.createElement("div");
                _0x5b8a5d.className = "winrate-result-item";
                _0x5b8a5d.dataset.opponentId = _0x3f2ec9.id;
                _0x5b8a5d.innerHTML = "\n                        <div><strong>" + _0x3f2ec9.name + "</strong> (ID: " + _0x3f2ec9.id + ")</div>\n                        <div class=\"winrate-opponent-placeholder\">正在准备测试...</div>\n                    ";
                this.dom.resultsEl.appendChild(_0x5b8a5d);
              }
            });
            this.updateStatus("🎯 获取到 " + _0x262b9c.length + " 位对手，开始极速测试...");
          }
        } catch (_0x2c949c) {
          {
            this.updateStatus("❌ 获取对手失败: " + _0x2c949c.message);
            _0x37bc18.showtip("获取对手失败: " + _0x2c949c.message, "error");
            this.stop();
            return;
          }
        }
        let _0x536838 = 0;
        for (const _0x29bf0 of _0x262b9c) {
          {
            _0x536838++;
            if (this.isStopping) {
              {
                this.updateStatus("🛑 测试已手动停止");
                break;
              }
            }
            this.updateStatus("⚔️ 测试对手 " + _0x29bf0.name + " (" + _0x536838 + "/" + _0x262b9c.length + ")");
            const _0xb47acb = {
              wins: 0,
              losses: 0,
              draws: 0
            };
            for (let _0x2ab9ba = 1; _0x2ab9ba <= _0x4584cc; _0x2ab9ba++) {
              {
                if (this.isStopping) {
                  break;
                }
                try {
                  {
                    const _0x413dfb = {
                      targetId: _0x29bf0.id
                    };
                    const _0x4669b3 = await _0x37bc18.sendCommand("fight_startpvp", _0x413dfb);
                    const _0x4fb6c = _0x4669b3?.["_rawData"]?.["battleData"]?.["result"];
                    const _0x2d7b30 = _0x4fb6c?.["sponsor"]?.["ext"]?.["curHP"];
                    const _0x22ba95 = _0x4fb6c?.["accept"]?.["ext"]?.["curHP"];
                    if (_0x4fb6c && typeof _0x2d7b30 !== "undefined" && typeof _0x22ba95 !== "undefined") {
                      {
                        if (_0x2d7b30 > 0 && _0x22ba95 === 0) {
                          _0xb47acb.wins++;
                        } else {
                          if (_0x2d7b30 === 0) {
                            {
                              _0xb47acb.losses++;
                            }
                          } else {
                            _0xb47acb.draws++;
                          }
                        }
                      }
                    } else {
                      _0xb47acb.draws++;
                    }
                  }
                } catch (_0x5a2b25) {
                  _0xb47acb.draws++;
                  console.error("挑战 " + _0x29bf0.name + " 时出错:", _0x5a2b25.message);
                }
                if (_0x2ab9ba % 10 === 0) {
                  {
                    await _0x37bc18.delay(this.delayBetweenFights / 1000);
                  }
                }
              }
            }
            this.displayOpponentResult(_0x29bf0, _0xb47acb);
          }
        }
        this.stop(true);
      }
    },
    handleMainButtonClick() {
      {
        if (this.isRunning) {
          this.stop();
        } else {
          {
            this.start();
          }
        }
      }
    }
  };
  const _0x231bba = _0x347846.querySelector(".panel-content");
  const _0x1b18e5 = _0x347846.querySelector("#opacity-slider");
  const _0x4f335c = _0x140027 => {
    {
      const _0x55ef8f = _0x140027 / 100;
      _0x347846.style.background = "transparent";
      _0x347846.querySelector(".opacity-value").textContent = _0x140027 + "%";
      _0x347846.style.setProperty("--panel-bg", "rgba(247, 250, 252, " + 0.98 * _0x55ef8f + ")");
      _0x347846.style.setProperty("--item-bg", "rgba(255, 255, 255, " + _0x55ef8f + ")");
      const _0x35a925 = _0x347846.querySelector(".panel-header");
      if (_0x35a925) {
        {
          _0x35a925.style.background = "rgba(0, 0, 0, " + 0.02 * _0x55ef8f + ")";
        }
      }
    }
  };
  _0x1b18e5.addEventListener("input", _0x5362be => _0x4f335c(_0x5362be.target.value));
  _0x4f335c(_0x1b18e5.value);
  _0x347846.querySelector(".panel-header").addEventListener("click", _0xa49c37 => {
    {
      if (_0xa49c37.target.closest(".opacity-control")) {
        return;
      }
      _0x347846.classList.toggle("collapse");
      _0x347846.classList.toggle("expanded");
    }
  });
  _0x231bba.addEventListener("click", _0x4d6365 => {
    {
      const _0x4fa620 = _0x4d6365.target.closest(".tab-btn");
      const _0x423381 = _0x4d6365.target.closest(".sub-tab-btn");
      if (_0x4fa620 && !_0x4fa620.classList.contains("active")) {
        {
          _0x231bba.querySelector(".tab-btn.active").classList.remove("active");
          _0x4fa620.classList.add("active");
          _0x231bba.querySelector(".tab-pane.active").classList.remove("active");
          _0x231bba.querySelector("#" + _0x4fa620.dataset.tab).classList.add("active");
        }
      }
      if (_0x423381 && !_0x423381.classList.contains("active")) {
        {
          const _0x123843 = _0x423381.closest(".tab-pane");
          _0x123843.querySelector(".sub-tab-btn.active").classList.remove("active");
          _0x423381.classList.add("active");
          _0x123843.querySelector(".sub-pane.active").classList.remove("active");
          _0x123843.querySelector("#" + _0x423381.dataset.subTab).classList.add("active");
        }
      }
    }
  });
  const _0x4d20d5 = document.getElementById("club-boss-count");
  _0x347846.querySelector("#club-module").addEventListener("click", _0xf24ad0 => {
    {
      const _0x42eb70 = _0xf24ad0.target.dataset.action;
      if (!_0x42eb70) {
        return;
      }
      let _0x4c3991 = parseInt(_0x4d20d5.textContent);
      if (_0x42eb70 === "increment" && _0x4c3991 < 4) {
        _0x4c3991++;
      }
      if (_0x42eb70 === "decrement" && _0x4c3991 > 0) {
        _0x4c3991--;
      }
      _0x4d20d5.textContent = _0x4c3991;
    }
  });
  _0x231bba.addEventListener("click", _0x38d90f => {
    {
      const _0x258412 = _0x38d90f.target.closest("[data-module]");
      if (_0x258412) {
        {
          const _0x5be207 = _0x258412.dataset.module;
          _0x231bba.querySelectorAll(".module-content").forEach(_0x1e768c => {
            _0x1e768c.classList.remove("active");
          });
          const _0x11f2c8 = _0x231bba.querySelector("#" + _0x5be207);
          if (_0x11f2c8) {
            {
              _0x11f2c8.classList.add("active");
            }
          }
        }
      }
    }
  });
  const _0x3792e0 = {
    id: "daily-hangup-combined",
    label: "收菜5次、加钟",
    task: "daily-task-hangup-combined",
    checked: true
  };
  const _0x765182 = {
    id: "daily-bottle-renew",
    label: "续罐子",
    task: "daily-task-bottle-renew",
    checked: true
  };
  const _0x200b5c = {
    id: "daily-bottle-claim",
    label: "收盐罐",
    task: "daily-task-bottle-claim",
    checked: false
  };
  const _0x20e5d2 = {
    id: "daily-quick-tasks",
    label: "邮件、签到、赠金币、福利",
    task: "daily-task-combined-quick",
    checked: true
  };
  const _0x23cc23 = {
    id: "daily-boss",
    label: "每日咸王考验",
    task: "daily-task-boss",
    checked: true
  };
  const _0xd46f35 = {
    id: "daily-gold",
    label: "点金三次",
    task: "daily-task-gold",
    checked: true
  };
  const _0x3f84af = {
    id: "daily-quiz",
    label: "自动答题",
    task: "daily-task-quiz",
    checked: true
  };
  const _0x263869 = {
    id: "daily-genie-tickets",
    label: "领取扫荡券",
    task: "daily-task-genie-tickets",
    checked: true
  };
  const _0x2d1ea9 = {
    id: "daily-genie-sweep",
    label: "灯神扫荡",
    task: "daily-task-genie-sweep",
    checked: true
  };
  const _0x19a1c1 = {
    id: "daily-box",
    label: "开启10木箱",
    task: "daily-task-box",
    checked: false
  };
  const _0x187df2 = {
    id: "daily-recruit",
    label: "执行2次招募",
    task: "daily-task-recruit",
    checked: false
  };
  const _0x306bd3 = {
    id: "daily-arena",
    label: "进行3次竞技场战斗",
    task: "daily-task-arena",
    checked: false
  };
  const _0x5ecab2 = {
    id: "daily-buy-bronze-box",
    label: "购买青铜宝箱",
    task: "daily-task-buy-bronze-box",
    checked: false
  };
  const _0xe9b7f2 = [_0x3792e0, _0x765182, _0x200b5c, _0x20e5d2, _0x23cc23, _0xd46f35, _0x3f84af, _0x263869, _0x2d1ea9, _0x19a1c1, _0x187df2, _0x306bd3, _0x5ecab2];
  const _0x4090b4 = _0x347846.querySelector(".daily-task-list");
  _0xe9b7f2.forEach(_0x47eb96 => {
    {
      const _0x34381e = document.createElement("div");
      _0x34381e.className = "daily-task-item";
      _0x34381e.innerHTML = "\n            <div class=\"daily-task-info\">\n                <input type=\"checkbox\" id=\"" + _0x47eb96.id + "\" data-task-name=\"" + _0x47eb96.task + "\" " + (_0x47eb96.checked ? "checked" : "") + ">\n                <label for=\"" + _0x47eb96.id + "\">" + _0x47eb96.label + "</label>\n            </div>\n            <button class=\"task-btn\" data-task=\"" + _0x47eb96.task + "\">独立执行</button>\n        ";
      _0x4090b4.appendChild(_0x34381e);
    }
  });
  const _0x2a2536 = {
    fullCarData: [],
    timeInterval: null,
    sendCount: 0,
    isBatchRefreshing: false,
    availableConditions: ["品质", "金砖", "招募令", "彩玉", "白玉", "万能碎片", "刷新券"]
  };
  const _0x3411cf = {
    fullCarData: [],
    sendCount: 0,
    timeInterval: null,
    legionMembersMap: {},
    helperSelectionByCarId: {}
  };
  const _0x3076a5 = {
    statusEl: null,
    dataTable: null,
    dataBody: null
  };
  const _0x105da3 = {
    "1": "普通",
    "2": "稀有",
    "3": "史诗",
    "4": "传说",
    "5": "神话",
    "6": "传奇"
  };
  const _0x5219eb = {
    "1": "color:var(--text-secondary)",
    "2": "color:#3182ce",
    "3": "color:#9f7aea",
    "4": "color:#dd6b20",
    "5": "color:#e53e3e",
    "6": "color:#d69e2e"
  };
  const _0x4ebb3d = {
    state: _0x2a2536,
    state: _0x3411cf,
    dom: _0x3076a5,
    init() {
      {
        const _0x16b65a = document.getElementById("car-module");
        this.dom = {
          statusEl: _0x16b65a.querySelector(".status"),
          dataTable: _0x16b65a.querySelector(".car-data-table"),
          dataBody: _0x16b65a.querySelector("tbody")
        };
        _0x16b65a.addEventListener("click", _0x5bd090 => {
          {
            const _0x5d563b = _0x5bd090.target.closest(".task-btn, .car-action-btn, .car-batch-btn");
            if (!_0x5d563b) {
              return;
            }
            const {
              task: _0x5b0dc0,
              action: _0x5a48aa,
              id: _0x3f0d2c
            } = _0x5d563b.dataset;
            if (_0x5b0dc0 === "car-query") {
              this.handleTask(_0x5d563b);
            } else {
              if (_0x5a48aa === "toggleRefreshFilter") {
                {
                  const _0xaa29ab = document.querySelector(".refresh-filter-panel");
                  if (_0xaa29ab) {
                    _0xaa29ab.style.display = _0xaa29ab.style.display === "none" ? "block" : "none";
                  }
                }
              } else {
                if (_0x5a48aa === "sendAll") {
                  this.sendAllCars();
                } else {
                  if (_0x5a48aa === "claimAll") {
                    this.claimAllCars();
                  } else {
                    if (_0x5a48aa === "send") {
                      this.sendCar(_0x3f0d2c);
                    } else {
                      if (_0x5a48aa === "refresh") {
                        this.refreshCar(_0x3f0d2c);
                      } else {
                        if (_0x5a48aa === "claim" && !_0x5d563b.classList.contains("is-disabled")) {
                          this.claimCar(_0x3f0d2c);
                        } else {
                          if (_0x5a48aa === "claim") {
                            _0x37bc18.showtip("赛车尚未到站，无法收取", "error");
                          } else {
                            if (_0x5a48aa === "startBatchRefresh" && !_0x5d563b.classList.contains("is-disabled")) {
                              this.startBatchRefresh();
                            } else {
                              if (_0x5a48aa === "setHelper") {
                                {
                                  const _0x46dede = this.state.fullCarData.find(_0x541014 => String(_0x541014.carId) === String(_0x3f0d2c));
                                  if (_0x46dede) {
                                    this.openHelperDialog(_0x46dede);
                                  }
                                }
                              } else {
                                if (_0x5a48aa === "openMembers") {
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
    async handleTask(_0x26653b) {
      {
        const _0x5bce24 = _0x26653b.textContent;
        _0x26653b.disabled = true;
        _0x26653b.textContent = "查询中...";
        await this.queryClubCars();
        _0x26653b.disabled = false;
        _0x26653b.textContent = _0x5bce24;
      }
    },
    isCarEventActive: () => {
      {
        const _0x34bd84 = new Date();
        return _0x34bd84.getDay() >= 1 && _0x34bd84.getDay() <= 3 && _0x34bd84.getHours() >= 6 && _0x34bd84.getHours() < 20;
      }
    },
    parseRewards(_0x34f465) {
      {
        if (!_0x34f465?.["length"]) {
          return [];
        }
        const _0x5963bb = {
          "2_0": "金砖",
          "0_0": "金砖",
          "3_1001": "招募令",
          "3_1023": "彩玉",
          "3_1022": "白玉",
          "3_3201": "万能碎片",
          "3_35002": "刷新券"
        };
        const _0x39472a = {};
        _0x34f465.forEach(_0x18a11e => {
          {
            const _0x18aa7a = _0x5963bb[_0x18a11e.type + "_" + _0x18a11e.itemId];
            if (_0x18aa7a) {
              _0x39472a[_0x18aa7a] = (_0x39472a[_0x18aa7a] || 0) + _0x18a11e.value;
            }
          }
        });
        return Object.entries(_0x39472a).map(([_0x6bff22, _0x1959a8]) => _0x6bff22 + ":" + _0x1959a8);
      }
    },
    getCarQualityText: _0x4d8e56 => _0x105da3[_0x4d8e56] || "未知",
    getCarQualityStyle: _0x1e209f => (_0x5219eb[_0x1e209f] || "") + ";font-weight:bold;",
    getCarStatus(_0x163fc0) {
      {
        const _0x16642c = {
          status: "待发车",
          statusClass: "status-pending"
        };
        if (!_0x163fc0.sendAt) {
          return _0x16642c;
        }
        const _0xf7ba0 = {
          "1": 2.5,
          "2": 2.5,
          "3": 3,
          "4": 3,
          "5": 4,
          "6": 4
        };
        const _0x58d48f = (_0xf7ba0[_0x163fc0.quality] || 0) * 3600000;
        const _0x30335d = {
          status: "未知状态",
          statusClass: "status-pending"
        };
        if (!_0x58d48f) {
          return _0x30335d;
        }
        const _0x19287a = _0x163fc0.sendAt * 1000 + _0x58d48f - Date.now();
        if (_0x19287a <= 0) {
          return {
            status: "已完成",
            statusClass: "status-completed"
          };
        }
        const _0x4890a1 = _0x1c512b => _0x1c512b.toString().padStart(2, "0");
        return {
          status: "剩余 " + _0x4890a1(Math.floor(_0x19287a / 3600000)) + ":" + _0x4890a1(Math.floor(_0x19287a % 3600000 / 60000)) + ":" + _0x4890a1(Math.floor(_0x19287a % 60000 / 1000)),
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
        const _0x10d3ae = this.state.fullCarData.length > 0;
        this.dom.dataTable.style.display = _0x10d3ae ? "table" : "none";
        if (!_0x10d3ae) {
          {
            this.stopTimeRefresh();
            return;
          }
        }
        this.dom.dataBody.innerHTML = "";
        const _0x4ec16e = [...this.state.fullCarData].sort((_0x25f0de, _0x3c3014) => _0x25f0de.slot - _0x3c3014.slot);
        const _0x39063a = {
          "金砖": 2000,
          "万能碎片": 10,
          "招募令": 10,
          "白玉": 2000,
          "彩玉": 2
        };
        const _0x8cbcb0 = _0x4b1eab => {
          {
            const [_0x22d8d3, _0xa45f4d] = _0x4b1eab.split(":");
            return _0xa45f4d && parseInt(_0xa45f4d) >= (_0x39063a[_0x22d8d3] || Infinity);
          }
        };
        _0x4ec16e.forEach(_0x196395 => {
          {
            const _0x5a8916 = this.getCarStatus(_0x196395);
            let _0x52726b = "<div class=\"car-status " + _0x5a8916.statusClass + "\">" + _0x5a8916.status + "</div>";
            if (!_0x196395.sendAt) {
              {
                const _0x6daa4 = 5 - _0x196395.refreshCount;
                _0x52726b += "<div class=\"pity-counter " + (_0x6daa4 <= 1 ? "mythic-guaranteed" : "") + "\">" + (_0x6daa4 <= 1 ? "本次刷新必出神话" : "再刷" + _0x6daa4 + "次出神话") + "</div>";
              }
            }
            const _0x162f2a = !this.isCarEventActive() || this.state.sendCount >= 4;
            const _0xd85ede = _0x5a8916.statusClass === "status-completed";
            let _0x911d29 = "";
            if (!_0x196395.sendAt) {
              {
                _0x911d29 = "<button class=\"car-action-btn\" data-action=\"refresh\" data-id=\"" + _0x196395.carId + "\">刷新</button>";
                if (Number(_0x196395.quality || 0) >= 5) {
                  {
                    const _0x344856 = (this.state.helperSelectionByCarId || {})[String(_0x196395.carId)];
                    const _0x8fa37d = _0x344856 ? this.getMemberName(_0x344856) : "";
                    _0x911d29 += "<button class=\"car-action-btn helper\" data-action=\"setHelper\" data-id=\"" + _0x196395.carId + "\">" + (_0x8fa37d ? "护卫(" + _0x8fa37d + ")" : "选择护卫") + "</button>";
                  }
                }
                _0x911d29 += "<button class=\"car-action-btn send " + (_0x162f2a ? "is-disabled" : "") + "\" data-action=\"send\" data-id=\"" + _0x196395.carId + "\">发车</button>";
              }
            } else {
              _0x911d29 = "<button class=\"car-action-btn claim " + (_0xd85ede ? "" : "is-disabled") + "\" data-action=\"claim\" data-id=\"" + _0x196395.carId + "\">收车</button>";
            }
            const _0x3bfe61 = this.dom.dataBody.insertRow();
            const _0x5771a2 = _0x196395.rewards.map(_0x48099d => "<span style=\"" + (_0x8cbcb0(_0x48099d) ? "color:#e53e3e;" : "") + "\">" + _0x48099d + "</span>").join("<br>") || "暂无";
            _0x3bfe61.innerHTML = "<td>" + (_0x196395.slot + 1) + "</td><td style=\"" + this.getCarQualityStyle(_0x196395.quality) + "\">" + this.getCarQualityText(_0x196395.quality) + "</td><td class=\"car-rewards\" title=\"" + _0x196395.rewards.join("，") + "\">" + _0x5771a2 + "</td><td>" + _0x52726b + "</td><td>" + _0x911d29 + "</td>";
          }
        });
        this.renderBatchActionsAndFilterPanel();
        this.startTimeRefresh();
      }
    },
    renderBatchActionsAndFilterPanel() {
      {
        let _0x957958 = this.dom.dataTable.parentElement;
        let _0x44e0b1 = _0x957958.querySelector(".car-batch-actions");
        if (!_0x44e0b1) {
          {
            _0x44e0b1 = document.createElement("div");
            _0x44e0b1.className = "car-batch-actions";
            _0x44e0b1.style.cssText = "margin-top: 10px; display: flex; gap: 10px;";
            _0x957958.appendChild(_0x44e0b1);
          }
        }
        const _0x4e86b8 = this.isCarEventActive() && this.state.sendCount < 4 && this.state.fullCarData.some(_0x1c6d92 => !_0x1c6d92.sendAt);
        const _0x291fdc = this.state.fullCarData.some(_0x16ee7b => this.getCarStatus(_0x16ee7b).statusClass === "status-completed");
        _0x44e0b1.innerHTML = "\n            <button class=\"task-btn " + (!_0x4e86b8 ? "is-disabled" : "") + "\" data-action=\"sendAll\">一键发车</button>\n            <button class=\"task-btn " + (!_0x291fdc ? "is-disabled" : "") + "\" data-action=\"claimAll\">一键收车</button>\n            <button class=\"task-btn\" data-action=\"openMembers\">查看成员</button>\n            <button class=\"task-btn\" data-action=\"toggleRefreshFilter\">刷新条件</button>\n        ";
        let _0x597fe2 = _0x957958.querySelector(".refresh-filter-panel");
        if (!_0x597fe2) {
          {
            _0x597fe2 = document.createElement("div");
            _0x597fe2.className = "refresh-filter-panel";
            _0x597fe2.style.cssText = "display: none; margin-top: 10px; padding: 10px; border: 1px solid var(--item-border); border-radius: 7px; background: var(--item-bg);";
            _0x957958.appendChild(_0x597fe2);
            this.buildFilterPanelUI(_0x597fe2);
            this.setupFilterPanelEvents(_0x597fe2);
            this.loadUserSettings();
          }
        }
        this.updateRefreshButtonState();
      }
    },
    buildFilterPanelUI(_0x29ed16) {
      {
        _0x29ed16.innerHTML = "\n            <style>\n                .filter-group { border: 1px solid var(--item-border); border-radius: 5px; padding: 8px; margin-bottom: 10px; }\n                .group-title { font-size: 13px; font-weight: bold; color: var(--text-primary); display: block; margin-bottom: 8px; }\n                .filter-row, .placeholder-row { display: flex; align-items: center; gap: 8px; margin-bottom: 5px; }\n                .filter-row-label { font-size: 12px; color: var(--text-secondary); min-width: 60px; text-align: right; }\n                .filter-row-value, .placeholder-select { width: 90px; padding: 3px; font-size: 12px; box-sizing: border-box; }\n                .count-selector { display: flex; align-items: center; gap: 0; }\n                .count-display { padding: 0 10px; font-size: 12px; min-width: 40px; text-align: center; }\n                .add-condition-btn { font-size: 12px; padding: 2px 8px; margin-top: 5px; }\n                .remove-condition-btn { font-size: 12px; padding: 0; height: 22px; width: 22px; cursor: pointer; border-radius: 50%; }\n            </style>\n\n            <div class=\"filter-group\" id=\"and-conditions-group\">\n                <strong class=\"group-title\">必须同时满足 (AND)</strong>\n                <div class=\"group-content\"></div>\n                <button class=\"task-btn add-condition-btn\" data-group=\"and\">[+] 添加必须条件</button>\n            </div>\n\n            <div class=\"filter-group\" id=\"or-conditions-group\">\n                <strong class=\"group-title\">并满足任一条件 (OR)</strong>\n                <div class=\"group-content\"></div>\n                <button class=\"task-btn add-condition-btn\" data-group=\"or\">[+] 添加任一条件</button>\n            </div>\n\n            <div style=\"display: flex; align-items: center; gap: 10px; margin-top: 15px;\">\n                <span style=\"font-size: 12px; font-weight: bold; min-width: 80px;\">单车最大刷新:</span>\n                <div class=\"count-selector\">\n                    <button class=\"task-btn\" data-action=\"decrement-refresh-count\" style=\"width: 28px; height: 28px; padding: 0;\">-</button>\n                    <span id=\"max-refresh-count\" class=\"count-display\">5</span>\n                    <button class=\"task-btn\" data-action=\"increment-refresh-count\" style=\"width: 28px; height: 28px; padding: 0;\">+</button>\n                </div>\n            </div>\n            <div style=\"display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 10px;\">\n                <button class=\"task-btn is-disabled\" id=\"start-batch-refresh\" data-action=\"startBatchRefresh\">一键刷新</button>\n                <button class=\"task-btn\" id=\"send-all-cars-panel\" data-action=\"sendAll\">一键发车</button>\n            </div>\n        ";
      }
    },
    setupFilterPanelEvents(_0x6521a3) {
      {
        const _0x486cce = (_0x28723f, _0xcd0f4b) => {
          {
            let _0x41fc9b;
            return (..._0x3dcc3c) => {
              {
                clearTimeout(_0x41fc9b);
                _0x41fc9b = setTimeout(() => _0x28723f.apply(this, _0x3dcc3c), _0xcd0f4b);
              }
            };
          }
        };
        const _0x2dad6e = _0x486cce(() => this.saveUserSettings(), 500);
        _0x6521a3.addEventListener("click", _0xca3f4d => {
          {
            const _0xb52f31 = _0xca3f4d.target;
            const _0x47b2c1 = _0xb52f31.dataset.action;
            if (_0x47b2c1 === "increment-refresh-count" || _0x47b2c1 === "decrement-refresh-count") {
              {
                const _0x4f19d2 = document.getElementById("max-refresh-count");
                let _0x325e64 = parseInt(_0x4f19d2.textContent);
                if (_0x47b2c1 === "increment-refresh-count" && _0x325e64 < 100) {
                  _0x325e64++;
                }
                if (_0x47b2c1 === "decrement-refresh-count" && _0x325e64 > 1) {
                  _0x325e64--;
                }
                _0x4f19d2.textContent = _0x325e64;
                this.saveUserSettings();
              }
            } else {
              if (_0xb52f31.classList.contains("add-condition-btn")) {
                {
                  this.addConditionPlaceholder(_0xb52f31.dataset.group);
                }
              } else {
                _0xb52f31.classList.contains("remove-condition-btn") && (_0xb52f31.closest(".filter-row, .placeholder-row").remove(), this.saveUserSettings(), this.updateRefreshButtonState());
              }
            }
          }
        });
        _0x6521a3.addEventListener("change", _0x145f57 => {
          {
            const _0x477022 = _0x145f57.target;
            if (_0x477022.classList.contains("placeholder-select")) {
              this.transformPlaceholder(_0x477022);
            } else {
              {
                this.saveUserSettings();
                this.updateRefreshButtonState();
              }
            }
          }
        });
        _0x6521a3.addEventListener("input", _0x51f5c4 => {
          {
            if (_0x51f5c4.target.type === "number") {
              _0x2dad6e();
            }
          }
        });
      }
    },
    addConditionPlaceholder(_0xc966b2) {
      {
        const _0x4ea9cb = document.querySelector("#" + _0xc966b2 + "-conditions-group .group-content");
        const _0xec2dd8 = new Set([...document.querySelectorAll(".filter-row")].map(_0x16293d => _0x16293d.dataset.type));
        const _0x546df5 = this.state.availableConditions.filter(_0x90a564 => !_0xec2dd8.has(_0x90a564));
        if (_0x546df5.length === 0) {
          {
            _0x37bc18.showtip("所有条件都已添加", "info");
            return;
          }
        }
        const _0x209fc0 = document.createElement("div");
        _0x209fc0.className = "placeholder-row";
        const _0x517ff8 = _0x546df5.map(_0x403992 => "<option value=\"" + _0x403992 + "\">" + _0x403992 + "</option>").join("");
        _0x209fc0.innerHTML = "\n            <input type=\"checkbox\" checked disabled>\n            <select class=\"placeholder-select\"><option value=\"\">--选择条件--</option>" + _0x517ff8 + "</select>\n            <button class=\"task-btn remove-condition-btn\">-</button>\n        ";
        _0x4ea9cb.appendChild(_0x209fc0);
      }
    },
    transformPlaceholder(_0x3d6685) {
      {
        const _0xcf9c1d = _0x3d6685.closest(".placeholder-row");
        const _0x4d6233 = _0x3d6685.value;
        if (!_0x4d6233) {
          return;
        }
        const _0x16d8bd = document.createElement("div");
        _0x16d8bd.className = "filter-row";
        _0x16d8bd.dataset.type = _0x4d6233;
        let _0x3e49d1 = "";
        if (_0x4d6233 === "品质") {
          _0x3e49d1 = "<select class=\"filter-row-value\">\n                           <option value=\"6\">传奇</option>\n                           <option value=\"5\" selected>神话</option>\n                           <option value=\"4\">传说</option>\n                           <option value=\"3\">史诗</option>\n                           <option value=\"2\">稀有</option>\n                           <option value=\"1\">普通</option>\n                       </select>";
        } else {
          {
            const _0x5df22b = {
              "金砖": 2000,
              "招募令": 10,
              "彩玉": 5,
              "白玉": 2000,
              "万能碎片": 10,
              "刷新券": 4
            };
            const _0x291745 = _0x5df22b[_0x4d6233] || 1;
            _0x3e49d1 = "<input type=\"number\" class=\"filter-row-value\" value=\"" + _0x291745 + "\" min=\"1\">";
          }
        }
        _0x16d8bd.innerHTML = "\n            <input type=\"checkbox\" class=\"condition-enabled\" checked>\n            <label class=\"filter-row-label\">" + _0x4d6233 + " ≥</label>\n            " + _0x3e49d1 + "\n            <button class=\"task-btn remove-condition-btn\">-</button>\n        ";
        _0xcf9c1d.replaceWith(_0x16d8bd);
        this.saveUserSettings();
        this.updateRefreshButtonState();
      }
    },
    saveUserSettings() {
      {
        const _0x1a4e78 = {
          and: [],
          or: [],
          maxRefresh: document.getElementById("max-refresh-count").textContent
        };
        document.querySelectorAll("#and-conditions-group .filter-row").forEach(_0x123dfd => {
          _0x1a4e78.and.push({
            type: _0x123dfd.dataset.type,
            enabled: _0x123dfd.querySelector(".condition-enabled").checked,
            value: _0x123dfd.querySelector(".filter-row-value").value
          });
        });
        document.querySelectorAll("#or-conditions-group .filter-row").forEach(_0x64ccbe => {
          {
            _0x1a4e78.or.push({
              type: _0x64ccbe.dataset.type,
              enabled: _0x64ccbe.querySelector(".condition-enabled").checked,
              value: _0x64ccbe.querySelector(".filter-row-value").value
            });
          }
        });
        localStorage.setItem("carModuleSettings_v3", JSON.stringify(_0x1a4e78));
      }
    },
    loadUserSettings() {
      {
        const _0x43691d = localStorage.getItem("carModuleSettings_v3");
        if (!_0x43691d) {
          return;
        }
        const _0x261ce2 = JSON.parse(_0x43691d);
        const _0x3bc49b = _0x2001ae => {
          {
            const _0x53f209 = document.createElement("div");
            _0x53f209.className = "filter-row";
            _0x53f209.dataset.type = _0x2001ae.type;
            let _0x5d28f7 = "";
            if (_0x2001ae.type === "品质") {
              {
                _0x5d28f7 = "<select class=\"filter-row-value\"><option value=\"6\">传奇</option><option value=\"5\">神话</option><option value=\"4\">传说</option><option value=\"3\">史诗</option><option value=\"2\">稀有</option></select>";
              }
            } else {
              _0x5d28f7 = "<input type=\"number\" class=\"filter-row-value\" min=\"1\">";
            }
            _0x53f209.innerHTML = "\n                <input type=\"checkbox\" class=\"condition-enabled\" " + (_0x2001ae.enabled ? "checked" : "") + ">\n                <label class=\"filter-row-label\">" + _0x2001ae.type + " ≥</label>\n                " + _0x5d28f7 + "\n                <button class=\"task-btn remove-condition-btn\">-</button>\n            ";
            _0x53f209.querySelector(".filter-row-value").value = _0x2001ae.value;
            return _0x53f209;
          }
        };
        const _0x32409e = document.querySelector("#and-conditions-group .group-content");
        _0x32409e.innerHTML = "";
        _0x261ce2.and.forEach(_0x36154a => _0x32409e.appendChild(_0x3bc49b(_0x36154a)));
        const _0x387071 = document.querySelector("#or-conditions-group .group-content");
        _0x387071.innerHTML = "";
        _0x261ce2.or.forEach(_0x1b3570 => _0x387071.appendChild(_0x3bc49b(_0x1b3570)));
        document.getElementById("max-refresh-count").textContent = _0x261ce2.maxRefresh;
        this.updateRefreshButtonState();
      }
    },
    updateRefreshButtonState() {
      {
        const _0x2098bc = document.querySelector(".refresh-filter-panel");
        if (!_0x2098bc) {
          return;
        }
        const _0x4c23b4 = _0x2098bc.querySelector("#start-batch-refresh");
        const _0x33a792 = _0x2098bc.querySelector(".condition-enabled:checked");
        if (_0x33a792) {
          {
            _0x4c23b4.classList.remove("is-disabled");
          }
        } else {
          _0x4c23b4.classList.add("is-disabled");
        }
        const _0x103c8d = _0x2098bc.querySelector("#send-all-cars-panel");
        const _0x44dacc = this.isCarEventActive() && this.state.sendCount < 4 && this.state.fullCarData.some(_0x1b2064 => !_0x1b2064.sendAt);
        if (_0x44dacc) {
          {
            _0x103c8d.classList.remove("is-disabled");
          }
        } else {
          {
            _0x103c8d.classList.add("is-disabled");
          }
        }
      }
    },
    async startBatchRefresh() {
      {
        if (this.state.isBatchRefreshing) {
          {
            _0x37bc18.showtip("一键刷新任务已在进行中", "warning");
            return;
          }
        }
        const _0x3c3a54 = document.getElementById("start-batch-refresh");
        const _0x57a886 = _0x3c3a54 ? _0x3c3a54.textContent : "启动...";
        try {
          {
            this.state.isBatchRefreshing = true;
            _0x3c3a54 && (_0x3c3a54.disabled = true, _0x3c3a54.textContent = "运行中...");
            const _0x206088 = parseInt(document.getElementById("max-refresh-count")?.["textContent"] || 5);
            const {
              andConditions: _0x1f8970,
              orConditions: _0x1b5bda
            } = this.collectConditionsFromUI();
            if (_0x1f8970.length === 0 && _0x1b5bda.length === 0) {
              {
                _0x37bc18.showtip("请至少设置一个启用的刷新条件", "error");
                return;
              }
            }
            let _0x58826c = this.state.fullCarData.filter(_0xc29908 => !_0xc29908.sendAt).map(_0x373d71 => ({
              car: _0x373d71,
              refreshCount: 0,
              isSatisfied: this.checkCarFilterConditions(_0x373d71, _0x1f8970, _0x1b5bda)
            }));
            const _0x490855 = _0x58826c.filter(_0x5e5914 => _0x5e5914.isSatisfied).length;
            _0x490855 > 0 && _0x37bc18.showtip("已有 " + _0x490855 + " 辆车满足条件，将跳过。", "info");
            let _0x60253f = _0x58826c.filter(_0x28f5f0 => !_0x28f5f0.isSatisfied);
            if (_0x60253f.length === 0) {
              {
                _0x37bc18.showtip("所有待发车辆都已满足条件，无需刷新！", "success");
                return;
              }
            }
            _0x37bc18.showtip("任务开始，将为 " + _0x60253f.length + " 辆车进行刷新...", "info");
            let _0x27f247 = 0;
            for (const _0x304a40 of _0x60253f) {
              {
                if (!this.state.isBatchRefreshing) {
                  {
                    _0x37bc18.showtip("任务已手动停止。", "warning");
                    break;
                  }
                }
                while (_0x304a40.refreshCount < _0x206088 && !_0x304a40.isSatisfied) {
                  {
                    this.dom.statusEl.textContent = "🔄 刷新中... 车位 " + (_0x304a40.car.slot + 1) + " (第 " + (_0x304a40.refreshCount + 1) + "/" + _0x206088 + " 次)";
                    const _0x50cb8f = await this.performCarAction("refresh", _0x304a40.car.carId, "刷新");
                    if (!_0x50cb8f) {
                      {
                        _0x37bc18.showtip("车位 " + (_0x304a40.car.slot + 1) + " 刷新失败，可能金砖不足，将跳过此车。", "warning");
                        break;
                      }
                    }
                    _0x304a40.refreshCount++;
                    _0x27f247++;
                    await this.queryClubCars();
                    const _0x476027 = this.state.fullCarData.find(_0x30751b => _0x30751b.carId === _0x304a40.car.carId);
                    if (_0x476027) {
                      _0x304a40.car = _0x476027;
                      this.checkCarFilterConditions(_0x476027, _0x1f8970, _0x1b5bda) && (_0x304a40.isSatisfied = true, _0x37bc18.showtip("🎉 车位 " + (_0x476027.slot + 1) + " 在刷新 " + _0x304a40.refreshCount + " 次后满足条件！", "success"));
                    } else {
                      {
                        _0x37bc18.showtip("车位 " + (_0x304a40.car.slot + 1) + " 数据刷新后丢失，跳过此车。", "error");
                        break;
                      }
                    }
                    await new Promise(_0x863db2 => setTimeout(_0x863db2, 400));
                  }
                }
                !_0x304a40.isSatisfied && _0x304a40.refreshCount >= _0x206088 && _0x37bc18.showtip("车位 " + (_0x304a40.car.slot + 1) + " 已达刷新上限 (" + _0x206088 + "次)，仍未满足条件。", "info");
              }
            }
            const _0x315e06 = _0x58826c.filter(_0xfb07da => _0xfb07da.isSatisfied).length;
            _0x37bc18.showtip("刷新任务结束。共 " + _0x315e06 + "/" + _0x58826c.length + " 辆车满足条件，总计刷新 " + _0x27f247 + " 次。", "success");
            this.dom.statusEl.textContent = "✅ 刷新完成: " + _0x315e06 + "/" + _0x58826c.length + " 辆满足";
          }
        } catch (_0x36f559) {
          {
            console.error("一键刷新过程中发生错误:", _0x36f559);
            _0x37bc18.showtip("刷新过程出错，详情请查看控制台。", "error");
            this.dom.statusEl.textContent = "❌ 刷新出错";
          }
        } finally {
          this.state.isBatchRefreshing = false;
          _0x3c3a54 && (_0x3c3a54.disabled = false, _0x3c3a54.textContent = _0x57a886);
          setTimeout(() => this.queryClubCars(), 500);
        }
      }
    },
    collectConditionsFromUI() {
      {
        const _0x3ad49f = [];
        const _0x277418 = [];
        const _0xfdb737 = (_0x47f749, _0x5922b3) => {
          document.querySelectorAll("#" + _0x47f749 + " .filter-row").forEach(_0x49245e => {
            {
              if (_0x49245e.querySelector(".condition-enabled").checked) {
                {
                  const _0x1e8cce = _0x49245e.dataset.type;
                  const _0x396add = _0x49245e.querySelector(".filter-row-value").value;
                  _0x1e8cce === "品质" ? _0x5922b3.push({
                    type: "quality",
                    value: parseInt(_0x396add)
                  }) : _0x5922b3.push({
                    type: "reward",
                    item: _0x1e8cce,
                    count: parseInt(_0x396add) || 1
                  });
                }
              }
            }
          });
        };
        _0xfdb737("and-conditions-group", _0x3ad49f);
        _0xfdb737("or-conditions-group", _0x277418);
        const _0x54fdb9 = {
          andConditions: _0x3ad49f,
          orConditions: _0x277418
        };
        return _0x54fdb9;
      }
    },
    checkCarFilterConditions(_0x40da83, _0x2a8bab, _0x184be5) {
      {
        if (_0x2a8bab.length === 0 && _0x184be5.length === 0) {
          return false;
        }
        const _0x4621ec = _0x46f2b4 => {
          {
            if (_0x46f2b4.type === "quality") {
              {
                return _0x40da83.quality >= _0x46f2b4.value;
              }
            } else {
              if (_0x46f2b4.type === "reward") {
                {
                  return this.checkSingleRewardCondition(_0x40da83.rewards, _0x46f2b4);
                }
              }
            }
            return false;
          }
        };
        const _0x524ae4 = _0x2a8bab.every(_0x4621ec);
        if (!_0x524ae4) {
          return false;
        }
        if (_0x184be5.length === 0) {
          return true;
        }
        const _0x54fccb = _0x184be5.some(_0x4621ec);
        return _0x54fccb;
      }
    },
    checkSingleRewardCondition(_0x38485d, _0x2a6c4f) {
      {
        const {
          item: _0x5c14a4,
          count: _0x43272a
        } = _0x2a6c4f;
        for (const _0xb18406 of _0x38485d) {
          {
            const [_0x1316ee, _0x251072] = _0xb18406.split(":");
            if (_0x1316ee === _0x5c14a4) {
              {
                if (parseInt(_0x251072) >= _0x43272a) {
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
            const _0x3525c1 = await _0x37bc18.sendCommand("car_getrolecar");
            if (_0x3525c1?.["code"] !== 0) {
              throw new Error(_0x3525c1?.["msg"] || "Code: " + _0x3525c1?.["code"]);
            }
            const _0x33f692 = (_0x499555, _0x1ec62d) => _0x1ec62d.split(".").reduce((_0x586c89, _0x3d7081) => _0x586c89?.[_0x3d7081], _0x499555);
            const _0x3bcb84 = _0x33f692(_0x3525c1, "_rawData.body.roleCar") || _0x33f692(_0x3525c1, "data.body.roleCar") || _0x33f692(_0x3525c1, "_rawData.roleCar") || _0x33f692(_0x3525c1, "data.roleCar");
            const _0x773c1e = _0x3bcb84?.["carDataMap"] || {};
            let _0x1d188e = _0x3bcb84?.["sendCnt"] || 0;
            const _0x718744 = new Date().getDay() >= 1 && new Date().getDay() <= 3;
            if (_0x718744 && _0x3bcb84.sendCntResetTime) {
              {
                const _0x47c240 = new Date(_0x3bcb84.sendCntResetTime * 1000);
                const _0x311634 = new Date();
                if (_0x47c240.getFullYear() !== _0x311634.getFullYear() || _0x47c240.getMonth() !== _0x311634.getMonth() || _0x47c240.getDate() !== _0x311634.getDate()) {
                  {
                    _0x1d188e = 0;
                  }
                }
              }
            }
            this.state.sendCount = this.isCarEventActive() ? _0x1d188e : 0;
            this.state.fullCarData = Object.entries(_0x773c1e).map(([_0x53ff17, _0x1733b6]) => ({
              id: _0x53ff17,
              ..._0x1733b6,
              carId: _0x53ff17,
              quality: _0x1733b6.color,
              rewards: this.parseRewards(_0x1733b6.rewards)
            }));
            this.renderCarData();
            const _0x2d0eb1 = "今日已发车: " + this.state.sendCount + "/4" + (!this.isCarEventActive() ? " (非活动时间)" : "");
            this.dom.statusEl.textContent = "✅ " + _0x2d0eb1;
          }
        } catch (_0x2f5152) {
          {
            _0x37bc18.showtip("查询失败: " + _0x2f5152.message, "error");
            this.dom.statusEl.textContent = "❌ 查询出错";
          }
        }
      }
    },
    async sendCar(_0x443711) {
      {
        if (!this.isCarEventActive()) {
          return _0x37bc18.showtip("当前非活动时间 (周一至周三 6:00-20:00)", "error");
        }
        if (this.state.sendCount >= 4) {
          return _0x37bc18.showtip("今日发车次数已用完", "error");
        }
        if (await this.performCarAction("send", _0x443711)) {
          {
            setTimeout(() => this.queryClubCars(), 300);
          }
        }
      }
    },
    async refreshCar(_0x7d94a4) {
      (await this.performCarAction("refresh", _0x7d94a4)) && setTimeout(() => this.queryClubCars(), 300);
    },
    async claimCar(_0x4d507f) {
      {
        if (await this.performCarAction("claim", _0x4d507f)) {
          {
            setTimeout(() => this.queryClubCars(), 300);
          }
        }
      }
    },
    async sendAllCars() {
      {
        if (!this.isCarEventActive()) {
          return _0x37bc18.showtip("当前非活动时间 (周一至周三 6:00-20:00)", "error");
        }
        if (this.state.sendCount >= 4) {
          return _0x37bc18.showtip("今日发车次数已用完", "error");
        }
        const _0x41c450 = this.state.fullCarData.filter(_0x38904a => !_0x38904a.sendAt);
        if (_0x41c450.length === 0) {
          return _0x37bc18.showtip("没有可发车的赛车", "info");
        }
        const _0x1c9c74 = Math.min(_0x41c450.length, 4 - this.state.sendCount);
        if (_0x1c9c74 === 0) {
          return _0x37bc18.showtip("今日发车次数已用完", "error");
        }
        this.dom.statusEl.textContent = "🚀 批量发送中...";
        let _0x50ea1b = 0;
        for (let _0x16427f = 0; _0x16427f < _0x1c9c74; _0x16427f++) {
          {
            (await this.performCarAction("send", _0x41c450[_0x16427f].carId, true)) && _0x50ea1b++;
            if (_0x16427f < _0x1c9c74 - 1) {
              await new Promise(_0x20c579 => setTimeout(_0x20c579, 300));
            }
          }
        }
        _0x37bc18.showtip("成功发送 " + _0x50ea1b + " 辆赛车", _0x50ea1b > 0 ? "success" : "error");
        setTimeout(() => this.queryClubCars(), 500);
      }
    },
    async claimAllCars() {
      {
        const _0x33f076 = this.state.fullCarData.filter(_0x5c77d7 => this.getCarStatus(_0x5c77d7).statusClass === "status-completed");
        if (_0x33f076.length === 0) {
          return _0x37bc18.showtip("没有可收取的赛车", "info");
        }
        this.dom.statusEl.textContent = "🚀 批量收取中...";
        let _0x15e8a1 = 0;
        for (let _0x1986a5 = 0; _0x1986a5 < _0x33f076.length; _0x1986a5++) {
          {
            if (await this.performCarAction("claim", _0x33f076[_0x1986a5].carId, true)) {
              {
                _0x15e8a1++;
              }
            }
            if (_0x1986a5 < _0x33f076.length - 1) {
              await new Promise(_0x124912 => setTimeout(_0x124912, 300));
            }
          }
        }
        _0x37bc18.showtip("成功收取 " + _0x15e8a1 + " 辆赛车", _0x15e8a1 > 0 ? "success" : "error");
        setTimeout(() => this.queryClubCars(), 500);
      }
    },
    async performCarAction(_0x48513f, _0x3d1d3f, _0x4ccb93 = false, _0x37b42d = 0) {
      {
        if (!_0x4ccb93) {
          {
            const _0x4c4a79 = {
              send: "发送",
              refresh: "刷新",
              claim: "收获"
            };
            this.dom.statusEl.textContent = "🚀 " + (_0x4c4a79[_0x48513f] || _0x48513f) + "中...";
          }
        }
        try {
          {
            const _0x52231f = {
              carId: _0x3d1d3f,
              helperId: _0x37b42d,
              text: ""
            };
            const _0x27224f = {
              carId: _0x3d1d3f
            };
            const _0x89df0f = await _0x37bc18.sendCommand("car_" + _0x48513f, _0x48513f === "send" ? _0x52231f : _0x27224f);
            if (_0x89df0f?.["code"] !== 0) {
              throw new Error(_0x89df0f?.["msg"] || "Code: " + _0x89df0f?.["code"]);
            }
            !_0x4ccb93 && _0x37bc18.showtip("赛车操作成功", "success");
            return true;
          }
        } catch (_0x1c27a9) {
          {
            if (!_0x4ccb93) {
              {
                _0x37bc18.showtip("操作失败: " + _0x1c27a9.message, "error");
                this.dom.statusEl.textContent = "❌ 操作出错";
              }
            }
            console.error("赛车操作 '" + _0x48513f + "' 失败 (ID: " + _0x3d1d3f + "):", _0x1c27a9.message);
            return false;
          }
        }
      }
    },
    getMemberName(_0x58853e) {
      {
        try {
          {
            const _0x107885 = this.state.legionMembersMap || {};
            const _0x14d448 = _0x107885[String(_0x58853e)] || _0x107885[_0x58853e];
            return _0x14d448 && (_0x14d448.name || _0x14d448.nickname || _0x14d448.roleName) || null;
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
                let _0x141855 = 0;
                while (this._membersLoading && _0x141855 < 10) {
                  await new Promise(_0x4dc923 => setTimeout(_0x4dc923, 100));
                  _0x141855++;
                }
                return this.state.legionMembersMap || {};
              }
            }
            this._membersLoading = true;
            const _0x25da32 = this.state.legionMembersMap;
            if (_0x25da32 && Object.keys(_0x25da32).length > 0) {
              {
                this._membersLoading = false;
                return _0x25da32;
              }
            }
            const _0x2b9155 = new Promise((_0x5bc2e0, _0x13ae85) => {
              setTimeout(() => _0x13ae85(new Error("获取俱乐部成员超时")), 5000);
            });
            const _0x1e43ec = _0x37bc18.sendCommand("legion_getinfo");
            const _0x56d1f0 = await Promise.race([_0x1e43ec, _0x2b9155]);
            if (!_0x56d1f0) {
              {
                throw new Error("无响应数据");
              }
            }
            if (_0x56d1f0 && _0x56d1f0.code !== undefined && _0x56d1f0.code !== 0) {
              {
                console.log("获取俱乐部信息失败，错误码: " + _0x56d1f0.code + ", 消息: " + (_0x56d1f0.msg || "未知错误"));
                this._membersLoading = false;
                return _0x25da32 || {};
              }
            }
            let _0x4d01e6 = [];
            if (_0x56d1f0._rawData) {
              {
                if (_0x56d1f0._rawData.body?.["info"]?.["members"]) {
                  _0x4d01e6 = _0x56d1f0._rawData.body.info.members;
                } else {
                  if (_0x56d1f0._rawData.info?.["members"]) {
                    _0x4d01e6 = _0x56d1f0._rawData.info.members;
                  } else {
                    if (_0x56d1f0._rawData.members) {
                      _0x4d01e6 = _0x56d1f0._rawData.members;
                    } else {
                      if (_0x56d1f0._rawData.legionData?.["members"]) {
                        _0x4d01e6 = _0x56d1f0._rawData.legionData.members;
                      }
                    }
                  }
                }
              }
            } else {
              if (_0x56d1f0.data) {
                {
                  if (_0x56d1f0.data.body?.["info"]?.["members"]) {
                    _0x4d01e6 = _0x56d1f0.data.body.info.members;
                  } else {
                    if (_0x56d1f0.data.info?.["members"]) {
                      _0x4d01e6 = _0x56d1f0.data.info.members;
                    } else {
                      if (_0x56d1f0.data.members) {
                        _0x4d01e6 = _0x56d1f0.data.members;
                      } else {
                        if (_0x56d1f0.data.legionData?.["members"]) {
                          _0x4d01e6 = _0x56d1f0.data.legionData.members;
                        }
                      }
                    }
                  }
                }
              } else {
                {
                  if (_0x56d1f0.info?.["members"]) {
                    _0x4d01e6 = _0x56d1f0.info.members;
                  } else {
                    if (_0x56d1f0.members) {
                      _0x4d01e6 = _0x56d1f0.members;
                    } else {
                      if (_0x56d1f0.legionData?.["members"]) {
                        _0x4d01e6 = _0x56d1f0.legionData.members;
                      }
                    }
                  }
                }
              }
            }
            let _0x48d116 = {};
            if (Array.isArray(_0x4d01e6)) {
              {
                _0x4d01e6.forEach(_0x2fb1a5 => {
                  {
                    if (_0x2fb1a5 && _0x2fb1a5.roleId != null) {
                      {
                        _0x48d116[String(_0x2fb1a5.roleId)] = _0x2fb1a5;
                      }
                    }
                  }
                });
              }
            } else {
              typeof _0x4d01e6 === "object" && _0x4d01e6 && Object.keys(_0x4d01e6).forEach(_0x56abf0 => {
                {
                  const _0x1fa65a = _0x4d01e6[_0x56abf0];
                  if (_0x1fa65a) {
                    {
                      const _0x5598da = String(_0x1fa65a.roleId ?? _0x56abf0);
                      if (_0x5598da) {
                        _0x48d116[_0x5598da] = _0x1fa65a;
                      }
                    }
                  }
                }
              });
            }
            this.state.legionMembersMap = _0x48d116;
            this._membersLoading = false;
            console.log("成功获取俱乐部成员: " + Object.keys(_0x48d116).length + " 个");
            return _0x48d116;
          }
        } catch (_0x6c9d2a) {
          {
            console.error("获取俱乐部成员失败: " + _0x6c9d2a.message);
            this._membersLoading = false;
            return this.state.legionMembersMap || {};
          }
        }
      }
    },
    openHelperDialog(_0x53d2fe) {
      {
        if (!_0x53d2fe) {
          return;
        }
        if (Number(_0x53d2fe.quality || 0) < 5) {
          return _0x37bc18.showtip("仅品阶≥5的车辆可设置护卫", "warning");
        }
        if (Number(_0x53d2fe.sendAt || 0) !== 0) {
          return _0x37bc18.showtip("已发车车辆不可设置护卫", "warning");
        }
        if (!this.state.helperSelectionByCarId) {
          {
            this.state.helperSelectionByCarId = {};
          }
        }
        let _0x43d040 = document.getElementById("helper-dialog");
        let _0xb92ab5 = document.getElementById("global-ui-overlay");
        if (!_0x43d040) {
          {
            _0xb92ab5 = document.createElement("div");
            _0xb92ab5.id = "global-ui-overlay";
            _0xb92ab5.style.cssText = "\n                position: fixed; top: 0; left: 0; right: 0; bottom: 0;\n                background: rgba(0,0,0,0.7); backdrop-filter: blur(4px); z-index: 99999;\n                display: flex; align-items: center; justify-content: center;\n            ";
            _0x43d040 = document.createElement("div");
            _0x43d040.id = "helper-dialog";
            _0x43d040.style.cssText = "\n                position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%);\n                background: #ffffff;\n                color: #333333; border: 1px solid #e5e7eb; outline: 1px solid rgba(37,99,235,0.1);\n                border-radius: 12px; padding: 12px; width: 86vw; max-width: 420px;\n                box-shadow: 0 16px 48px rgba(0,0,0,0.1); box-sizing: border-box;\n                z-index: 100000;\n            ";
            _0x43d040.innerHTML = "\n                <div style=\"display:flex; align-items:center; justify-content:space-between; padding:10px 12px; font-weight:700;\">\n                  <div style=\"font-weight:700; letter-spacing:.3px; color:#333333;\">选择护卫</div>\n                  <button id=\"helper-close\" style=\"padding:4px 8px; border-radius:4px; border:none; background:#e5e7eb; color:#333333; cursor:pointer; font-size:12px;\">关闭</button>\n                </div>\n                <div style=\"padding:6px 8px; border-bottom: 1px solid #e5e7eb; margin:0 1px 6px 1px;\">\n                  <input id=\"helper-search-input\" placeholder=\"按名称或ID搜索\" style=\"width:100%; padding:7px 10px; border-radius:8px; border: 1px solid #d1d5db; background: #ffffff; color: #333333; box-sizing: border-box;\" />\n                </div>\n                <div id=\"helper-content\" style=\"max-height:240px; overflow:auto; border:1px solid #e5e7eb; border-radius:10px; padding:6px 8px; background:#ffffff; color:#333333;\">加载中...</div>\n                <div style=\"display:flex; align-items:center; gap:8px; justify-content:flex-end; padding:8px 4px;\">\n                  <div style=\"flex:1; font-size:14px; color:#6b7280;\">当前选择: <span id=\"helper-selected-name\" style=\"color:#2563eb;\">未选择</span></div>\n                  <button id=\"helper-cancel\" style=\"padding:6px 16px; border-radius:6px; border:none; background:#e5e7eb; color:#333333; cursor:pointer;\">取消</button>\n                  <button id=\"helper-confirm\" style=\"padding:6px 16px; border-radius:6px; border:none; background:#2563eb; color:#ffffff; cursor:not-allowed; opacity:0.7;\">确定</button>\n                </div>\n            ";
            document.body.appendChild(_0xb92ab5);
            document.body.appendChild(_0x43d040);
          }
        } else {
          {
            _0xb92ab5.style.display = "flex";
            _0x43d040.style.display = "block";
          }
        }
        const _0x12e19e = document.getElementById("helper-content");
        const _0x165564 = document.getElementById("helper-selected-name");
        const _0xac07e0 = document.getElementById("helper-cancel");
        const _0x2d4f3a = document.getElementById("helper-confirm");
        const _0x505bd8 = document.getElementById("helper-search-input");
        const _0x377373 = document.getElementById("helper-close");
        if (!_0x12e19e || !_0x165564 || !_0xac07e0 || !_0x2d4f3a) {
          {
            console.error("无法找到必要的DOM元素");
            _0x37bc18.showtip("界面加载失败", "error");
            return;
          }
        }
        const _0x57fb28 = _0xac07e0.cloneNode(true);
        _0xac07e0.parentNode.replaceChild(_0x57fb28, _0xac07e0);
        const _0x1f4314 = _0x2d4f3a.cloneNode(true);
        _0x2d4f3a.parentNode.replaceChild(_0x1f4314, _0x2d4f3a);
        const _0x3a6997 = _0x505bd8.cloneNode(true);
        _0x505bd8.parentNode.replaceChild(_0x3a6997, _0x505bd8);
        const _0x98b6bf = _0x377373 ? _0x377373.cloneNode(true) : null;
        _0x377373 && _0x98b6bf && _0x377373.parentNode.replaceChild(_0x98b6bf, _0x377373);
        const _0x3cfbca = _0x57fb28;
        const _0xee2b58 = _0x1f4314;
        const _0xe4649e = _0x3a6997;
        const _0x3439a0 = _0x98b6bf;
        const _0x6ff7b5 = String((this.state.helperSelectionByCarId || {})[String(_0x53d2fe.carId)] || "");
        let _0x37c1d6 = _0x6ff7b5;
        const _0x1fe89d = _0x2d79bf => {
          {
            const _0x3890a0 = Number(_0x2d79bf || 0);
            if (_0x3890a0 >= 100000000) {
              return (_0x3890a0 / 100000000).toFixed(2) + "亿";
            }
            if (_0x3890a0 >= 10000) {
              return (_0x3890a0 / 10000).toFixed(2) + "万";
            }
            return String(_0x3890a0);
          }
        };
        const _0x4c3480 = _0x61a0ee => {
          {
            try {
              {
                _0x12e19e.querySelectorAll("div[data-mid]").forEach(_0x312e72 => {
                  {
                    _0x312e72.style.background = "rgba(255,255,255,0.06)";
                    _0x312e72.style.border = "";
                    const _0x55188f = _0x312e72.querySelector("span.__sel_dot");
                    if (_0x55188f) {
                      _0x55188f.style.background = "#6b7280";
                    }
                  }
                });
              }
            } catch (_0x457167) {
              {
                console.error("重置UI失败:", _0x457167);
              }
            }
            if (_0x61a0ee) {
              {
                try {
                  {
                    const _0x5532cf = _0x12e19e.querySelector("div[data-mid=\"" + _0x61a0ee + "\"]");
                    if (_0x5532cf) {
                      {
                        _0x5532cf.style.transition = "background .18s ease, border-color .18s ease";
                        _0x5532cf.style.background = "rgba(37,99,235,0.18)";
                        _0x5532cf.style.border = "1px solid #2563eb";
                        const _0x459081 = _0x5532cf.querySelector("span.__sel_dot");
                        if (_0x459081) {
                          _0x459081.style.background = "#22c55e";
                        }
                        const _0x3890b5 = this.getMemberName(_0x61a0ee) || _0x61a0ee;
                        _0x165564.textContent = _0x3890b5;
                        _0xee2b58.disabled = false;
                        _0xee2b58.textContent = "确定（" + _0x3890b5 + "）";
                        _0xee2b58.style.opacity = "1";
                        _0xee2b58.style.cursor = "pointer";
                      }
                    }
                  }
                } catch (_0x9aae0d) {
                  console.error("更新选中UI失败:", _0x9aae0d);
                }
              }
            } else {
              {
                _0x165564.textContent = "未选择";
                _0xee2b58.disabled = true;
                _0xee2b58.textContent = "确定";
                _0xee2b58.style.opacity = "0.7";
                _0xee2b58.style.cursor = "not-allowed";
              }
            }
          }
        };
        const _0x28ad69 = (_0x427184 = "", _0x4e8e12 = {}, _0x2bb4f2 = {}) => {
          {
            try {
              {
                const _0x3ad792 = String(_0x427184 || "").trim().toLowerCase();
                const _0x34a6bc = Object.keys(_0x4e8e12).filter(_0x1411ee => {
                  {
                    try {
                      {
                        const _0x1a357b = _0x4e8e12[_0x1411ee];
                        const _0x1138f9 = _0x1a357b?.["name"] || _0x1a357b?.["nickname"] || "";
                        return !_0x3ad792 || String(_0x1411ee).includes(_0x3ad792) || String(_0x1138f9).toLowerCase().includes(_0x3ad792);
                      }
                    } catch (_0x4e024a) {
                      {
                        return false;
                      }
                    }
                  }
                }).map(_0x1267eb => {
                  {
                    try {
                      {
                        const _0x408331 = _0x4e8e12[_0x1267eb];
                        const _0x1f3430 = Number(_0x2bb4f2[String(_0x1267eb)] ?? 0);
                        const _0x15c425 = _0x408331?.["name"] || _0x408331?.["nickname"] || _0x1267eb;
                        const _0x13d01f = Number(_0x408331?.["power"] ?? _0x408331?.["s_power"] ?? _0x408331?.["custom"]?.["s_power"] ?? 0);
                        const _0xba7098 = _0x1f3430 >= 4;
                        const _0x4ae9b1 = _0x408331?.["headImg"] || _0x408331?.["avatar"] || "/icons/xiaoyugan.png";
                        const _0x11c95a = _0x37c1d6 === _0x1267eb ? "#22c55e" : "#6b7280";
                        return "<div data-mid=\"" + _0x1267eb + "\" data-disabled=\"" + (_0xba7098 ? "1" : "") + "\" style=\"display:flex; align-items:center; justify-content:space-between; padding:6px; margin:4px 0; background: rgba(249,250,251,0.8); border-radius:6px; border:1px solid #e5e7eb; cursor:" + (_0xba7098 ? "not-allowed" : "pointer") + ";\">\n                                    <div style=\"display:flex; align-items:center; gap:8px;\">\n                                      <img src=\"" + _0x4ae9b1 + "\" onerror=\"this.src='/icons/xiaoyugan.png'\" style=\"width:22px;height:22px;border-radius:50%;object-fit:cover;\" />\n                                      <span class=\"__name\">" + _0x15c425 + "</span>\n                                    </div>\n                                    <div style=\"display:flex; align-items:center; gap:8px;\">\n                                      <span style=\"font-size:12px; color:#6b7280;\">战力 " + _0x1fe89d(_0x13d01f) + "</span>\n                                      <span style=\"font-size:12px; color:" + (_0xba7098 ? "#f59e0b" : "#6b7280") + ";\">当前护送 " + _0x1f3430 + "/4</span>\n                                      <span class=\"__sel_dot\" style=\"width:10px; height:10px; border-radius:50%; background:" + _0x11c95a + "\"></span>\n                                    </div>\n                                </div>";
                      }
                    } catch (_0x2437ab) {
                      {
                        return "";
                      }
                    }
                  }
                }).filter(_0x5b45d0 => _0x5b45d0).join("");
                _0x12e19e.innerHTML = _0x34a6bc || "<div style=\"padding:6px;\">俱乐部成员为空或加载失败</div>";
                _0x12e19e.querySelectorAll("div[data-mid]").forEach(_0x123d1b => {
                  _0x123d1b.addEventListener("click", function () {
                    {
                      const _0x66e5 = this.getAttribute("data-disabled") === "1";
                      if (_0x66e5) {
                        return _0x37bc18.showtip("该成员当前护卫次数已满", "warning");
                      }
                      _0x37c1d6 = this.getAttribute("data-mid") || "";
                      _0x4c3480(_0x37c1d6);
                    }
                  });
                });
                _0x4c3480(_0x37c1d6);
              }
            } catch (_0x1bb951) {
              console.error("渲染列表失败:", _0x1bb951);
              _0x12e19e.innerHTML = "<div style=\"padding:6px; color:#f43f5e;\">加载失败，请重试</div>";
            }
          }
        };
        const _0xe51b2d = () => {
          {
            try {
              {
                if (_0x43d040) {
                  _0x43d040.style.display = "none";
                }
                if (_0xb92ab5) {
                  _0xb92ab5.style.display = "none";
                }
              }
            } catch (_0x3857d8) {
              {
                console.error("关闭弹窗失败:", _0x3857d8);
              }
            }
          }
        };
        _0xe4649e.oninput = function () {
          {
            clearTimeout(_0xe4649e.searchTimer);
            _0xe4649e.searchTimer = setTimeout(() => {
              _0x41edbf(this.value);
            }, 300);
          }
        };
        _0x3cfbca.onclick = _0xe51b2d;
        if (_0x3439a0) {
          _0x3439a0.onclick = _0xe51b2d;
        }
        _0xee2b58.onclick = () => {
          {
            try {
              {
                if (_0x37c1d6) {
                  {
                    (this.state.helperSelectionByCarId || (this.state.helperSelectionByCarId = {}))[String(_0x53d2fe.carId)] = String(_0x37c1d6);
                    const _0x153111 = this.getMemberName(_0x37c1d6) || _0x37c1d6;
                    _0x37bc18.showtip("已设置护卫：" + _0x153111, "success");
                  }
                } else {
                  (this.state.helperSelectionByCarId || (this.state.helperSelectionByCarId = {}))[String(_0x53d2fe.carId)] = 0;
                  _0x37bc18.showtip("已取消护卫", "info");
                }
                _0xe51b2d();
              }
            } catch (_0x3d1158) {
              {
                console.error("确认选择失败:", _0x3d1158);
                _0x37bc18.showtip("设置护卫失败", "error");
              }
            }
          }
        };
        if (_0xb92ab5) {
          {
            _0xb92ab5.style.cursor = "pointer";
            _0xb92ab5.onclick = function (_0x46adb1) {
              {
                if (_0x46adb1.target === this) {
                  _0xe51b2d();
                }
              }
            };
          }
        }
        const _0x41edbf = (_0x3d89ce = "") => {
          _0x12e19e.innerHTML = "<div style=\"padding:6px; text-align:center;\">加载中...</div>";
          Promise.all([new Promise(_0x2ef57f => {
            {
              try {
                {
                  const _0x366358 = this.ensureLegionMembers();
                  _0x366358 && typeof _0x366358.then === "function" ? _0x366358.then(_0x277e14 => _0x2ef57f(_0x277e14 || {})).catch(() => _0x2ef57f({})) : _0x2ef57f(_0x366358 || {});
                }
              } catch (_0x101311) {
                console.error("获取成员数据出错:", _0x101311);
                _0x2ef57f({});
              }
            }
          }), new Promise(_0xc8c7ef => {
            {
              try {
                {
                  _0x37bc18.sendCommand("car_getmemberhelpingcnt").then(_0x5e7cf4 => {
                    {
                      try {
                        {
                          let _0x35671c = {};
                          let _0x19687a = {};
                          if (_0x5e7cf4) {
                            {
                              if (_0x5e7cf4._rawData?.["body"]?.["memberHelpingCntMap"]) {
                                _0x19687a = _0x5e7cf4._rawData.body.memberHelpingCntMap;
                              } else {
                                if (_0x5e7cf4._rawData?.["memberHelpingCntMap"]) {
                                  _0x19687a = _0x5e7cf4._rawData.memberHelpingCntMap;
                                } else {
                                  if (_0x5e7cf4.data?.["body"]?.["memberHelpingCntMap"]) {
                                    _0x19687a = _0x5e7cf4.data.body.memberHelpingCntMap;
                                  } else {
                                    if (_0x5e7cf4.data?.["memberHelpingCntMap"]) {
                                      _0x19687a = _0x5e7cf4.data.memberHelpingCntMap;
                                    } else {
                                      if (_0x5e7cf4.body?.["memberHelpingCntMap"]) {
                                        _0x19687a = _0x5e7cf4.body.memberHelpingCntMap;
                                      } else {
                                        if (_0x5e7cf4.memberHelpingCntMap) {
                                          _0x19687a = _0x5e7cf4.memberHelpingCntMap;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          if (Array.isArray(_0x19687a)) {
                            {
                              _0x19687a.forEach(_0x4d1a93 => {
                                {
                                  const _0x1959e4 = String(_0x4d1a93?.["roleId"] ?? _0x4d1a93?.["id"] ?? "");
                                  if (_0x1959e4) {
                                    _0x35671c[_0x1959e4] = Number(_0x4d1a93?.["cnt"] ?? _0x4d1a93?.["count"] ?? 0);
                                  }
                                }
                              });
                            }
                          } else {
                            typeof _0x19687a === "object" && _0x19687a && Object.keys(_0x19687a).forEach(_0x2043d5 => {
                              {
                                try {
                                  {
                                    const _0x32653a = _0x19687a[_0x2043d5];
                                    _0x35671c[String(_0x2043d5)] = Number(typeof _0x32653a === "object" ? _0x32653a?.["cnt"] ?? _0x32653a?.["count"] ?? 0 : _0x32653a ?? 0);
                                  }
                                } catch (_0x36074b) {}
                              }
                            });
                          }
                          _0xc8c7ef(_0x35671c);
                        }
                      } catch (_0x201997) {
                        {
                          console.error("解析护卫次数失败:", _0x201997);
                          _0xc8c7ef({});
                        }
                      }
                    }
                  }).catch(_0x4ac80d => {
                    {
                      console.error("获取护卫次数失败:", _0x4ac80d);
                      _0xc8c7ef({});
                    }
                  });
                }
              } catch (_0x52b3fa) {
                console.error("创建获取护卫次数Promise失败:", _0x52b3fa);
                _0xc8c7ef({});
              }
            }
          })]).then(([_0x3688a9, _0x338c7b]) => {
            {
              _0x28ad69(_0x3d89ce, _0x3688a9 || {}, _0x338c7b || {});
            }
          }).catch(_0x538a75 => {
            {
              console.error("加载数据失败:", _0x538a75);
              _0x12e19e.innerHTML = "<div style=\"padding:6px; color:#f43f5e;\">加载失败，请重试</div>";
            }
          });
        };
        _0x41edbf("");
      }
    },
    openMembersDialog() {
      {
        try {
          {
            let _0x258592 = document.getElementById("members-dialog");
            let _0x2aa032 = document.getElementById("global-ui-overlay");
            let _0x82af0;
            let _0x6b022d;
            let _0x20a836;
            if (!_0x258592) {
              {
                if (!_0x2aa032) {
                  {
                    _0x2aa032 = document.createElement("div");
                    _0x2aa032.id = "global-ui-overlay";
                    _0x2aa032.style.cssText = "\n                        position: fixed; top: 0; left: 0; right: 0; bottom: 0;\n                        background: rgba(0,0,0,0.7); backdrop-filter: blur(4px); z-index: 99999;\n                        display: flex; align-items: center; justify-content: center;\n                    ";
                    document.body.appendChild(_0x2aa032);
                  }
                } else {
                  {
                    _0x2aa032.style.display = "flex";
                  }
                }
                _0x258592 = document.createElement("div");
                _0x258592.id = "members-dialog";
                _0x258592.style.cssText = "\n                    position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%);\n                    background: #ffffff;\n                    color: #333333; border: 1px solid #e5e7eb; outline: 1px solid rgba(37,99,235,0.1);\n                    border-radius: 12px; padding: 12px; width: 86vw; max-width: 420px;\n                    box-shadow: 0 16px 48px rgba(0,0,0,0.1); box-sizing: border-box;\n                    z-index: 100000;\n                ";
                _0x258592.innerHTML = "\n                    <div style=\"display:flex; align-items:center; justify-content:space-between; padding:10px 12px; font-weight:700;\">\n                      <div style=\"font-weight:700; letter-spacing:.3px; color:#333333;\">俱乐部成员</div>\n                      <button id=\"members-close\" style=\"padding:4px 8px; border-radius:4px; border:none; background:#e5e7eb; color:#333333; cursor:pointer; font-size:12px;\">关闭</button>\n                    </div>\n                    <div style=\"padding:6px 8px; border-bottom: 1px solid #e5e7eb; margin:0 1px 6px 1px;\">\n                      <input id=\"members-search-input\" placeholder=\"按名称或ID搜索\" style=\"width:100%; padding:7px 10px; border-radius:8px; border: 1px solid #d1d5db; background: #ffffff; color: #333333; box-sizing: border-box;\" />\n                    </div>\n                    <div id=\"members-content\" style=\"max-height:240px; overflow:auto; border:1px solid #e5e7eb; border-radius:10px; padding:6px 8px; background:#ffffff; color:#333333;\">加载中...</div>\n                ";
                document.body.appendChild(_0x258592);
                _0x82af0 = document.getElementById("members-content");
                _0x6b022d = document.getElementById("members-search-input");
                _0x20a836 = document.getElementById("members-close");
                const _0x19db61 = () => {
                  {
                    try {
                      {
                        if (_0x258592) {
                          _0x258592.style.display = "none";
                        }
                        if (_0x2aa032) {
                          _0x2aa032.style.display = "none";
                        }
                      }
                    } catch (_0xe9efab) {
                      console.error("关闭弹窗失败:", _0xe9efab);
                    }
                  }
                };
                if (_0x20a836) {
                  {
                    _0x20a836.onclick = _0x19db61;
                  }
                }
                _0x2aa032 && (_0x2aa032.onclick = function (_0x10a363) {
                  {
                    if (_0x10a363.target === this) {
                      _0x19db61();
                    }
                  }
                });
              }
            } else {
              {
                _0x258592.style.display = "block";
                if (_0x2aa032) {
                  _0x2aa032.style.display = "flex";
                }
                _0x82af0 = document.getElementById("members-content");
                _0x6b022d = document.getElementById("members-search-input");
                _0x20a836 = document.getElementById("members-close");
              }
            }
            if (!_0x82af0) {
              {
                console.error("未找到内容容器元素");
                return;
              }
            }
            const _0x364e96 = _0x33d994 => {
              {
                const _0x36b2dd = Number(_0x33d994 || 0);
                if (_0x36b2dd >= 100000000) {
                  return (_0x36b2dd / 100000000).toFixed(2) + "亿";
                }
                if (_0x36b2dd >= 10000) {
                  return (_0x36b2dd / 10000).toFixed(2) + "万";
                }
                return String(_0x36b2dd);
              }
            };
            const _0x32cf02 = (_0xafec8d = "", _0xac13c0 = {}, _0x52615d = {}) => {
              {
                try {
                  {
                    const _0x49e733 = String(_0xafec8d || "").trim().toLowerCase();
                    const _0x2dffca = Object.keys(_0xac13c0).filter(_0x3d817c => {
                      {
                        const _0x4410c1 = _0xac13c0[_0x3d817c];
                        const _0x1c56bd = _0x4410c1?.["name"] || _0x4410c1?.["nickname"] || "";
                        return !_0x49e733 || String(_0x3d817c).includes(_0x49e733) || String(_0x1c56bd).toLowerCase().includes(_0x49e733);
                      }
                    }).map(_0x5e686d => {
                      {
                        const _0x1da489 = _0xac13c0[_0x5e686d];
                        const _0x4d7cab = Number(_0x52615d[String(_0x5e686d)] ?? 0);
                        const _0x4c014d = _0x1da489?.["name"] || _0x1da489?.["nickname"] || _0x5e686d;
                        const _0x4b58f1 = Number(_0x1da489?.["power"] ?? _0x1da489?.["s_power"] ?? _0x1da489?.["custom"]?.["s_power"] ?? 0);
                        const _0x3d1848 = _0x1da489?.["headImg"] || _0x1da489?.["avatar"] || "/icons/xiaoyugan.png";
                        const _0x136b16 = _0x1da489?.["role"] || _0x1da489?.["position"] || "";
                        const _0x2d4f23 = _0x136b16 ? "<span style=\"font-size:11px; color:#60a5fa; margin-left:6px;\">" + _0x136b16 + "</span>" : "";
                        return "<div data-mid=\"" + _0x5e686d + "\" style=\"display:flex; align-items:center; padding:6px; margin:4px 0; background: rgba(249,250,251,0.8); border-radius:6px; border:1px solid #e5e7eb;\">\n                                    <div style=\"display:flex; align-items:center; gap:8px; flex:1;\">\n                                      <img src=\"" + _0x3d1848 + "\" onerror=\"this.src='/icons/xiaoyugan.png'\" style=\"width:22px;height:22px;border-radius:50%;object-fit:cover;\" />\n                                      <div style=\"flex:1; overflow:hidden;\">\n                                        <div style=\"display:flex; align-items:center;\">\n                                          <span style=\"white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:120px; display:inline-block;\">" + _0x4c014d + "</span>\n                                          " + _0x2d4f23 + "\n                                        </div>\n                                      </div>\n                                    </div>\n                                    <div style=\"display:flex; align-items:center; gap:12px; margin-left:8px;\">\n                                      <span style=\"font-size:12px; color:#6b7280;\">战力 " + _0x364e96(_0x4b58f1) + "</span>\n                                      <div style=\"font-size:12px; color:" + (_0x4d7cab >= 4 ? "#f59e0b" : "#6b7280") + ";\">当前护送 " + _0x4d7cab + "/4</div>\n                                    </div>\n                                </div>";
                      }
                    }).join("");
                    _0x82af0.innerHTML = _0x2dffca || "<div style=\"padding:6px;\">俱乐部成员为空或加载失败</div>";
                  }
                } catch (_0x364d80) {
                  {
                    console.error("渲染成员列表失败:", _0x364d80);
                    _0x82af0.innerHTML = "<div style=\"padding:6px; color:#f43f5e;\">加载失败，请重试</div>";
                  }
                }
              }
            };
            const _0x40dcbd = (_0x3b8455 = "") => {
              {
                _0x82af0.innerHTML = "<div style=\"padding:6px; text-align:center;\">加载中...</div>";
                Promise.all([Promise.resolve().then(() => this.ensureLegionMembers()), new Promise(_0x2c1fce => {
                  {
                    _0x37bc18.sendCommand("car_getmemberhelpingcnt").then(_0x4017b2 => {
                      {
                        try {
                          {
                            let _0x2a68bb = {};
                            let _0x2ec022 = {};
                            if (_0x4017b2) {
                              {
                                if (_0x4017b2._rawData?.["body"]?.["memberHelpingCntMap"]) {
                                  _0x2ec022 = _0x4017b2._rawData.body.memberHelpingCntMap;
                                } else {
                                  if (_0x4017b2._rawData?.["memberHelpingCntMap"]) {
                                    _0x2ec022 = _0x4017b2._rawData.memberHelpingCntMap;
                                  } else {
                                    if (_0x4017b2.data?.["body"]?.["memberHelpingCntMap"]) {
                                      _0x2ec022 = _0x4017b2.data.body.memberHelpingCntMap;
                                    } else {
                                      if (_0x4017b2.data?.["memberHelpingCntMap"]) {
                                        _0x2ec022 = _0x4017b2.data.memberHelpingCntMap;
                                      } else {
                                        if (_0x4017b2.body?.["memberHelpingCntMap"]) {
                                          _0x2ec022 = _0x4017b2.body.memberHelpingCntMap;
                                        } else {
                                          if (_0x4017b2.memberHelpingCntMap) {
                                            _0x2ec022 = _0x4017b2.memberHelpingCntMap;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            if (Array.isArray(_0x2ec022)) {
                              {
                                _0x2ec022.forEach(_0x1b22d3 => {
                                  {
                                    const _0x41b5ae = String(_0x1b22d3?.["roleId"] ?? _0x1b22d3?.["id"] ?? "");
                                    if (_0x41b5ae) {
                                      _0x2a68bb[_0x41b5ae] = Number(_0x1b22d3?.["cnt"] ?? _0x1b22d3?.["count"] ?? 0);
                                    }
                                  }
                                });
                              }
                            } else {
                              if (typeof _0x2ec022 === "object" && _0x2ec022) {
                                {
                                  Object.keys(_0x2ec022).forEach(_0x170f8b => {
                                    {
                                      try {
                                        {
                                          const _0x35fbe4 = _0x2ec022[_0x170f8b];
                                          _0x2a68bb[String(_0x170f8b)] = Number(typeof _0x35fbe4 === "object" ? _0x35fbe4?.["cnt"] ?? _0x35fbe4?.["count"] ?? 0 : _0x35fbe4 ?? 0);
                                        }
                                      } catch (_0x46e973) {}
                                    }
                                  });
                                }
                              }
                            }
                            _0x2c1fce(_0x2a68bb);
                          }
                        } catch (_0x17bb56) {
                          console.error("解析护卫次数失败:", _0x17bb56);
                          _0x2c1fce({});
                        }
                      }
                    }).catch(_0x41d6ee => {
                      {
                        console.error("获取护卫次数失败:", _0x41d6ee);
                        _0x2c1fce({});
                      }
                    });
                  }
                })]).then(([_0xd52f0b, _0x17b536]) => {
                  {
                    _0x32cf02(_0x3b8455, _0xd52f0b || {}, _0x17b536 || {});
                  }
                }).catch(_0x28c1b8 => {
                  {
                    console.error("加载成员数据失败:", _0x28c1b8);
                    _0x82af0.innerHTML = "<div style=\"padding:6px; color:#f43f5e;\">加载失败，请重试</div>";
                  }
                });
              }
            };
            if (_0x6b022d) {
              {
                _0x6b022d.oninput = function () {
                  {
                    clearTimeout(_0x6b022d.searchTimer);
                    _0x6b022d.searchTimer = setTimeout(() => {
                      {
                        _0x40dcbd(this.value);
                      }
                    }, 300);
                  }
                };
              }
            }
            _0x40dcbd("");
          }
        } catch (_0x196b81) {
          {
            console.error("打开成员列表失败:", _0x196b81);
            _0x37bc18.showtip("打开成员列表失败", "error");
          }
        }
      }
    },
    async sendCar(_0x1716e8) {
      {
        if (!this.isCarEventActive()) {
          return _0x37bc18.showtip("当前非活动时间 (周一至周三 6:00-20:00)", "error");
        }
        if (this.state.sendCount >= 4) {
          return _0x37bc18.showtip("今日发车次数已用完", "error");
        }
        const _0x5c13ea = this.state.fullCarData.find(_0x5c095a => String(_0x5c095a.carId) === String(_0x1716e8));
        if (!_0x5c13ea) {
          return _0x37bc18.showtip("车辆不存在", "error");
        }
        const _0x3db655 = Number((this.state.helperSelectionByCarId || {})[String(_0x1716e8)] || 0);
        if (await this.performCarAction("send", _0x1716e8, false, _0x3db655)) {
          {
            if (this.state.helperSelectionByCarId && this.state.helperSelectionByCarId[String(_0x1716e8)]) {
              {
                delete this.state.helperSelectionByCarId[String(_0x1716e8)];
              }
            }
            setTimeout(() => this.queryClubCars(), 300);
          }
        }
      }
    }
  };
  _0x4ebb3d.init();
  async function _0x512e0a(_0x4bc6fa) {
    {
      if (_0x4bc6fa) {
        _0x4bc6fa.textContent = "🔄 开始执行藏品图鉴升级...";
      }
      const _0x2d2f0d = 100;
      let _0x2d043b = 0;
      let _0x36eb75 = 0;
      const _0x4e0b07 = () => {
        {
          const _0x28b3d3 = [];
          const _0x360e6d = new Set();
          function _0x3cc94d(_0x492f90, _0x177a14, _0x9dfa5b = 2) {
            {
              const _0x461016 = _0x492f90 + "_" + _0x177a14 + "_" + _0x9dfa5b;
              if (!_0x360e6d.has(_0x461016)) {
                {
                  const _0x124bad = {
                    seriesId: _0x492f90,
                    id: _0x177a14,
                    poolType: _0x9dfa5b
                  };
                  _0x28b3d3.push(_0x124bad);
                  _0x360e6d.add(_0x461016);
                }
              }
            }
          }
          for (let _0x50328e = 1; _0x50328e <= 12; _0x50328e++) {
            {
              _0x3cc94d(2, _0x50328e, 1);
            }
          }
          for (let _0x5ce3b5 = 1001; _0x5ce3b5 <= 1015; _0x5ce3b5++) {
            _0x3cc94d(3, _0x5ce3b5, 1);
          }
          const _0x5b407b = [10103, 11302, 10903, 10206, 11705, 10302, 10403, 11005, 11403, 11804, 10503, 10603, 11102, 11504, 10702, 10805, 11204, 11604, 12005, 11904];
          for (const _0x5930b2 of _0x5b407b) {
            _0x3cc94d(40001, _0x5930b2, 3);
          }
          for (let _0x1f171e = 2001; _0x1f171e <= 2020; _0x1f171e++) {
            {
              _0x3cc94d(6, _0x1f171e, 1);
            }
          }
          for (let _0x515ada = 3001; _0x515ada <= 3010; _0x515ada++) {
            _0x3cc94d(6, _0x515ada, 1);
          }
          const _0x39df09 = {
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
          for (const _0x23a77e in _0x39df09) {
            {
              const _0x587f21 = parseInt(_0x23a77e, 10);
              const _0x46527f = _0x39df09[_0x23a77e];
              let _0x2ab763 = Infinity;
              let _0x2002a2 = -Infinity;
              const _0x13d699 = new Set();
              for (const _0xf192bf of _0x46527f) {
                {
                  if (Math.floor(_0xf192bf / 100) === _0x587f21 && _0xf192bf % 100 > 0 && _0xf192bf % 100 < 100) {
                    {
                      const _0x536c65 = _0xf192bf % 100;
                      _0x2ab763 = Math.min(_0x2ab763, _0x536c65);
                      _0x2002a2 = Math.max(_0x2002a2, _0x536c65);
                    }
                  } else {
                    _0x13d699.add(_0xf192bf);
                  }
                }
              }
              if (_0x2ab763 !== Infinity && _0x2002a2 !== -Infinity) {
                {
                  for (let _0x4dd33b = _0x2ab763; _0x4dd33b <= _0x2002a2; _0x4dd33b++) {
                    {
                      _0x3cc94d(_0x587f21, _0x587f21 * 100 + _0x4dd33b);
                    }
                  }
                }
              }
              for (const _0x585b1c of _0x13d699) {
                _0x3cc94d(_0x587f21, _0x585b1c);
              }
            }
          }
          return _0x28b3d3.sort((_0x350cc9, _0x23e30a) => {
            {
              if (_0x350cc9.seriesId !== _0x23e30a.seriesId) {
                return _0x350cc9.seriesId - _0x23e30a.seriesId;
              }
              if (_0x350cc9.id !== _0x23e30a.id) {
                return _0x350cc9.id - _0x23e30a.id;
              }
              return _0x350cc9.poolType - _0x23e30a.poolType;
            }
          });
        }
      };
      const _0x321870 = _0x4e0b07();
      const _0x268a54 = _0x321870.length;
      _0x4bc6fa.textContent = "🔄 准备领取 " + _0x268a54 + " 个图鉴奖励...";
      for (let _0x5596f6 = 0; _0x5596f6 < _0x321870.length; _0x5596f6++) {
        {
          const _0x5bca86 = _0x321870[_0x5596f6];
          const _0x4fef16 = _0x5596f6 + 1;
          _0x4bc6fa.textContent = "🔄 (" + _0x4fef16 + "/" + _0x268a54 + ") 处理系列: " + _0x5bca86.seriesId + ", ID: " + _0x5bca86.id + ", 类型: " + _0x5bca86.poolType;
          try {
            {
              const _0x592c65 = {
                id: _0x5bca86.id,
                isAll: false,
                poolType: _0x5bca86.poolType,
                seriesId: _0x5bca86.seriesId
              };
              const _0x5d2171 = await _0x37bc18.sendCommand("collection_activate", _0x592c65);
              if (_0x5d2171.code === 0) {
                {
                  _0x2d043b++;
                }
              } else {
                {
                  _0x36eb75++;
                }
              }
            }
          } catch (_0x53f187) {
            {
              _0x36eb75++;
              console.error("处理图鉴失败:", _0x53f187);
            }
          }
          await _0x37bc18.delay(_0x2d2f0d / 1000);
        }
      }
      _0x4bc6fa.textContent = "✅ 图鉴奖励领取完成，开始执行额外领取...";
      const _0x41d23e = {
        seriesId: 2,
        poolType: 1
      };
      const _0x149ff1 = {
        seriesId: 3,
        poolType: 1
      };
      const _0x5bde65 = {
        seriesId: 40001,
        poolType: 3
      };
      const _0x4ffa03 = [_0x41d23e, _0x149ff1, _0x5bde65];
      for (const _0x2c23fd of _0x4ffa03) {
        {
          try {
            {
              _0x4bc6fa.textContent = "🔄 正在领取系列奖励 (seriesId: " + _0x2c23fd.seriesId + ")...";
              const _0x30d357 = {
                seriesId: _0x2c23fd.seriesId,
                isAll: true,
                poolType: _0x2c23fd.poolType
              };
              const _0x22f1e7 = await _0x37bc18.sendCommand("collection_claimseries", _0x30d357);
              if (_0x22f1e7.code === 0) {
                {
                  _0x2d043b++;
                }
              }
            }
          } catch (_0x1292eb) {
            console.error("系列奖励 (" + _0x2c23fd.seriesId + ") 领取失败:", _0x1292eb);
          }
          await _0x37bc18.delay(_0x2d2f0d / 1000);
        }
      }
      try {
        {
          _0x4bc6fa.textContent = "🔄 正在领取总览奖励...";
          const _0xb3c800 = await _0x37bc18.sendCommand("collection_claimtotal", {});
          if (_0xb3c800.code === 0) {
            {
              _0x2d043b++;
            }
          }
        }
      } catch (_0x333a9c) {
        {
          console.error("总览奖励领取失败:", _0x333a9c);
        }
      }
      await _0x37bc18.delay(_0x2d2f0d / 1000);
      _0x4bc6fa.textContent = "🔄 开始执行30次升级操作...";
      for (let _0x3bf109 = 1; _0x3bf109 <= 30; _0x3bf109++) {
        {
          _0x4bc6fa.textContent = "🔄 升级操作 " + _0x3bf109 + "/30";
          try {
            {
              const _0x2d2b4c = {
                id: 1001,
                isAll: false,
                poolType: 1,
                seriesId: 3
              };
              await _0x37bc18.sendCommand("collection_activate", _0x2d2b4c);
            }
          } catch (_0x42330b) {
            {
              console.log("升级第 " + _0x3bf109 + " 次失败:", _0x42330b.message);
            }
          }
          await _0x37bc18.delay(0.05);
        }
      }
      const _0x54f304 = "✅ 藏品图鉴升级完成！\n成功: " + _0x2d043b + " 次 | 失败: " + _0x36eb75 + " 次\n已完成全部30次升级操作";
      _0x4bc6fa.textContent = _0x54f304;
    }
  }
  let _0x19ad01 = false;
  let _0x11f885 = false;
  async function _0x4ea6c1(_0x595511, _0x5db38c) {
    if (_0x19ad01 && (_0x595511.startsWith("daily-task-") || _0x595511 === "one-key-100")) {
      {
        _0x37bc18.showtip("已有任务在执行，请稍候", "info");
        return;
      }
    }
    const _0x2be9b9 = _0x5db38c.closest(".task-section").querySelector(".status");
    const _0x4c5901 = _0x5db38c.textContent;
    const _0x3d2bde = _0x4090b4.querySelectorAll(".task-btn, input[type=\"checkbox\"]");
    if (_0x595511 !== "toggle-ws-monitor" && _0x595511 !== "clear-ws-log" && _0x595511 !== "copy-all-ws-log") {
      {
        _0x5db38c.disabled = true;
        _0x5db38c.textContent = "执行中...";
        if (_0x2be9b9) {
          _0x2be9b9.textContent = "🚀 执行中...";
        }
      }
    }
    (_0x595511 === "execute-daily-checked" || _0x595511 === "one-key-100") && (_0x19ad01 = true, _0x11f885 = false, _0x3d2bde.forEach(_0x106ca1 => _0x106ca1.disabled = true));
    try {
      const _0x2befd1 = window.__require?.("data-index");
      if (_0x595511 === "toggle-ws-monitor") {
        {
          if (WSModule.isMonitoring) {
            WSModule.stop();
          } else {
            WSModule.start();
          }
          return;
        }
      }
      if (_0x595511 === "clear-ws-log") {
        {
          WSModule.clear();
          return;
        }
      }
      if (_0x595511 === "copy-all-ws-log") {
        {
          WSModule.copyAll();
          return;
        }
      }
      const _0x528145 = window.__require?.("ServerData");
      if (_0x595511.startsWith("start-fishing-")) {
        const _0x43efcb = parseInt(_0x595511.split("-")[2]);
        const _0x270acc = parseInt(_0x5db38c.parentElement.querySelector("input").value) || 0;
        const _0x1039eb = _0x43efcb === 2 ? "高级钓鱼" : "普通钓鱼";
        if (_0x43efcb === 1 && _0x270acc > 0) {
          let _0x349a84 = 0;
          const _0x2abb92 = Math.min(_0x270acc, 3);
          for (let _0x217d80 = 0; _0x217d80 < _0x2abb92; _0x217d80++) {
            try {
              {
                const _0x37e8a6 = {
                  lotteryNumber: 1,
                  newFree: true,
                  type: 1
                };
                await _0x2befd1.ArtifactService.lottery(_0x37e8a6);
              }
            } catch (_0x1a73d0) {
              console.log("单次钓鱼尝试失败（正常现象）");
            }
            _0x349a84++;
            _0x2be9b9.textContent = _0x1039eb + " " + _0x349a84 + "/" + _0x270acc;
            await _0x37bc18.delay(0.2);
          }
          const _0x5b7d51 = _0x270acc - _0x2abb92;
          if (_0x5b7d51 > 0) {
            for (let _0x52e08a = 0; _0x52e08a < Math.ceil(_0x5b7d51 / 10); _0x52e08a++) {
              const _0x415bd4 = Math.min(10, _0x5b7d51 - _0x52e08a * 10);
              if (_0x415bd4 <= 0) {
                break;
              }
              const _0x132675 = {
                lotteryNumber: _0x415bd4,
                newFree: true,
                type: 1
              };
              await _0x2befd1.ArtifactService.lottery(_0x132675);
              _0x349a84 += _0x415bd4;
              _0x2be9b9.textContent = _0x1039eb + " " + Math.min(_0x349a84, _0x270acc) + "/" + _0x270acc;
            }
          }
        } else {
          if (_0x43efcb === 2 && _0x270acc > 0) {
            for (let _0x52e0c4 = 0; _0x52e0c4 < Math.ceil(_0x270acc / 10); _0x52e0c4++) {
              const _0x19b1ff = Math.min(10, _0x270acc - _0x52e0c4 * 10);
              if (_0x19b1ff <= 0) {
                break;
              }
              const _0x574a8c = {
                lotteryNumber: _0x19b1ff,
                newFree: true,
                type: 2
              };
              await _0x2befd1.ArtifactService.lottery(_0x574a8c);
              _0x2be9b9.textContent = _0x1039eb + " " + Math.min((_0x52e0c4 + 1) * 10, _0x270acc) + "/" + _0x270acc;
            }
          }
        }
        _0x2be9b9.textContent = "✅ " + _0x1039eb + "完成";
      } else {
        if (_0x595511 === "recruit") {
          const _0x2f1905 = parseInt(_0x5db38c.parentElement.querySelector("input").value);
          if (_0x2f1905 <= 0) {
            _0x2be9b9.textContent = "ℹ️ 次数为0";
            return;
          }
          const _0x455dd4 = Math.floor(_0x2f1905 / 10);
          const _0x1e1b19 = _0x2f1905 % 10;
          let _0x5a9326 = 0;
          if (_0x455dd4 > 0) {
            for (let _0x2d7e87 = 0; _0x2d7e87 < _0x455dd4; _0x2d7e87++) {
              _0x2be9b9.textContent = "招募 " + (_0x5a9326 + 10) + "/" + _0x2f1905;
              const _0x251b1e = {
                byClub: false,
                recruitNumber: 10,
                recruitType: 1
              };
              await _0x2befd1.HeroService.recruit(_0x251b1e);
              _0x5a9326 += 10;
            }
          }
          if (_0x1e1b19 > 0) {
            for (let _0x28b05e = 0; _0x28b05e < _0x1e1b19; _0x28b05e++) {
              _0x2be9b9.textContent = "招募 " + (_0x5a9326 + 1) + "/" + _0x2f1905;
              const _0x2e50a2 = {
                byClub: false,
                recruitNumber: 1,
                recruitType: 3
              };
              await _0x2befd1.HeroService.recruit(_0x2e50a2);
              _0x5a9326++;
              await _0x37bc18.delay(0.2);
            }
          }
          _0x2be9b9.textContent = "✅ 招募完成";
        } else {
          if (_0x595511.startsWith("open-box-")) {
            const _0x1e2525 = parseInt(_0x595511.split("-")[2]);
            const _0x2a6a3c = parseInt(_0x5db38c.parentElement.querySelector("input").value);
            const _0x45c8b3 = {
              "2001": "木质",
              "2002": "青铜",
              "2003": "黄金",
              "2004": "铂金"
            };
            const _0x2742f0 = _0x45c8b3[_0x1e2525];
            if (_0x2a6a3c <= 0 || _0x2a6a3c % 10 !== 0) {
              _0x37bc18.showtip("宝箱数量必须是10的倍数", "error");
              _0x2be9b9.textContent = "❌ 数量错误";
              return;
            }
            for (let _0x2d4a34 = 0; _0x2d4a34 < _0x2a6a3c / 10; _0x2d4a34++) {
              const _0x1366bd = {
                itemId: _0x1e2525,
                number: 10
              };
              await _0x2befd1.ItemService.openBox(_0x1366bd);
              _0x2be9b9.textContent = "开启" + _0x2742f0 + " " + (_0x2d4a34 + 1) * 10 + "/" + _0x2a6a3c;
            }
            _0x2be9b9.textContent = "✅ " + _0x2742f0 + "开启完成";
          } else {
            if (_0x595511 === "starUp" || _0x595511 === "bookUpgrade") {
              const _0x2af21c = _0x595511 === "starUp";
              const _0x3b32fb = _0x2af21c ? _0x2befd1.HeroService : _0x2befd1.BookService;
              const _0x2f9e69 = _0x2af21c ? "heroUpgradeStar" : "upgrade";
              const _0x3740da = _0x2af21c ? "武将升星" : "升级图鉴";
              let _0x4a7742 = 0;
              const _0x3dd67d = {
                length: 20
              };
              const _0x364e86 = {
                length: 28
              };
              const _0x247d4c = {
                length: 14
              };
              const _0x1d7fbf = [...Array.from(_0x3dd67d, (_0x3e9f8b, _0x2f0bc6) => 101 + _0x2f0bc6), ...Array.from(_0x364e86, (_0x2f67f3, _0x2425e6) => 201 + _0x2425e6), ...Array.from(_0x247d4c, (_0x3a5564, _0x19aff3) => 301 + _0x19aff3)];
              for (const _0x24bcec of _0x1d7fbf) {
                for (let _0x57fc55 = 0; _0x57fc55 < 5; _0x57fc55++) {
                  try {
                    const _0x49d8c5 = {
                      heroId: _0x24bcec
                    };
                    await _0x3b32fb[_0x2f9e69](_0x49d8c5);
                    _0x4a7742++;
                    _0x2be9b9.textContent = _0x3740da + "完成 " + _0x4a7742 + " 次";
                  } catch (_0x4d5020) {
                    break;
                  }
                }
              }
              if (!_0x2af21c) {
                try {
                  await _0x2befd1.BookService.claimPointReward({});
                } catch (_0x403736) {}
              }
              _0x2be9b9.textContent = "✅ " + _0x3740da + "完成";
            } else {
              if (_0x595511 === "tower") {
                if (_0x528145?.["ROLE"]?.["levelId"] <= 50) {
                  _0x2be9b9.textContent = "❌ 等级不足";
                  return;
                }
                await _0x2befd1.TowerService.getInfo({});
                let _0xf90425 = 0;
                while (true) {
                  const _0x429d01 = _0x528145?.["ROLE"];
                  if (!_0x429d01 || _0x429d01.tower.energy <= 0 || _0x429d01.tower.id >= 4500) {
                    break;
                  }
                  try {
                    _0x429d01.tower.id % 10 === 0 && !_0x429d01.tower.reward[_0x429d01.tower.id / 10] && (await _0x2befd1.TowerService.claimReward({
                      rewardId: _0x429d01.tower.id / 10
                    }));
                    await _0x2befd1.FightService.startTower({});
                    _0xf90425++;
                    _0x2be9b9.textContent = "已爬" + _0xf90425 + "层 | 体力:" + (_0x429d01.tower.energy - 1);
                  } catch (_0x3e463a) {
                    await _0x37bc18.delay(3);
                  }
                }
                _0x2be9b9.textContent = "✅ 爬塔完成，共" + _0xf90425 + "层";
              } else {
                if (_0x595511 === "arena-start") {
                  const _0x18b664 = parseInt(_0x5db38c.parentElement.querySelector("input").value) || 3;
                  if (_0x18b664 < 1 || _0x18b664 > 99) {
                    _0x37bc18.showtip("次数需在1-99之间", "error");
                    return;
                  }
                  _0x2be9b9.textContent = "⚔️ 准备开始...";
                  let _0xa245dd = 0;
                  for (let _0x1293c3 = 1; _0x1293c3 <= _0x18b664; _0x1293c3++) {
                    _0x2be9b9.textContent = "⚔️ 正在进行 (" + _0x1293c3 + "/" + _0x18b664 + ")";
                    try {
                      const _0x24d99a = {
                        refresh: false
                      };
                      const _0x3e18d1 = await _0x37bc18.sendCommand("arena_getareatarget", _0x24d99a);
                      const _0x1f67a8 = _0x3e18d1?.["_rawData"]?.["roleList"]?.[0]?.["roleId"];
                      if (!_0x1f67a8) {
                        throw new Error("未获取到目标ID");
                      }
                      const _0x382003 = {
                        targetId: _0x1f67a8
                      };
                      await _0x37bc18.sendCommand("fight_startareaarena", _0x382003);
                      _0xa245dd++;
                      _0x37bc18.showtip("第" + _0x1293c3 + "轮战斗成功", "success");
                    } catch (_0x13849a) {
                      _0x37bc18.showtip("第" + _0x1293c3 + "轮战斗失败: " + _0x13849a.message, "error");
                    }
                    if (_0x1293c3 < _0x18b664) {
                      await _0x37bc18.delay(0.01);
                    }
                  }
                  _0x2be9b9.textContent = "✅ 完成: 总" + _0x18b664 + "轮, 成功" + _0xa245dd + "轮";
                } else {
                  if (_0x595511 === "arena-winrate-battle") {
                    const _0x2a828c = parseInt(_0x5db38c.parentElement.querySelector("input").value) || 1;
                    if (_0x2a828c < 1 || _0x2a828c > 99) {
                      _0x37bc18.showtip("次数需在1-99之间", "error");
                      return;
                    }
                    _0x2be9b9.textContent = "📊 正在获取对手胜率数据...";
                    try {
                      const _0x54c5b6 = {
                        refresh: false
                      };
                      const _0x8d436d = await _0x37bc18.sendCommand("arena_getareatarget", _0x54c5b6);
                      const _0x3e6bfa = _0x8d436d?.["_rawData"]?.["roleList"];
                      if (!_0x3e6bfa || _0x3e6bfa.length === 0) {
                        throw new Error("未获取到对手列表");
                      }
                      const _0x5a2ab2 = document.getElementById("winrate-results");
                      const _0x2835b4 = _0x5a2ab2 ? _0x5a2ab2.innerHTML : "";
                      let _0x3b5f3c = -1;
                      let _0x3f3678 = null;
                      if (_0x2835b4) {
                        for (const _0x3066a3 of _0x3e6bfa) {
                          const _0x28e5c9 = _0x3066a3.name || "";
                          const _0x2c5d2a = new RegExp(_0x28e5c9 + ".*胜率：(d+(?:.d+)?)%", "i");
                          const _0x29914e = _0x2835b4.match(_0x2c5d2a);
                          if (_0x29914e && _0x29914e[1]) {
                            const _0x2bea17 = parseFloat(_0x29914e[1]);
                            _0x2bea17 > _0x3b5f3c && (_0x3b5f3c = _0x2bea17, _0x3f3678 = _0x3066a3.roleId);
                          }
                        }
                      }
                      !_0x3f3678 && _0x3e6bfa.length > 0 && (_0x3f3678 = _0x3e6bfa[0].roleId, _0x37bc18.showtip("未找到胜率数据，使用第一个对手", "info"));
                      if (!_0x3f3678) {
                        throw new Error("未找到合适的对手");
                      }
                      let _0x43c5fd = 0;
                      for (let _0x2dd887 = 1; _0x2dd887 <= _0x2a828c; _0x2dd887++) {
                        _0x2be9b9.textContent = "⚔️ 正在与胜率最高对手战斗 (" + _0x2dd887 + "/" + _0x2a828c + ")";
                        try {
                          const _0x260f65 = {
                            targetId: _0x3f3678
                          };
                          await _0x37bc18.sendCommand("fight_startareaarena", _0x260f65);
                          _0x43c5fd++;
                          _0x37bc18.showtip("第" + _0x2dd887 + "轮战斗成功", "success");
                        } catch (_0x320133) {
                          _0x37bc18.showtip("第" + _0x2dd887 + "轮战斗失败: " + _0x320133.message, "error");
                        }
                        if (_0x2dd887 < _0x2a828c) {
                          await _0x37bc18.delay(0.01);
                        }
                      }
                      _0x2be9b9.textContent = "✅ 胜率战斗完成: 总" + _0x2a828c + "轮, 成功" + _0x43c5fd + "轮";
                    } catch (_0x83e71a) {
                      _0x37bc18.showtip("胜率战斗失败: " + _0x83e71a.message, "error");
                      _0x2be9b9.textContent = "❌ 胜率战斗失败";
                    }
                  } else {
                    if (_0x595511 === "club-boss") {
                      const _0x5a5592 = parseInt(document.getElementById("club-boss-count").textContent);
                      if (_0x5a5592 <= 0) {
                        _0x2be9b9.textContent = "ℹ️ 次数为0";
                        return;
                      }
                      for (let _0x39f233 = 1; _0x39f233 <= _0x5a5592; _0x39f233++) {
                        _0x2be9b9.textContent = "⚔️ 挑战Boss (" + _0x39f233 + "/" + _0x5a5592 + ")";
                        await _0x2befd1.FightService.startLegionBoss({});
                        await _0x37bc18.delay(0.5);
                      }
                      _0x2be9b9.textContent = "✅ Boss挑战完成";
                    } else {
                      if (_0x595511 === "claim-activity") {
                        _0x2be9b9.textContent = "🎁 领取每日奖励...";
                        for (const _0x81f7a4 of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
                          const _0x54e4b5 = {
                            taskId: _0x81f7a4
                          };
                          await _0x2befd1.TaskService.claimDailyPoint(_0x54e4b5);
                          await _0x37bc18.delay(0.1);
                        }
                        _0x2be9b9.textContent = "🎁 领取每周奖励...";
                        const _0x2a097b = {
                          rewardId: 0
                        };
                        await _0x2befd1.TaskService.claimDailyReward(_0x2a097b);
                        await _0x37bc18.delay(0.1);
                        const _0x5801a7 = {
                          rewardId: 0
                        };
                        await _0x2befd1.TaskService.claimWeekReward(_0x5801a7);
                        _0x2be9b9.textContent = "✅ 活跃奖励领取完毕";
                      } else {
                        if (_0x595511.startsWith("daily-task-") || _0x595511 === "execute-daily-checked" || _0x595511 === "one-key-100") {
                          const _0x37c4dc = {
                            itemId: 2001,
                            number: 10
                          };
                          const _0x509643 = {
                            goodsId: 1
                          };
                          const _0x590d9f = {
                            "daily-task-hangup-combined": {
                              func: async () => {
                                for (let _0x20300f = 0; _0x20300f < 4; _0x20300f++) {
                                  const _0x44ce84 = {
                                    isSkipShareCard: true,
                                    type: 2
                                  };
                                  await _0x2befd1.SystemService.myShareCallback(_0x44ce84);
                                  await _0x37bc18.delay(0.2);
                                }
                                for (let _0x348271 = 0; _0x348271 < 5; _0x348271++) {
                                  await _0x2befd1.SystemService.claimHangUpReward({});
                                  if (_0x348271 < 4) {
                                    await _0x37bc18.delay(1);
                                  }
                                }
                                for (let _0x57a218 = 0; _0x57a218 < 4; _0x57a218++) {
                                  const _0x3568bb = {
                                    isSkipShareCard: true,
                                    type: 2
                                  };
                                  await _0x2befd1.SystemService.myShareCallback(_0x3568bb);
                                  await _0x37bc18.delay(0.2);
                                }
                              },
                              label: "收菜5次、加钟"
                            },
                            "daily-task-bottle-renew": {
                              func: async () => {
                                const _0x3b42cd = {
                                  bottleType: -1
                                };
                                await _0x2befd1.BottleHelperService.stop(_0x3b42cd);
                                await _0x37bc18.delay(0.2);
                                const _0x482c33 = {
                                  bottleType: -1
                                };
                                await _0x2befd1.BottleHelperService.start(_0x482c33);
                              },
                              label: "续罐子"
                            },
                            "daily-task-bottle-claim": {
                              func: () => _0x2befd1.BottleHelperService.claim({}),
                              label: "收盐罐"
                            },
                            "daily-task-combined-quick": {
                              func: async () => {
                                const _0x48a6de = {
                                  category: 0
                                };
                                await _0x2befd1.MailService.claimAllAttachment(_0x48a6de);
                                await _0x37bc18.delay(0.2);
                                await _0x2befd1.LegionService.signIn({});
                                await _0x37bc18.delay(0.2);
                                const _0x3005ac = {
                                  friendId: 0
                                };
                                await _0x2befd1.FriendService.batch(_0x3005ac);
                                await _0x37bc18.delay(0.2);
                                await _0x2befd1.SystemService.signInReward({});
                                await _0x37bc18.delay(0.2);
                                const _0x21da1c = {
                                  discountId: 1
                                };
                                await _0x2befd1.DiscountService.claimReward(_0x21da1c);
                                await _0x37bc18.delay(0.2);
                                const _0x54c457 = {
                                  cardId: 1
                                };
                                await _0x2befd1.CardService.claimReward(_0x54c457);
                                await _0x37bc18.delay(0.2);
                                try {
                                  await _0x37bc18.sendCommand("collection_claimfreereward", {});
                                  console.log("✅ 成功领取珍宝阁每日免费珍品");
                                } catch (_0x48b67d) {
                                  console.log("领取珍宝阁免费珍品时发生错误（可能已领取）:", _0x48b67d.message);
                                }
                                await _0x37bc18.delay(0.2);
                                const _0x4f7a8f = {
                                  isSkipShareCard: false,
                                  type: 1
                                };
                                await _0x2befd1.SystemService.myShareCallback(_0x4f7a8f);
                              },
                              label: "邮件、签到、赠金币、福利、珍宝阁"
                            },
                            "daily-task-boss": {
                              func: () => {
                                const _0x23a542 = _0x37bc18.getFormatDate(Date.now()).getUTCDay();
                                const _0xaa00c4 = [9904, 9905, 9901, 9902, 9903, 9904, 9905][_0x23a542];
                                const _0x519290 = {
                                  bossId: _0xaa00c4
                                };
                                return _0x2befd1.FightService.startBoss(_0x519290);
                              },
                              label: "每日咸王考验"
                            },
                            "daily-task-gold": {
                              func: async () => {
                                const _0x2e4770 = 6;
                                let _0x1e8add = 0;
                                try {
                                  console.log("[智能点金] 初始检查服务器任务状态...");
                                  const _0xd3cd5a = {
                                    taskId: _0x2e4770
                                  };
                                  const _0x1df148 = await _0x37bc18.sendCommand("task_claimdailypoint", _0xd3cd5a);
                                  if (_0x1df148?.["code"] === 700020 || _0x1df148?.["_rawData"]?.["role"]?.["dailyTask"]?.["complete"]?.["hasOwnProperty"](_0x2e4770.toString())) {
                                    console.log("[智能点金] 任务已完成，无需执行");
                                    return;
                                  }
                                  console.log("[智能点金] 开始智能点金，每次执行前检查任务状态...");
                                  while (_0x1e8add < 3) {
                                    const _0x34b550 = {
                                      taskId: _0x2e4770
                                    };
                                    const _0x4856d0 = await _0x37bc18.sendCommand("task_claimdailypoint", _0x34b550);
                                    if (_0x4856d0?.["code"] === 700020 || _0x4856d0?.["_rawData"]?.["role"]?.["dailyTask"]?.["complete"]?.["hasOwnProperty"](_0x2e4770.toString())) {
                                      console.log("[智能点金] 任务已完成，已执行" + _0x1e8add + "次点金，停止继续操作");
                                      break;
                                    }
                                    console.log("[智能点金] 执行第" + (_0x1e8add + 1) + "/3次点金");
                                    try {
                                      const _0x5c4cc4 = {
                                        buyNum: 1
                                      };
                                      await _0x2befd1.SystemService.buyGold(_0x5c4cc4);
                                      _0x1e8add++;
                                      console.log("[智能点金] 第" + _0x1e8add + "次点金执行成功");
                                    } catch (_0x5d109c) {
                                      console.error("[智能点金] 第" + (_0x1e8add + 1) + "次点金执行失败:", _0x5d109c.message);
                                      if (_0x5d109c.message?.["includes"]("钻石") || _0x5d109c.message?.["includes"]("付费")) {
                                        console.log("[智能点金] 检测到付费错误，停止继续操作");
                                        break;
                                      }
                                    }
                                    await _0x37bc18.delay(1);
                                  }
                                  console.log("[智能点金] 智能点金完成，共执行" + _0x1e8add + "次点金操作");
                                } catch (_0x2d0155) {
                                  console.error("[智能点金] 点金过程中发生异常:", _0x2d0155.message);
                                }
                              },
                              label: "点金三次"
                            },
                            "daily-task-quiz": {
                              func: async () => {
                                const _0x33961c = await _0x2befd1.StudyService.startGame({});
                                const _0x23369d = _0x33961c.getData();
                                for (let _0x4948b4 = 0; _0x4948b4 < _0x23369d.questionList.length; _0x4948b4++) {
                                  const _0xb930a8 = _0x23369d.questionList[_0x4948b4];
                                  let _0x29392b = _0x4b9636[_0xb930a8.question] || Math.floor(2 * Math.random()) + 1;
                                  const _0x2ee60c = {
                                    id: _0x23369d.role.study.id,
                                    option: [_0x29392b],
                                    questionId: [_0xb930a8.id]
                                  };
                                  await _0x2befd1.StudyService.answer(_0x2ee60c);
                                  await _0x37bc18.delay(1);
                                }
                                for (let _0x2efc51 = 1; _0x2efc51 <= 10; _0x2efc51++) {
                                  const _0x51cdd1 = {
                                    rewardId: _0x2efc51
                                  };
                                  await _0x2befd1.StudyService.claimReward(_0x51cdd1);
                                  await _0x37bc18.delay(0.2);
                                }
                              },
                              label: "自动答题"
                            },
                            "daily-task-genie-tickets": {
                              func: async () => {
                                for (let _0x456a1f = 0; _0x456a1f < 3; _0x456a1f++) {
                                  await _0x37bc18.sendCommand("genie_buysweep", {});
                                  await _0x37bc18.delay(0.2);
                                }
                              },
                              label: "领取扫荡券"
                            },
                            "daily-task-genie-sweep": {
                              func: async _0x3b8fbc => {
                                if (_0x3b8fbc) {
                                  _0x3b8fbc.textContent = "🔄 同步服务器数据...";
                                }
                                await _0x37bc18.sendCommand("System_GetTime", {});
                                await _0x37bc18.delay(1);
                                const _0x174414 = window.__require("ServerData");
                                if (!_0x174414 || !_0x174414.ROLE || !_0x174414.ROLE.statisticsTime) {
                                  throw new Error("无法访问 ServerData.ROLE.statisticsTime 对象");
                                }
                                let _0x5c28a0 = _0x174414.ROLE.statisticsTime;
                                try {
                                  _0x5c28a0 = JSON.parse(JSON.stringify(_0x5c28a0));
                                } catch (_0x13d968) {
                                  console.warn("[灯神扫荡] 警告：无法将 statisticsTime 转换为标准 JSON 对象。尝试直接访问。", _0x13d968);
                                }
                                const _0x558e64 = {
                                  "1": "魏国",
                                  "2": "蜀国",
                                  "3": "吴国",
                                  "4": "群雄"
                                };
                                let _0x400cf7 = 0;
                                let _0x45d0ce = 0;
                                let _0x144232 = true;
                                for (let _0x33829e = 1; _0x33829e <= 4; _0x33829e++) {
                                  const _0x3e842d = "genie:daily:free:" + _0x33829e;
                                  const _0xdc4dca = _0x5c28a0[_0x3e842d];
                                  const _0x3c1b6b = _0x3e2e66 => {
                                    if (typeof _0x3e2e66 !== "number" || isNaN(_0x3e2e66) || _0x3e2e66 <= 0) {
                                      return false;
                                    }
                                    const _0x2f1d84 = new Date(_0x3e2e66 * 1000);
                                    const _0x276940 = new Date();
                                    return _0x2f1d84.getFullYear() === _0x276940.getFullYear() && _0x2f1d84.getMonth() === _0x276940.getMonth() && _0x2f1d84.getDate() === _0x276940.getDate();
                                  };
                                  if (!_0x3c1b6b(_0xdc4dca)) {
                                    _0x144232 = false;
                                    break;
                                  }
                                }
                                if (_0x144232) {
                                  if (_0x3b8fbc) {
                                    _0x3b8fbc.textContent = "✅ 今日已完成灯神扫荡，本次跳过。";
                                  }
                                  return;
                                }
                                for (let _0x2224f0 = 1; _0x2224f0 <= 4; _0x2224f0++) {
                                  const _0x317c0e = _0x558e64[_0x2224f0];
                                  const _0x1f5637 = "genie:daily:free:" + _0x2224f0;
                                  await _0x37bc18.delay(0.3);
                                  if (_0x3b8fbc) {
                                    _0x3b8fbc.textContent = "🔄 检查 " + _0x317c0e + " 状态...";
                                  }
                                  const _0x3d8b38 = _0x5c28a0[_0x1f5637];
                                  const _0x1f748e = _0x5bd3a1 => {
                                    if (typeof _0x5bd3a1 !== "number" || isNaN(_0x5bd3a1) || _0x5bd3a1 <= 0) {
                                      return false;
                                    }
                                    const _0x1e12f5 = new Date(_0x5bd3a1 * 1000);
                                    const _0x477f59 = new Date();
                                    return _0x1e12f5.getFullYear() === _0x477f59.getFullYear() && _0x1e12f5.getMonth() === _0x477f59.getMonth() && _0x1e12f5.getDate() === _0x477f59.getDate();
                                  };
                                  if (!_0x1f748e(_0x3d8b38)) {
                                    if (_0x3b8fbc) {
                                      _0x3b8fbc.textContent = "🚀 执行 " + _0x317c0e + " 免费扫荡...";
                                    }
                                    try {
                                      const _0x95d024 = {
                                        genieId: _0x2224f0,
                                        sweepCnt: 1
                                      };
                                      const _0x7f0c0b = await _0x37bc18.sendCommand("genie_sweep", _0x95d024);
                                      if (_0x7f0c0b.code === 0) {
                                        _0x400cf7++;
                                        if (_0x3b8fbc) {
                                          _0x3b8fbc.textContent = "✅ 已成功扫荡 " + _0x317c0e + "。";
                                        }
                                        await _0x37bc18.delay(1);
                                      } else {
                                        const _0x27b2d8 = _0x7f0c0b.msg || "未知错误 (Code: " + _0x7f0c0b.code + ")";
                                        if (_0x3b8fbc) {
                                          _0x3b8fbc.textContent = "❌ " + _0x317c0e + " 扫荡失败: " + _0x27b2d8;
                                        }
                                        await _0x37bc18.delay(1);
                                      }
                                    } catch (_0x5bd3b0) {
                                      if (_0x3b8fbc) {
                                        _0x3b8fbc.textContent = "❌ " + _0x317c0e + " 扫荡异常: " + _0x5bd3b0.message;
                                      }
                                      await _0x37bc18.delay(1);
                                    }
                                  } else {
                                    _0x45d0ce++;
                                  }
                                }
                              },
                              label: "灯神扫荡"
                            },
                            "daily-task-box": {
                              func: () => _0x2befd1.ItemService.openBox(_0x37c4dc),
                              label: "开启10木箱"
                            },
                            "daily-task-recruit": {
                              func: async () => {
                                const _0x4237ce = 4;
                                let _0x2dbfd6 = false;
                                try {
                                  console.log("[智能招募] 检查服务器任务状态...");
                                  const _0x5379d3 = {
                                    taskId: _0x4237ce
                                  };
                                  const _0x4f6012 = await _0x37bc18.sendCommand("task_claimdailypoint", _0x5379d3);
                                  if (_0x4f6012?.["code"] === 700020 || _0x4f6012?.["_rawData"]?.["role"]?.["dailyTask"]?.["complete"]?.["hasOwnProperty"](_0x4237ce.toString())) {
                                    console.log("[智能招募] 任务已完成，无需执行");
                                    return;
                                  }
                                  _0x2dbfd6 = true;
                                } catch (_0x221c4f) {
                                  _0x2dbfd6 = true;
                                }
                                if (_0x2dbfd6) {
                                  console.log("[智能招募] 任务未完成，开始招募...");
                                  const _0x33afd7 = window.__require?.("ServerData");
                                  const _0x1a87fc = _0x33afd7?.["ROLE"]?.["statisticsTime"]?.["recruit:one:free"] || 0;
                                  const _0x39dd8f = _0x1d4e6b => {
                                    if (!_0x1d4e6b) {
                                      return false;
                                    }
                                    const _0x54895c = new Date(_0x1d4e6b * 1000);
                                    const _0x23fe4b = new Date();
                                    return _0x54895c.getFullYear() === _0x23fe4b.getFullYear() && _0x54895c.getMonth() === _0x23fe4b.getMonth() && _0x54895c.getDate() === _0x23fe4b.getDate();
                                  };
                                  const _0x13d27 = _0x39dd8f(_0x1a87fc);
                                  if (_0x13d27) {
                                    console.log("[智能招募] 免费次数已用，执行1次付费单抽");
                                    const _0x5c02f1 = {
                                      byClub: false,
                                      recruitNumber: 1,
                                      recruitType: 1
                                    };
                                    await _0x37bc18.sendCommand("hero_recruit", _0x5c02f1);
                                  } else {
                                    console.log("[智能招募] 免费次数未用，执行1免+1付");
                                    const _0x3fcd9c = {
                                      byClub: false,
                                      recruitNumber: 1,
                                      recruitType: 3
                                    };
                                    await _0x37bc18.sendCommand("hero_recruit", _0x3fcd9c);
                                    await _0x37bc18.delay(0.2);
                                    const _0xbd6408 = {
                                      byClub: false,
                                      recruitNumber: 1,
                                      recruitType: 1
                                    };
                                    await _0x37bc18.sendCommand("hero_recruit", _0xbd6408);
                                  }
                                }
                              },
                              label: "执行2次招募"
                            },
                            "daily-task-arena": {
                              func: () => {
                                return new Promise(async _0x2cab9e => {
                                  console.log("正在进行3次竞技场战斗...");
                                  try {
                                    console.log("正在进入竞技场...");
                                    await _0x37bc18.sendCommand("arena_startarea", {});
                                    await _0x37bc18.delay(1);
                                    console.log("已成功进入竞技场");
                                  } catch (_0x2404ef) {
                                    console.log("进入竞技场失败，但继续尝试战斗:", _0x2404ef);
                                  }
                                  let _0x54ea6b = 0;
                                  for (let _0x17a9c8 = 1; _0x17a9c8 <= 3; _0x17a9c8++) {
                                    try {
                                      const _0x3f0821 = {
                                        refresh: false
                                      };
                                      const _0x44414e = await _0x37bc18.sendCommand("arena_getareatarget", _0x3f0821);
                                      const _0x3e068a = _0x44414e?.["_rawData"]?.["roleList"]?.[0]?.["roleId"];
                                      if (!_0x3e068a) {
                                        console.log("竞技场战斗 " + _0x17a9c8 + "/3 失败: 未获取到目标ID");
                                        continue;
                                      }
                                      const _0x1458c0 = {
                                        targetId: _0x3e068a
                                      };
                                      await _0x37bc18.sendCommand("fight_startareaarena", _0x1458c0);
                                      _0x54ea6b++;
                                      console.log("竞技场战斗 " + _0x17a9c8 + "/3 成功");
                                    } catch (_0x1fec7d) {
                                      console.log("竞技场战斗 " + _0x17a9c8 + "/3 失败:", _0x1fec7d.message);
                                    }
                                    await _0x37bc18.delay(0.1);
                                  }
                                  console.log("竞技场战斗完成: 总3轮, 成功" + _0x54ea6b + "轮");
                                  _0x2cab9e();
                                });
                              },
                              label: "进行3次竞技场战斗"
                            },
                            "daily-task-buy-bronze-box": {
                              func: () => _0x37bc18.sendCommand("store_buy", _0x509643),
                              label: "购买青铜宝箱"
                            }
                          };
                          let _0x5a73ce = [];
                          if (_0x595511 === "one-key-100") {
                            _0x5a73ce = _0xe9b7f2.filter(_0x3cb6e7 => _0x3cb6e7.task !== "daily-task-quiz").map(_0x430de9 => _0x590d9f[_0x430de9.task]);
                          } else {
                            const _0x26c9a0 = _0x595511.startsWith("daily-task-") ? _0x595511 : null;
                            if (_0x26c9a0) {
                              if (_0x590d9f[_0x26c9a0]) {
                                _0x5a73ce.push(_0x590d9f[_0x26c9a0]);
                              }
                            } else {
                              _0x4090b4.querySelectorAll("input[type=\"checkbox\"]:checked").forEach(_0x54bcbf => {
                                const _0x39e28a = _0x54bcbf.dataset.taskName;
                                if (_0x590d9f[_0x39e28a]) {
                                  _0x5a73ce.push(_0x590d9f[_0x39e28a]);
                                }
                              });
                            }
                          }
                          if (_0x5a73ce.length === 0) {
                            _0x2be9b9.textContent = "ℹ️ 没有可执行任务";
                            return;
                          }
                          _0x595511.startsWith("daily-task-") && (_0x11f885 = false);
                          if (_0x595511 === "one-key-100") {
                            const _0x1c6875 = _0x5a73ce.filter(_0x5e6578 => _0x5e6578.label !== "收菜5次、加钟");
                            for (let _0x1d5462 = 0; _0x1d5462 < _0x1c6875.length; _0x1d5462++) {
                              const _0x506002 = _0x1c6875[_0x1d5462];
                              _0x2be9b9.textContent = "🔄 (" + (_0x1d5462 + 1) + "/" + _0x1c6875.length + ") " + _0x506002.label + "...";
                              try {
                                await _0x506002.func();
                                await _0x37bc18.delay(0.5);
                              } catch (_0x32ef0b) {
                                console.log("任务 " + _0x506002.label + " 失败:", _0x32ef0b);
                              }
                            }
                            _0x2be9b9.textContent = "🎣 执行3次免费普通钓鱼...";
                            try {
                              for (let _0x29561b = 0; _0x29561b < 3; _0x29561b++) {
                                const _0x18c712 = {
                                  lotteryNumber: 1,
                                  newFree: true,
                                  type: 1
                                };
                                await _0x2befd1.ArtifactService.lottery(_0x18c712);
                                _0x2be9b9.textContent = "🎣 免费钓鱼 (" + (_0x29561b + 1) + "/3)";
                                await _0x37bc18.delay(0.2);
                              }
                            } catch (_0x367b5f) {
                              console.log("免费钓鱼失败:", _0x367b5f);
                            }
                            const _0x5b9a61 = {
                              func: () => _0x2befd1.SystemService.claimHangUpReward({}),
                              label: "单次收菜"
                            };
                            for (let _0x59a7ab = 0; _0x59a7ab < 5; _0x59a7ab++) {
                              _0x2be9b9.textContent = "🥬 收菜 (" + (_0x59a7ab + 1) + "/5)，等待1s...";
                              await _0x5b9a61.func();
                              if (_0x59a7ab < 4) {
                                await _0x37bc18.delay(1);
                              }
                            }
                            _0x2be9b9.textContent = "🔄 正在加钟...";
                            for (let _0x4f96cb = 0; _0x4f96cb < 4; _0x4f96cb++) {
                              const _0x1a409f = {
                                isSkipShareCard: true,
                                type: 2
                              };
                              await _0x2befd1.SystemService.myShareCallback(_0x1a409f);
                              await _0x37bc18.delay(0.2);
                            }
                            _0x2be9b9.textContent = "🎁 领取活跃奖励...";
                            await _0x4ea6c1("claim-activity", _0x5db38c);
                          } else {
                            for (let _0x1069f7 = 0; _0x1069f7 < _0x5a73ce.length; _0x1069f7++) {
                              const _0x35cd0a = _0x5a73ce[_0x1069f7];
                              if (_0x35cd0a.label === "灯神扫荡" && _0x11f885) {
                                continue;
                              }
                              _0x2be9b9.textContent = "🔄 (" + (_0x1069f7 + 1) + "/" + _0x5a73ce.length + ") " + _0x35cd0a.label + "...";
                              try {
                                _0x35cd0a.label === "灯神扫荡" ? (await _0x35cd0a.func(_0x2be9b9), _0x5a73ce.length > 1 && (_0x11f885 = true)) : await _0x35cd0a.func();
                                await _0x37bc18.delay(0.5);
                              } catch (_0xe9dc3b) {
                                console.log("任务 " + _0x35cd0a.label + " 失败 (可能已完成):", _0xe9dc3b);
                              }
                            }
                          }
                          _0x2be9b9.textContent = "✅ " + (_0x595511 === "one-key-100" ? "100活跃度任务" : "任务") + "执行完毕";
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
    } catch (_0x3dd3a7) {
      console.error("任务执行错误:", _0x3dd3a7);
      _0x2be9b9.textContent = "❌ 执行出错!";
    } finally {
      (_0x595511 === "execute-daily-checked" || _0x595511 === "one-key-100") && (_0x19ad01 = false, _0x3d2bde.forEach(_0x511222 => _0x511222.disabled = false));
      _0x5db38c.disabled = false;
      _0x5db38c.textContent = _0x4c5901;
    }
  }
  function _0x90781b(_0x550054, _0x581a43) {
    if (_0x550054 === "collectionUpgrade") {
      const _0x173c4e = _0x581a43.textContent;
      _0x581a43.disabled = true;
      _0x581a43.textContent = "处理中...";
      _0x512e0a(_0x581a43).catch(_0x3c8161 => {
        console.error("藏品图鉴升级错误:", _0x3c8161);
        _0x581a43.textContent = "❌ 执行出错!";
      }).finally(() => {
        setTimeout(() => {
          _0x581a43.disabled = false;
          _0x581a43.textContent = _0x173c4e;
        }, 1000);
      });
      return true;
    }
    return false;
  }
  function _0x4d34ac(_0x2c6904) {
    if (_0x2c6904 === "treasure-assist") {
      _0x5c6fd0.handleMainButtonClick();
      return true;
    }
    return false;
  }
  function _0x40da56(_0x464ffe) {
    if (_0x464ffe === "arena-winrate") {
      _0x5b020c.handleMainButtonClick();
      return true;
    }
    return false;
  }
  function _0x5284cf() {
    const _0x50c10d = localStorage.getItem("dailyTaskCheckboxes");
    if (_0x50c10d) {
      try {
        const _0x5d618e = JSON.parse(_0x50c10d);
        const _0x4b2ab7 = document.querySelector(".daily-task-list");
        _0x4b2ab7 && _0x4b2ab7.querySelectorAll("input[type=\"checkbox\"]").forEach(_0x1be190 => {
          _0x5d618e[_0x1be190.dataset.taskName] !== undefined && (_0x1be190.checked = _0x5d618e[_0x1be190.dataset.taskName]);
        });
      } catch (_0x41ee0a) {
        console.log("加载日常任务勾选状态失败:", _0x41ee0a);
      }
    }
  }
  function _0x3cb1bf() {
    const _0x7b2206 = {};
    const _0x4f213f = document.querySelector(".daily-task-list");
    _0x4f213f && (_0x4f213f.querySelectorAll("input[type=\"checkbox\"]").forEach(_0xae1de0 => {
      _0x7b2206[_0xae1de0.dataset.taskName] = _0xae1de0.checked;
    }), localStorage.setItem("dailyTaskCheckboxes", JSON.stringify(_0x7b2206)));
  }
  _0x347846.addEventListener("click", _0x5444d9 => {
    const _0x2f9eb6 = _0x5444d9.target.closest(".task-btn");
    if (_0x2f9eb6?.["dataset"]["task"]) {
      if (_0x90781b(_0x2f9eb6.dataset.task, _0x2f9eb6)) {
        return;
      }
      if (_0x4d34ac(_0x2f9eb6.dataset.task)) {
        return;
      }
      if (_0x40da56(_0x2f9eb6.dataset.task)) {
        return;
      }
      _0x4ea6c1(_0x2f9eb6.dataset.task, _0x2f9eb6);
    }
  });
  _0x347846.addEventListener("change", _0x45adfc => {
    _0x45adfc.target.type === "checkbox" && _0x45adfc.target.dataset.taskName && _0x3cb1bf();
  });
  const _0x5c6fd0 = {
    init() {},
    handleMainButtonClick() {
      showToast("宝库助战功能已暂时禁用", "info");
    }
  };
  setTimeout(() => {
    _0x5c6fd0.init();
    _0x5b020c.init();
    _0x2e4691.init();
    _0x5284cf();
  }, 1000);
  console.log("🎮 鲸鱼助手 (v" + _0x28f203 + ") 加载完成！");
})();