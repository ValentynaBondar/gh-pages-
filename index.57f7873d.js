!function(){var e={openModalMenu:document.querySelector(".menu-btn-open"),closeModalMenu:document.querySelector(".mob-menu__btn-close"),menu:document.querySelector(".mob-menu"),body:document.querySelector("body")};function o(){e.menu.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openModalMenu.addEventListener("click",o),e.closeModalMenu.addEventListener("click",o)}(),function(){var e={openWindow:document.querySelector(".header-btn"),closeWindow:document.querySelector(".header-modal__btn-close"),Modal:document.querySelector(".header-backdrop"),body:document.querySelector("body")};function o(){e.Modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openWindow.addEventListener("click",o),e.closeWindow.addEventListener("click",o)}(),function(){var e={openWindowMobil:document.querySelector(".mob-menu__btn"),menu:document.querySelector(".mob-menu"),Modal:document.querySelector(".header-backdrop"),menuMob:document.querySelector(".mob-menu")};e.openWindowMobil.addEventListener("click",(function(){e.Modal.classList.toggle("is-hidden"),e.menuMob.classList.toggle("is-hidden")}))}();
//# sourceMappingURL=index.57f7873d.js.map
