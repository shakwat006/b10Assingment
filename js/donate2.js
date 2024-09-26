document.getElementById('donate-feni').addEventListener('click',function(){
    const inputDonate =getinputDonate('input-feni');
    
    if(inputDonate < 0 && isNaN(inputDonate)){
       
    }  else{
        alert('type a  number or (+) number')
        return;
    } 

    const pastBalance=gettotalDonate('past-donate-feni');
    const totalmoney = pastBalance + inputDonate;
    document.getElementById('past-donate-feni').innerText =totalmoney;
    const myBalence=gettotalDonate('my-balance');
    const presentbalence= myBalence - inputDonate;
    document.getElementById('my-balance').innerText =presentbalence;
})