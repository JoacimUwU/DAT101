"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

// Define the account types in a constant object
const AccountType = {
    Normal: "Brukskonto",
    Saving: "Sparekonto",
    Credit: "Kredittkonto",
    Pension: "Pensjonskonto"
};

// Create a bank account class
class TAccount {
    constructor(type) {
        this.type = type;
        this.balance = 0;
        this.withdrawCount = 0;
        this.currencyType = "NOK"; // Default currency
    }

    toString() {
        return this.type;
    }

    setType(newType) {
        console.log(`Account is changed from ${this.type} to ${newType}`);
        this.type = newType;
        this.withdrawCount = 0; // Reset withdrawal count
    }

    setCurrencyType(newCurrency) {
        console.log(`The account currency has changed from ${this.currencyType} to ${newCurrency}`);
        this.currencyType = newCurrency;
    }

    getBalance() {
        return `${this.balance.toFixed(2)} ${this.currencyType}`;
    }

    deposit(amount, currency = "NOK") {
        const exchangeRate = this.getExchangeRate(currency);
        const amountInNOK = amount * exchangeRate;
        this.balance += amountInNOK;
        console.log(`Deposit of ${amount.toFixed(2)} ${currency}, new balance is ${this.balance.toFixed(2)} NOK`);
    }

    withdraw(amount, currency = "NOK") {
        const exchangeRate = this.getExchangeRate(currency);
        const amountInNOK = amount * exchangeRate;

        if (this.balance < amountInNOK) {
            console.log(`Insufficient funds for withdrawal of ${amount.toFixed(2)} ${currency}`);
            return;
        }

        this.balance -= amountInNOK;
        console.log(`Withdrawal of ${amount.toFixed(2)} ${currency}, new balance is ${this.balance.toFixed(2)} NOK`);
    }

    getExchangeRate(currency) {
        const rates = {
            USD: 10.83,
            GBP: 12.42,
            NOK: 1,
            SEK: 1.02,
            CAD: 7.58,
            INR: 0.12
        };
        return rates[currency] || 1;
    }
}



printOut("--- Part 1 ----------------------------------------------------------------------------------------------");


// Print account types
printOut("`${AccountType.Normal}, ${AccountType.Saving}, ${AccountType.Credit}, ${AccountType.Pension}`");
printOut(newLine);



// Create an instance of TAccount with "Normal" account type
const myAccount = new TAccount("Brukskonto");




printOut("--- Part 2 ----------------------------------------------------------------------------------------------");


// Change the account type to "Saving"
printOut(myAccount.toString());
myAccount.setType("Sparekonto");
printOut(myAccount.toString());
printOut(newLine);


printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
myAccount.deposit(100);
myAccount.withdraw(25);
console.log(`My account balance is ${myAccount.getBalance()}`);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.deposit(25); // Balance becomes 100
myAccount.withdraw(30); // Balance becomes 70
myAccount.withdraw(30); // Balance becomes 40
myAccount.withdraw(30); // Balance becomes 10
myAccount.withdraw(30); // Should trigger withdrawal limit message

// Change account type to "Pensjonskonto"
myAccount.setType("Pensjonskonto");
myAccount.withdraw(10); // Should not allow withdrawal for "Pensjonskonto"
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.setType("Brukskonto"); // Change to Normal account
myAccount.deposit(50); // Deposit to reset withdrawal count
myAccount.withdraw(20); // Should now allow withdrawals
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.setType("Kredittkonto"); // Credit account allows unlimited withdrawals
myAccount.deposit(100); // Balance becomes 140
myAccount.withdraw(150); // Should allow negative balance
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

// Deposit 12 USD
myAccount.deposit(12, "USD"); // Expected: "Deposit of 12.00 USD, new balance is 259.94 NOK"

// Withdraw 10 GBP
myAccount.withdraw(10, "GBP"); // Expected: "Withdrawal of 10.00 GBP, new balance is 141.88 NOK"

// Change currency to CAD
myAccount.setCurrencyType("CAD"); // Expected: "The account currency has changed from NOK to CAD"

// Display balance in CAD
printOut(`New balance is ${myAccount.getBalance()}`); // Expected: "New balance is 20.36 CAD"

// Change currency to INR
myAccount.setCurrencyType("INR"); // Expected: "The account currency has changed from CAD to INR"

// Display balance in INR
printOut(`New balance is ${myAccount.getBalance()}`); // Expected: "New balance is 1111.06 INR"

// Withdraw 150.11 SEK
myAccount.withdraw(150.11, "SEK"); // Expected: "Withdrawal of 150.11 SEK, new balance is 0.00 NOK"
printOut(newLine);

