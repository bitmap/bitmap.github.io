(function () {
  'use strict';

    var makeGallery = function(gallery) {

    function createEl(el) {
      return document.createElement(el);
    }

    function tabClick(e) {
      var index = e.target.getAttribute("data-index"),
          imageCollection = gallery.querySelectorAll("img"),
          elem, j;

      if (tabItems[index].classname = "active") {

        for (j = 0; j < imageCollection.length; j++) {
          elem = imageCollection[j];

          if (j == index) {

            if (elem.hasAttribute("data-src")) {
              elem.setAttribute('src', elem.getAttribute('data-src'));
              elem.removeAttribute('data-src');
            }

            elem.classList.add("active");
            tabItems[j].classList.add("active");
          }

          else {
            tabItems[j].classList.remove("active");
            elem.classList.remove("active");
          }
        }
      }
    }

    gallery.appendChild(createEl('ul')).className = "tabs";
    gallery.appendChild(createEl('div')).className = "close";

    var closeBtn = gallery.querySelector('.close');

    var tabHolder = gallery.querySelector(".tabs"),
      tabItems = tabHolder.children,
      tabCount = gallery.querySelectorAll("img").length,
      elem, i;

    for (i = 0; i < tabCount; i++) {
      elem = createEl("li");
      tabHolder.appendChild(elem);
      elem.setAttribute("data-index", i);
      elem.innerHTML = i + 1;
      elem.addEventListener("click", tabClick);
    }

    var img = gallery.querySelector("img");
    img.setAttribute('src', img.getAttribute('data-src'));
    img.removeAttribute('data-src');
    img.classList.add("active");
    tabItems[0].classList.add("active");

    closeBtn.addEventListener('click', function() {
      gallery.classList.remove('is-visible');
    })
  };

  function findGallery(el) {
    el.addEventListener("click", function() {
      var href = el.getAttribute('href').replace('#','');
      document.getElementById(href).classList.add('is-visible')
    });
  }

  var tabContainer = document.querySelectorAll('.gallery'),
      link = document.querySelectorAll('.launch');

  Array.prototype.forEach.call(tabContainer, function(el) {
    makeGallery(el);
  });

  Array.prototype.forEach.call(link, function(el) {
    findGallery(el);
  });

})();
