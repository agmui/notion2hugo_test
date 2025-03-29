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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W3DLFY6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEmVJ12t4xBb3CIiqqB3yv1DO%2FPUDWcBR630RT6uRMEYAiBOdqkciyGjY4gcMGMLsI2UyMw7Akm86Ho7rI%2BvVPFwDir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMDaufertxFku8Ql%2FWKtwD8ztbQJoh20kaPl9g0bFVQjkdQXHUOCqLKpwsCgnk58gsoJYBAj2%2FFev72nTkKPijsZP9NovHkz5fNtpR0ThtJ2Y2cYhuJeu0c%2Fl%2Bo0ZB8GfgH4XWklk5EpJ9%2FhD1zUxk%2FYwSu7CfPvKv%2BlOasf4adZdvknprjYUy4fGuqhuCSirYoohyMsXRcgiUpUQrOXjlLgpKdn9sSc%2B8up91oDnjcfhQTMmPlYkPZkMdKyyyWXNj%2BNxGlvnp0cl2QQwI8x4PMQKUXqNPoz2i25M2CQswDXKYfatQ2F1dfKIDNhwWX2ENS%2B5AkBuPzogQTN4SAe9%2FqJLUdd1yiaI7xvOia3xCbkZrNYclSZ50FknprbF%2BoGzdbzg3zTt3i2G9jHEuOsIpPXGiucHF5xH%2FkysnHezGh2kR%2BcUeL3EGM5VSgvKUje7ERcr7T1FY%2FXz5nT0RJT1MR%2BLiZbQ9PpH6ZwTQVq5%2Fb3%2FewnWJElXz44a1NTcYLzGvoQwFHmn3CjBLtSifwXfpUyZ0e2WGwI4%2FIQudqPV8uUOVQSPrH%2FsemGNLRaHvHnkFVmmHlGeSWl114tIhYy6Ql1nbUcOGCORquMriJ8UrDRNO4NQfGZD6PL5BRffa3Ndm0fney3eKYgP%2BTugwtqqevwY6pgGp3tGfjtqrkjTKF9ge0Nhp4jD%2BX2gtjxETSyAFcoN5bdcpyL8526BOnv8aRR0sgfln1u43OGMA4TDK1%2FmjeeK3nngLAu4xvRzUpho4A%2F88HASVPGD5v97WxrFpUN44bDZBzVqQ3CkBQXVmOJKPvmb1WV4T7%2B8d9FdZhphZP8LVL5sNTdJgFRXySWng87KFoGd%2B5cQCwyRIvyplKK9sN74q4bde7T1Q&X-Amz-Signature=c1aba0e4f93c9a73b3ab70def7c70aa677516bdca61d6b74a7a465f5d9ddee3c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
