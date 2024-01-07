import sadia from "underscore";



const languages=["Java", "Javascript", "Typescript"];

const java_isExist=sadia.contains(languages,"Java");
const cpp_isExist=sadia.contains(languages,"C++");


console.log("Java exists in this Array",java_isExist);
console.log("C++ exists in this Array",cpp_isExist);

