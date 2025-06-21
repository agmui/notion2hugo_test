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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQWMHBAW%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWwwiIRpD38VgSWQQoggqkkNizMEwQb3WED6DEUv%2Fe2AiEAhwrGbByM0Q9CghAer3Q4xXqUctbV%2FcWw2SukOUTvxu4qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGNiPxXPYphHAoEUircAyknxpGuqmNstQ1AKDkpsGIxsP%2BqG5uBeI9WZDgAV6gSkvBHcqb1bbRlk%2F1A6U3NHU86BiH%2FgmLzVDIa4zqQqFw25FyRuIg17dBAMKXf18ufm43UswvNhgmY0nvUt9snIOfE8L4evWG%2BtWQsbCsgjpeyfT%2FCDuuPjacenjJRp1IRytFuzAqXRFiSQ2icHzVdviFB%2FXXUMn%2FjDfvQif65gW3FAEMr%2BqtGYYe8Dl2PfLDbAkkuNbw70UV6DWckIS6WZ%2Fo9r%2BImJx3dQPStsk4mP%2B27zgoFl9Ia%2Fb4nt52VcxbKWAg7jhp6COYN0XVlP7a7oQmXLNlOvYuOPNloSDPgTOCck2nw0LArByLeGOoHw3S0%2FinBg0zjut4zFOitVAl22apcp6I%2BInW0fawu4CKA1bFl%2BUNdeXSu60z494vWahtZaq0m8iLkuYzNTjDpzkFs5WZZ6Zc2twQsnpwrgZLR16s%2FIbGizJ%2B3HPqOScrk3paws6FsAs2NT97Fvd5SR2IBdcyl%2BBK%2F%2B081sRV7lgfjsr9AvPcJEDpcTV%2BkicfudAHpVUFAkb7%2BVIVzm204ib7vZ0HVhYjBu49IeZXEyF7aJGHYC7%2FNrdqg%2FPC12ns0sQcvYeUfEDMfQRwIhKMlMIGw2MIGOqUBapfaE4QvWeBd6Fy%2BOHpwq4qveVZLINSJeLM8Mky%2F8FOqlDrDzrpZECWFx0XrG96g4UhwvlXh1gILe1cPKJXWfHFJb2f4vPu2tCWhClq6FwBax041jT6echjx7QYjDl0vF8cb%2F5sQQIwt%2FN68SMLC%2BUK5NEifJL0%2BV4VXktagHEYPbJMD4A%2F2QcY5dLVde4K5oN2O4XMbCT%2F8PWfrsJMmB5%2BixC6p&X-Amz-Signature=e8fe8cc17fa150648988eefb47b0e3ccedd623efc19c5f244a6a1d27392fbfd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
