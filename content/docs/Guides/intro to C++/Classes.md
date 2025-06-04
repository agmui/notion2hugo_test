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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNHSI3H2%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBVBosr1tYc0%2BPigiZNGhNRBLVl1b2gXBaXtmDnxmCZpAiEAvmcMdb1eBaXVu%2B2FsEiHXeIVyu22Q4CDS8UPVltCs%2FEq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDF8o%2BPbbiTcnOYMW6SrcA8WYnd9tGf%2FOB5h0tb0RadyNZ5h5uCIBNgzWnuj%2BABcui1nX%2FWNrmdMkuDOAlKc5XVqXCNEca8H8GJKjKayoP4VLPebiv20UjIaAn4ndOAMmGjk3f%2B0fpgxICfJm2rArYG%2FYcgVmy%2FRDvoDyHzAuoluIuKNm56dbj2sFjffwoDp%2Bw8FmX4DRAytLwx723N1lqdymEpFdpRPLM0JApTLeOtE0InW9LCSTplly1i7N%2Bb2tdMXLSASnD3thOY3H0Ke%2FPzbcUa0IPdmWzDzFtTmxeYaalXCwmX96rOEu06q0CXmRlYTXJLQWZfS5Adxk%2Fd5hHP6x55j54llDmPA3Rtxsnmj8M4NIhOqLkDK1JzggjiEM7Mion%2BMZ0SuSRNT6Lp6I8%2FwFlGAdOwpWlTFChZH%2BhX9AcXmJBQZkKdme3Iw1HqxRYs6BS6JgrMBSg3%2BNM0W78Vf3LSIuxPHYoLUDR072r8NwJZP61zgMN6t456J2AUZTCm2hgBEczKZom8grlb8n1f7wgy3xLd%2BM%2B4sbmeRyUjSNbzHvMcupE7kQCNJPHqsnbBnym7c%2FwJjN7Y21cDkJrpsXJsgo2WJaItt%2Ft4f9NHgVl9q4Hk7oZ5IDNz38Tl6ACk7IiB%2Fq4mPzpSYVMM2qgcIGOqUBSE0e4HKgSyQEl5cuaQOa27sVhRq4lgVDo0r3K4fRm9o22HfmudVhtgH%2BxkDi7cMjFOt1blxN7eex6TegVIbPszn2azYi8wkGpUVyKJ1FK25iBVXRIidb3Va%2BYuAFSYd6IfMg1GEzTmIAAFM%2FUSjYQ%2BXzbpwWUMXgjOLp7Ue40pdw8yWuT2Lrnff6Mk%2Fxn%2BfT7WS7GZunn%2BHnQpsYLEn89i5u17rW&X-Amz-Signature=c1c8d13c5d0a2266fda841a2a70e1f9d1fc8a7aa186830b43f3ad764423b9b9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
