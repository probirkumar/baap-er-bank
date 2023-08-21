

// console.log('check')
document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('clicked button')
    const depositField = document.getElementById('deposit-field');
    const newDepositString = depositField.value;
    const newDepositValue = parseFloat(newDepositString);
    depositField.value = '';

    const depositTotalElement = document.getElementById('deposit-amount');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // console.log(newDepositValue, previousDepositTotal)

    const currentDepositTotal = previousDepositTotal + newDepositValue;
    depositTotalElement.innerText = currentDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // console.log(previousBalanceTotal)

    const newBalanceTotal = previousBalanceTotal + newDepositValue;
    balanceTotalElement.innerText = newBalanceTotal;
});