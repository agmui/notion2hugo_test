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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673TZ35A2%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1OZU4Sy2F2924XkMFuEdr4ebBg0df6PBayfIpCkejhAiBwTj3gKpe7My9Vpmm%2FW3CfYbGK%2FjjyGkWCzevORLGC7CqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM07PDla5Dcr8%2FRhSpKtwDZXladQNW6%2FStIxYwAfOkBu%2B9Aef4Uiz6dTtTFIMrs%2FbJc6v0uvvwgWxCUSEx6nPmDERQ29o8mz5EWW%2BrfHXdG3vjTuuTo0gjBK%2Fr6Qkz2dCpZhR4wheU9xYz5ZFy24qgODc2Sa7m0gReSzyCxlZM8zCKfD6HU7aWi3YgARHLEPT5Kp7vn%2B4DvE4OQr%2BqLmaFOux7037w%2BivTiDfP%2BJIXOhE4F4c7Ogib3k7aWIYkvR7z0QHp8pm%2BLpiFQs8JSN8WHUrl851zOMNgPeiIn0RQFXfcdaQYKVFDmuFxnnmYHKiU9SyguQGgBwMmhgd0ZtzkaAPbxaC6aAsx4CJz8zkPkvYdyP%2FUXYRvBs16g4IAU65s1Zb1f13skofzNfaoLfYaydWbm3t8gWcahZjMPWzUzNQYXYwBmsO%2F7SQZpYqMV6pqjFyx4fpE262EDWu45x%2Bs%2Fh%2FT5mR2%2BT2W3OxYFJnTDQUXuSx4RHp9v2upyNaz9ON27x63SR8rQc3IoXyJw0imcHOYNYb2ISesQ5lPDFmdKSe1usC2cSnlc4c%2B7lcSG5o6IWQwrkDtb40EAav%2BlfnRZPXrX4R2Wk8IuJbsKJ7hyJ4Huj6Cr%2FfwzZNpVRinPDyQZ0utzbZAy7jdwxIwjqf2vAY6pgHSixrLnpBZEZ6RPYQMOPw1jshbeQvXTt6dzT0Ya5PXsEitsOp08LLS%2BPKGsxzYWEvc90Tl5mQmJasLQXrlHSHUkmfYGyMYwWPhTwHdsgO%2FLss3bTW42wqtl%2B3sG615upzCjBZKKfolDOlSVoJZd%2FztsY9M7I287hO6vZYYPZRFm5cf960s5VFauK0OLyAFrNKY0WRfH%2BmYkC2VwBon0SR%2F6B1t4puS&X-Amz-Signature=76722f0d9f516204915e0d8f2975c143de4c03edd67022ab47d1bfd5efd7f1c2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
