import { Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'], 
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges {
 @Input('srvElement') element: {type: string, name: string, content: string};
 @Input() name:string;
@ViewChild('heading', {static:true}) header: ElementRef;
@ContentChild('contentParagraph') paragraph:ElementRef;

  constructor() {
    console.log('constructor called');
   }

   ngOnChanges(changes: SimpleChanges){
 console.log('ngOnChanges called');
 console.log(changes);
   }
  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheckCalled');
  }
 ngAfterContentInit(){
  console.log('ngAfterContentInit Called');
 } 
 ngAfterContentChecked(){
  console.log('ngAfterContentChecked called!');
  console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
 }
 ngAfterViewInit(){
  console.log('ngAfterViewInit Called');
  console.log('Text Content: ' + this.header.nativeElement.textContent);
 } 
 ngAfterViewChecked(){
  console.log('ngAfterViewChecked called!');
 }

 ngOnDestroy(){
  console.log('this.ngOnDestroy called');
 }
}
