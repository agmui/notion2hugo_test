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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GQHYD77%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjxnK8qTk46ap3qbjNO088mGqRd%2B0prgI3Pn81ZzySjAiEA9MuHVwR%2BI%2BBhwLj7IvS0ZFkOF%2BxDac6EkfpDgC%2BFBrgqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEU6so7Fvxn4yYCp2CrcA428Q0b0xtwowBWkc7%2BPeWs6ZI2ttSxG%2FJNOTwY9M1ByrxUUfXETHs9yxRngU%2BR5ss0BtEBKZY69k1X2ddcpz%2F2ni4Fm0jpfSBB3tPctwwWhzYVg3i5PNgsoGYUffYVtC5%2FHbqCQtCtZqre%2Bjp8fgnM1Hc3WDxpoL2q8gFYPVACoRFKmWRaS%2FLCvijFB03ifsTJHFosOSFfu1X1ah45crtDs8doerihRjqaclHvMOa1VSiVVcwIVyzz6q3KUOqmXdYG8FcLeHZLxskEzrJGdkSQMd30VUipF8L%2B1wCS9xHI8PP1YX%2FKv6k15Obt2ipp%2BXnb3H5UlvBZkW6G%2BEoCPqfjPymknLFYwdAMBkQ0UuFDguXeCFWfC%2FinU7pXy%2BcrSH6vClWCTP4rli%2F6hYuEfPVMq1oiHYHP%2FE9vY9xdq6ioirxfz544e%2B3mXIBpkGrsfuDMzvmG3b4jWMh2e0i5r3UEoZYehtdq0AL2UstRPN3gvN8E%2FeeFmjWH5nIXzbVn2X4xh3xjU4K84T3jufFROXRdy6Fj41Ibjd2JVcQm3MJuLp855lR%2B2hg2XW08yrcI0%2FcXpoKSrJ%2Fe9Q1YuFAh7oAav60DlPvlHDMVRZhACGSv4Q0bX8%2F7PVvglzvn9MPydksMGOqUBOcqQUT8Rrnu3MqIsaH24CRp%2B5amfeMk6IQ%2B%2FK3osXyi0Xu7gjnINF2b6nLoVs4kCYE%2BR3YgTwdltbEpneIhmQrqDRWOacdEWuPXPOrQ0byBLUsrw%2F0e1tnIOAhKAJaR6JArT66Dgr5wcZ9WGjWlK94iGhUTs2NeaCgbeazu6ZVp1nuNf1QQFXqNzKQuV5p76aMjIDSIomlO6JY2i9KEKiJbqMQ8E&X-Amz-Signature=e07ee6b1782d5c73638f6854bbf399dde76df8553b7800fbf8df615d2aed6a3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
