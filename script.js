    // function mouseScroll(event) {
    //     window.scroll({
    //     top: 100,
    //     left: 100,
    //     behavior: 'smooth'
    //     });
    // }

    // document.addEventListener('mousemove', mouseScroll);
    

// let x,y;
// function handleMouse(e) {
//     let scrollHeight = document.documentElement.clientHeight;
//     let scrollY = window.pageYOffset;
//     console.log(scrollHeight);
//     console.log(scrollY);
//     console.log('Current scroll from the left: ' + window.pageXOffset);
//   // Verify that x and y already have some value
// //   if(x && y){
// //     // Scroll window by difference between current and previous positions
// //     window.scrollBy(e.clientX - x, e.clientY - y);
// //   }
//   if(scrollY >= scrollHeight){
//       window.scrollBy(0,20);
//   }
// //   // Store current position
// //   x = e.clientX;
// //   y = e.clientY;

// }
// Assign handleMouse to mouse movement events
// document.onmousemove = handleMouse;

// var x, y;

// function handleMouse(e) {
//     let scrollHeight = document.documentElement.clientHeight;
//     let scrollY = window.pageYOffset;
//   // Verify that x and y already have some value
//     if (x && y) {
//     // Scroll window by difference between current and previous positions
//         window.scrollBy(e.clientX - x, e.clientY - y);
//     }
//     if(scrollY >= scrollHeight){
//         window.scrollBy(0,20);
//     }

//   // Store current position
//   x = e.clientX;
//   y = e.clientY;
// }

// // Assign handleMouse to mouse movement events
// document.onmousemove = handleMouse;

// function moveMouse(e){
//     let scrollHeight = document.documentElement.clientHeight;
//     let scrollY = window.pageYOffset;
//     console.log(scrollHeight);
//     console.log(scrollY);

//     if(scrollY >= scrollHeight){
//         window.scrollBy(0,0);
//     }
// }
// document.onmousemove = moveMouse;
var height = document.documentElement.scrollHeight;

function scroll(event){
    var y = event.clientY;
    var yPercentage = y/screen.height;
    window.scrollTo(0,yPercentage*height);
}

window.onmousemove = scroll;

let fish = document.getElementById('fish');
const onMouseMove = (e) =>{
  fish.style.left = e.pageX + 'px';
  fish.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);