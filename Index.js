
for (let num=0;num<100;num+=1) {
 if (num%3==0) {
   console.log("zip")
 }
  elif (num%5==0) {
    console.log('shark')
  }
  elif (num%5 == 0 && num%3 == 0) {
    console.log("ziphark") 
  }
  else {
    console.log(num)
  }
}
