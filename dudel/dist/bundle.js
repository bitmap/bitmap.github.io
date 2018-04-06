!function(e){var t={};function s(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/dist/",s(s.s=4)}([function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var s=0;s<t.length;s++){var i=t[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,s,i){return s&&e(t.prototype,s),i&&e(t,i),t}}();var n=function(){function e(t){var s=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.eraserBtn=document.getElementById("eraser"),this.clearBtn=document.getElementById("clear"),this.replayBtn=document.getElementById("replay"),this.loopBtn=document.getElementById("loop"),this.blissBtn=document.getElementById("bliss"),this.eraserBtn.addEventListener("click",function(){return s.eraser()}),this.clearBtn.addEventListener("click",function(){return s.clear()}),this.replayBtn.addEventListener("click",function(){return s.replay()}),this.loopBtn.addEventListener("click",function(){return s.loop()}),this.blissBtn.addEventListener("click",function(){return s.bliss()}),this.eraser=this.eraser.bind(this),this.clear=this.clear.bind(this),this.replay=this.replay.bind(this),this.loop=this.loop.bind(this),this.brush=t,this.settings=this.brush.settings}return i(e,[{key:"clear",value:function(){var e=this.brush,t=this.loopBtn,s=this.eraserBtn;e.clear(),e.history=[e.initialHistory],e.reset(),t.classList.remove("active"),s.classList.remove("active")}},{key:"eraser",value:function(){var e=this.settings,t=this.eraserBtn;e.eraser=!e.eraser,e.x=-100,e.y=-100,e.lx=-100,e.ly=-100,t.classList.toggle("active")}},{key:"replay",value:function(){var e=this.brush,t=this.settings,s=this.eraserBtn;t.frame=0,t.x=-100,t.y=-100,t.lx=-100,t.ly=-100,t.replay||(e.clear(),t.eraser=!1,t.replay=!0,s.classList.remove("active"))}},{key:"loop",value:function(){var e=this.brush,t=this.settings,s=this.replayBtn,i=this.loopBtn,n=this.eraserBtn,r=this.clearBtn;t.frame=0,t.clean=!0,t.x=-100,t.y=-100,t.lx=-100,t.ly=-100,e.clear(),t.loop?(t.loop=!1,t.replay=!1,e.history=[e.initialHistory],e.reset(),s.disabled=!1,n.disabled=!1,r.disabled=!1):(t.loop=!0,t.replay=!0,s.disabled=!0,n.disabled=!0,r.disabled=!0),i.classList.toggle("active"),n.classList.remove("active")}},{key:"bliss",value:function(){document.body.classList.toggle("bliss"),this.blissBtn.classList.toggle("active")}}]),e}();t.default=n},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["A","B","X","Y","LB","RB","LT","RT","SEL","STR","L3","R3","UP","DOWN","LEFT","RIGHT","SYNC"]},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var s=0;s<t.length;s++){var i=t[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,s,i){return s&&e(t.prototype,s),i&&e(t,i),t}}(),n=s(1);var r={x:-100,y:-100,lx:-100,ly:-100,prevX:-100,prevY:-100,frame:0,stall:0,r:2,g:0,b:4,speed:5,height:5,width:127,size:50,color:0,eraser:!1,replay:!1,loop:!1,clean:!0,gradient:""},a=function(){function e(t,s){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.settings=r,this.initialHistory={from:[-1e3,-1e3],to:[-1e3,-1e3],size:this.settings.size,color:this.settings.color},this.history=[this.initialHistory],this.controller={type:null,A:!1,B:!1,X:!1,Y:!1,RT:!1,LT:!1,RB:!1,LB:!1,UP:!1,DOWN:!1,LEFT:!1,RIGHT:!1,AXIS_X:0,AXIS_Y:1},this.draw=this.draw.bind(this),this.controllerPosition=this.controllerPosition.bind(this),this.canvas=t,this.context=s}return i(e,[{key:"colorPhase",value:function(e){var t=this.settings.width,s=2*Math.PI,i=this.settings.height,n=Math.sin(s/i+this.settings.r+e)*t+128,r=Math.sin(s/i+this.settings.g+e)*t+128,a=Math.sin(s/i+this.settings.b+e)*t+128;return"rgb("+Math.round(n)+","+Math.round(r)+","+Math.round(a)+")"}},{key:"line",value:function(e,t,s,i,n,r){var a=this.context;a.beginPath(),a.moveTo(e,t),a.lineTo(s,i),a.lineWidth=n,a.lineCap="round",a.lineJoin="round",a.strokeStyle=r,a.stroke()}},{key:"record",value:function(e){this.history.push(e)}},{key:"draw",value:function(e){var t=this.settings,s=t.lx,i=t.ly,n=t.x,r=t.y,a=t.size,o=t.eraser,l=t.frame,c=t.replay,h=this.colorPhase(this.settings.color/30);o&&(h="rgb(0,0,0)"),this.line(s,i,n,r,a,h),this.controllerPosition(e);var u={from:[s,i],to:[n,r],size:a,color:h};0!==l&&(c||this.record(u))}},{key:"replay",value:function(){var e=this.history.length-1,t=this.history[this.settings.frame],s=t.from[0],i=t.from[1],n=t.to[0],r=t.to[1],a=t.size,o=t.color;this.settings.frame<e?(this.settings.frame+=1,this.line(s,i,n,r,a,o)):this.settings.loop?(this.settings.stall+=1,this.settings.stall>=60&&(this.settings.stall=0,this.settings.frame=0,this.clear())):(this.settings.frame=0,this.settings.replay=!1)}},{key:"clear",value:function(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}},{key:"reset",value:function(){this.settings.x=-100,this.settings.y=-100,this.settings.lx=-100,this.settings.ly=-100,this.settings.prevX=-100,this.settings.prevY=-100,this.settings.frame=0,this.settings.stall=0,this.settings.speed=5,this.settings.height=5,this.settings.width=127,this.settings.size=50,this.settings.eraser=!1,this.settings.replay=!1,this.settings.loop=!1,this.settings.clean=!0}},{key:"controllerPosition",value:function(e){var t=this.controller,s=this.settings;if(e&&!s.clean){(e.axes[t.AXIS_Y]<0||e.axes[t.AXIS_Y]>0||e.axes[t.AXIS_X]>0||e.axes[t.AXIS_X]<0)&&(s.xbox=!0,s.color+=1,s.frame+=1),0===e.axes[t.AXIS_Y]&&0===e.axes[t.AXIS_X]&&s.xbox&&(s.frame=0,s.xbox=!1);for(var i=0;i<e.buttons.length;i+=1)e.buttons[i].pressed?t[n.buttonList[i]]=!0:t[n.buttonList[i]]=!1;s.y+=e.axes[t.AXIS_Y]*t.speed,s.x+=e.axes[t.AXIS_X]*t.speed,t.B||(s.ly=s.prevY,s.lx=s.prevX),s.prevY+=e.axes[t.AXIS_Y]*t.speed,s.prevX+=e.axes[t.AXIS_X]*t.speed,t.LB?s.speed=2.5:t.RB?s.speed=10:s.speed=5,t.Y?(s.r=1,s.g=0,s.b=5):(s.r=2,s.g=0,s.b=4),s.size>=20?(t.RT&&(s.size+=1),t.LT&&(s.size-=1)):s.size=20}}}]),e}();t.default=a},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var s=0;s<t.length;s++){var i=t[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,s,i){return s&&e(t.prototype,s),i&&e(t,i),t}}(),n=a(s(2)),r=a(s(0));function a(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.canvas=document.getElementById(t),this.context=this.canvas.getContext("2d"),this.brush=new n.default(this.canvas,this.context),this.controls=new r.default(this.brush),this.resizeCanvas=this.resizeCanvas.bind(this)}return i(e,[{key:"resizeCanvas",value:function(){var e=this.canvas,t=this.context,s=window.devicePixelRatio;e.width=window.innerWidth*s,e.height=window.innerHeight*s,e.style.width=window.innerWidth,e.style.height=window.innerHeight,t.drawImage(e,0,0)}},{key:"initializeCanvas",value:function(){var e=this.canvas,t=this.brush,s=t.settings;function i(e){s.clean&&(s.clean=!1);var t=void 0,i=void 0;if("mousemove"!==e.type&&"mousedown"!==e.type||(t=e.clientX,i=e.clientY),"touchmove"===e.type||"touchstart"===e.type){var n=e.targetTouches;t=n[0].pageX,i=n[0].pageY,s.size=100*n[0].force}0===s.frame&&(s.prevX=t,s.prevY=i),s.x=t,s.y=i,s.lx=s.prevX,s.ly=s.prevY,s.color+=1,s.frame+=1,s.prevX=t,s.prevY=i}this.resizeCanvas(),window.addEventListener("resize",this.resizeCanvas,!1),e.addEventListener("mouseup",function(){s.frame=0,e.removeEventListener("mousemove",i,!1)},!1),e.addEventListener("touchend",function(){s.frame=0,e.removeEventListener("touchmove",i,!1)},!1),e.addEventListener("touchstart",function(t){s.frame=0,i(t),e.addEventListener("touchmove",i,!1)},!1),e.addEventListener("mousedown",function(t){s.frame=0,i(t),e.addEventListener("mousemove",i,!1)},!1);var n=navigator.getGamepads(),r=void 0;!function e(){window.requestAnimationFrame(e,1e3/60);for(var i=0;i<n.length;i+=1)null!==n[i]&&"standard"===n[i].mapping&&(r=n[i]);s.replay?t.replay():t.draw(r)}()}}]),e}();t.default=o},function(e,t,s){"use strict";var i,n=s(3);new((i=n)&&i.__esModule?i:{default:i}).default("doodleCanvas").initializeCanvas()}]);