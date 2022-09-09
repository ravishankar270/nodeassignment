
# NodeJS User Authentication System.

# APIS To test
1: http://localhost:3000/api/register

2: http://localhost:3000/api/login/

3: http://localhost:3000/api/selfdata/:id

4: http://localhost:3000/api/allusersdata

5: http://localhost:3000/api/updateinfo/:id

6: http://localhost:3000/api/changepassword/:id


:id(this id is generated after registering) 
# After logging in copy the access token and use it in headers section of the request to access to remaining apis.
Headers Section of the request should be
key:token
value:access_token generated after logging in

# Steps to setup the project
1. Clone the Repository
2. Create a virtual environment and activate it.
3. To install all the dependencies run npm install.
4. Create a .env file at root-level and inside it initialize JWT_SECRET with some random string value.
5. Finally start the server by npm start.

Prerequisites
1. MongoDB compass should be installed.
2. POSTMAN should be installed to test API routes.


