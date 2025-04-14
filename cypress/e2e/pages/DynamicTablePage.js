class DynamicTablePage { // Defines DynamicTablePage class for testing a dynamic table page
  visit() { // Method to navigate to the dynamic table page
    cy.visit("/dynamictable"); // Visits /dynamictable URL
  }

  getColumnIndexByName(columnName) { // Method to find index of a column by its name
    return cy.get('[role="rowgroup"]') // Selects all rowgroup elements
      .first() // Takes the first rowgroup (likely headers)
      .find('[role="columnheader"]') // Finds column headers
      .then((headers) => { // Processes headers array
        for (let i = 0; i < headers.length; i++) { // Loops through headers
          if (headers[i].innerText.trim() === columnName) { // Checks if header text matches columnName
            return i; // Returns matching index
          }
        }
        throw new Error(`Column "${columnName}" not found`); // Throws error if column not found
      });
  }

  getChromeCpuFromTable() { // Method to get CPU value for Chrome from table
    return this.getColumnIndexByName("CPU").then((cpuIndex) => { // Gets CPU column index
      return cy.get('[role="rowgroup"]') // Selects all rowgroups
        .eq(1) // Takes second rowgroup (data rows)
        .find('[role="row"]') // Finds all rows
        .contains("Chrome") // Locates row with "Chrome"
        .parent() // Gets parent row
        .find('[role="cell"]') // Finds cells in row
        .eq(cpuIndex); // Selects cell at CPU column index
    });
  }

  getChromeCpuFromLabel() { // Method to get Chrome CPU from warning label
    return cy.get("p.bg-warning"); // Finds paragraph with bg-warning class
  }
}

export default new DynamicTablePage(); // Exports a single instance of DynamicTablePage
