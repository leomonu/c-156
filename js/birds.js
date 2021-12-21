AFRAME.registerComponent("new-birds",{
    init:function(){
        for(var i =1;i<=50;i++){
            // creating my id
            var myid = `bird${i}`
            // console.log(myid)
            // creating my position 
            var posX=(Math.random()*3000+(-1000))
            var posY=(Math.random()*2+(-1))
            var posZ=(Math.random()*3000+(-1000))

            var myposition = {x:posX,y:posY,z:posZ}

            this.createbirds(myid,myposition)
        }
    },

    createbirds:function(id,position){
        var terrain1 = document.querySelector("#terrain")
        var bird1 = document.createElement("a-entity")
        bird1.setAttribute("id",id)
        bird1.setAttribute("position",position)
        bird1.setAttribute('gltf-model',"./assets/models/flying_bird/scene.gltf")
        bird1.setAttribute("scale",{x:500,y:500,z:500})
        bird1.setAttribute("animation-mixer",{})

        bird1.setAttribute("static-body",{
            shape:"sphere",
            sphereRadius:3
        })
        bird1.setAttribute("game-play",{
            elementid:`#${id}`
        })
        terrain1.appendChild(bird1)
    }

})
