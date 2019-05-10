<template>
  <div class="container">
    
  	<div class="title notification is-warning">
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
<b>Location</b> {{card.location}}<br>
	    </div>
	  </div>
	  </div>
</div>
	  


	
	</div>

	    <article class="message is-light">
    <div class="message-header">
<p> How to get more stars?</p>
      <button class="delete" aria-label="delete"></button>
    </div>
    <div class="message-body">

      <i class="fas fa-star icon-star icon-large icon-d" style="color:yellow"></i> You have a git repo and a README that describes your project <br>
      <i class="fas fa-star icon-star icon-large icon-d" style="color:yellow"></i><i class="fas fa-star icon-star icon-large icon-d" style="color:yellow"></i> You have a git repo and a demo herokuapp <br>
      <i class="fas fa-star icon-star icon-large icon-d" style="color:yellow"></i><i class="fas fa-star icon-star icon-large icon-d" style="color:yellow"></i><i class="fas fa-star icon-star icon-large icon-d" style="color:yellow"></i> You have a git repo, a demo herokuapp, and 5 users <br>
      <i class="fas fa-star icon-star icon-large icon-d" style="color:yellow"></i><i class="fas fa-star icon-star icon-large icon-d" style="color:yellow"></i><i class="fas fa-star icon-star icon-large icon-d" style="color:yellow"></i><i class="fas fa-star icon-star icon-large icon-d" style="color:yellow"></i> You have a git repo with the README that can help me set up and test your code, a functional herokuapp, 10 users and you start to get money/resource <br>
      <i class="fas fa-star icon-star icon-large icon-d" style="color:yellow"></i><i class="fas fa-star icon-star icon-large icon-d" style="color:yellow"></i><i class="fas fa-star icon-star icon-large icon-d" style="color:yellow"></i><i class="fas fa-star icon-star icon-large icon-d" style="color:yellow"></i><i class="fas fa-star icon-star icon-large icon-d" style="color:yellow"></i> The above + you do something real cool
      
    </div>
  </article>


	
</div>
</template>

<script>

let profiles = [
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
name: 'DragonBall',
star: 2,
app: 'Asian chess',
desc: 'Drag and drop UI for chess',
strength: 'Django',
location: 'Finland',
git: 'https://github.com/Ihsara/cotuong.py',
demo: '',
hire: ''

},

{
name: 'Great_Bear',
star: 4,
app: 'Sinh vien IT tai Duc group',
desc: 'I admin 1400 members - IT students in Germany',
strength: 'Maths',
location: 'Vietnam-Germany',


}
,
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
name: 'Asgardians',
star: 4,
app: 'Crypto Exchange',
desc: 'Backend server "https://github.com/beesEX/be" ',
strength: 'JS',
location: 'Germany',
git: 'https://github.com/ducanh1794',
demo: '#',
hire: '#'

},
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
    

]


export default {
name: 'Theleague',
data(){
return {
cards: profiles
}
}
}

  </script>
