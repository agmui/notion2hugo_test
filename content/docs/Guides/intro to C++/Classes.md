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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O62Q2UP%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCjRS8xEEp5LxHNKwg7NM1f9uQHOCbeHjBJPmXW8jbX%2BwIgCtdYhrekFKeA91BqjPPEA48Rb9Ffxub0EUEUFaQW454q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDIa%2B1EG5KF4rw%2BmX3SrcA%2BXL2AxRAZuB6tSZBYGIOjTy9%2BTk%2BZQRP3GkeViS7GGsspeWP8KVuIkFkCszm9tIyEe8yP26RT1DEp5msbeTynLhpjffjTXqR%2BjbNM7FaALXTuZqRxZljIUqBjzR7I%2B41g7%2FtVyuRes3FdYRCEyiqkR0PbKO%2BcQomDCUBcFw814u2jAAi9TdYPpinfntaMPcNfZtJRSobaP1sJGrskNMMYhe%2BfMYFV5KAYF3maI14RMnFSMmMoW8tYm%2FefkEMWoNbQ7ZWf9uBNgYXg4IgA%2F1JV%2BLKLHv37HYAnXUSvxd5KEPUWuw6xIUEF8tr4gkKBO201r4Cu5EAtpF0J21WY5Soxpqe3e74IoiH3sJ0oW1rD6KHrRDshh6ctfdp3fuz1RxUVyAiP8V2dVyw8RuEUX4MCJbN%2FVmglw7MKLkxaiX%2B1bmT%2FAl1UEbp3f2W7uPSigufGR5y9nId0cVV8Is5bbUZWSNDXqta95a%2FDLd4GETECQHYMT2Lo8NRTgVkBa%2BlYmZCAR2%2FNhPSv%2Bznt%2Btn7CSOZw%2FhWwsJvpM1aScmSE%2Bss5QNjMBjBFhCO9WMGZZT9gS4F3MD4U5Y0NKdyGRGoZwUWSsg4I1TmQ2LoqRNS155xkgcp2dV9Bn2%2FzF%2Bq6fMPvSscIGOqUBDOfu6jO6acO7FkFqtMkLRso%2B8G8u51ZTKRIQANdapLxz0sX15O3nrp9R0MAOnz8Zqm3anrhEQwt4BJ%2FiauZynL8UHnK4ZzOZRKpLP8P6iDmrxJcweCqFIC1917s4mhFOAfB0G7SO1gfW%2BO6XtB2iGzOfz0%2BvJ%2Be2hfkgQPrDuwGuT%2B22cqck7t0jv505JLMQfu3%2BZUX7TbIOWuohjGLXvZax4go2&X-Amz-Signature=2d8d45eb167e7eead57d91d3860dd75cc704addfc1dacb2e1c6412a028e8055b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
