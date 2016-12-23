import {
  Component,
  Input,
  OnInit
} from '@angular/core';

const basePath = 'guess-word-app/app/components/chat/word-card/';

@Component({
  selector: 'word-card',
  templateUrl: basePath + 'word-card.html',
  styleUrls: [basePath + 'word-card.css']
})
export class WordCardComponent implements OnInit {

  @Input() private image;
  @Input() private hint;
  @Input() private currentWordIndex;

  private isVolumeEnabled = true;
  private time = 0;

  ngOnInit() {
    let interval = setInterval(() => {
      if(this.time < 100) {
        this.time++;
      } else {
        this.time = 1;
      }
    }, 334);
  }

  public repeat() {
    // Some logic should be here...
  }

  public toggleVolume() {
    this.isVolumeEnabled = !this.isVolumeEnabled;
  }

}