AFRAME.registerComponent('pickup-pizza-component', {
    schema: {},
    init: function()  {
        const Context_AF = this; //this refers to "this" component, keep this context
        // var lastIndex = -1;
        // var COLORS = ['red', 'green', 'blue'];
        const cursorPos = document.getElementById("cursor").object3D.getWorldPosition();
        const cursorDir = document.getElementById("cursor").raycaster;
        const cursor = document.getElementById("cursor");

        let cursorx = event.clientX;
        let cursory = event.clientY;

        let interval;


        Context_AF.el.addEventListener('click', function(event) {
            // lastIndex = (lastIndex + 1) % COLORS.length;
            // this.setAttribute('material', 'color', COLORS[lastIndex]);

            //Context_AF.el.setAttribute('position', {x: cursorx, y: cursory, z:0 })

            //from: https://glitch.com/edit/#!/aframe-mouse-to-world

            //cursor.worldToLocalPosition(vector);
            // let mouse = new THREE.Vector2()
            // let camera = AFRAME.scenes[0].camera
            // let screen = document.querySelector('body').getBoundingClientRect()
            // mouse.x = ( (event.clientX - screen.left) / screen.width ) * 2 - 1
            // mouse.y = - ( (event.clientY - screen.top) / screen.height ) * 2 + 1
            // let vector = new THREE.Vector3( mouse.x, mouse.y, -1 ).unproject( camera );
            // //let vectorTest = 

            // console.log("cursor is at: " + JSON.stringify(vector));
            // //Context_AF.el.setAttribute('position', vector); //moves it weirdly
            // console.log("object is at: " + JSON.stringify(Context_AF.el.getAttribute('position')));

            //interval = setInterval(100);

            //Context_AF.pickUp();

            const oven = document.getElementById("oven");
            oven.addEventListener('click', function(event) {
                Context_AF.putOven(); ///not to nest event listeners!
                //but i want to click the pizza, keep it enlarged, and then click oven to burn it
            });
        });

        // Context_AF.el.addEventListener('mouseup', function(e) { 
        //     clearInterval(interval);
        // });

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
        const Context_AF = this;

        //burn the pizza
        const food = document.getElementById("pizza").getElementsByTagName("a-entity");

        for(var i = 0; i < food.length; i++) {
            food[i].setAttribute('material', 'color: #000');
        }

        Context_AF.el.setAttribute('material', 'color: #000; roughness:0.5');
    }

});