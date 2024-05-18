
// Function to fetch data from the API
async function fetchData() {
    try {
        const response = await fetch('https://coding-week-2024-api.onrender.com/api/data?number=1');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to render data in cards
async function renderData() {
    const container = document.querySelector('.container');
    const data = await fetchData();

    if (!data) {
        return;
    }

    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        const type = document.createElement('p');
        type.textContent = item.type;

        const headline = document.createElement('h3');
        headline.textContent = item.headline;
        
        const date = document.createElement('p');
        date.textContent = item.date;
        
        const image = document.createElement('img');
        image.setAttribute('src', item.image);
        image.setAttribute('height', '50px');

        const author = document.createElement('p');
        author.textContent = item.author;
        
        const content = document.createElement('p');
        content.textContent = item.content;

        card.appendChild(type);
        card.appendChild(headline);
        card.appendChild(date);
        card.appendChild(image);
        card.appendChild(author);
        card.appendChild(content);

        container.appendChild(card);
    });
}