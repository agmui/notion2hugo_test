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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6SQ5FN7%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIHTs%2FR%2F8H4gns9R%2BPuT8Mg8lApLAUozY4Lpw2Rd3s%2FDlAiEAiuTtwSu3wyN4yLdL2mYf0CFaJAUIVlTtGve2YMuv%2FfUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDAGM3RqeMqKrUWjkbCrcA6soGcTT%2B8AlcupY8aR%2BrMnn4Mw3z2YBf8DEyT1mhyCAkgLOAUnUaFjVdf5U1Bdu%2FeVR6OsWYXc0zJu%2B681ZsxToSE8o%2FHYyEi4FTp9cWFPRjHp6rt6proGi%2FMu460tytv%2FDw1DY2kQacbveVkX%2BlgsarPqOqBACei61VZEKqTBvqQ6IFkFIt9sXjFx0qJSNDWdcgXrSs6tC8UMaeIVxwR8q0uyC28f3bEDbPoyr0fOp67j0wUJ7%2FOwQl9tJi%2Bc5isbWmKm2m8k28W%2Fi%2BYVVhlPXsTNN5g%2B8Qh5e390EpnC59DhgUnjR0A8S4rGWsT1tIyd13hIWa18GAslWe4t9djK21ZYLFoj7x8aXncsMlqPvLuZ0jtbXkh19oRiTvR6exGxWH64qQkgs%2FO9eBsMesdSWAg%2F9mCa7EK8EKEMgybo%2B30JeMmOQlrAz%2BJ%2BejTsqrP4L%2Bdmk2k1mFybQEPexDJNdKursXPdT8jTIWW8jAC%2BJApVGrtTq17ueyQtFu5pmZU40tYj%2FKaz5%2BkYYH3oIQZhE8i6c%2FsOPxziiY1M9TSE5E9xD9PRueuPvufpFeKoEYHxLy5wx39o8Dil93BBr%2BHyMFzg3ngwSMs5MVy9bYFNldNi2%2BZVq6x3CcGmmMOe8jsQGOqUBY4F2FpKpYi1G0%2ByF0FWHz17qHa0kkBQX%2FvzTdaqA3D3NsvYehOZeNmaRCB%2FVBxnXlUHjR3qXDsr21idSbJdlg%2BzCSQDMg6MICGS%2F5b0R3RHEV1soAHhxnF98bF03iNiGgkTEjsGIMlLiQvawuRw6c24pIQzX8pP%2BukLjJHarh4SXyCI5gLs7mBekHZ40fT5m2J8N%2FkG4RlfskAi%2FE6E1FTo8QPPO&X-Amz-Signature=8737b96946aa5d3145ee599dd795328554620bf87ca27a5e21f07bdd6252538d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
