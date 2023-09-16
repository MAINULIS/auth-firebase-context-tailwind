/*  CONTEXT API
benefit of Context API:using context api we can use any shared data at any component of the project.
  1. Create context and export
  2. Create a provider and pass value
  3. use useContext to receive the value
*/

/* 
1. inside main.jsx set AuthProviders
2. inside provider access {children} props and then use it
 */

/* 
1. break down the create user function
2. auth provider will have auth and pass email and password from register component
 */

/* Private Route
1. create private route 
2. get {user, loading} from AuthProvider
3. write conditions in private route
4. place the router into private router as element in main.jsx
 */