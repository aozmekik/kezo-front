import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromotionBarComponent } from './components/promotion-bar/promotion-bar.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { DropdownMenuComponent } from './components/menu-bar/dropdown-menu/dropdown-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestComponent } from './components/test/test.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    PromotionBarComponent,
    MenuBarComponent,
    DropdownMenuComponent,
    FooterComponent,
    TestComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
