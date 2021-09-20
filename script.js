var burgerMenuButton = document.getElementById("Burger-menu");

burgerMenuButton.addEventListener("mouseenter", function () {
  if (burgerMenuButton.classList.contains("Burger-menu-container"))
    return (
      (burgerMenuButton.innerHTML =
        '<div class="Burger-menu-icon-2"><svg viewBox="0 0 32 32"preserveAspectRatio="none"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2 s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2 S29.104,22,28,22z"style="fill:#fff"/></svg></div><ul class="Burger-menu-list"><li class="Burger-menu-list-item-container"><a class="Burger-menu-list-item" href="#about">About</a></li><li class="Burger-menu-list-item-container"><a class="Burger-menu-list-item" href="#experience">Experience</a></li><li class="Burger-menu-list-item-container"><a class="Burger-menu-list-item" href="#education">Education</a></li><li class="Burger-menu-list-item-container"><a class="Burger-menu-list-item" href="#certificates">Certificates</a></li><li class="Burger-menu-list-item-container"><a class="Burger-menu-list-item" href="#skills">Skills</a></li><li class="Burger-menu-list-item-container"><a class="Burger-menu-list-item" id="codeExample" href="#code">Code&nbsp;Example</a></li><li class="Burger-menu-list-item-container"><a class="Burger-menu-list-item" href="https://github.com/Stellarator85" target="_blank">GitHub</a></li><li class="Burger-menu-list-item-container"><a class="Burger-menu-list-item" href="#contacts">Contacts</a></li></ul>') +
      burgerMenuButton.classList.add("Burger-menu-container-large")
    );
});
burgerMenuButton.addEventListener("mouseleave", function () {
  if (burgerMenuButton.classList.contains("Burger-menu-container-large"))
    return (
      burgerMenuButton.classList.remove("Burger-menu-container-large") +
      (burgerMenuButton.innerHTML =
        '<div class="Burger-menu-icon-1"><svg viewBox="0 0 32 32" preserveAspectRatio="none"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2 s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2 S29.104,22,28,22z" style="fill:#fff"/></svg></div>')
    );
});
