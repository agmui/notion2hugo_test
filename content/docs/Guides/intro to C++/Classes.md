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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3EUR4YV%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIA6xQg650NBo98SsXu5lLzDpXlWFiliSHftuyuJ3%2FkX%2BAiEAjLqnD1CgI6gtgKpadOqThxJ6cMNQ%2ByDL17q9SKnATo8qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTUDwLDci2wjG9gfircA4QcXnFy1hSd2Ju25CyfPXKzUcDRDWUiYpnyVeTxPeBYzgygAev6JYd2k%2BCPfpNQOjfYz9q%2FooZXgOcvPdovqG140NAGoL%2FgaOtHh0d9izG4PsyVph%2BKRhHJ1EA2bBHz%2B1WGPWDwFMpV939hVDB9OqgBhVjt5CFP0B4EZOnQxDdBZJP9Uw%2FbTSpmnxdU27vaID0IPoBvAdQXPS44ONanuVZSBBkD4%2FRS3B04aKi%2B0XBxpUPpnFIZiwJ4xL7hNyPsnmiO0eH%2BwjdUsh7%2BybB0FPkF9YOherpXLxKiHwPO0zw5LySiTsvzP24X2F8t0S1RMqjAHbU2UsIVY%2F8o7UrAHLs6qP%2BTqVAlvtPhlTk3Xh%2FVtN5oSLAzIylV96tuDPXse3sq%2BDE6c3%2F3bV9NKydWRHKfePIjTG06bEbXqidPreloA775viDQwyVO4GzRtTNGXR7EPyAcUVDmhpu46S6SoHNxkFgBXBINmg%2Fk%2FTTwZvNf%2BiDP9ebAOXb9reNmx3LjGTPE6SwuubRJcorZMb4K%2F6Nmn3EkjC8iqCReeabF6ry2rKUA0qNqJdfyI94T3v7cGap5frMfM9xDQhU4sqUFp%2BcPnmPW2v4SsYNd%2FJSiZp513xlz1S0B1Wke4MYfMKbm774GOqUBJ3MaghXCzbTiCQwghNYDNfdi1uYcQpn2r8Ul4l1q6TgX%2FgRgx5yWrINcjCukNzMx7%2FXGngBNVGImRLozND3xg2wQljnvey%2FRbrD%2BngklH3cI%2BODayB7MXriL7rIMxiqhWRFf%2Ftph5IquPDRvRvP1rS1IW5hYwrzrfxUkDefhxs7I9Ll7u%2BDGl15jIbj6V40PED%2BC4gvqwRhbWSruws%2B3TzKmBueh&X-Amz-Signature=39447d8d4a29530d88c47f4bcf09dd9b3e0420ad23b85b3e4f1143092aa2e914&X-Amz-SignedHeaders=host&x-id=GetObject)

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
