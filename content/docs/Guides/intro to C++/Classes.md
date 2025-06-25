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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFPQFOJT%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCICVWDSkTR13fT30Arj6nDNE3n6xJCjlNdqtHMui9FixpAiA904atUoxFWtNWZk5gp5o2AgVMWpxEc7Q6YVaoFdyzNir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMED%2FWKKQwe8GozWrMKtwD3edCd4qsF2y6Fz8x4dNITP%2BE9TPAgmazyK%2BIRNdF%2FPyE56aW2BStThh95WcH7b2EmTgmIrzQY0T3svnfJIeflmhlDnSgAVRWOmsgFd1tVAuUDSvTNXhWGSOoInQ7N6yaJ34P8zw3CAp9BWKNSqtSvbP89iveIniLHbldbUFVJjMVtSLSDEVyjzfW7OFW1YqPbY3MVNlquwz%2BB3u5HdjaFF7%2Ff2S8YG0HdXFu%2Fb7iEB0N%2F79Y5GOkGYZJS2tzYxexE%2B0xA2SFEMfdk3q4h4aBV1107CfKaMjvwOaRTe0EElXobDD5JHC5Bwq0PrP80%2FTFqg4bqC7DauzTxdy5HhI%2BZ1U%2BbUUMVoCfyUPtXLik0n74QX%2FfvACPqki%2BImXxi9fER7WNiYO%2FzmRBpIe80BT6RNUmEVbuukwQVNsIl6YfJshP3ftGLDHh2aBo9YrA9QnSv5ocoGWnrIovd2DtrrOY58BATtvmS3%2FQkU1IcTkjVKkfJS2WilGbdg1SELYGZIqCZsfw4RTrA%2BO6iDqV%2F8fprr6eH6z%2B6PC5GAhFo6EHTP4FBVSrheF4A0pDduJ4Eg3HqJ0RwSEB%2FCbsQMipN1cg3mhPpi0pQYd91ieSshYLOydx4Ncxaej5a6YHG%2FkwyO%2FvwgY6pgE8lAcKA1IOMtJtuZSon7FJ5xr63euP5s63z1wM%2BSq3KXrdNTtwHSf%2F0yVPb%2BwQxn8oamn%2BN4TJ0KnRtofF6hITp%2BpLRGY%2BKfqZ5nP3BGmVi3W9YLgcpSxWThmHmfLvx7bWW7fhzLx12qTpBlyp28iJvdm%2Fps6u2lS9rNUh%2FMbyvzhvYrq8%2B%2B6Qu9w2lnLy1ob4cPKTjXTMztUDC1szauP1Q%2BuatW85&X-Amz-Signature=34e38914fad8ef4d2f550061e520809f16f4a4a8c3497ec8e02f570ed0042ab7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
