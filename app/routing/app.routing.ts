import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from '../components/user/user.component';
import {AboutComponent} from '../components/about/about.component';

import { HomeComponent } from '../components/home/home.component';
import { SearchComponent } from '../components/search/search.component';

const appRoutes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'search',
        component: SearchComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
