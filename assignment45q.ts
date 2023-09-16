//QUESTION 2
// Personal Message: Store a person’s name in a variable, and print a message to 
// that person. Your message should be simple, such as, “Hello Eric, would you like 
// to learn some Python today?”

var x2:string="Eric";
console.log("Hello "+ x2 +" would you like to learn type script today");

// QUESTION 3
// Name Cases: Store a person’s name in a variable, and then print that person’s 
// name in lowercase, uppercase, and titlecase.
var name3:string="Muhammad Adil";
console.log(name3.toLowerCase());
console.log(name3.toUpperCase());

// Question 4
// Famous Quote: Find a quote from a famous person you admire. Print the 
// quote and the name of its author. Your output should look something 
// like the following, including the quotation marks:
const quote:string="Winner Never Quit, Quitter Never Win";
const quote1:string="Vince Lombardi";
console.log(quote+":",quote1);
//Question 5
const quote2:string=quote1;
console.log(quote+":",quote2);

// Question 6
// Stripping Names: Store a person’s name, and include 
// some whitespace characters at the beginning and end of the name. 
// Make sure you use each character combination, "\t" and "\n", at least once. 
// Print the name once, so the whitespace around the name is displayed. 
// Then print the name after striping the white spaces.
var stripName:string="Muha \t mmad \n Adil";
console.log(stripName);

//Question 7 & 8
// Number Eight: Write addition, subtraction, multiplication, and division operations
// that each result in the number 8. Be sure to enclose your operations in print 
// statements to see the results.
var a:number=1;
var b:number=2;
var c:number=3;
var d:number=4;
var e:number=12;
var f:number=16;
console.log(d+d);
console.log(e-d);
console.log(b*d);
console.log(f/b);

// Question 9
// Favorite Number: Store your favorite number in a variable. Then, using that 
// variable, create a message that reveals your favorite number. Print that message.

let favNum:number=7;
favNum=7;
console.log(favNum);

// QUESTION 10
// Adding Comments: Choose two of the programs you’ve written, and add at least one 
// comment to each. If you don’t have anything specific to write because your 
// programs are too simple at this point, just add your name and the current date 
// at the top of each program file. Then write one sentence describing what the 
// program does.

// /*HELLO MY NAME IS MUHAMMAD ADIL, I AM STUDENT OF PIAIC AND LEARNING TYPE SCRIPT*/
// //MY AIM IS TO BECOME IT EXPERT.

// QUESTION 11
// Names: Store the names of a few of your friends in a array called names. 
// Print each person’s name by accessing each element in the list, one at a time.
var FriendsNames11:string[]=["Ali","Ahmad","Aslam"];
for (var i:number=0;i<FriendsNames11.length;i++){
console.log(FriendsNames11[i]);
}
// QUESTION 12
// Greetings: Start with the array you used in Exercise 11, but instead of just
// printing each person’s name, print a message to them. The text of each message 
// should be the same, but each message should be personalized with the person’s 
//name.
var FriendsNames12:string[]=["Ali","Ahmad","Aslam"];
for (var i:number=0;i<FriendsNames12.length;i++){
console.log("Hello Dear Mr. ",FriendsNames12[0]);
console.log("Hello Dear ",FriendsNames12[1]);
console.log("Hello",FriendsNames12[2]);
}
// Question 13
// Your Own Array: Think of your favorite mode of transportation, such as a 
// motorcycle or a car, and make a list that stores several examples. 
// Use your list to print a series of statements about these items, such as 
// “I would like to own a Honda motorcycle.”
var MyCar:string[]=["White Color","Good Fuel Average","AC","excellent Suspension"];
for(let i:number=0;i<1;i++){
    console.log("I like",MyCar[0],"car with",MyCar[1],"an", MyCar[2], "and", MyCar[3]);
}
// Question 14
// Guest List: If you could invite anyone, living or deceased, to dinner, 
// who would you invite? Make a list that includes at least three people you’d like 
// to invite to dinner. Then use your list to print a message to each person, 
// inviting them to dinner.

let DinnerInv14:string[]=["Manto", "Newton", "Putin"];
for(let i:number=0;i<DinnerInv14.length;i++){
    console.log("Dear Mr.",DinnerInv14[i],"You re invited to join us on a dinner",);
}

// Question 15
// Changing Guest List: You just heard that one of your guests can’t make the 
// dinner, so you need to send out a new set of invitations. You’ll have to think 
// of someone else to invite.

// Start with your program from Exercise 14. Add a print statement 
// at the end of your program stating the name of the guest who can’t make it.
let DinnerInvDel:string[]=["Manto", "Newton", "Putin"];
for(let i:number=0;i<1;i++){
console.log("Announcement: Mr.",DinnerInvDel[2],"Will not be the part of dinner");
}

// Modify your list, replacing the name of the guest who can’t m
// ake it with the name of the new person you are inviting.
let DinnerInvAdd:string[]=["Manto", "Newton", "Putin"];{
    DinnerInvAdd.splice(2,1,"King Salman");
    console.log(DinnerInvAdd);
}
//Print a second set of invitation messages, one for each person who is 
//still in your list.
for(let i:number=0;i<DinnerInvAdd.length;i++){
    console.log("Announcement with Revision: Mr.",DinnerInvAdd[i],"You re invited to join us on a dinner",);
}
// QUESTION 16
// More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.Start with your program from 
// Exercise 15. Add a print statement to the end of your program informing people 
// that you found a bigger dinner table.
let DinnerInvMore:string[]=["Manto", "Newton", "Putin"];{
    DinnerInvMore.splice(2,1,"King Salman");
    console.log(DinnerInvMore);
}

for(let i:number=0;i<DinnerInvMore.length;i++){
console.log("Announcement with Revision: Mr.",DinnerInvMore[i],"You re invited to join us on a dinner",);
}
console.log("wE HAVE A BIG TABLE ARRIVING SOON, AND WE WILL INVITE THREE MORE GUESTS");

let DinnerInvMore1:string[]=["Manto", "Newton", "King Salman"];{
    DinnerInvMore1.unshift("Shoaib");
    console.log(DinnerInvMore1);
}
for(let i:number=0;i<DinnerInvMore1.length;i++){
console.log("Mr.",DinnerInvMore1[i],"You re invited to join us on a dinner",);
}
//Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let DinnerInvMore2:string[]=["Shoaib","Manto", "Newton", "King Salman"];{
    DinnerInvMore2.splice(2,0,"Tesla");
    console.log(DinnerInvMore2);
}
for(let i:number=0;i<DinnerInvMore2.length;i++){
console.log("Mr.",DinnerInvMore2[i],"You re invited to join us on a dinner",);
}
let DinnerInvMore3:string[]=["Shoaib","Manto","Tesla", "Newton", "King Salman"];{
    DinnerInvMore3.splice(5,0,"Babar");
    console.log(DinnerInvMore3);
}
for(let i:number=0;i<DinnerInvMore3.length;i++){
console.log("Mr.",DinnerInvMore3[i],"You re invited to join us on a dinner",);
}

//question 17
// Shrinking Guest List: You just found out that your new dinner table won’t 
// arrive in time for the dinner, and you have space for only two guests.
// Start with your program from Exercise 16. Add a new line that prints a message 
// saying that you can invite only two people for dinner.
let DinnerShrink:string[]=["Shoaib","Manto","Tesla", "Newton", "King Salman","Babar"];{
    
console.log("I can invite only two persons for dinner as table is not arriving tonight");
}
// Remove guests from your list one at a time until only two names remain in your 
// list. Each time you pop a name from your list, print a message to that person 
// letting them know you’re sorry you can’t invite them to dinner.
let DinnerShrink1:string[]=["Shoaib","Manto","Tesla", "Newton", "King Salman","Babar"];
for(let i:number=5;i>1;i--){
    console.log("Mr.", DinnerShrink1[i],"We are sorry You're not invited for dinner");
    DinnerShrink1.pop();   
}
console.log(DinnerShrink1);
//Print a message to each of the two people still on your list, letting them know they’re still invited.
for(let j:number=0;j<DinnerShrink1.length;j++){
    console.log("Mr.", DinnerShrink1[j],"You're invited for dinner");
}
DinnerShrink1.shift(); 
DinnerShrink1.pop(); 
console.log("AN EMPTY LIST",DinnerShrink1);
//question 18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
const places5:string[]=["Doha","Baku","Istanbul","Paris","Amsterdam" ];
// • Print your array in its original order.
console.log(places5);
// • Print your array in alphabetical order without modifying the actual list.
//const AlphbetOrderPlaces5:string[]=places5.sort();
console.log(places5.sort());

// • Show that your array is still in its original order by printing it.
console.log(places5);
// • Print your array in reverse alphabetical order without changing the order of the original list.
//var ReverseOrderPlaces5=places5.reverse();
console.log(places5.reverse());

// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(places5.reverse());
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(places5.sort());
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(places5.reverse());
//QUESTION 19
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var guest:string[]=["A","B","C","D","E","F"];
console.log("Guest lenght is",guest.length); 

//QUESTION 20
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var MyList1:string[]=["Name","Profession","Hobbies","Favourite Food","Favourite Place"];
for(var i:number=0;i<MyList1.length;i++){
    console.log(MyList1[i]);
}
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items
var MyList2={
Name:'Muhmmad Adil',
Profession:'IT',
Hobbies:'Cricket,Music',
Favourite_Food:'Biryani',
Favourite_Place:'Lahore'
};
console.log(MyList2);

//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var test:number[]=[1,2,3,4,5,6,7];
console.log(test[11]);
console.log(test[1]);

//QUESTION24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
var name24:string="Muhammad Adil";
var number24:number=55;
var array24:number[]=[1,2,3,4,5,6,7,8,9];
if(name24=='Muhammad Adil'){
    console.log("name case",true);
}
else{
    console.log("name case",false);
}
// • Tests using the lower case function
if(name24=='muhammad adil'){
    console.log("lower case",true);
}
else{
    console.log("lower case",false);
}
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
if(number24<=5){
    console.log("greter then,less then",true);
}
else{
    console.log("greter then,less then",false);
}
// • Tests using "and" and "or" operators
if(number24>=5 && number24<=100){
    console.log("And/OR",true);
}
else{
    console.log("And/OR",false);
}
// • Test whether an item is in a arra
console.log(array24.includes(5));
// • Test whether an item is not in a array
 console.log(array24.includes(51));

 //question 25
// Hello Admin: Make a array of five or more usernames, including the name 
// 'admin'. Imagine you are writing code that will print a greeting to each user 
// after they log in to a website. Loop through the array, and print a greeting 
// to each user:
var username30:string[]=["Ali","Admin","Aslam","Amjad","Akbar"];
// • If the username is 'admin', print a special greeting, such as Hello admin,
// would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
for(let i:number=0;i<username30.length;i++)
if(username30[i]==="Admin"){
    console.log("hello Admin, Would you like to see report");
}
else{
    console.log("Hello Thnks for logging")

}
