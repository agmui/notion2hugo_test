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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV2FRF77%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2rxUUAkjVIF50YmuMcyoTRwu%2FE7lM%2Bxj%2BPZLIWJJ8HQIhAMJxPM6%2BGLXJLhnXLVBhf10lyOtE%2FvxcK7MAU518L6BvKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhmjN6FZjuPY3Jx%2BEq3APK%2Frud1j3klMqSCpOTKHnk321i7kE%2BZohQKqbK5rPlaehhsFxnFYddu%2BCOA4xsw1%2FJz7%2Ff3Zso19wT%2F8bXJ3OBd2F4ixA0COcEEQU4UA75CyiieDig3c0wXOslagIRf1nqAyYZkYjbMbsLuaTDqqKAjrrlyUK7kDFbbNzYfkVcxcbwO6QpzzlJzaUEJAcNWHQ9yYQ4z6U0eD8D9l18OG%2BmniAjDcarwNtthATc7qyY4todXlYIJPJ7HWWxxXepQCMYvnCXrEQUBz8FNUQc0HV90Wtxwjg9mO7gLHMFn6wThKP35Txmaz2ifYvhC6KQy9lXWo4bFHSh7H%2BaGHJ2fDvplUgOsAWvQMj8BugpA9YP58rhtzpm1M6T5JOpaIBnGqHFoWTSdgdJbqoQsyIidJAq3gzEqHAJ61zPrWRGh7USBqjT9At0W01rM09svOnT01JGRP%2FpA1Bi9PYYAmjnSJUDh%2BFkV5eFvaAPw9uNawmyAG4ZlMWhU%2FZAjryXSynj9o3lg%2FbZu2ta3gGyACDskFKuXEFXObPWZ0iQAsLmhnYciIVJAFsI4FnoidU%2BYNkNgeDCNpUziNprYN28NGHlLrECT041A%2FIscM%2FKdrPVO9sNnXig1x3O3nBrmhFw0zD9sqLCBjqkAQ1K9k949gpJkdmz9um7IN%2BuFsBozWBQ2RIGWF8j9NNNLXfCgwE6%2BA8hsAcb3fdz107cmiIQIxs4hEhzDrzNsO2la%2FXSxww%2FsFiC8sffuPkmPeQdG13SYXR4ottctjIJcODXnsXPKUsT0t4uwwWRtz3uSZrUR5J6n0jaYex%2BnlZmM1aGVPoaOZqjvj2pWGowizV0rbLPmdFsr5IxjuHagQGr%2Fba%2B&X-Amz-Signature=0993fe190e388b6bf7ff358fd917e34ba77bd823db41952d4d6e3368fb6e3308&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
