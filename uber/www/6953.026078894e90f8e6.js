"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6953],{6953:(M,d,a)=>{a.r(d),a.d(d,{RecuperarPageModule:()=>f});var p=a(6814),l=a(95),t=a(9004),s=a(3044),e=a(6689),h=a(9167);const m=function(){return["/perfiluser"]},b=[{path:"",component:(()=>{var n;class i{constructor(o,r,g,u){this.location=o,this.aroute=r,this.router=g,this.db=u}ngOnInit(){this.aroute.paramMap.subscribe(o=>{var r;const g=null!==(r=o.get("usuarioid"))&&void 0!==r?r:"";this.usuarioid=parseInt(g,10)||0,console.log("Usuarioid en RecuperarPage:",this.usuarioid),this.usuarioid&&this.db.buscarPregunta(this.usuarioid).then(u=>{u?(this.preguntaS=u,console.log("Pregunta de seguridad obtenida:",this.preguntaS),this.respuestaUsuario&&this.preguntaS===this.respuestaUsuario?(console.log("\xa1La respuesta es correcta!"),this.router.navigate(["/nuevacontraena",this.usuarioid])):console.log("La respuesta es incorrecta.")):console.log("No se encontr\xf3 la pregunta de seguridad para el usuario con ID:",this.usuarioid)}).catch(u=>{console.error("Error al obtener la pregunta de seguridad:",u)})})}goBack(){this.location.back()}}return(n=i).\u0275fac=function(o){return new(o||n)(e.Y36(p.Ye),e.Y36(s.gz),e.Y36(s.F0),e.Y36(h.A))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-recuperar"]],decls:24,vars:5,consts:[[1,"content",3,"fullscreen"],[1,"background-gradient"],[1,"center-container"],[1,"login-card"],["slot","start"],["fill","clear","color","success",1,"back-button",3,"click"],["name","arrow-back"],[1,"custom-item"],["position","floating","color","primary"],["type","password",3,"ngModel","ngModelChange"],["type","password"],[1,"login-buttons"],["expand","full","color","success",3,"routerLink"]],template:function(o,r){1&o&&(e.TgZ(0,"ion-content",0),e._UZ(1,"div",1),e.TgZ(2,"div",2)(3,"ion-card",3)(4,"ion-card-content")(5,"ion-buttons",4)(6,"ion-button",5),e.NdJ("click",function(){return r.goBack()}),e._UZ(7,"ion-icon",6),e.qZA()(),e._UZ(8,"br"),e.TgZ(9,"h1"),e._uU(10,"Pregunta de seguridad"),e.qZA(),e._UZ(11,"br"),e.TgZ(12,"ion-item",7)(13,"ion-label",8),e._uU(14,"Pregunta de seguridad"),e.qZA(),e.TgZ(15,"ion-input",9),e.NdJ("ngModelChange",function(u){return r.preguntaS=u}),e._uU(16),e.qZA()(),e.TgZ(17,"ion-item",7)(18,"ion-label",8),e._uU(19,"Respuesta"),e.qZA(),e._UZ(20,"ion-input",10),e.qZA(),e.TgZ(21,"div",11)(22,"ion-button",12),e._uU(23,"Aceptar"),e.qZA()()()()()()),2&o&&(e.Q6J("fullscreen",!0),e.xp6(15),e.Q6J("ngModel",r.preguntaS),e.xp6(1),e.Oqu(r.preguntaS),e.xp6(6),e.Q6J("routerLink",e.DdM(4,m)))},dependencies:[l.JJ,l.On,t.YG,t.Sm,t.PM,t.FN,t.W2,t.gu,t.pK,t.Ie,t.Q$,t.j9,t.YI,s.rH],styles:['@charset "UTF-8";ion-card.login-card[_ngcontent-%COMP%]{width:90%;height:60%;margin:auto;text-align:center;background-color:rgba(255,255,255,.9);border-radius:10px;box-shadow:0 4px 6px rgba(0,0,0,.1)}.login-buttons[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:10px}.login-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:90%;margin-top:10px;border-radius:10px;font-size:10px}.custom-item[_ngcontent-%COMP%]{width:100%;background-color:rgba(255,255,255,.9);border-radius:10px;margin:20px auto auto;box-shadow:0 4px 6px rgba(255,255,255,.1)}.custom-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{font-size:14px}.custom-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:12px}.custom-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#0984e3}h1[_ngcontent-%COMP%]{color:var(--ion-color-primary)}.background-gradient[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(to bottom,#00b894,#0984e3);z-index:-1}.center-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%}.recovery-link[_ngcontent-%COMP%]{text-decoration:underline;cursor:pointer}.h2[_ngcontent-%COMP%]{opacity:.7;font-size:10px}']}),i})()}];let P=(()=>{var n;class i{}return(n=i).\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[s.Bz.forChild(b),s.Bz]}),i})(),f=(()=>{var n;class i{}return(n=i).\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.ez,l.u5,t.Pc,P]}),i})()}}]);