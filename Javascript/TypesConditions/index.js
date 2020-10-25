// if statements- evaluate boolean values
const preferDarkMode = false;
const preferSolarizedMode = true;

if(preferDarkMode ){
    console.log('dark mode set!');
    document.body.style.background = 'black';
}else if (preferSSolarizedMode){
    console.log('Solarized mode set!');
    document.body.style.background = 'palegoldenrod';

}else{
    console.log('light mode set!');
    document.body.style.background = 'ghostwhite';
}