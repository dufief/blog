import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: any;

  constructor() { }

  // Gestion des boutons (incrémentation ou décrémentation de compteur loveIts du post
  setLoveIts( inc: Number ) {
    this.post.loveIts += inc;
  }

  ngOnInit() {
  }

}
