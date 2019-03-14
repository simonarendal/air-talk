cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
cameraOutput.src = cameraSensor.toDataURL("image/webp");
cameraOutput.classList.add("taken");
