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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHGHKXLD%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIH%2F02cI8In0gU%2Fc6Cao9mfBkU9%2BcudF4sNITuKfJvQKmAiEA5o%2FiGuDkcBnihGRlS8vLW%2BF%2BWGI4ojl%2BE8duFy6xu80qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNXSIFQD1sG9nDbZEircAxedah3A1Vq2I%2B%2BEhaBUIlCmW1G0B5c8JeLLEfmoNmvWmceJoxzSlEfjh389i1UOqUts3ofcvD8fiwwXCt7G2q34o78K%2FawXsXJsetbu8%2FjyBjw%2BWoBbkfZGOcJriPAf%2BUq1c7T%2BMvSStcMWedf0gVdcxmTlmxEi7Ag2G7%2BgZ1sAMeMDOLr%2FXNVhAY7veB4HgwSphe51CHnMwbxhpe%2FBd%2BbZekG99gDYMF8vm6X0an7YxLlplco7ZlqYMx99h%2Fq1cZvVprEOFTDsynrG%2BAeICizMHQyXkHMvBp2qdwusq13iWDXjY88%2FX9uj%2F6gfZa22xRkgO7bAZQB0MH1lRHB0veEBF6nctjScH2msrMf66klULI%2FuoCYoemgsgvLBvgWjQxdtg9qgAVLf5P3GMW6U39RcEXdob%2BUu%2B%2FZidcLkTt%2BwN%2BJIty2vOBna%2FB%2FVz0iqCQsD2vLkrDIUQufFwaAkkq52sZReig7OYn%2BYHBQnE7LzBQHm6f9nAxZx3kRNCTm57ABvCVzhBSOWskmst3%2Bs2MggNntPZDqB3B1M0lpD88lKdWMBZo8BXEjKRcMAqf6J%2BRTS2YpaD1h9qLvsFYTrZ%2FjOg0hkwbsRleP40ZwGkuNcOEdhfxOeNZe%2Bb62XMM2n4sIGOqUBsk06O%2Bv3fIk%2Fjke%2FVpNF%2BjuXdGhy5AafTwS%2F3g%2FYQFBFDDTLprqlF6fZJ%2B%2F6lARMHlTe7fgbe47A6Rz%2BtjtrOLsee3y%2F5MPJM%2Fbyo3TK0pGtz6gh%2FRvttfoL8bldqgP3aiRnIjIdkzSolkB5WbAMWs6WoCeRA4F%2FXm4iRQ4jxEjNZWAuL5NJtOWspsCiV%2BG%2BYMLsu6niNnKWV8x4%2BH0xotHv8l%2FK&X-Amz-Signature=bd12afa772e1f1862ae54694a09d3ba9f65577f2bbca304b42b024c7d7ac6ee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
