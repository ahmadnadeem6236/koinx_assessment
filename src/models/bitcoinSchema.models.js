import mongoose, {Schema} from "mongoose";

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
        default: Date.now
      }
    })

export const BitcoinData = mongoose.model("BitcoinData", bitcoinSchema)