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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CORRTYM%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDQhM9HQEKXk2fjqQjhyyDX3yhGuPcBUJrD6siEwfkAJAIhAIfCH%2FKGlOBOFMc2t5ZDoKlBQjiEDy3nJ0UEB0%2BKSqCMKv8DCGAQABoMNjM3NDIzMTgzODA1IgyxwTDCh3dpKKuVHScq3ANxCPKGXBS3Enx4mFaFZm3z%2FYLLyNoOxKueO6xLoY34hwGMQPesW2K1FkggMZDiKvIcGSDYWFL9lWs8i2Ccc36K1sOFcadixN2%2FET0HD4fth2N0hHLXm05sJxXIgQTenozbvrD57XHh1zoDgPg1B%2F8dLLrJd8CsmgkAcG4UitmAM01SGkXBRh1ljaWDeExWVLhbvEREk0311B3J9TDdJE8iZ0LPjq73bTPe0lMfrpYUPmHm3jfNcI2Odca53walcSrvEKBisY6yiOnV%2BN6Fm4%2F2zmJPAcH3zwv7sFfjegWHckuDB5XkzFKPk6wVE%2FaXjYALxBB%2Bxs59cub4CWam08a%2FCQJVy7Su09TSApPpbEo%2FZWvwvcGvZRcPAeNDl0CgTlHaeKve01bVoiWOW6WTmr7X6Rr79L2xji3emffs8yiGmWoGLexW%2BhNMU2CXxl3qZlksgOBKzg5YH8kByuCVEbS5cB90dMJDyUiIlEOOUlnok79R29Zajggl265Bn2ctnkhSyg9fRZZDLcXFhPKL3K8fhfkkhG%2BZEkZy5wIK654tHWccBdPi0v3TuJY84heauzfu%2FZ6NLhhnFjgsp0GzPMZ5bQfSEug3t%2Fdt578d%2FSI%2FBuAj7wo%2B8hidF4gYPDD8lOa%2BBjqkASOyGgmvRz6TQ4P6M6%2FP8mqBxnMzKaYTA4Xd6iCAc3WXcHE5jC3%2FdN6Bomuynjkk51HwdKWttRb07K3YDHBcpDPnL7vJSc9qIMR0mlhr7QLueTaOWPLHBJwMKojMvFpv%2BLf4Fc9xf1eD6X0Op79eC%2Fy%2Bxc0O%2B2iE%2FHmgpE%2B70M7K0r%2BrGJVfLvsR2FupDCAyETlYfaaMsKAlibXcRZqjtKM9kM2r&X-Amz-Signature=4700d350f2f5e7eb9962eae91f1796a9df42b429123ce84011e544278d96beb5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
