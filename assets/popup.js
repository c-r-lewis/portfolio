document.getElementById('emailBtn').addEventListener('click', function() {
    const textToCopy = "charlotte.lewis@etu.umontpellier.fr";

    navigator.clipboard.writeText(textToCopy).then(function() {
        const popup = document.getElementById('popup');
        popup.style.display = 'block';

        setTimeout(function() {
            popup.style.display = 'none';
        }, 2000);
    }).catch(function(error) {
        console.error('Could not copy text: ', error);
    });
});
