const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to select media steam ,pass to video element ,then play
async function selectMediaStream() {
  const mediaSream = await navigator.mediaDevices.getDisplayMedia();

  videoElement.srcObject = mediaSream;
  videoElement.onloadedmetadata = () => {
    videoElement.onplay();
  };

  try {
  } catch (error) {
    // handle error
  }
}

button.addEventListener("click", async () => {
  // Disable the button
  button.disabled = true;
  // start picture in picture
  await videoElement.requestPictureInPicture();
  // reset button
  button.disabled = false;
});
// On Load
selectMediaStream();
