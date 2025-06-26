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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSABJZU5%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIEMxuzx1Frl2ngEutDUzR9%2BL%2BVGzMB7DhJfb%2FDc8PULxAiAO%2BJ2I4v6VwC4qvbVas94gCYodyNyCpzKUfxDi5ITQ7Cr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMuuALrPqx3AgoWWrDKtwDcKB%2FNusWiU24dQRHf4lvdC%2BrgyY6EMIBBgE9zZ24t8QSdIbVJWy32aFDVoy8CKFx3zs%2FaSX8jD937byCffhicfJuf%2FV4gaZQyGoHB8u6N4O0bgO9W8QZj6enh1g8bd32DsLkzjA0yrSJ79ySxIjwbwXtpbaZGRwMtmyrPqac6av4U%2B647u8C8IUhMm6LBrLo8NRpwFxzsXc92AOCE31AhlF80vcBIizwYNOVi7%2FHQPyWVO42v25TDbs2%2BElgL72EjzjD%2FZ5eLe8bmERWiTEFG31ViSWHNmEKfNB6kfrbyRbWt78KgPP0M%2FIMEDbqOOAmX2ND4d9wbsfPja%2FVbVKyYcDCTAr8j8X3Ia%2BvesCkDLqYcjYR9s59k8PvGJzCqITrPWrnXC9NGbCE3b0E%2F2%2BYbvX%2F2vDQFwsZTdwlmvVtpo9ch3YuhgV4T9f9U69yvTEoBmxblMEWHu09TZoT4%2FytkKfwHZAF4lJoZWjubJ%2Bn%2BPpOvaBFug5LfryX3lCZO2OsAZMqwYjUnOFE2u9Gee%2BqQ77Sbf5kEUY%2BzhO15%2B4iyha73gjP2N76MK0bmzL2sqfJfYv7f3OF0y7crlu7MTUBw2wCxpo%2FF1xyrl5n%2BvEUnlhC2icNRAwHgFMFgh4wrqb1wgY6pgFIiR8OJlDhbYHJqwSioHhudyEd1TQjGGlnq0jjVSHHeEZzVE98PyPryawl8EJ1821%2FhhCQtB9Fn6ICGZutgw1%2FWGHKy2VKXtYEBpERktaelNde4%2FO9KgRLMoTtS%2FncJRuSIpDw8gRzaIMYkue28H6bTTxp5FOaRr0p8DfvDcmxPFAMbXyUkq68fyBwCkQCfk5hwq%2F3dPsJW7%2Bie19hel2TviGjJigX&X-Amz-Signature=f04f3cdc74ed35bb6bc7ed75140a73b83d0be71b032272be49cad7e2731b5b3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
