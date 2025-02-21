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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QISFTLL6%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcl5WLoMFSb%2F8uYTWw8k2gf%2BWrI5H0A8jgDe65JsYccAiEA%2FRrjNSKVWoEhaIlzIE%2Bjgmn4VBFh4nd%2BkN5lPyVtyF8qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCO%2FNDu1WFb3XtGIECrcA6pOX3SCQZcTMAFtVCSqx0oD4hvkp%2FmLpCaX0TIdhLxv2XYNtQ8XMceSO87chQyk19JeR5ezV9R05eUxdv3%2BspdXx3F46VuFF7NViMjlh9zKA2mxPbCvXGqxc%2BdDdf%2BkLMpe7LzU8%2FIyoxAoOivNNrsh6W1WGB5egFD%2Ffhh9k7l3ErUyoMThpqinS4XUVFBIdc%2FTq3gjlWKKXv76u0UhQcGvSQQ9YUN31OQb1ImbFan1HzbSbepQbE7PuqHb%2B210SWA23aygzZK7VHriBA3P2FC5X5K6bT%2B2Y9uNM692Ticdw%2Bglxlo8%2BkLKcX8W6BDZ2HNc2aXZ2KNJa%2FbGysMao3babXWoiIGeiXQ2%2F1RrglSWQT6aR4FEKRq2Y3hysXf6huLB%2BG7n1%2BgLOi3tyJs9iNocnVAaSdal71NSXyPhLJf9VbQz4QnHwS5sxMrfspBiCXknZhuMANooGKNxRxw5P6I0loIRyU%2B7LPO7VzuQoCnWyFb56STIw1zIQyS6HJtBwp0gRw0%2FozgekojT%2BfI%2Fd6pLAILIA9pBmymupyd903E2oA8a1qoOwmZDqKSdn7jaZ1I465Fef9h0ge2Wayq%2FQhrJzwik2PaWp0Xd6a%2B33UYW4KxlW4MhfZLuFSjOMNzj4r0GOqUBorHVaSRldpMk%2BbJFZAlv4Ct3uw6sxX3J%2F7BTXDPevtSd1C3s7g1lhS8T4P9ayGg5E6Z7dISe381DOL%2FRyI%2B77hxYbvRMrRYVMr4aiRP%2FKROVVKbhmLzAfR5wgWWW6lBCZfYXF9jsyGGUqgnMzSWrKBu%2BcKQ7QHA3Y9N67itv9xDI8ZRpgfKfohI3QtYmVOhefEPcxazIChFyFS2CUafY6LPm7nbP&X-Amz-Signature=4585f21d207f716f86870cf1c80cbb648b441b3d8f7bf4db0e53774b280b80d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
