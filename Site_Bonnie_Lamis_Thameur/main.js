/////////////////////slider/////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mon-slider", {
    loop: true,

    autoplay: {
      delay: 3000,
    },

  });

});


////////////////////////////////form//////////////////////////////


let form = document.querySelector("form");
let errorContainer = document.querySelector(".message-error");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let errorList = document.querySelector(".message-error ul");
  errorList.innerHTML = "";
  errorContainer.classList.remove("visible");




  let nom = document.querySelector("#nom");


  if (nom.value === "") {
    errorContainer.classList.add("visible");
    nom.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le champ Nom ne doit pas être vide";

    errorList.appendChild(err);
  } else {
    nom.classList.add("success");
  }



  let prenom = document.querySelector("#prenom");


  if (prenom.value === "") {
    errorContainer.classList.add("visible");
    prenom.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le champ Prénom ne doit pas être vide";

    errorList.appendChild(err);
  } else {
    prenom.classList.add("success");
  }


  let email = document.querySelector("#email");

  if (email.value === "") {
    errorContainer.classList.add("visible");
    email.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le champ Email ne doit pas être vide";

    errorList.appendChild(err);
  } else {
    email.classList.add("success");
  }


  let axeSelect = document.querySelector("#axe_select");

  if (axeSelect.value === "") {
    errorContainer.classList.add("visible");
    axeSelect.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Vous devez sélectionner un Axe";
    errorList.appendChild(err);
  } else {
    axeSelect.classList.add("success");
  }



  let successContainer = document.querySelector('.message-success')
  successContainer.classList.remove('visible')

  if (
    email.classList.contains('success') &&
    nom.classList.contains('success') &&
    prenom.classList.contains('success') &&
    axeSelect.classList.contains('success')

  ) {
    successContainer.classList.add('visible')
  }
});


/////////////////////////////////////////////////////////tabs

document.addEventListener("DOMContentLoaded", function () {
  let tabs = document.querySelectorAll('.tab');

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {

      tabs.forEach(function (tabAxe) {
        tabAxe.classList.remove('tab-active');
      });

      let contents = document.querySelectorAll('.content_tabs');
      contents.forEach(function (content_tabs) {
        content_tabs.classList.remove('active');
      });

      tab.classList.add('tab-active');

      let tabClass = tab.classList[1];
      let contentClass = 'content_tabs-' + tabClass.split('-')[1];

      document.querySelector('.' + contentClass).classList.add('active');
    });
  });
});

////////////////////////////////light mode

let toggleButton = document.querySelector('.toggle-mode');

toggleButton.addEventListener('click', function () {
  let body = document.querySelector('body');
  body.classList.toggle('light');
});




