# MSIpAddressObserver

Tired of checking the Microsoft Website everyday? Wanting to programmatically obtain Microsoft's Public IP addresses?
Build your own stack in AWS to observe changes to Microsoft's IP addresses and store them in your own personal database!

## :bulb: Updates:
-Set Up Stack Script is currently in progress.

## :bug: Known Bugs:
-Issue # 1, working through asynchronous code feature that runs the DB record writing function before the variable is set.

## :memo: Set Up Guide:

Ensure you have the following installed:
-Node.JS
-NPM with both fetch and aws-sdk (latest versions) installed

### Install your Stack in AWS

Simply run the below code snippet:
```
node awsstacksetup.js
```