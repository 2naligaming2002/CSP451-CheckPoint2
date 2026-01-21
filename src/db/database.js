const config = {
  host: "localhost",
  port: 5432,
  database: "app_db",
  user: "admin",
  password: "password",
};

let connected = false;

export const connectDatabase = () => {
  return new Promise((resolve, reject) => {
    if (connected) {
      resolve("Already connected to database");
      return;
    }

    setTimeout(() => {
      connected = true;
      console.log("Database connected:", config.database);
      resolve("Connection successful");
    }, 1000);
  });
};

export const disconnectDatabase = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      connected = false;
      console.log("Database disconnected");
      resolve("Disconnected");
    }, 500);
  });
};

export const getConnectionStatus = () => {
  return connected;
};
