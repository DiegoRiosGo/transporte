"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9731],{9731:(y,u,n)=>{n.r(u),n.d(u,{PerfiluserPageModule:()=>x});var d=n(6814),m=n(95),o=n(9004),l=n(3044),f=n(5861),e=n(6689),p=n(4414),P=n(457);const h=function(){return["/moduser"]},v=function(){return["/logout"]},g=function(){return["/mapa"]},b=[{path:"",component:(()=>{var r;class i{constructor(t,c,s){this.router=t,this.alertController=c,this.api=s}ngOnInit(){}logout(){var t=this;return(0,f.Z)(function*(){yield(yield t.alertController.create({header:"Cerrar sesi\xf3n",message:"\xbfEst\xe1s seguro de que quieres cerrar sesi\xf3n?",buttons:[{text:"Cancelar",role:"cancel",cssClass:"secondary",handler:s=>{}},{text:"S\xed",handler:()=>{t.router.navigate(["/home"])}}]})).present()})()}editProfile(){this.router.navigate(["/moduser"])}obtenerclima(){this.api.getclima().subscribe(t=>{this.climaData=t})}ionViewWillEnterr(){this.obtenerclima()}}return(r=i).\u0275fac=function(t){return new(t||r)(e.Y36(l.F0),e.Y36(p.Br),e.Y36(P.G))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-perfiluser"]],decls:20,vars:9,consts:[[1,"content",3,"fullscreen"],[1,"background-gradient"],[1,"center-container"],[1,"profile-card"],["name","settings","slot","start","color","primary",1,"settings-icon",3,"routerLink"],["name","log-out","slot","end","color","primary",1,"logout-icon",3,"routerLink","click"],[1,"profile-image-container"],[1,"profile-image"],["src","assets/profile-image.jpg"],[1,"profile-name"],[1,"profile-email"],["expand","full","color","primary",3,"routerLink"]],template:function(t,c){1&t&&(e.TgZ(0,"ion-content",0),e._UZ(1,"div",1)(2,"br"),e.TgZ(3,"div",2)(4,"ion-card",3)(5,"ion-item"),e._UZ(6,"ion-icon",4),e.TgZ(7,"ion-icon",5),e.NdJ("click",function(){return c.logout()}),e.qZA()(),e.TgZ(8,"ion-card-content")(9,"div",6)(10,"div",7),e._UZ(11,"ion-img",8),e.qZA()(),e.TgZ(12,"div",9),e._uU(13,"Nombre de Usuario"),e.qZA(),e.TgZ(14,"div",10),e._uU(15,"correo@ejemplo.com"),e.qZA(),e.TgZ(16,"ion-button",11),e._uU(17,"Tomar Viaje"),e.qZA(),e.TgZ(18,"ion-button",11),e._uU(19,"Iniciar Viaje Como Conductor"),e.qZA()()()()()),2&t&&(e.Q6J("fullscreen",!0),e.xp6(6),e.Q6J("routerLink",e.DdM(5,h)),e.xp6(1),e.Q6J("routerLink",e.DdM(6,v)),e.xp6(9),e.Q6J("routerLink",e.DdM(7,g)),e.xp6(2),e.Q6J("routerLink",e.DdM(8,g)))},dependencies:[o.YG,o.PM,o.FN,o.W2,o.gu,o.Xz,o.Ie,o.YI,l.rH],styles:['@charset "UTF-8";ion-card.profile-card[_ngcontent-%COMP%]{width:80%;margin:auto;text-align:center;background-color:rgba(255,255,255,.9);border-radius:10px;box-shadow:0 4px 6px rgba(0,0,0,.1)}ion-item[_ngcontent-%COMP%]{color:#fff}.profile-image[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;border-radius:50%;background:linear-gradient(to bottom,#00b894,#0984e3);width:100px;height:100px;margin:0 auto 20px}.profile-email[_ngcontent-%COMP%]{color:rgba(0,0,0,.6)}.background-gradient[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(to bottom,#00b894,#0984e3);z-index:-1}.center-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%}ion-button[_ngcontent-%COMP%]{margin-top:10px}']}),i})()}];let M=(()=>{var r;class i{}return(r=i).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[l.Bz.forChild(b),l.Bz]}),i})(),x=(()=>{var r;class i{}return(r=i).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[d.ez,m.u5,o.Pc,M]}),i})()}}]);