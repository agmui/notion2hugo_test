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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2AYX3YT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIEbukxYcGTRCaF1vVZHtLABhljqFZF4DAVuEc06kwxh0AiA%2FGCAdx%2B6T20ZhVW%2Fna%2BepmwT6m70bu17PA9GJYovyjCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMIdB84xtnqma%2BdQKzKtwDOms5koCj9%2FXkheNl4gLu%2FvYRJnncNj0G9tClye4dJuE6P4SMHVBrS7OrezczCmMTDnBAtoVa0AnXl3bYyYrDce97Z43pbYaKYYqQHUxqSsr0sIdpQFV9imMbN77m3vDi5mWPgZ35DYvPXBsHCBBG2UOxovYIDZXosqsIlvBR9cWBYdI1AdVH0E2KfFBVtaBk2MWdCRIwb4lZqt4JZ5kqa97GiWTz%2FXKKjZ0YaoWRohZ8%2BgRniReAIb3VVg2olizvKlqebma32kMSVJA0pjpfJnjTDluZdXoaY8r1uB%2B6LgZofrKY6awAKwEysYX9qxybquDso2WMCLow5LNSHJuGxzyMti3oVWBTcw2Z4bNz8IxrClxII17Xhu3KFcGhqSgm53dTz6OcF%2FCGB2M0%2BZKJKSluCtU2YyAi%2F5pA%2BBglGlRj%2FPGgOoqIE%2BSiB4P%2Fw4wbOSv5oXTIQ3TU5rQxM6G4xYVD6Q4zUXhEwBq27%2FINOQ%2B9dqWowFFH0F9MIMCnX6U8Qrpe2n0j5x%2FG6Zy1PwAa7fvjGBWnDqpHMQFJ5l%2Fb8sII478h6puiee3KBbDDX6Xw8U6RhG82GPj51woCJr3%2F3tIOKKM3q1qyYNJTBM5ow%2FcpNSJnQ9a1lsNYv60wnuiMxAY6pgG6cKchfjz5paaLtbykAddn7T%2FfcZOAPdYjhdnp%2BelFuyD1CHSOuM%2B0pdSObK4R13QppcN3itNkp924VaTb02RSbGVtoAKNEIHS%2F0DvcfJQAWT4F45xSlnrTFodwWKDQbVy%2ByMLnJ2z0TJmwBW1jWv%2FhYyvr0BM3mgIOs8mlgKs65vXB3%2BO8vYCqDDMV6Sbz%2BITUAOMlWZGccIHF6dM3FpuCvARhkAg&X-Amz-Signature=eef9ebe3e7262a98a44e45809b1e6ba7cce472faba8022ad5a13cf590372aaf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
