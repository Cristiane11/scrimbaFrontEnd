// if statements- evaluate boolean values
/*const preferDarkMode = true;
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
}*/
//Swicht
const colorMode = 'dark';

if (colorMode === 'solarized') {
    console.log('solarized mode set!'); 
    document.body.style.background = 'palegoldenrod';
 } else if (colorMode === 'dark') {
   console.log('dark mode set!');  
   document.body.style.background = 'black';
 } else {    
   console.log('light mode set!');
   document.body.style.background = 'ghostwhite';
 }