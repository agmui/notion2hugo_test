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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZLMXNAP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyw0c4oIWjPvQcULHCcoflpoe3ULTzPPoZYpqUx%2Bq7BQIgRxgG5x4NXHMM%2F%2FYYYuM5Mi2BectyhmQOr1KRspUioNsqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk2OX3x%2FN7QvyaM8yrcA5ZALiRI8%2B%2Fw%2FJWaWBaOYUoukc5ZRFGmXFhkCifa1Zcyi%2F0dharNAeSLolLKZjRC3pZ4VhKgniiJaZzSO1DdnJZwAIpCmJJqCYFJ2t2IeCcAOVdmoskN8JleLUotjDhvrrVMHTVsQnF7TujTBqgVUELD5HEgjMxacbRrJywlQNFo%2BP13pxNBOmGEx1qkDflDp72wqv7voo23k4uCXNwYo6pE4KYeXoHexelRMHJPTahU1XjkCU5W3vJ7%2Fns%2F%2BtblYmKsk8XKI42Zvh5E3EjdGnXZrE5wdbcRj%2BwD9e2F6uDCJ4JXMhcGuNjd25gjYlxl5aot5NRpi1Z0LSgRlXagyK7xFFCPuZkF5yhJz6ZZ6DOeDzqH3XtociPvyg2vFnzXqqfszWPEfBIrox3wd0m1%2Fd%2FDo3CrRL%2BIsJ9Dg%2B%2BtCG6%2BqNLApBzJfdPp78%2Ff4Ko0aH9eriyNcSDdAvBveXibKPmKoQ9c2YhpJJh4U090qVUcEMnLz1q21OsA93gV2%2B1639nVhuyEwEECr3ouv30v6yNCZDSCYr%2B5V9GfrnW1YoOFlbfMPm4FGu5mEw2lf9I69kraed3kiJCwmQlWWiGNFFDmt2Xbhy0e1UXWV9Dfni%2BdLMVeAuWlM9v1n7wFMKqzi8AGOqUBKQQog%2BBvGayn029KBtKn4SW00n1AyZxXGoMcHTvaoB2EMO5EYRwqPqp%2BAOMFT993cQ5qIGLI02CzqxCSG5U%2FIcL%2F7mFgT1E%2BSGO7dn8gMbSvIjoLEalDGCiNrI8IfVXNRW%2BmxEJUGSyuDvYjcysocfTGmPcti7k2vyj8kSEIOstz4wzfrMEHEYcuzVGc3CBZ6dF5kHK4W1ULCKkpmX13Gr5wDV2J&X-Amz-Signature=230ff173cfc077aef8dbe63f0b9a62fc17b749ef6b36e572efaf767657e7062a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
