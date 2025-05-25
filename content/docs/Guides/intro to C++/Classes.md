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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD57KKSR%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T004614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCniI3vJdWUkqFENRlMJtu4GxCUPBa1ktK6%2BaiHE1xE7AIgEJo%2FvNsub%2FrYE2xJf3koLoZnctX5iu00e7av6zrQ5skq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHkNQVFGEma7tFBVtCrcAyAeVSs9b2T6F1a8ErScrjdj%2BtZ0xHRwbh%2FEigbPg82e85rou50p69BjNxZcGipL7yLqjEKKfOQS%2BGuu%2BxfKv%2FhiA6Hzrw75MT97lfpzhW6GTNPBDcb%2FBUFEyyrphXiGthv4l0Qc740MAffDyeDmvN9%2BLyWdOUFkg5P7skmvLCL6qp%2Bvun3QDSN7fYU1zm1cBHPBgbfN9HXGkD0Y%2B8tsU2fk3%2Fb3i3q9O%2Bi0zZywLY7yf9VcvT%2BXSgcMinIzRSdsHf%2Fa2GwG%2BkSnwXWdiBDRFh56fp%2B2NX7jadgavRrgBNLRViDfD2gJu6wiSpwWur59I0EgplfPW4Nij2VgOG1iOg8jgvW%2BXsl2S8QrUWQCkcA7BKwYK%2FgE9LQIcj3VC0OxBtvNiZhJc69kD01xbU24aUn1KXf7fppbIKXdHt5O8CRe0%2Bktv7l4Xa4jjqm8DO7oxfT%2Bt755CLPaVr5oL%2BDhHKw6TenTVJeP6eMX6f%2F7cdtCwKBopVwS9bzyfi%2FrQfXyu%2FwRo4Fyx6YO9L6W0VYI%2FFPTPGLFdbg0x9ALYsIuxVaA%2BzY9QiRd37TMBdvaJq6gVkIYbmsScBn8UHeL7Kyov1C%2Fxurhr8tSLI2a2%2BaKY%2FNlB3vFzcgHE%2FcmmUrRMP3LycEGOqUBFd0VnExnHJd642mI4ylk08%2FEX86qGmdHuNyDvFAB4BS8fP%2Bq41bAREDfzif72EUo6ooZhbyjxBnTPrlHIAM3IIsP4FqRuNVECxKWwaUHNDvzQ9dSE3uDNcVH7FBdlC4VD2euTqlAWVQDWJJw2u39YACTHIwqvyNDj8NrCQEH2ebPi7A2cU2xMtdzbDwhGM9quEEcZGqNbp0kR81JxxXHLKO9%2FOBP&X-Amz-Signature=fcaef310af56e3d6015041856141bc756847e792d79df53d12bf1f22cb92df66&X-Amz-SignedHeaders=host&x-id=GetObject)

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
