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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNFG3LM3%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIDM0PiX98cBakbRIVuzrvKbByJkn7zuJHy6R2dg1Mpj%2FAiBvbGD5SL%2F3WSb6q0adFP7HisUtiu8m4WJL9f1lVUY3bSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMmdYuFfgt2zr3kmy5KtwDPpHeysKFwDbVRAoClvHxyRanCoGdGvIa6pxRgJQRXNh19Ao1SPJTk3Gg4exh4X9xSFtWvQTkunzEanhuf8PHcvhcXt6VmkFjSC19lM4s%2BFks0%2BJDCAeFo6xhfPJJgmI7o3AKKa0iP1BzCHD4eQ%2B18KXyHALMpfzWMvMNGwDPIt5g2yXn%2FdrCgI1J%2FwNrV2aNRpkieOQa6yKmHpTMircfqT0pehe1BDfDU3b9O5jtglVlMFluIwi2v52d9%2BZqGttY1Iq0TGT0lWtNUqhA4RDF24uuo20uF%2FrjXxr%2BGFDbUWHpgMlnkkGPJao6Lux%2FRrMdzqC56E2LK%2Fqo1jLRQtHeRxBdan13dB7d2DzMi3eFNYheCiQ5r9u54KPZ1TUMmvF9qOmL5ZiQfqC01CdKidiHtVkFNsBeoN7aFezv1ylSkOYw6qJqCHDAF5xV4t3vE%2FSd9yJ7RRQaT3GgYbuZmSfaODS9IUPmgVFNavDgn4x%2BhEDHmis2wc1gvJB0jSHcvoraujcPEsl5wCplWIn5Sa0figxrH0Mvzf2tM1nsD%2BL1c2iBaoaZoYy7A2x5BrTH1T1IrxZdWUFXXthn1t%2B%2Fj574kyU%2B252sQ1xlHAbG0JalC1ciXsGIO%2B89n8OhQtowpviIwgY6pgFmCIDDK%2By7uN72zD%2FTbdXgs2oKiKprnu8l8agreccmF810yRkjdGFp63TAOZ285U9D78vMajTa8eZsA7yUNy%2BunwgHYYoKMVt37EYIYwdUOT6b73F6BUbA6JUUR1mI8PWXxsHaEsAdR2HjOWktC5%2FKYNrYCZGerbtBr8HypRcxsFYqGPul9BIKVOh4p4UlYnRgwKXzKWRSIlhFiQpGWvVLTJIZ232y&X-Amz-Signature=e29bd03b1c1ec19d419a94bc9e998635dbf2f22baba5882b27df4a58d8ec8a33&X-Amz-SignedHeaders=host&x-id=GetObject)

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
