"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2867],{2867:(Z,u,r)=>{r.r(u),r.d(u,{ModuserPageModule:()=>v});var l=r(6814),p=r(95),n=r(9004),s=r(3044),d=r(5861),e=r(6689),f=r(1965),M=r(4414);function P(t,a){if(1&t&&e._UZ(0,"img",15),2&t){const i=e.oxw();e.Q6J("src",i.capturedImage,e.LSH)}}function b(t,a){1&t&&e._UZ(0,"ion-icon",16)}const g=function(){return["/perfiluser"]},h=function(){return["/recuperar"]},x=[{path:"",component:(()=>{var t;class a{constructor(o,c,m){this.cameraService=o,this.alertController=c,this.aroute=m}ngOnInit(){this.aroute.params.subscribe(o=>{this.idUsuario=o.idUsuario})}takePicture(){var o=this;return(0,d.Z)(function*(){o.capturedImage=yield o.cameraService.takePicture()})()}presentAlertConfirm(){var o=this;return(0,d.Z)(function*(){yield(yield o.alertController.create({header:"Cambiar Foto de Perfil",message:"\xbfQuiere cambiar su foto de perfil?",buttons:[{text:"No",role:"cancel",handler:()=>{console.log("No desea cambiar la foto")}},{text:"S\xed",handler:()=>{o.takePicture()}}]})).present()})()}}return(t=a).\u0275fac=function(o){return new(o||t)(e.Y36(f.Y),e.Y36(M.Br),e.Y36(s.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-moduser"]],decls:21,vars:9,consts:[[1,"content",3,"fullscreen"],[1,"background-gradient"],[1,"center-container"],[1,"edit-profile-card"],["slot","start"],["fill","clear","color","success",1,"back-button",3,"routerLink"],["name","arrow-back"],[1,"profile-image",3,"click"],["alt","Captured Image","class","camera-icon","id","profile-image",3,"src",4,"ngIf"],["name","camera","slot","end","color","light","class","camera-icon",4,"ngIf"],[1,"custom-item"],["color","primary","position","floating"],["type","text"],["expand","full","color","primary",3,"routerLink"],["expand","full","color","success",3,"routerLink"],["alt","Captured Image","id","profile-image",1,"camera-icon",3,"src"],["name","camera","slot","end","color","light",1,"camera-icon"]],template:function(o,c){1&o&&(e.TgZ(0,"ion-content",0),e._UZ(1,"div",1),e.TgZ(2,"div",2)(3,"ion-card",3)(4,"ion-card-content")(5,"h2"),e._uU(6,"Editar perfil"),e.qZA(),e.TgZ(7,"ion-buttons",4)(8,"ion-button",5),e._UZ(9,"ion-icon",6),e.qZA()(),e.TgZ(10,"div",7),e.NdJ("click",function(){return c.presentAlertConfirm()}),e.YNc(11,P,1,1,"img",8),e.YNc(12,b,1,0,"ion-icon",9),e.qZA(),e.TgZ(13,"ion-item",10)(14,"ion-label",11),e._uU(15,"Nuevo nombre"),e.qZA(),e._UZ(16,"ion-input",12),e.qZA(),e.TgZ(17,"ion-button",13),e._uU(18,"Cambiar contrase\xf1a"),e.qZA(),e.TgZ(19,"ion-button",14),e._uU(20,"Guardar Cambios"),e.qZA()()()()()),2&o&&(e.Q6J("fullscreen",!0),e.xp6(8),e.Q6J("routerLink",e.DdM(6,g)),e.xp6(3),e.Q6J("ngIf",c.capturedImage),e.xp6(1),e.Q6J("ngIf",!c.capturedImage),e.xp6(5),e.Q6J("routerLink",e.DdM(7,h)),e.xp6(2),e.Q6J("routerLink",e.DdM(8,g)))},dependencies:[l.O5,n.YG,n.Sm,n.PM,n.FN,n.W2,n.gu,n.pK,n.Ie,n.Q$,n.j9,n.YI,s.rH],styles:[".custom-item[_ngcontent-%COMP%]{width:90%;margin:20px auto auto;background-color:rgba(255,255,255,.9);border-radius:10px;box-shadow:0 4px 6px rgba(255,255,255,.1)}.custom-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{font-size:14px}.custom-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:12px}ion-card.edit-profile-card[_ngcontent-%COMP%]{width:90%;margin:auto;text-align:center;background-color:rgba(255,255,255,.9);border-radius:10px;box-shadow:0 4px 6px rgba(0,0,0,.1)}.profile-image[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;position:relative;width:60%;max-width:150px;height:0;padding-bottom:60%;border-radius:50%;margin:0 auto;background:linear-gradient(to bottom,#00b894,#0984e3);color:#fff}.profile-image[_ngcontent-%COMP%]   ion-icon.camera-icon[_ngcontent-%COMP%]{font-size:40px;color:var(--ion-color-success);position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:1}.profile-image[_ngcontent-%COMP%]   img.camera-icon[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:50%;z-index:0}.background-gradient[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(to bottom,#00b894,#0984e3);z-index:-1}.center-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%}ion-button[_ngcontent-%COMP%]{margin-top:10px;font-size:10px}.recovery-link[_ngcontent-%COMP%]{text-decoration:underline;cursor:pointer}.muted-label[_ngcontent-%COMP%]{opacity:.7}"]}),a})()}];let C=(()=>{var t;class a{}return(t=a).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.Bz.forChild(x),s.Bz]}),a})(),v=(()=>{var t;class a{}return(t=a).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.ez,p.u5,n.Pc,C]}),a})()}}]);