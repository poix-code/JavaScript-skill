class Celphone {
  constructor(color, weight, sr, cr, ram) {
    this.color = color;
    this.weight = weight;
    this.screenResolution = sr;
    this.cameraResolution = cr;
    this.memoryRam = ram;
    this.celOn = false;
  }
  celState() {
    if (this.celOn == false) {
      alert("Turning on");
      this.celOn = true;
    } else {
      alert("Turning off");
    }
  }
  restart() {
    if (this.celOn == true) {
      alert("Restarting");
    } else {
      alert("The cell phone is off");
    }
  }
  takePicture() {
    if (this.celOn == true) {
      alert(`Photo taken in a resolution of: ${this.cameraResolution}`);
    }
  }
  recording() {
    alert(`Recording video on a resolution: ${this.cameraResolution}`);
  }
}

const cellphone1 = new Celphone("red", "6gr", "6'", "20mpx", "2GB");
cellphone1.celState();
cellphone1.takePicture();
cellphone1.recording();
cellphone1.restart();
cellphone1.celState();