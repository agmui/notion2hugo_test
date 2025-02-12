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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSUGXWXC%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPsFZ6rIxZx0WjQbtPHvTaNL1dGp4XQoy9r0ZIly8ZGAiBIRjOSkA%2BPDhXV%2FGxy26t1ai%2BzcRmI5SE7IgbgbzK7wiqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3P9BAgy%2FmHkRfcagKtwDkdptxg2XhMd8I6T7wOX1ueXoSX%2FA%2FwHyMHIwdFNfr6CmSg7sS3IkZSa7ANhkCSW%2B%2FBd2DgHdK8%2Bsa0Bh5BJlrBOJ965JA8k%2BGovDwoS8vxFSfdOGdFSPzxE76gffi%2BmO%2FNiyT4jpktXPLow5O1Dct%2F4Uw6sYKfw0Zlmq7e7nXCue2PTMrTMoyFYeMzYcOHilzeAAcSrN6WXx%2BQ75iyqjwTHhgPEFPO15OjggSBsCcdfL9UA5QhMTbzUn28dbDTE7oVzpC%2BbZk%2FiVHK2Oa95VhQeC4pHCQBHt2DF13KN1aUTPg3wK2uwYWVhgys8OKskRAARGNrj81ZV5EmwqF4j02JTHBirMRHaJzguNLwbXH9d9uNgI7WSeL4Ji5JxccBzT5uO470D%2BxoUIOgUXlvZkYDhnd%2Br3tpbLl%2Bj19Y7QpbJy40x80AfYGJgAXnR9hZ5TVYu%2FGz8HQU9%2FFzimyl1tRR%2Bhj%2FyywBaIFvYT%2B7LAdWPiaTM6xgefuzX2bA8iy6JPvGMBuxEcjo0DwUOSs0zAqfsD1lTYd%2BU0hnmc4fSY3NVzYvvJLRfWbFdu7FPZUDIEp%2FwT74TqpvNOnxQ2%2BZLseAgLxxgX1y9bpsH3MaXq6NWQFvagAZFkRPqR0xow56m0vQY6pgFS8%2BIhcVzbD7J7dYvNYJRpruIHiTHIXNfVXVKXSpAcrigvoAp6wuVbpbc9UJjtR79PRn2esUOKfb8fP92%2BPwOWbUgIyiiQAylMA3B3o6k2TFWeWLzv6RwTwDqJCQ4HwXl2e33z29Z9wl7N9TrpKqtVVxBsU6bz2r4xm4j8Ti9qZiWULXLJAwqV%2FbGiG%2BPAQs2khD0nlC3K8XyGeLi30K3EVQPx%2Fj1V&X-Amz-Signature=cd949fe5cbefb3c174642e3a333f3c029dba0da543e967bb70f5a7599e79eb97&X-Amz-SignedHeaders=host&x-id=GetObject)

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
