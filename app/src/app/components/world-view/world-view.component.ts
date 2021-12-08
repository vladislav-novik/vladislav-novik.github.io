import { ChangeDetectionStrategy, ChangeDetectorRef, DoCheck, HostListener, Input, OnChanges, Renderer2 } from '@angular/core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-world-view',
  templateUrl: './world-view.component.html',
  styleUrls: ['./world-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorldViewComponent implements OnInit, DoCheck, OnChanges {
  @Input() svg!: string;

  @ViewChild('container') background!: ElementRef;

  private pinsApplied: boolean = false;
  private svgNamespace = "http://www.w3.org/2000/svg";

  pins = [{
    id: 1,
    asset: '/assets/pin.svg',
    disabledAsset: 'assets/pin_disabled.svg',
    position: {x: 380, y: 249},
    stickerAsset: 'assets/images/new-image-mapping/letterster/stickers/',
  }, {
    id: 2,
    asset: '/assets/pin.svg',
    disabledAsset: 'assets/pin_disabled.svg',
    position: {x: 371, y: 457},
    stickerAsset: 'assets/images/new-image-mapping/letterster/stickers/',
  }, {
    id: 3,
    asset: '/assets/pin.svg',
    disabledAsset: 'assets/pin_disabled.svg',
    position: {x: 473, y: 332},
    stickerAsset: 'assets/images/new-image-mapping/letterster/stickers/',
  }, {
    id: 4,
    asset: '/assets/pin.svg',
    disabledAsset: 'assets/pin_disabled.svg',
    position: {x: 526, y: 475},
    stickerAsset: 'assets/images/new-image-mapping/letterster/stickers/',
  }, {
    id: 5,
    asset: '/assets/pin.svg',
    disabledAsset: 'assets/pin_disabled.svg',
    position: {x: 600, y: 312},
    stickerAsset: 'assets/images/new-image-mapping/letterster/stickers/',
  }, {
    id: 6,
    asset: '/assets/pin.svg',
    disabledAsset: 'assets/pin_disabled.svg',
    position: {x: 648, y: 198},
    stickerAsset: 'assets/images/new-image-mapping/letterster/stickers/',
  }, {
    id: 7,
    asset: '/assets/pin.svg',
    disabledAsset: 'assets/pin_disabled.svg',
    position: {x: 748, y: 165},
    stickerAsset: 'assets/images/new-image-mapping/letterster/stickers/',
  }, {
    id: 8,
    asset: '/assets/pin.svg',
    disabledAsset: 'assets/pin_disabled.svg',
    position: {x: 1070, y: 427},
    stickerAsset: 'assets/images/new-image-mapping/letterster/stickers/',
  },{
    id: 9,
    asset: '/assets/pin.svg',
    disabledAsset: 'assets/pin_disabled.svg',
    position: {x: 893, y: 385},
    stickerAsset: 'assets/images/new-image-mapping/letterster/stickers/',
  }, {
    id: 10,
    asset: '/assets/pin.svg',
    disabledAsset: 'assets/pin_disabled.svg',
    position: {x: 725, y: 352},
    stickerAsset: 'assets/images/new-image-mapping/letterster/stickers/',
  }, {
    id: 11,
    asset: '/assets/pin.svg',
    disabledAsset: 'assets/pin_disabled.svg',
    position: {x: 632, y: 455},
    stickerAsset: 'assets/images/new-image-mapping/letterster/stickers/',
  }, {
    id: 12,
    asset: '/assets/pin.svg',
    disabledAsset: 'assets/pin_disabled.svg',
    position: {x: 864, y: 460},
    stickerAsset: 'assets/images/new-image-mapping/letterster/stickers/',
  }, {
    id: 13,
    asset: '/assets/pin_rehearsal.svg',
    disabledAsset: 'assets/pin_rehearsal_disabled.svg',
    position: {x: 1012, y: 455},
  }, {
    id: 14,
    asset: '/assets/pin_test.svg',
    disabledAsset: 'assets/pin_test_disabled.svg',
    position: {x: 1152, y: 455},
  }];

  constructor(
    private renderer: Renderer2,
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    // this.pinsApplied = false;
    // // remove previous pins or they'll redraw on top of each other
    // const collection = document.getElementsByClassName('pinAsset')
    // Array.from(collection).forEach(element => {
    //   element.parentElement?.removeChild(element);
    // });
    // this.changeDetection.detectChanges();
  }

  @HostListener('window:resize', ['$event'])
  sizeChange(event: Event) {
    if (this.background) {
      const nativeEl = (this.background.nativeElement as HTMLElement);

      if (nativeEl && nativeEl.children && nativeEl.children.length > 0) {
        const svg = nativeEl.children[0];
        this.renderer.setAttribute(svg, 'height', '100%');
        this.renderer.removeAttribute(svg, 'width');

        if (window.innerWidth < svg.clientWidth) {
          const widthDiff = svg.clientWidth - window.innerWidth;
          const diffPercentage = (widthDiff / svg.clientWidth) * 100;
          const right = diffPercentage / 2;
          // const right = (widthDiff / svg.clientWidth) * 100; 
          this.renderer.setStyle(svg, 'position', `relative`);
          this.renderer.setStyle(svg, 'right', `${right}%`);
        }
      }
    }
  }

  ngDoCheck() {
    if (this.background && !this.pinsApplied) {
      const nativeEl = (this.background.nativeElement as HTMLElement);

      if (nativeEl && nativeEl.children && nativeEl.children.length > 0) {
        const svg = nativeEl.children[0];
        this.renderer.setAttribute(svg, 'height', '100%');
        this.renderer.removeAttribute(svg, 'width');

        if (window.innerWidth < svg.clientWidth) {
          const widthDiff = svg.clientWidth - window.innerWidth;
          const diffPercentage = (widthDiff / svg.clientWidth) * 100;
          const right = diffPercentage / 2;
          // const right = (widthDiff / svg.clientWidth) * 100;
          this.renderer.setStyle(svg, 'position', `relative`);
          this.renderer.setStyle(svg, 'right', `${right}%`);
        }

        this.insertPins(svg);
      }
    }
  }

  private insertPins(parent: Element) {
    if (this.pins) {
      this.pins.forEach(p => {
        this.insertPin(p, parent);
      });
    }
  }

  // private insertPins(parent: Element) {
  //   if (this.pins) {
  //     this.pins.forEach(p => this.insertPin(p, parent, p.asset));
  //     this.pinsApplied = true;
  //   }
  // }

  private insertPin(pin: Pin, parent: Element) {
    const g = this.renderer.createElement('g', this.svgNamespace);
    const image = this.renderer.createElement('image', this.svgNamespace);
    this.renderer.setAttribute(image, 'x', pin.position.x.toString());
    this.renderer.setAttribute(image, 'y', pin.position.y.toString());
    this.renderer.setAttribute(image, 'width', '75');
    this.renderer.setAttribute(image, 'href', pin.asset);
    this.renderer.addClass(image, 'pinAsset');

    this.renderer.setStyle(image, 'cursor', 'pointer');
    this.renderer.listen(image, 'click', () => this.pinClicked(pin));

    this.renderer.appendChild(g, image);
    this.renderer.appendChild(parent, g);
  }

  private pinClicked(pin: Pin) {
    console.log('pin clicked', pin.id);
  }

  private drawPinTooltip(x: number, y: number, parent: Element) {
    const pinId = 'pin-tooltip';
    const textFontSize = '0.6vw';
    const textLineDY = '15';
    const rectBackground = '#ffffff';
    const rectBorderRadius = '5';
    const rectOpacity = '0.9';
    const textRightLeftMargin = 5;
    const textTopBottomMargin = 3;
    const spaceBetweenPinAndTooltip = 5;

    const g = this.renderer.createElement('g', this.svgNamespace);
    this.renderer.setAttribute(g, 'id', pinId);

    const text = this.renderer.createElement('text', this.svgNamespace);
    this.renderer.setAttribute(text, 'x', x.toString());
    this.renderer.setAttribute(text, 'y', y.toString());
    this.renderer.setAttribute(text, 'font-size', textFontSize);

    this.renderer.appendChild(g, text);
    this.renderer.appendChild(parent, g);

    const textBox = (text as SVGTextElement).getBBox();

    const rect = this.renderer.createElement('rect', this.svgNamespace);
    this.renderer.setAttribute(rect, 'width', (textBox.width + textRightLeftMargin * 2).toString());
    this.renderer.setAttribute(rect, 'height', (textBox.height + textTopBottomMargin * 2).toString());
    this.renderer.setAttribute(rect, 'x', (textBox.x - textBox.width / 2).toString());
    this.renderer.setAttribute(
      rect,
      'y',
      (textBox.y - textBox.height - textTopBottomMargin * 2 - spaceBetweenPinAndTooltip).toString()
    );
    this.renderer.setAttribute(rect, 'fill', rectBackground);
    this.renderer.setAttribute(rect, 'rx', rectBorderRadius);
    this.renderer.setAttribute(rect, 'fill-opacity', rectOpacity);

    // add 'margin' to text inside rect
    this.renderer.setAttribute(text, 'x', (textBox.x - (textBox.width / 2) + textRightLeftMargin).toString());

    const tspans = Array.from((text as SVGTextElement).children);
    tspans.forEach(t => this.renderer.setAttribute(t, 'x', (textBox.x - (textBox.width / 2) + textRightLeftMargin).toString()));

    // decrease text y with rect height and add space between tooltip and pin
    this.renderer.setAttribute(
      text,
      'y',
      ((text as SVGTextElement).y.baseVal[0].value - textBox.height - textTopBottomMargin - spaceBetweenPinAndTooltip).toString()
    );

    this.renderer.insertBefore(g, rect, text);
  }

  private destroyPinTooltip(): void {
    const tooltip = document.getElementById('pin-tooltip');
    tooltip?.remove();
  }

  private breakTextToLines(text: string): string[] {
    if (!!!text) {
      return [];
    }

    const words = text.split(' ');
    let currentLength = 0;
    let newStringIndex = 0;
    const result: string[] = [];

    words.forEach(w => {
      if (currentLength >= 25 && currentLength < text.length) {
        result.push(text.slice(newStringIndex, newStringIndex + currentLength - 1)); // -1 for space removing

        newStringIndex += currentLength;
        currentLength = 0;
      }

      currentLength += w.length + 1;
    });

    result.push(text.slice(newStringIndex));

    return result;
  }
}

interface Pin {
  id: number;
  asset: string;
  disabledAsset: string;
  position: { y: number, x: number };
  stickerAsset?: string;
}
