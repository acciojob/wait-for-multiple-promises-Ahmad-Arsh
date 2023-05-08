//your JS code here. If required.
  const promises = [
    new Promise(resolve => setTimeout(() => resolve("Promise 1"), Math.random() * 2000 + 1000)),
    new Promise(resolve => setTimeout(() => resolve("Promise 2"), Math.random() * 2000 + 1000)),
    new Promise(resolve => setTimeout(() => resolve("Promise 3"), Math.random() * 2000 + 1000))
  ];
  
  // Wait for all Promises to resolve using Promise.all
  Promise.all(promises).then(results => {
    const loadingRow = document.querySelector("tbody tr");
    const tableBody = document.querySelector("tbody");
    const total = results.reduce((acc, cur) => acc + cur.length, 0) / 1000;
    
    // Remove the "Loading..." row and populate the table with the results
    tableBody.removeChild(loadingRow);
    results.forEach((result, index) => {
      const row = document.createElement("tr");
      const promiseCell = document.createElement("td");
      const timeCell = document.createElement("td");
      
      promiseCell.textContent = `Promise ${index + 1}`;
      timeCell.textContent = `${result.length / 1000}`;
      
      row.appendChild(promiseCell);
      row.appendChild(timeCell);
      
      tableBody.appendChild(row);
    });
    
    // Add the row with the total time taken
    const totalRow = document.createElement("tr");
    const totalLabelCell = document.createElement("td");
    const totalTimeCell = document.createElement("td");
    
    totalLabelCell.textContent = "Total";
    totalTimeCell.textContent = `${total}`;
    
    totalRow.appendChild(totalLabelCell);
    totalRow.appendChild(totalTimeCell);
    
    tableBody.appendChild(totalRow);
  });