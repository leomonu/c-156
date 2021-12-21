AFRAME.registerComponent("new-rings",{
    init:function(){
        for(var i =1;i<=100;i++){
            // creating my id
            var myid = `ring${i}`
            // console.log(myid)
            // creating my position 
            var posX=(Math.random()*3000+(-1000))
            var posY=(Math.random()*2+(-1))
            var posZ=(Math.random()*3000+(-1000))

            var myposition = {x:posX,y:posY,z:posZ}

            this.createrings(myid,myposition)
        }
    },





    createrings:function(id,position){
        var terrain1 = document.querySelector("#terrain")
        var ring1 = document.createElement("a-entity")

        // giving attributes
        ring1.setAttribute("id",id)
        ring1.setAttribute("position",position)
        ring1.setAttribute("geometry",{
            primitive:"torus",
            radius:8
    })
    ring1.setAttribute("material", "color", "red")
    ring1.setAttribute("static-body",{
        shape:"sphere",
        sphereRadius:3
    })
    ring1.setAttribute("game-play",{
        elementid:`#${id}`
    })
    
    terrain1.appendChild(ring1)

    }
})