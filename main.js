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

        // When you added () in the last of code , this way be as
        // enabling the function to work.

        // (function showData(){console.log("Hello Ahmed");})()

        (function(){
            let myCalculator = (function(){
                    function sum(numOne , numTwo){
                        return numOne + numTwo;
                    }

                    function sub(numOne , numTwo){
                        return numOne - numTwo;
                    }

                    function mul(numOne , numTwo){
                        return numOne * numTwo;
                    }

                    function div(numOne , numTwo){
                    return numTwo != 0 ? numOne / numTwo : -1;
                    }

                    if (!window.myCalculator){
                        window.myCalculator = {
                            sum : sum,
                            sub : sub,
                            mul : mul,
                            div : div,
                        }
                    }

                    return {
                    sum : sum,
                    sub : sub,
                    mul : mul,
                    div : div,
                }
                }
            )();
            
            let myData = (function(){
                state = {
                    fName : '',
                    lName : ''
                }

                function fullName(){
                    return state.fName == '' || state.lName == '' ? 'added name correctly!' : (state.fName + ' ' +state.lName);
                }

                function addFirstName(name){
                    state.fName = name;
                }

                function addLastName(name){
                    state.lName = name;
                }

                // as a example on the function that call another function
                function showName(){
                   return fullName();
                }

                if(!window.myData){
                    window.myData = {
                        addFirstName : addFirstName,
                        addLastName  : addLastName,
                        FullName : showName
                    }
                }

                return {
                    addFirstName : addFirstName,
                    addLastName  : addLastName,
                    FullName     : showName
                }

            })()
        
            // composing two modules
            let composing = (function(){                
                function getAllData(){
                    return myData.FullName() + ' is owner to this result:  ' + myCalculator.sum(10,20);
                }
                
                if(!window.composing){
                    window.composing = {
                        getData : getAllData
                    }
                }

                return {
                    getData : getAllData
                }
            })(myData,myCalculator);
        })();

        myData.addFirstName("Ahmed");
        myData.addLastName("Al Darabee");

        console.log(composing.getData())
