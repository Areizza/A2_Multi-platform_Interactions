AFRAME.registerComponent('pickup-pizza-component', {
    schema: {},
    init: function()  {
        const Context_AF = this; //this refers to "this" component, keep this context


        Context_AF.el.addEventListener('click', function(event) {
            Context_AF.pickUp();
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

    pickUp : function(){
        const Context_AF = this;

        //get the cursor position
        const cursor = document.getElementById("cursor");
        const camera = document.getElementById("camera");
        const worldPosition = camera.object3D.getWorldPosition();
        const cursorPosition = cursor.object3D.getWorldPosition();
        // let pos = camera.getAttribute('position');
        // let rot = camera.getAttribute('rotation');

        console.log("THIS IS WORKING " + JSON.stringify(cursorPosition));

        Context_AF.el.object3D.matrix.elements[12] = cursor.getAttribute('position');
        Context_AF.el.object3D.matrix.elements[13] = cursor.getAttribute('position');
    },

    putTrash: function() {

    },

    putOven: function() {
        
    }

});