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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6EN56J%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5nNVEfZHWh4YreY037pIBWkGXzRjpKqWJF10MIrVLmAiEAtWF1Cl%2BQacxOP6ZUhBXEirMInmZReQXRt4wX%2FPzQs%2BIqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcsnIlAt7wirLLhDCrcA6D7gUzlJ4CIplYJplea0fFWd2zcWGcrE8GUnZ1Ez9RFU9l3qgvOjWWzTtnu1P1sJOTWi5s8hbFCrZO8qN8N%2BuZLetkG6HR4xj%2BNE1S1dD8BtgMZX%2FXQanuO7aD7WgkGnJkgki7fTmwOySxTUm%2F1GRJnhFoUzPDfwI2Kpl4ulu2nQEOvJWcwGAyIW7%2BCV6MGcqsQKXBxb%2Fn025Vm%2Bdd9Mu1wwfILsNCNVWjeTI4U9eBAWLH%2F%2FUjq2MA%2FR4WQBH6OOlh4UUhcMAesWKhlBmtc3NXRE2ycUr9NurlyIyyl8kTDJ3PQlW6cpPN82Lo5MQU8Q4T6NGS0JHgMiEY5PTHHNDlQ3CLU89UP4N9J8VE7XLSsbjowwQE0yEC%2F2zkrfWznPHUCTfXYg9%2FWj4E8gV1iFnQ584pn%2B3lODfgoZtxDZXx%2F%2Fnouw9Q8WCygiSuWBVHV0s8Iqf2JPs%2Bgps9J%2FC5NivhGr1ZIvbc8WvP2tvRPKucyc9QtnLaMHa21IYFlp2tAKvbpIFI8B3OLqzeQpeogfKKpLO%2Bi0CJRpb2O6fV35SB5KSnr06ZAAEz8c3dgyh9XdBtbx9OuF1hZGy%2BjU0v4yP9l01%2BX9S%2Bu7spvCtrGDbPzrH9KbfbvZcLbOteDMJCXub8GOqUBmzZI%2BsAqC%2FDq74%2FWY1EpN4t%2BTv5gp2TEOuEi6ZoVeFU45OoNp2uP%2BuPFd6UFPeuo3kTCxzPpwkEtITdqn545U4Vpn17EMLWLfw2H4z8Eq%2Fj7YavnH5JEoq3MEVN1epgV6c5HlnFKXB16bE2BxQVlg700dam9D3ftQajJRqQ3mSR3HSkyD2qMPL5dgswVNGeYqlq7Yhvvh0bm4VjSQHG0ALryj%2Fp%2F&X-Amz-Signature=1f47ac78e473922277736cf8c66a8ab4ed65a6655fea808722655f56374aafe3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
