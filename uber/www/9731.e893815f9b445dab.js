"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9731],{9731:(A,p,a)=>{a.r(p),a.d(p,{PerfiluserPageModule:()=>M});var m=a(6814),f=a(95),o=a(9004),c=a(3044),g=a(5861),e=a(6689),P=a(4414),b=a(457),x=a(9167);function v(r,l){if(1&r&&(e.TgZ(0,"ion-list",16)(1,"ion-item",17),e._UZ(2,"img",18),e.TgZ(3,"ion-label",19),e._uU(4),e.qZA()()()),2&r){const s=e.oxw();e.xp6(2),e.s9C("src",s.climaData.current.condition.icon,e.LSH),e.xp6(2),e.hij("",s.climaData.current.temp_c,"\xb0C")}}const y=function(){return["/logout"]},h=function(){return["/mapa"]},C=[{path:"",component:(()=>{var r;class l{constructor(t,i,n,u,d,U){this.router=t,this.aroute=i,this.alertController=n,this.api=u,this.cdr=d,this.db=U,this.registrarVehiculoBloqueado=!1}ngOnInit(){this.nombreUsuario="nombre random",this.correoUsuario="correo random",this.aroute.params.subscribe(t=>{this.idUsuario=t.idUsuario,this.idUsuario&&this.db.buscarUsuarioPorId(this.idUsuario).then(i=>{i&&(this.nombreUsuario=i.nombre,this.correoUsuario=i.correo)}).catch(i=>{})})}logout(){var t=this;return(0,g.Z)(function*(){yield(yield t.alertController.create({header:"Cerrar sesi\xf3n",message:"\xbfEst\xe1s seguro de que quieres cerrar sesi\xf3n?",buttons:[{text:"Cancelar",role:"cancel",cssClass:"secondary",handler:n=>{}},{text:"S\xed",handler:()=>{t.router.navigate(["/home"])}}]})).present()})()}editProfile(){console.log("ID de Usuario:",this.idUsuario),console.log("si toy antes ."),this.router.navigate(["/moduser",this.idUsuario]),console.log("si toy.")}obtenerclima(){this.api.getclima().subscribe(t=>{this.climaData=t,this.cdr.detectChanges()})}ionViewWillEnter(){this.obtenerclima()}openRegistrarVehiculoAlert(){var t=this;return(0,g.Z)(function*(){yield(yield t.alertController.create({header:"Registrar Veh\xedculo",inputs:[{name:"patente",type:"text",placeholder:"Patente del veh\xedculo"},{name:"asientos",type:"number",placeholder:"N\xfamero de asientos"}],buttons:[{text:"Cancelar",role:"cancel"},{text:"Registrar",handler:n=>{const u=t.validarPatente(n.patente),d=t.validarAsientos(n.asientos);u||d?u?d?(t.insertarVehiculoEnBD(n.patente,n.asientos),t.registrarVehiculoBloqueado=!0):t.presentAlert("Error","Ingrese un n\xfamero de asientos v\xe1lido (entre 2 y 20)."):t.presentAlert("Error","La patente ingresada no es v\xe1lida."):t.presentAlert("Error","Por favor, ingrese valores v\xe1lidos para la patente y el n\xfamero de asientos.")}}]})).present()})()}validarPatente(t){return/^[a-zA-Z]{4}\d{2}$/.test(t)}validarAsientos(t){return t>=2&&t<=15}presentAlert(t,i){var n=this;return(0,g.Z)(function*(){yield(yield n.alertController.create({header:t,message:i,buttons:[{text:"OK",handler:()=>{n.openRegistrarVehiculoAlert()}}]})).present()})()}insertarVehiculoEnBD(t,i){this.db.insertarVehiculo(t,1,i).then(()=>{console.log("Veh\xedculo registrado con \xe9xito.")}).catch(n=>{console.error("Error al registrar el veh\xedculo:",n)}).finally(()=>{this.registrarVehiculoBloqueado=!1})}}return(r=l).\u0275fac=function(t){return new(t||r)(e.Y36(c.F0),e.Y36(c.gz),e.Y36(P.Br),e.Y36(b.G),e.Y36(e.sBO),e.Y36(x.A))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-perfiluser"]],decls:25,vars:11,consts:[[1,"content",3,"fullscreen"],[1,"background-gradient"],[1,"center-container"],[1,"profile-card"],[1,"custom-item"],["name","settings","slot","start","color","primary",1,"settings-icon",3,"click"],["name","log-out","slot","end","color","primary",1,"logout-icon",3,"routerLink","click"],["class","clima-container",4,"ngIf"],[1,"profile-image-container"],[1,"profile-image"],["src","assets/profile-image.jpg"],[1,"profile-name"],[1,"profile-email"],[1,"login-buttons"],["expand","full","color","primary",3,"routerLink"],["expand","full","color","primary",3,"disabled","click"],[1,"clima-container"],[1,"clima-item"],["slot","start","alt","Clima Icon",1,"clima-icon",3,"src"],["slot","end","color","primary"]],template:function(t,i){1&t&&(e.TgZ(0,"ion-content",0),e._UZ(1,"div",1),e.TgZ(2,"div",2)(3,"ion-card",3)(4,"ion-item",4)(5,"ion-icon",5),e.NdJ("click",function(){return i.editProfile()}),e._uU(6,"Edit Perfil"),e.qZA(),e.TgZ(7,"ion-icon",6),e.NdJ("click",function(){return i.logout()}),e.qZA()(),e.TgZ(8,"ion-card-header"),e.YNc(9,v,5,2,"ion-list",7),e.qZA(),e.TgZ(10,"ion-card-content")(11,"div",8)(12,"div",9),e._UZ(13,"ion-img",10),e.qZA()(),e.TgZ(14,"div",11),e._uU(15),e.qZA(),e.TgZ(16,"div",12),e._uU(17),e.qZA(),e.TgZ(18,"div",13)(19,"ion-button",14),e._uU(20,"Tomar Viaje"),e.qZA(),e.TgZ(21,"ion-button",14),e._uU(22," Iniciar Viaje Como Conductor "),e.qZA(),e.TgZ(23,"ion-button",15),e.NdJ("click",function(){return i.openRegistrarVehiculoAlert()}),e._uU(24,"Registrar vehiculo"),e.qZA()()()()()()),2&t&&(e.Q6J("fullscreen",!0),e.xp6(7),e.Q6J("routerLink",e.DdM(8,y)),e.xp6(2),e.Q6J("ngIf",i.climaData),e.xp6(6),e.Oqu(i.nombreUsuario),e.xp6(2),e.Oqu(i.correoUsuario),e.xp6(2),e.Q6J("routerLink",e.DdM(9,h)),e.xp6(2),e.Q6J("routerLink",e.DdM(10,h)),e.xp6(2),e.Q6J("disabled",i.registrarVehiculoBloqueado))},dependencies:[m.O5,o.YG,o.PM,o.FN,o.Zi,o.W2,o.gu,o.Xz,o.Ie,o.Q$,o.q_,o.YI,c.rH],styles:['@charset "UTF-8";ion-card.profile-card[_ngcontent-%COMP%]{width:90%;height:65%;margin:auto;text-align:center;background-color:rgba(255,255,255,.9);border-radius:10px;box-shadow:0 4px 6px rgba(0,0,0,.1)}ion-card.profile-card[_ngcontent-%COMP%]   .profile-image[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;border-radius:50%;background:linear-gradient(to bottom,#00b894,#0984e3);width:100px;height:100px;margin:0 auto 10px}ion-card.profile-card[_ngcontent-%COMP%]   .profile-email[_ngcontent-%COMP%]{color:rgba(0,0,0,.6)}.background-gradient[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(to bottom,#00b894,#0984e3);z-index:-1}.center-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%}ion-button[_ngcontent-%COMP%]{margin-top:10px}ion-list.clima-container[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%;height:40px;border-radius:10px}ion-item.clima-item[_ngcontent-%COMP%]{display:flex;align-items:center}ion-label[_ngcontent-%COMP%]{display:flex;align-items:center}img.clima-icon[_ngcontent-%COMP%]{width:40px;height:40px;margin-right:10px}.custom-button[_ngcontent-%COMP%]{white-space:normal;text-align:center;font-size:16px;padding:12px;border-radius:10px}.login-buttons[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:10px}.login-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{white-space:normal;width:90%;margin-top:10px;border-radius:10px;font-size:10px}']}),l})()}];let Z=(()=>{var r;class l{}return(r=l).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[c.Bz.forChild(C),c.Bz]}),l})(),M=(()=>{var r;class l{}return(r=l).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[m.ez,f.u5,o.Pc,Z]}),l})()}}]);