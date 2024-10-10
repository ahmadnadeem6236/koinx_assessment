import mongoose, {Schema} from "mongoose";

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
        default: Date.now
      }
    })

export const EthereumData = mongoose.model("EthereumData", ethereumSchema)