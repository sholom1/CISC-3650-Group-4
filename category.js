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
                <td><img src="${entry.image}"/></td>
                <td><span>${entry.description}</span></td>
                <td><span>${entry.rating}</span></td>
                <td><span>${entry.quantity}</span></td>
                <td><span>\$${entry.price}</span></td>
                <td><span>\$${entry.price / entry.quantity}</span></td>
                <td><span>${entry.link}</span></td>
            </tr>`).join("")}`
        targetElement.innerHTML += generatedTable;
    }
    else {
        targetElement.innerHTML += "<tr><span>Category not found</span></tr>"
    }
}