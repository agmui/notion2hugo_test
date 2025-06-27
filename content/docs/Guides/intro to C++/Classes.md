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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYU74R62%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIUAJc5rSOQqm5Vsy9%2FfgSZmIktHeRRyzzi%2FnWp6SaZAIgHwyPhQk5MUdIuUWQuthzzkGyEpctdOGNMw95%2BYdXoSIq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDDk6N6gthvI4RafXkSrcA1u8xq1UGAQlW%2BN6VlS4LL9AiAguI4Lz6oghg%2B6Sqnr%2FS399mPW%2F42F1H2h0sXnOp%2FdoSt2gBxfrLeOqyJCapZPwmuTwsha0Sk9YknAuzXBsLRQhR80Bj%2FuZrmhbhDfnVQETMqhDA2dhgs%2Bf2R6Z5KugMYHl0f%2FkZEcZQ30uPrqmCG%2BVrlJaN4xmcjKTRdE1QdsrFBjE5zKe4XdXAnTbXqrLfflRzI8fmREAGCBWt21v94nB49A55kLID%2F%2BzRHgv2PVXozUyMjn2aBi8MJudpRa494bCxfA20JOMYShL4Cosw4D1k2Ri%2BWfF42wby%2FVtKvBo9WDyZXjLwoonZefEBcFEA1Bj6hv%2B%2BLlWt9jXUM7MKe6uATkJk9vdRNHUZgRBdRg3pG2MSt8edspluAScwHWQPEQff7R3R13xYe9WgUwpf2%2FsSPfLQ57y9v5M%2FDW8P2UNAWFGRuGNzF47IM04zAAnL8kDPKRAE%2FYu1X9Zfss4yI0ezcudWeXNMiPIVJPQu9YYJ1U8YzgAIpcuYILlBoBeOxPY441L2385JqtBP0ydKj0ptIs8YNr%2F6d4XnGlPAgO6dAVZMW3xgB2wi4JhtU7qY2Mfb1xVr2x8riB5yDthOZwf3kUZwDGMfzPmMJCv%2FMIGOqUBNOhykJ7soSbD9t2JVLkzoV%2BELAt95wVRIMvNdssX2eQs9kDfCDYEkhZ0xBJuYzEw3KxB2aJ2xMFKpF0FfOC7YlWh7G6t%2BKOOtvSdbRqakggKfwwGZ3SAmFZ5xz8SJtMr09N7xlYZZ%2Fft9bMUkYU6y6Yu1H%2F31OOHpebnK10P9jEQkdNluHOeJp1wgnZ6XJAM1%2FW02TsaHjCbUoFE%2F67rNIBt9ZF6&X-Amz-Signature=31cdcf542b6e638f1b2158411b60b8b1bbf3d973c81b6cbfa89790dec5c7fa25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
