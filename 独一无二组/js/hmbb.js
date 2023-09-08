
	ad=document.getElementById("ad");
	x=0;
	y=0;
	yv=4;
	xv=4;
	function fun(){
		if(x<0||x>window.innerWidth-ad.offsetWidth){
			xv=-xv;
		}
		
		if(y<0||y>window.innerHeight-ad.offsetHeight){
			yv=-yv;
		}
		x+=xv;
		y+=yv;
		
		ad.style.left=x+"px";
		
		ad.style.top=y+"px";
	}
	mytime=setInterval(fun,100);
	 
	
	ad.οnmοuseοver=function(){
		
		clearInterval(mytime);
	}
	
	ad.οnmοuseοut=function(){
		mytime=setInterval(fun,1000);
	}
	 function $(id) {return document.getElementById(id);}   //id函数
	function hide(id){
	    $(id).style.display = "none";
	}
	function play(){
	    $(id).style.display = "block";
	} 
	 
	setTimeout(closeAd,5000);
	function closeAd(){
	    hide("left");
	    hide("right");
	}
	