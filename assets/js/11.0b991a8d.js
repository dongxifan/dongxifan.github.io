(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{494:function(t,a,e){"use strict";e.r(a);var s=e(21),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"axios"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#axios"}},[t._v("#")]),t._v(" axios")]),t._v(" "),e("h2",{attrs:{id:"描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),e("p",[t._v("axios 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端，本质上也是对原生XHR的封装，只不过它是Promise的实现版本，符合最新的ES规范，它本身具有以下特征：")]),t._v(" "),e("h2",{attrs:{id:"特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),e("ul",[e("li",[t._v("从浏览器中创建 XMLHttpRequest")]),t._v(" "),e("li",[t._v("支持 Promise API")]),t._v(" "),e("li",[t._v("客户端支持防止CSRF")]),t._v(" "),e("li",[t._v("提供了一些并发请求的接口（重要，方便了很多的操作）")]),t._v(" "),e("li",[t._v("从 node.js 创建 http 请求")]),t._v(" "),e("li",[t._v("拦截请求和响应")]),t._v(" "),e("li",[t._v("转换请求和响应数据")]),t._v(" "),e("li",[t._v("取消请求")]),t._v(" "),e("li",[t._v("自动转换JSON数据")])]),t._v(" "),e("h1",{attrs:{id:"fetch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fetch"}},[t._v("#")]),t._v(" fetch")]),t._v(" "),e("h2",{attrs:{id:"特点-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特点-2"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),e("ul",[e("li",[t._v("语法简洁，更加语义化")]),t._v(" "),e("li",[t._v("基于标准 Promise 实现，支持 async/await")]),t._v(" "),e("li",[t._v("同构方便，使用 isomorphic-fetch")]),t._v(" "),e("li",[t._v("更加底层，提供的API丰富（request, response）")]),t._v(" "),e("li",[t._v("脱离了XHR，是ES规范里新的实现方式")])]),t._v(" "),e("h2",{attrs:{id:"存在问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#存在问题"}},[t._v("#")]),t._v(" 存在问题")]),t._v(" "),e("p",[t._v("fetch是一个低层次的API，你可以把它考虑成原生的XHR，所以使用起来并不是那么舒服，需要进行封装。")]),t._v(" "),e("ul",[e("li",[t._v("fetch只对网络请求报错，对400，500都当做成功的请求，服务器返回 400，500 错误码时并不会 reject，只有网络错误这些导致请求不能完成时，fetch 才会被 reject。")]),t._v(" "),e("li",[t._v("fetch默认不会带cookie，需要添加配置项： fetch(url, {credentials: 'include'})")]),t._v(" "),e("li",[t._v("fetch不支持abort，不支持超时控制，使用setTimeout及Promise.reject的实现的超时控制并不能阻止请求过程继续在后台运行，造成了流量的浪费")]),t._v(" "),e("li",[t._v("fetch没有办法原生监测请求的进度，而XHR可以")])]),t._v(" "),e("h1",{attrs:{id:"ajax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ajax"}},[t._v("#")]),t._v(" ajax")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$.ajax({\n   type: 'POST',\n   url: url,\n   data: data,\n   dataType: dataType,\n   success: function () {},\n   error: function () {}\n});\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);