const express = require('express');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('507aa20639d346c2aecf755140612d3d');

const app = express();

app.use(express.static('public'));

app.get('/get-news', (req, res) => {
  newsapi.v2.everything({
    sources: 'google-news-in,the-hindu,the-times-of-india,bbc-news,the-verge',
    q: 'legal awareness',
    language: 'en',
  }).then(response => {
    res.json(response.articles);
  }).catch(error => {
    console.error(error);
    res.status(500).send('An error occurred while fetching news articles.');
  });
});

// newsapi.v2.sources({
//   category: 'general',
//   language: 'en',
//   country: 'in'
// }).then(response => {
//   console.log(response);
  
// });
app.listen(3000, () => console.log('Server is running on port 3000'));