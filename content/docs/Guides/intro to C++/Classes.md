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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R324KG2%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDix5DMosN54Kwb%2F6aDLDA%2FoPs0IxhpjcHVtLEPkXHMhQIgDEA3GeHAU8P0GsCyFBJxJTHHn2ZKwFiwEz50ZlBnfNEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDNfWDKN9KSUaUczrvircA9BIHN02hkpjwr3zQ5lv6K8UEG5eidgjcbjsggI1RYZn7DByuMJDUUAjkw1O1wLemG2yUcj%2Bt9rwidetvWo0JCeuzVj6p%2FA0ECz7dKrozOPZZpk87vAhOmQ9L281XfvT4EmSuskfw6Szmr8yenlxQZlcsMowMAU5dsngH4eAq4MO%2BBOMXoBsHUMnFBe%2FZu9nYklHcMnjJ1yXn7vtWtY%2FqX%2FCLXsziPKXLbgB9JkAPPyJzAFHhy78iHcbx75vbIcMhgGD%2FnFGQs%2FFhAFi5ti9KOUgX%2BtE%2BtkOQjw2LbDpKyDLKxfksVPQH0cOT3j1H%2BHEmFC8LvmCowrUrO90KP94zjin3g%2BtBj%2FhGC6RSAgk9P0p257XpNDSD%2B2uPAU8SUzQ8qdcK237Cw83BW05IXsn8oHjFW1h3Fs83tB4WeohHro3X2QES%2BGf81rQpao54WqgNjEiyj0JN6TWjD7LJm2tSi7B9Iq0OTA13nt68uJZ8N7Fcvpeh2t4WCcpRuiQ4l9G%2BOHYFeQDGvcIxqhWkYmvN49TWD8Ev%2FT6i7QX0Kcn8njenMDPI2kxHrgWyc%2BIEEGrZu8qVtVv9XCeV5Fit4SsC4%2FhIZ0iBwLyTfgIHg7UstcN66WSqZN3CLs7wWjnMOfE%2BsEGOqUB6b%2FvOHxzASgxOB61k6GXfQBTMyWX0jlSNESCl3PBbx09UKA1P95r5ekXuDSxkIVjKnDYcKJQlkcY%2BgUbREinI8Ms5WI0lARATxDifjQpEG0IggPhmqTcctGiv7eHMi29cHwO7fOCc5hTvD5RvU5%2FfWy3VMu40Ug%2FZ5PHMukptvvDot%2BFgvOUEB8sYegebj6MkhdkhSfEri7DzBfUU3Pf24i2Soyp&X-Amz-Signature=d6d2d0e3e1eee835465f171cf65c7959c451301808ed2886aada7673428502ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
