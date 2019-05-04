<template>

<div id="app">
  
  <section class="hero is-bold is-dark is-fullheight-with-navbar">
    
    <div class="hero-body">
      <div class="container has-text-centered">

	<i class="fab fa-wolf-pack-battalion" style="font-size: 15em"></i><br><br>
	    <h1 class="title is-1"> LONE W&#9881;LF?  </h1>

<a target="_blank" class="button is-warning" href="https://discord.gg/Jbjj6NS">
  Join #houseAYA</a>

</div>
</div>

</section>

  <nav class="navbar is-warning"> <router-link to="/" class="button is-warning">showcase</router-link><router-link to="/theleague" class="button is-warning">the league</router-link><router-link to="/hackathon" class="button is-warning">hackathon</router-link> <router-link to="/gametheory" class="button is-warning">game theory</router-link><router-link to="/essay" class="button is-warning">essays</router-link><router-link to="/aboutus" class="button is-warning">about us</router-link> </nav>

    <article class="message is-light">
    <div class="message-body">
        <p style="color:crimson">
	HOT: Guys, the "Guys, let's freaking do a HACKATHON this week" 2 starts <a target="_blank" href="https://Personal-Blog-Site-2--ayaderaghul.repl.co">here</a>. The topic is on game theory, python and text matching.. is to help prepare you so that you can come into the industry swinging.
	
      </p>
    </div>

</article>
  
  <div class="container">
    <router-view />
  </div>
  
  
  <div class="container">
       <i> I (and we) keep good practices to comply with privacy laws, and laws in general. </i>
      </div>

    </div>
</template>

<script>


export default {
  name: 'App',
data () {
    return {

}
},


}
</script>

<style>
#app {
  font-family: 'Arvo', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}



</style>
