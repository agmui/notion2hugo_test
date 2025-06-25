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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFRIVQO6%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCcJ%2F6RIewBm%2BXXMq8wkbrBO6MDkCxJdqQDCQnhVPXbdAIgf8syQqRuWaxWrkRnICvatkfhE5tX0aFaL5vWOV9awLEq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDAwKhQbWDLEULFRPaircA5HSjW%2Bh19umPJ3RvuDbWt5TwTYAAY5gGBamcn89J0fBO2UFKFUU0cha4%2BbsW5750xzTxIz8%2BGZHOOdu5qN%2BM89aQ82cdBEfEhUezqDAu7SiLffsQA1MRepq%2FBdLmg3%2F0EHk9n9AOnTpnqc34iRBw4Wpw6zIqcH6HqW0cuaudDsKL%2Fivwr9PPDQnyo%2Bbej5tjI3SQHPKS26a%2Fs%2FkuoDZWKHBOhtf3XpokpgNdnqUcOqI3ywlwAAq1seJJ1te%2FWOqGu9t3RxwEl3gMkuvlbmYGo6QQytTJXpswmn8bwXChveIxEyv0SBJ%2BGM6fwzZM3Kvd8Vunhn1Nd1NeMHAqJUvNzvJdDjODoxhUicTFB3rD4n%2FUhgLyKceMuGmtXmOgLVPwWopeXd9i5%2BRBQNmSvZXdj6KLEera77UIszBanY5KsGH1wKyLkHF5Ss2KQ%2FuJUxPbQK7EKJgN5Nnn96mIlJMAi3lEOpaux1O6%2FEe2b7hrhYJhJbcWT5YcS89Xzs1jCzMQveDONhMNkedKyWiiMMW%2BlBSef3U2eiUQFDgYE%2FlP9KS7Fh11qPnexQ6Dy2TBSyKoHBOw3MCWJ3tJN7NITz00%2B3VlqJ0d3VStAFTBOyyc90AgdcRG2Wa6TKgdYhfMMDC7cIGOqUB71%2F0JNp5%2FCwwX2%2B2spMx7F5eG1IGxJ0l9G4fZsvL%2FQeSlFMxtrEAzn3PQd9otjyGLXy2qxRIXYmw%2FQrg6sbuNQsOq9t%2FWT9PmLz0rdD08U9Tg79kfclLp14GdR9%2Fmx1FHbZD5S7EQpsdJl8NKsWAoFttb0C6EaATmliRvXzOeYKvcq3GLjPup7icTXNXZAy6xPyF%2BLYE4MjEAPgQTh1xlmPzf9dI&X-Amz-Signature=af5b8bb938a74b0ef7a344ac4f5a2d69990b33d056914e8d249916165704017d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
