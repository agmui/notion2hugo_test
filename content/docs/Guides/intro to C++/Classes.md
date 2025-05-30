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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH7GZWFZ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJBgz2GfW1WaNb%2BTlvmfor%2FqBTxZnrmv4s4Zd2MJNYyAiEAzjIhAMZPIGzjWg0ZGOZ%2Be0mmdjeGo4PdgQ7KWku%2FlOwqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnVtTMg9iEJjU57wircA3X3TYl6aj5nHc4Zqr0KbMsZ6SUkcQa6zEjNF3r7TbO597oWeaOhWXJ9Ep2aAEBrJ0z4aAwS%2Fj9KzYQ799WKDrfmgeI58kJiPfKVnQZW2ompM1KBVJSFtFFN9UszixLHgxKVIrDr1e6wnt0KwUX0BaAIQKMs%2BIJ%2F7iUK10ichx3P0kN5CTZjAKiBYM%2FhweIOWvXpxHvo336RDWqePwn7qsS7NCDlqSRxf6PcA%2BSs8Ybe%2BJblaHNOChdFBQvp5IX93HSJ29TqJi%2FpF1NeBeOMPOepRKOHN%2BvEpqLcF0v7ydKwsxY%2FfzF%2FEtUlHviMMY6TDH5itqx84gjdxQ4j1%2BhFMRpmA%2BlCZnVeoQVrgOSticvcyUOAIKGE5PHCuLXbO3sHskpbVW304EIh0M%2BcQRFUyG20NNC6pIEExlDRGDfC3an8b1%2FuQSzkPNXvjAoLhm9%2F7RvUFhDbNvbBGQLzdsUaFc47uVZWZnqOErMC27XAkrj1tO5EH6SB8VBs8EgORgO9XgCODagpyB%2Flqw5odUZ%2Fk0LcJ4s0Zcxp1h98i6ZUfxLPiCgehLm%2B1%2ByfD8NNPfmunC%2BW8gKzBga265kb0BvpNsgrjo3kNP2HmhzPu%2F0SYovvRAn2zQZsllxkRHQNML%2FP5sEGOqUBZ24Z8DAXkv1Mks%2FIPeC3cjEMz0S9Esqw2whVx2fPbR%2FqdaN9hBDW08sYnii1kTx1e%2Bwwp%2BRLBGM92mtqXYulI%2FynUu%2FDSwOz3Fz2kreBE0jeyWyOs1TrihjfxSCPS66wx3f2w11j5sub5FdeZJ%2BZdp1bhyjrrNvL3aX%2Fpf4%2BQRhdizdLhpHQeQa2ZpQMnVsi7FibXUJFS%2FtKQGwi5LlkDI%2B3TDlr&X-Amz-Signature=278dc689ede8e6f25f15cba0cdbef47e45a0225a9b0fa67df7b99d3173070242&X-Amz-SignedHeaders=host&x-id=GetObject)

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
