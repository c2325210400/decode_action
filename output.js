//Mon Dec 01 2025 23:06:26 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {
  "use strict";

  const _0x4ceeb = "7.3.0";
  const _0x23ad6b = document.createElement("style");
  _0x23ad6b.textContent = "\n        :root {\n            --panel-bg: rgba(247, 250, 252, 0.98);\n            --glass-border: rgba(0, 0, 0, 0.1);\n            --highlight: #3182ce; --text-primary: #2d3748; --text-secondary: #718096;\n            --item-bg: #ffffff; --item-border: #e2e8f0;\n            --success: #38a169; --error: #e53e3e;\n        }\n\n        /* 主面板 */\n        .xianxia-panel {\n            color-scheme: light !important;\n            background: transparent !important;\n            color: var(--text-primary) !important;\n            position:fixed;top:10px;backdrop-filter:blur(10px);border:1px solid var(--glass-border);border-radius:12px;z-index:10000;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;box-shadow:0 8px 32px rgba(0,0,0,0.1);transition:all .3s ease;overflow:hidden;\n        }\n        .xianxia-panel::before {\n            content: '';\n            position: absolute;\n            top: 0; left: 0;\n            width: 100%; height: 100%;\n            background: var(--panel-bg) !important;\n            z-index: -1;\n            border-radius: 12px;\n        }\n\n        .xianxia-panel.collapse{width:44px;height:44px;right:10px;min-height:auto;display:flex;align-items:center;justify-content:center;border-radius:50%;}\n        .xianxia-panel.expanded{width:90vw;max-width:520px;right:5vw;max-height:85vh;display:flex;flex-direction:column;}\n        \n        .panel-header{background:rgba(0,0,0,0.02) !important;cursor:pointer;display:flex !important;align-items:center !important;padding:10px 15px !important;flex-shrink:0;width:100%;box-sizing:border-box !important;transition:background .2s ease; position: relative; z-index: 1;}\n        .xianxia-panel.expanded .panel-header { justify-content:flex-start !important; }\n        .xianxia-panel.collapse .panel-header { \n            justify-content: center !important; \n            align-items: center !important;\n            padding: 0 !important; /* 移除折叠状态下的内边距 */\n            height: 100%; /* 确保头部占满整个折叠面板 */\n        }\n\n        .panel-title{flex-grow: 1; font-weight:600;font-size:16px;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:15px !important; color: var(--text-primary) !important;}\n        .panel-icon{font-size:22px;line-height:1;width:100%;text-align:center;display:flex;align-items:center;justify-content:center;}\n        .xianxia-panel.expanded .panel-icon { display: none; }\n        .xianxia-panel.collapse .panel-title, .xianxia-panel.collapse .opacity-control { display: none; }\n        .opacity-control{display:flex;align-items:center;gap:8px;flex-shrink:0;}\n        .opacity-control label{font-size:12px;color:var(--text-secondary) !important;white-space:nowrap;}\n        .opacity-control input{width:90px;height:4px;-webkit-appearance:none;background:rgba(0,0,0,.1);border-radius:2px;outline:none;transition:background .2s;}\n        .opacity-control input:hover{background:rgba(0,0,0,.2);}\n        .opacity-control input::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;border-radius:50%;background:var(--text-primary);cursor:pointer;}\n        .opacity-value{font-size:12px;color:var(--text-primary) !important;min-width:40px;text-align:left;}\n        \n        .panel-content{padding:10px 0 0 0;display:none;overflow-y:auto;max-height:calc(85vh - 74px); position: relative; z-index: 1;}.expanded .panel-content{display:block}\n        .tab-nav{display:flex;padding:0 5px;margin-bottom:8px;border-bottom:1px solid var(--item-border) !important;}\n        .tab-btn{flex:1;padding:7px 4px;border:none;background:transparent;color:var(--text-secondary) !important;cursor:pointer;font-size:12px;font-weight:600;transition: color .2s ease, border-color .2s ease;border-bottom:3px solid transparent; text-align:center;}\n        .tab-btn:hover{color:var(--text-primary) !important;}\n        .tab-btn.active{color:var(--highlight) !important;border-bottom-color:var(--highlight) !important;}\n        .tab-pane{display:none; padding:0 10px 10px 10px;}\n        .tab-pane.active{display:block;animation:fadeIn .3s;}\n        @keyframes fadeIn{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}\n        .sub-nav{display:flex;gap:10px;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--item-border) !important; flex-wrap: wrap;}\n        .sub-tab-btn{font-size:11px;padding:2px 0;color:var(--text-secondary) !important;background:transparent;border:none;cursor:pointer;border-bottom:2px solid transparent;transition:all .2s ease;}\n        .sub-tab-btn:hover{color:var(--text-primary) !important;}\n        .sub-tab-btn.active{color:var(--highlight) !important;border-bottom-color:var(--highlight) !important;font-weight:500;}\n        .sub-pane{display:none;}\n        .sub-pane.active{display:block;}\n\n        .task-section{background:var(--item-bg) !important;border:1px solid var(--item-border) !important; margin:0;padding:10px;border-radius:7px;}\n        .task-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;}\n        .task-header h4{margin:0;color:var(--highlight) !important;font-size:13px;font-weight:600;display:flex;align-items:center;gap:5px;}\n        .status{font-size:10px;color:var(--highlight) !important;background:rgba(49,130,206,.1) !important;padding:3px 5px;border-radius:3px;}\n        .task-row {display:flex;align-items:center;gap:7px;margin-bottom:7px;}\n        .task-row:last-child {margin-bottom:0;}\n        .task-row .task-label {width:55px;font-size:12px;color:var(--text-secondary) !important;flex-shrink:0; text-align:right; padding-right:4px;}\n        .task-row input {width:70px;flex-grow:0;}\n        .task-row .task-btn {flex:1;}\n        .task-btn{display:block;width:100%;margin:0;padding:8px 10px;background:rgba(49,130,206,0.1) !important;border:1px solid rgba(49,130,206,0.2) !important;border-radius:6px;color:var(--highlight) !important;font-weight:600;cursor:pointer;font-size:12px;transition: all .2s ease;}\n        .task-btn:hover{background:rgba(49,130,206,0.15) !important;}\n        .task-btn:disabled{background:rgba(0,0,0,0.05) !important;border-color:transparent !important;color:#ccc !important;cursor:not-allowed;transform:none;box-shadow:none;}\n        .task-row input{border:1px solid var(--item-border) !important;background:rgba(0,0,0,.02) !important;color:var(--text-primary) !important;padding:8px 10px;border-radius:6px;font-size:12px;min-width:0; text-align:center;}\n        .other-buttons{display:grid;grid-template-columns:1fr 1fr;gap:8px}.other-btn{padding:8px;font-size:12px}\n        \n        .count-selector{display:flex;align-items:center;justify-content:center;gap:10px;}\n        .count-selector .task-btn{flex:0 0 30px; padding: 5px; font-size: 16px; line-height: 1;}\n        .count-selector .count-display{font-size:14px;font-weight:600;color:var(--text-primary) !important;width:40px;text-align:center;}\n\n        .daily-task-list{border-top: 1px solid var(--item-border) !important; padding-top: 10px;}\n        .main-action-buttons{margin-top:8px !important; display:flex !important; flex-wrap:nowrap !important; gap:4px !important; width:100% !important;}\n        .main-action-buttons > button{flex:1 !important; flex-basis:33.333% !important; padding:6px 4px !important; font-size:12px !important; margin:0 !important; height:34px !important; min-height:34px !important; box-sizing:border-box !important; border-radius:4px !important; display:flex !important; align-items:center !important; justify-content:center !important; white-space:nowrap !important; overflow:hidden !important; text-overflow:ellipsis !important;}\n        .main-action-buttons > button[data-task=\"one-key-100\"]{color:#ff6b6b !important; font-weight:bold !important;}\n        .daily-task-item{display:flex;align-items:center;margin-bottom:4px;}\n        .daily-task-item:last-child{margin-bottom:0;}\n        .daily-task-info{display:flex; align-items:center; flex-grow:1;}\n        .daily-task-item input[type=\"checkbox\"]{margin-right:7px;width:15px;height:15px;accent-color:var(--highlight);}\n        .daily-task-item label{font-size:11px;color:var(--text-secondary) !important;}\n        .daily-task-item .task-btn{flex-shrink:0;width:65px;padding:3px 5px;font-size:10px;}\n        \n        .car-data-container, .ws-log-container{margin:0;border:none;background:transparent;}\n        .car-data-table{width:100%;border-collapse:collapse;font-size:10px;}\n        .car-data-table th{background:rgba(0,0,0,.02) !important;border:1px solid var(--item-border) !important; padding: 5px 3px; font-size:11px; color: var(--text-secondary) !important;}\n        .car-data-table td{border:1px solid var(--item-border) !important;color:var(--text-secondary) !important;padding:5px 3px;vertical-align:middle; text-align:center;}\n        .car-rewards{color: var(--text-primary) !important;line-height:1.4em; text-align:left; padding-left:5px !important;}\n        .car-action-btn{font-size:10px;margin:2px auto;width:50px;border-radius:4px; padding:3px 0; background:rgba(0,0,0,0.05); border:1px solid rgba(0,0,0,0.1); color: var(--text-secondary); }\n        .car-action-btn:hover{background:rgba(0,0,0,0.1);}\n        .car-action-btn.send{background:rgba(76, 175, 80, .1);border-color:rgba(76, 175, 80, .2); color: #2f6f44;}\n        .car-action-btn.claim{background:rgba(255, 152, 0, .1);border-color:rgba(255, 152, 0, .2); color: #b95f00;}\n        .car-action-btn.is-disabled{background:rgba(0,0,0,0.04) !important; border-color:transparent !important; color:#ccc !important; transform: none; box-shadow: none;}\n        .pity-counter.mythic-guaranteed{color:#e53e3e;font-weight:bold;}\n\n        #ws-monitor-module .other-buttons { margin-top: 10px; }\n        .ws-log-container { max-height: 55vh; overflow-y: auto; background: rgba(0,0,0,0.02) !important; border-radius: 8px; padding: 10px; border: 1px solid var(--item-border) !important; margin-top: 10px; }\n        .ws-log-entry { position: relative; font-family: 'Courier New', Courier, monospace; font-size: 11px; margin-bottom: 8px; padding: 8px; border-radius: 4px; border: 1px solid transparent; word-break: break-all; }\n        .ws-log-entry .log-header { font-weight: bold; margin-bottom: 4px; color: inherit !important; }\n        .ws-log-entry .log-header.send { color: var(--success) !important; }\n        .ws-log-entry.send { border-color: rgba(56, 161, 105, 0.2) !important; background: rgba(56, 161, 105, 0.05) !important; }\n        .ws-log-entry .log-header.receive { color: var(--highlight) !important; }\n        .ws-log-entry.receive { border-color: rgba(49, 130, 206, 0.2) !important; background: rgba(49, 130, 206, 0.05) !important; }\n        .ws-log-entry .log-time { font-size: 10px; color: var(--text-secondary) !important; margin-left: 8px; }\n        .ws-log-content { white-space: pre-wrap; color: var(--text-primary) !important; }\n        .ws-log-content.collapsed { max-height: 2.5em; overflow: hidden; text-overflow: ellipsis; position: relative; padding-right: 50px; }\n        .log-actions { position: absolute; top: 5px; right: 5px; display: flex; gap: 5px; }\n        .log-actions button { font-size: 10px; padding: 2px 5px; border-radius: 4px; background: rgba(0,0,0,0.08) !important; border: none !important; color: var(--text-secondary) !important; cursor: pointer; }\n        .log-actions button:hover { background: rgba(0,0,0,0.15) !important; color: var(--text-primary) !important; }\n        \n        .gvh-toast{position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--item-bg);backdrop-filter:blur(5px);border:1px solid var(--item-border);color:var(--text-primary);padding:10px 20px;border-radius:8px;font-size:13px;z-index:10001;box-shadow:0 4px 20px rgba(0,0,0,.1);animation:gvh-slideIn .3s,gvh-fadeOut .3s 2.7s}\n        .gvh-toast.success{border-color:var(--success);color:var(--success);}\n        .gvh-toast.error{border-color:var(--highlight);color:var(--error);}\n        .gvh-toast.info{border-color:var(--highlight);color:var(--highlight);}\n    ";
  document.head.appendChild(_0x23ad6b);
  const _0x4e3ca8 = document.createElement("div");
  _0x4e3ca8.className = "xianxia-panel collapse";
  _0x4e3ca8.innerHTML = "\n        <div class=\"panel-header\">\n            <span class=\"panel-icon\">☠️</span>\n            <div class=\"panel-title\">骨头助手 v" + _0x4ceeb + "</div>\n            <div class=\"opacity-control\">\n                <label for=\"opacity-slider\">透明度：</label>\n                <input type=\"range\" id=\"opacity-slider\" min=\"0\" max=\"100\" value=\"100\">\n                <span class=\"opacity-value\">100%</span>\n            </div>\n        </div>\n        <div class=\"panel-content\">\n            <div class=\"tab-nav\">\n                <button class=\"tab-btn active\" data-tab=\"daily\">日常任务</button>\n                <button class=\"tab-btn\" data-tab=\"consumable\">消耗任务</button>\n                <button class=\"tab-btn\" data-tab=\"salt-field\">盐场</button>\n            </div>\n            <div class=\"tab-content\">\n                <div id=\"daily\" class=\"tab-pane active\">\n                    <div class=\"sub-nav\">\n                        <button class=\"sub-tab-btn active\" data-sub-tab=\"quick-tasks-sub\">日常</button>\n                        <button class=\"sub-tab-btn\" data-sub-tab=\"car-sub\">赛车</button>\n                        <button class=\"sub-tab-btn\" data-sub-tab=\"tower-sub\">爬塔</button>\n                        <button class=\"sub-tab-btn\" data-sub-tab=\"arena-sub\">竞技场</button>\n                        <button class=\"sub-tab-btn\" data-sub-tab=\"club-sub\">俱乐部Boss</button>\n                        <button class=\"sub-tab-btn\" data-sub-tab=\"upgrade-sub\">升级</button>\n                    </div>\n                    <div class=\"sub-content\">\n                        <div id=\"quick-tasks-sub\" class=\"sub-pane active\">\n                            <div class=\"task-section\" id=\"quick-tasks-module\">\n                                <div class=\"task-header\"><h4>🚀 日常</h4><div class=\"status\">✅ 就绪</div></div>\n                                <div class=\"daily-task-list\"></div>\n                                <div class=\"main-action-buttons\">\n                                    <button class=\"task-btn other-btn\" data-task=\"execute-daily-checked\">一键执行勾选</button>\n                                    <button class=\"task-btn other-btn\" data-task=\"claim-activity\">领取活跃奖励</button>\n                                    <button class=\"task-btn\" data-task=\"one-key-100\">一键100活跃度</button>\n                                </div>\n                            </div>\n                        </div>\n                        <div id=\"car-sub\" class=\"sub-pane\"><div class=\"task-section\" id=\"car-module\">\n                            <div class=\"task-header\"><h4>🏎️ 赛车</h4><div class=\"status\">✅ 就绪</div></div>\n                            <button class=\"task-btn\" data-task=\"car-query\">查询赛车</button>\n                            <div class=\"car-data-container\"><table class=\"car-data-table\" style=\"display:none;\"><thead><tr><th>车位</th><th>品质</th><th>主要奖励</th><th>状态</th><th>操作</th></tr></thead><tbody></tbody></table></div>\n                        </div></div>\n                        <div id=\"tower-sub\" class=\"sub-pane\">\n                            <div class=\"task-section\" id=\"tower-module\">\n                                <div class=\"task-header\"><h4>🧗 爬塔</h4><div class=\"status\">✅ 就绪</div></div>\n                                <button class=\"task-btn\" data-task=\"tower\">开始爬塔</button>\n                            </div>\n                        </div>\n                        <div id=\"arena-sub\" class=\"sub-pane\">\n                            <div class=\"task-section\" id=\"arena-module\">\n                                <div class=\"task-header\"><h4>⚔️ 竞技场</h4><div class=\"status\">✅ 就绪</div></div>\n                                <div class=\"task-row\"><span class=\"task-label\">次数:</span><input type=\"number\" id=\"arena-count\" value=\"3\" min=\"1\" max=\"99\"><button class=\"task-btn\" data-task=\"arena-start\">开始战斗</button></div>\n                            </div>\n                        </div>\n                         <div id=\"club-sub\" class=\"sub-pane\"><div class=\"task-section\" id=\"club-module\">\n                            <div class=\"task-header\"><h4>⚔️ 俱乐部Boss</h4><div class=\"status\">✅ 就绪</div></div>\n                            <div class=\"task-row\">\n                                <span class=\"task-label\">挑战次数:</span>\n                                <div class=\"count-selector\">\n                                    <button class=\"task-btn\" data-action=\"decrement\">-</button>\n                                    <span class=\"count-display\" id=\"club-boss-count\">2</span>\n                                    <button class=\"task-btn\" data-action=\"increment\">+</button>\n                                </div>\n                                <button class=\"task-btn\" data-task=\"club-boss\">开始挑战</button>\n                            </div>\n                        </div></div>\n                        <div id=\"upgrade-sub\" class=\"sub-pane\"><div class=\"task-section\" id=\"upgrade-module\">\n                            <div class=\"task-header\"><h4>⚡ 升级</h4><div class=\"status\">✅ 就绪</div></div>\n                            <div style=\"display: grid; grid-template-columns: 1fr 1fr; gap: 8px;\">\n                                <button class=\"task-btn other-btn\" data-task=\"starUp\">武将升星</button>\n                                <button class=\"task-btn other-btn\" data-task=\"bookUpgrade\">升级图鉴</button>\n                                <button class=\"task-btn other-btn\" data-task=\"collectionUpgrade\">藏品图鉴升级</button>\n                                <button class=\"task-btn other-btn\" data-task=\"assist-battle\">助战</button>\n                            </div>\n                        </div></div>\n                    </div>\n                </div>\n                <div id=\"consumable\" class=\"tab-pane\">\n                    <div class=\"sub-nav\"><button class=\"sub-tab-btn active\" data-sub-tab=\"fishing-sub\">钓鱼</button><button class=\"sub-tab-btn\" data-sub-tab=\"recruit-sub\">招募</button><button class=\"sub-tab-btn\" data-sub-tab=\"box-sub\">宝箱</button></div>\n                    <div class=\"sub-content\">\n                        <div id=\"fishing-sub\" class=\"sub-pane active\"><div class=\"task-section\" id=\"fishing-module\">\n                             <div class=\"task-header\"><h4>🎣 钓鱼</h4><div class=\"status\">✅ 就绪</div></div>\n                             <div class=\"task-row\"><span class=\"task-label\">普通钓鱼</span><input type=\"number\" id=\"fishing-count-1\" value=\"10\" min=\"1\"><button class=\"task-btn\" data-task=\"start-fishing-1\">开始</button></div>\n                             <div class=\"task-row\"><span class=\"task-label\">高级钓鱼</span><input type=\"number\" id=\"fishing-count-2\" value=\"10\" min=\"1\"><button class=\"task-btn\" data-task=\"start-fishing-2\">开始</button></div>\n                        </div></div>\n                        <div id=\"recruit-sub\" class=\"sub-pane\"><div class=\"task-section\" id=\"recruit-module\">\n                            <div class=\"task-header\"><h4>👥 招募</h4><div class=\"status\">✅ 就绪</div></div>\n                            <div class=\"task-row\"><span class=\"task-label\">次数:</span><input type=\"number\" id=\"recruit-count\" value=\"10\" min=\"1\"><button class=\"task-btn\" data-task=\"recruit\">开始招募</button></div>\n                        </div></div>\n                        <div id=\"box-sub\" class=\"sub-pane\"><div class=\"task-section\" id=\"box-module\">\n                            <div class=\"task-header\"><h4>📦 宝箱</h4><div class=\"status\">✅ 就绪</div></div>\n                            <div class=\"task-row\"><span class=\"task-label\">木质宝箱</span><input type=\"number\" id=\"box-count-2001\" value=\"10\" min=\"10\" step=\"10\"><button class=\"task-btn\" data-task=\"open-box-2001\">开启宝箱</button></div>\n                            <div class=\"task-row\"><span class=\"task-label\">青铜宝箱</span><input type=\"number\" id=\"box-count-2002\" value=\"10\" min=\"10\" step=\"10\"><button class=\"task-btn\" data-task=\"open-box-2002\">开启宝箱</button></div>\n                            <div class=\"task-row\"><span class=\"task-label\">黄金宝箱</span><input type=\"number\" id=\"box-count-2003\" value=\"10\" min=\"10\" step=\"10\"><button class=\"task-btn\" data-task=\"open-box-2003\">开启宝箱</button></div>\n                            <div class=\"task-row\"><span class=\"task-label\">铂金宝箱</span><input type=\"number\" id=\"box-count-2004\" value=\"10\" min=\"10\" step=\"10\"><button class=\"task-btn\" data-task=\"open-box-2004\">开启宝箱</button></div>\n                        </div></div>\n                    </div>\n                </div>\n                <div id=\"salt-field\" class=\"tab-pane\">\n                    <div class=\"sub-nav\"><button class=\"sub-tab-btn active\" data-sub-tab=\"salt-battle-sub\">盐场战报</button><button class=\"sub-tab-btn\" data-sub-tab=\"salt-map-sub\">盐场地图</button></div>\n                    <div class=\"sub-content\">\n                        <div id=\"salt-battle-sub\" class=\"sub-pane active\"><div class=\"task-section\" id=\"salt-battle-module\">\n                            <div class=\"task-header\"><h4>📊 盐场战报</h4><div class=\"status\">✅ 就绪</div></div>\n                            <div class=\"task-row\"><button class=\"task-btn\" data-task=\"salt-battle-report\">查看盐场战报</button></div>\n                            <div id=\"salt-battle-list\" style=\"margin-top: 10px; max-height: 400px; overflow-y: auto;\"></div>\n                        </div></div>\n                        <div id=\"salt-map-sub\" class=\"sub-pane\"><div class=\"task-section\" id=\"salt-map-module\">\n                            <div class=\"task-header\"><h4>🗺️ 盐场地图</h4><div class=\"status\">✅ 就绪</div></div>\n                            <div class=\"task-row\"><button class=\"task-btn\" data-task=\"salt-map\">查看盐场地图</button></div>\n                            <div id=\"salt-map-container\" style=\"margin-top: 10px; height: 400px; overflow: auto;\"></div>\n                        </div></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ";
  document.body.appendChild(_0x4e3ca8);
  const _0x5ed60d = {
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
  const _0x259832 = {
    showtip(_0x44883a, _0xdd5ff = "info") {
      const _0x2997c9 = document.createElement("div");
      _0x2997c9.className = "gvh-toast " + _0xdd5ff;
      _0x2997c9.innerText = _0x44883a;
      document.body.appendChild(_0x2997c9);
      setTimeout(() => _0x2997c9.remove(), 3000);
    },
    async sendCommand(_0x30092f, _0x217b3d = {}) {
      if (!window.ws?.["sendAsync"]) {
        this.showtip("错误：WebSocket连接不可用", "error");
        throw new Error("WebSocket connection not available");
      }
      try {
        return await window.ws.sendAsync({
          ack: 0,
          cmd: _0x30092f,
          params: _0x217b3d,
          seq: Date.now(),
          time: Date.now()
        });
      } catch (_0x263e3) {
        {
          this.showtip("命令发送失败: " + _0x263e3.message, "error");
          throw _0x263e3;
        }
      }
    },
    delay: _0x53ceb6 => new Promise(_0x336db2 => setTimeout(_0x336db2, _0x53ceb6 * 1000)),
    getFormatDate: _0x4365ec => {
      const _0x50f358 = new Date(_0x4365ec);
      _0x50f358.setHours(_0x50f358.getHours() + 8);
      return _0x50f358;
    }
  };
  const _0x5cd8b1 = _0x4e3ca8.querySelector(".panel-content");
  const _0x2f9be4 = _0x4e3ca8.querySelector("#opacity-slider");
  const _0x4276dd = _0x9194f6 => {
    const _0x4a8c15 = _0x9194f6 / 100;
    _0x4e3ca8.style.background = "transparent";
    _0x4e3ca8.querySelector(".opacity-value").textContent = _0x9194f6 + "%";
    _0x4e3ca8.style.setProperty("--panel-bg", "rgba(247, 250, 252, " + 0.98 * _0x4a8c15 + ")");
    _0x4e3ca8.style.setProperty("--item-bg", "rgba(255, 255, 255, " + _0x4a8c15 + ")");
    const _0x4a97b0 = _0x4e3ca8.querySelector(".panel-header");
    _0x4a97b0 && (_0x4a97b0.style.background = "rgba(0, 0, 0, " + 0.02 * _0x4a8c15 + ")");
  };
  _0x2f9be4.addEventListener("input", _0x1be3d6 => _0x4276dd(_0x1be3d6.target.value));
  _0x4276dd(_0x2f9be4.value);
  _0x4e3ca8.querySelector(".panel-header").addEventListener("click", _0x197b37 => {
    {
      if (_0x197b37.target.closest(".opacity-control")) {
        return;
      }
      _0x4e3ca8.classList.toggle("collapse");
      _0x4e3ca8.classList.toggle("expanded");
    }
  });
  _0x5cd8b1.addEventListener("click", _0xdbaaf1 => {
    const _0x35f032 = _0xdbaaf1.target.closest(".tab-btn");
    const _0x3065e4 = _0xdbaaf1.target.closest(".sub-tab-btn");
    _0x35f032 && !_0x35f032.classList.contains("active") && (_0x5cd8b1.querySelector(".tab-btn.active").classList.remove("active"), _0x35f032.classList.add("active"), _0x5cd8b1.querySelector(".tab-pane.active").classList.remove("active"), _0x5cd8b1.querySelector("#" + _0x35f032.dataset.tab).classList.add("active"));
    if (_0x3065e4 && !_0x3065e4.classList.contains("active")) {
      const _0x131330 = _0x3065e4.closest(".tab-pane");
      _0x131330.querySelector(".sub-tab-btn.active").classList.remove("active");
      _0x3065e4.classList.add("active");
      _0x131330.querySelector(".sub-pane.active").classList.remove("active");
      _0x131330.querySelector("#" + _0x3065e4.dataset.subTab).classList.add("active");
    }
  });
  const _0x8344d8 = document.getElementById("club-boss-count");
  _0x4e3ca8.querySelector("#club-module").addEventListener("click", _0x5c3935 => {
    {
      const _0x5242e3 = _0x5c3935.target.dataset.action;
      if (!_0x5242e3) {
        return;
      }
      let _0x13939c = parseInt(_0x8344d8.textContent);
      if (_0x5242e3 === "increment" && _0x13939c < 4) {
        _0x13939c++;
      }
      if (_0x5242e3 === "decrement" && _0x13939c > 0) {
        _0x13939c--;
      }
      _0x8344d8.textContent = _0x13939c;
    }
  });
  const _0x253662 = {
    id: "daily-hangup-combined",
    label: "收菜5次、加钟",
    task: "daily-task-hangup-combined",
    checked: true
  };
  const _0x4d10aa = {
    id: "daily-bottle-renew",
    label: "续罐子",
    task: "daily-task-bottle-renew",
    checked: true
  };
  const _0x275742 = {
    id: "daily-bottle-claim",
    label: "收盐罐",
    task: "daily-task-bottle-claim",
    checked: false
  };
  const _0x16761f = {
    id: "daily-quick-tasks",
    label: "邮件、签到、赠金币、福利",
    task: "daily-task-combined-quick",
    checked: true
  };
  const _0x5658c0 = {
    id: "daily-boss",
    label: "每日咸王考验",
    task: "daily-task-boss",
    checked: true
  };
  const _0x163724 = {
    id: "daily-gold",
    label: "点金三次",
    task: "daily-task-gold",
    checked: true
  };
  const _0x42c69b = {
    id: "daily-quiz",
    label: "自动答题",
    task: "daily-task-quiz",
    checked: true
  };
  const _0x8becd2 = {
    id: "daily-genie-tickets",
    label: "领取扫荡券",
    task: "daily-task-genie-tickets",
    checked: true
  };
  const _0x59d659 = {
    id: "daily-genie-sweep",
    label: "灯神扫荡",
    task: "daily-task-genie-sweep",
    checked: true
  };
  const _0x342618 = {
    id: "daily-box",
    label: "开启10木箱",
    task: "daily-task-box",
    checked: false
  };
  const _0x50f7bb = {
    id: "daily-recruit",
    label: "执行2次招募",
    task: "daily-task-recruit",
    checked: false
  };
  const _0x1a8736 = {
    id: "daily-arena",
    label: "进行3次竞技场战斗",
    task: "daily-task-arena",
    checked: false
  };
  const _0x3585c1 = {
    id: "daily-buy-bronze-box",
    label: "购买青铜宝箱",
    task: "daily-task-buy-bronze-box",
    checked: false
  };
  const _0x399a99 = [_0x253662, _0x4d10aa, _0x275742, _0x16761f, _0x5658c0, _0x163724, _0x42c69b, _0x8becd2, _0x59d659, _0x342618, _0x50f7bb, _0x1a8736, _0x3585c1];
  const _0x2a50b8 = _0x4e3ca8.querySelector(".daily-task-list");
  _0x399a99.forEach(_0x42e10a => {
    const _0x88abe3 = document.createElement("div");
    _0x88abe3.className = "daily-task-item";
    _0x88abe3.innerHTML = "\n            <div class=\"daily-task-info\">\n                <input type=\"checkbox\" id=\"" + _0x42e10a.id + "\" data-task-name=\"" + _0x42e10a.task + "\" " + (_0x42e10a.checked ? "checked" : "") + ">\n                <label for=\"" + _0x42e10a.id + "\">" + _0x42e10a.label + "</label>\n            </div>\n            <button class=\"task-btn\" data-task=\"" + _0x42e10a.task + "\">独立执行</button>\n        ";
    _0x2a50b8.appendChild(_0x88abe3);
  });
  const _0x3cb36f = {
    fullCarData: [],
    timeInterval: null,
    sendCount: 0,
    isBatchRefreshing: false,
    availableConditions: ["品质", "金砖", "招募令", "彩玉", "白玉", "万能碎片", "刷新券"]
  };
  const _0x2e7f34 = {
    statusEl: null,
    dataTable: null,
    dataBody: null
  };
  const _0x3d6ce3 = {
    "1": "普通",
    "2": "稀有",
    "3": "史诗",
    "4": "传说",
    "5": "神话",
    "6": "传奇"
  };
  const _0x3838dc = {
    "1": "color:var(--text-secondary)",
    "2": "color:#3182ce",
    "3": "color:#9f7aea",
    "4": "color:#dd6b20",
    "5": "color:#e53e3e",
    "6": "color:#d69e2e"
  };
  const _0x27dca7 = {
    state: _0x3cb36f,
    dom: _0x2e7f34,
    init() {
      {
        const _0x42d858 = document.getElementById("car-module");
        this.dom = {
          statusEl: _0x42d858.querySelector(".status"),
          dataTable: _0x42d858.querySelector(".car-data-table"),
          dataBody: _0x42d858.querySelector("tbody")
        };
        _0x42d858.addEventListener("click", _0x10fe29 => {
          const _0x250772 = _0x10fe29.target.closest(".task-btn, .car-action-btn, .car-batch-btn");
          if (!_0x250772) {
            return;
          }
          const {
            task: _0x3d7fae,
            action: _0xa0bf0d,
            id: _0x1797e7
          } = _0x250772.dataset;
          if (_0x3d7fae === "car-query") {
            this.handleTask(_0x250772);
          } else {
            if (_0xa0bf0d === "toggleRefreshFilter") {
              {
                const _0x58e3d6 = document.querySelector(".refresh-filter-panel");
                if (_0x58e3d6) {
                  _0x58e3d6.style.display = _0x58e3d6.style.display === "none" ? "block" : "none";
                }
              }
            } else {
              if (_0xa0bf0d === "sendAll") {
                this.sendAllCars();
              } else {
                if (_0xa0bf0d === "claimAll") {
                  this.claimAllCars();
                } else {
                  if (_0xa0bf0d === "send") {
                    this.sendCar(_0x1797e7);
                  } else {
                    if (_0xa0bf0d === "refresh") {
                      this.refreshCar(_0x1797e7);
                    } else {
                      if (_0xa0bf0d === "claim" && !_0x250772.classList.contains("is-disabled")) {
                        this.claimCar(_0x1797e7);
                      } else {
                        if (_0xa0bf0d === "claim") {
                          _0x259832.showtip("赛车尚未到站，无法收取", "error");
                        } else {
                          if (_0xa0bf0d === "startBatchRefresh" && !_0x250772.classList.contains("is-disabled")) {
                            this.startBatchRefresh();
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
    async handleTask(_0x27fc73) {
      const _0x2b68c9 = _0x27fc73.textContent;
      _0x27fc73.disabled = true;
      _0x27fc73.textContent = "查询中...";
      await this.queryClubCars();
      _0x27fc73.disabled = false;
      _0x27fc73.textContent = _0x2b68c9;
    },
    isCarEventActive: () => {
      const _0x473b80 = new Date();
      return _0x473b80.getDay() >= 1 && _0x473b80.getDay() <= 3 && _0x473b80.getHours() >= 6 && _0x473b80.getHours() < 20;
    },
    parseRewards(_0x701038) {
      if (!_0x701038?.["length"]) {
        return [];
      }
      const _0x2732d2 = {
        "2_0": "金砖",
        "0_0": "金砖",
        "3_1001": "招募令",
        "3_1023": "彩玉",
        "3_1022": "白玉",
        "3_3201": "万能碎片",
        "3_35002": "刷新券"
      };
      const _0x2dd5af = {};
      _0x701038.forEach(_0x32e176 => {
        {
          const _0x2ac5c4 = _0x2732d2[_0x32e176.type + "_" + _0x32e176.itemId];
          if (_0x2ac5c4) {
            _0x2dd5af[_0x2ac5c4] = (_0x2dd5af[_0x2ac5c4] || 0) + _0x32e176.value;
          }
        }
      });
      return Object.entries(_0x2dd5af).map(([_0x5c06a1, _0x209624]) => _0x5c06a1 + ":" + _0x209624);
    },
    getCarQualityText: _0x2c7047 => _0x3d6ce3[_0x2c7047] || "未知",
    getCarQualityStyle: _0x3a896f => (_0x3838dc[_0x3a896f] || "") + ";font-weight:bold;",
    getCarStatus(_0x12ea15) {
      {
        const _0x3b8e77 = {
          status: "待发车",
          statusClass: "status-pending"
        };
        if (!_0x12ea15.sendAt) {
          return _0x3b8e77;
        }
        const _0x519396 = {
          "1": 2.5,
          "2": 2.5,
          "3": 3,
          "4": 3,
          "5": 4,
          "6": 4
        };
        const _0x23780c = (_0x519396[_0x12ea15.quality] || 0) * 3600000;
        const _0x46ae1c = {
          status: "未知状态",
          statusClass: "status-pending"
        };
        if (!_0x23780c) {
          return _0x46ae1c;
        }
        const _0x5e5d07 = _0x12ea15.sendAt * 1000 + _0x23780c - Date.now();
        if (_0x5e5d07 <= 0) {
          return {
            status: "已完成",
            statusClass: "status-completed"
          };
        }
        const _0x59fda4 = _0x52a4ae => _0x52a4ae.toString().padStart(2, "0");
        return {
          status: "剩余 " + _0x59fda4(Math.floor(_0x5e5d07 / 3600000)) + ":" + _0x59fda4(Math.floor(_0x5e5d07 % 3600000 / 60000)) + ":" + _0x59fda4(Math.floor(_0x5e5d07 % 60000 / 1000)),
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
        const _0x2c4e06 = this.state.fullCarData.length > 0;
        this.dom.dataTable.style.display = _0x2c4e06 ? "table" : "none";
        if (!_0x2c4e06) {
          this.stopTimeRefresh();
          return;
        }
        this.dom.dataBody.innerHTML = "";
        const _0x49d724 = [...this.state.fullCarData].sort((_0xc63d7c, _0x33d11f) => _0xc63d7c.slot - _0x33d11f.slot);
        const _0x724d67 = {
          "金砖": 2000,
          "万能碎片": 10,
          "招募令": 10,
          "白玉": 2000,
          "彩玉": 2
        };
        const _0x2f598b = _0x1d42f4 => {
          {
            const [_0x1d2cd3, _0x1c39ae] = _0x1d42f4.split(":");
            return _0x1c39ae && parseInt(_0x1c39ae) >= (_0x724d67[_0x1d2cd3] || Infinity);
          }
        };
        _0x49d724.forEach(_0x358ce1 => {
          {
            const _0x29e7c9 = this.getCarStatus(_0x358ce1);
            let _0x469b31 = "<div class=\"car-status " + _0x29e7c9.statusClass + "\">" + _0x29e7c9.status + "</div>";
            if (!_0x358ce1.sendAt) {
              const _0x243e32 = 5 - _0x358ce1.refreshCount;
              _0x469b31 += "<div class=\"pity-counter " + (_0x243e32 <= 1 ? "mythic-guaranteed" : "") + "\">" + (_0x243e32 <= 1 ? "本次刷新必出神话" : "再刷" + _0x243e32 + "次出神话") + "</div>";
            }
            const _0x5d8773 = !this.isCarEventActive() || this.state.sendCount >= 4;
            const _0x1aefa7 = _0x29e7c9.statusClass === "status-completed";
            const _0x1e16ac = !_0x358ce1.sendAt ? "<button class=\"car-action-btn\" data-action=\"refresh\" data-id=\"" + _0x358ce1.carId + "\">刷新</button><button class=\"car-action-btn send " + (_0x5d8773 ? "is-disabled" : "") + "\" data-action=\"send\" data-id=\"" + _0x358ce1.carId + "\">发车</button>" : "<button class=\"car-action-btn claim " + (_0x1aefa7 ? "" : "is-disabled") + "\" data-action=\"claim\" data-id=\"" + _0x358ce1.carId + "\">收车</button>";
            const _0x5c9296 = this.dom.dataBody.insertRow();
            const _0x3e73bb = _0x358ce1.rewards.map(_0x17c8f3 => "<span style=\"" + (_0x2f598b(_0x17c8f3) ? "color:#e53e3e;" : "") + "\">" + _0x17c8f3 + "</span>").join("<br>") || "暂无";
            _0x5c9296.innerHTML = "<td>" + (_0x358ce1.slot + 1) + "</td><td style=\"" + this.getCarQualityStyle(_0x358ce1.quality) + "\">" + this.getCarQualityText(_0x358ce1.quality) + "</td><td class=\"car-rewards\" title=\"" + _0x358ce1.rewards.join("，") + "\">" + _0x3e73bb + "</td><td>" + _0x469b31 + "</td><td>" + _0x1e16ac + "</td>";
          }
        });
        this.renderBatchActionsAndFilterPanel();
        this.startTimeRefresh();
      }
    },
    renderBatchActionsAndFilterPanel() {
      let _0x1dbaf8 = this.dom.dataTable.parentElement;
      let _0x211a83 = _0x1dbaf8.querySelector(".car-batch-actions");
      !_0x211a83 && (_0x211a83 = document.createElement("div"), _0x211a83.className = "car-batch-actions", _0x211a83.style.cssText = "margin-top: 10px; display: flex; gap: 10px;", _0x1dbaf8.appendChild(_0x211a83));
      const _0x3901c3 = this.isCarEventActive() && this.state.sendCount < 4 && this.state.fullCarData.some(_0x3410c5 => !_0x3410c5.sendAt);
      const _0x26e73a = this.state.fullCarData.some(_0x4d779f => this.getCarStatus(_0x4d779f).statusClass === "status-completed");
      _0x211a83.innerHTML = "\n            <button class=\"task-btn " + (!_0x3901c3 ? "is-disabled" : "") + "\" data-action=\"sendAll\">一键发车</button>\n            <button class=\"task-btn " + (!_0x26e73a ? "is-disabled" : "") + "\" data-action=\"claimAll\">一键收车</button>\n            <button class=\"task-btn\" data-action=\"toggleRefreshFilter\">设置刷新条件</button>\n        ";
      let _0x172565 = _0x1dbaf8.querySelector(".refresh-filter-panel");
      if (!_0x172565) {
        {
          _0x172565 = document.createElement("div");
          _0x172565.className = "refresh-filter-panel";
          _0x172565.style.cssText = "display: none; margin-top: 10px; padding: 10px; border: 1px solid var(--item-border); border-radius: 7px; background: var(--item-bg);";
          _0x1dbaf8.appendChild(_0x172565);
          this.buildFilterPanelUI(_0x172565);
          this.setupFilterPanelEvents(_0x172565);
          this.loadUserSettings();
        }
      }
      this.updateRefreshButtonState();
    },
    buildFilterPanelUI(_0x57bf47) {
      _0x57bf47.innerHTML = "\n            <style>\n                .filter-group { border: 1px solid var(--item-border); border-radius: 5px; padding: 8px; margin-bottom: 10px; }\n                .group-title { font-size: 13px; font-weight: bold; color: var(--text-primary); display: block; margin-bottom: 8px; }\n                .filter-row, .placeholder-row { display: flex; align-items: center; gap: 8px; margin-bottom: 5px; }\n                .filter-row-label { font-size: 12px; color: var(--text-secondary); min-width: 60px; text-align: right; }\n                .filter-row-value, .placeholder-select { width: 90px; padding: 3px; font-size: 12px; box-sizing: border-box; }\n                .count-selector { display: flex; align-items: center; gap: 0; }\n                .count-display { padding: 0 10px; font-size: 12px; min-width: 40px; text-align: center; }\n                .add-condition-btn { font-size: 12px; padding: 2px 8px; margin-top: 5px; }\n                .remove-condition-btn { font-size: 12px; padding: 0; height: 22px; width: 22px; cursor: pointer; border-radius: 50%; }\n            </style>\n\n            <div class=\"filter-group\" id=\"and-conditions-group\">\n                <strong class=\"group-title\">必须同时满足 (AND)</strong>\n                <div class=\"group-content\"></div>\n                <button class=\"task-btn add-condition-btn\" data-group=\"and\">[+] 添加必须条件</button>\n            </div>\n\n            <div class=\"filter-group\" id=\"or-conditions-group\">\n                <strong class=\"group-title\">并满足任一条件 (OR)</strong>\n                <div class=\"group-content\"></div>\n                <button class=\"task-btn add-condition-btn\" data-group=\"or\">[+] 添加任一条件</button>\n            </div>\n\n            <div style=\"display: flex; align-items: center; gap: 10px; margin-top: 15px;\">\n                <span style=\"font-size: 12px; font-weight: bold; min-width: 80px;\">单车最大刷新:</span>\n                <div class=\"count-selector\">\n                    <button class=\"task-btn\" data-action=\"decrement-refresh-count\" style=\"width: 28px; height: 28px; padding: 0;\">-</button>\n                    <span id=\"max-refresh-count\" class=\"count-display\">5</span>\n                    <button class=\"task-btn\" data-action=\"increment-refresh-count\" style=\"width: 28px; height: 28px; padding: 0;\">+</button>\n                </div>\n            </div>\n            <div style=\"display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 10px;\">\n                <button class=\"task-btn is-disabled\" id=\"start-batch-refresh\" data-action=\"startBatchRefresh\">一键刷新</button>\n                <button class=\"task-btn\" id=\"send-all-cars-panel\" data-action=\"sendAll\">一键发车</button>\n            </div>\n        ";
    },
    setupFilterPanelEvents(_0x14c7a4) {
      const _0x4547c2 = (_0xc5c40c, _0x5958cd) => {
        let _0x283798;
        return (..._0x5c04ae) => {
          clearTimeout(_0x283798);
          _0x283798 = setTimeout(() => _0xc5c40c.apply(this, _0x5c04ae), _0x5958cd);
        };
      };
      const _0x6e20a2 = _0x4547c2(() => this.saveUserSettings(), 500);
      _0x14c7a4.addEventListener("click", _0x4549b0 => {
        const _0x3d9b26 = _0x4549b0.target;
        const _0x3df642 = _0x3d9b26.dataset.action;
        if (_0x3df642 === "increment-refresh-count" || _0x3df642 === "decrement-refresh-count") {
          {
            const _0xd6606 = document.getElementById("max-refresh-count");
            let _0x1f37ec = parseInt(_0xd6606.textContent);
            if (_0x3df642 === "increment-refresh-count" && _0x1f37ec < 100) {
              _0x1f37ec++;
            }
            if (_0x3df642 === "decrement-refresh-count" && _0x1f37ec > 1) {
              _0x1f37ec--;
            }
            _0xd6606.textContent = _0x1f37ec;
            this.saveUserSettings();
          }
        } else {
          if (_0x3d9b26.classList.contains("add-condition-btn")) {
            this.addConditionPlaceholder(_0x3d9b26.dataset.group);
          } else {
            _0x3d9b26.classList.contains("remove-condition-btn") && (_0x3d9b26.closest(".filter-row, .placeholder-row").remove(), this.saveUserSettings(), this.updateRefreshButtonState());
          }
        }
      });
      _0x14c7a4.addEventListener("change", _0x186f58 => {
        const _0x1fbaeb = _0x186f58.target;
        _0x1fbaeb.classList.contains("placeholder-select") ? this.transformPlaceholder(_0x1fbaeb) : (this.saveUserSettings(), this.updateRefreshButtonState());
      });
      _0x14c7a4.addEventListener("input", _0x375062 => {
        {
          if (_0x375062.target.type === "number") {
            _0x6e20a2();
          }
        }
      });
    },
    addConditionPlaceholder(_0x22fadd) {
      const _0x235095 = document.querySelector("#" + _0x22fadd + "-conditions-group .group-content");
      const _0x5ba614 = new Set([...document.querySelectorAll(".filter-row")].map(_0x1ddf10 => _0x1ddf10.dataset.type));
      const _0x58c7b2 = this.state.availableConditions.filter(_0x4245ac => !_0x5ba614.has(_0x4245ac));
      if (_0x58c7b2.length === 0) {
        _0x259832.showtip("所有条件都已添加", "info");
        return;
      }
      const _0x158234 = document.createElement("div");
      _0x158234.className = "placeholder-row";
      const _0x31ecfd = _0x58c7b2.map(_0x4dbe80 => "<option value=\"" + _0x4dbe80 + "\">" + _0x4dbe80 + "</option>").join("");
      _0x158234.innerHTML = "\n            <input type=\"checkbox\" checked disabled>\n            <select class=\"placeholder-select\"><option value=\"\">--选择条件--</option>" + _0x31ecfd + "</select>\n            <button class=\"task-btn remove-condition-btn\">-</button>\n        ";
      _0x235095.appendChild(_0x158234);
    },
    transformPlaceholder(_0x231dd8) {
      {
        const _0x3c4457 = _0x231dd8.closest(".placeholder-row");
        const _0x260df5 = _0x231dd8.value;
        if (!_0x260df5) {
          return;
        }
        const _0x5e1110 = document.createElement("div");
        _0x5e1110.className = "filter-row";
        _0x5e1110.dataset.type = _0x260df5;
        let _0x5a2b35 = "";
        if (_0x260df5 === "品质") {
          _0x5a2b35 = "<select class=\"filter-row-value\">\n                           <option value=\"6\">传奇</option>\n                           <option value=\"5\" selected>神话</option>\n                           <option value=\"4\">传说</option>\n                           <option value=\"3\">史诗</option>\n                           <option value=\"2\">稀有</option>\n                           <option value=\"1\">普通</option>\n                       </select>";
        } else {
          {
            const _0x5c6c17 = {
              "金砖": 2000,
              "招募令": 10,
              "彩玉": 5,
              "白玉": 2000,
              "万能碎片": 10,
              "刷新券": 4
            };
            const _0x82c73f = _0x5c6c17[_0x260df5] || 1;
            _0x5a2b35 = "<input type=\"number\" class=\"filter-row-value\" value=\"" + _0x82c73f + "\" min=\"1\">";
          }
        }
        _0x5e1110.innerHTML = "\n            <input type=\"checkbox\" class=\"condition-enabled\" checked>\n            <label class=\"filter-row-label\">" + _0x260df5 + " ≥</label>\n            " + _0x5a2b35 + "\n            <button class=\"task-btn remove-condition-btn\">-</button>\n        ";
        _0x3c4457.replaceWith(_0x5e1110);
        this.saveUserSettings();
        this.updateRefreshButtonState();
      }
    },
    saveUserSettings() {
      const _0x1cac70 = {
        and: [],
        or: [],
        maxRefresh: document.getElementById("max-refresh-count").textContent
      };
      document.querySelectorAll("#and-conditions-group .filter-row").forEach(_0x5863f8 => {
        _0x1cac70.and.push({
          type: _0x5863f8.dataset.type,
          enabled: _0x5863f8.querySelector(".condition-enabled").checked,
          value: _0x5863f8.querySelector(".filter-row-value").value
        });
      });
      document.querySelectorAll("#or-conditions-group .filter-row").forEach(_0x452731 => {
        _0x1cac70.or.push({
          type: _0x452731.dataset.type,
          enabled: _0x452731.querySelector(".condition-enabled").checked,
          value: _0x452731.querySelector(".filter-row-value").value
        });
      });
      localStorage.setItem("carModuleSettings_v3", JSON.stringify(_0x1cac70));
    },
    loadUserSettings() {
      {
        const _0x4bd9c2 = localStorage.getItem("carModuleSettings_v3");
        if (!_0x4bd9c2) {
          return;
        }
        const _0x23150b = JSON.parse(_0x4bd9c2);
        const _0xa39126 = _0x4feeb0 => {
          {
            const _0x156efb = document.createElement("div");
            _0x156efb.className = "filter-row";
            _0x156efb.dataset.type = _0x4feeb0.type;
            let _0x460aeb = "";
            _0x4feeb0.type === "品质" ? _0x460aeb = "<select class=\"filter-row-value\"><option value=\"6\">传奇</option><option value=\"5\">神话</option><option value=\"4\">传说</option><option value=\"3\">史诗</option><option value=\"2\">稀有</option></select>" : _0x460aeb = "<input type=\"number\" class=\"filter-row-value\" min=\"1\">";
            _0x156efb.innerHTML = "\n                <input type=\"checkbox\" class=\"condition-enabled\" " + (_0x4feeb0.enabled ? "checked" : "") + ">\n                <label class=\"filter-row-label\">" + _0x4feeb0.type + " ≥</label>\n                " + _0x460aeb + "\n                <button class=\"task-btn remove-condition-btn\">-</button>\n            ";
            _0x156efb.querySelector(".filter-row-value").value = _0x4feeb0.value;
            return _0x156efb;
          }
        };
        const _0xa1fa71 = document.querySelector("#and-conditions-group .group-content");
        _0xa1fa71.innerHTML = "";
        _0x23150b.and.forEach(_0x1f879e => _0xa1fa71.appendChild(_0xa39126(_0x1f879e)));
        const _0x391bd5 = document.querySelector("#or-conditions-group .group-content");
        _0x391bd5.innerHTML = "";
        _0x23150b.or.forEach(_0x4cba4f => _0x391bd5.appendChild(_0xa39126(_0x4cba4f)));
        document.getElementById("max-refresh-count").textContent = _0x23150b.maxRefresh;
        this.updateRefreshButtonState();
      }
    },
    updateRefreshButtonState() {
      {
        const _0x37a9f2 = document.querySelector(".refresh-filter-panel");
        if (!_0x37a9f2) {
          return;
        }
        const _0x264774 = _0x37a9f2.querySelector("#start-batch-refresh");
        const _0x1b746b = _0x37a9f2.querySelector(".condition-enabled:checked");
        _0x1b746b ? _0x264774.classList.remove("is-disabled") : _0x264774.classList.add("is-disabled");
        const _0x2e15a8 = _0x37a9f2.querySelector("#send-all-cars-panel");
        const _0x2ca005 = this.isCarEventActive() && this.state.sendCount < 4 && this.state.fullCarData.some(_0x5d4e45 => !_0x5d4e45.sendAt);
        _0x2ca005 ? _0x2e15a8.classList.remove("is-disabled") : _0x2e15a8.classList.add("is-disabled");
      }
    },
    async startBatchRefresh() {
      if (this.state.isBatchRefreshing) {
        {
          _0x259832.showtip("一键刷新任务已在进行中", "warning");
          return;
        }
      }
      const _0x43c8ba = document.getElementById("start-batch-refresh");
      const _0xce733c = _0x43c8ba ? _0x43c8ba.textContent : "启动...";
      try {
        this.state.isBatchRefreshing = true;
        _0x43c8ba && (_0x43c8ba.disabled = true, _0x43c8ba.textContent = "运行中...");
        const _0xcca900 = parseInt(document.getElementById("max-refresh-count")?.["textContent"] || 5);
        const {
          andConditions: _0x111c2f,
          orConditions: _0x2d851d
        } = this.collectConditionsFromUI();
        if (_0x111c2f.length === 0 && _0x2d851d.length === 0) {
          _0x259832.showtip("请至少设置一个启用的刷新条件", "error");
          return;
        }
        let _0x190ace = this.state.fullCarData.filter(_0x11af8b => !_0x11af8b.sendAt).map(_0x51a5fe => ({
          car: _0x51a5fe,
          refreshCount: 0,
          isSatisfied: this.checkCarFilterConditions(_0x51a5fe, _0x111c2f, _0x2d851d)
        }));
        const _0x1542be = _0x190ace.filter(_0x57c27b => _0x57c27b.isSatisfied).length;
        _0x1542be > 0 && _0x259832.showtip("已有 " + _0x1542be + " 辆车满足条件，将跳过。", "info");
        let _0x33e4b4 = _0x190ace.filter(_0x336250 => !_0x336250.isSatisfied);
        if (_0x33e4b4.length === 0) {
          _0x259832.showtip("所有待发车辆都已满足条件，无需刷新！", "success");
          return;
        }
        _0x259832.showtip("任务开始，将为 " + _0x33e4b4.length + " 辆车进行刷新...", "info");
        let _0x4fe375 = 0;
        for (const _0x38eb11 of _0x33e4b4) {
          if (!this.state.isBatchRefreshing) {
            {
              _0x259832.showtip("任务已手动停止。", "warning");
              break;
            }
          }
          while (_0x38eb11.refreshCount < _0xcca900 && !_0x38eb11.isSatisfied) {
            this.dom.statusEl.textContent = "🔄 刷新中... 车位 " + (_0x38eb11.car.slot + 1) + " (第 " + (_0x38eb11.refreshCount + 1) + "/" + _0xcca900 + " 次)";
            const _0xc89391 = await this.performCarAction("refresh", _0x38eb11.car.carId, "刷新");
            if (!_0xc89391) {
              {
                _0x259832.showtip("车位 " + (_0x38eb11.car.slot + 1) + " 刷新失败，可能金砖不足，将跳过此车。", "warning");
                break;
              }
            }
            _0x38eb11.refreshCount++;
            _0x4fe375++;
            await this.queryClubCars();
            const _0x11516a = this.state.fullCarData.find(_0x362b43 => _0x362b43.carId === _0x38eb11.car.carId);
            if (_0x11516a) {
              _0x38eb11.car = _0x11516a;
              this.checkCarFilterConditions(_0x11516a, _0x111c2f, _0x2d851d) && (_0x38eb11.isSatisfied = true, _0x259832.showtip("🎉 车位 " + (_0x11516a.slot + 1) + " 在刷新 " + _0x38eb11.refreshCount + " 次后满足条件！", "success"));
            } else {
              {
                _0x259832.showtip("车位 " + (_0x38eb11.car.slot + 1) + " 数据刷新后丢失，跳过此车。", "error");
                break;
              }
            }
            await new Promise(_0x2e980c => setTimeout(_0x2e980c, 400));
          }
          !_0x38eb11.isSatisfied && _0x38eb11.refreshCount >= _0xcca900 && _0x259832.showtip("车位 " + (_0x38eb11.car.slot + 1) + " 已达刷新上限 (" + _0xcca900 + "次)，仍未满足条件。", "info");
        }
        const _0x15ea12 = _0x190ace.filter(_0x4409f3 => _0x4409f3.isSatisfied).length;
        _0x259832.showtip("刷新任务结束。共 " + _0x15ea12 + "/" + _0x190ace.length + " 辆车满足条件，总计刷新 " + _0x4fe375 + " 次。", "success");
        this.dom.statusEl.textContent = "✅ 刷新完成: " + _0x15ea12 + "/" + _0x190ace.length + " 辆满足";
      } catch (_0x4fa70a) {
        console.error("一键刷新过程中发生错误:", _0x4fa70a);
        _0x259832.showtip("刷新过程出错，详情请查看控制台。", "error");
        this.dom.statusEl.textContent = "❌ 刷新出错";
      } finally {
        this.state.isBatchRefreshing = false;
        _0x43c8ba && (_0x43c8ba.disabled = false, _0x43c8ba.textContent = _0xce733c);
        setTimeout(() => this.queryClubCars(), 500);
      }
    },
    collectConditionsFromUI() {
      const _0x2589e9 = [];
      const _0x4e6a3b = [];
      const _0x410e25 = (_0x4a56a8, _0x4a78db) => {
        document.querySelectorAll("#" + _0x4a56a8 + " .filter-row").forEach(_0x4a2272 => {
          if (_0x4a2272.querySelector(".condition-enabled").checked) {
            {
              const _0x5140ec = _0x4a2272.dataset.type;
              const _0x1b4494 = _0x4a2272.querySelector(".filter-row-value").value;
              _0x5140ec === "品质" ? _0x4a78db.push({
                type: "quality",
                value: parseInt(_0x1b4494)
              }) : _0x4a78db.push({
                type: "reward",
                item: _0x5140ec,
                count: parseInt(_0x1b4494) || 1
              });
            }
          }
        });
      };
      _0x410e25("and-conditions-group", _0x2589e9);
      _0x410e25("or-conditions-group", _0x4e6a3b);
      const _0x2bcc64 = {
        andConditions: _0x2589e9,
        orConditions: _0x4e6a3b
      };
      return _0x2bcc64;
    },
    checkCarFilterConditions(_0x5585ed, _0x27cb3f, _0x4f4d39) {
      if (_0x27cb3f.length === 0 && _0x4f4d39.length === 0) {
        return false;
      }
      const _0x466187 = _0x2c859f => {
        if (_0x2c859f.type === "quality") {
          return _0x5585ed.quality >= _0x2c859f.value;
        } else {
          if (_0x2c859f.type === "reward") {
            return this.checkSingleRewardCondition(_0x5585ed.rewards, _0x2c859f);
          }
        }
        return false;
      };
      const _0xd6322c = _0x27cb3f.every(_0x466187);
      if (!_0xd6322c) {
        return false;
      }
      if (_0x4f4d39.length === 0) {
        return true;
      }
      const _0x5bf4c3 = _0x4f4d39.some(_0x466187);
      return _0x5bf4c3;
    },
    checkSingleRewardCondition(_0x39bddb, _0x2e01aa) {
      {
        const {
          item: _0x559575,
          count: _0x536c18
        } = _0x2e01aa;
        for (const _0x4162f5 of _0x39bddb) {
          const [_0x4cbfdc, _0x3abac2] = _0x4162f5.split(":");
          if (_0x4cbfdc === _0x559575) {
            if (parseInt(_0x3abac2) >= _0x536c18) {
              return true;
            }
          }
        }
        return false;
      }
    },
    async queryClubCars() {
      this.dom.statusEl.textContent = "🔍 查询中...";
      try {
        const _0x395e56 = await _0x259832.sendCommand("car_getrolecar");
        if (_0x395e56?.["code"] !== 0) {
          throw new Error(_0x395e56?.["msg"] || "Code: " + _0x395e56?.["code"]);
        }
        const _0x36d34e = (_0xa96fdb, _0x1c21a3) => _0x1c21a3.split(".").reduce((_0x520cd6, _0xf3a453) => _0x520cd6?.[_0xf3a453], _0xa96fdb);
        const _0x1399db = _0x36d34e(_0x395e56, "_rawData.body.roleCar") || _0x36d34e(_0x395e56, "data.body.roleCar") || _0x36d34e(_0x395e56, "_rawData.roleCar") || _0x36d34e(_0x395e56, "data.roleCar");
        const _0x16a42b = _0x1399db?.["carDataMap"] || {};
        let _0x3e7d69 = _0x1399db?.["sendCnt"] || 0;
        const _0x481830 = new Date().getDay() >= 1 && new Date().getDay() <= 3;
        if (_0x481830 && _0x1399db.sendCntResetTime) {
          const _0x5967ee = new Date(_0x1399db.sendCntResetTime * 1000);
          const _0x372b57 = new Date();
          (_0x5967ee.getFullYear() !== _0x372b57.getFullYear() || _0x5967ee.getMonth() !== _0x372b57.getMonth() || _0x5967ee.getDate() !== _0x372b57.getDate()) && (_0x3e7d69 = 0);
        }
        this.state.sendCount = this.isCarEventActive() ? _0x3e7d69 : 0;
        this.state.fullCarData = Object.entries(_0x16a42b).map(([_0x4706ff, _0x1f3198]) => ({
          id: _0x4706ff,
          ..._0x1f3198,
          carId: _0x4706ff,
          quality: _0x1f3198.color,
          rewards: this.parseRewards(_0x1f3198.rewards)
        }));
        this.renderCarData();
        const _0x7a0457 = "今日已发车: " + this.state.sendCount + "/4" + (!this.isCarEventActive() ? " (非活动时间)" : "");
        this.dom.statusEl.textContent = "✅ " + _0x7a0457;
      } catch (_0xd29c1d) {
        _0x259832.showtip("查询失败: " + _0xd29c1d.message, "error");
        this.dom.statusEl.textContent = "❌ 查询出错";
      }
    },
    async sendCar(_0xd88a05) {
      {
        if (!this.isCarEventActive()) {
          return _0x259832.showtip("当前非活动时间 (周一至周三 6:00-20:00)", "error");
        }
        if (this.state.sendCount >= 4) {
          return _0x259832.showtip("今日发车次数已用完", "error");
        }
        (await this.performCarAction("send", _0xd88a05)) && setTimeout(() => this.queryClubCars(), 300);
      }
    },
    async refreshCar(_0x554a57) {
      (await this.performCarAction("refresh", _0x554a57)) && setTimeout(() => this.queryClubCars(), 300);
    },
    async claimCar(_0x20fab0) {
      {
        (await this.performCarAction("claim", _0x20fab0)) && setTimeout(() => this.queryClubCars(), 300);
      }
    },
    async sendAllCars() {
      {
        if (!this.isCarEventActive()) {
          return _0x259832.showtip("当前非活动时间 (周一至周三 6:00-20:00)", "error");
        }
        if (this.state.sendCount >= 4) {
          return _0x259832.showtip("今日发车次数已用完", "error");
        }
        const _0x2ae166 = this.state.fullCarData.filter(_0x369117 => !_0x369117.sendAt);
        if (_0x2ae166.length === 0) {
          return _0x259832.showtip("没有可发车的赛车", "info");
        }
        const _0x1c4466 = Math.min(_0x2ae166.length, 4 - this.state.sendCount);
        if (_0x1c4466 === 0) {
          return _0x259832.showtip("今日发车次数已用完", "error");
        }
        this.dom.statusEl.textContent = "🚀 批量发送中...";
        let _0x3d1981 = 0;
        for (let _0xe5fb0b = 0; _0xe5fb0b < _0x1c4466; _0xe5fb0b++) {
          if (await this.performCarAction("send", _0x2ae166[_0xe5fb0b].carId, true)) {
            {
              _0x3d1981++;
            }
          }
          if (_0xe5fb0b < _0x1c4466 - 1) {
            await new Promise(_0x34e501 => setTimeout(_0x34e501, 300));
          }
        }
        _0x259832.showtip("成功发送 " + _0x3d1981 + " 辆赛车", _0x3d1981 > 0 ? "success" : "error");
        setTimeout(() => this.queryClubCars(), 500);
      }
    },
    async claimAllCars() {
      {
        const _0x337795 = this.state.fullCarData.filter(_0x2a2ec5 => this.getCarStatus(_0x2a2ec5).statusClass === "status-completed");
        if (_0x337795.length === 0) {
          return _0x259832.showtip("没有可收取的赛车", "info");
        }
        this.dom.statusEl.textContent = "🚀 批量收取中...";
        let _0x1f9ff8 = 0;
        for (let _0x410a05 = 0; _0x410a05 < _0x337795.length; _0x410a05++) {
          {
            (await this.performCarAction("claim", _0x337795[_0x410a05].carId, true)) && _0x1f9ff8++;
            if (_0x410a05 < _0x337795.length - 1) {
              await new Promise(_0x336177 => setTimeout(_0x336177, 300));
            }
          }
        }
        _0x259832.showtip("成功收取 " + _0x1f9ff8 + " 辆赛车", _0x1f9ff8 > 0 ? "success" : "error");
        setTimeout(() => this.queryClubCars(), 500);
      }
    },
    async performCarAction(_0x4b4ed2, _0x14f90f, _0x3372f6 = false) {
      if (!_0x3372f6) {
        {
          const _0xb5310c = {
            send: "发送",
            refresh: "刷新",
            claim: "收获"
          };
          this.dom.statusEl.textContent = "🚀 " + (_0xb5310c[_0x4b4ed2] || _0x4b4ed2) + "中...";
        }
      }
      try {
        {
          const _0x537f1d = {
            carId: _0x14f90f,
            helperId: 0,
            text: ""
          };
          const _0x506b09 = {
            carId: _0x14f90f
          };
          const _0x694130 = await _0x259832.sendCommand("car_" + _0x4b4ed2, _0x4b4ed2 === "send" ? _0x537f1d : _0x506b09);
          if (_0x694130?.["code"] !== 0) {
            throw new Error(_0x694130?.["msg"] || "Code: " + _0x694130?.["code"]);
          }
          !_0x3372f6 && _0x259832.showtip("赛车操作成功", "success");
          return true;
        }
      } catch (_0x8343) {
        if (!_0x3372f6) {
          {
            _0x259832.showtip("操作失败: " + _0x8343.message, "error");
            this.dom.statusEl.textContent = "❌ 操作出错";
          }
        }
        console.error("赛车操作 '" + _0x4b4ed2 + "' 失败 (ID: " + _0x14f90f + "):", _0x8343.message);
        return false;
      }
    },
    async performCarAction(_0x38bc01, _0x3393a0, _0xd8e557 = false) {
      if (!_0xd8e557) {
        const _0x70dd56 = {
          send: "发送",
          refresh: "刷新",
          claim: "收获"
        };
        this.dom.statusEl.textContent = "🚀 " + (_0x70dd56[_0x38bc01] || _0x38bc01) + "中...";
      }
      try {
        {
          const _0x5274e5 = {
            carId: _0x3393a0,
            helperId: 0,
            text: ""
          };
          const _0x414dbc = {
            carId: _0x3393a0
          };
          const _0x5ee366 = await _0x259832.sendCommand("car_" + _0x38bc01, _0x38bc01 === "send" ? _0x5274e5 : _0x414dbc);
          if (_0x5ee366?.["code"] !== 0) {
            throw new Error(_0x5ee366?.["msg"] || "Code: " + _0x5ee366?.["code"]);
          }
          if (!_0xd8e557) {
            {
              _0x259832.showtip("赛车操作成功", "success");
            }
          }
          return true;
        }
      } catch (_0x5ae6c4) {
        !_0xd8e557 && (_0x259832.showtip("操作失败: " + _0x5ae6c4.message, "error"), this.dom.statusEl.textContent = "❌ 操作出错");
        console.error("赛车操作 '" + _0x38bc01 + "' 失败 (ID: " + _0x3393a0 + "):", _0x5ae6c4.message);
        return false;
      }
    }
  };
  _0x27dca7.init();
  async function _0x2fb58c(_0x455aec) {
    {
      if (_0x455aec) {
        _0x455aec.textContent = "🔄 开始执行藏品图鉴升级...";
      }
      const _0x157d74 = 100;
      let _0x41ed63 = 0;
      let _0x4bb371 = 0;
      const _0x7a9005 = () => {
        {
          const _0x14580b = [];
          const _0x1dbb46 = new Set();
          function _0xe04d7b(_0x2b882a, _0x41b538, _0x35bef7 = 2) {
            {
              const _0x19ea51 = _0x2b882a + "_" + _0x41b538 + "_" + _0x35bef7;
              if (!_0x1dbb46.has(_0x19ea51)) {
                {
                  const _0x5aac24 = {
                    seriesId: _0x2b882a,
                    id: _0x41b538,
                    poolType: _0x35bef7
                  };
                  _0x14580b.push(_0x5aac24);
                  _0x1dbb46.add(_0x19ea51);
                }
              }
            }
          }
          for (let _0x30313c = 1; _0x30313c <= 12; _0x30313c++) {
            _0xe04d7b(2, _0x30313c, 1);
          }
          for (let _0x8b4d3e = 1001; _0x8b4d3e <= 1015; _0x8b4d3e++) {
            {
              _0xe04d7b(3, _0x8b4d3e, 1);
            }
          }
          const _0x50b8c1 = [10103, 11302, 10903, 10206, 11705, 10302, 10403, 11005, 11403, 11804, 10503, 10603, 11102, 11504, 10702, 10805, 11204, 11604, 12005, 11904];
          for (const _0x1b02ad of _0x50b8c1) {
            _0xe04d7b(40001, _0x1b02ad, 3);
          }
          for (let _0x182009 = 2001; _0x182009 <= 2020; _0x182009++) {
            _0xe04d7b(6, _0x182009, 1);
          }
          for (let _0x29ae45 = 3001; _0x29ae45 <= 3010; _0x29ae45++) {
            _0xe04d7b(6, _0x29ae45, 1);
          }
          const _0x4fc01e = {
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
          for (const _0x33f1f7 in _0x4fc01e) {
            const _0x30374d = parseInt(_0x33f1f7, 10);
            const _0x44c0e7 = _0x4fc01e[_0x33f1f7];
            let _0x2bffdd = Infinity;
            let _0x316d60 = -Infinity;
            const _0x490b89 = new Set();
            for (const _0x30a8df of _0x44c0e7) {
              {
                if (Math.floor(_0x30a8df / 100) === _0x30374d && _0x30a8df % 100 > 0 && _0x30a8df % 100 < 100) {
                  {
                    const _0x47e5f9 = _0x30a8df % 100;
                    _0x2bffdd = Math.min(_0x2bffdd, _0x47e5f9);
                    _0x316d60 = Math.max(_0x316d60, _0x47e5f9);
                  }
                } else {
                  {
                    _0x490b89.add(_0x30a8df);
                  }
                }
              }
            }
            if (_0x2bffdd !== Infinity && _0x316d60 !== -Infinity) {
              {
                for (let _0x3d6a58 = _0x2bffdd; _0x3d6a58 <= _0x316d60; _0x3d6a58++) {
                  _0xe04d7b(_0x30374d, _0x30374d * 100 + _0x3d6a58);
                }
              }
            }
            for (const _0x552d99 of _0x490b89) {
              _0xe04d7b(_0x30374d, _0x552d99);
            }
          }
          return _0x14580b.sort((_0x48ae24, _0x220908) => {
            {
              if (_0x48ae24.seriesId !== _0x220908.seriesId) {
                return _0x48ae24.seriesId - _0x220908.seriesId;
              }
              if (_0x48ae24.id !== _0x220908.id) {
                return _0x48ae24.id - _0x220908.id;
              }
              return _0x48ae24.poolType - _0x220908.poolType;
            }
          });
        }
      };
      const _0xeedf8b = _0x7a9005();
      const _0x3055c3 = _0xeedf8b.length;
      _0x455aec.textContent = "🔄 准备领取 " + _0x3055c3 + " 个图鉴奖励...";
      for (let _0x43fa96 = 0; _0x43fa96 < _0xeedf8b.length; _0x43fa96++) {
        {
          const _0x620938 = _0xeedf8b[_0x43fa96];
          const _0x380e92 = _0x43fa96 + 1;
          _0x455aec.textContent = "🔄 (" + _0x380e92 + "/" + _0x3055c3 + ") 处理系列: " + _0x620938.seriesId + ", ID: " + _0x620938.id + ", 类型: " + _0x620938.poolType;
          try {
            const _0x509662 = {
              id: _0x620938.id,
              isAll: false,
              poolType: _0x620938.poolType,
              seriesId: _0x620938.seriesId
            };
            const _0x4a7886 = await _0x259832.sendCommand("collection_activate", _0x509662);
            _0x4a7886.code === 0 ? _0x41ed63++ : _0x4bb371++;
          } catch (_0x5d2757) {
            _0x4bb371++;
            console.error("处理图鉴失败:", _0x5d2757);
          }
          await _0x259832.delay(_0x157d74 / 1000);
        }
      }
      _0x455aec.textContent = "✅ 图鉴奖励领取完成，开始执行额外领取...";
      const _0x28644d = {
        seriesId: 2,
        poolType: 1
      };
      const _0x40932e = {
        seriesId: 3,
        poolType: 1
      };
      const _0x53fd13 = {
        seriesId: 40001,
        poolType: 3
      };
      const _0x5a3e55 = [_0x28644d, _0x40932e, _0x53fd13];
      for (const _0x363930 of _0x5a3e55) {
        {
          try {
            {
              _0x455aec.textContent = "🔄 正在领取系列奖励 (seriesId: " + _0x363930.seriesId + ")...";
              const _0x48e892 = {
                seriesId: _0x363930.seriesId,
                isAll: true,
                poolType: _0x363930.poolType
              };
              const _0x3f3681 = await _0x259832.sendCommand("collection_claimseries", _0x48e892);
              _0x3f3681.code === 0 && _0x41ed63++;
            }
          } catch (_0x51bb0f) {
            console.error("系列奖励 (" + _0x363930.seriesId + ") 领取失败:", _0x51bb0f);
          }
          await _0x259832.delay(_0x157d74 / 1000);
        }
      }
      try {
        {
          _0x455aec.textContent = "🔄 正在领取总览奖励...";
          const _0x286cfd = await _0x259832.sendCommand("collection_claimtotal", {});
          _0x286cfd.code === 0 && _0x41ed63++;
        }
      } catch (_0xb5efcf) {
        console.error("总览奖励领取失败:", _0xb5efcf);
      }
      await _0x259832.delay(_0x157d74 / 1000);
      _0x455aec.textContent = "🔄 开始执行30次升级操作...";
      for (let _0xaeea17 = 1; _0xaeea17 <= 30; _0xaeea17++) {
        {
          _0x455aec.textContent = "🔄 升级操作 " + _0xaeea17 + "/30";
          try {
            const _0x63c5d2 = {
              id: 1001,
              isAll: false,
              poolType: 1,
              seriesId: 3
            };
            await _0x259832.sendCommand("collection_activate", _0x63c5d2);
          } catch (_0x4e6598) {
            {
              console.log("升级第 " + _0xaeea17 + " 次失败:", _0x4e6598.message);
            }
          }
          await _0x259832.delay(0.05);
        }
      }
      const _0x2c1ec0 = "✅ 藏品图鉴升级完成！\n成功: " + _0x41ed63 + " 次 | 失败: " + _0x4bb371 + " 次\n已完成全部30次升级操作";
      _0x455aec.textContent = _0x2c1ec0;
    }
  }
  let _0x20c033 = false;
  let _0x34bde5 = false;
  async function _0x385d20(_0x302099, _0x121acb) {
    if (_0x20c033 && (_0x302099.startsWith("daily-task-") || _0x302099 === "one-key-100")) {
      _0x259832.showtip("已有任务在执行，请稍候", "info");
      return;
    }
    const _0x25ba06 = _0x121acb.closest(".task-section").querySelector(".status");
    const _0x28b9d5 = _0x121acb.textContent;
    const _0x29b7ed = _0x2a50b8.querySelectorAll(".task-btn, input[type=\"checkbox\"]");
    if (_0x302099 !== "toggle-ws-monitor" && _0x302099 !== "clear-ws-log" && _0x302099 !== "copy-all-ws-log") {
      _0x121acb.disabled = true;
      _0x121acb.textContent = "执行中...";
      if (_0x25ba06) {
        _0x25ba06.textContent = "🚀 执行中...";
      }
    }
    (_0x302099 === "execute-daily-checked" || _0x302099 === "one-key-100") && (_0x20c033 = true, _0x34bde5 = false, _0x29b7ed.forEach(_0x409150 => _0x409150.disabled = true));
    try {
      const _0xe68796 = window.__require?.("data-index");
      if (_0x302099 === "toggle-ws-monitor") {
        if (WSModule.isMonitoring) {
          WSModule.stop();
        } else {
          WSModule.start();
        }
        return;
      }
      if (_0x302099 === "clear-ws-log") {
        {
          WSModule.clear();
          return;
        }
      }
      if (_0x302099 === "copy-all-ws-log") {
        WSModule.copyAll();
        return;
      }
      const _0x4d0f71 = window.__require?.("ServerData");
      if (_0x302099.startsWith("start-fishing-")) {
        const _0x1bf491 = parseInt(_0x302099.split("-")[2]);
        const _0x155ba6 = parseInt(_0x121acb.parentElement.querySelector("input").value) || 0;
        const _0x126b4e = _0x1bf491 === 2 ? "高级钓鱼" : "普通钓鱼";
        if (_0x1bf491 === 1 && _0x155ba6 > 0) {
          {
            let _0x4fd64d = 0;
            const _0x4fc964 = Math.min(_0x155ba6, 3);
            for (let _0x41832c = 0; _0x41832c < _0x4fc964; _0x41832c++) {
              {
                try {
                  {
                    const _0x468222 = {
                      lotteryNumber: 1,
                      newFree: true,
                      type: 1
                    };
                    await _0xe68796.ArtifactService.lottery(_0x468222);
                  }
                } catch (_0x565d68) {
                  console.log("单次钓鱼尝试失败（正常现象）");
                }
                _0x4fd64d++;
                _0x25ba06.textContent = _0x126b4e + " " + _0x4fd64d + "/" + _0x155ba6;
                await _0x259832.delay(0.2);
              }
            }
            const _0x4758ae = _0x155ba6 - _0x4fc964;
            if (_0x4758ae > 0) {
              {
                for (let _0x2ae186 = 0; _0x2ae186 < Math.ceil(_0x4758ae / 10); _0x2ae186++) {
                  {
                    const _0x176de3 = Math.min(10, _0x4758ae - _0x2ae186 * 10);
                    if (_0x176de3 <= 0) {
                      break;
                    }
                    const _0x1ac1b1 = {
                      lotteryNumber: _0x176de3,
                      newFree: true,
                      type: 1
                    };
                    await _0xe68796.ArtifactService.lottery(_0x1ac1b1);
                    _0x4fd64d += _0x176de3;
                    _0x25ba06.textContent = _0x126b4e + " " + Math.min(_0x4fd64d, _0x155ba6) + "/" + _0x155ba6;
                  }
                }
              }
            }
          }
        } else {
          if (_0x1bf491 === 2 && _0x155ba6 > 0) {
            for (let _0xc1c480 = 0; _0xc1c480 < Math.ceil(_0x155ba6 / 10); _0xc1c480++) {
              const _0x46e79f = Math.min(10, _0x155ba6 - _0xc1c480 * 10);
              if (_0x46e79f <= 0) {
                break;
              }
              const _0x9dcde6 = {
                lotteryNumber: _0x46e79f,
                newFree: true,
                type: 2
              };
              await _0xe68796.ArtifactService.lottery(_0x9dcde6);
              _0x25ba06.textContent = _0x126b4e + " " + Math.min((_0xc1c480 + 1) * 10, _0x155ba6) + "/" + _0x155ba6;
            }
          }
        }
        _0x25ba06.textContent = "✅ " + _0x126b4e + "完成";
      } else {
        if (_0x302099 === "recruit") {
          {
            const _0x553cb5 = parseInt(_0x121acb.parentElement.querySelector("input").value);
            if (_0x553cb5 <= 0) {
              {
                _0x25ba06.textContent = "ℹ️ 次数为0";
                return;
              }
            }
            const _0x277b7d = Math.floor(_0x553cb5 / 10);
            const _0x197352 = _0x553cb5 % 10;
            let _0x3459ef = 0;
            if (_0x277b7d > 0) {
              for (let _0x130534 = 0; _0x130534 < _0x277b7d; _0x130534++) {
                {
                  _0x25ba06.textContent = "招募 " + (_0x3459ef + 10) + "/" + _0x553cb5;
                  const _0x231de4 = {
                    byClub: false,
                    recruitNumber: 10,
                    recruitType: 1
                  };
                  await _0xe68796.HeroService.recruit(_0x231de4);
                  _0x3459ef += 10;
                }
              }
            }
            if (_0x197352 > 0) {
              {
                for (let _0x111fd2 = 0; _0x111fd2 < _0x197352; _0x111fd2++) {
                  {
                    _0x25ba06.textContent = "招募 " + (_0x3459ef + 1) + "/" + _0x553cb5;
                    const _0x5157e0 = {
                      byClub: false,
                      recruitNumber: 1,
                      recruitType: 3
                    };
                    await _0xe68796.HeroService.recruit(_0x5157e0);
                    _0x3459ef++;
                    await _0x259832.delay(0.2);
                  }
                }
              }
            }
            _0x25ba06.textContent = "✅ 招募完成";
          }
        } else {
          if (_0x302099.startsWith("open-box-")) {
            {
              const _0x9b1840 = parseInt(_0x302099.split("-")[2]);
              const _0x4c85ac = parseInt(_0x121acb.parentElement.querySelector("input").value);
              const _0x274c8e = {
                "2001": "木质",
                "2002": "青铜",
                "2003": "黄金",
                "2004": "铂金"
              };
              const _0x5744d1 = _0x274c8e[_0x9b1840];
              if (_0x4c85ac <= 0 || _0x4c85ac % 10 !== 0) {
                {
                  _0x259832.showtip("宝箱数量必须是10的倍数", "error");
                  _0x25ba06.textContent = "❌ 数量错误";
                  return;
                }
              }
              for (let _0x2bd5db = 0; _0x2bd5db < _0x4c85ac / 10; _0x2bd5db++) {
                const _0x2f5816 = {
                  itemId: _0x9b1840,
                  number: 10
                };
                await _0xe68796.ItemService.openBox(_0x2f5816);
                _0x25ba06.textContent = "开启" + _0x5744d1 + " " + (_0x2bd5db + 1) * 10 + "/" + _0x4c85ac;
              }
              _0x25ba06.textContent = "✅ " + _0x5744d1 + "开启完成";
            }
          } else {
            if (_0x302099 === "starUp" || _0x302099 === "bookUpgrade") {
              {
                const _0x5e0903 = _0x302099 === "starUp";
                const _0x2250c3 = _0x5e0903 ? _0xe68796.HeroService : _0xe68796.BookService;
                const _0x242680 = _0x5e0903 ? "heroUpgradeStar" : "upgrade";
                const _0x394bcc = _0x5e0903 ? "武将升星" : "升级图鉴";
                let _0x581056 = 0;
                const _0x1d9e9c = {
                  length: 20
                };
                const _0x1f4755 = {
                  length: 28
                };
                const _0xf92337 = {
                  length: 14
                };
                const _0x3efa83 = [...Array.from(_0x1d9e9c, (_0x2ad4bd, _0x497364) => 101 + _0x497364), ...Array.from(_0x1f4755, (_0x4dee1d, _0x2d8d96) => 201 + _0x2d8d96), ...Array.from(_0xf92337, (_0x1030b5, _0x5f8419) => 301 + _0x5f8419)];
                for (const _0x1cee07 of _0x3efa83) {
                  {
                    for (let _0x20b3cc = 0; _0x20b3cc < 5; _0x20b3cc++) {
                      try {
                        {
                          const _0x49f322 = {
                            heroId: _0x1cee07
                          };
                          await _0x2250c3[_0x242680](_0x49f322);
                          _0x581056++;
                          _0x25ba06.textContent = _0x394bcc + "完成 " + _0x581056 + " 次";
                        }
                      } catch (_0x87f2e9) {
                        break;
                      }
                    }
                  }
                }
                if (!_0x5e0903) {
                  try {
                    await _0xe68796.BookService.claimPointReward({});
                  } catch (_0x1883c7) {}
                }
                _0x25ba06.textContent = "✅ " + _0x394bcc + "完成";
              }
            } else {
              if (_0x302099 === "tower") {
                {
                  if (_0x4d0f71?.["ROLE"]?.["levelId"] <= 50) {
                    {
                      _0x25ba06.textContent = "❌ 等级不足";
                      return;
                    }
                  }
                  await _0xe68796.TowerService.getInfo({});
                  let _0x78e421 = 0;
                  while (true) {
                    {
                      const _0x35ce92 = _0x4d0f71?.["ROLE"];
                      if (!_0x35ce92 || _0x35ce92.tower.energy <= 0 || _0x35ce92.tower.id >= 4500) {
                        break;
                      }
                      try {
                        _0x35ce92.tower.id % 10 === 0 && !_0x35ce92.tower.reward[_0x35ce92.tower.id / 10] && (await _0xe68796.TowerService.claimReward({
                          rewardId: _0x35ce92.tower.id / 10
                        }));
                        await _0xe68796.FightService.startTower({});
                        _0x78e421++;
                        _0x25ba06.textContent = "已爬" + _0x78e421 + "层 | 体力:" + (_0x35ce92.tower.energy - 1);
                      } catch (_0x34f1ef) {
                        await _0x259832.delay(3);
                      }
                    }
                  }
                  _0x25ba06.textContent = "✅ 爬塔完成，共" + _0x78e421 + "层";
                }
              } else {
                if (_0x302099 === "arena-start") {
                  const _0x399dc8 = parseInt(_0x121acb.parentElement.querySelector("input").value) || 3;
                  if (_0x399dc8 < 1 || _0x399dc8 > 99) {
                    {
                      _0x259832.showtip("次数需在1-99之间", "error");
                      return;
                    }
                  }
                  _0x25ba06.textContent = "⚔️ 准备开始...";
                  let _0x4ad227 = 0;
                  for (let _0xed3664 = 1; _0xed3664 <= _0x399dc8; _0xed3664++) {
                    {
                      _0x25ba06.textContent = "⚔️ 正在进行 (" + _0xed3664 + "/" + _0x399dc8 + ")";
                      try {
                        const _0x330b11 = {
                          refresh: false
                        };
                        const _0x479fe2 = await _0x259832.sendCommand("arena_getareatarget", _0x330b11);
                        const _0x3db715 = _0x479fe2?.["_rawData"]?.["roleList"]?.[0]?.["roleId"];
                        if (!_0x3db715) {
                          throw new Error("未获取到目标ID");
                        }
                        const _0x53f8db = {
                          targetId: _0x3db715,
                          battleVersion: 240475
                        };
                        await _0x259832.sendCommand("fight_startareaarena", _0x53f8db);
                        _0x4ad227++;
                        _0x259832.showtip("第" + _0xed3664 + "轮战斗成功", "success");
                      } catch (_0x1e00fb) {
                        _0x259832.showtip("第" + _0xed3664 + "轮战斗失败: " + _0x1e00fb.message, "error");
                      }
                      if (_0xed3664 < _0x399dc8) {
                        await _0x259832.delay(0.01);
                      }
                    }
                  }
                  _0x25ba06.textContent = "✅ 完成: 总" + _0x399dc8 + "轮, 成功" + _0x4ad227 + "轮";
                } else {
                  if (_0x302099 === "club-boss") {
                    {
                      const _0x67df7f = parseInt(document.getElementById("club-boss-count").textContent);
                      if (_0x67df7f <= 0) {
                        _0x25ba06.textContent = "ℹ️ 次数为0";
                        return;
                      }
                      for (let _0x578d75 = 1; _0x578d75 <= _0x67df7f; _0x578d75++) {
                        _0x25ba06.textContent = "⚔️ 挑战Boss (" + _0x578d75 + "/" + _0x67df7f + ")";
                        await _0xe68796.FightService.startLegionBoss({});
                        await _0x259832.delay(0.5);
                      }
                      _0x25ba06.textContent = "✅ Boss挑战完成";
                    }
                  } else {
                    if (_0x302099 === "assist-battle") {
                      {
                        _0x25ba06.textContent = "🤝 开始助战...";
                        try {
                          const _0x24577a = await _0xe68796.FightService.startAssistBattle({});
                          if (_0x24577a?.["code"] === 0) {
                            _0x25ba06.textContent = "✅ 助战成功";
                            _0x259832.showtip("助战成功", "success");
                          } else {
                            {
                              _0x25ba06.textContent = "❌ 助战失败: " + (_0x24577a?.["msg"] || "未知错误");
                            }
                          }
                        } catch (_0x2aadf7) {
                          console.error("助战异常:", _0x2aadf7);
                          _0x25ba06.textContent = "❌ 助战异常: " + _0x2aadf7.message;
                        }
                      }
                    } else {
                      if (_0x302099 === "salt-battle-report") {
                        {
                          _0x25ba06.textContent = "📊 获取盐场战报...";
                          const _0x36c2f8 = document.getElementById("salt-battle-list");
                          _0x36c2f8.innerHTML = "<div style=\"text-align: center; padding: 20px;\">加载中...</div>";
                          try {
                            {
                              const _0x43c185 = await _0x259832.sendCommand("saltfield_getbattlereport", {});
                              if (_0x43c185?.["code"] === 0 && _0x43c185?.["_rawData"]?.["reports"]) {
                                {
                                  const _0x136853 = _0x43c185._rawData.reports;
                                  if (_0x136853.length === 0) {
                                    _0x36c2f8.innerHTML = "<div style=\"text-align: center; padding: 20px; color: #718096;\">暂无战报数据</div>";
                                  } else {
                                    {
                                      _0x36c2f8.innerHTML = _0x136853.map(_0x158856 => "\n                                <div style=\"background: var(--item-bg); border: 1px solid var(--item-border); border-radius: 6px; padding: 10px; margin-bottom: 8px;\">\n                                    <div style=\"display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;\">\n                                        <div style=\"font-weight: 600; color: var(--text-primary);\">" + (_0x158856.opponentName || "未知对手") + "</div>\n                                        <div style=\"font-size: 12px; color: " + (_0x158856.win ? "#38a169" : "#e53e3e") + "\">\n                                            " + (_0x158856.win ? "✅ 胜利" : "❌ 失败") + "\n                                        </div>\n                                    </div>\n                                    <div style=\"font-size: 12px; color: var(--text-secondary); margin-bottom: 5px;\">\n                                        " + _0x259832.getFormatDate(_0x158856.timestamp || Date.now() / 1000) + "\n                                    </div>\n                                    <div style=\"font-size: 11px; color: var(--text-secondary);\">\n                                        损失: " + (_0x158856.loss || 0) + " 盐 | 获得: " + (_0x158856.gain || 0) + " 盐\n                                    </div>\n                                </div>\n                            ").join("");
                                    }
                                  }
                                }
                              } else {
                                _0x36c2f8.innerHTML = "<div style=\"text-align: center; padding: 20px; color: #e53e3e;\">获取战报失败</div>";
                              }
                              _0x25ba06.textContent = "✅ 盐场战报加载完成";
                            }
                          } catch (_0x2eac5f) {
                            console.error("获取盐场战报异常:", _0x2eac5f);
                            _0x36c2f8.innerHTML = "<div style=\"text-align: center; padding: 20px; color: #e53e3e;\">加载失败: " + _0x2eac5f.message + "</div>";
                            _0x25ba06.textContent = "❌ 获取战报异常";
                          }
                        }
                      } else {
                        if (_0x302099 === "salt-map") {
                          {
                            _0x25ba06.textContent = "🗺️ 获取盐场地图...";
                            const _0x2e1c7e = document.getElementById("salt-map-container");
                            _0x2e1c7e.innerHTML = "<div style=\"text-align: center; padding: 20px;\">加载中...</div>";
                            try {
                              {
                                const _0x4f4738 = await _0x259832.sendCommand("saltfield_getmap", {});
                                _0x4f4738?.["code"] === 0 ? _0x2e1c7e.innerHTML = "\n                            <div style=\"background: #f7fafc; border: 1px solid var(--item-border); border-radius: 6px; padding: 15px;\">\n                                <div style=\"text-align: center; font-weight: 600; margin-bottom: 15px; color: var(--text-primary);\">盐场地图概览</div>\n                                <div style=\"display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 10px;\">\n                                    " + [...Array(12)].map((_0x34b047, _0x16d56a) => {
                                  const _0x3cdab8 = Math.floor(Math.random() * 3) + 1;
                                  const _0x5ccb41 = Math.floor(Math.random() * 500) + 100;
                                  return "\n                                            <div style=\"background: " + (_0x3cdab8 === 1 ? "#edf2f7" : _0x3cdab8 === 2 ? "#e2e8f0" : "#cbd5e0") + "; border: 1px solid var(--item-border); border-radius: 6px; padding: 10px; text-align: center;\">\n                                                <div style=\"font-size: 14px; font-weight: 600; color: var(--text-primary);\">盐矿 " + (_0x16d56a + 1) + "</div>\n                                                <div style=\"font-size: 12px; color: #718096; margin: 5px 0;\">等级 " + _0x3cdab8 + "</div>\n                                                <div style=\"font-size: 12px; color: #3182ce; font-weight: 600;\">" + _0x5ccb41 + " 盐</div>\n                                            </div>\n                                        ";
                                }).join("") + "\n                                </div>\n                                <div style=\"margin-top: 15px; text-align: center; font-size: 12px; color: var(--text-secondary);\">\n                                    点击盐矿可查看详情或进行占领\n                                </div>\n                            </div>\n                        " : _0x2e1c7e.innerHTML = "<div style=\"text-align: center; padding: 20px; color: #e53e3e;\">获取地图失败</div>";
                                _0x25ba06.textContent = "✅ 盐场地图加载完成";
                              }
                            } catch (_0x26215c) {
                              console.error("获取盐场地图异常:", _0x26215c);
                              _0x2e1c7e.innerHTML = "<div style=\"text-align: center; padding: 20px; color: #e53e3e;\">加载失败: " + _0x26215c.message + "</div>";
                              _0x25ba06.textContent = "❌ 获取地图异常";
                            }
                          }
                        } else {
                          if (_0x302099 === "claim-activity") {
                            _0x25ba06.textContent = "🎁 领取每日奖励...";
                            for (const _0x4984fb of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
                              {
                                const _0x3e363b = {
                                  taskId: _0x4984fb
                                };
                                await _0xe68796.TaskService.claimDailyPoint(_0x3e363b);
                                await _0x259832.delay(0.1);
                              }
                            }
                            _0x25ba06.textContent = "🎁 领取每周奖励...";
                            const _0x1a67fc = {
                              rewardId: 0
                            };
                            await _0xe68796.TaskService.claimDailyReward(_0x1a67fc);
                            await _0x259832.delay(0.1);
                            const _0x19e857 = {
                              rewardId: 0
                            };
                            await _0xe68796.TaskService.claimWeekReward(_0x19e857);
                            _0x25ba06.textContent = "✅ 活跃奖励领取完毕";
                          } else {
                            if (_0x302099.startsWith("daily-task-") || _0x302099 === "execute-daily-checked" || _0x302099 === "one-key-100") {
                              const _0x6c2227 = {
                                itemId: 2001,
                                number: 10
                              };
                              const _0x3ff689 = {
                                goodsId: 1
                              };
                              const _0x4173bd = {
                                "daily-task-hangup-combined": {
                                  func: async () => {
                                    for (let _0x4b5c97 = 0; _0x4b5c97 < 4; _0x4b5c97++) {
                                      {
                                        const _0x29c99c = {
                                          isSkipShareCard: true,
                                          type: 2
                                        };
                                        await _0xe68796.SystemService.myShareCallback(_0x29c99c);
                                        await _0x259832.delay(0.2);
                                      }
                                    }
                                    for (let _0x2b0b86 = 0; _0x2b0b86 < 5; _0x2b0b86++) {
                                      await _0xe68796.SystemService.claimHangUpReward({});
                                      if (_0x2b0b86 < 4) {
                                        await _0x259832.delay(1);
                                      }
                                    }
                                    for (let _0x4e66fd = 0; _0x4e66fd < 4; _0x4e66fd++) {
                                      {
                                        const _0x3d5603 = {
                                          isSkipShareCard: true,
                                          type: 2
                                        };
                                        await _0xe68796.SystemService.myShareCallback(_0x3d5603);
                                        await _0x259832.delay(0.2);
                                      }
                                    }
                                  },
                                  label: "收菜5次、加钟"
                                },
                                "daily-task-bottle-renew": {
                                  func: async () => {
                                    const _0x36a80a = {
                                      bottleType: -1
                                    };
                                    await _0xe68796.BottleHelperService.stop(_0x36a80a);
                                    await _0x259832.delay(0.2);
                                    const _0x294194 = {
                                      bottleType: -1
                                    };
                                    await _0xe68796.BottleHelperService.start(_0x294194);
                                  },
                                  label: "续罐子"
                                },
                                "daily-task-bottle-claim": {
                                  func: () => _0xe68796.BottleHelperService.claim({}),
                                  label: "收盐罐"
                                },
                                "daily-task-combined-quick": {
                                  func: async () => {
                                    {
                                      const _0x6a0efe = {
                                        category: 0
                                      };
                                      await _0xe68796.MailService.claimAllAttachment(_0x6a0efe);
                                      await _0x259832.delay(0.2);
                                      await _0xe68796.LegionService.signIn({});
                                      await _0x259832.delay(0.2);
                                      const _0x55d46f = {
                                        friendId: 0
                                      };
                                      await _0xe68796.FriendService.batch(_0x55d46f);
                                      await _0x259832.delay(0.2);
                                      await _0xe68796.SystemService.signInReward({});
                                      await _0x259832.delay(0.2);
                                      const _0x204c69 = {
                                        discountId: 1
                                      };
                                      await _0xe68796.DiscountService.claimReward(_0x204c69);
                                      await _0x259832.delay(0.2);
                                      const _0x2f1055 = {
                                        cardId: 1
                                      };
                                      await _0xe68796.CardService.claimReward(_0x2f1055);
                                      await _0x259832.delay(0.2);
                                      try {
                                        await _0x259832.sendCommand("collection_claimfreereward", {});
                                        console.log("✅ 成功领取珍宝阁每日免费珍品");
                                      } catch (_0x42857c) {
                                        {
                                          console.log("领取珍宝阁免费珍品时发生错误（可能已领取）:", _0x42857c.message);
                                        }
                                      }
                                      await _0x259832.delay(0.2);
                                      const _0x5e0704 = {
                                        isSkipShareCard: false,
                                        type: 1
                                      };
                                      await _0xe68796.SystemService.myShareCallback(_0x5e0704);
                                    }
                                  },
                                  label: "邮件、签到、赠金币、福利、珍宝阁"
                                },
                                "daily-task-boss": {
                                  func: () => {
                                    const _0x1aec25 = _0x259832.getFormatDate(Date.now()).getUTCDay();
                                    const _0x46a494 = [9904, 9905, 9901, 9902, 9903, 9904, 9905][_0x1aec25];
                                    const _0x218080 = {
                                      bossId: _0x46a494
                                    };
                                    return _0xe68796.FightService.startBoss(_0x218080);
                                  },
                                  label: "每日咸王考验"
                                },
                                "daily-task-gold": {
                                  func: async () => {
                                    {
                                      const _0x437865 = 6;
                                      let _0x1f2547 = 0;
                                      try {
                                        console.log("[智能点金] 初始检查服务器任务状态...");
                                        const _0x3ceb98 = {
                                          taskId: _0x437865
                                        };
                                        const _0x3d2249 = await _0x259832.sendCommand("task_claimdailypoint", _0x3ceb98);
                                        if (_0x3d2249?.["code"] === 700020 || _0x3d2249?.["_rawData"]?.["role"]?.["dailyTask"]?.["complete"]?.["hasOwnProperty"](_0x437865.toString())) {
                                          console.log("[智能点金] 任务已完成，无需执行");
                                          return;
                                        }
                                        console.log("[智能点金] 开始智能点金，每次执行前检查任务状态...");
                                        while (_0x1f2547 < 3) {
                                          const _0x384230 = {
                                            taskId: _0x437865
                                          };
                                          const _0x43301e = await _0x259832.sendCommand("task_claimdailypoint", _0x384230);
                                          if (_0x43301e?.["code"] === 700020 || _0x43301e?.["_rawData"]?.["role"]?.["dailyTask"]?.["complete"]?.["hasOwnProperty"](_0x437865.toString())) {
                                            {
                                              console.log("[智能点金] 任务已完成，已执行" + _0x1f2547 + "次点金，停止继续操作");
                                              break;
                                            }
                                          }
                                          console.log("[智能点金] 执行第" + (_0x1f2547 + 1) + "/3次点金");
                                          try {
                                            const _0x4bcf41 = {
                                              buyNum: 1
                                            };
                                            await _0xe68796.SystemService.buyGold(_0x4bcf41);
                                            _0x1f2547++;
                                            console.log("[智能点金] 第" + _0x1f2547 + "次点金执行成功");
                                          } catch (_0x41e681) {
                                            console.error("[智能点金] 第" + (_0x1f2547 + 1) + "次点金执行失败:", _0x41e681.message);
                                            if (_0x41e681.message?.["includes"]("钻石") || _0x41e681.message?.["includes"]("付费")) {
                                              console.log("[智能点金] 检测到付费错误，停止继续操作");
                                              break;
                                            }
                                          }
                                          await _0x259832.delay(1);
                                        }
                                        console.log("[智能点金] 智能点金完成，共执行" + _0x1f2547 + "次点金操作");
                                      } catch (_0x3aa76b) {
                                        console.error("[智能点金] 点金过程中发生异常:", _0x3aa76b.message);
                                      }
                                    }
                                  },
                                  label: "点金三次"
                                },
                                "daily-task-quiz": {
                                  func: async () => {
                                    const _0x5cee8e = await _0xe68796.StudyService.startGame({});
                                    const _0x3dce5e = _0x5cee8e.getData();
                                    for (let _0x36ce5d = 0; _0x36ce5d < _0x3dce5e.questionList.length; _0x36ce5d++) {
                                      const _0x5cc07f = _0x3dce5e.questionList[_0x36ce5d];
                                      let _0xcd91e2 = _0x5ed60d[_0x5cc07f.question] || Math.floor(2 * Math.random()) + 1;
                                      const _0x9229e0 = {
                                        id: _0x3dce5e.role.study.id,
                                        option: [_0xcd91e2],
                                        questionId: [_0x5cc07f.id]
                                      };
                                      await _0xe68796.StudyService.answer(_0x9229e0);
                                      await _0x259832.delay(1);
                                    }
                                    for (let _0x5e11a8 = 1; _0x5e11a8 <= 10; _0x5e11a8++) {
                                      const _0x2645db = {
                                        rewardId: _0x5e11a8
                                      };
                                      await _0xe68796.StudyService.claimReward(_0x2645db);
                                      await _0x259832.delay(0.2);
                                    }
                                  },
                                  label: "自动答题"
                                },
                                "daily-task-genie-tickets": {
                                  func: async () => {
                                    {
                                      for (let _0x133ccd = 0; _0x133ccd < 3; _0x133ccd++) {
                                        await _0x259832.sendCommand("genie_buysweep", {});
                                        await _0x259832.delay(0.2);
                                      }
                                    }
                                  },
                                  label: "领取扫荡券"
                                },
                                "daily-task-genie-sweep": {
                                  func: async _0x3db7eb => {
                                    {
                                      if (_0x3db7eb) {
                                        _0x3db7eb.textContent = "🔄 同步服务器数据...";
                                      }
                                      await _0x259832.sendCommand("System_GetTime", {});
                                      await _0x259832.delay(1);
                                      const _0x47a288 = window.__require("ServerData");
                                      if (!_0x47a288 || !_0x47a288.ROLE || !_0x47a288.ROLE.statisticsTime) {
                                        {
                                          throw new Error("无法访问 ServerData.ROLE.statisticsTime 对象");
                                        }
                                      }
                                      let _0x34fd23 = _0x47a288.ROLE.statisticsTime;
                                      try {
                                        _0x34fd23 = JSON.parse(JSON.stringify(_0x34fd23));
                                      } catch (_0x25486f) {
                                        console.warn("[灯神扫荡] 警告：无法将 statisticsTime 转换为标准 JSON 对象。尝试直接访问。", _0x25486f);
                                      }
                                      const _0x2fa522 = {
                                        "1": "魏国",
                                        "2": "蜀国",
                                        "3": "吴国",
                                        "4": "群雄"
                                      };
                                      let _0x4334e4 = 0;
                                      let _0x5066af = 0;
                                      let _0x4df084 = true;
                                      for (let _0x249bf4 = 1; _0x249bf4 <= 4; _0x249bf4++) {
                                        {
                                          const _0x40d874 = "genie:daily:free:" + _0x249bf4;
                                          const _0x2985ac = _0x34fd23[_0x40d874];
                                          const _0x4d992b = _0x34d080 => {
                                            if (typeof _0x34d080 !== "number" || isNaN(_0x34d080) || _0x34d080 <= 0) {
                                              return false;
                                            }
                                            const _0x18bfa3 = new Date(_0x34d080 * 1000);
                                            const _0x38774d = new Date();
                                            return _0x18bfa3.getFullYear() === _0x38774d.getFullYear() && _0x18bfa3.getMonth() === _0x38774d.getMonth() && _0x18bfa3.getDate() === _0x38774d.getDate();
                                          };
                                          if (!_0x4d992b(_0x2985ac)) {
                                            _0x4df084 = false;
                                            break;
                                          }
                                        }
                                      }
                                      if (_0x4df084) {
                                        {
                                          if (_0x3db7eb) {
                                            _0x3db7eb.textContent = "✅ 今日已完成灯神扫荡，本次跳过。";
                                          }
                                          return;
                                        }
                                      }
                                      for (let _0x17cdb8 = 1; _0x17cdb8 <= 4; _0x17cdb8++) {
                                        const _0xa51c20 = _0x2fa522[_0x17cdb8];
                                        const _0x306f86 = "genie:daily:free:" + _0x17cdb8;
                                        await _0x259832.delay(0.3);
                                        if (_0x3db7eb) {
                                          _0x3db7eb.textContent = "🔄 检查 " + _0xa51c20 + " 状态...";
                                        }
                                        const _0xba493d = _0x34fd23[_0x306f86];
                                        const _0x49f645 = _0xd4aa9d => {
                                          if (typeof _0xd4aa9d !== "number" || isNaN(_0xd4aa9d) || _0xd4aa9d <= 0) {
                                            return false;
                                          }
                                          const _0x335b3c = new Date(_0xd4aa9d * 1000);
                                          const _0x45cd7b = new Date();
                                          return _0x335b3c.getFullYear() === _0x45cd7b.getFullYear() && _0x335b3c.getMonth() === _0x45cd7b.getMonth() && _0x335b3c.getDate() === _0x45cd7b.getDate();
                                        };
                                        if (!_0x49f645(_0xba493d)) {
                                          {
                                            if (_0x3db7eb) {
                                              _0x3db7eb.textContent = "🚀 执行 " + _0xa51c20 + " 免费扫荡...";
                                            }
                                            try {
                                              const _0x5a7a89 = {
                                                genieId: _0x17cdb8,
                                                sweepCnt: 1
                                              };
                                              const _0x2d4539 = await _0x259832.sendCommand("genie_sweep", _0x5a7a89);
                                              if (_0x2d4539.code === 0) {
                                                _0x4334e4++;
                                                if (_0x3db7eb) {
                                                  _0x3db7eb.textContent = "✅ 已成功扫荡 " + _0xa51c20 + "。";
                                                }
                                                await _0x259832.delay(1);
                                              } else {
                                                {
                                                  const _0x17c33b = _0x2d4539.msg || "未知错误 (Code: " + _0x2d4539.code + ")";
                                                  if (_0x3db7eb) {
                                                    _0x3db7eb.textContent = "❌ " + _0xa51c20 + " 扫荡失败: " + _0x17c33b;
                                                  }
                                                  await _0x259832.delay(1);
                                                }
                                              }
                                            } catch (_0x16c47f) {
                                              if (_0x3db7eb) {
                                                _0x3db7eb.textContent = "❌ " + _0xa51c20 + " 扫荡异常: " + _0x16c47f.message;
                                              }
                                              await _0x259832.delay(1);
                                            }
                                          }
                                        } else {
                                          _0x5066af++;
                                        }
                                      }
                                    }
                                  },
                                  label: "灯神扫荡"
                                },
                                "daily-task-box": {
                                  func: () => _0xe68796.ItemService.openBox(_0x6c2227),
                                  label: "开启10木箱"
                                },
                                "daily-task-recruit": {
                                  func: async () => {
                                    const _0x5e52a7 = 4;
                                    let _0x228253 = false;
                                    try {
                                      {
                                        console.log("[智能招募] 检查服务器任务状态...");
                                        const _0xcd5302 = {
                                          taskId: _0x5e52a7
                                        };
                                        const _0x40e8ca = await _0x259832.sendCommand("task_claimdailypoint", _0xcd5302);
                                        if (_0x40e8ca?.["code"] === 700020 || _0x40e8ca?.["_rawData"]?.["role"]?.["dailyTask"]?.["complete"]?.["hasOwnProperty"](_0x5e52a7.toString())) {
                                          {
                                            console.log("[智能招募] 任务已完成，无需执行");
                                            return;
                                          }
                                        }
                                        _0x228253 = true;
                                      }
                                    } catch (_0x3990fb) {
                                      _0x228253 = true;
                                    }
                                    if (_0x228253) {
                                      console.log("[智能招募] 任务未完成，开始招募...");
                                      const _0x4ff0b2 = window.__require?.("ServerData");
                                      const _0x1bace6 = _0x4ff0b2?.["ROLE"]?.["statisticsTime"]?.["recruit:one:free"] || 0;
                                      const _0xd455a1 = _0x3d908c => {
                                        if (!_0x3d908c) {
                                          return false;
                                        }
                                        const _0x235531 = new Date(_0x3d908c * 1000);
                                        const _0x533099 = new Date();
                                        return _0x235531.getFullYear() === _0x533099.getFullYear() && _0x235531.getMonth() === _0x533099.getMonth() && _0x235531.getDate() === _0x533099.getDate();
                                      };
                                      const _0x2d50a5 = _0xd455a1(_0x1bace6);
                                      if (_0x2d50a5) {
                                        console.log("[智能招募] 免费次数已用，执行1次付费单抽");
                                        const _0x4d0b14 = {
                                          byClub: false,
                                          recruitNumber: 1,
                                          recruitType: 1
                                        };
                                        await _0x259832.sendCommand("hero_recruit", _0x4d0b14);
                                      } else {
                                        console.log("[智能招募] 免费次数未用，执行1免+1付");
                                        const _0x217e4f = {
                                          byClub: false,
                                          recruitNumber: 1,
                                          recruitType: 3
                                        };
                                        await _0x259832.sendCommand("hero_recruit", _0x217e4f);
                                        await _0x259832.delay(0.2);
                                        const _0xb0c5ac = {
                                          byClub: false,
                                          recruitNumber: 1,
                                          recruitType: 1
                                        };
                                        await _0x259832.sendCommand("hero_recruit", _0xb0c5ac);
                                      }
                                    }
                                  },
                                  label: "执行2次招募"
                                },
                                "daily-task-arena": {
                                  func: () => {
                                    {
                                      return new Promise(async _0x5f027e => {
                                        console.log("正在进行3次竞技场战斗...");
                                        try {
                                          console.log("正在进入竞技场...");
                                          await _0x259832.sendCommand("arena_startarea", {});
                                          await _0x259832.delay(1);
                                          console.log("已成功进入竞技场");
                                        } catch (_0x2708b1) {
                                          console.log("进入竞技场失败，但继续尝试战斗:", _0x2708b1);
                                        }
                                        let _0x46802d = 0;
                                        for (let _0x501b0a = 1; _0x501b0a <= 3; _0x501b0a++) {
                                          try {
                                            {
                                              const _0x306966 = {
                                                refresh: false
                                              };
                                              const _0x2c4900 = await _0x259832.sendCommand("arena_getareatarget", _0x306966);
                                              const _0xacfccf = _0x2c4900?.["_rawData"]?.["roleList"]?.[0]?.["roleId"];
                                              if (!_0xacfccf) {
                                                {
                                                  console.log("竞技场战斗 " + _0x501b0a + "/3 失败: 未获取到目标ID");
                                                  continue;
                                                }
                                              }
                                              const _0x46c33d = {
                                                targetId: _0xacfccf,
                                                battleVersion: 240475
                                              };
                                              await _0x259832.sendCommand("fight_startareaarena", _0x46c33d);
                                              _0x46802d++;
                                              console.log("竞技场战斗 " + _0x501b0a + "/3 成功");
                                            }
                                          } catch (_0x3e6209) {
                                            console.log("竞技场战斗 " + _0x501b0a + "/3 失败:", _0x3e6209.message);
                                          }
                                          await _0x259832.delay(0.1);
                                        }
                                        console.log("竞技场战斗完成: 总3轮, 成功" + _0x46802d + "轮");
                                        _0x5f027e();
                                      });
                                    }
                                  },
                                  label: "进行3次竞技场战斗"
                                },
                                "daily-task-buy-bronze-box": {
                                  func: () => _0x259832.sendCommand("store_buy", _0x3ff689),
                                  label: "购买青铜宝箱"
                                }
                              };
                              let _0x3dacb6 = [];
                              if (_0x302099 === "one-key-100") {
                                _0x3dacb6 = _0x399a99.filter(_0x5a51a4 => _0x5a51a4.task !== "daily-task-quiz").map(_0x26abf6 => _0x4173bd[_0x26abf6.task]);
                              } else {
                                const _0x23ae9d = _0x302099.startsWith("daily-task-") ? _0x302099 : null;
                                if (_0x23ae9d) {
                                  {
                                    if (_0x4173bd[_0x23ae9d]) {
                                      _0x3dacb6.push(_0x4173bd[_0x23ae9d]);
                                    }
                                  }
                                } else {
                                  _0x2a50b8.querySelectorAll("input[type=\"checkbox\"]:checked").forEach(_0x193489 => {
                                    const _0x50169d = _0x193489.dataset.taskName;
                                    if (_0x4173bd[_0x50169d]) {
                                      _0x3dacb6.push(_0x4173bd[_0x50169d]);
                                    }
                                  });
                                }
                              }
                              if (_0x3dacb6.length === 0) {
                                {
                                  _0x25ba06.textContent = "ℹ️ 没有可执行任务";
                                  return;
                                }
                              }
                              _0x302099.startsWith("daily-task-") && (_0x34bde5 = false);
                              if (_0x302099 === "one-key-100") {
                                const _0x1baaf4 = _0x3dacb6.filter(_0x5e3460 => _0x5e3460.label !== "收菜5次、加钟");
                                for (let _0x46c5cc = 0; _0x46c5cc < _0x1baaf4.length; _0x46c5cc++) {
                                  const _0x49c04a = _0x1baaf4[_0x46c5cc];
                                  _0x25ba06.textContent = "🔄 (" + (_0x46c5cc + 1) + "/" + _0x1baaf4.length + ") " + _0x49c04a.label + "...";
                                  try {
                                    {
                                      await _0x49c04a.func();
                                      await _0x259832.delay(0.5);
                                    }
                                  } catch (_0x5b2dfe) {
                                    console.log("任务 " + _0x49c04a.label + " 失败:", _0x5b2dfe);
                                  }
                                }
                                const _0x169c06 = {
                                  func: () => _0xe68796.SystemService.claimHangUpReward({}),
                                  label: "单次收菜"
                                };
                                for (let _0x458adf = 0; _0x458adf < 5; _0x458adf++) {
                                  {
                                    _0x25ba06.textContent = "🥬 收菜 (" + (_0x458adf + 1) + "/5)，等待1s...";
                                    await _0x169c06.func();
                                    if (_0x458adf < 4) {
                                      await _0x259832.delay(1);
                                    }
                                  }
                                }
                                _0x25ba06.textContent = "🔄 正在加钟...";
                                for (let _0x241626 = 0; _0x241626 < 4; _0x241626++) {
                                  const _0x3a9220 = {
                                    isSkipShareCard: true,
                                    type: 2
                                  };
                                  await _0xe68796.SystemService.myShareCallback(_0x3a9220);
                                  await _0x259832.delay(0.2);
                                }
                                _0x25ba06.textContent = "🎁 领取活跃奖励...";
                                await _0x385d20("claim-activity", _0x121acb);
                              } else {
                                {
                                  for (let _0x4205ed = 0; _0x4205ed < _0x3dacb6.length; _0x4205ed++) {
                                    {
                                      const _0x4f9b53 = _0x3dacb6[_0x4205ed];
                                      if (_0x4f9b53.label === "灯神扫荡" && _0x34bde5) {
                                        continue;
                                      }
                                      _0x25ba06.textContent = "🔄 (" + (_0x4205ed + 1) + "/" + _0x3dacb6.length + ") " + _0x4f9b53.label + "...";
                                      try {
                                        {
                                          if (_0x4f9b53.label === "灯神扫荡") {
                                            {
                                              await _0x4f9b53.func(_0x25ba06);
                                              if (_0x3dacb6.length > 1) {
                                                {
                                                  _0x34bde5 = true;
                                                }
                                              }
                                            }
                                          } else {
                                            await _0x4f9b53.func();
                                          }
                                          await _0x259832.delay(0.5);
                                        }
                                      } catch (_0xdd6f2c) {
                                        console.log("任务 " + _0x4f9b53.label + " 失败 (可能已完成):", _0xdd6f2c);
                                      }
                                    }
                                  }
                                }
                              }
                              _0x25ba06.textContent = "✅ " + (_0x302099 === "one-key-100" ? "100活跃度任务" : "任务") + "执行完毕";
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
    } catch (_0x550d49) {
      console.error("任务执行错误:", _0x550d49);
      _0x25ba06.textContent = "❌ 执行出错!";
    } finally {
      {
        (_0x302099 === "execute-daily-checked" || _0x302099 === "one-key-100") && (_0x20c033 = false, _0x29b7ed.forEach(_0x3beca1 => _0x3beca1.disabled = false));
        _0x121acb.disabled = false;
        _0x121acb.textContent = _0x28b9d5;
      }
    }
  }
  function _0x1c11e5(_0x196fdf, _0x294eef) {
    if (_0x196fdf === "collectionUpgrade") {
      const _0x34ced2 = _0x294eef.textContent;
      _0x294eef.disabled = true;
      _0x294eef.textContent = "处理中...";
      _0x2fb58c(_0x294eef).catch(_0x531176 => {
        console.error("藏品图鉴升级错误:", _0x531176);
        _0x294eef.textContent = "❌ 执行出错!";
      }).finally(() => {
        setTimeout(() => {
          _0x294eef.disabled = false;
          _0x294eef.textContent = _0x34ced2;
        }, 1000);
      });
      return true;
    }
    return false;
  }
  _0x4e3ca8.addEventListener("click", _0x388347 => {
    {
      const _0x155084 = _0x388347.target.closest(".task-btn");
      if (_0x155084?.["dataset"]["task"]) {
        if (_0x1c11e5(_0x155084.dataset.task, _0x155084)) {
          return;
        }
        _0x385d20(_0x155084.dataset.task, _0x155084);
      }
    }
  });
  console.log("☠️ 骨头助手 (v" + _0x4ceeb + ") 加载完成！");
})();