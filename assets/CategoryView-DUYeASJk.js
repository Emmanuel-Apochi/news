import{_,d as p,e as m,c as o,b as t,F as n,r as g,f as c,u as l,h,i as f,o as r,t as a,w as v,g as y,R as w,j as x}from"./index-uFBRcZkR.js";const V={class:"card-container container"},b={class:"col-md-6"},k={class:"card",style:{width:"18rem"}},B=["src"],R={class:"card-title"},N={class:"card-text"},C={__name:"CategoryView",setup(F){const i=h(),d=f();p(async()=>{await i.dispatch("fetchCategoriesByCategories",d.params.categories)});const u=m(()=>i.state.selectedCategories);return(L,e)=>(r(),o(n,null,[t("div",V,[(r(!0),o(n,null,g(u.value,s=>(r(),o("div",{key:s.uuid},[t("div",b,[t("div",k,[t("img",{src:s.image_url,class:"card-img-top img-fluid",alt:"image"},null,8,B),e[0]||(e[0]=t("div",{class:"card-body"},null,-1)),t("h3",null,a(s.title),1),t("p",R,a(s.description),1),t("p",N,a(s.published_at),1),t("div",null,[t("strong",null,[c(l(w),{to:"/categories"},{default:v(()=>[y(a(s.categories),1)]),_:2},1024)])]),e[1]||(e[1]=t("br",null,null,-1))])])]))),128))]),c(l(x))],64))}},j=_(C,[["__scopeId","data-v-8e09235e"]]);export{j as default};