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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QONA5EWB%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMpbB8mYGfZ0KfMDzZAjRe5YRLoI8IZ5MReXAocXc3ewIgHpQ0Qc5bBydJyBSm1YWLxTjgq9PNDjIGesfNltT88OIqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELQdXggb7q%2FOHOOXircAwFXr6gh%2BwWEFc6iREYjRKqf7EK4iWgyi93elCYXzHUq7xjNSGqQzrz99dJkVZcqWWXGDP%2BxCxpx67GwBaTKcxXNFnCwaR3Ov2fLDJ1T32e2dAJralzAz8e1tNjKWI2coTQUD4y5dwiqNGrt5%2BtEMaJxzO12GOG80p%2FXAMwN7WXus5H6gPbohDm404aUfwDw2HpKeOxixPkD0BosrnyaQnZOxfN1Zari88nHv1RqjsRdckoofw6ppVu9rZymZNqoaTUGNf7cgSnWkfx83XAmUO0Aph%2F%2BKyWRHBCzjnL0X3Uy%2B8U6pci%2BGbbKnCgxLahO%2BpBcu5qedobeJNtNsGCy8wfSn0SNVdyPZ4q%2FYg5RmSuiuRi5nk3jj4Ou4dj0lJGRgLNLM9zZltlCAxTLL1SkMVWIAtfOugM2mvSnqlFzrZw%2F2u%2FaCvzuqjXmHxkB0BTUXLVPDz2VWajr8bEwamsaC%2B7Wi6O6vIZrVSI9%2BEZtWHhkyA80h2%2BdenQZf4xlnH5AYXdEh7dWIh836lsTZ2KVwybBpFl%2BbeqpbWqImXtroBVY57u%2Fqpi31NdVPpKb336yApUaVpwwsG7z%2B%2FDcRORyeq3x%2B8uaeTyuwt1%2BFrZnW25m7GQYzoOUGxDnvyyJMIyKo70GOqUBUkEjWBj1Plx6w99tdb6JkyKtTrjtHORenn7eLLIuEgUOuevlWTiRuMIVJWo18Ese5uScMKrCrFarYSr%2FRRYkQjAJpJOVrDBle6GWxlNTduS0sMAgF69BJ94a8OX4D%2FlxAosErsO2KoGVs%2BEEHug7S%2Fgi7F4joArFXV09RTo1miJdxPGceGMJ%2Bg9DJRHM%2FjWmUeH0tDeKK6dhTp587p9nI7YVwxqK&X-Amz-Signature=f9ce0c0bd8e0c8aa91ad95e16ce933c4d1b352c34f9c8e5d82875273191afa69&X-Amz-SignedHeaders=host&x-id=GetObject)

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
