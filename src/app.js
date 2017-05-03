AFRAME.registerComponent('controller-loaded', {
        init: function() {
          this.el.addEventListener('model-loaded', function() {
            this.addState('loaded');
          });
        }
      });