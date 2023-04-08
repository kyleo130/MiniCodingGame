let editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");
editor.setOptions({
    enableBasicAutocompletion: true
});

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

editor.setValue(defaultCode);

let button = document.getElementById("submit");
let outputBox = document.getElementById("output");

button.addEventListener('click', function() {
    let code = editor.getValue();
    try {
        let result = eval(code);
        outputBox.innerText = result;
    } catch (error) {
        outputBox.innerText = "There is something wrong in your code.";
    }
}, false);