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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676SKNZPT%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T121353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbzTkS5Ai%2BEn2Z2z3Jt%2BRjdKwQnBjJyT8VTR%2F7hH6IfAiEArqRVjSP0qeEwsJt0rXajavo%2F77cVBVj66NLdZ0U09PQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDNm5R1B%2BdbepKuss4SrcA4pOg3P1fTmqhbRJtUK3OO8Upt88F%2B4d82H5hHHG0FkMfPZacRSI%2Bj8xYO0eONsXMAqS9kE7ybe3%2BlCX4xDvjBmGqt5vsN5aEfyZpGoCW%2Fo033eFt5MFgsMksnZF3iqA62Qh7sn8Eu7cODN%2BJ5cSgJRWYjiU5K9MtWuYzODVL72iGaOF5x9N46pdEFXryTwoEP%2FPW7f2qTMM3koxu9GcyWMIyq212cVfeiQTLo1OW5%2F6dwxdbQv7zbnxeRUQ4hPqr0XZipGU49BF%2BMS9I0DgGDPUuJKA3SrO2Wp%2BZC5KlycYFW881UdL%2FLj77qwP92U%2F1tNgnWjwoM9KQYeFgq7S6Qt6VZORV4A9fgaBQytCzIdmJVM%2BCaH6F8LcrLcu047pWufuWiQASCWlNvB3Wh6NDZ0O3AoF08tRE3QrMmlADjz3Yq0NBSsTuVUwIYT8wj46NNhX%2Bfc%2FcyryVtQe0Jo0Qq6HCoCfm%2F32XQjH%2FSZlfxZtV3%2Fb5L6ApCB2iFP8rl%2Fwz8ZvVdpXGZOwYjWuQ7PcaMP94To1ZeJF%2BzAqG9xFRC6BvDyulY9UKde%2FJXaSpA6bSJlr0O4z5ww9g7GpD90sXD3neODgV7xOKIlg3etd0xoJl8ykmDolZC0Yl7kpMPyJpsEGOqUBnysdhQOdZ7Ig%2FbpN58jbcGUXj2nt0hiPREc9%2B5CUQcQwfYb6x69U9eGQdcZquhafoLb8DaOUUcUH0M%2Bg%2BYwsaAABNark%2FTmo6VkdoZ%2BB5wScWU94DIGtPOOoh8AW7hzO9TzOP0NiQCB1gjb1nxzhvOzp32t8hDPN2KmYLO1j%2BW45Unbd6tvLBD4%2Fa0QQtOwMYsyuWu8j0BXhz4myuAqA%2BhiE4hJB&X-Amz-Signature=f163fc8c87911380394a849aa924124833156cf0cb82c93572df1003aaf4c2f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
