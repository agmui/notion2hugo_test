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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2TGCSGP%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCID3XmlfpO0uRw3mgO0MDzFJyoUU%2BIXk2atsym5DPFZ0yAiEAwD69sx8Q0IlvDjOFNx9p4GC9yWTtaTzrW8OQGqFzTGkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIp%2FX6XMO5%2FuSzEjKSrcA%2B6QgkmR5cDvcksxSQurEadN2ienO%2BqQXj1Byw8K%2B7TfJjGoBhsPLRM17gM6yO6FYYJKG4RjFbG3%2Fd%2FrnTBkCqvNqF7NJ7C4oOHlBuJkwfeSA1LU4b3F7ufRTpgO7umKQScytaNYO%2BAhw74HyuJ7cvJf9uKuUir8TBFhKvqxNLaLzZqyXm4DQ11leu%2FymVbzFzYk1j2OnPEjg3f%2BGlvRe%2Bep0w5iQC85fb4ZHhluOYjrVbWdRd%2F56CvRS9fMYXapPAGi8votjw%2BO51pDxJtW1qb313cHEIEaE8xiOp%2FMitR7RBfFkz56zzho6GDk5Cq46%2FehTLvEgXjKsLwIHD2G8%2FGEoOIbTXSIcPI6oDyPr1sRhC0tO70cvqpGsdxNc8ohJ8TKM6dYsiEhQMKV0wu4pQj%2FwtNMBJiRk6nP9zDAxcHjIM%2FdmjO7aQarlcYGcf8%2Ftbcd1NTZJialrGmH4kf485EJG1TvypjcfPVgMtl2NnYCefEdmaDDfCwzUAz2QU%2FFXteMs2qUlV59odLn%2BegaxSRe7pmPtf%2BiJg5K39wxb6VFJr%2BgqzPuBsYFWr3xi%2FyOAR9uMCpKn0nxUC%2BPnuFCxERhdNK1D0bOhKvaZqC3KuwMzFPQEcQ5m5i29gbIMOiEosMGOqUBCy4hLubUQFtIQHpiJQA3NqFJeYHrzWqA9mEb%2FB8mvFyyYTqbRLRpN3X3BiBpnrqSPYuBxp3pdF2J53h7b%2B8EF1XKgdlPkPQs2x10uBB6n3AjtYT71iNdpNJ5mS382K8Ra51rez35l7o0Ok4Rtru3zxGh7KGnB624M5RRSAqM4f5JPt2hCY3OtQQSWjL0ctGIVk7u2%2FafDhoR2oC6YCRcnTDqUrHB&X-Amz-Signature=a354b254b4f83efa84da0bd6d672ae1effcce219bdb81e010e88f79d2707a5da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
