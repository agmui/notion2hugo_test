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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W24JYNUD%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICor4A4pus4dKf6XQJbYPd%2FIrAbmqJdP8ovgSeA%2F%2Fa8uAiAlMUP%2Ba3x%2F7ukBMYn7k8H5l9x5CcLeE5PJtsDG5X5NxiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMigXdt42o%2BtDvLDa2KtwDV8b7pFRGvk23WFDRjHqn3C6t01E1VG8QvzAmgT0RbXPqfzbCPmpZ9ak7DT3y1jtJktYANp2hVE%2BHGbGK5KBMN1ZdQa2IrBKhYoATATwbxQL4omWPRdFYQ7AK03%2Bs1usKKISeECcEDA41PbgNIJLXuwIYzPCU2yUCH21fpN0XdIbnwE8GGGUk%2FgwhCzER60kJPXN1%2FM%2BhuVd%2F8EnfmslgSMGbMyOml%2F%2FqG%2BsY4fQyFDUKJN3BKEqB4fYSJLI33mZlA7Ej5Ud%2BVB5f8Qj3DdnnEF6lak3jPakLCb4gd%2BT7tyuFtYPBf71vPGxny1mRHhdGlDViYGOpijwMhLrAfj0bI4FeMqJbqhU85JXCBFZ6A178Izb7MeNl7N1tPiY1kUowj1HQjfudqeCCFcOQIPrDsF4fMei%2BwQ05HjnzgNLNDELKuDytJM86DBy0zR3MQeUMCRufdO250dNNiVYog1n2ihj3sz6L2nFYH0g9Yy2%2BDobX6G8hlUFzPD30o2egr25WsxwOcGVjAEvBTcqgVzKaez4hXe%2FyHaywQTxgOBQfmcTriJWluwn5K6xjuuWUZp1xRg%2FVQz4s5JvRGcB1BqSsdO75fmdTIbRd5%2BjaW1CufjcylNsmi4NOwZEdXvwwjo%2FbwgY6pgHooCKtUBT0QTzXxsIauwqVJqjLvGYLmj67FtRv0QnP8XXJgiaqZA2MDHFlgGnOBqi2di3D9ZLP4YfWXhZJBtorWgI4mNxWGe2JqKsGIq1Kl8OKJxAK6Tbdef1r5l6iNW7n8VvS0unqUyicWblOV7C3th3YEh9okqgljA%2B6W9PS2CKoJJ6RPCL59TgCHo2jGsn4ih70qKpMjpr%2FWn5UyRgFvZaChVpN&X-Amz-Signature=5ba82ae32f11ec073a906f3369a66fc48cfca044fb78a64ccb704430c8ffab51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
