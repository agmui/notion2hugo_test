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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FWFRSAP%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWE7ZFMUjdTdwGmZveShyhoRLmW96q9ndqH2wIqcGJmAiEAsCkgLhYBKIcn8UdEBP8RVLhUhbxsSLitDeOxbKBlh5IqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoqZCIeeAUl9Qsc7ircA6KiV53cplORM986zsujQM%2FiWN6cxWltaLswp4WggLhhJA0I0OtG25PKKsqG6O0DrML7CINy4Da%2FK50M1ctolRiRJD3vAqfCVi94KbhbRuM7voLqQImyamaKwM1JuY6okM%2FK0ht2rUH%2FzmY%2BZ5qsI29yO9qPP%2F0MljbPcl%2FRwUMuovmbFxy9Ebkvkqx01Jc%2BNAQdnMcMGg75Qpt%2BO9tiOMwfz8UnKKlD1NclmxE2JtINpGwv%2BaUPqqtFdq5l2h%2BQ1hFzs1Tv3i8Y9Yw8cRIMVGfmHqzX%2FvA94F76DswDzQFScka60cT6gRI7B5rJKzUSxbfCqscBLk%2B3yu0fJrzz0BowxosBzbm1zkH%2BdVXBmCgIuI2A4vf%2FgRk5MCY%2BW0sZuUs%2FTL2nepwrnTiSTWNug%2BAbWdGZjD1ejFjvRkLXgQztBHGIlqUXyfZfnro7PNVOXzqN4uwkd3T3YUy2Wm92qrFM%2BDbjdTkoDEK%2BybfoC%2F9nGXbRCqa3nhp0FhrXA%2BApqmOzwZWEMucSDCEJCtJxcDnMSYO19t3yEy%2F2xRlzM3ILKe%2Br7w9dZ%2Fy7mS3SRk668NzvEqaaEIdiVhh7GaipDR1575LcDUo85RhpBA2eg4gfsVZ5aItmjePov4EBMPvqisMGOqUB%2Bcf3d0pvpGRYCqI8M7JwGMFU4SyNzPutGB9HF6YbV%2Fbg1TqxA9u7FPeZxwWQU2zf1NFSwqbW82S4JpLL3ajQUzvUp9%2B8oyQoC%2FSaVbNxhMvNjH%2B%2FKla2Q4EOc5I%2BFsUfPr7rfcWje82uGPOHH4XD6oFRVhx%2FU68Vu2s%2FsqETEljT2NXU%2B124FZ98rVgLL1gOPWzLxtJrxVYfLc%2BuNcvKyR5CW7le&X-Amz-Signature=1d00d0defe2c4937bdeef74bf0afce9156444b9014bb64c7137111a4da0e2b4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
