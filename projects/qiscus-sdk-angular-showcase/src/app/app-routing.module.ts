import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from './components/sample/sample.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'sample',
                component: SampleComponent
            },
            {
                path: '',
                component: AppComponent,
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
