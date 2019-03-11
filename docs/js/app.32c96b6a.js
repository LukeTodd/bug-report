(function(t){function e(e){for(var a,i,n=e[0],c=e[1],l=e[2],d=0,p=[];d<n.length;d++)i=n[d],o[i]&&p.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,n=1;n<s.length;n++){var c=s[n];0!==o[c]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},o={app:0},r=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/bug-report/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var u=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"02b1":function(t,e,s){"use strict";var a=s("9653"),o=s.n(a);o.a},"034f":function(t,e,s){"use strict";var a=s("64a9"),o=s.n(a);o.a},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},r=[],i=(s("034f"),s("2877")),n={},c=Object(i["a"])(n,o,r,!1,null,null,null),l=c.exports,u=s("8c4f"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home container-fluid bg-img"},[t._m(0),s("div",{staticClass:"row bg-black"},[s("bug-form"),s("div",{staticClass:"col-3 ml-auto sort text-right"},[s("div",{staticClass:"dropdown"},[s("button",{staticClass:"btn btn-secondary dropdown-toggle",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n          Sort By\n        ")]),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},[s("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:t.sortByOpen}},[t._v("Open")]),s("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:t.sortByClosed}},[t._v("Closed")]),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Most Recent")]),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Oldest")])])])])],1),s("div",{staticClass:"row"},[s("table",{staticClass:"table t-display"},[t._m(1),t._l(t.bugs,function(t,e){return s("bug",{attrs:{bugData:t}})})],2)])])},p=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col no-pd"},[s("h1",{staticClass:"text-center title"},[t._v("Bug Reporter\n      ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("Title:")]),s("th",{attrs:{scope:"col"}},[t._v("Created By:")]),s("th",{attrs:{scope:"col"}},[t._v("Created At:")]),s("th",{attrs:{scope:"col"}},[t._v("Status")])])])}],g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tbody",[s("tr",{staticClass:"click",class:[t.bugData.closed?"strike":""],on:{click:function(e){return t.$router.push({name:"bugDetails",params:{id:t.bugData._id}})}}},[s("td",[t._v(t._s(t.bugData.title))]),s("td",[t._v(t._s(t.bugData.creator))]),s("td",[t._v(t._s(t.bugData.createdAt))]),0==t.bugData.closed?s("td",[t._v("Open")]):s("td",[t._v("Closed")])])])},m=[],b={name:"bug",props:["bugData"],methods:{deleteBug(t){this.$store.dispatch("deleteBug",t)}}},v=b,h=(s("02b1"),Object(i["a"])(v,g,m,!1,null,null,null)),f=h.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-6"},[s("form",{staticClass:"b-form",on:{submit:function(e){return e.preventDefault(),t.createBug(e)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.bugForm.title,expression:"bugForm.title"}],staticClass:"bf-display",attrs:{type:"string",name:"title",placeholder:"Title...",required:""},domProps:{value:t.bugForm.title},on:{input:function(e){e.target.composing||t.$set(t.bugForm,"title",e.target.value)}}})])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.bugForm.creator,expression:"bugForm.creator"}],staticClass:"bf-display",attrs:{type:"string",name:"creator",placeholder:"Created By...",required:""},domProps:{value:t.bugForm.creator},on:{input:function(e){e.target.composing||t.$set(t.bugForm,"creator",e.target.value)}}})])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.bugForm.description,expression:"bugForm.description"}],staticClass:"bf-display",attrs:{rows:"5",type:"string",name:"description",placeholder:"Description...",required:""},domProps:{value:t.bugForm.description},on:{input:function(e){e.target.composing||t.$set(t.bugForm,"description",e.target.value)}}})])]),t._m(0)])])},C=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-4 ml-auto text-right"},[s("button",{staticClass:"sbug-btn",attrs:{type:"submit"}},[t._v("Submit Bug")])])])}],y={name:"bugform",data(){return{bugForm:{}}},methods:{createBug(){this.$store.dispatch("createBug",this.bugForm)}}},w=y,B=(s("64b4"),Object(i["a"])(w,_,C,!1,null,null,null)),x=B.exports,$={name:"home",data(){return{}},mounted(){this.$store.dispatch("getBugs")},components:{BugForm:x,Bug:f},computed:{bugs(){return this.$store.state.bugs}},methods:{sortByOpen(){let t=this.$store.state.bugs;t.sort(function(t,e){return t.closed-e.closed})},sortByClosed(){let t=this.$store.state.bugs;t.sort(function(t,e){return e.closed-t.closed})},sortByRecent(){let t=this.$store.state.bugs;t.sort(function(t,e){return e.createdAt-t.createdAt})},sortByOldest(){let t=this.$store.state.bugs;t.sort(function(t,e){return t.createdAt-e.createdAt})}}},N=$,D=(s("cccb"),Object(i["a"])(N,d,p,!1,null,null,null)),E=D.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid bg-img"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12",staticStyle:{"padding-left":"0px","padding-right":"0px"}},[s("div",{staticClass:"card card-display"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("h3",{staticClass:"card-header text-center b-white"},[t._v(t._s(t.bug.title))])])]),s("div",{staticClass:"card-body",staticStyle:{"padding-bottom":"0px"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("p",{staticClass:"card-text text-center"},[t._v(t._s(t.bug.description))])])]),s("div",{staticClass:"row",staticStyle:{"padding-top":"30px"}},[s("div",{staticClass:"col-6"},[s("button",{staticClass:"details-btn",on:{click:function(e){t.bug.createdAt=!t.bug.createdAt}}},[t._v("Edit Bug")]),t.bug.createdAt?t._e():s("form",{on:{submit:function(e){return e.preventDefault(),t.editBug(e)}}},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.bugEdit.title,expression:"bugEdit.title"}],staticClass:"f-display",attrs:{rows:"1",type:"string",name:"title",placeholder:"Title..."},domProps:{value:t.bugEdit.title},on:{input:function(e){e.target.composing||t.$set(t.bugEdit,"title",e.target.value)}}}),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.bugEdit.description,expression:"bugEdit.description"}],staticClass:"f-display",attrs:{rows:"5",wrap:"hard",type:"string",name:"description",placeholder:"Description..."},domProps:{value:t.bugEdit.description},on:{input:function(e){e.target.composing||t.$set(t.bugEdit,"description",e.target.value)}}}),s("button",{staticClass:"details-btn",attrs:{type:"submit"}},[t._v("Submit Edit")])])]),s("div",{staticClass:"col-6 text-right"},[s("button",{staticClass:"details-btn text-right",on:{click:function(e){t.showForm=!t.showForm}}},[t._v("Add Note")]),t.showForm?s("form",{on:{submit:function(e){return e.preventDefault(),t.addNote(e)}}},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.bugNote.creator,expression:"bugNote.creator"}],staticClass:"f-display",attrs:{rows:"1",type:"string",placeholder:"Created By...",required:""},domProps:{value:t.bugNote.creator},on:{input:function(e){e.target.composing||t.$set(t.bugNote,"creator",e.target.value)}}}),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.bugNote.content,expression:"bugNote.content"}],staticClass:"f-display",attrs:{rows:"5",type:"string",name:"comment",placeholder:"Add Note...",required:""},domProps:{value:t.bugNote.content},on:{input:function(e){e.target.composing||t.$set(t.bugNote,"content",e.target.value)}}}),s("button",{staticClass:"details-btn",attrs:{type:"submit"}},[t._v("Submit Note")])]):t._e()])])])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-2 ml-auto text-right"},[s("button",{staticClass:"details-btn",on:{click:t.deleteBug}},[t._v("Close\n        Ticket")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("h3",{staticClass:"text-center note-display",staticStyle:{"margin-bottom":"0px",padding:"10px 0px"}},[t._v("Notes")]),s("table",{staticClass:"table t-display"},[t._m(0),t._l(t.notes,function(t,e){return s("bug-notes",{attrs:{noteData:t}})})],2)])])])},k=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("Created By:")]),s("th",{attrs:{scope:"col"}},[t._v("Details:")]),s("th",{attrs:{scope:"col"}})])])}],F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tbody",[s("tr",[s("td",[t._v(t._s(t.noteData.creator))]),s("td",[t._v(t._s(t.noteData.content))]),s("td",{staticClass:"text-right"},[s("button",{staticClass:"details-btn",on:{click:t.deleteNote}},[t._v("Delete Note")])])])])},S=[],A={name:"bugNotes",props:["noteData"],computed:{},methods:{deleteNote(){let t=this.$store.state.activeBug;1==t.closed?alert("Sorry, you cannot delete a note on a closed ticket"):this.$store.dispatch("deleteNote",this.noteData._id)}}},j=A,P=Object(i["a"])(j,F,S,!1,null,null,null),T=P.exports,M={name:"bugDetails",data(){return{bugEdit:{},bugNote:{},showForm:!1}},mounted(){this.$store.dispatch("getActiveBug",this.$route.params.id),this.$store.dispatch("getNotes",this.$route.params.id)},computed:{bug(){return this.$store.state.activeBug},notes(){return this.$store.state.notes}},methods:{editBug(){let t=this.$store.state.activeBug;return 1!=t.closed?this.$store.dispatch("editBug",this.bugEdit):(alert("Sorry, You cannot edit a bug on a closed ticket"),reset())},addNote(){let t=this.$store.state.activeBug;if(1!=t.closed)return this.$store.dispatch("createNote",this.bugNote);alert("Sorry, You cannot add a note to a closed ticket")},deleteBug(){let t=this.$store.state.activeBug,e="";if(1==t.closed)alert("This ticket is already closed");else{if(confirm("Are you sure you want to close the ticket? You will not be able to add notes or edits once this is closed"))return this.$store.dispatch("deleteBug");e="You pressed Cancel!"}}},components:{Bug:f,BugNotes:T}},q=M,R=(s("8df8"),Object(i["a"])(q,O,k,!1,null,null,null)),Y=R.exports;a["a"].use(u["a"]);var J=new u["a"]({routes:[{path:"/",name:"home",component:E},{path:"/bugs/:id",name:"bugDetails",component:Y}]}),L=s("2f62"),U=s("bc3a"),K=s.n(U);a["a"].use(L["a"]);let z=K.a.create({baseURL:"https://bcw-sandbox.herokuapp.com/api/LUKETODD/bugs",timeout:3e3});var G=new L["a"].Store({state:{bugs:[],activeBug:{},notes:[]},mutations:{addBug(t,e){t.bugs.push(e)},setBugs(t,e){t.bugs=e},setActiveBug(t,e){t.activeBug=e},addNote(t,e){t.notes.push(e)},setNotes(t,e){t.notes=e}},actions:{createBug({commit:t,dispatch:e},s){z.post("",s).then(e=>{console.log(e),t("addBug",e.data.results)})},getBugs({commit:t,dispatch:e},s){z.get("").then(e=>{t("setBugs",e.data.results)})},getActiveBug({commit:t,dispatch:e},s){z.get(""+s).then(e=>{t("setActiveBug",e.data.results)})},deleteBug({commit:t,state:e},s){let a=e.activeBug._id;z.delete(a).then(e=>{t("setBugs",e.data.results)})},editBug({state:t,dispatch:e},s){let a=t.activeBug._id;z.put(""+a,s).then(t=>{e("getActiveBug",a)})},createNote({commit:t,state:e},s){let a=e.activeBug._id;z.post(a+"/notes",s).then(e=>{t("addNote",e.data.results)})},getNotes({commit:t,state:e},s){let a=s;z.get(a+"/notes").then(e=>{t("setNotes",e.data.results)})},deleteNote({dispatch:t,state:e},s){let a=e.activeBug._id;z.delete(a+"/notes/"+s).then(e=>{t("getNotes",a)})}}});s("4989");a["a"].config.productionTip=!1,new a["a"]({router:J,store:G,render:function(t){return t(l)}}).$mount("#app")},"5d08":function(t,e,s){},"64a9":function(t,e,s){},"64b4":function(t,e,s){"use strict";var a=s("8134"),o=s.n(a);o.a},8134:function(t,e,s){},"8df8":function(t,e,s){"use strict";var a=s("5d08"),o=s.n(a);o.a},9653:function(t,e,s){},cccb:function(t,e,s){"use strict";var a=s("d563"),o=s.n(a);o.a},d563:function(t,e,s){}});
//# sourceMappingURL=app.32c96b6a.js.map