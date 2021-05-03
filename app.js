// ______________CHAPTER NO # 17-20_____________________
        //       TASK # 1
// var arr = [[],[]];

        //       TASK # 2
// var arr1 = [ [0 , 1, 2 ,3 ], [1 , 0, 1 ,2 ] , [2 , 1, 0 ,1 ] ];
// for (var i = 0; i<=arr1.length; i++ ){
//     for (var j=0; j<arr1[i].length; j++ ){
//         document.write(arr1[i][j] + " ");
//     }
//     document.write("<br>");
// }

        //       TASK # 3
// for (var i=1; i<=10; i++){
//     document.write(i +"<br>");
// }

        //       TASK # 4
// var a = +prompt("enter number to print multiplication table");
// var b = +prompt("enter a length of table");
// for (var i =0; i<=b; i++){
//     document.write(a + " " + "x" + " " + i + " " + " " + "=" + " " + a*i + "<br>" );
// }

        //       TASK # 5
//  var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
//  document.write(fruits + "<br>");
//  for (var i=0; i<fruits.length; i++){
//      document.write("The lenght of " + " " + i + " " + " index of" +fruits[i] + "<br>");
//  }

        //       TASK # 6
// var counting = [0 ,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// a
// document.write(counting + "<br>");
// b
// counting = counting.reverse();
// document.write(counting + "<br>");
// c
// var counting = [0 ,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// for (var i=0; i<=counting.length; i+2){
//     console.log("even number" + " " + i + "<br>");   
// }

        //       TASK # 7
// var search = ["cake", "apple pie", "cookie", "chips", "patties"];
// var a = [] 
//  a = prompt("Search Item  Here");
// if (a == search[0] || a == search[1] || a == search[2] || a == search[3] || a == search[4] ){
//     document.write(a + " " + "prize is 100" +"<br>" );
// }
// else {
//     document.write("Item Are Not Found");
// }

        //       TASK # 8
//  var a = [24, 53, 78, 91, 12];
//  document.write(a + " " +"<br>" );
// var max = Math.max(a);
// document.write(max);

        //       TASK # 10
// for (var i=1; i<=20; i++){
//     document.write(i*5 + "<br>")
// }

        //       EXTRA CODE
// var city;
// city = prompt("enter city name");
// var first;
// var second = [];
// for (var i=0; i<1; i++){
//     first = city.slice(i , 1);
//    first=  first.toUpperCase();
// //    document.write(first + "<br>")
// }
// for (var j=1; j<=city.length; j++){
//     second[j] = city.slice(j);
//     second[j] = second.toLowerCase();
//     // document.write(second + "<br>")
// }
// document.write(first + second[j]);