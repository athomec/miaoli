$(function () {//JS開頭

	var WINDOW = $(window).width();//視窗寬度
	var WINDOWH = $(window).height();//視窗高度

	$(".js-gotop").click(function () {//gotop
		$("html,body").animate({ scrollTop: 0 }, 300);
		return false;
	})
	$('#member').on('click', function () {//會員下拉選單收闔設定
        $(this).collapse('toggle');
    });
	$('.js-nav-link').on('click', function () {//手機版主下拉選單收闔設定
        if(WINDOW < 992){
			$("#member-menu").collapse('toggle');
		}
    });
	$('#top-menu').on('click', function () {//手機版主下拉選單收闔設定
	if(WINDOW < 992){
			$(this).collapse('toggle');
		}
        
    });

	$(".js-side-info-full").click(function () {//開啟底部滿版視窗
		window.parent.$(".js-side-info").addClass("open");
		window.parent.$(".js-side-info").addClass("full");
		window.parent.$(".js-map-content-wrapper").addClass("hide");
	})
	$(".js-side-info-full-close").click(function () {//關閉底部滿版視窗
		window.parent.$(".js-side-info").removeClass("open");
		window.parent.$(".js-side-info").removeClass("full");
		window.parent.$(".js-map-content-wrapper").removeClass("hide");
		window.parent.$(".js-map-content-wrapper").css('height', '');
	})
	$(".js-btn-all-info").click(function () {//開啟底部視窗
		window.parent.$(".js-side-info").addClass("open");
		window.parent.$(".js-map-content-wrapper").css('height', ' calc(100% - 360px)');
		window.parent.$(".js-map-content-wrapper").removeClass("hide");
	})
	$(".js-side-info-close").click(function () {//關閉底部視窗
		window.parent.$(".js-side-info").removeClass("open");
		window.parent.$(".js-map-content-wrapper").css('height', '');
		window.parent.$(".js-map-content-wrapper").removeClass("hide");
	})
	$(".js-side-info-mode-toggler").click(function () {//底部視窗滿版切換模式
		$(this).toggleClass("active");
		window.parent.$(".js-side-info").toggleClass("full");
		window.parent.$(".js-map-content-wrapper").toggleClass("hide");
		var $span = $(this).find("span");
            if ($span.text() === "資料列表模式") {
                $span.text("地圖輔助模式");
            } else {
                $span.text("資料列表模式");
            }
	})
	$(".js-btn-parent-modal-open").click(function () {//底部視窗開啟父層視窗
		let content = $(this).attr("data-bs-target");
		window.parent.$(content).modal("show");
	})

	$(".js-map-comparison").click(function () {//地圖比對
		$(".js-map-content").toggleClass("compare");
		$(".js-map-content-compare").toggleClass("compare");
		if ($(".js-map-content-compare").hasClass("compare")) {
			return false;
		}else{
			$(".js-map-content-compare").css("width", "");
		}
	})


	$(".js-info-closer").click(function () {
		$(".js-map-content-wrapper").removeClass('open');
		$(".js-map-content-wrapper").css('height', ' calc(100vh - 54px)');
		$(".js-side-info").removeClass('open');
	})
	$(".js-side-menu-toggler").click(function () {
		$('.js-side-menu').toggleClass("close");
		$(".js-side-content").toggleClass("close");
	})
	
	//---------------------視窗拖曳設定------------------------
	$('.js-map-content-wrapper').resizable({
		handles: 's'
	});
	const resizeObserver = new ResizeObserver(onResize);
	resizeObserver.observe(document.querySelector('.js-map-content-wrapper'));

	function onResize(e) {
		$(".js-side-info").addClass("hide");
		document.addEventListener('mouseup', function (e) {
			$(".js-side-info").removeClass("hide");
		});
	}

	$('.js-map-content-compare').resizable({//地圖比對
		handles: 'w'
	});
	const resizeObserver1 = new ResizeObserver(onResizeMap);
	resizeObserver1.observe(document.querySelector('.js-map-content-compare'));

	//底部視窗伸縮設定
	//---------------------頁籤設定------------------------
	$('.js-toggle-menu').find(".js-toggle-button").click(function () {
		$(this).toggleClass("active");
		$(this).siblings('.js-toggle-button').removeClass('active');

	});

	//手風琴按鈕切換設定
	$(".js-accordion-menu").find('button').click(function () {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$(this).find('span').removeClass('ti-angle-up').addClass('ti-angle-down');
		} else {
			$(this).parents(".js-accordion-menu").find('button').removeClass('active');
			$(this).parents(".js-accordion-menu").find('button').find('span').removeClass('ti-angle-up').addClass('ti-angle-down');
			$(this).addClass("active");
			$(this).find('span').removeClass('ti-angle-down').addClass('ti-angle-up');
		}

	});

	//----------------gotop功能-----------------
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) { //若目前的位置距離網頁頂端>100px
			$(".gotop").fadeIn("fast");
			$("header").addClass("godown");
		} else {
			$(".gotop").stop().fadeOut("fast");
			$("header").removeClass("godown");
		}

		var index = 0;//各單元區塊順序
		var st = $(window).scrollTop();//現在捲軸位置
		var wh = $(window).height();//視窗高度
	});

	//主選單設定
	$(".navbar-nav").find('a').click(function () {
		var section = $(this).attr("href");
		$("html,body").animate({ scrollTop: $(section).offset().top - 66 }, 300);
		$(".navbar-collapse").removeClass("show");
		return false;
	});




	/*匯出視窗-未輸入條件示意*/
	$("#info-export-default").modal("show");
	/*匯出視窗-查無資料示意*/
	$('#info-export-noinfo').modal("show");
	/*個人資料視窗-編輯示意*/
	$('#info-personal-edit').modal("show");




	

})//JS尾端	