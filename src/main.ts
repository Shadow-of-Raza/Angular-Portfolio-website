import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  const cursorDot = document.querySelector("[data-cursor-dot]") as HTMLElement;
  const cursorOutline = document.querySelector("[data-cursor-outline]") as HTMLElement;
  
  window.addEventListener("mousemove", (e) => {
      const posX = e.clientX;
      const posY = e.clientY;
  
      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;
  
      //cursorOutline.style.left = `${posX}px`;
      //cursorOutline.style.top = `${posY}px`;
  
      cursorOutline.animate(
          [
              { 
                left: `${posX}px`, 
                top: `${posY}px` 
              }
          ],
          {
              duration: 500,
              fill: "forwards"
          }
      );
  });
  