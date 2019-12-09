const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

const content = letters.map(x => `<button type="button" class="btn btn-secondary letter-button" value="${x}">${x}</button>`);

const div = document.getElementById('buttonGroup')
//const div = document.querySelectorAll('buttonGroup')
console.log(div)
const output = document.getElementById('output');
div.innerHTML += content;


Array.from(document.getElementsByClassName("letter-button"))
  .forEach((e) => e.addEventListener('click', () => output.innerHTML += e.value));

console.log(Array.toString)







  