import{g as l}from"./categories.service-a244361a.js";import{_ as u,r as d,o as _,c as g,a as e,f as c,t as i}from"./index-c65a3c12.js";const h={data(){return{cart:[{id:0,amount:5},{id:20,amount:10}],cardId:-1,categories:[],selectedImageSrc:"/images/product-images/default.png",selectedImage:0}},props:{product:{required:!0}},methods:{getCartArticlePos(){for(let t=0;t<this.cart.length;t++)if(this.cart.id===this.product.id)return t;return this.cart.push({id:this.product.id,amount:0}),this.cart.length-1},addOne(){this.cart[this.cardId]+=1},buy(){this.addOne(),this.$emit("cart")}},created(){this.cardId=this.getCartArticlePos(),this.selectedImageSrc=`/images/product-images/${this.product.id}/${this.product.image[this.selectedImage]}`,l().then(t=>{this.categories=t})}},m={class:"flex flex-row align-center"},p={class:"flex flex-col width-auto"},v={class:"flex flex-col width-auto align-left margin-3-width"},f={class:"margin-2-height"},x={class:"text-3"},y={class:"text-4"},C={class:"text-4"},b=e("div",{id:"link"},"Se puede comprar un máximo de 20 unidades",-1),k={class:"flex gap-1"};function I(t,S,s,w,a,o){const n=d("pv-image"),r=d("pv-button");return _(),g("div",m,[e("div",p,[c(n,{src:a.selectedImageSrc,alt:"Main Picture",class:"main-image"},null,8,["src"])]),e("div",v,[e("div",null,[e("div",f,[e("div",x,i(a.categories[s.product.category].subcategory[s.product.subcategory].franchise[s.product.franchise].name),1),e("div",y,i(s.product.name),1)]),e("div",C,"S/. "+i(s.product.price.toFixed(2)),1)]),e("div",null,[e("div",null,[e("div",null,i(s.product.stock)+" Unidades Disponibles",1),b,e("div",k,[c(r,{label:"Comprar",size:"large",severity:"secondary",rounded:"",onClick:o.buy},null,8,["onClick"]),c(r,{label:"Agregar al Carrito",size:"large",severity:"secondary",outlined:"",rounded:"",onClick:o.addOne},null,8,["onClick"])])])])])])}const D=u(h,[["render",I]]);export{D as default};
