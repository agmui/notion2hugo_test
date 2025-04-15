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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWVXYYKF%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGho%2B5qF%2FoX5NdKK%2Bh1Nburl0Z7XKO59dotvxpoYVLb7AiAxcTrOH3dhiwCRtFWvzfYKuWapEaTFyVHt53zdEw9lcir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMY3GlSlcPmqJIma3dKtwDkGUilDhfvK58teLOie6ssuihY4GB%2FU0MacOclAziRt62DZSJg5xe%2BijBtzXOq7SKC8jb5PYsGP3LWanppgNQnK%2FxJsrbC5zmI2cO0pCqV9b4Z9g0VMHzO2LhUZopJIbeNkIzp79obZcIMCNCbc5oJ6%2Brv0YmlVOQHOfSiXxFUSEjpfysWJKq%2FKjN2N4kpLbJPLXhFLVuQcIrCP09ZhfuK0FfGhd2GKnGk0%2BTfDibSfk%2BF5dLwU2p0VMzH6ij4orFX%2FhAeCHMkuzwDHqCuhPWZseSV7fcAF%2FVlBwr%2FeNFT8Fcr7X6Y%2BXBCHrZRkDzfhDFWHcUmusldepj19gVKkzJdQHdxQDiy%2BXQg%2FkMef1g8ezQixIYBuWFbTJ3lAzO4hRzsCuTnwydI675LecDbTRLSg5OjnWJvTVOQCaBjj6JXP1tlXSaavG6ZRjQSKstGMEx88WOYxH33Bw8nN%2BqVHpGsNinDKQIkXdNfwJPI1ZBMOUr6Oz8%2Bv3NvD7sbJsGsMeTqD68CRRdaQwdY7VPW37e3UX1yTaq%2BjR4xuk3E51hkkMi5dhwBvgRoQO35egE%2FQGDCII3S%2F0zikJlR7RtIFCGd0Wnw%2BuqqaqEFO4AxdEKE7yKynD7AN7ayp4tRK8wstz5vwY6pgFaRgNPlhoV%2FR8QmBMtC9U2VZmDztHg7scLqEDfCItMKq%2B%2BMP71gVPjlKfcCY6R2%2BpMFxlngSTtRTBXC4TQHgIhPPtM3VEWKNed4XGVNCc04SkhHaFm5HNQ72GvUTL2Mg15Q78enqTExBDGsXAN0Thub39226vkHKQMAhFDxsGdDk7CrIYnSeg1U%2FxCLU20U7kg8j98iLn9ScMJgpUdh7CPhGWo3nNu&X-Amz-Signature=fb81b22c19658cfa6dead93c462349db22ffe76832ad034ffb4cf000536db9f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
