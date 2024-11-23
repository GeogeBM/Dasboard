import { Routes } from '@angular/router';
import { PBodyComponent } from './components/plantilla/p-body/p-body.component';
import { PFooterComponent } from './components/plantilla/p-footer/p-footer.component';
import { PSidebarComponent } from './components/plantilla/p-sidebar/p-sidebar.component';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AlumnoListComponent } from './components/alumnos/alumno-list/alumno-list.component';
import { AlumnoRegistroComponent } from './components/alumnos/alumno-registro/alumno-registro.component';
import { AlumnoMateriasComponent } from './components/alumnos/alumno-materias/alumno-materias.component';
export const routes: Routes = [
    {path: '', redirectTo:'login', pathMatch:'full'},
    {path:'login', component:LoginComponent},
    {path:'home', component:HomeComponent,
        children:[
            {path:'alumno', component: AlumnoListComponent},
            {path:'registro', component: AlumnoRegistroComponent},
            {path:'alumno', component: AlumnoMateriasComponent},
        ]
    },
    //{path:'registro', component:RegistroComponent},
];
