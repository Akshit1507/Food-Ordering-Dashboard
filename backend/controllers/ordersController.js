// controllers/ordersController.js

import connection from "../db/dbConfig.js";

// Function to get all orders
const getAllOrders = (req, res) => {
  // Construct the SQL query to fetch all orders
  const sql = "SELECT * FROM orders";

  // Execute the SQL query
  connection.query(sql, (err, result) => {
    if (err) {
      console.error("Error fetching orders:", err);
      return res.status(500).json({ error: "Error fetching orders" });
    }

    // Respond with the fetched orders
    res.status(200).json(result);
  });
};

export { getAllOrders };
