const { MongoClient } = require("mongodb");
const { log, error } = require("./helpers");

/**
 * Creates a new mongodb client using our env vars.
 */
const useMongoClient = async (req, res, next) => {
  try {
    // Init client.
    const client = new MongoClient(process.env.MONGO_URI);

    // Do connection.
    await client.connect();

    // Return default DB (found in uri).
    req.db = client.db();
    log("[mongodb] db connected");
  } catch (e) {
    error("[mongodb] failed to connect");
    error(e);
  }

  next();
};

module.exports = { useMongoClient };
