webpackJsonp([2,0],{0:function(t,e,a){a(331),t.exports=a(325)},187:function(t,e,a){"use strict";function l(t){return t&&t.__esModule?t:{default:t}}function n(t){t.prototype.$app=i.default}Object.defineProperty(e,"__esModule",{value:!0}),e.app=void 0;var s=a(326),i=l(s);e.default=n,e.app=i.default},274:function(t,e,a){a(805);var l=a(53)(a(324),a(823),"data-v-ea38c336",null);t.exports=l.exports},317:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{activeUrl:"",navList:[{title:"系统状态",url:"system-mode"},{title:"阀门设置",url:"valve-setting"},{title:"温度修正",url:"temperature-setting"},{title:"时间段设置",url:"time-setting"},{title:"历史数据",url:"history-data"}]}},methods:{turnUrl:function(t){this.$router.push(t)}},created:function(){this.activeUrl=this.$route.path.substr(20)}}},318:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{msg:"hello vue"}},components:{}}},319:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{time:"2016-01-01 11:11:51",outSideTemp:"22",runState:"手动",runMode:"正常",tableData:[{title:"a",table:[{project:"外网供水温度",data:"2",unit:"c"},{project:"外网供水温度",data:"2",unit:"c"},{project:"外网供水温度",data:"2",unit:"c"}]},{title:"b",table:[{project:"外网供水温度",data:"2",unit:"c"},{project:"外网供水温度",data:"2",unit:"c"},{project:"外网供水温度",data:"2",unit:"c"}]}]}},components:{}}},320:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{list:[{projectLeft:"室内",dataLeft:"22",projectRight:"回水2",dataRight:"2"},{projectLeft:"室内",dataLeft:"22",projectRight:"回水2",dataRight:"2"},{projectLeft:"室内",dataLeft:"22",projectRight:"回水2",dataRight:"2"},{projectLeft:"室内",dataLeft:"22",projectRight:"回水2",dataRight:"2"}]}}}},321:function(t,e,a){"use strict";function l(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(542),s=l(n);e.default={data:function(){return{list:[{max:"21:00",min:"1:00",num:"2"},{max:"21:00",min:"1:00",num:"2"},{max:"21:00",min:"1:00",num:"2"}],bodyStyle:{minHeight:"600px",position:"relative"},choose:"1",menu:[{label:"a",value:"1"},{label:"b",value:"2"},{label:"c",value:"3"}],max:"12:00",min:"11:00",chart:null,chartOption:{tooltip:{trigger:"axis"},legend:{left:"150px"},toolbox:{show:!1},calculable:!0,xAxis:[{type:"category",boundaryGap:!1,data:[1,1,1,1,1,1,2,3,4]}],yAxis:[{type:"value"}],series:[{type:"line",data:[1,1,1,1,1,1,2,3,4]}]}}},methods:{draw:function(t){this.chart=s.default.init(document.getElementById(t)),this.chart.showLoading(),this.chart.setOption(this.chartOption),this.chart.hideLoading()}},mounted:function(){this.$nextTick(function(){this.draw("chartMain")})}}},322:function(t,e,a){"use strict";function l(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(828),s=l(n);e.default={data:function(){return{menu:[{value:"A",label:"A阀门"},{value:"B",label:"B阀门"}],value:"A",pValue:0,list:[{project:"阀门1",data:"2",unit:"%"},{project:"阀门2",data:"2",unit:"%"},{project:"阀门3",data:"2",unit:"%"}],slider:{max:0,min:0,direction:"vertical",height:250,width:10,class:"slide-box"},bodyStyle:{textAlign:"center",height:"330px"},stepVal:0,timeOut:0}},components:{vueSlider:s.default}}},323:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{navList:[{title:"全部区域",url:"",index:"1",son:[{title:"石河子市",url:"",index:"1-1",sonSon:[{title:"站点一",url:"",index:"1-1-1"}]},{title:"抚顺市",url:"",index:"1-2",sonSon:[{title:"站点二",url:"",index:"1-2-1"}]}]},{title:"用户管理",url:"",index:"2"}]}},methods:{handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)}}}},324:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{user:{name:"",pwd:""},isErr:!1,rules:{pwd:[{required:!0,message:"请输入密码",trigger:"blur"},{min:3,max:11,message:"长度在 3 到 11 个字符",trigger:"blur"}],name:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:16,message:"长度在 3 到 16 个字符",trigger:"blur"}]}}},methods:{submitForm:function(){this.$router.push("index")},resetForm:function(){this.user.name="",this.user.pwd=""}}}},325:function(t,e,a){"use strict";function l(t){return t&&t.__esModule?t:{default:t}}a(799),a(797),a(798);var n=a(37),s=l(n),i=a(275),o=l(i),r=a(827),u=l(r),c=a(329),d=l(c),p=a(328),f=l(p),v=a(826),m=l(v),_=a(187),b=l(_),h=a(784),x=l(h),g=a(330),y=l(g);s.default.use(o.default),s.default.use(x.default),s.default.use(u.default),s.default.use(m.default),s.default.use(b.default),(0,f.default)(s.default.http);var w=new u.default({routes:d.default});new s.default({router:w,store:y.default}).$mount("#app")},326:function(t,e){"use strict";function a(){for(var t,e=document.cookie.split(";"),a={},l=e.length;l--;)t=e[l].split("="),a[t[0].trim()]=t[1];return a}Object.defineProperty(e,"__esModule",{value:!0});var l={cookie:{get:function(t){var e=a();return null!=e[t]&&decodeURIComponent(e[t])},set:function(t,e,a){var l,n,s=[t+"="+encodeURIComponent(e)];if(null==t||null==e)return!1;for(l in a)a.hasOwnProperty(l)&&("expires"===l&&(n=new Date,n.setTime(n.getTime()+(a[l]-0)),a[l]=n.toUTCString()),"maxAge"===l?s.push("max-Age="+a[l]):s.push(l+"="+a[l]));return document.cookie=s.join(";"),this},remove:function(t){var e,l=a();if(t)this.set(t,"",{expires:-1,path:"/"});else for(e in l)l.hasOwnProperty(e)&&this.set(e,"",{expires:-1,path:"/"});return this}},date:{getLastDateOfMonth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=new Date,a=void 0;return a=t<0?new Date(e.getFullYear(),e.getMonth()+t,0):new Date(e.getFullYear(),t,0),a.getDate()}}};e.default=l},327:function(t,e,a){"use strict";function l(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(37),s=l(n);e.default=new s.default},328:function(t,e,a){"use strict";function l(t){return t&&t.__esModule?t:{default:t}}function n(t){t&&t.interceptors&&t.interceptors.push(u,i,r),t.options.root=m.root;var e={get:t.get,post:t.post,put:t.put};["get"].forEach(function(a){t[a]=function(l,n){return e[a].call(t,l,_(s(),n))}}),["post","put"].forEach(function(a){t[a]=function(l){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments[2];return e[a].call(t,l,n,_(s(),i))}})}function s(){return{headers:{Authorization:p.app.cookie.get("userToken")||""}}}function i(t,e){var a=void 0,l="number"==typeof t.timeout?t.timeout:m._timeout;delete t.timeout,a=setTimeout(function(){t.abort&&t.abort(),o()},l),e(function(){clearTimeout(a)})}function o(){return v.default.$emit("toggleDialog",{content:"请求超时了,请刷新重试.",visible:!0,close:function(){location.reload()},confirmButton:{text:"刷新一下"}})}function r(t,e){"GET"===t.method&&(t.params._=Date.now()),t._timeout=m._timeout,e()}function u(t,e){e(function(t){var e=t.body.code;"401"!==e&&"4001"!==e||v.default.$emit("toggleDialog",{content:"太久没动了,重新登录一下吧！！！",visible:!0,close:function(){this.$router.push("/")}}),500===t.status&&v.default.$emit("toggleDialog",{content:"服务器现在很忙....,刷新一下看看有没有反应.",visible:!0,close:function(){location.reload()},confirmButton:{text:"刷新一下"}})})}Object.defineProperty(e,"__esModule",{value:!0});var c=a(332),d=l(c),p=a(187),f=a(327),v=l(f),m={_timeout:5e3,root:"http://api.bi.yabibuy.com/"},_=d.default;e.default=n},329:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=[{path:"/",component:a(274)},{path:"/login",component:a(274)},{path:"/index",component:a(816),redirect:"/index/city",children:[{path:"city",component:a(809),redirect:"/index/city/station",children:[{path:"station",component:a(810),redirect:"/index/city/station/system-mode",children:[{path:"system-mode",component:a(812)},{path:"valve-setting",component:a(815)},{path:"temperature-setting",component:a(813)},{path:"time-setting",component:a(814)},{path:"history-data",component:a(811)}]}]}]}];e.default=l},330:function(t,e,a){"use strict";function l(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(37),s=l(n),i=a(275),o=l(i);s.default.use(o.default);var r=new o.default.Store({state:{},mutations:{},actions:{}});e.default=r},797:function(t,e){},798:function(t,e){},799:function(t,e){},800:function(t,e){},801:function(t,e){},802:function(t,e){},803:function(t,e){},804:function(t,e){},805:function(t,e){},806:function(t,e){},807:function(t,e){},809:function(t,e,a){a(802);var l=a(53)(a(317),a(820),null,null);t.exports=l.exports},810:function(t,e,a){a(800);var l=a(53)(a(318),a(818),"data-v-73d7473e",null);t.exports=l.exports},811:function(t,e,a){var l=a(53)(null,a(817),null,null);t.exports=l.exports},812:function(t,e,a){a(801);var l=a(53)(a(319),a(819),"data-v-74ec8f6e",null);t.exports=l.exports},813:function(t,e,a){a(804);var l=a(53)(a(320),a(822),"data-v-c94e5338",null);t.exports=l.exports},814:function(t,e,a){a(806);var l=a(53)(a(321),a(824),"data-v-f72a34ce",null);t.exports=l.exports},815:function(t,e,a){a(807);var l=a(53)(a(322),a(825),"data-v-fe8bee00",null);t.exports=l.exports},816:function(t,e,a){a(803);var l=a(53)(a(323),a(821),"data-v-8f297512",null);t.exports=l.exports},817:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("history")])},staticRenderFns:[]}},818:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",[a("el-col",{staticClass:"router-box",attrs:{span:22,offset:1}},[a("router-view")],1)],1)},staticRenderFns:[]}},819:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",[a("el-row",{staticClass:"line"},[a("el-col",{staticClass:"box",attrs:{span:24}},[a("div",{staticClass:"title"},[t._v(t._s(t.time))]),t._v(" "),a("el-button",[t._v("同步时间")])],1)],1),t._v(" "),a("el-row",{staticClass:"line"},[a("el-col",{staticClass:"box",attrs:{span:24}},[a("div",{staticClass:"title"},[t._v(t._s(t.outSideTemp))]),t._v(" "),a("el-button",[t._v("立即更新")])],1)],1),t._v(" "),a("el-row",{staticClass:"line",attrs:{gutter:30}},t._l(t.tableData,function(e,l){return a("el-col",{attrs:{span:12}},[a("el-card",[a("div",{slot:"header"},[a("span",[t._v(t._s(e.title))])]),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.table,border:""}},[a("el-table-column",{attrs:{prop:"project",label:"项目",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"data",label:"数据",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"unit",label:"单位"}})],1)],1)],1)})),t._v(" "),a("el-row",{staticClass:"line"},[a("el-col",{staticClass:"state",attrs:{span:24}},[a("div",{staticClass:"run"},[t._v("运行状态:"+t._s(t.runState))]),t._v(" "),a("div",{staticClass:"run"},[t._v("运行模式:"+t._s(t.runMode))])])],1)],1)},staticRenderFns:[]}},820:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-menu",{attrs:{"default-active":t.activeUrl,mode:"horizontal"}},t._l(t.navList,function(e,l){return a("el-menu-item",{attrs:{index:e.url},on:{click:function(a){t.turnUrl(e.url)}}},[t._v("\n            "+t._s(e.title)+"\n        ")])})),t._v(" "),a("router-view")],1)},staticRenderFns:[]}},821:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"all-box"},[a("el-row",[a("el-col",{staticClass:"header",attrs:{span:24}},[t._v("xxx管理系统")])],1),t._v(" "),a("el-row",{staticClass:"main"},[a("el-col",{staticClass:"nav-box",attrs:{span:3}},[a("el-menu",{staticClass:"nav",attrs:{"default-active":"1-1-1",theme:"dark"},on:{open:t.handleOpen,close:t.handleClose}},t._l(t.navList,function(e,l){return a("el-submenu",{attrs:{index:e.index}},[a("template",{slot:"title"},[t._v(t._s(e.title))]),t._v(" "),t._l(e.son,function(e,l){return a("el-submenu",{attrs:{index:e.index}},[a("template",{slot:"title"},[t._v(t._s(e.title))]),t._v(" "),t._l(e.sonSon,function(e,l){return a("el-menu-item",{attrs:{index:e.index}},[t._v("\n                            "+t._s(e.title)+"\n                        ")])})],2)})],2)}))],1),t._v(" "),a("el-col",{staticClass:"container",attrs:{span:21,offset:3}},[a("router-view")],1)],1)],1)},staticRenderFns:[]}},822:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",[a("el-row",{staticClass:"line"},[a("el-col",{staticClass:"box",attrs:{span:24}},[a("div",{staticClass:"title"},[a("el-button",[t._v("读取下位机数据")]),t._v(" "),a("el-button",[t._v("保存到下位机")])],1)])],1),t._v(" "),a("el-row",{staticClass:"line"},[a("el-card",[a("div",{slot:"header"},[a("span",[t._v("温度修正")])]),t._v(" "),a("el-table",{staticStyle:{width:"100%","text-align":"center"},attrs:{data:t.list,border:""}},[a("el-table-column",{attrs:{prop:"projectLeft",label:"项目"}}),t._v(" "),a("el-table-column",{attrs:{prop:"dataLeft",label:"数据"},scopedSlots:t._u([["default",function(t){return[a("el-input",{staticClass:"input",model:{value:t.row.dataLeft,callback:function(e){t.row.dataLeft=e},expression:"scope.row.dataLeft"}})]}]])}),t._v(" "),a("el-table-column",{attrs:{prop:"projectRight",label:"项目"}}),t._v(" "),a("el-table-column",{attrs:{prop:"dataRight",label:"数据"},scopedSlots:t._u([["default",function(t){return[a("el-input",{staticClass:"input",model:{value:t.row.dataRight,callback:function(e){t.row.dataRight=e},expression:"scope.row.dataRight"}})]}]])})],1)],1)],1)],1)},staticRenderFns:[]}},823:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"login"},[a("el-col",{staticClass:"box",attrs:{span:8,offset:8}},[a("el-row",{staticClass:"loginForm"},[a("div",{staticClass:"formBox"},[a("div",{staticClass:"warp",on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13)?void t.submitForm(e):null}}},[a("h1",[t._v("欢迎登陆妇儿医院后台管理")]),t._v(" "),a("el-form",{ref:"ruleForm",attrs:{model:t.user,rules:t.rules}},[a("el-form-item",{attrs:{prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:t.user.name,callback:function(e){t.user.name=e},expression:"user.name"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"pwd"}},[a("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.user.pwd,callback:function(e){t.user.pwd=e},expression:"user.pwd"}})],1),t._v(" "),a("el-form-item",{on:{click:function(e){t.dialogVisible=!0}}},[a("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("提交")]),t._v(" "),a("el-button",{on:{click:t.resetForm}},[t._v("重置")])],1)],1)],1)])])],1),t._v(" "),a("el-dialog",{attrs:{title:"提示",size:"tiny"},model:{value:t.isErr,callback:function(e){t.isErr=e},expression:"isErr"}},[a("span",[t._v("登录异常，请重新登录，如有疑问请联系工作人员。")]),t._v(" "),a("span",{staticClass:"dialog-footer",slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.isErr=!1}}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]}},824:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{attrs:{gutter:50}},[a("el-col",{attrs:{span:6}},[a("el-card",{attrs:{"body-style":t.bodyStyle}},[a("div",{slot:"header"},[a("span",[t._v("时间段列表")]),t._v(" "),a("el-button",{staticClass:"button",attrs:{type:"primary"}},[t._v("从终端刷新")])],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,border:""}},[a("el-table-column",{attrs:{prop:"max",label:"上限"},scopedSlots:t._u([["default",function(t){return[a("el-input",{model:{value:t.row.max,callback:function(e){t.row.max=e},expression:"scope.row.max"}})]}]])}),t._v(" "),a("el-table-column",{attrs:{prop:"min",label:"下限"},scopedSlots:t._u([["default",function(t){return[a("el-input",{model:{value:t.row.min,callback:function(e){t.row.min=e},expression:"scope.row.min"}})]}]])}),t._v(" "),a("el-table-column",{attrs:{prop:"num",label:"曲线号"},scopedSlots:t._u([["default",function(t){return[a("el-input",{model:{value:t.row.num,callback:function(e){t.row.num=e},expression:"scope.row.num"}})]}]])})],1),t._v(" "),a("el-button-group",{staticClass:"btn-g"},[a("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("添加")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("删除")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("保存并下发")])],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:18}},[a("el-card",{attrs:{"body-style":t.bodyStyle}},[a("div",{slot:"header"},[a("span",[t._v("详细信息")])]),t._v(" "),a("el-row",[a("div",{staticClass:"container"},[a("span",{staticClass:"title"},[t._v("时间段上限:")]),t._v(" "),a("el-input",{staticClass:"input",attrs:{size:"small"},model:{value:t.max,callback:function(e){t.max=e},expression:"max"}},[a("el-button",{attrs:{size:"small"},slot:"prepend"},[t._v("+")]),t._v(" "),a("el-button",{attrs:{size:"small"},slot:"append"},[t._v("-")])],1)],1),t._v(" "),a("div",{staticClass:"container"},[a("span",{staticClass:"title"},[t._v("时间段下限:")]),t._v(" "),a("el-input",{staticClass:"input",attrs:{size:"small"},model:{value:t.min,callback:function(e){t.min=e},expression:"min"}},[a("el-button",{attrs:{size:"small"},slot:"prepend"},[t._v("+")]),t._v(" "),a("el-button",{attrs:{size:"small"},slot:"append"},[t._v("-")])],1)],1),t._v(" "),a("div",{staticClass:"container"},[a("span",{staticClass:"title"},[t._v("选择曲线:")]),t._v(" "),a("el-select",{staticClass:"select",attrs:{size:"small"},model:{value:t.choose,callback:function(e){t.choose=e},expression:"choose"}},t._l(t.menu,function(t){return a("el-option",{attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),a("div",{staticClass:"container"},[a("el-button",{attrs:{type:"primary",icon:"search"}},[t._v("查询")])],1)]),t._v(" "),a("el-row",[a("div",{attrs:{id:"chartMain"}})])],1)],1)],1)},staticRenderFns:[]}},825:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",[a("el-row",{staticClass:"line"},[a("el-col",{staticClass:"box",attrs:{span:24}},[a("div",{staticClass:"title"},[a("el-button",[t._v("读取下位机数据")]),t._v(" "),a("el-button",[t._v("保存到下位机")])],1)])],1),t._v(" "),a("el-row",{staticClass:"line"},[a("el-col",{staticClass:"box",attrs:{span:24}},[a("div",{staticClass:"title"},[a("span",[t._v("选择阀门:")]),t._v(" "),a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.menu,function(t){return a("el-option",{attrs:{label:t.label,value:t.value}})}))],1)])],1),t._v(" "),a("el-row",{staticClass:"middle line",attrs:{gutter:30}},[a("el-col",{staticClass:"col",attrs:{span:8}},[a("el-card",{attrs:{"body-style":t.bodyStyle}},[a("div",{slot:"header"},[a("span",[t._v("步进微调")])]),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,border:""}},[a("el-table-column",{attrs:{prop:"project",label:"项目",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"data",label:"数据",width:"180"},scopedSlots:t._u([["default",function(t){return[a("el-input",{model:{value:t.row.data,callback:function(e){t.row.data=e},expression:"scope.row.data"}})]}]])}),t._v(" "),a("el-table-column",{attrs:{prop:"unit",label:"单位"}})],1)],1)],1),t._v(" "),a("el-col",{staticClass:"col",attrs:{span:8}},[a("el-card",{attrs:{"body-style":t.bodyStyle}},[a("div",{slot:"header"},[a("span",[t._v("最大开度")])]),t._v(" "),a("vue-slider",{ref:"slider",class:t.slider.class,attrs:{direction:t.slider.direction,height:t.slider.height,width:t.slider.width},model:{value:t.slider.max,callback:function(e){t.slider.max=e},expression:"slider.max"}}),t._v(" "),a("el-input",{staticClass:"input",model:{value:t.slider.max,callback:function(e){t.slider.max=e},expression:"slider.max"}})],1)],1),t._v(" "),a("el-col",{staticClass:"col",attrs:{span:8}},[a("el-card",{attrs:{"body-style":t.bodyStyle}},[a("div",{slot:"header"},[a("span",[t._v("最大开度")])]),t._v(" "),a("vue-slider",{ref:"slider",class:t.slider.class,attrs:{direction:t.slider.direction,height:t.slider.height,width:t.slider.width},model:{value:t.slider.max,callback:function(e){t.slider.max=e},expression:"slider.max"}}),t._v(" "),a("el-input",{staticClass:"input",model:{value:t.slider.max,callback:function(e){t.slider.max=e},expression:"slider.max"}})],1)],1)],1),t._v(" "),a("el-row",{staticClass:"line"},[a("el-col",{staticClass:"box",attrs:{span:24}},[a("div",{staticClass:"item"},[a("span",[t._v("调整步进量:")]),t._v(" "),a("el-input",{staticClass:"itemInput",model:{value:t.stepVal,callback:function(e){t.stepVal=e},expression:"stepVal"}},[a("template",{slot:"append"},[t._v("%")])],2)],1),t._v(" "),a("div",{staticClass:"item"},[a("span",[t._v("调整延时长度:")]),t._v(" "),a("el-input",{staticClass:"itemInput",model:{value:t.timeOut,callback:function(e){t.timeOut=e},expression:"timeOut"}},[a("template",{slot:"append"},[t._v("秒")])],2)],1)])],1)],1)},staticRenderFns:[]}},862:function(t,e){}});