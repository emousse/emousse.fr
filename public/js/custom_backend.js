'use strict';

var el = document.querySelector('textarea');
var stackedit = new Stackedit();

// Open the iframe
stackedit.openFile({
    name: 'Filename', // with an optional filename
    content: {
        text: el.value // and the Markdown content.
    }
});

// Listen to StackEdit events and apply the changes to the textarea.
stackedit.on('fileChange', function (file) {
    el.value = file.content.html;
});