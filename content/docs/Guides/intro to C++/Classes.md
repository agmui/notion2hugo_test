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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFEM6KW7%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T081221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH%2BEMjm1Dam1G2OlHCh%2FRe%2FzzbD2xZOP9O7o7TDjiYcQIhAJNZCjSlVHqTcwDO9QHnjeDjYpXlUUm6DbKH%2FRaMKCKtKv8DCHEQABoMNjM3NDIzMTgzODA1Igxl%2B4tC3fI%2FhdYFh6Yq3APrW84HgldgJzhtnq%2F5uRvj1Hscgq26Re7694EDzYvOwYJP8zg4EVeub5KENk8I7NNXN8aP1i5QlcUCfqVEAaj92ygWxfxZ0HN00%2BIj77Uw5QhQQSghiomg353O07tdSEIhtuNpgXHPn1vuREPk7nzhvAHQnUI3y%2BaAL1HjyuZiPCa7LOs7xKg2vo0hRQ9whpAxQi2ZAACM%2FWad3zED4rOcxjfHeXWmqa43TvDY9NvNRdMsB34X%2F3bh7OdDEo%2BZZHjk%2F910cGFidlNKGyNA7%2BYpfiLkUAsWJwEFbspsFEvoaZrE0xYXbfR9Gt95ua692RKpcg67kT4%2B1swkrYz8H83yRddFCpIOJI9Y9s9mHE1lVHK4Mzk33MV%2B1EpDkLwErk%2BbYTvSLzmBvu4gFI2YT2dg4iRuZkO9d5eK4yqe1xUbxQ4LJ0Rje8hhT17CGxTcwnXWd776SbZx3%2BhrIAyq%2BfyEUQtv0%2FZNJKtKo%2BxO6TlLi3lJN7v4y5mVJOUfU0Qyt8K7Cnx6y0Gc8XmqM6%2B1mg3u59xRaOeasr5ZjMRkE4o21IVBt9WbF7XKcSV1f6qi6hVjIpkZxxp95g0dTqZFi4LhBVb4EhLxucUzcPczd0reJVgmlTY5uSv%2B%2FEMy5zDw9drBBjqkAeZdw2NZhiJ3%2Bi1ioTbS32Wgl%2Brdh8ZxOmjyKl4PXipEQzpJA7RclksAsNTv1N7wW14%2Fw7ywh9znxwbN0ImQgD4NCK%2FnSW2lX291WZkF0Bq3tIa8VYjqh%2BvWPUJ8plspcqMfRlClQ4RKeGNTzIZOQm67LQ1IUbGP2hBW4d8YCghjk00y9XgUltIe3RRxSE6raIIP0d3BGU87CyykB3Qae6yBxZ7x&X-Amz-Signature=0149a43fa424e86606f4617dbd240c34299489d113a6def21c563aa0bf509aab&X-Amz-SignedHeaders=host&x-id=GetObject)

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
