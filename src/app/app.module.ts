import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TweetsService } from './services/tweets.service';
import { HttpModule } from '@angular/http';
import { Ng4TwitterTimelineModule } from 'ng4-twitter-timeline/lib/index';
// import Twit from 'twit';
// import getBearerToken from 'get-twitter-bearer-token';
// import * as lodash from 'lodash';
// import 'twitter';
// import { TwitterService } from 'ng2-twitter'
// import { Twitter } from 'twitter/lib/twitter';

import { TweetsComponent } from './tweets/tweets.component';
import { AppComponent } from './app.component';


// console.log('0--->', lodash)
// console.log('0--->', TwitterService)
// console.log('1--->', Twitter)
// console.log('2--->', Twit)
// console.log('3--->', getBearerToken)
@NgModule({
  declarations: [
    AppComponent,
    TweetsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ng4TwitterTimelineModule
  ],
  providers: [
    TweetsService,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
