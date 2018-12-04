import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomechatComponent } from './components/homechat/homechat.component';
import { LeftHomechatComponent } from './components/left-homechat/left-homechat.component';
import { RightHomechatComponent } from './components/right-homechat/right-homechat.component';
import { CenterHomechatComponent } from './components/center-homechat/center-homechat.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomechatComponent,
    LeftHomechatComponent,
    RightHomechatComponent,
    CenterHomechatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
