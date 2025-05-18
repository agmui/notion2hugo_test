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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YOWPLJ%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUNnh4sPesPQDwRpsDanG0fJgzNozEvmc%2BGeVJUztDTgIhAJosqMqy4B32iARaL8OKzoPzRpxneAlwH0qJTwjhoQ0GKv8DCHUQABoMNjM3NDIzMTgzODA1IgwgNR2PRjqOFmCvtt0q3AMdVPjmbpc5S0CV99zvUmpRjxEw10O2M00olklYrxrBGjPzhK6AVK3hmN9TcmorzezOnmmeixo1dxemW8JFTZk%2BPP3P9TTTAFtUJM45qY9b5OCggTB3uvrEgW3G0VqZgaWnTYAf8uSZqrQ7nBaHXnsFfWlLB9lHp%2BRhQSIBblDFQ5lKrecHMhxhVVBNfd%2BrwQsxygV63g9fIru0Ub7bk2hEjhBRefpVUlo9tQZUA71avh2p%2FztUUHiJIUJPoOymmDpEwQg7kcijCjfmldUsbCNixLhd%2B90hEbG%2BOORxzx%2BAELGrPDcLO1Al1YZxUO%2BnaUzXhaI6VUJt9EvRp30QpufYb9cixWMK%2BX9anHooJx9aGRs8INg4E4b70naqiKfBJPqX%2FJvlxplNRxeulBuk7RnEGIZxuMlunVIzi8h3US5O05jA6QrzK6Na6avExxillTFGOm3lbdRtXlWg6c%2FgtNblTEva6I7oXq4ptkvdytPU68McBEV20Ii%2B%2BpD8Jy1WvTn2MRckU01TEu78abkndPRUcgI3Hd7kzGl1Wtk9G2lsS2mc0LJt32wM7sYjhYtwXqoGGTg5hdEqyd3xQ%2BHFMt7NZRtAoK%2BgkuiDiE%2B9EqZA6VpkmKWNvAvIOi3hUTCDnafBBjqkAXmrr8%2FVs2RvRYmOOn1Qv%2BscE%2B8RLkQ9Nwgi36FYfQxvmLlHRdSeJFEADmvJXor3EhpP4cnNeMkLbUL4%2BXF%2FubwzhDiDoLYH7FUQri2UcZ0zp2mGRdfuYH56W3Utzlk%2F4gdXP7gtyLgtmwiz5JXVq3xOHiYxmkTeYnlZyvx7xn9m%2F1hvgHCnBhv4JLLaadz%2Fk%2B%2Bi7uWyxr7bqQGUL2rBodUBMlMz&X-Amz-Signature=2225a4d2ccb8bd859fa5d0fe82045918c59c1c78c549459922c07a35a42927e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
