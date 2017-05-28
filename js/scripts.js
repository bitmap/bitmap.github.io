!function(){"use strict";function e(e,t,i){for(var a=0;a<e.length;a++)t.call(i,e[a])}function t(e){return document.createElement(e)}var i=document.querySelector(".bokeh-blur"),a={init:function(e){var t,i,a=this;e.setAttribute("data-bokeh",!0),t=e.querySelectorAll("img"),a.createTabs(e,t),a.createCloseButton(e),i=e.querySelectorAll(".bokeh__tabs > li"),a.setActive(i[0],t[0])},createTabs:function(i,c){i.appendChild(t("ul")).className="bokeh__tabs";var s,n=i.querySelector(".bokeh__tabs",i);e(c,function(e,i){s=t("li"),n.appendChild(s),a.tabClickHandler(s,e)})},createCloseButton:function(e){e.appendChild(t("div")).className="bokeh__close";var a=e.querySelector(".bokeh__close",e);a.innerHTML="CLOSE",a.addEventListener("click",function(){e.classList.remove("is-visible"),i&&i.classList.remove("has-blur")})},tabClickHandler:function(e,t){e.addEventListener("click",function(){a.setActive(e,t)})},setActive:function(e,t){function i(e){return e.parentNode.querySelector(".is-active")}var a="is-active";null!==i(e)&&i(e).classList.remove(a),null!==i(t)&&i(t).classList.remove(a),t.hasAttribute("data-src")&&(t.setAttribute("src",t.getAttribute("data-src")),t.removeAttribute("data-src")),e.classList.add(a),t.classList.add(a)},showModal:function(e){var t=e.getAttribute("href").replace("#",""),c=document.getElementById(t);e.addEventListener("click",function(){c.classList.add("is-visible"),i&&i.classList.add("has-blur"),c.getAttribute("data-bokeh")||a.init(c)})}},c=document.querySelectorAll(".bokeh-link");e(c,function(e){a.showModal(e)})}();

var hdr = document.querySelectorAll('.hdr')

hdr.forEach(function(e) {
  var newStr = e.textContent.replace(/\w/g, '<span>$&</span>')
  e.innerHTML = newStr
})

var hdrSpans = document.querySelectorAll('.hdr span')

hdrSpans.forEach(function(e) {
  e.addEventListener('mouseover', function(e) {
    e.target.classList.add('spin', 'color')

    setTimeout(function() {
      e.target.classList.remove('spin', 'color')
    }, 1000)
  })
})
