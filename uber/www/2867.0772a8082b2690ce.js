"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2867],{2867:(z,f,i)=>{i.r(f),i.d(f,{ModuserPageModule:()=>k});var h=i(6814),m=i(95),a=i(9004),u=i(3044),p=i(5861),e=i(6689),C=i(1965),v=i(4414),y=i(9167);function x(t,s){if(1&t&&e._UZ(0,"img",16),2&t){const l=e.oxw();e.Q6J("src",l.capturedImage,e.LSH)}}function U(t,s){1&t&&e._UZ(0,"ion-icon",17)}const Z=function(){return["/perfiluser"]},O=function(){return["/recuperar"]},A=[{path:"",component:(()=>{var t;class s{constructor(o,r,n,c){this.cameraService=o,this.alertController=r,this.aroute=n,this.db=c}ngOnInit(){this.aroute.paramMap.subscribe(o=>{var r;const n=null!==(r=o.get("usuarioid"))&&void 0!==r?r:"";this.usuarioid=parseInt(n,10)||0,console.log("Usuarioid en PerfilUsuarioPage:",this.usuarioid),this.usuarioid&&this.db.buscarUsuarioPorId(this.usuarioid).then(c=>{c&&(this.nombreUsuario=c.nombre,console.log("Usuarioid en PerfilUsuarioPage:",this.nombreUsuario))}).catch(c=>{})})}takePicture2(){var o=this;return(0,p.Z)(function*(){o.capturedImage=yield o.cameraService.takePicture()})()}takePicture(){var o=this;return(0,p.Z)(function*(){try{const r=yield o.cameraService.takePicture();if(r){const n=yield o.base64ToBlob(r);yield o.db.insertarImagen(o.usuarioid,n),console.log("Imagen guardada en la base de datos."),o.capturedImage=URL.createObjectURL(n)}}catch(r){console.error("Otras propiedades del error:",r)}})()}base64ToBlob(o){return new Promise((r,n)=>{const c=atob(o),M=[];for(let d=0;d<c.length;d+=512){const b=c.slice(d,d+512),P=new Array(b.length);for(let g=0;g<b.length;g++)P[g]=b.charCodeAt(g);const _=new Uint8Array(P);M.push(_)}r(new Blob(M,{type:"image/jpeg"}))})}convertirImagenABlob(o){return fetch(o).then(r=>r.blob())}presentAlertConfirm(){var o=this;return(0,p.Z)(function*(){yield(yield o.alertController.create({header:"Cambiar Foto de Perfil",message:"\xbfQuiere cambiar su foto de perfil?",buttons:[{text:"No",role:"cancel",handler:()=>{console.log("No desea cambiar la foto")}},{text:"S\xed",handler:()=>{o.takePicture2()}}]})).present()})()}guardarCambios2(o,r){this.db.actualizarNombreUsuario(o,r).then(()=>{console.log("nombre actualizado con \xe9xito."),this.db.obtenerUsuarios().then(n=>{this.nombreUsuario=r})}).catch(n=>{console.error("Error al actualizar el rol:",n)})}guardarCambios(o){this.db.actualizarNombreUsuario(this.usuarioid,o).then(()=>{console.log("Nombre actualizado con \xe9xito."),console.log(this.nombreUsuario),console.log(o),this.nombreUsuario=o,this.db.obtenerUsuarios().then(r=>{this.nombreUsuario=o})}).catch(r=>{console.error("Error al actualizar el nombre:",r)})}}return(t=s).\u0275fac=function(o){return new(o||t)(e.Y36(C.Y),e.Y36(v.Br),e.Y36(u.gz),e.Y36(y.A))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-moduser"]],decls:23,vars:9,consts:[[1,"content",3,"fullscreen"],[1,"background-gradient"],[1,"center-container"],[1,"edit-profile-card"],["slot","start"],["fill","clear","color","success",1,"back-button",3,"routerLink"],["name","arrow-back"],[1,"profile-image",3,"click"],["alt","Captured Image","class","camera-icon","id","profile-image",3,"src",4,"ngIf"],["name","camera","slot","end","color","light","class","camera-icon",4,"ngIf"],[1,"profile-name"],[1,"custom-item"],["color","primary","position","floating"],["type","text",3,"ngModel","ngModelChange"],["expand","full","color","primary",3,"routerLink"],["expand","full","color","success",3,"click"],["alt","Captured Image","id","profile-image",1,"camera-icon",3,"src"],["name","camera","slot","end","color","light",1,"camera-icon"]],template:function(o,r){1&o&&(e.TgZ(0,"ion-content",0),e._UZ(1,"div",1),e.TgZ(2,"div",2)(3,"ion-card",3)(4,"ion-card-content")(5,"h2"),e._uU(6,"Editar perfil"),e.qZA(),e.TgZ(7,"ion-buttons",4)(8,"ion-button",5),e._UZ(9,"ion-icon",6),e.qZA()(),e.TgZ(10,"div",7),e.NdJ("click",function(){return r.presentAlertConfirm()}),e.YNc(11,x,1,1,"img",8),e.YNc(12,U,1,0,"ion-icon",9),e.qZA(),e.TgZ(13,"div",10),e._uU(14),e.qZA(),e.TgZ(15,"ion-item",11)(16,"ion-label",12),e._uU(17,"Nuevo nombre"),e.qZA(),e.TgZ(18,"ion-input",13),e.NdJ("ngModelChange",function(c){return r.nuevoNombre=c}),e.qZA()(),e.TgZ(19,"ion-button",14),e._uU(20,"Cambiar contrase\xf1a"),e.qZA(),e.TgZ(21,"ion-button",15),e.NdJ("click",function(){return r.guardarCambios(r.nuevoNombre)}),e._uU(22,"Guardar Cambios"),e.qZA()()()()()),2&o&&(e.Q6J("fullscreen",!0),e.xp6(8),e.Q6J("routerLink",e.DdM(7,Z)),e.xp6(3),e.Q6J("ngIf",r.capturedImage),e.xp6(1),e.Q6J("ngIf",!r.capturedImage),e.xp6(2),e.Oqu(r.nombreUsuario),e.xp6(4),e.Q6J("ngModel",r.nuevoNombre),e.xp6(1),e.Q6J("routerLink",e.DdM(8,O)))},dependencies:[h.O5,m.JJ,m.On,a.YG,a.Sm,a.PM,a.FN,a.W2,a.gu,a.pK,a.Ie,a.Q$,a.j9,a.YI,u.rH],styles:[".custom-item[_ngcontent-%COMP%]{width:90%;margin:20px auto auto;background-color:rgba(255,255,255,.9);border-radius:10px;box-shadow:0 4px 6px rgba(255,255,255,.1)}.custom-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{font-size:14px}.custom-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:12px}ion-card.edit-profile-card[_ngcontent-%COMP%]{width:90%;margin:auto;text-align:center;background-color:rgba(255,255,255,.9);border-radius:10px;box-shadow:0 4px 6px rgba(0,0,0,.1)}.profile-image[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;position:relative;width:150px;height:150px;border-radius:50%;margin:0 auto;background:linear-gradient(to bottom,#00b894,#0984e3);color:#fff}.profile-image[_ngcontent-%COMP%]   ion-icon.camera-icon[_ngcontent-%COMP%]{font-size:40px;color:var(--ion-color-success);position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:1}.profile-image[_ngcontent-%COMP%]   img.camera-icon[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:50%;z-index:0}.background-gradient[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(to bottom,#00b894,#0984e3);z-index:-1}.center-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%}ion-button[_ngcontent-%COMP%]{margin-top:10px;font-size:10px}.recovery-link[_ngcontent-%COMP%]{text-decoration:underline;cursor:pointer}.muted-label[_ngcontent-%COMP%]{opacity:.7}"]}),s})()}];let I=(()=>{var t;class s{}return(t=s).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.Bz.forChild(A),u.Bz]}),s})(),k=(()=>{var t;class s{}return(t=s).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[h.ez,m.u5,a.Pc,I]}),s})()}}]);