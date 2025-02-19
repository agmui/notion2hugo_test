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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2ZGDRD7%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCjzN3hwmhTQ%2F4MYTLMlUuX7IeZg%2BRnl%2FF4dBT%2BMVn3LQIgUf8ggn%2BEQNgONkZZHyLyMw114SPm0DbdqTjmVPm3rXIqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4TtKs9FXVZYBhzHCrcA64eOVkk%2FNPr37UweerHNAnhZ09rLaQHPfx%2FeD7usOBvW2uWJtup9GLIieQzjwr9kcWfGFlClVpHoz7QkVK3kamuoNxjf9CWcrdJPzKcTBQXsmhkakSNH3UpxWrFBiGBBEFp31Uq8PVVwRGozkXjqZOSjQ816pODvFtfAYGcH5Wy%2FO%2FPeGqTWaPPXxjHhyW9fNaP7jlljv4QvYNk9kSnHvIXv43j7qWRn%2BRWl7BdUGtL5a7Ie6Kir5fOZMahIHuhP9w6gAqCLZG2PFiV6qAZZRwOjRCKzDpTNbBiFMB%2Bwn1c2z%2FZT3eusAykmko5664oU%2BjEY1ch0IirFWii4D9yi8Vh4AcnVPWcMpWDDt0j7KRH14c5qs89EZDPNeSsx8ughUdf5PzSz%2FGgugPzDId951SK7L3KqQu0Kva0jBGZA61MZzggbBseKdmEGU3rT0QMieYmI5ceyDB%2FQ%2FnHfmp3yObYoT%2BwNc5b3dASg7UUhekZNZHijA20ckvaH3FXWtCtPmlcbblVdq%2FGjjJjkmhei1DIN5jCW2AEoNtOpg5XSCYkPwpTttclSo90uuRGEmmAoSHEiK0dPK7D7DjVkWhtp%2FJgnPv6SUnTMbwPyO7T%2FQsziGTgku%2FqOvgexpmrMMvp1L0GOqUBLsXFglpDNL%2FSKu7OiU6gc7Tm1%2FZnFhKbD2mYGST0%2FCu3sgJpLYdkehpFJgEhDltWp5sE%2BYpP%2FE1GIaLcfZqkJ1tcoUbWLEeS8WKqwq3nUqWkxPq%2BH61%2FrPLCfKp93NE8KByMhJJT%2Bs5WWueWhpScGXu%2FdY%2F73V0O0dq5HySGlfJpBgkpp2bc43HnxOlbL%2Fz2pOkQh3EP3QD%2FtZv7DSuTd8EUfBPA&X-Amz-Signature=06657c1c6cfe0b1c43d5c25fb1b45439d648940885ffca129821e360ccfbd422&X-Amz-SignedHeaders=host&x-id=GetObject)

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
