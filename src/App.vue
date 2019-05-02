<template>

<div id="app">
  
  <section class="hero is-warning is-fullheight">
    <div class="hero-head">
      <nav class="navbar">
	<div class="container">
	  <div class="navbar-brand">
	    <span class="navbar-burger burger" data-target="navbarMenuHeroA">
	      <span></span>
	      <span></span>
	      <span></span>
	    </span>
	  </div>
	</div>
      </nav>
    </div>
    
    <div class="hero-body">
      <div class="container has-text-centered">
	<!-- <a 
	  <img src="./assets/g4109.png" style="min-height:100px" /></a> -->

<i class="fab fa-wolf-pack-battalion" style="font-size: 15em"></i>

<h1 class="title is-1"> SOCIETY IN SIMULATI&#9881;N  </h1>
<h2 class="subtitle"> wanna code a population of finite state machines playing games ? <br> with stochasmagically intelligent agents ? in LISP ? </h2>
<a target="_blank" class="button is-danger" href="https://discord.gg/Jbjj6NS">
  Join #houseAYA on Discord</a>
<p>we welcome beautiful minds</p>
</div>
</div>

</section>




<div class="container">
  <h2 class="title notification is-dark"> THE COURSE</h2>
  <div class="columns is-multiline">
    <div class="column is-half">
      <h3 class="title is-4">Track 1</h3>
      <h4 class="title is-6"> History of game theory & foundational blocks </h4>
      <figure class="image" style="width:100%;height:25%;overflow:hidden">
	
	<img src="https://images.pexels.com/photos/36006/renaissance-schallaburg-figures-facade.jpg?auto=compress&cs=tinysrgb&h=650&w=940">
      </figure>
      <b> History</b>
      
      <ul>
	<li><a href="https://gametheoryclass.herokuapp.com/" target="_blank"> Waldegrave's le Her</a> <i>(second draft)</i></li>
	<li> Zermelo's paper on chess </li>
	<li> Borel and von Neumann series of papers</li>
	<li> John Nash's game theory</li>
      </ul>
      
      <b> Building blocks</b>
      
      <ul>
	<li><a href="https://gametheoryclass.herokuapp.com/preference" target="_blank"> Decision theory and preference construction</a><i>(first draft)</i></li>
	<li> Prisoner's Dilemma </li>
	<li><a href="https://gametheoryclass.herokuapp.com/"> Mountain hikers (zero sum game) </a><i> (first draft)</i></li>
	<li> Coordination game</li>
	<li> Hawk-Dove game </li>
      </ul>
      
      
    </div>
    <div class="column is-half">
      <h3 class="title is-4">Prep course </h3>
      <h4 class="title is-6"> Survival of the fittest algorithm & technicality </h4>
      <figure class="image" style="width:100%;height:25%;overflow:hidden">
	<img src="https://images.pexels.com/photos/4075/nature-walking-animal-strong.jpg?auto=compress&cs=tinysrgb&h=650&w=940">
      </figure>
      <b> Introduction </b>
      <ul>
	<li><a href="http://evolutionary-gametheory.herokuapp.com/"> A game matrix</a></li>
	<li><a href="http://evolutionary-gametheory.herokuapp.com/game">Nash equilibrium of Prisoner's Dilemma</a></li>
	<li><a href="http://evolutionary-gametheory.herokuapp.com/repeated">The repeated game</a></li>
	</ul>
      <b> Strategy representation </b>
      <ul>
	<li><a href="http://evolutionary-gametheory.herokuapp.com/representation">Finite state machine: Tit for Tat and Grim Trigger</a></li>
	<li> <a href="http://evolutionary-gametheory.herokuapp.com/representation2">FSM in the Nash Demand Game</a></li>
	<li>Probabilistic machine </li>
</ul>
<b> Evolutionary algorithm </b>		  
<ul>
  <li><a href="http://evolutionary-gametheory.herokuapp.com/cycle">Cycle</a></li>
<li> Matching phase</li>
<li>Learning phase</li>
<li>Mutation phase</li>
</ul>
<b> Simulation configuration </b>
<ul>
  <li><a href="http://evolutionary-gametheory.herokuapp.com/payoff"> Payoff calculation </a></li>
  <li> Initial configurations </li>
<li> </li>
<li> </li>
</ul>
	</div>
	<div class="column is-half">
	  <h3 class="title is-4">Track 2 </h3>
	  <h4 class="title is-6">Evolution of bargaining behavior in the repeated Nash Demand Game</h4>
	  
	  <figure class="image" style="width:100%;height:50%;overflow:hidden">
	    
      <img src="https://images.pexels.com/photos/776654/pexels-photo-776654.jpeg?auto=compress&cs=tinysrgb&h=650&w=940">
		  </figure>

		  <ul>
		    <li>The game</li>
		    <li>The one shot and the repeated setting </li>
		    <li> Payoff calculation and interpretation</li>
		    <li> Short sighted and long vision agents </li>
		    <li> Run and interpretation suggestion </li>
		    </ul>

	</div>
	<div class="column is-half">
	  <h3 class="title is-4">Track 3 </h3>
	  <h4 class="title is-6">The effect of redacted information in multiple party conflict</h4>

	  	  <figure class="image" style="width:100%;height:50%;overflow:hidden">
      <img src="https://images.pexels.com/photos/262488/pexels-photo-262488.jpeg?auto=compress&cs=tinysrgb&h=650&w=940">
    </figure>

		  		  <ul>
				    <li>The game tree</li>
				    <li> Complete and incomplete information game</li>
				    <li> The simulation and interpretation suggestion</li>
		    </ul>

	</div>
	
      </div>
      </div>

      <div class="container">

	<div class="title notification is-warning"> THE LEAGUE	<br>
	Phong Thần Bảng </div>

	<div class="columns is-multiline" v-if="cards">
	  <div class="column is-one-third" v-for="card in cards">

	  <div class="card">
	    <header class="card-header">
	      <p class="card-header-title">
		{{ card.name }}
		&nbsp;
<span v-for="index in card.star">
		  <i class="fas fa-star icon-star icon-large icon-d" style="color:yellow"></i>
		  </span>
	      </p>
	      <a href="#" class="card-header-icon" aria-label="more options">
		<span class="icon">
		  <i class="fas fa-angle-down" aria-hidden="true"></i>
		</span>
	      </a>
	    </header>
	    <div class="card-content">
	      <div class="content">

		<b>App</b>	{{card.app}} <br>
<b>Description</b> {{card.desc}}<br>
<b>Strength</b> {{card.strength}} <br>

	    </div>
	  </div>
	  <footer class="card-footer">
	    <p class="card-footer-item"> {{ card.location }} </p>
	    <a :href="card.git" target="_blank" class="card-footer-item">Git</a>
	    <a :href="card.demo" target="_blank" class="card-footer-item">Demo</a>
	  </footer>
	  </div>
</div>
	  


	
	</div>
	

	
	
	      <div class="container">
	<h2 class="title notification is-dark"> ABOUT US </h2>

    <article class="message is-light">
    <div class="message-header">
      <p> First principle </p>
      <button class="delete" aria-label="delete"></button>
    </div>
    <div class="message-body">

      
      
      I intend to create a flat hierarchy classroom that sparks and facillitates everyone's idea. It is a project that spawns projects. An incubation house. In that garden, I sow my own project: a game theory class. <br><br>

      What is The League? The League comprises of members who do projects. <br>
      Why hire The League? Trust me, it is time for heavy R&D to meet the industry. <br>

      Why join The League? Do cool projects, get cheered from community, get coached from community, get HIRED !!! It is time to raise your income level, do that by training with the best.
      

    </div>
    </article>

    
    
  <article class="message is-light">
    <div class="message-header">
      <p>The Discord server </p>
      <button class="delete" aria-label="delete"></button>
    </div>
    <div class="message-body">

      <p>We have 100 and growing. Areas: Aerospace, RL, Security, 5G, Data (DA, DS, BI), AI (ML, DL, Computer Vision), Trading/Quant, Maths, Physics, Game theory, web dev, blockchain, Linux, programming. </p>
       <br>
      <p style="color:crimson">
	Guys, the "Guys, let's freaking do a HACKATHON this week" strats <a href="https://Personal-Blog-Site-2--ayaderaghul.repl.co">here</a>. The topic is on game theory, python and text matching.. is to help prepare you so that you can come into the industry swinging.
	
      </p>
      <a target="_blank" class="button is-warning" href="https://discord.gg/Jbjj6NS">
  Join #houseAYA on Discord</a>

      <p> Past weekly events: <br>
	Week 1. Code review. <br>
	2. Project pitch. <br>
	3. Update The League / Cập nhật Phong Thần Bảng <br>
	4. The "Guys, let's freaking do a HACKATHON this week" <a href="https://personal-blog-site--ayaderaghul.repl.co/">Hackathon</a>, and <a href="https://personal-blog-site-1--ayaderaghul.repl.co/">result</a>. Everybody deployed their first app. No one broke the laws of physics. <br>
	4.1. Hackathon discussion and project brainstorming<br>
	4.2. Extra call: Simulations of drone, prothestic leg and population game. <br>

	5.1. Call on simulations of training drone in RL with simulation environment.<br>
	5.2. Showcase the flying drone which is stable now and can reach target<br>
	<iframe width="560" height="315" style="height:315px !important;" src="https://www.youtube.com/embed/9IvFGEg9ErI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	<br>
	
      <p>If you don't have something concrete yet, join and comment on others. Trust me, everyone gets something to say the second time.
</p>
      

  <i>    I warmly welcome: Racketeers, Vietnam AI in Europe, Sinh vien IT tai Duc, slack WeBuildVietnam, Pioneer pool. I actively seek non-Vietnamese members and female members
    </i>  

    </div>
  </article>


    <article class="message is-light">
    <div class="message-header">
<p> How to get more stars?</p>
      <button class="delete" aria-label="delete"></button>
    </div>
    <div class="message-body">

      Showcase your project during the weekly Discord meetup<br>
      Receive feedback<br>
      Give feedback to others <br>
      Integrate and update your project<br>
      <br>

      <i class="fas fa-star icon-star icon-large icon-d" style="color:yellow"></i> You have a git repo and a README that describes your project <br>
      <i class="fas fa-star icon-star icon-large icon-d" style="color:yellow"></i><i class="fas fa-star icon-star icon-large icon-d" style="color:yellow"></i> You have a git repo and a demo herokuapp <br>
      <i class="fas fa-star icon-star icon-large icon-d" style="color:yellow"></i><i class="fas fa-star icon-star icon-large icon-d" style="color:yellow"></i><i class="fas fa-star icon-star icon-large icon-d" style="color:yellow"></i> You have a git repo, a demo herokuapp, and 5 users <br>
      <i class="fas fa-star icon-star icon-large icon-d" style="color:yellow"></i><i class="fas fa-star icon-star icon-large icon-d" style="color:yellow"></i><i class="fas fa-star icon-star icon-large icon-d" style="color:yellow"></i><i class="fas fa-star icon-star icon-large icon-d" style="color:yellow"></i> You have a git repo with the README that can help me set up and test your code, a functional herokuapp, 10 users and you start to get money/resource <br>
      <i class="fas fa-star icon-star icon-large icon-d" style="color:yellow"></i><i class="fas fa-star icon-star icon-large icon-d" style="color:yellow"></i><i class="fas fa-star icon-star icon-large icon-d" style="color:yellow"></i><i class="fas fa-star icon-star icon-large icon-d" style="color:yellow"></i><i class="fas fa-star icon-star icon-large icon-d" style="color:yellow"></i> The above + you do something real cool
      
    </div>
  </article>

  

	      <div class="container">
	<h2 class="title notification is-dark"> PRICING </h2>

  <div class="pricing-table">
  <div class="pricing-plan">
    <div class="plan-header">White belt</div>
    <div class="plan-price"><span class="plan-price-amount"><span class="plan-price-currency">$</span>0</span>/month</div>
    <div class="plan-items">
      <div class="plan-item">Half course</div>
      <div class="plan-item">Discord community</div>
      <div class="plan-item">1 group meet / week</div>
      <div class="plan-item">-</div>
            <div class="plan-item">-</div>

    </div>
    <div class="plan-footer">
      <button class="button is-fullwidth" disabled="disabled">Current plan</button>
    </div>
  </div>

  <div class="pricing-plan is-warning">
    <div class="plan-header">Yellow belt</div>
    <div class="plan-price"><span class="plan-price-amount"><span class="plan-price-currency">$</span>10</span>/month</div>
    <div class="plan-items">
      <div class="plan-item">Full course</div>
      <div class="plan-item">Discord community</div>
      <div class="plan-item">1 group meet / week</div>
      <div class="plan-item">Join The League</div>
            <div class="plan-item">-</div>

    </div>
    <div class="plan-footer">
      <button class="button is-fullwidth">Choose</button>
    </div>
  </div>

  <div class="pricing-plan is-active">
    <div class="plan-header">Green belt</div>
    <div class="plan-price"><span class="plan-price-amount"><span class="plan-price-currency">$</span>60</span>/month</div>
    <div class="plan-items">
      <div class="plan-item">Full course</div>
      <div class="plan-item">Discord community</div>
      <div class="plan-item"> 1 group meet / week</div>
      <div class="plan-item"> Join The League</div>
      <div class="plan-item"> 1 private session / month</div>
    </div>
    <div class="plan-footer">
      <button class="button is-fullwidth">Choose</button>
    </div>
  </div>

  <div class="pricing-plan is-danger">
    <div class="plan-header">Red belt</div>
    <div class="plan-price"><span class="plan-price-amount"><span class="plan-price-currency">$</span>100</span>/month</div>
    <div class="plan-items">
      <div class="plan-item">Full course</div>
      <div class="plan-item">Discord community</div>
      <div class="plan-item">1 group meet / week</div>
            <div class="plan-item">Join The League</div>


      <div class="plan-item">1 private session / week</div>
      <div class="plan-item"></div>
    </div>
    <div class="plan-footer">
      <button class="button is-fullwidth">Choose</button>
    </div>
  </div>
</div>

	
	<a class="button is-warning" target="_blank" href="https://paypal.me/buymeahotchocolate?locale.x=en_US">&#9829; buy me a coffee &#9829;</a>
      </div>
</div>      
      <router-view/>
<!--      <a href="http://www.freepik.com"><i>(Logo designed by Freepik)</i></a><br> -->
      <i> I (and we) keep good practices to comply with privacy laws, and laws in general. </i>
      </div>

    </div>
</template>

<script>

export default {
  name: 'App',
data () {
return {
cards: [
{
name: 'skywalker',
star: 4,
app: 'RL for drone',
desc: "Because it is challenging.",
strength: 'Aerospace engineering',
location: 'France',
git: 'https://github.com/nim8u5',
demo: '#',
},

{
name: 'nextR2D2',
star: 4,
app: 'RL to train simulated prosthetic model ',
desc: "So that it can walk.",
strength: 'RL, CS',
location: 'France',
git: 'http://github.com/toanngosy',
demo: '#',
},
{
name: 'Aya of the Ocean',
star: 4,
app: 'Game theory course',
desc: 'I want to build the future of education.',
strength: 'Racket',
location: 'Italy',
git: 'https://github.com/ayaderaghul',
demo: 'https://gametheoryclass.herokuapp.com/',
hire: ''
},


{
name: 'TheElderOne',
star: 2,
app: 'All banks in one place',
desc: "I don't want to have 10 bank apps. I want to make one app that push info to your phone. In compliance with Germany's standard, all banks provide API.",
strength: 'Spring framework, Java, Python',
location: 'Germany',
git: '#',
demo: '#',
hire: '#'

},

{
name: 'BKVoDich',
star: 2,
app: 'Open source C++ ML library',
desc: 'I think that C++ has better performance than Python. And currently there are two C++ ML libs, one is very specific and hard to build, the other is too old.',
strength: 'Recommend system, NLP, parallel processing',
location: 'Undisclosed',
git: '#',
demo: '#',
hire: '#'
},
{
name: 'B8',
star: 4,
app: 'Bank, creditscore and blockchain',
desc: 'Talk to him, and he opens up :)',
strength: 'Fintech',
location: 'Canada',
git: 'https://github.com/haardikk21',
demo: '#',
hire: '#'

}
    ,
    {
name: 'StargateKeepers',
star: 4,
app: 'Teach excel online',
desc: '100K paid users, 75K youtube subscribers (see link)',
strength: 'Hacking',
location: 'Germany-Vietnam',
git: 'https://hocexcel.online/',
demo: 'https://www.youtube.com/user/ductnguy/featured',
hire: ''
},

{
name: 'LH',
star: 1,
app: 'Python online',
desc: 'Python lessons should be about running the algorithms, NOT about installing dependencies and libraries.',
strength: 'Python teacher',
location: 'Middle Earth',
git:'#',
demo: '#',
hire: '#'
}
,
{
name: 'Kotlin Ninja',
star: 1,
app: 'Help blind, deaf and disabled peole',
desc: 'Voice recognition to help the blind and image recognition for the deaf to use body language',
strength: 'Kotlin',
location: 'Malaysia',
git: 'https://github.com/ducanh1794',
demo: '#',
hire: '#'

}
,
{ 
name: 'DarkLord',
star: 2,
app: 'Hôm nay ăn gì?',
desc: 'Ngày nào cũng vắt óc nghĩ xem ăn gì rất mệt..',
strength: 'À, tớ dạo này làm fullstack (Nodejs + Vue), thảng gẩy tí Clojure cho có tí đệ quy trong não',
location: 'Việt Nam',
git: '#',
demo: '#', 
hire: '#'
},
{
name: 'DragonBall',
star: 2,
app: 'Asian chess',
desc: 'Disclose after Pioneer tournament :-p',
strength: 'Django',
location: 'Finland',
git: 'https://github.com/Ihsara/cotuong.py',
demo: '',
hire: ''

}
,
{
name: 'InHand',
star: 2,
app: 'Automatic download of papers from website',
desc: 'Eh.. prof asked',
strength: 'Selenium',
location: 'Italy',
git: '#',
demo: '#',
hire: '#'
}

,

]
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
