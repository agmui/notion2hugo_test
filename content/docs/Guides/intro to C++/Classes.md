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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBASJUA4%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIBFGFLhOAYwGiIazK2%2B4leg9DJQqElO35Tu2cANPF2XpAiEArCRrq%2BVf%2BtQEau5%2FJzDerOGPsJi0INosJy9TttXyxKAqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvl5TKBf5c%2Fix6TQCrcA0RpNBAtUiTO7FUkZkKhhqLAufa5JYMSyOsV9Z52kBcRwi8pDawH4ItegMKqPKopob1dKYt9QKnsrrUECc3UYwf1vYUcrgprw8D6RJKc0Q30Y4EC2dkDrOd3TR04GMuB0c0CoI5JmhinKXUbq3uFPD4uNoJ5GoY6OcMCVixbq64d8WoDDS1lfB9GQS8%2FlczgWqJyg2etB7Vi%2Fz6fJ%2FmMNhDXl7cYyw1HiBmr9m3CsnTExLJt2ulOV63nLRn3rzuqAhmdp1kgkQBMjJ%2FqOi7wrgYL2qv5BsPrVctHownsWBOZJcBzszj%2Bnww33ixPn%2FaajHG7Hy6knmiQJFo17xOZHvqtEdLUMZAu7Ypm6km9IWPv6KIOXRQ9LC6x2FPulMJ%2BZXP1kBW6bLC8zaaGmIsOM0iwa%2FbhDcKWnl8BaWPg0ifUvmDYVGLUnz3%2BNyHO8RMS1XCP%2Bw%2FJ9%2FKwj4olOp%2F%2F7XRgNtUPyalPkN1HmCzgWjQts%2BEBbgsQAuZFA87D6%2Bnarh%2FK1OOrHazeidaRvXPhSGsXXuaDEmY0I5evPGz8kS%2FZ58XR%2BvPo0lpqq5KZLba%2FxaGwUCtxj0ypvNLwyhbRyUoGIbG8TQuH4FF%2B12kv0zrvskTznStccpxfgtmtMKyJ778GOqUBTjJKTBptditdpngzbdre%2FqzM7sefqkY%2FX8Bv0byGM9KsQnaOdEULiuA5N6lOqztJY1xkuH21KO9nnvjyxwpX6De4FAHlXQ4BPN0gloO6gmsuqtU31AIlXCGYfMU6t5JIsHVGgSkFcvyTLmqKEl7cFKNf5nwUCadLGLfQQmyQWOCTVtwEbe3YHB%2B3tBdnkVfKdhEfq1DKAn%2BErWWntUn60GQnICBw&X-Amz-Signature=f18b5f5c4325db1fdf693859b55781256eeb08ea35a979891cfd63efe6599bc8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
