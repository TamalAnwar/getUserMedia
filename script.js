const mediaStreamConstrains = {
  video: true
};

let localVideo = document.querySelector('#localVideo');

let localStream;

function gotLocalMediaStream(mediaStream) {
  localStream = mediaStream;
  localVideo.srcObject = mediaStream;
}

function handleLocalMediaError(err) {
  console.log('navigator.getUserMedia() error:', err);
}

navigator.mediaDevices
  .getUserMedia(mediaStreamConstrains)
  .then(gotLocalMediaStream)
  .catch(handleLocalMediaError);
