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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKYKQRVW%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICr%2BNWofK69%2FFA6tesnhOri22L3nYHzk7gGEroRu%2BQTRAiEApoR%2F0KEiTAnI%2FV20Bk3szzzIRtd3XFyFGBGFJs2gl%2FsqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZ8tFIxALz0OWRgcyrcA6ieR8ErwxdX0tYKmC9EMysx%2FqE7UbTQfBviPzaFMUMypAm2v3ri1RyEm8BW3zPy1I6VqzYeYImQzSD%2Fjj3qcCXXnoT0%2FLeL5Av6YjgbDS56yTAywyYHZ3lgcq9xm7iTGeAxzdzlM0Lt%2BXAx%2FognmOdJk3mKH%2B7uo7EbAgkWuqqm9iQ85w7PCBz7cjR%2F3KpMs5oLiBu1b%2FalBe1y5%2BeSyFe66UOaZoy1zn4MslwgLr5p59V4dLOmb6Q8w3PiTNtgCs5w51SUEvggveHLywn6EKFf6R65RWjahbjjx2Qmzwi7isuXyyoX6OQQyB6rDyNIYMKQzQqFyuFwyAuGgjyDBHGG9PnjSU541d905fxu%2F3pY4LQNGhHWGmCG1NhO2B5OANb0E0DbcGlPAw6LTY2Imyai204n%2BsFyRnNNWpM%2Fp%2FEnA%2BkOWbrNaYHNkMed3ncvBn4PJGW%2Fn5LzIZbSzab1PAQyv%2F%2FlPQRXktEWqvFyX2ilYDmLpIWcK6X1gy7VgbHRjjBJydRjoQNppYo6hDs6Q1tWsL8a3qvGoi8EmmP3kO7sfp94YCNNncMJJoNOIKDEqUnuLdZN5oTNHNhuJlTKe20Oo97F8gJMUyZCMZspq6zDBKJ13OpLVl8Y6aS1MMO48b8GOqUBD1Zzeg6mSl4YCsydZyXQtbiLBmZIWlV5n8CP%2B0%2FLtGhf5NGG5WpITmOlBreqUaEF0Mf15hpSZPxJP3Lz65Th%2FVgSyWtSNiWI1%2BSEDH3c7VdG4UtPHIqzuIXsQWcXQiVoR4Wx4LvBCj%2FRRp8QLILbVra2r52%2BUmNb6pJmqXtlQ8%2FSq1JgkBWpcfDqgSY2Qe8s1rTDbKkCj3%2BhQclOlo58AxrfY0Nt&X-Amz-Signature=3ff36864adc48afb7de24d3c5899982aa4aafa60094d1c45fa68773655dbaeeb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
