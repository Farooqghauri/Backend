// /*************  ✨ Codeium Command ⭐  *************/
// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });
// /******  f98a2770-5a79-47a9-81b4-eb6f5adc33c3  *******/


const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Backend World!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});


