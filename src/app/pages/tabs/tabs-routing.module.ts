import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
      path: 'tabs',
      component: TabsPage,
      children: [
        {
          path: 'football',
          children: [
            {
              path: '',
              loadChildren: () => import('../football/football.module').then( m => m.FootballPageModule)
            }
          ]
        },
        {
          path: 'basketball',
          children: [
            {
              path: '',
              loadChildren: () => import('../basketball/basketball.module').then( m => m.BasketballPageModule)
            }
          ]
        }
      ]
    },
    {
      path: '',
      redirectTo: '/tabs',
      pathMatch: 'full'
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
