(this["webpackJsonppersonal-web-pwa"]=this["webpackJsonppersonal-web-pwa"]||[]).push([[7],{32:function(e,t,r){},39:function(e,t,r){"use strict";r.r(t);var c=r(7),s=r(8),n=r(10),a=r(9),i=r(1),o=r.n(i),j=r(13),p=r(25),u=r.n(p),l=r(26),b=r(6),h=r(0),O=function(e){Object(n.a)(r,e);var t=Object(a.a)(r);function r(e){var s;return Object(c.a)(this,r),(s=t.call(this)).props=e,s}return Object(s.a)(r,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"project-item",children:[Object(h.jsx)("div",{className:"project-image",children:Object(h.jsxs)("picture",{children:[Object(h.jsx)("source",{type:"image/webp",srcSet:this.props.imgWEBP}),Object(h.jsx)("source",{type:"image/jpeg",srcSet:this.props.imgJPG}),Object(h.jsx)("img",{src:this.props.imgJPG,alt:this.props.title})]})}),Object(h.jsxs)("div",{className:"project-info",children:[Object(h.jsx)("h3",{children:this.props.title}),Object(h.jsxs)("div",{className:"project-cta",children:[Object(h.jsx)("a",{href:this.props.urlView,rel:"noopener noreferrer",target:"_blank",className:"view ease-out",children:"View"}),Object(h.jsx)("a",{href:this.props.urlSource,rel:"noopener noreferrer",target:"_blank",className:"source-code",children:"Source Code"})]})]})]})}}]),r}(o.a.Component),d=r(27),m=function(e){Object(n.a)(r,e);var t=Object(a.a)(r);function r(){var e;return Object(c.a)(this,r),(e=t.call(this)).state={projects:[]},e.getProjects=e.getProjects.bind(Object(b.a)(e)),e}return Object(s.a)(r,[{key:"getProjects",value:function(){return d.a.projects}},{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.getProjects(),this.setState({projects:t});case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(h.jsx)("div",{className:"project-list",children:this.state.projects.map((function(e,t){return Object(h.jsx)(O,{title:e.title,urlView:e.urlView,urlSource:e.urlSource,imgJPG:e.imgJPG,imgWEBP:e.imgWEBP},t)}))})}}]),r}(o.a.Component),f=m,g=(r(32),function(e){Object(n.a)(r,e);var t=Object(a.a)(r);function r(){var e;return Object(c.a)(this,r),(e=t.call(this)).page="Project",e}return Object(s.a)(r,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"PageDiv page-project",children:[Object(h.jsx)(j.a,{page:this.page}),Object(h.jsx)("div",{className:"PageMain",children:Object(h.jsx)("section",{children:Object(h.jsx)(f,{})})})]})}}]),r}(o.a.Component));t.default=g}}]);
//# sourceMappingURL=7.4b32d5dd.chunk.js.map