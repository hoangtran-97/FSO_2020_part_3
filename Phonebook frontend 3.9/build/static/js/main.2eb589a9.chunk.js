(this.webpackJsonpexercise=this.webpackJsonpexercise||[]).push([[0],{15:function(e,n,t){e.exports=t(39)},20:function(e,n,t){},38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(14),u=t.n(o),c=(t(20),t(4)),l=t(2),i=function(e){var n=e.query,t=e.handleQuery;return r.a.createElement("div",null,"Filter name ",r.a.createElement("input",{value:n,onChange:t}))},m=function(e){var n=e.handleNameChange,t=e.handleNumberChange,a=e.handleSubmitForm,o=e.newName,u=e.newNumber;return r.a.createElement("form",{onSubmit:a},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:o,onChange:n})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:u,onChange:t})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},s=function(e){var n=e.result,t=e.removePerson;return r.a.createElement(r.a.Fragment,null,n.map((function(e){return r.a.createElement("div",{key:e.name},r.a.createElement("p",null,e.name," / ",e.number),r.a.createElement("button",{type:"button",onClick:function(){return t(e.id,e.name)}},"Delete"))})))},f=t(3),d=t.n(f),h="http://localhost:3001/api/persons",b=function(){return d.a.get(h).then((function(e){return e.data}))},v=function(e){return d.a.post(h,e).then((function(e){return e.data}))},E=function(e,n){return d.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},g=function(e){return d.a.delete("".concat(h,"/").concat(e)).then((function(e){return e}))},p=function(e){var n=e.message,t=e.isError;return console.log(t),null===n?null:r.a.createElement("div",{className:"error",style:{color:t?"red":"green"}},n)},w=(t(38),function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)(""),f=Object(l.a)(u,2),d=f[0],h=f[1],w=Object(a.useState)(""),j=Object(l.a)(w,2),O=j[0],y=j[1],C=Object(a.useState)(""),N=Object(l.a)(C,2),S=N[0],k=N[1],P=Object(a.useState)(null),x=Object(l.a)(P,2),D=x[0],F=x[1],I=Object(a.useState)(!1),T=Object(l.a)(I,2),q=T[0],J=T[1];Object(a.useEffect)((function(){console.log("effect"),b().then((function(e){console.log("promise fulfilled",e),o(e)}))}),[]),console.log("render",t.length,"persons");var L=S?t.filter((function(e){return e.name.toLowerCase().includes(S.toLowerCase())})):t;return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(p,{message:D,isError:q}),r.a.createElement(i,{query:S,handleQuery:function(e){k(e.target.value)}}),r.a.createElement(m,{handleNameChange:function(e){h(e.target.value)},handleNumberChange:function(e){y(e.target.value)},handleSubmitForm:function(e){e.preventDefault();var n=t.filter((function(e){return e.name===d}));if(n.length>0){alert("".concat(d," is already added."));var a=n[0],r=a.number,u=a.id;if(r!==O&&window.confirm("Replace existing number with new number?")){var l=Object(c.a)(Object(c.a)({},n[0]),{},{number:O});E(u,l).then((function(e){o(t.map((function(n){return n.id!==u?n:e}))),J(!1),F("Person '".concat(e.name,"' number was changed to ").concat(e.number)),setTimeout((function(){F(null)}),5e3)}))}}else{v({name:d,number:O}).then((function(e){o(t.concat(e)),h(""),y(""),J(!1),F("Person '".concat(e.name,"' was added")),setTimeout((function(){F(null)}),5e3)}))}},newName:d,newNumber:O}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(s,{result:L,removePerson:function(e,n){console.log("removed",e),window.confirm("Do you really want to delete ".concat(n," with an ID of ").concat(e))&&g(e).then((function(e){b().then((function(e){console.log("promise fulfilled",e),o(e),J(!1),F("Information of ".concat(n," has been removed from the server")),setTimeout((function(){F(null)}),5e3)}))})).catch((function(e){J(!0),F("Information of ".concat(n," has already been removed from the server")),setTimeout((function(){F(null)}),5e3)}))}}))});u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.2eb589a9.chunk.js.map