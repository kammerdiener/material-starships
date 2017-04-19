(function() {
  angular.module('ne.swapi', []);
})();

(function() {
  angular.module('ne.swapi')
  .constant('endpoints', endpoints());

  function endpoints() {
    var root = 'https://swapi.co/api/',
        people = 'people/',
        films = 'films/',
        starships = 'starships/',
        vehicles = 'vehicles/',
        species = 'species/',
        planets = 'planets/'

    return {
      ROOT: root,
      PEOPLE: root + people,
      FILMS: root + films,
      STARSHIPS: root + starships,
      VEHICLES: root + vehicles,
      SPECIES: root + species,
      PLANETS: root + planets
    };
  }

})();

(function() {
  angular.module('ne.swapi')
  .factory('swapi', swapi)

  swapi.$inject = ['$http', '$q', 'endpoints'];
  function swapi($http, $q, endpoints) {
    var service = {
      get: get,
      films: generateInterface(endpoints.FILMS),
      people: generateInterface(endpoints.PEOPLE),
      planets: generateInterface(endpoints.PLANETS),
      species: generateInterface(endpoints.SPECIES),
      starships: generateInterface(endpoints.STARSHIPS),
      vehicles: generateInterface(endpoints.VEHICLES)
    };

    return service;

    function generateInterface(url) {
      return {
        all: getAll(url),
        id: getRecord(url),
        get: function() { return get(url)},
        page: getPaged(url),
        schema: getSchema(url)
      };
    }

    function get(url) {
      return $http.get(url)
      .then(function(response) {
        return response.data;
      })
      .catch(function(error) {
        $q.reject(error)
      });
    }

    function getAll(url) {
      return function() {
        var deferred = $q.defer(),
          results = [];

        fetchRecords(url);
        return deferred.promise;

        function fetchRecords(url) {
          get(url)
          .then(function(data) {
            results = results.concat(data.results);
            if (typeof data.next === 'string') {
              fetchRecords(data.next)
            } else {
              deferred.resolve({count: results.length, results: results})
            }
          })
          .catch(function(error) {
            deferred.reject(error);
          });
        }
      }
    }

    function getRecord(url) {
      return function(id) {
        return get( url + (id || '1') + '/' );
      }
    }

    function getPaged(url) {
      return function(page) {
        return get( url + '?page=' + (page || '') );
      }
    }

    function getSchema(url) {
      return function() {
        return get( url + 'schema');
      }
    }
  }

})();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5lLXN3YXBpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJ2ZW5kb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XG4gIGFuZ3VsYXIubW9kdWxlKCduZS5zd2FwaScsIFtdKTtcbn0pKCk7XG5cbihmdW5jdGlvbigpIHtcbiAgYW5ndWxhci5tb2R1bGUoJ25lLnN3YXBpJylcbiAgLmNvbnN0YW50KCdlbmRwb2ludHMnLCBlbmRwb2ludHMoKSk7XG5cbiAgZnVuY3Rpb24gZW5kcG9pbnRzKCkge1xuICAgIHZhciByb290ID0gJ2h0dHBzOi8vc3dhcGkuY28vYXBpLycsXG4gICAgICAgIHBlb3BsZSA9ICdwZW9wbGUvJyxcbiAgICAgICAgZmlsbXMgPSAnZmlsbXMvJyxcbiAgICAgICAgc3RhcnNoaXBzID0gJ3N0YXJzaGlwcy8nLFxuICAgICAgICB2ZWhpY2xlcyA9ICd2ZWhpY2xlcy8nLFxuICAgICAgICBzcGVjaWVzID0gJ3NwZWNpZXMvJyxcbiAgICAgICAgcGxhbmV0cyA9ICdwbGFuZXRzLydcblxuICAgIHJldHVybiB7XG4gICAgICBST09UOiByb290LFxuICAgICAgUEVPUExFOiByb290ICsgcGVvcGxlLFxuICAgICAgRklMTVM6IHJvb3QgKyBmaWxtcyxcbiAgICAgIFNUQVJTSElQUzogcm9vdCArIHN0YXJzaGlwcyxcbiAgICAgIFZFSElDTEVTOiByb290ICsgdmVoaWNsZXMsXG4gICAgICBTUEVDSUVTOiByb290ICsgc3BlY2llcyxcbiAgICAgIFBMQU5FVFM6IHJvb3QgKyBwbGFuZXRzXG4gICAgfTtcbiAgfVxuXG59KSgpO1xuXG4oZnVuY3Rpb24oKSB7XG4gIGFuZ3VsYXIubW9kdWxlKCduZS5zd2FwaScpXG4gIC5mYWN0b3J5KCdzd2FwaScsIHN3YXBpKVxuXG4gIHN3YXBpLiRpbmplY3QgPSBbJyRodHRwJywgJyRxJywgJ2VuZHBvaW50cyddO1xuICBmdW5jdGlvbiBzd2FwaSgkaHR0cCwgJHEsIGVuZHBvaW50cykge1xuICAgIHZhciBzZXJ2aWNlID0ge1xuICAgICAgZ2V0OiBnZXQsXG4gICAgICBmaWxtczogZ2VuZXJhdGVJbnRlcmZhY2UoZW5kcG9pbnRzLkZJTE1TKSxcbiAgICAgIHBlb3BsZTogZ2VuZXJhdGVJbnRlcmZhY2UoZW5kcG9pbnRzLlBFT1BMRSksXG4gICAgICBwbGFuZXRzOiBnZW5lcmF0ZUludGVyZmFjZShlbmRwb2ludHMuUExBTkVUUyksXG4gICAgICBzcGVjaWVzOiBnZW5lcmF0ZUludGVyZmFjZShlbmRwb2ludHMuU1BFQ0lFUyksXG4gICAgICBzdGFyc2hpcHM6IGdlbmVyYXRlSW50ZXJmYWNlKGVuZHBvaW50cy5TVEFSU0hJUFMpLFxuICAgICAgdmVoaWNsZXM6IGdlbmVyYXRlSW50ZXJmYWNlKGVuZHBvaW50cy5WRUhJQ0xFUylcbiAgICB9O1xuXG4gICAgcmV0dXJuIHNlcnZpY2U7XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUludGVyZmFjZSh1cmwpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFsbDogZ2V0QWxsKHVybCksXG4gICAgICAgIGlkOiBnZXRSZWNvcmQodXJsKSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIGdldCh1cmwpfSxcbiAgICAgICAgcGFnZTogZ2V0UGFnZWQodXJsKSxcbiAgICAgICAgc2NoZW1hOiBnZXRTY2hlbWEodXJsKVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXQodXJsKSB7XG4gICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybClcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAkcS5yZWplY3QoZXJyb3IpXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRBbGwodXJsKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCksXG4gICAgICAgICAgcmVzdWx0cyA9IFtdO1xuXG4gICAgICAgIGZldGNoUmVjb3Jkcyh1cmwpO1xuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcblxuICAgICAgICBmdW5jdGlvbiBmZXRjaFJlY29yZHModXJsKSB7XG4gICAgICAgICAgZ2V0KHVybClcbiAgICAgICAgICAudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICByZXN1bHRzID0gcmVzdWx0cy5jb25jYXQoZGF0YS5yZXN1bHRzKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YS5uZXh0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBmZXRjaFJlY29yZHMoZGF0YS5uZXh0KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh7Y291bnQ6IHJlc3VsdHMubGVuZ3RoLCByZXN1bHRzOiByZXN1bHRzfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJlY29yZCh1cmwpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihpZCkge1xuICAgICAgICByZXR1cm4gZ2V0KCB1cmwgKyAoaWQgfHwgJzEnKSArICcvJyApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFBhZ2VkKHVybCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHBhZ2UpIHtcbiAgICAgICAgcmV0dXJuIGdldCggdXJsICsgJz9wYWdlPScgKyAocGFnZSB8fCAnJykgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTY2hlbWEodXJsKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBnZXQoIHVybCArICdzY2hlbWEnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufSkoKTtcbiJdfQ==
