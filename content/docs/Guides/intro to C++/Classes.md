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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPA32BOD%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T170944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdw3lFSnsq%2F7m8PaY%2Fc36bxWV9s01AKerwUu0c0Zbw6AiBJ5o85c9ZjA3whbFtXx3N%2Bl0ZrQ9Gv%2FwQjonQNmNl%2F6yqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvIc7M9KeFkzZORGzKtwD6HTO4XQEAasaONaILRK4Bulq0CnWs0ZMzWE%2BkjW0NyjnNkCP%2BxVWowmR4boY3hHAQ%2BnIwJtIvZsySUyYGgwUrkoU%2BwYMzWhZbX1gTRl4FHuihltIdlEGQ5PODJzXir%2Fp7MqPmoPdvPgbkZ3aN%2F9aIkJo7scHhdAOVsBkhibbL2gNeEy2PL9dKtFxdpqnRYzYot7Ib9132EuXbvOPxlN3zZyYwz66zU%2Fp0E5q8TPQGpPSrF8Hj8D%2FFXJXaXzwdr%2BqcdXBF1tcUCqyIcNMqTdtdMCnJzcon8d%2F%2FXtWyGLcnI87kqbSpkURyTSjKGbBFAVaEWpyBOBDtCIf%2FBN%2BxYQu95lezfvTbrg%2BOSwl2QLLegOMIB4WlHmrwCZ8eHgCbwT7ZB3DIXUWqBR1aKk6CeQ2xrLuMPE24Wh7D29z5RlvE9Fmrkj4Aep%2BRPq9CH1WOE9d8PA5ttmbS%2FrEUx6QmVbGlDYse3DqZLIUD%2FIMOIULf7tjRfuxQK5sxHuM3e25ShWrsDmeZgTKDN73IYi01ic%2Byv947WUGYcIfhuILNn3WWaSv1Ug6%2FUcNpJXwxNtk5hOEV6dvOyq8y0gTNqgml8u%2BQQVBtqNSG4ro9HanFwqwK0SyOUhbTdzqGIEDhMswwYC1wwY6pgGx%2BG%2FMqRQxOinL3y9mcIwitYvGIS2XYLN0bsgWOBw%2BUam0MD2Qx%2BIs8gdXXRvRq1VIgS%2BATq0OuueOYuk7SZDzKzZs44X47AYioGIMuqZY6GAzyWBQL%2BrNjgl6h3XQSOpwbe49mUroTt4xly8lHuG7lAwr%2FX1AR%2BqgulvCBiMLR6ndXwUurC%2FZlRNjfQ0lmXw0QVdohcprFHo3WWJtDkqonQMiKB%2BS&X-Amz-Signature=ecd8d20ed12b37c95f6ec715343117e4e68e2c8817ca2a573c39d67a6b385a9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
