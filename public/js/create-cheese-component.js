'use strict' //strict javascript

AFRAME.registerComponent('create-cheese-component', {
    schema: {},
    init: function()  {
        const Context_AF = this; //this refers to "this" component, keep this context
        let counter = 0;
        //add event listener for "click" event on whatever entity has this component
        Context_AF.el.addEventListener('click', function(event) {
            counter ++;
            console.log("clicked!!!!!!!! " + counter);
            Context_AF.createCheese(counter);
        });

        //make button larger on hover
        Context_AF.el.addEventListener('mouseenter', function(event) {
            //el = element or entity
            //object3D = three.js 3D geometry object
            //scale = three.js vector that represents scale
            Context_AF.el.object3D.scale.set(1.02, 1.02, 1.02);
        });

        Context_AF.el.addEventListener('mouseleave', function(event) {
            Context_AF.el.object3D.scale.set(1.0, 1.0, 1.0);
        })
    },

    //custom function for adding a layer of cheese on the pizza
    createCheese: function(counter ) {
        const Context_AF = this; //be careful of "this"!

        //create an html element that makes the cheese
        let cheeseElem = document.createElement('a-entity'); //create element by code
        cheeseElem.setAttribute('class', 'clickable');
        cheeseElem.setAttribute('position', {x:0, y: 0.63 + (counter * 0.01), z:0 });
        cheeseElem.setAttribute('geometry', 'primitive:cylinder; radius:0.6; height:0.01;');
        cheeseElem.setAttribute('material', 'color:#ffd867;'); //set material/texture

        //random transforms
        // cheeseElem.setAttribute('position', {x:(Math.random() * 6.0) - 3.0, y: 0, z:-4.0 - (Math.random() * 3.0)}); //random x around axis and random z behind button, above ground on y=0

        // const randScale = 0.2 + (Math.random() * 0.8);
        // cheeseElem.setAttribute('scale', {x:randScale, y:randScale, z:randScale}); //random scale

        // cheeseElem.setAttribute('rotation', {x:0, y:Math.random() * 360.0, z:0}); //random y rotation

        // cheeseElem.setAttribute('delete-cow-component', "");

        //attach to scene
        let scene = document.querySelector('a-scene');
        scene.appendChild(cheeseElem);
    }
});