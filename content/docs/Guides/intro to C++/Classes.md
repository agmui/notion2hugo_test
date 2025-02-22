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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654MKOEH6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcM%2FN8SjAyg4zvE1C2TEpbaeSNpmtoFTPcaSCtk7%2FB7AiBL1zWG%2BiN%2B6n6%2B1Sk2QP3NgSB7N%2FyPZHSrsYhqzoWS1CqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKsOlAEgr%2FiVDcO%2BUKtwDyetugWl%2BX%2FklHlW1kphEdfmBD4tCNMM%2Ba9kxeg4iYq3C08sLRgzTBRs1iTDpIXyxtiRtfGrAya%2F3B5szzJvKqVrMaNNdAvxdrupSKfIpYun16PJWOayZawRxalW1HTOZWXxbCf6jXhL4QDki%2FTNZkzy8j9y6J1S0gpZVTAW2s%2FWuq3bNnTg1fdolVAAyUNB3Fmn0aCrWSTZguJU0GU1V7wGcxJg9L9ypuPqh9YFGfC3Nqo9uexCMKKZ7HMhZuhJqlpkz8fOTvLxuq%2BZOnC6%2BpMMWyp6fIaVyK5kfKgflxNUeJGK3%2FbeZKkvj5iXfrP3qpXiazcSr6V8jBLrD99Sjmz3Gv%2FJsBuWvIgImPyzibarHqRNM7%2FZ9FmrbrIhbKikRxblVpGu05Cn%2BDlj3zFAoZ9giLNFCBNO0nKCxrekzZO5PIYKHxZYTMW0DkQhZDJSz%2BVa7mxrkW%2BUS5k6T12nsBpH173qZdH8i8kTwzezDDIrCwGGjOCS4JEpcNGtGDeFGZ7sPoj4K85MaEOIIUAWen2rCIk6mH1kHff7vf%2FimLArI4pNBARDAYs%2BKyJsBT3dfK%2B%2Bkj8ieDFj3dEHy%2BWsaoTFC0nxR7%2Bo2%2FWAP4pHge5mS38EHhFQT%2FbrPB9EwtOTlvQY6pgG3zMrWHfK8kH2GMABKiPZw68GRY0BH7Mims78FgY93v5eiR7dFQXxOupmShdOs2CBNjrW7NadZmEm49KstZt%2Fgqdhz%2B3cVq4gIsge1W7HbDDvzN0l9KOeZ6JMXf6WK0Mo5iPnLOpaye0ig7w8oD5dGB%2B8XVct6fybaultnFisxwQ1MBLZIPNGJWvmyHJ5yb69yCGoJyd2ShMu%2BCMcah1FQKf4Dhio1&X-Amz-Signature=3d9887e5ec6bbd9cbbb392f65439614e099276d7fb76b70d5d9807a5e08b74b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
