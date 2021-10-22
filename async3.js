// synchronous

// console.log(" I ");

// console.log(" eat ");

// console.log(" ice cream ");

// console.log(" with a ");

// console.log(" spoon ");

// setTimeout(() => {
    
// }, 5000);

// callback example Preference
// function one(call_two) {
//     console.log(" step 1 complete, please call step two ");
//     call_two();
// }
// function two() {
//     console.log(" step 2 ")
// }
// one(two);

// Asynchronous
let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: [ "water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};



let order = (Fruit_Name, call_production) => {
    
    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruit_Name]} was selected`)
        call_production();
    }, 2000)
   
}

let production = () => {
    setTimeout(() => {
        console.log("Production has Started");

        setTimeout(() => {
            console.log("The Fruits has been Chopped ")

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
            }, 1000)

            setTimeout(() => {
                console.log("The machine was started");

                setTimeout(() => {
                    console.log(`ice cream was placed on ${stocks.holder[0]}`);

                    setTimeout(() => {
                        console.log(`${stocks.toppings[1]} was added`);

                        setTimeout(() => {
                            console.log("Sever Ice Cream")

                            setTimeout(() => {
                                console.log("day ended, shop is closed")
                            })
                        }, 1000)

                    }, 3000)

                }, 2000)

            }, 2000)

        }, 2000)

    }, 0000)
}

order(3 ,production);