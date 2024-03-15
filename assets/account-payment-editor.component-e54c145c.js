import{B as c,_ as k,x as u,l as _,C as w,r,o as d,c as i,a as n,f as s,t as g,v as U,b as f}from"./index-c65a3c12.js";import{n as D}from"./not-logged-in.component-afe45aac.js";const l={not_selected:"No has seleccionado el metodo de pago que deseas usar",not_card_number:"No has ingresado el numero de la tarjeta",not_card_name:"No has ingresado el nombre del titular de la tarjeta",not_card_month:"No has ingresado el mes de vencimiento de la tarjeta",not_card_year:"No has ingresado el año de vencimiento de la tarjeta",expired_card:"La tarjeta ha vencido, por favor utiliza una tarjeta válida",not_cvv:"No has ingresado el CVV de la tarjeta",not_wallet:"No has elegido una billetera digital"};function C(e){if(!e.payment.selectedMethod)return l.not_selected;if(e.payment.selectedMethod===c.Tarjeta){if(!e.payment.card.number)return l.not_card_number;if(!e.payment.card.name)return l.not_card_name;if(!e.payment.card.month)return l.not_card_month;if(!e.payment.card.year)return l.not_card_year;const o=new Date().getFullYear(),p=new Date().getMonth();return e.payment.card.year+2e3<o||e.payment.card.year+2e3==o&&e.payment.card.month<p?l.expired_card:!1}else if(e.payment.selectedMethod===c["Billetera Digital"])return e.payment.wallet.id?!1:l.not_wallet}const j={components:{notLoggedInComponent:D,paymentMethods:c},methods:{getUserInfo(e){e!=null&&e?(this.userInfo=e,this.originalUserInfo=e,this.isUserLogged||(this.isUserLogged=!0),this.currentMode=u.methods.getCurrentMode()):this.isUserLogged&&(this.isUserLogged=!1)},tryEditPaymentData(){this.errorMessage=!0;let e=this.userInfo;e.payment.selectedMethod=c[this.userInfo.payment.selectedMethod],console.log(e.payment.selectedMethod),e.payment.card.number=e.payment.card.number.replaceAll(" ","").replaceAll("-","  "),this.errorMessage=C(e),this.errorMessage||_.methods.updatePaymentInformation(e).then(o=>{this.$emit("logged")})},getMode(e){this.isDarkMode=e,this.currentMode=u.methods.getCurrentMode()}},data(){return{myPaymentMethods:Object.keys(c),userInfo:null,originalUserInfo:null,isDarkMode:!1,currentMode:"light",isUserLogged:!1,errorMessage:"",walletsData:[]}},created(){this.userInfo=_.methods.watchUser(this.getUserInfo),this.originalUserInfo=this.userInfo,this.isUserLogged=!!this.userInfo,this.isDarkMode=u.methods.watchDarkMode(this.getMode),this.currentMode=u.methods.getCurrentMode()},watch:{"userInfo.payment.card.month":{handler(e){e>12&&(this.userInfo.payment.card.month=null)},immediate:!0},"userInfo.payment.selectedMethod":{handler(e){this.userInfo!==null&&console.log(this.myPaymentMethods.indexOf(this.userInfo.payment.selectedMethod)),c[e]===2&&this.walletsData.length===0&&(console.log("Cargando datos..."),w().then(o=>{this.walletsData=o,console.log(this.walletsData)}).catch(o=>{console.log(o)}))},immediate:!0}}},L={key:0},N=n("div",{class:"margin-2 flex flex-col align-center"},[n("div",{class:"text-10 margin-1"},"Editar Informacion de Pago")],-1),P={class:"flex align-center flex-col gap-1 margin-1"},E=n("div",null,"Elije un Método de Pago",-1),B={class:"flex align-center flex-col margin-1"},S={key:0,class:"flex flex-col gap-1"},T={class:"flex flex-col card-owner gap-1"},z=n("div",null,"Nombre del Titular:",-1),A={class:"flex flex-col card-number gap-1"},O=n("div",null,"Numero de la Tarjeta:",-1),Y={class:"card-date flex gap-3 flex-row"},q={class:"card-date flex gap-1 flex-col"},F=n("div",null,"Vencimiento:",-1),G={class:"flex flex-row"},W={class:"card-cvv flex gap-1 flex-col"},H=n("div",null,"CVV:",-1),J={class:"p-error text",id:"text-error"},K={key:1,class:"flex flex-col margin-2"},Q={key:2,class:"flex flex-col margin-2"},R=n("div",null,"Selecciona un método de pago para continuar",-1),X=[R],Z={class:"flex flex-row gap-2 margin-2"},$={key:1},ee={class:"margin-2 flex flex-col align-center"},te={class:"text-10 margin-1"},oe={class:"margin-1"},ne={key:2};function ae(e,o,p,se,t,y){const v=r("pv-select-button"),x=r("pv-input-text"),m=r("pv-input-mask"),M=r("pv-divider"),I=r("pv-dropdown"),h=r("pv-button"),V=r("pv-progress-bar"),b=r("notLoggedInComponent");return t.isUserLogged&&t.errorMessage!==!0?(d(),i("div",L,[N,n("div",P,[E,s(v,{modelValue:t.userInfo.payment.selectedMethod,"onUpdate:modelValue":o[0]||(o[0]=a=>t.userInfo.payment.selectedMethod=a),options:t.myPaymentMethods},null,8,["modelValue","options"])]),n("div",B,[t.myPaymentMethods.indexOf(t.userInfo.payment.selectedMethod)===0?(d(),i("div",S,[n("div",T,[z,s(x,{id:"owner",modelValue:t.userInfo.payment.card.name,"onUpdate:modelValue":o[1]||(o[1]=a=>t.userInfo.payment.card.name=a),placeholder:"Titular de la Tarjeta"},null,8,["modelValue"])]),n("div",A,[O,s(m,{id:"card",modelValue:t.userInfo.payment.card.number,"onUpdate:modelValue":o[2]||(o[2]=a=>t.userInfo.payment.card.number=a),mask:"9999 - 9999 - 9999 - 9999",placeholder:"Número de la Tarjeta","slot-char":" "},null,8,["modelValue"])]),n("div",Y,[n("div",q,[F,n("div",G,[s(m,{id:"month",modelValue:t.userInfo.payment.card.month,"onUpdate:modelValue":o[3]||(o[3]=a=>t.userInfo.payment.card.month=a),mask:"99",placeholder:"Mes","slot-char":"-"},null,8,["modelValue"]),s(M,{layout:"vertical",style:{margin:"5px"}}),s(m,{id:"year",modelValue:t.userInfo.payment.card.year,"onUpdate:modelValue":o[4]||(o[4]=a=>t.userInfo.payment.card.year=a),mask:"99",placeholder:"Año","slot-char":"-"},null,8,["modelValue"])])]),n("div",W,[H,s(m,{id:"month",modelValue:t.userInfo.payment.card.cvv,"onUpdate:modelValue":o[5]||(o[5]=a=>t.userInfo.payment.card.cvv=a),mask:"999",placeholder:"CVV","slot-char":"-"},null,8,["modelValue"])])]),n("small",J,g(t.errorMessage||" "),1)])):t.myPaymentMethods.indexOf(t.userInfo.payment.selectedMethod)===1?(d(),i("div",K,[t.walletsData.length>0?(d(),U(I,{key:0,id:"walletSelector",modelValue:t.userInfo.payment.wallet.id,"onUpdate:modelValue":o[6]||(o[6]=a=>t.userInfo.payment.wallet.id=a),options:t.walletsData,optionLabel:"name",optionValue:"id",placeholder:"Elija una billetera digital"},null,8,["modelValue","options"])):f("",!0)])):(d(),i("div",Q,X)),n("div",Z,[s(h,{label:"Cancelar",size:"large",severity:"secondary",outlined:"",rounded:"",onClick:o[7]||(o[7]=a=>this.$emit("logged"))}),s(h,{label:this.originalUserInfo.payment.card.number||this.originalUserInfo.payment.wallet.id?"Actualizar":"Guardar",size:"large",severity:"secondary",rounded:"",onClick:y.tryEditPaymentData},null,8,["label","onClick"])])])])):t.errorMessage===!0?(d(),i("div",$,[n("div",ee,[n("div",te,g(this.originalUserInfo.payment.card.number||this.originalUserInfo.payment.wallet.id?"Actualizando Direccion...":"Creando Direccion..."),1),n("div",oe,[s(V,{style:{width:"24rem"},mode:"indeterminate"})])])])):t.isUserLogged?f("",!0):(d(),i("div",ne,[s(b)]))}const de=k(j,[["render",ae]]);export{de as default};
