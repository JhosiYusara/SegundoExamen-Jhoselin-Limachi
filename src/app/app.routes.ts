
import { Routes } from '@angular/router';
import { Ui } from './ui/ui';
import { Portfolio } from './portfolio/portfolio';
import { About } from './about/about';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: '/ui', pathMatch: 'full' }, // Redirección correcta
  { path: 'ui', component: Ui }
  //{ path: 'portfolio', component: Portfolio },
 // { path: 'about', component: About },
 // { path: 'contact', component: Contact }
];



