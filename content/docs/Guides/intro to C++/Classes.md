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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAKI77D3%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T061249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDg%2BXTawba6lE6zy%2F0xZhdqtRWvTqND3%2BFWwjDWSXORnwIgGs5WcEk2cAQEC9OsUgfx%2FPlQlrgEpHVvuuPaRld72iMqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjCl4PjeSWp%2ByjxIircA1%2B2h5NVYkkJM0iTateBl9Li%2FW2f65o5ibgZSsSLOj0p5LB%2BAIoMaDJKyJ3huNDacYTXAxcWEBSFbeGOReQElHoGDb%2BRF%2FZfFPGLH7f5CGrNKYmpcg3smMdztroPdHZkMmJ7iSrdH6R4zMaplkkbmM7uwe3kKhuoXufhvZukOaGQtLPy8lYq5DgT2BqAEPchX%2Bp99S%2F%2BXtmgD4bQ97E%2F5uc2LKJmnMJxl%2Beb8tjEVSvocE3In9tulMP6FE5fLnhrDY1Oh6rW3sMZcsQr1MF%2F37oQ2hXkLDD2mdiRQlkbIa6t%2BoLH8IOi1038obJ73sHoPrg656Gmi3fjI%2ByXcwFmpi2XLlNMqXbEvq4IkM4wETRDeva2Qa930mdIgNQ8y5mrkiYWq8Gx4LcZGaYIBV1piNeqs0%2B31utaN1tjX3JrgCz7TkujaTq7einlBJLnUBsBVV4E88tnuBaBn8AEwu0tkbGZuS8FwXhBjrmpdNEVXgoBYTE0TXP8BZpITjaNB3DGRPump3HzdrEfg60%2BR0YoDMhe%2BM1TYXgd6ZOq9GSJBb6umsbr%2BYiCaMTwQtOkLBK7OJEFU9DdxEeAsw3THwgZOuwCQ2vsfWbK4O3RcL54HQWXwixLIkXfwWAD3EEqMNOoi8EGOqUBeru7XGtBVKFrRHUZ1P7alQEG0e%2BEGfN68IcIcj8Ij2X3au7NElJykHGCUglV9%2BLTHoW75Pr5KoyjQeHuJP4fyEhtxQaamLgVz4v16r0rnEnM4MQ6Pwlbe5CRgZJ7JPcacOpYhDb1Ddg6RsrV%2BBO0m%2F4L%2BNXISvhUPBm8jj30kXW84M%2F6J4sFiYexDWA2733J8RkcD2m6C6NRIrX1S4JbeJxUwZvp&X-Amz-Signature=ab593406ca6a1b02df0e661e5d033d1761dd2f77e55bcd2976a1cd3744059900&X-Amz-SignedHeaders=host&x-id=GetObject)

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
