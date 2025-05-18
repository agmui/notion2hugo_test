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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624LJUTC7%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZEa6LwaH5PInCmiH5HBP0G2GT17CXjk%2BHXY4r3pjQYAiAYym6P6NaKiGC0ESn9l2pdZfO7ftARJeMfb%2F09JJZI1Cr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMmzW7nXbhjephgR7FKtwDBrpvGX%2F3c%2BeM6frx2pfLZylvmd%2FdxJg85i7G07BaKFW4fro52PG5%2FPCXssk6iMv2i7r844kDwa1ykc0n%2FEX%2B9iHDIeUYVIMr%2FsZ%2BA0rGeZHOMjZap0OE8yHKAsu%2FWAGEpVQBZnvzvv%2B832eOdPv14fsfBD4XgxfZeh7O667gSpoo0bmwG%2B0J%2FsplMgM678Fz6XFy6WUx7lK6IgKlzV65N4ePT7wRQO6Gw%2BZnKGGITJbniUuNHWf0GcByW1Zp%2BAinSlYRVf0ZYvV9qeLBGCeAm8avfzH9F8RbFb%2FgtB3thJ6%2BAgnDUgkZgYDQFhty3iWfiDd46%2FGBsr%2FaR3uAu0lZb4l0Vwu83DvgUnZH9XWOOGQck%2Ftk5qfKFn57zyMMMr7ZceyJqAK9dGRiSw7Q%2BIMagAQOTLHV1yTsco0KyEXDILsp6XeXZzsQ%2FPmoPkpR%2FTr0zGWdz1xj3ZBBSsVAlaTPSjzgb8mSCb1xw7WecXIqTntOCevuannvhZM%2FmQ622hKUthIdbK18ZwkEwEZl0C1nMfThp8jgUR6iF4urI9fi4AG21xvqRMy0Ig7kKtVSnRPvRgKTQJuop89Ev8NqjxeRLsTvHm0IT80xH%2Bf0AnWIq1ESzsWNjm%2BaAqke1L0w8fOkwQY6pgHPFBqc5tNX%2FwFcaTngNjNGhYJPSUpLo4nczLVNWIIuTiRquxAQLMTqBtsjHO%2FdNAwUkPoy2a%2FmlB9VzSsVW4T2%2BzfFGIXPqCX8BDzI4VGDmWWN5M%2Bjk5O6pV6DL9uLsddZED4bbG1YcTMYuYOsdfCrwZ9AdR8un%2FhXXKcyYpk1H1ftXk5qWMFGCH%2Bx3qegnDUQGEK5dyOn2jYI4Kziq8XZlonesJpZ&X-Amz-Signature=e64c46010a508c7e7a53f2376a884dfd48aa2eac65149accc66dfa3ee3ba0d10&X-Amz-SignedHeaders=host&x-id=GetObject)

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
