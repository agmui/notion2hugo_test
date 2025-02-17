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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K3JXROY%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T061134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIHkT%2B1BkLTSQYfOgN2lBkO%2FKXg7dY1FmsQ9%2B2NtYWkIWAiAKT0wGi2NkD9YqXisZfwSchKCt0RIKld8vBM4hXfbbcir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIM88Z4IG976DePLDpnKtwDpr4BOMrU4ER9%2BH1s8EReyC0u%2BOnjKBrAF8Wkzr3KUshk1miQNk05L%2BOBCK3xpjgnjrJMH6sav1lULa12DjXa%2FQ%2FAsx9DpBJZANpXcT6DNf0bHiDuFNDUGkxhOx6lGbvcEEJg9ojnkpFJhv4dy%2B%2Fn81pCAf4aKnjLDZ3%2BKHzaGvrWhoLl%2BofETRc9r4YljrKerbcOoXN22C052ODy4M9F3y8IWYKkgZ2jrrit8JngLiJR6k32seVwEqin796cojCpuyZe4oJF93itteLVSLrUSH1w6Gi7F6lJh7QuuayD4YEGh2Z7IzkWjeL7VbGcnC0xQrYiDmHX0yJzgkUq14pAosmCajOvISrnuJaTjzNW66cXo34mH2sc6%2BfsgHWU2qsa5dEcbom0cGdMs%2B4F6UjnlMp70bJt5ymNpmotMLhDOwD44IHkgQOgEdvUzN9wMdLTh4tLr%2F23pxLV1XuEVedmCAhEnHvvOBL3g%2FnjOYppaqyGwafGt%2FmK%2F2I1P3nt3ZIU39bKcKXfuX6OfNXoFPG%2BNpJ3qv3tJ9WQxh%2BL%2F8egPhWKNeF8elt40EP%2BexQua0Ip3kR9fkpZzJEx82EpEy5w1SxT%2BmwEwjPuTzNSyMcW3%2Bxm0y0MQDPFchm68nEw8pTLvQY6pgHafKoI01Do8YUq0mkRv4F%2F70HCuZzkU8Fw0JBrqid%2Bexqp4CpGNtFNIVc872RAHF2M1VvwcavO6ivwIZZuVE9lXRzG0RbFXhfP7Kfst0pxKAXemGJtzEWUP7IwJAEAdF3TL82hwsI%2FuqSpXwASCnl90VcficKDtQB7qkEJWAk4p8Urcus60vdyLi8csgplFVeOuVbBZ%2FZqn84iJwATvXhHE50qf5hD&X-Amz-Signature=f3109b7ce143466c3697e5df8e2fa9174e9586c89aa3168758171ac209018290&X-Amz-SignedHeaders=host&x-id=GetObject)

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
