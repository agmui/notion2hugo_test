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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVOUW4T3%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3H5S41bBeD7IdtlJwgwogKP%2FPea9Njl3AhbKx4m%2F8RgIhAN4jz7dMmBZ5f5KlyHxnZJbI4yaZ2c3ABRkMOnJQ%2FxXVKv8DCDEQABoMNjM3NDIzMTgzODA1IgxPSieF228BLCSCnQ0q3APIZGOpJIPldB8%2BH5QuNmoFYg9dMroB4GOCSdGMPA1tUSvgYX9XO646T1LnTwz9Ts8eJPNATdDsfYemdHDh8JNcDB23qIX7z5YUhV0q6ph8fm1Gz0n7vhVAEmyOeOKgEhHHhRT5FJ2az68vtFf9s%2BpNzF9biKpW26CF4%2BxaXv%2FfTZfKv%2BrCdqOdIkk84Yy3XU7QMTCcB%2Fo5CaIIVTYYigml5nw%2BXPrLkTzYlwOiUPYfQDoq4n9GjozLShIXfHzm51QUDIDpTJEVZuQVgFJhXmMc4ftx9EypwT%2BKTpnYXZ8EliJv8ak1VUl%2FxTadc%2Bx3vgoIZjuE68d7EIql6bWoW0fmGpt5%2BOfhfokPDm%2Ft%2BCWk9qADojNOkY4qVEViS6gZqcME%2BP1iwVTBx8nXV2y6ss5iPA56o4SxCCW8rVfd4%2BUSfj4B6nLp1EziRiWbHxsA10tNwOI6ahBr7ILRsoxNXBhs1%2Ft%2BJcREk5MI76nwexPDAAH0KxonT6tWX%2BCAZDX7VY%2FHiDwQJD6Dh0Y7mL78rseBKgTS3ofCVhuDFZWR3MuPPGWXZFcsj0y36I3%2FjPzZq01r2v1IvOxZaqkCUyw%2FrzOP4LMOVrmgwJ2heQ5CRYtK86Amg9w%2BnGqhK0XNTjCRuZC%2FBjqkAalzJJEC1RGF6QuicLjoy8uqwj%2F2tyaIQNLehAfwktqCJXH844oWsGv8yIzWKsMY%2F1fSvFHN5wz%2BGHVdBXf6zsOWODIZMBml59alGZfkde1IXhhQtJavJ9DcQFzyNepr%2F90hjlf4UI%2BOq65zcvbh458qHBZwK317hBP8EIGIlHUJJEWgU9PI0gCI2pamgBiQDIzrhtEgOOc%2B7ee%2FTVFAz%2FLuj7W5&X-Amz-Signature=d4cca790c093c7027dc4c2037576194bfb5a3eaa5635b2b5912078b9d978b888&X-Amz-SignedHeaders=host&x-id=GetObject)

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
