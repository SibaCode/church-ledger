const form = document.getElementById("entryForm");
const ledgerBody = document.getElementById("ledgerBody");
let entries = JSON.parse(localStorage.getItem("financeEntries")) || [];

function renderEntries() {
  ledgerBody.innerHTML = "";
  entries.forEach((entry, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${entry.date}</td>
      <td>${entry.type}</td>
      <td>${entry.description}</td>
      <td>${parseFloat(entry.amount).toFixed(2)}</td>
      <td><button class="delete" onclick="deleteEntry(${index})">Delete</button></td>
    `;
    ledgerBody.appendChild(row);
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const type = document.getElementById("type").value;
  const date = document.getElementById("date").value;
  const description = document.getElementById("description").value;
  const amount = document.getElementById("amount").value;

  const newEntry = { type, date, description, amount };
  entries.push(newEntry);
  localStorage.setItem("financeEntries", JSON.stringify(entries));
  renderEntries();
  form.reset();
});

function deleteEntry(index) {
  if (confirm("Are you sure you want to delete this entry?")) {
    entries.splice(index, 1);
    localStorage.setItem("financeEntries", JSON.stringify(entries));
    renderEntries();
  }
}

renderEntries();
