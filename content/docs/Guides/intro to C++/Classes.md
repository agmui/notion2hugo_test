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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUYD3COH%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCU1HvlLov1QAUWdCKrNr2I4nngD8LjvpjqZQmQSJyRGwIgENk%2B4yXAAB4rz1yMUaxlN5tUn5Fj%2F7zKLDGvl22W1Q0qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BmO%2BzOVVfu76UoZyrcA2nX19N%2BiFUnzF1JaLdwEHoDmO21IIWuLfr3MZAP2cZtun1K4GRS6hWtF%2BUmMvKnNkuXe2kRsk%2FRqzRwHmAgB0%2B1tVzBbrt1RFFCWJnajd8wEMUo1uT4%2BKEE9MAHqQZvTIwA1fDoZQS0J3NGT8hBMNRaK0XbUv7XSfet2bwIEMiKmgRa6NRyyZfwJ5HvwbmB4PNaoa%2FiiI9h%2FuA59Apid1qDKbhDJwKMlMWijN%2BA9zfZtBPjXv%2FSbizaoxXJ6Lg5DGbs7Jp44xEyW4J%2BoJvTPfoSWlzMxXG9ODG3%2FPKbf%2FtYKfHh%2B4yVbxIaFnvxVzaYO07BJyn6hEcLcw5ldUIDMAUhvgoK6S6HP03fAvSus9PrW2k9dofB36w9LI%2Fe23AxjSaHtf7CRBSQLJmtVaZDS%2FuzlIyjbIT5UT%2BcjaJw%2FmiilyPcC%2BqbD5M4ZmzuCJfm2is4n5Hu2MT696Fe4pZWF5UmaGldGNlNOmbKaP7mmdc0XSAmO0jcSMUQn3Z55ScXNV77aO%2BlWZQFdfN0MRKWT2poTakopxaeVh2T8EosSO7C2KHdr0BpijpQpZq9YNOxCSC1dLkkc%2F7ZNF5JWBYZc30VJtqC%2BULRAYUnEcRKfS5ICfBvhDGt8DkbysbpMM3Hz8AGOqUBRdnNkCPCeVFD42kTs3pCLFEiZQYiwURGh0MwzSWxgO65EngFl9Y8rfpQoJkYqrdBSRRyyHCH4TOiJ8iJmbw4G%2BCbSiTdEaSptKQr2kDc9RidWwMBAnumsI7YoBcEgBpp6ZDtXQiN4FZSPbec3s5cPMazSimo10KjKTMNuLJQYJSIkREFi%2FOBHZUD9iRZuTWqWiAMGrYrjIoDygJGPebHwqP5ekSM&X-Amz-Signature=a4687a7c3c2d9c6e0b12514c7514d769ed7383a94e8034df6c3b17b5f2dcc84b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
