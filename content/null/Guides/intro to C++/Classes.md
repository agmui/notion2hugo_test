---
sys:
  pageId: "2329c1cd-96c8-4fd3-a4f3-9920d69d1c8a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-11-08T18:33:00.000Z"
  propFilepath: "null/Guides/intro to C++/Classes.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5J7IX7Y%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T003538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIFYfabAoFGgYomC36LuFlBwmQ7m0YRoG0P4fh5yQ79QJAiAOS2wL2R1LeiWAQVZgN7ThD%2BhQGkue5%2BrHVPFP7kuX7yr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMgq7BGlhLBMjtcMPgKtwDbf3ZvVUPRNBmX%2BbcvbDpN3blKbo9QVEHS1Fwc7sDgdFWSiDzIWnvJiVuNOP0i%2FHNiVKiL2%2BN13PlHMy06GH0xT5snIJSUds%2BksgJBmbQsNehgjqahFt2BOQMRtBdnxaVhp7yMe0IWPKFiV9pciYLq%2FpB0Z6LYXRKryCJDffAVgf8XJJO%2FNOpq4p2%2FpbvGxMr%2Bv9ACgwpEcLE0NvpEPEwYD7sZP6CUyOfbD5DI9iCN6XW2ySYePdqMNrGkLr8ZfMdd7xwQ2dscQnTLLre8NICGdwVXC1cYcF%2FzMKbEa6u9zIx4J8vVDLr904YzzrLH2bypob4t2xfCgMMwo%2Bm65BqERDIxQiHqcanZvTvVZALDD0D0Pp1QGiMDrFNLiCfEbzAmTIEl21JW96ncMwEgMNkaRvFRF7A0qIuVGuKi0n3Pn6eisMd6lNR%2BXmrbbMko6IVIkN7Dwfcc%2Bh8kzQ8GdmW7u9wiH43WvfAX89PhcedbLFBoRxBns0DTzqFiC4KSZl2%2BwcOJ%2FbkETK%2FCjyYr8zjBWm9TlS5PO7MGAdx4WG2w6jxf6GAltA6GAkrGHVE9gfTkXcFnqvhvQt7qjPvrxsDDkc%2FVNPbirY7Y5mpe%2FvVURM%2BCtP%2B4abS8IWy38ow5s%2BKvQY6pgH9CiB1NEWTUtoXKg4SbLrCiGHPHSjp5gDlp35Hz3clc%2BbnEKiT5Do%2F7WyaSUtfjCe7A378%2B9XYZsS3hEt1Y5ybKSQI%2Fq59kdcG%2FXYXZTRbVNddtvTjclEJVv6ImMLwNzWfnHjVnqy9VFMWZOzoLb2SuYmBtD7GACJxDOMbf5qxeg6Jv0eJp77yWJHNiliEuaLhLXS3%2FM2m4FgC2LJeRBGEamCsWxSI&X-Amz-Signature=dadc3694b1a3f4b9e732497b8894ba82d27f7b7ddd11bab9826cbf5720d19189&X-Amz-SignedHeaders=host&x-id=GetObject)

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
