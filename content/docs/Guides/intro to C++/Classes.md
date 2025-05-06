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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JYNWYA6%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZ1AEKmvkYnHNLVZZgEqvi8n9rC6FUjkB9WrWfm738hAiEA8%2BVo5ZA7YiXmv3ggnCS08o8a6FQzFhROv65XphJfq94q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDDpJdhJJkNvIVv89OircA9fyGFA%2FAS43Bcvy9WKrCuuIHRdyog1wzORZfSnh3WwitjFrLZ7BTvEFRwnBKdqGu7LnxJfTYUb%2Fdn8bUrg%2B3zQ1TiV0tY4wONKgjni63W8GJWu1acD0avrfxIjAbLVMZkkznIXQC46i1sBNsvvBo6%2B4ITkqumjr3vpF3%2FP6Qy3KA%2BL4uiZOqBk%2B9SC6JqkXldk9hrfuDzKKPWnI3V6KqpMsiFM693cD0IB521hdXYp0r4skwQ0iq%2FgP%2FcJkfk1E7rbp9tO%2BHKXjthukK6oVY5RqgMiYjHQ%2BWW2ojrULeLVopBAplsFr1JYA6uXNgD0Z4JGW8v2mhGd8o4qgPNSi1eyyp8jgb8pJMiR%2FtbYdnAkg3Acw92JGNcaytbzEuS7DLmzfJUjkTEGs2%2BroXDblHGzcA%2BWA7ca2%2FYpw7QifYQP7h%2FOqgFhX4rlmKFU1xaQSWU%2B0uGNRjigew%2BsUiDjYZUU%2FAh%2FtmeIlJd5WNAVdxAjj7Gz7%2FBb0zpmIldFb%2BqI%2B9L2MTixCEj7%2FK%2BZ%2F1eBIAqUee2Dw7cs5RtjqMu9B836LFHc9UwkgPaXRufTwY36t9vVrLDbiPl7dJ73Wq35PTnNNXtk8yQTs%2BqnJ%2BoIyDiJCJBy9lY9WdFiVqoUvMISY6MAGOqUB8jRRGq3hzaJTRVMf36yAlyJGOlK1iseMXVlSMxo8m8v2FDmIznr7UlxQE2sLdNcOUn7LeMNfj6h8ZC0XHBmmWmCYemQrEN0is9bWsdBgm24mok7UC3eCyJNlaY%2FM546ogSspSOc77a8lwFY2wXD5fwJTrqWVSWewtqcSzqnpXMlkumNDk%2FbH%2BE33cZX3ibAaGhRoq%2FG4bFB0ISes9Ez2GdVbJv4A&X-Amz-Signature=a7dfcdf4110e38ea3ffbfa06dca5ac052f3ec35e76fea66105fb868596418038&X-Amz-SignedHeaders=host&x-id=GetObject)

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
