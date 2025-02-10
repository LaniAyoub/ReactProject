var xhr = new XMLHttpRequest();
var url = './news_article.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() {
    if (xhr.status === 200) {
        var articles = xhr.response.articles;
        var articlesDiv = document.getElementById('articles');

        // Loop through each article in the response
        articles.forEach(function(article) {
            var articleDiv = document.createElement('div');
            articleDiv.classList.add('article');

            var title = document.createElement('h2');
            title.textContent = article.title;

            var description = document.createElement('p');
            description.textContent = article.description;

            var topics = document.createElement('h3');
            topics.textContent = 'Ways to Achieve:';

            var topicsList = document.createElement('ul');
            article.topics.forEach(function(way) {
                var listItem = document.createElement('li');
                listItem.textContent = way;
                topicsList.appendChild(listItem);
            });

            var key_points = document.createElement('h3');
            key_points.textContent = 'key points:';

            var key_pointsList = document.createElement('ul');
            article.key_points.forEach(function(key_point) {
                var listItem = document.createElement('li');
                listItem.textContent = key_point;
                key_pointsList.appendChild(listItem);
            });

            // Append the created elements to the articleDiv
            articleDiv.appendChild(title);
            articleDiv.appendChild(description);
            articleDiv.appendChild(topics);
            articleDiv.appendChild(topicsList);
            articleDiv.appendChild(key_points);
            articleDiv.appendChild(key_pointsList);

            // Append the articleDiv to the articles container
            articlesDiv.appendChild(articleDiv);
        });
    } else {
        console.error('Error loading articles:', xhr.statusText);
    }
};

// Send the request
xhr.send();
