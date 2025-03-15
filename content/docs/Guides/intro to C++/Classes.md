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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDSL5SAZ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmiP9TcUCuwkWBi5xMOZ%2BIW4UjZB1wXAua1QdsrdGiyAIhAMCpLWz5f56LywCI%2FrcEJp5T83CD00fahX62WqDueFEPKv8DCBAQABoMNjM3NDIzMTgzODA1IgyEKzZG7ZEaKy1AB0Mq3AN9j4ZO4i77I6FK4eg%2Fdf%2Fho1wuRdL9c87jPPNruW%2FIpCqVjcV8k8iAGwDiq9G%2B1bJkc%2BKaHEOiER2B7CK6pvFlu%2BBo5uunxxO1NCCXKQprt%2Fcrf%2BzAWmLuIQF9oTJsYiq3pbkCEI2oN7TFta6puwXAHP4SGpdVybyFGp%2FgjDp%2BdWFS89DH2eXRgTK5PsIW4q6Lkd2xcdNSMah9EbkUQyeuqTI1HWqeQz8y8WXtNUmx7vHj7F1NHtDHvpi4aGqKIRJRud4MDdAZZhODnLNLKWMchI8TW9UYfyb%2FieVW9caeEU%2BkRpm3hx%2BgQjRaLXQH4PZBDZdktoALzX2%2FWER0fKck0hQasx0JNu5uuBK%2Bmzr9DyB48fOZH7zDOcNVGp2b5eqFfed61H1vi7oFcEbloQt9wrsqyPs1p4p5BMhANccP5AFB4xBH8uxyNbxDVwn9ES8t%2BJuVnA7N62rtJaXgmY5IDpekrTte3hK4UyYU3ENdfqi2N%2BvvrsnhWXJJrEVGINAhkzuxyQP83BhVsu84eyT1V8AGAWoO0ruM8nsOaorw6B2oGmZxhPSibrrqUV%2FaoR4XRtH1JYpdmr0AjHASnaN9nhEWyJw8QnZtNLO%2BuiFGVT0W31hgPLcVDLJcdTCUxNS%2BBjqkAazWIZfMXuly7iUoYLxEcFNtsv3Fu8wUG2ZamRSz45Oq2GKN9YO7V9wifpdq2ELZ1MSwoK2wQXajPmlVQMAf2%2BP3z7HQzkwHvxTOP0sgK24fFBH9SGhE%2B%2FOes94xfY3A1lYLQl5H7Jft%2FnKEU0oaUSK76zb%2FpQcjun6veIlLzl1SBtaBCF3oaL4AMQijqrJkzONoMnCavY1eEOUVjZF0SAu0kDna&X-Amz-Signature=8cafcd22043efe40082569639970cc90c728b40e680e30d33075fa155ccb5b78&X-Amz-SignedHeaders=host&x-id=GetObject)

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
