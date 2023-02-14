// variable
// console.log('hii');
// let a=5;
// console.log(a);
// let na='babbar';
// console.log(na);
// let st='true';
// console.log(st);
// constant
// const a=5;
// console.log(a);
// PRIMITIVE TYPES
// STRING
// let st='babbar'
// console.log(st);
// DYNAMIC TYPING
// let lastName=5;
// console.log(lastName);
// lastName='vishal';
// console.log(lastName);
// REFERENCE TYPE
// 1.object
// let person={
//     name:'vishal',
//     age:23

// };
// // access
// console.log(person['age']);
// 2.ARRAY
// let names=[1,2,3,4];
// console.log(names[3]='ramesh');
// console.log(names);
// OPERATOR
// let x=5;
// console.log(x++);
// console.log(x);
// STRICT EQUALITY
// console.log(5===3);
// let num=1;
// let str='1';
// Loose equality-console.log(num==str);
// strict equality-console.log(num==str);
// tertiary operator
// let age=19;
// let st=(age>=18)?'i can vote':'no vote';
// console.log(st);
// OBJECTSSSSSSSSS
// let rectangle={
//     length:1,
//     breadth:2,
//     draw()
//     {
//         console.log('drawing');
//     }
// };
// Object creation
// FACTORY FUNCTION
// function createRectangle(len,bre)
// {  
//     return rectangle={
//             length:len,
//             breadth:bre,
//             draw()
//             {
//                 console.log('drawing');
//             }
//         };
// }
// let a= createRectangle(3,4);
// CONSTRUCTOR FUNCTION
// function Rectangle(len,bre)
// {
//     this.length=len,
//     this.breadth=bre,
//     this.draw=function()
//     {
//         console.log('dwawing');
//     }

// };
// let rectangleobj=new Rectangle(3,4);
// DYNAMIC NATURE OF OBJECTS
// function Rectangle(len,bre)
// {
//     this.length=len,
//     this.breadth=bre,
//     this.draw=function()
//     {
//         console.log('dwawing');
//     }

// };
// let rectangleobj=new Rectangle(3,4);
// rectangleobj.color='yellow';
// delete rectangleobj.color;
// // CONSTRUCTOR PROPERTY
// let rect=new Function('len','bre',`
// this.length=len,
//     this.breadth=bre,
//     this.draw=function()
//     {
//         console.log('dwawing');
//     }`);
//     let obj=new rect(2,3);
    


// TYPES IN JS
// let a=10;
// let b=a;
// a++;
// console.log(a);
// console.log(b);
// let a={value:10};
// b=a;
// a.value++;
// console.log(a);
// console.log(b);
// ITERATING THROUGH OBJECTS
// LOOPS
// 1....FOR-IN
// let rectangle={
//     length:2,
//     breadth:3
// };
// for(let key in rectangle)
// {
//     console.log(key,rectangle[key]);
// }

// for of
// for(let key of Object.keys(rectangle))
// {
//     console.log(key);
// }
// for(let key of Object.entries(rectangle))
// {
//     console.log(key);
// }
// HOW TO PROPERTY/EXISTS OR NOT IN OBJECT
// if('color' in rectangle)
// {
//     console.log('present');
// }
// else{
//     console.log('absent');
// }
// OBJECT CLONING
// 1...ITERATION
// let src={a:10,
// b:20,
// c:30};
// let des={};
// for(let key in src)
// {
//     des[key]=src[key];
// }
// console.log(des);
// src.a++;
// console.log(des);


// 2....ASSIGN
// let src={a:10,
//     b:20,
//     c:30};
//     let des=Object.assign({},src);
//     console.log(des);
//     src.a++;
//     console.log(des);
// 3.....SPREAD

// let src={a:10,
//     b:20,
//     c:30};
//     let des={...src};
//     console.log(des);
//     src.a++;
//     console.log(des);
// FUNCTION
// function declaration
// function run()
// {
//     console.log('running');
// }
// run();
// Named function assignment
// let stands=function walk()
// {
//     console.log('walking');
// }
// stands();
// let jump=stands;
// jump();
// Anonymous function assignment
// let stand=function()
// {
//     console.log('running');
// }
// stand();
// FUNCTION DYNAMIC
// function sum()
// {  
//     let total=0;
//     for(let value of arguments)
//     total=total+value;
//     return total;
// }
// console.log(sum(1));
// console.log(sum(1,2,3,3,4));
// REST OPERATOR(...)
// function sum(...args)
// {
//     console.log(args);
// }
// sum(1,2,3,4,5,6,7);
// function sum(num,value,...args)
// {
//     console.log(args);
// }
// sum(1,2,3,4,5,6,7);
// DEFAULT PARAMETER
// function interest(p,r,y=3)
// {
//     return ((p*r*y)/100);
// }
// console.log(interest(1000,10,5));
// Getter and setter
// let person={
//      fName:'vishal',
//      lName:'kumar',
//      get fullName()
//      {
//         return `${person.fName} ${person.lName}`;
//      },
//      set fullName(value)
//      {
//         let parts=value.split(' ');
//         this.fName=parts[0];
//         this.lName=parts[1];
//      }

// };
// console.log(person.fullName);
// person.fullName='Rahul Kumar';
// console.log(person.fullName);
// TRY AND CATCH BLOCK
// let person={
//      fName:'vishal',
//      lName:'kumar',
//      get fullName()
//      {
//         return `${person.fName} ${person.lName}`;
//      },
//      set fullName(value)
//      {
//         if(typeof value!=String)
//         {
//             throw new Error("not a string");
//         }
//         let parts=value.split(' ');
//         this.fName=parts[0];
//         this.lName=parts[1];
//      }
//     };
//     try {
//         person.fullName='1';
//     } catch (e) {
//         alert(e);
//     }
//     console.log(person.fullName);
// SCOPE
// {
//     var a=5;
// }
// console.log(a);
// function walk()
// {
//     var a=5;
// }
// console.log(a);------>error

























