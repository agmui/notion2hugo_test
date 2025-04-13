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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXJOHZIO%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIDKB2RaCT3AXcAActACg7CItsFQP%2BWoN4BIIsung%2BJNdAiBf9VHl73pjS5aBuoo8tc0KjCU17h7ec1HhdUKhiVbaoiqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS50jG5RC82MARXNeKtwDBg%2Fn%2F7AEfN0hvTxRa8c7zwwFudJxCFRIifAlGQX9dLqO7Ee%2B3d%2BNmQ%2F6O4vU0N%2FwrBuwgt4tMa%2FgY%2BR4F0QZpoySUokNXE59VPDatGsl5hefJ50kiSvFQDH5OqXoz5X2jJG5%2B%2B1F5XUgeH6tKozpZBcRWPMEYrzUKl5HQ3XwajiPvNzcY6UCrwvNU7MrC0x%2B%2FuV24a4jQOHRcDxD%2FgomCaM9O%2FvmXEL408Y6j0iLhBSy1BtxCsHkssfgUTEk%2BCcx8x1N5kxtlnh7w1GSK%2F1fv5GqDZCaLygjWdvZzFsABdZ4MOjfw6JKP%2BQ5ap449jizkK5NHLPwQQ%2BUIhBmWmii0KEXaPJG4KRPQoqJnxUoJAEy9VZ1AfO27vdepkTVgvclEBEahJ3QMVkwCDXvd%2FvhmnrhwXgS4JSIvlPtU2kZNSwmtnF3AfCcSUFrnMMEqA4WT%2Bwm4qaDVzTz8PqOWrIejbfQ4ppmajayqLsFOsRgkXTEYuDvNzGHbia7NOUsPT%2FIz%2FdhtitwSdPOsB2OInsbpdL9joBP8CepwwV3NpGUUBFUpwGThXAmottM%2BVfH%2Bhv4nBmvDj45H3cnPe6tZgS%2ByMVmp2KvSth2sL2QQtxAgaiDMTWi%2Bna2FuctxJcwweDtvwY6pgFX%2FLpOqqDyBilWNB1RPmMBIfX5NOk5CvOQWqN69LeqkVxkhTYMN967N0qPiF%2BWW%2B1d9jwznrrcmMpUrSfWTfUuiq9eRQ%2FsyGf8PLB2WwR24G9Bw6sLyZ056uPm0a3zmlY2J%2F10LyuXjzqZehQXZZv0lbd9zjjRAGAGAOmB1v0y%2FH%2BWke1aQNno9QEnadpwRHhqiQx7xpRHPOgkBR8%2Fcu6m03C73HQK&X-Amz-Signature=db9925940229c179b5878838523ebf139682ce7db0adc5b88484db34a66b52a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
