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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNZAY5YA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAzu%2FW92bUc49Om%2BKAL6hH1SbS6R4%2FKp%2BTphF%2Bc5UViPAiALlZQjcIy77oxoTFE%2BiMDyfcnLbdQqK%2Bwl6xK3KQQ90iqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwvlijEe5gAo7o4PuKtwD%2FtrQ03%2B5DXfgsES2bSohgDMwR8UkgBkTmLmIYzxftroPDVrmGUs3zYYdvC8qeBcwquxZT%2BGVGtf4r33uBILGJ0BYiGO4Ol%2F6fApP7FFJhNUmCDmIlTwXgDe7tDfHUqlKZt0qpqiV2R8KSiayvrfuUqlb%2BkFI%2F%2BM4v6LrtXay2GGZOH3WT6zGP66o8LCqknHLhDZ172vPBdSB2OUH3%2F1L0Xw3S2Ac%2BB5s%2F7N3SXiTozs%2BbDCvdR5qy5qS5pC6YFC7wjl%2BiAgNLHVGDH9FqkE5vy2WMTkCOXchbg0F%2BRVVZTbfvE42yFpU0CDkhTwj%2FSG3rbU3AL%2FTFbaSyjXx7N5u2frVc4pUZXbBJWVKOB%2BW%2FfzY%2Fu67QeskLHVmRsQThTBpMOtn9ovb7JYV2sK3U7E%2FF%2B%2FF0u6kE%2FsoEh5h5YeQNkC4IGWy8aB0lMVqd%2Be2cosr3jpQiMHygQ9pwmo0SvxSS0IxoAJmPdlZiGXDIiYrWEJt%2Bvd%2Bj2GZlv3IHq4P1jGzF%2FdQcZ4Six%2BXKtlVNUeOwkVIPV3UTxG3YeXqP%2BBojGfb3uv2GzNdQfX0iLo60NOO9AOyUCXJwAXOlsunI4J4tgFYfQYyGdairKg7I9h3S5z1Zu24KZEhtoieZ4EwypObxAY6pgF8DZpDRK3XyKs94UjmRMcNHS462k9s0xBvNWutPpsC7euEhHbKzCfCZ4YskBCdfCFV4dcr5kRDjT%2B2LOKnRKLFH8tZ8ucXv0UVrU64Wm%2FP4QEn2kr%2FLpAkJzePx1hbSbw2aB9KvfUBbESEK5yOYnet%2BHlws1TmZ1dGVNeXP8W%2BifQVPf9cKwFzgT5HyHVk0Qq2lAIe8V7tFggMUBwdIiSIViIU%2FWeh&X-Amz-Signature=fba1f56784adf93389268174bd933158fcaf939dc4c5c8c9fda57ff823033d36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
