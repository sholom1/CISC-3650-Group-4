async function navbar(currentPage, target){
    let dropdown = await categoryDropdown(currentPage);
    let generatedNavbar = `<div class="navbar">
        <img class="navbar-item" src="./Logo.png"/>
        <a class="navbar-item ${currentPage === "Home" ? "active": ""}" href="./index.html">Home</a>
        ${dropdown}
        <a class="navbar-item ${currentPage === "About" ? "active": ""}" href="./about.html">About</a>
    </div>`
    document.getElementById(target).innerHTML = generatedNavbar;
    document.getElementById("navbar-dropdown").addEventListener("change", navigate)
}
async function categoryDropdown(currentPage){
    let categories = await fetch('./data.json').then(res => res.json()).then(data => Object.keys(data));
    return `<select class="navbar-item" id="navbar-dropdown">
        ${!categories.includes(currentPage) ? "<option selected disable hidden>Categories</option>":""}
        ${categories.map(category => `<option ${category == currentPage ? "selected disabled hidden active" : ""}>
            ${category}
        </option>`).join("")}
        </select>`
}
function navigate(ev){
    window.location = `./category.html?name=${ev.target.value}`;
}