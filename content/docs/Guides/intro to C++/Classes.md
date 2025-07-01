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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOCSI3WH%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBXvHVAgUAbN%2FZnxgF8MH2YzlVG36NQ26%2F3bfnaEDbdAiEAvlYMo8PQSCe3ovQDzN%2BMpHdYWAC%2FPV1wYYs6WoqJ1%2BIqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFA4XMznhwAj7omWQCrcA1JfPhCU1urp1QcSdBvUQUnb27YPoiHLwmVUYOqmESV4lX3KhqQLuHbaMEq%2BhBOnocfJMTOVUiH8sRkR%2BFbr2bdxkoxfCBQQEJZuMRjaN74GSxRFbs2UQxH3jWuwjRQH3I4NrnYiwq9MR0tuw39r%2BEmWOLMcH8meEJ2qE1IQKchun%2FbcTgmc5p5qn9DBbSemJfQR54qmTVruUMEJUJY4q1lGPIGeWp7f3z12lPvt%2F4N%2F4enqKp0BVee4GShSFm9fHNh4utA8WnfUER0PDmJmNQTJlkcBY4L6iumiWuL2xZOmvece33XcBdnrj57IBukjzNKaPvwMApO1DfGace5NOo3lvchxz%2F2ZNNmnKITLZb5AsopTkTanpQSm4jua5RIZwDDBHWUBA61Yjp5KzgfPYhi4cT3DIf4OFrg422WoXePQF1Tw00XlbnWqaS%2Bkzc8TJmG5No%2FharbGnnBohrrvnEJd6cY1n26SGR3do3Djoff488L4eRsJ125TG0NHl1SKUuhDvgDrH0IF%2BfnfDNYe%2FC2hmNWMN6hxZGwSekGKMJ9gumSftjnKNjipsXHuHkfLHtEAg0w6mUsKvuFA7rxvjQCjvubpFwsrlEMjdy92kggbCFKZHAjIRHXesNxVMKvEkMMGOqUBgqKgXg05q6s4XeBpCvoa%2FkYOrQh%2B1ikFVVc8ca1gBvA4dFH2kz9BOQxlVnA2ze6%2FTmIQcZ8KT55n6a1qZY4id9StieyWWzH5DvCkibXWP2RNgLeVJDCenkM7NK8L4o8tkOnjzqnrv7bJWLCgmZI8cAibATyHPi0C7AmUgfTLYVMebe6h%2BPGWJ4JO4XG4xVMhc%2FmwVdOHku8M5QLAXJGnmhWK4eGA&X-Amz-Signature=47e6b2d35cdcd8f2f21d2febaebd2e547847c80f9075820c5b83319c56ed0602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
