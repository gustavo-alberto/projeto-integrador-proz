// Simulando a obtenção dos dados JSON
const animalsData = [
    {
        "id": 1,
        "petName": "Ted",
        "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        "petImage": "../images/pets1.jpg"
    },
    {
        "id": 2,
        "petName": "Caramelo",
        "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        "petImage": "../images/pets2.jpg"
    }
];

// Função para criar os cartões dos animais
function createAnimalCards(data) {
    const cardsContainer = document.getElementById("cards-container");

    data.forEach(animal => {
        // Criando o elemento do cartão
        const card = document.createElement("div");
        card.className = "card";

        // Criando o container da imagem
        const imgContainer = document.createElement("div");
        imgContainer.className = "card-img-container";

        const img = document.createElement("img");
        img.src = animal.petImage;
        img.alt = animal.petName;
        imgContainer.appendChild(img);

        // Criando o container do texto
        const textContainer = document.createElement("div");
        textContainer.className = "card-text-container";

        const title = document.createElement("p");
        title.className = "card-title";
        title.textContent = animal.petName;

        const description = document.createElement("p");
        description.className = "card-description";
        description.textContent = animal.description;

        textContainer.appendChild(title);
        textContainer.appendChild(description);

        // Criando o botão de ação
        const buttonContainer = document.createElement("div");

        const button = document.createElement("button");
        button.className = "card-action-button";

        const link = document.createElement("a");
        link.href = "confirmar-adocao.html";
        link.textContent = "Mais";

        button.appendChild(link);
        buttonContainer.appendChild(button);

        // Montando o cartão
        card.appendChild(imgContainer);
        card.appendChild(textContainer);
        card.appendChild(buttonContainer);

        // Adicionando o cartão ao container principal
        cardsContainer.appendChild(card);
    });
}

// Chamando a função para criar os cartões
createAnimalCards(animalsData);