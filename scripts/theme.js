// bg color change
const colors =[
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#809980",
    "#E6FF80",
    "#1AFF33",
    "#999933",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#FF4D4D",
    "#6666FF"
];
const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', function(){
    
    const colorIndex = Math.floor(colors.length * Math.random());
    document.getElementsByTagName('body')[0].style.backgroundColor = colors[colorIndex];
})