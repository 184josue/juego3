const WIDTH = 400;
const HEIGH = 400;

let target = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGH)
};

let $map = document.getElementById('map');
let $distance = document.getElementById('distance');
let clicks = 0; 

$map.addEventListener('click', function (e){
    clicks++;
  let distance = getDistance(e, target);
  let distanceHint = getDistanceHint(distance);
$distance.innerHTML = `<h1>${distanceHint}</h1>`;

if(distance < 20)
{
 //alert(`Felicidades encontraste la mochila de emergencia en ${clicks} intentos`);
Swal.fire
({
  title: 'FELICIDADES',
  text: 'HAS GANADO.',
  imageUrl: 'img/mochila.jpg' ,
  imageWidth: 400,
  imageHeight: 200,
})
 

}



})



