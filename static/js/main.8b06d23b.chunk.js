(this["webpackJsonpgenshin-resin-total-hours"]=this["webpackJsonpgenshin-resin-total-hours"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n.p+"static/media/paimon.e1644c74.png"},,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(2),s=n.n(i),c=(n(13),n(3)),o=n(4),l=n(7),u=n(6),m=(n(14),n(5)),h=n.n(m),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={resin:""},a}return Object(o.a)(n,[{key:"getTotalHours",value:function(){var e=8*this.state.resin/60,t=Math.floor(e),n=60*(e-t),a=Math.round(n);return"".concat(t," hour(s) and ").concat(a," minute(s).")}},{key:"render",value:function(){var e=this,t=this.state.resin;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:h.a,alt:"`Paimon"})),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{htmlFor:"resin"},"Let Paimon help you!"),r.a.createElement("input",{id:"resin",type:"number",placeholder:"How much resin you need?",value:t,onChange:function(t){e.setState({resin:t.target.value})}})),r.a.createElement("div",{className:"result"},"It will take: ",this.getTotalHours())))}}]),n}(r.a.Component);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.8b06d23b.chunk.js.map