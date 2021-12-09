"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[23],{23:(t,s,e)=>{e.r(s),e.d(s,{default:()=>n});const n="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss']\n})\nexport class AppComponent {\n  public isTestOpen = false;\n\n  firstLoad = true;\n\n  background: string = '';\n\n  currentWorld = 0;\n\n  pins = [{\n    id: 1,\n    asset: 'assets/pin.svg',\n    disabledAsset: 'assets/pin_disabled.svg',\n    position: {x: 380, y: 249},\n    stickerAsset: 'assets/images/new-image-mapping/letterster/stickers/',\n  }, {\n    id: 2,\n    asset: 'assets/pin.svg',\n    disabledAsset: 'assets/pin_disabled.svg',\n    position: {x: 371, y: 457},\n    stickerAsset: 'assets/images/new-image-mapping/letterster/stickers/',\n  }, {\n    id: 3,\n    asset: 'assets/pin.svg',\n    disabledAsset: 'assets/pin_disabled.svg',\n    position: {x: 473, y: 332},\n    stickerAsset: 'assets/images/new-image-mapping/letterster/stickers/',\n  }, {\n    id: 4,\n    asset: 'assets/pin.svg',\n    disabledAsset: 'assets/pin_disabled.svg',\n    position: {x: 526, y: 475},\n    stickerAsset: 'assets/images/new-image-mapping/letterster/stickers/',\n  }, {\n    id: 5,\n    asset: 'assets/pin.svg',\n    disabledAsset: 'assets/pin_disabled.svg',\n    position: {x: 600, y: 312},\n    stickerAsset: 'assets/images/new-image-mapping/letterster/stickers/',\n  }, {\n    id: 6,\n    asset: 'assets/pin.svg',\n    disabledAsset: 'assets/pin_disabled.svg',\n    position: {x: 648, y: 198},\n    stickerAsset: 'assets/images/new-image-mapping/letterster/stickers/',\n  }, {\n    id: 7,\n    asset: 'assets/pin.svg',\n    disabledAsset: 'assets/pin_disabled.svg',\n    position: {x: 748, y: 165},\n    stickerAsset: 'assets/images/new-image-mapping/letterster/stickers/',\n  }, {\n    id: 8,\n    asset: 'assets/pin.svg',\n    disabledAsset: 'assets/pin_disabled.svg',\n    position: {x: 1070, y: 427},\n    stickerAsset: 'assets/images/new-image-mapping/letterster/stickers/',\n  },{\n    id: 9,\n    asset: 'assets/pin.svg',\n    disabledAsset: 'assets/pin_disabled.svg',\n    position: {x: 893, y: 385},\n    stickerAsset: 'assets/images/new-image-mapping/letterster/stickers/',\n  }, {\n    id: 10,\n    asset: 'assets/pin.svg',\n    disabledAsset: 'assets/pin_disabled.svg',\n    position: {x: 725, y: 352},\n    stickerAsset: 'assets/images/new-image-mapping/letterster/stickers/',\n  }, {\n    id: 11,\n    asset: 'assets/pin.svg',\n    disabledAsset: 'assets/pin_disabled.svg',\n    position: {x: 632, y: 455},\n    stickerAsset: 'assets/images/new-image-mapping/letterster/stickers/',\n  }, {\n    id: 12,\n    asset: 'assets/pin.svg',\n    disabledAsset: 'assets/pin_disabled.svg',\n    position: {x: 864, y: 460},\n    stickerAsset: 'assets/images/new-image-mapping/letterster/stickers/',\n  }, {\n    id: 13,\n    asset: 'assets/pin_rehearsal.svg',\n    disabledAsset: 'assets/pin_rehearsal_disabled.svg',\n    position: {x: 1012, y: 455},\n  }, {\n    id: 14,\n    asset: 'assets/pin_test.svg',\n    disabledAsset: 'assets/pin_test_disabled.svg',\n    position: {x: 1152, y: 455},\n  }];\n\n  get worldBackground(): string {\n    return `level_jungle-breed.svg`;\n  }\n\n  constructor() {\n  }\n\n  async ngOnInit() {\n    await this.data();\n  }\n\n  async data() {\n    const data = await import(`!raw-loader!./${this.worldBackground}`);\n    this.background = data.default;\n    // this.changeDetection.detectChanges();\n  }\n}\n"}}]);