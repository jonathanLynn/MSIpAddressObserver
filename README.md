# MSIpAddressObserver

Tired of checking the Microsoft Website everyday? Wanting to programmatically obtain Microsoft's Public IP addresses?
Build your own stack in AWS to observe changes to Microsoft's IP addresses and store them in your own personal database!
All you need is a Free AWS Trial Account to begin!

## :bulb: Updates:
-Set Up Stack Script is currently in progress.

## :bug: Known Bugs:
-Issue # 1, working through asynchronous code feature that runs the DB record writing function before the variable is set.

## :memo: Set Up Guide:

Ensure you have the following installed on your PC/VM/Container:
*Node.JS
*NPM with both fetch and aws-sdk (latest versions) 

### :point_down: How to Get Started:

Clone this Repo to your PC with the below command:
```
git clone https://github.com/jonathanLynn/MSIpAddressObserver.git
```

Simply run the below script to build your AWS Stack:
```
node awsstacksetup.js
```
