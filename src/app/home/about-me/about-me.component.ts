import { Component, OnInit, Input } from '@angular/core';
import { LanguageService } from '@app/core/language.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  constructor(private languageService: LanguageService) {}

  ngOnInit() {}
}
