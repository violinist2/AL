      var items = document.querySelectorAll(".add-artist");
      var modalOverlay = document.querySelector("#overlay");
      for (var i = 0; i < items.length; i++) {
        items[i].addEventListener("click", function (event) {
          event.preventDefault();
          buyPopUp.classList.add("modal-content-show3");
          modalOverlay.style.opacity='0.5';
        });

      }
      var buyPopUp = document.querySelector(".pop-up");
      var buyClose = buyPopUp.querySelector(".pop-up-close");
    
      buyClose.addEventListener("click", function (event) {
        event.preventDefault();
        buyPopUp.classList.remove("modal-content-show3");
        modalOverlay.style.opacity='0';
      });

      window.addEventListener("keydown", function (event) {
        if (event.keyCode === 27) {
          if (buyPopUp.classList.contains("modal-content-show3")) {
            buyPopUp.classList.remove("modal-content-show3");
          }
        }
      });



     
      var loginPopUp = document.querySelector("#pop-up-login");
      var loginClose = document.querySelector("#login-close");
      var clickLogin = document.querySelector('#login-open');
      var modalOverlay = document.querySelector("#overlay");
      clickLogin.addEventListener("click", function (event) {
        event.preventDefault();
        loginPopUp.classList.add("modal-content-show");
        modalOverlay.style.opacity='0.5';
      });
      loginClose.addEventListener("click", function (event) {
        event.preventDefault();
        loginPopUp.classList.remove("modal-content-show");
        modalOverlay.style.opacity='0';
      });
      
  
      var repeatPopUp = document.querySelector("#pop-up-repeat-login");
      var repeatClose = document.querySelector("#repeat-close");
      var clickRepeat = document.querySelector('#repeat-parol');
      clickRepeat.addEventListener("click", function (event) {
        event.preventDefault();
        repeatPopUp.classList.add("modal-content-show2");
        loginPopUp.classList.remove("modal-content-show");
        modalOverlay.style.opacity='0.5';
      });
      repeatClose.addEventListener("click", function (event) {
        event.preventDefault();
        repeatPopUp.classList.remove("modal-content-show2");
        modalOverlay.style.opacity='0';
      });
      
