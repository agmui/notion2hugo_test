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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZHBEMZ2%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T090941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIB4YFo6%2BtxFsCBDyYbdBMoB5pDK8Ve8DC8jldLKux6q2AiEAxoGf33NE6A%2FEy98gFqVDjPVahK6yUvDHTZlc4EiV9YUqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5TG%2BMarkNTGxCwgCrcAwsQXdTenjO7QYIt4uNeuvHi2%2BTXz3XLzh97S7tBNDpsTcWBEskWLRliZZCqcVdOVWUlJPvQiPV2IbIZ3IUr0JhHzPAhsN3tyYUvUxMLCWBvTHVwMYrKv0VyZsa6qtHNdaIUIQMh80nUjHWHitULbP2pwzGu%2FnYDw%2Bra5icKe4h3WjM5xdno6UD7HHmSDEvKHbo7ZHv%2BhJuE0Ows%2B97mHsdOcfFIeK77y%2B2dk8GGp6KGu%2FqUBcqr9BGyuzqwv%2BiLK7wcgF%2BIZTs%2Btium0jO9%2F2E9hO%2Bf5nG3D%2BIeHge0FDR13dW9qYXSFQDXelIrW%2F%2FE2xHrIJzeWRYxBA4yO9O%2BEfcgbf%2Fm3%2FWs%2FR9hWkmM4YuaxBra2hYZTacgFjbNInn5wkMo%2FyhMHM2eIHaOX%2F5oNqlpmhZSnHPoF8Ey%2FFXGn2Fo94qlzf2CYQb3o6OTwaQmjUUm6%2F%2BL4ev%2Fb8G8AtbJWtsdc12D%2B1oikKAP0ABg5ryWVXDOby674Vl07tB0kSWpkGxdx%2FdaRgGbrtg6s9NG7U2ztpbniVDYn%2BmZpgQVxoAs2UZyS3mV1SqJPQ7fhDfYnmchNr6FCKRbxkVLQ8zo%2B5OGsXsIMNys23X8xxRn%2B%2BbDavCWavapthPG9clSMLXGosAGOqUBV%2FeuBsv86jVCDZ7lbrS3O0AFAOEbL0Fj2L1cxbI3x4p5hb%2BI9x8Aw7IosOQbEOBI5xsuxUlpk9P4zrEjmd5vLmEUt7Jjn%2FiwBrm3xzRJl%2Bh0d%2FlrlogrIZD26VGaU8AM%2FimWjvPL%2BS4HGUEdA%2FUT%2BN2wT44JU0cqzag9Q83pnlpbsfcozvejOLcG3Lk8nUk6A9SVp2JENbjxpuMct3Pcn71ZG5fx&X-Amz-Signature=5947ff4ed1bb3af6ee02509018fa06f033361d6a5586c298c744602cefdbb69c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
