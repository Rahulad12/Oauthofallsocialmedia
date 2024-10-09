<h1>Node.js OAuth Authentication using Passport.js (Google & Facebook)</h1>

<p>This is a full-stack Node.js application that integrates Google and Facebook OAuth using Passport.js. It demonstrates how to authenticate users via these services and store their session information securely.</p>

<h2>Features</h2>
<ul>
  <li>Google OAuth Authentication</li>
  <li>Facebook OAuth Authentication</li>
  <li>Session management using Express sessions</li>
  <li>Protected dashboard route</li>
  <li>Logout functionality</li>
</ul>

<h2>Project Structure</h2>
<pre>
/your-project
  /config
    passport.js         # Passport configuration for Google and Facebook strategies
  /controllers
    authController.js   # Authentication logic (Google, Facebook)
  /routes
    auth.js             # Routes for authentication and dashboard
  server.js             # Main application setup
  .env                  # Environment variables for OAuth credentials
  package.json          # Project dependencies and metadata
</pre>

<h2>Prerequisites</h2>
<ul>
  <li>Node.js installed</li>
  <li>Facebook Developer App with valid credentials (<a href="https://developers.facebook.com/">Facebook Developer Console</a>)</li>
  <li>Google Developer App with valid credentials (<a href="https://console.cloud.google.com/">Google Developer Console</a>)</li>
  <li>pinterest Developer App with valid credentials (<a href="https://developers.pinterest.com/">pinterest Developer Console</a>)</li>
  <li>twitter Developer App with valid credentials (<a href="https://developer.twitter.com/en/apps">twitter Developer Console</a>)</li>
  <li>instagram Developer App with valid credentials (<a href="https://www.instagram.com/developer/">instagram Developer Console</a>)</li>
</ul>

<h2>Installation</h2>
<ol>
  <li>Clone this repository:</li>
  <pre><code>git clone https://github.com/Rahulad12/Oauthofallsocialmedia.git</code></pre>

  <li>Navigate to the project directory:</li>
  <pre><code>cd your-repository</code></pre>

  <li>Install dependencies:</li>
  <pre><code>npm install</code></pre>

  <li>Create a <code>.env</code> file in the root directory and add your Google and Facebook OAuth credentials:</li>
  <pre><code>
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
CALLBACK_URL=http://localhost:3000/auth/google/callback

FACEBOOK_CLIENT_ID=your-facebook-client-id
FACEBOOK_CLIENT_SECRET=your-facebook-client-secret
FACEBOOK_CALLBACK_URL=http://localhost:3000/auth/facebook/callback

PINTEREST_CLIENT_ID=pinterest-client-id
PINTEREST_CLIENT_SECRET=pinterest-client-secret
PINTEREST_CALLBACK_URL=http://localhost:3000/auth/pinterest/callback

TWITTER_CLIENT_ID= 'your-twitter-client-id'
TWITTER_CLIENT_SECRET = 'your-twitter-client-secret'
TWITTER_CALLBACK_URL = http://localhost:3000/auth/twitter/callback

INSTAGRAM_CLIENT_ID= 'your-instagram-client-id'
INSTAGRAM_CLIENT_SECRET= 'your-instagram-client-secret'
INSTAGRAM_CALLBACK_URL= http://localhost:3000/auth/instagram/callback

LINKEDIN_CLIENT_ID = 'your-linkedin-client-id'
LINKEDIN_CLIENT_SECRET = 'your-linkedin-client-secret'
LINKEDIN_CALLBACK_URL = http://localhost:3000/auth/linkedin/callback

</code></pre>

  <li>Start the server:</li>
  <pre><code>npm run server || npm start</code></pre>

  <li>Open your browser and visit <a href="http://localhost:3000">http://localhost:3000</a></li>
</ol>

<h2>Usage</h2>
<p>When the server is running, you can authenticate with either Google or Facebook by clicking the appropriate link on the homepage:</p>

<ul>
  <li><strong>Google Authentication:</strong> <a href="/auth/google">Authenticate with Google</a></li>
  <li><strong>Facebook Authentication:</strong> <a href="/auth/facebook">Authenticate with Facebook</a></li>
  <li><strong>Pinterest Authentication:</strong> <a href="/auth/pinterest">Authenticate with Pinterest</a></li>
  <li><strong>Twitter Authentication:</strong> <a href="/auth/twitter">Authenticate with Twitter</a></li>
  <li><strong>Instagram Authentication:</strong> <a href="/auth/instagram">Authenticate with Instagram</a></li>
  <li><strong>Instagram Authentication:</strong> <a href="/auth/youtube">Authenticate with Instagram</a></li>
  <li><strong>Linkedin Authentication:</strong> <a href="/auth/linkedin">Authenticate with Linkedin</a></li>

  
</ul>

<p>After successful authentication, users will be redirected to the <code>/dashboard</code> page, where they can see their profile name and logout if needed.</p>

<h2>Routes</h2>
<table>
  <thead>
    <tr>
      <th>Route</th>
      <th>Method</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>/</code></td>
      <td>GET</td>
      <td>Home route with links for Google and Facebook authentication</td>
    </tr>
    <tr>
      <td><code>/auth/google</code></td>
      <td>GET</td>
      <td>Redirects to Google for authentication</td>
    </tr>
    <tr>
      <td><code>/auth/google/callback</code></td>
      <td>GET</td>
      <td>Handles Google OAuth callback</td>
    </tr>
    <tr>
      <td><code>/auth/facebook</code></td>
      <td>GET</td>
      <td>Redirects to Facebook for authentication</td>
    </tr>
    <tr>
      <td><code>/auth/facebook/callback</code></td>
      <td>GET</td>
      <td>Handles Facebook OAuth callback</td>
    </tr>
    <tr>
      <td><code>/auth/pinterest</code></td>
      <td>GET</td>
      <td>Redirects to Pinterest for authentication</td>
    </tr>
    <tr>
      <td><code>/auth/pinterest/callback</code></td>
      <td>GET</td>
      <td>Handles Pinterest OAuth callback</td>
    </tr>
    <tr>
      <td><code>/auth/twitter</code></td>
      <td>GET</td>
      <td>Redirects to Twitter for authentication</td>
    </tr>
    <tr>
      <td><code>/auth/twitter/callback</code></td>
      <td>GET</td>
      <td>Handles Twitter OAuth callback</td>
    </tr>
    <tr>
      <td><code>/auth/instagram</code></td>
      <td>GET</td>
      <td>Redirects to Instagram for authentication</td>
    </tr>
    <tr>
      <td><code>/auth/instagram/callback</code></td>
      <td>GET</td>
      <td>Handles Instagram OAuth callback</td>
    </tr>
    <tr>
      <td><code>/auth/youtube</code></td>
      <td>GET</td>
      <td>Redirects to Youtube for authentication</td>
    </tr>
    <tr>
      <td><code>/auth/youtube/callback</code></td>
      <td>GET</td>
      <td>Handles Youtube OAuth callback</td>
    </tr>

    <tr>
      <td><code>/auth/linkedin</code></td>
      <td>GET</td>
      <td>Redirects to Linkedin for authentication</td>
    </tr>
    <tr>
      <td><code>/auth/linkedin/callback</code></td>
      <td>GET</td>
      <td>Handles Linkedin OAuth callback</td>
    </tr>



    <tr>
      <td><code>/dashboard</code></td>
      <td>GET</td>
      <td>Protected route, accessible only to authenticated users</td>
    </tr>

    <tr>
      <td><code>/logout</code></td>
      <td>GET</td>
      <td>Logs out the user and redirects to home</td>
    </tr>

  </tbody>
</table>

<h2>Environment Variables</h2>
<p>In the <code>.env</code> file, you will need the following environment variables:</p>
<ul>
  <li><strong>GOOGLE_CLIENT_ID</strong>: Your Google OAuth Client ID</li>
  <li><strong>GOOGLE_CLIENT_SECRET</strong>: Your Google OAuth Client Secret</li>
  <li><strong>CALLBACK_URL</strong>: Your Google OAuth Callback URL</li>
  <li><strong>FACEBOOK_CLIENT_ID</strong>: Your Facebook OAuth Client ID</li>
  <li><strong>FACEBOOK_CLIENT_SECRET</strong>: Your Facebook OAuth Client Secret</li>
  <li><strong>FACEBOOK_CALLBACK_URL</strong>: Your Facebook OAuth Callback URL</li>
  <li><strong>PINTEREST_CLIENT_ID</strong>: Your Pinterest OAuth Client ID</li>
  <li><strong>PINTEREST_CLIENT_SECRET</strong>: Your Pinterest OAuth Client Secret</li>
  <li><strong>PINTEREST_CALLBACK_URL</strong>: Your Pinterest OAuth Callback URL</li>
  <li><strong>TWITTER_CLIENT_ID</strong>: Your Twitter OAuth Client ID</li>
  <li><strong>TWITTER_CLIENT_SECRET</strong>: Your Twitter OAuth Client Secret</li>
  <li><strong>TWITTER_CALLBACK_URL</strong>: Your Twitter OAuth Callback URL</li>
  <li><strong>INSTAGRAM_CLIENT_ID</strong>: Your Instagram OAuth Client ID</li>
  <li><strong>INSTAGRAM_CLIENT_SECRET</strong>: Your Instagram OAuth Client Secret</li>
  <li><strong>INSTAGRAM_CALLBACK_URL</strong>: Your Instagram OAuth Callback URL</li>
  <li><strong>LINKEDIN_CLIENT_ID </strong>: Your Linkedin OAuth Client ID</li>
  <li><strong>LINKEDIN_CLIENT_SECRET</strong>: Your Linkedin OAuth Client Secret</li>
  <li><strong>LINKEDIN_CALLBACK_URL</strong>: Your Linkedin OAuth Callback URL</li>
</ul>

<h2>License</h2>
<p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>

<h2>Contributing</h2>
<p>Contributions are welcome! Please feel free to submit a Pull Request or open an Issue if you find any bugs or have suggestions for improvements.</p>
