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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZVBGEQL%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH0c1XJV5YFeye48Rd9mYmQ6hB7RaAmLrgFlJvww11E8CIAiLBPHULGI%2BOeEW3yAiwrlZgdshwxh1G1kfObQZpCrGKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2idck7rnCZxqHMI8q3AP31pldhzXxk1zn%2FcxunUCGw1mEgLcRLRbdySWO8UEQQRE4DnVgcL8AWw1Iykf0Cu%2Ff1gB9Uqr%2BiJNimUrX5Um95Dv40rOWQY%2BeGFd7MUbJQF50HJ8hPNtHe0lJoEle3r%2B%2Ff6PKHGRo25muwheoIlGNMaYLYdcSFcI9Scc0wV3pQFXmryNzqU0HCfKbq4FJPHVU438dajMJjo6IkP5zeHWpzsUnnY76guBLxFvF8k%2BFFPbxTtSQn9FW9ECxMMQNFXleGbF9eQimgHcvAbSHHrTL0q4ZiAnb9jKB%2BnpoY3ZMQvSLlX8KOu9pzUISaa8BfumIhn1AnPXo130PNJv1u2tJesVzZCMkiYpiEME82CuOkqVpKdvgbMVI0XT%2BCxhKnc9cbm03x5GaTMFaQFmTThNd4vehDdchc3fUScQvDAIHFg%2BhBd1Er0ocJtlq%2FIC%2BSBxkvdamvva1fs2vs8Inn6supZ4ZzbDGLciWTarqLQcVTI1urWyL5hNGA5FNO8gFHfuQiwXS9mlU%2B1BOhhrJg1pozlsSzBISRkQOhwDVm7D9U7z69MSQS%2BI135OoGQDJDH4%2B3rrIEwh%2Bl8pFke2vwGZc1BQYOn2anzrtgj84Yzoy%2FnKrRHyf68%2Fe0GHeBDDDwq29BjqnAd1S4nEYe6XtZGVb6Fyqr%2BUfs01v9lrDqCOoxrH3xrY%2BeG9MxbqZHoJJYyLvLjdEyWht52pqghfSqL0oRcYaR1Fn6VHLuD6PQE8zSM%2BFJmDx7DsEMdX%2Bxqar8X5tiW08FNAbdvnZjfMsYGSspR9sj0Tm1B7sgYKt4fsTzV1TRLiAlSCuDV1Ry%2FwI1MTkEUwkg%2F5fja8KC9YaH4bWEOsFbeO1ph3D%2FnJo&X-Amz-Signature=a3d9e50cbe9086fdc62a1163ead30d0f8524534dfdca4dd6e682dd04a8f5535f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
