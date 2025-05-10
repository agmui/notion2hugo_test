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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBV6PZVA%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCyxyfNv4rMigjNS5VGs3tN3uTQwB579%2FCy%2FjzT7vOP4QIgSHIHJ%2B4IQfU3TNtxzQDVhc2gK5YVvNlaWwQcN%2FoQgjMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEldZG%2FpxZrmRZKHSrcAzNm%2Bo1XxjLMwx5wnh1OSuYA0Exh6atmcMrQCVWNLxHylwxSFtniLVDpza%2BZP9JXLzjqYnIAwoIx%2F4B9EFtNMNiXkUmIYJeEOGANLtCdyI0uItZJnsWMmINlMvYxIr2Ngh%2BMgB3nHEX%2BowNgmPrXXOaC%2FSWPrJQ0atNXN8gTYPni98OkLyHFljhwGQ6yRwXi4pcy2%2FKhZM9PDniC%2BBYML%2BC1KSM%2BlaR1K2aes0zqfpcSFnxlFEry40Sak7ak0AesUyq9FZrJ9L71W9m2oFs4Zj%2FaMcfYBl3l56JXkjreRzT%2BmY%2FYInsg%2FhuCKd8UM5BIHAkmg38GMcS1j%2FrZD3A7f70sZP7UqjSUhvGu0Xk5TPt%2FtNFZbgrS5MLKAj4b5P8QRpEcweMKFoRFdGdxMsaMfHUxl2U03jbW9X7lnFPa97SYIP2dB9%2BrA93tr7CW7v870lK7Q%2BY6yEpRA9B2dNFQmCTIVedaMLGWFMWjSCXzVsrCrdFJAf8djJMyYaRnPMInLrTtvEEQdsn0SSdnc%2BcjiRuLU0TRw1S%2BvjXbkzNMO1iCHM2ZXbiyiSFflMEdRTljge4AgU5vlSUQetntjgctF3KyIiAZXCh1C8Bj8pY2LnfC%2F5uYbQhP35EPWqH5MM%2BK%2F8AGOqUBbJj2K5CBZkNvGpGPQirCKFq93K0Xc9qHDsHnnrx3q%2FOX48MtFMKMcm1BvOMBPViIo8tV4KgLtT%2BcdyNdXVhr7mFkAwXkqMfsi6H7V9DSSrbO7cs%2BWkk6Ioa9KHtXMHjoCe3cnauAjWPQkVQLz9moJYMWBACxnIulctaRuidrADfcA5oabwNbWKWaCDZb8%2BqzwJeZRTXx3YLZL%2BxwoXFvP4Cdx11%2B&X-Amz-Signature=6d670bf7696e54f7b8e005775f957e681e110a1c73f596c5afebeb06538b122a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
