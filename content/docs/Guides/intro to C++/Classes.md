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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WI6IBZ6%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQD65MEnhqBFU0vLjO%2FLFGLegj%2BpGXwZ6IrHN8cQryIWqwIgJGmXsrI0ksEkIuTKyyDvMUVT0dU437fQ5Ji2TrLj1wUqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOtLVbr%2FnfgXUstY3ircA8AHcS7ahtV0mx%2F64%2FRZfDQrJ6oPLwWRFDCvZmIWYVQeSU0Hc4IRbLywJo5KZPFH%2FAOZdoqYZcO8ElndDGOJX6n7x8szzE72MzbdPsYzDfa0TqzKlKHJH6fK5%2Fmd04Km7%2FKQXLRkj3C7kKMNaWg2qkTTIkvCrYxjCLZ4tpaRAeeRUMvF1YsZLVqzhP8Toc%2FQP177uuogQ4BUpkEg9nV0s68I6w%2BFLO%2Bt%2BQht5xJzlvTvSI%2BW%2FuXjDcqaAKidcNeViF%2FHf98fFSwmPHnDy5rLvOwPZWpjWR4JcfYJOGH8iqcIJNx74SDXjulx%2B8AsUfnGs1vwFNu37H%2FaLy0wucPj7eWdX8IBm88KfY08fAQUcer%2Fxcp%2BUP%2FTO7%2FICMvfO35RM1BPXIpTt3I6r23EbpdSNOF4IZaTMWdTYdnOWgYWhbC52R49M9p0WsWpToaOIawpQkJBXrg949X%2BhmxpVcxIlyqyTNcG9d3L7WOfUjPiN%2Fegt2dcDpHyH77PcIZI6Ps5JEYXU2qMNzIO6x3gPXjD4O2UeLwD4sIi9Uqeiw%2FyzygWGwC3hys84cPlO%2BIXRODnXnTmERm8x6nfWlbUFeEFf%2BAFqj6IMUkB1Gq1gFSyQZq3tDZNLPSHDpcoFsadMJiwv74GOqUBxaNmXdUi%2FkqTVRTMIXdPBsO6mZfEXXz%2BRj1dQrrJsGGjU1kOJyLn7AMYNzTz1dWsxzhQmgPwtsi8p28MK4llo2ssfxTeDR91EJopcu%2FINkKO%2BoGeAzCDNJERDLapM6Rglh12bpM9PQXL7Eb40Ex%2Bf6I2685DfQ8pUGAlq78XrfkI5EHiZrFv7vzsTRNdnymBDWbi%2FnWb9wcMPj%2FzhqMZkxesQrhb&X-Amz-Signature=11efdee9a607b851e72320f2856fae9c9e8dce272cc044beba61e8e917a9290b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
