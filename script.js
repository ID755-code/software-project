function toggleCode(id) {
    const codeElement = document.getElementById(id);
    if (codeElement.style.display === "none" || codeElement.style.display === "") {
        codeElement.style.display = "block"; // it shows the code ig
    } else {
        codeElement.style.display = "none"; // it hides the code ig
    }
}

function togglecode(id) {
    const btn = document.getElementById(id);
    if (btn.innerHTML.trim() === "See Code") { 
        btn.innerHTML = "Hide Code";
    } 
    else {
        btn.innerHTML = "See Code";
    }
}

function toggleoutput(id) {
    const btn = document.getElementById(id);
    if (btn.innerHTML.trim() === "See Output") { 
        btn.innerHTML = "Hide Output";
    } 
    else {
        btn.innerHTML = "See Output";
    }
}

