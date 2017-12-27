$(document).ready(function(){

	$("#aboutsection").hide();
	$("#datasection").hide();
	$("#designsection").hide();
	$("#codesection").hide();
	var about = false;
	var design = false;;
	var data = false;
	var code = false;
	var home = true;
	var headhov = true;


	$("#abouticon").click(function(){
		if (design == true || data == true || code == true){
			$("#designsection").fadeOut("slow");
			$("#datasection").fadeOut("slow");
			$("#codesection").fadeOut("slow");
			$("#aboutsection").fadeIn("slow");
		} else if (home == true){
			$("#header").animate({top: '5%'}, "slow");
			$("#icons").animate({top: '10%'}, "slow", function(){
				$("#aboutsection").fadeIn("slow");
			});
		}
		
		about = true;
		design = false;
		data = false;
		code = false;
		home = false;
	});

	$("#designicon").click(function(){
		if (about == true || data == true || code == true){
			$("#aboutsection").fadeOut("slow");
			$("#datasection").fadeOut("slow");
			$("#codesection").fadeOut("slow");
			$("#designsection").fadeIn("slow");
		} else if (home == true){
			$("#header").animate({top: '5%'}, "slow");
			$("#icons").animate({top: '10%'}, "slow", function(){
				$("#designsection").fadeIn("slow");
			});
		}
		
		about = false;
		design = true;
		data = false;
		code = false;
		home = false;
	});

	$("#header").mouseenter(function(){
		if (home == false){
			$("#icons").fadeIn("slow");
		}
	});

	$("#icons").mouseleave(function(){
		if (home == false){
			$("#icons").fadeOut("slow");
		}
	})

	$("#header").click(function(){
		if (about == true){
			about = false;
			$("#aboutsection").fadeOut("slow", function(){
				$("#header").animate({top: '45%'}, "slow");
				$("#icons").animate({top: '50%'}, "slow");
			});
		}else if (design == true){
			design = false;
			$("#designsection").fadeOut("slow", function(){
				$("#header").animate({top: '45%'}, "slow");
				$("#icons").animate({top: '50%'}, "slow");
			});
		}
		home = true;
	});

	$("#dataicon").click(function(){
		$("#datasection").toggle();
	});

	

	$("#codeicon").click(function(){
		$("#codesection").toggle();
	});

});