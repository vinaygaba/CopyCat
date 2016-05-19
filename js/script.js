function getSelectedText() {
       var text = "";
       if (typeof window.getSelection != "undefined") {
           text = window.getSelection().toString();
       } else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
           text = document.selection.createRange().text;
       }
       return text;
   }

   function doSomethingWithSelectedText() {
       var selectedText = getSelectedText();

       if (selectedText) {
           console.log("Selected text is " + selectedText);
       }
   }

   document.onmouseup = doSomethingWithSelectedText;
   document.onkeyup = doSomethingWithSelectedText;

   var map = {17: false, 67: false, 49: false,86:false};
$(document).keydown(function(e) {
    if (e.keyCode in map) {
        map[e.keyCode] = true;
        if (map[17] && map[67] && map[49]) {
            // FIRE EVENT
            console.log("All three detected");
            localStorage.setItem("1", getSelectedText()) ;
        } else if (map[17] && map[86] && map[49]) {
          console.log(localStorage.getItem(1));
        }
    }
}).keyup(function(e) {
    if (e.keyCode in map) {
        map[e.keyCode] = false;
    }
});
