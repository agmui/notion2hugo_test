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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVWK2FS6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIBRI7tcgM4bxbajg6rl%2FTTLcxgzyyjs11pYesgRgx%2B8xAiEA1V7H0%2BV85vUoZRKRjxoVbgbtUStY6cFfRcobDqHZzdsqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKiWYyuRQswsV%2FboyrcA9dv5NRy7nzeWIgGS8uhTwU4YAMxmx%2F55rrWiGRxZ0JR6WuRR51E94AFNIxySfGGDAbCbXyehrKtLQI7GB3rkB3tN%2FDNsXRwkina7fZflYhCNuPPfzPi4v7LG%2BdOq8yRA6kBYx0BGlUFQgWOR7pmTd29ENZ67y7s4tspOGtTUEb1rEJjyMBBwGziI288abmEfNAvDFIVAaivxejB8nzem11M9HXvogf53ZPEvlRgxnpoPLWdChyGXE0t916ST5%2F2m8DfT2uhGAxwaUJd8hXBVTLQSKa3zGEUZW9xwniq48KCmdctwZ62oUA514dwtoJUISxyndCGhXtVgWQ%2F1pOTixxS0Phq%2FoX6Q0%2Bw4V%2FgDWmsDnLnKiTuOwaaA0oKKhqTRml81d3AUGl7u%2B3FbTz%2Bkhmoup6mWcK5or5yhTNu7TnQcFXS2ZeTy7DvZ%2B9i0AoZw97qWZ20JTiJFquX4Nj3IBp6u1ySLMap8LBBatBd541PRQLZcQ7i%2BxN3zKFqquNjHcyFR4r3glwr9thPdnA4BoVGU338EwZ4iPQuF8fc34LR4WyJT9t%2F%2BSAMhkNU3OkcNn1zM1M5GHJP4%2BDSFOOpQw9P%2BHRD7uHkghCKXu%2B7g8wFyb0iriW9jQdNsdmVMNHj278GOqUBbgpV4OsVpZMYn1WJ1vvglYT%2BHHb8V2oFquEqMDdCwOCkXFI017WnDfjVWb7DXE8xTpris3XyhfSSCOl27peXL3dW0o2j3G9O4dRLJCJdIDTrBMHt%2Bh9oVh97cUvrBM1q3Z2bgbe4baqRvyEQ4EaLJi6tfSv1sh6OHZV6au7ULK97JJhm9B6KNxcunH%2BvIEj5yjIXm5iU4r97LJTtNabXfq8U%2FtI2&X-Amz-Signature=08f80d33e00f9f9fa6d64d39910bd9ef14d2ace656ec03eb7aa2cf8875005cb5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
