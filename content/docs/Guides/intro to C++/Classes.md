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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3BQG3NN%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQDJbnL52xbQ7clJ84USZ0awHwg9wGVGhz%2FI8zrIMv4%2FzQIgeY%2BLIGs7ZXCOv2LQ6ipviU6fNeIlar0lMkg99g3mLAcqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5U4ZOpli3KL1o4nyrcAxr6Tfq1QaGVOyAR7VYd16uVCt0ZRvTeIEEyIrVWjFIHXgd6WbOIM6Kd%2BOUH9Lh7PFB14FusFbElf00Dr6ulyEb%2FteIIPUtUobD9%2BjZqAlkZ7b4qG108avmBJ7V0fms7jJZ98Mks6joC4Cf2XpzrntX3sSV2prnpKrrU7xTuvduxtUol7kM4%2FoxqpBt4xqQoKsEruJ6eIqorniUdbCiySobzN7cjVL8k1A3o%2BgXQNVrV8cNN4hjKTo7p3vahZw%2FPmsy56lIt2NcvNYkXMN%2Bj3xztkqHJaTJy2BBVJD9OTAT0aq83eDvo58ELjeeiu%2Bd9Wrm6D%2FOVpNuLCUgiduzrkBHYg%2BVe%2Byi7cHkDv9jApksy9lV2IXTmV9kas%2F6MDZXgXGIZzVAWNKKHf2ltXvL6T2dtDaPT5KAtLhtrau8bPPfHZiQp8MzM%2FFNrF2QFg2UU7KETRjWBk1BMz6vM6DKcFTCtGy4aB%2BFGNGVRMl%2BtUyDYHyiw0%2BKPXTqrvx0lfXOfZxPQNqnF6T2RwKuQlSHHNfUIRI5U2RFOb0zA6OEYQXJQohBLID6D95duTCYkkse37J899Kt63%2F%2BQAGRaOLlci%2FFfsxG1bP8ChmFfHIv2iZZ9lFieqv2UB7%2FVGiS5MNOLiL4GOqUBr%2B23vLh%2BJWNZYWr%2Br7pOBDzSR%2FyNmljML6K2Ux9rfkYMS6KJXPMlpalwzVpFNaAYIc0GqfsovrdWMbkguXH6omHadi9%2By7A1NOWu%2FFyxDID78v%2FWAJTwt9%2Bcu9OBf1IlD0mbA4HAEqIoPAAydDC1iMSMFv4byaT6T1kbUStP4%2BW%2Bq7E%2FNnzr3rgMQZYGFVY5mCHS7WX64Wkz%2B3SJ41rtc51Qxj2j&X-Amz-Signature=15a42091139edff9cf48f4443451080045fc83ecc5f58ca5659197f7ce9a8e30&X-Amz-SignedHeaders=host&x-id=GetObject)

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
