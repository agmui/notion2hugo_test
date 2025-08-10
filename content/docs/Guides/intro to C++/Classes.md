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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZGNJNG3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJyvqw%2BtY8xkv2Ba8E2PS8x9bHQ539Up2hV0nGC1TuzQIhANiV%2BuGZ%2FyJHzXcUB%2FvecLPm%2B389kq0Sv4%2FyRIIoYBOQKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwB%2BrgxAeuM5qZZtmYq3ANKRGNRBNqGzKlpsgZQZBNff2LwFahp7UqYtZelOfFxVhmKEGmfsqLYlqVHSDLUcY8d7mLdTloO8wgHyRzrLKIxbA%2BIX0gz11NwlWve4sRL5uYJyHMwDSDsgmW4Pua5au71sZObr5tMYvny1TxdNbJg9UhBgkR1gQTVx7t4XWi1fT2d1XmjMXzOJMNEsBKI0V4dYtIr3M9TC%2FDwLK%2Fd7A3woGZzIJJ%2FgkPz5M2yIJQ%2Bd9BmUwnJk0cvA2QAyfIV%2FINRWICJpfdcOvfmT1aURLCyPcNfLZ0GL%2Bl4xYi6uvEh1DGAhX3K5RuLicOwYwjDFCXgVIxKx7KPYyN840AExrz0TpuZuZchTukVPmXFcR5IVt8O8Oe7reF7T5jImG5B0G1OCOoAkKvk76lDJo40K%2FDPTzYZMpqp3WFtYoiM3UXLKuKHfFIwSPIdWuzhwQ3kIg8yFUv10vhcV58kCgOY8ljb9RTWpTutEksNExm1vqxOlqETpAuMhFiLNpunraqu5o8mmoegRV827yuaGZTuY6h4GulSJ2E5BzqZq1GImEloXB18Ev7t5xQjAl9CPO7DUftsnLOBmwv436%2FAQWf1mtJwthXIygbhBw6%2FbyBmjzglx6rHg%2BT6z7LRXr7Y5DCE7%2BHEBjqkAWVNBqNd6A%2FNsA%2BNqmU5tuJvFguDuSl%2Bfy427nEp1hvboRGqcrKEtag4oRi1GJ4VI3V8h4YWpawAX3thFSNkjD3WEYHZJENVR69SRXmJPRgr7t0A0%2FRdtekjaHOYNi3Ert0vPMKSwVvPGmLgpFloCcKXBFfv6ygn1FRZPlMCetXyiXiPnRjqMEPVmqCPMcZ6qvnwr44W6NdCbeiJPpEVjSPXgkFt&X-Amz-Signature=acfcb4c1169c917e9a9fc3ba96525b9b44faeb9258fcb5ea50d9490e115c6165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
