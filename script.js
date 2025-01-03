//your JS code here. If required.
const button = document.getElementById('incrementBtn');
const counter =  document.getElementById('counter');
let count = 0;
counter.textContent = count;
button.addEventListener("click", ()=> {
	alert(count);
	count +=1;
	
	counter.textContent = count;
})