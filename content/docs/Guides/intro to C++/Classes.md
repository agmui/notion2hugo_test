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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGUXSQUC%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHk1M4VANsPqtod3E9yjUlFP6MsK4rnqQPSFVqbaioBmAiAfIoq5%2F3bayqkY0JzoxhNcagZlGP37ti65XtCtXjgI2yr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM81vds9LsBMQYBD15KtwDmajDKam%2Fp9N73vKPA1AYeRkS9dwDzxv8whxYgWnRPHrnuEnhFMRUqSEZrgSSKeVUE93pVScawhVsgpehj1rDyYxKbiX5IZngc0Qe0nwHvDWwbRoGB0XcYePxyJBsdLxA00y81QNvhyjIU54usdNZEtCoqLnNdgk7jfY2uc%2BaFHrgC4lGqMdJmV%2FPmnnST2UvuFow70bZm5o7LdcHrCATU3%2FBTcyNs3tyI9yCECpRj3KFEgsfTuqPkubxgaExpuuhInMheI5UsPmt3pwcP04QBsGb%2BomGueilSWp32DpZZfI96ZZxUvZhLApozm9s3ljuDIFQTS%2FfJDBkthoTrAunkwDu2ZkF%2Bl7TMCrKx3jG7nLwxRM1k2BgbS1I8ODiiRkl1klV%2F%2BszAbPEXxqfF2QyD%2Bb9RTS5jsiuhEwpTsf0KLhwVW%2BGqMkQHS%2Fn4h6kZNg2QBTY0PSddaLmzhssORBHlnoT7arru9D8sCNbLn8NulXJoH6i1Z2oQFR%2BP8w9rcKY8WAT1lFAH0oQMK6pAlmPS342zgpSfrb2XocupqXm1ZM5ls%2FgJH4kDMjnBF3s9zgdilEYhQmN9SVIN4XdS2%2B9sHsicnO4y%2F%2FMzjIE5U07Z9hf6FtUyiEXTxBtfWEw4byhwQY6pgFwwT2PXjuX%2BGa8X1RO2Gecv290AB7RJgtmpJZqdCiRWqO7aFc9BIgM2HYQXi7m8K3VZg6gL1STTWDPIeQLxi4gwZXUzFEFpFvxI5MtunQi4%2BjYPKwT8G6%2FqlUFha0mGgYeithS6X%2BvxQxe7fydOGOuVJ%2BJGoofYy%2FSE%2F1Ofltag57TqC1qqycAupD3hEtJEqJZQZE%2FXVXahR9ukctug54Z8g09gQfl&X-Amz-Signature=3b29617033b8dcfb2f416523b91f1dcff78de279f2d5c2aed04d65fe6158d87c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
