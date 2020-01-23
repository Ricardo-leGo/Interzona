let canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const keys = []
let frames =0;
let interval
let varShoot= false
const img  = {
    personaje1: "./assets/leolo.png",
    bg: "./assets/bcgity.png",
    char:"assets/char.png"
}

 class Bg{
 constructor(){


    this.image = new Image()
    this.image.src = img.bg
    this.image.onloadw= ()=>{    
        this.draw()

    }
 }
    draw(){
        ctx.drawImage(this.image, 0,0,canvas.width,canvas.height)
    }
   
 }

class Personaje{
    constructor(x,y,radio,img){
        this.x = x
        this.y = y
        this.dx= 0
        this.dy=0
        this.vy = .001
        this.vx = .001
        this.sx = 0
        this.sy = 0
        this.vely= .03
        this.gravity =.98
        this.image = new Image()
        this.image.src= img.char
        this.image.onload= ()=>{
            this.draw()
        }
             
    }

    shooter(){
    
            this.dy-=.03
            this.dx += .1
            if(this.x>canvas.width/2)this.dy=this.dy*-1
            
        ctx.beginPath();
        ctx.arc(
            this.x+85 +this.dx, 
            this.y+50+this.dy,
             80,
              0, 
              2 * Math.PI);
        ctx.fill()

    }
   
    salta(){
        this.y-=100
        this.draw()
        this.vely=0.03


    }


    draw(){


        if(this.sx>545)this.sx=0
        if(this.sx<0)this.sx =460
        this.y+=this.vely
        if(this.y>canvas.height-250 ){
            this.y= canvas.height-250
            this.vely=0

        }

        ctx.drawImage(this.image, this.sx,this.sy,85,240,this.x,this.y, 85,250)
    }

   

    rigth(){
        this.x +=30;
        this.move();

    }
    left(){
        this.x -=30     ;
        this.move();
    }
    move(){

        this.sx      += 85;
    }
    

    saltaAdelante(){
        this.y-=100
        this.x+=200
        this.draw()
        this.vely=0.03

    }
    saltaAtras(){
let distancia= this.x-200

        while(this.x>distancia){
            this.y-=2
            this.x-=10
            this.draw()
            this.vely=0.03
        }


    }





}



    const background = new Bg()
    const bolita =new Personaje(0,canvas.height-250,80,img)
   
    function update(){
        
        let iintervalo  = setInterval(update,1)
        ctx.clearRect(0,0,canvas.width,canvas.height)
        background.draw()

        bolita.draw()
        bolita.shooter()
       
    }

        function start(){
            update()
        }
        start()



document.addEventListener('keydown', ({keyCode})=>{
keys[keyCode]=true


    if(keys[32]&&keys[39]){
        bolita.saltaAdelante()
    }else if(keys[32]&&keys[37]){
        bolita.saltaAtras()
    }else if (keyCode ==82){
        varShoot=true
    }
    else if(keyCode==39){
        bolita.rigth()
    }else if(keyCode===37){
        bolita.left()
    }else if(keyCode==32){
        bolita.salta()
    }
})


document.addEventListener('keyup', ({keyCode})=>{
  keys[keyCode]=false
  varShoot=false
   
    
})


