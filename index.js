

//i put everything in a function why? i dunno !!!!
function makeGrid() {

//$("#btn_play").click(function(){
	let player ="";
	let player_name = "";
	$("select").change(function(){	
		 player = $("#players option:selected").val();
		 player_name = $("#players option:selected").text();
	});
		
		for(let i =1 ; i<10; i++){


			$("#box"+i).click(function(){

				if ($("#box"+i).text("") || $("#box"+i).text("")){
					$("#box"+i).append(player);
					
				}

				//The if else statement to check the winining at different ways.
				if ($("#box1").text() === "X" && $("#box2").text() === "X" && $("#box3").text() === "X" ||
					$("#box1").text() === "O" && $("#box2").text() === "O" && $("#box3").text() === "O" ){
					
					setTimeout(function(){ alert(player_name+" wins");location.reload();},500);
					
				}else if($("#box4").text() === "X" && $("#box5").text() === "X" && $("#box6").text() === "X" ||
					$("#box4").text() === "O" && $("#box5").text() === "O" && $("#box6").text() === "O"){

					setTimeout(function(){ alert(player_name+" wins");location.reload();},500);
					
				}else if($("#box7").text() === "X" && $("#box8").text() === "X" && $("#box9").text() === "X" ||
					$("#box7").text() === "O" && $("#box8").text() === "O" && $("#box9").text() === "O"){

					setTimeout(function(){ alert(player_name+" wins");location.reload();},500);
					
				}else if($("#box1").text() === "X" && $("#box5").text() === "X" && $("#box9").text() === "X" ||
					$("#box1").text() === "O" && $("#box5").text() === "O" && $("#box9").text() === "O"){

					setTimeout(function(){ alert(player_name+" wins");location.reload();},500);
					
				}else if($("#box2").text() === "X" && $("#box5").text() === "X" && $("#box8").text() === "X" ||
					$("#box2").text() === "O" && $("#box5").text() === "O" && $("#box8").text() === "O"){

					setTimeout(function(){ alert(player_name+" wins");location.reload();},500);
					
				}else if($("#box3").text() === "X" && $("#box5").text()=== "X" && $("#box7").text() === "X" ||
					$("#box3").text() === "O" && $("#box5").text() === "O" && $("#box7").text() === "O"){

					setTimeout(function(){ alert(player_name+" wins");location.reload();},500);
					
				}else if($("#box3").text() === "X" && $("#box6").text()=== "X" && $("#box9").text() === "X" ||
					$("#box3").text() === "O" && $("#box6").text() === "O" && $("#box9").text() === "O"){

					setTimeout(function(){ alert(player_name+" wins");location.reload();},500);
					
				}

				 if( $("#box"+i).text() === "O"){
					$('#box'+i).css("pointer-events","none");
				}
				 if( $("#box"+i).text() === "X"){
					$('#box'+i).css("pointer-events","none");
				}
			
			//To check if X has played and O has not then dont allow X play
			
				if ($("#box"+i).text() === "X" && player === "X") {
					$("table").css("pointer-events","none");

					$("select").change(function(){	
						 player = $("#players option:selected").val();
						 if (player === "O") {
						 		$("table").css("pointer-events","auto");
						 }
					
					});

				}else if ($("#box"+i).text() === "O" && player === "O") {

					$("table").css("pointer-events","none");
					$("select").change(function(){	
						 player = $("#players option:selected").val();
						 if (player === "X") {
						 		$("table").css("pointer-events","auto");
						 }
					
					});
				}
			
				
			});
		}
		

//	});

}

	makeGrid();