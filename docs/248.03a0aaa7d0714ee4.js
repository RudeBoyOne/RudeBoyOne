"use strict";(self.webpackChunkmy_portifolio=self.webpackChunkmy_portifolio||[]).push([[248],{248:(g,i,n)=>{n.r(i),n.d(i,{ProjectsModule:()=>y});var c=n(814),p=n(743),o=n(946),l=n(862);let u=(()=>{var t;class r{constructor(e){this.http=e,this.baseUrl="https://api.github.com/users/RudeBoyOne"}findUser(){return this.http.get(this.baseUrl)}findAllRepositories(){return this.http.get(`${this.baseUrl}/repos`)}}return(t=r).\u0275fac=function(e){return new(e||t)(o.LFG(l.eN))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),r})();function d(t,r){if(1&t&&(o.TgZ(0,"div",3)(1,"div",4),o._UZ(2,"img",5),o.TgZ(3,"div",6)(4,"h5",7),o._uU(5),o.qZA(),o.TgZ(6,"p",8),o._uU(7),o.qZA()()()()),2&t){const s=r.$implicit;o.xp6(5),o.hij(" ",s.full_name,""),o.xp6(2),o.Oqu(s.description)}}let m=(()=>{var t;class r{constructor(e){this.githubService=e,this.myRepositories=[]}ngOnInit(){this.githubService.findAllRepositories().subscribe(e=>{this.myRepositories=e})}}return(t=r).\u0275fac=function(e){return new(e||t)(o.Y36(u))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-card-repository"]],decls:3,vars:1,consts:[[1,"container-fluid","py-5"],[1,"row","row-cols-1","row-cols-md-3","g-4"],["class","col",4,"ngFor","ngForOf"],[1,"col"],[1,"card"],["src","...","alt","...",1,"card-img-top"],[1,"card-body"],[1,"card-title"],[1,"card-text"]],template:function(e,a){1&e&&(o.TgZ(0,"div",0)(1,"div",1),o.YNc(2,d,8,2,"div",2),o.qZA()()),2&e&&(o.xp6(2),o.Q6J("ngForOf",a.myRepositories))},dependencies:[c.sg]}),r})();const f=[{path:"",component:(()=>{var t;class r{}return(t=r).\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-projects"]],decls:2,vars:0,template:function(e,a){1&e&&(o.TgZ(0,"main"),o._UZ(1,"app-card-repository"),o.qZA())},dependencies:[m]}),r})()}];let v=(()=>{var t;class r{}return(t=r).\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[p.Bz.forChild(f),p.Bz]}),r})();var h=n(822);let y=(()=>{var t;class r{}return(t=r).\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[c.ez,v,h.K]}),r})()}}]);