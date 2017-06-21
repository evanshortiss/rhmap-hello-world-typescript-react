# RHMAP Hello World using TypeScript and React
Since the RHMAP JavaScript SDK supports TypeScript we've provided this example
of how you could implement our standard [hello world](https://github.com/feedhenry-templates/helloworld-app)
client in TypeScript while using React to manage UI components and state.


## Running the Application

### Prerequisites
These are a guideline, newer versions should work too:

* node.js v4.4.3
* npm v4.6.1
* Visual Studio Code or a similar TypeScript ready text editor or IDE

### On RHMAP
Running this appliaction on RHMAP can be achieved by going to your domain and
creating a new blank project, or by selecting an existing project.

Once you have a project you can add a new Client Application to it.

### On a Local Development Machine
Before running locally be sure to get the [Hello World Cloud](https://github.com/feedhenry-templates/helloworld-cloud) setup locally.

To run this example simply clone it locally and do the following inside the
repository:

```
# install dependencies...might take a minute or two
npm install
```

#### Browser
To view this application in a browser simply run: 

```
# start will run a local http server on port 8080 to serve the application
npm start
```

Now you can open `http://localhost:8080/?url=http://localhost:8001` in a browser
and play with the application.


#### iOS/Android Simulator

_Note: You will need the applicable developer tools installed for the platform
you are targetting. For iOS this means a recent version of macOS and the XCode
Developer Tools for iOS are installed. Similarly, for Android you'll need the
Android Developer tools installed. More detail is provided by the
[Apache Cordova Platforms Guide](https://cordova.apache.org/docs/en/latest/guide/platforms/android/)._

If you'd like to view this application in an iOS or Android simulator you'll
need to update the file `www/fhconfig.json` with the following lines:

```
"host": "http://localhost:8001",
"local": true
```

These lines tell the SDK it's running locally and that it should target the
specified host - similar to the `url` querystring parameter in the Browser
example above.

Now you can run either `npm run ios-sim` or `npm run android-sim` to start the
application inside an simulator/emulator and have it communicate with the local
Cloud Application. It can also communicate with a Cloud Application running on
RHMAP if you leave the standard `fhconfig.json` entries intact.


## Application Overview
This application is a simple example of using the following technologies to
create a structured, statically typed, Cordova application that sends data to
a Red Hat Mobile Application Platform via HTTPS and prints the response.

The best place to start reading the code is in the `www/index.html` and
`src/index.tsx` files. Did you notice that `index.html` references JavaScript
files that aren't checked into the repository? This is because they are
generated when you run `npm start` or `npm run compile` inside the repository.

### Technologies

#### TypeScript
TypeScript is a superset of JavaScript that provides optional static typing and
new JavaScript language features. It compiles down to ES5 JavaScript so it can
be safely deployed in older browsers and JavaScript engines. Most popular
JavaScript libraries and frameworks support TypeScript by providing type
definitions. This improves the development experience by catching errors before
runtime, making code easier to read and understand, and enabling excellent
intellisense.

#### FeedHenry JS SDK
The FeedHenry JavaScript SDK provides multiple features such as HTTPS secured
Data Synchronisation capabilties bewteen mobile devices and a node.js server
running on RHMAP. Recent versions of the SDK provide TypeScript type definitions
to provide an improved, more efficient developer experience and better
documentation.

#### Cordova
Cordova wraps a web application inside a native container to faciliate building
native mobile applications. It provides an interface that facilitates
communication between the JavaScript layer and native mobile APIs so developers
can create a native-like user experience using their favourite web technolgies.

#### React
React is a JavaScript library that enables developers to create applications
by composing isolated UI components that manage their own internal state. When
changes to state are made React will update the DOM efficiently by only
re-rendering the affected components.