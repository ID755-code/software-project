function toggleCode(id) {
    const codeElement = document.getElementById(id);
    if (codeElement.style.display === "none" || codeElement.style.display === "") {
        codeElement.style.display = "block"; // Show the code
    } else {
        codeElement.style.display = "none"; // Hide the code
    }
}
