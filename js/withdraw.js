/*
1. add event handler with the withdraw button
2. get the withdraw amount from the withdraw input field
2-5. also make sure to convert the input into a number by using parseFloat
3. get previous withdraw total
4. calculate total withdraw amount
4-5. set total withdraw amount
5. get the previous balance total
6. calculate new balance total
6-5. set the new balance total
7. clear the input field

*/
// step-1
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawTotalString = withdrawField.value;
    const newWithdrawTotal = parseFloat(newWithdrawTotalString);

    // ste-3:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousTotalAmountString = withdrawTotalElement.innerText;
    const previousTotalAmount = parseFloat(previousTotalAmountString);

    // step-4:
    const currentWithdrawTotal = previousTotalAmount + newWithdrawTotal;
    withdrawTotalElement.innerText = currentWithdrawTotal;


    // step-5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6:
    const newBalanceTotal = previousBalanceTotal - currentWithdrawTotal;
    balanceTotalElement.innerText = newBalanceTotal;

    // step-7:
    withdrawField.value = '';
});