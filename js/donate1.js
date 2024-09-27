document.getElementById('donate-noakhali').addEventListener('click', function () {
    const inputDonate = getinputDonate('input-noakhali');

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
    
    const pastBalance = gettotalDonate('past-donate');
    const totalMoney = pastBalance + inputDonate;
    document.getElementById('past-donate').innerText = totalMoney;
  
    const myLastBalance = myBalance - inputDonate;
    document.getElementById('my-balance').innerText = myLastBalance;
    
    
    const presentbalence = myBalance - inputDonate;
    document.getElementById('my-balance').innerText = presentbalence;

    const div = document.createElement('div')
    div.classList.add('p-8', 'rounded-lg', 'border', 'border-[#1111111A]', 'mt-6')
    div.innerHTML = `
    <p class="text-2xl font-bold  text-[#111111]"> ${inputDonate} Taka is Donated for Flood at Noakhali, Bangladesh</p>
    <p class="text-base font-normal text-[#111111]"> DATE: at ${time} on ${date} </p>
    
    `
    document.getElementById('history-section').appendChild(div);
})




