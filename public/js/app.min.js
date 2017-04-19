(() => {
    angular.module('app', ['ngAnimate', 'ngMessages', 'ngRoute', 'ngMaterial', 'ne.swapi', 'app.starships']);
})();
(() => {
    angular.module('app.starships', ['app.starships.addDialog']);
})();
(() => {
    angular.module('app.starships.addDialog', []);
})();
(() => {
    angular.module('app').config(config);

    config.$inject = ['$locationProvider', '$routeProvider', '$mdThemingProvider', '$mdIconProvider'];
    function config($locationProvider, $routeProvider, $mdThemingProvider, $mdIconProvider) {
        $routeProvider.when('/', {
            redirectTo: '/starships'
        }).otherwise({
            redirectTo: '/404'
        });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        }).hashPrefix('');

        // material design configs
        // TODO: Add $mdThemingProvider
        // TODO: Add $mdIconProvider
    }
})();
(() => {
    let starshipsComponent = {
        controller: starshipsController,
        templateUrl: 'templates/starships.html'
    };

    angular.module('app.starships').component('starships', starshipsComponent);

    starshipsController.$inject = ['swapi', '$mdDialog', '$mdToast'];
    function starshipsController(swapi, $mdDialog, $mdToast) {
        let ctrl = this;
        ctrl.$onInit = () => {
            ctrl.openStarship = null;
            ctrl.loading = true;
            ctrl.searching = false;
            ctrl.starshipSearch = {
                $: ''
            };

            ctrl.addStarship = addStarship;
            ctrl.compileIdenticon = compileIdenticon;
            ctrl.closeDetails = closeDetails;
            ctrl.openDetails = openDetails;
            ctrl.closeSearch = closeSearch;
            ctrl.openSearch = openSearch;

            activate();
        };

        // functions
        function activate() {
            activateStarships();
        }
        function activateStarships() {
            swapi.starships.all().then(starships => {
                ctrl.starships = starships.results;
                ctrl.loading = false;
            });
        }

        function addStarship(searchCount, ev) {
            // TODO: Add mdDialog
        }

        function compileIdenticon(starship) {
            let options = {
                foreground: [255, 255, 255, 255],
                background: [0, 0, 0, 221],
                margin: 0.2,
                size: 128,
                format: 'png'
            };
            return new Identicon(hashString(starship.name), options).toString();
        }

        function hashString(str) {
            let hash = 0;
            if (str.length == 0) return hash;
            for (let i = 0; i < str.length; i++) {
                let char = str.charCodeAt(i);
                hash = (hash << 5) - hash + char;
            }
            return hash.toString();
        }

        function closeDetails() {
            ctrl.openStarship = null;
        }

        function openDetails(starship) {
            ctrl.openStarship = starship;
        }

        function closeSearch() {
            ctrl.starshipSearch.$ = '';
            ctrl.searching = false;
        }

        function openSearch() {
            ctrl.searching = true;
        }
    }
})();
(() => {
    angular.module('app.starships').config(starshipsConfig);

    starshipsConfig.$inject = ['$routeProvider'];
    function starshipsConfig($routeProvider) {
        $routeProvider.when('/starships', {
            title: 'Starships',
            template: '<starships class="frame"></starships>'
        });
    }
})();
(() => {
    angular.module('app.starships.addDialog').controller('addStarshipController', addStarshipController);

    addStarshipController.$inject = ['$mdDialog'];
    function addStarshipController($mdDialog) {
        let ctrl = this;
        ctrl.starship = {
            name: ctrl.name === null ? '' : ctrl.name,
            manufacturer: '',
            model: ''
        };

        // methods
        ctrl.cancelAdd = cancelAdd;
        ctrl.submitForm = submitForm;

        function cancelAdd() {
            // TODO: Add mdDialog.hide
        }

        function submitForm(form) {
            if (form.$valid === true) {
                // TODO: Add mdDialog.cancel
            } else {
                form.name.$setTouched();
                form.manufacturer.$setTouched();
                form.model.$setTouched();
            }
        }
    }
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcHAubW9kdWxlLmpzIiwic3RhcnNoaXBzL19zdGFyc2hpcHMubW9kdWxlLmpzIiwic3RhcnNoaXBzL2FkZC1zdGFyc2hpcC9fYWRkLXN0YXJzaGlwLm1vZHVsZS5qcyIsImFwcC5jb25maWcuanMiLCJzdGFyc2hpcHMvc3RhcnNoaXBzLmNvbXBvbmVudC5qcyIsInN0YXJzaGlwcy9zdGFyc2hpcHMuY29uZmlnLmpzIiwic3RhcnNoaXBzL2FkZC1zdGFyc2hpcC9hZGQtc3RhcnNoaXAuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUNGQTtBQUNBO0FBQ0E7QUNGQTtBQUNBO0FBQ0E7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKCgpID0+IHtcbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwJywgWyduZ0FuaW1hdGUnLCAnbmdNZXNzYWdlcycsICduZ1JvdXRlJywgJ25nTWF0ZXJpYWwnLCAnbmUuc3dhcGknLCAnYXBwLnN0YXJzaGlwcyddKTtcbn0pKCk7IiwiKCgpID0+IHtcbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwLnN0YXJzaGlwcycsIFsnYXBwLnN0YXJzaGlwcy5hZGREaWFsb2cnXSk7XG59KSgpOyIsIigoKSA9PiB7XG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcC5zdGFyc2hpcHMuYWRkRGlhbG9nJywgW10pO1xufSkoKTsiLCIoKCkgPT4ge1xuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb25maWcoY29uZmlnKTtcblxuICAgIGNvbmZpZy4kaW5qZWN0ID0gWyckbG9jYXRpb25Qcm92aWRlcicsICckcm91dGVQcm92aWRlcicsICckbWRUaGVtaW5nUHJvdmlkZXInLCAnJG1kSWNvblByb3ZpZGVyJ107XG4gICAgZnVuY3Rpb24gY29uZmlnKCRsb2NhdGlvblByb3ZpZGVyLCAkcm91dGVQcm92aWRlciwgJG1kVGhlbWluZ1Byb3ZpZGVyLCAkbWRJY29uUHJvdmlkZXIpIHtcbiAgICAgICAgJHJvdXRlUHJvdmlkZXIud2hlbignLycsIHtcbiAgICAgICAgICAgIHJlZGlyZWN0VG86ICcvc3RhcnNoaXBzJ1xuICAgICAgICB9KS5vdGhlcndpc2Uoe1xuICAgICAgICAgICAgcmVkaXJlY3RUbzogJy80MDQnXG4gICAgICAgIH0pO1xuXG4gICAgICAgICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh7XG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgcmVxdWlyZUJhc2U6IGZhbHNlXG4gICAgICAgIH0pLmhhc2hQcmVmaXgoJycpO1xuXG4gICAgICAgIC8vIG1hdGVyaWFsIGRlc2lnbiBjb25maWdzXG4gICAgICAgIC8vIFRPRE86IEFkZCAkbWRUaGVtaW5nUHJvdmlkZXJcbiAgICAgICAgLy8gVE9ETzogQWRkICRtZEljb25Qcm92aWRlclxuICAgIH1cbn0pKCk7IiwiKCgpID0+IHtcbiAgICBsZXQgc3RhcnNoaXBzQ29tcG9uZW50ID0ge1xuICAgICAgICBjb250cm9sbGVyOiBzdGFyc2hpcHNDb250cm9sbGVyLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9zdGFyc2hpcHMuaHRtbCdcbiAgICB9O1xuXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcC5zdGFyc2hpcHMnKS5jb21wb25lbnQoJ3N0YXJzaGlwcycsIHN0YXJzaGlwc0NvbXBvbmVudCk7XG5cbiAgICBzdGFyc2hpcHNDb250cm9sbGVyLiRpbmplY3QgPSBbJ3N3YXBpJywgJyRtZERpYWxvZycsICckbWRUb2FzdCddO1xuICAgIGZ1bmN0aW9uIHN0YXJzaGlwc0NvbnRyb2xsZXIoc3dhcGksICRtZERpYWxvZywgJG1kVG9hc3QpIHtcbiAgICAgICAgbGV0IGN0cmwgPSB0aGlzO1xuICAgICAgICBjdHJsLiRvbkluaXQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjdHJsLm9wZW5TdGFyc2hpcCA9IG51bGw7XG4gICAgICAgICAgICBjdHJsLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgY3RybC5zZWFyY2hpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGN0cmwuc3RhcnNoaXBTZWFyY2ggPSB7XG4gICAgICAgICAgICAgICAgJDogJydcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGN0cmwuYWRkU3RhcnNoaXAgPSBhZGRTdGFyc2hpcDtcbiAgICAgICAgICAgIGN0cmwuY29tcGlsZUlkZW50aWNvbiA9IGNvbXBpbGVJZGVudGljb247XG4gICAgICAgICAgICBjdHJsLmNsb3NlRGV0YWlscyA9IGNsb3NlRGV0YWlscztcbiAgICAgICAgICAgIGN0cmwub3BlbkRldGFpbHMgPSBvcGVuRGV0YWlscztcbiAgICAgICAgICAgIGN0cmwuY2xvc2VTZWFyY2ggPSBjbG9zZVNlYXJjaDtcbiAgICAgICAgICAgIGN0cmwub3BlblNlYXJjaCA9IG9wZW5TZWFyY2g7XG5cbiAgICAgICAgICAgIGFjdGl2YXRlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gZnVuY3Rpb25zXG4gICAgICAgIGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuICAgICAgICAgICAgYWN0aXZhdGVTdGFyc2hpcHMoKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBhY3RpdmF0ZVN0YXJzaGlwcygpIHtcbiAgICAgICAgICAgIHN3YXBpLnN0YXJzaGlwcy5hbGwoKS50aGVuKHN0YXJzaGlwcyA9PiB7XG4gICAgICAgICAgICAgICAgY3RybC5zdGFyc2hpcHMgPSBzdGFyc2hpcHMucmVzdWx0cztcbiAgICAgICAgICAgICAgICBjdHJsLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYWRkU3RhcnNoaXAoc2VhcmNoQ291bnQsIGV2KSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBBZGQgbWREaWFsb2dcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNvbXBpbGVJZGVudGljb24oc3RhcnNoaXApIHtcbiAgICAgICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGZvcmVncm91bmQ6IFsyNTUsIDI1NSwgMjU1LCAyNTVdLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFswLCAwLCAwLCAyMjFdLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMC4yLFxuICAgICAgICAgICAgICAgIHNpemU6IDEyOCxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICdwbmcnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBJZGVudGljb24oaGFzaFN0cmluZyhzdGFyc2hpcC5uYW1lKSwgb3B0aW9ucykudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGhhc2hTdHJpbmcoc3RyKSB7XG4gICAgICAgICAgICBsZXQgaGFzaCA9IDA7XG4gICAgICAgICAgICBpZiAoc3RyLmxlbmd0aCA9PSAwKSByZXR1cm4gaGFzaDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNoYXIgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgICAgICAgICBoYXNoID0gKGhhc2ggPDwgNSkgLSBoYXNoICsgY2hhcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBoYXNoLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjbG9zZURldGFpbHMoKSB7XG4gICAgICAgICAgICBjdHJsLm9wZW5TdGFyc2hpcCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvcGVuRGV0YWlscyhzdGFyc2hpcCkge1xuICAgICAgICAgICAgY3RybC5vcGVuU3RhcnNoaXAgPSBzdGFyc2hpcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlU2VhcmNoKCkge1xuICAgICAgICAgICAgY3RybC5zdGFyc2hpcFNlYXJjaC4kID0gJyc7XG4gICAgICAgICAgICBjdHJsLnNlYXJjaGluZyA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb3BlblNlYXJjaCgpIHtcbiAgICAgICAgICAgIGN0cmwuc2VhcmNoaW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn0pKCk7IiwiKCgpID0+IHtcbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwLnN0YXJzaGlwcycpLmNvbmZpZyhzdGFyc2hpcHNDb25maWcpO1xuXG4gICAgc3RhcnNoaXBzQ29uZmlnLiRpbmplY3QgPSBbJyRyb3V0ZVByb3ZpZGVyJ107XG4gICAgZnVuY3Rpb24gc3RhcnNoaXBzQ29uZmlnKCRyb3V0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRyb3V0ZVByb3ZpZGVyLndoZW4oJy9zdGFyc2hpcHMnLCB7XG4gICAgICAgICAgICB0aXRsZTogJ1N0YXJzaGlwcycsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJzxzdGFyc2hpcHMgY2xhc3M9XCJmcmFtZVwiPjwvc3RhcnNoaXBzPidcbiAgICAgICAgfSk7XG4gICAgfVxufSkoKTsiLCIoKCkgPT4ge1xuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAuc3RhcnNoaXBzLmFkZERpYWxvZycpLmNvbnRyb2xsZXIoJ2FkZFN0YXJzaGlwQ29udHJvbGxlcicsIGFkZFN0YXJzaGlwQ29udHJvbGxlcik7XG5cbiAgICBhZGRTdGFyc2hpcENvbnRyb2xsZXIuJGluamVjdCA9IFsnJG1kRGlhbG9nJ107XG4gICAgZnVuY3Rpb24gYWRkU3RhcnNoaXBDb250cm9sbGVyKCRtZERpYWxvZykge1xuICAgICAgICBsZXQgY3RybCA9IHRoaXM7XG4gICAgICAgIGN0cmwuc3RhcnNoaXAgPSB7XG4gICAgICAgICAgICBuYW1lOiBjdHJsLm5hbWUgPT09IG51bGwgPyAnJyA6IGN0cmwubmFtZSxcbiAgICAgICAgICAgIG1hbnVmYWN0dXJlcjogJycsXG4gICAgICAgICAgICBtb2RlbDogJydcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBtZXRob2RzXG4gICAgICAgIGN0cmwuY2FuY2VsQWRkID0gY2FuY2VsQWRkO1xuICAgICAgICBjdHJsLnN1Ym1pdEZvcm0gPSBzdWJtaXRGb3JtO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNhbmNlbEFkZCgpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IEFkZCBtZERpYWxvZy5oaWRlXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzdWJtaXRGb3JtKGZvcm0pIHtcbiAgICAgICAgICAgIGlmIChmb3JtLiR2YWxpZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IEFkZCBtZERpYWxvZy5jYW5jZWxcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9ybS5uYW1lLiRzZXRUb3VjaGVkKCk7XG4gICAgICAgICAgICAgICAgZm9ybS5tYW51ZmFjdHVyZXIuJHNldFRvdWNoZWQoKTtcbiAgICAgICAgICAgICAgICBmb3JtLm1vZGVsLiRzZXRUb3VjaGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KSgpOyJdfQ==
