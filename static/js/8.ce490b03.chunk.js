(this["webpackJsonppersonal-web-pwa"]=this["webpackJsonppersonal-web-pwa"]||[]).push([[8],{31:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var i=s(7),c=s(8),n=s(10),a=s(9),l=s(1),r=s.n(l),o=s(13),j=s(25),h=s.n(j),p=s(26),u=s(6),b=s(0),d=function(e){Object(n.a)(s,e);var t=Object(a.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this)).props=e,c}return Object(c.a)(s,[{key:"render",value:function(){return this.props.icon?Object(b.jsx)("div",{className:"skill-item",style:{background:this.props.color},children:this.props.icon}):Object(b.jsx)("div",{className:"skill-item",children:Object(b.jsx)("img",{src:this.props.image,alt:this.props.name})})}}]),s}(r.a.Component),O=s(27),v=function(e){Object(n.a)(s,e);var t=Object(a.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this)).state={skills:[]},c.props=e,c.getSkills=c.getSkills.bind(Object(u.a)(c)),c}return Object(c.a)(s,[{key:"getSkills",value:function(e){return O.a.skills[e]}},{key:"componentDidMount",value:function(){var e=Object(p.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.getSkills(this.props.type),this.setState({skills:t});case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return console.log(this.state.skills),Object(b.jsx)("div",{className:"skill-list",children:this.state.skills.map((function(e){return Object(b.jsx)(d,{icon:e.icon,image:e.image,color:e.color},e.name)}))})}}]),s}(r.a.Component),k=v,m=(s(31),function(e){Object(n.a)(s,e);var t=Object(a.a)(s);function s(){var e;return Object(i.a)(this,s),(e=t.call(this)).page="Skill",e}return Object(c.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"PageDiv page-skill",children:[Object(b.jsx)(o.a,{page:this.page}),Object(b.jsx)("div",{className:"PageMain",children:Object(b.jsxs)("section",{children:[Object(b.jsxs)("div",{className:"technology-section",children:[Object(b.jsx)("h3",{children:"Technology"}),Object(b.jsx)(k,{type:"technology"})]}),Object(b.jsxs)("div",{className:"design-section",children:[Object(b.jsx)("h3",{children:"Design"}),Object(b.jsx)("div",{className:"skill-list",children:Object(b.jsx)(k,{type:"design"})})]}),Object(b.jsxs)("div",{className:"others-section",children:[Object(b.jsx)("h3",{children:"Others"}),Object(b.jsx)("div",{className:"skill-list",children:Object(b.jsx)("div",{className:"skill-item"})})]})]})})]})}}]),s}(r.a.Component));t.default=m}}]);
//# sourceMappingURL=8.ce490b03.chunk.js.map