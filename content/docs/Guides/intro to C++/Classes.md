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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URTURBRQ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIDecML8%2FFuSIBS2iABuh8%2FG4JjbZoJyGEnaX%2FMyi65iyAiAt6R8%2BhxpUn3bCTC4psYZsvFP4TIdaaokn4e4%2FhkLiECqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUBJWCMl5%2FPvRrvW0KtwDOEtSd0ozI4shyVhEuqVlYd8CEm0YumLJq3fr2BJWdBAYL4kMrzZYB3YuoTGn4ggFvab794q%2Fr7BDb9InknZABni40WuXqPtYZhsgF2VBBvcJjS4ypFnO4cGq2D8%2FbxsK7%2FNBYbJUfEVyvCXICRFSpfEyfZnQlUYkIttdQeWnwtEyZbDCAlOHNfrPVx4F%2BsPlgsNpISmL7grnMdgu%2FWNtryB3XIpWEr1fBBG3cYPuOZMmj0mU3MnDkkbEp4SEGOcxAZFFWqvYSKcFPBXrH0dHmj8C3E8HSSV4rvwnHh5AufN3W9TZKKD%2FVkdQ%2FV6bAY44jgBqHZo5y6FGyAYfYDhO0qY0hbLgN4K9L601lKpPZfSd1424t5bmObjBJmGoIGMUAK4QHztO8ljBx3s1TnjT73x64K4vIOnHToHXMsclWXaq0aZ4zmf13S1REr%2FxDvV006ZPRxhQwXMgN%2FrS80CSMJ83lDj4W6RmMzRXc2qqoA%2Fxzf58ZNEperkvA1IYNf6wk3jSM5OTEh7YOVAgU%2BpHUdnuEnf%2BiHE%2Feu9XPu6kxF6tyZIH9%2FRTf7%2BDu98UYXDEvZW21NGPYpshU9JghX%2BqSq65SmPJdAWyTC9CmOTvDYJNx4y1yz5UM%2BIq6aUwvKStvwY6pgGo9PjcRkxgaC6pDfODtZWDQdFN207tO8v3KsHRJOOXx8hEBUoz%2FN%2Be5smtjuZeqIUGQ6M%2Fm3IyMfp89kNUNaM2HwojiFOSDunntggYY76V7fdXAjg9xdTm0L%2Bg5xtkIz3sBl2VMHxdxcjyecO%2BGhmd3Yv5nl%2FOnDSAeztKFGRiQMzdBLPyeoPCepX5p2OIXzQvTxNRyFawu1MXPKsyMEO9KX5uJL%2Bk&X-Amz-Signature=971807000ff1efd329f8649e22eb252ae0e32ca5f1a42a8c5d380f51430625ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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
