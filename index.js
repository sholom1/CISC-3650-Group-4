async function GenerateCards(target){
    let targetElement = document.getElementById(target)
    let cardData = await fetch('./data.json').then(res => res.json())
        .then(data => Object.entries(data).map(([key, value]) => ({category: key, choice:value.shift()})))
    let generatedCards = `${cardData.map(card => 
        `<div class="card">
            <h4 class="card-title">${card.category}</h4>
            <div class="card-content">
                <img src="./Images/${card.category}-placeholder.png"/>
                <div class="card-text"
                    <h5>(Our choice)</h5>
                    <h6>${card.choice.retailer}</h6>
                    <h1>${card.choice.price}</h1>
                    <img src="./Images/stars-placeholder.png"/>
                </div>
            </div>
            <div class="card-buttons">
                <a href="./category.html?name=${card.category}">
                    <button>Explore Options</button>
                </a>
                <a href="${card.choice.link}">
                    <button>Purchase</button>
                </a>
            </div>
        </div>`).join("")}`
    targetElement.innerHTML = generatedCards;
}