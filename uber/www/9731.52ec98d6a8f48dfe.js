"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9731],{9731:(T,u,i)=>{i.r(u),i.d(u,{PerfiluserPageModule:()=>M});var g=i(6814),p=i(95),r=i(9004),s=i(3044),d=i(5861),e=i(6689),f=i(4414),h=i(457),P=i(9167);function x(t,o){if(1&t&&(e.TgZ(0,"ion-list",16)(1,"ion-item",17),e._UZ(2,"img",18),e.TgZ(3,"ion-label",19),e._uU(4),e.qZA()()()),2&t){const a=e.oxw();e.xp6(2),e.s9C("src",a.climaData.current.condition.icon,e.LSH),e.xp6(2),e.hij("",a.climaData.current.temp_c,"\xb0C")}}const b=function(){return["/moduser"]},v=function(){return["/logout"]},m=function(){return["/mapa"]},C=[{path:"",component:(()=>{var t;class o{constructor(n,c,l,Z,O){this.router=n,this.alertController=c,this.api=l,this.cdr=Z,this.dbService=O}ngOnInit(){}logout(){var n=this;return(0,d.Z)(function*(){yield(yield n.alertController.create({header:"Cerrar sesi\xf3n",message:"\xbfEst\xe1s seguro de que quieres cerrar sesi\xf3n?",buttons:[{text:"Cancelar",role:"cancel",cssClass:"secondary",handler:l=>{}},{text:"S\xed",handler:()=>{n.router.navigate(["/home"])}}]})).present()})()}editProfile(){this.router.navigate(["/moduser"])}obtenerclima(){this.api.getclima().subscribe(n=>{this.climaData=n,this.cdr.detectChanges()})}ionViewWillEnter(){this.obtenerclima()}openRegistrarVehiculoAlert(){var n=this;return(0,d.Z)(function*(){yield(yield n.alertController.create({header:"Registrar Veh\xedculo",inputs:[{name:"patente",type:"text",placeholder:"Patente del veh\xedculo"},{name:"asientos",type:"number",placeholder:"N\xfamero de asientos"}],buttons:[{text:"Cancelar",role:"cancel"},{text:"Registrar",handler:l=>{n.insertarVehiculoEnBD(l.patente,l.asientos)}}]})).present()})()}insertarVehiculoEnBD(n,c){this.dbService.insertarVehiculo(n,1,c).then(()=>{console.log("Veh\xedculo registrado con \xe9xito.")}).catch(l=>{console.error("Error al registrar el veh\xedculo:",l)})}}return(t=o).\u0275fac=function(n){return new(n||t)(e.Y36(s.F0),e.Y36(f.Br),e.Y36(h.G),e.Y36(e.sBO),e.Y36(P.A))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-perfiluser"]],decls:24,vars:10,consts:[[1,"content",3,"fullscreen"],[1,"background-gradient"],[1,"center-container"],[1,"profile-card"],[1,"custom-item"],["name","settings","slot","start","color","primary",1,"settings-icon",3,"routerLink"],["name","log-out","slot","end","color","primary",1,"logout-icon",3,"routerLink","click"],["class","clima-container",4,"ngIf"],[1,"profile-image-container"],[1,"profile-image"],["src","assets/profile-image.jpg"],[1,"profile-name"],[1,"profile-email"],[1,"login-buttons"],["expand","full","color","primary",3,"routerLink"],["expand","full","color","primary",3,"click"],[1,"clima-container"],[1,"clima-item"],["slot","start","alt","Clima Icon",1,"clima-icon",3,"src"],["slot","end","color","primary"]],template:function(n,c){1&n&&(e.TgZ(0,"ion-content",0),e._UZ(1,"div",1),e.TgZ(2,"div",2)(3,"ion-card",3)(4,"ion-item",4),e._UZ(5,"ion-icon",5),e.TgZ(6,"ion-icon",6),e.NdJ("click",function(){return c.logout()}),e.qZA()(),e.TgZ(7,"ion-card-header"),e.YNc(8,x,5,2,"ion-list",7),e.qZA(),e.TgZ(9,"ion-card-content")(10,"div",8)(11,"div",9),e._UZ(12,"ion-img",10),e.qZA()(),e.TgZ(13,"div",11),e._uU(14,"Nombre de Usuario"),e.qZA(),e.TgZ(15,"div",12),e._uU(16,"correo@ejemplo.com"),e.qZA(),e.TgZ(17,"div",13)(18,"ion-button",14),e._uU(19,"Tomar Viaje"),e.qZA(),e.TgZ(20,"ion-button",14),e._uU(21," Iniciar Viaje Como Conductor "),e.qZA(),e.TgZ(22,"ion-button",15),e.NdJ("click",function(){return c.openRegistrarVehiculoAlert()}),e._uU(23,"Registrar vehiculo"),e.qZA()()()()()()),2&n&&(e.Q6J("fullscreen",!0),e.xp6(5),e.Q6J("routerLink",e.DdM(6,b)),e.xp6(1),e.Q6J("routerLink",e.DdM(7,v)),e.xp6(2),e.Q6J("ngIf",c.climaData),e.xp6(10),e.Q6J("routerLink",e.DdM(8,m)),e.xp6(2),e.Q6J("routerLink",e.DdM(9,m)))},dependencies:[g.O5,r.YG,r.PM,r.FN,r.Zi,r.W2,r.gu,r.Xz,r.Ie,r.Q$,r.q_,r.YI,s.rH],styles:['@charset "UTF-8";ion-card.profile-card[_ngcontent-%COMP%]{width:90%;height:65%;margin:auto;text-align:center;background-color:rgba(255,255,255,.9);border-radius:10px;box-shadow:0 4px 6px rgba(0,0,0,.1)}ion-card.profile-card[_ngcontent-%COMP%]   .profile-image[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;border-radius:50%;background:linear-gradient(to bottom,#00b894,#0984e3);width:100px;height:100px;margin:0 auto 10px}ion-card.profile-card[_ngcontent-%COMP%]   .profile-email[_ngcontent-%COMP%]{color:rgba(0,0,0,.6)}.background-gradient[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(to bottom,#00b894,#0984e3);z-index:-1}.center-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%}ion-button[_ngcontent-%COMP%]{margin-top:10px}ion-list.clima-container[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%;height:40px;border-radius:10px}ion-item.clima-item[_ngcontent-%COMP%]{display:flex;align-items:center}ion-label[_ngcontent-%COMP%]{display:flex;align-items:center}img.clima-icon[_ngcontent-%COMP%]{width:40px;height:40px;margin-right:10px}.custom-button[_ngcontent-%COMP%]{white-space:normal;text-align:center;font-size:16px;padding:12px;border-radius:10px}.login-buttons[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:10px}.login-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{white-space:normal;width:90%;margin-top:10px;border-radius:10px;font-size:10px}']}),o})()}];let y=(()=>{var t;class o{}return(t=o).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.Bz.forChild(C),s.Bz]}),o})(),M=(()=>{var t;class o{}return(t=o).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[g.ez,p.u5,r.Pc,y]}),o})()}}]);