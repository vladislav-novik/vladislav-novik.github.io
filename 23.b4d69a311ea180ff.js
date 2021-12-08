"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[23],{23:(e,n,t)=>{t.r(n),t.d(n,{default:()=>a});const a="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss']\n})\nexport class AppComponent {\n  public isTestOpen = false;\n\n  firstLoad = true;\n\n  background: string = '';\n\n  currentWorld = 0;\n\n  get worldBackground(): string {\n    return `level_jungle-breed.svg`;\n  }\n\n  constructor() {\n  }\n\n  async ngOnInit() {\n    await this.data();\n  }\n\n  async data() {\n    const data = await import(`!raw-loader!./${this.worldBackground}`);\n    this.background = data.default;\n    // this.changeDetection.detectChanges();\n  }\n}\n"}}]);