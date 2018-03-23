'use strict';

var routes = require('next-routes')();

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/single').add('/campaigns/:address/requests/new', '/campaigns/requests/new').add('/campaigns/:address/requests', '/campaigns/requests/index');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUFPLEFBQVAsSUFBVyxBQUFYLGtCQUE2QixBQUE3QixrQkFDTyxBQURQLElBQ1csQUFEWCx1QkFDa0MsQUFEbEMscUJBRU8sQUFGUCxJQUVXLEFBRlgsb0NBRStDLEFBRi9DLDJCQUdPLEFBSFAsSUFHVyxBQUhYLGdDQUcyQyxBQUgzQzs7QUFLQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oaWV1bi9EZXNrdG9wL3NvbGlkaXR5LWRldi9raWNrc3RhcnQifQ==