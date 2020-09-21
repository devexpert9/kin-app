import { Component, OnInit } from '@angular/core';
 declare var firebase: any;
@Component({
  selector: 'app-videocall',
  templateUrl: './videocall.page.html',
  styleUrls: ['./videocall.page.scss'],
})
export class VideocallPage implements OnInit {
	database:any = firebase.database().ref();
	yourVideo:any = document.getElementById("yourVideo");
	friendsVideo:any = document.getElementById("friendsVideo");
	yourId:any = Math.floor(Math.random()*1000000000);

	//Create an account on Viagenie (http://numb.viagenie.ca/), and replace {'urls': 'turn:numb.viagenie.ca','credential': 'websitebeaver','username': 'websitebeaver@email.com'} with the information from your account
    servers = {'iceServers': [{'urls': 'stun:stun.services.mozilla.com'}, {'urls': 'stun:stun.l.google.com:8080'}, {'urls': 'turn:numb.viagenie.ca','credential': 'beaver','username': 'webrtc.websitebeaver@gmail.com'}]};
	pc = new RTCPeerConnection(this.servers);
  constructor() { 

  	
  	this.pc.onicecandidate = (event => event.candidate?this.sendMessage(this.yourId, JSON.stringify({'ice': event.candidate})):console.log("Sent All Ice") );
	this.pc.onaddstream = (event => this.friendsVideo.srcObject = event.stream);
  }

  ngOnInit() {
  	this.yourId = localStorage.getItem('sin_auth_token');
  	let self  = this;
  	// setTimeout(function(){
  		self.database.on('child_added', self.readMessage('',this));
  	// }, 1000);

  	
  }


  	
	
	

	sendMessage(senderId, data) {
	    var msg = this.database.push({ sender: senderId, message: data });
	    msg.remove();
	}

	readMessage(data, self) {
		// let self = self;
		self.yourId = localStorage.getItem('sin_auth_token');
	    var msg = JSON.parse(data.val().message);
	    console.log(msg);
	    console.log(self.yourId)
	    var sender = data.val().sender;
	    if (sender != self.yourId) {
	        if (msg.ice != undefined)
	            self.pc.addIceCandidate(new RTCIceCandidate(msg.ice));
	        else if (msg.sdp.type == "offer")
	            self.pc.setRemoteDescription(new RTCSessionDescription(msg.sdp))
	              .then(() =>self.pc.createAnswer())
	              .then(answer => self.pc.setLocalDescription(answer))
	              .then(() => self.sendMessage(self.yourId, JSON.stringify({'sdp':self.pc.localDescription})));
	        else if (msg.sdp.type == "answer")
	            self.pc.setRemoteDescription(new RTCSessionDescription(msg.sdp));
	    }
	};

	// database.on('child_added', readMessage);

	showMyFace() {
	  navigator.mediaDevices.getUserMedia({audio:true, video:true})
	    .then(stream => this.yourVideo.srcObject = stream)
	    .then(stream => this.pc.addStream(stream));
	}

	showFriendsFace() {
		console.log('here')
	  this.pc.createOffer()
	    .then(offer => this.pc.setLocalDescription(offer) )
	    .then(() => this.sendMessage(this.yourId, JSON.stringify({'sdp': this.pc.localDescription})) );
	}

}
