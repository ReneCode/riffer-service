const uuidv4 = require("uuid/v4");

class DeviceRepository {
  constructor() {
    this.devices = [{ id: 1, name: "abc" }, { id: 2, name: "xyz" }];
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
