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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662E3LYSF%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl9DLUM3kapMf5dFvY5qfjnu6dCOiFsd4Kerrg3IG90wIgGWHiLOXxdOUTtmlXsLRMwztRbOF%2FNc0YTveBnR7Fh44q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDNTt2QBttOLNpy8NACrcAx2BMErZ%2BWbpub3UH4YEPcUHAafaxzsUZHq8GPbZFJxhukwVNrAv6h1Dz8VTaCZ6b2Bzy2X%2BeJjsXmO%2B01fRtrfTaVZAJ8kXQqrYioR1F10ONuYjijPyJyi3xAMOLh%2FV8L1KyScs8hzNIFQNh3ybMLJ8DRZRmJWPwk%2B0qWvJjzZr95lRv0ZnXICCWhb%2Fshj7pn2cDp8VkT1Eti%2BAnB1V2Yl72HNOHtw%2FU5KwuU0ta3YzWeiZSwGP0b5c8zF325unG3dNpzUImNyAhyW9mdoHucRG1S6VEujTqd2XfxpoZXhRCwVQk52OhQIsN4ZDTAy3r8qHfRMF3BzLTCaeY6i8tFeoHrOl2YCnZTT49bX4ydODTHH8DlABGHzV53f22pZHmw0EFSr27SJJ3QE2kwF%2BdVkVAeXVyvm7qFlWFGjo9q7aq8Iase03fLUf99YdzCFpQR7lhnxzmG3LpEwGeKKC%2FNfr4wjKZ4amZbXw9P84KM3wDwvE%2Fll1Y0i%2Bhimv%2FWEeHGurFanqJmwR0p%2Ft7Hr06hvQTySsGuTs%2BB%2BETLaDek%2FoKvT2kPvoU3V%2BEdcB5OkQlDH2CqMmcLA54ONAqauvdijWOK1%2Bcs9qdJ9GtzWMqnbvatvfnp%2FRXxg7Vt%2FWMM7GgMAGOqUBr9Ogrc2LVOE5qcjKmQZ3%2B%2BX1Ze0Dn2%2FOYwbW0onIgPPgqwJ8OUWB7yKr%2FZuf7BNdeqzKp8o7OSMo6X0JM715AxrPvw0wYCo4WusFSpxrDY7nM6wIpsx5Ff%2F8u%2BMehQfIvk5So%2BGgO7gZThn6sfqPGkD8JxLDuWAG9LR51JIQ50AaRVuSsHoK%2FZvCGM8iTs6jp3GNm4cqe9k6ojbGptH1H0xpCmQy&X-Amz-Signature=36052c05fe845d386a834aeec75147bce7aeac5aca5be645b7f7fa814a5fd414&X-Amz-SignedHeaders=host&x-id=GetObject)

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
