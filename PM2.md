# Introduction To PM2

# What is PM2

- PM2 is a production process manager for Node JS applications with built-in load-balancer
- PM2 allow to
  - Keep Application alive forever
  - Reload them without downtime
  - Facilitate common system admin tasks like
    - Monitoring
    - stopping
    - deteting
    - processes

# PM2 WOrking

- PM2 makes usages of Node js cluster Module
- The scaled application's child processes can automatically share server port
- You can start Node js application using PM2
  - commnad line option
  - Process configuration file [js/yaml/json file]

# Install PM2 using NPM

- To install PM2 on your machine, use npm install command –
  - npm install –g pm2

# PM2 Working

- PM2 makes usage of Node JS cluster module
- The scaled application’s child processes can automatically share server ports
-

# Creating Process File

You can create a process file to –

- Fine-tune the behavior
- Options
- Environment variables
- Log files of each application

To create a process file use command –

- pm2 ecosystem
  After creating a process file, use command –
- pm2 [start|restart|stop|delete] ecosystem.config.js

# Few PM2 Commands

PM2 start command –

- pm2 start ecosystem.config.js
  To monitor the processes, use –
- pm2 monit
  To stop any/all processes use –
- pm2 stop all/app-name
  To delete any/all processes use –
- pm2 delete all/app-name
  To list all the applications use
- pm2 list
