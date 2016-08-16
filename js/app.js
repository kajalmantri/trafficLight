(function() {
    "use strict"

    function _id(id) {
        return document.getElementById(id);
    }

    // function _querySel() {
    //     return document.querySelectorAll(selectors)
    // }




    // var bulb = queSelAll('.bulb');
    // var stopButton = id('stopButton');

    // var stop = _id('Stop');

    // var stopButton = _id('stopButton'),
    //     slowButton = _id('slowButton'),
    //     goButton = _id('goButton'),
    //     stopLight = _id('stopLight'),
    //     slowLight = _id('slowLight'),
    //     goLight = _id('goLight');

    var bulbBlack = document.querySelectorAll('.bulb');

    function clearLights() {
        for (var i = 0, arry = bulbBlack.length; i < arry; i++) {
            bulbBlack[i].style.backgroundColor = '#111111';
        }
    }

    function timeInterval() {
        setTimeout(clearLights, 1000);
    }

    function trafficSig(eve) {
        //console.log(this);
        clearLights();
        var myElem = this;
        if (myElem.id === "stopButton") {
            stopLight.style.backgroundColor = 'red';
            timeInterval();
        } else if (myElem.id === "slowButton") {
            slowLight.style.backgroundColor = 'yellow';
            timeInterval();
        } else {
            goLight.style.backgroundColor = 'green';
            timeInterval();
        }
    }



    // var redLight = function redlight() {
    //     clearLights();
    //     stopLight.style.backgroundColor = 'red';
    //     timeInterval();
    //     //return document.querySelector(selectors);
    // };

    // var yellowLight = function yellowlight() {
    //     clearLights();
    //     slowLight.style.backgroundColor = 'yellow';
    //     timeInterval();
    //     //stopLight.style.backgroundColor = '#111111';
    //     //goLight.style.backgroundColor = '#111111';
    //     //return document.querySelector(selectors);
    // };

    // var greenLight = function greenlight() {
    //     clearLights();
    //     goLight.style.backgroundColor = 'green';
    //     timeInterval();
    //     //stopLight.style.backgroundColor = '#111111';
    //     //slowLight.style.backgroundColor = '#111111';
    //     //return document.querySelector(selectors);
    // };

    //console.log(stop);

    // function printStop() {
    //     document.stopButton.style.backgroundColor = "red";
    // }



    stopButton["addEventListener"]("click", trafficSig, false);
    slowButton["addEventListener"]("click", trafficSig, false);
    goButton["addEventListener"]("click", trafficSig, false);


})();
