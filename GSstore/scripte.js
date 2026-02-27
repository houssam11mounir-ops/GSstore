const images = [
"1.jpeg",
"2.jpeg",
"3.jpeg",
"4.jpeg",
"5.jpeg",
"6.jpeg",
"7.jpeg",
"8.jpeg",
"9.jpeg",
"10.jpeg",
];

let i=0;
setInterval(()=>{
  i=(i+1)%images.length;
  document.getElementById("slide").src=images[i];
},3000);