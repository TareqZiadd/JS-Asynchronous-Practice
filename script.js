// Set timeout to log 'Rami' after 3 seconds
setTimeout(function(){
    console.log('Rami');
}, 3000);

// Set timeout to change innerHTML of element with id 'demo' after 3 seconds
setTimeout(function(){
    document.getElementById('demo').innerHTML = 'new value';
}, 3000);

// Function to change innerHTML of element with id 'demo2'
function myFunction(value) {
    document.getElementById("demo2").innerHTML = value;
}

// Set timeout to call myFunction with "I love You !!!" after 3.3 seconds
setTimeout(function() { myFunction("I love You !!!"); }, 3300);

// Set interval to log 'setInterval' every 2 seconds
setInterval(function(){
    console.log('setInterval');
}, 2000);

// Function to update the time every second
function updateTime() {
    let d = new Date();
    document.getElementById("time").innerHTML = 
        d.getHours() + ":" + 
        d.getMinutes() + ":" + 
        d.getSeconds();
}

// Set interval to call updateTime every second
setInterval(updateTime, 1000);
