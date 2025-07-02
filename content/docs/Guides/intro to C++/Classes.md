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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6D555JR%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T061407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG26GeVz35cm3GyaYhy%2BjA%2BZ7SwYiwavPG6tEXc4mDYxAiBtUbtDEY%2Fb0pORN9kOdL9I9xLgYgeAqRBB83sZ1RHpESqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh7QTn2051mtAHO%2BsKtwDe%2FrZ0EsRYo9haLv2YF1%2B4vrTVTy%2Fp8Iudrmv2DMT%2Bf5n2LVllzTVmqDu18NJN3il8gqpC8ZEMGIVBOfpQSHOyohcJiR3SDz98dRLplISlSR54XMajVzWZNexvPXBApqmRKyY1NaTTYA6sQuUy7%2BffTeGOwUaXYabCv8toczI0UrBVVpd2Ciq1p8wHjuxbD6UiHlEMmvQk9F1gz0INeZgHGES3UPV80TbaHp2QfCeYGCIB7UvE9l3Oz%2FIrTJf1x3lEwxhNS%2B9JN92j%2BEGW1vNvvAy9anCLZYoOF7GqjYDiELytgg4TxjMJfftQCDbPmBKphLbSVclLypvNC%2FY4SlE7%2B%2FAh26TdWdvmMBcDDfGlJ6bBbSvsgQpjGvdu9YcEv%2B5nKWZ96bA4MnKMrMezhOSKwjBUV4Qr3DpcPlq92XzcwiOGTuU8eDrI%2BYq%2BgFYhBGDJ%2BeJto28s7xoNpOFhC8H%2FQMgXa5V28oy18Y6%2F3%2FojQY03RSiX3xu1E14EQqDjsD2JCYDY4U%2F1B9m8CmB6FpCqfOvniThG84DxwRj1F%2B431Se3CqhKHvXDbO7TiiQoSZZURbZF3JDelQwsyNNqUv75yxXVkk4Mj4k06x0vxIxDziE0zDclOyE%2B0SmxVgwg4uTwwY6pgFLtT9yoR2WL8Uztlwyba9Agy4XW7mK0oNUmKf%2F%2BEABs1aUwVnjTX7a3aRqXqDp460XEBwRDwgHTbMiweDdOTwockI6iuSKuEzp58oBgUdrh%2FD05R2drwmKh1GGrYKtvuxhspl%2F1o8TJYTSushDgMCwX5b4t2szCSVu%2F%2FPecsiIS6xkykm6fCBtdmw9gtJm%2F9658C7eaH0T%2BdB6rwRpkYp6S7p3q3uz&X-Amz-Signature=56cbb01594b5c4229bbe6c7e79e3ae73c21ea29b5dfade5da6acc1ad366eee1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
