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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D3FBYBP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQDZ5E4QMRjn%2BQTsPsycCLYUL74luwg4MyM3maQtnhGDSQIgTL7Y5TNcis2pHhnS0TuN10GjKu6ZMBtl70V6GeOTOmUq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDNYY0iXW6JWtTHDC8SrcAyCDeR%2FHa0spxk6LahkZldJ0fKRV0bkqwXAe4z%2FAdata9DI1Tvd20inYYGehPCyabWp0u%2F0mKn485iiGksWy8q1d8utyPvx6WlGbMmT0BlWU3Y1Ytq2wAYJTxfaHR9Mt0Huq5zULat%2FuPcpMjCrbNmgjqEQrxkKA4FdlkL%2F%2BVrx9v4pps6cAN4%2FQyy%2FvAGFddDaahXKfiGqJxnfwe%2FR1ztZmNZl%2Fes4wref6UV4%2BVhBmpcXnU7gVnuVvhMYokTcdu0aPvs4HOSW2COcifv35pJduTTCNlLGaa1UuED%2F1%2BL1vfZflhCvA0suWfapionAJ3A5O2OBVhWVsiUSBQbyD77R45ncYcepp4e2K5NM5hPaF4GyzxBQgO2ll78pbAuGJRHIR2nUnxFBIVfIvHr6nMQh44xO4gBhZB47Z0wmFsKDFZeuIKgq3Q3YKZ2BAqsJHViBPQmVuhe%2BOvKTreKzMESxHSIQWCLsKalGMtlpCfpeSn%2F3mQw55aIsyL2aV7v887s4TbrLCice%2B8ZfVbQ3spTvm3BlpTF8QOgQgzkGIoobpeZ3cEGDDIy7fsq1L4ZIUzqjxxh4xIbxAxkGlNscKd0mzl3diTTyJs31UENF%2FqusDsGSu4J8FAXnCX0gkMOuV4sMGOqUBUIBUWjzcNoK0%2BIyX7FniCAB%2BrqKNLpd9PZihcsSdlJui2wFH9VAOWwMmGHtnPjBirfBHYCBGfl1TdJhFaOi89fbeImZXAVPWSoejv9NvfViiE4N2x1KRz5dpMJeI9GbLhznd4MdbLgGU4BjagJsw%2FvVny8tt9SWJuVRsaM77MKEmZ%2B%2BCKLPNNgULoh%2BnaXc%2FuYcG24HcLmdxoyRTVrPRj6q92e6g&X-Amz-Signature=5b0d758b29d0d5ed8c1db819ea0edcc6fe2e16131344c34b2aa87016a718eed1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
