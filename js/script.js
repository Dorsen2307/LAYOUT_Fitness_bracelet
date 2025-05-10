const popupCall = document.getElementById('popupCall');
const popupOrder = document.getElementById('popupOrder');

function togglePopup(popupId, displayStyle) {
    popupId.style.display = displayStyle;
}

function openPopupCall() {
    if (popupOrder.style.display === 'none') {
        togglePopup(popupCall, 'block');
    }
}

function closePopupCall() {
    togglePopup(popupCall, 'none');
}

function openPopupOrder() {
    togglePopup(popupCall, 'none');
    togglePopup(popupOrder, 'flex');
}

function closePopupOrder() {
    togglePopup(popupOrder, 'none');
}

popupCall.addEventListener('click', function(event) {
    if (event.target === popupCall) {
        closePopupCall();
    }
});

popupOrder.addEventListener('click', function(event) {
    if (event.target === popupOrder) {
        closePopupOrder();
    }
});

window.onload = function(){
    $('.about-slider').slick({
        centerMode: false,
        centerPadding: '10px',
        slidesToShow: 1,
        speed: 1000,
    });

    setTimeout(openPopupCall, 15000);
};
