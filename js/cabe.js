(function () {
    'use strict'; //JSHint

    var workLink = document.getElementById('work-link'),
        portfolio = document.getElementById('portfolio'),
        header = document.getElementById('splash'),
        back = document.getElementById('back'),
        img = document.getElementsByTagName('img'),
        fig = document.getElementsByTagName('figure'),

        doWork = function () {
            portfolio.className = 'in-focus';
            header.className = 'in-background';
        },

        hideWork = function () {
            portfolio.className = '';
            header.className = '';
        },

        nextImage = function() {
            return function() {
                for (var i = 0; i <= fig.length; i++) {
                    var figLoop = fig[i];

                    if ( figLoop.lastElementChild.className === 'active' ) {
                       figLoop.firstElementChild.className = 'active';
                       //figLoop.getElementsByTagName("img").className = '';
                       console.log("if");
                    }
                    else {
                        fig.getElementsByClassName("active").nextElementSibling.className = 'active';
                        // this.className = '';
                        console.log('else');
                    }
                }
            };
        };

    workLink.addEventListener('click', doWork);
    back.addEventListener('click', hideWork);

    for (var i = 0; i < img.length; i++) {
        var item = img[i];
        item.onclick = nextImage(item);
    }

}());