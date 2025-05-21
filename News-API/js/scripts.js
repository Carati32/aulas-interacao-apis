const container = document.getElementById('news-container');

fetch('https://newsapi.org/v2/top-headlines?country=us&category=technology', {
    method: 'GET',
    headers: {
        'X-Api-Key': '2f561f401ed8431ea5398241d33ca9e3'
    }
})
    .then(response => response.json())
    .then(data => {
        const articles = data.articles;
        articles.forEach(article => {
            const card = document.createElement('div');
            card.classList.add('card');


            card.innerHTML = `
        <img src="${article.urlToImage || 'https://placehold.co/600x400'}" alt="News Image" />
        <div class="card-content">
          <h2>${article.title}</h2>
          <p>${article.description || 'No description available.'}</p>
          <a href="${article.url}" target="_blank">Read more</a>
        </div>
      `;


            container.appendChild(card);
        });
    })
    .catch(error => {
        container.innerHTML = '<p>Error loading news.</p>';
        console.error('Error:', error);
    });
