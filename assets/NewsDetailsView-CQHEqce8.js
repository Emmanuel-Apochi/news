import{_ as n,d as c,e as d,c as _,b as e,t as a,f as l,w as p,u,g as r,F as m,h as f,i as w,o as h,R as N,j as v}from"./index-uFBRcZkR.js";const V={class:"container mt-5 mb-5"},b=["src"],g={class:"but"},x=["href"],B={__name:"NewsDetailsView",setup(R){const o=f(),i=w();c(async()=>{await o.dispatch("fetchNewsdetailsByUuid",i.params.uuid)});const s=d(()=>o.state.selectedNewsdetails);return(k,t)=>(h(),_(m,null,[e("div",V,[e("img",{src:s.value.image_url,alt:"image"},null,8,b),e("p",null,a(s.value.description),1),e("p",null,a(s.value.published_at),1),l(u(N),{class:"tx"},{default:p(()=>[r("Source: "+a(s.value.source),1)]),_:1}),t[0]||(t[0]=r()),t[1]||(t[1]=e("br",null,null,-1)),e("button",g,[e("a",{href:s.value.url},"View article",8,x)])]),l(u(v))],64))}},D=n(B,[["__scopeId","data-v-f5a36fc4"]]);export{D as default};