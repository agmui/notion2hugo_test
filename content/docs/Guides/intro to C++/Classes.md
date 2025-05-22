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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULHGUDYC%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDvIFzxtC4gxzefS59DiLR2asKgg59%2BOiVDqR3IHyLtzQIgIyMJnuF6NtW%2BL%2BrCnyPDRWW1zdL4kO%2BWz5ltpvPMNrYqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5fDt2lKSMsRdcizSrcA142L3TVSjH1c70A7eS9nW0LwqXkITGREFPQtNKrK9Cmt0tg97sVPDputO2KK1vqWuPrD2Zf4knfmPqJvCgXzwmYS671G7rjrPwhFvscQN7wM4dh3h1Q5Pf5S%2FPygjrrbWG%2BqVd8Ok68%2BSe7m2g316o6XuQRrvx0%2BRHzVx6MI1B6nwXaRzG2sGt6whyswqSplJALPvv3CCiBtjaQFf2B0MicA17xkl6GGhDeX2c4F1T9wukJdmcqTbaRi3ab8AjrvwcvKpJs%2BIQ7TRp7GhNmNMDShsZoNTUZ55imEw5Ll9O06DIKkhAKl3IlvA7%2FRNGLMzH%2BSk61DeUGhwxZtAqs9nkQSgCNPet3BpnXkwWvDZVQWQG7LaEWs90gkqrFkb%2BKbLCikI2JVCeSbaxBwbl4za1lIniripXb2E7n52MxvhxOrnjmAns4jxoUjOaF7G8lrW2mDXGihfsLltVTzwl4e43E7Yyo9fx3gWXJuU7q8n4XQrHBM%2FwgFn3cPhmiImbliuk0xOJ8zIv16GmcZHTuvmpTjiEtapK8QrS1uenUhdaKtnTqGLQVnNDmyx4FLtZwvfnl0pZYXwcAvggJtrNXpcUM2I8%2Bwx5DOCHsz%2FmYbMOEmEhatHZvOxi46pA2MKDFvMEGOqUB2TJp0qZxPtWpMMhOA83yYfELWOh8H%2F69s5Q2kcXmyMAm4YHev%2FrNOi9dboYYdxJldr07BJ7TqH8sUG5WtuZA5IA2ZAISXyYzyoa8R6QO6J0i7GkIfW6KfDTg9EBIVuu1Vc1fAIKGN12AVNTBmfzZ7ZRL8kZ9tikSJwTY5Yk1Bz4FND8x2930SzHBKPoqNBvqRQPBiipDsaqW2ZpBweUDlW7ZUVzY&X-Amz-Signature=6945bfbbe8124b5ce990fe3d16ae64a00e0014ab5674093b95779a1afa9fd060&X-Amz-SignedHeaders=host&x-id=GetObject)

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
