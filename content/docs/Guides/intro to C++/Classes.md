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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWNPCTY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUstuZDdAo3wsTwGr%2Fh%2Fb9unjg4vTLyqcffRCwTyl1%2BAiBQvpUGzAd5ntjDFnHx3MhGru2%2FEGv%2B3zLqAuJ13DGLNCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvSIo9vBUT6rMBWVIKtwDbaH2cWwSIzGXsG3gZQ0BSED4hrsCn26WZaotb%2BVd9i36A%2BeCwA6xYrDfBEmTDDmsRZGLTmyUqY7k85mn04HWWISwLoKSQ0evL7GlPpFd9fhJaQ9TrBjmCWdUaWwLiJPaSrTLxQbd8fExCioQ%2FZc821zteFCFVD5hlmrHRPcLLQ%2BFYz%2FssI%2FDGioJqL1OGdiu1o3Fc8gV1a5fVNooGRlgVRN2eRmiRotcOYXsJ1zz261BMWoSIGT6hLV0S4PQAigXtcxTyrThB4pIS2WpK47LajnsWMMRWRjPvcK2jExcaMseuDcWRdu9ug2Lupq7Kh5n85n3h3zhABtQHG8ck6bz0ZO%2FShtqfhGxYaza1q6Iuut4wksIHOYAigSr2Tye9ozeua5hyRCzUvCc0aN1JZfuoYr3IIl091JFlv3Pj3i1c%2F5xEqBIqbtsbjJqcfKnIMdMHPIMfCHeskB3n70r12fJnaS0s%2F99TBC5Z%2FeoHxS2crOio%2FWKtxCejx2T85M3HDV2stWYxSojGu3xynP4ALu2S0Vw780ItG7BH9J9b60qilnng7vx9ZK%2FmIShQ0h4l8fkaS%2BH7nMuXzgLnl4SYMq5D7uqgtTSjkD0KrO0MWG7hRaoMCtnkFcLAO8zmIkwl9KIvwY6pgGdUTDfpRV6FA9j4MCG8L93Qa0e3qtyGpTty0zFkevDdjeALxLXoZK8GLgth0a1Z2nzFvTMgIfgsvbKuf8rO%2BLs5wHQ2SJKyfPbVACq6w8YXBpsyBZKLA0Gb1aQuCbmLHQwmeljVG3Auao7NTd2%2FNe4yYFD6ga9L5KPQl1wVZPLMirxunLhDvdfBkOFFtLQGa1jUJyBG%2BmfCdeVg4%2BKZkt2F3zUYk%2FX&X-Amz-Signature=4f633dae66fb1d36f6a1b5139585e7ae0a2109119bccddc6e29e2a8570345d68&X-Amz-SignedHeaders=host&x-id=GetObject)

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
