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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHSQKMRZ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsVejMMge4NWdbn9orxuIQhnoY0eh80oiju%2FbNb3BWmAiBNZUKJzS6cVo45BeTiauBotxiIUJtK2eEnT9MtiIeYiCqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJeOUh96uruGSMQZ4KtwD78yuw%2B9UswjPEmRLxORL5CU8iM5tKgXnGXasK6GOrHLNU%2FfbQgW1ByJCHCKkH%2FtmBZY0lYSeyqEwp6P%2FgMjEwueg5FpJ%2FlaQhk8ApTIrZNQpedkOKeD5a0UpbrE3xkWGG%2FKwi88U2GlBItRfUVQEleQWzcGWdIdoGnEjn%2BT2%2FWJmMHAxWYIjOtYmXbpNYIODu7EX4hD6O1YUTwFFKXmtn7zFM%2Fzz2Uho5AUtbOSJyJABqEUWmyS4hXnAmgYQHlFgTKtkg7bc4Y88tcSas8%2FAbvnzNYnKkY4LcIOYMroktHr84tgKVB0scNQMCa8qyHm%2BOT8sRXtdgRUpPOUAnhqhPjRe6%2Fkpl0qGdSykk8eaZi5TrYoBtZMYEUyu%2FxQRm4sjvqORFUDsUmViLnwegINcum88OlqSg2v0iWEvnHF%2FEqXpzO6rICKytxOD9t%2BMvUyOv3LBknNiAVLw0QV6mGNtnMHKLzwUqS%2B%2FvvPK9alD%2FBvu5Wb%2FTWDCrthu4X3yjYhcdY2%2BR%2Blc1YuMuItubq9qNWDffxG5ZiFk3k0SFGli87ASAS%2BFTFZuuQJcT1wutoofojn%2FQViY3hAtsuie4e8Jtz78xaWdj9HEm7nwKpL%2BUQnLCyPYfC0yeazD2ZQw2o%2FbwgY6pgGR4xFgtONEOcvBH6e3xyWMxAX8LBAVcXmXGgvoTzyyn%2FAd%2BI9XP0fJlAXaHMjUkAnAhy2a4dmpfbD2uZrFH4M5Tvtx1zqnv6p0gWCpJZ9v%2BIkSH6lXGWEIOIFw0aT9sa2YFrr7BHHqv8cgybGGoQoFwXV9%2B6Zebc9AuTHab7X9ZUxucHb%2Fgun8Ah6Z9Ypx0ge3xLGjg%2BqPuD%2BQq2Ri1I2E7tHUqc5f&X-Amz-Signature=fedf6da30ca614138a806e528a67e42fbf873a29e715b11168be643703023f7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
