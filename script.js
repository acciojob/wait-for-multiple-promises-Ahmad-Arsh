//your JS code here. If required.
function waitForMultiplePromises() {
  const table = document.querySelector('table');
  const loadingRow = table.insertRow();
  const loadingCell = loadingRow.insertCell();
  loadingCell.colSpan = 2;
  loadingCell.textContent = 'Loading...';

  const promises = [];
  for (let i = 0; i < 3; i++) {
    const time = Math.floor(Math.random() * 3 + 1) * 1000;
    promises.push(new Promise(resolve => setTimeout(() => resolve(time), time)));
  }

  const start = performance.now();
  Promise.all(promises).then(times => {
    table.deleteRow(0);
    times.forEach((time, index) => {
      const row = table.insertRow();
      row.insertCell().textContent = `Promise ${index + 1}`;
      row.insertCell().textContent = `${time / 1000}`;
    });
    const totalRow = table.insertRow();
    totalRow.insertCell().textContent = 'Total';
    totalRow.insertCell().textContent = `${(performance.now() - start) / 1000}`;
  });
}