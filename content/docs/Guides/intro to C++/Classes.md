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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPERMBWB%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCMz13mb0QA1y3PpZD8RidAPAw%2FiOWg%2Fc5lwrXaExeqqQIgA5ZlrfGX0SVPPlrVfyXP0PhnM4CFr7MmqCt6b1l70wsq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDPLu0zcDwnwWEcA1uCrcA515%2FLWersVU6oH6uJGb1OTr%2B7d6zj2J2G3ajKK%2Fsw7Z99I5kRWRBO99xIYYLk859zSDM5bSa3z5WR%2BSEiHuYjmX%2FKLt9KK2KRQCJwuWgMnMfi2RfKSsGf0gpNhAiHDoGnvjC4wwcvpl4%2FIm7cIEAyV03%2FQAE6Zz8qVaWUoR4XzFafFzq1Xl%2F06Twbf1lcwyu1gx3CFVWt32xKnfVHHx2ovWp7CCqVpulMkwcsTLJgSY%2B9cyDCS8CShqa5dWfA49oOJb4P6rl6CInq%2FHueehyakOO7F7FmU2%2BVov69rgVWqrKUSZcU%2B6d%2BYZd5uo%2Bg%2BR%2BrNVJJCcGsR6GisnRbqVURe9B5gTTgTXbrCq6Me3qMk8q1vlLwLlzBUPk2fbEWBNBKsjf%2BI4%2FGYTuhD0i1guPKXMcAQrvE3Dkb8m10juzT1ebvHyL4jUOBq6xo8pij5uT7cAjk3Yvj46mgixX%2B8jrKdYbkO9mueFp2kCPXXxl4NAXNGZQLX%2BO%2FvzDYJ2esNQ8eV3J5NxuOqRx%2B51PMD7hpGKzNJk7HOSKivzhFDc9oP4xoRsz4G03%2FXZgnnvs38ihPOhKOLV85IB7xp3Q%2BsWBWJ%2Favve7AUPIKe%2BoPfGXoOb4U1Ixb%2BTmRfHP3RcMPSy%2F70GOqUBjaOvVZoUTj4mNAJYDoiVPN2Ry8QVqAFw%2FoDsMVmT3yg%2FxyEGLBzUWCPGNbbafDLkxDDwAG%2F3YAJJ%2BxKIXsbQ%2BJeFtm7yueEsSWZV4%2BllMqxW4U99CGECGycPmbm2rP1K17Gy9WYPiHdRFX5dd2gS5Lbo5KFN0z95mpqqc9uBJ9sg2bojerhPyUWBWJXeqgqNHkwK7BqP5Gv6wQdZPgUMAIVyxhJ9&X-Amz-Signature=8715ee95c6fa62915ea024d3a9adb40b97a249a0cfcdc8057fd6fdb695146302&X-Amz-SignedHeaders=host&x-id=GetObject)

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
