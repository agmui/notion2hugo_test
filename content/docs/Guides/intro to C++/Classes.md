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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUAZAK6Y%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIDppt%2BmGJLV5NqpBvoHTeW0YZX9G2PAsnoK0dyhx7wQyAiEAg3xXsa0iU%2BhQF%2FTgr0ZMIKhoCSl%2B0b8KledEU8cSk8Eq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDC1TaV7wQPiK3R3ISyrcAzRJNgAdC3xWfKMfH7dL3qGviAjVKzovQD4%2BhYZrDVv1O%2BbFj4iXUrIIjbdZHY3C5Wt1SwElK%2F9evBdZcLvme1y4W3RstpXY%2BEofxJDtMYdacm1rWvNfqxa3iiJD%2BXN4%2BWJsATglstvBlQueee5VnM7nzBuEwR03RQFElhHqG6h1idDaFDgC9j0j5byJSdmGh70cpfKtHNwf9HdFLC%2BNI8U99S8fkEens9P6WMgQl1I0DJN%2F9hTrlagL%2BrMolHd2q2vHYe4eiZN6CmLAyVSaUYsSqGEjZG9C6%2Fhe6CcJDPmoomyx%2B7zU0Z69o6N72%2FTHivgQTQ0oIewm9n7A%2BEVWdKLpAXEt9mjftS3Q9EVTJolT06HI6yfncKHhZvs5VjlXwUaptG6GvqKN0GpAeFial3iE%2Fj%2F5Ub9GnJ%2Flai4mmNNTIoHwRYHEwD1u0V%2BcdSJgYQrEwFpDjGvqYmE6BqW2mXSDkqN1Q%2B8QlqDAPCxdHiTpTM7iXQwHLVcMtwI8sk0NfD%2BUm7kUpKIhEFGK6JkSdXtqnZmblMZKURSEviY1a%2Bd3ZjnUsetKLT0IPIrK%2BYrUssGi3li87SF%2BnHsN4HfVGaj%2B8cmPDnPynNcRplS%2Bz%2Fo59dFPEs5%2FjQrW2YkPMOe8kcQGOqUBvVQVCHOoYtC5Wo8kw7sBWH4EW6CdwxPdRHliIIChcWe1OF1%2FsgLRj6zBvw2yElpObbjzd9ILwwxWWR8M5OO3gU3Eqwavgg%2BdNX77m32D6jO7Bt5DV1ZhuG4u2kPxvm0YmQcm8RqSbwWPQxRBvy0ULGWL2%2FA3XkQg%2Ft2TQ%2FD4sEmmVcv64cqBaAcvKTwMXo6jYGxyC5o9prg12xiBj5VURqkLmEav&X-Amz-Signature=7fc7c7393a9418f45703b4a9475708db0c21e27ac0a62fb1b4afcde0029df502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
