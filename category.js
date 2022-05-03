async function renderCategories(target){
    let categoryName = new URLSearchParams(window.location.search).get('name');
    console.log(categoryName);
    let entries = await fetch("./data.json").then(res => res.json())
    .then(data => {
        console.log(data)
        if (categoryName && data[categoryName])
            return data[categoryName]
        if (!categoryName){
            return Object.entries(data).flatMap(([key, value]) => value)
        }
    }).catch(err=>console.log(err));
    console.log(entries)
    let targetElement = document.getElementById(target);
    if (entries && entries.length > 0){
        let generatedTable = `${entries.map(entry => 
            `<tr>
                <td><a HREF="${entry.link}"><img src="${entry.image}"/></td>
                <td><span>${entry.description}</span></td>
                <td><span>${entry.rating}</span></td>
                <td><span>${entry.quantity}</span></td>
                <td><span>\$${entry.price}</span></td>
                <td><span>\$${Math.round(100*(entry.price / entry.quantity))/100}</span></td>
                <td><a href="${entry.link}">${entry.retailer}</span></td>
            </tr>`).join("")}`
        targetElement.innerHTML += generatedTable;
    }
    else {
        targetElement.innerHTML += "<tr><span>Category not found</span></tr>"
    }
}