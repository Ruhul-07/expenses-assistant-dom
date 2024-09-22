// calculate button function

const calculateButton = document.getElementById('calculate')
calculateButton.addEventListener('click', function(){

    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);
    
    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    const totalExpensesElement =  document.getElementById('total-expenses');
    totalExpensesElement.innerText = totalExpenses.toFixed(2);
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = balance.toFixed(2);

    const result = document.getElementById('results');
    result.classList.remove('hidden');


    // history Item

    const historyItem = document.createElement("div");
      historyItem.className =
        "bg-white p-3 rounded-md border-l-2 border-indigo-500";
  
      historyItem.innerHTML = `
            <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
            <p class="text-xs text-gray-500">Income: $${income.toFixed(2)}</p>
            <p class="text-xs text-gray-500">Expenses: $${totalExpenses.toFixed(2)}</p>
            <p class="text-xs text-gray-500">Balance: $${balance.toFixed(2)}</p>
      `;
      const historyContainer = document.getElementById("history-list");
  
      historyContainer.insertBefore(historyItem, historyContainer.firstChild);
    
})

//saving Button function

const savingsButton = document.getElementById('calculate-savings');
savingsButton.addEventListener('click', function(){
    const savingsPercentage = parseFloat(document.getElementById('savings').value)
    
    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);

    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    const savingsAmmount = (balance * savingsPercentage) / 100;
    const remainingBalance = balance - savingsAmmount;



    const savingsAmmountElement = document.getElementById('savings-amount');
    savingsAmmountElement.innerText = savingsAmmount.toFixed(2);
    const remainingBalanceElement = document.getElementById('remaining-balance');
    remainingBalanceElement.innerText = remainingBalance.toFixed(2);

    

})

    //toggle history tab function

    const historyTab = document.getElementById('history-tab');
    const assistantTab = document.getElementById('assistant-tab');

    historyTab.addEventListener('click', function(){

        historyTab.classList.add(
            'text-white',
            'font-semibold', 
            'bg-gradient-to-r',
            'from-blue-500',
            'to-purple-600'
        );
        historyTab.classList.remove('text-gray-600')
        assistantTab.classList.remove(
            'text-white',
            'font-semibold', 
            'bg-gradient-to-r',
            'from-blue-500',
            'to-purple-600'
        )
        assistantTab.classList.add('text-gray-600')

        document.getElementById('expense-form').classList.add('hidden');
        document.getElementById('history-section').classList.remove('hidden');
    })

    //toggle assistant tab function

    assistantTab.addEventListener('click', function(){

        assistantTab.classList.add(
            'text-white',
            'font-semibold', 
            'bg-gradient-to-r',
            'from-blue-500',
            'to-purple-600'
        )
        historyTab.classList.remove(
           'text-white',
            'font-semibold', 
            'bg-gradient-to-r',
            'from-blue-500',
            'to-purple-600' 
        )
        document.getElementById('expense-form').classList.remove('hidden');
        document.getElementById('history-section').classList.add('hidden');
    })
