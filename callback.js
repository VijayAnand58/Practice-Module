let lastname=function(lname){
    console.log(lname)
}
let fullname=function(fname,lcb){
    console.log(fname)
    lcb('Anand')
}
fullname('Vijay',lastname)
