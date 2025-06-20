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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFEJUSG2%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T150843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAC1yrOj93X0XLYVEjFZykX6Obl0vi8z3v6jN3PoBsP6AiAgVvsSGQwhHU9o%2Bh6wNESukoMetXDX4%2BDhPcSMz9DUwSqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFwZBGeXlADP59ZBiKtwDvhvFbFPwgeFvRp2VY8LXiMQNR4Lf%2BX7BnXaXE5ZCuiWejkZmI1PCSsbsTAfOgpycOoyC5PTDv6oMAXHRXQ1KkaaOY2fZvEQv1FBP9y2ZnX%2F3YqTnOqBKBwclRbVVdYNAUG7yXwASUuwmD9q2bDW6ghjl2DK720u9wJE0fxPgi6t%2BioZmnWKlru4hnIBIxAuIuk9pCCFWjGQ0YHLMelR2OtXsE%2FrXjpecJ2wsUjNiSC2y9BpNfa9S6p4vnU8XRAAy1IPMSRJwHFViLEkBVMhV9BiG6nPn9bxQt%2B9Mbb3aqHGskeZbZA8aBW6Ffgbi83K95By2aZ1kfBJbs%2BItuo6eQg0RtQ4XasJMMc5r%2B0jxv9dvu0QU6QHCmUC%2B%2B8p7yBNcwWjaWBvFwtlOP49pIulWFMpQ4x8nFLLZ%2By164rzuLjiSW4dBacfDF44jCehdZWC3mnXzp1lHS7dNirw8xPgTTRpew0tahVfnChwA8Zk0nz%2BtRo2I3WywBh7bxP8aq4r2QeTwMdSHTIoMTxJi8Etli042wPbhVUEbUKa5wW96qx6uk4nO%2FMbducvpxh%2BOxQEtQxXsm5N0BKWfBp213kLg13Hj06E3Ha7N8%2B7ZFlchOckavZOyxNEFs0dGEqAwptXVwgY6pgHsOE30e6jGX%2FSruSv5g6XjkOJ3ED1svmn%2F7epILxpk4YyA8UyeqxLQXO4LFGxH8Wf4FsjyKUnfXinZl1V5R2ybyNqzb7yCy5bJmlojLLtAbIly04c0zWlLGPWo%2BtT08AXXF8lbukhm9ZQumjqdhjCmUezK1gGYo2v0VyDx61CKLUPaC6mqrzF7B9vRrvnDnzZAtZh%2BXyC%2Blgo1UISXT8Y%2B9WGIlx79&X-Amz-Signature=2129a9437b4b30fea2c224a20478897d50d88cd53614209717bfa95b65c7900c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
