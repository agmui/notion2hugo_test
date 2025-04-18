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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVEA2UBB%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBlAJQGnfa1WuomGdfCXOpt9tMFDEteFkLZ4ls0dVRxkAiA5Q93JxLTRkuDw9AR7BlWsaWNeOXmUCTm%2FxACepgPfOyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM4Pw%2B04IEfO4%2FwWO6KtwDMKEvVqzuZnSQdeI%2FXRBU43jPxn9uC46qUDWcPhBOLgG22N22SFbpM%2Ft7QNtZz6307pH%2BPNqjrwMPzLlPDxlSz92lwL%2F%2FzlPAfG%2BsnoLzbWP1NgxfwxOM3JqjgjkvmiU%2BVai39chOvY%2FVS5cSDIcIJEe3iy1qiUAwagsZu2jYC1iCpDsFy1%2BAuHXvjGUAprcJTxjKlNF8wh5FhETHchOCi%2Bkf1y%2FtoSyamLELL4kMFBGCvuZ%2BcxskmLsxPJ8q248jaw00NwqtwbaF%2BqqMTrx8jWODj1coGaXrIbogdAmmy51aOj5httId10oPAgXHUEGk4yk6iE3boinuAYfjKdY762EMHFePkUhMfErsTjdTQrXcGpJpojWSSwkTPz8TD2YzKzefbfuFjX1JVZcjjvn5A5YrMOPDfP9KOBF6yfbBkoaR%2B5cmT5XyIWFQxkT9%2FzeO%2BW%2FTB%2BrgdbIJBpsGR1YZl%2FXG5%2FMq2ZTujlUosfUcMEp6TZK0ayHpXKI3FN2PBaWV92arqnNa863MRNTPfwT2U2h5g09HMn4Zwkhq3e3Z%2BUgwuDUlw35hi%2B8LS3HjA7zzyilDussvTJFmN98CsVRQSfP2gv1w91wGWKCSYdKqXHl5jab7eSottJMHg1EwlvSGwAY6pgG3GnLAx8csp%2FTrO7EYU4cbmYvfvCOl%2FSvhYCABRfYUHEFmJ8H4Ft5rknsNo4wsngeMpKpafWncBgUIFhsZK3UOxhuHuZF63fNWvxnuo2sLUuVVfOd6cH%2BmUN1IUaZssdshcZKoHFfoT8HGkdtv98kvBy7bkD4zMhjhQcQtKjNdfhWGVThdXDWumDJ7me%2FL3SsdynagbM9IUKUgPQgO81XlL9dfJmhv&X-Amz-Signature=052836161f46acebfecb75e03367716134efdd8cf6cdcebd90a520d85be9a4f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
