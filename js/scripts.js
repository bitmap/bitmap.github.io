!function(){"use strict";var e="is-active",t=document.querySelectorAll(".bokeh"),i=document.querySelectorAll(".bokeh-link"),c=document.querySelector(".bokeh-blur"),a=Array.prototype.forEach,r={init:function(e){var t=this;e.appendChild(document.createElement("ul")).className="bokeh__tabs",e.appendChild(document.createElement("div")).className="bokeh__close";var i,r,l=e.querySelector(".bokeh__tabs"),n=l.children,s=e.querySelectorAll("img"),o=e.querySelector(".bokeh__close");for(r=0;r<s.length;r++)i=document.createElement("li"),l.appendChild(i),i.setAttribute("data-index",r),i.innerHTML=r+1;a.call(n,function(e){e.addEventListener("click",function(){for(r=0;r<s.length;r++)e.getAttribute("data-index")==r?t.makeActive(s[r],n[r]):t.removeActive(s[r],n[r])})}),t.makeActive(s[0],n[0]),o.innerHTML="CLOSE",o.addEventListener("click",function(){e.classList.remove("is-visible"),c&&c.classList.remove("has-blur")})},makeActive:function(t,i){t.hasAttribute("data-src")&&(t.setAttribute("src",t.getAttribute("data-src")),t.removeAttribute("data-src")),i.classList.add(e),t.classList.add(e)},removeActive:function(t,i){i.classList.remove(e),t.classList.remove(e)},showModal:function(e){e.addEventListener("click",function(){var t=e.getAttribute("href").replace("#","");document.getElementById(t).classList.add("is-visible"),c&&c.classList.add("has-blur")})}};a.call(t,function(e){r.init(e)}),a.call(i,function(e){r.showModal(e)})}();
