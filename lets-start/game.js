let canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const keys = []
let frames =0;
let interval
const img  = {
    personaje1: "./assets/leolo.png",
    bg: "./assets/bcgity_low.jpg"
}

//  class Bg{
//  constructor(){


//     this.image = new Image()
//     this.image.src = img.bg
//     this.image.onloadw= ()=>{    
//         this.draw

//     }
//  }
//     draw(){
//         ctx.drawImage(this.image, 0,0,canvas.width,canvas.height)
//     }
   
//  }

class Personaje{
    constructor(x,y,radio,img){
        this.x = x
        this.y = y
        this.vely= .03
        this.gravity =.98
        this.image = new Image()
        this.image.src= img.personaje1
        this.image.onload= ()=>{
            this.draw()
        }
             
    }

    
   
    salta(){
        this.y-=100
        this.draw()
        this.vely=0.03


    }


    draw(){
        this.y+=this.vely
        if(this.y>canvas.height-400 ){
            this.y= canvas.height-400
            this.vely=0

        }


     
        
        // ctx.beginPath();
        // ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI);
        // ctx.fillStyle= "yellow";
        // ctx.fill();

        ctx.drawImage(this.image, this.x,this.y,150,400)
    }

   

    rigth(){
        this.x +=30;

    }
    left(){
        this.x -30;
    }
    


    saltaAdelante(){
        // this.y-=100
        // this.x+=200
        // this.draw()
        // this.vely=0.03

    }
    saltaAtras(){
let distancia= this.x-200

        // while(this.x>distancia){
        //     this.y-=2
        //     this.x-=10
        //     this.draw()
        //     this.vely=0.03
        // }


    }


}



    // const background = new Bg()
    const bolita =new Personaje(0,canvas.height-400,80,img)
   
    function update(){
        // intervalo = requestAnimationFrame(update)
        setInterval(update,1000/120)
        ctx.clearRect(0,0,canvas.width,canvas.height)
        // background.draw()

        bolita.draw()
       
    }

        function start(){
            update()
        }
        start()

// canvas.addEventListener('click', start)


document.addEventListener('keydown', ({keyCode})=>{
keys[keyCode]=true


    if(keys[32]&&keys[39]){
        bolita.saltaAdelante()
    }else if(keys[32]&&keys[37]){
        bolita.saltaAtras()
    }else if(keyCode==39){
        bolita.rigth()
    }else if(keyCode===37){
        bolita.left()
    }else if(keyCode==32){
        bolita.salta()
    }
})


document.addEventListener('keyup', ({keyCode})=>{
  keys[keyCode]=false
   
    
})


