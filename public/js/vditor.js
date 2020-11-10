/*!
 * Vditor v3.6.0 - A markdown editor written in TypeScript.
 *
 * MIT License
 *
 * Copyright (c) 2018-present B3log 开源, b3log.org
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */
!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Vditor = t() : e.Vditor = t()
}(window, (function () {
    return function (e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var i = t[r] = {i: r, l: !1, exports: {}};
            return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
        }

        return n.m = e, n.c = t, n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
        }, n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }, n.t = function (e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for (var i in e) n.d(r, i, function (t) {
                return e[t]
            }.bind(null, i));
            return r
        }, n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 26)
    }([function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return a
        })), n.d(t, "a", (function () {
            return l
        })), n.d(t, "e", (function () {
            return s
        })), n.d(t, "h", (function () {
            return c
        })), n.d(t, "c", (function () {
            return d
        })), n.d(t, "g", (function () {
            return u
        })), n.d(t, "f", (function () {
            return p
        })), n.d(t, "d", (function () {
            return f
        }));
        var r = n(2), i = n(3), o = n(1), a = function (e) {
            var t;
            return getSelection().rangeCount > 0 && (t = getSelection().getRangeAt(0), e.isEqualNode(t.startContainer) || e.contains(t.startContainer)) || (e.focus(), (t = e.ownerDocument.createRange()).setStart(e, 0), t.collapse(!0)), t
        }, l = function (e) {
            var t = window.getSelection().getRangeAt(0);
            if (!e.contains(t.startContainer) && !Object(o.e)(t.startContainer, "vditor-panel--none")) return {
                left: 0,
                top: 0
            };
            var n, r = e.parentElement.getBoundingClientRect();
            if (0 === t.getClientRects().length) if (3 === t.startContainer.nodeType) {
                var i = t.startContainer.parentElement;
                if (!(i && i.getClientRects().length > 0)) return {left: 0, top: 0};
                n = i.getClientRects()[0]
            } else {
                var a = t.startContainer.children;
                if (a[t.startOffset] && a[t.startOffset].getClientRects().length > 0) n = a[t.startOffset].getClientRects()[0]; else if (t.startContainer.childNodes.length > 0) {
                    var l = t.cloneRange();
                    t.selectNode(t.startContainer.childNodes[Math.max(0, t.startOffset - 1)]), n = t.getClientRects()[0], t.setEnd(l.endContainer, l.endOffset), t.setStart(l.startContainer, l.startOffset)
                } else n = t.startContainer.getClientRects()[0];
                if (!n) {
                    for (var s = t.startContainer.childNodes[t.startOffset]; !s.getClientRects || s.getClientRects && 0 === s.getClientRects().length;) s = s.parentElement;
                    n = s.getClientRects()[0]
                }
            } else n = t.getClientRects()[0];
            return {left: n.left - r.left, top: n.top - r.top}
        }, s = function (e, t) {
            if (!t) {
                if (0 === getSelection().rangeCount) return !1;
                t = getSelection().getRangeAt(0)
            }
            var n = t.commonAncestorContainer;
            return e.isEqualNode(n) || e.contains(n)
        }, c = function (e) {
            var t = window.getSelection();
            t.removeAllRanges(), t.addRange(e)
        }, d = function (e, t, n) {
            var r = {end: 0, start: 0};
            if (!n) {
                if (0 === getSelection().rangeCount) return r;
                n = window.getSelection().getRangeAt(0)
            }
            if (s(t, n)) {
                var i = n.cloneRange();
                e.childNodes[0] && e.childNodes[0].childNodes[0] ? i.setStart(e.childNodes[0].childNodes[0], 0) : i.selectNodeContents(e), i.setEnd(n.startContainer, n.startOffset), r.start = i.toString().length, r.end = r.start + n.toString().length
            }
            return r
        }, u = function (e, t, n) {
            var r = 0, i = 0, o = n.childNodes[i], a = !1, l = !1;
            e = Math.max(0, e), t = Math.max(0, t);
            var s = n.ownerDocument.createRange();
            for (s.setStart(o || n, 0), s.collapse(!0); !l && o;) {
                var d = r + o.textContent.length;
                if (!a && e >= r && e <= d && (0 === e ? s.setStart(o, 0) : 3 === o.childNodes[0].nodeType ? s.setStart(o.childNodes[0], e - r) : o.nextSibling ? s.setStartBefore(o.nextSibling) : s.setStartAfter(o), a = !0, e === t)) {
                    l = !0;
                    break
                }
                a && t >= r && t <= d && (0 === t ? s.setEnd(o, 0) : 3 === o.childNodes[0].nodeType ? s.setEnd(o.childNodes[0], t - r) : o.nextSibling ? s.setEndBefore(o.nextSibling) : s.setEndAfter(o), l = !0), r = d, o = n.childNodes[++i]
            }
            return !l && n.childNodes[i - 1] && s.setStartBefore(n.childNodes[i - 1]), c(s), s
        }, p = function (e, t) {
            var n = e.querySelector("wbr");
            if (n) {
                if (n.previousElementSibling) if (n.previousElementSibling.isSameNode(n.previousSibling)) {
                    if (n.previousElementSibling.lastChild) return t.setStartBefore(n), t.collapse(!0), c(t), !Object(i.c)() || "EM" !== n.previousElementSibling.tagName && "STRONG" !== n.previousElementSibling.tagName && "S" !== n.previousElementSibling.tagName || (t.insertNode(document.createTextNode(r.a.ZWSP)), t.collapse(!1)), void n.remove();
                    t.setStartAfter(n.previousElementSibling)
                } else t.setStart(n.previousSibling, n.previousSibling.textContent.length); else n.previousSibling ? t.setStart(n.previousSibling, n.previousSibling.textContent.length) : n.nextSibling ? 3 === n.nextSibling.nodeType ? t.setStart(n.nextSibling, 0) : t.setStartBefore(n.nextSibling) : t.setStart(n.parentElement, 0);
                t.collapse(!0), n.remove(), c(t)
            }
        }, f = function (e, t) {
            var n = document.createElement("div");
            n.innerHTML = e;
            var r = n.querySelectorAll("p");
            1 === r.length && !r[0].previousSibling && !r[0].nextSibling && t[t.currentMode].element.children.length > 0 && "P" === n.firstElementChild.tagName && (e = r[0].innerHTML.trim());
            var i = document.createElement("div");
            i.innerHTML = e;
            var l = a(t[t.currentMode].element);
            if ("" !== l.toString() && (t[t.currentMode].preventInput = !0, document.execCommand("delete", !1, "")), i.firstElementChild && "0" === i.firstElementChild.getAttribute("data-block")) {
                i.lastElementChild.insertAdjacentHTML("beforeend", "<wbr>");
                var s = Object(o.c)(l.startContainer);
                s ? s.insertAdjacentHTML("afterend", i.innerHTML) : t[t.currentMode].element.insertAdjacentHTML("beforeend", i.innerHTML), p(t[t.currentMode].element, l)
            } else {
                var d = document.createElement("template");
                d.innerHTML = e, l.insertNode(d.content.cloneNode(!0)), l.collapse(!1), c(l)
            }
        }
    }, function (e, t, n) {
        "use strict";
        n.d(t, "g", (function () {
            return i
        })), n.d(t, "h", (function () {
            return o
        })), n.d(t, "b", (function () {
            return a
        })), n.d(t, "d", (function () {
            return l
        })), n.d(t, "c", (function () {
            return s
        })), n.d(t, "f", (function () {
            return c
        })), n.d(t, "e", (function () {
            return d
        })), n.d(t, "a", (function () {
            return u
        }));
        var r = n(6), i = function (e, t) {
            for (var n = d(e, t), r = !1, i = !1; n && !n.classList.contains("vditor-reset") && !i;) (r = d(n.parentElement, t)) ? n = r : i = !0;
            return n || !1
        }, o = function (e, t) {
            for (var n = Object(r.b)(e, t), i = !1, o = !1; n && !n.classList.contains("vditor-reset") && !o;) (i = Object(r.b)(n.parentElement, t)) ? n = i : o = !0;
            return n || !1
        }, a = function (e) {
            var t = o(e, "UL"), n = o(e, "OL"), r = t;
            return n && (!t || t && n.contains(t)) && (r = n), r
        }, l = function (e, t, n) {
            if (!e) return !1;
            3 === e.nodeType && (e = e.parentElement);
            for (var r = e, i = !1; r && !i && !r.classList.contains("vditor-reset");) r.getAttribute(t) === n ? i = !0 : r = r.parentElement;
            return i && r
        }, s = function (e) {
            if (!e) return !1;
            3 === e.nodeType && (e = e.parentElement);
            var t = e, n = !1, r = l(e, "data-block", "0");
            if (r) return r;
            for (; t && !n && !t.classList.contains("vditor-reset");) "H1" === t.tagName || "H2" === t.tagName || "H3" === t.tagName || "H4" === t.tagName || "H5" === t.tagName || "H6" === t.tagName || "P" === t.tagName || "BLOCKQUOTE" === t.tagName || "OL" === t.tagName || "UL" === t.tagName ? n = !0 : t = t.parentElement;
            return n && t
        }, c = function (e, t) {
            if (!e) return !1;
            3 === e.nodeType && (e = e.parentElement);
            for (var n = e, r = !1; n && !r && !n.classList.contains("vditor-reset");) n.nodeName === t ? r = !0 : n = n.parentElement;
            return r && n
        }, d = function (e, t) {
            if (!e) return !1;
            3 === e.nodeType && (e = e.parentElement);
            for (var n = e, r = !1; n && !r && !n.classList.contains("vditor-reset");) n.classList.contains(t) ? r = !0 : n = n.parentElement;
            return r && n
        }, u = function (e) {
            for (; e && e.lastChild;) e = e.lastChild;
            return e
        }
    }, function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return r
        })), n.d(t, "a", (function () {
            return i
        }));
        var r = "3.6.0", i = function () {
            function e() {
            }

            return e.ZWSP = "​", e.MOBILE_WIDTH = 520, e.CLASS_MENU_DISABLED = "vditor-menu--disabled", e.EDIT_TOOLBARS = ["emoji", "headings", "bold", "italic", "strike", "link", "list", "ordered-list", "outdent", "indent", "check", "line", "quote", "code", "inline-code", "insert-after", "insert-before", "upload", "record", "table"], e.CODE_THEME = ["abap", "algol", "algol_nu", "arduino", "autumn", "borland", "bw", "colorful", "dracula", "emacs", "friendly", "fruity", "github", "igor", "lovelace", "manni", "monokai", "monokailight", "murphy", "native", "paraiso-dark", "paraiso-light", "pastie", "perldoc", "pygments", "rainbow_dash", "rrt", "solarized-dark", "solarized-dark256", "solarized-light", "swapoff", "tango", "trac", "vim", "vs", "xcode", "ant-design"], e.CODE_LANGUAGES = ["mermaid", "echarts", "mindmap", "abc", "graphviz", "flowchart", "apache", "bash", "cs", "cpp", "css", "coffeescript", "diff", "xml", "http", "ini", "json", "java", "javascript", "js", "makefile", "markdown", "nginx", "objectivec", "php", "perl", "properties", "python", "ruby", "sql", "shell", "dart", "erb", "go", "gradle", "julia", "kotlin", "less", "lua", "matlab", "rust", "scss", "typescript", "ts", "yaml"], e.CDN = "https://cdn.jsdelivr.net/npm/vditor@3.6.0", e.MARKDOWN_OPTIONS = {
                autoSpace: !1,
                chinesePunct: !1,
                codeBlockPreview: !0,
                fixTermTypo: !1,
                footnotes: !0,
                linkBase: "",
                linkPrefix: "",
                listStyle: !1,
                mark: !1,
                mathBlockPreview: !0,
                paragraphBeginningSpace: !1,
                sanitize: !0,
                toc: !1
            }, e.HLJS_OPTIONS = {enable: !0, lineNumber: !1, style: "github"}, e.MATH_OPTIONS = {
                engine: "KaTeX",
                inlineDigit: !1,
                macros: {}
            }, e.THEME_OPTIONS = {
                current: "light",
                list: {"ant-design": "Ant Design", dark: "Dark", light: "Light", wechat: "WeChat"},
                path: e.CDN + "/dist/css/content-theme"
            }, e
        }()
    }, function (e, t, n) {
        "use strict";
        n.d(t, "f", (function () {
            return r
        })), n.d(t, "e", (function () {
            return i
        })), n.d(t, "a", (function () {
            return o
        })), n.d(t, "b", (function () {
            return a
        })), n.d(t, "d", (function () {
            return l
        })), n.d(t, "g", (function () {
            return s
        })), n.d(t, "c", (function () {
            return c
        }));
        var r = function () {
            return navigator.userAgent.indexOf("Safari") > -1 && -1 === navigator.userAgent.indexOf("Chrome")
        }, i = function () {
            return navigator.userAgent.toLowerCase().indexOf("firefox") > -1
        }, o = function () {
            try {
                return "undefined" != typeof localStorage
            } catch (e) {
                return !1
            }
        }, a = function () {
            return navigator.userAgent.indexOf("iPhone") > -1 ? "touchstart" : "click"
        }, l = function (e) {
            return navigator.platform.toUpperCase().indexOf("MAC") >= 0 ? !(!e.metaKey || e.ctrlKey) : !(e.metaKey || !e.ctrlKey)
        }, s = function (e) {
            return /Mac/.test(navigator.platform) || "iPhone" === navigator.platform ? (e = e.replace("ctrl", "⌘").replace("shift", "⇧").replace("alt", "⌥")).indexOf("⇧") > -1 && (e = i() ? e.replace(";", ":").replace("=", "+") : e.replace(":", ";").replace("+", "=").replace("_", "-")) : (e = e.replace("⌘", "ctrl").replace("⇧", "shift").replace("⌥", "alt")).indexOf("shift") > -1 && (e = e.replace(";", ":").replace("=", "+")), e
        }, c = function () {
            return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
        }
    }, function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return r
        }));
        var r = {
            en_US: {
                alignCenter: "Center",
                alignLeft: "Left",
                alignRight: "Right",
                alternateText: "Alternate text",
                bold: "Blod",
                both: "editor & preview",
                check: "Task List",
                code: "Code Block",
                "code-theme": "Code Block Theme Preview",
                column: "Column",
                confirm: "Confirm",
                "content-theme": "Content Theme Preview",
                copied: "Copied",
                copy: "Copy",
                "delete-column": "Delete Row",
                "delete-row": "Delete Column",
                devtools: "DevTools",
                down: "Down",
                downloadTip: "The browser does not support the download function",
                edit: "Edit",
                "edit-mode": "Toggle Edit Mode",
                emoji: "Emoji",
                export: "Export",
                fileTypeError: "file type is error",
                footnoteRef: "Footnote Ref",
                fullscreen: "Toggle Fullscreen",
                generate: "Generating",
                headings: "Headings",
                help: "Help",
                imageURL: "image URL",
                indent: "Indent",
                info: "Info",
                "inline-code": "Inline Code",
                "insert-after": "Insert line after",
                "insert-before": "Insert line Before",
                "insert-column": "Insert Column",
                "insert-row": "Insert Row",
                instantRendering: "Instant Rendering",
                italic: "Italic",
                language: "Language",
                line: "Line",
                link: "Link",
                linkRef: "Link Ref",
                list: "List",
                more: "More",
                nameEmpty: "Name is empty",
                "ordered-list": "Order List",
                outdent: "Outdent",
                outline: "Outline",
                over: "over",
                performanceTip: "Real-time preview requires ${x}ms, you can close it",
                preview: "Preview",
                quote: "Quote",
                record: "Start Record/End Record",
                "record-tip": "The device does not support recording",
                recording: "recording...",
                redo: "Redo",
                remove: "Remove",
                row: "Row",
                splitView: "Split View",
                strike: "Strike",
                table: "Table",
                textIsNotEmpty: "text(no empty)",
                title: "Title",
                tooltipText: "Tooltip text",
                undo: "Undo",
                up: "Up",
                update: "Update",
                upload: "Upload image or file",
                uploadError: "upload error",
                uploading: "uploading...",
                wysiwyg: "WYSIWYG"
            }, ja_JP: {
                alignCenter: "中央",
                alignLeft: "左側",
                alignRight: "右側",
                alternateText: "イメージタグ",
                bold: "太く",
                both: "エディター & プレビュー",
                check: "チェックリスト",
                code: "コードブロック挿入",
                "code-theme": "コードブロックテーマ",
                column: "行列",
                confirm: "確認",
                "content-theme": "コンテンツテーマ",
                copied: "コピー完了",
                copy: "コピー",
                "delete-column": "列 消去",
                "delete-row": "行 消去",
                devtools: "開発ツール",
                down: "ダウンロード",
                downloadTip: "ブラウザがダウンロード機能をサポートしていません。",
                edit: "修正",
                "edit-mode": "編集モード",
                emoji: "絵文字",
                export: "書き出し",
                fileTypeError: "サポートしていません。",
                footnoteRef: "脚注参照",
                fullscreen: "全体画面",
                generate: "作成する",
                headings: "タイトル大きさ",
                help: "ヘルプ",
                imageURL: "イメージ URL",
                indent: "字下げ",
                info: "情報",
                "inline-code": "インラインコード",
                "insert-after": "ブロックの後ろに入力",
                "insert-before": "ブロックの前に入力",
                "insert-column": "列 挿入",
                "insert-row": "行 挿入",
                instantRendering: "インスタントレンダリング",
                italic: "斜体",
                language: "言語",
                line: "段落分割",
                link: "リンク",
                linkRef: "リンク参照",
                list: "リスト",
                more: "詳しく見る",
                nameEmpty: "名前が入力されていません。",
                "ordered-list": "順序のあるリスト",
                outdent: "ぶら下げインデント",
                outline: "概要",
                over: "オーバー",
                performanceTip: "リアルタイムプレビューには、${x}msが必要でエディター/プレビューボタンをクリックして閉じる事が出来ます。",
                preview: "プレビュー",
                quote: "引用段落",
                record: "録音開始/録音終了",
                "record-tip": "録音がサポートされていません。",
                recording: "録音中...",
                redo: "戻る",
                remove: "消去",
                row: "列",
                splitView: "マークダウン",
                strike: "取り消し線",
                table: "表 挿入",
                textIsNotEmpty: "テキスト(no empty)",
                title: "題名",
                tooltipText: "ツールチップ",
                undo: "取り消す",
                up: "戻る",
                update: "アップデート",
                upload: "イメージをダウンロードする",
                uploadError: "アップロード失敗",
                uploading: "アップロード中",
                wysiwyg: "ウィジウィグ"
            }, ko_KR: {
                alignCenter: "가운데",
                alignLeft: "왼쪽",
                alignRight: "오른쪽",
                alternateText: "이미지 태그",
                bold: "굵게",
                both: "에디터 & 미리보기",
                check: "체크박스",
                code: "코드블럭삽입",
                "code-theme": "코드블럭테마",
                column: "행",
                confirm: "확인",
                "content-theme": "컨텐츠테마",
                copied: "복사완료",
                copy: "복사",
                "delete-column": "열 삭제",
                "delete-row": "행 삭제",
                devtools: "개발툴",
                down: "다운",
                downloadTip: "브라우저가 다운로드 기능을 지원하지 않습니다",
                edit: "수정",
                "edit-mode": "편집모드",
                emoji: "이모지",
                export: "내보내기",
                fileTypeError: "지원하지않습니다.",
                footnoteRef: "각주참조",
                fullscreen: "전체화면",
                generate: "생성",
                headings: "제목크기",
                help: "도움말",
                imageURL: "이미지 URL",
                indent: "들여쓰기",
                info: "정보",
                "inline-code": "인라인코드",
                "insert-after": "블락 뒤로 입력",
                "insert-before": "블락 앞으로 입력",
                "insert-column": "열 삽입",
                "insert-row": "행 삽입",
                instantRendering: "타이포라",
                italic: "기울임꼴",
                language: "언어",
                line: "문단나눔",
                link: "링크",
                linkRef: "링크 참조",
                list: "순서없는 목록",
                more: "더보기",
                nameEmpty: "이름이 비어있습니다.",
                "ordered-list": "순서있는 목록",
                outdent: "내어쓰기",
                outline: "개요",
                over: "오버",
                performanceTip: "실시간 미리보기에는 ${x}ms가 필요하며 에디터/미리보기 버튼을 클릭하여 닫을 수 있습니다.",
                preview: "미리보기",
                quote: "인용단락",
                record: "녹음시작/녹음종료",
                "record-tip": "녹음을 지원하지 않습니다.",
                recording: "녹음중...",
                redo: "되돌리기",
                remove: "삭제",
                row: "열",
                splitView: "마크다운",
                strike: "취소선",
                table: "표삽입",
                textIsNotEmpty: "텍스트(no empty)",
                title: "표제",
                tooltipText: "툴팁",
                undo: "취소하기",
                up: "위로",
                update: "업데이트",
                upload: "이미지 업로드하기",
                uploadError: "업로드 실패",
                uploading: "업로드중...",
                wysiwyg: "위지위그"
            }, zh_CN: {
                alignCenter: "居中",
                alignLeft: "居左",
                alignRight: "居右",
                alternateText: "替代文本",
                bold: "粗体",
                both: "编辑 & 预览",
                check: "任务列表",
                code: "代码块",
                "code-theme": "代码块主题预览",
                column: "列",
                confirm: "确定",
                "content-theme": "内容主题预览",
                copied: "已复制",
                copy: "复制",
                "delete-column": "删除列",
                "delete-row": "删除行",
                devtools: "开发者工具",
                down: "下",
                downloadTip: "该浏览器不支持下载功能",
                edit: "编辑",
                "edit-mode": "切换编辑模式",
                emoji: "表情",
                export: "导出",
                fileTypeError: "文件类型不允许上传",
                footnoteRef: "脚注标识",
                fullscreen: "全屏切换",
                generate: "生成中",
                headings: "标题",
                help: "帮助",
                imageURL: "图片地址",
                indent: "列表缩进",
                info: "关于",
                "inline-code": "行内代码",
                "insert-after": "末尾插入行",
                "insert-before": "起始插入行",
                "insert-column": "插入列",
                "insert-row": "插入行",
                instantRendering: "即时渲染",
                italic: "斜体",
                language: "语言",
                line: "分隔线",
                link: "链接",
                linkRef: "引用标识",
                list: "无序列表",
                more: "更多",
                nameEmpty: "文件名不能为空",
                "ordered-list": "有序列表",
                outdent: "列表反向缩进",
                outline: "大纲",
                over: "超过",
                performanceTip: "实时预览需 ${x}ms，可点击编辑 & 预览按钮进行关闭",
                preview: "预览",
                quote: "引用",
                record: "开始录音/结束录音",
                "record-tip": "该设备不支持录音功能",
                recording: "录音中...",
                redo: "重做",
                remove: "删除",
                row: "行",
                splitView: "分屏预览",
                strike: "删除线",
                table: "表格",
                textIsNotEmpty: "文本（不能为空）",
                title: "标题",
                tooltipText: "提示文本",
                undo: "撤销",
                up: "上",
                update: "更新",
                upload: "上传图片或文件",
                uploadError: "上传错误",
                uploading: "上传中...",
                wysiwyg: "所见即所得"
            }
        }
    }, function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return r
        })), n.d(t, "a", (function () {
            return i
        }));
        var r = function (e, t) {
            if (document.getElementById(t)) return !1;
            var n = new XMLHttpRequest;
            n.open("GET", e, !1), n.setRequestHeader("Accept", "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01"), n.send("");
            var r = document.createElement("script");
            r.type = "text/javascript", r.text = n.responseText, r.id = t, document.head.appendChild(r)
        }, i = function (e, t) {
            return new Promise((function (n, r) {
                if (document.getElementById(t)) return n(), !1;
                var i = document.createElement("script");
                i.src = e, i.async = !0, document.head.appendChild(i), i.onload = function () {
                    if (document.getElementById(t)) return i.remove(), n(), !1;
                    i.id = t, n()
                }
            }))
        }
    }, function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return r
        })), n.d(t, "a", (function () {
            return i
        }));
        var r = function (e, t) {
            if (!e) return !1;
            3 === e.nodeType && (e = e.parentElement);
            for (var n = e, r = !1; n && !r && !n.classList.contains("vditor-reset");) 0 === n.nodeName.indexOf(t) ? r = !0 : n = n.parentElement;
            return r && n
        }, i = function (e) {
            var t = r(e, "H");
            return !(!t || 2 !== t.tagName.length || "HR" === t.tagName) && t
        }
    }, function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return r
        }));
        var r = function (e, t) {
            if (!document.getElementById(t)) {
                var n = document.createElement("link");
                n.id = t, n.rel = "stylesheet", n.type = "text/css", n.href = e, document.getElementsByTagName("head")[0].appendChild(n)
            }
        }
    }, function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return o
        }));
        var r = n(2), i = n(5), o = function (e, t) {
            void 0 === e && (e = document), void 0 === t && (t = r.a.CDN);
            var n = e.querySelectorAll(".language-echarts");
            n.length > 0 && Object(i.a)(t + "/dist/js/echarts/echarts.min.js", "vditorEchartsScript").then((function () {
                n.forEach((function (e) {
                    if (!e.parentElement.classList.contains("vditor-wysiwyg__pre") && !e.parentElement.classList.contains("vditor-ir__marker--pre ")) {
                        var t = e.innerText.trim();
                        if (t) try {
                            if ("true" === e.getAttribute("data-processed")) return;
                            var n = JSON.parse(t);
                            echarts.init(e).setOption(n), e.setAttribute("data-processed", "true")
                        } catch (t) {
                            e.className = "vditor-reset--error", e.innerHTML = "echarts render error: <br>" + t
                        }
                    }
                }))
            }))
        }
    }, function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return o
        }));
        var r = n(2), i = n(5), o = function (e, t) {
            void 0 === e && (e = document), void 0 === t && (t = r.a.CDN);
            var n = e.querySelectorAll(".language-mindmap");
            n.length > 0 && Object(i.a)(t + "/dist/js/echarts/echarts.min.js", "vditorEchartsScript").then((function () {
                n.forEach((function (e) {
                    if (!e.parentElement.classList.contains("vditor-wysiwyg__pre") && !e.parentElement.classList.contains("vditor-ir__marker--pre ")) {
                        var t = e.getAttribute("data-code");
                        if (t) try {
                            if ("true" === e.getAttribute("data-processed")) return;
                            var n = {
                                series: [{
                                    data: [JSON.parse(decodeURIComponent(t))],
                                    initialTreeDepth: -1,
                                    itemStyle: {borderWidth: 0, color: "#4285f4"},
                                    label: {
                                        backgroundColor: "#f6f8fa",
                                        borderColor: "#d1d5da",
                                        borderRadius: 5,
                                        borderWidth: .5,
                                        color: "#586069",
                                        lineHeight: 20,
                                        offset: [-5, 0],
                                        padding: [0, 5],
                                        position: "insideRight"
                                    },
                                    lineStyle: {color: "#d1d5da", width: 1},
                                    roam: !0,
                                    symbol: function (e, t) {
                                        var n;
                                        return (null === (n = null == t ? void 0 : t.data) || void 0 === n ? void 0 : n.children) ? "circle" : "path://"
                                    },
                                    type: "tree"
                                }], tooltip: {trigger: "item", triggerOn: "mousemove"}
                            };
                            echarts.init(e).setOption(n), e.setAttribute("data-processed", "true")
                        } catch (t) {
                            e.className = "vditor-reset--error", e.innerHTML = "mindmap render error: <br>" + t
                        }
                    }
                }))
            }))
        }
    }, function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return i
        }));
        var r = n(7), i = function (e, t) {
            if (e && t) {
                var n = document.getElementById("vditorContentTheme"), i = t + "/" + e + ".css";
                n ? n.href !== i && (n.remove(), Object(r.a)(i, "vditorContentTheme")) : Object(r.a)(i, "vditorContentTheme")
            }
        }
    }, function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return r
        }));
        var r = function (e) {
            return e.replace(/\u00a0/g, " ")
        }
    }, function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return o
        }));
        var r = n(2), i = n(5), o = function (e, t) {
            void 0 === e && (e = document), void 0 === t && (t = r.a.CDN);
            var n = e.querySelectorAll(".language-abc");
            n.length > 0 && Object(i.a)(t + "/dist/js/abcjs/abcjs_basic.min.js", "vditorAbcjsScript").then((function () {
                n.forEach((function (e) {
                    if (!e.parentElement.classList.contains("vditor-wysiwyg__pre") && !e.parentElement.classList.contains("vditor-ir__marker--pre ")) {
                        var t = document.createElement("div");
                        t.className = "language-abc", e.parentNode.replaceChild(t, e), ABCJS.renderAbc(t, e.textContent.trim()), t.style.overflowX = "auto"
                    }
                }))
            }))
        }
    }, function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return o
        }));
        var r = n(4), i = n(11), o = function (e, t) {
            void 0 === t && (t = "zh_CN"), e.querySelectorAll("pre > code").forEach((function (n, o) {
                if (!n.parentElement.classList.contains("vditor-wysiwyg__pre") && !n.parentElement.classList.contains("vditor-ir__marker--pre ") && !(n.classList.contains("language-mermaid") || n.classList.contains("language-flowchart") || n.classList.contains("language-echarts") || n.classList.contains("language-mindmap") || n.classList.contains("language-abc") || n.classList.contains("language-graphviz") || n.style.maxHeight.indexOf("px") > -1 || e.classList.contains("vditor-preview") && o > 5)) {
                    var a = n.innerText;
                    if (n.classList.contains("highlight-chroma")) {
                        var l = document.createElement("code");
                        l.innerHTML = n.innerHTML, l.querySelectorAll(".highlight-ln").forEach((function (e) {
                            e.remove()
                        })), a = l.innerText
                    }
                    var s = document.createElement("div");
                    s.className = "vditor-copy", s.innerHTML = '<span aria-label="' + r.a[t].copy + "\"\nonmouseover=\"this.setAttribute('aria-label', '" + r.a[t].copy + "')\"\nclass=\"vditor-tooltipped vditor-tooltipped__w\"\nonclick=\"this.previousElementSibling.select();document.execCommand('copy');this.setAttribute('aria-label', '" + r.a[t].copied + '\')"><svg><use xlink:href="#vditor-icon-copy"></use></svg></span>';
                    var c = document.createElement("textarea");
                    c.value = Object(i.a)(a), s.insertAdjacentElement("afterbegin", c), n.before(s), n.style.maxHeight = window.outerHeight - 40 + "px"
                }
            }))
        }
    }, function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return o
        }));
        var r = n(2), i = n(5), o = function (e, t) {
            void 0 === t && (t = r.a.CDN);
            var n = e.querySelectorAll(".language-flowchart");
            0 !== n.length && Object(i.a)(t + "/dist/js/flowchart.js/flowchart.min.js", "vditorFlowchartScript").then((function () {
                n.forEach((function (e) {
                    var t = flowchart.parse(e.innerText);
                    e.innerHTML = "", t.drawSVG(e)
                }))
            }))
        }
    }, function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return o
        }));
        var r = n(2), i = n(5), o = function (e, t) {
            void 0 === t && (t = r.a.CDN);
            var n = e.querySelectorAll(".language-graphviz");
            0 !== n.length && Object(i.a)(t + "/dist/js/graphviz/viz.js", "vditorGraphVizScript").then((function () {
                n.forEach((function (e) {
                    if (!e.parentElement.classList.contains("vditor-wysiwyg__pre") && !e.parentElement.classList.contains("vditor-ir__marker--pre ") && "true" !== e.getAttribute("data-processed")) {
                        try {
                            var t = new Blob(["importScripts('" + document.getElementById("vditorGraphVizScript").src.replace("viz.js", "full.render.js") + "');"], {type: "application/javascript"}),
                                n = (window.URL || window.webkitURL).createObjectURL(t), r = new Worker(n);
                            new Viz({worker: r}).renderSVGElement(e.textContent).then((function (t) {
                                e.innerHTML = t.outerHTML
                            })).catch((function (t) {
                                e.innerHTML = "graphviz render error: <br>" + t, e.className = "vditor-math vditor-reset--error"
                            }))
                        } catch (e) {
                            console.error("graphviz error", e)
                        }
                        e.setAttribute("data-processed", "true")
                    }
                }))
            }))
        }
    }, function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return a
        }));
        var r = n(2), i = n(5), o = n(7), a = function (e, t, n) {
            void 0 === t && (t = document), void 0 === n && (n = r.a.CDN);
            var a = e.style;
            r.a.CODE_THEME.includes(a) || (a = "github");
            var l = document.getElementById("vditorHljsStyle"), s = n + "/dist/js/highlight.js/styles/" + a + ".css";
            (l && l.href !== s && l.remove(), Object(o.a)(n + "/dist/js/highlight.js/styles/" + a + ".css", "vditorHljsStyle"), !1 !== e.enable) && (0 !== t.querySelectorAll("pre > code").length && Object(i.a)(n + "/dist/js/highlight.js/highlight.pack.js", "vditorHljsScript").then((function () {
                t.querySelectorAll("pre > code").forEach((function (t) {
                    if (!t.parentElement.classList.contains("vditor-ir__marker--pre") && !t.parentElement.classList.contains("vditor-wysiwyg__pre") && !(t.classList.contains("language-mermaid") || t.classList.contains("language-flowchat") || t.classList.contains("language-echarts") || t.classList.contains("language-mindmap") || t.classList.contains("language-abc") || t.classList.contains("language-graphviz")) && (hljs.highlightBlock(t), e.lineNumber)) {
                        t.classList.add("vditor-linenumber");
                        var n = t.querySelector(".vditor-linenumber__temp");
                        n || ((n = document.createElement("div")).className = "vditor-linenumber__temp", t.insertAdjacentElement("beforeend", n));
                        var r = getComputedStyle(t).whiteSpace, i = !1;
                        "pre-wrap" !== r && "pre-line" !== r || (i = !0);
                        var o = "", a = t.textContent.split(/\r\n|\r|\n/g);
                        a.pop(), a.map((function (e) {
                            var t = "";
                            i && (n.textContent = e || "\n", t = ' style="height:' + n.getBoundingClientRect().height + 'px"'), o += "<span" + t + "></span>"
                        })), n.style.display = "none", o = '<span class="vditor-linenumber__rows">' + o + "</span>", t.insertAdjacentHTML("beforeend", o)
                    }
                }))
            })))
        }
    }, function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return l
        }));
        var r = n(2), i = n(5), o = n(7), a = n(11), l = function (e, t) {
            var n = e.querySelectorAll(".vditor-math");
            if (0 !== n.length) {
                var l = {cdn: r.a.CDN, math: {engine: "KaTeX", inlineDigit: !1, macros: {}}};
                if (t && t.math && (t.math = Object.assign({}, l.math, t.math)), "KaTeX" === (t = Object.assign({}, l, t)).math.engine) Object(o.a)(t.cdn + "/dist/js/katex/katex.min.css", "vditorKatexStyle"), Object(i.a)(t.cdn + "/dist/js/katex/katex.min.js", "vditorKatexScript").then((function () {
                    n.forEach((function (e) {
                        if (!e.getAttribute("data-math")) {
                            var t = Object(a.a)(e.textContent);
                            e.setAttribute("data-math", t);
                            try {
                                e.innerHTML = katex.renderToString(t, {
                                    displayMode: "DIV" === e.tagName,
                                    output: "html"
                                })
                            } catch (t) {
                                e.innerHTML = t.message, e.className = "vditor-math vditor-reset--error"
                            }
                            e.addEventListener("copy", (function (e) {
                                e.stopPropagation(), e.preventDefault();
                                var t = e.currentTarget.closest(".vditor-math");
                                e.clipboardData.setData("text/html", t.innerHTML), e.clipboardData.setData("text/plain", t.getAttribute("data-math"))
                            }))
                        }
                    }))
                })); else if ("MathJax" === t.math.engine) {
                    window.MathJax || (window.MathJax = {
                        loader: {paths: {mathjax: t.cdn + "/dist/js/mathjax"}},
                        tex: {macros: t.math.macros}
                    }), Object(i.b)(t.cdn + "/dist/js/mathjax/tex-svg.js", "vditorMathJaxScript");
                    var s = function () {
                        n.forEach((function (e) {
                            if (!e.getAttribute("data-math")) {
                                var t = Object(a.a)(e.textContent);
                                if (e.setAttribute("data-math", t), t) {
                                    window.MathJax.texReset();
                                    var n = window.MathJax.getMetricsFor(e);
                                    n.display = "DIV" === e.tagName, window.MathJax.tex2svgPromise(t, n).then((function (t) {
                                        e.innerHTML = "", e.append(t), window.MathJax.startup.document.clear(), window.MathJax.startup.document.updateDocument();
                                        var n = e.querySelector('[data-mml-node="merror"]');
                                        n && "" !== n.textContent.trim() && (e.innerHTML = n.textContent.trim(), e.className = "vditor-math vditor-reset--error")
                                    }))
                                }
                            }
                        }))
                    };
                    window.MathJax.texReset ? s() : setTimeout((function () {
                        s()
                    }))
                }
            }
        }
    }, function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return o
        }));
        var r = n(2), i = n(5), o = function (e, t) {
            void 0 === t && (t = r.a.CDN);
            var n = e.querySelectorAll(".language-mermaid");
            0 !== n.length && Object(i.a)(t + "/dist/js/mermaid/mermaid.min.js", "vditorMermaidScript").then((function () {
                n.forEach((function (e) {
                    mermaid.init({noteMargin: 10}, e)
                }))
            }))
        }
    }, function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return r
        }));
        var r = function (e) {
            e && e.querySelectorAll("a").forEach((function (e) {
                var t = e.getAttribute("href");
                t && (t.match(/^.+.(mp4|m4v|ogg|ogv|webm)$/) ? function (e, t) {
                    e.insertAdjacentHTML("afterend", '<video controls="controls" src="' + t + '"></video>'), e.remove()
                }(e, t) : t.match(/^.+.(mp3|wav|flac)$/) ? function (e, t) {
                    e.insertAdjacentHTML("afterend", '<audio controls="controls" src="' + t + '"></audio>'), e.remove()
                }(e, t) : function (e, t) {
                    var n = t.match(/\/\/(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w|-]{11})(?:(?:[\?&]t=)(\S+))?/),
                        r = t.match(/\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/),
                        i = t.match(/\/\/v\.qq\.com\/x\/cover\/.*\/([^\/]+)\.html\??.*/),
                        o = t.match(/(?:www\.|\/\/)coub\.com\/view\/(\w+)/),
                        a = t.match(/(?:www\.|\/\/)facebook\.com\/([^\/]+)\/videos\/([0-9]+)/),
                        l = t.match(/.+dailymotion.com\/(video|hub)\/(\w+)\?/),
                        s = t.match(/(?:www\.|\/\/)bilibili\.com\/video\/(\w+)/),
                        c = t.match(/(?:www\.|\/\/)ted\.com\/talks\/(\w+)/);
                    n && 11 === n[1].length ? (e.insertAdjacentHTML("afterend", '<iframe class="iframe__video" src="//www.youtube.com/embed/' + n[1] + (n[2] ? "?start=" + n[2] : "") + '"></iframe>'), e.remove()) : r && r[1] ? (e.insertAdjacentHTML("afterend", '<iframe class="iframe__video" src="//player.youku.com/embed/' + r[1] + '"></iframe>'), e.remove()) : i && i[1] ? (e.insertAdjacentHTML("afterend", '<iframe class="iframe__video" src="https://v.qq.com/txp/iframe/player.html?vid=' + i[1] + '"></iframe>'), e.remove()) : o && o[1] ? (e.insertAdjacentHTML("afterend", '<iframe class="iframe__video"\n src="//coub.com/embed/' + o[1] + '?muted=false&autostart=false&originalSize=true&startWithHD=true"></iframe>'), e.remove()) : a && a[0] ? (e.insertAdjacentHTML("afterend", '<iframe class="iframe__video"\n src="https://www.facebook.com/plugins/video.php?href=' + encodeURIComponent(a[0]) + '"></iframe>'), e.remove()) : l && l[2] ? (e.insertAdjacentHTML("afterend", '<iframe class="iframe__video"\n src="https://www.dailymotion.com/embed/video/' + l[2] + '"></iframe>'), e.remove()) : s && s[1] ? (e.insertAdjacentHTML("afterend", '<iframe class="iframe__video"\n src="//player.bilibili.com/player.html?bvid=' + s[1] + '"></iframe>'), e.remove()) : c && c[1] && (e.insertAdjacentHTML("afterend", '<iframe class="iframe__video" src="//embed.ted.com/talks/' + c[1] + '"></iframe>'), e.remove())
                }(e, t))
            }))
        }
    }, function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return o
        }));
        var r = n(2), i = n(7), o = function (e, t) {
            void 0 === t && (t = r.a.CDN), r.a.CODE_THEME.includes(e) || (e = "github");
            var n = document.getElementById("vditorHljsStyle"), o = t + "/dist/js/highlight.js/styles/" + e + ".css";
            n ? n.href !== o && (n.remove(), Object(i.a)(o, "vditorHljsStyle")) : Object(i.a)(o, "vditorHljsStyle")
        }
    }, function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return i
        }));
        var r = n(6), i = function (e, t, n) {
            var i = "";
            Array.from(e.children).forEach((function (e, t) {
                if (Object(r.a)(e)) {
                    var o = parseInt(e.tagName.substring(1), 10), a = new Array(2 * (o - 1)).fill("&emsp;").join(""),
                        l = "";
                    if (n && "ir" === n.currentMode) {
                        var s = e.querySelector('[data-type="heading-marker"]');
                        l = "2" === s.getAttribute("data-render") ? e.textContent.replace(s.textContent, "").trim() : e.textContent.substring(o + 1).trim()
                    } else l = e.textContent.trim();
                    var c = e.id.lastIndexOf("_"), d = e.id.substring(0, -1 === c ? void 0 : c);
                    e.id = d + "_" + t, i += '<div data-id="' + e.id + '" class="vditor-outline__item">' + a + l + "</div>"
                }
            })), t.innerHTML = i, t.querySelectorAll(".vditor-outline__item").forEach((function (r) {
                r.addEventListener("click", (function (i) {
                    var o = document.getElementById(r.getAttribute("data-id"));
                    if (o) {
                        if (n) if ("auto" === n.options.height) {
                            var a = o.offsetTop + n.element.offsetTop;
                            n.options.toolbarConfig.pin || (a += n.toolbar.element.offsetHeight), window.scrollTo(window.scrollX, a)
                        } else n.element.offsetTop < window.scrollY && window.scrollTo(window.scrollX, n.element.offsetTop), n.preview.element.contains(e) ? e.parentElement.scrollTop = o.offsetTop : e.scrollTop = o.offsetTop; else window.scrollTo(window.scrollX, o.offsetTop);
                        t.querySelectorAll(".vditor-outline__item").forEach((function (e) {
                            e.classList.remove("vditor-outline__item--current")
                        })), r.classList.add("vditor-outline__item--current")
                    }
                }))
            }))
        }
    }, function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return r
        }));
        var r = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            for (var n = {}, i = function (e) {
                for (var t in e) e.hasOwnProperty(t) && ("[object Object]" === Object.prototype.toString.call(e[t]) ? n[t] = r(n[t], e[t]) : n[t] = e[t])
            }, o = 0; o < e.length; o++) i(e[o]);
            return n
        }
    }, function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return r
        }));
        var r = function (e) {
            var t = Lute.New();
            return t.PutEmojis(e.emojis), t.SetEmojiSite(e.emojiSite), t.SetHeadingAnchor(e.headingAnchor), t.SetInlineMathAllowDigitAfterOpenMarker(e.inlineMathDigit), t.SetAutoSpace(e.autoSpace), t.SetToC(e.toc), t.SetFootnotes(e.footnotes), t.SetChinesePunct(e.chinesePunct), t.SetFixTermTypo(e.fixTermTypo), t.SetVditorCodeBlockPreview(e.codeBlockPreview), t.SetVditorMathBlockPreview(e.mathBlockPreview), t.SetSanitize(e.sanitize), t.SetChineseParagraphBeginningSpace(e.paragraphBeginningSpace), t.SetRenderListStyle(e.listStyle), t.SetLinkBase(e.linkBase), t.SetLinkPrefix(e.linkPrefix), t.SetMark(e.mark), e.lazyLoadImage && t.SetImageLazyLoading(e.lazyLoadImage), t
        }
    }, function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n(12), i = n(8), o = n(13), a = n(14), l = n(15), s = n(16), c = function (e) {
                void 0 === e && (e = document);
                var t = function (e) {
                    var t = document.createElement("img");
                    t.src = e.getAttribute("data-src"), t.addEventListener("load", (function () {
                        e.getAttribute("style") || e.getAttribute("class") || e.getAttribute("width") || e.getAttribute("height") || t.naturalHeight > t.naturalWidth && t.naturalWidth / t.naturalHeight < document.querySelector(".vditor-reset").clientWidth / (window.innerHeight - 40) && t.naturalHeight > window.innerHeight - 40 && (e.style.height = window.innerHeight - 40 + "px"), e.src = t.src
                    })), e.removeAttribute("data-src")
                };
                if (!("IntersectionObserver" in window)) return e.querySelectorAll("img").forEach((function (e) {
                    e.getAttribute("data-src") && t(e)
                })), !1;
                window.vditorImageIntersectionObserver ? (window.vditorImageIntersectionObserver.disconnect(), e.querySelectorAll("img").forEach((function (e) {
                    window.vditorImageIntersectionObserver.observe(e)
                }))) : (window.vditorImageIntersectionObserver = new IntersectionObserver((function (e) {
                    e.forEach((function (e) {
                        (void 0 === e.isIntersecting ? 0 !== e.intersectionRatio : e.isIntersecting) && e.target.getAttribute("data-src") && t(e.target)
                    }))
                })), e.querySelectorAll("img").forEach((function (e) {
                    window.vditorImageIntersectionObserver.observe(e)
                })))
            }, d = n(17), u = n(19), p = n(18), f = n(9), m = n(21), h = n(2), v = n(10), g = n(5), b = n(22), y = n(23),
            w = n(0), E = function (e, t) {
                if (void 0 === t && (t = "zh_CN"), "undefined" != typeof speechSynthesis && "undefined" != typeof SpeechSynthesisUtterance) {
                    var n = '<svg><use xlink:href="#vditor-icon-play"></use></svg>',
                        r = '<svg><use xlink:href="#vditor-icon-pause"></use></svg>',
                        i = document.querySelector(".vditor-speech");
                    if (!i) {
                        (i = document.createElement("div")).className = "vditor-speech", document.body.insertAdjacentElement("beforeend", i);
                        var o = function () {
                            var e, n;
                            return speechSynthesis.getVoices().forEach((function (r) {
                                r.lang === t.replace("_", "-") && (e = r), r.default && (n = r)
                            })), e || (e = n), e
                        };
                        void 0 !== speechSynthesis.onvoiceschanged && (speechSynthesis.onvoiceschanged = o);
                        var a = o();
                        i.onclick = function () {
                            if ("vditor-speech" === i.className) {
                                var e = new SpeechSynthesisUtterance(i.getAttribute("data-text"));
                                e.voice = a, e.onend = function () {
                                    i.className = "vditor-speech", speechSynthesis.cancel(), i.innerHTML = n
                                }, speechSynthesis.speak(e), i.className = "vditor-speech vditor-speech--current", i.innerHTML = r
                            } else speechSynthesis.speaking && (speechSynthesis.paused ? (speechSynthesis.resume(), i.innerHTML = r) : (speechSynthesis.pause(), i.innerHTML = n));
                            Object(w.h)(window.vditorSpeechRange)
                        }, document.body.addEventListener("click", (function () {
                            "" === getSelection().toString().trim() && "block" === i.style.display && (i.className = "vditor-speech", speechSynthesis.cancel(), i.style.display = "none")
                        }))
                    }
                    e.addEventListener("mouseup", (function (e) {
                        var t = getSelection().toString().trim();
                        if (speechSynthesis.cancel(), "" !== getSelection().toString().trim()) {
                            window.vditorSpeechRange = getSelection().getRangeAt(0).cloneRange();
                            var r = getSelection().getRangeAt(0).getBoundingClientRect();
                            i.innerHTML = n, i.style.display = "block", i.style.top = r.top + r.height + document.querySelector("html").scrollTop - 20 + "px", i.style.left = e.screenX + 2 + "px", i.setAttribute("data-text", t)
                        } else "block" === i.style.display && (i.className = "vditor-speech", i.style.display = "none")
                    }))
                }
            }, k = function (e, t, n, r) {
                return new (n || (n = Promise))((function (i, o) {
                    function a(e) {
                        try {
                            s(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function l(e) {
                        try {
                            s(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(a, l)
                    }

                    s((r = r.apply(e, t || [])).next())
                }))
            }, S = function (e, t) {
                var n, r, i, o, a = {
                    label: 0, sent: function () {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    }, trys: [], ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
                    return this
                }), o;

                function l(o) {
                    return function (l) {
                        return function (o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {value: o[1], done: !1};
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {value: o[0] ? o[1] : void 0, done: !0}
                        }([o, l])
                    }
                }
            }, O = function (e) {
                var t = {
                    anchor: 0,
                    cdn: h.a.CDN,
                    customEmoji: {},
                    emojiPath: (e && e.emojiPath || h.a.CDN) + "/dist/images/emoji",
                    hljs: h.a.HLJS_OPTIONS,
                    icon: "ant",
                    lang: "zh_CN",
                    markdown: h.a.MARKDOWN_OPTIONS,
                    math: h.a.MATH_OPTIONS,
                    speech: {enable: !1},
                    theme: h.a.THEME_OPTIONS
                };
                return Object(b.a)(t, e)
            }, L = function (e, t) {
                var n = O(t);
                return Object(g.a)(n.cdn + "/dist/js/lute/lute.min.js", "vditorLuteScript").then((function () {
                    var r = Object(y.a)({
                        autoSpace: n.markdown.autoSpace,
                        chinesePunct: n.markdown.chinesePunct,
                        codeBlockPreview: n.markdown.codeBlockPreview,
                        emojiSite: n.emojiPath,
                        emojis: n.customEmoji,
                        fixTermTypo: n.markdown.fixTermTypo,
                        footnotes: n.markdown.footnotes,
                        headingAnchor: 0 !== n.anchor,
                        inlineMathDigit: n.math.inlineDigit,
                        lazyLoadImage: n.lazyLoadImage,
                        linkBase: n.markdown.linkBase,
                        linkPrefix: n.markdown.linkPrefix,
                        listStyle: n.markdown.listStyle,
                        mark: n.markdown.mark,
                        mathBlockPreview: n.markdown.mathBlockPreview,
                        paragraphBeginningSpace: n.markdown.paragraphBeginningSpace,
                        sanitize: n.markdown.sanitize,
                        toc: n.markdown.toc
                    });
                    return (null == t ? void 0 : t.renderers) && r.SetJSRenderers({renderers: {Md2HTML: t.renderers}}), r.Md2HTML(e)
                }))
            }, C = function (e, t, n) {
                return k(void 0, void 0, void 0, (function () {
                    var m, h;
                    return S(this, (function (b) {
                        switch (b.label) {
                            case 0:
                                return m = O(n), [4, L(t, m)];
                            case 1:
                                return h = b.sent(), m.transform && (h = m.transform(h)), e.innerHTML = h, e.classList.add("vditor-reset"), Object(v.a)(m.theme.current, m.theme.path), 1 === m.anchor && e.classList.add("vditor-reset--anchor"), Object(o.a)(e, m.lang), Object(s.a)(m.hljs, e, m.cdn), Object(d.a)(e, {
                                    cdn: m.cdn,
                                    math: m.math
                                }), Object(p.a)(e, m.cdn), Object(a.a)(e, m.cdn), Object(l.a)(e, m.cdn), Object(i.a)(e, m.cdn), Object(f.a)(e, m.cdn), Object(r.a)(e, m.cdn), Object(u.a)(e), m.speech.enable && E(e, m.lang), 0 !== m.anchor && (y = m.anchor, document.querySelectorAll(".vditor-anchor").forEach((function (e) {
                                    1 === y && e.classList.add("vditor-anchor--left"), e.onclick = function () {
                                        var t = e.getAttribute("href").substr(1),
                                            n = document.getElementById("vditorAnchor-" + t).offsetTop;
                                        document.querySelector("html").scrollTop = n
                                    }
                                })), window.onhashchange = function () {
                                    var e = document.getElementById("vditorAnchor-" + decodeURIComponent(window.location.hash.substr(1)));
                                    e && (document.querySelector("html").scrollTop = e.offsetTop)
                                }), m.after && m.after(), m.lazyLoadImage && c(e), m.icon && Object(g.a)(m.cdn + "/dist/js/icons/" + m.icon + ".js", "vditorIconScript"), [2]
                        }
                        var y
                    }))
                }))
            }, T = n(20), M = function () {
                function e() {
                }

                return e.codeRender = o.a, e.graphvizRender = l.a, e.highlightRender = s.a, e.mathRender = d.a, e.mermaidRender = p.a, e.flowchartRender = a.a, e.chartRender = i.a, e.abcRender = r.a, e.mindmapRender = f.a, e.outlineRender = m.a, e.mediaRender = u.a, e.speechRender = E, e.lazyLoadImageRender = c, e.md2html = L, e.preview = C, e.setCodeTheme = T.a, e.setContentTheme = v.a, e
            }();
        t.default = M
    }, function (e, t) {
        var n = function () {
            this.Diff_Timeout = 1, this.Diff_EditCost = 4, this.Match_Threshold = .5, this.Match_Distance = 1e3, this.Patch_DeleteThreshold = .5, this.Patch_Margin = 4, this.Match_MaxBits = 32
        };
        n.Diff = function (e, t) {
            return [e, t]
        }, n.prototype.diff_main = function (e, t, r, i) {
            void 0 === i && (i = this.Diff_Timeout <= 0 ? Number.MAX_VALUE : (new Date).getTime() + 1e3 * this.Diff_Timeout);
            var o = i;
            if (null == e || null == t) throw new Error("Null input. (diff_main)");
            if (e == t) return e ? [new n.Diff(0, e)] : [];
            void 0 === r && (r = !0);
            var a = r, l = this.diff_commonPrefix(e, t), s = e.substring(0, l);
            e = e.substring(l), t = t.substring(l), l = this.diff_commonSuffix(e, t);
            var c = e.substring(e.length - l);
            e = e.substring(0, e.length - l), t = t.substring(0, t.length - l);
            var d = this.diff_compute_(e, t, a, o);
            return s && d.unshift(new n.Diff(0, s)), c && d.push(new n.Diff(0, c)), this.diff_cleanupMerge(d), d
        }, n.prototype.diff_compute_ = function (e, t, r, i) {
            var o;
            if (!e) return [new n.Diff(1, t)];
            if (!t) return [new n.Diff(-1, e)];
            var a = e.length > t.length ? e : t, l = e.length > t.length ? t : e, s = a.indexOf(l);
            if (-1 != s) return o = [new n.Diff(1, a.substring(0, s)), new n.Diff(0, l), new n.Diff(1, a.substring(s + l.length))], e.length > t.length && (o[0][0] = o[2][0] = -1), o;
            if (1 == l.length) return [new n.Diff(-1, e), new n.Diff(1, t)];
            var c = this.diff_halfMatch_(e, t);
            if (c) {
                var d = c[0], u = c[1], p = c[2], f = c[3], m = c[4], h = this.diff_main(d, p, r, i),
                    v = this.diff_main(u, f, r, i);
                return h.concat([new n.Diff(0, m)], v)
            }
            return r && e.length > 100 && t.length > 100 ? this.diff_lineMode_(e, t, i) : this.diff_bisect_(e, t, i)
        }, n.prototype.diff_lineMode_ = function (e, t, r) {
            var i = this.diff_linesToChars_(e, t);
            e = i.chars1, t = i.chars2;
            var o = i.lineArray, a = this.diff_main(e, t, !1, r);
            this.diff_charsToLines_(a, o), this.diff_cleanupSemantic(a), a.push(new n.Diff(0, ""));
            for (var l = 0, s = 0, c = 0, d = "", u = ""; l < a.length;) {
                switch (a[l][0]) {
                    case 1:
                        c++, u += a[l][1];
                        break;
                    case-1:
                        s++, d += a[l][1];
                        break;
                    case 0:
                        if (s >= 1 && c >= 1) {
                            a.splice(l - s - c, s + c), l = l - s - c;
                            for (var p = this.diff_main(d, u, !1, r), f = p.length - 1; f >= 0; f--) a.splice(l, 0, p[f]);
                            l += p.length
                        }
                        c = 0, s = 0, d = "", u = ""
                }
                l++
            }
            return a.pop(), a
        }, n.prototype.diff_bisect_ = function (e, t, r) {
            for (var i = e.length, o = t.length, a = Math.ceil((i + o) / 2), l = a, s = 2 * a, c = new Array(s), d = new Array(s), u = 0; u < s; u++) c[u] = -1, d[u] = -1;
            c[l + 1] = 0, d[l + 1] = 0;
            for (var p = i - o, f = p % 2 != 0, m = 0, h = 0, v = 0, g = 0, b = 0; b < a && !((new Date).getTime() > r); b++) {
                for (var y = -b + m; y <= b - h; y += 2) {
                    for (var w = l + y, E = (C = y == -b || y != b && c[w - 1] < c[w + 1] ? c[w + 1] : c[w - 1] + 1) - y; C < i && E < o && e.charAt(C) == t.charAt(E);) C++, E++;
                    if (c[w] = C, C > i) h += 2; else if (E > o) m += 2; else if (f) {
                        if ((O = l + p - y) >= 0 && O < s && -1 != d[O]) if (C >= (S = i - d[O])) return this.diff_bisectSplit_(e, t, C, E, r)
                    }
                }
                for (var k = -b + v; k <= b - g; k += 2) {
                    for (var S, O = l + k, L = (S = k == -b || k != b && d[O - 1] < d[O + 1] ? d[O + 1] : d[O - 1] + 1) - k; S < i && L < o && e.charAt(i - S - 1) == t.charAt(o - L - 1);) S++, L++;
                    if (d[O] = S, S > i) g += 2; else if (L > o) v += 2; else if (!f) {
                        if ((w = l + p - k) >= 0 && w < s && -1 != c[w]) {
                            var C;
                            E = l + (C = c[w]) - w;
                            if (C >= (S = i - S)) return this.diff_bisectSplit_(e, t, C, E, r)
                        }
                    }
                }
            }
            return [new n.Diff(-1, e), new n.Diff(1, t)]
        }, n.prototype.diff_bisectSplit_ = function (e, t, n, r, i) {
            var o = e.substring(0, n), a = t.substring(0, r), l = e.substring(n), s = t.substring(r),
                c = this.diff_main(o, a, !1, i), d = this.diff_main(l, s, !1, i);
            return c.concat(d)
        }, n.prototype.diff_linesToChars_ = function (e, t) {
            var n = [], r = {};

            function i(e) {
                for (var t = "", i = 0, a = -1, l = n.length; a < e.length - 1;) {
                    -1 == (a = e.indexOf("\n", i)) && (a = e.length - 1);
                    var s = e.substring(i, a + 1);
                    (r.hasOwnProperty ? r.hasOwnProperty(s) : void 0 !== r[s]) ? t += String.fromCharCode(r[s]) : (l == o && (s = e.substring(i), a = e.length), t += String.fromCharCode(l), r[s] = l, n[l++] = s), i = a + 1
                }
                return t
            }

            n[0] = "";
            var o = 4e4, a = i(e);
            return o = 65535, {chars1: a, chars2: i(t), lineArray: n}
        }, n.prototype.diff_charsToLines_ = function (e, t) {
            for (var n = 0; n < e.length; n++) {
                for (var r = e[n][1], i = [], o = 0; o < r.length; o++) i[o] = t[r.charCodeAt(o)];
                e[n][1] = i.join("")
            }
        }, n.prototype.diff_commonPrefix = function (e, t) {
            if (!e || !t || e.charAt(0) != t.charAt(0)) return 0;
            for (var n = 0, r = Math.min(e.length, t.length), i = r, o = 0; n < i;) e.substring(o, i) == t.substring(o, i) ? o = n = i : r = i, i = Math.floor((r - n) / 2 + n);
            return i
        }, n.prototype.diff_commonSuffix = function (e, t) {
            if (!e || !t || e.charAt(e.length - 1) != t.charAt(t.length - 1)) return 0;
            for (var n = 0, r = Math.min(e.length, t.length), i = r, o = 0; n < i;) e.substring(e.length - i, e.length - o) == t.substring(t.length - i, t.length - o) ? o = n = i : r = i, i = Math.floor((r - n) / 2 + n);
            return i
        }, n.prototype.diff_commonOverlap_ = function (e, t) {
            var n = e.length, r = t.length;
            if (0 == n || 0 == r) return 0;
            n > r ? e = e.substring(n - r) : n < r && (t = t.substring(0, n));
            var i = Math.min(n, r);
            if (e == t) return i;
            for (var o = 0, a = 1; ;) {
                var l = e.substring(i - a), s = t.indexOf(l);
                if (-1 == s) return o;
                a += s, 0 != s && e.substring(i - a) != t.substring(0, a) || (o = a, a++)
            }
        }, n.prototype.diff_halfMatch_ = function (e, t) {
            if (this.Diff_Timeout <= 0) return null;
            var n = e.length > t.length ? e : t, r = e.length > t.length ? t : e;
            if (n.length < 4 || 2 * r.length < n.length) return null;
            var i = this;

            function o(e, t, n) {
                for (var r, o, a, l, s = e.substring(n, n + Math.floor(e.length / 4)), c = -1, d = ""; -1 != (c = t.indexOf(s, c + 1));) {
                    var u = i.diff_commonPrefix(e.substring(n), t.substring(c)),
                        p = i.diff_commonSuffix(e.substring(0, n), t.substring(0, c));
                    d.length < p + u && (d = t.substring(c - p, c) + t.substring(c, c + u), r = e.substring(0, n - p), o = e.substring(n + u), a = t.substring(0, c - p), l = t.substring(c + u))
                }
                return 2 * d.length >= e.length ? [r, o, a, l, d] : null
            }

            var a, l, s, c, d, u = o(n, r, Math.ceil(n.length / 4)), p = o(n, r, Math.ceil(n.length / 2));
            return u || p ? (a = p ? u && u[4].length > p[4].length ? u : p : u, e.length > t.length ? (l = a[0], s = a[1], c = a[2], d = a[3]) : (c = a[0], d = a[1], l = a[2], s = a[3]), [l, s, c, d, a[4]]) : null
        }, n.prototype.diff_cleanupSemantic = function (e) {
            for (var t = !1, r = [], i = 0, o = null, a = 0, l = 0, s = 0, c = 0, d = 0; a < e.length;) 0 == e[a][0] ? (r[i++] = a, l = c, s = d, c = 0, d = 0, o = e[a][1]) : (1 == e[a][0] ? c += e[a][1].length : d += e[a][1].length, o && o.length <= Math.max(l, s) && o.length <= Math.max(c, d) && (e.splice(r[i - 1], 0, new n.Diff(-1, o)), e[r[i - 1] + 1][0] = 1, i--, a = --i > 0 ? r[i - 1] : -1, l = 0, s = 0, c = 0, d = 0, o = null, t = !0)), a++;
            for (t && this.diff_cleanupMerge(e), this.diff_cleanupSemanticLossless(e), a = 1; a < e.length;) {
                if (-1 == e[a - 1][0] && 1 == e[a][0]) {
                    var u = e[a - 1][1], p = e[a][1], f = this.diff_commonOverlap_(u, p),
                        m = this.diff_commonOverlap_(p, u);
                    f >= m ? (f >= u.length / 2 || f >= p.length / 2) && (e.splice(a, 0, new n.Diff(0, p.substring(0, f))), e[a - 1][1] = u.substring(0, u.length - f), e[a + 1][1] = p.substring(f), a++) : (m >= u.length / 2 || m >= p.length / 2) && (e.splice(a, 0, new n.Diff(0, u.substring(0, m))), e[a - 1][0] = 1, e[a - 1][1] = p.substring(0, p.length - m), e[a + 1][0] = -1, e[a + 1][1] = u.substring(m), a++), a++
                }
                a++
            }
        }, n.prototype.diff_cleanupSemanticLossless = function (e) {
            function t(e, t) {
                if (!e || !t) return 6;
                var r = e.charAt(e.length - 1), i = t.charAt(0), o = r.match(n.nonAlphaNumericRegex_),
                    a = i.match(n.nonAlphaNumericRegex_), l = o && r.match(n.whitespaceRegex_),
                    s = a && i.match(n.whitespaceRegex_), c = l && r.match(n.linebreakRegex_),
                    d = s && i.match(n.linebreakRegex_), u = c && e.match(n.blanklineEndRegex_),
                    p = d && t.match(n.blanklineStartRegex_);
                return u || p ? 5 : c || d ? 4 : o && !l && s ? 3 : l || s ? 2 : o || a ? 1 : 0
            }

            for (var r = 1; r < e.length - 1;) {
                if (0 == e[r - 1][0] && 0 == e[r + 1][0]) {
                    var i = e[r - 1][1], o = e[r][1], a = e[r + 1][1], l = this.diff_commonSuffix(i, o);
                    if (l) {
                        var s = o.substring(o.length - l);
                        i = i.substring(0, i.length - l), o = s + o.substring(0, o.length - l), a = s + a
                    }
                    for (var c = i, d = o, u = a, p = t(i, o) + t(o, a); o.charAt(0) === a.charAt(0);) {
                        i += o.charAt(0), o = o.substring(1) + a.charAt(0), a = a.substring(1);
                        var f = t(i, o) + t(o, a);
                        f >= p && (p = f, c = i, d = o, u = a)
                    }
                    e[r - 1][1] != c && (c ? e[r - 1][1] = c : (e.splice(r - 1, 1), r--), e[r][1] = d, u ? e[r + 1][1] = u : (e.splice(r + 1, 1), r--))
                }
                r++
            }
        }, n.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/, n.whitespaceRegex_ = /\s/, n.linebreakRegex_ = /[\r\n]/, n.blanklineEndRegex_ = /\n\r?\n$/, n.blanklineStartRegex_ = /^\r?\n\r?\n/, n.prototype.diff_cleanupEfficiency = function (e) {
            for (var t = !1, r = [], i = 0, o = null, a = 0, l = !1, s = !1, c = !1, d = !1; a < e.length;) 0 == e[a][0] ? (e[a][1].length < this.Diff_EditCost && (c || d) ? (r[i++] = a, l = c, s = d, o = e[a][1]) : (i = 0, o = null), c = d = !1) : (-1 == e[a][0] ? d = !0 : c = !0, o && (l && s && c && d || o.length < this.Diff_EditCost / 2 && l + s + c + d == 3) && (e.splice(r[i - 1], 0, new n.Diff(-1, o)), e[r[i - 1] + 1][0] = 1, i--, o = null, l && s ? (c = d = !0, i = 0) : (a = --i > 0 ? r[i - 1] : -1, c = d = !1), t = !0)), a++;
            t && this.diff_cleanupMerge(e)
        }, n.prototype.diff_cleanupMerge = function (e) {
            e.push(new n.Diff(0, ""));
            for (var t, r = 0, i = 0, o = 0, a = "", l = ""; r < e.length;) switch (e[r][0]) {
                case 1:
                    o++, l += e[r][1], r++;
                    break;
                case-1:
                    i++, a += e[r][1], r++;
                    break;
                case 0:
                    i + o > 1 ? (0 !== i && 0 !== o && (0 !== (t = this.diff_commonPrefix(l, a)) && (r - i - o > 0 && 0 == e[r - i - o - 1][0] ? e[r - i - o - 1][1] += l.substring(0, t) : (e.splice(0, 0, new n.Diff(0, l.substring(0, t))), r++), l = l.substring(t), a = a.substring(t)), 0 !== (t = this.diff_commonSuffix(l, a)) && (e[r][1] = l.substring(l.length - t) + e[r][1], l = l.substring(0, l.length - t), a = a.substring(0, a.length - t))), r -= i + o, e.splice(r, i + o), a.length && (e.splice(r, 0, new n.Diff(-1, a)), r++), l.length && (e.splice(r, 0, new n.Diff(1, l)), r++), r++) : 0 !== r && 0 == e[r - 1][0] ? (e[r - 1][1] += e[r][1], e.splice(r, 1)) : r++, o = 0, i = 0, a = "", l = ""
            }
            "" === e[e.length - 1][1] && e.pop();
            var s = !1;
            for (r = 1; r < e.length - 1;) 0 == e[r - 1][0] && 0 == e[r + 1][0] && (e[r][1].substring(e[r][1].length - e[r - 1][1].length) == e[r - 1][1] ? (e[r][1] = e[r - 1][1] + e[r][1].substring(0, e[r][1].length - e[r - 1][1].length), e[r + 1][1] = e[r - 1][1] + e[r + 1][1], e.splice(r - 1, 1), s = !0) : e[r][1].substring(0, e[r + 1][1].length) == e[r + 1][1] && (e[r - 1][1] += e[r + 1][1], e[r][1] = e[r][1].substring(e[r + 1][1].length) + e[r + 1][1], e.splice(r + 1, 1), s = !0)), r++;
            s && this.diff_cleanupMerge(e)
        }, n.prototype.diff_xIndex = function (e, t) {
            var n, r = 0, i = 0, o = 0, a = 0;
            for (n = 0; n < e.length && (1 !== e[n][0] && (r += e[n][1].length), -1 !== e[n][0] && (i += e[n][1].length), !(r > t)); n++) o = r, a = i;
            return e.length != n && -1 === e[n][0] ? a : a + (t - o)
        }, n.prototype.diff_prettyHtml = function (e) {
            for (var t = [], n = /&/g, r = /</g, i = />/g, o = /\n/g, a = 0; a < e.length; a++) {
                var l = e[a][0],
                    s = e[a][1].replace(n, "&amp;").replace(r, "&lt;").replace(i, "&gt;").replace(o, "&para;<br>");
                switch (l) {
                    case 1:
                        t[a] = '<ins style="background:#e6ffe6;">' + s + "</ins>";
                        break;
                    case-1:
                        t[a] = '<del style="background:#ffe6e6;">' + s + "</del>";
                        break;
                    case 0:
                        t[a] = "<span>" + s + "</span>"
                }
            }
            return t.join("")
        }, n.prototype.diff_text1 = function (e) {
            for (var t = [], n = 0; n < e.length; n++) 1 !== e[n][0] && (t[n] = e[n][1]);
            return t.join("")
        }, n.prototype.diff_text2 = function (e) {
            for (var t = [], n = 0; n < e.length; n++) -1 !== e[n][0] && (t[n] = e[n][1]);
            return t.join("")
        }, n.prototype.diff_levenshtein = function (e) {
            for (var t = 0, n = 0, r = 0, i = 0; i < e.length; i++) {
                var o = e[i][0], a = e[i][1];
                switch (o) {
                    case 1:
                        n += a.length;
                        break;
                    case-1:
                        r += a.length;
                        break;
                    case 0:
                        t += Math.max(n, r), n = 0, r = 0
                }
            }
            return t += Math.max(n, r)
        }, n.prototype.diff_toDelta = function (e) {
            for (var t = [], n = 0; n < e.length; n++) switch (e[n][0]) {
                case 1:
                    t[n] = "+" + encodeURI(e[n][1]);
                    break;
                case-1:
                    t[n] = "-" + e[n][1].length;
                    break;
                case 0:
                    t[n] = "=" + e[n][1].length
            }
            return t.join("\t").replace(/%20/g, " ")
        }, n.prototype.diff_fromDelta = function (e, t) {
            for (var r = [], i = 0, o = 0, a = t.split(/\t/g), l = 0; l < a.length; l++) {
                var s = a[l].substring(1);
                switch (a[l].charAt(0)) {
                    case"+":
                        try {
                            r[i++] = new n.Diff(1, decodeURI(s))
                        } catch (e) {
                            throw new Error("Illegal escape in diff_fromDelta: " + s)
                        }
                        break;
                    case"-":
                    case"=":
                        var c = parseInt(s, 10);
                        if (isNaN(c) || c < 0) throw new Error("Invalid number in diff_fromDelta: " + s);
                        var d = e.substring(o, o += c);
                        "=" == a[l].charAt(0) ? r[i++] = new n.Diff(0, d) : r[i++] = new n.Diff(-1, d);
                        break;
                    default:
                        if (a[l]) throw new Error("Invalid diff operation in diff_fromDelta: " + a[l])
                }
            }
            if (o != e.length) throw new Error("Delta length (" + o + ") does not equal source text length (" + e.length + ").");
            return r
        }, n.prototype.match_main = function (e, t, n) {
            if (null == e || null == t || null == n) throw new Error("Null input. (match_main)");
            return n = Math.max(0, Math.min(n, e.length)), e == t ? 0 : e.length ? e.substring(n, n + t.length) == t ? n : this.match_bitap_(e, t, n) : -1
        }, n.prototype.match_bitap_ = function (e, t, n) {
            if (t.length > this.Match_MaxBits) throw new Error("Pattern too long for this browser.");
            var r = this.match_alphabet_(t), i = this;

            function o(e, r) {
                var o = e / t.length, a = Math.abs(n - r);
                return i.Match_Distance ? o + a / i.Match_Distance : a ? 1 : o
            }

            var a = this.Match_Threshold, l = e.indexOf(t, n);
            -1 != l && (a = Math.min(o(0, l), a), -1 != (l = e.lastIndexOf(t, n + t.length)) && (a = Math.min(o(0, l), a)));
            var s, c, d = 1 << t.length - 1;
            l = -1;
            for (var u, p = t.length + e.length, f = 0; f < t.length; f++) {
                for (s = 0, c = p; s < c;) o(f, n + c) <= a ? s = c : p = c, c = Math.floor((p - s) / 2 + s);
                p = c;
                var m = Math.max(1, n - c + 1), h = Math.min(n + c, e.length) + t.length, v = Array(h + 2);
                v[h + 1] = (1 << f) - 1;
                for (var g = h; g >= m; g--) {
                    var b = r[e.charAt(g - 1)];
                    if (v[g] = 0 === f ? (v[g + 1] << 1 | 1) & b : (v[g + 1] << 1 | 1) & b | (u[g + 1] | u[g]) << 1 | 1 | u[g + 1], v[g] & d) {
                        var y = o(f, g - 1);
                        if (y <= a) {
                            if (a = y, !((l = g - 1) > n)) break;
                            m = Math.max(1, 2 * n - l)
                        }
                    }
                }
                if (o(f + 1, n) > a) break;
                u = v
            }
            return l
        }, n.prototype.match_alphabet_ = function (e) {
            for (var t = {}, n = 0; n < e.length; n++) t[e.charAt(n)] = 0;
            for (n = 0; n < e.length; n++) t[e.charAt(n)] |= 1 << e.length - n - 1;
            return t
        }, n.prototype.patch_addContext_ = function (e, t) {
            if (0 != t.length) {
                if (null === e.start2) throw Error("patch not initialized");
                for (var r = t.substring(e.start2, e.start2 + e.length1), i = 0; t.indexOf(r) != t.lastIndexOf(r) && r.length < this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin;) i += this.Patch_Margin, r = t.substring(e.start2 - i, e.start2 + e.length1 + i);
                i += this.Patch_Margin;
                var o = t.substring(e.start2 - i, e.start2);
                o && e.diffs.unshift(new n.Diff(0, o));
                var a = t.substring(e.start2 + e.length1, e.start2 + e.length1 + i);
                a && e.diffs.push(new n.Diff(0, a)), e.start1 -= o.length, e.start2 -= o.length, e.length1 += o.length + a.length, e.length2 += o.length + a.length
            }
        }, n.prototype.patch_make = function (e, t, r) {
            var i, o;
            if ("string" == typeof e && "string" == typeof t && void 0 === r) i = e, (o = this.diff_main(i, t, !0)).length > 2 && (this.diff_cleanupSemantic(o), this.diff_cleanupEfficiency(o)); else if (e && "object" == typeof e && void 0 === t && void 0 === r) o = e, i = this.diff_text1(o); else if ("string" == typeof e && t && "object" == typeof t && void 0 === r) i = e, o = t; else {
                if ("string" != typeof e || "string" != typeof t || !r || "object" != typeof r) throw new Error("Unknown call format to patch_make.");
                i = e, o = r
            }
            if (0 === o.length) return [];
            for (var a = [], l = new n.patch_obj, s = 0, c = 0, d = 0, u = i, p = i, f = 0; f < o.length; f++) {
                var m = o[f][0], h = o[f][1];
                switch (s || 0 === m || (l.start1 = c, l.start2 = d), m) {
                    case 1:
                        l.diffs[s++] = o[f], l.length2 += h.length, p = p.substring(0, d) + h + p.substring(d);
                        break;
                    case-1:
                        l.length1 += h.length, l.diffs[s++] = o[f], p = p.substring(0, d) + p.substring(d + h.length);
                        break;
                    case 0:
                        h.length <= 2 * this.Patch_Margin && s && o.length != f + 1 ? (l.diffs[s++] = o[f], l.length1 += h.length, l.length2 += h.length) : h.length >= 2 * this.Patch_Margin && s && (this.patch_addContext_(l, u), a.push(l), l = new n.patch_obj, s = 0, u = p, c = d)
                }
                1 !== m && (c += h.length), -1 !== m && (d += h.length)
            }
            return s && (this.patch_addContext_(l, u), a.push(l)), a
        }, n.prototype.patch_deepCopy = function (e) {
            for (var t = [], r = 0; r < e.length; r++) {
                var i = e[r], o = new n.patch_obj;
                o.diffs = [];
                for (var a = 0; a < i.diffs.length; a++) o.diffs[a] = new n.Diff(i.diffs[a][0], i.diffs[a][1]);
                o.start1 = i.start1, o.start2 = i.start2, o.length1 = i.length1, o.length2 = i.length2, t[r] = o
            }
            return t
        }, n.prototype.patch_apply = function (e, t) {
            if (0 == e.length) return [t, []];
            e = this.patch_deepCopy(e);
            var n = this.patch_addPadding(e);
            t = n + t + n, this.patch_splitMax(e);
            for (var r = 0, i = [], o = 0; o < e.length; o++) {
                var a, l, s = e[o].start2 + r, c = this.diff_text1(e[o].diffs), d = -1;
                if (c.length > this.Match_MaxBits ? -1 != (a = this.match_main(t, c.substring(0, this.Match_MaxBits), s)) && (-1 == (d = this.match_main(t, c.substring(c.length - this.Match_MaxBits), s + c.length - this.Match_MaxBits)) || a >= d) && (a = -1) : a = this.match_main(t, c, s), -1 == a) i[o] = !1, r -= e[o].length2 - e[o].length1; else if (i[o] = !0, r = a - s, c == (l = -1 == d ? t.substring(a, a + c.length) : t.substring(a, d + this.Match_MaxBits))) t = t.substring(0, a) + this.diff_text2(e[o].diffs) + t.substring(a + c.length); else {
                    var u = this.diff_main(c, l, !1);
                    if (c.length > this.Match_MaxBits && this.diff_levenshtein(u) / c.length > this.Patch_DeleteThreshold) i[o] = !1; else {
                        this.diff_cleanupSemanticLossless(u);
                        for (var p, f = 0, m = 0; m < e[o].diffs.length; m++) {
                            var h = e[o].diffs[m];
                            0 !== h[0] && (p = this.diff_xIndex(u, f)), 1 === h[0] ? t = t.substring(0, a + p) + h[1] + t.substring(a + p) : -1 === h[0] && (t = t.substring(0, a + p) + t.substring(a + this.diff_xIndex(u, f + h[1].length))), -1 !== h[0] && (f += h[1].length)
                        }
                    }
                }
            }
            return [t = t.substring(n.length, t.length - n.length), i]
        }, n.prototype.patch_addPadding = function (e) {
            for (var t = this.Patch_Margin, r = "", i = 1; i <= t; i++) r += String.fromCharCode(i);
            for (i = 0; i < e.length; i++) e[i].start1 += t, e[i].start2 += t;
            var o = e[0], a = o.diffs;
            if (0 == a.length || 0 != a[0][0]) a.unshift(new n.Diff(0, r)), o.start1 -= t, o.start2 -= t, o.length1 += t, o.length2 += t; else if (t > a[0][1].length) {
                var l = t - a[0][1].length;
                a[0][1] = r.substring(a[0][1].length) + a[0][1], o.start1 -= l, o.start2 -= l, o.length1 += l, o.length2 += l
            }
            if (0 == (a = (o = e[e.length - 1]).diffs).length || 0 != a[a.length - 1][0]) a.push(new n.Diff(0, r)), o.length1 += t, o.length2 += t; else if (t > a[a.length - 1][1].length) {
                l = t - a[a.length - 1][1].length;
                a[a.length - 1][1] += r.substring(0, l), o.length1 += l, o.length2 += l
            }
            return r
        }, n.prototype.patch_splitMax = function (e) {
            for (var t = this.Match_MaxBits, r = 0; r < e.length; r++) if (!(e[r].length1 <= t)) {
                var i = e[r];
                e.splice(r--, 1);
                for (var o = i.start1, a = i.start2, l = ""; 0 !== i.diffs.length;) {
                    var s = new n.patch_obj, c = !0;
                    for (s.start1 = o - l.length, s.start2 = a - l.length, "" !== l && (s.length1 = s.length2 = l.length, s.diffs.push(new n.Diff(0, l))); 0 !== i.diffs.length && s.length1 < t - this.Patch_Margin;) {
                        var d = i.diffs[0][0], u = i.diffs[0][1];
                        1 === d ? (s.length2 += u.length, a += u.length, s.diffs.push(i.diffs.shift()), c = !1) : -1 === d && 1 == s.diffs.length && 0 == s.diffs[0][0] && u.length > 2 * t ? (s.length1 += u.length, o += u.length, c = !1, s.diffs.push(new n.Diff(d, u)), i.diffs.shift()) : (u = u.substring(0, t - s.length1 - this.Patch_Margin), s.length1 += u.length, o += u.length, 0 === d ? (s.length2 += u.length, a += u.length) : c = !1, s.diffs.push(new n.Diff(d, u)), u == i.diffs[0][1] ? i.diffs.shift() : i.diffs[0][1] = i.diffs[0][1].substring(u.length))
                    }
                    l = (l = this.diff_text2(s.diffs)).substring(l.length - this.Patch_Margin);
                    var p = this.diff_text1(i.diffs).substring(0, this.Patch_Margin);
                    "" !== p && (s.length1 += p.length, s.length2 += p.length, 0 !== s.diffs.length && 0 === s.diffs[s.diffs.length - 1][0] ? s.diffs[s.diffs.length - 1][1] += p : s.diffs.push(new n.Diff(0, p))), c || e.splice(++r, 0, s)
                }
            }
        }, n.prototype.patch_toText = function (e) {
            for (var t = [], n = 0; n < e.length; n++) t[n] = e[n];
            return t.join("")
        }, n.prototype.patch_fromText = function (e) {
            var t = [];
            if (!e) return t;
            for (var r = e.split("\n"), i = 0, o = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/; i < r.length;) {
                var a = r[i].match(o);
                if (!a) throw new Error("Invalid patch string: " + r[i]);
                var l = new n.patch_obj;
                for (t.push(l), l.start1 = parseInt(a[1], 10), "" === a[2] ? (l.start1--, l.length1 = 1) : "0" == a[2] ? l.length1 = 0 : (l.start1--, l.length1 = parseInt(a[2], 10)), l.start2 = parseInt(a[3], 10), "" === a[4] ? (l.start2--, l.length2 = 1) : "0" == a[4] ? l.length2 = 0 : (l.start2--, l.length2 = parseInt(a[4], 10)), i++; i < r.length;) {
                    var s = r[i].charAt(0);
                    try {
                        var c = decodeURI(r[i].substring(1))
                    } catch (e) {
                        throw new Error("Illegal escape in patch_fromText: " + c)
                    }
                    if ("-" == s) l.diffs.push(new n.Diff(-1, c)); else if ("+" == s) l.diffs.push(new n.Diff(1, c)); else if (" " == s) l.diffs.push(new n.Diff(0, c)); else {
                        if ("@" == s) break;
                        if ("" !== s) throw new Error('Invalid patch mode "' + s + '" in: ' + c)
                    }
                    i++
                }
            }
            return t
        }, (n.patch_obj = function () {
            this.diffs = [], this.start1 = null, this.start2 = null, this.length1 = 0, this.length2 = 0
        }).prototype.toString = function () {
            for (var e, t = ["@@ -" + (0 === this.length1 ? this.start1 + ",0" : 1 == this.length1 ? this.start1 + 1 : this.start1 + 1 + "," + this.length1) + " +" + (0 === this.length2 ? this.start2 + ",0" : 1 == this.length2 ? this.start2 + 1 : this.start2 + 1 + "," + this.length2) + " @@\n"], n = 0; n < this.diffs.length; n++) {
                switch (this.diffs[n][0]) {
                    case 1:
                        e = "+";
                        break;
                    case-1:
                        e = "-";
                        break;
                    case 0:
                        e = " "
                }
                t[n + 1] = e + encodeURI(this.diffs[n][1]) + "\n"
            }
            return t.join("").replace(/%20/g, " ")
        }, e.exports = n, e.exports.diff_match_patch = n, e.exports.DIFF_DELETE = -1, e.exports.DIFF_INSERT = 1, e.exports.DIFF_EQUAL = 0
    }, function (e, t, n) {
        "use strict";
        n.r(t);
        var r, i, o = n(24), a = n(2), l = n(11), s = function (e) {
                return "sv" === e.currentMode ? Object(l.a)((e.sv.element.textContent + "\n").replace(/\n\n$/, "\n")) : "wysiwyg" === e.currentMode ? e.lute.VditorDOM2Md(e.wysiwyg.element.innerHTML) : "ir" === e.currentMode ? e.lute.VditorIRDOM2Md(e.ir.element.innerHTML) : ""
            }, c = n(5), d = function () {
                function e() {
                    this.element = document.createElement("div"), this.element.className = "vditor-devtools", this.element.innerHTML = '<div class="vditor-reset--error"></div><div style="height: 100%;"></div>'
                }

                return e.prototype.renderEchart = function (e) {
                    var t = this;
                    "block" === e.devtools.element.style.display && Object(c.a)(e.options.cdn + "/dist/js/echarts/echarts.min.js", "vditorEchartsScript").then((function () {
                        t.ASTChart || (t.ASTChart = echarts.init(e.devtools.element.lastElementChild));
                        try {
                            t.element.lastElementChild.style.display = "block", t.element.firstElementChild.innerHTML = "", t.ASTChart.setOption({
                                series: [{
                                    data: JSON.parse(e.lute.RenderEChartsJSON(s(e))),
                                    initialTreeDepth: -1,
                                    label: {
                                        align: "left",
                                        backgroundColor: "rgba(68, 77, 86, .68)",
                                        borderRadius: 3,
                                        color: "#d1d5da",
                                        fontSize: 12,
                                        lineHeight: 12,
                                        offset: [9, 12],
                                        padding: [2, 4, 2, 4],
                                        position: "top",
                                        verticalAlign: "middle"
                                    },
                                    lineStyle: {color: "#4285f4", type: "curve", width: 1},
                                    orient: "vertical",
                                    roam: !0,
                                    type: "tree"
                                }],
                                toolbox: {
                                    bottom: 25,
                                    emphasis: {iconStyle: {color: "#4285f4"}},
                                    feature: {restore: {show: !0}, saveAsImage: {show: !0}},
                                    right: 15,
                                    show: !0
                                }
                            }), t.ASTChart.resize()
                        } catch (e) {
                            t.element.lastElementChild.style.display = "none", t.element.firstElementChild.innerHTML = e
                        }
                    }))
                }, e
            }(), u = n(3), p = function (e, t) {
                t.forEach((function (t) {
                    if (e[t]) {
                        var n = e[t].children[0];
                        n && n.classList.contains("vditor-menu--current") && n.classList.remove("vditor-menu--current")
                    }
                }))
            }, f = function (e, t) {
                t.forEach((function (t) {
                    if (e[t]) {
                        var n = e[t].children[0];
                        n && !n.classList.contains("vditor-menu--current") && n.classList.add("vditor-menu--current")
                    }
                }))
            }, m = function (e, t) {
                t.forEach((function (t) {
                    if (e[t]) {
                        var n = e[t].children[0];
                        n && n.classList.contains(a.a.CLASS_MENU_DISABLED) && n.classList.remove(a.a.CLASS_MENU_DISABLED)
                    }
                }))
            }, h = function (e, t) {
                t.forEach((function (t) {
                    if (e[t]) {
                        var n = e[t].children[0];
                        n && !n.classList.contains(a.a.CLASS_MENU_DISABLED) && n.classList.add(a.a.CLASS_MENU_DISABLED)
                    }
                }))
            }, v = function (e, t) {
                t.forEach((function (t) {
                    e[t] && e[t] && (e[t].style.display = "none")
                }))
            }, g = function (e, t) {
                t.forEach((function (t) {
                    e[t] && e[t] && (e[t].style.display = "block")
                }))
            }, b = function (e, t, n) {
                t.includes("subToolbar") && (e.toolbar.element.querySelectorAll(".vditor-hint").forEach((function (e) {
                    n && e.isEqualNode(n) || (e.style.display = "none")
                })), e.toolbar.elements.emoji && (e.toolbar.elements.emoji.lastElementChild.style.display = "none")), t.includes("hint") && (e.hint.element.style.display = "none"), e.wysiwyg.popover && t.includes("popover") && (e.wysiwyg.popover.style.display = "none")
            }, y = function (e, t, n, r) {
                n.addEventListener(Object(u.b)(), (function (r) {
                    r.preventDefault(), r.stopPropagation(), n.classList.contains(a.a.CLASS_MENU_DISABLED) || (e.toolbar.element.querySelectorAll(".vditor-hint--current").forEach((function (e) {
                        e.classList.remove("vditor-hint--current")
                    })), "block" === t.style.display ? t.style.display = "none" : (b(e, ["subToolbar", "hint", "popover"], n.parentElement.parentElement), n.classList.contains("vditor-tooltipped") || n.classList.add("vditor-hint--current"), t.style.display = "block", e.toolbar.element.getBoundingClientRect().right - n.getBoundingClientRect().right < 250 ? t.classList.add("vditor-panel--left") : t.classList.remove("vditor-panel--left")))
                }))
            }, w = n(1), E = n(6), k = function (e, t, n, r) {
                r && console.log(e + " - " + n + ": " + t)
            }, S = n(12), O = n(8), L = n(13), C = n(14), T = n(15), M = n(16), _ = n(17), j = n(18), x = n(9),
            A = function (e, t) {
                if (e) {
                    var n = e.querySelector("code");
                    if (n) {
                        var r = n.className.replace("language-", "");
                        if ("abc" === r) Object(S.a)(e, t.options.cdn); else if ("mermaid" === r) Object(j.a)(e, t.options.cdn); else if ("flowchart" === r) Object(C.a)(e, t.options.cdn); else if ("echarts" === r) Object(O.a)(e, t.options.cdn); else if ("mindmap" === r) Object(x.a)(e, t.options.cdn); else if ("graphviz" === r) Object(T.a)(e, t.options.cdn); else if ("math" === r) {
                            var i = "div";
                            "SPAN" === e.tagName && (i = "span"), e.innerHTML = '<code class="language-math"><' + i + ' class="vditor-math">' + e.innerHTML + "</" + i + "></code>", Object(_.a)(e.parentElement, {
                                cdn: t.options.cdn,
                                math: t.options.preview.math
                            })
                        } else Object(M.a)(Object.assign({}, t.options.preview.hljs), e, t.options.cdn), Object(L.a)(e, t.options.lang);
                        e.setAttribute("data-render", "1")
                    } else "html-block" === e.parentElement.getAttribute("data-type") && (e.style.backgroundColor = "var(--preview-background-color)", e.style.padding = "0.2em 0.4em", e.setAttribute("data-render", "1"))
                }
            }, N = n(0), H = function (e, t, n, r) {
                void 0 === n && (n = !1);
                var i = Object(w.c)(t.startContainer);
                if (i && !n && "code-block" !== i.getAttribute("data-type")) {
                    if (Ge(i.innerHTML) && i.previousElementSibling || Xe(i.innerHTML)) return;
                    for (var o = Object(N.c)(i, e.ir.element, t).start, l = !0, s = o - 1; s > i.textContent.substr(0, o).lastIndexOf("\n"); s--) if (" " !== i.textContent.charAt(s) && "\t" !== i.textContent.charAt(s)) {
                        l = !1;
                        break
                    }
                    0 === o && (l = !1);
                    var c = !0;
                    for (s = o - 1; s < i.textContent.length; s++) if (" " !== i.textContent.charAt(s) && "\n" !== i.textContent.charAt(s)) {
                        c = !1;
                        break
                    }
                    if (l) return;
                    if (c) if (!Object(w.e)(t.startContainer, "vditor-ir__marker")) {
                        var d = t.startContainer.previousSibling;
                        return void (d && 3 !== d.nodeType && d.classList.contains("vditor-ir__node--expand") && d.classList.remove("vditor-ir__node--expand"))
                    }
                }
                if (e.ir.element.querySelectorAll(".vditor-ir__node--expand").forEach((function (e) {
                    e.classList.remove("vditor-ir__node--expand")
                })), i || (i = e.ir.element), !i.querySelector("wbr")) {
                    var u = Object(w.e)(t.startContainer, "vditor-ir__preview");
                    u ? u.previousElementSibling.insertAdjacentHTML("beforeend", "<wbr>") : t.insertNode(document.createElement("wbr"))
                }
                i.querySelectorAll("[style]").forEach((function (e) {
                    e.removeAttribute("style")
                })), "link-ref-defs-block" === i.getAttribute("data-type") && (i = e.ir.element);
                var p = i.isEqualNode(e.ir.element), f = Object(w.d)(i, "data-type", "footnotes-block"), m = "";
                if (p) m = i.innerHTML; else {
                    var h, v, g = Object(E.b)(t.startContainer, "BLOCKQUOTE"), b = Object(w.b)(t.startContainer);
                    if (b && (i = b), g && (!b || b && !g.contains(b)) && (i = g), f && (i = f), m = i.outerHTML, "UL" === i.tagName || "OL" === i.tagName) {
                        var y = i.previousElementSibling, S = i.nextElementSibling;
                        !y || "UL" !== y.tagName && "OL" !== y.tagName || (m = y.outerHTML + m, y.remove()), !S || "UL" !== S.tagName && "OL" !== S.tagName || (m += S.outerHTML, S.remove()), m = m.replace("<div><wbr><br></div>", "<li><p><wbr><br></p></li>")
                    } else i.previousElementSibling && "" !== i.previousElementSibling.textContent.replace(a.a.ZWSP, "") && r && "insertParagraph" === r.inputType && (m = i.previousElementSibling.outerHTML + m, i.previousElementSibling.remove());
                    (h = e.ir.element.querySelector("[data-type='link-ref-defs-block']")) && !i.isEqualNode(h) && (m += h.outerHTML, h.remove()), (v = e.ir.element.querySelector("[data-type='footnotes-block']")) && !i.isEqualNode(v) && (m += v.outerHTML, v.remove())
                }
                if (k("SpinVditorIRDOM", m, "argument", e.options.debugger), m = e.lute.SpinVditorIRDOM(m), k("SpinVditorIRDOM", m, "result", e.options.debugger), p) i.innerHTML = m; else if (i.outerHTML = m, (h = e.ir.element.querySelector("[data-type='link-ref-defs-block']")) && e.ir.element.insertAdjacentElement("beforeend", h), (v = e.ir.element.querySelector("[data-type='footnotes-block']")) && e.ir.element.insertAdjacentElement("beforeend", v), f) {
                    var O = Object(w.d)(e.ir.element.querySelector("wbr"), "data-type", "footnotes-def");
                    if (O) {
                        var L = O.textContent, C = L.substring(1, L.indexOf("]:")),
                            T = e.ir.element.querySelector('sup[data-type="footnotes-ref"][data-footnotes-label="' + C + '"]');
                        T && T.setAttribute("aria-label", L.substr(C.length + 3).trim().substr(0, 24))
                    }
                }
                Object(N.f)(e.ir.element, t), e.ir.element.querySelectorAll(".vditor-ir__preview[data-render='2']").forEach((function (t) {
                    A(t, e)
                })), Qe(e), vt(e, {enableAddUndoStack: !0, enableHint: !0, enableInput: !0})
            }, D = function (e, t) {
                var n = Object(u.g)(e).split("-"), r = n.length > 2 && ("shift" === n[1] || "⇧" === n[1]),
                    i = (r ? n[2] : n[1]) || "-";
                return !r || "-" !== i || !Object(u.e)() && /Mac/.test(navigator.platform) || (i = "_"), !(!Object(u.d)(t) || t.key.toLowerCase() !== i.toLowerCase() || t.altKey || !(!r && !t.shiftKey || r && t.shiftKey))
            }, R = function (e, t) {
                t.ir.element.querySelectorAll(".vditor-ir__node--expand").forEach((function (e) {
                    e.classList.remove("vditor-ir__node--expand")
                }));
                var n = Object(w.g)(e.startContainer, "vditor-ir__node"),
                    r = !e.collapsed && Object(w.g)(e.endContainer, "vditor-ir__node");
                if (e.collapsed || n && n === r) {
                    n && (n.classList.add("vditor-ir__node--expand"), n.classList.remove("vditor-ir__node--hidden"), Object(N.h)(e));
                    var i = function (e) {
                        var t = e.startContainer;
                        if (3 === t.nodeType && t.nodeValue.length !== e.startOffset) return !1;
                        for (var n = t.nextSibling; n && "" === n.textContent;) n = n.nextSibling;
                        if (!n) {
                            var r = Object(w.e)(t, "vditor-ir__marker");
                            if (r && !r.nextSibling) {
                                var i = t.parentElement.parentElement.nextSibling;
                                if (i && 3 !== i.nodeType && i.classList.contains("vditor-ir__node")) return i
                            }
                            return !1
                        }
                        return !(!n || 3 === n.nodeType || !n.classList.contains("vditor-ir__node") || n.getAttribute("data-block")) && n
                    }(e);
                    if (i) return i.classList.add("vditor-ir__node--expand"), void i.classList.remove("vditor-ir__node--hidden");
                    var o = function (e) {
                        var t = e.startContainer, n = t.previousSibling;
                        return !(3 !== t.nodeType || 0 !== e.startOffset || !n || 3 === n.nodeType || !n.classList.contains("vditor-ir__node") || n.getAttribute("data-block")) && n
                    }(e);
                    return o ? (o.classList.add("vditor-ir__node--expand"), void o.classList.remove("vditor-ir__node--hidden")) : void 0
                }
            }, I = function (e, t) {
                var n, r = getSelection().getRangeAt(0).cloneRange(), i = r.startContainer;
                3 !== r.startContainer.nodeType && "DIV" === r.startContainer.tagName && (i = r.startContainer.childNodes[r.startOffset - 1]);
                var o = Object(w.d)(i, "data-block", "0");
                if (o && t && ("deleteContentBackward" === t.inputType || " " === t.data)) {
                    for (var a = Object(N.c)(o, e.sv.element, r).start, l = !0, s = a - 1; s > o.textContent.substr(0, a).lastIndexOf("\n"); s--) if (" " !== o.textContent.charAt(s) && "\t" !== o.textContent.charAt(s)) {
                        l = !1;
                        break
                    }
                    if (0 === a && (l = !1), l) return void xe(e);
                    if ("deleteContentBackward" === t.inputType) {
                        var c = Object(w.d)(i, "data-type", "code-block-open-marker") || Object(w.d)(i, "data-type", "code-block-close-marker");
                        if (c) {
                            var d;
                            if ("code-block-close-marker" === c.getAttribute("data-type")) if (d = Me(i, "code-block-open-marker")) return d.textContent = c.textContent, void xe(e);
                            if ("code-block-open-marker" === c.getAttribute("data-type")) if (d = Me(i, "code-block-close-marker", !1)) return d.textContent = c.textContent, void xe(e)
                        }
                        o.querySelectorAll('[data-type="code-block-open-marker"]').forEach((function (e) {
                            1 === e.textContent.length && e.remove()
                        })), o.querySelectorAll('[data-type="code-block-close-marker"]').forEach((function (e) {
                            1 === e.textContent.length && e.remove()
                        }));
                        var u = Object(w.d)(i, "data-type", "heading-marker");
                        if (u && -1 === u.textContent.indexOf("#")) return void xe(e)
                    }
                    if ((" " === t.data || "deleteContentBackward" === t.inputType) && (Object(w.d)(i, "data-type", "padding") || Object(w.d)(i, "data-type", "li-marker") || Object(w.d)(i, "data-type", "task-marker") || Object(w.d)(i, "data-type", "blockquote-marker"))) return void xe(e)
                }
                if (o && "$$" === o.textContent.trimRight()) xe(e); else {
                    o || (o = e.sv.element), "link-ref-defs-block" === (null === (n = o.firstElementChild) || void 0 === n ? void 0 : n.getAttribute("data-type")) && (o = e.sv.element), Object(w.d)(i, "data-type", "footnotes-link") && (o = e.sv.element), -1 === o.textContent.indexOf(Lute.Caret) && r.insertNode(document.createTextNode(Lute.Caret)), o.querySelectorAll("[style]").forEach((function (e) {
                        e.removeAttribute("style")
                    })), o.querySelectorAll("font").forEach((function (e) {
                        e.outerHTML = e.innerHTML
                    }));
                    var p, f, m = o.textContent, h = o.isEqualNode(e.sv.element);
                    if (h) m = o.textContent; else o.previousElementSibling && (m = o.previousElementSibling.textContent + m, o.previousElementSibling.remove()), o.previousElementSibling && 0 === m.indexOf("---\n") && (m = o.previousElementSibling.textContent + m, o.previousElementSibling.remove()), (p = e.sv.element.querySelector("[data-type='link-ref-defs-block']")) && !o.isEqualNode(p.parentElement) && (m += p.parentElement.textContent, p.parentElement.remove()), (f = e.sv.element.querySelector("[data-type='footnotes-link']")) && !o.isEqualNode(f.parentElement) && (m += f.parentElement.textContent, f.parentElement.remove());
                    if (m = _e(m, e), h) o.innerHTML = m; else o.outerHTML = m, (p = e.sv.element.querySelector("[data-type='link-ref-defs-block']")) && e.sv.element.insertAdjacentElement("beforeend", p.parentElement), (f = e.sv.element.querySelector("[data-type='footnotes-link']")) && e.sv.element.insertAdjacentElement("beforeend", f.parentElement);
                    Object(N.f)(e.sv.element, r), Oe(e), xe(e, {enableAddUndoStack: !0, enableHint: !0, enableInput: !0})
                }
            }, P = n(4), q = n(10), B = function (e) {
                "dark" === e.options.theme ? e.element.classList.add("vditor--dark") : e.element.classList.remove("vditor--dark")
            }, U = function (e) {
                var t = window.innerWidth <= a.a.MOBILE_WIDTH ? 10 : 35;
                if ("none" !== e.wysiwyg.element.parentElement.style.display) {
                    var n = (e.wysiwyg.element.parentElement.clientWidth - e.options.preview.maxWidth) / 2;
                    e.wysiwyg.element.style.padding = "10px " + Math.max(t, n) + "px"
                }
                if ("none" !== e.ir.element.parentElement.style.display) {
                    n = (e.ir.element.parentElement.clientWidth - e.options.preview.maxWidth) / 2;
                    e.ir.element.style.padding = "10px " + Math.max(t, n) + "px"
                }
                "block" === e.preview.element.style.display && "sv" !== e.currentMode || (e.toolbar.element.style.paddingLeft = Math.max(5, parseInt(e[e.currentMode].element.style.paddingLeft || "0", 10) + e.outline.element.offsetWidth) + "px")
            }, V = function (e) {
                if (e.options.typewriterMode) {
                    var t = window.innerHeight;
                    "number" == typeof e.options.height && (t = e.options.height, "number" == typeof e.options.minHeight && (t = Math.max(t, e.options.minHeight)), t = Math.min(window.innerHeight, t)), e.element.classList.contains("vditor--fullscreen") && (t = window.innerHeight), e[e.currentMode].element.style.setProperty("--editor-bottom", (t - e.toolbar.element.offsetHeight) / 2 + "px")
                }
            }, K = function (e, t) {
                V(e), window.addEventListener("resize", (function () {
                    U(e), V(e)
                }));
                var n = Object(u.a)() && localStorage.getItem(e.options.cache.id);
                return e.options.cache.enable && n || (e.options.value ? n = e.options.value : e.originalInnerHTML ? n = e.lute.HTML2Md(e.originalInnerHTML) : e.options.cache.enable || (n = "")), n || ""
            }, W = function (e) {
                clearTimeout(e[e.currentMode].hlToolbarTimeoutId), e[e.currentMode].hlToolbarTimeoutId = window.setTimeout((function () {
                    if ("false" !== e[e.currentMode].element.getAttribute("contenteditable") && Object(N.e)(e[e.currentMode].element)) {
                        p(e.toolbar.elements, a.a.EDIT_TOOLBARS), m(e.toolbar.elements, a.a.EDIT_TOOLBARS);
                        var t = Object(N.b)(e[e.currentMode].element), n = t.startContainer;
                        3 === t.startContainer.nodeType && (n = t.startContainer.parentElement), n.classList.contains("vditor-reset") && (n = n.childNodes[t.startOffset]), ("sv" === e.currentMode ? Object(w.d)(n, "data-type", "heading") : Object(E.a)(n)) && f(e.toolbar.elements, ["headings"]), ("sv" === e.currentMode ? Object(w.d)(n, "data-type", "blockquote") : Object(w.f)(n, "BLOCKQUOTE")) && f(e.toolbar.elements, ["quote"]), Object(w.d)(n, "data-type", "strong") && f(e.toolbar.elements, ["bold"]), Object(w.d)(n, "data-type", "em") && f(e.toolbar.elements, ["italic"]), Object(w.d)(n, "data-type", "s") && f(e.toolbar.elements, ["strike"]), Object(w.d)(n, "data-type", "a") && f(e.toolbar.elements, ["link"]);
                        var r = Object(w.f)(n, "LI");
                        r ? (r.classList.contains("vditor-task") ? f(e.toolbar.elements, ["check"]) : "OL" === r.parentElement.tagName ? f(e.toolbar.elements, ["ordered-list"]) : "UL" === r.parentElement.tagName && f(e.toolbar.elements, ["list"]), m(e.toolbar.elements, ["outdent", "indent"])) : h(e.toolbar.elements, ["outdent", "indent"]), Object(w.d)(n, "data-type", "code-block") && (h(e.toolbar.elements, ["headings", "bold", "italic", "strike", "line", "quote", "list", "ordered-list", "check", "code", "inline-code", "upload", "link", "table", "record"]), f(e.toolbar.elements, ["code"])), Object(w.d)(n, "data-type", "code") && (h(e.toolbar.elements, ["headings", "bold", "italic", "strike", "line", "quote", "list", "ordered-list", "check", "code", "upload", "link", "table", "record"]), f(e.toolbar.elements, ["inline-code"])), Object(w.d)(n, "data-type", "table") && h(e.toolbar.elements, ["headings", "list", "ordered-list", "check", "line", "quote", "code", "table"])
                    }
                }), 200)
            }, F = function (e, t) {
                void 0 === t && (t = {
                    enableAddUndoStack: !0,
                    enableHint: !1,
                    enableInput: !0
                }), t.enableHint && e.hint.render(e), clearTimeout(e.wysiwyg.afterRenderTimeoutId), e.wysiwyg.afterRenderTimeoutId = window.setTimeout((function () {
                    if (!e.wysiwyg.composingLock) {
                        var n = s(e);
                        "function" == typeof e.options.input && t.enableInput && e.options.input(n), e.options.counter.enable && e.counter.render(e, n), e.options.cache.enable && Object(u.a)() && (localStorage.setItem(e.options.cache.id, n), e.options.cache.after && e.options.cache.after(n)), e.devtools && e.devtools.renderEchart(e), t.enableAddUndoStack && e.undo.addToUndoStack(e)
                    }
                }), 800)
            }, z = function (e) {
                for (var t = "", n = e.nextSibling; n;) 3 === n.nodeType ? t += n.textContent : t += n.outerHTML, n = n.nextSibling;
                return t
            }, Z = function (e) {
                for (var t = "", n = e.previousSibling; n;) t = 3 === n.nodeType ? n.textContent + t : n.outerHTML + t, n = n.previousSibling;
                return t
            }, J = function (e, t) {
                Array.from(e.wysiwyg.element.childNodes).find((function (n) {
                    if (3 === n.nodeType) {
                        var r = document.createElement("p");
                        r.setAttribute("data-block", "0"), r.textContent = n.textContent;
                        var i = 3 === t.startContainer.nodeType ? t.startOffset : n.textContent.length;
                        return n.parentNode.insertBefore(r, n), n.remove(), t.setStart(r.firstChild, Math.min(r.firstChild.textContent.length, i)), t.collapse(!0), Object(N.h)(t), !0
                    }
                    if (!n.getAttribute("data-block")) return "P" === n.tagName ? n.remove() : ("DIV" === n.tagName ? (t.insertNode(document.createElement("wbr")), n.outerHTML = '<p data-block="0">' + n.innerHTML + "</p>") : "BR" === n.tagName ? n.outerHTML = '<p data-block="0">' + n.outerHTML + "<wbr></p>" : (t.insertNode(document.createElement("wbr")), n.outerHTML = '<p data-block="0">' + n.outerHTML + "</p>"), Object(N.f)(e.wysiwyg.element, t), t = getSelection().getRangeAt(0)), !0
                }))
            }, G = function (e, t) {
                var n = Object(N.b)(e.wysiwyg.element), r = Object(w.c)(n.startContainer);
                r || (r = n.startContainer.childNodes[n.startOffset]), r || 0 !== e.wysiwyg.element.children.length || (r = e.wysiwyg.element), r && !r.classList.contains("vditor-wysiwyg__block") && (n.insertNode(document.createElement("wbr")), "<wbr>" === r.innerHTML.trim() && (r.innerHTML = "<wbr><br>"), "BLOCKQUOTE" === r.tagName || r.classList.contains("vditor-reset") ? r.innerHTML = "<" + t + ' data-block="0">' + r.innerHTML.trim() + "</" + t + ">" : r.outerHTML = "<" + t + ' data-block="0">' + r.innerHTML.trim() + "</" + t + ">", Object(N.f)(e.wysiwyg.element, n), Qe(e))
            }, X = function (e) {
                var t = getSelection().getRangeAt(0), n = Object(w.c)(t.startContainer);
                n || (n = t.startContainer.childNodes[t.startOffset]), n && (t.insertNode(document.createElement("wbr")), n.outerHTML = '<p data-block="0">' + n.innerHTML + "</p>", Object(N.f)(e.wysiwyg.element, t)), e.wysiwyg.popover.style.display = "none"
            }, $ = function (e, t, n) {
                void 0 === n && (n = !0);
                var r = e.previousElementSibling, i = r.ownerDocument.createRange();
                "CODE" === r.tagName ? (r.style.display = "inline-block", n ? i.setStart(r.firstChild, 1) : i.selectNodeContents(r)) : (r.style.display = "block", r.firstChild.firstChild || r.firstChild.appendChild(document.createTextNode("")), i.selectNodeContents(r.firstChild)), n ? i.collapse(!0) : i.collapse(!1), Object(N.h)(i), e.firstElementChild.classList.contains("language-mindmap") || Oe(t)
            }, Q = function (e, t) {
                if (D("⌘-⇧-X", t)) {
                    var n = e.wysiwyg.popover.querySelector('[data-type="remove"]');
                    if (n) return n.click(), t.preventDefault(), !0
                }
            }, Y = function (e) {
                clearTimeout(e.wysiwyg.hlToolbarTimeoutId), e.wysiwyg.hlToolbarTimeoutId = window.setTimeout((function () {
                    var t;
                    if ("false" !== e.wysiwyg.element.getAttribute("contenteditable") && Object(N.e)(e.wysiwyg.element)) {
                        p(e.toolbar.elements, a.a.EDIT_TOOLBARS), m(e.toolbar.elements, a.a.EDIT_TOOLBARS);
                        var n = getSelection().getRangeAt(0), r = n.startContainer;
                        r = 3 === n.startContainer.nodeType ? n.startContainer.parentElement : r.childNodes[n.startOffset >= r.childNodes.length ? r.childNodes.length - 1 : n.startOffset];
                        var i = Object(w.d)(r, "data-type", "footnotes-block");
                        if (i) return e.wysiwyg.popover.innerHTML = "", ie(i, e), void ee(e, i);
                        var o = Object(w.f)(r, "LI");
                        o ? (o.classList.contains("vditor-task") ? f(e.toolbar.elements, ["check"]) : "OL" === o.parentElement.tagName ? f(e.toolbar.elements, ["ordered-list"]) : "UL" === o.parentElement.tagName && f(e.toolbar.elements, ["list"]), m(e.toolbar.elements, ["outdent", "indent"])) : h(e.toolbar.elements, ["outdent", "indent"]), Object(w.f)(r, "BLOCKQUOTE") && f(e.toolbar.elements, ["quote"]), (Object(w.f)(r, "B") || Object(w.f)(r, "STRONG")) && f(e.toolbar.elements, ["bold"]), (Object(w.f)(r, "I") || Object(w.f)(r, "EM")) && f(e.toolbar.elements, ["italic"]), (Object(w.f)(r, "STRIKE") || Object(w.f)(r, "S")) && f(e.toolbar.elements, ["strike"]);
                        var l = Object(w.f)(r, "A");
                        l && f(e.toolbar.elements, ["link"]);
                        var s = Object(w.f)(r, "TABLE"), c = Object(E.a)(r);
                        Object(w.f)(r, "CODE") ? Object(w.f)(r, "PRE") ? (h(e.toolbar.elements, ["headings", "bold", "italic", "strike", "line", "quote", "list", "ordered-list", "check", "code", "inline-code", "upload", "link", "table", "record"]), f(e.toolbar.elements, ["code"])) : (h(e.toolbar.elements, ["headings", "bold", "italic", "strike", "line", "quote", "list", "ordered-list", "check", "code", "upload", "link", "table", "record"]), f(e.toolbar.elements, ["inline-code"])) : c ? (h(e.toolbar.elements, ["bold"]), f(e.toolbar.elements, ["headings"])) : s && h(e.toolbar.elements, ["table"]);
                        var d = Object(w.e)(r, "vditor-toc");
                        if (!d) (B = Object(w.d)(r, "data-block", "0")) && (null === (t = B.previousElementSibling) || void 0 === t ? void 0 : t.classList.contains("vditor-toc")) && (d = B.previousElementSibling);
                        d && (e.wysiwyg.popover.innerHTML = "", ie(d, e), ee(e, d));
                        var v = Object(E.b)(r, "BLOCKQUOTE");
                        if (v && (e.wysiwyg.popover.innerHTML = "", ne(n, v, e), re(n, v, e), ie(v, e), ee(e, v)), o && (e.wysiwyg.popover.innerHTML = "", ne(n, o, e), re(n, o, e), ie(o, e), ee(e, o)), s) {
                            e.wysiwyg.popover.innerHTML = "";
                            var g = function () {
                                var e = s.rows.length, t = s.rows[0].cells.length, n = parseInt(x.value, 10) || e,
                                    r = parseInt(D.value, 10) || t;
                                if (n !== e || t !== r) {
                                    if (t !== r) for (var i = r - t, o = 0; o < s.rows.length; o++) if (i > 0) for (var a = 0; a < i; a++) 0 === o ? s.rows[o].lastElementChild.insertAdjacentHTML("afterend", "<th> </th>") : s.rows[o].lastElementChild.insertAdjacentHTML("afterend", "<td> </td>"); else for (var l = t - 1; l >= r; l--) s.rows[o].cells[l].remove();
                                    if (e !== n) {
                                        var c = n - e;
                                        if (c > 0) {
                                            for (var d = "<tr>", u = 0; u < r; u++) d += "<td> </td>";
                                            for (var p = 0; p < c; p++) s.querySelector("tbody") ? s.querySelector("tbody").insertAdjacentHTML("beforeend", d) : s.querySelector("thead").insertAdjacentHTML("afterend", d + "</tr>")
                                        } else for (u = e - 1; u >= n; u--) s.rows[u].remove(), 1 === s.rows.length && s.querySelector("tbody").remove()
                                    }
                                }
                            }, b = function (t) {
                                Je(s, t), "right" === t ? (O.classList.remove("vditor-icon--current"), L.classList.remove("vditor-icon--current"), C.classList.add("vditor-icon--current")) : "center" === t ? (O.classList.remove("vditor-icon--current"), C.classList.remove("vditor-icon--current"), L.classList.add("vditor-icon--current")) : (L.classList.remove("vditor-icon--current"), C.classList.remove("vditor-icon--current"), O.classList.add("vditor-icon--current")), Object(N.h)(n), F(e)
                            }, y = Object(w.f)(r, "TD"), k = Object(w.f)(r, "TH"), S = "left";
                            y ? S = y.getAttribute("align") || "left" : k && (S = k.getAttribute("align") || "center");
                            var O = document.createElement("button");
                            O.setAttribute("type", "button"), O.setAttribute("aria-label", P.a[e.options.lang].alignLeft + "<" + Object(u.g)("⌘-⇧-L") + ">"), O.setAttribute("data-type", "left"), O.innerHTML = '<svg><use xlink:href="#vditor-icon-align-left"></use></svg>', O.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n" + ("left" === S ? " vditor-icon--current" : ""), O.onclick = function () {
                                b("left")
                            };
                            var L = document.createElement("button");
                            L.setAttribute("type", "button"), L.setAttribute("aria-label", P.a[e.options.lang].alignCenter + "<" + Object(u.g)("⌘-⇧-C") + ">"), L.setAttribute("data-type", "center"), L.innerHTML = '<svg><use xlink:href="#vditor-icon-align-center"></use></svg>', L.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n" + ("center" === S ? " vditor-icon--current" : ""), L.onclick = function () {
                                b("center")
                            };
                            var C = document.createElement("button");
                            C.setAttribute("type", "button"), C.setAttribute("aria-label", P.a[e.options.lang].alignRight + "<" + Object(u.g)("⌘-⇧-R") + ">"), C.setAttribute("data-type", "right"), C.innerHTML = '<svg><use xlink:href="#vditor-icon-align-right"></use></svg>', C.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n" + ("right" === S ? " vditor-icon--current" : ""), C.onclick = function () {
                                b("right")
                            };
                            var T = document.createElement("button");
                            T.setAttribute("type", "button"), T.setAttribute("aria-label", P.a[e.options.lang]["insert-row"] + "<" + Object(u.g)("⌘-=") + ">"), T.setAttribute("data-type", "insertRow"), T.innerHTML = '<svg><use xlink:href="#vditor-icon-insert-row"></use></svg>', T.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", T.onclick = function () {
                                var t = getSelection().getRangeAt(0).startContainer,
                                    r = Object(w.f)(t, "TD") || Object(w.f)(t, "TH");
                                r && rt(e, n, r)
                            };
                            var M = document.createElement("button");
                            M.setAttribute("type", "button"), M.setAttribute("aria-label", P.a[e.options.lang]["insert-column"] + "<" + Object(u.g)("⌘-⇧-=") + ">"), M.setAttribute("data-type", "insertColumn"), M.innerHTML = '<svg><use xlink:href="#vditor-icon-insert-column"></use></svg>', M.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", M.onclick = function () {
                                var t = getSelection().getRangeAt(0).startContainer,
                                    n = Object(w.f)(t, "TD") || Object(w.f)(t, "TH");
                                n && it(e, s, n)
                            };
                            var _ = document.createElement("button");
                            _.setAttribute("type", "button"), _.setAttribute("aria-label", P.a[e.options.lang]["delete-row"] + "<" + Object(u.g)("⌘--") + ">"), _.setAttribute("data-type", "deleteRow"), _.innerHTML = '<svg><use xlink:href="#vditor-icon-delete-row"></use></svg>', _.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", _.onclick = function () {
                                var t = getSelection().getRangeAt(0).startContainer,
                                    r = Object(w.f)(t, "TD") || Object(w.f)(t, "TH");
                                r && ot(e, n, r)
                            };
                            var j = document.createElement("button");
                            j.setAttribute("type", "button"), j.setAttribute("aria-label", P.a[e.options.lang]["delete-column"] + "<" + Object(u.g)("⌘-⇧--") + ">"), j.setAttribute("data-type", "deleteColumn"), j.innerHTML = '<svg><use xlink:href="#vditor-icon-delete-column"></use></svg>', j.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", j.onclick = function () {
                                var t = getSelection().getRangeAt(0).startContainer,
                                    r = Object(w.f)(t, "TD") || Object(w.f)(t, "TH");
                                r && at(e, n, s, r)
                            }, (z = document.createElement("span")).setAttribute("aria-label", P.a[e.options.lang].row), z.className = "vditor-tooltipped vditor-tooltipped__n";
                            var x = document.createElement("input");
                            z.appendChild(x), x.type = "number", x.min = "1", x.className = "vditor-input", x.style.width = "42px", x.style.textAlign = "center", x.setAttribute("placeholder", P.a[e.options.lang].row), x.value = s.rows.length.toString(), x.oninput = function () {
                                g()
                            }, x.onkeydown = function (t) {
                                if (!t.isComposing) return "Tab" === t.key ? (D.focus(), D.select(), void t.preventDefault()) : void Q(e, t)
                            };
                            var H = document.createElement("span");
                            H.setAttribute("aria-label", P.a[e.options.lang].column), H.className = "vditor-tooltipped vditor-tooltipped__n";
                            var D = document.createElement("input");
                            H.appendChild(D), D.type = "number", D.min = "1", D.className = "vditor-input", D.style.width = "42px", D.style.textAlign = "center", D.setAttribute("placeholder", P.a[e.options.lang].column), D.value = s.rows[0].cells.length.toString(), D.oninput = function () {
                                g()
                            }, D.onkeydown = function (t) {
                                if (!t.isComposing) return "Tab" === t.key ? (x.focus(), x.select(), void t.preventDefault()) : void Q(e, t)
                            }, ne(n, s, e), re(n, s, e), ie(s, e), e.wysiwyg.popover.insertAdjacentElement("beforeend", O), e.wysiwyg.popover.insertAdjacentElement("beforeend", L), e.wysiwyg.popover.insertAdjacentElement("beforeend", C), e.wysiwyg.popover.insertAdjacentElement("beforeend", T), e.wysiwyg.popover.insertAdjacentElement("beforeend", M), e.wysiwyg.popover.insertAdjacentElement("beforeend", _), e.wysiwyg.popover.insertAdjacentElement("beforeend", j), e.wysiwyg.popover.insertAdjacentElement("beforeend", z), e.wysiwyg.popover.insertAdjacentHTML("beforeend", " x "), e.wysiwyg.popover.insertAdjacentElement("beforeend", H), ee(e, s)
                        }
                        var R = Object(w.d)(r, "data-type", "link-ref");
                        R && te(e, R);
                        var I = Object(w.d)(r, "data-type", "footnotes-ref");
                        if (I) {
                            e.wysiwyg.popover.innerHTML = "", (z = document.createElement("span")).setAttribute("aria-label", P.a[e.options.lang].footnoteRef + "<" + Object(u.g)("⌥-Enter") + ">"), z.className = "vditor-tooltipped vditor-tooltipped__n";
                            var q = document.createElement("input");
                            z.appendChild(q), q.className = "vditor-input", q.setAttribute("placeholder", P.a[e.options.lang].footnoteRef + "<" + Object(u.g)("⌥-Enter") + ">"), q.style.width = "120px", q.value = I.getAttribute("data-footnotes-label"), q.oninput = function () {
                                "" !== q.value.trim() && I.setAttribute("data-footnotes-label", q.value)
                            }, q.onkeydown = function (t) {
                                if (!t.isComposing) return Object(u.d)(t) || t.shiftKey || !t.altKey || "Enter" !== t.key ? void Q(e, t) : (n.selectNodeContents(I), n.collapse(!1), Object(N.h)(n), void t.preventDefault())
                            }, ie(I, e), e.wysiwyg.popover.insertAdjacentElement("beforeend", z), ee(e, I)
                        }
                        var B, U = Object(w.e)(r, "vditor-wysiwyg__block");
                        if (U && U.getAttribute("data-type").indexOf("block") > -1) {
                            if (e.wysiwyg.popover.innerHTML = "", ne(n, U, e), re(n, U, e), ie(U, e), "code-block" === U.getAttribute("data-type")) {
                                var V = document.createElement("span");
                                V.setAttribute("aria-label", P.a[e.options.lang].language + "<" + Object(u.g)("⌥-Enter") + ">"), V.className = "vditor-tooltipped vditor-tooltipped__n";
                                var K = document.createElement("input");
                                V.appendChild(K);
                                var W = U.firstElementChild.firstElementChild;
                                K.className = "vditor-input", K.setAttribute("placeholder", P.a[e.options.lang].language + "<" + Object(u.g)("⌥-Enter") + ">"), K.value = W.className.indexOf("language-") > -1 ? W.className.split("-")[1].split(" ")[0] : "", K.oninput = function () {
                                    "" !== K.value.trim() ? W.className = "language-" + K.value : (W.className = "", e.hint.recentLanguage = ""), U.lastElementChild.classList.contains("vditor-wysiwyg__preview") && (U.lastElementChild.innerHTML = U.firstElementChild.innerHTML, A(U.lastElementChild, e)), F(e)
                                }, K.onkeydown = function (t) {
                                    if (!t.isComposing && !Q(e, t)) {
                                        if ("Escape" === t.key && "block" === e.hint.element.style.display) return e.hint.element.style.display = "none", void t.preventDefault();
                                        Object(u.d)(t) || t.shiftKey || !t.altKey || "Enter" !== t.key || (n.setStart(W.firstChild, 0), n.collapse(!0), Object(N.h)(n)), e.hint.select(t, e)
                                    }
                                }, K.onkeyup = function (t) {
                                    if (!t.isComposing && "Enter" !== t.key && "ArrowUp" !== t.key && "Escape" !== t.key && "ArrowDown" !== t.key) {
                                        var n = [], r = K.value.substring(0, K.selectionStart);
                                        a.a.CODE_LANGUAGES.forEach((function (e) {
                                            e.indexOf(r.toLowerCase()) > -1 && n.push({html: e, value: e})
                                        })), e.hint.genHTML(n, r, e), t.preventDefault()
                                    }
                                }, e.wysiwyg.popover.insertAdjacentElement("beforeend", V)
                            }
                            ee(e, U)
                        } else U || e.wysiwyg.element.querySelectorAll(".vditor-wysiwyg__preview").forEach((function (e) {
                            e.previousElementSibling.style.display = "none"
                        })), U = void 0;
                        if (c) {
                            var z;
                            e.wysiwyg.popover.innerHTML = "", (z = document.createElement("span")).setAttribute("aria-label", "ID<" + Object(u.g)("⌥-Enter") + ">"), z.className = "vditor-tooltipped vditor-tooltipped__n";
                            var Z = document.createElement("input");
                            z.appendChild(Z), Z.className = "vditor-input", Z.setAttribute("placeholder", "ID<" + Object(u.g)("⌥-Enter") + ">"), Z.style.width = "120px", Z.value = c.getAttribute("data-id") || "", Z.oninput = function () {
                                c.setAttribute("data-id", Z.value)
                            }, Z.onkeydown = function (t) {
                                if (!t.isComposing) return Object(u.d)(t) || t.shiftKey || !t.altKey || "Enter" !== t.key ? void Q(e, t) : (n.selectNodeContents(c), n.collapse(!1), Object(N.h)(n), void t.preventDefault())
                            }, ne(n, c, e), re(n, c, e), ie(c, e), e.wysiwyg.popover.insertAdjacentElement("beforeend", z), ee(e, c)
                        }
                        if (l && ae(e, l), !(v || o || s || U || l || R || I || c || d)) (B = Object(w.d)(r, "data-block", "0")) && B.parentElement.isEqualNode(e.wysiwyg.element) ? (e.wysiwyg.popover.innerHTML = "", ne(n, B, e), re(n, B, e), ie(B, e), ee(e, B)) : e.wysiwyg.popover.style.display = "none";
                        e.wysiwyg.element.querySelectorAll('span[data-type="backslash"] > span').forEach((function (e) {
                            e.style.display = "none"
                        }));
                        var J = Object(w.d)(n.startContainer, "data-type", "backslash");
                        J && (J.querySelector("span").style.display = "inline")
                    }
                }), 200)
            }, ee = function (e, t) {
                var n = t, r = Object(w.f)(t, "TABLE");
                r && (n = r), e.wysiwyg.popover.style.left = "0", e.wysiwyg.popover.style.display = "block", e.wysiwyg.popover.style.top = Math.max(-8, n.offsetTop - 21 - e.wysiwyg.element.scrollTop) + "px", e.wysiwyg.popover.style.left = Math.min(n.offsetLeft, e.wysiwyg.element.clientWidth - e.wysiwyg.popover.clientWidth) + "px", e.wysiwyg.popover.setAttribute("data-top", (n.offsetTop - 21).toString())
            }, te = function (e, t) {
                e.wysiwyg.popover.innerHTML = "";
                var n = function () {
                    "" !== i.value.trim() && ("IMG" === t.tagName ? t.setAttribute("alt", i.value) : t.textContent = i.value), "" !== a.value.trim() && t.setAttribute("data-link-label", a.value)
                }, r = document.createElement("span");
                r.setAttribute("aria-label", P.a[e.options.lang].textIsNotEmpty), r.className = "vditor-tooltipped vditor-tooltipped__n";
                var i = document.createElement("input");
                r.appendChild(i), i.className = "vditor-input", i.setAttribute("placeholder", P.a[e.options.lang].textIsNotEmpty), i.style.width = "120px", i.value = t.getAttribute("alt") || t.textContent, i.oninput = function () {
                    n()
                }, i.onkeydown = function (n) {
                    Q(e, n) || oe(e.wysiwyg.element, t, n, a)
                };
                var o = document.createElement("span");
                o.setAttribute("aria-label", P.a[e.options.lang].linkRef), o.className = "vditor-tooltipped vditor-tooltipped__n";
                var a = document.createElement("input");
                o.appendChild(a), a.className = "vditor-input", a.setAttribute("placeholder", P.a[e.options.lang].linkRef), a.value = t.getAttribute("data-link-label"), a.oninput = function () {
                    n()
                }, a.onkeydown = function (n) {
                    Q(e, n) || oe(e.wysiwyg.element, t, n, i)
                }, ie(t, e), e.wysiwyg.popover.insertAdjacentElement("beforeend", r), e.wysiwyg.popover.insertAdjacentElement("beforeend", o), ee(e, t)
            }, ne = function (e, t, n) {
                var r = t.previousElementSibling;
                if (r && (t.parentElement.isEqualNode(n.wysiwyg.element) || "LI" === t.tagName)) {
                    var i = document.createElement("button");
                    i.setAttribute("type", "button"), i.setAttribute("data-type", "up"), i.setAttribute("aria-label", P.a[n.options.lang].up + "<" + Object(u.g)("⌘-⇧-U") + ">"), i.innerHTML = '<svg><use xlink:href="#vditor-icon-up"></use></svg>', i.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", i.onclick = function () {
                        e.insertNode(document.createElement("wbr")), r.insertAdjacentElement("beforebegin", t), Object(N.f)(n.wysiwyg.element, e), F(n), Y(n), Oe(n)
                    }, n.wysiwyg.popover.insertAdjacentElement("beforeend", i)
                }
            }, re = function (e, t, n) {
                var r = t.nextElementSibling;
                if (r && (t.parentElement.isEqualNode(n.wysiwyg.element) || "LI" === t.tagName)) {
                    var i = document.createElement("button");
                    i.setAttribute("type", "button"), i.setAttribute("data-type", "down"), i.setAttribute("aria-label", P.a[n.options.lang].down + "<" + Object(u.g)("⌘-⇧-D") + ">"), i.innerHTML = '<svg><use xlink:href="#vditor-icon-down"></use></svg>', i.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", i.onclick = function () {
                        e.insertNode(document.createElement("wbr")), r.insertAdjacentElement("afterend", t), Object(N.f)(n.wysiwyg.element, e), F(n), Y(n), Oe(n)
                    }, n.wysiwyg.popover.insertAdjacentElement("beforeend", i)
                }
            }, ie = function (e, t) {
                var n = document.createElement("button");
                n.setAttribute("type", "button"), n.setAttribute("data-type", "remove"), n.setAttribute("aria-label", P.a[t.options.lang].remove + "<" + Object(u.g)("⌘-⇧-X") + ">"), n.innerHTML = '<svg><use xlink:href="#vditor-icon-trashcan"></use></svg>', n.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", n.onclick = function () {
                    var n = Object(N.b)(t.wysiwyg.element);
                    n.setStartAfter(e), Object(N.h)(n), e.remove(), F(t), Y(t)
                }, t.wysiwyg.popover.insertAdjacentElement("beforeend", n)
            }, oe = function (e, t, n, r) {
                if (!n.isComposing) {
                    if ("Tab" === n.key) return r.focus(), r.select(), void n.preventDefault();
                    if (!Object(u.d)(n) && !n.shiftKey && n.altKey && "Enter" === n.key) {
                        var i = Object(N.b)(e);
                        t.insertAdjacentHTML("afterend", a.a.ZWSP), i.setStartAfter(t.nextSibling), i.collapse(!0), Object(N.h)(i), n.preventDefault()
                    }
                }
            }, ae = function (e, t) {
                e.wysiwyg.popover.innerHTML = "";
                var n = function () {
                    "" !== i.value.trim() && (t.innerHTML = i.value), t.setAttribute("href", a.value), t.setAttribute("title", s.value)
                };
                t.querySelectorAll("[data-marker]").forEach((function (e) {
                    e.removeAttribute("data-marker")
                }));
                var r = document.createElement("span");
                r.setAttribute("aria-label", P.a[e.options.lang].textIsNotEmpty), r.className = "vditor-tooltipped vditor-tooltipped__n";
                var i = document.createElement("input");
                r.appendChild(i), i.className = "vditor-input", i.setAttribute("placeholder", P.a[e.options.lang].textIsNotEmpty), i.style.width = "120px", i.value = t.innerHTML || "", i.oninput = function () {
                    n()
                }, i.onkeydown = function (n) {
                    Q(e, n) || oe(e.wysiwyg.element, t, n, a)
                };
                var o = document.createElement("span");
                o.setAttribute("aria-label", P.a[e.options.lang].link), o.className = "vditor-tooltipped vditor-tooltipped__n";
                var a = document.createElement("input");
                o.appendChild(a), a.className = "vditor-input", a.setAttribute("placeholder", P.a[e.options.lang].link), a.value = t.getAttribute("href") || "", a.oninput = function () {
                    n()
                }, a.onkeydown = function (n) {
                    Q(e, n) || oe(e.wysiwyg.element, t, n, s)
                };
                var l = document.createElement("span");
                l.setAttribute("aria-label", P.a[e.options.lang].tooltipText), l.className = "vditor-tooltipped vditor-tooltipped__n";
                var s = document.createElement("input");
                l.appendChild(s), s.className = "vditor-input", s.setAttribute("placeholder", P.a[e.options.lang].tooltipText), s.style.width = "60px", s.value = t.getAttribute("title") || "", s.oninput = function () {
                    n()
                }, s.onkeydown = function (n) {
                    Q(e, n) || oe(e.wysiwyg.element, t, n, i)
                }, ie(t, e), e.wysiwyg.popover.insertAdjacentElement("beforeend", r), e.wysiwyg.popover.insertAdjacentElement("beforeend", o), e.wysiwyg.popover.insertAdjacentElement("beforeend", l), ee(e, t)
            }, le = function (e) {
                "wysiwyg" === e.currentMode ? Y(e) : "ir" === e.currentMode && W(e)
            }, se = function (e, t, n) {
                void 0 === n && (n = {enableAddUndoStack: !0, enableHint: !1, enableInput: !0});
                var r = e.wysiwyg.element;
                r.innerHTML = e.lute.Md2VditorDOM(t), r.querySelectorAll(".vditor-wysiwyg__preview[data-render='2']").forEach((function (t) {
                    A(t, e), t.previousElementSibling.setAttribute("style", "display:none")
                })), F(e, n)
            }, ce = function (e, t, n) {
                for (var r = e.startContainer.parentElement, i = !1, o = "", l = "", s = function (e) {
                    var t = Z(e.startContainer), n = z(e.startContainer), r = e.startContainer.textContent,
                        i = e.startOffset, o = "", l = "";
                    return ("" !== r.substr(0, i) && r.substr(0, i) !== a.a.ZWSP || t) && (o = "" + t + r.substr(0, i)), ("" !== r.substr(i) && r.substr(i) !== a.a.ZWSP || n) && (l = "" + r.substr(i) + n), {
                        afterHTML: l,
                        beforeHTML: o
                    }
                }(e), c = s.beforeHTML, d = s.afterHTML; r && !i;) {
                    var u = r.tagName;
                    if ("STRIKE" === u && (u = "S"), "I" === u && (u = "EM"), "B" === u && (u = "STRONG"), "S" === u || "STRONG" === u || "EM" === u) {
                        var p = "", f = "", m = "";
                        "0" !== r.parentElement.getAttribute("data-block") && (f = Z(r), m = z(r)), (c || f) && (c = p = f + "<" + u + ">" + c + "</" + u + ">"), ("bold" === n && "STRONG" === u || "italic" === n && "EM" === u || "strikeThrough" === n && "S" === u) && (p += "" + o + a.a.ZWSP + "<wbr>" + l, i = !0), (d || m) && (p += d = "<" + u + ">" + d + "</" + u + ">" + m), "0" !== r.parentElement.getAttribute("data-block") ? (r = r.parentElement).innerHTML = p : (r.outerHTML = p, r = r.parentElement), o = "<" + u + ">" + o, l = "</" + u + ">" + l
                    } else i = !0
                }
                Object(N.f)(t.wysiwyg.element, e)
            }, de = function (e, t) {
                var n, r = this;
                this.element = document.createElement("div"), t.className && (n = this.element.classList).add.apply(n, t.className.split(" "));
                var i = t.hotkey ? " <" + Object(u.g)(t.hotkey) + ">" : "";
                2 === t.level && (i = t.hotkey ? " &lt;" + Object(u.g)(t.hotkey) + "&gt;" : "");
                var o = t.tip ? t.tip + i : P.a[e.options.lang][t.name] + i, l = "upload" === t.name ? "div" : "button";
                if (2 === t.level) this.element.innerHTML = "<" + l + ' data-type="' + t.name + '">' + o + "</" + l + ">"; else {
                    this.element.classList.add("vditor-toolbar__item");
                    var s = document.createElement(l);
                    s.setAttribute("data-type", t.name), s.className = "vditor-tooltipped vditor-tooltipped__" + t.tipPosition, s.setAttribute("aria-label", o), s.innerHTML = t.icon, this.element.appendChild(s)
                }
                t.prefix && this.element.children[0].addEventListener(Object(u.b)(), (function (n) {
                    n.preventDefault(), r.element.firstElementChild.classList.contains(a.a.CLASS_MENU_DISABLED) || ("wysiwyg" === e.currentMode ? function (e, t, n) {
                        if (!(e.wysiwyg.composingLock && n instanceof CustomEvent)) {
                            var r = !0, i = !0;
                            e.wysiwyg.element.querySelector("wbr") && e.wysiwyg.element.querySelector("wbr").remove();
                            var o = Object(N.b)(e.wysiwyg.element), l = t.getAttribute("data-type");
                            if (t.classList.contains("vditor-menu--current")) if ("strike" === l && (l = "strikeThrough"), "quote" === l) {
                                var s = Object(w.f)(o.startContainer, "BLOCKQUOTE");
                                s || (s = o.startContainer.childNodes[o.startOffset]), s && (r = !1, t.classList.remove("vditor-menu--current"), o.insertNode(document.createElement("wbr")), s.outerHTML = "" === s.innerHTML.trim() ? '<p data-block="0">' + s.innerHTML + "</p>" : s.innerHTML, Object(N.f)(e.wysiwyg.element, o))
                            } else if ("inline-code" === l) {
                                var c = Object(w.f)(o.startContainer, "CODE");
                                c || (c = o.startContainer.childNodes[o.startOffset]), c && (c.outerHTML = c.innerHTML.replace(a.a.ZWSP, "") + "<wbr>", Object(N.f)(e.wysiwyg.element, o))
                            } else "link" === l ? o.collapsed ? (o.selectNode(o.startContainer.parentElement), document.execCommand("unlink", !1, "")) : document.execCommand("unlink", !1, "") : "check" === l || "list" === l || "ordered-list" === l ? (Fe(e, o, l), Object(N.f)(e.wysiwyg.element, o), r = !1, t.classList.remove("vditor-menu--current")) : (r = !1, t.classList.remove("vditor-menu--current"), "" === o.toString() ? ce(o, e, l) : document.execCommand(l, !1, "")); else {
                                0 === e.wysiwyg.element.childNodes.length && (e.wysiwyg.element.innerHTML = '<p data-block="0"><wbr></p>', Object(N.f)(e.wysiwyg.element, o));
                                var d = Object(w.c)(o.startContainer);
                                if ("quote" === l) {
                                    if (d || (d = o.startContainer.childNodes[o.startOffset]), d) {
                                        r = !1, t.classList.add("vditor-menu--current"), o.insertNode(document.createElement("wbr"));
                                        var u = Object(w.f)(o.startContainer, "LI");
                                        u && d.contains(u) ? u.innerHTML = '<blockquote data-block="0">' + u.innerHTML + "</blockquote>" : d.outerHTML = '<blockquote data-block="0">' + d.outerHTML + "</blockquote>", Object(N.f)(e.wysiwyg.element, o)
                                    }
                                } else if ("check" === l || "list" === l || "ordered-list" === l) Fe(e, o, l, !1), Object(N.f)(e.wysiwyg.element, o), r = !1, p(e.toolbar.elements, ["check", "list", "ordered-list"]), t.classList.add("vditor-menu--current"); else if ("inline-code" === l) {
                                    if ("" === o.toString()) (f = document.createElement("code")).textContent = a.a.ZWSP, o.insertNode(f), o.setStart(f.firstChild, 1), o.collapse(!0), Object(N.h)(o); else if (3 === o.startContainer.nodeType) {
                                        var f = document.createElement("code");
                                        o.surroundContents(f), o.insertNode(f), Object(N.h)(o)
                                    }
                                    t.classList.add("vditor-menu--current")
                                } else if ("code" === l) (f = document.createElement("div")).className = "vditor-wysiwyg__block", f.setAttribute("data-type", "code-block"), f.setAttribute("data-block", "0"), f.setAttribute("data-marker", "```"), "" === o.toString() ? f.innerHTML = "<pre><code><wbr>\n</code></pre>" : (f.innerHTML = "<pre><code>" + o.toString() + "<wbr></code></pre>", o.deleteContents()), o.insertNode(f), d && (d.outerHTML = e.lute.SpinVditorDOM(d.outerHTML)), Object(N.f)(e.wysiwyg.element, o), e.wysiwyg.element.querySelectorAll(".vditor-wysiwyg__preview[data-render='2']").forEach((function (t) {
                                    A(t, e)
                                })), t.classList.add("vditor-menu--disabled"); else if ("link" === l) {
                                    if ("" === o.toString()) {
                                        var m = document.createElement("a");
                                        m.innerText = a.a.ZWSP, o.insertNode(m), o.setStart(m.firstChild, 1), o.collapse(!0), ae(e, m);
                                        var h = e.wysiwyg.popover.querySelector("input");
                                        h.value = "", h.focus(), i = !1
                                    } else {
                                        (f = document.createElement("a")).setAttribute("href", ""), f.innerHTML = o.toString(), o.surroundContents(f), o.insertNode(f), Object(N.h)(o), ae(e, f);
                                        var v = e.wysiwyg.popover.querySelectorAll("input");
                                        v[0].value = f.innerText, v[1].focus()
                                    }
                                    r = !1, t.classList.add("vditor-menu--current")
                                } else if ("table" === l) {
                                    var g = '<table data-block="0"><thead><tr><th>col1<wbr></th><th>col2</th><th>col3</th></tr></thead><tbody><tr><td> </td><td> </td><td> </td></tr><tr><td> </td><td> </td><td> </td></tr></tbody></table>';
                                    if ("" === o.toString().trim()) d && "" === d.innerHTML.trim().replace(a.a.ZWSP, "") ? d.outerHTML = g : document.execCommand("insertHTML", !1, g), o.selectNode(e.wysiwyg.element.querySelector("wbr").previousSibling), e.wysiwyg.element.querySelector("wbr").remove(), Object(N.h)(o); else {
                                        g = '<table data-block="0"><thead><tr>';
                                        var b = o.toString().split("\n"),
                                            y = b[0].split(",").length > b[0].split("\t").length ? "," : "\t";
                                        b.forEach((function (e, t) {
                                            0 === t ? (e.split(y).forEach((function (e, t) {
                                                g += 0 === t ? "<th>" + e + "<wbr></th>" : "<th>" + e + "</th>"
                                            })), g += "</tr></thead>") : (g += 1 === t ? "<tbody><tr>" : "<tr>", e.split(y).forEach((function (e) {
                                                g += "<td>" + e + "</td>"
                                            })), g += "</tr>")
                                        })), g += "</tbody></table>", document.execCommand("insertHTML", !1, g), Object(N.f)(e.wysiwyg.element, o)
                                    }
                                    r = !1, t.classList.add("vditor-menu--disabled")
                                } else if ("line" === l) {
                                    if (d) {
                                        var E = '<hr data-block="0"><p data-block="0"><wbr>\n</p>';
                                        "" === d.innerHTML.trim() ? d.outerHTML = E : d.insertAdjacentHTML("afterend", E), Object(N.f)(e.wysiwyg.element, o)
                                    }
                                } else if (r = !1, t.classList.add("vditor-menu--current"), "strike" === l && (l = "strikeThrough"), "" !== o.toString() || "bold" !== l && "italic" !== l && "strikeThrough" !== l) document.execCommand(l, !1, ""); else {
                                    var k = "strong";
                                    "italic" === l ? k = "em" : "strikeThrough" === l && (k = "s"), (f = document.createElement(k)).textContent = a.a.ZWSP, o.insertNode(f), f.previousSibling && f.previousSibling.textContent === a.a.ZWSP && (f.previousSibling.textContent = ""), o.setStart(f.firstChild, 1), o.collapse(!0), Object(N.h)(o)
                                }
                            }
                            r && Y(e), i && F(e)
                        }
                    }(e, r.element.children[0], n) : "ir" === e.currentMode ? yt(e, r.element.children[0], t.prefix || "", t.suffix || "") : Ne(e, r.element.children[0], t.prefix || "", t.suffix || ""))
                }))
            }, ue = (r = function (e, t) {
                return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
            }, function (e, t) {
                function n() {
                    this.constructor = e
                }

                r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }), pe = function (e, t, n) {
                var r;
                if ("string" != typeof n ? (b(e, ["subToolbar", "hint"]), n.preventDefault(), r = s(e)) : r = n, e.currentMode !== t || "string" == typeof n) {
                    if (e.devtools && e.devtools.renderEchart(e), "both" === e.options.preview.mode && "sv" === t ? e.preview.element.style.display = "block" : e.preview.element.style.display = "none", m(e.toolbar.elements, a.a.EDIT_TOOLBARS), p(e.toolbar.elements, a.a.EDIT_TOOLBARS), h(e.toolbar.elements, ["outdent", "indent"]), "ir" === t) v(e.toolbar.elements, ["both"]), g(e.toolbar.elements, ["outdent", "indent", "outline", "insert-before", "insert-after"]), e.sv.element.style.display = "none", e.wysiwyg.element.parentElement.style.display = "none", e.ir.element.parentElement.style.display = "block", e.currentMode = "ir", e.ir.element.innerHTML = e.lute.Md2VditorIRDOM(r), vt(e, {
                        enableAddUndoStack: !0,
                        enableHint: !1,
                        enableInput: !1
                    }), U(e), e.ir.element.querySelectorAll(".vditor-ir__preview[data-render='2']").forEach((function (t) {
                        A(t, e)
                    })); else if ("wysiwyg" === t) v(e.toolbar.elements, ["both"]), g(e.toolbar.elements, ["outdent", "indent", "outline", "insert-before", "insert-after"]), e.sv.element.style.display = "none", e.wysiwyg.element.parentElement.style.display = "block", e.ir.element.parentElement.style.display = "none", e.currentMode = "wysiwyg", U(e), se(e, r, {
                        enableAddUndoStack: !0,
                        enableHint: !1,
                        enableInput: !1
                    }), e.wysiwyg.popover.style.display = "none"; else if ("sv" === t) {
                        g(e.toolbar.elements, ["both"]), v(e.toolbar.elements, ["outdent", "indent", "outline", "insert-before", "insert-after"]), e.wysiwyg.element.parentElement.style.display = "none", e.ir.element.parentElement.style.display = "none", ("both" === e.options.preview.mode || "editor" === e.options.preview.mode) && (e.sv.element.style.display = "block"), e.currentMode = "sv";
                        var i = _e(r, e);
                        "<div data-block='0'></div>" === i && (i = ""), e.sv.element.innerHTML = i, xe(e, {
                            enableAddUndoStack: !0,
                            enableHint: !1,
                            enableInput: !1
                        }), U(e)
                    }
                    e.undo.resetIcon(e), "string" != typeof n && (e[e.currentMode].element.focus(), le(e)), "string" == typeof n && e.outline.render(e), V(e), e.toolbar.elements["edit-mode"] && (e.toolbar.elements["edit-mode"].querySelectorAll("button").forEach((function (e) {
                        e.classList.remove("vditor-menu--current")
                    })), e.toolbar.elements["edit-mode"].querySelector('button[data-mode="' + e.currentMode + '"]').classList.add("vditor-menu--current")), e.outline.toggle(e, "sv" !== e.currentMode && e.options.outline)
                }
            }, fe = function (e) {
                function t(t, n) {
                    var r = e.call(this, t, n) || this, i = document.createElement("div");
                    return i.className = "vditor-hint" + (2 === n.level ? "" : " vditor-panel--arrow"), i.innerHTML = '<button data-mode="wysiwyg">' + P.a[t.options.lang].wysiwyg + " &lt;" + Object(u.g)("⌘-⌥-7") + '></button>\n<button data-mode="ir">' + P.a[t.options.lang].instantRendering + " &lt;" + Object(u.g)("⌘-⌥-8") + '></button>\n<button data-mode="sv">' + P.a[t.options.lang].splitView + " &lt;" + Object(u.g)("⌘-⌥-9") + "></button>", r.element.appendChild(i), r._bindEvent(t, i, n), r
                }

                return ue(t, e), t.prototype._bindEvent = function (e, t, n) {
                    var r = this.element.children[0];
                    y(e, t, r, n.level), t.children.item(0).addEventListener(Object(u.b)(), (function (t) {
                        pe(e, "wysiwyg", t), t.preventDefault(), t.stopPropagation()
                    })), t.children.item(1).addEventListener(Object(u.b)(), (function (t) {
                        pe(e, "ir", t), t.preventDefault(), t.stopPropagation()
                    })), t.children.item(2).addEventListener(Object(u.b)(), (function (t) {
                        pe(e, "sv", t), t.preventDefault(), t.stopPropagation()
                    }))
                }, t
            }(de), me = function (e) {
                switch (e.currentMode) {
                    case"ir":
                        return e.ir.element;
                    case"wysiwyg":
                        return e.wysiwyg.element;
                    case"sv":
                        return e.sv.element
                }
            }, he = function (e, t) {
                e.options.upload.setHeaders && (e.options.upload.headers = e.options.upload.setHeaders()), e.options.upload.headers && Object.keys(e.options.upload.headers).forEach((function (n) {
                    t.setRequestHeader(n, e.options.upload.headers[n])
                }))
            }, ve = function () {
                this.isUploading = !1, this.element = document.createElement("div"), this.element.className = "vditor-upload"
            }, ge = function (e, t, n) {
                for (var r, i = [], o = !0 === e.options.upload.multiple ? t.length : 1, a = 0; a < o; a++) {
                    var l = t[a];
                    l instanceof DataTransferItem && (l = l.getAsFile()), i.push(l)
                }
                if (e.options.upload.handler) return "string" == typeof (r = e.options.upload.handler(i)) ? void e.tip.show(r) : void 0;
                if (!e.options.upload.url || !e.upload) return n && (n.value = ""), void e.tip.show("please config: options.upload.url");
                if ((e.options.upload.file && (i = e.options.upload.file(i)), e.options.upload.validate) && "string" == typeof (r = e.options.upload.validate(i))) return void e.tip.show(r);
                var s = me(e);
                e.upload.range = Object(N.b)(s);
                var c = function (e, t) {
                    e.tip.hide();
                    for (var n = [], r = "", i = "", o = e.options.lang, a = function (a, l) {
                        var s = t[l], c = !0;
                        s.name || (r += "<li>" + P.a[o].nameEmpty + "</li>", c = !1), s.size > e.options.upload.max && (r += "<li>" + s.name + " " + P.a[o].over + " " + e.options.upload.max / 1024 / 1024 + "M</li>", c = !1);
                        var d = s.name.lastIndexOf("."), u = s.name.substr(d),
                            p = e.options.upload.filename(s.name.substr(0, d)) + u;
                        e.options.upload.accept && (e.options.upload.accept.split(",").some((function (e) {
                            var t = e.trim();
                            if (0 === t.indexOf(".")) {
                                if (u.toLowerCase() === t.toLowerCase()) return !0
                            } else if (s.type.split("/")[0] === t.split("/")[0]) return !0;
                            return !1
                        })) || (r += "<li>" + s.name + " " + P.a[o].fileTypeError + "</li>", c = !1));
                        c && (n.push(s), i += "<li>" + p + " " + P.a[o].uploading + "</li>")
                    }, l = t.length, s = 0; s < l; s++) a(0, s);
                    return e.tip.show("<ul>" + r + i + "</ul>"), n
                }(e, i);
                if (0 !== c.length) {
                    for (var d = new FormData, u = e.options.upload.extraData, p = 0, f = Object.keys(u); p < f.length; p++) {
                        var m = f[p];
                        d.append(m, u[m])
                    }
                    a = 0;
                    for (var h = c.length; a < h; a++) d.append(e.options.upload.fieldName, c[a]);
                    var v = new XMLHttpRequest;
                    v.open("POST", e.options.upload.url), e.options.upload.token && v.setRequestHeader("X-Upload-Token", e.options.upload.token), e.options.upload.withCredentials && (v.withCredentials = !0), he(e, v), e.upload.isUploading = !0, s.setAttribute("contenteditable", "false"), v.onreadystatechange = function () {
                        if (v.readyState === XMLHttpRequest.DONE) {
                            if (e.upload.isUploading = !1, s.setAttribute("contenteditable", "true"), 200 === v.status) if (e.options.upload.success) e.options.upload.success(s, v.responseText); else {
                                var r = v.responseText;
                                e.options.upload.format && (r = e.options.upload.format(t, v.responseText)), function (e, t) {
                                    me(t).focus();
                                    var n = JSON.parse(e), r = "";
                                    1 === n.code && (r = "" + n.msg), n.data.errFiles && n.data.errFiles.length > 0 && (r = "<ul><li>" + r + "</li>", n.data.errFiles.forEach((function (e) {
                                        var n = e.lastIndexOf("."),
                                            i = t.options.upload.filename(e.substr(0, n)) + e.substr(n);
                                        r += "<li>" + i + " " + P.a[t.options.lang].uploadError + "</li>"
                                    })), r += "</ul>"), r ? t.tip.show(r) : t.tip.hide();
                                    var i = "";
                                    Object.keys(n.data.succMap).forEach((function (e) {
                                        var r = n.data.succMap[e], o = e.lastIndexOf("."), a = e.substr(o),
                                            l = t.options.upload.filename(e.substr(0, o)) + a;
                                        0 === (a = a.toLowerCase()).indexOf(".wav") || 0 === a.indexOf(".mp3") || 0 === a.indexOf(".ogg") ? "wysiwyg" === t.currentMode ? i += '<div class="vditor-wysiwyg__block" data-type="html-block"\n data-block="0"><pre><code>&lt;audio controls="controls" src="' + r + '"&gt;&lt;/audio&gt;</code></pre>' : "ir" === t.currentMode ? i += '<audio controls="controls" src="' + r + '"></audio>\n' : i += "[" + l + "](" + r + ")\n" : 0 === a.indexOf(".apng") || 0 === a.indexOf(".bmp") || 0 === a.indexOf(".gif") || 0 === a.indexOf(".ico") || 0 === a.indexOf(".cur") || 0 === a.indexOf(".jpg") || 0 === a.indexOf(".jpeg") || 0 === a.indexOf(".jfif") || 0 === a.indexOf(".pjp") || 0 === a.indexOf(".pjpeg") || 0 === a.indexOf(".png") || 0 === a.indexOf(".svg") || 0 === a.indexOf(".webp") ? "wysiwyg" === t.currentMode ? i += '<img alt="' + l + '" src="' + r + '">' : i += "![" + l + "](" + r + ")\n" : "wysiwyg" === t.currentMode ? i += '<a href="' + r + '">' + l + "</a>" : i += "[" + l + "](" + r + ")\n"
                                    })), Object(N.h)(t.upload.range), document.execCommand("insertHTML", !1, i), t.upload.range = getSelection().getRangeAt(0).cloneRange()
                                }(r, e)
                            } else e.options.upload.error ? e.options.upload.error(v.responseText) : e.tip.show(v.responseText);
                            n && (n.value = ""), e.upload.element.style.display = "none"
                        }
                    }, v.upload.onprogress = function (t) {
                        if (t.lengthComputable) {
                            var n = t.loaded / t.total * 100;
                            e.upload.element.style.display = "block", e.upload.element.style.width = n + "%"
                        }
                    }, v.send(d)
                } else n && (n.value = "")
            }, be = function (e, t) {
                return Object(N.e)(e, t) ? getSelection().toString() : ""
            }, ye = function (e, t) {
                t.addEventListener("focus", (function () {
                    e.options.focus && e.options.focus(s(e)), b(e, ["subToolbar"])
                }))
            }, we = function (e, t) {
                t.addEventListener("blur", (function () {
                    if ("ir" === e.currentMode) {
                        var t = e.ir.element.querySelector(".vditor-ir__node--expand");
                        t && t.classList.remove("vditor-ir__node--expand")
                    }
                    e.options.blur && e.options.blur(s(e))
                }))
            }, Ee = function (e, t) {
                (e.options.upload.url || e.options.upload.handler) && t.addEventListener("drop", (function (t) {
                    if ("Files" === t.dataTransfer.types[0]) {
                        var n = t.dataTransfer.items;
                        n.length > 0 && ge(e, n), t.preventDefault()
                    }
                }))
            }, ke = function (e, t, n) {
                t.addEventListener("copy", (function (t) {
                    return n(t, e)
                }))
            }, Se = function (e, t, n) {
                t.addEventListener("cut", (function (t) {
                    n(t, e), document.execCommand("delete")
                }))
            }, Oe = function (e) {
                if (e.options.typewriterMode) {
                    var t = e[e.currentMode].element, n = Object(N.a)(t).top;
                    "string" != typeof e.options.height || e.element.classList.contains("vditor--fullscreen") || window.scrollTo(window.scrollX, n + e.element.offsetTop + e.toolbar.element.offsetHeight - window.innerHeight / 2 + 10), ("number" == typeof e.options.height || e.element.classList.contains("vditor--fullscreen")) && (t.scrollTop = n + t.scrollTop - t.clientHeight / 2 + 10)
                }
            }, Le = function (e, t) {
                t.addEventListener("keydown", (function (t) {
                    if (!(e.options.hint.extend.length > 1 || e.toolbar.elements.emoji) || !e.hint.select(t, e)) {
                        if ("sv" === e.currentMode) {
                            if (function (e, t) {
                                var n, r, i, o, a;
                                if (e.sv.composingLock = t.isComposing, t.isComposing) return !1;
                                if (-1 !== t.key.indexOf("Arrow") || "Meta" === t.key || "Control" === t.key || "Alt" === t.key || "Shift" === t.key || "CapsLock" === t.key || "Escape" === t.key || /^F\d{1,2}$/.test(t.key) || e.undo.recordFirstPosition(e, t), "Enter" !== t.key && "Tab" !== t.key && "Backspace" !== t.key && -1 === t.key.indexOf("Arrow") && !Object(u.d)(t) && "Escape" !== t.key) return !1;
                                var l = Object(N.b)(e.sv.element), s = l.startContainer;
                                3 !== l.startContainer.nodeType && "DIV" === l.startContainer.tagName && (s = l.startContainer.childNodes[l.startOffset - 1]);
                                var c = Object(w.d)(s, "data-type", "text"),
                                    d = Object(w.d)(s, "data-type", "blockquote-marker");
                                if (!d && 0 === l.startOffset && c && c.previousElementSibling && "blockquote-marker" === c.previousElementSibling.getAttribute("data-type") && (d = c.previousElementSibling), d && "Enter" === t.key && !Object(u.d)(t) && !t.altKey && "" === d.nextElementSibling.textContent.trim() && Object(N.c)(d, e.sv.element, l).start === d.textContent.length) return "padding" === (null === (n = d.previousElementSibling) || void 0 === n ? void 0 : n.getAttribute("data-type")) && d.previousElementSibling.setAttribute("data-action", "enter-remove"), d.remove(), xe(e), t.preventDefault(), !0;
                                var p = Object(w.d)(s, "data-type", "li-marker"),
                                    f = Object(w.d)(s, "data-type", "task-marker"), m = p;
                                if (m || f && "task-marker" !== f.nextElementSibling.getAttribute("data-type") && (m = f), m || 0 !== l.startOffset || !c || !c.previousElementSibling || "li-marker" !== c.previousElementSibling.getAttribute("data-type") && "task-marker" !== c.previousElementSibling.getAttribute("data-type") || (m = c.previousElementSibling), m) {
                                    var h = Object(N.c)(m, e.sv.element, l).start,
                                        v = "task-marker" === m.getAttribute("data-type"), g = m;
                                    if (v && (g = m.previousElementSibling.previousElementSibling.previousElementSibling), h === m.textContent.length) {
                                        if ("Enter" === t.key && !Object(u.d)(t) && !t.altKey && !t.shiftKey && "" === m.nextElementSibling.textContent.trim()) return "padding" === (null === (r = g.previousElementSibling) || void 0 === r ? void 0 : r.getAttribute("data-type")) ? (g.previousElementSibling.remove(), I(e)) : (v && (g.remove(), m.previousElementSibling.previousElementSibling.remove(), m.previousElementSibling.remove()), m.nextElementSibling.remove(), m.remove(), xe(e)), t.preventDefault(), !0;
                                        if ("Tab" === t.key) return g.insertAdjacentHTML("beforebegin", '<span data-type="padding">' + g.textContent.replace(/\S/g, " ") + "</span>"), /^\d/.test(g.textContent) && (g.textContent = g.textContent.replace(/^\d{1,}/, "1"), l.selectNodeContents(m.firstChild), l.collapse(!1)), I(e), t.preventDefault(), !0
                                    }
                                }
                                if (tt(e, l, t)) return !0;
                                var b = Object(w.d)(s, "data-block", "0"), y = Object(E.b)(s, "SPAN");
                                if ("Enter" === t.key && !Object(u.d)(t) && !t.altKey && !t.shiftKey && b) {
                                    var k = !1, S = b.textContent.match(/^\n+/);
                                    Object(N.c)(b, e.sv.element).start <= (S ? S[0].length : 0) && (k = !0);
                                    var O = "\n";
                                    if (y) {
                                        if ("enter-remove" === (null === (i = y.previousElementSibling) || void 0 === i ? void 0 : i.getAttribute("data-action"))) return y.previousElementSibling.remove(), xe(e), t.preventDefault(), !0;
                                        O += je(y)
                                    }
                                    return l.insertNode(document.createTextNode(O)), l.collapse(!1), b && "" !== b.textContent.trim() && !k ? I(e) : xe(e), t.preventDefault(), !0
                                }
                                if ("Backspace" === t.key && !Object(u.d)(t) && !t.altKey && !t.shiftKey) {
                                    if (y && "newline" === (null === (o = y.previousElementSibling) || void 0 === o ? void 0 : o.getAttribute("data-type")) && 1 === Object(N.c)(y, e.sv.element, l).start && -1 === y.getAttribute("data-type").indexOf("code-block-")) return l.setStart(y, 0), l.extractContents(), "" !== y.textContent.trim() ? I(e) : xe(e), t.preventDefault(), !0;
                                    if (b && 0 === Object(N.c)(b, e.sv.element, l).start && b.previousElementSibling) {
                                        l.extractContents();
                                        var L = b.previousElementSibling.lastElementChild;
                                        return "newline" === L.getAttribute("data-type") && (L.remove(), L = b.previousElementSibling.lastElementChild), "newline" !== L.getAttribute("data-type") && (L.insertAdjacentHTML("afterend", b.innerHTML), b.remove()), "" === b.textContent.trim() || (null === (a = b.previousElementSibling) || void 0 === a ? void 0 : a.querySelector('[data-type="code-block-open-marker"]')) ? ("newline" !== L.getAttribute("data-type") && (l.selectNodeContents(L.lastChild), l.collapse(!1)), xe(e)) : I(e), t.preventDefault(), !0
                                    }
                                }
                                return !1
                            }(e, t)) return
                        } else if ("wysiwyg" === e.currentMode) {
                            if (function (e, t) {
                                if (e.wysiwyg.composingLock = t.isComposing, t.isComposing) return !1;
                                -1 !== t.key.indexOf("Arrow") || "Meta" === t.key || "Control" === t.key || "Alt" === t.key || "Shift" === t.key || "CapsLock" === t.key || "Escape" === t.key || /^F\d{1,2}$/.test(t.key) || e.undo.recordFirstPosition(e, t);
                                var n = Object(N.b)(e.wysiwyg.element), r = n.startContainer;
                                if (!Re(t, e, r)) return !1;
                                if (Ie(n, e, t), pt(n), "Enter" !== t.key && "Tab" !== t.key && "Backspace" !== t.key && -1 === t.key.indexOf("Arrow") && !Object(u.d)(t) && "Escape" !== t.key) return !1;
                                var i = Object(w.c)(r), o = Object(w.f)(r, "P");
                                if (nt(t, e, o, n)) return !0;
                                if (et(n, e, o, t)) return !0;
                                if (lt(e, t, n)) return !0;
                                var l = Object(w.e)(r, "vditor-wysiwyg__block");
                                if (l) {
                                    if ("Escape" === t.key && 2 === l.children.length) return e.wysiwyg.popover.style.display = "none", l.firstElementChild.style.display = "none", e.wysiwyg.element.blur(), t.preventDefault(), !0;
                                    if (!Object(u.d)(t) && !t.shiftKey && t.altKey && "Enter" === t.key && "code-block" === l.getAttribute("data-type")) {
                                        var s = e.wysiwyg.popover.querySelector(".vditor-input");
                                        return s.focus(), s.select(), t.preventDefault(), !0
                                    }
                                    if ("0" === l.getAttribute("data-block")) {
                                        if (st(e, t, l.firstElementChild, n)) return !0;
                                        if (Ke(e, t, n, l.firstElementChild, l)) return !0;
                                        if ("yaml-front-matter" !== l.getAttribute("data-type") && We(e, t, n, l.firstElementChild, l)) return !0
                                    }
                                }
                                if (ct(e, n, t, o)) return !0;
                                var c = Object(w.h)(r, "BLOCKQUOTE");
                                if (c && !t.shiftKey && t.altKey && "Enter" === t.key) {
                                    Object(u.d)(t) ? n.setStartBefore(c) : n.setStartAfter(c), Object(N.h)(n);
                                    var d = document.createElement("p");
                                    return d.setAttribute("data-block", "0"), d.innerHTML = "\n", n.insertNode(d), n.collapse(!0), Object(N.h)(n), F(e), Oe(e), t.preventDefault(), !0
                                }
                                var p, f = Object(E.a)(r);
                                if (f) {
                                    if ("H6" === f.tagName && r.textContent.length === n.startOffset && !Object(u.d)(t) && !t.shiftKey && !t.altKey && "Enter" === t.key) {
                                        var m = document.createElement("p");
                                        return m.textContent = "\n", m.setAttribute("data-block", "0"), r.parentElement.insertAdjacentElement("afterend", m), n.setStart(m, 0), Object(N.h)(n), F(e), Oe(e), t.preventDefault(), !0
                                    }
                                    var h;
                                    if (D("⌘-=", t)) return (h = parseInt(f.tagName.substr(1), 10) - 1) > 0 && (G(e, "h" + h), F(e)), t.preventDefault(), !0;
                                    if (D("⌘--", t)) return (h = parseInt(f.tagName.substr(1), 10) + 1) < 7 && (G(e, "h" + h), F(e)), t.preventDefault(), !0;
                                    "Backspace" !== t.key || Object(u.d)(t) || t.shiftKey || t.altKey || "" !== f.textContent || X(e)
                                }
                                if (dt(e, n, t)) return !0;
                                if (t.altKey && "Enter" === t.key && !Object(u.d)(t) && !t.shiftKey) {
                                    var v = Object(w.f)(r, "A"), g = Object(w.d)(r, "data-type", "link-ref"),
                                        b = Object(w.d)(r, "data-type", "footnotes-ref");
                                    if (v || g || b || f && 2 === f.tagName.length) {
                                        var y = e.wysiwyg.popover.querySelector("input");
                                        y.focus(), y.select()
                                    }
                                }
                                if (Q(e, t)) return !0;
                                if (D("⌘-⇧-U", t) && (p = e.wysiwyg.popover.querySelector('[data-type="up"]'))) return p.click(), t.preventDefault(), !0;
                                if (D("⌘-⇧-D", t) && (p = e.wysiwyg.popover.querySelector('[data-type="down"]'))) return p.click(), t.preventDefault(), !0;
                                if (tt(e, n, t)) return !0;
                                if (!Object(u.d)(t) && t.shiftKey && !t.altKey && "Enter" === t.key && "LI" !== r.parentElement.tagName && "P" !== r.parentElement.tagName) return ["STRONG", "S", "STRONG", "I", "EM", "B"].includes(r.parentElement.tagName) ? n.insertNode(document.createTextNode("\n" + a.a.ZWSP)) : n.insertNode(document.createTextNode("\n")), n.collapse(!1), Object(N.h)(n), F(e), Oe(e), t.preventDefault(), !0;
                                if ("Backspace" === t.key && !Object(u.d)(t) && !t.shiftKey && !t.altKey && "" === n.toString()) {
                                    if (ut(e, n, t, o)) return !0;
                                    if (i) {
                                        if (i.previousElementSibling && i.previousElementSibling.classList.contains("vditor-wysiwyg__block") && "0" === i.previousElementSibling.getAttribute("data-block")) {
                                            var k = Object(N.c)(i, e.wysiwyg.element, n).start;
                                            if (0 === k || 1 === k && i.innerText.startsWith(a.a.ZWSP)) return $(i.previousElementSibling.lastElementChild, e, !1), "" === i.innerHTML.trim().replace(a.a.ZWSP, "") && (i.remove(), F(e)), t.preventDefault(), !0
                                        }
                                        var S = n.startOffset;
                                        if ("" === n.toString() && 3 === r.nodeType && "\n" === r.textContent.charAt(S - 2) && r.textContent.charAt(S - 1) !== a.a.ZWSP && ["STRONG", "S", "STRONG", "I", "EM", "B"].includes(r.parentElement.tagName)) return r.textContent = r.textContent.substring(0, S - 1) + a.a.ZWSP, n.setStart(r, S), n.collapse(!0), F(e), t.preventDefault(), !0;
                                        r.textContent === a.a.ZWSP && 1 === n.startOffset && !r.previousSibling && function (e) {
                                            for (var t = e.startContainer.nextSibling; t && "" === t.textContent;) t = t.nextSibling;
                                            return !(!t || 3 === t.nodeType || "CODE" !== t.tagName && "math-inline" !== t.getAttribute("data-type") && "html-entity" !== t.getAttribute("data-type") && "html-inline" !== t.getAttribute("data-type"))
                                        }(n) && (r.textContent = ""), i.querySelectorAll("span.vditor-wysiwyg__block[data-type='math-inline']").forEach((function (e) {
                                            e.firstElementChild.style.display = "inline", e.lastElementChild.style.display = "none"
                                        })), i.querySelectorAll("span.vditor-wysiwyg__block[data-type='html-entity']").forEach((function (e) {
                                            e.firstElementChild.style.display = "inline", e.lastElementChild.style.display = "none"
                                        }))
                                    }
                                }
                                if (Object(u.e)() && 1 === n.startOffset && r.textContent.indexOf(a.a.ZWSP) > -1 && r.previousSibling && 3 !== r.previousSibling.nodeType && "CODE" === r.previousSibling.tagName && ("Backspace" === t.key || "ArrowLeft" === t.key)) return n.selectNodeContents(r.previousSibling), n.collapse(!1), t.preventDefault(), !0;
                                if (ft(t, i, n)) return t.preventDefault(), !0;
                                if (Pe(n, t.key), "ArrowDown" === t.key) {
                                    var O = r.nextSibling;
                                    O && 3 !== O.nodeType && "math-inline" === O.getAttribute("data-type") && n.setStartAfter(O)
                                }
                                return !1
                            }(e, t)) return
                        } else if ("ir" === e.currentMode && function (e, t) {
                            if (e.ir.composingLock = t.isComposing, t.isComposing) return !1;
                            -1 !== t.key.indexOf("Arrow") || "Meta" === t.key || "Control" === t.key || "Alt" === t.key || "Shift" === t.key || "CapsLock" === t.key || "Escape" === t.key || /^F\d{1,2}$/.test(t.key) || e.undo.recordFirstPosition(e, t);
                            var n = Object(N.b)(e.ir.element), r = n.startContainer;
                            if (!Re(t, e, r)) return !1;
                            if (Ie(n, e, t), pt(n), "Enter" !== t.key && "Tab" !== t.key && "Backspace" !== t.key && -1 === t.key.indexOf("Arrow") && !Object(u.d)(t) && "Escape" !== t.key) return !1;
                            var i = Object(w.d)(r, "data-newline", "1");
                            if (!Object(u.d)(t) && !t.altKey && !t.shiftKey && "Enter" === t.key && i && n.startOffset < i.textContent.length) {
                                var o = i.previousElementSibling;
                                o && (n.insertNode(document.createTextNode(o.textContent)), n.collapse(!1));
                                var l = i.nextSibling;
                                l && (n.insertNode(document.createTextNode(l.textContent)), n.collapse(!0))
                            }
                            var s = Object(w.f)(r, "P");
                            if (nt(t, e, s, n)) return !0;
                            if (et(n, e, s, t)) return !0;
                            if (ct(e, n, t, s)) return !0;
                            if (s && s.previousElementSibling && s.previousElementSibling.classList.contains("vditor-toc") && We(e, t, n, s, s.previousElementSibling)) return !0;
                            var c = Object(w.e)(r, "vditor-ir__marker--pre");
                            if (c && "PRE" === c.tagName) {
                                var d = c.firstChild;
                                if (st(e, t, c, n)) return !0;
                                if (("math-block" === d.getAttribute("data-type") || "html-block" === d.getAttribute("data-type")) && We(e, t, n, d, c.parentElement)) return !0;
                                if (Ke(e, t, n, d, c.parentElement)) return !0
                            }
                            var p = Object(w.d)(r, "data-type", "code-block-info");
                            if (p) {
                                if ("Enter" === t.key || "Tab" === t.key) return n.selectNodeContents(p.nextElementSibling.firstChild), n.collapse(!0), t.preventDefault(), b(e, ["hint"]), !0;
                                if ("Backspace" === t.key) {
                                    var f = Object(N.c)(p, e.ir.element).start;
                                    1 === f && n.setStart(r, 0), 2 === f && (e.hint.recentLanguage = "")
                                }
                                if (We(e, t, n, p, p.parentElement)) return b(e, ["hint"]), !0
                            }
                            var m = Object(w.f)(r, "TD") || Object(w.f)(r, "TH");
                            if (t.key.indexOf("Arrow") > -1 && m) {
                                var h = Be(m);
                                if (h && We(e, t, n, m, h)) return !0;
                                var v = Ue(m);
                                if (v && Ke(e, t, n, m, v)) return !0
                            }
                            if (lt(e, t, n)) return !0;
                            if (dt(e, n, t)) return !0;
                            if (tt(e, n, t)) return !0;
                            var g = Object(E.a)(r);
                            if (g) {
                                var y;
                                if (D("⌘-=", t)) return (y = g.querySelector(".vditor-ir__marker--heading")) && y.textContent.trim().length > 1 && gt(e, y.textContent.substr(1)), t.preventDefault(), !0;
                                if (D("⌘--", t)) return (y = g.querySelector(".vditor-ir__marker--heading")) && y.textContent.trim().length < 6 && gt(e, y.textContent.trim() + "# "), t.preventDefault(), !0
                            }
                            var k = Object(w.c)(r);
                            if ("Backspace" === t.key && !Object(u.d)(t) && !t.shiftKey && !t.altKey && "" === n.toString()) {
                                if (ut(e, n, t, s)) return !0;
                                if (k && k.previousElementSibling && ("code-block" === k.previousElementSibling.getAttribute("data-type") || "math-block" === k.previousElementSibling.getAttribute("data-type"))) {
                                    var S = Object(N.c)(k, e.ir.element, n).start;
                                    if (0 === S || 1 === S && k.innerText.startsWith(a.a.ZWSP)) return n.selectNodeContents(k.previousElementSibling.querySelector(".vditor-ir__marker--pre code")), n.collapse(!1), R(n, e), "" === k.textContent.trim().replace(a.a.ZWSP, "") && (k.remove(), vt(e)), t.preventDefault(), !0
                                }
                                if (g) {
                                    var O = g.firstElementChild.textContent.length;
                                    Object(N.c)(g, e.ir.element).start === O && (n.setStart(g.firstElementChild.firstChild, O - 1), n.collapse(!0), Object(N.h)(n))
                                }
                            }
                            return !("ArrowUp" !== t.key && "ArrowDown" !== t.key || !k || (k.querySelectorAll(".vditor-ir__node").forEach((function (e) {
                                e.contains(r) || e.classList.add("vditor-ir__node--hidden")
                            })), !ft(t, k, n))) || (Pe(n, t.key), !1)
                        }(e, t)) return;
                        if (e.options.ctrlEnter && D("⌘-Enter", t)) return e.options.ctrlEnter(s(e)), void t.preventDefault();
                        if (D("⌘-Z", t) && !e.toolbar.elements.undo) return e.undo.undo(e), void t.preventDefault();
                        if (D("⌘-Y", t) && !e.toolbar.elements.redo) return e.undo.redo(e), void t.preventDefault();
                        if ("Escape" === t.key) return "block" === e.hint.element.style.display ? e.hint.element.style.display = "none" : e.options.esc && !t.isComposing && e.options.esc(s(e)), void t.preventDefault();
                        if (Object(u.d)(t) && t.altKey && !t.shiftKey && /^Digit[1-6]$/.test(t.code)) {
                            if ("wysiwyg" === e.currentMode) {
                                var n = t.code.replace("Digit", "H");
                                Object(w.f)(getSelection().getRangeAt(0).startContainer, n) ? X(e) : G(e, n), F(e)
                            } else "sv" === e.currentMode ? Ae(e, "#".repeat(parseInt(t.code.replace("Digit", ""), 10)) + " ") : "ir" === e.currentMode && gt(e, "#".repeat(parseInt(t.code.replace("Digit", ""), 10)) + " ");
                            return t.preventDefault(), !0
                        }
                        if (Object(u.d)(t) && t.altKey && !t.shiftKey && /^Digit[7-9]$/.test(t.code)) return "Digit7" === t.code ? pe(e, "wysiwyg", t) : "Digit8" === t.code ? pe(e, "ir", t) : "Digit9" === t.code && pe(e, "sv", t), !0;
                        e.options.toolbar.find((function (n) {
                            return !n.hotkey || n.toolbar ? !!n.toolbar && !!n.toolbar.find((function (n) {
                                return !!n.hotkey && (D(n.hotkey, t) ? (e.toolbar.elements[n.name].children[0].dispatchEvent(new CustomEvent(Object(u.b)())), t.preventDefault(), !0) : void 0)
                            })) : D(n.hotkey, t) ? (e.toolbar.elements[n.name].children[0].dispatchEvent(new CustomEvent(Object(u.b)())), t.preventDefault(), !0) : void 0
                        }))
                    }
                }))
            }, Ce = function (e, t) {
                e.options.select && t.addEventListener("selectstart", (function (n) {
                    t.onmouseup = function () {
                        var t = be(e[e.currentMode].element);
                        t && e.options.select(t)
                    }
                }))
            }, Te = function (e, t) {
                var n = Object(N.b)(e.sv.element);
                n.extractContents(), n.insertNode(document.createTextNode(Lute.Caret)), n.insertNode(document.createTextNode(t));
                var r = Object(w.d)(n.startContainer, "data-block", "0");
                r || (r = e.sv.element);
                var i = "<div data-block='0'>" + e.lute.Md2VditorSVDOM(r.textContent).replace(/<span data-type="newline"><br \/><span style="display: none">\n<\/span><\/span><span data-type="newline"><br \/><span style="display: none">\n<\/span><\/span></g, '<span data-type="newline"><br /><span style="display: none">\n</span></span><span data-type="newline"><br /><span style="display: none">\n</span></span></div><div data-block="0"><') + "</div>";
                r.isEqualNode(e.sv.element) ? r.innerHTML = i : r.outerHTML = i, Object(N.f)(e.sv.element, n), Oe(e)
            }, Me = function (e, t, n) {
                void 0 === n && (n = !0);
                var r = e;
                for (3 === r.nodeType && (r = r.parentElement); r;) {
                    if (r.getAttribute("data-type") === t) return r;
                    r = n ? r.previousElementSibling : r.nextElementSibling
                }
                return !1
            }, _e = function (e, t) {
                return k("SpinVditorSVDOM", e, "argument", t.options.debugger), e = "<div data-block='0'>" + t.lute.SpinVditorSVDOM(e).replace(/<span data-type="newline"><br \/><span style="display: none">\n<\/span><\/span><span data-type="newline"><br \/><span style="display: none">\n<\/span><\/span></g, '<span data-type="newline"><br /><span style="display: none">\n</span></span><span data-type="newline"><br /><span style="display: none">\n</span></span></div><div data-block="0"><') + "</div>", k("SpinVditorSVDOM", e, "result", t.options.debugger), e
            }, je = function (e) {
                var t = e.getAttribute("data-type"), n = e.previousElementSibling,
                    r = t && "text" !== t && "table" !== t && "heading-marker" !== t && "newline" !== t && "yaml-front-matter-open-marker" !== t && "yaml-front-matter-close-marker" !== t && "code-block-info" !== t && "code-block-close-marker" !== t && "code-block-open-marker" !== t ? e.textContent : "",
                    i = !1;
                for ("newline" === t && (i = !0); n && !i;) {
                    var o = n.getAttribute("data-type");
                    if ("li-marker" === o || "blockquote-marker" === o || "task-marker" === o || "padding" === o) {
                        var a = n.textContent;
                        if ("li-marker" !== o || "code-block-open-marker" !== t && "code-block-info" !== t) if ("code-block-close-marker" === t && n.nextElementSibling.isSameNode(e)) {
                            var l = Me(e, "code-block-open-marker");
                            l && l.previousElementSibling && (n = l.previousElementSibling, r = a + r)
                        } else r = a + r; else r = a.replace(/\S/g, " ") + r
                    } else "newline" === o && (i = !0);
                    n = n.previousElementSibling
                }
                return r
            }, xe = function (e, t) {
                void 0 === t && (t = {
                    enableAddUndoStack: !0,
                    enableHint: !1,
                    enableInput: !0
                }), t.enableHint && e.hint.render(e), e.preview.render(e);
                var n = s(e);
                "function" == typeof e.options.input && t.enableInput && e.options.input(n), e.options.counter.enable && e.counter.render(e, n), e.options.cache.enable && Object(u.a)() && (localStorage.setItem(e.options.cache.id, n), e.options.cache.after && e.options.cache.after(n)), e.devtools && e.devtools.renderEchart(e), clearTimeout(e.sv.processTimeoutId), e.sv.processTimeoutId = window.setTimeout((function () {
                    t.enableAddUndoStack && !e.sv.composingLock && e.undo.addToUndoStack(e)
                }), 800)
            }, Ae = function (e, t) {
                var n = Object(N.b)(e.sv.element), r = Object(E.b)(n.startContainer, "SPAN");
                r && "" !== r.textContent.trim() && (t = "\n" + t), n.collapse(!0), document.execCommand("insertHTML", !1, t)
            }, Ne = function (e, t, n, r) {
                var i = Object(N.b)(e.sv.element), o = t.getAttribute("data-type");
                0 === e.sv.element.childNodes.length && (e.sv.element.innerHTML = '<span data-type="p" data-block="0"><span data-type="text"><wbr></span></span><span data-type="newline"><br><span style="display: none">\n</span></span>', Object(N.f)(e.sv.element, i));
                var a = Object(w.c)(i.startContainer), l = Object(E.b)(i.startContainer, "SPAN");
                if (a) {
                    if ("link" === o) {
                        var s = void 0;
                        return s = "" === i.toString() ? "" + n + Lute.Caret + r : "" + n + i.toString() + r.replace(")", Lute.Caret + ")"), void document.execCommand("insertHTML", !1, s)
                    }
                    if ("italic" === o || "bold" === o || "strike" === o || "inline-code" === o || "code" === o || "table" === o || "line" === o) {
                        s = void 0;
                        return s = "" === i.toString() ? "" + n + Lute.Caret + ("code" === o ? "" : r) : "" + n + i.toString() + Lute.Caret + ("code" === o ? "" : r), "table" === o || "code" === o && l && "" !== l.textContent ? s = "\n\n" + s : "line" === o && (s = "\n\n" + n + "\n" + Lute.Caret), void document.execCommand("insertHTML", !1, s)
                    }
                    if (("check" === o || "list" === o || "ordered-list" === o || "quote" === o) && l) {
                        var c = "* ";
                        "check" === o ? c = "* [ ] " : "ordered-list" === o ? c = "1. " : "quote" === o && (c = "> ");
                        var d = Me(l, "newline");
                        return d ? d.insertAdjacentText("afterend", c) : a.insertAdjacentText("afterbegin", c), void I(e)
                    }
                    Object(N.f)(e.sv.element, i), xe(e)
                }
            }, He = function (e, t, n) {
                var r = Object(w.c)(t.startContainer);
                if (r || (r = e.wysiwyg.element), n && "formatItalic" !== n.inputType && "deleteByDrag" !== n.inputType && "insertFromDrop" !== n.inputType && "formatBold" !== n.inputType && "formatRemove" !== n.inputType && "formatStrikeThrough" !== n.inputType && "insertUnorderedList" !== n.inputType && "insertOrderedList" !== n.inputType && "formatOutdent" !== n.inputType && "formatIndent" !== n.inputType && "" !== n.inputType || !n) {
                    var i = function (e) {
                        for (var t = e.previousSibling; t;) {
                            if (3 !== t.nodeType && "A" === t.tagName && !t.previousSibling && "" === t.innerHTML.replace(a.a.ZWSP, "") && t.nextSibling) return t;
                            t = t.previousSibling
                        }
                        return !1
                    }(t.startContainer);
                    i && i.remove(), e.wysiwyg.element.querySelectorAll("wbr").forEach((function (e) {
                        e.remove()
                    })), t.insertNode(document.createElement("wbr")), r.querySelectorAll("[style]").forEach((function (e) {
                        e.removeAttribute("style")
                    }));
                    var o = "";
                    ("link-ref-defs-block" === r.getAttribute("data-type") || $e(r.innerText)) && (r = e.wysiwyg.element);
                    var l = r.isEqualNode(e.wysiwyg.element), s = Object(w.d)(r, "data-type", "footnotes-block");
                    if (l) o = r.innerHTML; else {
                        var c, d, u = Object(w.b)(t.startContainer);
                        if (u && !s) r = Object(E.b)(t.startContainer, "BLOCKQUOTE") ? Object(w.c)(t.startContainer) || r : u;
                        if (s && (r = s), o = r.outerHTML, "UL" === r.tagName || "OL" === r.tagName) {
                            var p = r.previousElementSibling, f = r.nextElementSibling;
                            !p || "UL" !== p.tagName && "OL" !== p.tagName || (o = p.outerHTML + o, p.remove()), !f || "UL" !== f.tagName && "OL" !== f.tagName || (o += f.outerHTML, f.remove()), o = o.replace("<div><wbr><br></div>", "<li><p><wbr><br></p></li>")
                        }
                        (c = e.wysiwyg.element.querySelector("[data-type='link-ref-defs-block']")) && !r.isEqualNode(c) && (o += c.outerHTML, c.remove()), (d = e.wysiwyg.element.querySelector("[data-type='footnotes-block']")) && !r.isEqualNode(d) && (o += d.outerHTML, d.remove())
                    }
                    if ('<p data-block="0">```<wbr></p>' === (o = o.replace(/<\/(strong|b)><strong data-marker="\W{2}">/g, "").replace(/<\/(em|i)><em data-marker="\W{1}">/g, "").replace(/<\/(s|strike)><s data-marker="~{1,2}">/g, "")) && e.hint.recentLanguage && (o = '<p data-block="0">```<wbr></p>'.replace("```", "```" + e.hint.recentLanguage)), k("SpinVditorDOM", o, "argument", e.options.debugger), o = e.lute.SpinVditorDOM(o), k("SpinVditorDOM", o, "result", e.options.debugger), l) r.innerHTML = o; else if (r.outerHTML = o, (c = e.wysiwyg.element.querySelector("[data-type='link-ref-defs-block']")) && e.wysiwyg.element.insertAdjacentElement("beforeend", c), (d = e.wysiwyg.element.querySelector("[data-type='footnotes-block']")) && e.wysiwyg.element.insertAdjacentElement("beforeend", d), s) {
                        var m = Object(w.h)(e.wysiwyg.element.querySelector("wbr"), "LI");
                        if (m) {
                            var h = e.wysiwyg.element.querySelector('sup[data-type="footnotes-ref"][data-footnotes-label="' + m.getAttribute("data-marker") + '"]');
                            h && h.setAttribute("aria-label", m.textContent.trim().substr(0, 24))
                        }
                    }
                    (Object(E.a)(r) || o.startsWith("<h") || "deleteContentBackward" === (null == n ? void 0 : n.inputType) || "deleteContentForward" === (null == n ? void 0 : n.inputType)) && Qe(e), Object(N.f)(e.wysiwyg.element, t), e.wysiwyg.element.querySelectorAll(".vditor-wysiwyg__preview[data-render='2']").forEach((function (t) {
                        A(t, e)
                    }))
                }
                F(e, {enableAddUndoStack: !0, enableHint: !0, enableInput: !0})
            }, De = function (e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {value: t}) : e.raw = t, e
            }, Re = function (e, t, n) {
                if (229 === e.keyCode && "" === e.code && "Unidentified" === e.key && "sv" !== t.currentMode) {
                    var r = Object(w.c)(n);
                    if (r && "" === r.textContent.trim()) return t[t.currentMode].composingLock = !0, !1
                }
                return !0
            }, Ie = function (e, t, n) {
                if (!("Enter" === n.key || "Tab" === n.key || "Backspace" === n.key || n.key.indexOf("Arrow") > -1 || Object(u.d)(n) || "Escape" === n.key || n.shiftKey || n.altKey)) {
                    var r = Object(w.f)(e.startContainer, "P") || Object(w.f)(e.startContainer, "LI");
                    if (r && 0 === Object(N.c)(r, t[t.currentMode].element, e).start) {
                        var i = document.createTextNode(a.a.ZWSP);
                        e.insertNode(i), e.setStartAfter(i)
                    }
                }
            }, Pe = function (e, t) {
                if ("ArrowDown" === t || "ArrowUp" === t) {
                    var n = Object(w.d)(e.startContainer, "data-type", "math-inline") || Object(w.d)(e.startContainer, "data-type", "html-entity") || Object(w.d)(e.startContainer, "data-type", "html-inline");
                    n && ("ArrowDown" === t && e.setStartAfter(n.parentElement), "ArrowUp" === t && e.setStartBefore(n.parentElement))
                }
            }, qe = function (e, t) {
                var n = Object(N.b)(e[e.currentMode].element), r = Object(w.c)(n.startContainer);
                r && (r.insertAdjacentHTML(t, '<p data-block="0">' + a.a.ZWSP + "<wbr>\n</p>"), Object(N.f)(e[e.currentMode].element, n), le(e), Ye(e))
            }, Be = function (e) {
                var t = Object(w.f)(e, "TABLE");
                return !(!t || !t.rows[0].cells[0].isSameNode(e)) && t
            }, Ue = function (e) {
                var t = Object(w.f)(e, "TABLE");
                return !(!t || !t.lastElementChild.lastElementChild.lastElementChild.isSameNode(e)) && t
            }, Ve = function (e, t, n) {
                void 0 === n && (n = !0);
                var r = e.previousElementSibling;
                return r || (r = e.parentElement.previousElementSibling ? e.parentElement.previousElementSibling.lastElementChild : "TBODY" === e.parentElement.parentElement.tagName && e.parentElement.parentElement.previousElementSibling ? e.parentElement.parentElement.previousElementSibling.lastElementChild.lastElementChild : null), r && (t.selectNodeContents(r), n || t.collapse(!1), Object(N.h)(t)), r
            }, Ke = function (e, t, n, r, i) {
                var o = Object(N.c)(r, e[e.currentMode].element, n);
                if ("ArrowDown" === t.key && -1 === r.textContent.trimRight().substr(o.start).indexOf("\n") || "ArrowRight" === t.key && o.start >= r.textContent.trimRight().length) {
                    var l = i.nextElementSibling;
                    return !l || l && ("TABLE" === l.tagName || l.getAttribute("data-type")) ? (i.insertAdjacentHTML("afterend", '<p data-block="0">' + a.a.ZWSP + "<wbr></p>"), Object(N.f)(e[e.currentMode].element, n)) : (n.selectNodeContents(l), n.collapse(!0), Object(N.h)(n)), t.preventDefault(), !0
                }
                return !1
            }, We = function (e, t, n, r, i) {
                var o = Object(N.c)(r, e[e.currentMode].element, n);
                if ("ArrowUp" === t.key && -1 === r.textContent.substr(o.start).indexOf("\n") || ("ArrowLeft" === t.key || "Backspace" === t.key && "" === n.toString()) && 0 === o.start) {
                    var l = i.previousElementSibling;
                    return !l || l && ("TABLE" === l.tagName || l.getAttribute("data-type")) ? (i.insertAdjacentHTML("beforebegin", '<p data-block="0">' + a.a.ZWSP + "<wbr></p>"), Object(N.f)(e[e.currentMode].element, n)) : (n.selectNodeContents(l), n.collapse(!1), Object(N.h)(n)), t.preventDefault(), !0
                }
                return !1
            }, Fe = function (e, t, n, r) {
                void 0 === r && (r = !0);
                var i = Object(w.f)(t.startContainer, "LI");
                if (e[e.currentMode].element.querySelectorAll("wbr").forEach((function (e) {
                    e.remove()
                })), t.insertNode(document.createElement("wbr")), r && i) {
                    for (var o = "", a = 0; a < i.parentElement.childElementCount; a++) {
                        var l = i.parentElement.children[a].querySelector("input");
                        l && l.remove(), o += '<p data-block="0">' + i.parentElement.children[a].innerHTML.trimLeft() + "</p>"
                    }
                    i.parentElement.insertAdjacentHTML("beforebegin", o), i.parentElement.remove()
                } else if (i) if ("check" === n) i.parentElement.querySelectorAll("li").forEach((function (e) {
                    e.insertAdjacentHTML("afterbegin", '<input type="checkbox" />' + (0 === e.textContent.indexOf(" ") ? "" : " ")), e.classList.add("vditor-task")
                })); else {
                    i.querySelector("input") && i.parentElement.querySelectorAll("li").forEach((function (e) {
                        e.querySelector("input").remove(), e.classList.remove("vditor-task")
                    }));
                    var s = void 0;
                    (s = "list" === n ? document.createElement("ul") : document.createElement("ol")).innerHTML = i.parentElement.innerHTML, i.parentElement.parentNode.replaceChild(s, i.parentElement)
                } else {
                    var c = Object(w.d)(t.startContainer, "data-block", "0");
                    c || (e[e.currentMode].element.querySelector("wbr").remove(), (c = e[e.currentMode].element.querySelector("p")).innerHTML = "<wbr>"), "check" === n ? (c.insertAdjacentHTML("beforebegin", '<ul data-block="0"><li class="vditor-task"><input type="checkbox" /> ' + c.innerHTML + "</li></ul>"), c.remove()) : "list" === n ? (c.insertAdjacentHTML("beforebegin", '<ul data-block="0"><li>' + c.innerHTML + "</li></ul>"), c.remove()) : "ordered-list" === n && (c.insertAdjacentHTML("beforebegin", '<ol data-block="0"><li>' + c.innerHTML + "</li></ol>"), c.remove())
                }
            }, ze = function (e, t, n) {
                if (t && t.previousElementSibling) {
                    e[e.currentMode].element.querySelectorAll("wbr").forEach((function (e) {
                        e.remove()
                    })), n.insertNode(document.createElement("wbr"));
                    var r = t.parentElement, i = t.getAttribute("data-marker");
                    1 !== i.length && (i = "1" + i.slice(-1)), t.previousElementSibling.insertAdjacentHTML("beforeend", "<" + r.tagName + ' data-block="0"><li data-marker="' + i + '">' + t.innerHTML + "</li></" + r.tagName + ">"), t.remove(), "wysiwyg" === e.currentMode ? r.outerHTML = e.lute.SpinVditorDOM(r.outerHTML) : r.outerHTML = e.lute.SpinVditorIRDOM(r.outerHTML), Object(N.f)(e[e.currentMode].element, n);
                    var o = Object(w.b)(n.startContainer);
                    o && o.querySelectorAll(".vditor-" + e.currentMode + "__preview[data-render='2']").forEach((function (t) {
                        A(t, e), "wysiwyg" === e.currentMode && t.previousElementSibling.setAttribute("style", "display:none")
                    })), Ye(e), le(e)
                } else e[e.currentMode].element.focus()
            }, Ze = function (e, t, n, r) {
                var i = Object(w.f)(t.parentElement, "LI");
                if (i) {
                    e[e.currentMode].element.querySelectorAll("wbr").forEach((function (e) {
                        e.remove()
                    })), n.insertNode(document.createElement("wbr"));
                    var o = t.parentElement, a = o.cloneNode(), l = !1, s = "";
                    o.querySelectorAll("li").forEach((function (e) {
                        l && (s += e.outerHTML, e.nextElementSibling || e.previousElementSibling ? e.remove() : e.parentElement.remove()), e.isSameNode(t) && (l = !0)
                    })), i.insertAdjacentElement("afterend", t), s && (a.innerHTML = s, t.insertAdjacentElement("beforeend", a)), "wysiwyg" === e.currentMode ? r.outerHTML = e.lute.SpinVditorDOM(r.outerHTML) : r.outerHTML = e.lute.SpinVditorIRDOM(r.outerHTML), Object(N.f)(e[e.currentMode].element, n);
                    var c = Object(w.b)(n.startContainer);
                    c && c.querySelectorAll(".vditor-" + e.currentMode + "__preview[data-render='2']").forEach((function (t) {
                        A(t, e), "wysiwyg" === e.currentMode && t.previousElementSibling.setAttribute("style", "display:none")
                    })), Ye(e), le(e)
                } else e[e.currentMode].element.focus()
            }, Je = function (e, t) {
                for (var n = getSelection().getRangeAt(0).startContainer.parentElement, r = e.rows[0].cells.length, i = e.rows.length, o = 0, a = 0; a < i; a++) for (var l = 0; l < r; l++) if (e.rows[a].cells[l].isSameNode(n)) {
                    o = l;
                    break
                }
                for (var s = 0; s < i; s++) e.rows[s].cells[o].setAttribute("align", t)
            }, Ge = function (e) {
                var t = e.trimRight().split("\n").pop();
                return "" !== t && (("" === t.replace(/ |-/g, "") || "" === t.replace(/ |_/g, "") || "" === t.replace(/ |\*/g, "")) && (t.replace(/ /g, "").length > 2 && (!(t.indexOf("-") > -1 && -1 === t.trimLeft().indexOf(" ") && e.trimRight().split("\n").length > 1) && (0 !== t.indexOf("    ") && 0 !== t.indexOf("\t")))))
            }, Xe = function (e) {
                var t = e.trimRight().split("\n");
                return 0 !== (e = t.pop()).indexOf("    ") && 0 !== e.indexOf("\t") && ("" !== (e = e.trimLeft()) && 0 !== t.length && ("" === e.replace(/-/g, "") || "" === e.replace(/=/g, "")))
            }, $e = function (e) {
                return "[toc]" === e.trim().toLowerCase()
            }, Qe = function (e) {
                var t = e[e.currentMode].element;
                e.outline.render(e);
                var n = t.querySelector('[data-type="toc-block"]');
                if (n) {
                    var r = "";
                    Array.from(t.children).forEach((function (t) {
                        if (Object(E.a)(t)) {
                            var n = parseInt(t.tagName.substring(1), 10),
                                i = new Array(2 * (n - 1)).fill("&emsp;").join("");
                            "ir" === e.currentMode ? r += i + '<span data-type="toc-h">' + t.textContent.substring(n + 1).trim() + "</span><br>" : r += i + '<span data-type="toc-h">' + t.textContent.trim() + "</span><br>"
                        }
                    })), n.innerHTML = r || "[ToC]"
                }
            }, Ye = function (e, t) {
                void 0 === t && (t = {
                    enableAddUndoStack: !0,
                    enableHint: !1,
                    enableInput: !0
                }), "wysiwyg" === e.currentMode ? F(e, t) : "ir" === e.currentMode ? vt(e, t) : "sv" === e.currentMode && xe(e, t)
            }, et = function (e, t, n, r) {
                var i = e.startContainer, o = Object(w.f)(i, "LI");
                if (o) {
                    if (!Object(u.d)(r) && !r.altKey && "Enter" === r.key && !r.shiftKey && n && o.contains(n) && n.nextElementSibling) return o && !o.textContent.endsWith("\n") && o.insertAdjacentText("beforeend", "\n"), e.insertNode(document.createTextNode("\n\n")), e.collapse(!1), Ye(t), r.preventDefault(), !0;
                    if (!(Object(u.d)(r) || r.shiftKey || r.altKey || "Backspace" !== r.key || o.previousElementSibling || "" !== e.toString() || 0 !== Object(N.c)(o, t[t.currentMode].element, e).start)) return o.nextElementSibling ? (o.parentElement.insertAdjacentHTML("beforebegin", '<p data-block="0"><wbr>' + o.innerHTML + "</p>"), o.remove()) : o.parentElement.outerHTML = '<p data-block="0"><wbr>' + o.innerHTML + "</p>", Object(N.f)(t[t.currentMode].element, e), Ye(t), r.preventDefault(), !0;
                    if (!Object(u.d)(r) && !r.altKey && "Tab" === r.key) {
                        var a = !1;
                        if ((0 === e.startOffset && (3 === i.nodeType && !i.previousSibling || 3 !== i.nodeType && "LI" === i.nodeName) || o.classList.contains("vditor-task") && 1 === e.startOffset && 3 !== i.previousSibling.nodeType && "INPUT" === i.previousSibling.tagName) && (a = !0), a) return r.shiftKey ? Ze(t, o, e, o.parentElement) : ze(t, o, e), r.preventDefault(), !0
                    }
                }
                return !1
            }, tt = function (e, t, n) {
                if (e.options.tab && "Tab" === n.key) return n.shiftKey || ("" === t.toString() ? (t.insertNode(document.createTextNode(e.options.tab)), t.collapse(!1)) : (t.extractContents(), t.insertNode(document.createTextNode(e.options.tab)), t.collapse(!1))), Object(N.h)(t), Ye(e), n.preventDefault(), !0
            }, nt = function (e, t, n, r) {
                if (n) {
                    if (!Object(u.d)(e) && !e.altKey && "Enter" === e.key) {
                        var o = String.raw(i || (i = De(["", ""], ["", ""])), n.textContent).replace(/\\\|/g, "").trim(),
                            a = o.split("|");
                        if (o.startsWith("|") && o.endsWith("|") && a.length > 3) {
                            var l = a.map((function () {
                                return "---"
                            })).join("|");
                            return l = n.textContent + "\n" + l.substring(3, l.length - 3) + "\n|<wbr>", n.outerHTML = t.lute.SpinVditorDOM(l), Object(N.f)(t[t.currentMode].element, r), Ye(t), Oe(t), e.preventDefault(), !0
                        }
                        if (Ge(n.innerHTML) && n.previousElementSibling) {
                            var s = "", c = n.innerHTML.trimRight().split("\n");
                            return c.length > 1 && (c.pop(), s = '<p data-block="0">' + c.join("\n") + "</p>"), n.insertAdjacentHTML("afterend", s + '<hr data-block="0"><p data-block="0"><wbr>\n</p>'), n.remove(), Object(N.f)(t[t.currentMode].element, r), Ye(t), Oe(t), e.preventDefault(), !0
                        }
                        if (Xe(n.innerHTML)) return "wysiwyg" === t.currentMode ? n.outerHTML = t.lute.SpinVditorDOM(n.innerHTML + '<p data-block="0"><wbr>\n</p>') : n.outerHTML = t.lute.SpinVditorIRDOM(n.innerHTML + '<p data-block="0"><wbr>\n</p>'), Object(N.f)(t[t.currentMode].element, r), Ye(t), Oe(t), e.preventDefault(), !0
                    }
                    if (r.collapsed && n.previousElementSibling && "Backspace" === e.key && !Object(u.d)(e) && !e.altKey && !e.shiftKey && n.textContent.trimRight().split("\n").length > 1 && 0 === Object(N.c)(n, t[t.currentMode].element, r).start) {
                        var d = Object(w.a)(n.previousElementSibling);
                        return d.textContent.endsWith("\n") || (d.textContent = d.textContent + "\n"), d.parentElement.insertAdjacentHTML("beforeend", "<wbr>" + n.innerHTML), n.remove(), Object(N.f)(t[t.currentMode].element, r), !1
                    }
                    return !1
                }
            }, rt = function (e, t, n) {
                for (var r = "", i = 0; i < n.parentElement.childElementCount; i++) r += "<td>" + (0 === i ? " <wbr>" : " ") + "</td>";
                "TH" === n.tagName ? n.parentElement.parentElement.insertAdjacentHTML("afterend", "<tbody><tr>" + r + "</tr></tbody>") : n.parentElement.insertAdjacentHTML("afterend", "<tr>" + r + "</tr>"), Object(N.f)(e[e.currentMode].element, t), Ye(e), Oe(e)
            }, it = function (e, t, n) {
                for (var r = 0, i = n.previousElementSibling; i;) r++, i = i.previousElementSibling;
                for (var o = 0; o < t.rows.length; o++) 0 === o ? t.rows[o].cells[r].insertAdjacentHTML("afterend", "<th> </th>") : t.rows[o].cells[r].insertAdjacentHTML("afterend", "<td> </td>");
                Ye(e)
            }, ot = function (e, t, n) {
                if ("TD" === n.tagName) {
                    var r = n.parentElement.parentElement;
                    n.parentElement.previousElementSibling ? t.selectNodeContents(n.parentElement.previousElementSibling.lastElementChild) : t.selectNodeContents(r.previousElementSibling.lastElementChild.lastElementChild), 1 === r.childElementCount ? r.remove() : n.parentElement.remove(), t.collapse(!1), Object(N.h)(t), Ye(e)
                }
            }, at = function (e, t, n, r) {
                for (var i = 0, o = r.previousElementSibling; o;) i++, o = o.previousElementSibling;
                (r.previousElementSibling || r.nextElementSibling) && (t.selectNodeContents(r.previousElementSibling || r.nextElementSibling), t.collapse(!0));
                for (var a = 0; a < n.rows.length; a++) {
                    var l = n.rows[a].cells;
                    if (1 === l.length) {
                        n.remove(), le(e);
                        break
                    }
                    l[i].remove()
                }
                Object(N.h)(t), Ye(e)
            }, lt = function (e, t, n) {
                var r = n.startContainer, i = Object(w.f)(r, "TD") || Object(w.f)(r, "TH");
                if (i) {
                    if (!Object(u.d)(t) && !t.altKey && "Enter" === t.key) {
                        i.lastElementChild && (!i.lastElementChild || i.lastElementChild.isSameNode(i.lastChild) && "BR" === i.lastElementChild.tagName) || i.insertAdjacentHTML("beforeend", "<br>");
                        var o = document.createElement("br");
                        return n.insertNode(o), n.setStartAfter(o), Ye(e), Oe(e), t.preventDefault(), !0
                    }
                    if ("Tab" === t.key) return t.shiftKey ? (Ve(i, n), t.preventDefault(), !0) : ((d = i.nextElementSibling) || (d = i.parentElement.nextElementSibling ? i.parentElement.nextElementSibling.firstElementChild : "THEAD" === i.parentElement.parentElement.tagName && i.parentElement.parentElement.nextElementSibling ? i.parentElement.parentElement.nextElementSibling.firstElementChild.firstElementChild : null), d && (n.selectNodeContents(d), Object(N.h)(n)), t.preventDefault(), !0);
                    var a = i.parentElement.parentElement.parentElement;
                    if ("ArrowUp" === t.key) {
                        if (t.preventDefault(), "TH" === i.tagName) return a.previousElementSibling ? (n.selectNodeContents(a.previousElementSibling), n.collapse(!1), Object(N.h)(n)) : qe(e, "beforebegin"), !0;
                        for (var l = 0, s = i.parentElement; l < s.cells.length && !s.cells[l].isSameNode(i); l++) ;
                        var c = s.previousElementSibling;
                        return c || (c = s.parentElement.previousElementSibling.firstChild), n.selectNodeContents(c.cells[l]), n.collapse(!1), Object(N.h)(n), !0
                    }
                    if ("ArrowDown" === t.key) {
                        var d;
                        if (t.preventDefault(), !(s = i.parentElement).nextElementSibling && "TD" === i.tagName) return a.nextElementSibling ? (n.selectNodeContents(a.nextElementSibling), n.collapse(!0), Object(N.h)(n)) : qe(e, "afterend"), !0;
                        for (l = 0; l < s.cells.length && !s.cells[l].isSameNode(i); l++) ;
                        return (d = s.nextElementSibling) || (d = s.parentElement.nextElementSibling.firstChild), n.selectNodeContents(d.cells[l]), n.collapse(!0), Object(N.h)(n), !0
                    }
                    if ("wysiwyg" === e.currentMode && !Object(u.d)(t) && "Enter" === t.key && !t.shiftKey && t.altKey) {
                        var p = e.wysiwyg.popover.querySelector(".vditor-input");
                        return p.focus(), p.select(), t.preventDefault(), !0
                    }
                    if (!Object(u.d)(t) && !t.shiftKey && !t.altKey && "Backspace" === t.key && 0 === n.startOffset && "" === n.toString()) return !Ve(i, n, !1) && a && ("" === a.textContent.trim() ? (a.outerHTML = '<p data-block="0"><wbr>\n</p>', Object(N.f)(e[e.currentMode].element, n)) : (n.setStartBefore(a), n.collapse(!0)), Ye(e)), t.preventDefault(), !0;
                    if (D("⌘-=", t)) return rt(e, n, i), t.preventDefault(), !0;
                    if (D("⌘-⇧-=", t)) return it(e, a, i), t.preventDefault(), !0;
                    if (D("⌘--", t)) return ot(e, n, i), t.preventDefault(), !0;
                    if (D("⌘-⇧--", t)) return at(e, n, a, i), t.preventDefault(), !0;
                    if (D("⌘-⇧-L", t)) {
                        if ("ir" === e.currentMode) return Je(a, "left"), Ye(e), t.preventDefault(), !0;
                        if (f = e.wysiwyg.popover.querySelector('[data-type="left"]')) return f.click(), t.preventDefault(), !0
                    }
                    if (D("⌘-⇧-C", t)) {
                        if ("ir" === e.currentMode) return Je(a, "center"), Ye(e), t.preventDefault(), !0;
                        if (f = e.wysiwyg.popover.querySelector('[data-type="center"]')) return f.click(), t.preventDefault(), !0
                    }
                    if (D("⌘-⇧-R", t)) {
                        if ("ir" === e.currentMode) return Je(a, "right"), Ye(e), t.preventDefault(), !0;
                        var f;
                        if (f = e.wysiwyg.popover.querySelector('[data-type="right"]')) return f.click(), t.preventDefault(), !0
                    }
                }
                return !1
            }, st = function (e, t, n, r) {
                if ("PRE" === n.tagName && D("⌘-A", t)) return r.selectNodeContents(n.firstElementChild), t.preventDefault(), !0;
                if (e.options.tab && "Tab" === t.key && !t.shiftKey && "" === r.toString()) return r.insertNode(document.createTextNode(e.options.tab)), r.collapse(!1), Ye(e), t.preventDefault(), !0;
                if ("Backspace" === t.key && !Object(u.d)(t) && !t.shiftKey && !t.altKey) {
                    var i = Object(N.c)(n, e[e.currentMode].element, r);
                    if ((0 === i.start || 1 === i.start && "\n" === n.innerText) && "" === r.toString()) return n.parentElement.outerHTML = '<p data-block="0"><wbr>' + n.firstElementChild.innerHTML + "</p>", Object(N.f)(e[e.currentMode].element, r), Ye(e), t.preventDefault(), !0
                }
                return !Object(u.d)(t) && !t.altKey && "Enter" === t.key && (n.firstElementChild.textContent.endsWith("\n") || n.firstElementChild.insertAdjacentText("beforeend", "\n"), r.extractContents(), r.insertNode(document.createTextNode("\n")), r.collapse(!1), Object(N.h)(r), "wysiwyg" === e.currentMode ? He(e, r) : H(e, r), Oe(e), t.preventDefault(), !0)
            }, ct = function (e, t, n, r) {
                var i = t.startContainer, o = Object(w.f)(i, "BLOCKQUOTE");
                if (o && "" === t.toString()) {
                    if ("Backspace" === n.key && !Object(u.d)(n) && !n.shiftKey && !n.altKey && 0 === Object(N.c)(o, e[e.currentMode].element, t).start) return t.insertNode(document.createElement("wbr")), o.outerHTML = o.innerHTML, Object(N.f)(e[e.currentMode].element, t), Ye(e), n.preventDefault(), !0;
                    if (r && "Enter" === n.key && !Object(u.d)(n) && !n.shiftKey && !n.altKey && "BLOCKQUOTE" === r.parentElement.tagName) {
                        var l = !1;
                        if ("\n" === r.innerHTML.replace(a.a.ZWSP, "") || "" === r.innerHTML.replace(a.a.ZWSP, "") ? (l = !0, r.remove()) : r.innerHTML.endsWith("\n\n") && Object(N.c)(r, e[e.currentMode].element, t).start === r.textContent.length - 1 && (r.innerHTML = r.innerHTML.substr(0, r.innerHTML.length - 2), l = !0), l) return o.insertAdjacentHTML("afterend", '<p data-block="0">' + a.a.ZWSP + "<wbr>\n</p>"), Object(N.f)(e[e.currentMode].element, t), Ye(e), n.preventDefault(), !0
                    }
                    var s = Object(w.c)(i);
                    if ("wysiwyg" === e.currentMode && s && D("⌘-⇧-:", n)) return t.insertNode(document.createElement("wbr")), s.outerHTML = '<blockquote data-block="0">' + s.outerHTML + "</blockquote>", Object(N.f)(e.wysiwyg.element, t), F(e), n.preventDefault(), !0
                }
                return !1
            }, dt = function (e, t, n) {
                var r = t.startContainer, i = Object(w.e)(r, "vditor-task");
                if (i) {
                    if (D("⌘-⇧-J", n)) {
                        var o = i.firstElementChild;
                        return o.checked ? o.removeAttribute("checked") : o.setAttribute("checked", "checked"), Ye(e), n.preventDefault(), !0
                    }
                    if ("Backspace" === n.key && !Object(u.d)(n) && !n.shiftKey && !n.altKey && "" === t.toString() && 1 === t.startOffset && (3 === r.nodeType && r.previousSibling && "INPUT" === r.previousSibling.tagName || 3 !== r.nodeType)) {
                        var a = i.previousElementSibling;
                        if (i.querySelector("input").remove(), a) Object(w.a)(a).parentElement.insertAdjacentHTML("beforeend", "<wbr>" + i.innerHTML.trim()), i.remove(); else i.parentElement.insertAdjacentHTML("beforebegin", '<p data-block="0"><wbr>' + (i.innerHTML.trim() || "\n") + "</p>"), i.nextElementSibling ? i.remove() : i.parentElement.remove();
                        return Object(N.f)(e[e.currentMode].element, t), Ye(e), n.preventDefault(), !0
                    }
                    if ("Enter" === n.key && !Object(u.d)(n) && !n.shiftKey && !n.altKey) {
                        if ("" === i.textContent.trim()) if (Object(w.e)(i.parentElement, "vditor-task")) {
                            var l = Object(w.b)(r);
                            l && Ze(e, i, t, l)
                        } else if (i.nextElementSibling) {
                            var s = "", c = "", d = !1;
                            Array.from(i.parentElement.children).forEach((function (e) {
                                i.isSameNode(e) ? d = !0 : d ? s += e.outerHTML : c += e.outerHTML
                            }));
                            var p = i.parentElement.tagName,
                                f = "OL" === i.parentElement.tagName ? "" : ' data-marker="' + i.parentElement.getAttribute("data-marker") + '"',
                                m = "";
                            c && (m = "UL" === i.parentElement.tagName ? "" : ' start="1"', c = "<" + p + ' data-tight="true"' + f + ' data-block="0">' + c + "</" + p + ">"), i.parentElement.outerHTML = c + '<p data-block="0"><wbr>\n</p><' + p + '\n data-tight="true"' + f + ' data-block="0"' + m + ">" + s + "</" + p + ">"
                        } else i.parentElement.insertAdjacentHTML("afterend", '<p data-block="0"><wbr>\n</p>'), 1 === i.parentElement.querySelectorAll("li").length ? i.parentElement.remove() : i.remove(); else 3 !== r.nodeType && 0 === t.startOffset && "INPUT" === r.firstChild.tagName ? t.setStart(r.childNodes[1], 1) : (t.setEndAfter(i.lastChild), i.insertAdjacentHTML("afterend", '<li class="vditor-task" data-marker="' + i.getAttribute("data-marker") + '"><input type="checkbox"> <wbr></li>'), document.querySelector("wbr").after(t.extractContents()));
                        return Object(N.f)(e[e.currentMode].element, t), Ye(e), Oe(e), n.preventDefault(), !0
                    }
                }
                return !1
            }, ut = function (e, t, n, r) {
                if (3 !== t.startContainer.nodeType) {
                    var i = t.startContainer.children[t.startOffset];
                    if (i && "HR" === i.tagName) return t.selectNodeContents(i.previousElementSibling), t.collapse(!1), n.preventDefault(), !0
                }
                if (r) {
                    var o = r.previousElementSibling;
                    if (o && 0 === Object(N.c)(r, e[e.currentMode].element, t).start && (Object(u.e)() && "HR" === o.tagName || "TABLE" === o.tagName)) {
                        if ("TABLE" === o.tagName) {
                            var a = o.lastElementChild.lastElementChild.lastElementChild;
                            a.innerHTML = a.innerHTML.trimLeft() + "<wbr>" + r.textContent.trim(), r.remove()
                        } else o.remove();
                        return Object(N.f)(e[e.currentMode].element, t), Ye(e), n.preventDefault(), !0
                    }
                }
                return !1
            }, pt = function (e) {
                Object(u.e)() && 3 !== e.startContainer.nodeType && "HR" === e.startContainer.tagName && e.setStartBefore(e.startContainer)
            }, ft = function (e, t, n) {
                var r, i;
                if (!Object(u.e)()) return !1;
                if ("ArrowUp" === e.key && t && "TABLE" === (null === (r = t.previousElementSibling) || void 0 === r ? void 0 : r.tagName)) {
                    var o = t.previousElementSibling;
                    return n.selectNodeContents(o.rows[o.rows.length - 1].lastElementChild), n.collapse(!1), e.preventDefault(), !0
                }
                return !("ArrowDown" !== e.key || !t || "TABLE" !== (null === (i = t.nextElementSibling) || void 0 === i ? void 0 : i.tagName)) && (n.selectNodeContents(t.nextElementSibling.rows[0].cells[0]), n.collapse(!0), e.preventDefault(), !0)
            }, mt = function (e, t, n) {
                var r;
                t.stopPropagation(), t.preventDefault();
                var i = t.clipboardData.getData("text/html"), o = t.clipboardData.getData("text/plain"), l = {},
                    s = function (t) {
                        var n = t.TokensStr();
                        if (34 === t.__internal_object__.Parent.Type && n && -1 === n.indexOf("file://") && e.options.upload.linkToImgUrl) {
                            var r = new XMLHttpRequest;
                            r.open("POST", e.options.upload.linkToImgUrl), e.options.upload.token && r.setRequestHeader("X-Upload-Token", e.options.upload.token), e.options.upload.withCredentials && (r.withCredentials = !0), he(e, r), r.setRequestHeader("Content-Type", "application/json; charset=utf-8"), r.onreadystatechange = function () {
                                if (r.readyState === XMLHttpRequest.DONE) {
                                    if (200 === r.status) {
                                        var t = r.responseText;
                                        e.options.upload.linkToImgFormat && (t = e.options.upload.linkToImgFormat(r.responseText));
                                        var n = JSON.parse(t);
                                        if (0 !== n.code) return void e.tip.show(n.msg);
                                        var i = n.data.originalURL;
                                        if ("sv" === e.currentMode) e.sv.element.querySelectorAll(".vditor-sv__marker--link").forEach((function (e) {
                                            e.textContent === i && (e.textContent = n.data.url)
                                        })); else {
                                            var o = e[e.currentMode].element.querySelector('img[src="' + i + '"]');
                                            o.src = n.data.url, "ir" === e.currentMode && (o.previousElementSibling.previousElementSibling.innerHTML = n.data.url)
                                        }
                                        Ye(e)
                                    } else e.tip.show(r.responseText);
                                    e.options.upload.linkToImgCallback && e.options.upload.linkToImgCallback(r.responseText)
                                }
                            }, r.send(JSON.stringify({url: n}))
                        }
                        return "ir" === e.currentMode ? ['<span class="vditor-ir__marker vditor-ir__marker--link">' + n + "</span>", Lute.WalkStop] : "wysiwyg" === e.currentMode ? ["", Lute.WalkStop] : ['<span class="vditor-sv__marker--link">' + n + "</span>", Lute.WalkStop]
                    };
                i.replace(/&amp;/g, "&").replace(/<(|\/)(html|body|meta)[^>]*?>/gi, "").trim() !== '<a href="' + o + '">' + o + "</a>" && i.replace(/&amp;/g, "&").replace(/<(|\/)(html|body|meta)[^>]*?>/gi, "").trim() !== '\x3c!--StartFragment--\x3e<a href="' + o + '">' + o + "</a>\x3c!--EndFragment--\x3e" || (i = "");
                var c = (new DOMParser).parseFromString(i, "text/html");
                c.body && (i = c.body.innerHTML);
                var d = function (e, t, n) {
                        void 0 === n && (n = "sv");
                        var r = document.createElement("div");
                        r.innerHTML = e;
                        var i = !1;
                        1 === r.childElementCount && r.lastElementChild.style.fontFamily.indexOf("monospace") > -1 && (i = !0);
                        var o = r.querySelectorAll("pre");
                        if (1 === r.childElementCount && 1 === o.length && "vditor-wysiwyg" !== o[0].className && "vditor-sv" !== o[0].className && (i = !0), 0 === e.indexOf('\n<p class="p1">') && (i = !0), 1 === r.childElementCount && "TABLE" === r.firstElementChild.tagName && r.querySelector(".line-number") && r.querySelector(".line-content") && (i = !0), i) {
                            var a = t || e;
                            return /\n/.test(a) || 1 === o.length ? "wysiwyg" === n ? '<div class="vditor-wysiwyg__block" data-block="0" data-type="code-block"><pre><code>' + a.replace(/&/g, "&amp;").replace(/</g, "&lt;") + "<wbr></code></pre></div>" : "\n```\n" + a.replace(/&/g, "&amp;").replace(/</g, "&lt;") + "\n```" : "wysiwyg" === n ? "<code>" + a.replace(/&/g, "&amp;").replace(/</g, "&lt;") + "</code><wbr>" : "`" + a + "`"
                        }
                        return !1
                    }(i, o, e.currentMode),
                    u = "sv" === e.currentMode ? Object(w.d)(t.target, "data-type", "code-block") : Object(w.f)(t.target, "CODE");
                if (u) if ("sv" === e.currentMode) document.execCommand("insertHTML", !1, o.replace(/&/g, "&amp;").replace(/</g, "&lt;")); else {
                    var p = Object(N.c)(t.target, e[e.currentMode].element);
                    "PRE" !== u.parentElement.tagName && (o += a.a.ZWSP), u.textContent = u.textContent.substring(0, p.start) + o + u.textContent.substring(p.end), Object(N.g)(p.start + o.length, p.start + o.length, u.parentElement), (null === (r = u.parentElement) || void 0 === r ? void 0 : r.nextElementSibling.classList.contains("vditor-" + e.currentMode + "__preview")) && (u.parentElement.nextElementSibling.innerHTML = u.outerHTML, A(u.parentElement.nextElementSibling, e))
                } else if (d) n.pasteCode(d); else if ("" !== i.trim()) {
                    var f = document.createElement("div");
                    f.innerHTML = i, f.querySelectorAll("[style]").forEach((function (e) {
                        e.removeAttribute("style")
                    })), f.querySelectorAll(".vditor-copy").forEach((function (e) {
                        e.remove()
                    })), "ir" === e.currentMode ? (l.HTML2VditorIRDOM = {renderLinkDest: s}, e.lute.SetJSRenderers({renderers: l}), Object(N.d)(e.lute.HTML2VditorIRDOM(f.innerHTML), e)) : "wysiwyg" === e.currentMode ? (l.HTML2VditorDOM = {renderLinkDest: s}, e.lute.SetJSRenderers({renderers: l}), Object(N.d)(e.lute.HTML2VditorDOM(f.innerHTML), e)) : (l.Md2VditorSVDOM = {renderLinkDest: s}, e.lute.SetJSRenderers({renderers: l}), Te(e, e.lute.HTML2Md(f.innerHTML).trimRight())), e.outline.render(e)
                } else t.clipboardData.files.length > 0 && e.options.upload.url ? ge(e, t.clipboardData.files) : "" !== o.trim() && 0 === t.clipboardData.files.length && ("ir" === e.currentMode ? (l.Md2VditorIRDOM = {renderLinkDest: s}, e.lute.SetJSRenderers({renderers: l}), Object(N.d)(e.lute.Md2VditorIRDOM(o), e)) : "wysiwyg" === e.currentMode ? (l.Md2VditorDOM = {renderLinkDest: s}, e.lute.SetJSRenderers({renderers: l}), Object(N.d)(e.lute.Md2VditorDOM(o), e)) : (l.Md2VditorSVDOM = {renderLinkDest: s}, e.lute.SetJSRenderers({renderers: l}), Te(e, o)), e.outline.render(e));
                if ("sv" !== e.currentMode) {
                    var m = Object(w.c)(Object(N.b)(e[e.currentMode].element).startContainer);
                    if (m) {
                        var h = Object(N.b)(e[e.currentMode].element);
                        e[e.currentMode].element.querySelectorAll("wbr").forEach((function (e) {
                            e.remove()
                        })), h.insertNode(document.createElement("wbr")), "wysiwyg" === e.currentMode ? m.outerHTML = e.lute.SpinVditorDOM(m.outerHTML) : m.outerHTML = e.lute.SpinVditorIRDOM(m.outerHTML), Object(N.f)(e[e.currentMode].element, h)
                    }
                    e[e.currentMode].element.querySelectorAll(".vditor-" + e.currentMode + "__preview[data-render='2']").forEach((function (t) {
                        A(t, e)
                    }))
                }
                Ye(e)
            }, ht = function (e) {
                e.hint.render(e);
                var t = Object(N.b)(e.ir.element).startContainer, n = Object(w.d)(t, "data-type", "code-block-info");
                if (n) if ("" === n.textContent.replace(a.a.ZWSP, "") && e.hint.recentLanguage) {
                    n.textContent = a.a.ZWSP + e.hint.recentLanguage, Object(N.b)(e.ir.element).selectNodeContents(n)
                } else {
                    var r = [], i = n.textContent.substring(0, Object(N.c)(n, e.ir.element).start).replace(a.a.ZWSP, "");
                    a.a.CODE_LANGUAGES.forEach((function (e) {
                        e.indexOf(i.toLowerCase()) > -1 && r.push({html: e, value: e})
                    })), e.hint.genHTML(r, i, e)
                }
            }, vt = function (e, t) {
                void 0 === t && (t = {
                    enableAddUndoStack: !0,
                    enableHint: !1,
                    enableInput: !0
                }), t.enableHint && ht(e), clearTimeout(e.ir.processTimeoutId), e.ir.processTimeoutId = window.setTimeout((function () {
                    if (!e.ir.composingLock) {
                        var n = s(e);
                        "function" == typeof e.options.input && t.enableInput && e.options.input(n), e.options.counter.enable && e.counter.render(e, n), e.options.cache.enable && Object(u.a)() && (localStorage.setItem(e.options.cache.id, n), e.options.cache.after && e.options.cache.after(n)), e.devtools && e.devtools.renderEchart(e), t.enableAddUndoStack && e.undo.addToUndoStack(e)
                    }
                }), 800)
            }, gt = function (e, t) {
                var n = Object(N.b)(e.ir.element), r = Object(w.c)(n.startContainer) || n.startContainer;
                if (r) {
                    var i = r.querySelector(".vditor-ir__marker--heading");
                    i ? i.innerHTML = t : (r.insertAdjacentText("afterbegin", t), n.selectNodeContents(r), n.collapse(!1)), H(e, n.cloneRange()), W(e)
                }
            }, bt = function (e, t, n) {
                var r = Object(w.d)(e.startContainer, "data-type", n);
                if (r) {
                    r.firstElementChild.remove(), r.lastElementChild.remove(), e.insertNode(document.createElement("wbr"));
                    var i = document.createElement("div");
                    i.innerHTML = t.lute.SpinVditorIRDOM(r.outerHTML), r.outerHTML = i.firstElementChild.innerHTML.trim()
                }
            }, yt = function (e, t, n, r) {
                var i = Object(N.b)(e.ir.element), o = t.getAttribute("data-type"), a = i.startContainer;
                3 === a.nodeType && (a = a.parentElement);
                var l = !0;
                if (t.classList.contains("vditor-menu--current")) if ("quote" === o) {
                    var s = Object(w.f)(a, "BLOCKQUOTE");
                    s && (i.insertNode(document.createElement("wbr")), s.outerHTML = "" === s.innerHTML.trim() ? '<p data-block="0">' + s.innerHTML + "</p>" : s.innerHTML)
                } else if ("link" === o) {
                    var c = Object(w.d)(i.startContainer, "data-type", "a");
                    if (c) {
                        var d = Object(w.e)(i.startContainer, "vditor-ir__link");
                        d ? (i.insertNode(document.createElement("wbr")), c.outerHTML = d.innerHTML) : c.outerHTML = c.querySelector(".vditor-ir__link").innerHTML + "<wbr>"
                    }
                } else "italic" === o ? bt(i, e, "em") : "bold" === o ? bt(i, e, "strong") : "strike" === o ? bt(i, e, "s") : "inline-code" === o ? bt(i, e, "code") : "check" !== o && "list" !== o && "ordered-list" !== o || (Fe(e, i, o), l = !1, t.classList.remove("vditor-menu--current")); else {
                    0 === e.ir.element.childNodes.length && (e.ir.element.innerHTML = '<p data-block="0"><wbr></p>', Object(N.f)(e.ir.element, i));
                    var u = Object(w.c)(i.startContainer);
                    if ("line" === o) {
                        if (u) {
                            var f = '<hr data-block="0"><p data-block="0"><wbr>\n</p>';
                            "" === u.innerHTML.trim() ? u.outerHTML = f : u.insertAdjacentHTML("afterend", f)
                        }
                    } else if ("quote" === o) u && (i.insertNode(document.createElement("wbr")), u.outerHTML = '<blockquote data-block="0">' + u.outerHTML + "</blockquote>", l = !1, t.classList.add("vditor-menu--current")); else if ("link" === o) {
                        var m = void 0;
                        m = "" === i.toString() ? n + "<wbr>" + r : "" + n + i.toString() + r.replace(")", "<wbr>)"), document.execCommand("insertHTML", !1, m), l = !1, t.classList.add("vditor-menu--current")
                    } else if ("italic" === o || "bold" === o || "strike" === o || "inline-code" === o || "code" === o || "table" === o) {
                        m = void 0;
                        m = "" === i.toString() ? n + "<wbr>" + r : "" + n + i.toString() + "<wbr>" + r, "table" === o || "code" === o ? (m = "\n" + m, t.classList.add("vditor-menu--disabled")) : t.classList.add("vditor-menu--current"), document.execCommand("insertHTML", !1, m), "table" === o && (i.selectNodeContents(getSelection().getRangeAt(0).startContainer.parentElement), Object(N.h)(i)), "code" !== o && "inline-code" !== o && (l = !1)
                    } else "check" !== o && "list" !== o && "ordered-list" !== o || (Fe(e, i, o, !1), l = !1, p(e.toolbar.elements, ["check", "list", "ordered-list"]), t.classList.add("vditor-menu--current"))
                }
                Object(N.f)(e.ir.element, i), vt(e), l && W(e)
            }, wt = function () {
                function e(e) {
                    var t = this;
                    this.splitChar = "", this.lastIndex = -1, this.fillEmoji = function (e, n) {
                        t.element.style.display = "none";
                        var r = decodeURIComponent(e.getAttribute("data-value")), i = window.getSelection().getRangeAt(0);
                        if ("ir" === n.currentMode) {
                            var o = Object(w.d)(i.startContainer, "data-type", "code-block-info");
                            if (o) return o.textContent = a.a.ZWSP + r.trimRight(), i.selectNodeContents(o), i.collapse(!1), vt(n), o.parentElement.querySelectorAll("code").forEach((function (e) {
                                e.className = "language-" + r.trimRight()
                            })), A(o.parentElement.querySelector(".vditor-ir__preview"), n), void (t.recentLanguage = r.trimRight())
                        }
                        if ("wysiwyg" === n.currentMode && 3 !== i.startContainer.nodeType && i.startContainer.firstElementChild.classList.contains("vditor-input")) {
                            var l = i.startContainer.firstElementChild;
                            return l.value = r.trimRight(), i.selectNodeContents(l), i.collapse(!1), l.dispatchEvent(new CustomEvent("input")), void (t.recentLanguage = r.trimRight())
                        }
                        if (i.setStart(i.startContainer, t.lastIndex), i.deleteContents(), ":" === t.splitChar && r.indexOf(":") > -1 && "sv" !== n.currentMode ? (Object(N.d)(n.lute.SpinVditorDOM(r), n), i.insertNode(document.createTextNode(" "))) : i.insertNode(document.createTextNode(r)), i.collapse(!1), Object(N.h)(i), "wysiwyg" === n.currentMode) (s = Object(w.e)(i.startContainer, "vditor-wysiwyg__block")) && s.lastElementChild.classList.contains("vditor-wysiwyg__preview") && (s.lastElementChild.innerHTML = s.firstElementChild.innerHTML, A(s.lastElementChild, n)); else if ("ir" === n.currentMode) {
                            var s;
                            (s = Object(w.e)(i.startContainer, "vditor-ir__marker--pre")) && s.nextElementSibling.classList.contains("vditor-ir__preview") && (s.nextElementSibling.innerHTML = s.innerHTML, A(s.nextElementSibling, n))
                        }
                        Ye(n)
                    }, this.timeId = -1, this.element = document.createElement("div"), this.element.className = "vditor-hint", this.recentLanguage = "", e.push({key: ":"})
                }

                return e.prototype.render = function (e) {
                    var t = this;
                    if (window.getSelection().focusNode) {
                        var n, r = getSelection().getRangeAt(0);
                        n = r.startContainer.textContent.substring(0, r.startOffset) || "";
                        var i = this.getKey(n, e.options.hint.extend);
                        if (void 0 === i) this.element.style.display = "none", clearTimeout(this.timeId); else if (":" === this.splitChar) {
                            var o = "" === i ? e.options.hint.emoji : e.lute.GetEmojis(), a = [];
                            Object.keys(o).forEach((function (e) {
                                0 === e.indexOf(i.toLowerCase()) && (o[e].indexOf(".") > -1 ? a.push({
                                    html: '<img src="' + o[e] + '" title=":' + e + ':"/> :' + e + ":",
                                    value: ":" + e + ":"
                                }) : a.push({
                                    html: '<span class="vditor-hint__emoji">' + o[e] + "</span>" + e,
                                    value: o[e]
                                }))
                            })), this.genHTML(a, i, e)
                        } else e.options.hint.extend.forEach((function (n) {
                            n.key === t.splitChar && (clearTimeout(t.timeId), t.timeId = window.setTimeout((function () {
                                t.genHTML(n.hint(i), i, e)
                            }), e.options.hint.delay))
                        }))
                    }
                }, e.prototype.genHTML = function (e, t, n) {
                    var r = this;
                    if (0 !== e.length) {
                        var i = n[n.currentMode].element, o = Object(N.a)(i), a = o.left + n.outline.element.offsetWidth,
                            l = o.top, s = "";
                        e.forEach((function (e, n) {
                            if (!(n > 7)) {
                                var r = e.html;
                                if ("" !== t) {
                                    var i = r.lastIndexOf(">") + 1, o = r.substr(i),
                                        a = o.toLowerCase().indexOf(t.toLowerCase());
                                    a > -1 && (o = o.substring(0, a) + "<b>" + o.substring(a, a + t.length) + "</b>" + o.substring(a + t.length), r = r.substr(0, i) + o)
                                }
                                s += '<button data-value="' + encodeURIComponent(e.value) + ' "\n' + (0 === n ? "class='vditor-hint--current'" : "") + "> " + r + "</button>"
                            }
                        })), this.element.innerHTML = s;
                        var c = parseInt(document.defaultView.getComputedStyle(i, null).getPropertyValue("line-height"), 10);
                        this.element.style.top = l + (c || 22) + "px", this.element.style.left = a + "px", this.element.style.display = "block", this.element.style.right = "auto", this.element.querySelectorAll("button").forEach((function (e) {
                            e.addEventListener("click", (function (t) {
                                r.fillEmoji(e, n), t.preventDefault()
                            }))
                        })), this.element.getBoundingClientRect().bottom > window.innerHeight && (this.element.style.top = l - this.element.offsetHeight + "px"), this.element.getBoundingClientRect().right > window.innerWidth && (this.element.style.left = "auto", this.element.style.right = "0")
                    } else this.element.style.display = "none"
                }, e.prototype.select = function (e, t) {
                    if (0 === this.element.querySelectorAll("button").length || "none" === this.element.style.display) return !1;
                    var n = this.element.querySelector(".vditor-hint--current");
                    if ("ArrowDown" === e.key) return e.preventDefault(), e.stopPropagation(), n.removeAttribute("class"), n.nextElementSibling ? n.nextElementSibling.className = "vditor-hint--current" : this.element.children[0].className = "vditor-hint--current", !0;
                    if ("ArrowUp" === e.key) {
                        if (e.preventDefault(), e.stopPropagation(), n.removeAttribute("class"), n.previousElementSibling) n.previousElementSibling.className = "vditor-hint--current"; else {
                            var r = this.element.children.length;
                            this.element.children[r - 1].className = "vditor-hint--current"
                        }
                        return !0
                    }
                    return !(Object(u.d)(e) || e.shiftKey || e.altKey || "Enter" !== e.key || e.isComposing) && (e.preventDefault(), e.stopPropagation(), this.fillEmoji(n, t), !0)
                }, e.prototype.getKey = function (e, t) {
                    var n, r = this;
                    if (this.lastIndex = -1, this.splitChar = "", t.forEach((function (t) {
                        var n = e.lastIndexOf(t.key);
                        r.lastIndex < n && (r.splitChar = t.key, r.lastIndex = n)
                    })), -1 === this.lastIndex) return n;
                    var i = e.split(this.splitChar), o = i[i.length - 1];
                    if (i.length > 1 && o.trim() === o) if (2 === i.length && "" === i[0] && i[1].length < 32) n = i[1]; else {
                        var a = i[i.length - 2].slice(-1);
                        " " === Object(l.a)(a) && o.length < 32 && (n = o)
                    }
                    return n
                }, e
            }(), Et = function () {
                function e(e) {
                    this.composingLock = !1;
                    var t = document.createElement("div");
                    t.className = "vditor-ir", t.innerHTML = '<pre class="vditor-reset" placeholder="' + e.options.placeholder + '"\n contenteditable="true" spellcheck="false"></pre>', this.element = t.firstElementChild, this.bindEvent(e), ye(e, this.element), we(e, this.element), Le(e, this.element), Ce(e, this.element), Ee(e, this.element), ke(e, this.element, this.copy), Se(e, this.element, this.copy)
                }

                return e.prototype.copy = function (e, t) {
                    var n = getSelection().getRangeAt(0);
                    if ("" !== n.toString()) {
                        e.stopPropagation(), e.preventDefault();
                        var r = document.createElement("div");
                        r.appendChild(n.cloneContents()), e.clipboardData.setData("text/plain", t.lute.VditorIRDOM2Md(r.innerHTML).trim()), e.clipboardData.setData("text/html", "")
                    }
                }, e.prototype.bindEvent = function (e) {
                    var t = this;
                    this.element.addEventListener("paste", (function (t) {
                        mt(e, t, {
                            pasteCode: function (e) {
                                document.execCommand("insertHTML", !1, e)
                            }
                        })
                    })), this.element.addEventListener("compositionstart", (function (e) {
                        t.composingLock = !0
                    })), this.element.addEventListener("compositionend", (function (n) {
                        Object(u.e)() || H(e, getSelection().getRangeAt(0).cloneRange()), t.composingLock = !1
                    })), this.element.addEventListener("input", (function (n) {
                        "deleteByDrag" !== n.inputType && "insertFromDrop" !== n.inputType && (t.preventInput ? t.preventInput = !1 : t.composingLock || H(e, getSelection().getRangeAt(0).cloneRange(), !1, n))
                    })), this.element.addEventListener("click", (function (n) {
                        if ("INPUT" === n.target.tagName) return n.target.checked ? n.target.setAttribute("checked", "checked") : n.target.removeAttribute("checked"), t.preventInput = !0, void vt(e);
                        var r = Object(N.b)(t.element), i = Object(w.e)(n.target, "vditor-ir__preview");
                        if (i || (i = Object(w.e)(r.startContainer, "vditor-ir__preview")), i && (i.previousElementSibling.firstElementChild ? r.selectNodeContents(i.previousElementSibling.firstElementChild) : r.selectNodeContents(i.previousElementSibling), r.collapse(!0), Object(N.h)(r), Oe(e)), "IMG" === n.target.tagName) {
                            var o = n.target.parentElement.querySelector(".vditor-ir__marker--link");
                            o && (r.selectNode(o), Object(N.h)(r))
                        }
                        if (n.target.isEqualNode(t.element) && t.element.lastElementChild && r.collapsed) {
                            var l = t.element.lastElementChild.getBoundingClientRect();
                            n.y > l.top + l.height && ("P" === t.element.lastElementChild.tagName && "" === t.element.lastElementChild.textContent.trim().replace(a.a.ZWSP, "") ? (r.selectNodeContents(t.element.lastElementChild), r.collapse(!1)) : (t.element.insertAdjacentHTML("beforeend", '<p data-block="0">' + a.a.ZWSP + "<wbr></p>"), Object(N.f)(t.element, r)))
                        }
                        "" === r.toString() ? R(r, e) : setTimeout((function () {
                            R(Object(N.b)(t.element), e)
                        })), W(e)
                    })), this.element.addEventListener("keyup", (function (n) {
                        if (!n.isComposing && !Object(u.d)(n)) if ("Enter" === n.key && Oe(e), W(e), "Backspace" !== n.key && "Delete" !== n.key || "" === e.ir.element.innerHTML || 1 !== e.ir.element.childNodes.length || !e.ir.element.firstElementChild || "P" !== e.ir.element.firstElementChild.tagName || 0 !== e.ir.element.firstElementChild.childElementCount || "" !== e.ir.element.textContent && "\n" !== e.ir.element.textContent) {
                            var r = Object(N.b)(t.element);
                            "Backspace" === n.key ? (Object(u.e)() && "\n" === r.startContainer.textContent && 1 === r.startOffset && (r.startContainer.textContent = "", R(r, e)), t.element.querySelectorAll(".language-math").forEach((function (e) {
                                var t = e.querySelector("br");
                                t && t.remove()
                            }))) : n.key.indexOf("Arrow") > -1 ? ("ArrowLeft" !== n.key && "ArrowRight" !== n.key || ht(e), R(r, e)) : 229 === n.keyCode && "" === n.code && "Unidentified" === n.key && R(r, e);
                            var i = Object(w.e)(r.startContainer, "vditor-ir__preview");
                            if (i) {
                                if ("ArrowUp" === n.key || "ArrowLeft" === n.key) return i.previousElementSibling.firstElementChild ? r.selectNodeContents(i.previousElementSibling.firstElementChild) : r.selectNodeContents(i.previousElementSibling), r.collapse(!1), n.preventDefault(), !0;
                                if ("SPAN" === i.tagName && ("ArrowDown" === n.key || "ArrowRight" === n.key)) return "html-entity" === i.parentElement.getAttribute("data-type") ? (i.parentElement.insertAdjacentText("afterend", a.a.ZWSP), r.setStart(i.parentElement.nextSibling, 1)) : r.selectNodeContents(i.parentElement.lastElementChild), r.collapse(!1), n.preventDefault(), !0
                            }
                        } else e.ir.element.innerHTML = ""
                    }))
                }, e
            }(), kt = function (e) {
                return "sv" === e.currentMode ? e.lute.Md2HTML(s(e)) : "wysiwyg" === e.currentMode ? e.lute.VditorDOM2HTML(e.wysiwyg.element.innerHTML) : "ir" === e.currentMode ? e.lute.VditorIRDOM2HTML(e.ir.element.innerHTML) : void 0
            }, St = n(23), Ot = n(21), Lt = function () {
                function e(e) {
                    this.element = document.createElement("div"), this.element.className = "vditor-outline", this.element.innerHTML = '<div class="vditor-outline__title">' + e + '</div>\n<div class="vditor-outline__content"></div>'
                }

                return e.prototype.render = function (e) {
                    "block" === this.element.style.display && ("block" === e.preview.element.style.display ? Object(Ot.a)(e.preview.element.lastElementChild, this.element.lastElementChild, e) : Object(Ot.a)(e[e.currentMode].element, this.element.lastElementChild, e))
                }, e.prototype.toggle = function (e, t) {
                    var n;
                    void 0 === t && (t = !0);
                    var r = null === (n = e.toolbar.elements.outline) || void 0 === n ? void 0 : n.firstElementChild;
                    t && window.innerWidth >= a.a.MOBILE_WIDTH ? (this.element.style.display = "block", this.render(e), null == r || r.classList.add("vditor-menu--current")) : (this.element.style.display = "none", null == r || r.classList.remove("vditor-menu--current")), U(e)
                }, e
            }(), Ct = n(19), Tt = function () {
                function e(e) {
                    var t = this;
                    this.element = document.createElement("div"), this.element.className = "vditor-preview";
                    var n = document.createElement("div");
                    n.className = "vditor-reset", e.options.classes.preview && n.classList.add(e.options.classes.preview), n.style.maxWidth = e.options.preview.maxWidth + "px", n.addEventListener("copy", (function (n) {
                        var r = document.createElement("div");
                        r.className = "vditor-reset", r.appendChild(getSelection().getRangeAt(0).cloneContents()), t.copyToX(e, r), n.preventDefault()
                    }));
                    var r = e.options.preview.actions, i = document.createElement("div");
                    i.className = "vditor-preview__action";
                    for (var o = [], a = 0; a < r.length; a++) {
                        var l = r[a];
                        if ("object" != typeof l) switch (l) {
                            case"desktop":
                                o.push('<button type="button" class="vditor-preview__action--current" data-type="desktop">Desktop</button>');
                                break;
                            case"tablet":
                                o.push('<button type="button" data-type="tablet">Tablet</button>');
                                break;
                            case"mobile":
                                o.push('<button type="button" data-type="mobile">Mobile/Wechat</button>');
                                break;
                            case"mp-wechat":
                                o.push('<button type="button" data-type="mp-wechat" class="vditor-tooltipped vditor-tooltipped__w" aria-label="复制到公众号"><svg><use xlink:href="#vditor-icon-mp-wechat"></use></svg></button>');
                                break;
                            case"zhihu":
                                o.push('<button type="button" data-type="zhihu" class="vditor-tooltipped vditor-tooltipped__w" aria-label="复制到知乎"><svg><use xlink:href="#vditor-icon-zhihu"></use></svg></button>')
                        } else o.push('<button type="button" data-type="' + l.key + '" class="' + l.className + '">' + l.text + "</button>")
                    }
                    i.innerHTML = o.join(""), this.element.appendChild(i), this.element.appendChild(n), i.addEventListener(Object(u.b)(), (function (o) {
                        var a = Object(E.b)(o.target, "BUTTON");
                        if (a) {
                            var l = a.getAttribute("data-type"), s = r.find((function (e) {
                                return (null == e ? void 0 : e.key) === l
                            }));
                            s ? s.click(l) : "mp-wechat" !== l && "zhihu" !== l ? (n.style.width = "desktop" === l ? "auto" : "tablet" === l ? "780px" : "360px", n.scrollWidth > n.parentElement.clientWidth && (n.style.width = "auto"), t.render(e), i.querySelectorAll("button").forEach((function (e) {
                                e.classList.remove("vditor-preview__action--current")
                            })), a.classList.add("vditor-preview__action--current")) : t.copyToX(e, t.element.lastElementChild.cloneNode(!0), l)
                        }
                    }))
                }

                return e.prototype.render = function (e, t) {
                    var n = this;
                    if (clearTimeout(this.mdTimeoutId), "none" !== this.element.style.display) if (t) this.element.lastElementChild.innerHTML = t; else if ("" !== s(e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")) {
                        var r = (new Date).getTime(), i = s(e);
                        this.mdTimeoutId = window.setTimeout((function () {
                            if (e.options.preview.url) {
                                var t = new XMLHttpRequest;
                                t.open("POST", e.options.preview.url), t.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), t.onreadystatechange = function () {
                                    if (t.readyState === XMLHttpRequest.DONE) if (200 === t.status) {
                                        var o = JSON.parse(t.responseText);
                                        if (0 !== o.code) return void e.tip.show(o.msg);
                                        e.options.preview.transform && (o.data = e.options.preview.transform(o.data)), n.element.lastElementChild.innerHTML = o.data, n.afterRender(e, r)
                                    } else {
                                        var a = e.lute.Md2HTML(i);
                                        e.options.preview.transform && (a = e.options.preview.transform(a)), n.element.lastElementChild.innerHTML = a, n.afterRender(e, r)
                                    }
                                }, t.send(JSON.stringify({markdownText: i}))
                            } else {
                                var o = e.lute.Md2HTML(i);
                                e.options.preview.transform && (o = e.options.preview.transform(o)), n.element.lastElementChild.innerHTML = o, n.afterRender(e, r)
                            }
                        }), e.options.preview.delay)
                    } else this.element.lastElementChild.innerHTML = ""; else "renderPerformance" === this.element.getAttribute("data-type") && e.tip.hide()
                }, e.prototype.afterRender = function (e, t) {
                    e.options.preview.parse && e.options.preview.parse(this.element);
                    var n = (new Date).getTime() - t;
                    (new Date).getTime() - t > 2600 ? (e.tip.show(P.a[e.options.lang].performanceTip.replace("${x}", n.toString())), e.preview.element.setAttribute("data-type", "renderPerformance")) : "renderPerformance" === e.preview.element.getAttribute("data-type") && (e.tip.hide(), e.preview.element.removeAttribute("data-type")), Object(L.a)(e.preview.element.lastElementChild, e.options.lang), Object(M.a)(e.options.preview.hljs, e.preview.element.lastElementChild, e.options.cdn), Object(_.a)(e.preview.element.lastElementChild, {
                        cdn: e.options.cdn,
                        math: e.options.preview.math
                    }), Object(j.a)(e.preview.element.lastElementChild, e.options.cdn), Object(C.a)(e.preview.element.lastElementChild, e.options.cdn), Object(T.a)(e.preview.element.lastElementChild, e.options.cdn), Object(O.a)(e.preview.element.lastElementChild, e.options.cdn), Object(x.a)(e.preview.element.lastElementChild, e.options.cdn), Object(S.a)(e.preview.element.lastElementChild, e.options.cdn), Object(Ct.a)(e.preview.element.lastElementChild)
                }, e.prototype.copyToX = function (e, t, n) {
                    void 0 === n && (n = "mp-wechat"), "zhihu" !== n ? t.querySelectorAll(".katex-html .base").forEach((function (e) {
                        e.style.display = "initial"
                    })) : t.querySelectorAll(".vditor-math").forEach((function (e) {
                        e.outerHTML = '<img class="Formula-image" data-eeimg="true" src="//www.zhihu.com/equation?tex=" alt="' + e.getAttribute("data-math") + '\\" style="display: block; margin: 0 auto; max-width: 100%;">'
                    })), t.style.backgroundColor = "#fff", t.querySelectorAll("code").forEach((function (e) {
                        e.style.backgroundImage = "none"
                    })), this.element.append(t);
                    var r = t.ownerDocument.createRange();
                    r.selectNode(t), Object(N.h)(r), document.execCommand("copy"), this.element.lastElementChild.remove(), e.tip.show("已复制，可到" + ("zhihu" === n ? "知乎" : "微信公众号平台") + "进行粘贴")
                }, e
            }(), Mt = function () {
                function e(e) {
                    this.element = document.createElement("div"), this.element.className = "vditor-resize vditor-resize--" + e.options.resize.position, this.element.innerHTML = '<div><svg><use xlink:href="#vditor-icon-resize"></use></svg></div>', this.bindEvent(e)
                }

                return e.prototype.bindEvent = function (e) {
                    var t = this;
                    this.element.addEventListener("mousedown", (function (n) {
                        var r = document, i = n.clientY, o = e.element.offsetHeight,
                            a = 63 + e.element.querySelector(".vditor-toolbar").clientHeight;
                        r.ondragstart = function () {
                            return !1
                        }, window.captureEvents && window.captureEvents(), t.element.classList.add("vditor-resize--selected"), r.onmousemove = function (t) {
                            "top" === e.options.resize.position ? e.element.style.height = Math.max(a, o + (i - t.clientY)) + "px" : e.element.style.height = Math.max(a, o + (t.clientY - i)) + "px", e.options.typewriterMode && (e.sv.element.style.paddingBottom = e.sv.element.parentElement.offsetHeight / 2 + "px")
                        }, r.onmouseup = function () {
                            e.options.resize.after && e.options.resize.after(e.element.offsetHeight - o), window.captureEvents && window.captureEvents(), r.onmousemove = null, r.onmouseup = null, r.ondragstart = null, r.onselectstart = null, r.onselect = null, t.element.classList.remove("vditor-resize--selected")
                        }
                    }))
                }, e
            }(), _t = function () {
                function e(e) {
                    this.composingLock = !1, this.element = document.createElement("pre"), this.element.className = "vditor-sv vditor-reset", this.element.setAttribute("placeholder", e.options.placeholder), this.element.setAttribute("contenteditable", "true"), this.element.setAttribute("spellcheck", "false"), this.bindEvent(e), ye(e, this.element), we(e, this.element), Le(e, this.element), Ce(e, this.element), Ee(e, this.element), ke(e, this.element, this.copy), Se(e, this.element, this.copy)
                }

                return e.prototype.copy = function (e, t) {
                    e.stopPropagation(), e.preventDefault(), e.clipboardData.setData("text/plain", be(t[t.currentMode].element))
                }, e.prototype.bindEvent = function (e) {
                    var t = this;
                    this.element.addEventListener("paste", (function (t) {
                        mt(e, t, {
                            pasteCode: function (e) {
                                document.execCommand("insertHTML", !1, e)
                            }
                        })
                    })), this.element.addEventListener("scroll", (function () {
                        if ("block" === e.preview.element.style.display) {
                            var n = t.element.scrollTop, r = t.element.clientHeight,
                                i = t.element.scrollHeight - parseFloat(t.element.style.paddingBottom || "0"),
                                o = e.preview.element;
                            o.scrollTop = n / r > .5 ? (n + r) * o.scrollHeight / i - r : n * o.scrollHeight / i
                        }
                    })), this.element.addEventListener("compositionstart", (function (e) {
                        t.composingLock = !0
                    })), this.element.addEventListener("compositionend", (function (n) {
                        Object(u.e)() || I(e, n), t.composingLock = !1
                    })), this.element.addEventListener("input", (function (n) {
                        "deleteByDrag" !== n.inputType && "insertFromDrop" !== n.inputType && (t.composingLock || (t.preventInput ? t.preventInput = !1 : I(e, n)))
                    })), this.element.addEventListener("keyup", (function (t) {
                        t.isComposing || Object(u.d)(t) || ("Backspace" !== t.key && "Delete" !== t.key || "" === e.sv.element.innerHTML || 1 !== e.sv.element.childNodes.length || !e.sv.element.firstElementChild || "DIV" !== e.sv.element.firstElementChild.tagName || 2 !== e.sv.element.firstElementChild.childElementCount || "" !== e.sv.element.firstElementChild.textContent && "\n" !== e.sv.element.textContent ? "Enter" === t.key && Oe(e) : e.sv.element.innerHTML = "")
                    }))
                }, e
            }(), jt = function () {
                function e() {
                    this.element = document.createElement("div"), this.element.className = "vditor-tip"
                }

                return e.prototype.show = function (e, t) {
                    var n = this;
                    if (void 0 === t && (t = 6e3), this.element.className = "vditor-tip vditor-tip--show", 0 === t) return this.element.innerHTML = '<div class="vditor-tip__content">' + e + '\n<div class="vditor-tip__close">X</div></div>', void this.element.querySelector(".vditor-tip__close").addEventListener("click", (function () {
                        n.hide()
                    }));
                    this.element.innerHTML = '<div class="vditor-tip__content">' + e + "</div>", setTimeout((function () {
                        n.hide()
                    }), t)
                }, e.prototype.hide = function () {
                    this.element.className = "vditor-messageElementtip", this.element.innerHTML = ""
                }, e
            }(), xt = function (e, t) {
                if (t.options.preview.mode !== e) {
                    switch (t.options.preview.mode = e, e) {
                        case"both":
                            t.sv.element.style.display = "block", t.preview.element.style.display = "block", t.preview.render(t), f(t.toolbar.elements, ["both"]);
                            break;
                        case"editor":
                            t.sv.element.style.display = "block", t.preview.element.style.display = "none", p(t.toolbar.elements, ["both"])
                    }
                    t.devtools && t.devtools.renderEchart(t)
                }
            }, At = function () {
                var e = function (t, n) {
                    return (e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(), Nt = function (e) {
                function t(t, n) {
                    var r = e.call(this, t, n) || this;
                    return "both" === t.options.preview.mode && r.element.children[0].classList.add("vditor-menu--current"), r.element.children[0].addEventListener(Object(u.b)(), (function (e) {
                        r.element.firstElementChild.classList.contains(a.a.CLASS_MENU_DISABLED) || (e.preventDefault(), "sv" === t.currentMode && ("both" === t.options.preview.mode ? xt("editor", t) : xt("both", t)))
                    })), r
                }

                return At(t, e), t
            }(de), Ht = function () {
                this.element = document.createElement("div"), this.element.className = "vditor-toolbar__br"
            }, Dt = n(20), Rt = function () {
                var e = function (t, n) {
                    return (e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(), It = function (e) {
                function t(t, n) {
                    var r = e.call(this, t, n) || this, i = r.element.children[0], o = document.createElement("div");
                    o.className = "vditor-hint" + (2 === n.level ? "" : " vditor-panel--arrow");
                    var l = "";
                    return a.a.CODE_THEME.forEach((function (e) {
                        l += "<button>" + e + "</button>"
                    })), o.innerHTML = '<div style="overflow: auto;max-height:' + window.innerHeight / 2 + 'px">' + l + "</div>", o.addEventListener(Object(u.b)(), (function (e) {
                        "BUTTON" === e.target.tagName && (b(t, ["subToolbar"]), t.options.preview.hljs.style = e.target.textContent, Object(Dt.a)(e.target.textContent, t.options.cdn), e.preventDefault(), e.stopPropagation())
                    })), r.element.appendChild(o), y(t, o, i, n.level), r
                }

                return Rt(t, e), t
            }(de), Pt = function () {
                var e = function (t, n) {
                    return (e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(), qt = function (e) {
                function t(t, n) {
                    var r = e.call(this, t, n) || this, i = r.element.children[0], o = document.createElement("div");
                    o.className = "vditor-hint" + (2 === n.level ? "" : " vditor-panel--arrow");
                    var a = "";
                    return Object.keys(t.options.preview.theme.list).forEach((function (e) {
                        a += '<button data-type="' + e + '">' + t.options.preview.theme.list[e] + "</button>"
                    })), o.innerHTML = '<div style="overflow: auto;max-height:' + window.innerHeight / 2 + 'px">' + a + "</div>", o.addEventListener(Object(u.b)(), (function (e) {
                        "BUTTON" === e.target.tagName && (b(t, ["subToolbar"]), t.options.preview.theme.current = e.target.getAttribute("data-type"), Object(q.a)(t.options.preview.theme.current, t.options.preview.theme.path), e.preventDefault(), e.stopPropagation())
                    })), r.element.appendChild(o), y(t, o, i, n.level), r
                }

                return Pt(t, e), t
            }(de), Bt = function () {
                function e(e) {
                    this.element = document.createElement("span"), this.element.className = "vditor-counter vditor-tooltipped vditor-tooltipped__nw", this.render(e, "")
                }

                return e.prototype.render = function (e, t) {
                    var n = t.endsWith("\n") ? t.length - 1 : t.length;
                    if ("text" === e.options.counter.type && e[e.currentMode]) {
                        var r = e[e.currentMode].element.cloneNode(!0);
                        r.querySelectorAll(".vditor-wysiwyg__preview").forEach((function (e) {
                            e.remove()
                        })), n = r.textContent.length
                    }
                    "number" == typeof e.options.counter.max ? (n > e.options.counter.max ? this.element.className = "vditor-counter vditor-counter--error" : this.element.className = "vditor-counter", this.element.innerHTML = n + "/" + e.options.counter.max) : this.element.innerHTML = "" + n, this.element.setAttribute("aria-label", e.options.counter.type)
                }, e
            }(), Ut = function () {
                var e = function (t, n) {
                    return (e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(), Vt = function (e) {
                function t(t, n) {
                    var r = e.call(this, t, n) || this;
                    return r.element.children[0].innerHTML = n.icon, r.element.children[0].addEventListener(Object(u.b)(), (function (e) {
                        e.preventDefault(), n.click()
                    })), r
                }

                return Ut(t, e), t
            }(de), Kt = function () {
                var e = function (t, n) {
                    return (e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(), Wt = function (e) {
                function t(t, n) {
                    var r = e.call(this, t, n) || this;
                    return r.element.firstElementChild.addEventListener(Object(u.b)(), (function (e) {
                        var n = r.element.firstElementChild;
                        n.classList.contains(a.a.CLASS_MENU_DISABLED) || (e.preventDefault(), n.classList.contains("vditor-menu--current") ? (n.classList.remove("vditor-menu--current"), t.devtools.element.style.display = "none", U(t)) : (n.classList.add("vditor-menu--current"), t.devtools.element.style.display = "block", U(t), t.devtools.renderEchart(t)))
                    })), r
                }

                return Kt(t, e), t
            }(de), Ft = function () {
                this.element = document.createElement("div"), this.element.className = "vditor-toolbar__divider"
            }, zt = function () {
                var e = function (t, n) {
                    return (e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(), Zt = function (e) {
                function t(t, n) {
                    var r = e.call(this, t, n) || this, i = document.createElement("div");
                    i.className = "vditor-panel vditor-panel--arrow";
                    var o = "";
                    Object.keys(t.options.hint.emoji).forEach((function (e) {
                        var n = t.options.hint.emoji[e];
                        n.indexOf(".") > -1 ? o += '<button data-value=":' + e + ': " data-key=":' + e + ':"><img\ndata-value=":' + e + ': " data-key=":' + e + ':" class="vditor-emojis__icon" src="' + n + '"/></button>' : o += '<button data-value="' + n + ' "\n data-key="' + e + '"><span class="vditor-emojis__icon">' + n + "</span></button>"
                    }));
                    var a = '<div class="vditor-emojis__tail">\n    <span class="vditor-emojis__tip"></span><span>' + (t.options.hint.emojiTail || "") + "</span>\n</div>";
                    return i.innerHTML = '<div class="vditor-emojis" style="max-height: ' + ("auto" === t.options.height ? "auto" : t.options.height - 80) + 'px">' + o + "</div>" + a, r.element.appendChild(i), y(t, i, r.element.children[0], n.level), r._bindEvent(t, i), r
                }

                return zt(t, e), t.prototype._bindEvent = function (e, t) {
                    t.querySelectorAll(".vditor-emojis button").forEach((function (n) {
                        n.addEventListener(Object(u.b)(), (function (r) {
                            r.preventDefault();
                            var i = n.getAttribute("data-value"), o = Object(N.b)(e[e.currentMode].element), a = i;
                            if ("wysiwyg" === e.currentMode ? a = e.lute.SpinVditorDOM(i) : "ir" === e.currentMode && (a = e.lute.SpinVditorIRDOM(i)), i.indexOf(":") > -1 && "sv" !== e.currentMode) {
                                var l = document.createElement("div");
                                l.innerHTML = a, a = l.firstElementChild.firstElementChild.outerHTML + " ", Object(N.d)(a, e)
                            } else o.extractContents(), o.insertNode(document.createTextNode(i));
                            o.collapse(!1), Object(N.h)(o), t.style.display = "none", Ye(e)
                        })), n.addEventListener("mouseover", (function (e) {
                            "BUTTON" === e.target.tagName && (t.querySelector(".vditor-emojis__tip").innerHTML = e.target.getAttribute("data-key"))
                        }))
                    }))
                }, t
            }(de), Jt = function (e, t, n) {
                var r = document.createElement("a");
                "download" in r ? (r.download = n, r.style.display = "none", r.href = URL.createObjectURL(new Blob([t])), document.body.appendChild(r), r.click(), r.remove()) : e.tip.show(P.a[e.options.lang].downloadTip, 0)
            }, Gt = function () {
                var e = function (t, n) {
                    return (e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(), Xt = function (e) {
                function t(t, n) {
                    var r = e.call(this, t, n) || this, i = r.element.children[0], o = document.createElement("div");
                    return o.className = "vditor-hint" + (2 === n.level ? "" : " vditor-panel--arrow"), o.innerHTML = '<button data-type="markdown">Markdown</button>\n<button data-type="pdf">PDF</button>\n<button data-type="html">HTML</button>', o.addEventListener(Object(u.b)(), (function (e) {
                        var n = e.target;
                        if ("BUTTON" === n.tagName) {
                            switch (n.getAttribute("data-type")) {
                                case"markdown":
                                    !function (e) {
                                        var t = s(e);
                                        Jt(e, t, t.substr(0, 10) + ".md")
                                    }(t);
                                    break;
                                case"pdf":
                                    !function (e) {
                                        e.tip.show(P.a[e.options.lang].generate, 3800);
                                        var t = document.querySelector("iframe");
                                        t.contentDocument.open(), t.contentDocument.write('<link rel="stylesheet" href="' + e.options.cdn + '/dist/index.css"/>\n<script src="' + e.options.cdn + '/dist/method.min.js"><\/script>\n<div id="preview"></div>\n<script>\nwindow.addEventListener("message", (e) => {\n  if(!e.data) {\n    return;\n  }\n  Vditor.preview(document.getElementById(\'preview\'), e.data, {\n    markdown: {\n      theme: "' + e.options.preview.theme + '"\n    },\n    hljs: {\n      style: "' + e.options.preview.hljs.style + '"\n    }\n  });\n  setTimeout(() => {\n        window.print();\n    }, 3600);\n}, false);\n<\/script>'), t.contentDocument.close(), setTimeout((function () {
                                            t.contentWindow.postMessage(s(e), "*")
                                        }), 200)
                                    }(t);
                                    break;
                                case"html":
                                    !function (e) {
                                        var t = kt(e),
                                            n = '<html><head><link rel="stylesheet" type="text/css" href="' + e.options.cdn + '/dist/index.css"/>\n<script src="' + e.options.cdn + '/dist/method.min.js"><\/script></head>\n<body><div class="vditor-reset" id="preview">' + t + "</div>\n<script>\n    const previewElement = document.getElementById('preview')\n    Vditor.setContentTheme('" + e.options.preview.theme.current + "', '" + e.options.preview.theme.path + "');\n    Vditor.codeRender(previewElement, '" + e.options.lang + "');\n    Vditor.highlightRender(" + JSON.stringify(e.options.preview.hljs) + ", previewElement, '" + e.options.cdn + "');\n    Vditor.mathRender(previewElement, {\n        cdn: '" + e.options.cdn + "',\n        math: " + JSON.stringify(e.options.preview.math) + ",\n    });\n    Vditor.mermaidRender(previewElement, '" + e.options.cdn + "');\n    Vditor.flowchartRender(previewElement, '" + e.options.cdn + "');\n    Vditor.graphvizRender(previewElement, '" + e.options.cdn + "');\n    Vditor.chartRender(previewElement, '" + e.options.cdn + "');\n    Vditor.mindmapRender(previewElement, '" + e.options.cdn + "');\n    Vditor.abcRender(previewElement, '" + e.options.cdn + "');\n    Vditor.mediaRender(previewElement);\n<\/script></body></html>";
                                        Jt(e, n, t.substr(0, 10) + ".html")
                                    }(t)
                            }
                            b(t, ["subToolbar"]), e.preventDefault(), e.stopPropagation()
                        }
                    })), r.element.appendChild(o), y(t, o, i, n.level), r
                }

                return Gt(t, e), t
            }(de), $t = function () {
                var e = function (t, n) {
                    return (e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(), Qt = function (e) {
                function t(t, n) {
                    var r = e.call(this, t, n) || this;
                    return r._bindEvent(t, n), r
                }

                return $t(t, e), t.prototype._bindEvent = function (e, t) {
                    this.element.children[0].addEventListener(Object(u.b)(), (function (n) {
                        n.preventDefault(), e.element.className.includes("vditor--fullscreen") ? (t.level || (this.innerHTML = t.icon), e.element.classList.remove("vditor--fullscreen"), Object.keys(e.toolbar.elements).forEach((function (t) {
                            var n = e.toolbar.elements[t].firstChild;
                            n && (n.className = n.className.replace("__s", "__n"))
                        })), e.counter && (e.counter.element.className = e.counter.element.className.replace("__s", "__n"))) : (t.level || (this.innerHTML = '<svg><use xlink:href="#vditor-icon-contract"></use></svg>'), e.element.classList.add("vditor--fullscreen"), Object.keys(e.toolbar.elements).forEach((function (t) {
                            var n = e.toolbar.elements[t].firstChild;
                            n && (n.className = n.className.replace("__n", "__s"))
                        })), e.counter && (e.counter.element.className = e.counter.element.className.replace("__n", "__s"))), e.devtools && e.devtools.renderEchart(e), t.click && t.click(e.element.classList.contains("vditor--fullscreen")), U(e), V(e)
                    }))
                }, t
            }(de), Yt = function () {
                var e = function (t, n) {
                    return (e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(), en = function (e) {
                function t(t, n) {
                    var r = e.call(this, t, n) || this, i = document.createElement("div");
                    return i.className = "vditor-hint vditor-panel--arrow", i.innerHTML = '<button data-tag="h1" data-value="# ">Heading 1 ' + Object(u.g)("&lt;⌘-⌥-1>") + '</button>\n<button data-tag="h2" data-value="## ">Heading 2 &lt;' + Object(u.g)("⌘-⌥-2") + '></button>\n<button data-tag="h3" data-value="### ">Heading 3 &lt;' + Object(u.g)("⌘-⌥-3") + '></button>\n<button data-tag="h4" data-value="#### ">Heading 4 &lt;' + Object(u.g)("⌘-⌥-4") + '></button>\n<button data-tag="h5" data-value="##### ">Heading 5 &lt;' + Object(u.g)("⌘-⌥-5") + '></button>\n<button data-tag="h6" data-value="###### ">Heading 6 &lt;' + Object(u.g)("⌘-⌥-6") + "></button>", r.element.appendChild(i), r._bindEvent(t, i), r
                }

                return Yt(t, e), t.prototype._bindEvent = function (e, t) {
                    var n = this.element.children[0];
                    n.addEventListener(Object(u.b)(), (function (r) {
                        r.preventDefault(), n.classList.contains(a.a.CLASS_MENU_DISABLED) || (n.blur(), n.classList.contains("vditor-menu--current") ? ("wysiwyg" === e.currentMode ? (X(e), F(e)) : "ir" === e.currentMode && gt(e, ""), n.classList.remove("vditor-menu--current")) : (b(e, ["subToolbar"]), t.style.display = "block"))
                    }));
                    for (var r = 0; r < 6; r++) t.children.item(r).addEventListener(Object(u.b)(), (function (r) {
                        r.preventDefault(), "wysiwyg" === e.currentMode ? (G(e, r.target.getAttribute("data-tag")), F(e), n.classList.add("vditor-menu--current")) : "ir" === e.currentMode ? (gt(e, r.target.getAttribute("data-value")), n.classList.add("vditor-menu--current")) : Ae(e, r.target.getAttribute("data-value")), t.style.display = "none"
                    }))
                }, t
            }(de), tn = function () {
                var e = function (t, n) {
                    return (e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(), nn = function (e) {
                function t(t, n) {
                    var r = e.call(this, t, n) || this;
                    return r.element.children[0].addEventListener(Object(u.b)(), (function (e) {
                        e.preventDefault(), t.tip.show('<div style="margin-bottom:14px;font-size: 14px;line-height: 22px;min-width:300px;max-width: 360px;display: flex;">\n<div style="margin-top: 14px;flex: 1">\n    <div>Markdown 使用指南</div>\n    <ul style="list-style: none">\n        <li><a href="https://ld246.com/article/1583308420519" target="_blank">语法速查手册</a></li>\n        <li><a href="https://ld246.com/article/1583129520165" target="_blank">基础语法</a></li>\n        <li><a href="https://ld246.com/article/1583305480675" target="_blank">扩展语法</a></li>\n        <li><a href="https://ld246.com/article/1582778815353" target="_blank">键盘快捷键</a></li>\n    </ul>\n</div>\n<div style="margin-top: 14px;flex: 1">\n    <div>Vditor 支持</div>\n    <ul style="list-style: none">\n        <li><a href="https://github.com/Vanessa219/vditor/issues" target="_blank">Issues</a></li>\n        <li><a href="https://ld246.com/tag/vditor" target="_blank">官方讨论区</a></li>\n        <li><a href="https://ld246.com/article/1549638745630" target="_blank">开发手册</a></li>\n        <li><a href="https://ld246.com/guide/markdown" target="_blank">演示地址</a></li>\n    </ul>\n</div></div>', 0)
                    })), r
                }

                return tn(t, e), t
            }(de), rn = function () {
                var e = function (t, n) {
                    return (e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(), on = function (e) {
                function t(t, n) {
                    var r = e.call(this, t, n) || this;
                    return r.element.children[0].addEventListener(Object(u.b)(), (function (e) {
                        if (e.preventDefault(), !r.element.firstElementChild.classList.contains(a.a.CLASS_MENU_DISABLED) && "sv" !== t.currentMode) {
                            var n = Object(N.b)(t[t.currentMode].element), i = Object(w.f)(n.startContainer, "LI");
                            i && ze(t, i, n)
                        }
                    })), r
                }

                return rn(t, e), t
            }(de), an = function () {
                var e = function (t, n) {
                    return (e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(), ln = function (e) {
                function t(t, n) {
                    var r = e.call(this, t, n) || this;
                    return r.element.children[0].addEventListener(Object(u.b)(), (function (e) {
                        e.preventDefault(), t.tip.show('<div style="max-width: 520px; font-size: 14px;line-height: 22px;margin-bottom: 14px;">\n<p style="text-align: center;margin: 14px 0">\n    <em>下一代的 Markdown 编辑器，为未来而构建</em>\n</p>\n<div style="display: flex;margin-bottom: 14px;flex-wrap: wrap;align-items: center">\n    <img src="https://cdn.jsdelivr.net/npm/vditor/src/assets/images/logo.png" style="margin: 0 auto;height: 68px"/>\n    <div>&nbsp;&nbsp;</div>\n    <div style="flex: 1;min-width: 250px">\n        Vditor 是一款浏览器端的 Markdown 编辑器，支持所见即所得、即时渲染（类似 Typora）和分屏预览模式。\n        它使用 TypeScript 实现，支持原生 JavaScript、Vue、React、Angular，提供<a target="_blank" href="https://b3log.org/siyuan">桌面版</a>。\n    </div>\n</div>\n<div style="display: flex;flex-wrap: wrap;">\n    <ul style="list-style: none;flex: 1;min-width:148px">\n        <li>\n        项目地址：<a href="https://b3log.org/vditor" target="_blank">b3log.org/vditor</a>\n        </li>\n        <li>\n        开源协议：MIT\n        </li>\n    </ul>\n    <ul style="list-style: none;margin-right: 18px">\n        <li>\n        组件版本：Vditor v' + a.b + " / Lute v" + Lute.Version + '\n        </li>\n        <li>\n        赞助捐赠：<a href="https://ld246.com/sponsor" target="_blank">https://ld246.com/sponsor</a>\n        </li>\n    </ul>\n</div>\n</div>', 0)
                    })), r
                }

                return an(t, e), t
            }(de), sn = function () {
                var e = function (t, n) {
                    return (e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(), cn = function (e) {
                function t(t, n) {
                    var r = e.call(this, t, n) || this;
                    return r.element.children[0].addEventListener(Object(u.b)(), (function (e) {
                        e.preventDefault(), r.element.firstElementChild.classList.contains(a.a.CLASS_MENU_DISABLED) || "sv" === t.currentMode || qe(t, "afterend")
                    })), r
                }

                return sn(t, e), t
            }(de), dn = function () {
                var e = function (t, n) {
                    return (e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(), un = function (e) {
                function t(t, n) {
                    var r = e.call(this, t, n) || this;
                    return r.element.children[0].addEventListener(Object(u.b)(), (function (e) {
                        e.preventDefault(), r.element.firstElementChild.classList.contains(a.a.CLASS_MENU_DISABLED) || "sv" === t.currentMode || qe(t, "beforebegin")
                    })), r
                }

                return dn(t, e), t
            }(de), pn = function () {
                var e = function (t, n) {
                    return (e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(), fn = function (e) {
                function t(t, n) {
                    var r = e.call(this, t, n) || this;
                    return r.element.children[0].addEventListener(Object(u.b)(), (function (e) {
                        if (e.preventDefault(), !r.element.firstElementChild.classList.contains(a.a.CLASS_MENU_DISABLED) && "sv" !== t.currentMode) {
                            var n = Object(N.b)(t[t.currentMode].element), i = Object(w.f)(n.startContainer, "LI");
                            i && Ze(t, i, n, i.parentElement)
                        }
                    })), r
                }

                return pn(t, e), t
            }(de), mn = function () {
                var e = function (t, n) {
                    return (e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(), hn = function (e) {
                function t(t, n) {
                    var r = e.call(this, t, n) || this;
                    return t.options.outline && r.element.firstElementChild.classList.add("vditor-menu--current"), r.element.children[0].addEventListener(Object(u.b)(), (function (e) {
                        e.preventDefault(), t.toolbar.elements.outline.firstElementChild.classList.contains(a.a.CLASS_MENU_DISABLED) || (t.options.outline = !r.element.firstElementChild.classList.contains("vditor-menu--current"), t.outline.toggle(t, t.options.outline))
                    })), r
                }

                return mn(t, e), t
            }(de), vn = function () {
                var e = function (t, n) {
                    return (e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(), gn = function (e) {
                function t(t, n) {
                    var r = e.call(this, t, n) || this;
                    return r._bindEvent(t), r
                }

                return vn(t, e), t.prototype._bindEvent = function (e) {
                    var t = this;
                    this.element.children[0].addEventListener(Object(u.b)(), (function (n) {
                        n.preventDefault();
                        var r = t.element.firstElementChild;
                        if (!r.classList.contains(a.a.CLASS_MENU_DISABLED)) {
                            var i = a.a.EDIT_TOOLBARS.concat(["both", "edit-mode", "devtools"]);
                            r.classList.contains("vditor-menu--current") ? (r.classList.remove("vditor-menu--current"), "sv" === e.currentMode ? (e.sv.element.style.display = "block", "both" === e.options.preview.mode ? e.preview.element.style.display = "block" : e.preview.element.style.display = "none") : (e[e.currentMode].element.parentElement.style.display = "block", e.preview.element.style.display = "none"), m(e.toolbar.elements, i), e.outline.render(e)) : (h(e.toolbar.elements, i), e.preview.element.style.display = "block", "sv" === e.currentMode ? e.sv.element.style.display = "none" : e[e.currentMode].element.parentElement.style.display = "none", e.preview.render(e), r.classList.add("vditor-menu--current"), b(e, ["subToolbar", "hint", "popover"]), setTimeout((function () {
                                e.outline.render(e)
                            }), e.options.preview.delay + 10)), U(e)
                        }
                    }))
                }, t
            }(de), bn = function () {
                function e(e) {
                    var t;
                    if (this.SAMPLE_RATE = 5e3, this.isRecording = !1, this.readyFlag = !1, this.leftChannel = [], this.rightChannel = [], this.recordingLength = 0, "undefined" != typeof AudioContext) t = new AudioContext; else {
                        if (!webkitAudioContext) return;
                        t = new webkitAudioContext
                    }
                    this.DEFAULT_SAMPLE_RATE = t.sampleRate;
                    var n = t.createGain();
                    t.createMediaStreamSource(e).connect(n), this.recorder = t.createScriptProcessor(2048, 2, 1), this.recorder.onaudioprocess = null, n.connect(this.recorder), this.recorder.connect(t.destination), this.readyFlag = !0
                }

                return e.prototype.cloneChannelData = function (e, t) {
                    this.leftChannel.push(new Float32Array(e)), this.rightChannel.push(new Float32Array(t)), this.recordingLength += 2048
                }, e.prototype.startRecordingNewWavFile = function () {
                    this.readyFlag && (this.isRecording = !0, this.leftChannel.length = this.rightChannel.length = 0, this.recordingLength = 0)
                }, e.prototype.stopRecording = function () {
                    this.isRecording = !1
                }, e.prototype.buildWavFileBlob = function () {
                    for (var e = this.mergeBuffers(this.leftChannel), t = this.mergeBuffers(this.rightChannel), n = new Float32Array(e.length), r = 0; r < e.length; ++r) n[r] = .5 * (e[r] + t[r]);
                    this.DEFAULT_SAMPLE_RATE > this.SAMPLE_RATE && (n = this.downSampleBuffer(n, this.SAMPLE_RATE));
                    var i = 44 + 2 * n.length, o = new ArrayBuffer(i), a = new DataView(o);
                    this.writeUTFBytes(a, 0, "RIFF"), a.setUint32(4, i, !0), this.writeUTFBytes(a, 8, "WAVE"), this.writeUTFBytes(a, 12, "fmt "), a.setUint32(16, 16, !0), a.setUint16(20, 1, !0), a.setUint16(22, 1, !0), a.setUint32(24, this.SAMPLE_RATE, !0), a.setUint32(28, 2 * this.SAMPLE_RATE, !0), a.setUint16(32, 2, !0), a.setUint16(34, 16, !0);
                    var l = 2 * n.length;
                    this.writeUTFBytes(a, 36, "data"), a.setUint32(40, l, !0);
                    for (var s = n.length, c = 44, d = 0; d < s; d++) a.setInt16(c, 32767 * n[d], !0), c += 2;
                    return new Blob([a], {type: "audio/wav"})
                }, e.prototype.downSampleBuffer = function (e, t) {
                    if (t === this.DEFAULT_SAMPLE_RATE) return e;
                    if (t > this.DEFAULT_SAMPLE_RATE) return e;
                    for (var n = this.DEFAULT_SAMPLE_RATE / t, r = Math.round(e.length / n), i = new Float32Array(r), o = 0, a = 0; o < i.length;) {
                        for (var l = Math.round((o + 1) * n), s = 0, c = 0, d = a; d < l && d < e.length; d++) s += e[d], c++;
                        i[o] = s / c, o++, a = l
                    }
                    return i
                }, e.prototype.mergeBuffers = function (e) {
                    for (var t = new Float32Array(this.recordingLength), n = 0, r = e.length, i = 0; i < r; ++i) {
                        var o = e[i];
                        t.set(o, n), n += o.length
                    }
                    return t
                }, e.prototype.writeUTFBytes = function (e, t, n) {
                    for (var r = n.length, i = 0; i < r; i++) e.setUint8(t + i, n.charCodeAt(i))
                }, e
            }(), yn = function () {
                var e = function (t, n) {
                    return (e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(), wn = function (e) {
                function t(t, n) {
                    var r = e.call(this, t, n) || this;
                    return r._bindEvent(t), r
                }

                return yn(t, e), t.prototype._bindEvent = function (e) {
                    var t, n = this;
                    this.element.children[0].addEventListener(Object(u.b)(), (function (r) {
                        if (r.preventDefault(), !n.element.firstElementChild.classList.contains(a.a.CLASS_MENU_DISABLED)) {
                            var i = e[e.currentMode].element;
                            if (t) if (t.isRecording) {
                                t.stopRecording(), e.tip.hide();
                                var o = new File([t.buildWavFileBlob()], "record" + (new Date).getTime() + ".wav", {type: "video/webm"});
                                ge(e, [o]), n.element.children[0].classList.remove("vditor-menu--current")
                            } else e.tip.show(P.a[e.options.lang].recording), i.setAttribute("contenteditable", "false"), t.startRecordingNewWavFile(), n.element.children[0].classList.add("vditor-menu--current"); else navigator.mediaDevices.getUserMedia({audio: !0}).then((function (r) {
                                (t = new bn(r)).recorder.onaudioprocess = function (e) {
                                    if (t.isRecording) {
                                        var n = e.inputBuffer.getChannelData(0), r = e.inputBuffer.getChannelData(1);
                                        t.cloneChannelData(n, r)
                                    }
                                }, t.startRecordingNewWavFile(), e.tip.show(P.a[e.options.lang].recording), i.setAttribute("contenteditable", "false"), n.element.children[0].classList.add("vditor-menu--current")
                            })).catch((function () {
                                e.tip.show(P.a[e.options.lang]["record-tip"])
                            }))
                        }
                    }))
                }, t
            }(de), En = function () {
                var e = function (t, n) {
                    return (e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(), kn = function (e) {
                function t(t, n) {
                    var r = e.call(this, t, n) || this;
                    return h({redo: r.element}, ["redo"]), r.element.children[0].addEventListener(Object(u.b)(), (function (e) {
                        e.preventDefault(), r.element.firstElementChild.classList.contains(a.a.CLASS_MENU_DISABLED) || t.undo.redo(t)
                    })), r
                }

                return En(t, e), t
            }(de), Sn = function () {
                var e = function (t, n) {
                    return (e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(), On = function (e) {
                function t(t, n) {
                    var r = e.call(this, t, n) || this;
                    return h({undo: r.element}, ["undo"]), r.element.children[0].addEventListener(Object(u.b)(), (function (e) {
                        e.preventDefault(), r.element.firstElementChild.classList.contains(a.a.CLASS_MENU_DISABLED) || t.undo.undo(t)
                    })), r
                }

                return Sn(t, e), t
            }(de), Ln = function () {
                var e = function (t, n) {
                    return (e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(), Cn = function (e) {
                function t(t, n) {
                    var r = e.call(this, t, n) || this, i = '<input type="file"';
                    return t.options.upload.multiple && (i += ' multiple="multiple"'), t.options.upload.accept && (i += ' accept="' + t.options.upload.accept + '"'), r.element.children[0].innerHTML = "" + (n.icon || '<svg><use xlink:href="#vditor-icon-upload"></use></svg>') + i + ">", r._bindEvent(t), r
                }

                return Ln(t, e), t.prototype._bindEvent = function (e) {
                    var t = this;
                    this.element.querySelector("input").addEventListener("change", (function (n) {
                        t.element.firstElementChild.classList.contains(a.a.CLASS_MENU_DISABLED) || 0 !== n.target.files.length && ge(e, n.target.files, n.target)
                    }))
                }, t
            }(de), Tn = function () {
                function e(e) {
                    var t = this, n = e.options;
                    this.elements = {}, this.element = document.createElement("div"), this.element.className = "vditor-toolbar", n.toolbar.forEach((function (n, r) {
                        var i = t.genItem(e, n, r);
                        if (t.element.appendChild(i), n.toolbar) {
                            var o = document.createElement("div");
                            o.className = "vditor-hint vditor-panel--arrow", o.addEventListener(Object(u.b)(), (function (e) {
                                o.style.display = "none"
                            })), n.toolbar.forEach((function (n, i) {
                                n.level = 2, o.appendChild(t.genItem(e, n, r + i))
                            })), i.appendChild(o), y(e, o, i.children[0])
                        }
                    })), e.options.toolbarConfig.hide && this.element.classList.add("vditor-toolbar--hide"), e.options.toolbarConfig.pin && this.element.classList.add("vditor-toolbar--pin"), e.options.counter.enable && (e.counter = new Bt(e), this.element.appendChild(e.counter.element))
                }

                return e.prototype.genItem = function (e, t, n) {
                    var r;
                    switch (t.name) {
                        case"bold":
                        case"italic":
                        case"more":
                        case"strike":
                        case"line":
                        case"quote":
                        case"list":
                        case"ordered-list":
                        case"check":
                        case"code":
                        case"inline-code":
                        case"link":
                        case"table":
                            r = new de(e, t);
                            break;
                        case"emoji":
                            r = new Zt(e, t);
                            break;
                        case"headings":
                            r = new en(e, t);
                            break;
                        case"|":
                            r = new Ft;
                            break;
                        case"br":
                            r = new Ht;
                            break;
                        case"undo":
                            r = new On(e, t);
                            break;
                        case"redo":
                            r = new kn(e, t);
                            break;
                        case"help":
                            r = new nn(e, t);
                            break;
                        case"both":
                            r = new Nt(e, t);
                            break;
                        case"preview":
                            r = new gn(e, t);
                            break;
                        case"fullscreen":
                            r = new Qt(e, t);
                            break;
                        case"upload":
                            r = new Cn(e, t);
                            break;
                        case"record":
                            r = new wn(e, t);
                            break;
                        case"info":
                            r = new ln(e, t);
                            break;
                        case"edit-mode":
                            r = new fe(e, t);
                            break;
                        case"devtools":
                            r = new Wt(e, t);
                            break;
                        case"outdent":
                            r = new fn(e, t);
                            break;
                        case"indent":
                            r = new on(e, t);
                            break;
                        case"outline":
                            r = new hn(e, t);
                            break;
                        case"insert-after":
                            r = new cn(e, t);
                            break;
                        case"insert-before":
                            r = new un(e, t);
                            break;
                        case"code-theme":
                            r = new It(e, t);
                            break;
                        case"content-theme":
                            r = new qt(e, t);
                            break;
                        case"export":
                            r = new Xt(e, t);
                            break;
                        default:
                            r = new Vt(e, t)
                    }
                    if (r) {
                        var i = t.name;
                        return "br" !== i && "|" !== i || (i += n), this.elements[i] = r.element, r.element
                    }
                }, e
            }(), Mn = n(25), _n = n.n(Mn), jn = function () {
                function e() {
                    this.stackSize = 50, this.resetStack(), this.dmp = new _n.a
                }

                return e.prototype.clearStack = function (e) {
                    this.resetStack(), this.resetIcon(e)
                }, e.prototype.resetIcon = function (e) {
                    e.toolbar && (this[e.currentMode].undoStack.length > 1 ? m(e.toolbar.elements, ["undo"]) : h(e.toolbar.elements, ["undo"]), 0 !== this[e.currentMode].redoStack.length ? m(e.toolbar.elements, ["redo"]) : h(e.toolbar.elements, ["redo"]))
                }, e.prototype.undo = function (e) {
                    if ("false" !== e[e.currentMode].element.getAttribute("contenteditable") && !(this[e.currentMode].undoStack.length < 2)) {
                        var t = this[e.currentMode].undoStack.pop();
                        t && (this[e.currentMode].redoStack.push(t), this.renderDiff(t, e), this[e.currentMode].hasUndo = !0, b(e, ["hint"]))
                    }
                }, e.prototype.redo = function (e) {
                    if ("false" !== e[e.currentMode].element.getAttribute("contenteditable")) {
                        var t = this[e.currentMode].redoStack.pop();
                        t && (this[e.currentMode].undoStack.push(t), this.renderDiff(t, e, !0))
                    }
                }, e.prototype.recordFirstPosition = function (e, t) {
                    if (0 !== getSelection().rangeCount && !(1 !== this[e.currentMode].undoStack.length || 0 === this[e.currentMode].undoStack[0].length || this[e.currentMode].redoStack.length > 0 || Object(u.e)() && "Backspace" === t.key || Object(u.f)())) {
                        var n = this.addCaret(e);
                        n.replace("<wbr>", "").replace(" vditor-ir__node--expand", "") === this[e.currentMode].undoStack[0][0].diffs[0][1].replace("<wbr>", "") && (this[e.currentMode].undoStack[0][0].diffs[0][1] = n, this[e.currentMode].lastText = n)
                    }
                }, e.prototype.addToUndoStack = function (e) {
                    var t = this.addCaret(e, !0), n = this.dmp.diff_main(t, this[e.currentMode].lastText, !0),
                        r = this.dmp.patch_make(t, this[e.currentMode].lastText, n);
                    0 === r.length && this[e.currentMode].undoStack.length > 0 || (this[e.currentMode].lastText = t, this[e.currentMode].undoStack.push(r), this[e.currentMode].undoStack.length > this.stackSize && this[e.currentMode].undoStack.shift(), this[e.currentMode].hasUndo && (this[e.currentMode].redoStack = [], this[e.currentMode].hasUndo = !1, h(e.toolbar.elements, ["redo"])), this[e.currentMode].undoStack.length > 1 && m(e.toolbar.elements, ["undo"]))
                }, e.prototype.renderDiff = function (e, t, n) {
                    var r;
                    if (void 0 === n && (n = !1), n) {
                        var i = this.dmp.patch_deepCopy(e).reverse();
                        i.forEach((function (e) {
                            e.diffs.forEach((function (e) {
                                e[0] = -e[0]
                            }))
                        })), r = this.dmp.patch_apply(i, this[t.currentMode].lastText)[0]
                    } else r = this.dmp.patch_apply(e, this[t.currentMode].lastText)[0];
                    if (this[t.currentMode].lastText = r, t[t.currentMode].element.innerHTML = r, "sv" !== t.currentMode && t[t.currentMode].element.querySelectorAll(".vditor-" + t.currentMode + "__preview[data-render='2']").forEach((function (e) {
                        A(e, t)
                    })), t[t.currentMode].element.querySelector("wbr")) Object(N.f)(t[t.currentMode].element, t[t.currentMode].element.ownerDocument.createRange()), Oe(t); else {
                        var o = getSelection().getRangeAt(0);
                        o.setEndBefore(t[t.currentMode].element), o.collapse(!1)
                    }
                    Ye(t, {
                        enableAddUndoStack: !1,
                        enableHint: !1,
                        enableInput: !0
                    }), le(t), t.ir.element.querySelectorAll(".vditor-ir__preview .language-echarts").forEach((function (e) {
                        e.innerHTML = e.parentElement.previousElementSibling.firstElementChild.innerHTML, e.removeAttribute("_echarts_instance_"), e.removeAttribute("data-processed"), Object(O.a)(e.parentElement, t.options.cdn)
                    })), t.ir.element.querySelectorAll(".vditor-ir__preview .language-mindmap").forEach((function (e) {
                        e.innerHTML = e.parentElement.previousElementSibling.firstElementChild.innerHTML, e.removeAttribute("_echarts_instance_"), e.removeAttribute("data-processed"), Object(x.a)(e.parentElement, t.options.cdn)
                    })), this[t.currentMode].undoStack.length > 1 ? m(t.toolbar.elements, ["undo"]) : h(t.toolbar.elements, ["undo"]), 0 !== this[t.currentMode].redoStack.length ? m(t.toolbar.elements, ["redo"]) : h(t.toolbar.elements, ["redo"])
                }, e.prototype.resetStack = function () {
                    this.ir = {hasUndo: !1, lastText: "", redoStack: [], undoStack: []}, this.sv = {
                        hasUndo: !1,
                        lastText: "",
                        redoStack: [],
                        undoStack: []
                    }, this.wysiwyg = {hasUndo: !1, lastText: "", redoStack: [], undoStack: []}
                }, e.prototype.addCaret = function (e, t) {
                    var n;
                    if (void 0 === t && (t = !1), 0 !== getSelection().rangeCount && !e[e.currentMode].element.querySelector("wbr")) {
                        var r = getSelection().getRangeAt(0);
                        if (e[e.currentMode].element.contains(r.startContainer)) {
                            n = r.cloneRange();
                            var i = document.createElement("span");
                            i.className = "vditor-wbr", r.insertNode(i)
                        }
                    }
                    var o = e[e.currentMode].element.innerHTML;
                    return e[e.currentMode].element.querySelectorAll(".vditor-wbr").forEach((function (e) {
                        e.remove()
                    })), t && n && Object(N.h)(n), o.replace('<span class="vditor-wbr"></span>', "<wbr>")
                }, e
            }(), xn = n(22), An = function () {
                function e(e) {
                    this.defaultOptions = {
                        after: void 0,
                        cache: {enable: !0},
                        cdn: a.a.CDN,
                        classes: {preview: ""},
                        counter: {enable: !1, type: "markdown"},
                        debugger: !1,
                        height: "auto",
                        hint: {
                            delay: 200,
                            emoji: {
                                "+1": "👍",
                                "-1": "👎",
                                confused: "😕",
                                eyes: "👀️",
                                heart: "❤️",
                                rocket: "🚀️",
                                smile: "😄",
                                tada: "🎉️"
                            },
                            emojiPath: a.a.CDN + "/dist/images/emoji",
                            extend: []
                        },
                        icon: "ant",
                        lang: "zh_CN",
                        mode: "ir",
                        outline: !1,
                        placeholder: "",
                        preview: {
                            actions: ["desktop", "tablet", "mobile", "mp-wechat", "zhihu"],
                            delay: 1e3,
                            hljs: a.a.HLJS_OPTIONS,
                            markdown: a.a.MARKDOWN_OPTIONS,
                            math: a.a.MATH_OPTIONS,
                            maxWidth: 800,
                            mode: "both",
                            theme: a.a.THEME_OPTIONS
                        },
                        resize: {enable: !1, position: "bottom"},
                        theme: "classic",
                        toolbar: ["emoji", "headings", "bold", "italic", "strike", "link", "|", "list", "ordered-list", "check", "outdent", "indent", "|", "quote", "line", "code", "inline-code", "insert-before", "insert-after", "|", "upload", "record", "table", "|", "undo", "redo", "|", "fullscreen", "edit-mode", {
                            name: "more",
                            toolbar: ["both", "code-theme", "content-theme", "export", "outline", "preview", "devtools", "info", "help"]
                        }],
                        toolbarConfig: {hide: !1, pin: !1},
                        typewriterMode: !1,
                        upload: {
                            extraData: {}, fieldName: "file[]", filename: function (e) {
                                return e.replace(/\W/g, "")
                            }, linkToImgUrl: "", max: 10485760, multiple: !0, url: "", withCredentials: !1
                        },
                        value: "",
                        width: "auto"
                    }, this.options = e
                }

                return e.prototype.merge = function () {
                    var e, t, n;
                    this.options && (this.options.toolbar ? this.options.toolbar = this.mergeToolbar(this.options.toolbar) : this.options.toolbar = this.mergeToolbar(this.defaultOptions.toolbar), (null === (t = null === (e = this.options.preview) || void 0 === e ? void 0 : e.theme) || void 0 === t ? void 0 : t.list) && (this.defaultOptions.preview.theme.list = this.options.preview.theme.list), (null === (n = this.options.hint) || void 0 === n ? void 0 : n.emoji) && (this.defaultOptions.hint.emoji = this.options.hint.emoji));
                    var r = Object(xn.a)(this.defaultOptions, this.options);
                    if (r.cache.enable && !r.cache.id) throw new Error("need options.cache.id, see https://ld246.com/article/1549638745630#options");
                    return r
                }, e.prototype.mergeToolbar = function (e) {
                    var t = this, n = [{
                        icon: '<svg><use xlink:href="#vditor-icon-export"></use></svg>',
                        name: "export",
                        tipPosition: "ne"
                    }, {
                        hotkey: "⌘-E",
                        icon: '<svg><use xlink:href="#vditor-icon-emoji"></use></svg>',
                        name: "emoji",
                        tipPosition: "ne"
                    }, {
                        hotkey: "⌘-H",
                        icon: '<svg><use xlink:href="#vditor-icon-headings"></use></svg>',
                        name: "headings",
                        tipPosition: "ne"
                    }, {
                        hotkey: "⌘-B",
                        icon: '<svg><use xlink:href="#vditor-icon-bold"></use></svg>',
                        name: "bold",
                        prefix: "**",
                        suffix: "**",
                        tipPosition: "ne"
                    }, {
                        hotkey: "⌘-I",
                        icon: '<svg><use xlink:href="#vditor-icon-italic"></use></svg>',
                        name: "italic",
                        prefix: "*",
                        suffix: "*",
                        tipPosition: "ne"
                    }, {
                        hotkey: "⌘-D",
                        icon: '<svg><use xlink:href="#vditor-icon-strike"></use></svg>',
                        name: "strike",
                        prefix: "~~",
                        suffix: "~~",
                        tipPosition: "ne"
                    }, {
                        hotkey: "⌘-K",
                        icon: '<svg><use xlink:href="#vditor-icon-link"></use></svg>',
                        name: "link",
                        prefix: "[",
                        suffix: "](https://)",
                        tipPosition: "n"
                    }, {name: "|"}, {
                        hotkey: "⌘-L",
                        icon: '<svg><use xlink:href="#vditor-icon-list"></use></svg>',
                        name: "list",
                        prefix: "* ",
                        tipPosition: "n"
                    }, {
                        hotkey: "⌘-O",
                        icon: '<svg><use xlink:href="#vditor-icon-ordered-list"></use></svg>',
                        name: "ordered-list",
                        prefix: "1. ",
                        tipPosition: "n"
                    }, {
                        hotkey: "⌘-J",
                        icon: '<svg><use xlink:href="#vditor-icon-check"></use></svg>',
                        name: "check",
                        prefix: "* [ ] ",
                        tipPosition: "n"
                    }, {
                        hotkey: "⌘-⇧-I",
                        icon: '<svg><use xlink:href="#vditor-icon-outdent"></use></svg>',
                        name: "outdent",
                        tipPosition: "n"
                    }, {
                        hotkey: "⌘-⇧-O",
                        icon: '<svg><use xlink:href="#vditor-icon-indent"></use></svg>',
                        name: "indent",
                        tipPosition: "n"
                    }, {name: "|"}, {
                        hotkey: "⌘-;",
                        icon: '<svg><use xlink:href="#vditor-icon-quote"></use></svg>',
                        name: "quote",
                        prefix: "> ",
                        tipPosition: "n"
                    }, {
                        hotkey: "⌘-⇧-H",
                        icon: '<svg><use xlink:href="#vditor-icon-line"></use></svg>',
                        name: "line",
                        prefix: "---",
                        tipPosition: "n"
                    }, {
                        hotkey: "⌘-U",
                        icon: '<svg><use xlink:href="#vditor-icon-code"></use></svg>',
                        name: "code",
                        prefix: "```",
                        suffix: "\n```",
                        tipPosition: "n"
                    }, {
                        hotkey: "⌘-G",
                        icon: '<svg><use xlink:href="#vditor-icon-inline-code"></use></svg>',
                        name: "inline-code",
                        prefix: "`",
                        suffix: "`",
                        tipPosition: "n"
                    }, {
                        hotkey: "⌘-⇧-B",
                        icon: '<svg><use xlink:href="#vditor-icon-before"></use></svg>',
                        name: "insert-before",
                        tipPosition: "n"
                    }, {
                        hotkey: "⌘-⇧-E",
                        icon: '<svg><use xlink:href="#vditor-icon-after"></use></svg>',
                        name: "insert-after",
                        tipPosition: "n"
                    }, {name: "|"}, {
                        icon: '<svg><use xlink:href="#vditor-icon-upload"></use></svg>',
                        name: "upload",
                        tipPosition: "n"
                    }, {
                        icon: '<svg><use xlink:href="#vditor-icon-record"></use></svg>',
                        name: "record",
                        tipPosition: "n"
                    }, {
                        hotkey: "⌘-M",
                        icon: '<svg><use xlink:href="#vditor-icon-table"></use></svg>',
                        name: "table",
                        prefix: "| col1",
                        suffix: " | col2 | col3 |\n| --- | --- | --- |\n|  |  |  |\n|  |  |  |",
                        tipPosition: "n"
                    }, {name: "|"}, {
                        hotkey: "⌘-Z",
                        icon: '<svg><use xlink:href="#vditor-icon-undo"></use></svg>',
                        name: "undo",
                        tipPosition: "nw"
                    }, {
                        hotkey: "⌘-Y",
                        icon: '<svg><use xlink:href="#vditor-icon-redo"></use></svg>',
                        name: "redo",
                        tipPosition: "nw"
                    }, {name: "|"}, {
                        icon: '<svg><use xlink:href="#vditor-icon-more"></use></svg>',
                        name: "more",
                        tipPosition: "e"
                    }, {
                        hotkey: "⌘-'",
                        icon: '<svg><use xlink:href="#vditor-icon-fullscreen"></use></svg>',
                        name: "fullscreen",
                        tipPosition: "nw"
                    }, {
                        icon: '<svg><use xlink:href="#vditor-icon-edit"></use></svg>',
                        name: "edit-mode",
                        tipPosition: "nw"
                    }, {
                        hotkey: "⌘-P",
                        icon: '<svg><use xlink:href="#vditor-icon-both"></use></svg>',
                        name: "both",
                        tipPosition: "nw"
                    }, {
                        icon: '<svg><use xlink:href="#vditor-icon-preview"></use></svg>',
                        name: "preview",
                        tipPosition: "nw"
                    }, {
                        icon: '<svg><use xlink:href="#vditor-icon-align-center"></use></svg>',
                        name: "outline",
                        tipPosition: "nw"
                    }, {
                        icon: '<svg><use xlink:href="#vditor-icon-theme"></use></svg>',
                        name: "content-theme",
                        tipPosition: "nw"
                    }, {
                        icon: '<svg><use xlink:href="#vditor-icon-code-theme"></use></svg>',
                        name: "code-theme",
                        tipPosition: "nw"
                    }, {
                        icon: '<svg><use xlink:href="#vditor-icon-bug"></use></svg>',
                        name: "devtools",
                        tipPosition: "nw"
                    }, {
                        icon: '<svg><use xlink:href="#vditor-icon-info"></use></svg>',
                        name: "info",
                        tipPosition: "nw"
                    }, {
                        icon: '<svg><use xlink:href="#vditor-icon-help"></use></svg>',
                        name: "help",
                        tipPosition: "nw"
                    }, {name: "br"}], r = [];
                    return e.forEach((function (e) {
                        var i = e;
                        n.forEach((function (t) {
                            "string" == typeof e && t.name === e && (i = t), "object" == typeof e && t.name === e.name && (i = Object.assign({}, t, e))
                        })), e.toolbar && (i.toolbar = t.mergeToolbar(e.toolbar)), r.push(i)
                    })), r
                }, e
            }(), Nn = function () {
                function e(e) {
                    this.composingLock = !1;
                    var t = document.createElement("div");
                    t.className = "vditor-wysiwyg", t.innerHTML = '<pre class="vditor-reset" placeholder="' + e.options.placeholder + '"\n contenteditable="true" spellcheck="false"></pre>\n<div class="vditor-panel vditor-panel--none"></div>', this.element = t.firstElementChild, this.popover = t.lastElementChild, this.bindEvent(e), ye(e, this.element), we(e, this.element), Le(e, this.element), Ce(e, this.element), Ee(e, this.element), ke(e, this.element, this.copy), Se(e, this.element, this.copy)
                }

                return e.prototype.copy = function (e, t) {
                    var n = getSelection().getRangeAt(0);
                    if ("" !== n.toString()) {
                        e.stopPropagation(), e.preventDefault();
                        var r = Object(w.f)(n.startContainer, "CODE"), i = Object(w.f)(n.endContainer, "CODE");
                        if (r && i && i.isSameNode(r)) {
                            var o = "";
                            return o = "PRE" === r.parentElement.tagName ? n.toString() : "`" + n.toString() + "`", e.clipboardData.setData("text/plain", o), void e.clipboardData.setData("text/html", "")
                        }
                        var a = Object(w.f)(n.startContainer, "A"), l = Object(w.f)(n.endContainer, "A");
                        if (a && l && l.isSameNode(a)) {
                            var s = a.getAttribute("title") || "";
                            return s && (s = ' "' + s + '"'), e.clipboardData.setData("text/plain", "[" + n.toString() + "](" + a.getAttribute("href") + s + ")"), void e.clipboardData.setData("text/html", "")
                        }
                        var c = document.createElement("div");
                        c.appendChild(n.cloneContents()), e.clipboardData.setData("text/plain", t.lute.VditorDOM2Md(c.innerHTML).trim()), e.clipboardData.setData("text/html", "")
                    }
                }, e.prototype.bindEvent = function (e) {
                    var t = this;
                    window.addEventListener("scroll", (function () {
                        if (b(e, ["hint"]), "block" === t.popover.style.display) {
                            var n = parseInt(t.popover.getAttribute("data-top"), 10);
                            "auto" === e.options.height ? e.options.toolbarConfig.pin && (t.popover.style.top = Math.max(n, window.scrollY - e.element.offsetTop - 8) + "px") : e.options.toolbarConfig.pin && 0 === e.toolbar.element.getBoundingClientRect().top && (t.popover.style.top = Math.max(window.scrollY - e.element.offsetTop - 8, Math.min(n - e.wysiwyg.element.scrollTop, t.element.clientHeight - 21)) + "px")
                        }
                    })), this.element.addEventListener("scroll", (function () {
                        if (b(e, ["hint"]), "block" === t.popover.style.display) {
                            var n = parseInt(t.popover.getAttribute("data-top"), 10) - e.wysiwyg.element.scrollTop, r = -8;
                            e.options.toolbarConfig.pin && 0 === e.toolbar.element.getBoundingClientRect().top && (r = window.scrollY - e.element.offsetTop + r), t.popover.style.top = Math.max(r, Math.min(n, t.element.clientHeight - 21)) + "px"
                        }
                    })), this.element.addEventListener("paste", (function (n) {
                        mt(e, n, {
                            pasteCode: function (n) {
                                var r = Object(N.b)(t.element), i = document.createElement("template");
                                i.innerHTML = n, r.insertNode(i.content.cloneNode(!0));
                                var o = Object(w.d)(r.startContainer, "data-block", "0");
                                o ? o.outerHTML = e.lute.SpinVditorDOM(o.outerHTML) : e.wysiwyg.element.innerHTML = e.lute.SpinVditorDOM(e.wysiwyg.element.innerHTML), Object(N.f)(e.wysiwyg.element, r)
                            }
                        })
                    })), this.element.addEventListener("compositionstart", (function () {
                        t.composingLock = !0
                    })), this.element.addEventListener("compositionend", (function (n) {
                        var r = Object(E.a)(getSelection().getRangeAt(0).startContainer);
                        r && "" === r.textContent ? Qe(e) : (Object(u.e)() || He(e, getSelection().getRangeAt(0).cloneRange(), n), t.composingLock = !1)
                    })), this.element.addEventListener("input", (function (n) {
                        if ("deleteByDrag" !== n.inputType && "insertFromDrop" !== n.inputType) if (t.preventInput) t.preventInput = !1; else if (!t.composingLock) {
                            var r = getSelection().getRangeAt(0), i = Object(w.c)(r.startContainer);
                            if (i || (J(e, r), i = Object(w.c)(r.startContainer)), i) {
                                for (var o = Object(N.c)(i, e.wysiwyg.element, r).start, a = !0, l = o - 1; l > i.textContent.substr(0, o).lastIndexOf("\n"); l--) if (" " !== i.textContent.charAt(l) && "\t" !== i.textContent.charAt(l)) {
                                    a = !1;
                                    break
                                }
                                0 === o && (a = !1);
                                var s = !0;
                                for (l = o - 1; l < i.textContent.length; l++) if (" " !== i.textContent.charAt(l) && "\n" !== i.textContent.charAt(l)) {
                                    s = !1;
                                    break
                                }
                                var c = Object(E.a)(getSelection().getRangeAt(0).startContainer);
                                c && "" === c.textContent ? Qe(e) : a && "code-block" !== i.getAttribute("data-type") || s || Xe(i.innerHTML) || Ge(i.innerHTML) && i.previousElementSibling || He(e, r, n)
                            }
                        }
                    })), this.element.addEventListener("click", (function (n) {
                        if ("INPUT" === n.target.tagName) {
                            var r = n.target;
                            return r.checked ? r.setAttribute("checked", "checked") : r.removeAttribute("checked"), t.preventInput = !0, void F(e)
                        }
                        if ("IMG" !== n.target.tagName) {
                            var i = Object(N.b)(t.element);
                            if (n.target.isEqualNode(t.element) && t.element.lastElementChild && i.collapsed) {
                                var o = t.element.lastElementChild.getBoundingClientRect();
                                n.y > o.top + o.height && ("P" === t.element.lastElementChild.tagName && "" === t.element.lastElementChild.textContent.trim().replace(a.a.ZWSP, "") ? (i.selectNodeContents(t.element.lastElementChild), i.collapse(!1)) : (t.element.insertAdjacentHTML("beforeend", '<p data-block="0">' + a.a.ZWSP + "<wbr></p>"), Object(N.f)(t.element, i)))
                            }
                            Y(e);
                            var l = Object(w.e)(n.target, "vditor-wysiwyg__preview");
                            l || (l = Object(w.e)(Object(N.b)(t.element).startContainer, "vditor-wysiwyg__preview")), l && $(l, e)
                        } else "link-ref" === n.target.getAttribute("data-type") ? te(e, n.target) : function (e, t) {
                            var n = e.target;
                            t.wysiwyg.popover.innerHTML = "";
                            var r = function () {
                                n.setAttribute("src", o.value), n.setAttribute("alt", l.value), n.setAttribute("title", c.value)
                            }, i = document.createElement("span");
                            i.setAttribute("aria-label", P.a[t.options.lang].imageURL), i.className = "vditor-tooltipped vditor-tooltipped__n";
                            var o = document.createElement("input");
                            i.appendChild(o), o.className = "vditor-input", o.setAttribute("placeholder", P.a[t.options.lang].imageURL), o.value = n.getAttribute("src") || "", o.oninput = function () {
                                r()
                            }, o.onkeydown = function (e) {
                                Q(t, e)
                            };
                            var a = document.createElement("span");
                            a.setAttribute("aria-label", P.a[t.options.lang].alternateText), a.className = "vditor-tooltipped vditor-tooltipped__n";
                            var l = document.createElement("input");
                            a.appendChild(l), l.className = "vditor-input", l.setAttribute("placeholder", P.a[t.options.lang].alternateText), l.style.width = "52px", l.value = n.getAttribute("alt") || "", l.oninput = function () {
                                r()
                            }, l.onkeydown = function (e) {
                                Q(t, e)
                            };
                            var s = document.createElement("span");
                            s.setAttribute("aria-label", P.a[t.options.lang].title), s.className = "vditor-tooltipped vditor-tooltipped__n";
                            var c = document.createElement("input");
                            s.appendChild(c), c.className = "vditor-input", c.setAttribute("placeholder", P.a[t.options.lang].title), c.value = n.getAttribute("title") || "", c.oninput = function () {
                                r()
                            }, c.onkeydown = function (e) {
                                Q(t, e)
                            }, ie(n, t), t.wysiwyg.popover.insertAdjacentElement("beforeend", i), t.wysiwyg.popover.insertAdjacentElement("beforeend", a), t.wysiwyg.popover.insertAdjacentElement("beforeend", s), ee(t, n)
                        }(n, e)
                    })), this.element.addEventListener("keyup", (function (n) {
                        if (!n.isComposing && !Object(u.d)(n)) {
                            "Enter" === n.key && Oe(e), "Backspace" !== n.key && "Delete" !== n.key || "" === e.wysiwyg.element.innerHTML || 1 !== e.wysiwyg.element.childNodes.length || !e.wysiwyg.element.firstElementChild || "P" !== e.wysiwyg.element.firstElementChild.tagName || 0 !== e.wysiwyg.element.firstElementChild.childElementCount || "" !== e.wysiwyg.element.textContent && "\n" !== e.wysiwyg.element.textContent || (e.wysiwyg.element.innerHTML = "");
                            var r = Object(N.b)(t.element);
                            if ("Backspace" === n.key && Object(u.e)() && "\n" === r.startContainer.textContent && 1 === r.startOffset && (r.startContainer.textContent = ""), J(e, r), Y(e), "ArrowDown" === n.key || "ArrowRight" === n.key || "Backspace" === n.key || "ArrowLeft" === n.key || "ArrowUp" === n.key) {
                                "ArrowLeft" !== n.key && "ArrowRight" !== n.key || e.hint.render(e);
                                var i = Object(w.e)(r.startContainer, "vditor-wysiwyg__preview");
                                if (!i && 3 !== r.startContainer.nodeType && r.startOffset > 0) (a = r.startContainer).classList.contains("vditor-wysiwyg__block") && (i = a.lastElementChild);
                                if (i) if ("none" !== i.previousElementSibling.style.display) {
                                    var o = i.previousElementSibling;
                                    if ("PRE" === o.tagName && (o = o.firstElementChild), "ArrowDown" === n.key || "ArrowRight" === n.key) {
                                        var a, l = function (e) {
                                            for (var t = e; t && !t.nextSibling;) t = t.parentElement;
                                            return t.nextSibling
                                        }(a = i.parentElement);
                                        if (l && 3 !== l.nodeType) {
                                            var s = l.querySelector(".vditor-wysiwyg__preview");
                                            if (s) return void $(s, e)
                                        }
                                        if (3 === l.nodeType) {
                                            for (; 0 === l.textContent.length && l.nextSibling;) l = l.nextSibling;
                                            r.setStart(l, 1)
                                        } else r.setStart(l.firstChild, 0)
                                    } else r.selectNodeContents(o), r.collapse(!1)
                                } else "ArrowDown" === n.key || "ArrowRight" === n.key ? $(i, e) : $(i, e, !1)
                            }
                        }
                    }))
                }, e
            }(), Hn = function () {
                var e = function (t, n) {
                    return (e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(), Dn = function (e) {
                function t(t, n) {
                    var r = e.call(this) || this;
                    r.version = a.b, "string" == typeof t && (n ? n.cache ? n.cache.id || (n.cache.id = "vditor" + t) : n.cache = {id: "vditor" + t} : n = {cache: {id: "vditor" + t}}, t = document.getElementById(t));
                    var i = new An(n).merge();
                    if (!["en_US", "ja_JP", "ko_KR", "zh_CN"].includes(i.lang)) throw new Error("options.lang error, see https://ld246.com/article/1549638745630#options");
                    return r.vditor = {
                        currentMode: i.mode,
                        element: t,
                        hint: new wt(i.hint.extend),
                        lute: void 0,
                        options: i,
                        originalInnerHTML: t.innerHTML,
                        outline: new Lt(P.a[i.lang].outline),
                        tip: new jt
                    }, r.vditor.sv = new _t(r.vditor), r.vditor.undo = new jn, r.vditor.wysiwyg = new Nn(r.vditor), r.vditor.ir = new Et(r.vditor), r.vditor.toolbar = new Tn(r.vditor), i.resize.enable && (r.vditor.resize = new Mt(r.vditor)), r.vditor.toolbar.elements.devtools && (r.vditor.devtools = new d), (i.upload.url || i.upload.handler) && (r.vditor.upload = new ve), Object(c.a)(n._lutePath || i.cdn + "/dist/js/lute/lute.min.js", "vditorLuteScript").then((function () {
                        r.vditor.lute = Object(St.a)({
                            autoSpace: r.vditor.options.preview.markdown.autoSpace,
                            chinesePunct: r.vditor.options.preview.markdown.chinesePunct,
                            codeBlockPreview: r.vditor.options.preview.markdown.codeBlockPreview,
                            emojiSite: r.vditor.options.hint.emojiPath,
                            emojis: r.vditor.options.hint.emoji,
                            fixTermTypo: r.vditor.options.preview.markdown.fixTermTypo,
                            footnotes: r.vditor.options.preview.markdown.footnotes,
                            headingAnchor: !1,
                            inlineMathDigit: r.vditor.options.preview.math.inlineDigit,
                            linkBase: r.vditor.options.preview.markdown.linkBase,
                            linkPrefix: r.vditor.options.preview.markdown.linkPrefix,
                            listStyle: r.vditor.options.preview.markdown.listStyle,
                            mark: r.vditor.options.preview.markdown.mark,
                            mathBlockPreview: r.vditor.options.preview.markdown.mathBlockPreview,
                            paragraphBeginningSpace: r.vditor.options.preview.markdown.paragraphBeginningSpace,
                            sanitize: r.vditor.options.preview.markdown.sanitize,
                            toc: r.vditor.options.preview.markdown.toc
                        }), r.vditor.preview = new Tt(r.vditor), function (e) {
                            e.element.innerHTML = "", e.element.classList.add("vditor"), B(e), Object(q.a)(e.options.preview.theme.current, e.options.preview.theme.path), "number" == typeof e.options.height && (e.element.style.height = e.options.height + "px"), "number" == typeof e.options.minHeight && (e.element.style.minHeight = e.options.minHeight + "px"), "number" == typeof e.options.width ? e.element.style.width = e.options.width + "px" : e.element.style.width = e.options.width, e.element.appendChild(e.toolbar.element);
                            var t = document.createElement("div");
                            if (t.className = "vditor-content", t.appendChild(e.outline.element), t.appendChild(e.wysiwyg.element.parentElement), t.appendChild(e.sv.element), t.appendChild(e.ir.element.parentElement), t.appendChild(e.preview.element), e.toolbar.elements.devtools && t.appendChild(e.devtools.element), e.upload && t.appendChild(e.upload.element), e.options.resize.enable && t.appendChild(e.resize.element), t.appendChild(e.hint.element), t.appendChild(e.tip.element), e.element.appendChild(t), e.toolbar.elements.export && e.element.insertAdjacentHTML("beforeend", '<iframe style="width: 100%;height: 0;border: 0"></iframe>'), pe(e, e.options.mode, K(e, t)), document.execCommand("DefaultParagraphSeparator", !1, "p"), navigator.userAgent.indexOf("iPhone") > -1 && void 0 !== window.visualViewport) {
                                var n = !1, r = function (t) {
                                    n || (n = !0, requestAnimationFrame((function () {
                                        n = !1;
                                        var t = e.toolbar.element;
                                        t.style.transform = "none", t.getBoundingClientRect().top < 0 && (t.style.transform = "translate(0, " + -t.getBoundingClientRect().top + "px)")
                                    })))
                                };
                                window.visualViewport.addEventListener("scroll", r), window.visualViewport.addEventListener("resize", r)
                            }
                        }(r.vditor), i.after && i.after(), i.icon && Object(c.b)(i.cdn + "/dist/js/icons/" + i.icon + ".js", "vditorIconScript")
                    })), r
                }

                return Hn(t, e), t.prototype.setTheme = function (e, t, n, r) {
                    this.vditor.options.theme = e, B(this.vditor), t && (this.vditor.options.preview.theme.current = t, Object(q.a)(t, r || this.vditor.options.preview.theme.path)), n && (this.vditor.options.preview.hljs.style = n, Object(Dt.a)(n, this.vditor.options.cdn))
                }, t.prototype.getValue = function () {
                    return s(this.vditor)
                }, t.prototype.getCurrentMode = function () {
                    return this.vditor.currentMode
                }, t.prototype.focus = function () {
                    "sv" === this.vditor.currentMode ? this.vditor.sv.element.focus() : "wysiwyg" === this.vditor.currentMode ? this.vditor.wysiwyg.element.focus() : "ir" === this.vditor.currentMode && this.vditor.ir.element.focus()
                }, t.prototype.blur = function () {
                    "sv" === this.vditor.currentMode ? this.vditor.sv.element.blur() : "wysiwyg" === this.vditor.currentMode ? this.vditor.wysiwyg.element.blur() : "ir" === this.vditor.currentMode && this.vditor.ir.element.blur()
                }, t.prototype.disabled = function () {
                    b(this.vditor, ["subToolbar", "hint", "popover"]), h(this.vditor.toolbar.elements, a.a.EDIT_TOOLBARS.concat(["undo", "redo", "fullscreen", "edit-mode"])), this.vditor[this.vditor.currentMode].element.setAttribute("contenteditable", "false")
                }, t.prototype.enable = function () {
                    m(this.vditor.toolbar.elements, a.a.EDIT_TOOLBARS.concat(["undo", "redo", "fullscreen", "edit-mode"])), this.vditor.undo.resetIcon(this.vditor), this.vditor[this.vditor.currentMode].element.setAttribute("contenteditable", "true")
                }, t.prototype.getSelection = function () {
                    return "wysiwyg" === this.vditor.currentMode ? be(this.vditor.wysiwyg.element) : "sv" === this.vditor.currentMode ? be(this.vditor.sv.element) : "ir" === this.vditor.currentMode ? be(this.vditor.ir.element) : void 0
                }, t.prototype.renderPreview = function (e) {
                    this.vditor.preview.render(this.vditor, e)
                }, t.prototype.getCursorPosition = function () {
                    return Object(N.a)(this.vditor[this.vditor.currentMode].element)
                }, t.prototype.isUploading = function () {
                    return this.vditor.upload.isUploading
                }, t.prototype.clearCache = function () {
                    localStorage.removeItem(this.vditor.options.cache.id)
                }, t.prototype.disabledCache = function () {
                    this.vditor.options.cache.enable = !1
                }, t.prototype.enableCache = function () {
                    if (!this.vditor.options.cache.id) throw new Error("need options.cache.id, see https://ld246.com/article/1549638745630#options");
                    this.vditor.options.cache.enable = !0
                }, t.prototype.html2md = function (e) {
                    return this.vditor.lute.HTML2Md(e)
                }, t.prototype.getHTML = function () {
                    return kt(this.vditor)
                }, t.prototype.tip = function (e, t) {
                    this.vditor.tip.show(e, t)
                }, t.prototype.setPreviewMode = function (e) {
                    xt(e, this.vditor)
                }, t.prototype.deleteValue = function () {
                    window.getSelection().isCollapsed || document.execCommand("delete", !1)
                }, t.prototype.updateValue = function (e) {
                    document.execCommand("insertHTML", !1, e)
                }, t.prototype.insertValue = function (e, t) {
                    void 0 === t && (t = !0), Object(N.b)(this.vditor[this.vditor.currentMode].element).collapse(!0), "sv" === this.vditor.currentMode ? (this.vditor.sv.preventInput = !0, document.execCommand("insertText", !1, e), t && I(this.vditor)) : "wysiwyg" === this.vditor.currentMode ? (this.vditor.wysiwyg.preventInput = !0, document.execCommand("insertText", !1, e), t && He(this.vditor, getSelection().getRangeAt(0))) : "ir" === this.vditor.currentMode && (this.vditor.ir.preventInput = !0, document.execCommand("insertText", !1, e), t && H(this.vditor, getSelection().getRangeAt(0), !0))
                }, t.prototype.setValue = function (e, t) {
                    var n = this;
                    void 0 === t && (t = !1), "sv" === this.vditor.currentMode ? (this.vditor.sv.element.innerHTML = this.vditor.lute.SpinVditorSVDOM(e), xe(this.vditor, {
                        enableAddUndoStack: t,
                        enableHint: !1,
                        enableInput: !1
                    })) : "wysiwyg" === this.vditor.currentMode ? se(this.vditor, e, {
                        enableAddUndoStack: t,
                        enableHint: !1,
                        enableInput: !1
                    }) : (this.vditor.ir.element.innerHTML = this.vditor.lute.Md2VditorIRDOM(e), this.vditor.ir.element.querySelectorAll(".vditor-ir__preview[data-render='2']").forEach((function (e) {
                        A(e, n.vditor)
                    })), vt(this.vditor, {
                        enableAddUndoStack: t,
                        enableHint: !1,
                        enableInput: !1
                    })), this.vditor.outline.render(this.vditor), e || (b(this.vditor, ["emoji", "headings", "submenu", "hint"]), this.vditor.wysiwyg.popover && (this.vditor.wysiwyg.popover.style.display = "none"), this.clearCache()), t && this.clearStack()
                }, t.prototype.clearStack = function () {
                    this.vditor.undo.clearStack(this.vditor), this.vditor.undo.addToUndoStack(this.vditor)
                }, t.prototype.destroy = function () {
                    this.vditor.element.innerHTML = this.vditor.originalInnerHTML, this.vditor.element.classList.remove("vditor"), this.vditor.element.removeAttribute("style"), document.getElementById("vditorIconScript").remove(), this.clearCache()
                }, t
            }(o.default);
        t.default = Dn
    }]).default
}));