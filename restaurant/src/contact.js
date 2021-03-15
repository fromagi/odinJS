const contentContact = () => {
  // Root div
  const divMain = document.getElementById("content");
  // Image for contact tab
  const divHomeImage = document.createElement("div");
  divHomeImage.id = "contact-image";
  divHomeImage.classList.add("content-image");
  divHomeImage.innerHTML = "<img src='./images/mchughs_logo_white.png' />";
  // Header for contact tab
  const divHomeHeader = document.createElement("div");
  divHomeHeader.id = "contact-header";
  divHomeHeader.classList.add("content-header");
  divHomeHeader.innerHTML = "<h2>Contact Us</h2>";
  // About for contact tab
  const divHomeCopy = document.createElement("div");
  divHomeCopy.id = "contact-copy";
  divHomeCopy.classList.add("content-copy");
  divHomeCopy.innerText = "Copy will follow, maybe..."
  // Add content to page
  divMain.append(divHomeImage, divHomeHeader, divHomeCopy);
}

export default contentContact;

