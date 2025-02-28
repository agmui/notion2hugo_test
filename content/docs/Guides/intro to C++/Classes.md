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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622XN5OSO%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIDNeOM5GSyY1CyU3dAhLdnBPWpQav6JKu%2FYyN0iCKoSKAiBddUmIa0c1NkMXWVHUv3NpKhvFJIn6SpSOkkwojLvOEiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM57qbMn6qed6DtI7GKtwDC%2FD7nPeamm%2FxWiC1kSyt2owDrQQAI6FZbhn7JyTSVhCKHvI3dKppEHNcdrOIzIq1DJmx67J6ahGXelxqz24CZ%2BWq%2Fd8ubOoE%2B1X1lKHo4RiP%2BvKoYz9zEhB0sfv3PMYgT0Hg0cGa1YJKZLm4rLJNqsU2KRcePkrtVj5BZDkPUGrz0r5PIxSZv%2BWmUud9ih%2BJaOkQK1F3LFbnx3pb1%2BcXfDT1a1onxFpeg33Z8t9tKHNxYEnrzLNIMM7ZJCPRH2iHLXt1qxJYgCT%2BsL0NP0tPAu1ZQodzD89n8No%2FeUKwCX8GD1HrKdR8lvIJ0voeVJZm%2Fn631XgAs5rl7uwjvVJm8vm4bqXaTM0hIn1aGgW1Od8%2Fbbx%2F4D40x7vlQ3Pm4OYmyOFVXFE5LEwmuNuqoE35s%2BN964y%2F1oDf6cDUb88M13LSO9hdwWASpBIHEBvmuD7aOEGZ3P0nA1IzgM6XscUYJNtM3do4zMvN4hk15%2B18QEyxax1DCaITLaT27h74rDWJnU74buhzAdkUNL%2BDGSxeyOMhLunCsB0puapgPaNy2p7oDPUyjopf1CjyBNR9vm3IqIXoXvmNjMwEQF%2BT2VA2gdhQ1rvnyZ58HTCB%2BG1DtvChm3tr7ycYNMCRqvowpvOEvgY6pgHFozwwLrhpesgeLdYAFzZ0xA4s9hCvnK9z1%2BIBFrqBtpC49cKab%2BQuVQ3k060Ftgzol91jwii8RobbdhfeY37WtTbrlzNIxa4hPuGnjoZMJpqmMO0kUjNoDlvS1aFtCOGLRKzE1ATgkCp8Kf8qXqmZjx7RM3A6TxbxpYn%2FqSlHxhRmY4jrYiuVen2gkg%2B77Hr3DfTC7rkSYYkaR3gclg3z92kwmJK0&X-Amz-Signature=cc1a60e9f216b6bcae79d956975e6d28b83a96fbabe1b7a27aa0cffb08e00038&X-Amz-SignedHeaders=host&x-id=GetObject)

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
