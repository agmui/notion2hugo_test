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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEOBS5C5%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcYwyAHtb2%2B%2FZorxr4mE4mBT5Yjn1p0uR1j60ufO5ErAiEAht0h%2FtnQbslIOGfNBUPG6LF%2FG4yn0WdX3cTtYs6GcokqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2BBQyWv3YocN32vBircA%2FHGGYSvFEySgdY%2F%2BzMoSA0xUwjsrNOgh8KVYH8%2FRTct97F6Z88tMkHfZASz6xFJS1WD83Tpo6grXOQDfFRqhLajGAVsuDB%2BIxjX0u4%2F4%2BTELxmywDTS8S%2FwJd1uwNe25WNYgNTsxLmTMfWhlEaP31fww0e6bRfmEKmBj2PRrUBORwZAOfdy5oMvm31A8%2BzxM5B8S16cTYmgMWgv088abLfDYknvN9BE2zl769ysEi9%2BDliAs%2FxDZlc%2Bjaz3pKePKonZ2PAb%2BJLeI2Iijrr7q9kzTZOe5EuEG9ujCDvL8ZqsTAPB4HQkbVfGmNF8ixAU7boSOzD9O%2B6b93TUOMAO%2Bp%2FlEKeM9b5i%2FHTpY4S3KUZ5q5vDiYSarLO87KyTrBrzBrDp7%2FWHnxbbOR5Srf%2B%2FiosJt0qune1tX5szLJO726odTNb18AL1JQOnuRp%2FDxjPRU%2FXRgUX4gU50u32McTJ2aduHtRWh4XZu%2F9W3QEyFgoNuG8t9U%2BZkQ7krDFozglsdSLIhwYqMN936A8dnGNoYFSkUbMDpx32DV4puvbB92J105e1MQNtKiydkyiwZ2KSbAxFSyIYxiZ%2BFNeaWfynGPiI0nSsogJeUuOlxG%2BCq1Opa20E3p7cREU2iRlbMJvsqcEGOqUBWQMc%2BoIT6jpy%2FRnRmRjd2BaXMXDBVXUJE1fikjszniOECPE13xtflot6CpzxFOTr%2F%2FRzKIOBJfoXLRswA6pWIo4Iq40%2BjwGeQ8YavcYhphcQ8rI6gqru0HySzkP3pIBfh%2FF2tcf448VR%2FNy2l5XKhaDFI3B1pFJj%2FxMtujjrMV41HUwDC1ORZw74HiOjPNhg3eBgGjZJ1Kl%2B85FiZ5fndT4sNq6x&X-Amz-Signature=9571955da385b4a7ea20ad6591328b900df7b074469995cc9f9cc48dcef4a4a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
