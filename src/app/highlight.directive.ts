import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    '(click)': 'applyLogic()'
  }
})
export class HighlightDirective {

  @Input() number = 0;
  @Input() divisibleBy = 2;


  applyLogic() {
    
  }


}
