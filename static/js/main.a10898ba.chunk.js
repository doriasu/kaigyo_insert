(this.webpackJsonpkaigyo=this.webpackJsonpkaigyo||[]).push([[0],{44:function(e,t,a){e.exports=a(53)},49:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),i=a.n(o),l=(a(49),a(88)),s=a(98),c=a(91),m=a(93),u=a(94),g=Object(l.a)((function(e){return Object(s.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}})}));function h(){var e=g();return r.a.createElement("div",{className:e.root},r.a.createElement(c.a,{position:"static"},r.a.createElement(m.a,null,r.a.createElement(u.a,{variant:"h6",className:e.title},"\u6539\u884c\u30b3\u30fc\u30c9\u3044\u308c\u3063\u305f\u301c"))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=a(35),d=a(36),f=a(37),p=a(38),E=a(95),y=a(96),C=a(97),b=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).state={message:"",num:20,ch_message:""},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return n.createElement("div",null,n.createElement(E.a,{container:!0,spacing:2},n.createElement(E.a,{item:!0,xs:5},n.createElement(y.a,{id:"outlined-textarea",label:"\u6587\u7ae0\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",multiline:!0,rows:"20",fullWidth:!0,margin:"normal",variant:"outlined",value:this.state.message,onChange:function(t){e.setState({message:t.target.value})}})),n.createElement(E.a,{item:!0,xs:1},n.createElement(y.a,{id:"standard-basic",label:"N\u6587\u5b57\u3054\u3068",placeholder:"Placeholder",margin:"normal",onChange:function(t){var a=parseInt(t.target.value);Number.isNaN(a)&&(a=0),e.setState({num:a})},value:this.state.num}),n.createElement(C.a,{variant:"outlined",color:"primary",style:{justifyContent:"center"},onClick:function(){for(var t=e.state.message,a=e.state.num,n="",r=0,o=0;o<t.length;o++)"\n"!=t[o]?(0!=r&&r%a==0&&(n+="\n"),r++,n+=t[o]):(r=0,n+="\n");e.setState({ch_message:n})}},"\u6539\u884c\u7121\u8996\u3057\u306a\u3044"),n.createElement(C.a,{variant:"outlined",color:"primary",style:{justifyContent:"center",marginTop:"10px"},onClick:function(){var t=e.state.message;t=t.replace(/\s+/g,"");for(var a=e.state.num,n="",r=0,o=0;o<t.length;o++)"\n"!=t[o]&&(0!=r&&r%a==0&&(n+="\n"),r++,n+=t[o]);e.setState({ch_message:n})}},"\u6539\u884c,\u7a7a\u767d\u7121\u8996"),n.createElement(C.a,{variant:"outlined",color:"primary",style:{justifyContent:"center",marginTop:"10px"},onClick:function(){var t=e.state.message;t=(t=t.replace(/\s+/g,"")).replace(/[A-Za-z0-9]/g,(function(e){return String.fromCharCode(e.charCodeAt(0)+65248)}));for(var a=e.state.num,n="",r=0,o=0;o<t.length;o++)"\n"!=t[o]&&(0!=r&&r%a==0&&(n+="\n",r=0),r++,n+=t[o]);e.setState({ch_message:n})}},"\u884c\u672b\u3092\u305d\u308d\u3048\u308b"),n.createElement(C.a,{variant:"outlined",color:"primary",style:{justifyContent:"center",marginTop:"10px"},onClick:function(){var t=e.state.message;t=(t=t.replace(/\s+/g,"")).replace(/[A-Za-z0-9]/g,(function(e){return String.fromCharCode(e.charCodeAt(0)+65248)}));for(var a=e.state.num,n="",r=0,o=0;o<t.length;o++)"\n"!=t[o]&&("\u3002"!=t[o]?(0!=r&&r%a==0&&(n+="\n",r=0),r++,n+=t[o]):(n+="\u3002\n",r=0));e.setState({ch_message:n})}},"\u3002\u3067\u6539\u884c\u3059\u308b")),n.createElement(E.a,{item:!0,xs:5},n.createElement(y.a,{id:"outlined-textarea",label:"\u6539\u884c\u30b3\u30fc\u30c9\u3092\u633f\u5165\u6e08",multiline:!0,rows:"20",fullWidth:!0,margin:"normal",variant:"outlined",value:this.state.ch_message}))))}}]),a}(n.Component);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null),r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.a10898ba.chunk.js.map