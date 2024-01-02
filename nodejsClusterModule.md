# Node Js Cluster Module

1. A Single instance of Node.js runs in a single thread.
2. Cluster Module allows to take advantage of multi-core system.
3. It helps to create child processes which share server ports.

# Working of Cluster

1. Worker processes are spawned using the fork() method.
2. These Processor can communicate with parent via IPC.
3. These Processor can communicate from parent to child and child to parent.
4. The Cluster Module Suppoerts two methods for distributing incoming connection.

# Cluster Module Methods

1. Round Robin:
   - This is default on all platforms except Windows.
   - The Master Process listens on a PORT, accepts a new connection and distribute them across the workers in a round- robin fashion.
2. Second Method:
   - The master process creates the listen socket and sends it to interested workers.
   - The workers then accept incoming connection directly

# Cluter Methods, Properties nd Events

1. There are several events which is we can handle during Node JS clustering-

   - Online
   - Fork
   - Message
   - Disconnected
   - Exit etc

2. Methods
   - Disconnected
   - Fork
3. Properties
   - IsMaster
   - IsWorker

# Class Worker

- Event: 'disconnect'
  similar to cluster.on('online', ()=>{// Worker has disconnected}) event, but specific to this worker.

- Event: 'online'
  cluster.on('online', ()=>{// Worker has Online})

- Event: 'exit'
  cluster.on('exit', ()=>{// Worker has Exit then cluster.fork();})

# Node JS cluster Load Test

- Load Testing using 'loadtest' package
- npm install -g loadtest
  -While using loadtest, we can use number of parameters like
  : -n :- Sets Maximum Number of Request
  : -c :- Concurrent Requests
  : --rps :- number of request per secound.
  Command line will be
  : loadtest -n 1000 -c 100 --rps 200 http://localhost:3000?number=30

- Load Testing using 'artillery' package
- npm install -g artillery
  -While using artillery, we can used number of parameters like
  : quick :- used for ad-hoc testing
  : --count :- used for creating virtual users
  : -n :- number of request per virtual user
  Command line will be
  : artillery quick --count 10 -n 20 http://localhost:3000?number=20
