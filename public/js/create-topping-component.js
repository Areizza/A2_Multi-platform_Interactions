'use strict' //strict javascript

AFRAME.registerComponent('create-topping-component', {
    schema: {},
    init: function()  {
        const Context_AF = this; //this refers to "this" component, keep this context

        //count how many toppings this pizza currently has
        let counter = 0;
        window.cheeseCount = 0;

        //add event listener for "click" event on whatever entity has this component
        Context_AF.el.addEventListener('click', function(event) {
            counter ++;
            console.log("clicked!!!!!!!! " + counter);
            console.log(window.cheeseCount);
            console.log(Context_AF.el.id);

            //cheese event (limit to maximum stack of 10)
            if(Context_AF.el.id=="cheese_button" && window.cheeseCount < 10) {
                window.cheeseCount++;
                Context_AF.createCheese(counter);
            }

            //pepperoni event
            if(Context_AF.el.id=="pepperoni_button") {
                Context_AF.createPepperoni(window.cheeseCount);
            }
            
        });

        //make button larger on hover
        Context_AF.el.addEventListener('mouseenter', function(event) {
            //el = element or entity
            //object3D = three.js 3D geometry object
            //scale = three.js vector that represents scale
            Context_AF.el.object3D.scale.set(1.08, 1.08, 1.08);
        });

        Context_AF.el.addEventListener('mouseleave', function(event) {
            Context_AF.el.object3D.scale.set(1.0, 1.0, 1.0);
        })
    },

    
    heightRemoval: function(counter) {
        counter -= 1;
    },

    //custom function for adding a layer of cheese on the pizza
    createCheese: function(counter) {
        const Context_AF = this; //be careful of "this"!

        //create an html element that makes the cheese
        let cheeseElem = document.createElement('a-entity'); //create element by code
        cheeseElem.setAttribute('class', 'clickable cheese');
        cheeseElem.setAttribute('position', {x:0, y: 0.15 + (counter * 0.01), z:0 });
        cheeseElem.setAttribute('geometry', 'primitive:cylinder; radius:0.6; height:0.01;');
        cheeseElem.setAttribute('material', 'color:#ffd867;'); //set material/texture

        //random transforms
        // cheeseElem.setAttribute('position', {x:(Math.random() * 6.0) - 3.0, y: 0, z:-4.0 - (Math.random() * 3.0)}); //random x around axis and random z behind button, above ground on y=0

        // const randScale = 0.2 + (Math.random() * 0.8);
        // cheeseElem.setAttribute('scale', {x:randScale, y:randScale, z:randScale}); //random scale

        // cheeseElem.setAttribute('rotation', {x:0, y:Math.random() * 360.0, z:0}); //random y rotation

        cheeseElem.setAttribute('delete-topping-component', "");
        cheeseElem.setAttribute('onClick', Context_AF.heightRemoval(counter));

        //attach to scene
        let scene = document.querySelector('a-scene').querySelector('#plate');
        scene.appendChild(cheeseElem);
    },

    //custom function for adding pepperonis onto the pizza
    createPepperoni: function(counter) {
        const Context_AF = this; //be careful of "this"!

        //create an html element that makes the pepperoni
        let pepperoniElem = document.createElement('a-entity'); //create element by code
        pepperoniElem.setAttribute('class', 'clickable');
        pepperoniElem.setAttribute('geometry', 'primitive:cylinder; radius:0.1; height:0.01;');
        pepperoniElem.setAttribute('material', 'color:#ca2521;'); //set material/texture

        //random position on cheese/pizza area
        pepperoniElem.setAttribute('position', {x:(Math.random() * 0.9) - 0.45, y: 0.63 + (counter * 0.011), z:(Math.random() * 0.9) - 0.45});

        //random scale
        const randScale = 0.8 + (Math.random() * 0.3);
        pepperoniElem.setAttribute('scale', {x:randScale, y:randScale, z:randScale});

        //can be deleted
        pepperoniElem.setAttribute('delete-topping-component', "");

        //attach to scene
        let scene = document.querySelector('a-scene');
        scene.appendChild(pepperoniElem);
    },
});
