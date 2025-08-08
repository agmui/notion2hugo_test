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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR7OKFBN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIB7c2t1rA7y8j5YGoTfAaufJCap3oNnZJ3JNhzIvFYBeAiEApc7aPE5HwyWHidnfrlOD%2Frj%2FD8cBuK20AOezbdypMzsqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5T%2FI%2BHH59qSLw6lCrcA43HwowpkkAqFlscfJs3klvyw3A%2B%2FIE4dGOb6%2BerRwSZ910Tg%2BeMvmEkMIyme7aIQFRBbkE9ePm4rgEdfJh0bzKA3v0WoLB9ZIIiGf1ZSGWN2Pu0P2c3YjtOjzeIwIk1N2d%2FAG5a9I06hGOTmMJl%2BMYwqGgjhUQrTK%2B0s6GszwMhxrQySIadXUouXlFJeh4O19f%2B1S8zBNBHF8gXF5I4iiJGTflGxhCHzwKFTgcbBDZH8G7uM38TgLYU8eowPkkP%2Frj%2FgcV4tKMADdrLVBMQAnA6o%2BFZngJ5%2BBVXvFAsfxLqOwgMdtuOBWmNlxIbMDDHwvCB%2B%2BcRQQ5R4QAJmLefSe3lMJJMzgOzHryH6hm1bZePKi4viFRxvk6VXQA9okLsSTOCQ%2BH7ssAOKYDzh7W624daO3XrZaDPsb8mc9edlSbF%2FRq%2BektNBPZ6%2B%2F5hdx9tow64DKUIb5aAFB8L48tC7L0wif%2FMDaNiDnBpszai1ZGoaGoqVmxty5RW7AA3tQTS3vl0e1tZJZLl0s%2FqU7HgmtQJoYvjnzQBcdfMVfpFR8mJfdNdEYXnNe8BLuTEwLmmnIBUXJtIzXa4CIrDoUHJc6dKpjSZc%2F1%2FtwZMld95yKI0Xva4bsF%2B2iKY60apMIC418QGOqUBHPD1KImZRi2Jk%2BncJZYUc%2BqmW0q06a9aqFspM0SeA0vP%2BVROlNlyWkAYsk6g%2BA%2FTxJ3LG3gn6hAzeQcYl4vY9DZdEI%2F3r3NKdADZxajACn7GdkL%2Fh0iI%2FfNZVrIEBcbbIASkIPDa9OuBCaxaTTJpFZX6JE1v%2BzNcV5kcmF%2F13rSWrjKl9AVbjG0bf9m4ryNGyDnTyuVXaM4m0zdCszOYJCUOtCm6&X-Amz-Signature=84e41592ea818732c6733eed608940c2c8f6dcefb4b719d7d40f5e74adef1d69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
