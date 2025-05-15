fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(user => {
    const container = document.querySelector("#container")
    const primeiros10 = user.slice(0,10)
    const cards = primeiros10.map(item =>{
        return `
            <div class="card">
                <img src="https://placehold.co/600x400" alt=${item.title}/>
                <h2>${item.name}</h2>
                <p>Username: ${item.username}</p>
                <p>Email: ${item.email}</p>
                <p>Telefone: ${item.phone}</p>
                <p>Website: ${item.website}</p>
                <p>Empresa: ${item.company.name}</p>
                <p>Endereço:${item.address.street},${item.address.zipcode}, ${item.address.suite} ,${item.address.city}  </p>
            </div>
        `
    })
    container.innerHTML = cards.join("")
})