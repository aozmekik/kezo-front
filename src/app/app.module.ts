import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { NgxImageZoomModule } from 'ngx-image-zoom';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromotionBarComponent } from './components/promotion-bar/promotion-bar.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { DropdownMenuComponent } from './components/menu-bar/dropdown-menu/dropdown-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestComponent } from './components/test/test.component';
import { HighlightDirective } from './directives/highlight.directive';
import { LoginComponent } from './components/login/login.component';
import { SignInDialogComponent } from './components/promotion-bar/sign-in-dialog/sign-in-dialog.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProductComponent } from './components/product/product.component';
import { RadioComponent } from './components/radio/radio.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductListItemComponent } from './components/product-list/product-list-item/product-list-item.component';
import { FavButtonComponent } from './components/fav-button/fav-button.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
};

@NgModule({
  declarations: [
    AppComponent,
    PromotionBarComponent,
    MenuBarComponent,
    DropdownMenuComponent,
    FooterComponent,
    TestComponent,
    HighlightDirective,
    LoginComponent,
    SignInDialogComponent,
    CheckboxComponent,
    SignupComponent,
    ProductComponent,
    RadioComponent,
    ProductListComponent,
    ProductListItemComponent,
    FavButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SwiperModule,
    NgxImageZoomModule,
  ],
  providers: [{
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
