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
  mobileInfo() {
    return `
    Color: <b>${this.color}</b></br>
    Weight: <b>${this.weight}</b></br>
    Size: <b>${this.screenResolution}</b></br>
    Camera resolution: <b>${this.cameraResolution}</b></br>
    Video resolution: <b>${this.cameraResolution}</b></br>
    RAM: <b>${this.memoryRam}</b></br>
    `;
  }
}

const cellphone1 = new Celphone("red", "6gr", "6'", "20mpx", "2GB");

document.write(`${cellphone1.mobileInfo()}`);