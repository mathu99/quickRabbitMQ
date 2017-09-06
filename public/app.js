
angular.module('RabbitMQ', []).controller('main', function ($scope, $http) { 
    $scope.message = 'Hello Rabbit!';
    $scope.writeToQueue = function(str){
        $http.post('/api/message/'+str).then(function(success){
            $scope.message = '';
        }, 
        function(failure){
            alert('Failure, reason: '+reason);
        });
    }
});