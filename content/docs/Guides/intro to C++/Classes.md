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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627RF6Y2L%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG71rbp5ne%2BN5r5Zw5a3%2Fh2dwCv9uY93Hbr4fP880pegIgLhCoRx1dXVloygqV1dH2fUsaii6yOy5cGXp6cJ1m%2Bjsq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLhNKWcKCUu8MR72%2ByrcA6hVEYKItJTR8PZcNJypUi20nv6R5wxlAocWjLoEEAYxp7jVzYddPkzKVXCNJz%2BYu%2FhVT%2FlNSfBcIbo%2FYZF6stKfRW7QgCQH%2B2EOhbv5ZPickQoY4ONQXJedMeDt2wbHtOpwbAckqqiqxGNNy9jbMZwfyHt8ZHs8LhGesTawC%2F9EwaDNNNj0NdhWKfdU5sH8Er%2BYK0quhHoQg5nHwWsvvAL2eIRbWEORpLWmw9a2IjAM5OPjvm%2Fst0woYPMXQNDiBRF9xbndm%2F%2BAZzEYaPyPT1uYqRxCp9UxWrw02ASVMOW8TlGVF2t7quZzFhvC%2BZEnpF9VY50sFHX2iG%2FFYxfCsCIkb1%2F%2Fb4gdmq%2FY%2FjBsxOxBEew3rgU%2BxlHgLG44%2FfjjFd0BiBCp03qDKjQA76zsgqtW1DiNFvKoxAL1EmyKTAFKOlnHBQ0QIdOntM%2FI75AJDolcxDAPKs9N4nH7uQCXqqZhON3UHhP5h%2ByYxBZKjbHg1ArFjOGH0VqTgtaQDRRZAbA47hipXIy6gb96yadD5oM1%2Fre1qbvP4oS4O0FGM%2BakdBcBESMtSHzQMaMz6QBCAl32et%2BxPnME77aTl%2FoRihD7bjp3e6CV0wvYL7%2BRVPHyMi3nGLLE8wC12GKlMNDQpr4GOqUBaEj2IgsqLHG8Qe88MynPnD%2FnmAz%2FL%2BsmWFSjt%2B1ca%2BbA9OE1YlhsQ7C7kQronJVAOGu0iSqhr%2F8RwHyTZjrtNYSI93mBTU5Vw3%2F%2Ft7Oxfq7i4J6LdRJMrxiLpq%2FOXgsZu6FBZCeMD1D7QgN2ip%2BvAClQi5VTKmcYgb%2FlVv6kcfPoTKGHWOq1p%2F61iQYsoGZ3rXIq1ofpJqjOCHMQSgbmmz9zLAle&X-Amz-Signature=c8a8594dfdaffc1b6fb26b960615126f44a7ac2bb8f53b956b4e60a80f25336a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
