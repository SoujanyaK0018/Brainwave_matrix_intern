// Redirect to login if not authenticated
const currentUser = localStorage.getItem("currentUser");
if (!currentUser) {
  window.location.href = "login.html";
}

const key = `transactions_${currentUser}`;
let transactions = JSON.parse(localStorage.getItem(key)) || [];

function updateLocalStorage() {
  localStorage.setItem(key, JSON.stringify(transactions));
}

// Logout button handler
document.getElementById("logoutBtn")?.addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
});

// DOM Elements
const balance = document.getElementById('balance');
const income = document.getElementById('income');
const expense = document.getElementById('expense');
const history = document.getElementById('history');
const form = document.getElementById('transaction-form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');
const historySection = document.getElementById('history-section');
const toggleHistoryBtn = document.getElementById('toggle-history');

// Update UI
function updateUI() {
  history.innerHTML = '';
  let totalIncome = 0;
  let totalExpense = 0;
  let totalBalance = 0;

  transactions.forEach((tx) => {
    const sign = tx.amount >= 0 ? '+' : '-';
    const item = document.createElement('li');
    item.classList.add(tx.amount >= 0 ? 'income' : 'expense');
    item.innerHTML = `
      <div>
        ${tx.text} <span>${sign}₹${Math.abs(tx.amount)}</span>
        <br />
        <small>${new Date(tx.date).toLocaleString()}</small>
      </div>
      <button onclick="removeTransaction('${tx.id}')">x</button>
    `;
    history.appendChild(item);

    if (tx.amount >= 0) totalIncome += tx.amount;
    else totalExpense += Math.abs(tx.amount);

    totalBalance += tx.amount;
  });

  balance.textContent = `₹${totalBalance.toFixed(2)}`;
  income.textContent = `₹${totalIncome.toFixed(2)}`;
  expense.textContent = `₹${totalExpense.toFixed(2)}`;

  updateLocalStorage();
}

// Add transaction
function addTransaction(e) {
  e.preventDefault();

  const textVal = text.value.trim();
  const amountVal = +amount.value;

  if (textVal === '' || amountVal === 0) {
    alert('Please enter a valid description and a non-zero amount.');
    return;
  }

  const tx = {
    id: Date.now().toString(),
    text: textVal,
    amount: amountVal,
    date: new Date().toISOString()
  };

  transactions.push(tx);
  updateUI();

  text.value = '';
  amount.value = '';
  text.focus();
}

// Remove transaction
function removeTransaction(id) {
  transactions = transactions.filter(tx => tx.id !== id);
  updateUI();
}

// Toggle history visibility
toggleHistoryBtn.addEventListener('click', () => {
  const isVisible = historySection.style.display === 'block';
  historySection.style.display = isVisible ? 'none' : 'block';
  toggleHistoryBtn.textContent = isVisible ? 'View History' : 'Hide History';
});

// Event Listeners
form.addEventListener('submit', addTransaction);
window.addEventListener('load', updateUI);
window.removeTransaction = removeTransaction; // Expose globally for onclick
