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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LKRY5BI%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCID2kNAbsWbBAAzqXLsl5vwa8CVxE3bGjX4M2lPBISxIyAiEApqg2pjAh8mkHbe6zQcYtkjo7mVjGsOZ1PdM95ytLx4YqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEaVA9%2B4ErT5tQnerCrcA9xc1cJZjj9fC4AsyRbdpfN4hw%2Bq%2By%2B%2BwdOTgr5lQLry7jtzw%2FnQ5gfs11t1RP8WhL99GS%2BPT9QyqfuJ3UfLvbB8iWGT%2FyDYkpsAQGNG6GuCgvrP3%2FScZVeCSSFxEs04X6Er2dqNWG095YTnq1n36t5FepbVvo0b7Qo%2FzgMPeuWsCHdw6YIlPiZ4dVPPq%2BGmvhsQBR2Ce0lC0zE%2B1kLIkQpsQ5KyJiJYL8VhmsnCzEOilQNHQ9G5b9a7uEYwnLVlXQncWSsS%2F3UCaO9bYxr9NMQTotWfmHbQlXdTY9R3Ppz8b0%2BtGvZS7j6ps87oyBxBQYdWJkj67Qr5pt%2BsBabNpNuQnXrg0u1iP8N0J%2Fo9ILtQrlkYkrWr%2BK%2FTruhLWCiVJT4zbKtMsDGvXQFnXmmKFE3eZLAyaoET2%2B%2FVys9TmrViMUlWsD0UoqakGfvlt3a17kBBuAkzMVMGJCuAp%2Bfg6F0x3K7stsI8dXgXkLddor1BWsiV9wzzzyY10qNN8l2Kp8tdiiFfnlmB6SRpdUi7zlu%2B4%2BY9%2B9QOE51G%2BI6VaHibjNWHptSHLD00bxsMciiYREvfk07roeS01Dk19ZcQ5av%2Bj61V1atT%2BHzPc4fa7wGe38qZbvH4O5TxaacwMPa%2Fxr4GOqUBdoI8mxww0MFzyVIHnnwG9kZ2uXAwgjSh1kFbTcKMs%2B%2F82Rp11h5PkqbFiEDRlzZQFS3yXz2fDsj7EIzOZ4kpVqi6MXSvM%2Fkwpti36JFCmexMJzVGjGvNLxrNNP8Ll4%2B2TEr4X253zrUi%2Fz9kfUgKjin0OFANSGJvpS9ONPCA%2BRqzv21tLFcZl5A27%2Bfz9AThWdF0egLL2EmwGJxxQEJo45urEGpC&X-Amz-Signature=1e65d56adb56cd14fdb0f197aa62997aaa60e781bd7a0e4491264c9c79a636fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
