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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2AIF6LQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAy4kHWLRKO8E6Id7ioFLocJGIw1aGMmnLFKuq8R%2BtpEAiEA6ZBqqDvEGOFFmAGMYZ8Ogg8dD%2BgQXx3QNimBxicb%2FNIq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDOaWN7bPC%2FhDGo%2B54ircA%2FB2kTBHIvD80Dh0TZ4MknuY0ul9%2BlIB3zelzi7q9Ec3xGFLB6D6Jo6EG9WFho3aJcVBlCXtT2soDGQ%2BeD8zUu7twPMTe1Ef7ynpjoWJ4xvYmzP6u5FqexqHNH9U0RRpyD%2BY8B28%2FJtkZ90rxctKHlNFoNRBPOvuanmCnmAZA3zmHkMgzLkBwvErHaBxL07QnMOI1fHpEwyjJ45umKzQCoXw9Q491qUjWX71s9Pxc34wqLut2EWJMRhEZcXftO77gQz3%2BEkSXm%2BQq%2BKz%2BOh%2FFgjzWC1Q8A18k6LpWMt0caHh0xLqW2qMCgGCEgNh%2FQNbFXGIjnLHde3kRh0B42lqn%2BdEnG0QTYmGolENDXbtZnQWQKDrT%2BGYClRCFBIc9s9WvncJK5IeZMrMqtd4r6pD2rUJZQmDVDdnqYIOw7VqVANUZMag1%2BvcTJvzDUYzTugHEgpMGflvSgqoia3%2FOHBKCE%2FNNMw%2Fmoo5kgFwhOJ6URfgUkq73YVat%2FsBsmBDVROzGZzTzoqFtUp78CTxRg%2FXOelpSECkQranoumlgbf51%2FExstV8JBwSeYYN1AK8Ch1V1Lw13fNKO2z7otHHKqgKhDY0niADwFG%2B%2BdULWnR86UkQqt%2BcVfBNEXcbYQZtMJPa78QGOqUBmSytZMFY4UOHKH2il2B2Go6hewvWVSwF0sW6lV3FrNriX769oM5B9bZwOfyEuPgMaacWxB6MMQfdx2mGlVumlGJ6cnC8h7gkjZmdP0LRDpYPwfh50px5fjfccAM2IRqFp3FxU6fIWYl8IuvqV9eOUvAZztceyJGlX8EIgZmLeeSy0jeirQMVoQcZbo%2BOZvvA7Jsy9OBvDEVmKrzWXDgfoso3CINv&X-Amz-Signature=80a03262f8280936ed6b2dbff2f42a528c1047142b372539fbe6d4e9b1ea5ef5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
