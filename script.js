document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.container');

    // Check if we're on the collections page
    if (window.location.pathname.includes('collections.html')) {
        fetch('./data.json')
            .then(response => response.json())
            .then(data => {
                // Loop through each collection
                data.collections.forEach((collection, index) => {
                    const collectionCard = document.createElement('div');
                    collectionCard.className = 'collection-card';

                    // Add collection title
                    const collectionTitle = document.createElement('h2');
                    collectionTitle.textContent = collection.name;
                    collectionCard.appendChild(collectionTitle);

                    // Add total number of questions
                    const totalQuestions = document.createElement('p');
                    totalQuestions.textContent = `Total Questions: ${collection.snippets.length}`;
                    collectionCard.appendChild(totalQuestions);

                    // Add a link to view the collection
                    const viewLink = document.createElement('a');
                    viewLink.href = `./index.html?collection=${index}`; // Pass collection index as a query parameter
                    viewLink.textContent = 'View Collection';
                    viewLink.className = 'view-link';
                    collectionCard.appendChild(viewLink);

                    // Append the collection card to the container
                    container.appendChild(collectionCard);
                });
            })
            .catch(error => console.error('Error loading JSON:', error));
    }

    // Check if we're on the main page and a collection is selected
    if (window.location.pathname.includes('index.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const collectionIndex = urlParams.get('collection');

        if (collectionIndex !== null) {
            fetch('./data.json')
                .then(response => response.json())
                .then(data => {
                    const collection = data.collections[collectionIndex];
                    const snippetsContainer = document.getElementById('snippets-container');

                    // Loop through each snippet in the collection
                    collection.snippets.forEach((snippet, snippetIndex) => {
                        const codeSection = document.createElement('div');
                        codeSection.className = 'code-section';

                        // Add snippet title
                        const title = document.createElement('h3');
                        title.textContent = snippet.title;
                        codeSection.appendChild(title);

                        // Add "See Code" button
                        const codeButton = document.createElement('button');
                        codeButton.className = 'toggle-btn';
                        codeButton.id = `toggle-code${snippetIndex + 1}`;
                        codeButton.textContent = 'See Code';
                        codeButton.onclick = () => {
                            toggleCode(`code${snippetIndex + 1}`);
                            toggletxt(`toggle-code${snippetIndex + 1}`);
                        };
                        codeSection.appendChild(codeButton);

                        // Add "See Output" button
                        const outputButton = document.createElement('button');
                        outputButton.className = 'toggle-btn';
                        outputButton.id = `toggle-output${snippetIndex + 1}`;
                        outputButton.textContent = 'See Output';
                        outputButton.onclick = () => {
                            toggleCode(`Output-${snippetIndex + 1}`);
                            toggleoutput(`toggle-output${snippetIndex + 1}`);
                        };
                        codeSection.appendChild(outputButton);

                        // Add code snippet
                        const codeSnippet = document.createElement('pre');
                        codeSnippet.id = `code${snippetIndex + 1}`;
                        codeSnippet.className = 'code-snippet';
                        codeSnippet.textContent = snippet.code;
                        codeSection.appendChild(codeSnippet);

                        // Add output section
                        const outputSection = document.createElement('div');
                        outputSection.id = `Output-${snippetIndex + 1}`;
                        outputSection.className = 'code-snippet';
                        outputSection.innerHTML = `
                            <h4>Output:</h4>
                            <img src="${snippet.outputImage}">
                            <h4>File:</h4>
                            <img src="${snippet.fileImage}">
                        `;
                        codeSection.appendChild(outputSection);

                        // Append the code section to the container
                        snippetsContainer.appendChild(codeSection);
                    });
                })
                .catch(error => console.error('Error loading JSON:', error));
        }
    }
});

function toggleCode(id) {
    const codeElement = document.getElementById(id);
    if (codeElement.style.display === "none" || codeElement.style.display === "") {
        codeElement.style.display = "block";
    } else {
        codeElement.style.display = "none";
    }
}

function toggletxt(id) {
    const btn = document.getElementById(id);
    if (btn.innerHTML.trim() === "See Code") {
        btn.innerHTML = "Hide Code";
    } else {
        btn.innerHTML = "See Code";
    }
}

function toggleoutput(id) {
    const btn = document.getElementById(id);
    if (btn.innerHTML.trim() === "See Output") {
        btn.innerHTML = "Hide Output";
    } else {
        btn.innerHTML = "See Output";
    }
}