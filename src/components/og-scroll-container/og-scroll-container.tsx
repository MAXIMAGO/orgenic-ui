/**
 * ORGENIC-UI
 * @license MIT
 * See LICENSE file at https://github.com/orgenic/orgenic-ui/blob/master/LICENSE
 **/

import { h, Component, Host, State } from '@stencil/core';

@Component({
  tag: 'og-scroll-container',
  styleUrl: 'og-scroll-container.scss',
  shadow: true
})
export class OgScrollContainer {

  /** Enables eventListener for mouse moving */
  @State()
  public enableMoving = false;

  /** Sets the axis where we want to scroll */
  @State()
  public axis: string = 'x' || 'y';

  /** Initial mouse X position. Is set by MouseDown. */
  @State()
  public mouseXPosInitial: number;

  /** Initial mouse Y position. Is set by MouseDown. */
  @State()
  public mouseYPosInitial: number;

  /** Current mouse X position. Is set by MouseMove. */
  @State()
  public mouseXPos: number;

  /** Current mouse Y position. Is set by MouseMove. */
  @State()
  public mouseYPos: number;

  /** Inital Scrollbar Thumb X position. Is set by MouseDown */
  @State()
  public xThumbPosInitial: number;

  /** Inital Scrollbar Thumb Y position. Is set by MouseDown */
  @State()
  public yThumbPosInitial: number;

  /** Current Scrollbar Thumb X position */
  @State()
  public xThumbPos = 0;

  /** Current Scrollbar Thumb Y position */
  @State()
  public yThumbPos = 0;

  // @Element()
  // private hostElement: HTMLElement;

  public xThumb: HTMLElement;

  constructor() {
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  componentDidLoad() {
    // this.xThumb = this.hostElement.shadowRoot.querySelector('#thumb-x');
    // console.log('THUMB X', this.xThumb);
  }

  listenToMousePosition(event: Event) {
    console.log('MOUSE POSITION', event);
  }


  private handleMouseDown = (event: MouseEvent, axis: string) => {
    this.enableMoving = true;
    this.axis = axis;
    this.mouseXPosInitial = event.x;
    this.mouseYPosInitial = event.y;
    this.yThumbPosInitial = this.yThumbPos;
    this.xThumbPosInitial = this.xThumbPos;
    document.body.addEventListener('mousemove', this.handleMouseMove);
    document.body.addEventListener('mouseup', this.handleMouseUp);
    document.body.addEventListener('mouseleave', this.handleMouseUp);
  }

  private handleMouseUp = () => {
    this.enableMoving = false;
    this.axis = undefined;
    document.body.removeEventListener('mouseup', this.handleMouseUp);
    document.body.removeEventListener('mousemove', this.handleMouseMove);
    document.body.removeEventListener('mouseleave', this.handleMouseUp);
  }

  /** Calculates thumb position depending on mouse position */
  private calculateYThumbPosition = () => {
    switch (this.axis) {
      case 'x':
        this.xThumbPos = Math.max(0, this.xThumbPosInitial + this.mouseXPos - this.mouseXPosInitial);
        break;

      case 'y':
        this.yThumbPos = Math.max(0, this.yThumbPosInitial + this.mouseYPos - this.mouseYPosInitial);
        break;
    }
  }

  /** Fetches mouse coordinates and pushes them to the scrollbar thumb */
  private handleMouseMove = (event: MouseEvent) => {
    if (!this.enableMoving) {
      return;
    }
    this.mouseXPos = event.x;
    this.mouseYPos = event.y;

    this.calculateYThumbPosition();
  }

  public render(): HTMLElement {
    return (
      <Host>
        <div class="og-scroll-container__content">
          <slot></slot>
        </div>
        <div id="scrollbar-x" class="og-scroll-container__scrollbar og-scroll-container__scrollbar--y">
          <div
            id="thumb-y"
            class={{
              'og-scroll-container__thumb og-scroll-container__thumb--y ': true,
              'is-active': this.enableMoving && this.axis === 'y'
            }}
            style={{
              'top': this.yThumbPos.toString() + 'px'
            }}
            onMouseDown={(event) => this.handleMouseDown(event, 'y')}
            ></div>
        </div>
        <div id="scrollbar-x" class="og-scroll-container__scrollbar og-scroll-container__scrollbar--x">
          <div
            id="thumb-x"
            class={{
              'og-scroll-container__thumb og-scroll-container__thumb--x ': true,
              'is-active': this.enableMoving && this.axis === 'x'
            }}
            style={{
              'left': this.xThumbPos.toString() + 'px'
            }}
            onMouseDown={(event) => this.handleMouseDown(event, 'x')}
            ></div>
        </div>
      </Host>
    );
  }
}
