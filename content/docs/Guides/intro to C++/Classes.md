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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRPPUSVJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIFy2gZrREvh2lxbQygOrBH%2FE9T8g1rkI3LP7G2gL16YCAiEArKJ9UyvGFO%2ByEiqzwuToZZRm7cKLcD75vE%2F8CkjWjlUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvsj0%2BQHYF38T6XPSrcAw1v1o7eJvwF%2B6hyy%2Bw4glqp1wF8rCUmGmZwfbNlph4y36tMPCJhRtk85OwZOTAho4b5kzd1iChlUqVgRgfG0pC9yEyUuBxhVvNkgtGMtYtRdh1PPIxfg77eFnmyF62y6ceBi2ppXb2xm1I58gh3LcUFgQEqB4DkWtIwutXGG%2FQOLbt8hb4bOXDs6zSUR7Zwfnlgbyr%2BjdAQN0Pgj4xH3fg5UH0VM%2Fr%2FnqEfqr3h0qmgn1r5Np4EODBKHte0vN%2F7rD86PK2ROgRPiJbfx8n4RB0Ijh2gRWofEsWZBoOLtSekHVZDusNLgXZ0GyzwbtawNrVWFtmf4uvFNMC18jNHpPr9e7gc4IZfs%2BSqz5Szmnk5FawQVGLtd4Zn0pUJamIMi1bJW6TXl3yjEO%2Bd5dv9cCjM4lYzLj%2BxhqwLoIi9R3%2B1ZwOZp7XcvYoQ%2BeSq%2F7wzRs2gaAnclB%2BSyAktj6VUM37BHE1b0YQ%2B%2Fr1RXv1zcuDvCDXG9IZqeSvbztvXIm8w%2BPpE32fcoUXmGHUx%2FKE9y%2F1%2Bb5kwEwz3TarU%2BnmR4%2BgumetTUt7QXsYhU%2BHrP5RNfGyQPR3m4sdXxjZxg89%2Ben5ktgulQs%2F50Z94O4a7c4qhJiiWZLSfadHt8rngMLfQ2sQGOqUBMbzb4wErn05ouMYexyANanwb6p1315XECrJbnWD00Yk4M7pFz%2BmQ937SeXw5BzGbVn%2BxJ484a46S%2BuOgEQ3oMqi1mMYW915CLV%2BfGed%2BzwHZ6hgtGJgYDrYXLp2m5iALmI4upK4u%2FmyNHUI7rfgv5vq0uuFpr8ueBthJLKtxbadUO4HNMdiCgyfkWWaq3D1EpOHFFkD2Y0bzxNxUZaMKE1vwCm9i&X-Amz-Signature=9279ce911247779d07f73ba76fcbb2963098748d5e0c9b8c1b408ac284ee1c46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
