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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XPV7P4K%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIErRaABbPrRcMpdszi6TOUksnuTPfMisqjrzl83aP0%2BOAiAIz%2BobUYq%2Bv32PQjECbuK828KpRluWAMmig32IB8izUCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMs24b0u1RJBCZbPsaKtwDqyYatIIBPk9JSTWhDw4qtdm62FP0yd1zZEz4oH6i1qYMaOfppazQH2VWemrNYWHZM5bwN0CiSJbQBse4fGXl9RQYvCjgRlETwiDUZWxFieSoK0Q5PBk7FmG3IObMTK3H4F7NvU91U%2BrVlUUVPOCUHXEZlAo8q8fg4I7rb3NTA4CJ1QltauIPh8KEEtPu5r2f6P7QnSXnr3xjhB8XRYQrwT1S00%2FrC8YIZRni2isaIW5rXPRF8%2BgFOZbQOr6ClZ4L23sU4JXOQzCHQXkwd47BvLpcI1btO7FBcs8GZfMDvMIZylMpWA94em9gGKahAJGDDvzSLLPKs3GDuAXU0%2B2SH7X7atDHFsXjBH3f%2Bo9NtmpX1oEnGGPIteFIbJeOKFWkCLLlhTnpsDue%2B%2Bwt30iCdkxH2Pa1MAuzf6z%2F9dO2MYvrfqz%2Fay9eBjQOK6D4eRMNh9lW6CP%2BalnFYXQ6r4Q6vzHdn9GEFUiXVKDXKyv6JqfstpLoycF7UcmJkoQ37bo28kPDFZg9vs9XkBb%2FQQFKY4T3R%2FhnVLtAtlD36OmgS2E0uRmmF0U%2BjYN9Zcrr42f%2B%2FKqV4DLNXNRxTM0Mf%2FfH4CSAwY7bEt18O9nEejxcSXcl75HNmTggTskrhlYw%2FpyVwQY6pgEgTHARa07mGISrSIXTHrofos82F8C7mKAt6Q0Z6VWWF09e3MfoPpoJbQHQSck7gjBb52fytOv%2FI22LVnFYE12a5r7x7%2FiR8clOq8IImAfuJp1fvwoCLoDcPT4oOJlxAx9jOiaJMIAEuUH9eCb5wVzueRtgX%2BFlqFpLgYIHChIvpUyaQeJ8yM17VA2zNvA31ITJrD1o94XqMaE0VYUC0Et7guEVxd9j&X-Amz-Signature=79327200773a95973541be8549ef7a6bfe287a58758bed3fc33510d09142b057&X-Amz-SignedHeaders=host&x-id=GetObject)

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
