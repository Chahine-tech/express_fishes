const { Client } = require("pg");
const client = new Client({
  connectionString: "postgresql://postgres:root@localhost/fishesapp"
});

client.connect();

module.exports = client;
