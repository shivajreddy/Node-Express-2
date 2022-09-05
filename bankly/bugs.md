## Bugs 

#1. Security bug - middleware/auth.js - function authUser()  
This function does not verify the token that was given. Beats the whole purpose of JWT to verify the received tokens.
Because a bad actor can send any token with out the correct SECRET_KEY and the function would accept it.
Solution:
By adding this line
`const result = jwt.verify(token, SECRET_KEY);`
or just `jwt.verify(token, SECRET_KEY);` will fix this issue


#2. Login route  
The ` let user = User.authenticate(username, password); ` in "/login" route doesn't use await.
So it return undefined 


#3. The login route allows login for any password with a correct username.  
This is due to the model's static function: User.authenticate returning a promise. Even User.authenticate method 


#4. await missing in delete route of routes/users.js  
TO fix: add await in front of `User.delete(req.params.username);` in routes/users.js router.delete('/:username) function


#5. PATCH route should only accept certain fields, not everything  
- Any user can make them self as an admin
- When user updates their password, hashed password is not being stored.


#6. 

