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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T24IYJ2G%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDu1ffyoZRdhSc8H2Sxdkbzjr0o13ugNPLaQ9cGDWINPAiB%2B1ZuFqNdxMtBAscIWlAg45caeZ2wZLAuUbBaRzwXtsiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfG4DssBS2E2l7TQKtwDw25fLOkvRWd6yewI0UYs2yK60yy%2Fbfby%2B4Kgn2vw11W3pMH9xzEXi7Q6Qgx3KPTmqEianiFARbaD%2BfnY5RIcxLrgLNjZNGKWLF30kIktVq2TiwxKPisu49KpZRb2F8g4AsIsqz0Ns0U6QvhK6ap2JwQ1GwWxsu3USeXs%2BnYJ8fBHBCyO3rPesas7LWFA%2Frq1bzJibwqFNujIhTYcLCSOKQwygqIt9tY0f1WQrOJuoVWMsXrOoxv11J5YedX2QB7sLcq0RA0tLflc4XiWdQj3V9XMJMUgI0MRz%2B4wAVyARYShhYCeQeAvlMcUbOx4r594tb%2B9nuqL%2FCjqwoBxGIP0RiPxdFcVxoEGNF51BdoV9%2BAwfhwrd6YdUKH6HHMWnpiVMQKcn4QP89ttacebPoRepkQfVzv5a%2FmdBOPjxPYhjqqa8fv3wINjSX5zuzp4AVT4emiNua3W5YJU1kF5wQkCSx7t1Lmr7mvwrN9PKBgrwtDAvlvq25rc59kWSbB%2BENCAFuHZK9KVv%2BAfkDvUN4rMVOJJ4NZwQUP%2B0EUQ7YoZsQLdJfbdRD2hWw7%2B7%2B4WME%2BFcSw6PV2fp5Lfku%2BNWMeTqIq1TzLYHKQEm0UVPMZekSzw5QzO2S5XZ7af8IIw%2FYWOwwY6pgGGSvgeR4c9sQQV7N%2BxPYriY7%2FZ7SwtSpVJyVM3Vf0pYFdiJKzi9GwBEmH6A6llNL5jcYDF%2FSOv0oHlzfuSqzADtMnuPi7z981g0jzI%2FrZ%2FMYAh6XX5PUE9MWMW1JAeKKwEdgKTVDFgUl18HPCW7QAumrkoaCuMMmgwbfJfh%2B83HPgHIg886XxFkAQ3xerEv5zhDpE4p%2BTBREdTQpADHJgijPp%2FGP1S&X-Amz-Signature=74a392a64504e4997e1af2c03648a3a0058fa6794abbb992c9397851385526cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
