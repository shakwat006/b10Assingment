document.getElementById('donate-noakhali').addEventListener('click',function(){
    const inputDonate =getinputDonate('input-noakhali');
    
    if(inputDonate < 0 && isNaN(inputDonate)){
       
    }  else{
        alert('type a  number or (+) number')
        return;
    } 

    const pastBalance=gettotalDonate('past-donate');
    const totalmoney = pastBalance + inputDonate;
    document.getElementById('past-donate').innerText =totalmoney;

    const myBalence=gettotalDonate('my-balance');
    const presentbalence= myBalence - inputDonate;
    document.getElementById('my-balance').innerText =presentbalence;
})