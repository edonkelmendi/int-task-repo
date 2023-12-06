function shuffleCheckbox(){

    var zgjedhja = prompt('Cilin checkbox deshironi ta editoni?\nShtyp 1 per internship\nShtyp 2 per Pabau\nShtyp 3 per Employment\nShtyp 4 per Career: ');

    

    const internship = document.getElementById('internship');
    const pabau = document.getElementById('pabau');
    const employment = document.getElementById('employment');
    const career = document.getElementById('career');

    if(zgjedhja === '1'){
        vleraRe = prompt('Jepi nje vlere te re checkboxit: ');
        if(vleraRe !== null){
            internship.nextElementSibling.textContent = vleraRe;
        }
        
    }

    
    }
