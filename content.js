chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.text === 'picture-in-picture') {
        const arrVideo = document.querySelectorAll('video');
        const hasPictureInPicture = document.pictureInPictureElement;
        if(!!hasPictureInPicture === false){
            arrVideo.forEach(function (video) {
                if (video.paused === false) {
                    video.requestPictureInPicture();
                }
            });
        }else{
            document.exitPictureInPicture();
        }
    }
});