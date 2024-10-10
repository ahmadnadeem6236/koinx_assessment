import mongoose, {Schema} from "mongoose";

const coinSchema = new Schema({
    price: {
        type: Number,
        required: true,
      },
      marketCap: {
        type: Number,
        required: true,
      },
      change24h: {
        type: Number,
        required: true,
      },
      fetchedAt: {
        type: Date,
        default: Date.now
      }
    }, 
    { timestamps: true }
)

export const CryptoData = mongoose.model("CryptoData", coinSchema)