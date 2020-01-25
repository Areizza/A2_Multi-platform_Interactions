AFRAME.registerComponent('restore-pizza-component', {
    schema: {},
    init: function()  {
        const Context_AF = this; //this refers to "this" component, keep this context

        Context_AF.el.addEventListener('click', function(event) {
            Context_AF.restorePizza(); 
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

    restorePizza: function() {
        const Context_AF = this;

        //restore all the pizza colours
        const pizza = document.getElementById("pizza");
        const sauce = document.getElementsByClassName("sauce");
        const cheese = document.getElementsByClassName("cheese");
        const pepperoni = document.getElementsByClassName("pepperoni");

        for(var i = 0; i < sauce.length; i++) {
            sauce[i].setAttribute('material', 'color:#b21807;');
        }

        for(var i = 0; i < cheese.length; i++) {
            cheese[i].setAttribute('material', 'color:#ffd867;');
        }

        for(var i = 0; i < pepperoni.length; i++) {
            pepperoni[i].setAttribute('material', 'color:#ca2521;');
        }

        pizza.setAttribute('material', 'color:#bf8d3c; roughness:0.8;');
    }
});