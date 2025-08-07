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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR4HNGH3%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCbpixuxiVsun1n7Hq%2Fr5cDLm8NCJQ%2Fz5bZfHr7OwGvGAIhAKH%2BwQD53s2D9RHMCTBib6EbrW65fc6o4pyzXfnSykCgKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmjllQ0o2HRwV92Usq3AO0el4ehCOH7Cp17Z10cwsNGUU2eCXhxHXrNd3%2FpT8TM%2FTK%2BPDeL6qthSzeL4BhmJKaM6C2zFT3NIMPchGI2jglXj%2BjyRewn5R5Tx7IB%2BpomCX3ZQawJI4ktdNHLPDiptGetvfhQbkx%2BeGUokZRr%2F8Fh8w6D9u4Gb5mm%2F%2BzE2p8ayaFAzPo4tyK4GkzdTOz9mYOGUlA19u9cMSWt5jK0eC4bQXTHdpRa4AZy4GCMqtJa2B%2FYIAV98L%2F%2BUXdYssAqdarm5YzUeSJL%2FNczdBphwdsKztmtzhHyG8MAYNksJ3O0h%2FVuRPWrk0ufTOEkIauP5Id6LRWo3cNqfm5Vm0ke0EK3Hp2GQuS3Q3shr4tXgn9W0HVnva9hukg6Jnmkm6n6fwh2sIq4d7uK%2Bzjtk6hFbrAupPqXO9J%2B%2FSD1rnFeggy0efYYnPKScVnJtL7w8aOhCfAjpNJ%2FMfBKpCRvV3n29A%2B3EbotwW1B%2Bb6yhxpRODgutTfxnNvI1k2dJ7xoji4%2F8CPHu0iLitg94VnFsWBYRy9gULmxzEjNLim0OzbVb6NsDr21O134fV6sPIAbxTW33%2BSFgD2Vy5dkRSfqT%2FKdF94ZJuAuQl4JIfncLxK0RRCmDMPWUBxbGWDszBedjD8odPEBjqkAaApf6sQw6EEuEEf4kxbNo9OlBpendhKc7p%2F3ooW6o4v10o3PNJ%2B2LP6RWdIh8Lf3cr7rLBdstdACh98tOrOlEt2%2F7pprSFjg41J9Toco0vwEqkYbzcKt6k%2BLZuGxA9rpsjfISbZ3wHTXL7ZWrKSLE71kE9HTZgaqtgLHxJhHop8x6naxvUkArjQcvIUY6%2BPyfnyS3hrsakBzX19IpdPahwvvYEv&X-Amz-Signature=a47ad799c1397cbaa29683bcef60d3ced72d1016bc93db3fe70c309fef5c10e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
