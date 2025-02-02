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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YEPCY57%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T080852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxVselSYMW1Rvu1UL3YC2AIPqbz7WNSTpr06cqGehvBAIhAJbI3ibFhJPRHoCBJW%2F%2FAhJnMoAATiIEG6elTSOU9vplKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK1FLfKIPop6XAHtYq3AMVYbcwScnTGZcEkq%2FiWowXuFAWJHtKzq4S1uVcksGiwrVP0EpPHVMbXzzWsV7Udw5iRDduiyg2MDgkUs3RglO0A%2BCI943JW3A8VVn%2BgSTj6gJpSoliTfJ%2B1qeMYZL4unFYru5KxMQ89PFC3gomaO25L5tE8IRY9GCFNu6xfLlusnmZxOOzetkYgMZ3RS%2BHKILoNRo3GTNltudPzO1%2FuLh8RSLSs6Lj%2FayPDbaBTO7nEfUibI1ypfuSRPkJaACun86pf%2BltKU3JsJA5cOF126dKdJK1g%2BR7iexM0F040xJbxJtvbieVheAe2zAXCMNWY6XtyQUMt%2F2pPLc2sdYj2p%2BalyrIW3PL%2Fd5hvqi2ruIPW%2BiCK4ELo1NeVj487HpmVCitLNWR2rtpmgIN9hzuEaUNNUCWtsXnFnSbqyfX%2BzQgAT9QqgU%2BAwlo%2F8PcL3em0r4jyC7vsd1ODzMnXnwS1ZGRi4vUoHHQTGR82Ra4l9d5g3QyfrwSgpVW05E%2FpmqDA8wDdb5h79olpYSJVRGhw%2BalD8NfzrPFc2yWIdT7yW%2FY5EG8FUXataivKMkMKjtRR9mTT%2F8VUVv5mQg%2BZcv2AEPbROgQMSmR0VVI53UZa4ptIVIUDEzr%2FTS%2FxQBVVzCGnfy8BjqkATRdJo%2BVxErueMHf9n1TgfxmTLe4yR5oA2Fcqp6wOPDZg709QJTz3ZhQZR0AyfnN7TXjRuBecEpO84zzkg4UKI6cH84EEOUEkqQfD5%2Brf1UPYc1KabisITrLWBpDQhwbnvriwlP%2Bl4CAAW9tJ%2F8Lfr6sE9sWqSqMczqfxAtmsa24vKeME3VQ%2F7uD21EMi2bu0AzUeKYSxH9BzPDh99KXSdBUdaMV&X-Amz-Signature=e6994ee9e8ae69998fcca23c9b505ab06899d5baf95f1021d759fdd949f94956&X-Amz-SignedHeaders=host&x-id=GetObject)

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
