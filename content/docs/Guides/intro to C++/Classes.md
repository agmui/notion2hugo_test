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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645V5RRLE%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCvebgvdjM%2BfwCcvDOtjpHQJ0BOz%2Fx8NT7tru2XhM5pCQIhAKSYGVzbteD0Imdf6xDl6UHVaw4W%2FKaeZkU285YAaoguKv8DCCEQABoMNjM3NDIzMTgzODA1IgzDI0xQGUxKY5FRJiIq3AMZ23StGhIRumhmb0V00t%2BgspYdNAqvpgPXcBstd3Z8ZY2JIZ9RcVWB2ON3bpMy36QO%2FZ%2BHOYZn0mhSdI%2BKuNXPoJ1kOUWexC6TmutOltZRv6dpIfBoYm7BO%2Fn%2Fn82C%2Beg51zForYpZTYPGkGZeWpe%2Fo5nsj2P9xBd0cnya%2BtbXHD%2Bidl3tbY%2BD2ZxofmnKuchkJGFlmp6ZESJj1n6KuxA3czsvO%2FPA7UHGnUJfaGjGjjy9wcCZckGhglw8OzjdvnEi%2BvxV3WCgTu%2Ftzd4UHYZvkHOTaRMMasz0WZJyst6EDlmzAFgM5UaMMcr0rNxQkDiqLyQKJnDxy8YMM3Nbi3UEZh7wZcZT6D68qEnCjsvUlmPbfMUTx4sX623Q6vdNJP7Y1f33qjvNvOMmg4lEWrkVBVPUa5tr86M2pdJoWLgWvAyXMkq6A6heekz7D2yY3m5lqOg0hQw5%2F9k5TioyKAzyMPeM5Wv5873KLM%2BHf5Ax3QJlFOi2wHjO0yUTSXeHkIOuFTrtwDgElxBDQJ2ETPvSn6Gv3txKhmexAi%2FDBvtOE0XN18koU9RAVBJ5y%2FXn009lPV8U%2FIW0yHqxpuDJaptNghp7pL6pUmpB7UIJSPVo6j0VzYT%2BfE9zXyt63TCmj%2F7BBjqkAXtl1xleITMmdqzwuwyabJTkJOmTVLKkpQsMBA4RCp3DFaOQMByWxVBhWm11QxMR4AMoH%2B2TunPxLYIeueRCRxdALt4%2BpFaI7pL7k6URgE1LvwRyZzPYGfhMnXoJ5VcH1r4VFg9GczDLBP248FXWkgdeDNuDau78qKQLl3kngg3A7wLoh7Q6RexGp1AHfrf%2B9uG8bwkZIKQoYTJlVRpwGUbmIK%2BL&X-Amz-Signature=102d35b86bcb78985b1c5a41ca8f5c8c44a05c888a0bde16717903bac5189c36&X-Amz-SignedHeaders=host&x-id=GetObject)

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
