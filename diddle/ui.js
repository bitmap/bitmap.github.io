!function(){"use strict";function t(){var t,i=document.createElement("canvas"),e=i.getContext("2d");i.width=window.innerWidth,i.height=window.innerHeight,e.fillStyle=t,e.fillRect(0,0,window.innerWidth,window.innerHeight),e.drawImage(a,0,0),a.width=window.innerWidth,a.height=window.innerHeight,g.drawImage(i,0,0)}function i(t,i){var e=t.getBoundingClientRect();return{x:i.clientX-e.left,y:i.clientY-e.top}}function e(t,i,e,s){var n,h,o,r,d,a,g;void 0===t&&(t=0),d=128,a=127,g=2*Math.PI/10;for(var u=0;100>u;++u)h=Math.sin(g*u+i+t)*a+d,o=Math.sin(g*u+e+t)*a+d,r=Math.sin(g*u+s+t)*a+d,n="rgb("+Math.round(h)+","+Math.round(o)+","+Math.round(r)+")";return n}function s(){this.settings={x:window.innerWidth/2,y:window.innerHeight/2,r:2,g:0,b:4,height:5,width:5,size:100,up:!1,down:!1,left:!1,right:!1,A:!1,B:!1,X:!1,Y:!1,RT:!1,LT:!1,RB:!1,LB:!1,speed:5,color:0,AxisX:0,AxisY:1,render:function(){this.updatePosition(),g.beginPath(),g.arc(this.x,this.y,this.size,0,2*Math.PI),g.fillStyle=e(this.color/15,this.r,this.g,this.b),g.fill()},updatePosition:function(){void 0!==o&&(this.up?this.y=this.y+o.axes[this.AxisY]*this.speed:!1,this.down?this.y=this.y+o.axes[this.AxisY]*this.speed:!1,this.left?this.x=this.x+o.axes[this.AxisX]*this.speed:!1,this.right?this.x=this.x+o.axes[this.AxisX]*this.speed:!1),this.LB?this.speed=2.5:this.RB?this.speed=10:this.speed=5,this.Y?(this.r=1,this.g=0,this.b=5):(this.r=2,this.g=0,this.b=4),this.size>=20?(this.RT?this.size++:!1,this.LT?this.size--:!1):this.size=20}}}function n(){l.forEach(function(t){t.render()})}function h(){a.addEventListener("touchmove",function(t){var e=i(a,t),s=("Mouse position: "+e.x+","+e.y,t.targetTouches[0].force);console.log(t.targetTouches[0].force),w.x=t.targetTouches[0].pageX,w.y=t.targetTouches[0].pageY,w.color++,w.size=100*s,console.log(w.size)},!1)}document.body.addEventListener("touchmove",function(t){t.preventDefault()});var o,r,d;window.addEventListener("gamepadconnected",function(){o=navigator.getGamepads()[0],r=o.buttons,d=[],d[0]="A",d[1]="B",d[2]="X",d[3]="Y",d[4]="LB",d[5]="RB",d[6]="LT",d[7]="RT",d[8]="SEL",d[9]="STR",d[10]="L3",d[11]="R3",d[12]="up",d[13]="down",d[14]="left",d[15]="right",d[16]="sync"});var a=document.getElementById("game"),g=a.getContext("2d");window.addEventListener("resize",t,!1),t();var u=new s,c=new s,w=u.settings,x=c.settings;x.AxisY=3,x.AxisX=2;var l=[w];window.addEventListener("load",h,!1),function f(){if(window.requestAnimationFrame(f,1e3/60),w.X||(w.up||w.down||w.left||w.right)&&w.color++,x.X||(x.up||x.down||x.left||x.right)&&x.color++,void 0!==o)for(var t=0;t<r.length;t++)o.axes[w.AxisY]<0?w.up=!0:w.up=!1,o.axes[w.AxisY]>0?w.down=!0:w.down=!1,o.axes[w.AxisX]>0?w.right=!0:w.right=!1,o.axes[w.AxisX]<0?w.left=!0:w.left=!1,o.axes[x.AxisY]<0?x.up=!0:x.up=!1,o.axes[x.AxisY]>0?x.down=!0:x.down=!1,o.axes[x.AxisX]>0?x.right=!0:x.right=!1,o.axes[x.AxisX]<0?x.left=!0:x.left=!1,r[t].pressed?w[d[t]]=!0:w[d[t]]=!1,r[t].pressed?x[d[t]]=!0:x[d[t]]=!1;n()}()}();
