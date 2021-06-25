(function(window) {
    var HelloHello = new Object();
    var speakWord = "Hello";
    HelloHello.speak = function(name) {
        console.log(speakWord + " " + name);
    };
    window.HelloHello = HelloHello;
})(window);