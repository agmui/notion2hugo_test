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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SDZGH76%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPqnasJP7Qb6jtScqaaW0S2ZgrdFcRCc7mTjHLoF7fuAiEAtVinfA0rkc28bSUsp40jk%2Fifnvm7pllKcL0iutS6z6Eq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDNuGSFM7mwNpo59%2FqSrcA4sDvSijUkx8pKmNZTaDlP4Q6Cuqy6Sj4cl4qgg8dnzj9Yb4dywLkorvylO6MniT21QtGZUuNfqLHhWMq5Ho4aMI5wnFiHI0DE7kTzmax64wzKU%2BR5qP%2FneoK3%2BDOLHo58zYKYXKmU0pG4b1qcjEDP9O4zbUnPxwiOGNMh2%2FMSONdyx6BCgme1Ixoa2lMq19TupeK4g6onTUxqz1cyj3IFuJL3f5XYRs19JoN2ra7Pbumwt0EPtvJF8Axhz2eHmPjrHdabVMz8rAclCTg2WEW4nZ7UDExh5iAWZRogfPEszf9%2Bki%2BEvYR35N0hVHsPeeOcynyEn6Ule1DDS1EGQUaGq9yCMutSF8XHX1srX1rgxvgcemClaxDe6gfWiSDjmQBrIo1kFeDFcZ7EOEyBXctsZnICX8c3w62V6A%2BJuGN%2FddfV0Ou3I%2BJIwWQcpMICassGHhayRSyJMHAaCKHN7ESuTbm9qcz7fms1Dtf9lmZ9a0Voo%2FQpRSLx0qXgI8gEkw8DHI8len8CSvUS3W7QEPc6PfO9mq5yqWV5dSdlL6QL6gFwNA6WVV4Gt7ykPV%2BDI%2F5RfD4YJtmZuQEi82YLQJLvMw3dUvjoCOddKEm9iWukNknW2o05PTTUeDaCFOMIa%2Bi8IGOqUBuB4T1nIokDup71rbuAg3u0GG%2FZVXtbIFrcMJrFduInxJs3x67sTei73BeHNZ7PNH%2F0q53NGo6AbGUYUPQOgij%2BlHKR1KI3lmtzHJRszhFESOWj%2FNZYlyZO5LKnO6dfPFysYunSWGGult3e4VF9jo%2BOXAyfVRJYViR7YpAsyAz0DVoWxqt4T1%2BlstAtfbn2BUOiBCpcnAtqM9Ej0Q3gxxRyLGpuox&X-Amz-Signature=f657ee6cd632152951daa2e4c3ff207ea4f9baccab131887b2c57717bdf0744f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
