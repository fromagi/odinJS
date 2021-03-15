const contentMenu = () => {
  const divMain = document.getElementById("content");
  const divMenu = document.createElement("div");
  divMenu.id = "menu-grid";
  divMain.append(divMenu);
  fetch("./menu.json")
    .then(response => response.json())
    .then(menu => {
      let i = 0;
      menu.forEach(item => {
		const divMenuItem = document.createElement("div");
		divMenuItem.id = `menu-item-${ i }`;
		divMenuItem.classList.add("menu-item");
		divMenuItem.innerHTML = `
          <div class="menu-item-main">
            <h3>${ item.name }</h3>
            <span class="menu-dots">${ ".".repeat(10000) }</span>
            <span class="menu-price">${ item.price }</span>
          </div>
          <div class="menu-description">${ item.description }</div>
		`;
        divMenu.append(divMenuItem);
        i++;
      });
    });
}

export default contentMenu;
