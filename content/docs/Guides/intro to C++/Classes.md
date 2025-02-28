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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK5S6AKO%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIC3hnY7PiEE1ePfhO%2F0e9yiWfQlNlw2p1VMwgHgT8Wt%2BAiBDzeA0Ud4bA9uyoTAyffztFnVjgxnHtZ%2Fxatx9Tf5RiSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYS%2FGi%2FpSSym24hyOKtwDoh6GFemdfU1pFGJ2RFnuXetb%2F0D5bm9g6EGWQiQOQBUdhVRo4NMvJ9MonP7P%2ByeENIa0Dqnja%2B7LUU95fzkrEz%2FnSgkOKREScanbevYTyplQ8zjylJo2yZ89ZhJGfEkJrOoH4z%2Bu1r1GFIpSuHcs72y3sDDxKiJ6uBoeB20ICA8vkzrALxw5%2BXHc2vmn4BKHnfdFkn4PEbInKNJbZ2V4r4TdjNeh92a1m3y6pRGOKnFkJpIusElM%2B3WqHz40m%2BTYzhwKvxIRrqoZ4d5LG%2BpStb1z%2ByGpIJOVNn0ej6bDUI0wttmfB7pcJd9FxSFpE6asBvBP%2FcscJHOPnKEqHJXhPq32teBwG0ajIjjKgwMg7TiVjVmP1nzal%2FiElaBrTCL722CkmxUpbyM67u1B35J8dLst9aLdDy6Pdz67RRyKyiGCPDhGF2UbO4o1bk7llDdqbUt64BplyXJglUhQC6mb89%2FVCUN8NH1Q9tXVWtFZJrTW6nattGGEok2N%2FeE8SRHEVDa9x%2Ffk5aobQTaTUi4BAK2DihgtZDv6qIhkh12Sx5W%2FbRT3Vf1seatvbtiAxHLRHzrrGiLhOv5vfdmC6PpOG7rmGkMmhzAFKVtyAolvnmkSgW50y9aD2MFCvZsw24uIvgY6pgF1m00di7o%2FMoSd%2BaLK%2FzhD4Y1WSsPIDEowFrebuBjrpE1YmYjWi6xROBj5sLARuuJu0bT7YZB1P%2FO92WCv0pJTaok%2BkTie8SiWHKUBwqktdfL5w4%2B%2B4Fx%2Bg2a51QbyZJI%2FiE8Gmv70Zita2FhAy2mfVMrCcfTlfa7ZE%2Bl0tP%2B5GsbSaTBvWj5bjr4APtR80E9po0ksRV8SxYRtmaN%2BEmU1DIIh%2B3JJ&X-Amz-Signature=36af3a76a125b427b6c31b52bf652ac4d5300a70858a708b6714551be3f163e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
