const express = require('express')
const cors     = require("cors");
const mongoose = require("mongoose"); 
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  app.use(cors());
  app.use(express.json());

  const uri = 'mongodb+srv://sd:satheeshmongodb@sdcluster-6h2mn.mongodb.net/sample_training?retryWrites=true&w=majority';
  mongoose.connect(uri,{ useNewUrlParser: true,useCreateIndex: true});
  const connection = mongoose.connection;
  connection.once('open', () => {
    console.log("SD MONGODB connection establish Successfully");
  })


const exercisesRouter = require('./routes/exercise');
const usersRouter     = require('./routes/users');
const zipsRouter     = require('./routes/zips');
const storiesRouter     = require('./routes/stories');

app.use('/exercises',exercisesRouter);
app.use('/users',usersRouter);
app.use('/zips',zipsRouter);
app.use('/stories',storiesRouter);


  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `SD Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
