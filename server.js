const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// app.post('/ide', (req, res) => {
//   //getting the required data from the request
//   let code = req.body.code;
//   let language = req.body.language;
//   let input = req.body.input;

//   if (language === 'python') {
//     language = 'py';
//   }

//   let data = {
//     code: code,
//     language: language,
//     input: input
//   };
//   let config = {
//     method: 'post',
//     url: 'https://codexweb.netlify.app/.netlify/functions/enforceCode',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     data: data
//   };
//   //calling the code compilation API
//   Axios(config)
//     .then((response) => {
//       res.send(response.data);
//       console.log(response.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

// Define Routes
app.use('api/ide', require('./routes/api/ide'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
