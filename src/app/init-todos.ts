export class Init{
    load(){
        if(localStorage.getItem('todos')===null){
            console.log('No todo found');
            var todos = [

                {
                    text: ' Test string 1'
                },
                {
                    text: 'test dtring 2'
                }
            ];

            localStorage.setItem('todos', JSON.stringify(todos));
            return 
        }
        else{
            console.log('found to do ');
        }
    }
}