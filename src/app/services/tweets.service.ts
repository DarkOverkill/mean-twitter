import { Injectable } from '@angular/core';
import { TwitterService } from 'ng2-twitter';
import { Http } from '@angular/http';
// import { Twitter } from 'twitter';
// import Twit from 'twit';
// import getBearerToken from 'get-twitter-bearer-token';

const twitter_consumer_key = 'ICIdkAdxuVfBHGSdHM67Cs0ps';
const twitter_consumer_secret = 'LXgPHb3OZGDyARpsA6a8iW3fN6hv56W24sIuLPYa1guQ88LAAk';
const twitter_access_token_key = '967710942543994882-zWZmOeYr5EQcayFcDL4nHa7hkihc1nc';
const twitter_access_token_secret = 'rMChnYXCVehUfzn5IIBAkSE7TM28a3UEsyHSf0ax2NbLa';

@Injectable()
export class TweetsService {

  constructor(private twitter: TwitterService, public http: Http) { }

  foobar() {
    this.twitter.get(
      'https://api.twitter.com/1.1/statuses/home_timeline.json',
      {
        count: 5
      },
      {
        consumerKey: twitter_consumer_key,
        consumerSecret: twitter_consumer_secret
      },
      {
        token: twitter_access_token_key,
        tokenSecret: twitter_access_token_secret
      }
  ).subscribe((res)=>{
      const result = res.json().map(tweet => tweet.text);
      console.log(result);
  });

  }

  initClient() {
    // console.log('>>>>>>', Observable, '<<<')
    // console.log('>>>>>>', Twit, '<<<')
    // console.log('>>>>>>', getBearerToken, '<<<')
    // console.log('>>>>>>', Twitter, '<<<')
    // var client = new Twitter({
      // consumer_key: twitter_consumer_key,
      // consumer_secret: twitter_consumer_secret,
      // access_token_key: 'twitter_access_token_key',
      // access_token_secret: 'twitter_access_token_secret'
    // });
  }
}
