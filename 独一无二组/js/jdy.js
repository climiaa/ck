var cloud = document.querySelector(".cloud");
		var nav = document.getElementById("head");
		var lis = nav.children[1].children;
		var current = 0;
		for(var i=0;i<lis.length;i++)
		{
			lis[i].onmouseover = function(){
				target = this.offsetLeft;
			}
			lis[i].onmouseout = function(){
				target = current;
			}
		}
		var leader = 0,target = 0;
		setInterval(function(){
			leader = leader+(target - leader)/20;
			cloud.style.left = leader + "px";
		},20);