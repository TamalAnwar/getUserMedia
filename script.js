const mediaStreamConstrains = {
  video: true
};

let localVideo = document.querySelector('#localVideo');

let localStream;

let turnOn = document.querySelector('#turnOn');
let turnOff = document.querySelector('#turnOff');

function gotLocalMediaStream(mediaStream) {
  localStream = mediaStream;
  localVideo.srcObject = mediaStream;
}

function handleLocalMediaError(err) {
  console.log('navigator.getUserMedia() error:', err);
}

function startCamera() {
  navigator.mediaDevices
    .getUserMedia(mediaStreamConstrains)
    .then(gotLocalMediaStream)
    .catch(handleLocalMediaError);
}

function stopCamera() {
  localStream.getVideoTracks()[0].stop();
}

turnOn.addEventListener('click', startCamera);
turnOff.addEventListener('click', stopCamera);
