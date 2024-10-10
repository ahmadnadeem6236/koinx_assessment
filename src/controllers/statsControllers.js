import {
  BitcoinData,
  EthereumData,
  MaticData,
} from "../models/cryptoDataSchema.models.js";

export async function statGetData(req, res) {
  const { coin } = req.query;

  if (!coin || !["bitcoin", "ethereum", "matic-network"].includes(coin)) {
    return res.status(400).json({
      error:
        "Invalid coin specified. Must be one of bitcoin, ethereum, or matic-network.",
    });
  }

  try {
    if (coin === "bitcoin") {
      const latestData = await BitcoinData.findOne().sort({ fetchedAt: -1 });

      if (!latestData) {
        return res.status(404).json({ error: `No data found for ${coin}` });
      }

      res.json({
        price: latestData.price,
        marketCap: latestData.marketCap,
        "24hChange": latestData.change24h,
      });
    }
    if (coin === "ethereum") {
      const latestData = await EthereumData.findOne().sort({ fetchedAt: -1 });

      if (!latestData) {
        return res.status(404).json({ error: `No data found for ${coin}` });
      }

      res.json({
        price: latestData.price,
        marketCap: latestData.marketCap,
        "24hChange": latestData.change24h,
      });
    }
    if (coin === "matic-network") {
      const latestData = await MaticData.findOne().sort({ fetchedAt: -1 });

      if (!latestData) {
        return res.status(404).json({ error: `No data found for ${coin}` });
      }

      res.json({
        price: latestData.price,
        marketCap: latestData.marketCap,
        "24hChange": latestData.change24h,
      });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
