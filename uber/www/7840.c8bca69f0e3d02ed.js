"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7840],{7840:(S,g,t)=>{t.r(g),t.d(g,{InicioSesionPageModule:()=>I});var p=t(6814),u=t(95),i=t(9004),s=t(3044),n=t(6689),m=t(9167);const h=function(){return["/recuperar"]},f=function(){return["/registro"]},M=function(){return["/mapa"]},b=function(){return["/prueba"]},P=[{path:"",component:(()=>{var o;class r{constructor(e,c){this.db=e,this.router=c,this.correoElectronico="",this.contrasena=""}ngOnInit(){}iniciarSesion(){this.db.loginUsuario(this.correoElectronico,this.contrasena).then(e=>{e?this.router.navigate(["/perfiluser"],{queryParams:{idUsuario:e.usuarioid}}):console.error("Correo o contrase\xf1a incorrectos")}).catch(e=>{console.error("Error al iniciar sesi\xf3n:",e)})}}return(o=r).\u0275fac=function(e){return new(e||o)(n.Y36(m.A),n.Y36(s.F0))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-inicio-sesion"]],decls:28,vars:11,consts:[[1,"content",3,"fullscreen"],[1,"background-gradient"],[1,"center-container"],[1,"login-card"],[1,"custom-item"],["position","floating","color","primary"],["type","email",3,"ngModel","ngModelChange"],["type","password",3,"ngModel","ngModelChange"],["color","primary",1,"recovery-link",3,"routerLink"],["expand","full","color","primary",3,"click"],["expand","full","color","success",3,"routerLink"]],template:function(e,c){1&e&&(n.TgZ(0,"ion-content",0),n._UZ(1,"div",1)(2,"br"),n.TgZ(3,"div",2)(4,"ion-card",3)(5,"ion-card-content")(6,"h2"),n._uU(7,"Iniciar sesi\xf3n"),n.qZA(),n._UZ(8,"br"),n.TgZ(9,"ion-item",4)(10,"ion-label",5),n._uU(11,"Correo electr\xf3nico"),n.qZA(),n.TgZ(12,"ion-input",6),n.NdJ("ngModelChange",function(l){return c.correoElectronico=l}),n.qZA()(),n.TgZ(13,"ion-item",4)(14,"ion-label",5),n._uU(15,"Contrase\xf1a"),n.qZA(),n.TgZ(16,"ion-input",7),n.NdJ("ngModelChange",function(l){return c.contrasena=l}),n.qZA()(),n.TgZ(17,"ion-text",8),n._uU(18," \xbfOlvidaste tu contrase\xf1a? "),n.qZA(),n._UZ(19,"br"),n.TgZ(20,"ion-button",9),n.NdJ("click",function(){return c.iniciarSesion()}),n._uU(21,"Iniciar Sesi\xf3n"),n.qZA(),n.TgZ(22,"ion-button",10),n._uU(23,"Registrarse"),n.qZA(),n.TgZ(24,"ion-button",10),n._uU(25,"mapa"),n.qZA(),n.TgZ(26,"ion-button",10),n._uU(27,"clima"),n.qZA()()()()()),2&e&&(n.Q6J("fullscreen",!0),n.xp6(12),n.Q6J("ngModel",c.correoElectronico),n.xp6(4),n.Q6J("ngModel",c.contrasena),n.xp6(1),n.Q6J("routerLink",n.DdM(7,h)),n.xp6(5),n.Q6J("routerLink",n.DdM(8,f)),n.xp6(2),n.Q6J("routerLink",n.DdM(9,M)),n.xp6(2),n.Q6J("routerLink",n.DdM(10,b)))},dependencies:[u.JJ,u.On,i.YG,i.PM,i.FN,i.W2,i.pK,i.Ie,i.Q$,i.yW,i.j9,i.YI,s.rH],styles:['@charset "UTF-8";ion-card.login-card[_ngcontent-%COMP%]{width:80%;margin:auto;text-align:center;background-color:rgba(255,255,255,.9);border-radius:10px;box-shadow:0 4px 6px rgba(0,0,0,.1)}.custom-item[_ngcontent-%COMP%]{width:100%;background-color:rgba(255,255,255,.9);border-radius:10px;box-shadow:0 4px 6px rgba(255,255,255,.1)}.background-gradient[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(to bottom,#00b894,#0984e3);z-index:-1}.center-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%}ion-button[_ngcontent-%COMP%]{margin-top:10px}.recovery-link[_ngcontent-%COMP%]{text-decoration:underline;cursor:pointer}']}),r})()}];let Z=(()=>{var o;class r{}return(o=r).\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[s.Bz.forChild(P),s.Bz]}),r})(),I=(()=>{var o;class r{}return(o=r).\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[p.ez,u.u5,i.Pc,Z]}),r})()}}]);