let selectNo = document.querySelector(".select-no-container");
let selectYes = document.querySelector(".select-yes");
let heading = document.querySelector(".heading");
// handle event
selectNo.onmousemove = (event) => {
//    selectNo.style
    selectNo.style.top = Math.floor(Math.random() * 500) + "px";
    selectNo.style.left = Math.floor(Math.random() * 200) + "px";
    selectNo.style.right = Math.floor(Math.random() * 200) + "px";
}
selectYes.onclick = () => {
    document.querySelector(".container").style.backgroundImage = "url('https://media4.giphy.com/media/26gIQ0DsLS5ydqHdK/giphy.gif?cid=790b7611f20e9ad58966c7fed70066512c7bb3b3a6adb097&rid=giphy.gif&ct=g')";
    document.querySelector(".container").style.backgroundSize = 'cover';
    heading.style.display = 'none';
    selectNo.style.display = 'none';
    selectYes.style.display = 'none';
    document.querySelector(".container").style.backgroundPositionY =  "-240px";
}
// animation
selectYes.animate([
    // keyframes
    { transform: 'scale(1.3,1.3)' },
 
  ], {
    // timing options
    duration: 1000,
    iterations: Infinity
  });
//   selectNo.animate([
//     // keyframes
//     { transform: 'scale(1.5,1.5)' },
 
//   ], {
//     // timing options
//     duration: 1000,
//     iterations: Infinity
//   });