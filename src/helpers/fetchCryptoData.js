import axios from "axios";
import {
  BitcoinData,
  EthereumData,
  MaticData,
} from "../models/cryptoDataSchema.models";
async function fetchCryptoData() {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        headers: {
          "x-cg-demo-api-key": `${process.env.COINGECKO_API}`,
        },
        params: {
          vs_currency: "usd",
          ids: "bitcoin,ethereum,matic-network",
        },
      }
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data from CoinGecko:", error);
    return null;
  }
}

async function saveCryptoData() {
  const cryptoData = await fetchCryptoData();

  if (!cryptoData) return;

  cryptoData.forEach(async (coin) => {
    if (coin.id === "bitcoin") {
      const { id, current_price, market_cap, price_change_24h } = coin;

      const newBitcoinData = new BitcoinData({
        price: current_price,
        marketCap: market_cap,
        change24h: price_change_24h,
      });

      try {
        await newBitcoinData.save();
        console.log(`${id} data saved`);
      } catch (error) {
        console.error(`Error saving ${id} data`, error);
      }
    }
    if (coin.id === "ethereum") {
      const { id, current_price, market_cap, price_change_24h } = coin;

      const newEthereumData = new EthereumData({
        price: current_price,
        marketCap: market_cap,
        change24h: price_change_24h,
      });

      try {
        await newEthereumData.save();
        console.log(`${id} data saved`);
      } catch (error) {
        console.error(`Error saving ${id} data`, error);
      }
    }
    if (coin.id === "matic-network") {
      const { id, current_price, market_cap, price_change_24h } = coin;

      const newMaticData = new MaticData({
        price: current_price,
        marketCap: market_cap,
        change24h: price_change_24h,
      });

      try {
        await newMaticData.save();
        console.log(`${id} data saved`);
      } catch (error) {
        console.error(`Error saving ${id} data`, error);
      }
    }
  });
}

export default saveCryptoData;
