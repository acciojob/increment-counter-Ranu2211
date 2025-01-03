//your JS code here. If required.
const button = document.getElementById('btn');
const count =  document.getElementById('count');
let counter = 0;
count.textContent = counter;
button.addEventListener("click", ()=> {
	counter+=1;
	alert(counter);
	count.textContent = counter;
})