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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD2ZWH2Q%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T020550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIG1uy5AgLQ4Jl%2F84y%2BfXtKC3F7VqKmD%2BPPSZDEgTTytWAiEAxCRsgaIRKNNWPoDSnOVUlx2kF6ai93b6lvu4XLxUxPsqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2X322DBJ7hb09BtSrcA%2Fk1k1LAUweaRTTVVeLg%2BdVLHPyxqa21L77digSegxSIw9jPwRTctbdgtqq7jcartZ4XNxI%2BzUuAzvJ1LSoDgV0yQG3J2oCmcADhFdxKvl4fDyxhUFgayxft25bmBPEYcaND%2BpRC2IkZCVe6bh0AgpSk9eY2jyroctAZxUHQylOigt1gq3nKHUiib8IEahQlLbbg5RDPQFFpmoRcl4VmRNQtpAl4Nipxthiv1pEB5HjIwErufTTD5Kc0Ao6%2F1dyvy04OfFa%2BU1bA6Pmjl7XS5TJedE8vCJsGrQkgt5VBWtnSVcLlFDU7umekpmYqzyS9sApUo5DwDEA06XWs8LccCRyEcvf6mXAkCk7Z5oKCOEmW%2FB6kuOpt%2FxkNqQM0BjvpfffDWY4SYlwMRLHe0TGqo2bLMfcHl6pNErg5UKk5RfN72e%2BwCOBZnE18SaN8IWC1ZWjO1KwPQjFFZ8TyKVtIAdtbuennxaJO50oyJpQJBYBELDPdUtC3834rmBmgPxrxzhjkMucQma2yTYP5IZXzGhB5rQdUHNnSaXIQhDijgHSJvF3nDR%2B2Y0eGZEc1%2BCY0BxR9OJbHUkdk1EtuK6ishT9%2BONzRuGdkAI5dJNtF%2BL8ho0BCst%2BtAnKxqkV4MKqF5rwGOqUB2bcKo1eUz3U98PmEb8IJC6MrkBueAEfeiBqcAgv9Db6fu3TP9qq5BJB3i240UDh%2Bd9GV71TX65ALaq9bNVOs0u837A%2BWYN4pAFN7Cf%2BSo1NuXm5R%2Fia6qhfxyGEWOo2%2BnfCg6XYOJIMTrQxAL2kao0uZPCQwqDmVKeBwLvy9ng7bfSY3Iz3uuPRX5qWZe12aEdLVrR9hzzjrwymT32osqpjnMaqx&X-Amz-Signature=a6abb57c0c438587d7cd05656b5bf3e261d6e2d0a3d5b3f2d07d5c4a00fc624e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
