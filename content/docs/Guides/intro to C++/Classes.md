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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAKC5MQ3%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCEs%2FjiWlMhNk3%2FwquP7bLp6t1GQu0i%2FqOKe%2F8jKX7rzgIgN87PIZY75pigT6WpTooTUFiB%2Ff4ulc6UrqG%2BBAi4WY0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyEy%2BhBiu1Xht%2Bh8ircAxzA10HAR%2FUVpJV5CpXgm%2F71J7BJvdwHl%2BH4R0H%2F0%2FcvXp0EXHdZPVa9I%2FKt3puLGrh%2FIIChAr0KN3Ol2wJlV1eGzmiyaKpcU7sHkOlOwjWpQBPIPOrUlJeB9vCL2RtKJI9KF%2BMwpyfb7MYybkgqx5kY69tY7op1lYp6S32yJstgUVcXpTXAdG8zmoaEtvy%2FXrUug7m67EiU7La28S2xG0Fp0Jl8kQ4wUP4XZsiVIlwlROffvtTggxnz6J5MLn5RagBOXh1kaHXloQOHoq0KEE7BbTeq5mrD0Ec3tn3Rhb1LOCYHbiJ7cZUgG0Q94838rujwuTCr%2Fu8NxbcIVUqk0CvbCKLacakF4fYWtSl5W9w0LVguIWsW0mfr7zDubYA1p2opcGhKI7Tt4JHSmAYNs0AfEqfBj3K9iqq48ObxcjtC6GCqwnoZl4ar47DXyreXIPBVyD8E8i%2BuStsMM0PYdKlrXEFHItWEfZa9Rcb9g%2FOgsjaTWKMRsMgeXHRAZRaOS2sAger9XWzPCFebVZoRg9nyFZsQRoYOiCgCLh3a3uXf%2BUQ4kXZrK6tLuE%2B%2FYcAsfnMCVxdjiWLT803tNZH4H90i%2FYzO7xC0eTLqwrxmL4tGDL%2FPXyNiC%2BW2pszHMOLu%2B74GOqUBTxC9UhqTt3DBJDWDVds4c%2FK350ghT20h63Gp5gst%2Fj8Hm8YF0lvYMNSRxh94YpnEoibUVCXV2FTz17CEjWId9gkvz56T3A0vf36pfma0D6hnVRYwYXWwa2awu3IIH38ZoatZlSDg1A%2BADqtT7dRp9tbIq7tBPjEnxcGf5oIIou7sZj4gaypB0LCj40QmQyaIrZymk6HuSeuWhjAFWKsSCNdGZ0uQ&X-Amz-Signature=4fb084a9d4c999faee85786010477b0c6e91050ef299ba2182005d145a155b4c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
