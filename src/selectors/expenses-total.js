export default (expenses) =>{
    return expenses
        .map((expense) => expense.amount)
        .reduce((sum,value)=>sum+value,0);
};

    // if(expenses.length === 0 || expenses === undefined){
    //   return 0;
    // }
    // else{
    //     let total = 0;
    //     expenses.map((expense) => {
    //         total += expense.amount;
    //     });
    //     return total;
    //     
    // }