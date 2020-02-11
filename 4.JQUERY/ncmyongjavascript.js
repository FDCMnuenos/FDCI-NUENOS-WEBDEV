/*Part 1*/
function sumOdd() {
		var m =0;
		var sumOdd = 0;
		for (m=0; m<=50; m++) {
			if (m%2 !=0){
				sumOdd+=m;
			}
		}alert(sumOdd);
	}

/*Part 2*/
function gradeAve() {
		var gPE = document.getElementById('gPE').value;
		var gMath = document.getElementById('gMath').value;
		var gSci = document.getElementById('gSci').value;
		var gEng = document.getElementById('gEng').value;
		var gFil = document.getElementById('gFil').value;

		var totalGrade = Number(gPE) + Number(gMath) + Number(gSci) + Number(gEng) + Number(gFil);
		var aveGrade = totalGrade / 5;

		document.getElementById('hilGrade').innerHTML = aveGrade;
		
		if (aveGrade<=60) {
			document.getElementById('hilMark').innerHTML = "F";
		} else if (aveGrade<70) {
			document.getElementById('hilMark').innerHTML = "D";
		} else if (aveGrade<80) {
			document.getElementById('hilMark').innerHTML = "C";
		} else if (aveGrade<90) {
			document.getElementById('hilMark').innerHTML = "B";
		} else if (aveGrade<=100) {
			document.getElementById('hilMark').innerHTML = "A";
		}
	}


/*Part 3*/
function program(){
		var y = 1;
		for (y=1; y<=100; y++){
			if (y%3==0 && y%5==0){
				document.writeln(y + "Beepboop" + "<br>");
			} else if (y%3==0) {
				document.writeln(y + "Beep" + "<br>");
			} else if (y%5==0) {
				document.writeln(y + "Boop"+ "<br>");
			}
			else{
				document.writeln(y + "<br>");
			}
		} 
	}

/*Part 4*/
		var d = document.getElementById("destination");
		for (var o = 0; o<5; o++){
			for(var i = o; i >=0; i--){
				document.write(" * ");
			}
				document.write("<br/>");
		}