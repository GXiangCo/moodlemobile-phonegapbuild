webpackJsonp([28],{2077:function(l,n,e){"use strict";function View_Scroll_0(l){return o._57(2,[o._52(402653184,1,{_scrollContent:0}),(l()(),o._31(1,0,[[1,0],["scrollContent",1]],null,2,"div",[["class","scroll-content"]],null,null,null,null,null)),(l()(),o._31(2,0,null,null,1,"div",[["class","scroll-zoom-wrapper"]],null,null,null,null,null)),o._43(null,0)],null,null)}function View_CoreViewerImagePage_0(l){return o._57(0,[(l()(),o._31(0,0,null,null,24,"ion-header",[],null,null,null,null,null)),o._30(1,16384,null,0,v.a,[y.a,o.t,o.V,[2,P.a]],null,null),(l()(),o._55(-1,null,["\n    "])),(l()(),o._31(3,0,null,null,20,"ion-navbar",[["class","toolbar"],["core-back-button",""]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,C.b,C.a)),o._30(4,49152,null,0,I.a,[j.a,[2,P.a],[2,x.a],y.a,o.t,o.V],null,null),o._30(5,212992,null,0,R.a,[I.a,O.a,M.a,z.a],null,null),(l()(),o._55(-1,3,["\n        "])),(l()(),o._31(7,0,null,3,2,"ion-title",[],null,null,null,X.b,X.a)),o._30(8,49152,null,0,Y.a,[y.a,o.t,o.V,[2,Z.a],[2,I.a]],null,null),(l()(),o._55(9,0,["",""])),(l()(),o._55(-1,3,["\n\n        "])),(l()(),o._31(11,0,null,2,11,"ion-buttons",[["end",""]],null,null,null,null,null)),o._30(12,16384,null,1,k.a,[y.a,o.t,o.V,[2,Z.a],[2,I.a]],null,null),o._52(603979776,1,{_buttons:1}),(l()(),o._55(-1,null,["\n            "])),(l()(),o._31(15,0,null,null,6,"button",[["icon-only",""],["ion-button",""]],[[1,"aria-label",0]],[[null,"click"]],function(l,n,e){var o=!0;if("click"===n){o=!1!==l.component.closeModal()&&o}return o},S.b,S.a)),o._30(16,1097728,[[1,4]],0,D.a,[[8,""],y.a,o.t,o.V],null,null),o._47(131072,G.a,[M.a,o.j]),(l()(),o._55(-1,0,["\n                "])),(l()(),o._31(19,0,null,0,1,"ion-icon",[["name","close"],["role","img"]],[[2,"hide",null]],null,null,null,null)),o._30(20,147456,null,0,H.a,[y.a,o.t,o.V],{name:[0,"name"]},null),(l()(),o._55(-1,0,["\n            "])),(l()(),o._55(-1,null,["\n        "])),(l()(),o._55(-1,3,["\n    "])),(l()(),o._55(-1,null,["\n"])),(l()(),o._55(-1,null,["\n"])),(l()(),o._31(26,0,null,null,9,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,F.b,F.a)),o._30(27,4374528,null,0,J.a,[y.a,O.a,K.a,o.t,o.V,j.a,N.a,o.M,[2,P.a],[2,x.a]],null,null),(l()(),o._55(-1,1,["\n    "])),(l()(),o._31(29,0,null,1,5,"ion-scroll",[["class","core-zoom-pane"],["maxZoom","2"],["scrollX","true"],["scrollY","true"],["zoom","true"]],[[2,"scroll-x",null],[2,"scroll-y",null]],null,null,View_Scroll_0,q)),o._30(30,49152,null,0,U.a,[],{scrollX:[0,"scrollX"],scrollY:[1,"scrollY"],zoom:[2,"zoom"],maxZoom:[3,"maxZoom"]},null),(l()(),o._55(-1,0,["\n        "])),(l()(),o._31(32,0,null,0,1,"img",[["core-external-content",""]],[[8,"alt",0]],null,null,null,null)),o._30(33,4734976,null,0,A.a,[o.t,B.a,E.a,O.a,L.a,Q.a,T.a,W.a,$.a],{component:[0,"component"],componentId:[1,"componentId"],src:[2,"src"]},null),(l()(),o._55(-1,0,["\n    "])),(l()(),o._55(-1,1,["\n"])),(l()(),o._55(-1,null,["\n"]))],function(l,n){var e=n.component;l(n,5,0);l(n,20,0,"close");l(n,30,0,"true","true","true","2");l(n,33,0,e.component,e.componentId,e.image)},function(l,n){var e=n.component;l(n,3,0,o._44(n,4)._hidden,o._44(n,4)._sbPadding);l(n,9,0,e.title);l(n,15,0,o._56(n,15,0,o._44(n,17).transform("core.close")));l(n,19,0,o._44(n,20)._hidden);l(n,26,0,o._44(n,27).statusbarPadding,o._44(n,27)._hasRefresher);l(n,29,0,o._44(n,30).scrollX,o._44(n,30).scrollY);l(n,32,0,e.title)})}Object.defineProperty(n,"__esModule",{value:!0});var o=e(0),t=e(5),a=e(3),u=this&&this.__decorate||function(l,n,e,o){var t,a=arguments.length,u=a<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(l,n,e,o);else for(var r=l.length-1;r>=0;r--)(t=l[r])&&(u=(a<3?t(u):a>3?t(n,e,u):t(n,e))||u);return a>3&&u&&Object.defineProperty(n,e,u),u},r=this&&this.__metadata||function(l,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(l,n)},c=function(){function CoreViewerImagePage(l,n,e){this.viewCtrl=l,this.title=n.get("title")||e.instant("core.imageviewer"),this.image=n.get("image"),this.component=n.get("component"),this.componentId=n.get("componentId")}return CoreViewerImagePage.prototype.closeModal=function(){this.viewCtrl.dismiss()},CoreViewerImagePage=u([Object(o.m)({selector:"page-core-viewer-image",templateUrl:"image.html"}),r("design:paramtypes",[t.G,t.t,a.c])],CoreViewerImagePage)}(),i=e(32),_=this&&this.__decorate||function(l,n,e,o){var t,a=arguments.length,u=a<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(l,n,e,o);else for(var r=l.length-1;r>=0;r--)(t=l[r])&&(u=(a<3?t(u):a>3?t(n,e,u):t(n,e))||u);return a>3&&u&&Object.defineProperty(n,e,u),u},s=function(){function CoreViewerImagePageModule(){}return CoreViewerImagePageModule=_([Object(o.I)({declarations:[c],imports:[i.a,t.l.forChild(c),a.b.forChild()]})],CoreViewerImagePageModule)}(),m=e(1522),d=e(1523),f=e(1524),g=e(1525),b=e(1526),p=e(1527),w=e(1528),h=e(1529),V=e(1530),v=e(371),y=e(8),P=e(39),C=e(723),I=e(212),j=e(35),x=e(20),R=e(473),O=e(16),M=e(18),z=e(9),X=e(724),Y=e(314),Z=e(247),k=e(372),S=e(46),D=e(43),G=e(25),H=e(48),F=e(181),J=e(29),K=e(34),N=e(107),U=e(748),q=o._29({encapsulation:2,styles:[],data:{}}),A=(o._27("ion-scroll",U.a,function View_Scroll_Host_0(l){return o._57(0,[(l()(),o._31(0,0,null,null,1,"ion-scroll",[],[[2,"scroll-x",null],[2,"scroll-y",null]],null,null,View_Scroll_0,q)),o._30(1,49152,null,0,U.a,[],null,null)],null,function(l,n){l(n,0,0,o._44(n,1).scrollX,o._44(n,1).scrollY)})},{scrollX:"scrollX",scrollY:"scrollY",zoom:"zoom",maxZoom:"maxZoom"},{},["*"]),e(229)),B=e(6),E=e(17),L=e(1),Q=e(4),T=e(22),W=e(10),$=e(2),ll=e(69),nl=o._29({encapsulation:2,styles:[],data:{}}),el=o._27("page-core-viewer-image",c,function View_CoreViewerImagePage_Host_0(l){return o._57(0,[(l()(),o._31(0,0,null,null,1,"page-core-viewer-image",[],null,null,null,View_CoreViewerImagePage_0,nl)),o._30(1,49152,null,0,c,[P.a,ll.a,M.a],null,null)],null,null)},{},{},[]),ol=e(7),tl=e(23),al=e(367),ul=e(368),rl=e(370),cl=e(369),il=e(472),_l=e(722),sl=e(270);e.d(n,"CoreViewerImagePageModuleNgFactory",function(){return ml});var ml=o._28(s,[],function(l){return o._40([o._41(512,o.o,o._21,[[8,[m.a,d.a,f.a,g.a,b.a,p.a,w.a,h.a,V.a,el]],[3,o.o],o.K]),o._41(4608,ol.m,ol.l,[o.G,[2,ol.w]]),o._41(4608,tl.x,tl.x,[]),o._41(4608,tl.d,tl.d,[]),o._41(4608,al.b,al.a,[]),o._41(4608,ul.a,ul.b,[]),o._41(4608,rl.b,rl.a,[]),o._41(4608,cl.b,cl.a,[]),o._41(4608,M.a,M.a,[il.a,al.b,ul.a,rl.b,cl.b,M.b,M.c]),o._41(512,i.a,i.a,[]),o._41(512,ol.b,ol.b,[]),o._41(512,tl.v,tl.v,[]),o._41(512,tl.i,tl.i,[]),o._41(512,tl.s,tl.s,[]),o._41(512,_l.a,_l.a,[]),o._41(512,_l.b,_l.b,[]),o._41(512,a.b,a.b,[]),o._41(512,s,s,[]),o._41(256,sl.a,c,[]),o._41(256,M.c,void 0,[]),o._41(256,M.b,void 0,[])])})}});