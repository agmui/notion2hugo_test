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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R65U7LQL%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIHsm%2FF96ay28jJnSnjhw2cMi5IcdF180MVYsgaSlhm0NAiANAVZTiycuI4I1oyI%2FTtLvBDd8Q%2BgmXOEedjwc%2FbsrqSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM9CdzWHqumtsRJe1YKtwDEhc%2BcHAkW2h3i%2BBy4Tqj8T3GKEbPFqPe8TsY02zujy1PINWh8hwrkZ3Y50ImFynr%2FGllY1zkag3L3T1o9XF3Bd0Rt72R0rBpB%2FxdEQBgsOPgzCWU9lbuQEr6Sk7Go5pcRFJXUp%2B3u%2Fl9cbtSHkg2%2FksJrkldmvTSuQSAcHLMtvc4GJQNZuYg4Vo7EFpqo0BoKR4t15k%2BZBroOPAEfDvDmr6nux5RHaU6IH6FC5yzNr%2FWMzx%2BY4W1oLooMGtKS2nL%2BXS0p4krmSxdrOtze5M%2BuZVzfWwwsD36fmXMW9JFmbY%2F3Cg3DpyX9UP1wE35v0mZdYGgssCxyTsAAUYnafI7nRznkrip3tLG4imgLjSxE%2F9BdEiLlkhDqkAi7wLTyZ5bXWs7WpTvnnGeXhbxhTwJPqmwydJVIhYR%2Fr7PW4vUt9k7h8OKQLjaTemKOTywMHiFhri%2BIX4svzDtA9eeTSgIp5UvcJfcEl0Q408xllmgTMFTX7WZQJPr4E%2BxMNzd4AoM0QgaIlf%2FuxvtTshg2Vf9KG9uxAw0XX%2B5y%2FzgpCA7MFieAR70ERon%2BiCE4F2X4rKp%2FsnYchhFwUImiYdRjOGXKgUsuX73TGDhozz76pYWb8Y%2B6u0sQxm50r7HqXww0ODqvgY6pgHJk7KGpHSbP8%2FHj946NbW1oIVHAkGNN9JGKQcTouBBVsbf0DsMl4SIMu16VwncRbwdoY%2BYLNL87ZyQAvH1DWt1CcxroHUcM4t2UF8XTL7P4R%2FcAtVT254d77YsCHuOOZRG6yc%2FSshkEBj92pbHw%2FV2slow1zz71Te6DyFoPEHLOBkicUnzTJwG3xYb2RT88LOLqH1C9hijcv67urImZYBNvFsUTbor&X-Amz-Signature=520f098058390314462370d68ad4f86f496806cabc44a430a6898b1e7d5b1e3d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
