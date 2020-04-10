<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" class="navbar-brand">Rinaldi Ranch</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/animals" class="nav-link">Animals</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/store" class="nav-link">Store</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />

    <div class="spacer"></div>
    <div class="footer">

      <a href="https://github.com/CalixBarrus/creative-project-3" target="_blank"><i class="fab fa-github-square"></i>Calix Barrus and Cassidy Waldrip</a>
    </div>


  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;

    color: white;
    text-align: center;
  }

  .fab {
    padding: 8px;
    font-size: 30px;
    text-align: center;
    text-decoration: none;
  }

  .fab:hover {
    opacity: 0.7;
  }

  .fa-github-square {
    color: black;
  }

  .spacer {
    margin-top: 46px;
  }

  h1 {
    margin-top: 20px;
  }

  /* Mobile Styles */
  @media only screen and (max-width: 400px) {
    }

    /* Tablet Styles */
    @media only screen and (min-width: 401px) and (max-width: 960px) {
    }

    /* Desktop Styles */
    @media only screen and (min-width: 961px) {
      body {
          width: 960px;
          margin: 0 auto;
      }
    }

</style>
