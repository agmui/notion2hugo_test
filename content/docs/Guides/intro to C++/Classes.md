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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU4IZCTA%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T032800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYt0%2BpU22r3s9l9jZfQaDwxXPP5fkK%2B2cyxbFx8xyQfAiABPj2iOEkP3VLlVlOgdCuJOg5i6PQdfSgkGf7t82wwNCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMgU9YyocKpYaQUv0uKtwDgQWyWjQvE9m4YYnxlTqbQ2YN6RzIucRkNeIrDAh1XWD6Pm%2FqegyiWz5LaFxYA3Xnvsk%2FFBKdm2G6swAq6GL3BPmGOfWCyRcmuxGazsyj0xNJwFrpfGHEVfLulYswSTAMSrzoKpc3qjtt3Y39WEEiWwCuOhf02okTP7cDM3OdISMeH0Fw0mGJFXVfYk%2F5PZe%2B0i4mGMgMlyTrhe03rhAdz58e2Jv18XSef4Yw245nZmqDgY9Ur8egm3rNWtSvSVgFGrR4591bjN9kEvzMPIJUY2PVeafSJkzCZjDd6wERA1%2Fy5axgbH3%2Fcih0pcAiXFCkgITummIvDSLbjMEezNHLA9YGzLspI%2BcvpdmQBR3g4Nc077asNHc9iIoh0R3MS%2FkFa1m5by2DOW9auIEApcXFCPS0%2F0R6Kg36znKqMSXrB11vOAVO6vt%2BUrrg3Zxlieu%2FEN2ugT%2Bhu2NiUv3VkTlCh79t%2B5Sr4ITG9Ug%2FN9Fz%2B7KA%2FzlN1VqVuDr736m16SOYeFw5f32SBqLOnRB9%2BRINe%2F2Gf%2F4d8b9TxAdmnUt5aESSluDDR6i9wGG1Nerl6bkA5uPzdaE%2BHPi1pEmeAv93RKJg%2FRDOkvM6PeRcDESfRtIC31%2BhqXGMBXqTxg0w%2Fd%2BBwAY6pgEPlt8n6PrxWibuwvPy4yREif5wUmxOOgLHhbAmP%2BwtGkaabFTTZNPAARBSDcclGqdRTAVtolY8rS%2BLgdsZMOzuTnZ33qGh4FYKDxmzU16XazTC2xIPSVsDrbCkkltYnGEr35uwIK9jHxt5%2BicS0GwJ7SIcNmVap7mN7x1r8GZjyj3538%2F0l5FmawiBqT6E%2FxzIkgE52K%2Fy%2Bcyd8YLy0f%2BL5yey5GQH&X-Amz-Signature=5c9616dab854df86cc68af758dec8e4a597f01af57a4088501f6363715fbdb26&X-Amz-SignedHeaders=host&x-id=GetObject)

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
