(this["webpackJsonpbodymass-fronted"]=this["webpackJsonpbodymass-fronted"]||[]).push([[0],{22:function(e,t,a){e.exports=a(49)},27:function(e,t,a){},28:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(20),s=a.n(i),l=(a(27),a(2)),c=a(3),o=a(5),u=a(4),p=a(6),m=(a(28),a(29),a(21)),h=a.n(m),d=function(e){var t=e.children;return r.a.createElement("nav",null,r.a.createElement("div",null,r.a.createElement("a",{href:"/",className:"brand-logo"},"Body Mass Index"),r.a.createElement("ul",{className:"right hide-on-med-and-down"},t)))},v=function(e){var t=e.text,a=e.openModal;e.target;return r.a.createElement("li",null,r.a.createElement("a",{className:"waves-effect waves-light btn",href:"#modal",onClick:a},t))},f=a(1),g=a.n(f),b=a(8),E=a(9),y={display:"block"},w={display:"none"},O=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={open:a.props.open},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"updateOpen",value:function(){this.setState({open:this.props.open})}},{key:"componentDidMount",value:function(){this.updateOpen()}},{key:"componentDidUpdate",value:function(e){this.props.open!==e.open&&this.updateOpen()}},{key:"render",value:function(){return r.a.createElement("div",{className:"modal",style:this.state.open?y:w},r.a.createElement("div",{className:"modal-content"},r.a.createElement("h4",null,this.props.title),this.props.children))}}]),t}(n.Component),k=function(e){var t=e.children;return r.a.createElement("div",{className:"row"},r.a.createElement("form",{className:"col s12"},r.a.createElement("div",{className:"row"},t)))},S=function(e){var t=e.message,a=e.type;return r.a.createElement("div",{className:"alert"},r.a.createElement("span",{className:a},t))},j=a(10),N=a.n(j);function U(e){return"".concat("https://bodymass-challange.herokuapp.com","/").concat(e)}function x(){return{headers:{Authorization:localStorage.getItem("token")||""}}}function I(e){return e.response?e.response:e.request?e.request:e.message}function C(e,t){return M.apply(this,arguments)}function M(){return(M=Object(b.a)(g.a.mark((function e(t,a){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.post(U("authenticate"),t);case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),a(I(e.t0));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function D(e,t){return F.apply(this,arguments)}function F(){return(F=Object(b.a)(g.a.mark((function e(t,a){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.post(U("users"),t);case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0.response),a(I(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function B(){return(B=Object(b.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get(U("users"),x());case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),t(I(e.t0));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function P(e){return W.apply(this,arguments)}function W(){return(W=Object(b.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get(U("users/".concat(t,"/category")),x());case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function H(e,t,a){return A.apply(this,arguments)}function A(){return(A=Object(b.a)(g.a.mark((function e(t,a,n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.put(U("users/".concat(t)),a,x());case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),n(I(e.t0));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}var q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleEmail=function(e){var t=e.target;a.setState({email:t.value})},a.handlePassword=function(e){var t=e.target;a.setState({password:t.value})},a.handleError=function(e){var t=e.data;a.setState({alert:r.a.createElement(S,{type:"error",message:t.error.user_authentication})})},a.handleSubmit=function(){var e=Object(b.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,C(a.getData(),a.handleError.bind(Object(E.a)(a)));case 4:n=e.sent,a.makeLogin(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),a.state={open:a.props.open,email:"",password:"",alert:null},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"updateOpen",value:function(){this.setState({open:this.props.open,alert:null})}},{key:"componentDidMount",value:function(){this.updateOpen()}},{key:"componentDidUpdate",value:function(e){this.props.open!==e.open&&this.updateOpen()}},{key:"getData",value:function(){return{email:this.state.email,password:this.state.password}}},{key:"makeLogin",value:function(e){var t=e.data;localStorage.setItem("token",t.token),window.location.reload(!1)}},{key:"render",value:function(){return r.a.createElement(O,{title:"Sign In",open:this.state.open},r.a.createElement(k,null,r.a.createElement("div",{className:"input-field col s6"},r.a.createElement("input",{type:"email",className:"validate",id:"emailIn",value:this.state.mail,onChange:this.handleEmail.bind(this)}),r.a.createElement("label",{htmlFor:"emailIn"},"Email")),r.a.createElement("div",{className:"input-field col s6"},r.a.createElement("input",{type:"password",className:"validate",id:"passwordIn",value:this.state.password,onChange:this.handlePassword.bind(this)}),r.a.createElement("label",{htmlFor:"passwordIn"},"Password")),r.a.createElement("button",{className:"btn waves-effect waves-light",type:"submit",name:"singin",onClick:this.handleSubmit.bind(this)},"Sign In",r.a.createElement("i",{className:"material-icons right"},"send")),this.state.alert))}}]),t}(n.Component),J=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleEmail=function(e){var t=e.target;a.setState({email:t.value})},a.handlePassword=function(e){var t=e.target;a.setState({password:t.value})},a.handleError=function(e){var t=e.data;a.setState({alert:r.a.createElement(S,{type:"error",message:t.message})})},a.handleSubmit=function(){var e=Object(b.a)(g.a.mark((function e(t){var n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,D(a.getData(),a.handleError.bind(Object(E.a)(a)));case 4:n=e.sent,r=n.data,alert("User ".concat(r.email," added.")),window.location.reload(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),a.state={open:a.props.open,email:"",password:"",alert:null},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"updateOpen",value:function(){this.setState({open:this.props.open,alert:null})}},{key:"componentDidMount",value:function(){this.updateOpen()}},{key:"componentDidUpdate",value:function(e){this.props.open!==e.open&&this.updateOpen()}},{key:"getData",value:function(){return{email:this.state.email,password:this.state.password}}},{key:"render",value:function(){return r.a.createElement(O,{title:"Sign Up",open:this.state.open},r.a.createElement(k,null,r.a.createElement("div",{className:"input-field col s6"},r.a.createElement("input",{type:"email",className:"validate",id:"emailUp",value:this.state.mail,onChange:this.handleEmail.bind(this)}),r.a.createElement("label",{htmlFor:"emailUp"},"Email")),r.a.createElement("div",{className:"input-field col s6"},r.a.createElement("input",{type:"password",className:"validate",id:"passwordUp",value:this.state.password,onChange:this.handlePassword.bind(this)}),r.a.createElement("label",{htmlFor:"passwordUp"},"Password")),r.a.createElement("button",{className:"btn waves-effect waves-light",type:"submit",name:"singUp",onClick:this.handleSubmit.bind(this)},"Sign Up",r.a.createElement("i",{className:"material-icons right"},"send")),this.state.alert))}}]),t}(n.Component),K=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={modalSignIn:!1,modalSignUp:!1},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"openModalSignIn",value:function(){this.setState({modalSignIn:!this.state.modalSignIn,modalSignUp:!1})}},{key:"openModalSignUp",value:function(){this.setState({modalSignUp:!this.state.modalSignUp,modalSignIn:!1})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,null,r.a.createElement(v,{text:"Sign In",openModal:this.openModalSignIn.bind(this)}),r.a.createElement(v,{text:"Sign Up",openModal:this.openModalSignUp.bind(this)})),r.a.createElement("div",{className:"center-align"},r.a.createElement("h1",null,"Body Mass Index"),r.a.createElement("p",null,"Enter to your account to uses the calculator")),r.a.createElement(q,{open:this.state.modalSignIn}),r.a.createElement(J,{open:this.state.modalSignUp}))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),localStorage.removeItem("token"),window.location.reload(!1)},a.state={open:a.props.open},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"updateOpen",value:function(){this.setState({open:this.props.open})}},{key:"componentDidMount",value:function(){this.updateOpen()}},{key:"componentDidUpdate",value:function(e){this.props.open!==e.open&&this.updateOpen()}},{key:"render",value:function(){return r.a.createElement(O,{title:"Sign Out",open:this.state.open},r.a.createElement(k,null,r.a.createElement("div",{className:"input-field col s6"},r.a.createElement("button",{id:"exitApp",className:"btn waves-effect waves-light",type:"submit",name:"singOut",onClick:this.handleSubmit.bind(this)},"OK",r.a.createElement("i",{className:"material-icons right"},"send")))))}}]),t}(n.Component),T=function(e){return r.a.createElement(k,null,r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{id:"emailUser",type:"text",value:e.email,readOnly:!0}),r.a.createElement("label",{className:"active",htmlFor:"emailUser"},"User")),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{id:"weightUser",type:"text",value:e.weight||"0.0",readOnly:!0}),r.a.createElement("label",{className:"active",htmlFor:"weightUser"},"Weight")),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{id:"heightUser",type:"text",value:e.height||"0.0",readOnly:!0}),r.a.createElement("label",{className:"active",htmlFor:"heightUser"},"Height")),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{id:"bmiUser",type:"text",value:e.bmi||"0.0",readOnly:!0}),r.a.createElement("label",{className:"active",htmlFor:"bmiUser"},"Body Mass Index")))},z=function(e){var t=e.name;return r.a.createElement("h4",null,t)},G=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleWeight=function(e){var t=e.target;a.setState({weight:t.value})},a.handleHeight=function(e){var t=e.target;a.setState({height:t.value})},a.handleError=function(e){var t=e.data;a.setState({alert:r.a.createElement(S,{type:"error",message:t.error})})},a.handleSubmit=function(){var e=Object(b.a)(g.a.mark((function e(t){var n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,H(a.state.id,a.getData(),a.handleError.bind(Object(E.a)(a)));case 4:n=e.sent,r=n.data,a.updateUserInfo(r),P(a.state.id).then((function(e){return a.updateUserCategory(e)})).catch(console.error),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),a.state={weight:0,height:0,id:0,info:null,category:null,alert:null},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;(function(e){return B.apply(this,arguments)})(this.handleError.bind(this)).then((function(t){e.updateUserInfo(t.data),P(t.data.id).then((function(t){return e.updateUserCategory(t)})).catch(console.error)})).catch(console.error)}},{key:"getData",value:function(){return{weight:Number(this.state.weight),height:Number(this.state.height)}}},{key:"updateUserInfo",value:function(e){var t=e.id,a=e.email,n=e.weight,i=e.height,s=e.bmi;this.setState({id:t,info:r.a.createElement(T,{email:a,weight:n,height:i,bmi:s})})}},{key:"updateUserCategory",value:function(e){var t=e.data,a=t?t.name:"No category";this.setState({category:r.a.createElement(z,{name:a})})}},{key:"render",value:function(){return r.a.createElement("div",{className:""},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s6"},r.a.createElement(k,null,r.a.createElement("div",{className:"input-field col s6"},r.a.createElement("input",{type:"number",className:"validate",id:"weight",value:this.state.weight,onChange:this.handleWeight.bind(this)}),r.a.createElement("label",{htmlFor:"weight"},"Weight (KG)")),r.a.createElement("div",{className:"input-field col s6"},r.a.createElement("input",{type:"number",className:"validate",id:"height",value:this.state.height,onChange:this.handleHeight.bind(this)}),r.a.createElement("label",{htmlFor:"height"},"Height (Mts)")),r.a.createElement("button",{className:"btn-large waves-effect waves-light",type:"submit",name:"calculate",onClick:this.handleSubmit.bind(this)},"Calculate"),this.state.alert),this.state.category),r.a.createElement("div",{className:"col s6"},this.state.info)))}}]),t}(n.Component),$=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={modalSignOut:!1},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"openModalSignOut",value:function(){this.setState({modalSignOut:!this.state.modalSignOut})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,null,r.a.createElement(v,{text:"Sign Out",openModal:this.openModalSignOut.bind(this)})),r.a.createElement("div",{className:"center-align"},r.a.createElement("h1",null,"Body Mass Index")),r.a.createElement(L,{open:this.state.modalSignOut}),r.a.createElement("div",{className:"container"},r.a.createElement(G,null)))}}]),t}(n.Component),_=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={logged:!1},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){h.a.AutoInit(),this.checkToken()}},{key:"checkToken",value:function(){localStorage.getItem("token")&&this.setState({logged:!0})}},{key:"render",value:function(){return this.state.logged?r.a.createElement($,null):r.a.createElement(K,null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.80ccf989.chunk.js.map