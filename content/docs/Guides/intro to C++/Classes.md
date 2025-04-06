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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SJKKEVJ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T180936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECKWHCuKGl%2B%2FGsV4IhkBTwP%2BetALGwz779KfOrsCut0AiAPdRdDmHPZPvacCtyeASwr0cKn%2FZTwyyP%2B0PXI4gGH3ir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM4X6JWg%2BT6kaI96GzKtwDGSbQsU5D%2BZDeHydekcL5NGiSJHvhR0l%2BO7Y1iLzX2IVhbKAYYJFzy6BSgxQxI39sVD6Lvn%2FRwx04zMeNYUbPiaHHV5%2FWgA9k9DPNUiqk0aqhP8W1SmnyQRcY37gGiwau8Rh92EudS1YUcg2D6qkii2OnaD5ox179nbaZeX2hwdytD%2BRrD2FkFbsOzSK0HU%2BnZGGSw%2FloZ8lYnkppmj8zyuZ%2FXwCV3Qdk2mqlhd1ZVRU3AIZ31VNrXvHdtucS2B7FQ9WR0okDPai0FajsgksGHo32VAsDAm0cW4bVnxeZhgyhHM3idMUNp0hwGQe%2F%2BYZ5MZ129PYc1hsqLmunioRvA99xEDj1rI9%2B2N%2Fvg%2F458eLnJRZyG%2BGUZQSpu6V61azsA4RT3CL2YuG%2BOeufJAIuMKqpfOtj%2Buo%2FsHdXXHIJxuVR8IK3%2FryFOfWqZ%2F%2BMvvU3dfEfHyFUbA%2FqmPc%2FBJkL2g0myviPK9%2B1%2FhEQXmFLR0zurQRnYuW2KqPDbpsdWXGKQRWdHY1Cf5BZaAFAwslIesLH2J2xpORWITLQQdmzCaQu4YQl5JpkI2BE%2FrLiU3g%2BuGbpjGE%2Bk9pne%2Fjw1l%2Bdam7YfrVCm%2FuzKpk0jNQefac%2BQZPYhStyi94Bu%2FcwqaHKvwY6pgFaqXB3n8yYFuoTwjXnbPDcw5k7Cik7lKxvQvUNBJle2l5IYaIt4v2B9luHqnQCkNvpLeGeeKWvgAgEv8CGxJeGdCWphF0r4tG6Pp0p0%2FshZF801zv8UvbDZBlDSZqHRZCE%2BZIgcXgzaRarZnbrVG54Nljmb8%2BUn%2FWSXUSyx0dW%2FepGdLL6aDv3ezufcgC1SIbdlgIrDP60xBPh8GImxoEEbOX9m5Xm&X-Amz-Signature=5141660a5f67a5706c11dfc30e9291a07c112a4393d6f2e649316418cde2f676&X-Amz-SignedHeaders=host&x-id=GetObject)

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
