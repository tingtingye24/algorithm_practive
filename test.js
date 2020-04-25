const csv = require('csv-parser');
const fs = require('fs');

fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (row) => {
    console.log(row); //read in csv anad console.log
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });