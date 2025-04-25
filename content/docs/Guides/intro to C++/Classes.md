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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYKM3Y7P%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQ0ein%2FclwKW1pX%2FxXM%2BjzAkT702UNrq3vd3SfZSpnlAiEA6HP39IlIkfXxZSAxyXsfeMPij7nOWEWQo28Iu7UTUF0q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDFNMwzv9pNUnuQ%2F5HircAxb0xbWZHVRjkjsY3U7c%2Fps3TAf5Xlbi%2FwMz%2FpjzQ%2FtglI%2BQP8AOEzVboBiKP1HBZUq4dNsFR4tVbdPPzEZxAVjwO%2FK5qudPqBcS7%2FBR0HbCWsSLHT%2FV4GMarbsW3YMoXKpGzik3gvF4fLbMv8qWHvrJuUkeEP364ff1MGqMjyRGyAGv7DLJPcv%2Bw5ZbedZMPOulRXOEl5293lbw82qdKwE8J3txP3BwKiXaH0sEKWQ9RR4YnsCMgIl%2FEPWzeQ5Yogc1EqDxmeXKl6XWWXupHm2ASExjunATpD0VMd4fGQPoNyszr%2Bo%2BvdlsBFun3EdOVDd%2FN2Hhptd6htzsMSMTN43RYyTtkGGYJfGRuKO3qSU0%2BomBcyKRuSUJrlSfTSckfBYmdBNV45qkrHwZ0iQpEnMRdOIGaQmrIr708JW6l2UNj1mZKOBo3IehhPxGUd%2Bmc2VPknOBR8XcMfYGCmRMJ95B22ECuDkL5YINgGPWgf9MMLe7a2FK4d6qU8b3E8ZfD6TDPoIJPwXnP%2BFIRzZhqg3qcMhB1PySUHPvjvGzU6gmkGFbWjVRgm6bPuTQ1%2BdEx%2FfRkKlppWgK%2FTVq2q8eSqX8LrZ2wr%2FP915RLS0NBMfYcHwGkbriYH8HUGZtMOWisMAGOqUB9xmqCcEKEjACvxm7d9%2FrQoM7it4QF4CMrsWqQuju%2BwBL6rPlmz4lp994hHlOekTQfnaGNz0L2hzxGf9pPLCSrZU1J25EqNxGgPtzmsImg%2Fy%2FIhTH6Z1EQUmxtJVVpzYhxGRHAzQSOZ81SqS9hkZqCiAP1mSdJ599wt5uErCIO9%2BgJxY6dqhORPPfSah4O70S%2B%2Bol%2Foc6oQ7Ssqc6PWMdNnsjTtf%2B&X-Amz-Signature=5b31aa2c62116a1586010b15f346d1ae8fd51ef9b72528cafe903950a662d1fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
