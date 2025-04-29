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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5YXZBH3%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BnsjS0Uu9R%2FJrHbTq0fdG2fYq%2Ft385wRfJ5odR08jGwIhAJiDkcAZMR7q%2BdLUlg3DzqAstvWVqCLsD%2FMhV2OsAfPVKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9BeY6s4bBHZPk5Kwq3APWSpYXZ4drFMUDVljiozu09u7g67f8eDyiYIIhq173qG7nBZtrZAuouiX9Ga%2FlZBqqvbB3X%2Fs9ni5z1Bsn0OWfonsLdT5wr77fdaHhcMpPk%2BSrO2zCIRZwVApvrK1IVN2KPXUBcJH%2Fk89nCB72ZPa7hsq7tNtfMVztcM0Yvl16uGhB2dY%2BhA9OKkpHpl3T0NJvcE0mRw791%2FIGrfoHE5v84rTzBDl9umnPF%2FzRd7MvdpOJ%2BHQzmK6%2FlFGZhQQKQ9VTndz31ZkvSeCZ44ioLcG5KJNH%2BdLRXg4n5o473i8%2B53yi5uMtep%2FWIzZQd7HQVnWDSq0%2FIyq9HkIYecKon%2FUhDT10Sz1qOFmqwyT%2BeGK05vodFAYsMDcXcyU0SlZJTn7rwgAOSz68tzaiStb109UWy9m9iTXANP6Wc13FnCgYlCnJTU2WTAAXpM8lSQSXfW3siE7NJf4Xwlxr%2BMkWE2X3VI0VILfv6vS7Slmu%2B1sXs40CPYcQOAMf3JIiqk8uQqw71p%2B7gCYPB4QENqAytGrAIht9k0%2FTYA06xZKDCekY1mBi8LcowQ5lNt896Vz9sMaf9C5a88AKW1RkaF5sWAru69%2BPknQ7ilZf6N75NSDO8mWrAgaYPzkqHlPJPjDArsTABjqkAawlmVoM22b8kWJ8qwAQSiGeMxdSRYxLeSWVd18RzaERNI3EQCOaYozW2wBZxp%2F22ZqhSAs8CvmYg5h6FmCtG2E8uMIBv65VUOOk1tpsPvULhLSPuFtD0ijwuxkXTzx6SNogEFifbzmWqMiHlOWgwWopM3AqDKosslapqqGDsLA0d3CgEdNOz6MERX1rV7kMD40ZBotkdwyqFWbe31OBJJ%2FkQ6ls&X-Amz-Signature=1d393c5afde2babaee9fff018929354a40144ef30b609cecbf6a5cd2212ac95a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
