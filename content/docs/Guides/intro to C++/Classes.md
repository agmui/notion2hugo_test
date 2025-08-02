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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ2KCFD6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoB4FZNmPKCy4rw3A%2BX7NxwMQICXOkCWsoR5qSHGCgfAiEAxS3j4tgC2QGlrkupgFtT%2F6lKb%2BI7PDocngvBC528%2FUEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDD8bWe7tuQamgksp2yrcA3Jjx0RRfMCbIgD26FcToxmOQ2QbsE9o9NbszgRJCT9YBCtYJjHRpnAjUdFo0m8ezG4e5HyaNlxky2b9ESzbsdZFEyHjI3xns9%2FKnkFxnsFh5J9lR7aveDkbYT3Z67P8gQQAX7RacV1l2B0ODfh%2BcJTqWFEroC6EZnSp%2FrdEXMdeNX4hNCq1xrjeP4EboBkLDYopo7SUZ5jcujjeHZ5Xej55NWLRUIBfER2VDnJ%2F8Cu2J0jAKAsrI0HDZO1e%2FChBP0kxRN5Oli0n5sgkswR98JRkg05IT69hkIeD2BL0L5lFmKJt%2Fz%2BuC1N%2BAckcgdLpvxroD9frEAmR9sCOEjhh4r3Ge2jNh6X222U04rnRwa4UQAnHpx%2BzwLYpPQI9mi6PD%2Bg%2BMw%2BnbeeKOf0O2KqbggXLnVpcxuH52qvZro%2BmWIGlFvQjxbOhe%2BV4qU1yPjPLgWFm2LB5fse1h%2F2Pm7vGH9vOsHDBgWyo%2F2borBR%2B77avQzJJYSd%2BD5uzeoSSo5XDng%2FVoat00CKhpXCtvYsaf1DJOd4zbH3aa72T5ML%2FgXy6pqiyeEQjp63CAr6eihHlrvZMW8GNYSjtcupnHpQ8gfjUGLS0kUrCxEH5qz%2Bf3I%2FAkIbdcDb%2F2hHtXpSNMIyPuMQGOqUBnmT21goM0siSspDyTfu6rLrNnXSzTcHBJOJoBpYn0o5Rkwo0EgNiU%2FLUiNMZx7YMUKGgrVlPeX4JmGOHzBD4ZfTz7%2FchMU38UTEAB50VejDin9fkRdKxSOuNy7Gwq8rQikqx72IST4Kg4dsTCgPN4W9tlCCV%2F9a8o7EDeDu8Sh8H2%2BRLQFgTaRjAHWYwN%2FtHUEFDwai6kJTPwX8uEUXi7cCtiHty&X-Amz-Signature=951deed525c68bdd7a6c33a69ad7723c75c644d13bf20cea8e0d2bbd1b61425c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
