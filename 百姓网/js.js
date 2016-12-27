	var f=document.getElementById("fl");
		
		var lb1=document.getElementById("lb1");
		var lb2=document.getElementById("lb2");
		
		
			f.onmouseover=function(){
					var lb=this.getElementsByTagName("div")[0];
					lb.style.display="block";
			}
			f.onmouseout=function(){
				var lb=this.getElementsByTagName("div")[0];
					lb.style.display="none";
			}
			lb1.onmouseover=function(){	
				var ej1=this.getElementsByTagName("div")[0];
					ej1.style.display="block";
			}
			lb1.onmouseout=function(){	
				var ej1=this.getElementsByTagName("div")[0];
					ej1.style.display="none";
			}
			lb2.onmouseover=function(){	
				var ej2=this.getElementsByTagName("div")[0];
					ej2.style.display="block";
			}
			lb2.onmouseout=function(){
				var ej2=this.getElementsByTagName("div")[0];
					ej2.style.display="none";
			}
		var pics=document.getElementsByTagName("img");//获取所有img
		var btn=document.getElementById("btn");
		var prev=document.getElementById("prev");
		var next=document.getElementById("next");
		var b=document.getElementById("dgd2");
		var s=document.getElementById("ico").getElementsByTagName("span");
		var index=2;
		var timer;
		fadeOut(pics[0]);
		fadeOut(pics[1]);
		prev.onclick=function(){  //往前翻
			if(index==0){
				fadeOut(pics[index]); //index 是0
				index=2;
				fadeIn(pics[index]); //index是2
			}else{
				fadeOut(pics[index]);
				fadeIn(pics[index-1]);
				index--;
			}
			showButton();//让下方小图标和图片切换对象
		}
		next.onclick=function(){
			if(index==2){
				fadeOut(pics[index]);
				index=0;
				fadeIn(pics[index]);
			}else{
				fadeOut(pics[index]);
				fadeIn(pics[index+1]);
				index++;
			}
			showButton();//让下方小图标和图片切换对象
		}
		function autoPlay(){   //设置定时器
			timer=setInterval("next.onclick()",2000);
		}
		autoPlay();
		function stop(){   //清除定时器
			clearInterval(timer);
		}
		b.onmouseover=function(){ //鼠标放到div上 清除定时器  按钮出现
			stop();
			prev.style.display="inline-block";
			next.style.display="inline-block";
		}
		b.onmouseout=function(){
			autoPlay();
			prev.style.display="none";
			next.style.display="none";
		}
		//控制小按钮的样式
		function showButton(){
			for(var j=0;j<s.length;j++){
				s[j].className="";
			}
			s[index].className="on";
		}
		for(var k=0;k<s.length;k++){
			s[k].onclick=function(){//给下方的小圆点添加点击事件
				if(this.className=="on"){//优化  如果点击是当前的小圆点  不再执行下方的语句
					return;
				}
				var newIndex=this.getAttribute("index");//点击谁的时候 获取谁的index
				fadeIn(pics[newIndex]);//显示点击新的index对应图片
				fadeOut(pics[index]);//把之前正在显示的老的图片消失
				index=newIndex;
				showButton();
//				debugger;
			}
		}
		//透明度兼容写法
		function setOpacity(elem,level){
			if(elem.filters){
				elem.style.filter="alpha(opacity="+level+")";
			}else{
				elem.style.opacity=level/100;
			}
		}
		//淡入效果
		function fadeIn(elem){
			for(var i=0;i<=100;i++){
				(function(){
					var po=i;
					setTimeout(function(){
						setOpacity(elem,po);
					},po*10);
				})();
			}
		}
		//淡出效果
		function fadeOut(elem){
			for(var i=0;i<=100;i++){
				(function(){
					var po=i;
					setTimeout(function(){
						setOpacity(elem,po);
					},(100-po)*10);
				})();
			}
		}
	
		//tab切换
		var jc=document.getElementById("jcdh").getElementsByTagName("li");
		var xnav=document.getElementsByName("xnav");
		for (var i=0;i<jc.length;i++) {
			jc[i].onclick=function(){
				add(this);
		}}
			function add(o){
				for(var j=0;j<xnav.length;j++){
					if(jc[j]==o){
//						jc[j].className="xxx";
						xnav[j].className="xxx"
					}else{
//						jc[j].className="";
						xnav[j].className="xnav1";
					}
				}
			}
			
	//无缝滚动
		var b2=document.getElementById("BB1");
		var c1=document.getElementById("cc1");
		c1.innerHTML+=c1.innerHTML;//自身内容变为原来二倍
		var timer1,t1;
		var iWidth=580;
		var speed1=1000;
		var m1=20;
		function scrollL(){
			if(b2.scrollLeft%iWidth==0){   //往上卷去的距离正好能够除尽li的高
				clearInterval(timer1); //停止计时器
				t1=setTimeout(startMove,speed1);   //延迟1s继续触发startMove
			}
			if(b2.scrollLeft>=c1.scrollWidth/2){   //如果往上卷去的高度大于等于ul高度的一半时
//				b.scrollTop=0;//让ul瞬间回到原点  scrollTop=0
				b2.scrollLeft-=c1.scrollWidth/2;
			}else{
				b2.scrollLeft++;  //否则，继续往上＋1
			}
		}
		function startMove(){
			b2.scrollLeft++;
			timer1=setInterval("scrollL()",m1);
		}
		startMove();
		b2.onmouseover=function(){
			clearInterval(timer1);
			clearTimeout(t1);
		}
		b2.onmouseout=function(){
			timer=setInterval("scrollL()",m1);
		}


		var b3=document.getElementById("BB");
		var c2=document.getElementById("cc");
		c2.innerHTML+=c2.innerHTML;//自身内容变为原来二倍
		var timer,t;
		var iHeight=360;
		var speed=1000;
		var m=20;
		function scrollT(){
			if(b3.scrollTop%iHeight==0){   //往上卷去的距离正好能够除尽li的高
				clearInterval(timer); //停止计时器
				t=setTimeout(startMove1,speed);   //延迟1s继续触发startMove
			}
			if(b3.scrollTop>=c2.scrollHeight/2){   //如果往上卷去的高度大于等于ul高度的一半时
//				b.scrollTop=0;//让ul瞬间回到原点  scrollTop=0
				b3.scrollTop-=c2.scrollHeight/2;
			}else{
				b3.scrollTop++;  //否则，继续往上＋1
			}
		}
		
		function startMove1(){
			b3.scrollTop++;
			timer=setInterval("scrollT()",m);
		}
		startMove1();
		b3.onmouseover=function(){
			clearInterval(timer);
			clearTimeout(t);
		}
		b3.onmouseout=function(){
			timer=setInterval("scrollT()",m);
		}
		

		