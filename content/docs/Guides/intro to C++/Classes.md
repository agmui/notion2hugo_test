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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZTANOK%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T091208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiE9djf5FyJk8FSMxqdgBg871kvwP0UI322QkOq8PCsAIgGkvylYyK2ubyvoTk%2FZME2LFjVTkLO6M3afPP9TwAnMwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoGQ68aI%2FeK4QqGFyrcA6b5kOfletL6gJS0e8cr8ffMSJJz7J79I1B5SUQhx6dXF4Qp86bwziEYxRZd3YnzBPalyYR5apmpxOotB3N1%2FaqfK3XrixJ2RXw3%2B0Cebx4HuEHCtxVVVTb%2BdJ35DPxiFTnLPg%2BNWny%2FWvUuY7EIK%2FZ%2FA7HE7sBEPJc53%2FmDpoJqUO2f5SVkzz0tFvgdYIlURXTrdhXXV%2BccCEaBhwp%2BmakbPm0CFYElUTxUAc8JQhUDtBAU5JG%2FUnlO9cIz1ecbq4utvkDJbfuoAmurtb8whTJ8Y2kFEZauAue%2Bd8L8R1mFWE6bTqsJ%2BJfdaAqF0cngl1KDKVl93NqUJa2vWLrPqebuC84XMcOY%2FfC7jf%2FLpr1OaXRb15P0x5qhg%2FhPhd%2BV4oj3PWqtrI1LwfakIWM3ywbxaDbj8%2BJv9UdDL0RKjO7XZWNFAmveSBIZ4BIpX4yLTSdTWNfyjWpqBaf3pcKbSUKVGOMcQMwnm0hcLh2y5K2s%2F9mCAZZNNdE4tmCl%2FCIpLRqFWmc4ap6OOEkcaVPy2wUp4fV6x5Dqg8gjbYzuV65YehZQD%2FVPV4Tp5IFyne8azhslU%2FOk7fWCNFsL1MuI%2BigOhmVjOZANFE85mcTG5PmsGM00MbMX9smGQHYIMIzSuMMGOqUBjKEwYW2irV0PubglQ%2FUKV0gN5sQKZi6Otlypwk8lbMSIBskZOIq00CknCNiy3359O0mXl81uNXSi5wqLVfHfT%2FSi%2FcoZaR%2FU75fPhltjFrHsgbgs16TX%2FUqYETknvVsSubkKIFfMfPOvgt46zaN4nVeC67f%2F6E8KatrA%2BOdvIAAgGFEjsFxZUsMW3XWRw39wd3%2Fum4h%2Bg%2FqTmPdsBLFmryRAUxW2&X-Amz-Signature=688dbf1dfd5b48309db064975d488df3f7f4638b64178177b49561ea21b26bf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
