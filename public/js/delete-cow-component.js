'use strict'

AFRAME.registerComponent('delete-cow-component', {
    schema: {},
    init: function()  {
        const Context_AF = this; //this refers to "this" component, keep this context
        const Cow = Context_AF.el.object3D;

        //add event listener for "click" event on whatever entity has this component
        Context_AF.el.addEventListener('click', function(event) {
            console.log("DELETE ME");
            Context_AF.deleteCow();
        });

        //make button larger on hover
        Context_AF.el.addEventListener('mouseenter', function(event) {
            Context_AF.el.object3D.scale.set(Cow.scale.x * 1.1, Cow.scale.y * 1.1, Cow.scale.z * 1.1);
        });

        Context_AF.el.addEventListener('mouseleave', function(event) {
            Context_AF.el.object3D.scale.set(Cow.scale.x / 1.1, Cow.scale.y / 1.1, Cow.scale.z / 1.1);
        })
    },

    deleteCow: function() {
        const Context_AF = this; //be careful of "this"!
        Context_AF.el.parentNode.removeChild( Context_AF.el ); //only a parent can delete you
    }

});