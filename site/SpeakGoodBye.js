(function(window) {
    var ByeBye = new Object();
    var speakWord = "Good Bye";
    ByeBye.speak = function speak(name) {
        console.log(speakWord + " " + name);
    };
    window.ByeBye = ByeBye;
})(window);