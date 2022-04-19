async function navbar(currentPage, target){
    let dropdown = await categoryDropdown(currentPage);
    generatedNavbar = `<div class="navbar">
        <img src="images/Logo.png"/>
        <a class="navbar-item" href="./index.html">Home</a>
        ${dropdown}
        <a class="navbar-item" href="./about.html">About</a>
    </div>`
    document.getElementById(target).innerHTML = generatedNavbar;
    document.getElementById("navbar-dropdown").addEventListener("change", navigate)
}
async function categoryDropdown(currentPage){
    let categories = await fetch('./data.json').then(res => res.json()).then(data => Object.keys(data));
    return `<select class="navbar-item" id="navbar-dropdown">
        ${!categories.includes(currentPage) ? "<option selected disable hidden>Categories</option>":""}
        ${categories.map(category => `<option ${category == currentPage ? "selected disabled hidden" : ""}>
            <a href=./category?name=${category}>${category}</a>
        </option>`).join("")}
        </select>`
}
function navigate(ev){
    window.location = `./category?name=${ev.target.value}`;
}