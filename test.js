
function accountTypeChecker(accountBalanceHistory) {
    let difference = 0; // means difference
    let result = false; // check weather it is fixed or vari, suppose it is 
    for(let index=0; index<accountBalanceHistory.length;index++){
      if(accountBalanceHistory[index+1]) {
            const currentDifference = accountBalanceHistory[index+1].account.balance.amount - accountBalanceHistory[index].account.balance.amount;
            if(currentDifference !== difference && index >=1  ) {
              result = true;
              break;
            }
            difference = currentDifference;
      }
    }
    return result ? "A" : "B";
}

accountTypeChecker([
  {
    monthNumber: 0, // current month
    account: {
      balance: { amount: 0 },
    },
  },
  {
    monthNumber: 1, // last month
    account: {
      balance: { amount: 100 },
    },
  },
  {
    monthNumber: 2, // two months ago
    account: {
      balance: { amount: 200 },
    },
  },{
    monthNumber: 3, // two months ago
    account: {
      balance: { amount: 300 },
    },
  }
]);