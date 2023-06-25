fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
        "x-rapidapi-key": "d04a271587msh1c8c70737cc9b87p1da6c7jsnf560bf3fe7c6"

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






