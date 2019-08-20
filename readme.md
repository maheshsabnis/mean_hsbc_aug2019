JavaScript Object Model
1. declaration type using 'var'
   1. The default scope for the 'var' declaration is 'function-scope'
   2. No data type
      1. Parse Methods
         1. parseInt()
         2. parseFloat()
      2. typeof() operator
   3. Comparision
      1. Always by value using '==' operator
      2. Deep Equality using value and type using '===' operator
2. function
   1. An object that has implementation
   2. May have input and output parameters
   3. Three function types
      1. Function of which reference is stored in a variable aka reference functions
         1. These are called 'classes' in JavaScript
         2. All public declarations are prefixed using 'this.' object
            1. The 'this' object is known as 'self-scope' object
      2. The Function thar returns a single object aka JSON object
         1. Everything that is specified inside the return body is public by default.
         2. Such fucntions are alos know as closing-type functions 
         3. Syntax
            1. function MyFunction(parameters.....){....returns {<PUBLIC DECLARATION GOES Here>}}
      3. Immediately Invoked Function Expression (IIFE)
         1. Self-Executable Function Body
         2. Invoked immediately once the .js file is loaded in runtime
         3. Syntax
            1. ()();
3. string
4. Array
5. Date

#=============================================================================
# Programming with Node.js
Downloaded from https://www.nodejs.org
Aftre Node installtion the 'npm' utility is available
1. Node.js packages
   1. Standard Packages aka Modules
      1. Avaiable with Node.js runtime
      2. In code these packages are Loaded using 'require()' object
         1. Syntax :
            1. var obj = require('<PACKAGE-NAME>');
            2. The 'require()' object cache the paclkage for current application.
      3. fs --> For file IO
      4. http --> Creating Node.js Web Server
      5. path --> Working with Directory Structure
      6. socket
      7. DNS 
   2. Custom Modules
      1. Designed by Organization specific to domain
   3. External Modules
      1. Used as per the requirement https://www.npmjs.com
2. The 'package.json' file
   1. The Application Configuration file for Node.js based application on server, can also be used for Modern-Frot-End Apps
   2. The 'npm init -y' command will create package.json with defaults
   3. The 'npm init' command will provide Command-Line-Wizard to create package.json
   4. npm install --save-dev <PACKAGE-NAME>
      1. Install package as 'devDependencies'
   5. npm install --save <PACKAGE-NAME>
      1. Install package as 'dependencies'
3. Node.js Application Development
   1. Creation of Simple Web Server
      1. Using 'http' module
      2. Manage request and responses
      3. Listening to Http Requests
   2. Working With Files
      1. Creating Files
         1. Reading and Writing Files
      2. The 'fs' module
         1. readFile() and writeFile(), as Async methods
         2. readFileSync() and writeFilrSync(), as Sync methods
   3. Create a File Base Web Server

#=============================================================================# Node.js + Express Application

1. Installing Express
   1. npm install --save-dev express
2. Express REST API dependencies
   1. Message Formatter
      1. npm install --save-dev body-parser
   2. Cross-Origin-Resource-Sharing (CORS)
      1. npm install --save-dev cors
3. Express Instance
   1. var instance =express();
4. Configure the middlewares
   1. instance.use(bodyparser)
   2. instance.use(cors)