---
sys:
  pageId: "2329c1cd-96c8-4fd3-a4f3-9920d69d1c8a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-11-08T18:33:00.000Z"
  propFilepath: "null/Guides/intro to C++/Classes.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FPNTNXL%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T020802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDk6kXgttFdIuvE9F2KUM7LjuPyvLgdKicObR5Hgm0jFwIhANXSJGs9pFrcL%2BOaeChm7DUZ%2F722cb1TEIS%2F80JOpGPiKv8DCDkQABoMNjM3NDIzMTgzODA1Igyh0Kce%2BE7NTYU%2F0iAq3ANGviCpsKCmdQt776TBognTUxUf3T5J6vbM9cFPquV%2BS7wdls7Mtn1g22qwiH1T3Y%2BdE7rf0o0%2FwbIWxszBAPnSMenGi14%2BzVS%2FuO7k9k0eLNPBLFc87YtEapid%2FWBnFGLI9v6QjHX%2BUiRS61lmr3hXSELdXXWikt5CQb6Jav%2BLc3OJVkqMUo%2B4tMihnghhwRzcf3bN36bgPNohb5nIxp%2FpeU57hzTZrXvhPlGqI%2BlttnX2FHEZvitrVDuNm%2FB%2FMCkDd9GHu%2FcswX0wxCqqZhfERfZBhA5BaOGBMpCxGAOSzLUB1QJncsNj8vPh%2BbNpkHYC9uDLX%2BPdt6aymY5VeqjztJaiRo3yy279D7z2FtYsWOeplADOuglwLxoDCjYz0WSo%2BhZ4Yo983zeAvVkjMpH5DYapA2AEevMdR2JZe%2BnCmKo13Xcf73ACsFIBazEQg3gQu1otEgMwQjlkS69Ld28gLDsWxOYCz46SKuKBvKfarzQp92bTHkhUiPWEbpbMKD1pSJAiOABHKjGOuPH21FHfpRUHcp92N49fJk5fMJcH%2BSespyEwk2dOWftlSoMgRrVAqbtRLTG5v22etGWSgUiXOLFFntWufU9yXuen9NAmgeySN1Hr3tMxWMtlHjDAz4q9BjqkAdhyLzA2%2BrpNroY2MwA3f%2BHTckvlh8eXhA6eOAKUEXFeEToxfum5cc1%2FOZgI47k1LunQE4xQ3AWIsflWPknO9k0WQqwiTwlk0mCHu8wBsZOYJdcOLYGfLB1b55K20IpMAtso4enSkGzwqqH4%2BmqmVsTqM6kj3sx1bASA3LfTY516u15%2BetHOD2kAiLDTASUi%2BQ9A8cVxu4yu%2FehL8y7ukunWRuri&X-Amz-Signature=5edae94ebf40e5f25391fbaeeb00c0be19492ebf83e15810dc103422c60bb13a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
