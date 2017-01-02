(function() {
  'use strict';

  // Helpers
  function each(nodes, callback, scope) {
    for (var i = 0; i < nodes.length; i++) {
      callback.call(scope, nodes[i]);
    }
  }

  function createEl(el) {
    return document.createElement(el);
  }

  var blur = document.querySelector('.bokeh-blur');

  var bokeh = {
    init: function(el) {
      var bokeh = this;
      var imgs;
      var tabs;

      el.setAttribute('data-bokeh', true);

      // Create DOM elements
      imgs = el.querySelectorAll('img');
      bokeh.createTabs(el, imgs);
      bokeh.createCloseButton(el);

      // Attach events
      tabs = el.querySelectorAll('.bokeh__tabs > li');
      bokeh.setActive(tabs[0], imgs[0]);
    },

    createTabs: function(el, imgs) {
      // Make a container for the tabs
      el.appendChild(createEl('ul')).className = 'bokeh__tabs';
      var tabs = el.querySelector('.bokeh__tabs', el);
      var li;

      // Make a tab for each image
      each(imgs, function(img, idx) {
        var idx = 0;
        li = createEl('li');
        tabs.appendChild(li);
        bokeh.tabClickHandler(li, img);
      });
    },

    createCloseButton: function(el) {
      // Make a close button
      el.appendChild(createEl('div')).className = 'bokeh__close';
      var closeBtn = el.querySelector('.bokeh__close', el);
      closeBtn.innerHTML = 'CLOSE';

      // Attach click handler to close modal
      closeBtn.addEventListener('click', function() {
        el.classList.remove('is-visible');
        if (blur)
          blur.classList.remove('has-blur');
      });
    },

    tabClickHandler: function(tab, img) {
      tab.addEventListener('click', function() {
        if (tab.getAttribute('data-index') === img.getAttribute('data-index')) {
          bokeh.setActive(tab, img);
        }
      });
    },

    setActive: function(tab, img) {
      var isActive = 'is-active';

      if (parent(tab) !== null)
        parent(tab).classList.remove(isActive);
      if (parent(img) !== null)
        parent(img).classList.remove(isActive);

      if (img.hasAttribute('data-src')) {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.removeAttribute('data-src');
      }
      tab.classList.add(isActive);
      img.classList.add(isActive);

      function parent(el) {
        return el.parentNode.querySelector('.is-active');
      }
    },

    showModal: function(el) {
      var href = el.getAttribute('href').replace('#', '');
      var modal = document.getElementById(href);

      el.addEventListener('click', function() {
        modal.classList.add('is-visible');
        if (blur)
          blur.classList.add('has-blur');
        if (!modal.getAttribute('data-bokeh'))
          bokeh.init(modal);
      });
    }
  };

  var anchors = document.querySelectorAll('.bokeh-link');

  each(anchors, function(el) {
    bokeh.showModal(el);
  });

})();
