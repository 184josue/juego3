let getRandomNumber = size => {
 return Math.floor(Math.random() * size);
 }

 let getDistance = (e, target) => {
    let diffx = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffx * diffx) + (diffY + diffY));
 }
 
 let getDistanceHint = distance => {
    if (distance < 30 ) {
        return"Demaciado Caliente!";
    } else if(distance < 40) {
      return "Realmente caliente";
    }else if (distance < 60) {
     return "Frio";
    }else if (distance < 100) {
        return "Calido";
    }else if (distance < 180) {
        return "Caliente";
    }else if (distance < 360) {
        return "Realmente Frio";
    }else{
     return "Congelado!";
    }
}

function indexr()
{
    location.reload;
}