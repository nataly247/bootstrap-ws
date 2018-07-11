document.querySelector('.more')
    .addEventListener('click', getHTML);
    
function getHTML() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('.tuts')
                .innerHTML = xhr.responseText;
        }
    };
    xhr.open('get', 'demo-tutorial.html?r= + Math.random()', true);
    xhr.send();
}