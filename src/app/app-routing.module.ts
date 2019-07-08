import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'ruta-parametro', loadChildren: './ruta-parametro/ruta-parametro.module#RutaParametroPageModule' },
  { path: 'company', loadChildren: './company/company.module#CompanyPageModule' },
  { path: 'details', loadChildren: './details/details.module#DetailsPageModule' },
  { path: 'formulario', loadChildren: './formulario/formulario.module#FormularioPageModule' },
  { path: 'device', loadChildren: './device/device.module#DevicePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
