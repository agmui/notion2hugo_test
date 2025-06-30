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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKATBAY5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFddNHH4N%2BgFBjLd%2F5p8SzZb6rRDJ29%2Fj%2B027UeVHDWqAiEA0YWBs691WBK6plkP3s%2F6x%2FeWPEhigTVdoz0JnoMYv7UqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCBoL3ZgtAC88YZyRyrcA5uLT1QmAOtTNb2l4FZaXI%2BfawJX1CRD9%2FVJBKIK3fYIc8Ev2pfHkwJbjhD55JqC4uLPEvTypn1RACGzzkxoEevxZnC8FTCofMK%2FMveUK7IbBLoNxiUTPKa%2FUVTv%2FTTV1ySx6MqJdASSR29DdId%2FjQEmRrVxPfVnXlLdCUJpfnEanY5mWww0WkOr8n6fcT5WpMe0sqwwIUfbAKzOgF4u56pmJJTdOlwgC0T2Vb6kTLUXx%2Bkqzm1zQ9DXBHN7GNZFtAYhRGIUh2Q2aZaoOp69XR31WsspGBJe3s1GiHnjZpU2ZXw70HfTlAHIHmdQ4MN8S7dJ7%2BqkIWL7fpfeVl7ypCDfqUsqIjRbzxJ6piBeAH93bz4ifb%2B5l8E%2FsxM%2B7KKG4pVm0vSWP1G0lpiXpBnkUEEVrtHZOgfBmyxrKjonDLr%2BYg9jLmzqGYISE8oxXq1bA5vY3r10%2F7POKJNd%2FIpzIxCU5UBe3PAKMYjqgE48HRapyxOeNUuj1Uzq88RlOOXhp5yZSnNne7IZ8abX2P4oe%2BDmT6HWDSVSSPwD4DVYPZOWHsdGLo%2FHLgS5EmhXgHduHkSaVAN3YABzMv%2BDWAXaGWzhFwaesrY8tUBShsBO1%2FdBElsjRXf1ZUCxPTccMJmki8MGOqUBoBIEK8q6Y3vSbvPlY6%2BzRNiQagj9xGRpGH3ocdU0%2Bd16zL9i0UywcAfev%2B%2FWNd%2F9CSC1AweU%2F3ho2caDoi5ziFuqwxWxdGVvRGEcfogU08iJlo5244dywjto6J4gJZYlqmP45zd%2B1bXxQrEQLzocCEL7Z4U2zDsDnygt4%2BGVZPKCtWE3YWtMrZKSrEbdgPIWxU2XX2dCBra49Bt8oa6auBIDlG3u&X-Amz-Signature=520b58ace84d3ddd6def0b8e53e5fcb33916b572c3bb46c75a894db9e589175f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
