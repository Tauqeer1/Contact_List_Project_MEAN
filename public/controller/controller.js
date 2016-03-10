/**
 * Created by Tauqeer Ahmed on 2/24/2016.
 */

angular.module('mainApp', ['ngMaterial'])
    .controller('AppCtrl', ['$http', function ($http) {
        var _self = this;
        //this is the route that we will create in server.js to get our data from
        $http.get('/contactlist').success(function (res) {
            _self.contactList = res;
        });

        _self.addContact = function () {

            $http.post('/contactList', _self.contact).success(function (res) {
                _self.contactList = res;
                _self.contact = "";
            });

        };
        _self.remove = function(id){
            console.log(id);
            $http.delete('/contactList/'+id).success(function(res){
                _self.contactList = res;
            });
        };
        _self.edit = function(id){
            $http.get('/contactList/'+id).success(function(res){
               _self.contact = res;
            });
        };
        _self.update = function(){
          console.log(_self.contact._id);
            $http.put('/contactList/' + _self.contact._id , _self.contact).success(function(res){
                _self.contact = res;
            })
        };
    }]);

