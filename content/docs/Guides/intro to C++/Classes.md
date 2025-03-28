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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVVF42LA%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2FPPc5hFUOW3cLKEkpPjZfHgo405aW4dVtux7SB7qkAIgZnfQWWKUe4bSZfW479BEIPXxAzLx%2BFe2BvQGVbQ2n3wq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPKlAMkfFIV01ssovCrcA9030Z8l41KxhC6SyqoJiWdD7vFgjfFrF2GYk5RhZGLO%2Fw4y%2Fa96WjyzI7MuWMfeSVTf1b4v0ETVJrolYnMkiChrxCA0WuPJhwRcFGM5leKH%2F%2BUO2Ugm9gzwN4NOVZMYKc5q4z%2F0hY44K4ouxrQ35SrFyrUWxtyfKjmc46jkKhcm77djc4t2L4A8YLAq1dFsBrmVyayy1eB7u0X62yFunI%2BajUlopt%2FlRo3d3jcX6Fb5s6KfOrYBuboId6HefCEyLUQHO0GSii4S66IUWhLL%2BbYI1vDlZG3J3umjlSmlRkJ7gf6PtkKkofeN0ZO0iptzvemyQx5qNlNmaKT1vlnkqeBHpWkYDmm7zrcDtdTYv0P5RIzFkw%2F08DaIwM2qdctdmULQygGtOXRvfrw52JljtklR3ma%2Fq1Ik5Rfy3lPNDwbGLlnSngfTT%2FQXvKwoSiFAwqL4YrnFDTr8IOcEbHuXFm0yuTdwWHXu098TwmXKlJ%2Bq0b00ddfP5mbQNHJmp8wVG78HETrMLPGiBK%2Ff8IeMHnvx%2BQna3JWlTrlmdr2mxb7X7TU2W7%2BeHa9KwUqal58G%2FvgLo95LoIDUiCd5WPeEWSD%2FQZh%2Bxig5BcGE0BLlryL5cfKbedjGF3%2FQZ32sMK6OnL8GOqUBu7RkvN6tkttwoou1UNGIWKdzYpTdPMSJOaUWuBT5cUG1tNpKmda4gTo7%2F%2FaBcy%2BcGwny%2BA1jlsIof6MxWPssglkRyaIQk2TSO9Bf2kfm58ne034MI5tl0Z20SGPkfczq9oem77MSbxvW2xCe5NtKZJKpmoi8mV51RZR4XDWfrFmoBaDIf2MR2w3nWkBr4yaTx8beUeG6GZOjpLOSBpiglGpVx2SW&X-Amz-Signature=9a4973e3c09e6ae210d1eba9395cc7d121a3acfde9c1b81dcbd119a576b3e5e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
