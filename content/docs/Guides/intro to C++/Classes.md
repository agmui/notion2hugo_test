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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GPYURJI%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpiRP3LY%2Fxo0eh0tO1WuN%2BQKVopwRDQyzfvV8YQZBCHwIhAP%2BLdrtwfaUJfQz%2BlLBidqpM0zXQoVacwpTpP9dvctZPKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUZHcJMBTAbjzcAFIq3ANd3LAthAktiFoiWmcmLmZNrCT%2Fg0mKKhQPctm0%2FbbGaswWf6hS2LYZAEeCL3yuhGfSkKJ%2B%2Bk8s2neNANtXZQFMvMMEJkBlI8dvy%2FhY5ATzmG9FbcN4qjX3OzSK98Wc1ZYfjLNXJw2L7fwPRDVLftNJM8BxmRk5c9BkMyE7DHhB8QyvxmCXUtSruGe7UOoG08AcOUiYRBdhkOMFOLungekMjhgIwOvcqrGX6kGIX0FvAaD6uklmkwg9JrVCtrZPoAq%2BsNMzWv7WDqevmOeXIvW2WoWfwCUzZpOIk2joLd%2BXCk8fQbqEnBP2Qfqj4ODK3ayG9tTD4K0Tyop5KnSxdiCqH%2Bsl4lrYFdO8JEuGtJIjGBKs7w%2BvNL%2BwX2FPalIf7tJUGONNO1t0gff2Hp0wPLeFWb5V8eCXwFhj5KBe%2Fy55ski%2B896jiiwPstXyxiOgryAkw%2FzF%2Fq4XANGtiCCiaMf7p4AHwMV977T%2FdwhlbUeKMXgWBqd5ak%2FJ5xeaitxcZunHZ%2B7w%2Fz%2FEY2AYF96IL5TQ3tesY%2BAuc4AOHwcTv4YuHp4HMICYCE94QpXIvKg4pb66HM0HfzEiM7OxXd8kP94PCPp7PKlR%2BIncDv6t3dzlt6xbD%2Fqune8nTM70mjC5tsHABjqkAafegOkVIeXrAXrcE6AFgP3%2Btfj3Mkjg9A4yzrvURnyiHemXU4hoHVk%2BgUre4mRM%2F2w%2FzVUsQdQvHtsBPTD4UZrnB7tcogkPo4nZ96LJNSKcyXkCxHd4q9ssJx%2Ff6ZPkFY0utA1m1CaqoSU%2FAXZ1nROYuJle4OF8fU1BF5GaCOcDy3P4MpPjuTC5g4WFmR%2BJYSQ5X0xDH%2FF4bv6i3bLVtj%2FMt%2BXy&X-Amz-Signature=d61caee7d7c53d29996675e10e4192d8f45566c46e3e560474b021fa411dc99e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
