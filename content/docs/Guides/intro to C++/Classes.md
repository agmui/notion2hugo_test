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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCPEBWBS%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHYm19SafARZZX7tOboHiXkctosVQqxK5pG2RH6qEg4EAiBzokrdkvtvjk5hjFKJMrGlpFef%2BR%2F4PHvBsDLcP93aYiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjDUyxaJlkLZQgKC4KtwDpjkX8%2FWnx9Vc21fG1jfc0nyK7LFtSFUL3dXbSyEB4vRXKDZmUQuQIV%2Bk7HQGB8ecPQ%2BwPSYM6iuQuo4xoREbr35gYBF40IrOQ7iyMJbZcPm6OqVz9ocDx0KoK2s%2B9HS7MT5dTtbdLKi12xXaRpFhKrLdk1AfiVkEjNMbasE6Ij3mauS4vQTT3%2FDrMyoxcimPhok9YcGD%2BdNMADLqIo8fL%2B%2B0m3K%2FcBM5%2FOxdVV6pqFj99FBzhE33erwMyAk8gCNxf3Ecl6Sa4eSa%2FBX6secWY%2BKgeXgHWhbpI8CJipvpNP%2FzueXQ%2BMePP7jSmFcM1eZjCioOI2TMZnvRvi5Z5pwMdNC%2BCwnRRkiMICVkmP4OAF5gqRoyM%2BIrDF6Endb5iDvZu0Nkv%2B0r324%2B%2F94ni8J3YfGGf%2BEcr7yyG0TOs%2BF3bZmYtSNKuCfmTG8iBPaP2InE41TQqF5ir6sgFnUmpdRijLeBXX5BANUKxLH3oHOa7Ui8YFF7H3OEvNixiBwtBv4quOQkBkNYEjXwepAdUkCuLVgzC1p79gaLM%2BRI%2B5P7Oq0hKFvSJbw1TBdCdfhnilxHfU%2Bm7sHoGU5sURtZ2dfdb7B3Wm4dGzbWEF9AvG%2F8KQnIjVUZOOL62bmm%2FOIwisjwwQY6pgH%2Fxapk46VFrSoQlNeD6niACqIvH1BKkALJDWtSfRs7JKjyiJ50qPW%2BXmMTesmkzVXbpteOYH54Ix0D%2B3yOnI9S%2FkPtxcei82CssiWccrPTsTSIxs5mJ7HZwHLyXrB3p1y68OPA6fatA3t%2FanFm3m2JjrsYac7gomQpbOpy%2B6wNgG9gT7ppCj2mxIHvhiPwHacw3dPjgGAEXxnYeYSwhdyvShsxCocn&X-Amz-Signature=67759a6b86f89cea7356eb0f1068ba9c58a05cc6e5c5c8b1d725493f47ca8b36&X-Amz-SignedHeaders=host&x-id=GetObject)

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
