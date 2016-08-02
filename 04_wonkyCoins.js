// # Catsylvanian money is a strange thing: they have a coin for every
// # denomination (including zero!). A wonky change machine in
// # Catsylvania takes any coin of value N and returns 3 new coins,
// # valued at N/2, N/3 and N/4 (rounding down).
// #
// # Write a method `wonky_coins(n)` that returns the number of coins you
// # are left with if you take all non-zero coins and keep feeding them
// # back into the machine until you are left with only zero-value coins.
// #
// # Difficulty: 3/5

// def wonky_coins(n)
// end

// puts("\nTests for #wonky_coins")
// puts("===============================================")
//     puts "wonky_coins(1) == 3: "  + (wonky_coins(1) == 3).to_s
//     puts "wonky_coins(5) == 11: "  + (wonky_coins(5) == 11).to_s
//     puts "wonky_coins(6) == 15: "  + (wonky_coins(6) == 15).to_s
//     puts "wonky_coins(0) == 1: "  + (wonky_coins(0) == 1).to_s
// puts("===============================================")

var wonkySum = 0;

var wonkyCoins = function (n) {
	if (n === 0) {
		wonkySum += 1;
	} else {
    var coin1 = Math.floor(n/2),
        coin2 = Math.floor(n/3),
        coin3 = Math.floor(n/4);
    wonkyCoins(coin1);
    wonkyCoins(coin2);
    wonkyCoins(coin3);
  }
  return wonkySum;
};

console.log(wonkyCoins(0));

//-- JJB