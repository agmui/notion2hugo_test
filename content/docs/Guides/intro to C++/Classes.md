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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJIM6VCU%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXYQEqaDf%2FueAiE6sZf7cWCN%2FGM1080OOgWguk2u%2FxlAIhALPRDvb0U40xOb3SZBW1atzvhVraE0cjl6RlSyRmrg0TKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMkeCGKh4jrncOqGEq3AOv2F4jdPZ9ABPN2ObKCckdsbf271FzhzbLGaCRKAwKZKiFX5stcVYAFsyNFIz9%2BqER9YoQgjEsGWAgsD%2ByRpXun9sDiKTN2o8cecaXJX7La%2BnqwXPnnSu6%2BUY8UhYKA1BCzpV3FapXLDynYTiYqFABSK0kXs%2BPOmEw3Yiv3XB1PXpr5u06zGiYP1BG%2BOCQaxCk0BKsBcPixyKBDQEb4WHr%2FjgtJlsAL4JT28SkhNNgwIntpcCknhnmP6XiRapw1Jv%2BwzBTS0Vrr%2FJQ1bZZkI%2BEam1LkUk9eLY%2FF0GwVJuCUqvkonXj9zGZ1FwZaGIEMk3XiWzq4nfV76Dc2QBEQJ5ZYeNIL%2FYExrB7pIJ8bXRrKlWotGfgBJS6jNkbx3IlwR9%2F1N2FqVrK7cnDa1QEDGqwZC2JNZWXOIDJXAwxgHqxEoEnZDskPgPOwSA%2FNZnsGkwRzO4EE1TiBOuPDx6ROb02mtMo99sBQkxbbRXKHkFz5iw%2FrrqhT9ybfQWvWrwIWLwlwDzKY3FzTdyKb5eqZnX2Q0PR%2B4dglNGtT5Km4BHpuvE2yvAzFBFW%2FCFO92boawiJ8Hi6NNN2OsJM5if19tjiYoMqsv8fFNLagxpzAhaDpOZ8n0LN%2FCOG9B0pRTDq%2Bf3CBjqkAWSdPUqQKZWj5TEG5tdVoXbdP5GacjMOhi7zagMxu0ZGBZC7IKjRzQ7HEG0N1Nmnz86hkav%2B4hNabKNq1Sa5XOB0Nrn6JLikHkUcK7j%2FUPu3RcBM80HVA5IhL9iDcQKTtOsOUJwCpA7VNXvfCRN5JcDD8GzPYu5I3W8SGuMT2NUr%2BU8keprfwR3LOJS5VXRdcU0URoCb5ceADsgC%2BnpKxgfwUANu&X-Amz-Signature=f4870bd5b44a36a5a821ad4478419d4da664f9350bdb89b2816f8c81c9352d00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
