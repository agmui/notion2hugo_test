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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5NC77OA%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCL%2BrM2GW1vfumI6Q2IogWO6MuhWgtia%2Fg6OzLxj%2BKcmgIgG812ixhlnFDMg9HmTfMDe%2BLvgRS97IAXwYmO5lgC%2FHkqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPG31IGz5uHDtWZG8CrcA%2Bp05S%2BjjL6NH%2BEBs5w50lmCDrQ7tCdqPmTNRAoMlE1Tod55q6Suy4lgbkwgXySRsxYdSPAeEZYvYw72ZiPziQf7a1dV1h7wTwBA5bFS%2BVUCkiBi91scjL%2BOIBonUTEU4g%2FK9gPxKPWfBd0Cd4U6I5EpqaAcO7dyVKSrZuOSExVxo0CQC9F5k%2BGVQauP%2BGiOUWsh4SO8Q79OBzoK4Kup%2FUaJGQ4WfP8aBQdmWHbeSins%2B7vtEUvkw7%2FepbkTVcjSp0Fsu8nngFydTyLnRyi0fwqT5S6TGwCbNl0W%2BrOTUf3sAGUEZsZvZnjXQw%2BaFTX6qaFWWOFKnwmaSwL1OW3HsO0mnkS28wBrkSwPtSCdyJ8rqXpnM5jJUGr8yc04ChQeyLfC3Q1%2BTeHgmgeuiVVsoNI70mki2ZRGA5%2BKnS98o6NJJlTrM1ZJ%2FVu25dUC%2BpsZjb7HtGMntl8lS0VMfeZW0zirav%2FmBh94Yqx6K2fp215dORN9eXmoyxhLZhAM8PwupZt0av3OEz5TBiZgxFVnlJow4%2FUyZEvR576L3uUtjiWnJb1GKBf4lYFnl%2BuXARPCXqrQP0IiEKlMFqSZaYTXZSgY%2FVn18S3Dxf6cvz4%2FSN7UOgR2r%2BOiJoMZVNNNMIjkx74GOqUBiM2joloszGBRBdoiwKvHE4QYRdog5D57OTgTGOCtoNOrKusK%2Fs9H9ZpsLPDOtmDNMU0SULylXYkd7KC4uZP%2FIA5GGCESCFs7cZgOSf1ssMG5lIXDHwr6o%2BJKqRNqUOycJjiDq0hJPWS4L644S%2FmLTM46AND%2B1wI%2ByZwW3IDq9Ua4QXcMNV979X80%2F1uqFw7ZFcIQDN4aH5gF9%2B%2FtC4t%2Fgai7h9B%2F&X-Amz-Signature=c60a8576c7d313ecb04adaf415195dc62a8d00819efc93cfa151e8a9d6dce784&X-Amz-SignedHeaders=host&x-id=GetObject)

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
