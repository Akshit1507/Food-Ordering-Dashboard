import mysql from "mysql";

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "password", // Replace with your MySQL password
  database: "foodOrderingSystem", // Replace with your database name
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
    return;
  }
  console.log("Connected to MySQL database successfully!");
});

export default connection;
