var aframe = require('aframe');

AFRAME.registerComponent('main', {
    init: function () {
        var self = this;
        var card = document.querySelector('#card');
        var cardText = document.querySelector('#card-text');
        card.addEventListener('click', function(e){
            new TWEEN.Tween({ py:-2, rx:-90 })
            .to ({ py:-1, rx:0 }, 1000)
            .easing( TWEEN.Easing.Cubic.InOut )
            .onUpdate(function(){
                var _this = this;
                self.setAttrs(card, {
                    'position': { x:0, y:_this.py, z:-1 },
                    'rotation': { x:_this.rx, y:0, z:0 }
                });
            })
            .onStart(function(){
                cardText.setAttribute('value', 'WAVEF');
            })
            .onComplete(function(){
                cardText.setAttribute('value', 'Hello');
            })
            .start();
        });
    },

    setAttrs: function (target, attrs) {
        for (var i in attrs) {
            target.setAttribute(i, attrs[i]);
        }
    }
});