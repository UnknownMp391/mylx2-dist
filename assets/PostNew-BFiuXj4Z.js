import{d as _,r as a,o as T,h as r,w as k,v as $,u as d,i as e,x as p,B as w,F as y,C as N,A as V,g as m,D as B}from"./vendor-DHGCqLyH.js";import{u as D,b as c}from"./index-BvAo4jYu.js";import{u as E}from"./homePage-BLQsmEBP.js";const A=_("editTemp",()=>{const f=a(""),o=a("");return{title:f,content:o}}),R=["disabled"],F=["disabled"],L=["disabled"],M={slot:"header",icon:"near_me"},P={style:{"margin-left":"2.5rem"}},U=["onClick"],z={key:0,slot:"end-icon"},j={class:"bar",style:{margin:"16px 0px"}},q=["loading"],O={__name:"PostNew",setup(f){const o=D(),g=V(),I=E(),n=A(),u=a(!1),b=a(!1),s=a(0),x=a({1:"人渣反派自救系统",2:"魔道祖师",3:"天官赐福"});function C(l){l==s.value?s.value=0:s.value=l}async function S(){u.value=!0;const l=await o.postNew(n.content,n.title,s.value);if(l.code==1&&l.status==1){c("发布成功");var t="";o.accountInfo.avatar?t=`${o.config.ossEndpoint}/${o.accountInfo.avatar}`:t=`${o.config.ossEndpoint}/${o.config.defaultAvatarID}`,I.recommends.splice(0,0,{postId:l.postId,title:n.title,content:n.content,authorInfo:o.accountInfo,avatar:t}),setTimeout(()=>{g.replace(`/post?postId=${l.postId}`),n.content="",n.title=""},500)}else c(`发布失败 ${l.code} ${l.status}`);u.value=!1}return T(async()=>{o.config.isLogin||(c("需要登录"),g.replace("/login")),b.value=!0}),(l,t)=>(m(),r(y,null,[k(e("mdui-text-field",{variant:"outlined","onUpdate:modelValue":t[0]||(t[0]=i=>d(n).title=i),label:"文章标题",disabled:u.value},null,8,R),[[$,d(n).title]]),t[7]||(t[7]=e("mdui-divider",null,null,-1)),k(e("mdui-text-field",{variant:"filled",label:"正文","onUpdate:modelValue":t[1]||(t[1]=i=>d(n).content=i),autosize:"","min-rows":"2","max-rows":"8",disabled:u.value},null,8,F),[[$,d(n).content]]),t[8]||(t[8]=e("mdui-divider",null,null,-1)),e("mdui-collapse",null,[e("mdui-collapse-item",{disabled:!b.value},[e("mdui-list-item",M,[t[4]||(t[4]=e("mdui-icon-auto-awesome-motion",{slot:"icon"},null,-1)),p(" "+w(s.value!=0?x.value[s.value]:"选择合集"),1)]),e("div",P,[(m(!0),r(y,null,N(x.value,(i,v)=>(m(),r("div",{key:v},[e("mdui-list-item",{onClick:G=>C(v)},[v==s.value?(m(),r("mdui-icon-check",z)):B("",!0),p(" "+w(i),1)],8,U)]))),128))])],8,L)]),t[9]||(t[9]=e("mdui-divider",null,null,-1)),e("div",j,[e("mdui-button",{variant:"tonal",onClick:t[2]||(t[2]=i=>d(c)("功能未实现"))},"存草稿 (未实现)"),t[6]||(t[6]=e("div",{style:{"flex-grow":"1"}},null,-1)),e("mdui-button",{onClick:t[3]||(t[3]=i=>S()),loading:u.value},t[5]||(t[5]=[e("mdui-icon-upload",{slot:"icon"},null,-1),p("发布")]),8,q)])],64))}};export{O as default};
