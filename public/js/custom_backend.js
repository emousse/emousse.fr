/*'use strict';

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
});*/


'use strict';

/* eslint-disable prefer-arrow-callback, comma-dangle */
/* global Stackedit */

function makeEditButton(el) {
    var div = document.createElement('div');
    div.className = 'stackedit-button-wrapper';
    div.innerHTML = '<a href="javascript:void(0)">Edit with StackEdit</a>';
    el.parentNode.insertBefore(div, el.nextSibling);
    return div.getElementsByTagName('a')[0];
}

var textareaEl = document.querySelector('textarea');
makeEditButton(textareaEl).addEventListener('click', function onClick() {
    var stackedit = new Stackedit();
    stackedit.on('fileChange', function onFileChange(file) {
        textareaEl.value = file.content.html;
    });
    stackedit.openFile({
        name: 'Markdown with StackEdit',
        content: {
            text: textareaEl.value
        }
    });
});
