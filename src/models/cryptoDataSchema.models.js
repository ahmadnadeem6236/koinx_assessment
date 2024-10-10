import mongoose, { Schema } from "mongoose";

const bitcoinSchema = new Schema({
  price: {
    type: Number,
  },
  marketCap: {
    type: Number,
  },
  change24h: {
    type: Number,
  },
  fetchedAt: {
    type: Date,
    default: Date.now,
  },
});

const ethereumSchema = new Schema({
  price: {
    type: Number,
  },
  marketCap: {
    type: Number,
  },
  change24h: {
    type: Number,
  },
  fetchedAt: {
    type: Date,
    default: Date.now,
  },
});

const maticSchema = new Schema({
  price: {
    type: Number,
  },
  marketCap: {
    type: Number,
  },
  change24h: {
    type: Number,
  },
  fetchedAt: {
    type: Date,
    default: Date.now,
  },
});

export const BitcoinData = mongoose.model("BitcoinData", bitcoinSchema);
export const EthereumData = mongoose.model("EthereumData", ethereumSchema);
export const MaticData = mongoose.model("MaticData", maticSchema);
