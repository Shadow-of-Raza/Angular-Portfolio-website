import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { AboutComponent } from './component/about/about.component';
import { ServicesComponent } from './component/services/services.component';
import { SkillsComponent } from './component/skills/skills.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { ResumeComponent } from './component/resume/resume.component';
import { ContactComponent } from './component/contact/contact.component';

const routes: Routes = [
  //{path:'',component:WelcomeComponent},
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},

  {path:'about',component:AboutComponent},
  {path:'services',component:ServicesComponent},
  {path:'skills',component:SkillsComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'resume',component:ResumeComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 