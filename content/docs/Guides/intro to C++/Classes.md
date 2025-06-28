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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRLUHIHM%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T210711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0tBnHOuX9FtlcppR%2FgpYWynvZ7Tep2v%2FTKHCywnR33AiAgK1RR4R51ooL88e2VIGpG4PJrHefKI9Ildn57W6cI2yqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZpI0w4akCSfueSS6KtwDI8XgPER8evWcl6hL2xf%2FWASqhDCSGsuauu4uUlWoPsbgTpB2GyDm0sSOeWi6Xi1bU%2BAkD04tdvJHwq48NAXx3iseazB7TOl%2FnPyLYipr0lcSAef9%2BzhibmR%2FkIeD4QmQ0404pjgfJqdBtDzR9Toqs6dvK9SGoa1S%2FLxdY7e%2BPyli4A5%2B7I1AwE5NSQ1OnluWWoLPgH3tT37t%2F0aAdHU0LchKnOEbd7fums5KI4Rvl0QsvCsHm7ZAALKdoY7wlGmeaJ3T3N139DmHl7zahdTY9CtytucTwOZ5RCdvs0V6rewIgkSkJGgEhddjpsNOsA5Yo%2B8kd%2Bpnq5ntMzYDF4onX3%2B7EJXQa%2FPCzXDB%2FfVt1z4duqzaCc7F9LnZ1yaJaaq8nDW4QDg%2FYakAfKVPKdrSZIGEBcQSDhWUGn5%2FuXf5iah2YWPvBEarStcMmREGfyLgkXKT9f6Pk2mt7HhsyYNZ%2BSqNFnimVExYtHh3WQWDjZ41s0wKsR1pjqetRUK3L5nx35nNU%2B7votQkvif%2FNcQM3gG2%2FH1gbiKRoE%2FG2xsmGcZ16aa488p6EegPm8xHJlwVUFrvtQawS4IzvYCRHQq8GlJm1EYMPzUcWyjxTusxeWjd60Qzd5lk75nbS3kw0%2FSAwwY6pgEnqjZaL%2FIA2Iz3X5sc6XnSgn%2Fx9aL86En0fDzftjMJMcg9mB3lnRAmKfHqD4YHuB%2Ba8JvFsCCgxyR2cGFQdlfvU1%2BCGatYUwzXlF2iz5v25aT1smy%2B0foMyK9ViTPkoJPWS3NgGpwSlSX2vUXkB9bxN22jv3hc88cWQzlEeWt000uMUMaroEXcW1N1ioLYeh%2BSvwbvP0wY3FameVCjJQ4VwzAhc3CS&X-Amz-Signature=f80496d3587bc9355c07581cd53881da046a75cecce0d1de49350148c6510046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
