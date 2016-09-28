angular.module('chatroom').controller('mainCtrl', function($scope, messageService) {
    //In your controller you'll have a getMessages function and a postMessage function,
    // but should be placed on $scope.
    $scope.getMessages = function() {
      console.log('getting data');
        messageService.getMessages().then(function(response) {
            console.log('Received data from service and setting it to the $scope');
            $scope.messages = response;
          });
    };

    $scope.postMessage = function(yourMessage) {
      console.log('sending data');
        messageService.postMessage(yourMessage);
          console.log('message sent');
    };

    //The getMessages function will call the getData method on the messageService object.
    //You'll then save the result of that request to
    //your controllers $scope as messages ($scope.messages)



    //The postMessage function will take whatever the user typed in (hint: look at the
    // html and see what ng-model correlates to on the input box),
    //pass that text to the postMessage method on the messageService object
    // which will then post it to the backend.




    //uncomment this code when your getMessages function is finished
    //This goes and gets new data every second, which mimicking a chat room experience.
    setInterval(function(){
      $scope.getMessages();
    }, 1500)
})
