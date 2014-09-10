document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
    document.addEventListener("backbutton", onBackButton, false);
}
function onBackButton(){
    if window.location.hash == "") {
        navigator.app.exitApp();
    }
    window.history.back();
}