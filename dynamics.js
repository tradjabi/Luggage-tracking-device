$(document).ready(function()
{
	$("#location_div").on(
	{
		mouseenter:function()
		{
			$("#location_div").animate(
			{
				opacity: '0.9' ,
				width: '+=2%' ,
				height: '+=10px',
				margin: '-=10px'
			},200);
			
			$("#location_div").css("background-color", "#06360b");

		},
		mouseleave:function()
		{
			$("#location_div").animate(
			{
				opacity: '0.8',
				width: '-=2%' ,
				height: '-=10px',
				margin: '+=10px'
			},100);
			
			$("#location_div").css("background-color", "#1c1b1a");

		}
	});
	
	$("#left_div").on(
	{
		mouseenter:function()
		{
			$("#left_div").animate(
			{
				opacity: '0.9' ,
				width: '+=2%' ,
				height: '+=10px',
				margin: '-=10px'
			},200);
			
			$("#left_div").css("background-color", "#4a0e4a");

		},
		mouseleave:function()
		{
			$("#left_div").animate(
			{
				opacity: '0.8',
				width: '-=2%' ,
				height: '-=10px',
				margin: '+=10px'
			},100);
			
			$("#left_div").css("background-color", "#1c1b1a");

		}
	});
	
	$("#right_div").on(
	{
		mouseenter:function()
		{
			$("#right_div").animate(
			{
				opacity: '0.9' ,
				width: '+=2%' ,
				height: '+=10px',
				margin: '-=10px'
			},200);
			
			$("#right_div").css("background-color", "#1b104d");

		},
		mouseleave:function()
		{
			$("#right_div").animate(
			{
				opacity: '0.8',
				width: '-=2%' ,
				height: '-=10px',
				margin: '+=10px'
			},100);
			
			$("#right_div").css("background-color", "#1c1b1a");

		}
	});
	
});