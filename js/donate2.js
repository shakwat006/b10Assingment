document.getElementById('donate-feni').addEventListener('click',function(){
    const inputDonate =getinputDonate('input-feni');
    const currentDate = new Date();
    const time = currentDate.toLocaleTimeString(); 
    const date = currentDate.toLocaleDateString(); 
    
    if (inputDonate <= 0 || isNaN(inputDonate)) {
        alert('Please type a positive number.');
        return;
    }
    const myBalance = gettotalDonate('my-balance');
    if (myBalance <= inputDonate) {
        alert('Balance low.');
        return;
    }else{showAlert();}
    
    const pastBalance=gettotalDonate('past-donate-feni');
    const totalmoney = pastBalance + inputDonate;
    document.getElementById('past-donate-feni').innerText =totalmoney;


    
    const presentBalance = myBalance - inputDonate;
    document.getElementById('my-balance').innerText = presentBalance;
    

    const div = document.createElement('div')
    div.classList.add('p-8', 'rounded-lg', 'border', 'border-[#1111111A]', 'mt-6')
    div.innerHTML = `
    <p class="text-2xl font-bold  text-[#111111]"> ${inputDonate} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
    <p class="text-base font-normal text-[#111111]"> DATE: at ${time} on ${date} </p>
    `
    document.getElementById('history-section').appendChild(div);
})