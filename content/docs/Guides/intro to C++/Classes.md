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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGBS7KH4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCmXRu40YTWJytLzuYVRSqp%2BzPbYW80XK7lrMZvdB%2FcFAIgTNc0ukjJBIT0qWoDPtljcZgeNVuXvc0VPbPdjcD6KNgqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0XaRaijag%2Fi9C6CSrcAzAIyPe3tjiBGUxficgTZgvUR179eb%2B1c5Np642xZTISx4q3jOJHHhXKYHsFMnSzlMEOab4SrNY2g%2FYwgT6Otn22dgiQDawKjLFppOuVrfSJgqD26QRcFbumNNPeYDjT1vyna5slzyJuut6dGxf7lq5mYURN8iaM%2F6Zu%2FpkZcJZBuLyy6%2BjDaR%2FoKKWsEG4txv4DbMbWxRYhFDcvM3kBp9RPmEdisbY3c5qc9edxyQOoqdi6acJeKpZoFUgjBJOiQowd%2BYSgQ51DmQn8D95Yf4G2xViDSP3DfK0goPWrjwVOnZ76kk%2B%2FkKtXRN1fz6vgSebK9sGAlXKpU4loV53H%2FgGXb0i1mWQAH8asIm0uEvgWqBnryEL9ylsuVf75JFd9HkCB7FQwgUPCIcl4wMT99A2%2B6bqc3i%2FVU7%2Bfyd%2FUDn%2FkfshEjB01C2mOKZotl9Uitm7LmvtiRrLDAH90mxP4dkxBbjeM2lgKF0b%2BwgAzuUWVjaQqy7nm4csjO4MFrU5sT7%2FWioeDIx3vmncZ0c7FImWUxo7T5%2BI7F4uCJut5mfCUZxly1gO6ZSIjwarjm1Q3RXov8ccSbmSlQhbtP2liP58Vc0Z2EJCZ%2FuGoEP3HUw3X4VHgURdwz0nRLepAMLOTm8QGOqUBZhEcU%2B2GnpPnGfOytE%2BRptP2QMflGiMjwFCr7oqNbzWLIDF7ipLZrWbO58AsgDxg%2FP3tqbFNQzvzcxYCZZ5efBODG%2Fh3lMj6uP5HPRkMZ%2BxMfE3A%2B3rTsGmaNfFNDR%2FMJDqwg%2BKn2WN%2BePChG4fAp1KHc4IjlStWg%2F3sbB6RVP63I%2FQzjxKKTn2NELQzBO1WH8emDqW6z3r9eceu3rc52Jm85e%2Fk&X-Amz-Signature=d46558a0d10c7d8b86021e1af2d4f2c18196fae5674a8220bd40ed59395e32e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
