/* 
* commen JavaScript
* write by liulei 2014-4-27
*/
/* 文档加载完毕后 */
 $(document).ready(function(){
 	docReady();
});

//阻止浏览器的默认行为
    function stopDefault( e ) {
        //阻止默认浏览器动作(W3C)
        if ( e && e.preventDefault )
            e.preventDefault();
        //IE中阻止函数器默认动作的方式
        else
    		window.event.returnValue = false;
        return false;
    }

//文档加载完成
	function docReady(){
		//瀑布流 首页
		if($("#index_falls").length >0){

		// var wookmark = new Wookmark('#index_falls', {
	 //          // Prepare layout options.
	 //          autoResize: true, // This will auto-update the layout when the browser window is resized.
	 //          container: $('#index_falls_main'), // Optional, used for some extra CSS styling
	 //          offset: 10, // Optional, the distance between grid items
	 //          outerOffset: 0, // Optional, the distance to the containers border
	 //          itemWidth: 400 // Optional, the width of a grid item
	 //      });
		
			//首页ajax加载更多
			/* $("#add").on("click",function(){
				$("#index_falls").append('<div class="index_block type_media">222</div>');
				 // Update the layout.
        		wookmark.initItems();
        		wookmark.layout(true);
				return false;
			}); */

		(function(){

		  var handler = null,
          page = 1,
          isLoading = false,
          apiURL = '/search.php/fall/',
          container = '#index_falls',
          $loaderCircle = $('#loadding'),
          wookmark = undefined,
          options = {
          	autoResize: true,
          	container: $('#index_falls_main'),
            offset: 10, // Optional, the distance between grid items
            itemWidth: 400, // Optional, the width of a grid item
            outerOffset: 0
          };

          function onScroll(event) {
	        // Only check when we're not still waiting for data.
	        if(!isLoading) {
	          // Check if we're within 100 pixels of the bottom edge of the broser window.
	          var closeToBottom = ($(window).scrollTop() + $(window).height() > $(document).height() - 100);
	          if (closeToBottom) {
	            loadData();
	          }
	        }
	      };

	      /**
	       * 刷新布局 after all images have loaded
	       */
	      function applyLayout() {
	        //imagesLoaded(container, function () {
	          if (wookmark === undefined) {
	            wookmark = new Wookmark(container, {
	            	autoResize: true, 
	            	offset: 10, // Optional, the distance between grid items
	            	itemWidth: 400, // Optional, the width of a grid item
	            	outerOffset: 0
	            });
	          } else {
	            /* wookmark.initItems();
	            wookmark.layout(true, function () {
		            // Fade in items after layout
		            // setTimeout(function() {
		            //  $('#index_falls .index_block').css('opacity', 1);
			            // }, 300);
			       
			       isLoading = false;
			       console.log('loaded');
		        }); */
		        wookmark.initItems();
		        wookmark.layout(true, function() {});
	          }
	       //});
	      };

	      /**
	       * Loads data from the API.
	       */
	      function loadData() {
	        isLoading = true;
	        $loaderCircle.show();

	        /* $.ajax({
	          url: apiURL,
	          dataType: 'jsonp',
	          data: {page: page}, // Page parameter to make sure we load new data
	          success: onLoadData
	        }); */

			$.get(apiURL+page, function(data,status){
				onLoadData(data);
			})	
	      };

	      /**
       * Receives data from the API, creates HTML for images and updates the layout
       */
      function onLoadData(domeobj) {

	        $loaderCircle.hide();

	        // Increment page index for future calls.
	        page++;

	        // Create HTML for the images.

	        // var html = '';
	        // var i=0, length=data.length, image;
	        // for(; i<length; i++) {
	        //   image = data[i];
	        //   html += '<div class="index_block" style="opacity:0;">';

	        //   // Image tag (preview in Wookmark are 200px wide, so we calculate the height based on that).
	        //   html += '<img src="'+image.preview+'" width="200" height="'+Math.round(image.height/image.width*200)+'">';

	        //   // Image title.
	        //   html += '<p>'+image.title+'</p>';

	        //   html += '</div>';
	        // }

	        //data应该是ajax请求到的json数据对象，在此暂时以js对象代替。
	        /* 示例数据 star */
	        var domeobj_test = [
	        	{
	        		type:"text",
	        		id:"1",
	        		title:"学会转弯也是人生的智慧",
	        		img:"",
	        		date:"2015年6月1日",
	        		authour:"佚名",
	        		context:"对于一些野生动物研究者来说，天天都是万圣节。他们装扮成各种野生动物的模样，几乎可以以假乱真。",
	        		url:"#1234",
	        		love:"3",
	        		favo:"10",
	        		comment:"5",
	        		favoed:true
	        	},
	        	{
	        		type:"img",
	        		id:"2",
	        		title:"学会转弯也是人生的智慧",
	        		img:"pic/index_29.jpg",
	        		img_num:"15",
	        		date:"2015年6月1日",
	        		authour:"佚名",
	        		context:"对于一些野生动物研究者来说，天天都是万圣节。他们装扮成各种野生动物的模样，几乎可以以假乱真。",
	        		url:"#1234",
	        		love:"3",
	        		favo:"10",
	        		comment:"5",
	        		favoed:false
	        	},
	        	{
	        		type:"audio",
	        		id:"12",
	        		title:"学会转弯也是人生的智慧",
	        		img:"pic/index_29.jpg",
	        		img_num:"15",
	        		date:"2015年6月1日",
	        		authour:"佚名",
	        		context:"对于一些野生动物研究者来说，天天都是万圣节。他们装扮成各种野生动物的模样，几乎可以以假乱真。",
	        		url:"#1234",
	        		love:"3",
	        		favo:"10",
	        		comment:"5",
	        		favoed:true
	        	},
	        	{
	        		type:"video",
	        		id:"15",
	        		img:"pic/index_29.jpg",
	        		img_num:"15",
	        		title:"学会转弯也是人生的智慧",
	        		date:"2015年6月1日",
	        		authour:"佚名",
	        		context:"对于一些野生动物研究者来说，天天都是万圣节。他们装扮成各种野生动物的模样，几乎可以以假乱真。",
	        		url:"#1234",
	        		love:"3",
	        		favo:"10",
	        		comment:"5",
	        		favoed:false
	        	}
	        ];
	        /* 示例数据 end */
	        domeobj = jQuery.parseJSON(domeobj);

	        if (!domeobj.length) {
	        	$(document).unbind('scroll', onScroll);
	        	return false;
	        }

	        for (var i = 0; i < domeobj.length; i++) {
		        var data = new Object();
		        data.domeobj = domeobj[i];
		        
		        var html = template('tmpIndexFalls', data);//以模板引擎渲染成html
		
		        // Add image HTML to the page.
		        $(container).append(html);
	
		        // Apply layout.
		        applyLayout();
		    }
	        
			isLoading = false;
	      };

	      // Capture scroll event.
	      $(document).bind('scroll', onScroll);

	      
	      loadData(); // 首次ajax加载列表.如果初始页面无数据，完全从ajax请求，则启用此方法。
	      // applyLayout(); // 如果初始页面有数据，拉倒底部后再从ajax请求，则启用此方法。


		})()

		}


		//瀑布流 图片
		if($("#pic_falls").length >0){
		 $(window).load(function(){
			var wookmark2 = new Wookmark('#pic_falls', {
	          // Prepare layout options.
	          autoResize: true, // This will auto-update the layout when the browser window is resized.
	          container: $('#pic_falls_main'), // Optional, used for some extra CSS styling
	          offset: 10, // Optional, the distance between grid items
	          outerOffset: 0, // Optional, the distance to the containers border
	          itemWidth: 220 // Optional, the width of a grid item
	      });
		});
		}



		$(document).on("click",".icons_warp a",function(e){
			stopDefault( e ) ;
		})
		

		function checkAjax(url, data){
			var html = $.ajax({
			  url: url,
			  method: 'post',
			  data: data,
			  dataType: "json",
			  async: false
			}).responseText;
			eval("var obj="+html);
			return obj;
		}

		$(document).on("click",".icons_warp_active a",function(e){
			stopDefault( e ) ;
			if($(this).find(".icon_love").length >0 || $(this).find(".icon_star").length >0){
				var doFlag = 1;
				if( $(this).find(".icon_love").length >0 ) {
					if( !$(this).find("i").hasClass('issub') ){
						var res = checkAjax( $(this).attr('suburl') );	
						if(res.status=='y') {
							$(this).find("i").addClass("on");
			            	doFlag = 2;
			            } else {
			            	alert(res.msg);
			            }
			        }
				}
				if( $(this).find(".icon_star").length >0 ) {
					if( $(this).attr('uid') ) {
						var res = checkAjax( $(this).attr('suburl') );	
						if(res.status=='y') {
			            	doFlag = 3;
			            } else {
			            	alert(res.msg);
			            }
			        } else {
			        	alert('登录后方可收藏！');
			        }
				}
				if( doFlag == 3 ) {
					if($(this).find("i").hasClass('on')){
						$(this).find("i").removeClass("on");
						//alert($(this).attr("data-id"));
						$(this).find(".show_no").text( parseInt($(this).find(".show_no").text())-1 );
					}else{
						$(this).find("i").addClass("on");
						//alert($(this).attr("data-id"));
						$(this).find(".show_no").text( parseInt($(this).find(".show_no").text())+1 );
					}
				}
				if( doFlag == 2 ) {
					if($(this).find("i").hasClass('on')){
						//$(this).find("i").removeClass("on");
						$(this).find("i").addClass("issub");
						$(this).find(".show_no").text( parseInt($(this).find(".show_no").text())+1 );
					}
				}

				
			}
		})

		if($('#gallery').length >0){
			$('#gallery').adGallery();
		}
		var video_player = $("#video_player");
		if(video_player.length>0){
			var vurl = video_player.attr("vurl");
			var imgurl = video_player.attr("imgurl");
			var swfurl= video_player.attr("swfurl");
			var skinurl = video_player.attr("skinurl");
			var iv = new SWFObject(swfurl,"ply","680","380","10","#000000");
			iv.addParam("allowfullscreen","true");
			iv.addParam("allowscriptaccess","always");
			iv.addParam("controlbar","false");
			iv.addParam("menu","true"); 
			iv.addParam("fontcolor","#ffff00");
			iv.addParam("classid","clsid:D27CDB6E-AE6D-11cf-96B8-444553540000");
			iv.addParam("flashvars","volume=100&file="+vurl+"&image="+imgurl+"&autostart=false&controlbar.idlehide=true&controlbar=over&skin="+skinurl);
			iv.write("video_player");
		}
		if($("#jquery_jplayer_1").length >0){
			var jquery_jplayer = $("#jquery_jplayer_1");
			jquery_jplayer.jPlayer({
				ready: function () {
					$(this).jPlayer("setMedia", {
						title: jquery_jplayer.attr("data-title"),
						mp3: jquery_jplayer.attr("data-music")
					});
				},
				swfPath: jquery_jplayer.attr("data-swf"),
				supplied: "mp3",
				wmode: "window",
				useStateClassSkin: true,
				autoBlur: false,
				smoothPlayBar: true,
				keyEnabled: true,
				remainingDuration: true,
				toggleDuration: true
			});
		}

		//初始化富文本编辑器
		if($("#textarea").length >0){
			var ue = UE.getEditor('textarea');
		}
			

		//搜索框
		$("#top_search_warp").on({
			"mouseenter":function(){
				$(this).addClass("on");
		},"mouseleave":function(){
				$(this).removeClass("on");
		}});
		$("#top_search_warp .icon_close").on("click",function(){
			$("#top_search_warp").removeClass("on");
		})

		//左上角用户展开收藏
		$("#header .user_bar").on({
			"mouseenter":function(){
				$(this).addClass("on");
		},"mouseleave":function(){
				$(this).removeClass("on");
		}});
		
		/*!
			Colorbox v1.4.29 - 2013-09-10
			jQuery lightbox and modal window plugin
			(c) 2013 Jack Moore - http://www.jacklmoore.com/colorbox
			license: http://www.opensource.org/licenses/mit-license.php
		*/
		(function(t,e,i){function o(i,o,n){var r=e.createElement(i);return o&&(r.id=Z+o),n&&(r.style.cssText=n),t(r)}function n(){return i.innerHeight?i.innerHeight:t(i).height()}function r(t){var e=k.length,i=(A+t)%e;return 0>i?e+i:i}function h(t,e){return Math.round((/%/.test(t)?("x"===e?E.width():n())/100:1)*parseInt(t,10))}function l(t,e){return t.photo||t.photoRegex.test(e)}function s(t,e){return t.retinaUrl&&i.devicePixelRatio>1?e.replace(t.photoRegex,t.retinaSuffix):e}function a(t){"contains"in g[0]&&!g[0].contains(t.target)&&(t.stopPropagation(),g.focus())}function d(){var e,i=t.data(z,Y);null==i?(B=t.extend({},X),console&&console.log&&console.log("Error: cboxElement missing settings object")):B=t.extend({},i);for(e in B)t.isFunction(B[e])&&"on"!==e.slice(0,2)&&(B[e]=B[e].call(z));B.rel=B.rel||z.rel||t(z).data("rel")||"nofollow",B.href=B.href||t(z).attr("href"),B.title=B.title||z.title,"string"==typeof B.href&&(B.href=t.trim(B.href))}function c(i,o){t(e).trigger(i),le.trigger(i),t.isFunction(o)&&o.call(z)}function u(i){q||(z=i,d(),k=t(z),A=0,"nofollow"!==B.rel&&(k=t("."+te).filter(function(){var e,i=t.data(this,Y);return i&&(e=t(this).data("rel")||i.rel||this.rel),e===B.rel}),A=k.index(z),-1===A&&(k=k.add(z),A=k.length-1)),w.css({opacity:parseFloat(B.opacity),cursor:B.overlayClose?"pointer":"auto",visibility:"visible"}).show(),J&&g.add(w).removeClass(J),B.className&&g.add(w).addClass(B.className),J=B.className,B.closeButton?K.html(B.close).appendTo(y):K.appendTo("<div/>"),U||(U=$=!0,g.css({visibility:"hidden",display:"block"}),H=o(se,"LoadedContent","width:0; height:0; overflow:hidden"),y.css({width:"",height:""}).append(H),O=x.height()+C.height()+y.outerHeight(!0)-y.height(),_=b.width()+T.width()+y.outerWidth(!0)-y.width(),D=H.outerHeight(!0),N=H.outerWidth(!0),B.w=h(B.initialWidth,"x"),B.h=h(B.initialHeight,"y"),H.css({width:"",height:B.h}),Q.position(),c(ee,B.onOpen),P.add(L).hide(),g.focus(),B.trapFocus&&e.addEventListener&&(e.addEventListener("focus",a,!0),le.one(re,function(){e.removeEventListener("focus",a,!0)})),B.returnFocus&&le.one(re,function(){t(z).focus()})),m())}function f(){!g&&e.body&&(V=!1,E=t(i),g=o(se).attr({id:Y,"class":t.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),w=o(se,"Overlay").hide(),F=t([o(se,"LoadingOverlay")[0],o(se,"LoadingGraphic")[0]]),v=o(se,"Wrapper"),y=o(se,"Content").append(L=o(se,"Title"),S=o(se,"Current"),I=t('<button type="button"/>').attr({id:Z+"Previous"}),R=t('<button type="button"/>').attr({id:Z+"Next"}),M=o("button","Slideshow"),F),K=t('<button type="button"/>').attr({id:Z+"Close"}),v.append(o(se).append(o(se,"TopLeft"),x=o(se,"TopCenter"),o(se,"TopRight")),o(se,!1,"clear:left").append(b=o(se,"MiddleLeft"),y,T=o(se,"MiddleRight")),o(se,!1,"clear:left").append(o(se,"BottomLeft"),C=o(se,"BottomCenter"),o(se,"BottomRight"))).find("div div").css({"float":"left"}),W=o(se,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),P=R.add(I).add(S).add(M),t(e.body).append(w,g.append(v,W)))}function p(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),u(this))}return g?(V||(V=!0,R.click(function(){Q.next()}),I.click(function(){Q.prev()}),K.click(function(){Q.close()}),w.click(function(){B.overlayClose&&Q.close()}),t(e).bind("keydown."+Z,function(t){var e=t.keyCode;U&&B.escKey&&27===e&&(t.preventDefault(),Q.close()),U&&B.arrowKey&&k[1]&&!t.altKey&&(37===e?(t.preventDefault(),I.click()):39===e&&(t.preventDefault(),R.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+Z,"."+te,i):t("."+te).live("click."+Z,i)),!0):!1}function m(){var n,r,a,u=Q.prep,f=++ae;$=!0,j=!1,z=k[A],d(),c(he),c(ie,B.onLoad),B.h=B.height?h(B.height,"y")-D-O:B.innerHeight&&h(B.innerHeight,"y"),B.w=B.width?h(B.width,"x")-N-_:B.innerWidth&&h(B.innerWidth,"x"),B.mw=B.w,B.mh=B.h,B.maxWidth&&(B.mw=h(B.maxWidth,"x")-N-_,B.mw=B.w&&B.w<B.mw?B.w:B.mw),B.maxHeight&&(B.mh=h(B.maxHeight,"y")-D-O,B.mh=B.h&&B.h<B.mh?B.h:B.mh),n=B.href,G=setTimeout(function(){F.show()},100),B.inline?(a=o(se).hide().insertBefore(t(n)[0]),le.one(he,function(){a.replaceWith(H.children())}),u(t(n))):B.iframe?u(" "):B.html?u(B.html):l(B,n)?(n=s(B,n),j=e.createElement("img"),t(j).addClass(Z+"Photo").bind("error",function(){B.title=!1,u(o(se,"Error").html(B.imgError))}).one("load",function(){var e;f===ae&&(j.alt=t(z).attr("alt")||t(z).attr("data-alt")||"",B.retinaImage&&i.devicePixelRatio>1&&(j.height=j.height/i.devicePixelRatio,j.width=j.width/i.devicePixelRatio),B.scalePhotos&&(r=function(){j.height-=j.height*e,j.width-=j.width*e},B.mw&&j.width>B.mw&&(e=(j.width-B.mw)/j.width,r()),B.mh&&j.height>B.mh&&(e=(j.height-B.mh)/j.height,r())),B.h&&(j.style.marginTop=Math.max(B.mh-j.height,0)/2+"px"),k[1]&&(B.loop||k[A+1])&&(j.style.cursor="pointer",j.onclick=function(){Q.next()}),j.style.width=j.width+"px",j.style.height=j.height+"px",setTimeout(function(){u(j)},1))}),setTimeout(function(){j.src=n},1)):n&&W.load(n,B.data,function(e,i){f===ae&&u("error"===i?o(se,"Error").html(B.xhrError):t(this).contents())})}var w,g,v,y,x,b,T,C,k,E,H,W,F,L,S,M,R,I,K,P,B,O,_,D,N,z,A,j,U,$,q,G,Q,J,V,X={transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,className:!1,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",open:!1,returnFocus:!0,trapFocus:!0,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0},Y="colorbox",Z="cbox",te=Z+"Element",ee=Z+"_open",ie=Z+"_load",oe=Z+"_complete",ne=Z+"_cleanup",re=Z+"_closed",he=Z+"_purge",le=t("<a/>"),se="div",ae=0,de={},ce=function(){function t(){clearTimeout(h)}function e(){(B.loop||k[A+1])&&(t(),h=setTimeout(Q.next,B.slideshowSpeed))}function i(){M.html(B.slideshowStop).unbind(s).one(s,o),le.bind(oe,e).bind(ie,t),g.removeClass(l+"off").addClass(l+"on")}function o(){t(),le.unbind(oe,e).unbind(ie,t),M.html(B.slideshowStart).unbind(s).one(s,function(){Q.next(),i()}),g.removeClass(l+"on").addClass(l+"off")}function n(){r=!1,M.hide(),t(),le.unbind(oe,e).unbind(ie,t),g.removeClass(l+"off "+l+"on")}var r,h,l=Z+"Slideshow_",s="click."+Z;return function(){r?B.slideshow||(le.unbind(ne,n),n()):B.slideshow&&k[1]&&(r=!0,le.one(ne,n),B.slideshowAuto?i():o(),M.show())}}();t.colorbox||(t(f),Q=t.fn[Y]=t[Y]=function(e,i){var o=this;if(e=e||{},f(),p()){if(t.isFunction(o))o=t("<a/>"),e.open=!0;else if(!o[0])return o;i&&(e.onComplete=i),o.each(function(){t.data(this,Y,t.extend({},t.data(this,Y)||X,e))}).addClass(te),(t.isFunction(e.open)&&e.open.call(o)||e.open)&&u(o[0])}return o},Q.position=function(e,i){function o(){x[0].style.width=C[0].style.width=y[0].style.width=parseInt(g[0].style.width,10)-_+"px",y[0].style.height=b[0].style.height=T[0].style.height=parseInt(g[0].style.height,10)-O+"px"}var r,l,s,a=0,d=0,c=g.offset();if(E.unbind("resize."+Z),g.css({top:-9e4,left:-9e4}),l=E.scrollTop(),s=E.scrollLeft(),B.fixed?(c.top-=l,c.left-=s,g.css({position:"fixed"})):(a=l,d=s,g.css({position:"absolute"})),d+=B.right!==!1?Math.max(E.width()-B.w-N-_-h(B.right,"x"),0):B.left!==!1?h(B.left,"x"):Math.round(Math.max(E.width()-B.w-N-_,0)/2),a+=B.bottom!==!1?Math.max(n()-B.h-D-O-h(B.bottom,"y"),0):B.top!==!1?h(B.top,"y"):Math.round(Math.max(n()-B.h-D-O,0)/2),g.css({top:c.top,left:c.left,visibility:"visible"}),v[0].style.width=v[0].style.height="9999px",r={width:B.w+N+_,height:B.h+D+O,top:a,left:d},e){var u=0;t.each(r,function(t){return r[t]!==de[t]?(u=e,void 0):void 0}),e=u}de=r,e||g.css(r),g.dequeue().animate(r,{duration:e||0,complete:function(){o(),$=!1,v[0].style.width=B.w+N+_+"px",v[0].style.height=B.h+D+O+"px",B.reposition&&setTimeout(function(){E.bind("resize."+Z,Q.position)},1),i&&i()},step:o})},Q.resize=function(t){var e;U&&(t=t||{},t.width&&(B.w=h(t.width,"x")-N-_),t.innerWidth&&(B.w=h(t.innerWidth,"x")),H.css({width:B.w}),t.height&&(B.h=h(t.height,"y")-D-O),t.innerHeight&&(B.h=h(t.innerHeight,"y")),t.innerHeight||t.height||(e=H.scrollTop(),H.css({height:"auto"}),B.h=H.height()),H.css({height:B.h}),e&&H.scrollTop(e),Q.position("none"===B.transition?0:B.speed))},Q.prep=function(i){function n(){return B.w=B.w||H.width(),B.w=B.mw&&B.mw<B.w?B.mw:B.w,B.w}function h(){return B.h=B.h||H.height(),B.h=B.mh&&B.mh<B.h?B.mh:B.h,B.h}if(U){var a,d="none"===B.transition?0:B.speed;H.empty().remove(),H=o(se,"LoadedContent").append(i),H.hide().appendTo(W.show()).css({width:n(),overflow:B.scrolling?"auto":"hidden"}).css({height:h()}).prependTo(y),W.hide(),t(j).css({"float":"none"}),a=function(){function i(){t.support.opacity===!1&&g[0].style.removeAttribute("filter")}var n,h,a=k.length,u="frameBorder",f="allowTransparency";U&&(h=function(){clearTimeout(G),F.hide(),c(oe,B.onComplete)},L.html(B.title).add(H).show(),a>1?("string"==typeof B.current&&S.html(B.current.replace("{current}",A+1).replace("{total}",a)).show(),R[B.loop||a-1>A?"show":"hide"]().html(B.next),I[B.loop||A?"show":"hide"]().html(B.previous),ce(),B.preloading&&t.each([r(-1),r(1)],function(){var i,o,n=k[this],r=t.data(n,Y);r&&r.href?(i=r.href,t.isFunction(i)&&(i=i.call(n))):i=t(n).attr("href"),i&&l(r,i)&&(i=s(r,i),o=e.createElement("img"),o.src=i)})):P.hide(),B.iframe?(n=o("iframe")[0],u in n&&(n[u]=0),f in n&&(n[f]="true"),B.scrolling||(n.scrolling="no"),t(n).attr({src:B.href,name:(new Date).getTime(),"class":Z+"Iframe",allowFullScreen:!0,webkitAllowFullScreen:!0,mozallowfullscreen:!0}).one("load",h).appendTo(H),le.one(he,function(){n.src="//about:blank"}),B.fastIframe&&t(n).trigger("load")):h(),"fade"===B.transition?g.fadeTo(d,1,i):i())},"fade"===B.transition?g.fadeTo(d,0,function(){Q.position(0,a)}):Q.position(d,a)}},Q.next=function(){!$&&k[1]&&(B.loop||k[A+1])&&(A=r(1),u(k[A]))},Q.prev=function(){!$&&k[1]&&(B.loop||A)&&(A=r(-1),u(k[A]))},Q.close=function(){U&&!q&&(q=!0,U=!1,c(ne,B.onCleanup),E.unbind("."+Z),w.fadeTo(B.fadeOut||0,0),g.stop().fadeTo(B.fadeOut||0,0,function(){g.add(w).css({opacity:1,cursor:"auto"}).hide(),c(he),H.empty().remove(),setTimeout(function(){q=!1,c(re,B.onClosed)},1)}))},Q.remove=function(){g&&(g.stop(),t.colorbox.close(),g.stop().remove(),w.remove(),q=!1,g=null,t("."+te).removeData(Y).removeClass(te),t(e).unbind("click."+Z))},Q.element=function(){return t(z)},Q.settings=X)})(jQuery,document,window);

		if($.fn.colorbox){
			var servHtml = '<div class="none"><!--在线客服--><div class="dialog_block online_sever" id="onlin_sever"><div class="intr_txt">输入您的电话，我们即刻给您回电</div><div class="input_warp clearfix"><input type="text"placeholder="请输入您的电话"class="type_text"/><input type="submit" vlaue="接通客服" class="type_btn" /></div><div class="intr_txt">输入您的电话，我们即刻给您回电</div><a href="#" class="ask_btn">在线咨询</a><a href="#" class="cbox_close"></a></div></div>';
			$('body').append(servHtml);

			$(".dialog_block .cbox_close,.dialog_block .close_btn").click(function(e){
				stopDefault( e );
				$.colorbox.close();
			});
			/* $("#quick_nav .icon_sever a").attr('href', '#onlin_sever').colorbox({
				inline:true,
				opacity:0.5
			}); */
			$("#quick_nav .icon_sever a").attr('href', 'http://webim.qiao.baidu.com//im/index?siteid=7031568&ucid=10704272').attr('target', '_blank');
		}
		$("#quick_nav .icon_post a").attr('href', '/index.php?m=member&f=index&v=pub');
		$("#quick_nav .icon_login a").attr('href', '/index.php?m=member&f=index&v=login');
		
		

		var snavHtml = '<!--快捷搜索--><div class="search_adv" id="search_adv"><div class="top_search"><form action="http://www.duzhe.com/search.php/search"><input type="text" placeholder="搜索..." class="txt" name="key"><input type="submit" class="sub" value="" /></form></div><div class="searc_list"><h3>栏目</h3><ul class="clearfix"><li><a href="/index.php?v=listing&cid=38&page=1">图书</a></li><li><a href="/index.php?v=listing&cid=45&page=1">音乐</a></li><li><a href="/index.php?v=listing&cid=40&page=1">店面</a></li><li><a href="/index.php?v=listing&cid=43&page=1">视觉</a></li><li><a href="/index.php?v=listing&cid=46&page=1">东西</a></li><li><a href="/index.php?v=listing&cid=41&page=1">游戏</a></li><li><a href="/index.php?v=listing&cid=44&page=1">视频</a></li><li><a href="/index.php?v=listing&cid=39&page=1">文章</a></li><li><a href="/index.php?v=listing&cid=42&page=1">话题</a></li></ul></div><div class="searc_list_mag"><h3>杂志</h3><ul><!--<li><a href="#">本期目录</a></li>--><li><a href="/index.php?v=listing&cid=47&page=1">往期杂志</a></li><li><a href="/index.php?v=listing&cid=54&page=1">杂志订阅</a></li><li><a href="/index.php?v=listing&cid=54&page=1">订数字版</a></li></ul></div><div class="searc_list_about"><h3>关于</h3><ul><li><a href="/index.php?v=listing&cid=49&page=1">关于读者</a></li><li><a href="/index.php?v=listing&cid=51&page=1">联系我们</a></li><li><a href="/index.php?v=listing&cid=50&page=1">招贤纳士</a></li><li><a href="/index.php?v=listing&cid=52&page=1">公告声明</a></li></ul></div><a href="javascript:void(0)" class="icon_close"></a></div>';
		$('body').append(snavHtml);

		$('#quick_nav .btn').css('cursor', 'pointer').click(function(e) {
			e.preventDefault();
			$('#search_adv').fadeIn('fast');
		});

		$('#search_adv .icon_close').click(function(e) {
			e.preventDefault();
			$('#search_adv').fadeOut('fast');
		});



		gototop();

		//统计输入框剩余数字
		(function(){
			if($("#msg_textarea").length >0){
			 var maxstrlen = 400;
			 var msg_textarea = $("#msg_textarea");
			 var char_mun = $("#char_mun");
			 var curLen = 0;
			   function checkWord(c) {
		            len = maxstrlen;
		            var str = c.value;
		            myLen = getStrleng(str);
		            var wck = char_mun[0];
		            if (myLen > len * 2) {
		                c.value = str.substring(0, i + 1);
		            }
		            else {
		                curLen = maxstrlen - Math.floor((len * 2 - myLen) / 2);
		                wck.innerHTML = curLen;
		            }
		        }

		        function getStrleng(str) {
		            myLen = 0;
		            i = 0;
		            for (; (i < str.length) && (myLen <= maxstrlen * 2); i++) {
		                if (str.charCodeAt(i) > 0 && str.charCodeAt(i) < 128)
		                    myLen++;
		                else
		                    myLen += 2;
		            }
		            return myLen;
		        }
		    
		    msg_textarea.on("mousedown keyup",function(){
		    	checkWord(this);
		    	if(curLen > maxstrlen){
		    		return false;
		    	}
		    });
			 }
		})();

		//过往期刊导航
		(function(){
			function getLeft(e){ 
				var offset=e.offsetLeft; 
				if(e.offsetParent!=null) offset+=getLeft(e.offsetParent); 
				return offset; 
				} 
			if($("#mag_nav_ul").length >0){
				var mag_nav_ul = $("#mag_nav_ul");
				var mag_nav_li = $("#mag_nav_ul li");
				var mag_nav_warp = $("#mag_nav_warp");
				var length = mag_nav_li.length;
				var width = $("#mag_nav_ul li:first").width() + 35;
				mag_nav_ul.css("width",width*length);
				 if(mag_nav_warp.width() < mag_nav_ul.width()){
				 	var width_cha = mag_nav_ul.width() - mag_nav_warp.width();
					$("#mag_nav_l").on("click",function(e){
						var mag_nav_warp_p = getLeft(mag_nav_warp[0]);
					 	var mag_nav_ul_p = getLeft(mag_nav_ul[0]);
					 	var mag_nav_cha = mag_nav_ul_p - mag_nav_warp_p;
						if(width_cha > mag_nav_cha){
							var left = mag_nav_ul.css("left");
							mag_nav_ul.css("left",parseInt(left) - width);
						}
					});
					$("#mag_nav_r").on("click",function(e){
						var mag_nav_warp_p = getLeft(mag_nav_warp[0]);
					 	var mag_nav_ul_p = getLeft(mag_nav_ul[0]);
					 	var mag_nav_cha = mag_nav_ul_p - mag_nav_warp_p;
					 	
						if(width_cha > mag_nav_cha  &&  mag_nav_cha <= 0){
							var left = mag_nav_ul.css("left");
							mag_nav_ul.css("left",parseInt(left) + width);
						}
					});
				 }
			}
		})();

		//登录注册页
		$("#page_login .form_block").on({
			"mouseenter":function(){
				$(this).addClass("on").siblings(".form_block").removeClass("on");
		}});

		//用户设置
		$("#user_set .user_set_item .set_btn").on("click",function(){
			$(this).parents(".user_set_item").addClass("on").siblings(".user_set_item").removeClass("on");
		});
		$("#user_set .user_set_item .hide_btn").on("click",function(){
			$(this).parents(".user_set_item").removeClass("on");
		});
		//表单验证
		(function(){
			//显示提示文本
			function showMessage(ele,clazz,msg){

				ele.removeClass('error_item succse_item');
				if(clazz){
					ele.addClass(clazz);
				}

				if(msg){
					ele.find('.error_msg').text(msg);
				}
				if(clazz == "error_item"){
					//ele.find("[data-validtype]").focus();
				}
			}

			//ajax检查是否合法，比如用户名是否存在
			function checkAjax(url, data){
				var html = $.ajax({
				  url: url,
				  method: 'post',
				  data: data,
				  dataType: "json",
				  async: false
				}).responseText;
				eval("var obj="+html);
				//html = "true";//临时
				/* if(html == "true"){
					return true;
				}else{
					return false;
				} */
				return obj;
			}

			//提交按钮禁用
			function disableSubmit(form,disable){
				form.find("[type='submit']")[0].disable = !!disable;
			}


			//检查输入是否合法
			function checkInput(input,e){
					var item = input.parents(".item");
					var validtype = input.attr("data-validtype");
					var emsg="",
					   clazz = "error_item",
					   inputval = input.val();

					if(validtype == "name"){
						//用户名验证
						var vNameFlag = checkAjax("index.php?m=member&f=index&v=public_check_user", input.attr('name')+'='+inputval);
						 if(inputval==""){
						 	emsg = "用户名不能为空";
						 }else if(vNameFlag.status!='n'){ //ajax检查是否存在
						 	emsg = "用户名不存在";
						 }else{
						 	clazz = "succse_item";
						 }
					}
					if(validtype =="reg_name"){
						//注册用户名验证
						var vNameFlag = checkAjax("index.php?m=member&f=index&v=public_check_user", input.attr('name')+'='+inputval);
						 if(inputval==""){
						 	emsg = "用户名不能为空";
						 }else if(vNameFlag.status!='y'){ //ajax检查是否已经存在
						 	emsg = "用户名已存在";
						 }else{
						 	clazz = "succse_item";
						 }
					}
					if(validtype == "password"){
						//密码验证
						if(inputval==""){
						 	emsg = "密码不能为空";
						 }else if(inputval.length < 6){
						 	emsg = "密码字符太短";
						 }else{
						 	clazz = "succse_item";
						 }
					}
					if(validtype == "password2"){
						//确认密码验证
						if(inputval==""){
						 	emsg = "密码不能为空";
						 }else if(inputval.length < 6){
						 	emsg = "密码字符太短";
						 }else if(inputval!=input.parents("form[data-valid]").find("[data-validpw]").val()){
						 	emsg = "两次密码不一致";
						 }else{
						 	clazz = "succse_item";
						 
						 }
					}
					if(validtype == "yanzheng"){
						//验证码
						if(inputval==""){
						 	emsg = "验证码不能为空";
						 //}else if(!checkAjax("index.php?m=member&f=index&v=public_check_vcode", input.attr('name')+'='+inputval)){ //ajax检查验证码
						 	//emsg = "验证码错误";
						 }else{
						 	clazz = "succse_item";
						 }
					}
					if(validtype == "reg_email"){
						//邮箱验证
						if(inputval==""){
						 	emsg = "邮箱不能为空";
						 }else if(!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(inputval)){
						 	emsg = "邮箱格式不正确";
						 //}else if(checkAjax("checkmail.php", input.attr('name')+'='+inputval)){ //ajax检查邮箱
						 	//emsg = "邮箱已存在";
						 }else{
						 	clazz = "succse_item";
						 }
					}
					if(validtype == "email"){
						//邮箱验证
						if(inputval==""){
						 	emsg = "邮箱不能为空";
						 }else if(!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(inputval)){
						 	emsg = "邮箱格式不正确";
						 //}else if(!checkAjax("checkmail.php", input.attr('name')+'='+inputval)){ //ajax检查邮箱
						 	//emsg = "邮箱不存在";
						 }else{
						 	clazz = "succse_item";
						 }
					}
					if(clazz == "error_item" && !!emsg){
						if(e){
							stopDefault(e);
						}
					 	 showMessage(item,"error_item",emsg);
					 	 return;
					 }else{
					 	showMessage(item,"succse_item","");
					 	return;
					 }
			}


			$("form[data-valid]").each(function(){
				var form = $(this);
				var inputs = form.find("[data-validtype]");
				form.on("submit",function(e){
					inputs.each(function(){
						var input = $(this);
						checkInput(input,e);
					});
					//todo 提交数据
					if(form.find(".error_item").length < 1){
						 if(form.attr("id")=="set_email" ){
						 	form.ajaxSubmit({ 
							success:function(){
								alert("ajax提交");
								$("#set_email_trg").click();
								form.resetForm(); //重置表单
							}
						});
						}
						 if(form.attr("id")=="set_password" ){
						 	form.ajaxSubmit({ 
							success:function(){
								alert("ajax提交");
								$("#password_ok_trg").click();
								form.resetForm();//重置表单
							}
						});
						}
						
					}
				});
				inputs.on("keyup mousedown",function(){
					var input = $(this);
					if(input.parents(".item").hasClass('error_item')){
						checkInput(input);
					}
				});
				inputs.on("blur",function(){
					var input = $(this);
					checkInput(input);
				});
			});
		})();

		//头像剪裁设置
		if($("#photo_form").length > 0){
			 function showCoords(obj) {
		            $("#x").val(obj.x);
		            $("#y").val(obj.y); 
		            $("#w").val(obj.w);
		            $("#h").val(obj.h); 
		        }
			$("#photo_form").on("submit",function(e){
				stopDefault(e);
				$('#photo_form').ajaxSubmit({ 
					success:function(){
						alert("ajax提交图片到后台，返回图片url");
						var imgurl = "../pic/detail.jpg";
						var img = $("<img src='"+imgurl+"' id='photo_jcrop' />");
						$('#photo_jcrop_warp').html(img);
						var imgW = img.width(),
							imgH = img.height();
						$('#photo_jcrop').Jcrop({
							aspectRatio:1,
							onChange : showCoords,  
            				onSelect : showCoords,
            				minSize :[60,60],
            				setSelect:[0,0,200,200]
						});
						$("#photo_jcrop_trg").click();
					}
				});
			})

			$("#jcrop_form").on("submit",function(){
				alert("表单提交图片剪裁信息");
				$.colorbox.close();
			});

		}







}


//回顶部
function gototop(){
	if($("#gototop").length >0){
		//gototop
 		var winH= $(window).height();
        var topDistance = winH - 100;//gototop距浏览器顶端的距离，这个距离可以根据你的需求修改
        var showDistance = 1;//距离浏览器顶端多少距离开始显示gototop按钮，这个距离也可以修改，但不能超过浏览器默认宽度，为了兼容不同分辨率的浏览器，我建议在这里设置值为1；
       // var gototopButton = "<div id='gototop'><a href='#'></a></div>";//定义一个变量，方便后面加入在html元素标签中插入这个gototop按钮的标签
        var thisTop = $(window).scrollTop() + topDistance;
        //$("#detail").append(gototopButton);//在container的div里插入我们前面定义好的html标签元素
        $("#gototop").css("top",thisTop);//设置gototop按钮top的css属性和属性值

        if($(window).scrollTop() < showDistance) {
            $("#gototop").hide();//滚动条距离顶端的距离小于showDistance是隐藏gototop按钮
        }
      
        $(window).scroll(function(){
            thisTop = $(this).scrollTop() + topDistance;
            $("#gototop").css("top",thisTop);//修改gototop按钮的top距离
            if($(this).scrollTop() < showDistance) {//当window的垂直滚动条距顶部距离小于showDistance设置的值 时
                $("#gototop").fadeOut("fast");//gototop按钮淡出
            } else {
                $("#gototop").fadeIn("fast");//反之按钮淡入
            }
        });
         //给go to top按钮绑定一个click事件      
        $("#gototop a").click(function(){
            $("html,body").animate({scrollTop:0},"slow");//慢慢回到页面顶部
            return false;
        });
	}
}










