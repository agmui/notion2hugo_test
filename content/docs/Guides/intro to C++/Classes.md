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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLGGRR7I%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T050752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7WF9eaarM98rpqtmW0bBzslvvgVH8RgWaInnQJh9AiAiBX6iUjA%2FuqrAq50dzgECo5Iuvyve9P7Ud2O9PZkjEOHCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMEkVmHeuEC9jmiTHYKtwD78MtR%2BrqnLjE6lqIMy1hGK%2BQQdNNnKHQcxNDcORGhtOxOJEn%2BfCk7wEJQuchUBlmwBvB82eiGf4Zn3kELKZHgDHerHgni7e5Wfji8ygzwoZ64YaNVYCtgEJOTswdq1w9%2Fr3JWLh3YzzsysjrJ%2FkySZ6mq4s%2BbrXJNY32oFKrDcQBMEfp4PDDcG58AhDovNypgAxKCoJ066okMKfIzEC%2FPQuLa7IzhULzS5%2B5Cz%2FJKhUviW%2BnFicDx%2BmcbUWFXDsrDMKnJfylNj9gM8bdBPncennOJBQKSHXAvCcpjhYVCmMp3O%2B5Z30bXZPg9V%2FgjmR7wseXEqSuSKXFF0dST76hNo1JaR88uWzRL690l%2FUFWTn%2F1f5FvGGZKRXEuqXs%2F32bQm5FesLU308GtKI8StT2wuMSC%2Fs2%2BatPBzX3MrtPxWntilwn%2FzcN4G%2F1u3OzirnegYq6SXAHWnXZUfgNvB1xRsrlaJM2pD0LvbgKD4%2FtHQ1hz2trPrONBftVuOrFDSGLV54OWMKAqeiilxreooYSwjn%2BNt1dxFoQ2j3dce2kH1Elz%2BneoTEM6dZKuhg9wnrWRkvIUPpg6xviCRHBvWfgHgec1jJvg78wuwKJwoekYFafwvFdelh6P9aQsAEwq7bYvgY6pgH4FcjIKSY8Czog7GdPDYyi3RDmcIDgPhyP6CxO39ZiWBUXJkrnP%2Fl5uNhey6YFd68f8UksWEBfmjTU5AwgthBdnprFyzpIL8bRTqF%2BU6HJvfC2uj0XRvdj2nWS81b5X%2BStVYr2Pldo3LW8ZaK%2B3Hl492%2B4yn9No%2ByRuZCK%2BI6m0pq3V15ykVFsJa9THcc482guwFwmQYfaKfvQGbJ9lqqCdhv7f1Mk&X-Amz-Signature=c91772935b65c3c3e290307fec687b3cd1f492306417ab436028ec99484452d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
