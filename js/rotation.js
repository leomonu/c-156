AFRAME.registerComponent("terrain-rotation",{
    schema:{
        speedRotation:{type:"number",default:0}
    },
    init:function () {
      window.addEventListener("keydown",(e)=>{
          if(e.key === "ArrowRight"){
            if(this.data.speedRotation<0.1){
                this.data.speedRotation += 0.1
            }
          }
          if(e.key === "ArrowLeft"){
            if(this.data.speedRotation>-0.1){
                this.data.speedRotation -= 0.1
            }
          }
      })  
    },
    tick: function(){
        var terrainRotation = this.el.getAttribute("rotation")
        terrainRotation.y+=this.data.speedRotation

        this.el.setAttribute("rotation",{
            x:terrainRotation.x,
            y:terrainRotation.y,
            z:terrainRotation.z,
        })
       
    }

})

AFRAME.registerComponent("plane-rotation",{
    schema:{
        speedRotation:{type:"number",default:0},
        speedPosition:{type:"number",default:0}
    },
    init:function(){
        window.addEventListener("keydown",(e)=>{
            this.data.speedRotation = this.el.getAttribute("rotation")
            this.data.speedPosition=this.el.getAttribute("position")

            planeRotation = this.data.speedRotation
            planePosition = this.data.speedPosition
            // key events
            if(e.key === "ArrowRight"){
                if(planeRotation.x<10){
                    planeRotation.x+=0.5
                    this.el.setAttribute("rotation",planeRotation)
                }
            }
            if(e.key === "ArrowLeft"){
                if(planeRotation.x>-10){
                    planeRotation.x-=0.5
                    this.el.setAttribute("rotation",planeRotation)
                }
            }
            if(e.key === "ArrowUp"){
                    if(planeRotation.z<15){
                        planeRotation.z+=0.5
                        this.el.setAttribute("rotation",planeRotation)
                    }
                    if(planePosition.y<2){
                        planePosition.y +=0.01
                        this.el.setAttribute("position",planePosition)
        
                    }
            }
            if(e.key === "ArrowDown"){
                if(planeRotation.z>-10){
                    planeRotation.z-=0.5
                    this.el.setAttribute("rotation",planeRotation)
                }
                if(planePosition.y>-2){
                    planePosition.y -= 0.01
                    this.el.setAttribute("position",planePosition)
    
                }
        }
            
        })

    }
})