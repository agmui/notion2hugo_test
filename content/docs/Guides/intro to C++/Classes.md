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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6LNQ4TU%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCcJWPGq5c0pOiv91w49u%2BHEZGRS8d3bwpm73VQu695tgIhAMnZdpqOIet0LQzrqmYm5Yon8BujqeDmKXnaqREAGrzPKv8DCBoQABoMNjM3NDIzMTgzODA1IgzjzCy5q%2FgauqqkwDUq3AMG3oHhQbAUdbe%2By7LeIV2DrexS4QYQsoIuhw2ydMRrKMq8QXOShSE6Bw6xtzOhZlfwDA0d2X2uSLAwRd%2FWHrIWO33n%2B9vfAhlndmZjMEXHlIQxY6E3h6ztkmBSZdU0b89ZRu972sIAksH0Y7%2BM9Q%2BstbR1%2B5DoRrXg1q7kOzA0b3yEubHpnzaqsQP0vNVbya65x8YU7%2FWH8QLkgLAGPCeiYMO6t7tQWD4vpv8I3vPgMVIlwDQxYPRsy2DOBD7QynYzNvQhhESHTEP2bfjbY7ZP3XwDx0mFGTC%2B471PZOaQeDEOGKivFeLc5%2FF2TIEiziBsnEO6wvkEx6Sif6Ei8bdlEDG2DfZvHZrCGStwd5Sc2DGIyUUPr6ewe6SPP4Ijs7xgMJ4KA3oBy3NFGdPVfSdzCNAXkHsyYJ6EKTLOmiKXICSWwBJV%2Bj5Yrbzf62h5LPNY8r%2ByEVlNB%2Fk0iOtSp8UPTMTPSz3bZjY3aZUCzsasx%2FkgyK7PMldT87NHHu8u6M6iU7tAokmyixohuSE%2FB6IJyFT%2F9da41t1kzgetSemvyFpMMLn3dHHwQHmzXjyFyUSgLgyS8pwIwq04hF6sAxe%2FWSw29WCX16qVJ0OU8s1BzKVYuxPhTjR1E60qPjCk0vzBBjqkASScXeTBweeTDM1XL5DOzd7%2FDoFARB%2BTbeOKdIjM%2BYmkDjqFMWaO%2BEEK45cEYP71lUhBEDuatPXriuz1n92Lu8Sl4%2BLqt7FzDJHOUc%2FUo6ymkbYYBwpyw7fLXMcrxtN4pI5FVcrMkunIgBOa4IBYHY4m5ijZHMyIoSaqZjkMaXML6%2FrrKuHrN4mP68G0Mwm6Mjrt%2FqCfkyMG2Wd840cphbbcNxZI&X-Amz-Signature=a32666ba10554b34939ad33e784d2b98ac6d515e59a1b83a135651947c88d0c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
