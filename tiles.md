# Sample Title
## Sample Subtitle

Follow these steps to run it in local mode, local mode means it allows the dashboard to be developed,
without requiring a full Bluemix Atlas development env.

```bash
git clone git@github.ibm.com:bluemix-mobile-services/bms-mobile-service-tab.git
cd bms-mobile-service-tab
```

Once you have a copy of bms-mobile-services in your local development environment you can then pull down the specific dependencies.

```bash
npm install
npm install -g grunt-cli
grunt build                 ``` Use this if you want to minimize js for production
grunt                       ``` Use this if you want meaningful debug messages
```

Once all the dependencies have been install and the build has been completed, we can then run the server.
```bash
grunt serve:local
```
You should now see the following console, with the server running.
```bash

[2016-03-08 21:46:35.409] [INFO] [default] -  ____  _    _   _ _____ __  __ _____  __
[2016-03-08 21:46:35.415] [INFO] [default] - | __ )| |  | | | | ____|  \/  |_ _\ \/ /
[2016-03-08 21:46:35.416] [INFO] [default] - |  _ \| |  | | | |  _| | |\/| || | \  /
[2016-03-08 21:46:35.416] [INFO] [default] - | |_) | |__| |_| | |___| |  | || | /  \
[2016-03-08 21:46:35.416] [INFO] [default] - |____/|_____\___/|_____|_|  |_|___/_/\_\
[2016-03-08 21:46:35.417] [INFO] [default] -
[2016-03-08 21:46:35.417] [INFO] [default] - *** bms-mobileappbuilder-dashboard ***
[2016-03-08 21:46:35.417] [INFO] [default] - Version: 0.0.1
[2016-03-08 21:46:35.417] [INFO] [default] - Description: IBM Mobile App Builder for Bluemix
[2016-03-08 21:46:35.417] [INFO] [default] -
[2016-03-08 21:46:35.417] [INFO] [default] - Running in Local Mode

```

## Debugging
To prepare the client side packages for debugging use the `grunt` command on its own, this will not perform a minification step
and will allow you to see the client side errors and set break points in your browser.

WebStorm is generally used for Node server side debugging. You need to configure your WebStorm configuration to include all the environment variables
that are stored in the `startbm.sh`

Once you run Node in bug mode you can set debug breakpoints on the server side code.

