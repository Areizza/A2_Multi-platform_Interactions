AFRAME.registerComponent('burn-pizza-component', {
    schema: {},
    init: function()  {
        const Context_AF = this; //this refers to "this" component, keep this context

        Context_AF.el.addEventListener('click', function(event) {
            Context_AF.putOven(); 
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

    putOven: function() {
        const Context_AF = this;

        //burn the pizza
        const pizza = document.getElementById("pizza");
        const food = pizza.getElementsByTagName("a-entity");

        for(var i = 0; i < food.length; i++) {
            food[i].setAttribute('material', 'color: #000');
        }

        pizza.setAttribute('material', 'color: #000; roughness:0.5');
    }
});