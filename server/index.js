const express = require('express');
const request = require('request');

const path = require('path');

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(express.json());

// const requestMap = {
//   'inna-service/bundle.js': 'http://localhost:3005/dist/bundle.js'
//   'inna-service/bundle.css': 'http://localhost:3005/dist/bundle.css'
// }

// app.get('*', ((req, res) => {
//   request(requestMap[req.path.url], (err, response) => res.send(response.body));
// }))

// docker run -d -p 3001:3001 -- kyle
// docker run -d -p 3002:3002 -- patrick
// docker run -d -p 3003:3003 -- sayer
// docker run -d -p 3004:3004 -- matt
// docker run -d -p 3005:3005 -- inna

app.get('/kyle-service/bundle.js', (req, res) => {
  request('http://localhost:3001/bundle.js', (err, response) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.send(response.body);
  });
});

app.get('/api/listings/:Listing_id', (req, res) => {
  request('http://localhost:3001/api/listings/' + req.params.Listing_id, (err, response) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.send(response.body);
  });
});

app.get('/patrick-service/bundle.js', (req, res) => {
  request('http://localhost:3002/bundle.js', (err, response) => {
if (err) {
  console.log(err);
  res.sendStatus(500);
}
    res.send(response.body);
  });
});

app.get('/listings/:id', (req, res) => {
  request('http://localhost:3002/listings/' + req.params.id, (err, response) => {
if (err) {
  console.log(err);
  res.sendStatus(500);
}
    res.send(response.body);
  });
});

app.get('/sayer-service/bundle.js', (req, res) => {
  request('http://localhost:3003/bundle.js', (err, response) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.send(response.body);
  });
});

app.get('/api/listing/:Listing_id/', (req, res) => {
  request('http://localhost:3003/api/listing/' + req.params.Listing_id, (err, response) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.send(response.body);
  });
});

// app.get('/matt-service/bundle.js', (req, res) => {
//   request('http://localhost:3004/bundle.js', (err, response) => {
// if (err) {
//   console.log(err);
//   res.sendStatus(500);
// }
//     res.send(response.body);
//   });
// });

// app.get('/api/listings/:listing_id/', (req, res) => {
//   request('http://localhost:3004/api/listings/' + req.params.listing_id, (err, response) => {
// if (err) {
//   console.log(err);
//   res.sendStatus(500);
// }
//     res.send(response.body);
//   });
// });

app.get('/inna-service/bundle.js', (req, res) => {
  request('http://localhost:3005/dist/bundle.js', (err, response) => {
    // console.log('response ', response.body);

    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.send(response.body);
  });
});

app.get('/api/photos/:id/', (req, res) => {
  request('http://localhost:3005/api/photos/' + req.params.id, (err, response) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }

    res.send(response.body);
  });
});

app.listen(PORT, () => {
  console.log('Server listening on port: ', PORT);
});
