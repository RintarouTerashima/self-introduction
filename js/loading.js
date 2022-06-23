
window.setTimeout(finish, 3000);

function finish() {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
}

window.onpageshow = function (event) {
    if (event.persisted) {
        window.location.reload();
    }
};