const tabulate = function (data,columns) {
    const table = d3
      .select('body')
      .append('table')
      .attr("class", "table table-striped table-hover")

    const thead = table.append('thead')
    const tbody = table.append('tbody')
  
    thead.append('tr')
      .selectAll('th')
        .data(columns)
        .enter()
      .append('th')
        .text(function (d) { return d })
  
    const rows = tbody.selectAll('tr')
        .data(data)
        .enter()
      .append('tr')
  
    const cells = rows.selectAll('td')
        .data(function(row) {
            return columns.map(function (column) {
                return { column: column, value: row[column] }
          })
      })
      .enter()
    .append('td')
      .text(function (d) { return d.value })
  
    return table;
  }
  d3.csv('pipesizes.csv',function (data) {
      const columns = ['Material', 'Standard', 'Nominal','OD','OD (mm)','Tolerance','Notes']
    tabulate(data,columns)
  })