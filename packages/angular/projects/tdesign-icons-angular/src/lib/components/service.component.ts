import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ViewEncapsulation,
  HostBinding,
} from '@angular/core';
import {
  NgStyleInterface,
  NgClassInterface,
  TIconStandaloneComponent,
  TIconSize,
  // @ts-ignore
} from '../tdesign-icons-angular.component';

@Component({
  selector: 't-icon-service',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../../style/index.css'],
  template: '<svg [ngClass]="_classes" [ngStyle]="_styles" fill="none" viewBox="0 0 16 16" width="1em" height="1em"><path fill="currentColor" d="M2.52 6.37a5.5 5.5 0 0110.98.13v4c0 .05 0 .1-.02.15A4.5 4.5 0 019 14.7H8v-1h1a3.5 3.5 0 003.4-2.7h-1.9a.5.5 0 01-.5-.5v-4c0-.28.22-.5.5-.5h1.93a4.5 4.5 0 00-8.86 0H5.5c.28 0 .5.22.5.5v4a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5v-4c0-.04 0-.09.02-.13zM12.5 7H11v3h1.5V7zm-9 0v3H5V7H3.5z" fill-opacity="0.9"></path></svg>',
})
export class TIconServiceComponent extends TIconStandaloneComponent {
  @Input() public styles?: NgStyleInterface;

  @Input() public classes?: NgClassInterface;

  @Input() public size: string | TIconSize = 'default';

  @HostBinding('attr.data-t-icon') public hostAttrDataTIcon = true;

  @HostBinding('class.t-icon-container') public tIconContainerClass = true;

  protected name = 'service';
}
