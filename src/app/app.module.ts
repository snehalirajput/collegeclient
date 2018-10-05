import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomMaterialModule } from './customMaterial.module';
import { HeaderComponent } from './collegeproject/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './collegeproject/testingPurpose/navigation.component';
import { HeadingPanelComponent } from './collegeproject/headingpanel/headingpanel.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    HeadingPanelComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
  
   
    FormsModule,
   
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
