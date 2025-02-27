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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LCYPYPX%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T021311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQC%2Ftf5lyRkEMFeALjz4yVcR9Y9KB76sGiiwtNmo4jiYRwIgJ7KkvW7NuOBSZC7ubx1uR2G1gVEGTmerH9jNspynEj8q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDAc0HraSeIeR3L3poircA94dettv7YttVqnfk41DMqzEDH9VFdGMpczsYl2jP9LA9WU98WKbd8PIJo%2BJqrsjOs%2BF73BtbJLINhHIPiyLsVoVRrFdX%2B0MgKwWFDD3t4ejyTGoKomC2kNt6zzt3enYAjyeFQfk1ICFzLCHANT13jNnWHEAX0X%2FewIoMJCy8lu9PdwD2ARBeU%2FNpXAmX3vaTt5x79ZX5QcIdRbox%2Flvq2C%2ByEzzn2NiWv49pCQIjHOzh8diobw6Jb42qqRo6s5XmXD3et23GiOlsCrrFIDgL9yF0qopAMPmqiyKTEwYxLel9HbeFzNiAH3OBhhmsdSNpEzvmxGdeAwROMlpNKSp8OunMwzGdxy%2FDAYHQD6MMrkpfe8CEmvLEWuBV%2BSbkcQi1w2cvrhWwNaRgzE2hn6IIERVjvIVlcOzEdEO8a%2FgFZX5TYYOAJur5XqeKWvXoVk1PEf4XSmYi5ExlEg3x%2B61gxDP2oY5FeTC0HX%2B30sfYSAISQi5bjjAvcGY0qIK1CJhS6ctKQ1EfXxQtG7AoECtX86C4hPH0BYUrC%2BRNC76BeJ%2Fn%2F2C85hToKnZnQXAP%2FCBd7SPFIURk585hQWed9pdrQkoHsrlU1i2D94wwmxH3LFXcNot7nT8tKqdffAWMK%2F2%2Fr0GOqUBnRgWekFUGCid0MOerlqSXzI2v5v4aq1RyiJfFJkhPouF11EE25EAiTjEUjs%2F6b1Tp6VHT83Rc%2ByHjZYQlbFkvQt4xIRBIlldSGMfVZpi8wDStsZyukt5LydSj%2B%2FKpKB5tu0diyKgHaWSsK50JXg28q%2F8GZP%2Fxc26x%2BK30t52L5ZWK58XxESmXjfp1QCQmR%2BueOOAAjlhudWbwAgkJiAWMsGmMBac&X-Amz-Signature=029fcfc8595ab150966b8ade0df52c4d5c73fbbf1b748b69888dc892f5f4dd3c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
