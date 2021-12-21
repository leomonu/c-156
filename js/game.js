AFRAME.registerComponent("game-play",{
        schema:{
            elementid:{type:"string",default:"#ring1"}
        },

        iscollided:function(elementid){
            const element = document.querySelector(elementid)
            element.addEventListener("collide",(e)=>{
                if(elementid.includes("#ring")){
                    console.log(elementid + "Collision happened")
                    element.setAttribute("visible",false)
                    this.updateTargets()
                    this.updateScore()
                }
                else if(elementid.includes("#bird")){
                    console.log(elementid+"Collision happened")
                }
            })
        },
        update:function(){
            this.iscollided(this.data.elementid)
        },

        init:function(){
            var myduration = 20;
            var mytime = document.querySelector("#timer")
            this.startTimer(myduration,mytime)
        },

        startTimer:function(duration,time){
            var minutes
            var seconds
            setInterval(()=>{
                if(duration>=0){
                    minutes = parseInt(duration/60)
                    seconds = parseInt(duration%60)

                    if(minutes<10){
                        // 09 08 01
                        minutes = "0" +minutes
                    }
                    if(seconds<10){
                        seconds="0"+seconds
                    }
                    time.setAttribute("text",{
                        value:minutes+":"+seconds
                    })
                    duration -=1
                }
                else{
                    this.gameOver()

                }
            },1000)
        },

        updateTargets:function(){
            const element = document.querySelector("#targets")
            var count = element.getAttribute("text").value
            var currentargets = parseInt(count)
            currentargets -= 1
            element.setAttribute("text",{
                value:currentargets
            })
        },
        updateScore:function(){
            const element = document.querySelector("#score")
            var count = element.getAttribute("text").value
            var currentscore = parseInt(count)
            currentscore += 50
            element.setAttribute("text",{
                value:currentscore
            })
        },

        gameOver:function(){
            const element = document.querySelector("#gameOver")
            element.setAttribute("visible",true)
            const plane1 = document.querySelector("plane")
            plane1.setAttribute("dynamic-body",{
                mass:1
            })
        }


})