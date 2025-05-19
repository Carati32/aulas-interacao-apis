fetch("https://dog.ceo/api/breeds/image/random")
.then(response => response.json())
.then(dogs => {
    container.innerHTML = `<img src=${dogs.message}>`
})
