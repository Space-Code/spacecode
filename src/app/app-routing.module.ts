import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { MarketingAgencyComponent } from './components/pages/marketing-agency/marketing-agency.component';
import { DigitalMarketingComponent } from './components/pages/digital-marketing/digital-marketing.component';
import { BusinessSolutionsComponent } from './components/pages/business-solutions/business-solutions.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ServiceDetailsComponent } from './components/pages/service-details/service-details.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { ProjectDetailsComponent } from './components/pages/project-details/project-details.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { FeaturesComponent } from './components/pages/features/features.component';
import { TeamComponent } from './components/pages/team/team.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { PartnerComponent } from './components/pages/partner/partner.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ContactComponent } from './components/pages/contact/contact.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'marketing-agency', component: MarketingAgencyComponent},
    {path: 'digital-marketing', component: DigitalMarketingComponent},
    { path: 'business-solutions', component: BusinessSolutionsComponent},
    { path: 'about', component: AboutComponent},
    { path: 'services', component: ServicesComponent},
    { path: 'service-details', component: ServiceDetailsComponent},
    { path: 'projects', component: ProjectsComponent},
    { path: 'project-details', component: ProjectDetailsComponent},
    { path: 'blog', component: BlogComponent},
    { path: 'blog-details', component: BlogDetailsComponent},
    { path: 'features', component: FeaturesComponent},
    { path: 'team', component: TeamComponent},
    { path: 'pricing', component: PricingComponent},
    { path: 'partner', component: PartnerComponent},
    { path: 'faq', component: FaqComponent},
    { path: 'contact', component: ContactComponent},
    { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
