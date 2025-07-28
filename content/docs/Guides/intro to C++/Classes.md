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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QLKPJNM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCdEdKRYgWGbc8vCBp8RG3%2BydOZjQJPVsQPpyjSGJiEiQIgKaBE4F5O8S5leWwbLbf3NFvsd%2Bq63XivbhvEDHx%2FI4sqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZsjfZLYQcEIZv6ZCrcA4Wu7xHkAWE1qXElQ2hbFHNQLD%2FCCfQlFLzyrC6F1WTxdOzwIKX2zVBzsie80itSZg2aRYI0yxtSoKj%2FptuA1jQf0pgyxp9l5L%2FODgux2fiXA7zeqJZkXFsxfPKDKL%2BJjWnLtiesDujUCa3JSvcnuC9PNz%2BmxMqNIcC50RKK6ymZTyzfpozaiXYmyiaNygiTvssOaPGBKb1MC00CxtA34vt3SNm1WIeZmdVgAntSwS3pwk95wuwxoOsBxQIZ5Wujhh46xzRJznggIrTCzApN%2B0J44gr8osYIWiUUTHgqr6gT0ujw8jkxXFeVtZtr0at7KbTYWolnkw08YstHGG2pnGg2NWKVSN4CXsRuKoTOPqwMdbSpfqC2vPENS32RPm374Vnqw4kajbCEYUnB%2Fay858yxRdKLx7X9WM2F8r3DTlzMSiVvan0fWmt1c0ng%2FKsulsWfIV0siRBkR27kOHcqt91xyu5k81EEuNWLrb42Quix6cEsmQ1mHOW67gbOfBJkpVZYwzRoxcamsF591OKz2g2npDieqxPMv722mysJ8DFGhvaW1AFP9YcSj98MDGVK8MWK4GPq7RFwJk6trrIUEVeZNyUlys7R0HyWIxNrh7pXt%2FRHGmO7f63zOsTUMMCPnMQGOqUBx28LBd5P7dzx542DnayHrn26t2XR%2FyA7IZ8rAjcMAdUFLNkSQSkuLK%2FTrx3yxhXeMhAVckYpH%2BjVsRg2qJYTzytfGUKXGYZTOrDDavoLx2XQ0Nn%2Fu8Jqq7BmRp0RjZMQEMZblncXVeASAZaM%2FoFOrf%2FPmGeGeQZdN58wCiaqJgpgmU%2B6CIrnrzTCdp0q6an3GmOw%2BJUFbGBcQ3V515jkpzG9f7pW&X-Amz-Signature=2ee7612547c4b2d9892d9d91fba98da9c7f8a5f402c77950c3b0e54996990b9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
