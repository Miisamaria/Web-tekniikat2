
fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(data => {
     document.getElementById('print-here').innerHTML = 
     '<img src="' + data.message + '"/>';
});

document.getElementById("yllätysnappi").addEventListener("click", myFunction);

function myFunction() {
  alert ("Hei wauu! Sie löysit minut! Ihanaa päivää just sulle!");
}
document.body.style.backgroundColor = "#eadbc6";




/*Apua haettu
*https://www.delftstack.com/howto/javascript/javascript-change-background-color/
*w3schools
 */