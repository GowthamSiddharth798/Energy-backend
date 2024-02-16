const SensorData = require("../models/sensordata");


const sensordataHandler = async (req, res, next) => {
  
  const {current,power,energy ,IRcurrent,IYcurrent,IBcurrent,VRvoltage,VYvoltage,
    VBvoltage,IRLcurrent,IYLcurrent,IBLcurrent,VRLvoltage,VYLvoltage,
    VBLvoltage ,R_power,Y_power,B_power,Active_power,Reactive_power,Power_factor,Energy_Meter} = req.body;


  

  let exists = false;
  let sensordata;
  try {
    sensordata = await SensorData.find();
    if (sensordata.length == 1) {
      exists = true;
    }

  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Updating Data Failed",
    });
  }

  if (exists) {
    const result = await SensorData.findOneAndUpdate(
      { _id: sensordata[0]._id },
      {
        current: current,
        power: power,
        R_power: R_power,
        Y_power: Y_power,
        B_power: B_power,
        Power_factor:Power_factor,
        Active_power:Active_power,
        Reactive_power:Reactive_power,
        energy: energy,
        Energy_Meter:Energy_Meter,
        IRcurrent:IRcurrent,
        IYcurrent:IYcurrent,
        IBcurrent:IBcurrent,
        IRLcurrent:IRLcurrent,
        IYLcurrent:IYLcurrent,
        IBLcurrent:IBLcurrent,
        VRvoltage:VRvoltage,
        VYvoltage:VYvoltage,
        VBvoltage:VBvoltage,
        VRLvoltage:VRLvoltage,
        VYLvoltage:VYLvoltage,
        VBLvoltage:VBLvoltage,

      }
    );
  } else {
    try {
      const newSensorData = new SensorData({
        current: current,
        power: power,
        Active_power:Active_power,
        Reactive_power:Reactive_power,
        R_power: R_power,
        Y_power: Y_power,
        B_power: B_power,
        Power_factor:Power_factor,
        energy: energy,
        Energy_Meter:Energy_Meter,
        IRcurrent:IRcurrent,
        IYcurrent:IYcurrent,
        IBcurrent:IBcurrent,
        IRLcurrent:IRLcurrent,
        IYLcurrent:IYLcurrent,
        IBLcurrent:IBLcurrent,
        VRvoltage:VRvoltage,
        VYvoltage:VYvoltage,
        VBvoltage:VBvoltage,
        VRLvoltage:VRLvoltage,
        VYLvoltage:VYLvoltage,
        VBLvoltage:VBLvoltage,


      });
      await newSensorData.save();
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "Updating Data Failed",
      });
    }
  }

  return res.status(200).json({
    message: "Data updated successfully",
  });
};



const getdataHandler = async (req, res, next) => {
  let sensordata, updatedAtnew;
  try {
    sensordata = await SensorData.find();
    console.log(sensordata);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Getting Data Failed",
    });
  }
  // if (sensordata.length == 1) {
  //   const updatedAtold = new Date(sensordata[0].updatedAt);
  //   updatedAtnew = addHours(5.511, updatedAtold);
    
  // }

  const data = {
    current: sensordata[0].current,
    power: sensordata[0].power,
    Active_power: sensordata[0].Active_power,
    Reactive_power: sensordata[0].Reactive_power,
    R_power: sensordata[0].R_power,
    Y_power: sensordata[0].Y_power,
    B_power: sensordata[0].B_power,
    Power_factor: sensordata[0].Power_factor,
    energy: sensordata[0].energy,
    Energy_Meter: sensordata[0].Energy_Meter,
    IRcurrent:sensordata[0].IRcurrent,
    IYcurrent:sensordata[0].IYcurrent,
    IBcurrent:sensordata[0].IBcurrent,
    IRLcurrent:sensordata[0].IRLcurrent,
    IYLcurrent:sensordata[0].IYLcurrent,
    IBLcurrent:sensordata[0].IBLcurrent,
    VRvoltage:sensordata[0].VRvoltage,
    VYvoltage:sensordata[0].VYvoltage,
    VBvoltage:sensordata[0].VBvoltage,
    VRLvoltage:sensordata[0].VRLvoltage,
    VYLvoltage:sensordata[0].VYLvoltage,
    VBLvoltage:sensordata[0].VBLvoltage
    
  }
  
  return res.status(200).json(data);
}

exports.sensordataHandler = sensordataHandler;
exports.getdataHandler = getdataHandler;