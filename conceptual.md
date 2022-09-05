### Conceptual Exercise

Answer the following questions below:

- What is a JWT?  
JSON-Web-Token allows to add state to HTTP, which is a stateless protocol.

- What is the signature portion of the JWT?  What does it do?  
It's the encrypted data. This data is derived from header and payload. Its encoded with a secret key.

- If a JWT is intercepted, can the attacker see what's inside the payload?  
Yes anyone can decode the token. Since it's not hashed

- How can you implement authentication with a JWT?  Describe how it works at a high level.  
Once user logs in (sends a POST request), a signed JWT is sent back to the client. From sub-sequent request from client, the client will send this token. And server can authenticate if the request is from the right user by verifying the token against the Secret_key.

- Compare and contrast unit, integration and end-to-end tests.  
All three ways are there to find bugs and make sophisticated applications so that applications do not crash.
Unit tests are mainly for function level tests. Testing the outputs of a given function.  
While integration tests can be used to test different parts of the app. Integration tests are like combination of multiple unit tests. Integration tests are easy to fail/break than unit tests, because they are combination of many tasks and if any of those tasks change in the middle the tests fail. So if an application is consistently changing it's hard to update integration tests.  
End-to-End tests are the most complex of all. These tests would change every time there is a change in the app.


- What is a mock? What are some things you would mock?  
Mock tests are mainly used in unit tests. In unit tests, mock is an object that is used to replace another object. The reason to do this is, that object we want to replace might not be predictable, so we use this mock object to have certainty and predictability.


- What is continuous integration?  
After a change is made and code is pushed into the repository. The process to run automated builds and tests that run. So we can make sure that the newly uploaded code doesn't have any bugs in the application. 

- What is an environment variable and what are they used for?  
Variables that are saved in the operating systems environment. These variables are used to store sensitive information regarding your application. So that when you push code to github using git(version control system) you don't have to have this sensitive information on there.

- What is TDD? What are some benefits and drawbacks?  
Test Driven Development. Main benefits: App is build from testing, its a way to think how the app should work. You write the features first and then run tests, tests fail, then fix code base until tests pass.

- What is the value of using JSONSchema for validation?  
JSON schema reduces all the logic we have to write to make sure we get data accurate at end points. For instance, if we expect the requests body to have "favNumber" and this has to be provided and it should be a number, and min 10, max 100. Imagine writing logic for this, we have to write `if` statements for all the conditions, rather we can use JSON schema, that validates all these conditions and if it fails, it throws accurate errors.

- What are some ways to decide which code to test?
You can not write tests for everything, when writing tests, it's more like thinking how the app should work, mainly security related and features related. When testing our API we want to tests the response received from the server, then make another request if the first request made the accurate changes to the DB.  

- What does `RETURNING` do in SQL? When would you use it?
When a query is made to a DB, if there is no RETURNING then nothing is returned. We would use `RETURNING` if we want a certain columns after the query or all the columns, so that we use the data after the query to verify if the query did what was expected to.

- What are some differences between Web Sockets and HTTP?
Web sockets have state, HTTP doesn't have state. Headers are small in sockets, HTTP sends lot of data in it's headers.

- Did you prefer using Flask over Express? Why or why not (there is no right answer here --- we want to see how you think about technology)?  
I like both. Both have their pros and cons. Express is super quick for setting API's. Flask is easy to set up and easy to scale.
