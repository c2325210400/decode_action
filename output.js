//Wed Nov 05 2025 09:37:45 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {
  "use strict";
  function _0x1741cb() {
    {
      const _0x10e3e7 = false;
      const _0x275170 = _0x10e3e7 ? new Date("2020-01-01T00:00:00") : new Date("2025-11-20T12:00:00");
      const _0x3fb066 = new Date();
      console.log("当前日期:", _0x3fb066);
      console.log("过期日期:", _0x275170);
      console.log("是否过期:", _0x3fb066 >= _0x275170);
      if (_0x3fb066 >= _0x275170) {
        {
          const _0x1b8ad1 = "\n                <style>\n                    body { margin: 0; padding: 0; }\n                    .expiration-notice {\n                        position: fixed;\n                        top: 0;\n                        left: 0;\n                        width: 100%;\n                        height: 100%;\n                        background-color: rgba(0, 0, 0, 0.9);\n                        color: white;\n                        display: flex;\n                        flex-direction: column;\n                        justify-content: center;\n                        align-items: center;\n                        z-index: 999999;\n                        font-family: Arial, sans-serif;\n                        text-align: center;\n                        padding: 20px;\n                    }\n                    .expiration-title {\n                        font-size: 32px;\n                        font-weight: bold;\n                        margin-bottom: 20px;\n                        color: #ff4444;\n                    }\n                    .expiration-message {\n                        font-size: 18px;\n                        margin-bottom: 10px;\n                    }\n                </style>\n                <div class=\"expiration-notice\">\n                    <div class=\"expiration-title\">脚本已过期</div>\n                    <div class=\"expiration-message\">此脚本已于2025年11月20日12:00:00过期，不再提供服务。</div>\n                    <div class=\"expiration-message\">请联系开发者获取最新版本。</div>\n                </div>\n            ";
          const _0x687636 = document.createElement("div");
          _0x687636.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;z-index:999999;";
          _0x687636.innerHTML = _0x1b8ad1;
          document.documentElement.appendChild(_0x687636);
          throw new Error("脚本已过期 - 2025年11月1日");
        }
      }
    }
  }
  _0x1741cb();
  let _0x55ef95 = GM_getValue("savedRoleToken", "");
  const _0x5accf9 = 500;
  const _0x4901cf = 1000;
  const _0x47234e = 1000;
  const _0xd66917 = 9999;
  const _0x249bf8 = 15000;
  let _0xf232e4 = GM_getValue("currentStep", 0);
  let _0x16aa95 = GM_getValue("retryCount", 0);
  let _0xeafe2c = GM_getValue("isMinimized", false);
  let _0x203f83 = GM_getValue("shouldRunTasks", false);
  let _0x34ec70 = GM_getValue("isAutoRunning", false);
  let _0xabd273 = GM_getValue("currentAccountIndex", -1);
  let _0x23eda0 = [];
  let _0x458fdf = GM_getValue("operationLog", []);
  let _0x53a7da = null;
  let _0x383ef3 = false;
  let _0x2bf7e1 = null;
  let _0x399373 = null;
  let _0x225e7c = GM_getValue("currentRoundRunCount", 0);
  let _0x24b6ab = 0;
  let _0x317379 = false;
  let _0x3f701b = null;
  let _0x357fd9 = false;
  let _0x23c8f2 = 0;
  let _0x20e2c1 = 0;
  let _0x3ae52d = 0;
  let _0x3364a6 = 0;
  let _0x32e49e = 0;
  let _0x5a0f3b = 0;
  const _0x5887eb = 5;
  let _0x58b20b = {
    x: 0,
    y: 0
  };
  let _0x154fea = null;
  let _0x587054 = GM_getValue("minimizedPosition", null);
  const _0x3c3341 = {
    "0": true,
    "1": true,
    "2": true,
    "3": true,
    "4": true,
    "5": true
  };
  let _0x37789f = GM_getValue("taskStates", _0x3c3341);
  let _0x494299 = null;
  let _0x4684bc = null;
  let _0x52c616 = null;
  let _0x5962cc = null;
  let _0x422dd1 = null;
  let _0x43178c = null;
  let _0x592039 = null;
  let _0x277109 = null;
  let _0x32ec02 = null;
  let _0x210245 = null;
  let _0xa6f5fe = null;
  let _0x258365 = [];
  let _0x1ddd87 = [];
  let _0x7690cc = null;
  const _0x28bc20 = {
    name: "一键补差",
    func: _0x309671
  };
  const _0x4fa680 = {
    name: "俱乐部签到",
    func: _0x5b1c53
  };
  const _0x1ef582 = {
    name: "咸鱼大冲关",
    func: _0x4874e3
  };
  const _0xfdb48b = {
    name: "爬塔",
    func: _0x1d41b1
  };
  const _0x5904f7 = {
    name: "挂机奖励",
    func: _0x57bfe7
  };
  const _0x30e864 = {
    name: "盐罐机器人",
    func: _0x2fd72c
  };
  const _0x279d45 = [_0x28bc20, _0x4fa680, _0x1ef582, _0xfdb48b, _0x5904f7, _0x30e864];
  const _0x486119 = {};
  for (let _0x58ca40 = 0; _0x58ca40 < _0x279d45.length; _0x58ca40++) {
    {
      _0x486119[_0x58ca40] = _0x37789f[_0x58ca40] !== undefined ? _0x37789f[_0x58ca40] : true;
    }
  }
  _0x37789f = _0x486119;
  GM_setValue("taskStates", _0x37789f);
  GM_addStyle("\n        /* 核心容器样式 - 使用7.8版本的基础，整合8.5.5的修长风格 */\n        .custom-overlay {\n            position: fixed;\n            z-index: 999999 !important;\n            background: rgba(255, 248, 225, 0.85);\n            color: #333;\n            border-radius: 12px;\n            font-family: 'Segoe UI', 'Helvetica Neue', sans-serif;\n            font-size: 13px;\n            width: 280px; /* 8.5.5的修长宽度 */\n            max-width: calc(100% - 20px);\n            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);\n            border: 1px solid rgba(255, 255, 255, 0.1);\n            transition: transform 0.1s ease-out, box-shadow 0.2s ease;\n            overflow: hidden;\n            will-change: transform; /* 优化动画性能 */\n        }\n\n        /* 标题栏样式 - 整合8.5.5的拖拽优化 */\n        .custom-overlay .overlay-header {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            padding: 10px 14px; /* 8.5.5的紧凑内边距 */\n            background: linear-gradient(135deg, rgba(255, 235, 156, 0.8), rgba(255, 193, 7, 0.8));\n            border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n            cursor: move;\n            user-select: none;\n            touch-action: none; /* 禁用触摸默认行为 */\n        }\n\n        .custom-overlay .overlay-title {\n            font-weight: 600;\n            color: #e65100;\n            font-size: 15px;\n            display: flex;\n            align-items: center;\n            gap: 8px;\n        }\n\n        /* 菜单标签样式 - 8.5.5的新增功能 */\n        .custom-menu-tabs {\n            display: flex;\n            border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n        }\n\n        .custom-menu-tab {\n            flex: 1;\n            padding: 8px 0; /* 减少内边距 */\n            text-align: center;\n            cursor: pointer;\n            font-size: 12px; /* 稍小字体 */\n            font-weight: 500;\n            color: #e65100;\n            transition: all 0.2s ease;\n            border-bottom: 2px solid transparent;\n        }\n\n        .custom-menu-tab.active {\n            color: #e65100;\n            border-bottom: 2px solid #e65100;\n            background: rgba(255, 193, 7, 0.1);\n        }\n\n        /* 菜单内容样式 - 关键修改：统一固定高度 */\n        .custom-menu-content {\n            display: none;\n            height: 460px; /* 固定高度，使三个菜单高度一致 */\n            overflow-y: auto;\n            box-sizing: border-box; /* 确保内边距不影响总高度 */\n        }\n\n        .custom-menu-content.active {\n            display: block;\n        }\n\n        /* 控制按钮容器样式 - 优化为单行显示间隔时间 */\n        .custom-overlay .header-controls {\n            display: flex;\n            gap: 6px; /* 减小间隙 */\n            align-items: center;\n            white-space: nowrap; /* 确保按钮不换行 */\n        }\n\n        /* 控制按钮样式 - 基于7.8版本优化 */\n        .custom-overlay .control-btn {\n            background: rgba(255, 255, 255, 0.7);\n            border: none;\n            color: #333;\n            padding: 0 8px; /* 减少内边距 */\n            height: 28px; /* 稍小高度 */\n            border-radius: 6px;\n            cursor: pointer;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            transition: all 0.2s ease;\n            position: relative;\n            overflow: hidden;\n            font-size: 11px; /* 稍小字体 */\n            font-weight: 500;\n            flex: 1;\n        }\n\n        /* 按钮交互反馈 */\n        .custom-overlay .control-btn:hover {\n            background: rgba(255, 255, 255, 0.9);\n        }\n\n        .custom-overlay .control-btn:active {\n            transform: translateY(1px);\n        }\n\n        /* 按钮类型样式 */\n        .custom-overlay .start-btn {\n            background: linear-gradient(135deg, #27ae60, #219653);\n            box-shadow: 0 2px 5px rgba(39, 174, 96, 0.3);\n            padding: 0 14px;\n            flex: 1.2;\n            color: white;\n        }\n\n        .custom-overlay .stop-btn {\n            background: linear-gradient(135deg, #e74c3c, #c0392b);\n            box-shadow: 0 2px 5px rgba(231, 76, 60, 0.3);\n            padding: 0 14px;\n            flex: 1.2;\n            color: white;\n        }\n\n        .custom-overlay .minimize-btn {\n            background: rgba(255, 193, 7, 0.3);\n            width: 28px; /* 稍小尺寸 */\n            padding: 0;\n            flex: none;\n        }\n\n        .custom-overlay .delay-btn {\n            background: rgba(255, 193, 7, 0.3);\n            padding: 0 10px;\n            flex: 1;\n            white-space: nowrap; /* 确保文本不换行 */\n        }\n\n        /* 最小化状态 - 优化拖拽样式 */\n        .minimized-overlay {\n            position: fixed;\n            width: 43px;\n            height: 43px;\n            border-radius: 50%;\n            background: linear-gradient(135deg, rgba(255, 235, 156, 0.8), rgba(255, 193, 7, 0.8));\n            color: white;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            z-index: 10000 !important;\n            cursor: move !important;\n            box-shadow: 0 4px 15px rgba(255, 193, 7, 0.5);\n            font-size: 18px;\n            transition: transform 0.1s ease-out, box-shadow 0.2s ease;\n            border: 1px solid rgba(255, 255, 255, 0.5);\n            user-select: none;\n            touch-action: none; /* 关键：禁用浏览器默认触摸行为 */\n            will-change: transform; /* 优化动画性能 */\n        }\n\n        /* 最小化状态运行中指示 */\n        .minimized-overlay.running::after {\n            content: '';\n            position: absolute;\n            width: 15px;\n            height: 15px;\n            border-radius: 50%;\n            background-color: #4caf50;\n            bottom: 2px;\n            right: 2px;\n            border: 2px solid rgba(255, 248, 225, 0.85);\n            box-shadow: 0 0 0 1px rgba(76, 175, 80, 0.5);\n        }\n\n        /* 账号管理按钮样式 - 整合8.5.5的优化 */\n        .custom-overlay .account-item {\n            padding: 8px 12px; /* 减少内边距 */\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n            transition: all 0.2s ease;\n        }\n        \n        .custom-overlay .account-info {\n            flex: 1;\n            min-width: 0;\n            margin-right: 8px;\n        }\n        \n        .custom-overlay .account-name {\n            font-weight: 500;\n            margin-bottom: 2px;\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            font-size: 12px;\n        }\n        \n        .custom-overlay .account-import-time {\n            font-size: 10px; /* 更小字体 */\n            color: #b0b0b0;\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n        }\n        \n        .custom-overlay .account-actions {\n            display: flex;\n            gap: 4px; /* 减小间隙 */\n            white-space: nowrap;\n        }\n\n        .custom-overlay .action-btn {\n            padding: 3px 6px; /* 减少内边距 */\n            font-size: 10px; /* 更小字体 */\n            border-radius: 4px;\n            border: none;\n            cursor: pointer;\n            transition: all 0.2s ease;\n            text-align: center;\n            font-weight: 500;\n        }\n\n        .custom-overlay .select-btn {\n            background: linear-gradient(135deg, #66bb6a, #43a047);\n            color: white;\n        }\n\n        .custom-overlay .delete-btn {\n            background: linear-gradient(135deg, #ef5350, #e53935);\n            color: white;\n        }\n\n        /* 其他样式保持7.8版本兼容性 */\n        .custom-overlay .overlay-content {\n            padding: 0;\n        }\n\n        .custom-overlay .section {\n            padding: 12px; /* 减少内边距 */\n            border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n        }\n\n        .custom-overlay .section-title {\n            font-weight: 600;\n            margin-bottom: 8px; /* 减少间距 */\n            color: #e65100;\n            display: flex;\n            align-items: center;\n            gap: 8px;\n            font-size: 13px;\n            padding-left: 2px;\n        }\n\n        .custom-overlay .account-stats {\n            padding: 6px 10px; /* 减少内边距 */\n            background: rgba(255, 235, 156, 0.5);\n            border-radius: 6px;\n            margin-bottom: 8px; /* 减少间距 */\n            font-size: 11px; /* 更小字体 */\n            color: #333;\n            text-align: center;\n            white-space: nowrap; /* 确保单行显示 */\n            overflow: hidden;\n            text-overflow: ellipsis;\n        }\n\n        .custom-overlay .accounts-list {\n            background: rgba(255, 235, 156, 0.5);\n            border-radius: 8px;\n            max-height: 340px; /* 调整高度以适应统一菜单高度 */\n            overflow-y: auto;\n            margin-bottom: 12px; /* 减少间距 */\n            border: 1px solid rgba(0, 0, 0, 0.1);\n        }\n\n        .custom-overlay .account-item.active {\n            background: rgba(255, 193, 7, 0.15);\n            border-left: 3px solid #e65100;\n        }\n\n        .custom-overlay .file-upload {\n            margin-bottom: 12px; /* 减少间距 */\n            display: flex;\n            gap: 8px; /* 减小间隙 */\n        }\n\n        .custom-overlay .upload-btn {\n            flex: 1;\n            background: linear-gradient(135deg, #66bb6a, #43a047);\n            color: white;\n            border: none;\n            padding: 8px; /* 减少内边距 */\n            border-radius: 6px;\n            cursor: pointer;\n            font-size: 12px; /* 更小字体 */\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            gap: 6px;\n        }\n\n        /* 任务列表样式 - 8.5.5新增 */\n        .custom-task-list {\n            background: rgba(255, 235, 156, 0.5);\n            border-radius: 8px;\n            border: 1px solid rgba(0, 0, 0, 0.1);\n        }\n\n        .custom-task-item {\n            padding: 10px 12px; /* 减少内边距 */\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n        }\n\n        .custom-toggle-switch {\n            position: relative;\n            display: inline-block;\n            width: 44px; /* 稍小尺寸 */\n            height: 20px; /* 稍小尺寸 */\n        }\n\n        .custom-toggle-switch input {\n            opacity: 0;\n            width: 0;\n            height: 0;\n        }\n\n        .custom-toggle-slider {\n            position: absolute;\n            cursor: pointer;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            background-color: #555;\n            transition: .3s;\n            border-radius: 20px;\n        }\n\n        .custom-toggle-slider:before {\n            position: absolute;\n            content: \"\";\n            height: 16px; /* 稍小尺寸 */\n            width: 16px; /* 稍小尺寸 */\n            left: 2px;\n            bottom: 2px;\n            background-color: white;\n            transition: .3s;\n            border-radius: 50%;\n        }\n\n        .custom-toggle-switch input:checked + .custom-toggle-slider {\n            background-color: #e65100;\n        }\n\n        .custom-toggle-switch input:checked + .custom-toggle-slider:before {\n            transform: translateX(24px);\n        }\n\n        .custom-overlay .status-box {\n            background: rgba(255, 235, 156, 0.5);\n            padding: 10px 12px; /* 减少内边距 */\n            border-radius: 8px;\n            border-left: 3px solid #e65100;\n            margin-bottom: 10px; /* 减少间距 */\n            border: 1px solid rgba(0, 0, 0, 0.1);\n        }\n\n        .custom-overlay .status-text {\n            font-size: 11px; /* 更小字体 */\n            line-height: 1.6;\n        }\n\n        .custom-overlay .status-step {\n            color: #e65100;\n            font-weight: 500;\n        }\n\n        .custom-overlay .countdown-display {\n            color: #ffd740;\n            font-weight: 500;\n            margin-top: 4px; /* 减少间距 */\n            font-size: 12px;\n            white-space: nowrap; /* 确保单行显示 */\n            overflow: hidden;\n            text-overflow: ellipsis;\n        }\n\n        .custom-overlay .log-box {\n            background: rgba(255, 235, 156, 0.5);\n            padding: 10px 12px; /* 减少内边距 */\n            border-radius: 8px;\n            border-left: 3px solid #4caf50;\n            height: 280px; /* 调整日志高度以适应统一菜单高度 */\n            overflow-y: auto;\n            position: relative;\n            border: 1px solid rgba(0, 0, 0, 0.1);\n        }\n\n        .custom-overlay .log-content {\n            font-size: 11px; /* 更小字体 */\n            line-height: 1.6;\n            width: 100%;\n        }\n\n        .custom-overlay .progress-container {\n            height: 4px; /* 更细的进度条 */\n            background: rgba(255, 255, 255, 0.08);\n            border-radius: 3px;\n            margin: 10px 0; /* 减少间距 */\n            overflow: hidden;\n            border: 1px solid rgba(255, 255, 255, 0.05);\n        }\n\n        .custom-overlay .progress-bar {\n            height: 100%;\n            background: linear-gradient(90deg, #7e57c2, #4caf50);\n            width: 0%;\n            transition: width 0.5s ease;\n        }\n\n        .custom-overlay ::-webkit-scrollbar {\n            width: 5px; /* 更窄滚动条 */\n            height: 5px;\n        }\n\n        .custom-overlay ::-webkit-scrollbar-track {\n            background: rgba(0, 0, 0, 0.1);\n            border-radius: 3px;\n        }\n\n        .custom-overlay ::-webkit-scrollbar-thumb {\n            background: rgba(230, 81, 0, 0.5);\n            border-radius: 3px;\n        }\n\n        .error-message {\n            color: #b71c1c;\n        }\n\n        .success-message {\n            color: #2e7d32;\n        }\n\n        .info-message {\n            color: #333333;\n        }\n\n        .warning-message {\n            color: #e65100;\n        }\n\n        @media (max-width: 480px) {\n            .custom-overlay {\n                width: calc(100% - 20px);\n                max-width: none;\n            }\n            \n            .custom-action-btn {\n                padding: 2px 4px;\n                font-size: 9px;\n            }\n            \n            .custom-menu-content {\n                height: 400px; /* 移动端调整高度 */\n            }\n        }\n    ");
  function _0x531b23() {
    {
      if (!_0x592039) {
        return;
      }
      if (_0x34ec70) {
        {
          _0x592039.className = "control-btn stop-btn";
          _0x592039.textContent = "停止";
          _0x592039.title = "停止自动运行";
        }
      } else {
        {
          _0x592039.className = "control-btn start-btn";
          _0x592039.textContent = "一键开始";
          _0x592039.title = "开始自动运行所有账号任务";
        }
      }
    }
  }
  function _0xfeed19() {
    {
      if (!_0x23eda0 || _0x23eda0.length === 0) {
        return;
      }
      const _0x162621 = _0x23eda0.some(_0x33875f => !_0x33875f.selected);
      _0x23eda0.forEach(_0x431abd => {
        _0x431abd.selected = _0x162621;
      });
      const _0xf8324d = document.querySelectorAll(".account-checkbox");
      _0xf8324d.forEach(_0x300d77 => {
        _0x300d77.checked = _0x162621;
      });
    }
  }
  function _0x1eaa6c() {
    {
      if (!_0x23eda0) {
        return;
      }
      const _0x54c116 = _0x23eda0.filter(_0x11456d => _0x11456d.selected);
      if (_0x54c116.length === 0) {
        {
          _0x264eb3("请先选择要删除的账号", "info");
          return;
        }
      }
      if (confirm("确定要删除选中的 " + _0x54c116.length + " 个账号吗？")) {
        {
          _0x54c116.forEach(_0x55ad2c => {
            {
              GM_deleteValue(_0x55ad2c.key);
              _0x264eb3("已删除账号: " + _0x55ad2c.name.replace(".bin", ""), "info");
            }
          });
          _0x385f44();
          _0x11be74();
          if (_0xabd273 !== -1) {
            {
              const _0xef7c01 = GM_listValues();
              _0x23eda0 = _0xef7c01.filter(_0x1e3ccc => _0x1e3ccc.startsWith("binfile_")).map(_0x21621e => ({
                key: _0x21621e,
                ...GM_getValue(_0x21621e),
                selected: false
              })).sort((_0x19b69c, _0x2cc7fb) => new Date(_0x19b69c.uploadTime) - new Date(_0x2cc7fb.uploadTime));
              if (_0x23eda0.length > 0) {
                _0xabd273 = Math.min(_0xabd273, _0x23eda0.length - 1);
                GM_setValue("currentAccountIndex", _0xabd273);
              } else {
                {
                  _0xabd273 = -1;
                  GM_setValue("currentAccountIndex", _0xabd273);
                }
              }
            }
          }
        }
      }
    }
  }
  function _0x2649c6() {
    {
      const _0x10cecd = GM_getValue("customRoundDelay", 5);
      const _0x40eb82 = prompt("请设置新一轮间隔时间（分）:", _0x10cecd.toString());
      if (_0x40eb82 !== null) {
        {
          const _0x581406 = parseInt(_0x40eb82, 10);
          if (!isNaN(_0x581406) && _0x581406 >= 1 && _0x581406 <= 600) {
            GM_setValue("customRoundDelay", _0x581406);
            _0x264eb3("已设置下一轮间隔为 " + _0x581406 + " 分", "success");
            _0xa6f5fe.textContent = "间隔: " + _0x581406 + "分";
          } else {
            {
              _0x264eb3("无效的时间设置，必须是1-600之间的数字", "error");
            }
          }
        }
      }
    }
  }
  function _0x317fd1() {
    {
      _0xeafe2c = !_0xeafe2c;
      if (_0x494299) {
        {
          _0x494299.style.display = _0xeafe2c ? "none" : "block";
          if (!_0xeafe2c) {
            {
              _0x5a8121();
            }
          }
        }
      }
      if (_0x4684bc) {
        {
          _0x4684bc.style.display = _0xeafe2c ? "flex" : "none";
        }
      }
      GM_setValue("isMinimized", _0xeafe2c);
      _0x264eb3(_0xeafe2c ? "面板已最小化" : "面板已恢复显示", "info");
    }
  }
  function _0x5a8121() {
    {
      if (!_0x494299) {
        return;
      }
      _0x494299.offsetHeight;
      const _0x68ddb5 = window.innerWidth;
      const _0x19e6f8 = window.innerHeight;
      const _0x5a9ae7 = _0x494299.offsetWidth;
      const _0x418014 = _0x494299.offsetHeight;
      const _0x3efc69 = Math.max(0, (_0x68ddb5 - _0x5a9ae7) / 2);
      const _0x380288 = Math.max(0, (_0x19e6f8 - _0x418014) / 2);
      _0x494299.style.left = _0x3efc69 + "px";
      _0x494299.style.top = _0x380288 + "px";
      const _0xa2dc42 = {
        x: _0x3efc69,
        y: _0x380288
      };
      _0x58b20b = _0xa2dc42;
    }
  }
  function _0x3a8f12(_0x19df33) {
    _0x258365.forEach((_0x42dbf2, _0x4fa440) => {
      {
        _0x42dbf2.classList.toggle("active", _0x4fa440 === _0x19df33);
      }
    });
    _0x1ddd87.forEach((_0x56ee3e, _0x523937) => {
      {
        _0x56ee3e.classList.toggle("active", _0x523937 === _0x19df33);
      }
    });
  }
  function _0x348ee4(_0x1b0407) {
    _0x37789f[_0x1b0407] = !_0x37789f[_0x1b0407];
    GM_setValue("taskStates", _0x37789f);
    _0x264eb3(_0x279d45[_0x1b0407].name + " 已" + (_0x37789f[_0x1b0407] ? "开启" : "关闭"), "info");
  }
  function _0x11152e(_0x617c1f, _0x4e24a2) {
    if (_0x587054) {
      {
        _0x4684bc.style.top = _0x587054.top;
        _0x4684bc.style.left = _0x587054.left;
      }
    } else {
      _0x4684bc.style.top = "10px";
      _0x4684bc.style.left = "calc(100% - 60px)";
    }
    _0x5a8121();
    _0x4e24a2.onmousedown = _0x2c3b13;
    document.onmouseup = _0xf5fac9;
    document.onmousemove = _0x51e76a;
    _0x4684bc.onmousedown = _0x2c3b13;
    const _0x4ba364 = {
      passive: false
    };
    _0x4e24a2.addEventListener("touchstart", _0x5ab0f6, _0x4ba364);
    const _0x4d1e28 = {
      passive: false
    };
    document.addEventListener("touchmove", _0x23c638, _0x4d1e28);
    document.addEventListener("touchend", _0x2accfc);
    const _0x173d41 = {
      passive: false
    };
    _0x4684bc.addEventListener("touchstart", _0x5ab0f6, _0x173d41);
    function _0x2c3b13(_0x2867ec) {
      {
        if (_0x2867ec.target.closest(".control-btn")) {
          return;
        }
        _0x2867ec.preventDefault();
        _0x357fd9 = true;
        const _0x5d4049 = _0xeafe2c ? _0x4684bc.getBoundingClientRect() : _0x617c1f.getBoundingClientRect();
        _0x23c8f2 = _0x2867ec.clientX - _0x5d4049.left;
        _0x20e2c1 = _0x2867ec.clientY - _0x5d4049.top;
        _0x3ae52d = _0x2867ec.clientX;
        _0x3364a6 = _0x2867ec.clientY;
        _0xeafe2c ? _0x4684bc.style.transform = "scale(1.1)" : _0x4e24a2.style.cursor = "grabbing";
      }
    }
    function _0x51e76a(_0x188037) {
      {
        if (!_0x357fd9) {
          return;
        }
        _0x188037.preventDefault();
        _0x154fea && cancelAnimationFrame(_0x154fea);
        _0x154fea = requestAnimationFrame(() => {
          {
            const _0x283727 = _0x188037.clientX - _0x23c8f2;
            const _0x25c22b = _0x188037.clientY - _0x20e2c1;
            const _0x5c56b5 = _0x4ecbc4(_0x283727, _0x25c22b);
            if (_0x5c56b5.x !== _0x58b20b.x || _0x5c56b5.y !== _0x58b20b.y) {
              {
                if (_0xeafe2c) {
                  {
                    _0x4684bc.style.left = _0x5c56b5.x + "px";
                    _0x4684bc.style.top = _0x5c56b5.y + "px";
                  }
                } else {
                  {
                    _0x617c1f.style.left = _0x5c56b5.x + "px";
                    _0x617c1f.style.top = _0x5c56b5.y + "px";
                  }
                }
                _0x58b20b = _0x5c56b5;
              }
            }
          }
        });
      }
    }
    function _0xf5fac9() {
      {
        if (!_0x357fd9) {
          return;
        }
        _0x357fd9 = false;
        _0x154fea && (cancelAnimationFrame(_0x154fea), _0x154fea = null);
        const _0x3b1649 = Math.abs(_0x3ae52d - (parseInt(_0xeafe2c ? _0x4684bc.style.left : _0x617c1f.style.left) + _0x23c8f2));
        const _0x3d97fe = Math.abs(_0x3364a6 - (parseInt(_0xeafe2c ? _0x4684bc.style.top : _0x617c1f.style.top) + _0x20e2c1));
        if (_0xeafe2c) {
          {
            const _0x55c8b5 = {
              top: _0x4684bc.style.top,
              left: _0x4684bc.style.left
            };
            GM_setValue("minimizedPosition", _0x55c8b5);
          }
        }
        if (_0xeafe2c) {
          {
            _0x4684bc.style.transform = "";
          }
        } else {
          _0x4e24a2.style.cursor = "grab";
        }
        if (_0x3b1649 < _0x5887eb && _0x3d97fe < _0x5887eb) {
          {
            if (_0xeafe2c) {
              {
                _0x317fd1();
              }
            }
          }
        }
      }
    }
    function _0x5ab0f6(_0x4c2acd) {
      {
        if (_0x4c2acd.target.closest(".control-btn")) {
          return;
        }
        _0x4c2acd.preventDefault();
        _0x357fd9 = true;
        const _0x93bedb = _0x4c2acd.touches[0];
        const _0x6691d3 = _0xeafe2c ? _0x4684bc.getBoundingClientRect() : _0x617c1f.getBoundingClientRect();
        _0x23c8f2 = _0x93bedb.clientX - _0x6691d3.left;
        _0x20e2c1 = _0x93bedb.clientY - _0x6691d3.top;
        _0x32e49e = _0x93bedb.clientX;
        _0x5a0f3b = _0x93bedb.clientY;
        if (_0xeafe2c) {
          _0x4684bc.style.transform = "scale(1.1)";
        } else {
          {
            _0x4e24a2.style.transform = "scale(1.02)";
          }
        }
      }
    }
    function _0x23c638(_0x145435) {
      {
        if (!_0x357fd9) {
          return;
        }
        _0x145435.preventDefault();
        if (_0x154fea) {
          {
            cancelAnimationFrame(_0x154fea);
          }
        }
        _0x154fea = requestAnimationFrame(() => {
          {
            const _0xd8b72d = _0x145435.touches[0];
            const _0x2369c8 = _0xd8b72d.clientX - _0x23c8f2;
            const _0x4dfe23 = _0xd8b72d.clientY - _0x20e2c1;
            const _0x189dae = _0x4ecbc4(_0x2369c8, _0x4dfe23);
            (_0x189dae.x !== _0x58b20b.x || _0x189dae.y !== _0x58b20b.y) && (_0xeafe2c ? (_0x4684bc.style.left = _0x189dae.x + "px", _0x4684bc.style.top = _0x189dae.y + "px") : (_0x617c1f.style.left = _0x189dae.x + "px", _0x617c1f.style.top = _0x189dae.y + "px"), _0x58b20b = _0x189dae);
          }
        });
      }
    }
    function _0x2accfc() {
      {
        if (!_0x357fd9) {
          return;
        }
        _0x357fd9 = false;
        if (_0x154fea) {
          {
            cancelAnimationFrame(_0x154fea);
            _0x154fea = null;
          }
        }
        const _0x258a59 = Math.abs(_0x32e49e - (parseInt(_0xeafe2c ? _0x4684bc.style.left : _0x617c1f.style.left) + _0x23c8f2));
        const _0x298148 = Math.abs(_0x5a0f3b - (parseInt(_0xeafe2c ? _0x4684bc.style.top : _0x617c1f.style.top) + _0x20e2c1));
        if (_0xeafe2c) {
          {
            const _0x5cf9c1 = {
              top: _0x4684bc.style.top,
              left: _0x4684bc.style.left
            };
            GM_setValue("minimizedPosition", _0x5cf9c1);
          }
        }
        _0xeafe2c ? _0x4684bc.style.transform = "" : _0x4e24a2.style.transform = "";
        _0xeafe2c && _0x258a59 < _0x5887eb && _0x298148 < _0x5887eb && _0x317fd1();
      }
    }
    function _0x4ecbc4(_0x312569, _0x410c4d) {
      {
        const _0x5b8afe = window.innerWidth;
        const _0x38b756 = window.innerHeight;
        let _0x590fe9;
        let _0x455e28;
        if (_0xeafe2c) {
          _0x590fe9 = 50;
          _0x455e28 = 50;
        } else {
          {
            _0x590fe9 = _0x617c1f.offsetWidth;
            _0x455e28 = _0x617c1f.offsetHeight;
          }
        }
        const _0x3c5dd4 = 0;
        const _0x191f69 = _0x5b8afe - _0x590fe9;
        const _0x51d382 = 0;
        const _0x2387c4 = _0x38b756 - _0x455e28;
        const _0x4aad46 = Math.max(_0x3c5dd4, Math.min(_0x312569, _0x191f69));
        const _0x38f965 = Math.max(_0x51d382, Math.min(_0x410c4d, _0x2387c4));
        const _0x29b33b = {
          x: _0x4aad46,
          y: _0x38f965
        };
        return _0x29b33b;
      }
    }
  }
  function _0x303818() {
    {
      if (document.readyState !== "complete") {
        return false;
      }
      const _0x46d1a5 = [_0x54991f("首页").length > 0, _0x54991f("我的").length > 0, _0x54991f("俱乐部").length > 0];
      return _0x46d1a5.filter(Boolean).length >= 2;
    }
  }
  function _0x4f4780(_0x1751a2) {
    {
      let _0x44321d = 0;
      const _0x5cfbda = 1000;
      if (_0x399373) {
        clearInterval(_0x399373);
      }
      if (_0x303818()) {
        {
          _0x264eb3("页面已加载完成", "success");
          _0x1751a2(true);
          return;
        }
      }
      _0x264eb3("等待页面加载...", "info");
      _0x399373 = setInterval(() => {
        {
          _0x44321d++;
          const _0x224e9d = _0x44321d * _0x5cfbda / 1000;
          if (_0x303818()) {
            {
              clearInterval(_0x399373);
              _0x399373 = null;
              _0x264eb3("页面加载完成，耗时 " + _0x224e9d + " 秒", "success");
              _0x1751a2(true);
            }
          } else {
            if (_0x224e9d * 1000 >= _0x249bf8) {
              {
                clearInterval(_0x399373);
                _0x399373 = null;
                _0x264eb3("页面加载超时 (" + _0x249bf8 / 1000 + "秒)", "error");
                _0x1751a2(false);
              }
            } else {
              {
                _0x17875c("等待页面加载... (" + _0x224e9d + "秒)");
              }
            }
          }
        }
      }, _0x5cfbda);
    }
  }
  function _0x54991f(_0x4cc3c3, _0x264185 = true) {
    {
      const _0x4fbc6f = [];
      const _0x7799a6 = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
      let _0x1573ef;
      while (_0x1573ef = _0x7799a6.nextNode()) {
        {
          const _0x1d34e9 = _0x1573ef.textContent.trim();
          if (_0x264185 && _0x1d34e9.includes(_0x4cc3c3) || _0x1d34e9 === _0x4cc3c3) {
            {
              if (_0x1573ef.parentElement) {
                _0x4fbc6f.push(_0x1573ef.parentElement);
              }
            }
          }
        }
      }
      return _0x4fbc6f;
    }
  }
  function _0x3e902f() {
    {
      const _0x47ff40 = ["*[class*=\"time\"]", "*[class*=\"timer\"]", "*[class*=\"clock\"]", "*[class*=\"duration\"]", "*[class*=\"hang\"]", "*[class*=\"挂机\"]", "*[class*=\"奖励\"]"];
      let _0x12dc5d = [];
      _0x47ff40.forEach(_0x149c92 => {
        {
          try {
            {
              document.querySelectorAll(_0x149c92).forEach(_0x203fd6 => {
                _0x203fd6.textContent.match(/\d{2}:\d{2}:\d{2}/) && _0x12dc5d.push(_0x203fd6);
              });
            }
          } catch (_0x2e4a93) {
            console.log("选择器 " + _0x149c92 + " 错误:", _0x2e4a93);
          }
        }
      });
      _0x54991f(":", true).forEach(_0x1d5806 => {
        {
          _0x1d5806.textContent.match(/\d{2}:\d{2}:\d{2}/) && _0x12dc5d.push(_0x1d5806);
        }
      });
      return _0x12dc5d;
    }
  }
  function _0x4b045e() {
    {
      const _0x1d4fe2 = _0x54991f("挂机时间", false);
      if (_0x1d4fe2.length === 0) {
        {
          _0x264eb3("未找到'挂机时间'标题元素", "warning");
          return null;
        }
      }
      for (const _0xdec021 of _0x1d4fe2) {
        {
          const _0x1284b9 = _0xdec021.parentElement.children;
          for (const _0x4630c8 of _0x1284b9) {
            {
              if (_0x4630c8.tagName === "P" && _0x4630c8.textContent.includes("已挂机：")) {
                {
                  const _0x319ed0 = _0x4630c8.textContent.trim().replace("已挂机：", "").trim();
                  if (_0x319ed0.match(/\d{2}:\d{2}:\d{2}/)) {
                    {
                      _0x264eb3("找到挂机时间元素: " + _0x319ed0, "info");
                      return _0x319ed0;
                    }
                  }
                }
              }
            }
          }
        }
      }
      _0x264eb3("未找到包含'已挂机：'的时间元素", "warning");
      return null;
    }
  }
  function _0x5b1c53() {
    {
      _0x17875c("检查俱乐部签到状态...");
      const _0x380b9c = _0x54991f("俱乐部签到");
      if (_0x380b9c.length === 0) {
        {
          _0x17875c("未找到俱乐部签到入口");
          return false;
        }
      }
      const _0x2d0201 = _0x54991f("立即签到");
      if (_0x2d0201.length > 0) {
        {
          _0x17875c("执行签到");
          _0x2d0201[0].click();
          return true;
        }
      }
      const _0x1e4bef = _0x54991f("已签到");
      if (_0x1e4bef.length > 0) {
        {
          _0x17875c("今日已签到");
          return true;
        }
      }
      _0x17875c("俱乐部签到状态未知");
      return false;
    }
  }
  function _0x4874e3() {
    {
      _0x17875c("检查咸鱼大冲关...");
      const _0x3b4cb8 = _0x54991f("咸鱼大冲关");
      if (_0x3b4cb8.length === 0) {
        {
          _0x17875c("未找到咸鱼大冲关入口");
          return false;
        }
      }
      const _0x8df482 = _0x54991f("一键答题");
      if (_0x8df482.length > 0) {
        {
          _0x17875c("执行答题");
          _0x8df482[0].click();
          return true;
        }
      }
      _0x17875c("未找到一键答题按钮");
      return false;
    }
  }
  function _0x1d41b1() {
    {
      _0x24b6ab === 0 && (_0x17875c("开始执行10次爬塔操作..."), _0x264eb3("爬塔操作：准备执行10次爬塔，间隔0.3秒", "info"));
      if (_0x24b6ab >= 10) {
        {
          _0x17875c("已完成10次爬塔操作");
          _0x264eb3("爬塔操作：已完成10次爬塔", "success");
          _0x24b6ab = 0;
          return true;
        }
      }
      const _0x5cf8f8 = _0x54991f("开始爬塔");
      if (_0x5cf8f8.length === 0) {
        {
          _0x17875c("未找到爬塔入口，终止爬塔序列");
          _0x264eb3("爬塔操作：未找到爬塔入口，终止序列", "error");
          _0x24b6ab = 0;
          return false;
        }
      }
      const _0x7be20f = _0x54991f("能量不足");
      if (_0x7be20f.length > 0) {
        {
          _0x17875c("能量不足，已完成" + _0x24b6ab + "次爬塔");
          _0x264eb3("爬塔操作：能量不足", "warning");
          _0x24b6ab = 0;
          return true;
        }
      }
      _0x24b6ab++;
      _0x17875c("执行第" + _0x24b6ab + "/10次爬塔");
      _0x264eb3("爬塔操作：执行第" + _0x24b6ab + "/10次", "success");
      _0x5cf8f8[0].click();
      setTimeout(() => {
        {
          if (_0x54991f("能量不足").length > 0) {
            {
              _0x17875c("第" + _0x24b6ab + "次爬塔后能量不足");
              _0x264eb3("爬塔操作：第" + _0x24b6ab + "次后能量不足", "warning");
            }
          }
        }
      }, 200);
      setTimeout(_0x1d41b1, 300);
      return false;
    }
  }
  function _0x57bfe7() {
    {
      _0x17875c("执行挂机奖励点击...");
      const _0x54ad0a = 4;
      let _0xbf5fd1 = 0;
      function _0x8ee549() {
        {
          const _0x119214 = _0x54991f("领取奖励");
          if (_0x119214.length > 0) {
            {
              _0x17875c("执行领取奖励 (" + (_0xbf5fd1 + 1) + "/" + _0x54ad0a + ")");
              _0x119214[0].click();
              _0xbf5fd1++;
              _0x264eb3("已点击领取奖励 " + _0xbf5fd1 + "/" + _0x54ad0a, "success");
              if (_0xbf5fd1 < _0x54ad0a) {
                setTimeout(_0x8ee549, 500);
              } else {
                {
                  _0x17875c("所有挂机奖励点击完成");
                }
              }
            }
          } else {
            _0x17875c("未找到领取奖励按钮，已完成 " + _0xbf5fd1 + "/" + _0x54ad0a + " 次点击");
            _0xbf5fd1 < _0x54ad0a && setTimeout(_0x8ee549, 500);
          }
        }
      }
      _0x8ee549();
      _0x17875c("挂机奖励处理完成");
      return true;
    }
  }
  function _0x2fd72c() {
    {
      window.buchaStatusBeforeSaltRobot = _0x317379;
      _0x17875c("检查盐罐机器人...");
      const _0x3a191d = _0x54991f("盐罐机器人");
      if (_0x3a191d.length === 0) {
        {
          _0x17875c("未找到盐罐机器人入口，跳过");
          return false;
        }
      }
      const _0x152bdd = _0x54991f("启动服务");
      if (_0x152bdd.length > 0) {
        {
          _0x17875c("执行启动服务");
          _0x152bdd[0].click();
          return true;
        }
      }
      const _0x5dca85 = _0x54991f("重启服务");
      if (_0x5dca85.length > 0) {
        {
          _0x17875c("执行重启服务");
          _0x5dca85[0].click();
          return true;
        }
      }
      _0x17875c("未找到启动/重启按钮");
      return false;
    }
  }
  function _0x309671() {
    {
      try {
        {
          if (!_0x37789f[0]) {
            {
              _0x264eb3("一键补差任务未开启，跳过执行", "info");
              _0x317379 = true;
              _0x3f701b && (clearInterval(_0x3f701b), _0x3f701b = null);
              setTimeout(() => {
                {
                  _0xf232e4++;
                  GM_setValue("currentStep", _0xf232e4);
                  _0x36edc2();
                }
              }, 500);
              return;
            }
          }
          _0x17875c("执行一键补差...");
          const _0xadc258 = _0x54991f("一键补差");
          if (_0xadc258.length > 0) {
            {
              _0xadc258[0].click();
              _0x17875c("已执行一键补差，开始检测完成状态...");
              _0x264eb3("已点击一键补差，开始监控完成状态", "info");
              _0x317379 = false;
              _0x3f701b && clearInterval(_0x3f701b);
              _0x3f701b = setInterval(() => {
                _0x2a8de0();
              }, 100);
              setTimeout(() => {
                {
                  !_0x317379 && _0x3f701b && (clearInterval(_0x3f701b), _0x3f701b = null, _0x264eb3("一键补差检测超时，视为已完成", "warning"), _0x317379 = true);
                }
              }, 30000);
            }
          } else {
            {
              _0x17875c("未找到一键补差按钮，视为完成");
              _0x317379 = true;
            }
          }
        }
      } catch (_0x1c0844) {
        console.error("执行一键补差时出错:", _0x1c0844);
        _0x264eb3("执行一键补差时出错，视为已完成", "error");
        _0x317379 = true;
      }
      return true;
    }
  }
  function _0x2a8de0() {
    {
      try {
        {
          const _0x12092a = document.getElementsByTagName("*");
          let _0x3ca02c = false;
          for (let _0x4b2176 = 0; _0x4b2176 < _0x12092a.length && !_0x3ca02c; _0x4b2176++) {
            {
              const _0xd7febd = _0x12092a[_0x4b2176].textContent || "";
              (_0xd7febd.includes("任务执行完成") || _0xd7febd.includes("任务处理完成")) && (_0x3ca02c = true);
            }
          }
          if (_0x3ca02c) {
            {
              _0x317379 = true;
              if (_0x3f701b) {
                {
                  clearInterval(_0x3f701b);
                  _0x3f701b = null;
                }
              }
              _0x264eb3("检测到任务完成消息，一键补差已完成", "success");
            }
          }
        }
      } catch (_0x362649) {
        {
          console.error("检测一键补差完成状态时出错:", _0x362649);
        }
      }
    }
  }
  function _0x36edc2() {
    {
      GM_setValue("currentStep", _0xf232e4);
      GM_setValue("retryCount", _0x16aa95);
      if (!_0x203f83) {
        {
          _0x17875c("任务执行已禁用");
          return;
        }
      }
      if (!_0x303818()) {
        {
          _0x264eb3("页面未加载完成，等待加载...", "warning");
          _0x4f4780(_0x3c6032 => {
            {
              if (_0x3c6032 && _0x203f83) {
                {
                  _0x36edc2();
                }
              } else {
                {
                  _0x264eb3("页面加载失败，停止当前任务", "error");
                  _0x203f83 = false;
                  GM_setValue("shouldRunTasks", _0x203f83);
                  _0x34ec70 && setTimeout(_0x1287f8, _0x4901cf);
                }
              }
            }
          });
          return;
        }
      }
      if (_0x16aa95 >= _0xd66917) {
        {
          _0x17875c("达到最大重试次数，停止执行");
          GM_notification("任务执行完成", "已达到最大重试次数");
          _0x203f83 = false;
          GM_setValue("shouldRunTasks", _0x203f83);
          _0x34ec70 && setTimeout(_0x1287f8, _0x4901cf);
          return;
        }
      }
      const _0x5f3242 = _0xf232e4 === 6 && _0x37789f[5] && _0x37789f[0] && window.buchaStatusBeforeSaltRobot === false && !_0x317379;
      if (_0x5f3242) {
        {
          try {
            {
              _0x17875c("盐罐机器人执行完成，继续检测一键补差完成状态...");
              _0x264eb3("盐罐机器人已执行完成，继续检测一键补差完成状态5秒", "info");
              const _0x141d28 = setInterval(() => {
                {
                  _0x2a8de0();
                  if (_0x317379) {
                    {
                      clearInterval(_0x141d28);
                      _0x17875c("一键补差已完成，准备切换到下一个账号");
                      _0x203f83 = false;
                      _0xf232e4 = 0;
                      GM_setValue("shouldRunTasks", _0x203f83);
                      GM_setValue("currentStep", _0xf232e4);
                      setTimeout(_0x1287f8, _0x4901cf);
                    }
                  }
                }
              }, 100);
              setTimeout(() => {
                {
                  clearInterval(_0x141d28);
                  _0x264eb3("继续检测5秒后，强制结束并切换到下一个账号", "info");
                  if (_0x3f701b) {
                    {
                      clearInterval(_0x3f701b);
                      _0x3f701b = null;
                    }
                  }
                  _0x317379 = true;
                  _0x203f83 = false;
                  _0xf232e4 = 0;
                  GM_setValue("shouldRunTasks", _0x203f83);
                  GM_setValue("currentStep", _0xf232e4);
                  setTimeout(_0x1287f8, _0x4901cf);
                }
              }, 5000);
              return;
            }
          } catch (_0x59ee86) {
            {
              console.error("盐罐机器人后继续检测时出错:", _0x59ee86);
              _0x264eb3("盐罐机器人后继续检测时出错，继续执行", "error");
              _0x203f83 = false;
              _0xf232e4 = 0;
              _0x317379 = true;
              if (_0x3f701b) {
                {
                  clearInterval(_0x3f701b);
                  _0x3f701b = null;
                }
              }
              GM_setValue("shouldRunTasks", _0x203f83);
              GM_setValue("currentStep", _0xf232e4);
              setTimeout(_0x1287f8, _0x4901cf);
              return;
            }
          }
        }
      }
      let _0x159a67 = -1;
      for (let _0x48d179 = _0xf232e4; _0x48d179 < _0x279d45.length; _0x48d179++) {
        {
          if (_0x37789f[_0x48d179]) {
            {
              _0x159a67 = _0x48d179;
              break;
            }
          }
        }
      }
      if (_0x159a67 === -1) {
        {
          if (_0x34ec70 && _0x37789f[0] && !_0x317379) {
            {
              try {
                {
                  _0x17875c("所有开启的任务执行完成，等待一键补差完成...");
                  _0x264eb3("所有任务已执行，正在等待一键补差完成后切换到下一个账号", "info");
                  const _0x6b2ab = setInterval(() => {
                    {
                      if (_0x317379) {
                        {
                          clearInterval(_0x6b2ab);
                          _0x17875c("一键补差已完成，准备切换到下一个账号");
                          _0x203f83 = false;
                          _0xf232e4 = 0;
                          GM_setValue("shouldRunTasks", _0x203f83);
                          GM_setValue("currentStep", _0xf232e4);
                          setTimeout(_0x1287f8, _0x4901cf);
                        }
                      }
                    }
                  }, 100);
                  setTimeout(() => {
                    {
                      clearInterval(_0x6b2ab);
                      if (!_0x317379) {
                        {
                          _0x264eb3("等待一键补差超时，强制切换到下一个账号", "warning");
                          if (_0x3f701b) {
                            {
                              clearInterval(_0x3f701b);
                              _0x3f701b = null;
                            }
                          }
                          _0x317379 = true;
                        }
                      }
                      _0x203f83 = false;
                      _0xf232e4 = 0;
                      GM_setValue("shouldRunTasks", _0x203f83);
                      GM_setValue("currentStep", _0xf232e4);
                      setTimeout(_0x1287f8, _0x4901cf);
                    }
                  }, 60000);
                }
              } catch (_0x428d99) {
                console.error("等待一键补差完成时出错:", _0x428d99);
                _0x264eb3("等待一键补差完成时出错，继续执行", "error");
                _0x203f83 = false;
                _0xf232e4 = 0;
                _0x317379 = true;
                _0x3f701b && (clearInterval(_0x3f701b), _0x3f701b = null);
                GM_setValue("shouldRunTasks", _0x203f83);
                GM_setValue("currentStep", _0xf232e4);
                setTimeout(_0x1287f8, _0x4901cf);
              }
              return;
            }
          }
          _0x17875c("所有开启的任务执行完成");
          GM_notification("任务执行完成", "所有开启的步骤已处理");
          _0x203f83 = false;
          _0xf232e4 = 0;
          GM_setValue("shouldRunTasks", _0x203f83);
          GM_setValue("currentStep", _0xf232e4);
          if (_0x34ec70) {
            {
              setTimeout(_0x1287f8, _0x4901cf);
            }
          }
          return;
        }
      }
      _0xf232e4 = _0x159a67;
      const _0x5f20a9 = _0x279d45[_0xf232e4].func;
      const _0x5352f0 = _0x279d45[_0xf232e4].name;
      _0x17875c("执行步骤: " + _0x5352f0);
      _0x264eb3("执行步骤: " + _0x5352f0);
      const _0x16e37f = _0x5f20a9();
      if (_0x16e37f) {
        {
          _0xf232e4++;
          _0x16aa95 = 0;
          GM_setValue("currentStep", _0xf232e4);
          GM_setValue("retryCount", _0x16aa95);
          _0x17875c("步骤 [" + _0x5352f0 + "] 执行成功，继续下一步");
          setTimeout(_0x36edc2, _0x5accf9);
        }
      } else {
        {
          _0x16aa95++;
          GM_setValue("retryCount", _0x16aa95);
          _0x17875c("步骤 [" + _0x5352f0 + "] 执行失败，准备重试 (" + _0x16aa95 + "/" + _0xd66917 + ")");
          setTimeout(_0x36edc2, _0x5accf9);
        }
      }
    }
  }
  function _0x5b6995(_0xda1838) {
    {
      const _0x1af18f = _0xda1838.target.files;
      if (!_0x1af18f || _0x1af18f.length === 0) {
        return;
      }
      let _0x472fc2 = Array.from(_0x1af18f).filter(_0x5905f2 => _0x5905f2.name.endsWith(".bin"));
      if (_0x472fc2.length === 0) {
        {
          _0x264eb3("请上传.bin格式的文件", "error");
          _0xda1838.target.value = "";
          return;
        }
      }
      const _0x1f73a8 = {
        numeric: true,
        sensitivity: "base"
      };
      _0x472fc2.sort((_0x5daf04, _0xc61dd8) => _0x5daf04.name.localeCompare(_0xc61dd8.name, undefined, _0x1f73a8));
      const _0x27e13a = GM_listValues();
      const _0x5d94e4 = new Set(_0x27e13a.filter(_0x1323fc => _0x1323fc.startsWith("binfile_")).map(_0x43a3ee => GM_getValue(_0x43a3ee).name));
      const _0xda2a06 = _0x472fc2.filter(_0x4d2da2 => !_0x5d94e4.has(_0x4d2da2.name));
      const _0x1f05e0 = _0x472fc2.length - _0xda2a06.length;
      if (_0x1f05e0 > 0) {
        {
          _0x264eb3("跳过 " + _0x1f05e0 + " 个已存在的文件", "info");
        }
      }
      if (_0xda2a06.length === 0) {
        {
          _0x264eb3("没有新文件需要导入", "info");
          _0xda1838.target.value = "";
          return;
        }
      }
      _0x264eb3("开始处理 " + _0xda2a06.length + " 个新文件...");
      let _0x1d9781 = 0;
      let _0x23469b = 0;
      _0x27e13a.filter(_0x483556 => _0x483556.startsWith("binfile_")).forEach(_0x3ddc06 => {
        {
          const _0x4494be = GM_getValue(_0x3ddc06);
          _0x4494be.sortIndex !== undefined && _0x4494be.sortIndex > _0x23469b && (_0x23469b = _0x4494be.sortIndex);
        }
      });
      _0xda2a06.forEach((_0x5e44ea, _0x19fdd3) => {
        {
          _0x3112b5(_0x5e44ea).then(_0x1e1d51 => {
            {
              const _0x169bb8 = "binfile_" + _0x5e44ea.name;
              const _0x1c2bc7 = String.fromCharCode.apply(null, new Uint8Array(_0x1e1d51));
              const _0x433b28 = btoa(_0x1c2bc7);
              const _0x3f3c40 = _0x23469b + _0x19fdd3 + 1;
              GM_setValue(_0x169bb8, {
                name: _0x5e44ea.name,
                content: _0x433b28,
                uploadTime: new Date().toISOString(),
                sortIndex: _0x3f3c40
              });
              _0x1d9781++;
              _0x264eb3("已处理 " + _0x1d9781 + "/" + _0xda2a06.length + ": " + _0x5e44ea.name, "success");
              _0x1d9781 === _0xda2a06.length && (_0x385f44(), _0x11be74(), _0xda1838.target.value = "");
            }
          }).catch(_0x8d81d => {
            {
              _0x1d9781++;
              console.error("处理失败:", _0x8d81d);
              _0x264eb3("处理失败 " + _0x1d9781 + "/" + _0xda2a06.length + ": " + _0x5e44ea.name + " - " + _0x8d81d.message, "error");
              _0x1d9781 === _0xda2a06.length && (_0x385f44(), _0x11be74(), _0xda1838.target.value = "");
            }
          });
        }
      });
    }
  }
  function _0x499942(_0x44feab, _0x5a3553) {
    {
      if (_0x383ef3) {
        return;
      }
      _0x383ef3 = true;
      _0x17875c("正在处理账号: " + _0x5a3553 + "，提取roleToken...");
      fetch("https://xxz-xyzw.hortorgames.com/login/authuser?_seq=1", {
        method: "POST",
        headers: {
          "Content-Type": "application/octet-stream"
        },
        body: _0x44feab
      }).then(_0x343261 => {
        {
          if (!_0x343261.ok) {
            throw new Error("HTTP错误: 状态码 " + _0x343261.status);
          }
          return _0x343261.text();
        }
      }).then(_0x34cf56 => {
        {
          const _0x2f3cc4 = _0x1ee10e(_0x34cf56);
          if (_0x2f3cc4) {
            {
              _0x264eb3("从 " + _0x5a3553 + " 提取到roleToken", "success");
              const _0x2b2028 = GM_getValue("savedRoleToken", "");
              if (_0x2f3cc4 !== _0x2b2028) {
                {
                  GM_setValue("savedRoleToken", _0x2f3cc4);
                  const _0x3c2cd2 = GM_getValue("savedRoleToken", "");
                  _0x3c2cd2 === _0x2f3cc4 ? (_0x55ef95 = _0x2f3cc4, _0x264eb3("已更新 " + _0x5a3553 + " 的roleToken", "success")) : _0x264eb3("警告：" + _0x5a3553 + " 的roleToken保存失败", "error");
                }
              } else {
                {
                  _0x264eb3(_0x5a3553 + " 的roleToken与当前值相同，无需更新");
                }
              }
              setTimeout(() => {
                {
                  _0x203f83 = true;
                  GM_setValue("shouldRunTasks", _0x203f83);
                  _0xf232e4 = 0;
                  GM_setValue("currentStep", _0xf232e4);
                  _0x264eb3("准备刷新页面，加载 " + _0x5a3553 + " 的数据...");
                  sessionStorage.setItem("needCenterAfterRefresh", "true");
                  window.location.replace(window.location.href);
                  _0x383ef3 = false;
                }
              }, _0x47234e);
            }
          } else {
            {
              _0x264eb3("未在 " + _0x5a3553 + " 响应中找到roleToken", "error");
              _0x383ef3 = false;
              if (_0x34ec70) {
                setTimeout(_0x1287f8, _0x4901cf);
              }
            }
          }
        }
      }).catch(_0x3be09b => {
        {
          console.error("处理失败:", _0x3be09b);
          _0x264eb3("处理 " + _0x5a3553 + " 失败: " + _0x3be09b.message, "error");
          _0x383ef3 = false;
          if (_0x34ec70) {
            setTimeout(_0x1287f8, _0x4901cf);
          }
        }
      });
    }
  }
  function _0x385f44() {
    {
      if (!_0x43178c) {
        return;
      }
      while (_0x43178c.firstChild) {
        _0x43178c.removeChild(_0x43178c.firstChild);
      }
      const _0x4063f8 = GM_listValues();
      let _0x123ead = _0x4063f8.filter(_0x3abb95 => _0x3abb95.startsWith("binfile_")).map(_0x46df65 => {
        {
          const _0x55df43 = GM_getValue(_0x46df65);
          const _0x4fc299 = {
            key: _0x46df65,
            ..._0x55df43
          };
          return _0x4fc299;
        }
      });
      const _0x220ec3 = _0x123ead.filter(_0x14bd3f => _0x14bd3f.sortIndex === undefined);
      if (_0x220ec3.length > 0) {
        {
          const _0x201fa8 = {
            numeric: true,
            sensitivity: "base"
          };
          _0x220ec3.sort((_0x3210cb, _0x46c929) => _0x3210cb.name.localeCompare(_0x46c929.name, undefined, _0x201fa8));
          let _0x477a3b = 0;
          _0x123ead.forEach(_0x4d0aa3 => {
            {
              if (_0x4d0aa3.sortIndex !== undefined && _0x4d0aa3.sortIndex > _0x477a3b) {
                {
                  _0x477a3b = _0x4d0aa3.sortIndex;
                }
              }
            }
          });
          _0x220ec3.forEach((_0x4300a1, _0x5e8765) => {
            _0x4300a1.sortIndex = _0x5e8765 + 1;
            GM_setValue(_0x4300a1.key, {
              name: _0x4300a1.name,
              content: _0x4300a1.content,
              uploadTime: _0x4300a1.uploadTime,
              sortIndex: _0x4300a1.sortIndex
            });
          });
        }
      }
      _0x23eda0 = _0x4063f8.filter(_0x57db0e => _0x57db0e.startsWith("binfile_")).map(_0x19b9cf => ({
        key: _0x19b9cf,
        ...GM_getValue(_0x19b9cf),
        selected: false
      })).sort((_0x443e95, _0x44d1db) => _0x443e95.sortIndex - _0x44d1db.sortIndex);
      const _0x4cb892 = GM_getValue("lastRunLog", null);
      if (_0x4cb892 && _0x23eda0.length > 0) {
        {
          const _0x3d22d9 = _0x23eda0.findIndex(_0xdee25c => _0xdee25c.name === _0x4cb892.accountName);
          if (_0x3d22d9 !== -1 && _0xabd273 === -1) {
            {
              _0xabd273 = _0x3d22d9;
              GM_setValue("currentAccountIndex", _0xabd273);
            }
          }
        }
      }
      if (_0x23eda0.length === 0) {
        {
          const _0x59b85e = document.createElement("div");
          _0x59b85e.className = "account-item";
          _0x59b85e.style.justifyContent = "center";
          _0x59b85e.style.color = "#aaa";
          _0x59b85e.textContent = "暂无账号，请添加BIN文件";
          _0x43178c.appendChild(_0x59b85e);
        }
      } else {
        {
          _0x23eda0.forEach((_0x44c3df, _0x4c9a38) => {
            {
              const _0x3cb697 = document.createElement("div");
              _0x3cb697.className = "account-item " + (_0x4c9a38 === _0xabd273 ? "active running" : "");
              const _0x567642 = document.createElement("div");
              _0x567642.className = "account-info";
              const _0x16494e = document.createElement("div");
              _0x16494e.className = "account-name";
              _0x16494e.textContent = _0x44c3df.name.replace(".bin", "");
              const _0x5cad9d = new Date(_0x44c3df.uploadTime);
              const _0x2abae2 = _0x5cad9d.getFullYear() + "-" + (_0x5cad9d.getMonth() + 1).toString().padStart(2, "0") + "-" + _0x5cad9d.getDate().toString().padStart(2, "0") + " " + _0x5cad9d.getHours().toString().padStart(2, "0") + ":" + _0x5cad9d.getMinutes().toString().padStart(2, "0");
              const _0x4acb59 = document.createElement("div");
              _0x4acb59.className = "account-import-time";
              _0x4acb59.textContent = "导入时间: " + _0x2abae2;
              const _0x21c9f1 = document.createElement("div");
              _0x21c9f1.className = "account-actions";
              const _0x3257c8 = document.createElement("button");
              _0x3257c8.className = "action-btn delete-btn";
              _0x3257c8.textContent = "删除";
              _0x3257c8.addEventListener("click", () => {
                {
                  confirm("确定要删除账号 " + _0x44c3df.name.replace(".bin", "") + " 吗？") && _0x3f9390(_0x44c3df.key);
                }
              });
              const _0x1d825d = document.createElement("button");
              _0x1d825d.className = "action-btn select-btn";
              _0x1d825d.textContent = "选择";
              _0x1d825d.addEventListener("click", () => _0x1c872e(_0x4c9a38));
              const _0xfc43f3 = document.createElement("input");
              _0xfc43f3.type = "checkbox";
              _0xfc43f3.className = "account-checkbox";
              _0xfc43f3.style.marginRight = "8px";
              _0xfc43f3.style.marginLeft = "4px";
              _0xfc43f3.dataset.index = _0x4c9a38;
              _0xfc43f3.addEventListener("change", _0x4bcac4 => {
                _0x23eda0[_0x4c9a38].selected = _0x4bcac4.target.checked;
              });
              _0x21c9f1.appendChild(_0x3257c8);
              _0x21c9f1.appendChild(_0x1d825d);
              _0x567642.appendChild(_0x16494e);
              _0x567642.appendChild(_0x4acb59);
              _0x3cb697.appendChild(_0xfc43f3);
              _0x3cb697.appendChild(_0x567642);
              _0x3cb697.appendChild(_0x21c9f1);
              _0x43178c.appendChild(_0x3cb697);
            }
          });
        }
      }
    }
  }
  function _0x556e7d() {
    {
      const _0x2fe034 = document.getElementById("task-list-container");
      if (!_0x2fe034) {
        return;
      }
      while (_0x2fe034.firstChild) {
        _0x2fe034.removeChild(_0x2fe034.firstChild);
      }
      const _0x457e91 = document.createElement("div");
      _0x457e91.className = "custom-task-list";
      _0x279d45.forEach((_0x30a968, _0x2e25b2) => {
        {
          const _0x57f52d = document.createElement("div");
          _0x57f52d.className = "custom-task-item";
          const _0x71519c = document.createElement("div");
          _0x71519c.className = "custom-task-name";
          _0x71519c.textContent = _0x30a968.name;
          const _0x2e6ddb = document.createElement("label");
          _0x2e6ddb.className = "custom-toggle-switch";
          const _0x56d3b2 = document.createElement("input");
          _0x56d3b2.type = "checkbox";
          _0x56d3b2.checked = _0x37789f[_0x2e25b2];
          _0x56d3b2.addEventListener("change", () => _0x348ee4(_0x2e25b2));
          const _0x357d00 = document.createElement("span");
          _0x357d00.className = "custom-toggle-slider";
          _0x2e6ddb.appendChild(_0x56d3b2);
          _0x2e6ddb.appendChild(_0x357d00);
          _0x57f52d.appendChild(_0x71519c);
          _0x57f52d.appendChild(_0x2e6ddb);
          _0x457e91.appendChild(_0x57f52d);
        }
      });
      _0x2fe034.appendChild(_0x457e91);
    }
  }
  function _0x3f9390(_0x501b41) {
    {
      const _0x27f8d5 = GM_getValue(_0x501b41);
      const _0x32e2c4 = _0x27f8d5?.["sortIndex"];
      GM_deleteValue(_0x501b41);
      _0x264eb3("已删除账号: " + _0x501b41.replace("binfile_", ""), "info");
      if (_0x32e2c4 !== undefined) {
        {
          const _0x3653fe = GM_listValues();
          _0x3653fe.filter(_0x69e090 => _0x69e090.startsWith("binfile_")).forEach(_0x327d56 => {
            {
              const _0x407cc7 = GM_getValue(_0x327d56);
              _0x407cc7.sortIndex !== undefined && _0x407cc7.sortIndex > _0x32e2c4 && (_0x407cc7.sortIndex -= 1, GM_setValue(_0x327d56, _0x407cc7));
            }
          });
        }
      }
      _0x385f44();
      _0x11be74();
      _0xabd273 !== -1 && _0xabd273 >= _0x23eda0.length && (_0xabd273 = _0x23eda0.length > 0 ? _0x23eda0.length - 1 : -1, GM_setValue("currentAccountIndex", _0xabd273));
    }
  }
  function _0x1c872e(_0x435e87) {
    {
      if (_0x435e87 < 0 || _0x435e87 >= _0x23eda0.length || _0x383ef3) {
        return;
      }
      _0xabd273 = _0x435e87;
      GM_setValue("currentAccountIndex", _0xabd273);
      const _0x1277df = _0x23eda0[_0x435e87];
      _0x264eb3("已选择账号: " + _0x1277df.name.replace(".bin", ""));
      const _0x23362d = {
        name: _0x1277df.name,
        index: _0x435e87
      };
      GM_setValue("lastSelectedAccount", _0x23362d);
      _0x385f44();
      _0x4f4780(_0x18d311 => {
        {
          if (_0x18d311) {
            {
              try {
                {
                  const _0x425833 = atob(_0x1277df.content);
                  const _0x4635db = _0x425833.length;
                  const _0x59b45e = new Uint8Array(_0x4635db);
                  for (let _0x1bfb82 = 0; _0x1bfb82 < _0x4635db; _0x1bfb82++) {
                    _0x59b45e[_0x1bfb82] = _0x425833.charCodeAt(_0x1bfb82);
                  }
                  _0x499942(_0x59b45e.buffer, _0x1277df.name);
                }
              } catch (_0x4aee7) {
                {
                  console.error("处理失败:", _0x4aee7);
                  _0x264eb3("处理 " + _0x1277df.name + " 失败: " + _0x4aee7.message, "error");
                  _0x383ef3 = false;
                  if (_0x34ec70) {
                    setTimeout(_0x1287f8, _0x4901cf);
                  }
                }
              }
            }
          } else {
            {
              _0x264eb3("页面加载失败，无法处理账号 " + _0x1277df.name, "error");
              _0x383ef3 = false;
              if (_0x34ec70) {
                setTimeout(_0x1287f8, _0x4901cf);
              }
            }
          }
        }
      });
    }
  }
  function _0x1287f8() {
    {
      _0x317379 = false;
      if (_0x3f701b) {
        {
          clearInterval(_0x3f701b);
          _0x3f701b = null;
        }
      }
      if (_0x23eda0.length === 0) {
        {
          _0x264eb3("没有可用账号，停止自动运行", "error");
          _0x2b9de0();
          return;
        }
      }
      _0xabd273 >= 0 && _0xabd273 < _0x23eda0.length && (GM_setValue("lastRunLog", {
        accountName: _0x23eda0[_0xabd273].name,
        accountIndex: _0xabd273,
        timestamp: new Date().toISOString(),
        step: _0xf232e4
      }), _0x225e7c = _0xabd273 + 1, GM_setValue("currentRoundRunCount", _0x225e7c), _0x11be74());
      if (_0xabd273 >= _0x23eda0.length - 1) {
        {
          _0x264eb3("所有账号已运行完毕，等待间隔时间后重新开始", "info");
          _0x17875c("所有账号已运行完毕，等待重新开始");
          _0x2ada53();
          return;
        }
      }
      const _0x505da8 = _0xabd273 + 1;
      _0xabd273 = _0x505da8;
      GM_setValue("currentAccountIndex", _0xabd273);
      _0x385f44();
      _0x1c872e(_0xabd273);
    }
  }
  function _0x2ada53() {
    {
      if (_0x2bf7e1) {
        {
          clearInterval(_0x2bf7e1);
        }
      }
      const _0x5cf454 = GM_getValue("customRoundDelay", 5);
      let _0x2c2b5e = _0x5cf454 * 60;
      _0x17875c("等待" + _0x5cf454 + "分钟后重新开始");
      _0x277109.style.display = "block";
      function _0x26e3e4() {
        {
          const _0x4b0e1e = Math.floor(_0x2c2b5e / 60);
          const _0x381138 = _0x2c2b5e % 60;
          _0x277109.textContent = "下一轮开始倒计时: " + _0x4b0e1e.toString().padStart(2, "0") + ":" + _0x381138.toString().padStart(2, "0");
          _0x2c2b5e--;
          if (_0x2c2b5e < 0) {
            {
              clearInterval(_0x2bf7e1);
              _0x277109.style.display = "none";
              _0xabd273 = 0;
              GM_setValue("currentAccountIndex", _0xabd273);
              _0x264eb3("间隔时间结束，开始新一轮执行", "info");
              _0x17875c("开始新一轮账号执行");
              _0x385f44();
              _0x1c872e(0);
            }
          }
        }
      }
      _0x26e3e4();
      _0x2bf7e1 = setInterval(_0x26e3e4, 1000);
    }
  }
  function _0x2b9de0() {
    {
      if (_0x383ef3) {
        {
          _0x264eb3("操作处理中，请稍后再试", "info");
          return;
        }
      }
      _0x34ec70 = !_0x34ec70;
      GM_setValue("isAutoRunning", _0x34ec70);
      _0x531b23();
      if (_0x34ec70) {
        {
          _0x4684bc.classList.add("running");
        }
      } else {
        {
          _0x4684bc.classList.remove("running");
        }
      }
      if (_0x34ec70) {
        {
          _0x264eb3("一键开始自动运行", "success");
          if (_0x23eda0.length === 0) {
            {
              _0x264eb3("没有可用账号，请先添加账号", "error");
              _0x34ec70 = false;
              GM_setValue("isAutoRunning", _0x34ec70);
              _0x531b23();
              return;
            }
          }
          const _0x45f60b = Object.values(_0x37789f).some(_0x438bd2 => _0x438bd2);
          if (!_0x45f60b) {
            {
              _0x264eb3("请至少开启一个任务才能运行", "error");
              _0x34ec70 = false;
              GM_setValue("isAutoRunning", _0x34ec70);
              _0x531b23();
              return;
            }
          }
          _0x225e7c = 0;
          GM_setValue("currentRoundRunCount", _0x225e7c);
          _0x11be74();
          const _0x3d17cd = GM_getValue("lastSelectedAccount");
          if (_0x3d17cd && _0x3d17cd.index >= 0 && _0x3d17cd.index < _0x23eda0.length) {
            {
              _0xabd273 = _0x3d17cd.index;
            }
          } else {
            _0xabd273 = 0;
          }
          GM_setValue("currentAccountIndex", _0xabd273);
          _0x4f4780(_0x299d8f => {
            {
              if (_0x299d8f) {
                _0x1c872e(_0xabd273);
              } else {
                {
                  _0x264eb3("页面加载失败，无法开始自动运行", "error");
                  _0x34ec70 = false;
                  GM_setValue("isAutoRunning", _0x34ec70);
                  _0x531b23();
                }
              }
            }
          });
        }
      } else {
        _0x264eb3("已停止自动运行", "info");
        _0x203f83 = false;
        GM_setValue("shouldRunTasks", _0x203f83);
        _0x2bf7e1 && (clearInterval(_0x2bf7e1), _0x2bf7e1 = null, _0x277109.style.display = "none");
      }
    }
  }
  function _0x1ee10e(_0x389cde) {
    {
      try {
        {
          const _0x401d19 = JSON.parse(_0x389cde);
          const _0x20aba2 = [_0x401d19.roleToken, _0x401d19.data?.["roleToken"], _0x401d19.result?.["roleToken"], _0x401d19.content?.["roleToken"]];
          for (const _0x4d2753 of _0x20aba2) {
            {
              if (_0x4d2753 && typeof _0x4d2753 === "string" && _0x4d2753.includes("=")) {
                {
                  return _0x4d2753.trim();
                }
              }
            }
          }
        }
      } catch (_0x4980ca) {}
      const _0x2d8017 = [/roleToken\s*[:=]\s*["']?([^"'\s=]+=+)["']?/i, /roleToken\s*[:=]\s*([^=\s]+=+)/i, /"roleToken"\s*:\s*"([^"]+=+)"/i, /'roleToken'\s*:\s*'([^']+=+)'/i, /roleToken\s+([^=\s]+=+)/i];
      for (const _0x2ca732 of _0x2d8017) {
        {
          const _0x62263 = _0x389cde.match(_0x2ca732);
          if (_0x62263 && _0x62263[1]) {
            return _0x62263[1].trim();
          }
        }
      }
      const _0x405aa8 = /[A-Za-z0-9\+\/=]{30,}/g;
      const _0x3a4513 = _0x389cde.match(_0x405aa8);
      if (_0x3a4513 && _0x3a4513.length > 0) {
        {
          _0x264eb3("找到可能的token候选", "info");
          return _0x3a4513[0];
        }
      }
      return null;
    }
  }
  function _0x3112b5(_0x6d8900) {
    {
      return new Promise((_0x26708d, _0x2ed489) => {
        {
          const _0x1b5940 = new FileReader();
          _0x1b5940.onload = () => _0x26708d(_0x1b5940.result);
          _0x1b5940.onerror = _0x2ed489;
          _0x1b5940.readAsArrayBuffer(_0x6d8900);
        }
      });
    }
  }
  function _0x3246b8() {
    {
      const _0x3b4881 = {
        id: "aa5a270d858fc1d1f3bf467ea2fcb808"
      };
      const _0x19a1f3 = {
        autoTask: true,
        gameRoleNum: 999
      };
      const _0x55609e = {
        AutoTask: _0x3b4881,
        agreementAccepted: 1,
        avatar: null,
        coin: 0,
        createdAt: "2025-08-15T17:32:54Z",
        credit: 10,
        email: null,
        gameRoles: [{
          avatar: "",
          combUser: "{\"sign\": \"替换成你的\", \"timestamp\": 替换成你的, \"encryptCombUser\": \"替换成你的\"}",
          createdAt: "2025-08-14T06:45:42Z",
          id: 1,
          name: "哈基米",
          roleId: 666666,
          server: "666",
          uniqueId: "1758143947_wqrdHue6",
          updatedAt: "2025-08-16T04:18:51Z",
          userId: 2,
          vip: 0
        }, {
          avatar: null,
          combUser: "{\"sign\": \"替换成你的\", \"timestamp\": 替换成你的, \"encryptCombUser\": \"替换成你的\"}",
          createdAt: "2025-08-14T16:32:03Z",
          id: 1,
          name: "哈基米2",
          roleId: 88888888,
          server: "2006666",
          uniqueId: "1754188123_ewtgpba9",
          updatedAt: "2025-08-15T17:32:54Z",
          userId: 2,
          vip: 0
        }],
        id: 2,
        nickname: null,
        phone: null,
        policy: _0x19a1f3,
        updatedAt: "2025-08-15T07:24:44Z",
        username: "666666",
        vipExpireAt: null,
        vipLevel: 10,
        wxOpenId: null
      };
      const _0x1beca7 = {
        data: _0x55609e,
        message: "ok",
        success: true
      };
      const _0x2adc95 = {
        avatar: "",
        id: 4117,
        name: "哈基米",
        roleId: 6666666,
        server: "6666",
        uniqueId: "1758143947_wqrdHue6",
        userId: 2,
        vip: 0
      };
      const _0x7f6b5 = {
        avatar: null,
        id: 4470,
        name: "哈基米2",
        roleId: 88888888,
        server: "2006666",
        uniqueId: "1754188123_ewtgpba9",
        userId: 2,
        vip: 0
      };
      const _0x1ba8d8 = {
        data: [_0x2adc95, _0x7f6b5],
        message: "ok",
        success: true
      };
      const _0x246cc1 = {
        sign_valid: true,
        timestamp: 27955318711
      };
      const _0x181faf = {
        data: _0x246cc1,
        message: "签名验证成功",
        success: true
      };
      const _0x1e85f7 = {
        token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMDUiLCJ1c2VybmFtZSI6InRlc3R1c7VyIiaiaWF0IjpxNzU1MzEwNTM5LCJleHAiOjE3NTUzOTY5Mzl9.2PPYvImWEQYN0cTTcMHsWiDA8uFkaUrI-3JbbdIfdXU",
        user: {}
      };
      _0x1e85f7.user.createdAt = "2025-08-15T18:19:51Z";
      _0x1e85f7.user.id = 1;
      _0x1e85f7.user.username = "哈基米";
      const _0x4237a8 = {
        data: _0x1e85f7,
        message: "ok",
        success: true
      };
      const _0x30b544 = {
        connId: 1755770165138,
        isRestore: 0,
        roleToken: _0x55ef95,
        sessId: 175577016512952
      };
      const _0xe8e1f6 = {
        data: _0x30b544,
        message: "ok",
        success: true
      };
      const _0x457e73 = {
        "/api/v1/userinfo": _0x1beca7,
        "/api/v1/gamerole_list": _0x1ba8d8,
        "/api/v1/sign_check": _0x181faf,
        "/api/v1/login": _0x4237a8,
        "/api/v1/get_role_token": _0xe8e1f6
      };
      return _0x457e73;
    }
  }
  function _0x5d9197() {
    const _0x21da70 = unsafeWindow.fetch;
    unsafeWindow.fetch = function (_0x2a7437, _0x4fc79d) {
      {
        let _0xfcae9d = "";
        try {
          {
            const _0x1bc6b9 = new URL(_0x2a7437);
            _0xfcae9d = _0x1bc6b9.pathname;
          }
        } catch (_0x417d47) {
          {
            _0xfcae9d = _0x2a7437;
          }
        }
        const _0x57993e = _0x3246b8()[_0xfcae9d];
        if (_0x57993e) {
          {
            if (_0xfcae9d === "/api/v1/get_role_token") {
              {
                _0x57993e.data.roleToken = GM_getValue("savedRoleToken", "");
              }
            }
            const _0x53fa3c = _0x57993e.code && typeof _0x57993e.code === "number" ? _0x57993e.code : 200;
            const _0x5f77c = new Response(JSON.stringify(_0x57993e), {
              status: _0x53fa3c,
              statusText: _0x53fa3c === 200 ? "OK" : "Mocked Status",
              headers: {
                "Content-Type": "application/json"
              }
            });
            return Promise.resolve(_0x5f77c);
          }
        }
        return _0x21da70.apply(this, arguments);
      }
    };
  }
  function _0x17875c(_0x52f4be) {
    if (_0x52c616) {
      const _0x290f39 = Object.values(_0x37789f).filter(_0x295aad => _0x295aad).length;
      const _0x5e58e5 = _0x279d45.length;
      const _0x37e34 = _0xf232e4 < _0x279d45.length ? "(" + (_0xf232e4 + 1) + "/" + _0x279d45.length + ") " + (_0x279d45[_0xf232e4] ? _0x279d45[_0xf232e4].name : "") : "所有任务完成";
      const _0x37bed2 = _0xabd273 >= 0 && _0x23eda0.length > 0 ? "当前账号: <span class=\"status-step\">" + _0x23eda0[_0xabd273].name.replace(".bin", "") + "</span>" : "未选择账号";
      const _0x1df9d3 = "已启用任务: <span class=\"status-step\">" + _0x290f39 + "/" + _0x5e58e5 + "</span>";
      _0x52c616.innerHTML = "状态: " + _0x52f4be + "<br>" + _0x37bed2 + "<br>" + _0x1df9d3 + "<br>当前步骤: <span class=\"status-step\">" + _0x37e34 + "</span>";
      if (_0x422dd1) {
        const _0x9d1795 = [];
        for (let _0x564d8f = 0; _0x564d8f < _0x279d45.length; _0x564d8f++) {
          if (_0x37789f[_0x564d8f]) {
            _0x9d1795.push(_0x564d8f);
          }
        }
        const _0x5252bc = _0x9d1795.indexOf(_0xf232e4);
        const _0x59f737 = _0x9d1795.length > 0 ? (_0x5252bc + 1) / _0x9d1795.length * 100 : 0;
        _0x422dd1.style.width = _0x59f737 + "%";
      }
    }
    console.log(_0x52f4be);
  }
  function _0x11be74() {
    if (!_0x32ec02) {
      return;
    }
    const _0x546ff0 = _0x23eda0.length;
    const _0x5270ec = _0xabd273 >= 0 ? _0xabd273 + 1 : 0;
    _0x32ec02.textContent = "总导入账号: " + _0x546ff0 + " | 当前第: " + _0x5270ec + "/" + _0x546ff0 + "个";
    if (_0x210245) {
      if (_0xabd273 >= 0 && _0x23eda0.length > 0) {
        const _0x423d7b = _0x23eda0[_0xabd273].name.replace(".bin", "");
        _0x210245.textContent = "当前账号: " + _0x423d7b;
      } else {
        _0x210245.textContent = "当前账号: 暂无";
      }
    }
  }
  function _0x264eb3(_0x348c3e, _0x4030b2 = "normal") {
    const _0x5ebb88 = new Date().toLocaleTimeString();
    let _0x3366bf = "";
    switch (_0x4030b2) {
      case "error":
        _0x3366bf = "error-message";
        break;
      case "success":
        _0x3366bf = "success-message";
        break;
      case "info":
        _0x3366bf = "info-message";
        break;
      case "warning":
        _0x3366bf = "warning-message";
        break;
    }
    const _0x59cabe = "<div><span>[" + _0x5ebb88 + "]</span> <span class=\"" + _0x3366bf + "\">" + _0x348c3e + "</span></div>";
    _0x458fdf.unshift(_0x59cabe);
    _0x458fdf.length > 20 && (_0x458fdf = _0x458fdf.slice(0, 20));
    _0x5b79c2();
    GM_setValue("operationLog", _0x458fdf);
  }
  function _0x5b79c2() {
    if (!_0x5962cc) {
      return;
    }
    _0x53a7da && (clearInterval(_0x53a7da), _0x53a7da = null);
    _0x5962cc.innerHTML = _0x458fdf.join("");
    const _0x50721e = _0x5962cc.parentElement;
    _0x50721e.scrollTop = 0;
  }
  function _0x171375() {
    if (_0x494299) {
      return;
    }
    _0x494299 = document.createElement("div");
    _0x494299.className = "custom-overlay";
    _0x494299.style.display = _0xeafe2c ? "none" : "block";
    const _0x2e10a0 = document.createElement("div");
    _0x2e10a0.className = "overlay-header";
    const _0x426919 = document.createElement("div");
    _0x426919.style.display = "flex";
    _0x426919.alignItems = "center";
    const _0x3e658e = document.createElement("div");
    _0x3e658e.className = "overlay-title";
    _0x3e658e.textContent = "哈基米自动脚本";
    _0x426919.appendChild(_0x3e658e);
    const _0x28b0e0 = document.createElement("div");
    _0x28b0e0.className = "header-controls";
    _0xa6f5fe = document.createElement("button");
    _0xa6f5fe.className = "control-btn delay-btn";
    const _0x40480d = GM_getValue("customRoundDelay", 5);
    _0xa6f5fe.textContent = "间隔: " + _0x40480d + "分";
    _0xa6f5fe.title = "点击设置新一轮间隔时间";
    _0xa6f5fe.addEventListener("click", _0x2649c6);
    _0x28b0e0.appendChild(_0xa6f5fe);
    _0x592039 = document.createElement("button");
    _0x592039.addEventListener("click", _0x2b9de0);
    _0x531b23();
    _0x7690cc = document.createElement("button");
    _0x7690cc.className = "control-btn minimize-btn";
    _0x7690cc.textContent = "−";
    _0x7690cc.title = "最小化";
    _0x7690cc.addEventListener("click", _0x317fd1);
    _0x28b0e0.appendChild(_0x592039);
    _0x28b0e0.appendChild(_0x7690cc);
    _0x2e10a0.appendChild(_0x426919);
    _0x2e10a0.appendChild(_0x28b0e0);
    const _0x1f8369 = document.createElement("div");
    _0x1f8369.className = "overlay-content";
    const _0x4c9603 = document.createElement("div");
    _0x4c9603.className = "custom-menu-tabs";
    const _0x197120 = ["账号管理", "任务管理", "运行状态"];
    _0x197120.forEach((_0x15b20a, _0x41a9ca) => {
      const _0x53a56b = document.createElement("div");
      _0x53a56b.className = "custom-menu-tab " + (_0x41a9ca === 0 ? "active" : "");
      _0x53a56b.textContent = _0x15b20a;
      _0x53a56b.addEventListener("click", () => _0x3a8f12(_0x41a9ca));
      _0x258365.push(_0x53a56b);
      _0x4c9603.appendChild(_0x53a56b);
    });
    _0x1f8369.appendChild(_0x4c9603);
    const _0x551865 = document.createElement("div");
    _0x551865.className = "custom-menu-content active";
    const _0x33e384 = document.createElement("div");
    _0x33e384.className = "section";
    const _0x3056fa = document.createElement("div");
    _0x3056fa.style.display = "flex";
    _0x3056fa.style.alignItems = "center";
    _0x3056fa.style.gap = "10px";
    const _0x1f7720 = document.createElement("div");
    _0x1f7720.className = "section-title";
    _0x1f7720.textContent = "账号管理";
    _0x1f7720.style.marginRight = "auto";
    _0x3056fa.appendChild(_0x1f7720);
    const _0x49d4ae = document.createElement("button");
    _0x49d4ae.className = "select-all-btn";
    _0x49d4ae.textContent = "全选";
    _0x49d4ae.style.background = "linear-gradient(135deg, #ff9800, #f57c00)";
    _0x49d4ae.style.color = "white";
    _0x49d4ae.style.padding = "4px 8px";
    _0x49d4ae.style.fontSize = "10px";
    _0x49d4ae.style.borderRadius = "4px";
    _0x49d4ae.style.border = "none";
    _0x49d4ae.style.cursor = "pointer";
    _0x49d4ae.addEventListener("click", _0xfeed19);
    _0x3056fa.appendChild(_0x49d4ae);
    const _0x26aba7 = document.createElement("button");
    _0x26aba7.className = "delete-selected-btn";
    _0x26aba7.textContent = "批量删除";
    _0x26aba7.style.background = "linear-gradient(135deg, #ef5350, #e53935)";
    _0x26aba7.style.color = "white";
    _0x26aba7.style.padding = "4px 8px";
    _0x26aba7.style.fontSize = "10px";
    _0x26aba7.style.borderRadius = "4px";
    _0x26aba7.style.border = "none";
    _0x26aba7.style.cursor = "pointer";
    _0x26aba7.addEventListener("click", _0x1eaa6c);
    _0x3056fa.appendChild(_0x26aba7);
    const _0x10ad85 = document.createElement("button");
    _0x10ad85.className = "prev-bin-btn";
    _0x10ad85.textContent = "上一个号";
    _0x10ad85.style.background = "linear-gradient(135deg, #7986cb, #5c6bc0)";
    _0x10ad85.style.color = "white";
    _0x10ad85.style.padding = "4px 6px";
    _0x10ad85.style.fontSize = "10px";
    _0x10ad85.style.borderRadius = "4px";
    _0x10ad85.style.border = "none";
    _0x10ad85.style.cursor = "pointer";
    _0x10ad85.title = "切换到上一个BIN账号";
    _0x10ad85.addEventListener("click", () => {
      if (_0x383ef3) {
        _0x264eb3("操作处理中，请稍后再试", "info");
        return;
      }
      if (_0x23eda0.length === 0) {
        _0x264eb3("没有可用账号", "info");
        return;
      }
      const _0x8a995d = _0xabd273 <= 0 ? _0x23eda0.length - 1 : _0xabd273 - 1;
      _0xabd273 = _0x8a995d;
      GM_setValue("currentAccountIndex", _0xabd273);
      _0x264eb3("已切换到账号: " + _0x23eda0[_0x8a995d].name.replace(".bin", ""));
      _0x385f44();
      _0x1c872e(_0x8a995d);
      _0x11be74();
    });
    _0x3056fa.appendChild(_0x10ad85);
    const _0x4a16dc = document.createElement("button");
    _0x4a16dc.className = "next-bin-btn";
    _0x4a16dc.textContent = "下一个号";
    _0x4a16dc.style.background = "linear-gradient(135deg, #2196f3, #1976d2)";
    _0x4a16dc.style.color = "white";
    _0x4a16dc.style.padding = "4px 6px";
    _0x4a16dc.style.fontSize = "10px";
    _0x4a16dc.style.borderRadius = "4px";
    _0x4a16dc.style.border = "none";
    _0x4a16dc.style.cursor = "pointer";
    _0x4a16dc.title = "切换到下一个BIN账号";
    _0x4a16dc.addEventListener("click", () => {
      if (_0x383ef3) {
        _0x264eb3("操作处理中，请稍后再试", "info");
        return;
      }
      if (_0x23eda0.length === 0) {
        _0x264eb3("没有可用账号", "info");
        return;
      }
      const _0xf4438a = _0xabd273 >= _0x23eda0.length - 1 ? 0 : _0xabd273 + 1;
      _0xabd273 = _0xf4438a;
      GM_setValue("currentAccountIndex", _0xabd273);
      _0x264eb3("已切换到账号: " + _0x23eda0[_0xf4438a].name.replace(".bin", ""));
      _0x385f44();
      _0x1c872e(_0xf4438a);
      _0x11be74();
    });
    _0x3056fa.appendChild(_0x4a16dc);
    const _0x365d3d = document.createElement("div");
    _0x365d3d.className = "account-info-container";
    _0x365d3d.style.padding = "6px 10px";
    _0x365d3d.style.background = "rgba(255, 235, 156, 0.5)";
    _0x365d3d.style.borderRadius = "6px";
    _0x365d3d.style.marginBottom = "8px";
    _0x32ec02 = document.createElement("div");
    _0x32ec02.className = "account-stats";
    _0x32ec02.textContent = "总导入账号: 0 | 当前第: 0/0个";
    _0x32ec02.style.fontSize = "11px";
    _0x32ec02.style.color = "#333";
    _0x32ec02.style.textAlign = "center";
    _0x210245 = document.createElement("div");
    _0x210245.className = "current-account-name";
    _0x210245.textContent = "当前账号: 暂无";
    _0x210245.style.fontSize = "11px";
    _0x210245.style.color = "#333";
    _0x210245.style.textAlign = "center";
    _0x210245.style.whiteSpace = "nowrap";
    _0x210245.style.overflow = "hidden";
    _0x210245.style.textOverflow = "ellipsis";
    _0x365d3d.appendChild(_0x32ec02);
    _0x365d3d.appendChild(_0x210245);
    const _0x560158 = document.createElement("div");
    _0x560158.className = "file-upload";
    const _0x1918e4 = document.createElement("button");
    _0x1918e4.className = "upload-btn";
    _0x1918e4.textContent = "添加账号(BIN)";
    _0x1918e4.style.background = "linear-gradient(135deg, #4caf50, #388e3c)";
    _0x1918e4.style.color = "white";
    _0x1918e4.style.padding = "6px 12px";
    _0x1918e4.style.borderRadius = "4px";
    _0x1918e4.style.border = "none";
    _0x1918e4.style.cursor = "pointer";
    const _0x5a82cd = document.createElement("input");
    _0x5a82cd.id = "fileInput";
    _0x5a82cd.type = "file";
    _0x5a82cd.accept = ".bin";
    _0x5a82cd.multiple = true;
    _0x5a82cd.style.display = "none";
    _0x5a82cd.addEventListener("change", _0x5b6995);
    _0x1918e4.addEventListener("click", () => _0x5a82cd.click());
    _0x560158.appendChild(_0x1918e4);
    _0x560158.appendChild(_0x5a82cd);
    const _0x3f0ef7 = document.createElement("div");
    _0x3f0ef7.style.marginTop = "8px";
    _0x3f0ef7.appendChild(_0x560158);
    _0x43178c = document.createElement("div");
    _0x43178c.className = "accounts-list";
    _0x33e384.appendChild(_0x3056fa);
    _0x33e384.appendChild(_0x365d3d);
    _0x33e384.appendChild(_0x3f0ef7);
    _0x33e384.appendChild(_0x43178c);
    _0x551865.appendChild(_0x33e384);
    _0x1ddd87.push(_0x551865);
    const _0x4ed573 = document.createElement("div");
    _0x4ed573.className = "custom-menu-content";
    const _0x1234cf = document.createElement("div");
    _0x1234cf.className = "section";
    const _0x225b8a = document.createElement("div");
    _0x225b8a.className = "section-title";
    _0x225b8a.textContent = "任务设置";
    const _0x254b60 = document.createElement("div");
    _0x254b60.style.marginBottom = "10px";
    _0x254b60.style.fontSize = "12px";
    _0x254b60.style.color = "#e65100";
    _0x254b60.textContent = "选择需要自动执行的任务：";
    const _0x5e019d = document.createElement("div");
    _0x5e019d.id = "task-list-container";
    _0x1234cf.appendChild(_0x225b8a);
    _0x1234cf.appendChild(_0x254b60);
    _0x1234cf.appendChild(_0x5e019d);
    _0x4ed573.appendChild(_0x1234cf);
    _0x1ddd87.push(_0x4ed573);
    const _0x364c11 = document.createElement("div");
    _0x364c11.className = "custom-menu-content";
    const _0x34407d = document.createElement("div");
    _0x34407d.className = "section";
    const _0x189ba4 = document.createElement("div");
    _0x189ba4.className = "section-title";
    _0x189ba4.textContent = "当前状态";
    const _0x9e012f = document.createElement("div");
    _0x9e012f.className = "status-box";
    _0x52c616 = document.createElement("div");
    _0x52c616.className = "status-text";
    _0x9e012f.appendChild(_0x52c616);
    _0x277109 = document.createElement("div");
    _0x277109.className = "countdown-display";
    _0x277109.style.display = "none";
    _0x9e012f.appendChild(_0x277109);
    const _0x484563 = document.createElement("div");
    _0x484563.className = "progress-container";
    _0x422dd1 = document.createElement("div");
    _0x422dd1.className = "progress-bar";
    _0x484563.appendChild(_0x422dd1);
    const _0x321562 = document.createElement("div");
    _0x321562.className = "section";
    const _0x1ff771 = document.createElement("div");
    _0x1ff771.className = "section-title";
    _0x1ff771.textContent = "运行日志";
    const _0x240a64 = document.createElement("div");
    _0x240a64.className = "log-box";
    _0x5962cc = document.createElement("div");
    _0x5962cc.className = "log-content";
    _0x240a64.appendChild(_0x5962cc);
    _0x34407d.appendChild(_0x189ba4);
    _0x34407d.appendChild(_0x9e012f);
    _0x34407d.appendChild(_0x484563);
    _0x321562.appendChild(_0x1ff771);
    _0x321562.appendChild(_0x240a64);
    _0x364c11.appendChild(_0x34407d);
    _0x364c11.appendChild(_0x321562);
    _0x1ddd87.push(_0x364c11);
    _0x1f8369.appendChild(_0x551865);
    _0x1f8369.appendChild(_0x4ed573);
    _0x1f8369.appendChild(_0x364c11);
    _0x494299.appendChild(_0x2e10a0);
    _0x494299.appendChild(_0x1f8369);
    document.body ? document.body.appendChild(_0x494299) : document.addEventListener("DOMContentLoaded", () => {
      document.body.appendChild(_0x494299);
    });
    _0x4684bc = document.createElement("div");
    _0x4684bc.className = "minimized-overlay " + (_0x34ec70 ? "running" : "");
    _0x4684bc.textContent = "☃️";
    _0x4684bc.style.display = _0xeafe2c ? "flex" : "none";
    _0x4684bc.addEventListener("click", _0x317fd1);
    document.body.appendChild(_0x4684bc);
    _0x11152e(_0x494299, _0x2e10a0);
    _0x385f44();
    _0x556e7d();
    _0x11be74();
    _0x5a8121();
  }
  function _0x51dac3() {
    _0x225e7c = GM_getValue("currentRoundRunCount", 0);
    sessionStorage.getItem("needCenterAfterRefresh") === "true" && (sessionStorage.removeItem("needCenterAfterRefresh"), setTimeout(() => {
      _0x494299 && _0x5a8121();
    }, 500));
    document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => {
      _0x171375();
      _0x5d9197();
      _0x5b79c2();
      _0x34ec70 && window.location.href.includes("/home") ? (_0x17875c("检测到运行状态，正在恢复执行..."), _0x4f4780(_0x32e5b2 => {
        _0x32e5b2 && _0x23eda0.length > 0 && _0xabd273 >= 0 ? (_0x17875c("页面刷新完成，等待1秒后继续执行任务..."), setTimeout(() => {
          _0x36edc2();
        }, 1000)) : _0x264eb3("运行状态已恢复，但页面未加载完成或未找到有效账号", "warning");
      })) : _0x17875c("就绪 - 点击一键开始按钮启动自动运行");
    }) : (_0x171375(), _0x5d9197(), _0x5b79c2(), _0x34ec70 && window.location.href.includes("/home") ? (_0x17875c("检测到运行状态，正在恢复执行..."), _0x4f4780(_0x597e14 => {
      _0x597e14 && _0x23eda0.length > 0 && _0xabd273 >= 0 ? (_0x17875c("页面刷新完成，等待1秒后继续执行任务..."), setTimeout(() => {
        _0x36edc2();
      }, 1000)) : _0x264eb3("运行状态已恢复，但页面未加载完成或未找到有效账号", "warning");
    })) : _0x17875c("就绪 - 点击一键开始按钮启动自动运行"));
  }
  _0x51dac3();
  window.addEventListener("beforeunload", () => {
    _0x3f701b && clearInterval(_0x3f701b);
  });
})();