# How to Install RabbitMq on windows 10

step 1 :- Go to rabbitmq offical website https://www.rabbitmq.com/
Get Started => Download + Installation => Installation Guides Windows Installer  
We Can see Rabbitmq Dependencies Erlang So Side by Side Download Erlang 64 bit + Download Rabbitmq Server.exe
Please Check first Rabbitmq version and Erlange version https://www.rabbitmq.com/which-erlang.html
commands:
rabbitmq-plugins list
rabbitmq-plugins enable rabbitmq_management
rabbitmq-server start
Open New Tab loacalhost:15672
then go to start menu and search for rabbitmq command prompt
type command "rabbitmq-plugins enable rabbitmq_management"

# What is RabbitMq ?

- RabbitMq is open source message broker
- It offers two important roles
  - Producer
  - Consumer

Use - Rabbitmq is mostly use where web application has long running tasks - purchase order system wheere user enter details of the order processing order => dispaching => suppling order [details order message]

Producer => Publish / Message ==> Broker / RabbitMq => Consumer [Broker to consumer is called Subscription to broker]

# Why RabbitMq

- As we are going to use PM2 to create and message processes, we can not establish communication between master and child
- The control is now with PM2
- With RabbitMq we can distributed messages to multiple consumers
- Also we can load balance between the workers.

# Core Of RabbitMq

1 Producer - The Application / process which send the Messages
2 Consumer - The Application / process which is recive the Message
3 Queue - The Message Store
4 Message - The Message / Information send by the producer to the consumer
5 Channel - A medium using which can send messages or receive messages is called channel
6 AMQP - Advance Message Queue Protocol used by RabbitMq for Messaging

Install 'amqplib' Pakaging Using Node

- npm install amqplib
  It is library and client for Node js


