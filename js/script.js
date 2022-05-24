
fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(data => {
     document.getElementById('print-here').innerHTML = 
     JSON.stringify(data);
     document.getElementById('print-here').innerHTML = 
     data.message
    }

    );
 