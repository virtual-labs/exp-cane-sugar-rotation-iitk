var M1;
var M2;
var M3;
var M4;
var a1;
var a2;
var D;
function Concentration(){
	
	event.preventDefault();
	window.M3=document.getElementById("Con").value;
	if(M3==""){
		alert("Please fill the Concentration of the soilution.");
	}else{		
	document.getElementById("Message").style="show";						
	document.getElementById("Message2").innerHTML = "Concentration of the Solution for this Experiment is - "+M3+" g/cc.";
	}
}
function calculate() {
	event.preventDefault();
	if(M3==""){
		alert("Please fill the Concentration of the soilution first.")
	}
	else{
    	M1 = document.getElementById("theta").value;
		M2 = document.getElementById("Len").value;
		M3 = document.getElementById("Con").value;
		if(M1==""||M2==""){
			alert("Please fill the length and input angle both");
		}
		else{
		M4 = (10*M1)/(M2*M3);
	 		//document.getElementById("Spe").value = M4;
	 		a1=M1;
		a2=M4;
		D=M2;
		draw();
		}
	}
}

function draw() {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

	var rx = 280 + 90 - D/2;
	ctx.clearRect(0,0,740,300);
	// ctx.font = "20px Arial";
	// ctx.fillStyle="black";
	// ctx.fillText("S=10\u{03B8} / LC", 10, 20);
	// ctx.font = "15px Arial";
	// ctx.fillText("\u{03B8} = Rotation produced in degree.", 10, 35);
	// ctx.fillText("L = Length of the tube in centimeter.", 10, 50);
	// ctx.fillText("C = Consentration of Sugar soilution in g/cc.", 10, 65);
	ctx.beginPath();
	ctx.save();
	ctx.lineWidth = 3;
	ctx.strokeStyle = "red";
	ctx.moveTo(20, 150);
	ctx.lineTo(720, 150);
	ctx.stroke();
	ctx.restore();
	ctx.beginPath();
	ctx.lineWidth = 5;
	ctx.strokeRect(rx, 60, D,180);
	ctx.strokeStyle = "black";
	ctx.fillStyle = "#fff9c2";
	ctx.fillRect(rx, 60, D,180);
	ctx.stroke();
	ctx.restore();
	ctx.save();
	ctx.beginPath();
	ctx.lineWidth = 5;
	ctx.strokeStyle = "Green";
	ctx.translate(50,150);
	ctx.rotate((Math.PI/180)*(90-a1));
	ctx.moveTo(0, -50);
	ctx.lineTo(0, 50);
	ctx.stroke();
	ctx.restore();
	ctx.save();
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.strokeStyle = "blue";
	ctx.setLineDash([5, 5]);
	ctx.translate(50,150);
	ctx.rotate((Math.PI/180)*(0));
	ctx.moveTo(0, -50);
	ctx.lineTo(0, 50);
	ctx.stroke();
	ctx.restore();
	ctx.save();
	ctx.beginPath();
	ctx.lineWidth = 5;
	ctx.strokeStyle = "Green";
	ctx.translate(100,150);
	ctx.rotate((Math.PI/180)*(90-a1));
	ctx.moveTo(0, -50);
	ctx.lineTo(0, 50);
	ctx.stroke();
	ctx.restore();
	ctx.save();
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.strokeStyle = "blue";
	ctx.setLineDash([5, 5]);
	ctx.translate(100,150);
	ctx.rotate((Math.PI/180)*(0));
	ctx.moveTo(0, -50);
	ctx.lineTo(0, 50);
	ctx.stroke();
	ctx.restore();
	ctx.save();

	ctx.beginPath();
	ctx.lineWidth = 5;
	ctx.strokeStyle = "Green";
	ctx.translate(150,150);
	ctx.rotate((Math.PI/180)*(90-a1));
	ctx.moveTo(0, -50);
	ctx.lineTo(0, 50);
	ctx.stroke();
	ctx.restore();
	ctx.save();	
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.strokeStyle = "blue";
	ctx.setLineDash([5, 5]);
	ctx.translate(150,150);
	ctx.rotate((Math.PI/180)*(0));
	ctx.moveTo(0, -50);
	ctx.lineTo(0, 50);
	ctx.stroke();
	ctx.restore();
	ctx.save();
	ctx.beginPath();
	ctx.lineWidth = 5;
	ctx.strokeStyle = "Green";
	ctx.translate(200,150);
	ctx.rotate((Math.PI/180)*(90-a1));
	ctx.moveTo(0, -50);
	ctx.lineTo(0, 50);
	ctx.stroke();
	ctx.restore();
	ctx.save();
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.strokeStyle = "blue";
	ctx.setLineDash([5, 5]);
	ctx.translate(200,150);
	ctx.rotate((Math.PI/180)*(0));
	ctx.moveTo(0, -50);
	ctx.lineTo(0, 50);
	ctx.stroke();
	ctx.restore();
	ctx.save();
	ctx.beginPath();
	ctx.lineWidth = 5;
	ctx.strokeStyle = "Green";
	ctx.translate(540,150);
	ctx.rotate((Math.PI/180)*(90-a2));
	ctx.moveTo(0, -50);
	ctx.lineTo(0, 50);
	ctx.stroke();
	ctx.restore();
	ctx.save();
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.strokeStyle = "blue";
	ctx.setLineDash([5, 5]);
	ctx.translate(540,150);
	ctx.rotate((Math.PI/180)*(0));
	ctx.moveTo(0, -50);
	ctx.lineTo(0, 50);
	ctx.stroke();
	ctx.restore();
	ctx.save();
	ctx.beginPath();
	ctx.lineWidth = 5;
	ctx.strokeStyle = "Green";
	ctx.translate(590,150);
	ctx.rotate((Math.PI/180)*(90-a2));
	ctx.moveTo(0, -50);
	ctx.lineTo(0, 50);
	ctx.stroke();
	ctx.restore();
	ctx.save();
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.strokeStyle = "blue";
	ctx.setLineDash([5, 5]);
	ctx.translate(590,150);
	ctx.rotate((Math.PI/180)*(0));
	ctx.moveTo(0, -50);
	ctx.lineTo(0, 50);
	ctx.stroke();
	ctx.restore();
	ctx.save();
	ctx.beginPath();
	ctx.lineWidth = 5;
	ctx.strokeStyle = "Green";
	ctx.translate(640,150);
	ctx.rotate((Math.PI/180)*(90-a2));
	ctx.moveTo(0, -50);
	ctx.lineTo(0, 50);
	ctx.stroke();
	ctx.restore();
	ctx.save();
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.strokeStyle = "blue";
	ctx.setLineDash([5, 5]);
	ctx.translate(640,150);
	ctx.rotate((Math.PI/180)*(0));
	ctx.moveTo(0, -50);
	ctx.lineTo(0, 50);
	ctx.stroke();
	ctx.restore();
	ctx.save();
	ctx.beginPath();
	ctx.lineWidth = 5;
	ctx.strokeStyle = "Green";
	ctx.translate(690,150);
	ctx.rotate((Math.PI/180)*(90-a2));
	ctx.moveTo(0, -50);
	ctx.lineTo(0, 50);
	ctx.stroke();
	ctx.restore();
	ctx.save();
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.strokeStyle = "blue";
	ctx.setLineDash([5, 5]);
	ctx.translate(690,150);
	ctx.rotate((Math.PI/180)*(0));
	ctx.moveTo(0, -50);
	ctx.lineTo(0, 50);
	ctx.stroke();
	ctx.restore();
	ctx.save();

}


function drawGraph() {
	var datapoints1 = [];
	for (let i = 1; i <= 5; i++) {
	    var tx = document.getElementById("d"+i+"1").firstChild.value;
	    var ty = document.getElementById("d"+i+"2").firstChild.value;
	    datapoints1.push({ x: parseInt(tx), y: parseInt(ty) });
	    graphline("l1", datapoints1, " '\U+03B8';(in Degree)", "L (c)");
    }
}

window.onload = function(){
	draw();
	createTable();
}

function createTable() {
    var str = "<h3 class='text-center'></h3>"; 
    str += "<table>";
    str += "<tr><th>Sr No.</th><th class= 'text-center'>Input Angle<br>(&theta;)</th><th class='text-center'>Length of Tube<br>(L)</th></tr>";
    var table = document.getElementById("dataTable");
    for (i = 1; i <= 5; i++) {
        str += '<tr><td>' + i + '.</td><td id = "d' + i + '1"><input type="text"></td><td id = "d' + i + '2"><input type="text"></td></tr>';
    }
    str += "</table>";
    table.innerHTML = str;
}
function slope(){
	var xm = document.getElementById("X").value;
	var ym = document.getElementById("Y").value;
	var mm = ym/xm;
	document.getElementById("slope").value = mm;
	var sm = mm*10;
	document.getElementById("specific_rota").value = sm;
}