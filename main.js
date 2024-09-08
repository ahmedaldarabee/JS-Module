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
