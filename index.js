
class BankAccount {

	constructor(name, amount){
		this.name = name;
		this.balance = amount;
		this.interestRate = 0.03;
	}

	//Encapsulation
	annualInterest() {
		let interest = this.interestRate * this.balance;
		return interest;

	}
};


// SavingsAccount inherits from BankAccount
class SavingsAccount extends BankAccount {

	constructor(name, amount) {
		super(name, amount);
	}
}

// DepositAccount inherits from BankAccount
class DepositAccount extends BankAccount {

	constructor(name, amount) {
		super(name, amount);
		// Polymorphism, Deposit an interest rate different from
		// that of a default bank account
		this.interestRate = 0.1;
	}


}

let personalAccount = new SavingsAccount("John", 5000);
console.log("Annual interest of 5000 naira in savings account: ",personalAccount.annualInterest());

let businessAccount = new DepositAccount("EnterpriseCo", 5000);
console.log("Annual interest of 5000 naira in deposit account: ",businessAccount.annualInterest());