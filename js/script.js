fetch('https://programming-quotes-api.herokuapp.com/quotes/random')
.then(response => response.json())
.then(data => {
     document.getElementById('print-here').innerHTML = 
     JSON.stringify(data);
     document.getElementById('print-here').innerHTML += 
     JSON.stringify(image);
    }
);
