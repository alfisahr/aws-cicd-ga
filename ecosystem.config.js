module.exports = {
  apps: [
    {
      name: "NextJS-CICD-Test",
      cwd: "/var/frontend",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
