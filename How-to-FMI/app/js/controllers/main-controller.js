'use strict';
angular.module('htfmi').controller('MainCtrl', ['$scope', function ($scope) {

    $scope.notifications = [
        { ref: '#!/', image: 'new-comment.png', content: 'Десислава Цветкова, Тонка Желева, Кремена Василева и още 17 други потребители коментираха инструменти за управление на изискванията в курса АСИ.', day: ['преди', '1', 'ден']},
        { ref: '#!/', image: 'new-post.png', content: 'Атанас Георгиев добави новина в курса Проектиране на човеко-машинен интерфейс.', day: ['преди', '1', 'ден']},
        { ref: '#!/', image: 'new-comment.png', content: 'Атанас Георгиев коментира задание в курса Проектиране на човеко-машинен интерфейс.', day: ['преди', '1', 'ден']}
    ]

    $scope.news = [
        { ref: '#!/', image: 'cap.png', title: 'Семинар „Математическо моделиране”, 03.06.2017', date: 'четвъртък, 1 Юни, 2017 - 11:41', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        { ref: '#!/', image: 'hackfmi.jpg', title: 'Семинар „Математическо моделиране”, 03.06.2017', date: 'четвъртък, 1 Юни, 2017 - 11:41', content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'},
        { ref: '#!/', image: 'career.jpg', title: 'Семинар „Математическо моделиране”, 03.06.2017', date: 'четвъртък, 1 Юни, 2017 - 11:41', content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.' }
    ];

    $scope.eventSources = {
        events: [
            {
                title: 'Представяне на проект по ПЧМИ',
                start: ['юни', '08', '2017']
            },
            {
                title: 'РСА-представяне на проект',
                start: ['юни', '17', '2017']
            },
            {
                title: 'Wеb-представяне на проект',
                start: ['юни', '23', '2017']
            }
        ]
    };
}]);