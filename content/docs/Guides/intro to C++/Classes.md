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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJRNXCIZ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrHmBTDoYKRmudRgYPHQI159pMxl0quKZzYpPN7I%2FZPAIgTUjR%2FmKCSanbl6K4xB08dGMZb3He38OLN3tTKAiddxsq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDP0MvKZ2Q9tyyiXAnircAx4Dl0EApXSnD60vOZB8oxMJ3O%2BT3FXAOhOSr5TEvfDl8icoH2lrS9qg7JFBje28BeZN%2FN6Zno%2Bh64A1zAYEitrdU3ixHrWRI7eBO6sIvyi9zotpxXmbz46L2vxxjIfc4q0voACzSnfdx3MCh71oY%2BEB6zm6%2F%2FvoOK86TeaxYhHAj8hq6XokunJIIPdRPlzvh8pwy%2F19C%2BF1AXoM5JNmOLwr72WXNnOzprppMQ08y3rywUFs%2BdzCQQtOO0dbgqqG%2Br7CrjsmKrj4c%2FTdODDNAHdxW%2BGwaU3JEiTDzMmRLD4kY1QYx8C0oe5GEzrxo8KIhOetI%2FeW7C7ZS6vHBpZswwtENdCpEDbbAv701pgISsNVT0FmvLzxSeKlq4Gob5cm2LyYIb1FSIP0wK%2F6H4q%2FnqShsULSEUqHsZppp689Z4R6G%2Fd5yJTCEg%2FPc1QmRPJ5iNDlRykL4KD3XRjv1CrIUjLLU5g0LB1Es%2F5ggCogVziYJk4esyY7eJ3Bwt8roNuJlYn67bT90YIOG%2B7iCUOLeK64YMW%2FDlVdWgw8T7QCODxT6uKU0IO5Ujcq1q4%2B0drNhnAucfVjKBla2KaftNmEVPXsUCesTqWHQERxYVISXatcR0b9j%2FltJ4xQxyHYMPvn7cAGOqUBLpEuP9McAi%2BrrpR6OWkfx4x7cK55pq%2BhTMHviC9qPd37QWLlRRtDb3vi18CMXXR%2B578HFskAQeTQJLtA7uBcoe99xQVOKvGZcSRVkgIaVhXoa4z4YeMVJAXHnqk%2FXtRbSCms48c5%2BdZwszZItLel2%2BlIYpPFJ4OY5gtciBNgj48WwbQAMH%2FJf9A5Kh4pZEY4vN5Oy0fU6rTE0GHczZKl7uCf0XYZ&X-Amz-Signature=aaf9bc521f1b9a5afe261b94cdeb5caee84ac79664177aa4d3ecf74323d1b21f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
