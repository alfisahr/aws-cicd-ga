module.exports = {
  apps: [
    {
      name: "app",
      cwd: "/var/frontend",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
