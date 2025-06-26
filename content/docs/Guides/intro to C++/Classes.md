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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6Z5SOIT%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIDOV4Egcn9dIrpgmz%2Bfv9xHJR3C%2Fdronn6iJy%2BgqlJmhAiEAslGFI1mR9RilsWLrzGJQ4YShAeArnyowlaIkxxs%2BrP0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKdQOc9Cj9NqHnbK4ircA3GJA8L4txkTaKWUYZvFZUtPrLHo7D26fmc%2FaSZ%2Fjwn23U3vRDALAT6J2QVdvbbZnuOd9T8YplxXFFA8SaMwcTOxWdWSog0W5FfxrUdlLsa38w6J78MSbTwSP4aEtCxNNh%2BORXTh8y7knPM9YtkLV86T3yHjrVb9OODUOsr5JE5tCMXw3o1%2BE%2FfIhQFn6AI2GFHgbOmneQNlK%2FjdfAL4Ea%2B8fcaj21PmWDPLdBxbVm1Dq3gXSSy%2FFgLeOv2Mdja7fIuZxKf5d6ptH9B%2BCvqaN13k5TNFGWm5r5IBHBsNMANOf%2B0HIgWfe%2BblBowROwJPBfpXRy4Fk2JSdCx%2FpaY0DuOKFsU3v3Rzz0i89brINmbaQuTYPBaE9cREEiuZ07u2fc%2B%2FDoUcpLcVjMAaQ4H6JYRvT0gPPsh7hDzgkHjwVCB%2BH16gHuv3E98TDwphB7YhYH1el70YnJmWIIugdzkIF2xezDPZN0e4TCouPnMbYhuoedNKy6QknkQ8RgpZJYZF4IoOPrTFFai3Eh6n1PYTjxe6cKbjis0LjyjwBZRHT%2FYFMS8H7MvAcy%2BRDnMkfYMZCH8Djt2P%2B3fVz0OQafKj8kVVmNj%2ByxP%2BEPIVWf45%2FsQH%2FBzxmuXQlKOX2MsjMMjy9MIGOqUBcuFH155SClWYoLslT97XyBZoTzks47huWZgn3NB7Y9euhZmyg017%2BKyhWANLr%2BUs6pAg%2BHbLpdn9nGpHwrUxjptt5LPpckhv6M25Ji4HuSYsVG6FbFM05ERM%2B0ZkOy6pS88PHQSkqeOZjhtate%2F0zGLJypVapPXEEDDbyo2aa8llMJ5U%2BGYgd76xpr7t%2FzMY5ppN4G0fg%2BjkkeCq8NKsB6l23%2Bye&X-Amz-Signature=f57eff304e25859fb4c2be3dcb0d04f441bea075e2d5d0ae538eb83e2480f457&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
