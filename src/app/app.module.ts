import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { AppComponent} from './app.component';
import { ThousandSeparatorPipe } from './thousandseparator.pipe.spec';

@NgModule({
  declarations: [
    AppComponent,
    ThousandSeparatorPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DecimalPipe
  ],
  providers: [ThousandSeparatorPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
