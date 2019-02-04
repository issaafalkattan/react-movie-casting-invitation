import Sound from 'react-sound';
import {
  Hero, CallToAction, ScrollDownIndicator
} from 'react-landing-page'
import { Provider, Heading, Subhead } from 'rebass'
import {message} from 'antd';
import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor';


 class App extends Component {
  state= {
    answer : ''
  }

  sendValue = () => {
  if(this.state.answer){

console.log(this.state.answer)
Meteor.call('sendEmail', this.state.answer);
return message.success("YAAAY! We have recieved your answer! nervously waiting....")

}
  else alert("You still havent answered...");
  }
render(){


  return(
<div className="main"> 
      <Sound
      url="/song.mp3"
      playStatus={Sound.status.PLAYING}
      playFromPosition={300 /* in milliseconds */}
      onFinishedPlaying={this.handleSongFinishedPlaying}
      autoload={true}
      autoplay={true}
    />
<div id="header">
				<span class="logo icon fa-film"></span>
				<h1>Hello Zeina,</h1>
				<p>This is our formal way of inviting you to be a part
				<br />
			of the best student film yet! or so we believe </p>
			</div>
      <div id="main">

<header class="major container medium">
  <h2> "Casting is 65% of directing"
  <br />
  - John Frankenheimer</h2>
  <p>You inspire us.<br />
  and we would be honored if you'd be a part of our senior film..</p>
</header>

<div class="box alt container">
  <section class="feature left">
    <a href="#" class="image icon fa-calendar"><img src="https://data.whicdn.com/images/194016012/original.gif" alt="" /></a>
    <div class="content">
      <h3>Date : 9 & 10 March</h3>
      <p>But of course, changes are possible based on your availability. We'll make this work.</p>
    </div>
  </section>
  <section class="feature right">
    <a href="#" class="image icon fa-map"><img src="https://gigglingcamels.com/wp-content/uploads/2015/12/world-map.jpg" alt="" /></a>
    <div class="content">
      <h3>Location</h3>
      <p>Wherever the story takes us.. well beirut mainly</p>
    </div>
  </section>
  <section class="feature left">
    <a href="#" class="image icon fa-book"><img src="https://c1.staticflickr.com/7/6033/6219082105_fca48df74b_b.jpg" alt="" /></a>
    <div class="content">
      <h3>Role</h3>
      <p>You'll have to wait and find out, your lines are waiting!</p>
    </div>
  </section>
  <section class="feature right">
    <a href="#" class="image icon fa-map-marker"><img src="https://png2.kisspng.com/sh/880040e0060f5c489a790e7b636b2a66/L0KzQYm3VcE2N6Z8fZH0aYP2gLBuTfRzaahuhtk2ZnnvfX73iP91d5h3eeJxeT24cbfohfQ4bWk6faZqMT66SIe5WME6PmI6Sqg8OUS1Q4m8VMg1NqFzf3==/kisspng-drawing-film-photography-5afaed7e85e4a1.7862819615263942385484.png" alt="" /></a>
    <div class="content">
      <h3> LAU Productions</h3>
      <p>A senior film written & directed by <h5>Youssef Dghaidy</h5>.</p>
    </div>
  </section>
</div>


</div> 

<footer class="major container medium">
					<h3>So, you in ?</h3>
					<p>Of course you will have to like the script before making the final decision, but for now, what do you say?</p>
					<ul class="actions special">
						<li><a href="#" class="button">Join our crew</a></li>
					</ul>
				</footer>


			<div id="footer">
				<div class="container medium">

					<header class="major last">
						<h2>Take all the time in the world...</h2>
					</header>

					<p>Your move now..</p>

					<div className='answer'>
          <section>
<div>
  <input onChange={(value) => {value.preventDefault(); this.setState({answer : value.currentTarget.value})}} type="radio" id="control_01" name="select" value="akid"/>
  <label for="control_01">
    <h2>AWW we knew you'd be up for the challenge!</h2>
    <p>wlw, akid!!</p>
  </label>
</div>
<div>
  <input onChange={(value) => {value.preventDefault(); this.setState({answer : value.currentTarget.value})}}  type="radio" id="control_02" name="select" value="yes" />
  <label for="control_02">
    <h2>We would love nothing more.</h2>
    <p>Yesss I'd love to!</p>
  </label>
</div>
<div>
  <input onChange={(value) => {value.preventDefault(); this.setState({answer : value.currentTarget.value})}}  type="radio" id="control_03" name="select" value="not_yet" />
  <label for="control_03">
    <h2>We will be waiting patiently for your answer!
</h2>
    <p>Will let you know!</p>
  </label>
</div>
<div>
  <input onChange={(value) => {value.preventDefault(); this.setState({answer : value.currentTarget.value})}}  type="radio" id="control_05" name="select" value="no" />
  <label for="control_05">
    <h2>We get it, we'll still love you regardless....</h2>
    <p>It's a tough no...</p>
  </label>
</div>
<br />
</section>
<div class="col-12">
								<ul class="actions special">
									<li><input onClick={() => this.sendValue()} type="submit" value="Decide." /></li>
								</ul>
							</div> 
          </div>
<br />
					<ul class="icons">
						<li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
						<li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
						<li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
					</ul>

					<ul class="copyright">
						<li>&copy; Designed & Built by </li><li> <a href="http://www.issaafkattan.com">Issaaf Kattan</a></li>
					</ul>

				</div>
</div>

</div>
  )
}
 }
  



export default App;
