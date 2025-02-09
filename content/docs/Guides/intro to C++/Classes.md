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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623P3OU4S%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbfzM4TOSAIyuLDWyxB9n%2B5CfTUzkyVQB6SXcgMRjUtAiEAnUaG3VSAkS2HweMCv%2BTILLCBnN6B3pVOF%2F%2BrTWddPLcqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFx4JTYdwHiwxojKWircA1fWO20k5M7GEYYhbH%2FKGpoccA1RhS6vk6%2FCzfoH6mwUGnLJDv9ZnS8Z7KK3NEKZuYAbMZt9hK%2Fu74add66McQZGkVktD38QjRDl%2F3JqR70aBGqBwzOGdy199tGpslG9twy%2FxV4ZL10Rs%2BJI0SqJDglkXCjFKyZa%2BS73k%2FrX1QfuFW4wQP7zUFAieC9%2BmRGE8FMuHwT7wV%2Bh2gSsfS7xQBjBOe8AfojaitwLedLFmPG3zUlMab4tPHZ1zdqIyvrgBzQDG5PCNQWAZ7mh0%2FlISDDrTqnDcQAeoBq7WYJukEfhB4y%2FKzCn3iacILqX5Lc3MmMbhlvqa%2BizY7muKDVTev6rdxamaDRjARckWBcapIzi6gs1cmx4lLNDtuIxv0yiEd3V7Y4OWhQO6r2oCd35JcMKFNLXQfjQAwIdJc6zvT1yLU5DxjyJPiL%2BJQo2woovr81VLtmfqWfpnwS3oHkXhd3T13KI6zgxms2RxhXcLOOnC5fCxAPno7WfrasSmOgTiNmGgzV6PkRkKWIoUeMNKTH5qGMJsVau0PUAoqALceHJtAoSFZixZSIFVYsrya8qQo%2F5gsBCmbBzcx87jX6qKrlvlGVcrfzIeQ3ohbR33w7x2FMsO9OI4toyor9lMO2OpL0GOqUBjNzSsYywIWWhT4jA8%2F2EFoeA7KMCfOiMVQAKpIzXu1zBkSQEWp%2FwarpRMDM3bKaFkJW75kQR7aTK9%2FG9vZNQFkMJi%2FrdPo%2B9qM0UIOiR0%2Fwpxwoi0aSo0l2AefM7Zi4ymI%2F8BwqL4Z0wyRmrgi5wEACTFSugw589rTLJllZQ4%2BDtYNGz6kLuMRKKrXVUOxaipf6tBQZoCjcmDH1txR5XUe%2BME9QZ&X-Amz-Signature=9e9e0915cc06b853e64bcdd16bc8d1343cadb6c20242c48b97d1a59de4e61fef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
