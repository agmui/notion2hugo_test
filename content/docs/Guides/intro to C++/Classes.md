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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEIUMIPB%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIA7f0AZwJcGcn3BnJB62BMqJ3k1Fl3%2FFaFWy5YsDkE9UAiAfxmk4fRYVvDHP67V%2BLCfU1XTQnF7iFuhpuQwsvSeWOSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMZYEf1OwTQYbRob%2FqKtwDmq6kl%2FRBRIEc%2FwaW7JpL0wp1CxINIe209Y0V%2FPCTJ2BLD4iGGcny%2FPIEAMNnWvXhGbWSU%2BoLMTsxXwcf34hMNjLH2KaY%2BAo9HqZf%2FZKCT0e6KVhQgb%2BXjCWrhQYSgCxr4iHOBblWtkhqV%2Fe4D0V3UDObOh6HR%2F8zf8LV%2FlxRAlr9H8Z93JjPHpqery7LEHd8X8JHRI5HDd79AR6qCQWFWJb2LXgEtIVdyzwMctpYnpY9Nxtq8HPKBfFpiyov8VicGyH2612ZOOzyEOxbNc9S%2Fy0oQWCR18Md5HWeyaZv2m08CmuGgL2Xrd4We8%2FFXPhd0ghO7XuFqL%2Fah8JnmOXuOZkUEEAIdXDPhIdQR8SflHA1O1QF6xCMrC3jLtlo7lKasQDqnzow2UG8eqZbo07DOYff5wBZqpUKobGxMvQ9k62jdL9Q2ksPHF578n%2Bs2aJX7vuoZzO2aE8ilRon3vZn%2B6TqIZfQ5vqWS7eNo%2F%2F7SP%2FKt4kY%2B%2Br7yAEjDxPA14TXYW89i7cORAmRmwaUUW1L2h4h%2F9Pg1BImtH7%2FI9xBIpoktd7Qvw5mqr43I%2F%2BttscABCzenIORvaYkP9%2BmxRHUqL%2Bb2wQdRTxyNFZ3vcvr8GH0n34qHgYSL6lb7hIwvv3WwwY6pgEUuwMRLSlUbXbbwIB1PDB2%2B1iNkXrldJXw1jXWLuBjVYGdKK4jbI1qMgBJ25SOkRo7bWec7CAnJn3nLj2ieQ0KEnD3od44yTs22Wc5lpWE4SimPnCGiydD2L8EwoB5H9vvqMPyECmjkOpQQzsm0V8TBHtHCmHmPSa5kOQdKiPyxIMBdvUWvOCKI9mwykITcohf73BsZcxR%2BEegYN0CGEVPnpBW2dFk&X-Amz-Signature=1a679b004d42874e72ed5d52eb6dc023e931f3d845b0980f27ce0f9045b4ea2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
