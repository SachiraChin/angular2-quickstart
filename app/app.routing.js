"use strict";
var router_1 = require('@angular/router');
var heroes_component_1 = require('./components/heroes.component');
var dashboard_component_1 = require('./components/dashboard.component');
var hero_detail_component_1 = require('./components/hero-detail.component');
var appRoutes = [{
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    }, {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }, {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    }, {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map