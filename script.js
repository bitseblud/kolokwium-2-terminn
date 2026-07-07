document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();
    const opis = document.getElementById('opis').value;
    const date = document.getElementById('date').value;
    if(!opis||!date){
        document.getElementById('opisResults').innerText='Prosze wypełnicz oba pola' 
    }
    else if(opis.length>128){
        document.getElementById('opisResults').innerText='Maksymalnie 128 znaków'
    }
    else{
        document.getElementById('opisResults').innerText='Zadanie: '+ opis
        document.getElementById('dateResults').innerText='Data: ' + date
    }
  
})