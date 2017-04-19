(() => {
    angular
        .module('app.starships')
        .config(starshipsConfig);

    starshipsConfig.$inject = ['$routeProvider'];
    function starshipsConfig($routeProvider) {
        $routeProvider
            .when('/starships', {
                title: 'Starships',
                template: '<starships class="frame"></starships>'
            });
    }
})();