"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8358],{6854:(E,y,d)=>{d.d(y,{I:()=>h,T:()=>C});var M=d(5861),v=d(8177);class h{constructor(f){this.southwest=f.southwest,this.center=f.center,this.northeast=f.northeast}contains(f){var u=this;return(0,M.Z)(function*(){return(yield v.S.mapBoundsContains({bounds:u,point:f})).contains})()}extend(f){var u=this;return(0,M.Z)(function*(){const r=yield v.S.mapBoundsExtend({bounds:u,point:f});return u.southwest=r.bounds.southwest,u.center=r.bounds.center,u.northeast=r.bounds.northeast,u})()}}var C=function(i){return i.Normal="Normal",i.Hybrid="Hybrid",i.Satellite="Satellite",i.Terrain="Terrain",i.None="None",i}(C||{})},8177:(E,y,d)=>{d.d(y,{S:()=>v});const v=(0,d(2726).fo)("CapacitorGoogleMaps",{web:()=>d.e(4059).then(d.bind(d,4059)).then(h=>new h.CapacitorGoogleMapsWeb)});v.addListener("isMapInFocus",h=>{var C;const u=document.elementFromPoint(h.x,h.y),P=(null===(C=null==u?void 0:u.dataset)||void 0===C?void 0:C.internalId)===h.mapId;v.dispatchMapEvent({id:h.mapId,focus:P})})},8358:(E,y,d)=>{d.r(y),d.d(y,{MapaPageModule:()=>V});var M=d(6814),v=d(95),h=d(9004),C=d(3044),i=d(5861),f=d(6854),u=d(2726),r=d(8177);class P extends HTMLElement{constructor(){super()}connectedCallback(){if(this.innerHTML="","ios"==u.dV.getPlatform()){this.style.overflow="scroll",this.style["-webkit-overflow-scrolling"]="touch";const e=document.createElement("div");e.style.height="200%",this.appendChild(e)}}}customElements.define("capacitor-google-map",P);class S{constructor(e){this.element=null,this.resizeObserver=null,this.handleScrollEvent=()=>this.updateMapBounds(),this.id=e}static create(e,n){return(0,i.Z)(function*(){const t=new S(e.id);if(!e.element)throw new Error("container element is required");void 0===e.config.androidLiteMode&&(e.config.androidLiteMode=!1),t.element=e.element,t.element.dataset.internalId=e.id;const o=yield S.getElementBounds(e.element);if(e.config.width=o.width,e.config.height=o.height,e.config.x=o.x,e.config.y=o.y,e.config.devicePixelRatio=window.devicePixelRatio,"android"==u.dV.getPlatform()&&t.initScrolling(),u.dV.isNativePlatform()){e.element={};const a=()=>{var m,k;const b=null!==(k=null===(m=t.element)||void 0===m?void 0:m.getBoundingClientRect())&&void 0!==k?k:{};return{x:b.x,y:b.y,width:b.width,height:b.height}},c=()=>{r.S.onDisplay({id:t.id,mapBounds:a()})},L=()=>{r.S.onResize({id:t.id,mapBounds:a()})},p=t.element.closest(".ion-page");"ios"===u.dV.getPlatform()&&p&&(p.addEventListener("ionViewWillEnter",()=>{setTimeout(()=>{c()},100)}),p.addEventListener("ionViewDidEnter",()=>{setTimeout(()=>{c()},100)}));const g={width:o.width,height:o.height,isHidden:!1};t.resizeObserver=new ResizeObserver(()=>{if(null!=t.element){const m=t.element.getBoundingClientRect(),k=0===m.width&&0===m.height;k||(g.isHidden?"ios"===u.dV.getPlatform()&&!p&&c():(g.width!==m.width||g.height!==m.height)&&L()),g.width=m.width,g.height=m.height,g.isHidden=k}}),t.resizeObserver.observe(t.element)}if(yield new Promise((a,c)=>{setTimeout((0,i.Z)(function*(){try{yield r.S.create(e),a(void 0)}catch(L){c(L)}}),200)}),n){const a=yield r.S.addListener("onMapReady",c=>{c.mapId==t.id&&(n(c),a.remove())})}return t})()}static getElementBounds(e){return(0,i.Z)(function*(){return new Promise(n=>{let t=e.getBoundingClientRect();if(0==t.width){let o=0;const a=setInterval(function(){0==t.width&&o<30?(t=e.getBoundingClientRect(),o++):(30==o&&console.warn("Map size could not be determined"),clearInterval(a),n(t))},100)}else n(t)})})()}enableTouch(){var e=this;return(0,i.Z)(function*(){return r.S.enableTouch({id:e.id})})()}disableTouch(){var e=this;return(0,i.Z)(function*(){return r.S.disableTouch({id:e.id})})()}enableClustering(e){var n=this;return(0,i.Z)(function*(){return r.S.enableClustering({id:n.id,minClusterSize:e})})()}disableClustering(){var e=this;return(0,i.Z)(function*(){return r.S.disableClustering({id:e.id})})()}addMarker(e){var n=this;return(0,i.Z)(function*(){return(yield r.S.addMarker({id:n.id,marker:e})).id})()}addMarkers(e){var n=this;return(0,i.Z)(function*(){return(yield r.S.addMarkers({id:n.id,markers:e})).ids})()}removeMarker(e){var n=this;return(0,i.Z)(function*(){return r.S.removeMarker({id:n.id,markerId:e})})()}removeMarkers(e){var n=this;return(0,i.Z)(function*(){return r.S.removeMarkers({id:n.id,markerIds:e})})()}addPolygons(e){var n=this;return(0,i.Z)(function*(){return(yield r.S.addPolygons({id:n.id,polygons:e})).ids})()}addPolylines(e){var n=this;return(0,i.Z)(function*(){return(yield r.S.addPolylines({id:n.id,polylines:e})).ids})()}removePolygons(e){var n=this;return(0,i.Z)(function*(){return r.S.removePolygons({id:n.id,polygonIds:e})})()}addCircles(e){var n=this;return(0,i.Z)(function*(){return(yield r.S.addCircles({id:n.id,circles:e})).ids})()}removeCircles(e){var n=this;return(0,i.Z)(function*(){return r.S.removeCircles({id:n.id,circleIds:e})})()}removePolylines(e){var n=this;return(0,i.Z)(function*(){return r.S.removePolylines({id:n.id,polylineIds:e})})()}destroy(){var e=this;return(0,i.Z)(function*(){var n;return"android"==u.dV.getPlatform()&&e.disableScrolling(),u.dV.isNativePlatform()&&(null===(n=e.resizeObserver)||void 0===n||n.disconnect()),e.removeAllMapListeners(),r.S.destroy({id:e.id})})()}setCamera(e){var n=this;return(0,i.Z)(function*(){return r.S.setCamera({id:n.id,config:e})})()}getMapType(){var e=this;return(0,i.Z)(function*(){const{type:n}=yield r.S.getMapType({id:e.id});return f.T[n]})()}setMapType(e){var n=this;return(0,i.Z)(function*(){return r.S.setMapType({id:n.id,mapType:e})})()}enableIndoorMaps(e){var n=this;return(0,i.Z)(function*(){return r.S.enableIndoorMaps({id:n.id,enabled:e})})()}enableTrafficLayer(e){var n=this;return(0,i.Z)(function*(){return r.S.enableTrafficLayer({id:n.id,enabled:e})})()}enableAccessibilityElements(e){var n=this;return(0,i.Z)(function*(){return r.S.enableAccessibilityElements({id:n.id,enabled:e})})()}enableCurrentLocation(e){var n=this;return(0,i.Z)(function*(){return r.S.enableCurrentLocation({id:n.id,enabled:e})})()}setPadding(e){var n=this;return(0,i.Z)(function*(){return r.S.setPadding({id:n.id,padding:e})})()}getMapBounds(){var e=this;return(0,i.Z)(function*(){return new f.I(yield r.S.getMapBounds({id:e.id}))})()}fitBounds(e,n){var t=this;return(0,i.Z)(function*(){return r.S.fitBounds({id:t.id,bounds:e,padding:n})})()}initScrolling(){const e=document.getElementsByTagName("ion-content");for(let n=0;n<e.length;n++)e[n].scrollEvents=!0;window.addEventListener("ionScroll",this.handleScrollEvent),window.addEventListener("scroll",this.handleScrollEvent),window.addEventListener("resize",this.handleScrollEvent),screen.orientation?screen.orientation.addEventListener("change",()=>{setTimeout(this.updateMapBounds,500)}):window.addEventListener("orientationchange",()=>{setTimeout(this.updateMapBounds,500)})}disableScrolling(){window.removeEventListener("ionScroll",this.handleScrollEvent),window.removeEventListener("scroll",this.handleScrollEvent),window.removeEventListener("resize",this.handleScrollEvent),screen.orientation?screen.orientation.removeEventListener("change",()=>{setTimeout(this.updateMapBounds,1e3)}):window.removeEventListener("orientationchange",()=>{setTimeout(this.updateMapBounds,1e3)})}updateMapBounds(){if(this.element){const e=this.element.getBoundingClientRect();r.S.onScroll({id:this.id,mapBounds:{x:e.x,y:e.y,width:e.width,height:e.height}})}}setOnCameraIdleListener(e){var n=this;return(0,i.Z)(function*(){n.onCameraIdleListener&&n.onCameraIdleListener.remove(),n.onCameraIdleListener=e?yield r.S.addListener("onCameraIdle",n.generateCallback(e)):void 0})()}setOnBoundsChangedListener(e){var n=this;return(0,i.Z)(function*(){n.onBoundsChangedListener&&n.onBoundsChangedListener.remove(),n.onBoundsChangedListener=e?yield r.S.addListener("onBoundsChanged",n.generateCallback(e)):void 0})()}setOnCameraMoveStartedListener(e){var n=this;return(0,i.Z)(function*(){n.onCameraMoveStartedListener&&n.onCameraMoveStartedListener.remove(),n.onCameraMoveStartedListener=e?yield r.S.addListener("onCameraMoveStarted",n.generateCallback(e)):void 0})()}setOnClusterClickListener(e){var n=this;return(0,i.Z)(function*(){n.onClusterClickListener&&n.onClusterClickListener.remove(),n.onClusterClickListener=e?yield r.S.addListener("onClusterClick",n.generateCallback(e)):void 0})()}setOnClusterInfoWindowClickListener(e){var n=this;return(0,i.Z)(function*(){n.onClusterInfoWindowClickListener&&n.onClusterInfoWindowClickListener.remove(),n.onClusterInfoWindowClickListener=e?yield r.S.addListener("onClusterInfoWindowClick",n.generateCallback(e)):void 0})()}setOnInfoWindowClickListener(e){var n=this;return(0,i.Z)(function*(){n.onInfoWindowClickListener&&n.onInfoWindowClickListener.remove(),n.onInfoWindowClickListener=e?yield r.S.addListener("onInfoWindowClick",n.generateCallback(e)):void 0})()}setOnMapClickListener(e){var n=this;return(0,i.Z)(function*(){n.onMapClickListener&&n.onMapClickListener.remove(),n.onMapClickListener=e?yield r.S.addListener("onMapClick",n.generateCallback(e)):void 0})()}setOnPolygonClickListener(e){var n=this;return(0,i.Z)(function*(){n.onPolygonClickListener&&n.onPolygonClickListener.remove(),n.onPolygonClickListener=e?yield r.S.addListener("onPolygonClick",n.generateCallback(e)):void 0})()}setOnCircleClickListener(e){var n=this;return(0,i.Z)(function*(){n.onCircleClickListener&&n.onCircleClickListener.remove(),n.onCircleClickListener=e?yield r.S.addListener("onCircleClick",n.generateCallback(e)):void 0})()}setOnMarkerClickListener(e){var n=this;return(0,i.Z)(function*(){n.onMarkerClickListener&&n.onMarkerClickListener.remove(),n.onMarkerClickListener=e?yield r.S.addListener("onMarkerClick",n.generateCallback(e)):void 0})()}setOnPolylineClickListener(e){var n=this;return(0,i.Z)(function*(){n.onPolylineClickListener&&n.onPolylineClickListener.remove(),n.onPolylineClickListener=e?yield r.S.addListener("onPolylineClick",n.generateCallback(e)):void 0})()}setOnMarkerDragStartListener(e){var n=this;return(0,i.Z)(function*(){n.onMarkerDragStartListener&&n.onMarkerDragStartListener.remove(),n.onMarkerDragStartListener=e?yield r.S.addListener("onMarkerDragStart",n.generateCallback(e)):void 0})()}setOnMarkerDragListener(e){var n=this;return(0,i.Z)(function*(){n.onMarkerDragListener&&n.onMarkerDragListener.remove(),n.onMarkerDragListener=e?yield r.S.addListener("onMarkerDrag",n.generateCallback(e)):void 0})()}setOnMarkerDragEndListener(e){var n=this;return(0,i.Z)(function*(){n.onMarkerDragEndListener&&n.onMarkerDragEndListener.remove(),n.onMarkerDragEndListener=e?yield r.S.addListener("onMarkerDragEnd",n.generateCallback(e)):void 0})()}setOnMyLocationButtonClickListener(e){var n=this;return(0,i.Z)(function*(){n.onMyLocationButtonClickListener&&n.onMyLocationButtonClickListener.remove(),n.onMyLocationButtonClickListener=e?yield r.S.addListener("onMyLocationButtonClick",n.generateCallback(e)):void 0})()}setOnMyLocationClickListener(e){var n=this;return(0,i.Z)(function*(){n.onMyLocationClickListener&&n.onMyLocationClickListener.remove(),n.onMyLocationClickListener=e?yield r.S.addListener("onMyLocationClick",n.generateCallback(e)):void 0})()}removeAllMapListeners(){var e=this;return(0,i.Z)(function*(){e.onBoundsChangedListener&&(e.onBoundsChangedListener.remove(),e.onBoundsChangedListener=void 0),e.onCameraIdleListener&&(e.onCameraIdleListener.remove(),e.onCameraIdleListener=void 0),e.onCameraMoveStartedListener&&(e.onCameraMoveStartedListener.remove(),e.onCameraMoveStartedListener=void 0),e.onClusterClickListener&&(e.onClusterClickListener.remove(),e.onClusterClickListener=void 0),e.onClusterInfoWindowClickListener&&(e.onClusterInfoWindowClickListener.remove(),e.onClusterInfoWindowClickListener=void 0),e.onInfoWindowClickListener&&(e.onInfoWindowClickListener.remove(),e.onInfoWindowClickListener=void 0),e.onMapClickListener&&(e.onMapClickListener.remove(),e.onMapClickListener=void 0),e.onPolylineClickListener&&(e.onPolylineClickListener.remove(),e.onPolylineClickListener=void 0),e.onMarkerClickListener&&(e.onMarkerClickListener.remove(),e.onMarkerClickListener=void 0),e.onPolygonClickListener&&(e.onPolygonClickListener.remove(),e.onPolygonClickListener=void 0),e.onCircleClickListener&&(e.onCircleClickListener.remove(),e.onCircleClickListener=void 0),e.onMarkerDragStartListener&&(e.onMarkerDragStartListener.remove(),e.onMarkerDragStartListener=void 0),e.onMarkerDragListener&&(e.onMarkerDragListener.remove(),e.onMarkerDragListener=void 0),e.onMarkerDragEndListener&&(e.onMarkerDragEndListener.remove(),e.onMarkerDragEndListener=void 0),e.onMyLocationButtonClickListener&&(e.onMyLocationButtonClickListener.remove(),e.onMyLocationButtonClickListener=void 0),e.onMyLocationClickListener&&(e.onMyLocationClickListener.remove(),e.onMyLocationClickListener=void 0)})()}generateCallback(e){const n=this.id;return t=>{t.mapId==n&&e(t)}}}const w=(0,u.fo)("Geolocation",{web:()=>d.e(579).then(d.bind(d,579)).then(l=>new l.GeolocationWeb)});var s=d(6689),I=d(4414),Z=d(9167);const B=["map"],D=[{path:"",component:(()=>{var l;class e{constructor(t,o,a,c){this.router=t,this.alertController=o,this.arouter=a,this.db=c,this.direccionDestino="",this.mostrarinfoconductor=!1,this.rolconductor=2}ionViewWillEnter(){this.createmap().then(()=>{})}ngOnInit(){this.arouter.paramMap.subscribe(t=>{var o;const a=null!==(o=t.get("usuarioid"))&&void 0!==o?o:"";this.usuarioid=parseInt(a,10)||0,console.log("Usuarioid en PerfilUsuarioPage:",this.usuarioid),this.usuarioid&&this.db.buscarUsuarioPorId(this.usuarioid).then(c=>{c&&(this.idRol=c.rolid,this.mostrarBotonBuscarConductor())}).catch(c=>{})})}mostrarBotonBuscarConductor(){console.log("rolid:",this.idRol);const t=document.getElementById("botonBuscaConductor"),o=document.getElementById("botonCrearViaje");t&&o&&(2===this.idRol?(t.style.display="",o.style.display="none"):(o.style.display="",t.style.display="none"))}obtenerConductores(){var t=this;return(0,i.Z)(function*(){const o=yield t.db.buscarUsuariosPorRol(t.rolconductor);t.userconductor=o})()}IniciarViaje(){var t=this;return(0,i.Z)(function*(){yield(yield t.alertController.create({header:"Crear Viaje",inputs:[{name:"direccionInicio",type:"text",placeholder:"Direcci\xf3n de inicio"},{name:"direccionDestino",type:"text",placeholder:"Direcci\xf3n de destino"},{name:"valorViaje",type:"number",placeholder:"Valor del viaje"},{name:"cantidadAsientos",type:"number",placeholder:"Cantidad de asientos"}],buttons:[{text:"Cancelar",role:"cancel",handler:()=>{console.log("Cancelar")}},{text:"Iniciar Viaje",handler:a=>{t.camposVacios(a)?t.mostrarAlerta("Error","Todos los campos deben ser completados"):t.validarValorViaje(a.valorViaje)?t.validarAsientos(a.cantidadAsientos,t.usuarioid)?t.guardarViaje(a):t.mostrarAlerta("Error","La cantidad de asientos no es v\xe1lida"):t.mostrarAlerta("Error","El valor del viaje debe ser mayor a 1000 y menor a 101000")}}]})).present()})()}validarValorViaje(t){return t>900&&t<101e3}camposVacios(t){return Object.values(t).some(o=>void 0===o||""===o)}mostrarAlerta(t,o){this.alertController.create({header:t,message:o,buttons:["OK"]}).then(a=>a.present())}validarAsientos(t,o){var a=this;return(0,i.Z)(function*(){try{const c=yield a.db.obtenerVehiculoPorUsuario(o);return a.asientos=c.asientos,c?t>0&&t<=c.asientos&&t<=c.asientos:(console.error("No se encontr\xf3 el veh\xedculo para el usuario."),!1)}catch(c){return console.error("Error al obtener informaci\xf3n del veh\xedculo:",c),!1}})()}guardarViaje(t){var o=this;return(0,i.Z)(function*(){const a=o.usuarioid,L=(yield o.db.obtenerVehiculoPorUsuario(a)).autoid;(yield o.validarAsientos(t.cantidadAsientos,a))?o.db.insertarViaje(L,t.direccionInicio,t.direccionDestino,t.valorViaje,t.cantidadAsientos).then(()=>{console.log("Viaje creado exitosamente"),o.router.navigate(["/detalleconductor",o.usuarioid]),o.mostrarAlerta("\xc9xito","Viaje creado exitosamente")}).catch(g=>{console.error("Error al crear el viaje:",g)}):(console.log("Cantidad de asientos inv\xe1lida"),o.mostrarAlerta("Error","La cantidad de asientos no debe ser superior a la ingresada"))})()}getCurrentPosition(){return(0,i.Z)(function*(){return(yield w.getCurrentPosition()).coords})()}createmap(){var t=this;return(0,i.Z)(function*(){const o=yield t.getCurrentPosition();t.Map=yield S.create({id:"my-cool-map",element:t.mapRef.nativeElement,apiKey:"AIzaSyD2czNyEOEJJKQETzm1PrjLqim5HuGGvX8",config:{center:{lat:o.latitude,lng:o.longitude},zoom:15},forceCreate:!0}),yield t.Map.addMarker({coordinate:{lat:o.latitude,lng:o.longitude},title:"origen"})})()}}return(l=e).\u0275fac=function(t){return new(t||l)(s.Y36(C.F0),s.Y36(I.Br),s.Y36(C.gz),s.Y36(Z.A))},l.\u0275cmp=s.Xpm({type:l,selectors:[["app-mapa"]],viewQuery:function(t,o){if(1&t&&s.Gf(B,5),2&t){let a;s.iGM(a=s.CRH())&&(o.mapRef=a.first)}},decls:13,vars:2,consts:[[3,"translucent"],[1,"custom-toolbar"],["slot","start"],["defaultHref","/",1,"custom-back-button"],[3,"fullscreen"],["id","botonBuscaConductor",3,"click"],["id","botonCrearViaje",3,"click"],[1,"map"],["map",""]],template:function(t,o){1&t&&(s.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),s._UZ(3,"ion-back-button",3),s.qZA(),s.TgZ(4,"ion-title"),s._uU(5,"mapa"),s.qZA()()(),s.TgZ(6,"ion-content",4)(7,"ion-button",5),s.NdJ("click",function(){return o.obtenerConductores()}),s._uU(8,"Busca un Conductor"),s.qZA(),s.TgZ(9,"ion-button",6),s.NdJ("click",function(){return o.IniciarViaje()}),s._uU(10,"Crear Viaje"),s.qZA(),s._UZ(11,"capacitor-google-map",7,8),s.qZA()),2&t&&(s.Q6J("translucent",!0),s.xp6(6),s.Q6J("fullscreen",!0))},dependencies:[h.YG,h.Sm,h.W2,h.Gu,h.wd,h.sr,h.oU],styles:["[_ngcontent-%COMP%]:root{--ion-background-color: transparent }body[_ngcontent-%COMP%]{--ion-background-color: transparent }ion-content[_ngcontent-%COMP%]{--background: transparent;--ion-background-color: transparent}.map[_ngcontent-%COMP%]{display:block;width:100%;height:100%}.custom-toolbar[_ngcontent-%COMP%]{--background: #0984e3}.custom-back-button[_ngcontent-%COMP%]{--color: #00b894}"]}),e})()}];let O=(()=>{var l;class e{}return(l=e).\u0275fac=function(t){return new(t||l)},l.\u0275mod=s.oAB({type:l}),l.\u0275inj=s.cJS({imports:[C.Bz.forChild(D),C.Bz]}),e})(),V=(()=>{var l;class e{}return(l=e).\u0275fac=function(t){return new(t||l)},l.\u0275mod=s.oAB({type:l}),l.\u0275inj=s.cJS({imports:[M.ez,v.u5,h.Pc,O]}),e})()}}]);