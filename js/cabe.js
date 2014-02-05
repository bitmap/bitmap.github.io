(function () {

    function hasClass(elem, className) {
        return (new RegExp("(^|\\s)" + className + "(\\s|$)")).test(elem.className);
    };

    function makeTabs(tabContainer) {

      tabContainer.appendChild(document.createElement("ul")).className = "tabs";

      var tabHolder = tabContainer.querySelector(".tabs"),
        tabItems = tabHolder.children,
        tabParent = tabHolder.parentNode,
        count = tabParent.querySelectorAll("img").length,
        initialTabNumber = 1;

      for (i = 0; i < count; i++) {
        elem = document.createElement("li");
        tabHolder.appendChild(elem);
        elem.setAttribute("data-index", i);
        elem.addEventListener("click", tabClick);
        elem.innerHTML = initialTabNumber++;
      }

      function tabClick(e) {

        var index = e.target.getAttribute("data-index"),
            imageCollection = tabContainer.querySelectorAll("img"),
            elem,
            j;

        if (!hasClass(tabItems[index], "active")) {

          for (j = 0; j < imageCollection.length; j++) {
            elem = imageCollection[j];

            if (j == index) {

              if (elem.hasAttribute("data-src")) {
                elem.setAttribute('src', elem.getAttribute('data-src'))
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

      var img = tabContainer.querySelector("img");

      img.setAttribute('src', img.getAttribute('data-src'))
      img.removeAttribute('data-src');
      img.classList.add("active");
      tabItems[0].classList.add("active");
    }
    
    var each = Array.prototype.forEach,
        project = document.querySelectorAll('.project');

    each.call(project, function(element) {
      makeTabs(element);
    });

})();