module.exports = {
  apps: [
    {
      name: "Express App",
      script: "./server.js",
      instances: "MAX",
      watch: true,
      max_memory_restart: "1G",
      exec_mode: "cluster",
    },
  ],
};
