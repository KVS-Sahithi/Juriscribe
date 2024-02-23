window.onload = function() {
    fetch('http://localhost:3000/get-news')
      .then(response => response.json())
      .then(articles => {
        const newsSection = document.querySelector('.news-section');
        newsSection.innerHTML = '';
  
        articles.forEach(article => {
          const card = document.createElement('div');
          card.className = 'card';
  
          card.innerHTML = `
            <img src="${article.urlToImage}" class="card-img-top" alt="Article Image">
            <div class="card-body">
              <h5 class="card-title">${article.title}</h5>
              <p class="card-text">${article.description}</p>
              <a href="${article.url}" class="btn btn-primary">Read more</a>
            </div>
          `;
  
          newsSection.appendChild(card);
        });
      })
      .catch(error => console.error('An error occurred:', error));
  }