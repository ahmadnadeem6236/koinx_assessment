import { calculateStandardDeviation } from "../helpers/calStandardDeviation.js";
import {
  BitcoinData,
  EthereumData,
  MaticData,
} from "../models/cryptoDataSchema.models.js";

export async function deviationGetData(req, res) {
  const { coin } = req.query;

  if (!coin || !["bitcoin", "ethereum", "matic-network"].includes(coin)) {
    return res.status(400).json({
      error:
        "Invalid coin specified. Must be one of bitcoin, ethereum, or matic-network.",
    });
  }

  try {
    if (coin === "bitcoin") {
      const cryptoData = await BitcoinData.find()
        .sort({ fetchedAt: -1 })
        .limit(100);

      if (cryptoData.length === 0) {
        return res.status(404).json({ error: `No data found for ${coin}` });
      }

      if (cryptoData.length > 1 && cryptoData.length > 100) {
        const prices = cryptoData.map((record) => record.price);
        const deviation = calculateStandardDeviation(prices);
        res.json({ deviation: deviation.toFixed(2) });
      } else {
        return res.json({
          InsuffiecientData: `Yet, we do not have more than 100 record for ${coin} to calculate Standard Deviation`,
        });
      }
    }

    if (coin === "ethereum") {
      const cryptoData = await EthereumData.find()
        .sort({ fetchedAt: -1 })
        .limit(100);

      if (cryptoData.length === 0) {
        return res.status(404).json({ error: `No data found for ${coin}` });
      }

      if (cryptoData.length > 1 && cryptoData.length > 100) {
        const prices = cryptoData.map((record) => record.price);
        const deviation = calculateStandardDeviation(prices);
        res.json({ deviation: deviation.toFixed(2) });
      } else {
        return res.json({
          InsuffiecientData: `Yet, we do not have more than 100 record for ${coin} to calculate Standard Deviation`,
        });
      }
    }
    if (coin === "matic-network") {
      const cryptoData = await MaticData.find()
        .sort({ fetchedAt: -1 })
        .limit(100);

      if (cryptoData.length === 0) {
        return res.status(404).json({ error: `No data found for ${coin}` });
      }

      if (cryptoData.length > 1 && cryptoData.length > 100) {
        const prices = cryptoData.map((record) => record.price);
        const deviation = calculateStandardDeviation(prices);
        res.json({ deviation: deviation.toFixed(2) });
      } else {
        return res.json({
          InsuffiecientData: `Yet, we do not have more than 100 record for ${coin} to calculate Standard Deviation`,
        });
      }
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
