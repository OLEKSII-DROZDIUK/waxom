const projects = {
	switcherChild: 'projects-switchblock div',
	switcherCheck: 'projects-switchblock_switcher__check',
	mather:'projects_imgblock',
}

let dirImg = "";
const fileextension = ".jpg"; 
let caseDir = 0;
let imgIndex = 1;
let nameOfDirectory = "";

;(function($){
	$("button.arrow-right").on("click", function () {
		let indexRight = $(".swichText").index();
	    $("div.swichBlock>div").removeClass();
	    	if(indexRight === 5) {
	    		 $("div.swichBlock>div").eq(0).addClass("swichText");
	    	} else { 
	    $("div.swichBlock>div").eq(indexRight).addClass("swichText");
	    }
	});
	$("button.arrow-left").on("click", function () {
	    let indexLeft = $(".swichText").index();
	    $("div.swichBlock>div").removeClass();
	    $("div.swichBlock>div").eq(indexLeft-2).addClass("swichText");
	});
	$("div.swichBlock>button").on("click", function () {
		let newCircle = $(".swichText").index();
		$(".choiceListInHeader>div").removeClass();
		$(".choiceListInHeader>div").eq(newCircle-1).addClass("choiceCircleSwich");
	});

	$(`.${projects.switcherChild}`).click(function() {   //Our Latest Projects block - switcher
		$(`.${projects.switcherChild}`).removeClass(projects.switcherCheck);         
		$(this).toggleClass(projects.switcherCheck);
		switchDerictoryFive(this);
	})
	//our latest project tabs :
	const switchDerictoryFive = (elToSwitchImg) => { 
		let indexOfChildC = $(`.${projects.switcherChild}`).index(elToSwitchImg);
		switch(indexOfChildC) {
		  case 0: 
			caseDir = 0;
			break;
		  case 1: 
		  	dirImg = "img/web_design/";
			caseDir = 1;
			break;
		  case 2: 
		  	dirImg = "img/moble_app/";
			caseDir = 1;
			break;
		  case 3: 
		  	dirImg = "img/illustration/";
			caseDir = 1;
			break;
		  case 4: 
		  	dirImg = "img/photography/";
			caseDir = 1;
			break;
		}
		imgIndex = 1;
		$(`.${projects.mather}`).empty();
		imageloop(caseDir);
	};

	const randomDirImg = () => {
		const arrDir = ["img/web_design/", "img/moble_app/", "img/illustration/", "img/photography/"];
		return arrDir[Math.floor(Math.random() * arrDir.length)];
	};

	const whatDirectory = (dirName) => {
		if(dirName === "img/web_design/"){
			return nameOfDirectory = "Graphic design";
		} else if(dirName === "img/moble_app/"){
			return nameOfDirectory = "Mobile app";
		}else if(dirName === "img/illustration/"){
			return nameOfDirectory = "Illustration";
		}else if(dirName === "img/photography/"){
			return nameOfDirectory = "Photography";
		}
	};

	const imageloop = (direction) => {
		if(direction === 0 && imgIndex != 7){  
			const newImgMother = $("<div/>", {class:'imgblock_mather'});
			$(newImgMother).appendTo(`.${projects.mather}`);
			let attrSrc = String(randomDirImg());
			$("<img/>").attr({src: attrSrc + imgIndex + fileextension, class:"imgblock-active_img"}).appendTo(newImgMother);
			$(`<div class="imgblock_mather-hovered">
					<a href="#" class="fas fa-link"></a>
					<a href="#" class="fab fa-sistrix"></a>
				</div>
				<div class="imgblock_mather-text">
					<span class="imgblock_mather-text__header">Claritas Etiam Processus</span>
					<span id="imgblock_mather-text__tittle">${whatDirectory(attrSrc)}</span>
				</div>`).appendTo(newImgMother);
				imgIndex++;	
		imageloop(direction);
		} else if(direction === 1 && imgIndex != 7) {
			const newImgMother = $("<div/>", {class:'imgblock_mather'});
			$(newImgMother).appendTo(`.${projects.mather}`);
			$("<img/>").attr({src: dirImg + imgIndex + fileextension, class:"imgblock-active_img"}).appendTo(newImgMother);
			$(`<div class="imgblock_mather-hovered">
					<a href="#" class="fas fa-link"></a>
					<a href="#" class="fab fa-sistrix"></a>
				</div>
				<div class="imgblock_mather-text">
					<span class="imgblock_mather-text__header">Claritas Etiam Processus</span>
					<span id="imgblock_mather-text__tittle">${whatDirectory(dirImg)}</span>
				</div>`).appendTo(newImgMother);
				imgIndex++;	
		imageloop(direction);
		};
	};

	imageloop(0); //first render 
	//start counter
	$('.counter').each(function() {
		$(this).prop('Counter', 0).animate({
			Counter: $(this).text()
		},{
			duration: 50000,
			easing: "swing",
			step: function(now){
				$(this).text(Math.ceil(now));
			}
		});
	});
	//navbar scrolling 
	$('.nav-main__link>li>a').click(function() {
		$([document.documentElement, document.body]).animate({
			scrollTop: $(`#${$(this).attr('id').slice(0, -3)}`).offset().top
		}, 2000);
	});
	
}(jQuery));
