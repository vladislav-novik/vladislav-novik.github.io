import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clubhouse-view',
  templateUrl: './clubhouse-view.component.html',
  styleUrls: ['./clubhouse-view.component.scss']
})
export class ClubhouseViewComponent implements AfterViewInit {
  @ViewChild('background') backgroundElement!: ElementRef;
  items = [{
    x: 1035,
    y: 254,
    height: 114,
    width: 118,
    href: 'assets/bttn_ch-dictee.svg',
    alt: 'dictee',
    tooltip: 'tooltips.dictee',
    onClick: () => console.log('dictee clicked'),
  }, {
    x: 340,
    y: 286,
    height: 232,
    width: 130,
    href: 'assets/bttn_ch-dizzy.svg',
    alt: 'Dizzy',
    tooltip: 'tooltips.game',
    onClick: () => console.log('dizzy clicked'),
  }, {
    x: 454,
    y: 78,
    height: 178,
    width: 140,
    href: 'assets/bttn_ch-profiel.svg',
    alt: 'Profiel',
    tooltip: 'tooltips.world',
    onClick: () => console.log('home clicked'),
  }, {
    x: 960,
    y: 374,
    height: 144,
    width: 168,
    href: 'assets/bttn_ch-steunkaarten.svg',
    alt: 'Steunkaarten',
    tooltip: 'tooltips.supportCards',
    onClick: () => console.log('cards clicked'),
  }];

  constructor(
    // private readonly router: Router,
    // private readonly modalService: ModalWindowService,
    private renderer: Renderer2
  ) { }

  ngAfterViewInit() {
    const elem = this.backgroundElement.nativeElement as HTMLElement;
    if (window.innerWidth < elem.clientWidth) {
      const widthDiff = window.innerWidth - elem.clientWidth;
      const margin = widthDiff / 2;
      this.renderer.setStyle(elem, 'marginLeft', `${margin}px`);
    }
  }

  private openModal() {
    // this.modalService.createModalWindow(SupportCardsModalComponent);
  }
}
