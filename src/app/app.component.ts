import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'Mon premier post',
      content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas bibendum, neque lacinia auctor viverra, ' +
      'dolor felis varius tortor, at feugiat tortor mi a sapien. Suspendisse molestie egestas vehicula. ' +
      'Praesent ut efficitur justo.',
      loveIts : 0,
      createdAt : new Date()
    },
    {
      title: 'Mon deuxième post',
      content : 'Sed commodo porta ex, ac porttitor nulla fermentum vitae. Maecenas vehicula neque a mauris lobortis, ' +
      'nec pellentesque mi gravida',
      loveIts : -5,
      createdAt : new Date()
    },
    {
      title: 'Encore un post',
      content: 'Suspendisse nec venenatis mi. Quisque a finibus ante. Sed quis mi dui. Donec ullamcorper sit amet mi et vulputate. ' +
      'Quisque dapibus, nisi a ultricies finibus, justo sem elementum nibh, sit amet mollis quam enim nec neque',
      loveIts: 5,
      createdAt: new Date()
    }
  ];
}
