import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isTestOpen = false;

  firstLoad = true;

  background: string = '';

  currentWorld = 0;

  pins = [{
    id: 1,
    asset: 'assets/pin.svg',
    disabledAsset: 'assets/pin_disabled.svg',
    position: {x: 380, y: 249},
    stickerAsset: 'assets/images/new-image-mapping/letterster/stickers/',
  }, {
    id: 2,
    asset: 'assets/pin.svg',
    disabledAsset: 'assets/pin_disabled.svg',
    position: {x: 371, y: 457},
    stickerAsset: 'assets/images/new-image-mapping/letterster/stickers/',
  }, {
    id: 3,
    asset: 'assets/pin.svg',
    disabledAsset: 'assets/pin_disabled.svg',
    position: {x: 473, y: 332},
    stickerAsset: 'assets/images/new-image-mapping/letterster/stickers/',
  }, {
    id: 4,
    asset: 'assets/pin.svg',
    disabledAsset: 'assets/pin_disabled.svg',
    position: {x: 526, y: 475},
    stickerAsset: 'assets/images/new-image-mapping/letterster/stickers/',
  }, {
    id: 5,
    asset: 'assets/pin.svg',
    disabledAsset: 'assets/pin_disabled.svg',
    position: {x: 600, y: 312},
    stickerAsset: 'assets/images/new-image-mapping/letterster/stickers/',
  }, {
    id: 6,
    asset: 'assets/pin.svg',
    disabledAsset: 'assets/pin_disabled.svg',
    position: {x: 648, y: 198},
    stickerAsset: 'assets/images/new-image-mapping/letterster/stickers/',
  }, {
    id: 7,
    asset: 'assets/pin.svg',
    disabledAsset: 'assets/pin_disabled.svg',
    position: {x: 748, y: 165},
    stickerAsset: 'assets/images/new-image-mapping/letterster/stickers/',
  }, {
    id: 8,
    asset: 'assets/pin.svg',
    disabledAsset: 'assets/pin_disabled.svg',
    position: {x: 1070, y: 427},
    stickerAsset: 'assets/images/new-image-mapping/letterster/stickers/',
  },{
    id: 9,
    asset: 'assets/pin.svg',
    disabledAsset: 'assets/pin_disabled.svg',
    position: {x: 893, y: 385},
    stickerAsset: 'assets/images/new-image-mapping/letterster/stickers/',
  }, {
    id: 10,
    asset: 'assets/pin.svg',
    disabledAsset: 'assets/pin_disabled.svg',
    position: {x: 725, y: 352},
    stickerAsset: 'assets/images/new-image-mapping/letterster/stickers/',
  }, {
    id: 11,
    asset: 'assets/pin.svg',
    disabledAsset: 'assets/pin_disabled.svg',
    position: {x: 632, y: 455},
    stickerAsset: 'assets/images/new-image-mapping/letterster/stickers/',
  }, {
    id: 12,
    asset: 'assets/pin.svg',
    disabledAsset: 'assets/pin_disabled.svg',
    position: {x: 864, y: 460},
    stickerAsset: 'assets/images/new-image-mapping/letterster/stickers/',
  }, {
    id: 13,
    asset: 'assets/pin_rehearsal.svg',
    disabledAsset: 'assets/pin_rehearsal_disabled.svg',
    position: {x: 1012, y: 455},
  }, {
    id: 14,
    asset: 'assets/pin_test.svg',
    disabledAsset: 'assets/pin_test_disabled.svg',
    position: {x: 1152, y: 455},
  }];

  get worldBackground(): string {
    return `level_jungle-breed.svg`;
  }

  constructor() {
  }

  async ngOnInit() {
    await this.data();
  }

  async data() {
    const data = await import(`!raw-loader!./${this.worldBackground}`);
    this.background = data.default;
    // this.changeDetection.detectChanges();
  }
}
