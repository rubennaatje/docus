import G from"./DocsAside.b1096f4e.js";import K from"./ProseCodeInline.8226ca47.js";import R from"./Alert.95249480.js";import U from"./DocsPageBottom.379b84e0.js";import J from"./DocsPrevNext.d375e1c4.js";import{d as Q,G as W,a3 as X,i as Y,L as m,r as V,q as Z,o as ee,a6 as oe,b as u,K as A,w as h,I as t,c as g,g as r,f as y,e as p,N as te,D as x,t as ae,F as ne,n as k,O as se,a7 as ce,p as le,j as re,l as _e}from"./entry.8fdf77f2.js";import ie from"./DocsToc.b09337e5.js";import"./ContentSlot.d769209c.js";import"./ProseA.2784257e.js";import"./EditOnLink.vue.5879c255.js";import"./DocsTocLinks.87a71641.js";const ue=d=>(le("data-v-87a5c6a7"),d=d(),re(),d),pe={class:"page-body"},de={key:1,class:"toc"},me={class:"toc-wrapper"},fe=ue(()=>p("span",{class:"title"},"Table of Contents",-1)),ve=Q({__name:"DocsPageLayout",setup(d){const{page:n}=W(),{config:f,tree:T}=X(),L=Y(),j=(e,o=!0)=>{var a;return typeof((a=n.value)==null?void 0:a[e])<"u"?n.value[e]:o},P=m(()=>{var e,o,a;return!n.value||((a=(o=(e=n.value)==null?void 0:e.body)==null?void 0:o.children)==null?void 0:a.length)>0}),S=m(()=>{var e,o,a,c,l;return((e=n.value)==null?void 0:e.toc)!==!1&&((l=(c=(a=(o=n.value)==null?void 0:o.body)==null?void 0:a.toc)==null?void 0:c.links)==null?void 0:l.length)>=2}),b=m(()=>{var e,o,a,c,l;return((e=n.value)==null?void 0:e.aside)!==!1&&(((o=T.value)==null?void 0:o.length)>1||((l=(c=(a=T.value)==null?void 0:a[0])==null?void 0:c.children)==null?void 0:l.length))}),F=m(()=>j("bottom",!0)),_=V(!1),s=V(null),v=()=>L.path.split("/").slice(0,2).join("/"),i=Z("asideScroll",()=>{var e;return{parentPath:v(),scrollTop:((e=s.value)==null?void 0:e.scrollTop)||0}});function C(){s.value&&(s.value.scrollHeight===0&&setTimeout(C,0),s.value.scrollTop=i.value.scrollTop)}return ee(()=>{i.value.parentPath!==v()?(i.value.parentPath=v(),i.value.scrollTop=0):C()}),oe(()=>{s.value&&(i.value.scrollTop=s.value.scrollTop)}),(e,o)=>{var D,N,w,B,I,$;const a=G,c=K,l=R,H=U,M=J,O=se,q=ie,z=ce;return u(),A(z,{fluid:(N=(D=t(f))==null?void 0:D.main)==null?void 0:N.fluid,padded:(B=(w=t(f))==null?void 0:w.main)==null?void 0:B.padded,class:k(["docs-page-content",{fluid:($=(I=t(f))==null?void 0:I.main)==null?void 0:$.fluid,"has-toc":t(S),"has-aside":t(b)}])},{default:h(()=>[t(b)?(u(),g("aside",{key:0,ref_key:"asideNav",ref:s,class:"aside-nav"},[r(a,{class:"app-aside"})],512)):y("",!0),p("article",pe,[t(P)?te(e.$slots,"default",{key:0},void 0,!0):(u(),A(l,{key:1,type:"info"},{default:h(()=>[x(" Start writing in "),r(c,null,{default:h(()=>[x("content/"+ae(t(n)._file),1)]),_:1}),x(" to see this page taking shape. ")]),_:1})),t(P)&&t(n)&&t(F)?(u(),g(ne,{key:2},[r(H),r(M)],64)):y("",!0)]),t(S)?(u(),g("div",de,[p("div",me,[p("button",{onClick:o[0]||(o[0]=E=>_.value=!t(_))},[fe,r(O,{name:"heroicons-outline:chevron-right",class:k(["icon",[t(_)&&"rotate"]])},null,8,["class"])]),p("div",{class:k(["docs-toc-wrapper",[t(_)&&"opened"]])},[r(q,{onMove:o[1]||(o[1]=E=>_.value=!1)})],2)])])):y("",!0)]),_:3},8,["fluid","padded","class"])}}});const Ne=_e(ve,[["__scopeId","data-v-87a5c6a7"]]);export{Ne as default};
