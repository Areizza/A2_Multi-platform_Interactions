'use strict'

AFRAME.registerComponent('delete-topping-component', {
    schema: {},
    init: function()  {
        const Context_AF = this; //this refers to "this" component, keep this context
        const Topping = Context_AF.el.object3D;

        //add event listener for "click" event on whatever entity has this component
        Context_AF.el.addEventListener('click', function(event) {
            console.log("DELETE ME");
            
            //deletes whole stack of cheese
            if(Context_AF.el.classList.contains("cheese")) {
                console.log('AHAHAHA');
                Context_AF.deleteCheese();
                //window.cheeseCount = 0;
            }
            else {
                Context_AF.deleteTopping();
            }
        });

        //make button larger on hover
        Context_AF.el.addEventListener('mouseenter', function(event) {
            Context_AF.el.object3D.scale.set(Topping.scale.x * 1.1, Topping.scale.y * 1.1, Topping.scale.z * 1.1);
        });

        Context_AF.el.addEventListener('mouseleave', function(event) {
            Context_AF.el.object3D.scale.set(Topping.scale.x / 1.1, Topping.scale.y / 1.1, Topping.scale.z / 1.1);
        })
    },

    deleteTopping: function() {
        const Context_AF = this; //be careful of "this"!
        Context_AF.el.parentNode.removeChild( Context_AF.el ); //only a parent can delete you
    },

    deleteCheese: function() {
        const Context_AF = this; //be careful of "this"!
        //delete all the elements with class "cheese"
        Context_AF.el.parentNode.querySelectorAll(".cheese").forEach(function(a){
                a.remove()
            });
    }

});