(function (){            
            // creating module:
            const doDoApp = (
                function(){
                    // private section:
                    let todo = [];
                    function addItem(item){
                        todo.push(item);
                        convertingLowerCase();
                        showInfo();
                        console.log("Number of exist items: " , todoLength)
                    }

                    function deleteItem(item){
                        // based on condition
                        todo = todo.filter((ele) => ele != item);
                        showInfo();
                    }

                    function convertingLowerCase(item){
                        todo = todo.map((ele) => ele.toLowerCase());
                    }

                    function showInfo(item){
                        console.log(todo.join(" | "));
                    }

                    function getLength(){
                        return todo.length;
                    }

                    return {
                        // Var : method
                        addItem: addItem,
                        deleteItem: deleteItem,
                        showData : showInfo,
                        length : getLength
                    }
                }
            )();

            // registration:
            if(!window.doDoApp) window.toDoAPI = doDoApp;

        });
