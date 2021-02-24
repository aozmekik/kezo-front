import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromotionBarComponent } from './components/promotion-bar/promotion-bar.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { DropdownMenuComponent } from './components/menu-bar/dropdown-menu/dropdown-menu.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PromotionBarComponent,
    MenuBarComponent,
    DropdownMenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
