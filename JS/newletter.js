const cards = document.getElementsByClassName('card');
            const cardArray = Array.from(cards);

            cardArray.forEach(card => {
                card.addEventListener('click', () => {
                    fetch('https://climate-news-feed.p.rapidapi.com/page/1?limit=10', {
                        method: 'GET',
                        headers: {
                            'X-RapidAPI-Key': 'd04a271587msh1c8c70737cc9b87p1da6c7jsnf560bf3fe7c6',
                            'X-RapidAPI-Host': 'climate-news-feed.p.rapidapi.com'
                        }
                    })
                        .then(response => response.json())
                        .then(response => {
                            console.log(response);
                            console.log(response.content);
                        })
                        .catch(err => {
                            console.log(err);
                        });
                });
            });