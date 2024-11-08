let inventoryData = []; // To hold all data from the CSV

// Load and display inventory data
async function loadInventory() {
  try {
    const response = await fetch('/txt/Inventory.csv'); // Adjusted path to /txt/Inventory.csv
    if (!response.ok) {
      console.error('Failed to load CSV file: Response not OK');
      return;
    }
    
    const data = await response.text();
    const rows = data.trim().split('\n');
    if (rows.length <= 1) {
      console.error("CSV file appears to be empty or missing data rows.");
      return;
    }

    const tableBody = document.querySelector('#inventoryTable tbody');
    const categorySet = new Set(); // To collect unique categories for the dropdown

    // Skip the header and process each row
    rows.slice(1).forEach(row => {
      const columns = row.split(',');

      // Check if the row has the expected number of columns (20 columns for images)
      if (columns.length < 20) {
        console.warn("Row does not have the expected number of columns:", row);
        return;
      }
      
      const rowData = {
        title: columns[0].trim(),
        sku: columns[1].trim(),
        upc: columns[2].trim(),
        category: columns[3].trim(),
        manufacturer: columns[4].trim(),
        wholesalePrice: columns[5].trim(),
        msrp: columns[6].trim(),
        currentInventory: columns[7].trim(),
        bodyHtml: columns[8].trim(),
        variantGrams: columns[9].trim(),
        image1: columns[10].trim(),
        image2: columns[11].trim(),
        image3: columns[12].trim(),
        image4: columns[13].trim(),
        image5: columns[14].trim(),
        image6: columns[15].trim(),
        image7: columns[16].trim(),
        image8: columns[17].trim(),
        image9: columns[18].trim(),
        image10: columns[19].trim()
      };
      
      // Correct "Lubricants category" to "Lubricants"
      if (rowData.category === "Lubricants category") {
        rowData.category = "Lubricants";
      }

      inventoryData.push(rowData); // Store each row's data
      categorySet.add(rowData.category); // Add category to Set for uniqueness

      const tr = document.createElement('tr');

      // Loop through each column in rowData
      Object.keys(rowData).forEach((key, index) => {
        const td = document.createElement('td');

        // If column is one of the image columns (10 to 19), create an img element only if URL is present
        if (index >= 10 && index <= 19 && rowData[key]) {
          const img = document.createElement('img');
          img.src = rowData[key];
          img.alt = "Image"; // Alt text for accessibility
          td.appendChild(img);
        } else {
          // For other columns, set text content directly
          td.textContent = rowData[key];
        }

        tr.appendChild(td);
      });

      tableBody.appendChild(tr);
    });

    // Populate the category dropdown
    const categoryFilter = document.getElementById('categoryFilter');
    categorySet.forEach(category => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = category;
      categoryFilter.appendChild(option);
    });
  } catch (error) {
    console.error('Error loading inventory:', error);
  }
}

// Function to filter the table based on selected category
function filterTable() {
  const selectedCategory = document.getElementById('categoryFilter').value;
  const tableBody = document.querySelector('#inventoryTable tbody');
  tableBody.innerHTML = ''; // Clear current table content

  const filteredData = inventoryData.filter(item => {
    return selectedCategory === 'all' || item.category === selectedCategory;
  });

  filteredData.forEach(rowData => {
    const tr = document.createElement('tr');
    Object.keys(rowData).forEach((key, index) => {
      const td = document.createElement('td');

      if (index >= 10 && index <= 19 && rowData[key]) {
        const img = document.createElement('img');
        img.src = rowData[key];
        img.alt = "Image"; // Alt text for accessibility
        img.width = 40;
        img.height = 40;
        td.appendChild(img);
      } else {
        td.textContent = rowData[key];
      }

      tr.appendChild(td);
    });
    tableBody.appendChild(tr);
  });
}

// Load inventory when the page loads
document.addEventListener('DOMContentLoaded', loadInventory);
