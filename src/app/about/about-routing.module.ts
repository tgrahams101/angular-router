import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { CareerComponent } from '../career/career.component';
import { EarlyLifeComponent } from '../early-life/early-life.component';

const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent,
        children: [
            {
                path: 'early-life',
                component: EarlyLifeComponent
            },
            {
                path: 'career',
                component: CareerComponent
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: []
})
export class AboutRoutingModule {

}
