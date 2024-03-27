"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6552],{6552:(f,g,i)=>{i.r(g),i.d(g,{SettingsPageModule:()=>b});var u=i(177),d=i(9417),c=i(9364),a=i(3799),t=i(4438),h=i(5609);const m=[{path:"",component:(()=>{var e;class n{constructor(s){this.settings=s}ngOnInit(){this.settings.tipoTemperatura$.subscribe(s=>{this.isCelsiusSelected=s}),this.settings.tipoVelocidad$.subscribe(s=>{this.isKmhSelected=s})}selectCelsius(){this.isCelsiusSelected=!0,this.settings.setTemperatura(this.isCelsiusSelected)}selectFahrenheit(){this.isCelsiusSelected=!1,this.settings.setTemperatura(this.isCelsiusSelected)}selectKmh(){this.isKmhSelected=!0,this.settings.setVelocidadEn(this.isKmhSelected)}selectMph(){this.isKmhSelected=!1,this.settings.setVelocidadEn(this.isKmhSelected)}}return(e=n).\u0275fac=function(s){return new(s||e)(t.rXU(h.h))},e.\u0275cmp=t.VBU({type:e,selectors:[["app-settings"]],decls:24,vars:8,consts:[[2,"display","flex","justify-content","space-between"],["slot","start"],["menu","main-menu"],["slot","end","href","https://www.dgac.gob.cl/"],["id","logo","src","../../assets/icon/DGAC-logo.jpg","alt","logo",2,"height","40px","width","30px","margin-right","1vh"],["slot","end","href","https://archivos.meteochile.gob.cl/portaldmc/movil/movil_inicio.php"],["id","logo","src","../../assets/icon/DMC-logo.png","alt","logo",2,"height","40px","width","40px","margin-right","1vh"],[2,"background-size","cover","background-position","center","overflow","auto","background-color","rgba(53, 160, 192, 0.733)"],[1,"toggle-container"],[1,"toggle-button",3,"click"],[1,"divider"]],template:function(s,o){1&s&&(t.j41(0,"ion-toolbar",0)(1,"ion-buttons",1),t.nrm(2,"ion-menu-button",2),t.k0s(),t.j41(3,"a",3),t.nrm(4,"img",4),t.k0s(),t.j41(5,"a",5),t.nrm(6,"img",6),t.k0s()(),t.j41(7,"body",7),t.nrm(8,"br")(9,"br")(10,"br")(11,"br"),t.j41(12,"div",8)(13,"button",9),t.bIt("click",function(){return o.selectCelsius()}),t.EFF(14,"Celsius"),t.k0s(),t.nrm(15,"div",10),t.j41(16,"button",9),t.bIt("click",function(){return o.selectFahrenheit()}),t.EFF(17,"Fahrenheit"),t.k0s()(),t.j41(18,"div",8)(19,"button",9),t.bIt("click",function(){return o.selectKmh()}),t.EFF(20,"Km/H"),t.k0s(),t.nrm(21,"div",10),t.j41(22,"button",9),t.bIt("click",function(){return o.selectMph()}),t.EFF(23,"Mph"),t.k0s()()()),2&s&&(t.R7$(13),t.AVh("selected",o.isCelsiusSelected),t.R7$(3),t.AVh("selected",!o.isCelsiusSelected),t.R7$(3),t.AVh("selected",o.isKmhSelected),t.R7$(3),t.AVh("selected",!o.isKmhSelected))},dependencies:[c.QW,c.MC,c.ai],styles:['@charset "UTF-8";.toggle-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin:5%}.toggle-button[_ngcontent-%COMP%]{padding:10px 20px;font-size:16px;border:none;outline:none;cursor:pointer;background-color:#007bff;color:#fff;transition:background-color .3s,color .3s}.toggle-button[_ngcontent-%COMP%]:first-child{border-top-left-radius:20px;border-bottom-left-radius:20px}.toggle-button[_ngcontent-%COMP%]:last-child{border-top-right-radius:20px;border-bottom-right-radius:20px}.toggle-button.selected[_ngcontent-%COMP%]{background-color:#ccc;color:#000}.divider[_ngcontent-%COMP%]{height:40px;width:1px;background-color:#ccc}']}),n})()}];let p=(()=>{var e;class n{}return(e=n).\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[a.iI.forChild(m),a.iI]}),n})(),b=(()=>{var e;class n{}return(e=n).\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[u.MD,d.YN,c.bv,p]}),n})()}}]);