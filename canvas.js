

var direccion = document.addEventListener("keyup",camino);
var c = document.getElementById("hoja");
var raton = c.addEventListener("mousemove",mousesillo);
var raton = c.addEventListener("mousemove",mousesillo);
var lienzo = c.getContext("2d");
var x=150
var y=150
var teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};
dibujar(149,149,151,151);
var x = 150;
var y = 150;

function camino(evento)
{
    var movimiento = 10
    switch (evento.keyCode)
    {
        case teclas.UP:
            dibujar(x,y,x,y-movimiento);
            y = y-movimiento
        break;
        case teclas.RIGHT:
            dibujar(x,y,x+movimiento,y);
            x = x+movimiento
        break;
        case teclas.LEFT:
            dibujar(x,y,x-movimiento,y);
            x = x-movimiento
        break;
        case teclas.DOWN:
            dibujar(x,y,x,y+movimiento);
            y = y+movimiento
        break;
        default:
        break;
    }
}
function mousesillo(evento)
{
    switch(evento.buttons){
        case 1:
            console.log(evento);
            dibujar(evento.layerX-1,evento.layerY,evento.layerX,evento.layerY);
            dibujar(evento.layerX,evento.layerY-1,evento.layerX,evento.layerY);
        break;
        case 0:
        break;
        default:
        break;
    }

}
function dibujar(xi,yi,xf,yf)
{
    
    lienzo.beginPath();
    lienzo.strokeStyle= "Red";
    lienzo.lineWidth= 5;
    lienzo.moveTo(xi,yi);
    lienzo.lineTo(xf,yf);
    lienzo.stroke();
    lienzo.closePath();
}