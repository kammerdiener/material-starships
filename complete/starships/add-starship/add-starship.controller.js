(() => {
    angular
        .module('app.starships.addDialog')
        .controller('addStarshipController', addStarshipController);

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
            $mdDialog.cancel();
        }

        function submitForm(form) {
            if (form.$valid === true) {
                $mdDialog.hide(ctrl.starship);
            } else {
                form.name.$setTouched();
                form.manufacturer.$setTouched();
                form.model.$setTouched();
            }
        }
    }
})();