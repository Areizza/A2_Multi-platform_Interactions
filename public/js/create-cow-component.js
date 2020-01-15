'use strict' //strict javascript

AFRAME.registerComponent('create-cow-component', {
    schema: {},
    init: function()  {
        const Context_AF = this; //this refers to "this" component, keep this context

        //add event listener for "click" event on whatever entity has this component
        Context_AF.el.addEventListener('click', function(event) {
            console.log("clicked!!!!!!!!");
        });

        //make button larger on hover
        Context_AF.el.addEventListener('mouseenter', function(event) {
            //el = element or entity
            //object3D = three.js 3D geometry object
            //scale = three.js vector that represents scale
            Context_AF.el.object3D.scale.set(1.1, 1.1, 1.1);
        });

        Context_AF.el.addEventListener('mouseleave', function(event) {
            Context_AF.el.object3D.scale.set(1.0, 1.0, 1.0);
        })
    },

    //custom function for creating random cows
    createCow: function() {
        const Context_AF = this; //be careful of "this"!

        //create an html element that loads in cows model
    }
});