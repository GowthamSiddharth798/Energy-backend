const mongoose = require("mongoose");

const Schema = mongoose.Schema;


 
const sensordataSchema = new Schema(
    {
      current: {
        type: Schema.Types.Number,
        required: true,
      },
      IRcurrent: {
        type: Schema.Types.Number,
        required: true,
      },
      IYcurrent: {
        type: Schema.Types.Number,
        required: true,
      },
      IBcurrent: {
        type: Schema.Types.Number,
        required: true,
      },
      
      IRLcurrent: {
        type: Schema.Types.Number,
        required: true,
      },
      IYLcurrent: {
        type: Schema.Types.Number,
        required: true,
      },
      IBLcurrent: {
        type: Schema.Types.Number,
        required: true,
      },
    VRvoltage: {
        type: Schema.Types.Number,
        required: true,
      },
    VYvoltage: {
        type: Schema.Types.Number,
        required: true,
      },
    VBvoltage: {
        type: Schema.Types.Number,
        required: true,
      },
      VRLvoltage: {
        type: Schema.Types.Number,
        required: true,
      },
      VYLvoltage: {
        type: Schema.Types.Number,
        required: true,
      },
      VBLvoltage: {
        type: Schema.Types.Number,
        required: true,
      },
      Voltage: {
        type: Schema.Types.Number,
        required: true,
      },
      power: {
        type: Schema.Types.Number,
        required: true,
      },
  
      energy: {
        type: Schema.Types.Number,
        required: true,
      },
      Energy_Meter: {
        type: Schema.Types.Number,
        required: true,
      },
      R_power: {
        type: Schema.Types.Number,
        required: true,
      },
      Y_power: {
        type: Schema.Types.Number,
        required: true,
      },
      B_power: {
        type: Schema.Types.Number,
        required: true,
      },
      Power_factor: {
        type: Schema.Types.Number,
        required: true,
      },
      Reactive_power: {
        type: Schema.Types.Number,
        required: true,
      },
      Active_power: {
        type: Schema.Types.Number,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );
  

module.exports = mongoose.model("sensordata", sensordataSchema);