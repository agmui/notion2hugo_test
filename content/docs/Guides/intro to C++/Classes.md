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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYAZVHAM%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIEOc4kUnVIalFrLRCEzZ%2F8Nr9LmUwRw1pRt%2BMbW3wji3AiApb5TJXaknWjT%2BU0a%2B49aonDrQKF78aw8i7HXR1%2FPeSyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMJ068A1LHafKDMbvuKtwDU71w4ivPVvXnIK%2F6Bjf7GRttcRxprgfqV9y1UUiGEp42brxtNjfeXXhYhKxCqKCMEkgdBPBDODZxi5Gh%2Bv3O8WPKNdJ0aLqR0lsnwYCWRiQT5dVuDQ1KMJRMVnyde4Jpm%2F%2FYI9QcHn9AxD5cfqrKGQb1coaHkaR7HGTXKxPLZ5S2cQ43L5Q0ShIqrEd3BZmCMBJ4KiDgMZjhMcQa1jvD%2BA80BjCYqXyUm9lN%2BWeVavd8hMmUZsVU8LiSSAfYvwB3or6lwcsB6Om9gfcLZOVoFb%2BF%2FUK3n0TtWbA38zrp2uT5RO8E3aQn2T4st0fO0vjqnlzSW55dhKmqXRdA6vrnheGee46bZUCP0eORbwKFeu4gpobrrL4jJWHxefEi%2Fm6ijloVII6OItjoHP5BgaEKpX2d5Ky9LlFz6SRQM%2B6rtwBdNcziq%2F9536OTZkncWUWQJBxyYY9lintR7njzT06fI0sEE%2F8O4rSkDlv5wYOeDIitbQZPP%2BT%2Fe7ijf0z%2FH4KlkP4fDjIq8KpuPOjBsj%2FlkO4Su1DnkNfKAa4GSr0qZRiyx7Xouh1GusHuXiR6lI%2FVSL1ev0HEm%2FKCbZ6oOW8g2J2Y8WmMTWWtbN3ES%2FSmHgcLz4iADOBBHmnUMZAwm6S3wgY6pgE1nAXyiLvUdNZuUC2hbloOhvix0DReYDTVN7yXQOzlmxKmXLv%2F2uwpiX%2FBcznrC2CAtEtBzC1p7tYP4067PUYvGfAE%2B2vuM09OqBgTmnX%2FtXGSi2veIz4PmG6EV78YzWbezXwrBVebeCcDPcZTSdze%2FhOqhIqfh8OlKWq7zYYtPZwbfnEx%2FiT1fJW8CXd47Z%2BGsQ1OuCL9VL5iFkOsAwKfxBs%2FLweJ&X-Amz-Signature=7e605d31fe41c46d0201006c6b05103a66ceb53675cddd2aaf09cb958338db7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
