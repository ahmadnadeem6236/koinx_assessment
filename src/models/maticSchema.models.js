import mongoose, {Schema} from "mongoose";

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
        default: Date.now
      }
    })

export const MaticData = mongoose.model("MaticData", maticSchema)