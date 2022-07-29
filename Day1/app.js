// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

// MY ANSWER

function hoopCount (n) {
    if (n < 10) {
         return ("Keep at it until you get it");
    }
    else {
         return ("Great, now move on to tricks");
       }
 }


// NOW TO CONVERT IT TO AN ARROW FUNCTION

 const hoopCount = (n) => (n < 10) ? `Keep at it until you get it` : `Great, now move on to tricks`