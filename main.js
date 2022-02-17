const createChassis = () => {
    newChassisObject = {};
    return newChassisObject;
}
const addBody = (chassisObject) => {
    chassisObject.body = "Fever";
    return chassisObject;
} 
const addWheels = (chassisObject) => {
    chassisObject.wheels = 4;
    return chassisObject;
}
const addEngine = (chassisObject) => {
    chassisObject.engine = "4.8L";
    return chassisObject;
}
const addSteeringWheel = (chassisObject) => {
    chassisObject.steeringWheel = "Tilting";
    return chassisObject;
}
const addDriveTrain = (chassisObject) => {
    chassisObject.driveTrain = "Two Wheel Drive";
    return chassisObject;
}

const buildCar = () => {
    const car = createChassis();
    addBody(car);
    addWheels(car);
    addEngine(car);
    addSteeringWheel(car);
    addDriveTrain(car);
    return car;
}
let car1 = buildCar();
console.log(car1);
