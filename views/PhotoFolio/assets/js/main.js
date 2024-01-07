document.querySelectorAll('.load-page').forEach(link => {
    link.addEventListener('click', function (){
        fetch(link.dataset.htmlTarget)
            .then(result => result.text())
            .then(htmlContent => {
                document.getElementById('main').innerHTML = htmlContent;
            })
    })
})