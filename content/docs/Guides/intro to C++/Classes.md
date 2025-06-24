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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTNORCNP%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDQnNqpgCxgfIXZedHQwB7pS%2BocfYDCnqVUtUIT7yuiWgIgVf432OtwWiFH1gaQhzEB0%2FtmxPLPlSZhKnD5BRmPZcEq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDPuMFavXGaH5H3XrbCrcA3mMt4h9mhUTQwqv2WG8EUgLgrLa18XDU47ZGME06eAstmIMEqyeGOrfLSdzNSvM%2BuIXyLGsaSJozZlZfnczIUZuRhlTQV4n5BgClZDpI8FsJpl0BtDHBWU9O%2B4Y4ANLYLbyrPQMv7O6PSeGIRv9eZXlB3s34YixIFYmRIi%2Fn8cbto8yAsMHpbiaA7zDlpjCHvrBLn4MU6nJP%2Foy6wUn4CPpwlTw7B87JH6Ydx%2BV%2ByVDGIFqvM7AS3rdwYQ4wtkgNmPlHU0mwXQ0kZsVvrRdRuu44VAu%2BOCVGzg%2Bc2XcyCSyrilKcGqEnwGzzhJ97K%2FL9ZuzCnPm4zqSXm8eLFnuiAn28sdN81QPj2pSVF5aBlZ44L0ziDQM%2FMeIh%2BeSj8GDYhGtNIcyr1NqVY2hYYGI5jrf1v%2BBkUFYmTn9QHBQEk9jYrwSyrensmLIJud81iG2UJPMdinH8YtPMzYfV6%2BzZ89eLNnVUNObQzFwatva24KI%2FDUfbwt4EflK5DoFwym0gT25IusRFAFaVeUfiq2tDYbGjXc75OSkzJ0iL2PhMHwijNoast2V7IvqnXZE%2Fs4V9khIkcCMnR%2Bc7nY4p5y26hfhwbK%2Bsvpu7UUIiUnHikk%2FMN3q%2BZ%2BmsW4zyflLMI746MIGOqUBSmAoo%2F7Cn0aF%2FrUjKd47jxtqc%2BFDbDqkQXxA1I6WAfsETJEV3TVpbxmZHxeyQSvVp4JXxjuU6mHFXKw8LMOnX%2FjsaeIoQip2h9hp0t4m07BIeX%2FpdV2de1rZV8EFkruFYp11ZUw4SpvZPnzcJ8esEMEb9PmNKMG38pePiPtJCoyi%2F9c0eRuTIL8ZdFXLGV96CGov8GUC5rmnwqh0sldUoxG%2BMI2c&X-Amz-Signature=520215ed5ae804cfd635aa8a3b93bc07a054f7ed372813e831d97815be755282&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
