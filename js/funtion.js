function sectionbtn(id){
    document.getElementById('donate-section').classList.add('hidden')
    document.getElementById('history-section').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')

}

function btnBgChange(id){
    document.getElementById('donate-btn').classList.remove('bg-[#B4F461]')
    document.getElementById('history-btn').classList.remove('bg-[#B4F461]')
    document.getElementById('donate-btn').classList.add('border-2','border-[#111111]')
    document.getElementById('history-btn').classList.add('border-2','border-[#111111]')
   

    document.getElementById(id).classList.add('bg-[#B4F461]')
    document.getElementById(id).classList.remove('border-2','border-[#111111]')
}


function getinputDonate (id){
    const donateMoney=document.getElementById(id).value ;
    const donatemoneyN=parseFloat(donateMoney)
    return donatemoneyN;
}

function gettotalDonate(id){
    const pastMoney=document.getElementById(id).innerText;
    const pastMoneyN=parseFloat(pastMoney);
    return pastMoneyN;
}


