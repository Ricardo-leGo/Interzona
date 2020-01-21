let canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const keys = []
let frames =0;
let interval
const img  = {
    personaje1: "./assets/personaje1.png"
}

 

class Personaje{
    constructor(x,y,radio,img){
        this.x = x
        this.y = y
        this.vely= .03
        this.gravity =1
        this.weigth = (canvas.height/3)
        this.radio = 20;
       /* this.image = new Image()
        this.image.onload= ()=>{
            this.draw()
        }
        this.image.src= img.personaje1*/        
    }

    
   
    salta(){
        this.y-=100
        this.draw()
        this.vely=0.03


    }


    draw(){
        this.y+=this.vely
        if(this.y>canvas.height-this.radio ){
            this.y= canvas.height-this.radio
            this.vely=0

        }


     
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI);
        ctx.fill();
        //ctx.drawImage(this.img, this.x,this.y,clipx,clipy)
    }

   

    rigth(){
        this.x +=10;

    }
    left(){
        this.x -=10;
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




    const bolita =new Personaje(300,0,80,img.personaje1)
    function update(){
        // intervalo = requestAnimationFrame(update)
        setInterval(update,1000/60)
        ctx.clearRect(0,0,canvas.width,canvas.height)
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