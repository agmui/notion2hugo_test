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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RODFBJSZ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmLqLq5byfElk1jUiq4ypM2FwS0lLmSA8tpvB4JW3WxwIgfgCxQqEAeHiKcMEMcO7RjmjriM6mSNtuxnAWhWuXcDUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO6%2F1BL%2BLZ1GScP7kyrcAyB%2B4OejnZFY359nRcTGgRqfCEZDLQesvcjiPz8Wh6AGUFnFbtle9CKOkU%2BpTGHeKePsNuTsfN%2FdE3yNWPzln2W%2FkrH0DIsTfk6U%2F88MSiddcZdq8RtiX0YJOIYVF6%2BQcX%2FUf%2F6UR0AzKj%2Bh4%2B67WnhKAsJyLNy7MpwFYaqaorpJs3lP%2FvHA5A3D%2BvfpGIankwruihpQMIOB4DGN3NZhJVEPWd2ZSt%2F7rnvyT1YdJDbII6Fh7Jm6h0HSOSAhF%2B2JUE5KlzgKjQndtNe%2BSQoXM%2BwBcLN594bBfAoKEHlo%2FwOw8Vy03tioJjx6DTnLhCpuEcfOi8NwrU%2FBLl12yzQg7BytS7pZ5YsKRjmV089w6Vb%2F%2BM7YCf5bUzEhI0yieU9uTFRuJOBwPHkjGJ38%2BE%2FoWLxsA5RI5Ny2WKBGcJDeLfIXJCeRep1x9CM3yi6r48aBpmpKiwloPbcKZcnmgp%2BViPUL4Tn7NnEGkn%2BNxSkN2tG9pKHqpUVM4eInoO%2FrJv3BG%2BtTtOpomNqIxJYKGBiIplPWUXBMAi8H%2FD%2Bmv6v1oXWHOZkf%2FIJhpadQMa6vYNEJCSs6a%2FjMVgHJ7pq%2BM91krgkp%2BZvyCP00LP%2FP9Q4Vy483bZYsqANjjVrZ6AkXMIO47sMGOqUBX4mhhyxe3Y7PB4sKFR%2BZuYD0ZsEBUFfzauepz71MPgiHa5oXc4k45kGM%2F%2BkZF1HaT%2Fq%2F2iMdmuI31h8UARSpF4BnLeaiFpGE9r43VyezbRlmCxg1fu8v8ykDTP%2BNghs0lYXP%2FJ5FqflprRXxSMVm3hc%2FIBQ6kqTFcdPRTzh7WPkDYFAjLtXYDV%2F8lQCYIi%2Bf1hAOqlagFGJz8iTqkC0AD4XnxTSv&X-Amz-Signature=28e2f4cf3e08010cf2a0e7c382898c30485692f17199f11646a3f9a404af988b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
