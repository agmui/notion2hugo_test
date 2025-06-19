---
sys:
  pageId: "2329c1cd-96c8-4fd3-a4f3-9920d69d1c8a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-11-08T18:33:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Classes.md"
title: "Classes"
date: "2024-11-08T18:33:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 113
toc: false
icon: ""
---

## basic class template

```cpp
class Milk {
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {

    }
    ~Milk() {} // deconstructor
    void drink(int galOfPilk) {
        printf("drinking %dL of Milk\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};

int main(){
	Ilk i;
	i.drink(1);
	
	Ilk* i = new Milk();
	i->drink(1); // arrow syntax when i is a pointer
	i->~Milk();
}
```

<details>
      <summary>What is </summary>
       `~Milk()`is a [de-constructor](https://www.geeksforgeeks.org/destructors-c/#) (its basically like `free()` in c). Unlike Java or python, C++ is not garbage collected so when we make an object we have to also manually delete it. The computer does not magically make it go away when you are done with it.
  </details>

## [Inheritance](https://www.geeksforgeeks.org/inheritance-in-c/)

```cpp
class A{
	...
};

class B: public A{
	...
};
```

### Creating objects

```cpp
int main(){
	Person* p = new Person(1,2,3); // heap allocated
	Person p2(1,2,3);      // stack allocated
}
```

```cpp
class A{
public:
	A(){
		...
	}
};
int main(){
	A a; // Note: if your constructor does not take any arguments
}
```

> Note: you will learn what stack and heap are in CSSE132 but for now we generally use stack allocated in Robomasters

Why use stack over heap?:

This is what the `new` operator calls when ever it gets used.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OZ7LRP7%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1J0Brl6pKhCmT%2FVUyg91pIBNno3FqKRRLCz6W8OiCPwIhAP0ibUo9S%2BbKSrvHgvm9ngeCBMXA1mARpK7yVgj4AynxKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJ0ybNFFAQP0zjel4q3AMwgdlJFut476cBP29fB69Qp4Qycsjen0VN%2BdsMfSwTVfyi4smAGyuZku3RLyKwHQxiQLv3nLjjhYavk9fEPkb7OFvPPLfHJsbT%2Br5kUPZ4i8%2F7CMGvnsrGvkaXj25SNTHEK7y7MVmfmQFGtIa%2B29eUebB2HvCmHlJ7f8qlqKD4up5pL9%2BHU35KSOAHHG%2BdNcSoW2ieMh8ZEkouo7dS6L7hfN8CGmjzmwAm4Xh%2BXSw8vpmmEuHPsvqR7eSyF7lTyZFW7hOLg7GJ2r0hYApb4F0M7fmi9vVSz%2FtNFBZyzvN%2BthnZ%2FrQlp7%2BITDRqtgWBZySM34KgjU0VPWneZWsCIRSQLXFobzFAbwUigo23s7GZ9seICpkaqfsrhf6E%2FdffrRuzvhVoHX%2FKTUgALH6lL2qQU9X09HYqKhGS4sUpJ30n2hgNkDpfhQ5ID24WkwINzd1YavigbWRyTbkcw%2Bd8FDvACZYCQEg7CDNiGcsL1Dlnh2GOL6u7zf%2Bk8o5MJc9awAtuKySaoAvv7UnBrSsbBsEuwNOUY3IEu5waov3QQlFx%2BTCM9ZiE8w1et8r64dTTt5JC4C4dDNgASQQ62jZZ%2FdMdOTFlyIWowJ%2F6ShBZ4Uu4eLoLgzU0JL2%2FtRlzPTDm3dDCBjqkAbM1Ie%2BOOc9le%2BTHbr4CY6CzKKXLhfTYOUcajC5zuxhv5pvj1koPPe%2BCn1DbjD8ZQUm%2BiZcOPnQEmylltScKqZ9eIpoMDbpOU2QPLoe%2FxLO4yF1m8f5RylMFdhDuoks49HPyA1BiwGpJW%2FiAW1odS49RXBG%2FVNJ7xoIBoqD6p0c4JcwNaUa1P2txtAG3lLLej%2BBc0UKT5xhPxahpB59VV97lG9fo&X-Amz-Signature=0591b76ee7e98984905e973772c0f0f5bb2cacde89bc3ae9d2b23961115f55f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Constructors

For constructors, there are 2 ways of doing it

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
		MyClass myClass;
	public:
		Person(int age, int height, int weight){
			this->age = age;
			this-> height = height;
			this->weight = weight;
			this->myClass(69);
		}
};
```

 _constructor initializer list:_

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
	public:
		Person(int age, int height, int weight):age(age),height(height),weight(weight), myClass(69)
		{
			...
		}
};
```

We generally use the second form because

## NOTE: YOU CANT CALL CONSTRUCTORS WHEN DECLARED!!!

All together

```cpp
#include <iostream>
#include <string>

using namespace std;

class Milk
{
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {
    }
    ~Milk() {}
    void drink(int galOfPilk) {
        printf("drinking %dL of PILK\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};
class Pilk : public Milk // inheritance
{
private:
    string cola;
    int numDrinks;
public:
    Pilk(string cola, int numDrinks, int milk)
        : cola(cola),
          numDrinks(numDrinks),
          Ilk(milk)
    {
        printf("pilk\n");
    }
    string getCola() {
        return cola;
    }
};

int main()
{
    Ilk *i = new Ilk(420);
    i->getMilk();
    Pilk p("coco cola", 420, 2);
    p.drink(1337);
    i->~Ilk();
}

```

## TODO: explain → arrow syntax

# Exercise:

make 2 classes:

- Car
	- string name
	- getName()
- Vehicle
	- int id
	- void drive() // prints "vroom"
