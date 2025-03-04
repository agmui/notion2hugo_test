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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDC2R5MP%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0yfBsz5L%2BWianlwQNOByLr%2BZ0aQDimsOanbKSGTmLpAiB1SHmnSXXEWzvcf7p%2FgfyfGSLKdklO91oVrtQ0aotiYSqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVcX8MQkyOI%2F1JdgvKtwDE5fgiLa6LRsqDjiPcDcG%2B0a6ET1OdR1NmYEHHkF4z16rAzT7yNExGbrPpTSPj7Q6JQni9Zo2LErK62KVxFeYS%2BEohkJ7%2BXQ82aH2QBdkKBm8VpPqsPQg1ZYxaFrzEBmmjkPfL9dyJYXWY4uRAh81mytS9GMxj7OH4a5dp3FoF8aR1jITSPxyyG9%2Bo%2ForqsU7fKdiQYeWPgee4Tho0P7neloMeoogVGzRkHQR%2Fj28HSPvqcydMHQNf8VxnQkfzUjFxcIKlcgn%2FiIr9jksk%2FQGubqw2VjupTsvejbd8QNMAHPJg9KbPnrNIXK1GXtympUPlvhZhnUOp%2Fnkrae7sWSjXRfi2lIDkBxEIbCAkzQAULwXAqgsTqQg%2F4pPXZ2XgUrR7iignJ6EtyQcvOhy2CTrknWILaQxmx0F4R4Vx0RYryP3BYGjaXAwhw1yHi5x2dac8%2F88cv3rLSSPLWOoCohX5fOTspsVpnPPacgV5rIMaCC2KZNOK%2B048tTYSYX5HTZt9bWA8M6mhljmB2jWPFaCECiIE%2BjzgUSnCR4Y4ekaBvpNwWwkMXcedHIgpiuxdJRXm6tKVXvdlS5VV4aWYhQYI4Mv31uzNS%2B3%2Fj0BVF78iSL%2FGS2Cc%2BU9sGzLZ2Ew44SbvgY6pgH4foTSzOKmu3bj%2FlEsrmWLHGtmYIfDNyLxX6JvgQplrhwqLgbvDpPqQt6mULrVcdcR2w8AsbE7X0Z757GCPSzCUWMiicp6wDdI9WCz9r%2BdGRZV6ZUcNQP%2BZCciimlcZlbjdqKev0ERd2bI1wZqt%2B4x7jHT5ZaiNpxj%2Bbi4iUNItbH933U%2Bvo7uJmE1JpK%2BH5BE%2FLogs%2BzByUO1fsOeRTlwYKXMNx3s&X-Amz-Signature=53cef9ae7c75c59cab8411de0967e2e5c41295655d8f1ff0ce0f1e5da2b2ae81&X-Amz-SignedHeaders=host&x-id=GetObject)

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
