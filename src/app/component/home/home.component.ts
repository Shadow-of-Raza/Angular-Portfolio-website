import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Typed from 'typed.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Initialize Typed here
    const typed = new Typed(".typing", {
      strings: ["Software Engineer", "Web Developer", "Web Designer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  }
}
 //import { Howl } from 'howler';
 //implements OnInit {

 // constructor(private router: Router) { }

 // ngOnInit(): void {
 //   const sound = new Howl({
 //     src: ['assets/mac_lion_on.mp3'],
 //   });
 //   sound.play(); 
 // }
 //}
