"use strict";

document.addEventListener('DOMContentLoaded', () => {
    let search= document.querySelector('.btn');
    search.addEventListener('click', () => myFunction());
    

    function myFunction() {
        let lstresult=document.querySelector('#result');
        let p=document.querySelector('#fname').value;

        let request = new XMLHttpRequest();
       
        let alias;
        ({ alias, p } = ValidateInfo(p));
      
        request.onreadystatechange = function() {
            printFunction(request, lstresult);
        }
        request.open('GET', `superheroes.php?query=${alias}`);
        request.send();
    }

    function ValidateInfo(p) {
        p = p.trim();
        let str = p.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());
        str = str.replace(/\S*/g, function (word) {
            return word.charAt(0) + word.slice(1).toLowerCase();
        });
        let alias = sanitize(str);
        return { alias, p };
    }

    function printFunction(request, lstresult) {
        if (request.readyState === 4) {
            if (request.status === 200) {
                lstresult.innerHTML = request.responseText;
            } else {
                alert('Error Code- Information not found');
            }
        }
    }

    function sanitize(string) {
        let map = {'&': '','<': '', '>': '', '"': '',"'": '',"/": ''};
        let reg = /[&<>"'/]/ig;
        return string.replace(reg, (match)=>(map[match]));
      }

    });