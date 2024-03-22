import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://dev.to/api/articles?username=04anilr');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="container">
      <h1>Articles by Anil Rajput</h1>
      <ul>
        {articles.map(article => (
          <li className="article" key={article.id}>
            <img src={article.cover_image} alt={article.title} /> {/* Added image tag */}
            <div>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <a href={article.url}><button>Read more</button></a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
