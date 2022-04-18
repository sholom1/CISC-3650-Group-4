function navbar(currentPage, target){
    categoryDropdown(currentPage);
    generatedNavbar = `<div class="navbar">
        <img src="images/Logo.png"/>
        <button>Home</button>
        <button>About</button>
    </div>`
}
function categoryDropdown(currentPage){
    fetch('./data.json').then(res => res.json()).then(data => console.log(data));
}