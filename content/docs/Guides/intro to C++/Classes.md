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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLH3VOXI%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T190914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIEXt5m%2Fz2pptl%2BLufHlC%2FJ9y8Wz9SzbimklDZgBmuGrmAiAO6lkbOPgrbpLY6ZGaPf1g6XUw2PjwJVcOFiCYcvulUir%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIM%2F9TqycxaTnyqTyw%2BKtwDQit%2Bx8ALZrElk%2BAAKrEvzmghbLdNDlAVtcSeQDFyJljkpn3fqxA1ArwUJzHdjmEQvyrGkjCkaY2rD33UI33L1dPI23Cglk76LIihhsuJzdTp%2BQsfd4qySDVNuVpzjEbcWk5S3CWreowmJZjQhr0q78Z%2F6LC6eFN5XdE8ZYDJrPII%2BwXUTis3R2lfNLbGZUGgG3NtCuejEB5AhmGWxsY2yUlH9QPO%2BReKv05rQMcUO5nj72Ia28bRyio9jikP8D9%2BzocfshS0AfzIdu5OxEOk4iWdVfIwkVct4rrd0y7yD4SncjbL8g9%2FN%2B%2BUC3YZipi8MEHnGNtMOQh7WmvrZfzzt%2F7lyc0rwns1ut%2F%2Bd5%2BnOP2N0O2sNgdgl%2BI3mA7LTBw9qD%2BnKm2XxSk0PW%2FWkE1Za7j%2BqZEE1%2Bojtfeik%2F8JOKtn3WyQ%2B5B5kMNFN73215sVz7w5QJdKdiPagV6C1xvaa7vwbNJuerWNeLCrKYkU0%2FTpQ573trPLPpDxnJ9O7ozVQgyQMzgo5yu%2BkUBLVeyBm2JN2AcYVatDTxpLl56mDGJWzn2J46XMjd68La7JKB2zeHyUUYmkEViSZh%2BRZqSpXVWcS4QjPY7lxFvE2y43u4kvp%2BsxC%2FMEsH5MdQIw3uDfwwY6pgEzhy6WTgasrG3xcaweYEbyOPnMIIpxlZL8zjmG%2BJR6nRptJMrteawUNL1GdXR3IAIYcIUbHBX3GDU3IV1b93pJ0b1Ow9f2fFKdu6fmPmkyG3PbBApsIzLwocJ0A5W6oEiuL9QN81foBYdu8FVADOuDVIakTkrhz9Rt9J8K06sH7MO8rW3FxG%2BfCarePTtwwNjUkxQ63SNq0BGKVYFed5Cr1rcSe03R&X-Amz-Signature=56cdf7bdf34c202c18f01894aa7174fc7c89ad9c1ede1d355b09ac9d7c2d4980&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
