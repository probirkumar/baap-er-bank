// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2: get the deposit amount from the deposit input Field
    const depositField = document.getElementById('deposit-field');
    const newDepositTotalString = depositField.value;
    const newDepositTotal = parseFloat(newDepositTotalString);

    // step-3: get the current deposit total
    const depositTotalElement = document.getElementById('deposit-amount');
    const previousTotalAmountString = depositTotalElement.innerText;
    const previousTotalAmount = parseFloat(previousTotalAmountString);

    // step-4: add numbers to the total deposit amount
    const currentDepositTotal = previousTotalAmount + newDepositTotal;
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // step-5: get the balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: caculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositTotal;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;
    // step-7: 
    depositField.value = '';

})