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
