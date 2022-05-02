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
`do ##class(package.class) .method(x, , y)

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

