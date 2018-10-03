const uuidv4 = require("uuid/v4");

class DeviceRepository {
  constructor() {
    this.devices = [];

    this.addWithNewId({ name: "=A1+O1-F1" });
    this.addWithNewId({
      name: "=A1+O1-F2",
      connectionDescription: ["1", "2"]
    });
    this.addWithNewId({
      name: "=A1+O2-M3",
      connectionDescription: ["U1", "V1", "W1", "U2", "V2", "W2"]
    });
  }

  getAll() {
    return this.devices;
  }

  getById(id) {
    return this.devices.find(d => d.id === id);
  }

  addMany(deviceList) {
    deviceList.forEach(d => {
      this.addWithNewId(d);
    });
  }

  addOne(device) {
    return this.addWithNewId(device);
  }

  // -----
  addWithNewId(device) {
    device.id = uuidv4();
    this.devices.push(device);
    return device;
  }
}

const deviceRepository = new DeviceRepository();

module.exports = deviceRepository;
