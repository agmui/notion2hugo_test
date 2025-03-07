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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGITW76P%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T081053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3qXahrF4H4cv7JBiHP4oqsbNS2zVorBUWTpgakwk6jAiATmzsciNJ2mb%2BWq8dFuxTE7%2BsTSWcmh%2Fhj00%2FmvP2RqSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM9IzVJ9R%2Bm%2BZL9JMKKtwDQKi7RlHWYl7VDOPOdOOx2s2FcpaCg3vsH0uLhoxiJ4cUfafPrES5IxftIMqHcfJvaZiPm%2B4CKkBu2kD1ORVIGxTEffHkziHa7qpDxpoh%2B5%2B30uz6Wwqfd8UarJPsaUCtt4syqPaftr9CGZUi2%2F%2FAlnt2krIr2x%2BzRqeoixc9hGxJiScJSjQlKn3ER0n4cG8UeG5tiHfvPXRk5PvGBcwpsaG8yzHvYUGXkdplUYuHGbpMqDW2yW%2FgjKXqDD0EhzBWNu3j1AiPxupFtwceNy2JaSbgQMlOnNpSgWWcFLjqs55%2FMlj3Jjo7G3c97pxIm2yh76oN%2FmTyPvW%2FnwIbfJj78Jap189zT3l4GMZTBW44Y5fSfmTic0E1M0kQNoGx1a9yMgkjC4uBYpyWOkUCw7%2BCZAjqyFZFDeFcNUd2pOxpbaEdAghvfQokdn8%2Fki0gcsNVGzR5k2ctULGAoGlM8Y5WkpJB35kxaxa4NH9Xek8%2B4DO3v6qlw%2B%2F4zyEwu6jXzZca8%2F2bNkOKeDxeRVvAvUSZmAgiG05wUEw%2FbkdSo%2FdIl9ygNzb4vuVEwQv97m8itdMAeY38DOhHonONl4R%2BRZyPuE2uYVg46pQBy3WqQwobnP3pRccCTvxHCePsVpsw%2FMaqvgY6pgGFvjwRq1EqeKkBv04geCp5BqpsTsAP%2FmYqETaEskzcPOJESa9%2B5QFJY%2FCMFQjcNDWkQiVF1ORhVIUHazvFnLm8H8Ctu%2FDCTZIWYkgwilvI61%2B%2F%2FkwefEmgggv8aWh7TSbuZi6o%2FHH7FNotPLmFy1GJ2QDT4K8RUFFiocssRv%2ByM%2BqKwJ50IaXObu31CLrMOq1AbdzcIZHec9XVGC59AcdC5Gqx3rp%2B&X-Amz-Signature=22ca94c7ad6ecd3900cd94f3256ed45039baf354b623c4571a032d0216c08ec9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
