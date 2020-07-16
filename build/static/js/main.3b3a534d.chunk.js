(this["webpackJsonpreact-homework"]=this["webpackJsonpreact-homework"]||[]).push([[0],{18:function(e,t,a){e.exports=a(45)},23:function(e,t,a){},24:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),c=a.n(r);a(23),a(24);var o=function(){return l.a.createElement("section",{class:"hero is-primary m-b3"},l.a.createElement("div",{class:"hero-body"},l.a.createElement("div",{class:"container"},l.a.createElement("h1",{class:"title"},"Employee Directory"),l.a.createElement("h2",{class:"subtitle"},"A lightweight, React-based application for viewing, sorting, and searching employee information"))))},s=a(13),i=a(14),m=a(17),u=a(16),d=a(15),h=a.n(d),E=function(){return h.a.get("https://randomuser.me/api/?results=35&nat=US")},f=(a(42),a(2));var p=function(e){return l.a.createElement("div",{className:"columns is-centered"},l.a.createElement("div",{className:"column is-4"},l.a.createElement("div",{className:"field"},l.a.createElement("input",{value:e.value,onChange:e.handleInputChange,name:"search",type:"text",className:"input",placeholder:"Search employee names"}),l.a.createElement("p",{className:"has-text-centered m-t1 m-b1"},"Click on the ",l.a.createElement(f.b,{style:{verticalAlign:"middle"}})," to sort alphabetically by name"))))};a(43);var y=function(e){var t;return t=void 0!==e.filteredEmployees[0]?e.filteredEmployees:e.employees,l.a.createElement("div",{className:"columns is-centered"},l.a.createElement("div",{className:"column is-10"},l.a.createElement("table",{className:"table is-fullwidth"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Headshot"),l.a.createElement("th",null,"Name ","  ",l.a.createElement(f.b,{onClick:e.handleSort,style:{cursor:"pointer",verticalAlign:"middle"}})),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Location"),l.a.createElement("th",null,"Cell Number"),l.a.createElement("th",null,"Age"))),l.a.createElement("tbody",null,t.map((function(e){return l.a.createElement("tr",{key:e.login.salt},l.a.createElement("td",null,l.a.createElement("img",{alt:e.name.first,src:e.picture.large})),l.a.createElement("td",null,e.name.first," ",e.name.last),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.location.city,", ",e.location.state),l.a.createElement("td",null,e.cell),l.a.createElement("td",null,e.dob.age))}))))))},g=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={employees:[],filteredEmployees:[],sort:"ascending"},e.loadEmployees=function(){E().then((function(t){e.setState({employees:t.data.results})}))},e.handleInputChange=function(t){var a=t.target.value,n=e.state.employees.filter((function(e){if(-1!==(e.name.first.toLowerCase()+" "+e.name.last.toLowerCase()).indexOf(a.toLowerCase()))return e}));e.setState({filteredEmployees:a?n:[]})},e.handleSort=function(){var t;switch(t=void 0!==e.state.filteredEmployees[0]?e.state.filteredEmployees:e.state.employees,e.state.sort){case"ascending":var a=t.sort((function(e,t){return e.name.first<t.name.first?-1:1}));e.setState({filteredEmployees:a}),e.setState({sort:"descending"});break;case"descending":var n=t.sort((function(e,t){return e.name.first<t.name.first?1:-1}));e.setState({filteredEmployees:n}),e.setState({sort:"ascending"});break;default:console.log("An error has occurred.")}},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.loadEmployees()}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(p,{handleInputChange:this.handleInputChange}),l.a.createElement(y,{employees:this.state.employees,filteredEmployees:this.state.filteredEmployees,handleSort:this.handleSort}))}}]),a}(n.Component);a(44);var v=function(){return l.a.createElement("footer",{class:"footer m-t5"},l.a.createElement("div",{class:"content has-text-centered"},l.a.createElement("a",{href:"https://github.com/nabeek/employee-directory",target:"_blank"},l.a.createElement("small",null,l.a.createElement(f.a,null)," GitHub Repo")),l.a.createElement("p",null,l.a.createElement("small",null,l.a.createElement("a",{href:"https://github.com/nabeek",target:"_blank"},"nabeek made this"),", copyright \xa9 ",(new Date).getFullYear()))))};var b=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o,{className:"mb-3"}),l.a.createElement(g,null),l.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.3b3a534d.chunk.js.map