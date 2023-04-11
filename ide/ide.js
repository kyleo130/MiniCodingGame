ace.require("ace/ext/language_tools");
let editor = ace.edit("editor");
editor.setTheme("ace/theme/cobalt");
editor.session.setMode("ace/mode/javascript");
editor.setOptions({
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true
});

/*
let defaultCode = 
`function foo(n) {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans += i;
    }
    return ans;
}

foo(15);
`
*/

let defaultCode = 
`// You are given the following function:
// hit() -- Hit the door once

for () {

}`


let answer = 
`// You are given the following function:
// hit() -- Hit the door once

for (let i = 0; i < 100; i++) {
    hit();
}`

editor.session.setValue(answer);

let submitButton = document.getElementById("submit");
let resetButton = document.getElementById("reset")
let outputBox = document.getElementById("outputBox");

let skeletonBefore = 
`
let count = 0;

function hit() {
    count += 1;
}

`

let skeletonAfter = 
`

count.valueOf();`

submitButton.addEventListener('click', function() {
    let code = editor.getValue();
    try {
        let result = eval(skeletonBefore + code + skeletonAfter);
        outputBox.innerText = result;
        setHitCount(result);
    } catch (error) {
        outputBox.innerText = "There is something wrong in your code.";
    }
}, false);

resetButton.addEventListener('click', function() {
    try {
        editor.session.setValue(defaultCode);
    } catch (error) {}
}, false);