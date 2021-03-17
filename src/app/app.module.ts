import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';


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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
