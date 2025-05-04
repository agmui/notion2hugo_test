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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL346IJG%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCD3xYi53gpC5d8kYfzHWZRBJvHsNSKWeSeAdChLZ0L7wIgbaineljgG749kk5SvAKqOb6qMRQ%2ByTJzSiBkEbMhMSAqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrCXTzEOGkJD1tbeCrcA%2FsH6Rcw5XcdD580QaB8kmZBTqrcyPw5Hfs1Tuiu%2BXrCoYIj3NN9f6B8XkhGfiS8a1lhy1B751RNCvVErdIe%2FYbZox95sa%2FUd1yKbFFI3DfFqxBsmOkLs1JJ8AiPp0%2FB7ocbuokXxY5f3s%2Bo6%2F4LcH5Xkq%2BeT%2F55HABkMlUTVjt90jlKpPcaU4t5KALBCoxardG5fgESsCpF8Y4du1OIwe%2FxPygh%2Bbl6iE6TOoDHwCRBRSHkmym2HLT6%2B%2FTL%2FI6IjETpeFIgAQNYA0lkkoRak3aEHZR%2F0XJjiTEBHixhYRx7ZRTEfdxt2DuU9tvnyFWZgOkMQ9ZC0IJ0Q%2BFdI7mkkBeLlVOSKqoQj7AZ1Vq%2BVxK3lNZHwbn2xQyphZuxKMF8ViLEMPnwj7CjdmkYUbSgaEaRYiPSDhJfc9mZ1gwtuGtka%2FopsjvJslRJyQMO3T0rPGdnM7P44IlMcs3eKyM%2FUe848%2Bmy83K5WoQUD73LIhjXSMdu8hsojM5yKQb5ZaJ5DjdtxsQausYbGhqMgwUI9cNC5j8WDCVdGD%2B0S9gSnM2C8HNzarmwO7PBDbNeRztNOSDGEzPcbKsW8e3Q9tFZtvVk9eyugyBqHYhII6Wc1Rfe1TBPHYYKjEwxTzA9MMXY2sAGOqUBFnrcMbXbgWSwZJ9uY3bUrNJuRdW3KB4vGFdH93DC61nOJkHE3dUJxiPjEPPc5e4BwqRyYAL9DEm89hpYPsrZshNU44r8LwGFyIUNIAc0agyk3ABVzu6gRo8XOMeSziNYibHhlRSiV0bCPpeN0g7TZkWFbDdOcui71rzIJawpejlEhF4ljMWJJHP1W8bAfcVxkp1qIKNHdMwv3pBMGlcPOZVU5jVl&X-Amz-Signature=a87ab7f7c5605de2c9261a45d2c5e7d71c267e3aed55fca71db6a722caf2ab2e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
