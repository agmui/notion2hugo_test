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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNNSC6A4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T121140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIHJE0S1hKIbsqt%2F3S%2BDQHAnamy%2BqqgTZ9P0ZpebIG1bXAiEAi%2FckZ5zfCa7PAo87iXPWJqJwXpxa%2BLnS%2BSV8ev0EUj4q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDORmxwJL3uIG2UaUxSrcA0ExXagqaArCGv9vjoAs0U1O%2Blp928sAsy895dY0IJUgMmdf4E3yqU76o9bzJS4iCDliU5J%2FNJUlxjqhB5GYs%2FIIV%2BhfBcxsrn80KsAyDcBYRHow8Va4xONztgl3Lbqcg18MrLJm1CyWnNZlvHeVVjcj2qGNB6l4KNLpZK2u7k6XM1Ab6naaHtmGV8RF%2B76JvQyeRVykCHqMennILu8IPIxQqmWancbMxe4C1qRZYuvEFMezkkpoS5NMP%2BiRRImOfAkcv0puvS2D4OWYoOKzsQ53IWmGqeNADq1CH8h3EBlWgNiyRJdyQrJ7NxoWU%2Bm7sH%2B0TWOyb9tHAaCj%2BzPgd222aDLKcK5e7ckVvc6FFcyM310ClAbbxzGUP4EpZMRiMuxnn0f%2BBwEzJZOKOvdsWvqWi482yAT1EbobwAiH8oQwfV1CQOy9V9NQrXhhT4VXgdpYrk6XoFO5rnP40jL%2FuSFMm0hWFJJg8F0OfUJDlHDmtGMKyl4FEALBtqjiPwtA5OlUQ2MKiXfHTCvkWxTdEHJGaJ8FCUMJdWsxrz0cJeMUg4Aof506rMQUmCcJasjuGOQcmrkWBvbBkzr9b15Gq5dIHvKdd6ESU1tbVyD6zbBk49QLuRpPPFNvgfz1MLbtwb0GOqUBOKXzpi5CTKyj4rn45nxiqM4dv0wTTdswfAi6O86S%2BkdJlUAMx%2B030CWrAHsTbD0pW0dqnX7S1nFcOqDLDkCkBOqoEkwc8wG35Okza%2BNaKUAzTaaHW2%2FUoPnBiSvvgOYNZkW6vw%2FD59WrHYpBpDOXyofzg35YS6EUrwODmj%2B8Et2VYpfRx3iLaOFaJt9Rd3oPxU14bo3jQZgbv6K2ffe8fXV6%2F0wi&X-Amz-Signature=bcfa15f6899934cb6524fbda00632b61ba67bc03346f2fa8ee6cba2721f8ab69&X-Amz-SignedHeaders=host&x-id=GetObject)

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
