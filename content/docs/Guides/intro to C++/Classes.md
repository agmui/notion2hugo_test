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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6ZSP4ZM%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T200743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIEHcAZgQcaSutC%2BIeXe1WASDs0yU%2BqBT%2FBdWtpj7Y3uTAiEA7R9%2Brmt2z2nKz3O8XCu4Z0W4lysZ8HDOSxhZH5VnDrcq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDJ2q1Bh2D6Im5fmIuSrcAwCBxOJqjO4zaP2%2Frkt%2F6M4WBAqLWq%2F9FGiRIx6hjESxGYh7Z%2FALDu7GKZl8hwWgigynLxzPnt8TzUDuTCPAYM1%2FcEyQ2bQNXi9Rf6WPJhsCQe8s82PJPcdDionw3Jnrs58peWhPZUM5syRrQfKZgYUg3iYH5zaAMBSqx4HLkys5pC%2B8jtonqOIQnDwe4oS3IfTw0H5T2bqTEwoKkNQKvALQmL4XEjWMAwNB%2Bdyzk4nz4xhCQpjaafcJN66jr52H%2F6ms%2F4mnP3l8IrSvSoMXP3kRxlkblzy6%2BxDt5Gk9Vay0ZGxemTBQA%2FZ7hgWwMpOZ6dMNH48mz%2FhM0GTAkYuQ8H4GKkww3QfXNR43HBNMCGVFS4yGtDVkqdkjgd%2FI91cBoP7e%2FgTREaVso8Pav%2FBonpPCgm%2F4819G5Tqzdk31P6sF0KwFCjOY8pR7YOJ%2F7OrvoePbC%2FJXPCYWEEZNH4FA2h9SS7eoPiPpW5e%2F36ErUMIa0V77FxkOJsk%2BzRpcqFIdEw3ZWJmYj5WwsyYf8uswK4qb1cVkw8SpLYNApDQUhM1PXGH8h%2FbnhhtPEIXYeJSvOMl%2B8v7jjf6tKPrEMM5LxGitCk0sQ0KHCGSmqpgAiisxu6Ql4TSgBUOWm54pMJOIyb0GOqUBvWJb3Zahl6Lsb%2BwBA%2BiGxZe0tvt8ff3IX7SExVdtm4wM4jwTzUD7DI7st%2BQwRhh1SrvSLF39fCLmSrZRmczpsQMSdbV2%2FwAof%2F93dreVEptNDORwUn1hM9psKzycYCwM9vrpKB4NiRyFEJE%2FARYsATz3quZcPJ60TVbdsSrdRVsieP49bRzVoVQF7XYof8P5z1Uzz5pNnZCXia526uJW0%2BJoHKg7&X-Amz-Signature=f0ef338e6d4562b9f0104c4753eb7cd307bed13c1aaec8b9abe8e3ed2f9af69d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
