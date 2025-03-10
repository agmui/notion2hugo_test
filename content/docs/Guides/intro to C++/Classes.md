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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3EH4XXS%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDQXJN0hAlO6Wl3%2BZechFaSUny3ByB4Po0mTjZ8FVcPAQIgInCvNkpQwRSlpPqc60kJH9a89X4bcoDZew9m0I3sTfwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSx0HDnC98TzakFwSrcA02ZrKrSLEnOF77fgp42%2BvfjhhTe95%2B%2F70%2FJ%2Bnesmosw2d%2FXGm%2BDj%2FYq2i%2B45OZToFF3c7H1OdGrKiZOR9Z4VXCxZTHy0GRP2pgAA1uWMEG0Bka%2FdBvruN2onilSuQKJkkWdBSepKAblyMab3IhKv8K9uW49dk0ZcITfs5Pj%2FFEAa16%2BG5OiO5gVpEKvl1FKoq%2FkOzd8frKIjBUyJJkeYHNThCNComy9%2B4OCEC1GWy%2FTY1pbd%2BlyEpfnXW9PuqLg3S3fKa%2BLedMEV%2FnBNWPy%2FmJ8LYtWXJrTuEQjMs%2B5HDgIAeXW6d1k1dr8L8J0U0VZGUaabkGujQM1lxFu4%2BlDYb75HdYizXma6FUy8Jm3k9fvsfYF2eAltx%2FiCV8APxN3jvKXkTUuIBGLwQ%2BtO%2Bbgw40LvBlFhJl%2F%2B5CgE9sz490tPqUyDhCNssElPpRBafrb37q%2BrdNnDEi2S4v7x%2BwTU5KCdVHa6jNidEym3EdWPprZ6mfNAWy%2BTBwU6qDusO8BVRgwauGyaxaCOQVkw4sVWX1pYYQVTxQ8ATp%2BJ19Sf%2BTPNNWfK8ug7QOxUhOFT1jWJY4r8C%2B%2F1uu9rdyG6NFM%2Bg95kezwebBbYS9prbTernb1m4GR4NMHp5QXapSWMPyKvb4GOqUBz5Z4cyp%2F%2BuFWmz9nUxDqSDz6sYbjha9jAxQ5HqVePl%2FcRvN2fxIrP%2BEkWaV80Ag%2FTfH4msVJYXcyLYOf1pNtiZgfr9OeaOszliz6LfadJxMj1g4FxK9GA%2BlLXwIy1CQrdZwhIs%2BYPe%2BedD4766bOaO91Od7QNFSRO0sGbAqknLqHSzklKLsZfQs92%2B2MSWfF%2B%2BJa0S%2B9QuRnMbu5QAZ4d4weAkHj&X-Amz-Signature=3ff211b6c771e944f3b6adb75f092f671f428c08aaae1089365b2facab52d132&X-Amz-SignedHeaders=host&x-id=GetObject)

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
