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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636PLCPM3%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T090958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4zyhAqNoFT87ug5ngYxapyDlgAD%2Fo75qCJ%2BflrsVhwQIgd892tS0O%2BHnN18NUXis0KiBYnXNG%2FkLuCu518zeWcBgq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPgFQI2v6q1urOeQVSrcA4MkrqDIyD44QMs%2Feez12AcjN9QUAqak%2F0xmT6bwb742GVv1sIrxs1oKcHdkN4%2BdYpDJGYEsAJp6sCjukoq7hEeGpV5b%2FSG6WBiE626ZOB%2FRK5ljTuteZrfO%2BQsd7tPa7UuJmRIU85ANz1c%2FbtjE7DBXpu4ryKbVfGRdMUgRCEyptbCKMsat2dInRq1NNPWZQyDzSSBQ2ZUU8Jogstsu4IXJLXKfXmLzwYb0SFVkg9cJiGPEFy80LivzHuXWH93tslgbs26ZPSzbRmAnDWbrF9rvAFcifuSFcYz7EBSuX%2FfVdMEeaHsL1o8UrSwKK8919h6xsTZ9SwXDwkzAo3kOJgYev8yYHrOqe2i%2BEp5NgN3YRWN2q1P8vYrKY2%2F%2FQToerdZ0hGrEWEhVQV%2FZsdSAW0G71SbfK9sXQtoSjTW3vg45IZrWcRTtodWyrN9lSDaAIc2DPmGLVOmVgVjTlC2SvqMPy0BQm8HKclbi8iAOB6l2nq%2BpFAiaM54OlXc2j%2FZrB8LjBjt6oM1kfwOpU5btuOVX1DFfYR7WDbL7D%2BqtzAIXafhmEdEmfMxmMwBjimMuQaIWZbpx0c%2FFD09LtdYyid82aE8dgcISX942ue7%2B39P9fIOrrnlXz%2FpjQieYMOvi8r8GOqUBiRfpQd9Yqx11FR4XrPxBzsDR9vFn6PJ%2FRwPIOenqYEyYZFhcwnnvxIYe%2Fpj5LRI8efrov6fX8yme5KT5MOEmahGJKlius7qPnCpt7QW3AjmROfK9IyUPtecdT4mTFY8%2B7Mh6qJvM8OTRPXJg%2Bx3R14%2Blfju7QjKbls5V60f5QaDna5bqKdwvTXwXjRQuARV9AuRkMng2MAswbGgfaVWi8oBdLe07&X-Amz-Signature=e0634884cb849eda3d2a4fd839884b78344c94163bf23e12e4827d8009173405&X-Amz-SignedHeaders=host&x-id=GetObject)

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
