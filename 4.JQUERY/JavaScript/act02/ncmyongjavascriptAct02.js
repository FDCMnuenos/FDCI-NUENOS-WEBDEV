/*------- Part 1 -------*/
function strLength(){

	var strText = document.getElementById('getLength').value;
	var strArray = strText.split(' ');
	
	var sortStrArray = strArray.sort(
		(strA, strB) => {
			return strB.length - strA.length; 
		})
	document.getElementById('sentence').innerHTML = strText;
	document.getElementById('longword').innerHTML = sortStrArray[0];
}


/*------- Part 2 -------*/
function checkNum(){
	var cNum = document.getElementById('toBeChecked').value;
	var m = 2;

		if (cNum==1) {
			document.getElementById('numChecked').innerHTML = cNum + " - is automatically not considered as a PRIMARY Number";
		}
		else if(cNum==2){
			document.getElementById('numChecked').innerHTML = cNum + " - is a PRIME Number";
		}
		else{
			for (m=2; m<cNum; m++){
				if(cNum%m==0){
				document.getElementById('numChecked').innerHTML = cNum + " - is NOT a PRIME Number";
					break;
				}
				else{
				document.getElementById('numChecked').innerHTML = cNum + " - is a PRIME Number";
				}
			}
		}
}


/*------- Part 3 -------*/
function convertHour(e){
	e.preventDefault();
	var y = document.getElementById('con').value;

	var conMin = y * 60;
	document.getElementById('minCovert').innerHTML = conMin + "Minutes";
}