document.getElementById('donate-qoata').addEventListener('click',function(){
    const inputDonate =getinputDonate('input-qoata');
    
    if(inputDonate < 0 && isNaN(inputDonate)){
       
    }  else{
        alert('type a  number or (+) number')
        return;
    }

    const pastBalance=gettotalDonate('past-donate-qoata');
    const totalmoney = pastBalance + inputDonate;
    document.getElementById('past-donate-qoata').innerText =totalmoney;

    const myBalence=gettotalDonate('my-balance');
    const presentbalence= myBalence - inputDonate;
    document.getElementById('my-balance').innerText =presentbalence;
})