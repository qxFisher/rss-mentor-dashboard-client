(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(e,t,n){},160:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(15),i=n.n(r),u=(n(78),n(63)),s=n(64),c=n(70),l=n(65),d=n(71),h=n(72),m=n(3),p=n.n(m),b=(n(80),function(e){var t=e.selectedOption,n=e.data;if(t&&n.mentors.length>=1){var a=n.tasks,r=n.mentors,i=a.map(function(e){return o.a.createElement("th",{key:p.a.uniqueId("task_")},o.a.createElement("a",{key:p.a.uniqueId("a_"),href:e.taskLink,target:"_blank",rel:"noopener noreferrer"},e.taskName))}),u=r.find(function(e){return e.mentorGithub===t.value}).students.map(function(e){var t=a.map(function(t){var n=e.checkedTasks.some(function(e){return e===t.taskName}),a=t.taskStatus;return n&&(a="Done"),o.a.createElement("td",{key:p.a.uniqueId("td_"),className:a})}),n="https://github.com/"+e.studentGithub;return o.a.createElement("tr",{key:p.a.uniqueId("tr_")},o.a.createElement("td",{key:p.a.uniqueId("td_")},o.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer",key:p.a.uniqueId("a_")},e.studentGithub)),t)});return o.a.createElement("table",{key:p.a.uniqueId("table_"),className:"dashboard-table"},o.a.createElement("thead",{key:p.a.uniqueId("thead_")},o.a.createElement("tr",{key:p.a.uniqueId("tr_")},o.a.createElement("th",{key:p.a.uniqueId("th_")}),i)),o.a.createElement("tbody",{key:p.a.uniqueId("tbody_")},u))}return null}),f=n(46),g=n.n(f),k=g.a.initializeApp({apiKey:"AIzaSyBLIx7hw3p1ttbKuILQxoUJhh6CEtF_AyA",authDomain:"rss-dashboard-client.firebaseapp.com",databaseURL:"https://rss-dashboard-client.firebaseio.com",projectId:"rss-dashboard-client",storageBucket:"rss-dashboard-client.appspot.com",messagingSenderId:"734063673265"}),y=new g.a.auth.GithubAuthProvider;y.addScope("repo");var v=k.auth(),I={login:function(){return v.signInWithPopup(y)},logout:function(){return v.signOut()},auth:v},E=n(47),_=(n(151),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(c.a)(this,Object(l.a)(t).call(this,e))).login=function(){I.login().then(function(e){var t=e.user;n.setState({user:t})})},n.logout=function(){I.logout().then(function(){n.setState({user:null})})},n.handleChange=function(e){localStorage.setItem("mentor",JSON.stringify(e)),n.setState({selectedOption:e})},n.state={data:{tasks:[],mentors:[]},selectedOption:JSON.parse(localStorage.getItem("mentor")),user:null},I.auth.onAuthStateChanged(function(e){return n.setState({user:e?{displayName:e.displayName,photoURL:e.photoURL}:null})}),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://rss-dashboard-server.herokuapp.com/api/data").then(function(e){return e.json()}).then(function(t){return e.setState({data:t})})}},{key:"render",value:function(){var e=this.state,t=e.user,n=e.data,a=this.state.selectedOption;console.log(a);var r=n.mentors.map(function(e){return{value:e.mentorGithub,label:"".concat(e.mentorName," (").concat(e.mentorGithub,")")}});if(t&&!a){var i=n.mentors.find(function(e){return e.mentorName.toLowerCase()===t.displayName.toLowerCase()});i&&(a={value:i.mentorGithub,label:"".concat(i.mentorName," (").concat(i.mentorGithub,")")})}return o.a.createElement("div",{key:p.a.uniqueId("div_"),className:"container"},o.a.createElement("section",{className:"login__wrapper"},t?o.a.createElement(E.GithubLoginButton,{onClick:this.logout,className:"btn-login"},"Logout (",t.displayName,")"):o.a.createElement(E.GithubLoginButton,{onClick:this.login,className:"btn-login"},"Login")),o.a.createElement(h.a,{key:p.a.uniqueId("td_"),value:a,onChange:this.handleChange,options:r}),o.a.createElement(b,{key:p.a.uniqueId("table_"),data:n,selectedOption:a}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},73:function(e,t,n){e.exports=n(160)},78:function(e,t,n){},80:function(e,t,n){}},[[73,1,2]]]);
//# sourceMappingURL=main.f5ec04a3.chunk.js.map