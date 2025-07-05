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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPIE4743%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQC6ZD0077JDnebLR8mnevD3AQydRE4DmdF%2By4rdBuEbqQIhALF1FlueP%2FTjiM2copBrx2231if%2B96s4o00sAvfugfc0Kv8DCDsQABoMNjM3NDIzMTgzODA1IgxJkZc3ziNCuWSvn9Aq3AO78XiLDP5VLbg1ArRa%2F6664Y%2B2cR%2BaFnVXQswEG70Z%2B%2FrAxFtC%2FUjRgvC3iOOgBujz739Pt4UUp3gAZ3LmjSEsgPqXOndfykGaspyHCc1Oo6dXDtCreLsQikcxqHJU4fn78Go2ihRhzXvXdZZ1CMVFG3m7Bz2qlDwTzuTs1g8CLXjsqVcst2ytA3B40YFrWMNjH%2F8OIqpBGFqPvpXsrfWnH0UGLS5iEcS6VF5WnNJeg8ip%2BhJtB1NhFkBVj2PxqPcNZNBgVDp4IX1UI56xbckJIRt1G1DR3DbXbOcYvmOD4X2lr%2FOIMM%2Fg8MdGEjMj8U6rjyx5FDxvNBks58x4zsA2mx%2BiZ6ZiPuL49K0SI%2Ffe3jWwHr7yGFKCgAWjXS1f5qDAKJgyPcSSy%2F8YjB5%2FPtByqf8LCuDnFVakMAx8A27uj3qlgX8Cwhb4DLDGijBM%2BH0jgpyqBhjmyx7HI%2Bg6csJFzt%2BuH9sbL1uoAgNgQy98EWMLutFy%2BXAX873rg7kEZyww3QopP8t871GDByFoRdx3sv%2BNzu0zCL28HDsQNrPwag3GUhjmCRJyH%2BQLkb%2Bg9YIpwJBq68OFZTsk82b2YvLsaEgGHxEVJKFzo8DXsG9Xm3arFEu05QHogcG4ejCFhaLDBjqkAQ%2FxJudvTlvKW1l8mTb48E9z0h8vqqnaHxZWPT9S8Y%2FUkgD3jE1EOPh5JBOUB4lll%2FafyG0%2F9nqcrg0zSDz71DXAnXbKm8CCJYPU4EkvKJFuYNCDkdwPATkYyRyvnXp%2BPUgcK84OWikbvGGRZjRvsVRh27idDGZFnQaM1rxYIdf8sePKFm4FBonoV%2F1ds30mNYYmduAlNKPaDcgQm79n0QrKOjgB&X-Amz-Signature=e03770b4689192b91782f770ff10b231556053c5912dec5584da8782c9445f86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
