"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1819],{1819:(Z,g,c)=>{c.r(g),c.d(g,{DetalleconductorPageModule:()=>x});var u=c(6814),p=c(95),a=c(9004),s=c(3044),e=c(6689),h=c(4414),m=c(9167);function f(t,r){if(1&t&&(e.TgZ(0,"ion-item")(1,"ion-label"),e._uU(2),e.qZA()()),2&t){const l=r.$implicit;e.xp6(2),e.hij("Nombre: ",l.nombre,"")}}const b=[{path:"",component:(()=>{var t;class r{constructor(n,o,d,i,v){this.location=n,this.router=o,this.alertController=d,this.arouter=i,this.db=v,this.prueba=[]}ngOnInit(){this.arouter.paramMap.subscribe(n=>{var o;const d=null!==(o=n.get("idviaje"))&&void 0!==o?o:"";this.idviaje=parseInt(d,10)||0,console.log("si hay viajeid 1 ",this.idviaje),this.idviaje&&(this.db.obtenerDatosViaje(this.idviaje).then(i=>{i&&(this.ppartida=i.ppartida,this.pdestino=i.pdestino,this.valorViaje=i.valorViaje,this.cantAsientos=i.cantAsientos,console.log("si hay autoid 1 ",i.ppartida))}).catch(i=>{}),this.db.obtenerPasajerosalviaje(this.idviaje).then(i=>{console.log("si hay viajesito 1 ",i),console.log("si hay viajesito siempre ",i),this.prueba=i}).catch(i=>{}))})}finalizarViaje(){this.db.finalizarViaje(this.idviaje).then(()=>{this.location.back()}).catch(n=>{console.error("Error al finalizar el viaje:",n)})}}return(t=r).\u0275fac=function(n){return new(n||t)(e.Y36(u.Ye),e.Y36(s.F0),e.Y36(h.Br),e.Y36(s.gz),e.Y36(m.A))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-detalleconductor"]],decls:36,vars:6,consts:[[1,"content",3,"fullscreen"],[1,"background-gradient"],[1,"center-container"],[1,"profile-card"],[4,"ngFor","ngForOf"],["expand","full",3,"click"]],template:function(n,o){1&n&&(e.TgZ(0,"ion-content",0),e._UZ(1,"div",1),e.TgZ(2,"div",2)(3,"ion-card",3)(4,"ion-card-header"),e._uU(5," Detalles viaje "),e.qZA(),e.TgZ(6,"ion-card-content")(7,"ion-list")(8,"ion-item")(9,"ion-label"),e._uU(10,"Direcci\xf3n de Inicio:"),e.qZA(),e.TgZ(11,"ion-note"),e._uU(12),e.qZA()(),e.TgZ(13,"ion-item")(14,"ion-label"),e._uU(15,"Direcci\xf3n de Destino:"),e.qZA(),e.TgZ(16,"ion-note"),e._uU(17),e.qZA()(),e.TgZ(18,"ion-item")(19,"ion-label"),e._uU(20,"Valor del Viaje:"),e.qZA(),e.TgZ(21,"ion-note"),e._uU(22),e.qZA()(),e.TgZ(23,"ion-item")(24,"ion-label"),e._uU(25,"Cantidad de Asientos:"),e.qZA(),e.TgZ(26,"ion-note"),e._uU(27),e.qZA()()()(),e.TgZ(28,"ion-card-header")(29,"ion-card-title"),e._uU(30,"Pasajeros"),e.qZA()(),e.TgZ(31,"ion-card-content")(32,"ion-list"),e.YNc(33,f,3,1,"ion-item",4),e.qZA()(),e.TgZ(34,"ion-button",5),e.NdJ("click",function(){return o.finalizarViaje()}),e._uU(35,"Finalizar Viaje"),e.qZA()()()()),2&n&&(e.Q6J("fullscreen",!0),e.xp6(12),e.Oqu(o.ppartida),e.xp6(5),e.Oqu(o.pdestino),e.xp6(5),e.Oqu(o.valorViaje),e.xp6(5),e.Oqu(o.cantAsientos),e.xp6(6),e.Q6J("ngForOf",o.prueba))},dependencies:[u.sg,a.YG,a.PM,a.FN,a.Zi,a.Dq,a.W2,a.Ie,a.Q$,a.q_,a.uN],styles:['@charset "UTF-8";ion-card.profile-card[_ngcontent-%COMP%]{width:90%;height:65%;margin:auto;text-align:center;background-color:rgba(255,255,255,.9);border-radius:10px;box-shadow:0 4px 6px rgba(0,0,0,.1)}ion-card.profile-card[_ngcontent-%COMP%]   .profile-image[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;border-radius:50%;background:linear-gradient(to bottom,#00b894,#0984e3);width:100px;height:100px;margin:0 auto 10px}ion-card.profile-card[_ngcontent-%COMP%]   .profile-email[_ngcontent-%COMP%]{color:rgba(0,0,0,.6)}.background-gradient[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(to bottom,#00b894,#0984e3);z-index:-1}.center-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%}ion-button[_ngcontent-%COMP%]{margin-top:10px}ion-list.clima-container[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%;height:40px;border-radius:10px}ion-item.clima-item[_ngcontent-%COMP%]{display:flex;align-items:center}ion-label[_ngcontent-%COMP%]{display:flex;align-items:center}img.clima-icon[_ngcontent-%COMP%]{width:40px;height:40px;margin-right:10px}.custom-button[_ngcontent-%COMP%]{white-space:normal;text-align:center;font-size:16px;padding:12px;border-radius:10px}.login-buttons[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:10px}.login-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{white-space:normal;width:90%;margin-top:10px;border-radius:10px;font-size:10px}']}),r})()}];let P=(()=>{var t;class r{}return(t=r).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.Bz.forChild(b),s.Bz]}),r})(),x=(()=>{var t;class r{}return(t=r).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.ez,p.u5,a.Pc,P]}),r})()}}]);