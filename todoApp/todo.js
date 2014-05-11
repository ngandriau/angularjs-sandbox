/**
 * Created by ngandriau on 5/11/14.
 */
function TodoCtrl($scope) {
    $scope.todos = [
        {text: 'Learn AngularJS', done: false},
        {text: 'Build an app', done: false}
    ];

    $scope.getTotalTodos = function () {
        return $scope.todos.length;
    };

    $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function (todo) {
            return !todo.done;
        });
    };

    $scope.addTodo = function () {
        if (!_.isEmpty($scope.formTodoText))
        {
            $scope.todos.push({text: $scope.formTodoText, done: false});
            $scope.formTodoText = '';
        }
    };
}