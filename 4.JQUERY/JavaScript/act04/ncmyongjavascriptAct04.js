function textCountCheck(el){
	var textArea = el.value.length;
	var charactersLeft = 0 + textArea;
	var count = document.getElementById('current');
	count.innerHTML = charactersLeft;
}