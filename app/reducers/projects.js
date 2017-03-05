const initialState = {
    data: [1,2, 3, 4]
};

export default function projects(state = initialState, action){

    return {
        data: [
            {
                name: "Culpa ad voluptate dolor elit.",
                description: "Voluptate nulla in dolore commodo amet do velit occaecat est veniam. Dolore ea occaecat et ut pariatur enim id. Culpa sunt laborum fugiat occaecat enim nostrud in aute amet esse veniam et. Voluptate minim irure ex adipisicing culpa nisi aute est duis deserunt eiusmod sit aute aute. Sit veniam voluptate proident anim. Veniam do id aliqua velit magna proident ad duis exercitation laborum.",
                url: "http://lorempixel.com/242/200/food/sushi"
            },
            {
                name: "Commodo excepteur.",
                description: "Tempor labore dolore id velit enim est adipisicing voluptate non commodo cillum. Excepteur pariatur pariatur ea laboris. Enim ipsum eiusmod nisi aliqua deserunt quis dolor. Ipsum enim est duis eiusmod et officia ex cupidatat ullamco id cupidatat Lorem consequat. Qui reprehenderit esse fugiat consectetur in consectetur laborum Lorem deserunt est enim.",
                url: "http://lorempixel.com/242/200/food/beef"
            },
            {
                name: "Exercitation  voluptate ad quis.",
                description: "Lorem dolor sint voluptate esse sint. Ullamco pariatur aute et incididunt sunt duis sit aute ea deserunt. Aliquip tempor excepteur in proident irure pariatur sunt culpa in quis voluptate irure. Duis incididunt dolore in cillum in fugiat anim laborum do. Officia cupidatat irure dolor velit non dolor commodo eu. Labore irure exercitation incididunt labore ut.",
                url: "http://lorempixel.com/242/200/food/vegetables"
            }
        ]
    };

}