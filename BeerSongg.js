var bottles;
for (counter = 99; counter >= 1; counter = counter - 1) 
{
    if (counter == 1) {
        bottles = 'bottle';
    } else {
        bottles = 'bottles';
    }
    console.log(counter+" "+bottles+" of beer on the wall.");
    if (counter < 99) {
        console.log("");
        console.log(counter+" "+bottles+" of beer on the wall.");
    }
    console.log(counter+" "+bottles+" of beer.");
    console.log("take one down, pass it around,");
    if (counter == 1) {
        console.log("no bottles of beer on the wall.");
    }
} 

//tested through codecademy and netbeans as JavaScript, build successfully.