window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
window.va('beforeSend', function (event) {
    try { if (localStorage.getItem('va-disable')) return null; } catch (error) {}
    return event;
});
