const contentHome = () => {
  // Root div
  const divMain = document.getElementById("content");
  // Image for home tab
  const divHomeImage = document.createElement("div");
  divHomeImage.id = "home-image";
  divHomeImage.classList.add("content-image");
  divHomeImage.innerHTML = "<img src='./images/mchughs_logo_red.png' />";
  // Header for home tab
  const divHomeHeader = document.createElement("div");
  divHomeHeader.id = "home-header";
  divHomeHeader.classList.add("content-header");
  divHomeHeader.innerHTML = "<h2>Welcome to McHugh's</h2>";
  // About for home tab
  const divHomeCopy = document.createElement("div");
  divHomeCopy.id = "home-copy";
  divHomeCopy.classList.add("content-copy");
  divHomeCopy.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor aliquam nulla facilisi cras fermentum odio eu. Aenean et tortor at risus viverra adipiscing at in tellus. Est sit amet facilisis magna. Viverra accumsan in nisl nisi scelerisque. Aenean euismod elementum nisi quis eleifend. Et malesuada fames ac turpis. Magna etiam tempor orci eu lobortis elementum nibh tellus. Risus at ultrices mi tempus imperdiet. Sed odio morbi quis commodo odio aenean sed adipiscing. Massa eget egestas purus viverra accumsan. Tincidunt eget nullam non nisi. Dolor purus non enim praesent. Orci nulla pellentesque dignissim enim. Velit scelerisque in dictum non. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Velit euismod in pellentesque massa. Interdum velit euismod in pellentesque massa placerat. Massa tincidunt dui ut ornare lectus sit amet est. A iaculis at erat pellentesque adipiscing.<br><br>Vitae sapien pellentesque habitant morbi tristique senectus. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Magnis dis parturient montes nascetur ridiculus mus mauris. Et netus et malesuada fames ac turpis. Massa placerat duis ultricies lacus sed turpis. Ipsum faucibus vitae aliquet nec. Lacus sed turpis tincidunt id aliquet risus feugiat in. Senectus et netus et malesuada fames ac. Parturient montes nascetur ridiculus mus mauris vitae ultricies. Semper auctor neque vitae tempus. Eu feugiat pretium nibh ipsum consequat nisl vel. Fermentum iaculis eu non diam phasellus vestibulum. Et tortor at risus viverra adipiscing. Eget mi proin sed libero enim sed. Purus non enim praesent elementum facilisis. Vulputate enim nulla aliquet porttitor lacus. Curabitur gravida arcu ac tortor dignissim convallis aenean. A condimentum vitae sapien pellentesque habitant."
  // Add content to page
  divMain.append(divHomeImage, divHomeHeader, divHomeCopy);
}

export default contentHome;
