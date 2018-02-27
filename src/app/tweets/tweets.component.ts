import { Component, OnInit } from '@angular/core';
// import Twit from 'twit';
// import { Twitter } from 'twitter';
import { TweetsService } from '../services/tweets.service';
import { Ng4TwitterTimelineModule } from 'ng4-twitter-timeline/lib/index';
import { NgModel } from '@angular/forms'
// import getBearerToken from 'get-twitter-bearer-token';

// const getBearerToken = require('get-twitter-bearer-token')
const twitter_consumer_key = '';
const twitter_consumer_secret = '';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  username = ''

  constructor() { }

  ngOnInit() {
  }

  submit() {
    console.log('click', this.username);
  }
  // getBearerToken(twitter_consumer_key, twitter_consumer_secret, (err, res) => {
    // if (err) {
      // console.log(err, '<---error')
    // } else {
      // console.log(res.body.access_token)
    // }
  // })

  onKey(event: any) {
    this.username = event.target.value;
  }

  initClient() {
    // var client = new Twitter({
      // consumer_key: twitter_consumer_key,
      // consumer_secret: twitter_consumer_secret,
      // access_token_key: '',
      // access_token_secret: ''
    // });

    // var client = new Twitter({
      // consumer_key: '',
      // consumer_secret: '',
      // bearer_token: ''
    // });
  }

}
