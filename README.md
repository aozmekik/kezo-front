# Kezo Front

A responsive e-commerce storefront front end in Angular 11, written in 2021. It is a UI study modelled on the La Senza online store: the header, navigation, product page, log-in and sign-up pages and footer are rebuilt with hard-coded content. There is no backend.

Not affiliated with La Senza.

## Pages

Every page shares the promotion bar, menu bar and footer.

| Route | Component | Content |
| --- | --- | --- |
| `/` | `MainPageComponent` | Banner images and a sign-up offer bar |
| `/login` | `LoginComponent` | Log-in form with "Remember Me", order status form, account benefits |
| `/signup` | `SignupComponent` | Create-account form and a contact sidebar |
| `/test` | `ProductComponent` | Product detail page |

## Features

- Promotion bar: country and currency label with offer text. Below 992 px it collapses into "Shop Today's Offers", which expands with a slide animation. On wider screens, "Log In / Sign Up" opens a small dialog linking to the log-in and sign-up pages.
- Menu bar: sticks to the top after 50 px of scrolling. From 1200 px up it shows category links with drop-down panels (sub-categories in columns of six); below that, a menu button opens an Angular Material side nav with expandable categories. Categories are hard-coded in `CategoryService`.
- Product page: from 768 px up, hover zoom on each image (ngx-image-zoom) and a sticky thumbnail strip that scrolls to the chosen image; below that, a Swiper carousel with pagination. Zoom thumbnails are scaled in the browser with a canvas and recomputed on resize. A sticky info panel has a favourite toggle, colour and size selectors (both filled with the same placeholder size list), a quantity field, an "Add to bag" button and a "See more / less" details toggle.
- Product list grid (`ProductListComponent`): placeholder items in 1, 2, 3 or 4 columns depending on screen width and the selected view. It is not mounted on any route in this version.
- Shared components: checkbox, radio-style button group, favourite (heart) toggle, and SVG icons registered with `MatIconRegistry` from `src/assets/icons`.
- Footer: newsletter email field, social icons, link columns on wide screens and collapsed section buttons on small screens.
- Styling: SCSS, Bootstrap 4 grid, normalize.css, an Angular Material prebuilt theme and local font files.

All content lives in the templates and `CategoryService`. There are no API calls, no cart, no filtering, and favourites are only a per-button toggle. The log-in and sign-up forms log their values to the console.

## Building and running

```sh
npm install
npm run ng -- serve   # development server
npm run build         # ng build --prod, output in dist/kezo-front
npm start             # node server.js, serves dist/kezo-front
```

`server.js` is a small Express server. It serves the production build on `$PORT` (default 8080) and returns `index.html` for any other path, so client-side routes survive a reload.

`npm test` (Karma) and `npm run e2e` (Protractor) are the Angular CLI defaults. There are no component specs, and the e2e spec still expects the CLI's "kezo-front app is running!" page.

Main dependencies: `@angular/core` ~11.2.1, `@angular/material` and `@angular/cdk` ^11.2.3, `bootstrap` ^4.6.0, `ngx-image-zoom` ^0.6.0, `ngx-swiper-wrapper` ^10.0.0 with `swiper` ^6.5.0, `express` ^4.17.1, TypeScript ~4.1.2.

## Layout

- `src/app/app-routing.module.ts`: routes
- `src/app/components/`: pages (`main-page`, `login`, `signup`, `product`, `product-list`) and shared parts (`promotion-bar`, `menu-bar`, `footer`, `checkbox`, `radio`, `fav-button`)
- `src/app/services/`: `CategoryService` (menu data) and `IconService` (SVG icon registration)
- `src/assets/`: images, icons, fonts and logo
- `server.js`: Express server for the production build

## Notes

- Some footer link labels and product texts still follow the original store.
- The photos in `src/assets` and the Helvetica and Futura PT font files in `src/assets/font` are third-party material with no license recorded in this repository.
