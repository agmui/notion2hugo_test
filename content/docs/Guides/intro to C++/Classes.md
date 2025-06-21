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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFIQXSTF%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY5yflwkKTpMHyjnkz%2F2sfQxDpSGrMIjewDVsGyzIzJQIhAPFBEZyEmRTIjmc7mVcqy5KIVjP9lmcEiuEmPXp%2BYtj%2BKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwfe00SVper2%2FOJm14q3AN1rXLYwQBOfmfZIjtvsoQNhQddoWc8MEo4A7b59Wug9JqV3hTu7%2F4o8LJNaeCtZiPsLAUF7z5%2FmHO8SkfcY1LO%2BqAK7zW1hVERkjNwn5vGhm5RGSrArWyydxUdhXp%2FrsCx11fM0UUPFUT5OvH3pUWpO%2FGTNQw4d6nebxIOnMP%2BMMXXb0rStGZaEddofEzARRf3tCFZ98moYfgt24y8sHas6Ye8gafsK20VePRA2wuybmmhsdRf2LFE4OT9y3iUxrzfpFD5xmIfar9x31dCyYszbwfmVDGrrIrCmjezB8oiZrn6UDWm%2BduPbZkYyJV9%2BL7oJ8mXijCcM5YmM1LP0plhHm6LiUKWyAymlZd%2BGR1bgkx9HQXnPaOQWCeYPzClO0d5bX4JVLBhwPvjkSLT88UoGE0D1w%2Fz9nQQ24kU3Bm%2BItJzgH0wP5OxB1cFfTZAZ8Im7XIpwAoeQf6pgQwW4ThdlO89ES6e5eq5YL2T5YV73ti%2Bpik5gLJymj3BgStB5TBVYnEM0FDCawdFiqaEXU2JzOj6lvwOGpd2gkuRrV5Hzskx5wsTWtR2XjF6rkas2P1F3bqCShuuL6g6GpLDB1fW6720w1A4ueeOQON%2B1RViGVjcfZlQgHvTOFEfNTCMsNjCBjqkARQ0VRyb3qGMSQA2GxOGtvh61n8AHAgJHv%2FCaICEiN7OU%2BG70bLYBxDmMUwee14k64FuguA8qjOtHVxithHRupCB%2FABfuT1OksH0fDSW0hOis0%2BHTiy0jVe9aaSDeUC2v%2FmdfIsv9f2ArRkDqGPj4ZaeHzolzIDG7T3lVy6%2BbNAZ0fhChH8lcAKOU3dMUM8K8OQFHaOoNbT7b1iZ5EAkqkbEPL0d&X-Amz-Signature=dbfaf8f8b60b57786d3530beb042d144a2d70d8f2475ce8080687b6d24694567&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
