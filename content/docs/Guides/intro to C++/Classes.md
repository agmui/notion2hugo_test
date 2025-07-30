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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUPG4C3U%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDW0%2B12S6LH%2BbxyLD9ZwpP2Y2Z5wTmYkl86X3dOlKkhUAiEAm8U%2BUCbSrIJnZ3RCJgAsC0D60dHI1a3EZL0Q1plCIgoqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEC2tGf5Y0IZ5X8BWSrcA16qacwParIEgUQQx69yFFEv2gJdjYIVEcBx8%2FTPcKrNbRTPLwEvzp0BAEbmWbz8ulGn%2FFXXyRVNqK7UOmjyLlcYxJyowGn9P8qcZruGpBy0JXBExKX2WezymOhnLbryZYdaVulyUMQIWHJfZ3twsJ%2BLrY7OyFxGp98Py3GpVqb7oaxCTvxW%2FP50JBmuMOLGZdEndBXSKX4hH0hVm4K6QUCZkxkbJOTPbgyC0QVCZIOZN6zZ0duFpxruDx99QNy4FiODmUrtdGvgQeymI8ykMJVlZUi1BXguIZvYOqU35ePKFTxcMMu2Ek0HCixXnGgL%2FG1t9ryJQYM4Dh7YeeJGbZtGULWycwfiK1ODZ%2F519Qodz2M2F8V5be7Mlslxi%2FEfrbrtTOyw%2B6Uo4UuCrccSlQ5X0WfC%2B8DSlNjeFNrslsGtg6bClIVDWZkDoxMBGv3SzSNk7ziOKRQYBucN67MnaT0e0RsBT7lxbBj2WZMvpa6T3iZIAA04TyG8lGa%2FTB7L2%2F6%2FN483gttceZxN8RXKpeSQZXpmJBH1YJ9AtVf4TrwOq8d1oMQjLVv2tVeeTOunpCNqY4UMzJDJbF2yHMTpad24hYGI383FYs69zZKbUGY1%2F7GlDyAh2NOJJJ2BMNaKqsQGOqUBQSW7xECGQQkEM4YdWTtj5lOp8hSYJcfZ5D6qW%2FXlfEFqn1Px1zv4azER3FdqnsGhY91kw2NFeb7YZlCFTRbXUXK3zn56V%2BYJynOfWb917Rv3fqv71UgoRKT8wbHK7rVq4CbxvzoBq9NiqhhTHa3vdOW6tUSF9A1lOfJZk5g2givwU76EYq4oNWyA2nW2MUrWrWX4NVijHNDEYlWGOOFeQq42d3IH&X-Amz-Signature=ad5519297c1223efbd1885336b526c9be9be22b613a1260aaf6767a8fe81a8d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
