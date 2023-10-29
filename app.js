/* // Ejercicio 1
const returnElements = (stack, number) => {
    return stack.slice(0, number);
}

const stack1 = ["Kopf", "Apfel", "Kartoffeln", "Ananas", "Wassermelone", "orange"];
const result = returnElements(stack1, 2);
console.log(result); */

/* // Ejercicio 2
const replace = (numbersStack, newE, oldE) => {
    const index = numbersStack.lastIndexOf(oldE);
    if (index !== -1){
        numbersStack[index] = newE;
        numbersStack.splice(index + 1);
    }
    return numbersStack;
}

const stack2 = [4, 9, 7, 8, 9, 23, 52, 53];
const result2 = replace(stack2, 47, 52);
console.log(result2); */

/* // Ejercio 3
const getRoutes = (origin, destination, ...towns) => {
    const forwardRoute = [origin, ...towns, destination];
    const returnRoute = [...forwardRoute].reverse();

    return {
        forwardRoute: forwardRoute.join(" → "),
        returnRoute: returnRoute.join(" → "),
    }
}

const result3 = getRoutes("Saltillo", "Piedras negras", "Castanos", "Monclova", "Acuna");
console.log("Forward Route:",result3.forwardRoute);
console.log("Return Route:",result3.returnRoute); */

// Ejercicio 4
const removeContainer = (stack, eToRemove) => {
    const index = stack.indexOf(eToRemove);
    const tempStack = stack.slice(index+1, stack.length);
    console.log(tempStack);
    stack.splice(index);
    console.log(stack.concat(tempStack));
}

const stack4 = [6, 8, 9, 3, 23, 334];
removeContainer(stack4, 9);
