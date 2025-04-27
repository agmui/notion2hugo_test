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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6ICLIQG%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtk64d%2Bk0A62WsLCGPcfZg2n8u9nG2p%2BUXDm5WtD6EjAiAljnEV7MfIGX6%2BJAR5NPsc3VA8KGPZD14BEOrrnp4o%2FSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMRDf2FF72bKP%2Bs%2FyDKtwD2qc%2BV6zUcc9rXDPubdX8pnnrq2cAqD6blDKLTkKKrHnkRXeDSXDrK9FFg4NyKuE%2B34RDthTKOznN7pzg2nLcElvHqi%2BqSf85GguEWw7oijm%2B8oSGVOXPOhBTsfbgs2ES6l2aVsiMjbPDYpxm6JGKSxjuUHtaL6v5BVb5Ons%2BKJ0Zf50itUWCcBr3605YdrVWy%2FrEJP%2FJi6n2mi4qGXIabUQViqYoJ6g5EsjxEP%2BzOiFiST1%2FXMPgGIusSPSCX9Dm8qQOpsZK4PGeikh1Gtb1oEJSLNu6DysrXiLXKrQtPXssRDs8Y5%2BFZKosMXGhztBqvL1D9XJhEp8CpviR8vUnnDP%2Bov5sIzOLVJOkZiTpeFWFqq1%2BZScR8WsTzvUN3QPVCXN9LFy%2BzCnP7d44j7W1z8RxIserv%2BM2xoH4wtVVfzNcRhJDRfUtbh0CIog7ptxpduZXIPOFcZQ%2Bo80JLyPr1bzBr0C09PBmGXNt1Wn5s27C3icW1hssUlDvmeBTdRm5YVYJvOJnRqggKdSuUdmGDxqGYrmMijmIrG8F6PTervDY6YiN7ScaEmsSWhLEN72ONfZcOaQipVTFQRZl8rkZqwRImzZb93Emm%2FxufsjSDAmM1opz%2B%2BT2%2FBhQeiUwgcC1wAY6pgHauRZQmr21y4Bp0w0bmfO8tv8ntxTxKoStbKFhzPEo89LVdfJyBTQP9P9PiDWOLuqHr%2FgrTFa6H%2BfnJ45IP9nidHdknO2L45Ah8YCJqjGMLPpx9%2BqiYiQXBaTb4ruuFigxSSteIVRzMo8Kax%2Fw356ufo5iWK3jjVa74IpoN0qRJqub%2B7CQIS8YWv70z70HrV6OIyFrOnW81bn%2FgxRJznFtcNeyyLz1&X-Amz-Signature=83ecdca2437213b4a718b85bb5be331f7e0c469db19a3765a7fd2694c34afed2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
