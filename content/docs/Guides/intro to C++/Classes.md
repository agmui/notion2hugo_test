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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMCIML4B%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICG1E5Fli8Ol%2ByGedMJV%2BMdbKchkOdkyKMd9KHeSu%2FitAiBoGUIB%2BwQE64auc7vyYw3BKiBIkq0QHzTa6kH2H4GaOir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMLUbqmqZuDoa5bSMdKtwDQ6vUwaibBtvl9f2m8WY23eM5qLuF7gtDpER%2FnEHRbV1c0tx6Nvd9xzezF9L6rWZI%2BIxfEejBaUYqJrvKMFPljyV6H5bLNUvlM0wJmAgGjTBoj9qY4C9aVm0z0vumBRU4ahKxms%2B7EpNXz0%2B3M6wF0y38AcQcovV8SyysXq%2Fprj2oVlCcLallOJ566VqhASujKUw4%2FSSAC76F%2Fju7iTBl2hNbV5pP%2FSgSnaK1yeCDoft%2FjxTMtZJWmxOIGnAEm2xoKE9Pg4FxisORWb%2B1ekcO84UiJssJvku4ATh8eUYFGzX1e3Euw6UBaW0J0vqDVs1t4wB4FbsxnQmnCspoALoHD0NpFI6%2BC8qxrN03j38%2Fed8gRNbIFxrCqlOZ94n5Bqiqv14sQh1AYbyKAO67qhQF23mk45tf5%2ByE3svSCIz0ilHdVp7Atj7puKbAFzszfYraQes0RIEsb1zkpVYsIu6BT7eb48OwmXM4ilrbTjdJrylgHhjo0jmtA3R4Ujl8Gm24OqJPCdMMgvpSqqM6WEQ%2Bl54IaPf9kxDNltxopKTNzVM%2BziAIxd5S%2FivOaRbD90pYDfe7kcXOY1cKGPhfmsFWBBexYSUTVTfHVSIiGd6qd50iKKUZTlqJtLI2rVoww%2FnT0AY6pgFeyJWcE%2BYY0QEnjaiqsKDX5S0L4YvtJ%2Fvg8p8%2BW8qJHtHRiRRPSGdbwqTbyIYZ%2BvDdsD26PuDZQMKqY4Evev%2FXqLrXZqLE7RnzH7tPA2a4zM%2Fr8ooInq0Kj0zMcO9sO529REUxH7T7Yq%2B7azF%2FX6P1iywRt65X0Lrqfo4IPKshCOoP%2BjD145roEZU2W7eqnZ%2Bo15spa3L2ofKfS666zJQYPBsivMN3&X-Amz-Signature=f5bacb109f6e68cee74cbb42f59f8adf61bda02043793f17080e639661b50d00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
