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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBPTRVIP%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIBDJz0r2fJD8h8e8YS7SjQPfAjf13DSXT7PozKrkH4W6AiEAmOHIGcFvsvZCnMG0OWkqfpN7OoAFBYm4Cfw6NuKqp1MqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdRwtXRlnX%2B5RYkWyrcAxpL0j%2FcuhTreAq7NtJha7l5eNlqlsVd88fStFtw6uefrKKWl9t3E1otnevKEtagTDdmwH8DRLuv9kb889THGIPN%2BtAmSnR%2BwQCoRcKyLG4vL8NVu5UXXWpyFhK9C0dOCtIcREcWfjsUoeFL0pgAWCo5TPpgADNVPKNROYd716eUKcqj7vGkzVHHqKzMBni8IAxZyQc4oHiOsbyC1rB147UPghVml6oEl7%2FfNqOTzUo3itzAHlCCleabsfLSUazRPc2OTsrvM4obroE9UNvlW%2BgCeHhkdirO2g%2F4rSBlKusgV%2FhDm2P%2FvfqZYHYfOC82nNgDBUt5BP5bWifJUUoTT7fI%2FroX0bnsiRvDS6FDeaih7tBXe5yC7tdOU7TYKM2fkj452ORvYZr4GU5HfFA%2FnY2cFDyG7wZVg9Vvl8j%2BBPehAjNzjrqOFCfxXUrn3%2FttiyqC677h%2BvfuyjTsaUPBzSGw1OZhxqUz7hfYGkQfB1QEyjdevjY7SD32Cdw6IWFbH7%2BTyTvTiZeLbJVg13YuHiIfN%2Bq2W3Z7r1866gZtQ%2FA6bR%2F%2BfrX%2B2nIwsB3gheZokm9ihqwJBp0ZHVvAdnguORBNjiR14iZJtYGWmMpqOn%2BIB%2Fmq40CvYZlud0BvMKbEwcEGOqUBi%2BSQSvQjM7ruXN1np%2FYA%2FoFfpzkaXiKUDg%2FxrVxfBmS9yobrs7n%2FRc34yuDhOgsh8vcUbNfFC6pxUDruZPQzpPY%2B%2Ft6m3LWRwTwRjxuYDmMLq89CDhGfXTga3me9t6qb3zflPeulnjwLFoygRjJGFMgUH08IWsksvc2F65s73E%2FU1PP4MADlU1s90C14AZ8B0euVuRQikwSdUMyaJ1iDlArnWEIC&X-Amz-Signature=c077c28bf95720dfaf4698d5541a13dfc36b7f9d152e3c9a910d1a48dbeb2e18&X-Amz-SignedHeaders=host&x-id=GetObject)

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
