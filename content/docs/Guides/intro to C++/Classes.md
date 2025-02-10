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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLSYHD6S%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4oKgE9EprkUHvoVhQSfDAsMEZqSEUVSS%2FEamllHt5fAiEA%2BXaZ2tRelp2U6Lp6y%2Buy47VyZD3HXcRNb1%2BExcFmqqwqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHkLzO%2FRBRtImEd4SrcAwzQ1xVBCPKgPGc7JZRRWG3QNhAbtSboLIBquhOwaDs934llLSQ2ZELtUKl4gwITWabYjbf2S6jBM4Vg%2BbxwO7Wpa2HrCZXJipZK2alSOkSDsqhgtPk67Cf0N9YoxGgFltG7V9X4ofLsPcedLdKxVMFCSOhUSVs8f4vW%2BEjqHkAOFyoYGZVj7whGGDvAxTH3npYTP0SBZoCR9EYE7S3E4wj7GWoQe%2B9db2oopur7d0P1OGFtdWzPi%2BuLb1ixh6Xe4xSe5u0pYxzUZ%2BVJuyeLNc51cOjldBGPDQ4vICI23%2BRwrnxTe%2FLyuQgVTrBY4KQU09hbkboeUiSWfPzB3KckX90Ga9af7y3OTbM74PJbuMCr6a0Kqpsiy%2BAzuEDFH305U3Nup66CiG90qW1jNNd5uDJtZpHqUmRU3VgTilG3MVn%2BIZOYhL5jVHSd9xI7NzBZ8ewsWr3hJLSy%2Bplo5fcgBgzQoborhObSzo%2Fc70kg7d3LG7p1SojOgnfZ4gCjrNl6UOM%2FyC4gzjvqiD1F4nVBuamoZJeHIMoI9Uwd8HSbOQa1Z1GN1%2FVNR72UgUcnFr%2FqPFs4X25YFBeWaKZ7UCOi1hc5YHnNxL4q7y4ASqEori%2BAmtCCKDjkibZxDQucMPubpb0GOqUBvdq15trz7jeh3RJWRvr9mbuE7HAuJJJB%2BUKPbLW0qri4hpjwgm7Toyc4FqewYx%2BC7kd0STqGA39S5a%2Bb%2FSB0Ghn3g9%2BAm%2Bp%2FGyHLP2u0OP7EpEY6nRVRw6OA9ZbZ17H9IxVVmPE%2B7S52ID3joYhlnKo7KjNtn2BU9MNC%2FOnYSpwI3Fokw9nGKkvLHV4%2Bkv5dBirSONjYKquy4XCgqVr%2FBQl1FDaU&X-Amz-Signature=b1bbafe1f962dbdaba49ae8741b01e5b7fe2396460c8076d5ee986cec9a2a684&X-Amz-SignedHeaders=host&x-id=GetObject)

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
