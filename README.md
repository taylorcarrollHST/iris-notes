# iris-notes

# Intersystems IRIS

## Module 1

### Whats is it?

Complete high-performance data platform combining multi-model database access, interoperability, and analytics

interoperable
-access data with oython java .net and other languages inckuding objectscrip

-odbc/jdbc and soap/rest web services

-message based architecture for orchestration between intersystems iris and other systems
-includes ata routing transformation and workflow
-ideal for develp[ing enter service bus or employing service oreinted architecture

-transactioins and analytics together
-includes business intelligence and machine learning capbilities (iris only)

-horizonstal scaling
	distributed caching for user volume
	sharding for data volume is IRIS only
	
-easily provision and deploy containerized instances on public or private cloudes using InterSystems K8s operator or InterSystems Cloud Manager

###  Tools

-integrated development environments
	IDEs
- intersystems terminal
-management portal
		browser based tools
		
		
### Platforms it runs on
-unix, linxux, windows, docker container in linux


## Module 2: Dev introduction

### Objects:
- classes, class and instance methods, packages, persisten and serial classes, inheritance, properties, object references, storage, tables, population, indexes, constructors, JSON, class references

### SQL
- dynamic SQL, embedded SQL, class queries, SQL shell
### data integrity
- concurrency control, transactions

### errors when using terminal

-terminal displays error messages
-always extra information at the end of the `*`

*Error Docs Reference*
https://docs.intersystems.com/irislatest/csp/docbook/DocBook.UI.Page.cls?KEY=RERR

### Terminal Prompt
- after an erropr, terminal promp icnludes some cryptic information, indidcation that debugger is active:
    - enter q to dismiss debugger and go back to standard prompt, CMD debugger is fine, but there are better ones in VS Code

### Case Sensitivity
-almost everything is case-sensitive
    - variables, methods, rotuines, packages, classess
    - command and functions are not case sensitive
    - `##class` is not case-sensitive
-at first, pretend everything is case sensitive

### What is a class?
- simplest form: class def contains methods
- method is a function
    - arguments and variables used inside code are privately scoped
    - method overloading is not allowed
    - cant's create multiple methods with same name in same class

- create classes using IDEs
- write methods using ObjectScript

**place sample class here later**
```
set, return, for, write
```
are command but so are
```
$length, $reverse
```

### Class methods cont

- to run class methods, use ##class syntax

instance methods
-start signature with `Method` keyword, for instance

MEthod arguments
- each method argument has:
    - name
    - type, default is %String
    - optional default value
        - constant, quotes string, number
        - objectscript expression inside {}
- each argument is either:
    -

method argument not required
-can call methods passing all, some, or no arguments
`do ##class(package.class).method(x, , y)

-method signature can either provide default for each argyment or use `$Data` function to check argument
```
ClassMethod Test(a as %Ineger = 1, b as %String)
{
    if $data(b) { code when b is defined }
    else { code when b is not defined }
}
```
- Passing extra arguments causes error:
```
USER>do ##class(Simple.Demo) .... 
```

Pass by Value or Reference

- pass by value (default)
    - value of argument passed in for input only
- Pass by reference
    - reference to argument passed in
    - use `ByRef` or `Output`

they don't actually do anything, they are more for documentation

Variables
- string is default data type for variables
    - used for practically everything: strings, integers, floating point numbersm bools
- dynamically typed: no variable declaration
    - including arrays, which are called "sparse arrays"
- weakly typed: uysage determines evaluation
```
set x - "Taylor"
se y = "Carroll"
write x _ y
```
gives you:
TaylorCarroll
`_` is a concat

set x = 3
set y = 4
write x + y 
gives 7
write x _ y
gives 34
write x _ y - 1
gives 33

never had to declar var types

set a = "123abc"
set b = "def456"

write a_b
gives 123abcdef456

write a + b
gives 123

write +a
gives 123

write +b
gives 0 as there are no numeric charas at beginning of the string

variales can be scalar or an array

write #
clear the terminal

set a = "my array"
set a(1) = 3
set a(1,3,5) = 7
set a(8) = "text"
set a(5) = ""

write a
returns my array

zwrite a
returns:
a="my array"
a(1)=3
a(1,3,5) = 7
a(8) = "text"
a(5) = ""

write a(2)
returns undefined because it hasn't been set yet

variables can also be:
- object references including JSON objects and arrays
- list string
    - creae with $list* functions
- bit string
    - create with $bit func


pass array by reference
- pass array by reference, using period before array variable
```
sect c=4, c(1) = 101, c(3,5) = 303, c(4) = "last"
do obj.Test("first", .c)
```
- without period, only scalar value of variable is passed

variable number of arguments
(... syntax)

variable names are case sensitive
var names contain letters or numbers but first character must be a letter or %
max length of var name is 31 characters, won't get an error trying to do this but won't successfully set that var either
