import React, { useState, useEffect } from "react";
import axios from "axios";

const DashboardPage = () => {
  // State to store the orders
  const [orders, setOrders] = useState([]);

  // Fetch orders from the backend API
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/orders")
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <div className="order-list">
        {orders.map((order) => (
          <div key={order.id} className="order">
            <p>Order ID: {order.id}</p>
            <p>Order Details: {order.order_details}</p>
            <p>Total Price: ${order.total_price}</p>
            <p>Created At: {order.created_at}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
