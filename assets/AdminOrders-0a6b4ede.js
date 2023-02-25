import{M as w,m as D,P as E}from"./modalMixin-73bd375b.js";import{_ as $,o as d,c as l,d as t,t as o,a as O,g,F as _,f as y,h as k,k as M,b as p,r as m,n as V}from"./index-eac41100.js";const A={props:{item:{}},data(){return{modal:""}},emits:["del-item"],methods:{openModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new w(this.$refs.modal)}},S={class:"modal fade",id:"delModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},U={class:"modal-dialog",role:"document"},T={class:"modal-content border-0"},I={class:"modal-header bg-danger text-white"},N={class:"modal-title"},B=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),R={class:"modal-body"},j={class:"text-danger"},q={class:"modal-footer"},z=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function F(s,n,i,u,e,c){return d(),l("div",S,[t("div",U,[t("div",T,[t("div",I,[t("h5",N,[t("span",null,"刪除 "+o(i.item.title),1)]),B]),t("div",R,[O(" 是否刪除 "),t("strong",j,o(i.item.title),1),O(" (刪除後將無法恢復)。 ")]),t("div",q,[z,t("button",{type:"button",class:"btn btn-danger",onClick:n[0]||(n[0]=r=>s.$emit("del-item"))},"確認刪除 ")])])])],512)}const H=$(A,[["render",F]]),G={props:{order:{type:Object,default(){return{}}}},data(){return{status:{},modal:"",tempOrder:{},isPaid:!1}},emits:["update-paid"],mixins:[D],inject:["emitter"],watch:{order(){this.tempOrder=this.order}}},J={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},K={class:"modal-dialog modal-xl",role:"document"},Q={class:"modal-content border-0"},W=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},[t("span",null,"訂單細節")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),X={class:"modal-body"},Y={class:"row"},Z={class:"col-md-4"},tt=t("h3",null,"用戶資料",-1),et={class:"table"},st={key:0},ot=t("th",{style:{width:"100px"}},"姓名",-1),dt=t("th",null,"Email",-1),lt=t("th",null,"電話",-1),nt=t("th",null,"地址",-1),at={class:"col-md-8"},it=t("h3",null,"訂單細節",-1),rt={class:"table"},ct=t("th",{style:{width:"100px"}},"訂單編號",-1),ht=t("th",null,"下單時間",-1),ut=t("th",null,"付款時間",-1),_t={key:0},pt={key:1},mt=t("th",null,"付款狀態",-1),bt={key:0,class:"text-success"},ft={key:1,class:"text-muted"},gt=t("th",null,"總金額",-1),yt=t("h3",null,"選購商品",-1),$t={class:"table"},Ot=t("thead",null,[t("tr")],-1),kt={class:"text-end"},Mt={class:"d-flex justify-content-end"},vt={class:"form-check"},xt={class:"form-check-label",for:"flexCheckDefault"},Pt={key:0},Ct={key:1},Lt={class:"modal-footer"},wt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Dt(s,n,i,u,e,c){return d(),l("div",J,[t("div",K,[t("div",Q,[W,t("div",X,[t("div",Y,[t("div",Z,[tt,t("table",et,[e.tempOrder.user?(d(),l("tbody",st,[t("tr",null,[ot,t("td",null,o(e.tempOrder.user.name),1)]),t("tr",null,[dt,t("td",null,o(e.tempOrder.user.email),1)]),t("tr",null,[lt,t("td",null,o(e.tempOrder.user.tel),1)]),t("tr",null,[nt,t("td",null,o(e.tempOrder.user.address),1)])])):g("",!0)])]),t("div",at,[it,t("table",rt,[t("tbody",null,[t("tr",null,[ct,t("td",null,o(e.tempOrder.id),1)]),t("tr",null,[ht,t("td",null,o(s.$filters.date(e.tempOrder.create_at)),1)]),t("tr",null,[ut,t("td",null,[e.tempOrder.paid_date?(d(),l("span",_t,o(s.$filters.date(e.tempOrder.paid_date)),1)):(d(),l("span",pt,"時間不正確"))])]),t("tr",null,[mt,t("td",null,[e.tempOrder.is_paid?(d(),l("strong",bt,"已付款")):(d(),l("span",ft,"尚未付款"))])]),t("tr",null,[gt,t("td",null,o(s.$filters.currency(e.tempOrder.total)),1)])])]),yt,t("table",$t,[Ot,t("tbody",null,[(d(!0),l(_,null,y(e.tempOrder.products,r=>(d(),l("tr",{key:r.id},[t("th",null,o(r.product.title),1),t("td",null,o(r.qty)+" / "+o(r.product.unit),1),t("td",kt,o(s.$filters.currency(r.final_total)),1)]))),128))])]),t("div",Mt,[t("div",vt,[k(t("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":n[0]||(n[0]=r=>e.tempOrder.is_paid=r)},null,512),[[M,e.tempOrder.is_paid]]),t("label",xt,[e.tempOrder.is_paid?(d(),l("span",Pt,"已付款")):(d(),l("span",Ct,"未付款"))])])])])])]),t("div",Lt,[wt,t("button",{type:"button",class:"btn btn-primary",onClick:n[1]||(n[1]=r=>s.$emit("update-paid",e.tempOrder))}," 修改付款狀態 ")])])])],512)}const Et=$(G,[["render",Dt]]),{VITE_APP_URL:b,VITE_APP_PATH:f}={VITE_APP_URL:"https://vue3-course-api.hexschool.io",VITE_APP_PATH:"harper",BASE_URL:"/vite-deploy-week6hw/",MODE:"production",DEV:!1,PROD:!0},Vt={data(){return{orders:{},isNew:!1,pagination:{},isLoading:!1,tempOrder:{},currentPage:1}},components:{Pagination:E,DelModal:H,OrderModal:Et},methods:{getOrders(s=1){this.currentPage=s;const n=`${b}/api/${f}/admin/orders?page=${s}`;this.isLoading=!0,this.$http.get(n,this.tempProduct).then(i=>{this.orders=i.data.orders,this.pagination=i.data.pagination,this.isLoading=!1}).catch(i=>{this.isLoading=!1,this.$httpMessageState(i.response,"錯誤訊息")})},openModal(s){this.tempOrder={...s},this.isNew=!1,this.$refs.orderModal.openModal()},openDelOrderModal(s){this.tempOrder={...s},this.$refs.delModal.openModal()},updatePaid(s){this.isLoading=!0;const n=`${b}/api/${f}/admin/order/${s.id}`,i={is_paid:s.is_paid};this.$http.put(n,{data:i}).then(u=>{this.isLoading=!1,this.$refs.orderModal.hideModal(),this.getOrders(this.currentPage),this.$httpMessageState(u,"更新付款狀態")}).catch(u=>{this.isLoading=!1,this.$httpMessageState(u.response,"錯誤訊息")})},delOrder(){const s=`${b}/api/${f}/admin/order/${this.tempOrder.id}`;this.isLoading=!0,this.$http.delete(s).then(()=>{this.isLoading=!1,this.$refs.delModal.hideModal(),this.getOrders(this.currentPage)}).catch(n=>{this.isLoading=!1,this.$httpMessageState(n.response,"錯誤訊息")})}},created(){this.getOrders()}},At={class:"table mt-4"},St=t("thead",null,[t("tr",null,[t("th",null,"購買時間"),t("th",null,"Email"),t("th",null,"購買款項"),t("th",null,"應付金額"),t("th",null,"是否付款"),t("th",null,"編輯")])],-1),Ut=["textContent"],Tt={class:"list-unstyled"},It={class:"text-right"},Nt={class:"form-check form-switch"},Bt=["id","onUpdate:modelValue","onChange"],Rt=["for"],jt={key:0},qt={key:1},zt={class:"btn-group"},Ft=["onClick"],Ht=["onClick"];function Gt(s,n,i,u,e,c){const r=m("Loading"),v=m("OrderModal"),x=m("DelModal"),P=m("Pagination");return d(),l(_,null,[p(r,{active:e.isLoading,"z-index":1060},null,8,["active"]),t("table",At,[St,t("tbody",null,[(d(!0),l(_,null,y(e.orders,(a,C)=>(d(),l(_,{key:C},[e.orders.length?(d(),l("tr",{key:0,class:V({"text-secondary":!a.is_paid})},[t("td",null,o(s.$filters.date(a.create_at)),1),t("td",null,[a.user?(d(),l("span",{key:0,textContent:o(a.user.email)},null,8,Ut)):g("",!0)]),t("td",null,[t("ul",Tt,[(d(!0),l(_,null,y(a.products,(h,L)=>(d(),l("li",{key:L},o(h.product.title)+" 數量："+o(h.qty)+" "+o(h.product.unit),1))),128))])]),t("td",It,o(a.total),1),t("td",null,[t("div",Nt,[k(t("input",{class:"form-check-input",type:"checkbox",id:`paidSwitch${a.id}`,"onUpdate:modelValue":h=>a.is_paid=h,onChange:h=>c.updatePaid(a)},null,40,Bt),[[M,a.is_paid]]),t("label",{class:"form-check-label",for:`paidSwitch${a.id}`},[a.is_paid?(d(),l("span",jt,"已付款")):(d(),l("span",qt,"未付款"))],8,Rt)])]),t("td",null,[t("div",zt,[t("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:h=>c.openModal(a)}," 檢視 ",8,Ft),t("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:h=>c.openDelOrderModal(a)}," 刪除 ",8,Ht)])])],2)):g("",!0)],64))),128))])]),p(v,{order:e.tempOrder,ref:"orderModal",onUpdatePaid:c.updatePaid},null,8,["order","onUpdatePaid"]),p(x,{item:e.tempOrder,ref:"delModal",onDelItem:c.delOrder},null,8,["item","onDelItem"]),p(P,{pages:e.pagination,onEmitPages:c.getOrders},null,8,["pages","onEmitPages"])],64)}const Qt=$(Vt,[["render",Gt]]);export{Qt as default};