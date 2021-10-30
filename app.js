"use strict";

document.addEventListener('DOMContentLoaded', () => {
    let search= document.querySelector('.btn');
    if (search){
        search.addEventListener('click', () => myFunction());
    }

    function myFunction() {
        let request = new XMLHttpRequest();
        request.onreadystatechange = function() {
        if(request.readyState === 4) {
            if(request.status === 200) {
                alert(request.responseText);
            } else {
                alert('Error Code- Information not found');
            }
        }
        }
        request.open('GET', 'superheroes.php');
        request.send();
    }
    });