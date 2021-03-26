import { Component, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  index = 0;

  imgs: Array<string> = Array<string>();
  thumbs: Array<string> = Array<string>();
  reals64: Array<string> = Array<string>();

  // @ViewChild("myElem") MyProp: ElementRef;



  sizes: string[] = ['32', '34', '36', '38'];

  isFav: boolean = false;
  seeMore: boolean = false;
  isDefault: boolean = true;
  sizeX: number = 0;
  isSticky: boolean = false;

  config: SwiperConfigInterface = {
    loop: true,
    pagination: {
      el: '#cpage',
      clickable: true,
      hideOnClick: false
    }

  };


  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    this.imgs.push('assets/1.jpg');
    this.imgs.push('assets/2.jpg');
    this.imgs.push('assets/item_1.jpg');
    this.imgs.push('assets/item_2.jpg');

    this.imgs.push('assets/item_3.jpeg');



    for (let img of this.imgs) {
      this.getBase64ImageFromUrl(img).then(base64 => {
        this.reals64.push(<string>base64);
        this.sizeX = window.innerWidth > 1249 ? 600 : window.innerWidth * 23 / 48;

        this.compressImage(base64, this.sizeX).then(compressed => {
          this.thumbs.push(<string>compressed);
        })


      })

    }
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.resizeImage();
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const maxY = 1200;

    if (this.isSticky && window.pageYOffset >= maxY) {
      document.querySelectorAll('.sticky-sticked').forEach(e => (e as HTMLElement).style.top = `${maxY + 80}px`);

      this.isSticky = false;
    }

    else if (window.pageYOffset >= 130 && window.pageYOffset < maxY) {
      this.isSticky = true;
      document.querySelectorAll('.sticky-sticked').forEach(e => (e as HTMLElement).style.top = '5em');
      // document.querySelectorAll('.sticky-default').forEach(e => (e as HTMLElement).style.marginTop = '-4em');
    }
    else if (window.pageYOffset < maxY) {
      this.isSticky = false;
      document.querySelectorAll('.sticky-sticked').forEach(e => (e as HTMLElement).style.top = '15em');
    }

  }

  private resizeImage() {
    if (window.innerWidth <= 1200) {
      this.sizeX = window.innerWidth * 23 / 48;
      for (let i = 0; i < this.reals64.length; i++) {
        this.compressImage(this.reals64[i], this.sizeX).then(compressed => {
          this.thumbs[i] = <string>compressed;
        })
      }

      this.isDefault = false;
    }

    else if (!this.isDefault) {
      this.sizeX = 600;
      for (let i = 0; i < this.reals64.length; i++) {
        this.compressImage(this.reals64[i], this.sizeX).then(compressed => {
          this.thumbs[i] = <string>compressed;
        })
      }

      this.isDefault = true;
    }
  }

  clickFav() {
    this.isFav = !this.isFav;
  }

  clickSeeMore() {
    this.seeMore = !this.seeMore;
  }

  async getBase64ImageFromUrl(imageUrl: any) {
    var res = await fetch(imageUrl);
    var blob = await res.blob();

    return new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        resolve(reader.result);
      }, false);

      reader.onerror = () => {
        return reject(this);
      };
      reader.readAsDataURL(blob);
    })
  }

  compressImage(src: any, newX: number) {
    return new Promise((res, rej) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        const elem = this.document.createElement('canvas');
        const ratio = img.height / img.width;
        elem.width = newX;
        elem.height = newX * ratio;
        const ctx = elem.getContext('2d');
        ctx!.drawImage(img, 0, 0, newX, newX * ratio);
        const data = ctx!.canvas.toDataURL();
        res(data);
      }
      img.onerror = error => rej(error);
    })
  }

  scroll(i: number) {
    (document.querySelector(`#image-${i}`) as HTMLElement).scrollIntoView({ block: 'end', behavior: 'smooth' });

  }
  // changeImage(i: number): void {
  //   console.
  //   try {
  //     this.myScrollContainer.nativeElement.scrollTop = (i+1) * 400;
  //   } catch (err) { }
  // }

}
