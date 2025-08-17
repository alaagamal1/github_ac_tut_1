module.exports = {
    apps: [{
      name: "github_actions_project",         // Your app name that will be shown in PM2
      script: "server.js",      // The entry point of your application
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G'
    }]
  };