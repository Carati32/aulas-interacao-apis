fetch("https://dog.ceo/api/breeds/image/random")
.then(response => response.json())
.then(dogs => {
    const container = document.getElementById('container');
      container.innerHTML = `<img src=${dogs.message}>`
})
