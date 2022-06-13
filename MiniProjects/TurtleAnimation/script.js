const turtle = document.querySelector('.turt');
const heading = document.querySelector('.heading');

let x = 0;
let y  = 0;
const speed = 10;
let rotate = 0;
let flipped = false;




function handleKeyDown(event){
    
    if(event.key.includes('Arrow')){
        switch(event.key){
            case 'ArrowLeft':
                x = x - 1;
                flipped = true;
                rotate = 0;
                break
            case 'ArrowRight':
                x = x + 1;
                flipped = false;
                rotate = 0;
                break
            case 'ArrowUp':
                y = y - 1
                rotate = -90;
                break
            case 'ArrowDown':
                y = y + 1
                rotate = 90;
                break
        }

    }
    if (turtle.getBoundingClientRect().x < 0){
        x = 0 ;
    }
    if (turtle.getBoundingClientRect().x > window.innerWidth - turtle.getBoundingClientRect().width){
        x = 0 ;
    }
    if (turtle.getBoundingClientRect().y < heading.getBoundingClientRect().height ){
        y = 0 ;
       
    }
    if (turtle.getBoundingClientRect().y > window.innerHeight - turtle.getBoundingClientRect().height){
        y = 0 ;
    }
    
    console.log(window.innerHeight)
    console.log(x,y)
   
    turtle.setAttribute('style',`
    --rotateX:${flipped? '180deg': '0'};
    --x:${speed*x}px; --y:${speed*y}px;
    --rotate:${rotate}deg;

    
    `)
}
document.addEventListener('keydown',handleKeyDown);
