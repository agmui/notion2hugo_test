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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQLU2FV7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCGFrXoMEtTz6B4qoKDH7jSwb3noc29oMDmE0a1QFGgjAIgL9tmG5Fb2YyVlPUPh9UK%2B0QkfMO%2FSqwaPtAqaMIqGuEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWin%2FvKzSL1ci9%2BlyrcA8wBK8j5spl1%2B%2BqNUNg0AXAENboIOubkb6lS0n4H3%2BLhLEQPzlvFRmalsdW8fWXTbSa2aa39K3uPNSb9fmtBCNq%2BOtpA1YRgKhnY%2Bp%2FQw%2Beo6qe1GdF6Eb6ndEHv2fFJ2Fcblduw5%2BBEQUdJ84gFLv6jxY5bS7PNxE7nCDvNvB9f5%2F3dxWonGWDnGNtpqTmJJcm9cY5iJlzW2qvl59Ic7z6ZHOwcG0aoQ%2BoEAxpUuUKY872jlHwOTAVG8b0Mcm9DyxuV2DLRAQK0xZrmy37e2LLQpGv7bK0O8cU%2Bl4RX2vPbJNWYeMkOJoUf7Q%2BJAoJ324MCT8OlJJ92Hyu9%2F1wmd1MkGwMk7Wxk4liJ7lhDGIve94rJGClirkreV8LqgegTspYuycSI1CHP11fsH0L788bs8hvpE9APouX4fx2vje6mH%2B%2FM42cEQv1LYE44XxHRhzypFpbZIaZNeQnrVe18waV%2Fw%2FGYNxKvVPZHyvHQE5k7oof6RPUMSV%2BWv7WergR15c%2Bj1svnaJYXPymwFgBudn1uBraVrRKD0lgMI8keyaj5NcGLzrxms5SejA3lHPWlFFPihKv4Vgfg66C8sqVU2ZLT3oRtYtFkHSCYNzDxjf20jh%2FL1a5y6nrHCV0GMJqLn8QGOqUBZM1LY8U4jnhdZGbdxfMxrOvk00aJ%2Fd2vRbvCIxA2U257ybqwWX0BwdJE3Eduih0MjFaWPK1fzrz6XbrpWn7p4ExtmJRrEIdsXnD0bpsZhtxZhF6tKqvnWpyxI7hkp0dL5I4AiKhS8vr5ZNrmBO23M95ruHqMTsRj7tFp%2FV26uE9kDuFMcACVY7wCQpcfs%2BuhzzC2UJ2jfi%2BiaFTuiNLNezcyEoMz&X-Amz-Signature=51134de0fa35e6693af1268e122b31721fc6abdf80b5729f43b97e568076b9b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
