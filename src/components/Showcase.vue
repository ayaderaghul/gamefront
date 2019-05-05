<template>
  <div class="container">

    <div class="columns is-multiline" v-if="apps">
      <div class="column is-one-third showcase" v-for="app in apps">

	<iframe :src="app.url" v-if="app.url"></iframe>
	<a target="_blank" :href="app.git" v-if="app.git">git repo</a>
	<img :src="app.imgurl" v-if="app.imgurl">
	<br>
	      {{app.desc}} 

	</div>
	</div>
</div>
</template>


<style scoped>
  .showcase {
  border: 1px dashed grey;


  
  }
  </style>

<script>
let showcase = [
    {
	url: "https://www.youtube.com/embed/9IvFGEg9ErI",
	desc: 'Drone simulation in Python, RL (DDPG)'
    },
    {
	git: "https://github.com/nim8u5/AyaHackathon/blob/master/03_05_2019/q_learning.py",

	desc: 'Q-learning for OpenAI cartpole'
    },
    {
	git: "https://github.com/nim8u5/AyaHackathon/blob/master/03_05_2019/text_matching.py" ,
	desc: 'Python text matching function that tolerates dyslexia'
    },

    {
	git: "https://repl.it/@toanngosy/Dylecxia",
	desc: 'Python text matching function that tolerates dyslexia'
	},

    {
	git: "https://github.com/M0nsoon/NewPythonProject/blob/master/WillItWork.scala",
	desc: 'Scala text matching function'
	}
    ,
    
    {
	name: 'Kalena',
	desc: 'Pythagore calculation hosted on repl.it',
	tool: 'JS, repl.it',
	comment: 'are you happy today?',
	url: "https://Pythagore--nga-le.repl.co"
  
    },
    {
	name: 'ShitHitTheFan',
	desc: 'Pythagore calculation hosted on repl.it :D',
	tool: 'JS, repl.it',
	comment: 'cool huh?',
	url: "https://calculate-diagonal.shithitthefan.repl.run/"
    },
    {
	name: 'GlitteringGazzelle',
	desc: 'Le So era',
	tool: 'Django, Heroku',
	comment: 'Have faith',
	url: "https://leso-tanvan.herokuapp.com/"
    },

    {
	imgurl: "https://cdn.discordapp.com/attachments/561592465744855042/574178939770241054/139984d5e502836958bc18eebdf9fd8a.0.jpg",
	desc: 'Lego drone',
    },
    {
	url: "https://www.youtube.com/embed/AMXWKmNIX5U",
	desc: "solve stag hunt game",
    },
    {
	imgurl: "https://cdn.discordapp.com/attachments/561592465744855042/574287817388326923/38003788_2169977639946318_574203716924604416_n.jpg",
	desc: "untitled"
	}
    
]

export default {
name: 'Showcase',
data(){
return {
apps: showcase
}
}

}
</script>
