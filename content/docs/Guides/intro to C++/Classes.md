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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627YVRDXV%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7H%2FmhknwzmVOgh0OMLxYU40kewss9yIQyhNXxcSOw1AiEAofOBuIcnmQyR%2Bi5%2Biph0zFwbaSKxaCpKqbLUAowqoj8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqfhE4I19TXPmwkcCrcA%2BTMU%2Fy%2Bf9r1jtK7aeLSCmPhkQ1xV1%2Be%2Flro8muxYjuH%2B3UXZ7ceJQpcc2Blef0GW7y5XMZyk35b7pIh%2BnykFLrBIAdcg6r%2FqNQpVenmMDvr6JrvPbHJNw9O24GNb6Vg5JX7SVockIJwgaZKign%2BV5ogeh%2B7aUMIZ8yagLIrYF9RTw06q7Sx4Pg3JPh5vmxYSsUqWTnVtNKdtPhX0zZhY%2FeYmb08s4uaxAW2bwpwLaBtKi7rqLSxdt%2BNGNVywIJUjoPy%2FoIT5usKh8fUqhorp4eAIk2wa%2FUladc%2FAO5PGdLN46yW5tH9WUke1wsUQbnY34ZcvFwLXEHu1QE%2FSiMFwo7afOPWuAp4V4Bnp9XbgALWOxH3E0L1FfydCnHKRNOyRZT6Vksyc7cB1YnNni4TNNWyaG1y6eqGsXtrICJx1FTXKYaNrUlNHFl73G6JhwEAi16fSg1kLoep7kdxPvkK65oIerkJcwUpUwA6o1m7KU%2FrUK%2Fhsr9kaP%2F%2BPntr75MtoBQfTbnf%2Fy%2BgrEDRoae23n1E58JMQ9nI%2BB9IeEfDmdUPpXD4LBZW45ftLnit5sQOsNlH6emq1mFdp2fyHgKh6TWYH2u%2Ft07s72o29FCrKVehvLzRPMJ5%2Bk47lRYXMJW%2FoMIGOqUBqhD1sJON0HEmmTXjsGRcMscsw9UyBlokRr0lgQYWlaSn3y7sFMUHO91KCjDPVOEzQKjd8%2BozwM6YQ2qCHVuJgKCfZAAn2uLsIdGfoTSyEJQFL2Q0hr5h3cxAorZr3gpFmtEk91uv802CInzmhoizK5mj%2BIgbVIB3Foz43eHgWl77%2Fd3zJgEBz9pPdWFGRU6LNWpEdyqhlUp15m%2B%2BDLAwVRKIVzYi&X-Amz-Signature=d0ed05afe47c3739d5a5f589650d612e852e81ffe65cea6f941427adb922dfe0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
