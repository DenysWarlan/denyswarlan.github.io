window.addEventListener('DOMContentLoaded', function (e) {
    "use strick";
    let money, 
        time,
        startBtn = document.getElementById("start"),
        
        budgetVal = document.querySelector(".budget-value"),
        dayBudgetVal = document.querySelector(".daybudget-value"),
        levelVal = document.querySelector(".level-value"),
        expensesVal = document.querySelector(".expenses-value"),
        optExpensesVal = document.querySelector(".optionalexpenses-value"),
        optIncomeVal = document.querySelector(".income-value"),
        monthsavings = document.querySelector(".monthsavings-value"),
        yearsavings = document.querySelector(".yearsavings-value"),
        
        year = document.querySelector(".year-value"),
        moth = document.querySelector(".month-value"),
        day = document.querySelector(".day-value"),
        
        expItemBtn = document.getElementsByTagName("button")[0],
        optexpBtn = document.getElementsByTagName("button")[1],
        countBtn = document.getElementsByTagName("button")[2],
        
        expItem = document.getElementsByClassName("expenses-item"),
        optExpItem = document.querySelectorAll(".optionalexpenses-item"),
        checkSavings = document.querySelector("#savings"),
        amountVal = document.querySelector("#sum"),
        percentVal = document.querySelector("#percent"),
        optIncome = document.querySelector("#income")
    ;

    expItemBtn.setAttribute("disabled", "");
    optexpBtn.setAttribute("disabled", "");
    countBtn.setAttribute("disabled", "");



    startBtn.addEventListener('click', function() {
      money = +prompt("Enter your income for mouth?", '');

      while (isNaN(money) || money == "" || money == null) {
          money = +prompt("Enter your income for mouth?", '');
      }
      appData.budget = money;
      appData.timeData = time;
      budgetVal.textContent = money.toFixed();
      year.value = new Date(Date.parse(time)).getFullYear();
      moth.value = new Date(Date.parse(time)).getMonth() + 1;
      day.value = new Date(Date.parse(time)).getDate();

      expItemBtn.disabled =  false;
      optexpBtn.disabled = false;
      countBtn.disabled = false;

    });

    expItemBtn.addEventListener("click", function() {
       let sum = 0; 

       for (let i = 0; i < expItem.length; i++) {
           let a = expItem[i].value,
               b = expItem[++i].value;
           if (typeof (a) != null && a != '' && typeof (b) != null && b != '' && a.length < 50) {
               appData.expenses[a] = b;
               sum += +b;
           } else {
               i--;
           }
       }
       expensesVal.textContent = sum;
    });

    optexpBtn.addEventListener("click", function () {
        for (let i = 0; i < optExpItem.length; i++) {
            let opt = optExpItem[i].value;
            appData.optionalExpenses[i] = opt;
            optExpensesVal.textContent += appData.optionalExpenses[i] + " ";
        }
    });

    countBtn.addEventListener("click", function() {
        if(appData.budget != undefined){
            appData.moneyPerDay = ((+appData.budget - +expensesVal.textContent) / 30).toFixed();
            dayBudgetVal.textContent = appData.moneyPerDay;

            if (appData.moneyPerDay < 100) {
                levelVal.textContent = "Low level income";
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                levelVal.textContent = "Average level income";
            } else if (appData.moneyPerDay > 2000) {
                levelVal.textContent = "High level income";
            } else {
                levelVal.textContent = "Error";
            }
        }else{
            dayBudgetVal.textContent = "Need start calculation";
        }
    });

    optIncome.addEventListener('input', function (params) {
        let items = optIncome.value;
        appData.income = items.split(', ');
        optIncomeVal.textContent = appData.income;
    });

    checkSavings.addEventListener('click', function () {
       if(appData.savings == true){
           appData.savings = false;
       }else{
           appData.savings = true;
       } 
    });
    
    amountVal.addEventListener('input', function () {
       if (appData.savings == true){
        let sum = +amountVal.value,
            percent = +percentVal.value;    
        
        appData.mothIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100  * percent;

        monthsavings.textContent = appData.mothIncome.toFixed(1);
        yearsavings.textContent = appData.yearIncome.toFixed(1);

       }
    });
     percentVal.addEventListener('input', function () {
         if (appData.savings == true) {
             let sum = +amountVal.value,
                 percent = +percentVal.value;

             appData.mothIncome = sum / 100 / 12 * percent;
             appData.yearIncome = sum / 100 * percent;

             monthsavings.textContent = appData.mothIncome.toFixed(1);
             yearsavings.textContent = appData.yearIncome.toFixed(1);

         }
     });

    let appData = {
        budget: money,
        expenses: {},
        optionalExpenses: {},
        income: [],
        timeData: time,
        savings: false
    };
        

});