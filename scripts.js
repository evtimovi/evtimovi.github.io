$( document ).ready(function(){
	$("nav").removeClass("hidden");
	$("#publications").addClass("hidden");
	$("#contact").addClass("hidden");
	
	$("ul.nav > li").click( function(event){
		event.preventDefault();

		var elem = $( this );
		var elId = elem.attr("id");
		var contentType = elId.split("-")[0];
		var activeButton = $("ul.nav > li.active").attr("id");
		var activeContent = activeButton.split("-")[0];
		
		if(elId !== activeButton)
		{
			$("#"+elId).addClass("active");
			$("#"+activeButton).removeClass("active");
			$("#"+activeContent).addClass("hidden");
			$("#"+contentType).removeClass("hidden");
		}
	});

})
