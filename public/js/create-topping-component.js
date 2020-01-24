'use strict' //strict javascript

AFRAME.registerComponent('create-topping-component', {
    schema: {},
    init: function()  {
        const Context_AF = this; //this refers to "this" component, keep this context

        //count how layers of cheese this pizza currently has; other toppings will go on top
        window.cheeseCount = 0;

        //total number of toppings
        let count = 0;

        //add event listener for "click" event on whatever entity has this component
        Context_AF.el.addEventListener('click', function(event) {
            console.log("clicked!!!!!!!! ");
            console.log(window.cheeseCount);
            console.log(Context_AF.el.id);

            //sauce event
            if(Context_AF.el.id=="sauce_button") {
                Context_AF.createSauce(window.cheeseCount);
            }

            //cheese event
            if(Context_AF.el.id=="cheese_button" && window.cheeseCount < 10) {
                window.cheeseCount++;

                Context_AF.createCheese(window.cheeseCount);
            }

            //pepperoni event
            if(Context_AF.el.id=="pepperoni_button") {
                Context_AF.createPepperoni(window.cheeseCount);
            }

            //new pizza
            if(Context_AF.el.id=="reset_button"){
                window.cheeseCount = 0;

                Context_AF.createNew();
            }

            count++
            console.log("There are currently: " + count + " toppings.");
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

    //custom function for adding tomato sauce to the pizza
    createSauce: function(counter) {
        const Context_AF = this; //be careful of "this"!

        //create an html element that makes the sauce
        let sauceElem = document.createElement('a-entity'); //create element by code
        sauceElem.setAttribute('class', 'clickable topping');
        sauceElem.setAttribute('geometry', 'primitive:cylinder; radius:0.6; height:0.01;');
        sauceElem.setAttribute('material', 'color:#b21807;'); //set material/texture

        //random position on cheese/pizza area
        sauceElem.setAttribute('position', {x:0, y: 0.027 + (counter * 0.011), z:0});

        //can be deleted
        sauceElem.setAttribute('delete-topping-component', "");

        //attach to scene
        let scene = document.querySelector('a-scene').querySelector('#pizza');;

        scene.appendChild(sauceElem);
    },

    //custom function for adding a layer of cheese on the pizza
    createCheese: function(counter ) {
        const Context_AF = this; //be careful of "this"!

        //create an html element that makes the cheese
        let cheeseElem = document.createElement('a-entity'); //create element by code
        cheeseElem.setAttribute('class', 'topping');
        cheeseElem.setAttribute('position', {x:0, y: 0.027 + (counter * 0.01), z:0 });
        cheeseElem.setAttribute('geometry', 'primitive:cylinder; radius:0.6; height:0.01;');
        cheeseElem.setAttribute('material', 'color:#ffd867;'); //set material/texture

        //random transforms
        // cheeseElem.setAttribute('position', {x:(Math.random() * 6.0) - 3.0, y: 0, z:-4.0 - (Math.random() * 3.0)}); //random x around axis and random z behind button, above ground on y=0

        // const randScale = 0.2 + (Math.random() * 0.8);
        // cheeseElem.setAttribute('scale', {x:randScale, y:randScale, z:randScale}); //random scale

        // cheeseElem.setAttribute('rotation', {x:0, y:Math.random() * 360.0, z:0}); //random y rotation

        // cheeseElem.setAttribute('delete-cow-component', "");

        //attach to scene
        let scene = document.querySelector('a-scene').querySelector('#pizza');
        scene.appendChild(cheeseElem);
    },

    //custom function for adding pepperonis onto the pizza
    createPepperoni: function(counter) {
        const Context_AF = this; //be careful of "this"!

        //create an html element that makes the pepperoni
        let pepperoniElem = document.createElement('a-entity'); //create element by code
        pepperoniElem.setAttribute('class', 'clickable topping');
        pepperoniElem.setAttribute('geometry', 'primitive:cylinder; radius:0.1; height:0.01;');
        pepperoniElem.setAttribute('material', 'color:#ca2521;'); //set material/texture

        //random position on cheese/pizza area
        pepperoniElem.setAttribute('position', {x:(Math.random() * 0.9) - 0.45, y: 0.027 + (counter * 0.011), z:(Math.random() * 0.9) - 0.45});

        //random scale
        const randScale = 0.8 + (Math.random() * 0.3);
        pepperoniElem.setAttribute('scale', {x:randScale, y:randScale, z:randScale});

        //can be deleted and plays sound on click
        pepperoniElem.setAttribute('delete-topping-component', "");
        //pepperoniElem.setAttribute('sound', 'src: assets/sounds/Puc.wav; on: click');

        //attach to scene
        let scene = document.querySelector('a-scene').querySelector('#pizza');;
        scene.appendChild(pepperoniElem);
    },

    //reset and create a new pizza by removing all the previous toppings
    createNew: function() {
        const Context_AF = this;
        const pizza = document.getElementById("pizza");

        //delete all the elements with class "topping"
        Context_AF.el.parentNode.querySelectorAll(".topping").forEach(function(a){
            a.remove()
        });

        pizza.setAttribute('material', 'color', '#bf8d3c');
    }
});
