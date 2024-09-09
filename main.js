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


(function(){
                let userData = (function() {
                        const user = {
                            name  : '',
                            age   : 0,
                            major : '',
                            careerPath : '',
                        }

                        function setName(name){
                            user.name = name;
                        }

                        function setAge(age){
                            user.age = age;
                        }

                        // conditional if
                        function showName(){
                            return user.name != '' ? user.name : 'add your name correctly!';
                        }

                        function showAge(){
                            return user.age != 0 ? user.age : 'add your age correctly!';
                        }

                        if(!window.userData){
                            window.userData = {
                                showName : showName,
                                showAge  : showAge,
                                setName  : setName,
                                setAge   : setAge
                            }
                        }

                        return {
                            showName : showName,
                            showAge  : showAge,
                            setName  : setName,
                            setAge   : setAge
                        }
                    }
                )()
            }
        )()
        
        userData.setName('ahmed nayel al darabee');
        userData.setAge(21);

        console.log("Full name be as: " , userData.showName())
        console.log("Your age be as: " , userData.showAge())
        









