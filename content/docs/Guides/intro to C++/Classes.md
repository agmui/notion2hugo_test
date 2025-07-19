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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNVEXL3K%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BYnYAeepe5C9yyHs4vMK4xsMOp9qrx9UeG9momKIleAIgbZGSBWwaQW4s5yoXMklawTrmJADphW8w7nsi7N%2FjB0EqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDPJMwvlkQq00IKwCrcA1osH5KP%2ByTNWBYQKMfZRVA%2BDoJ45ue1Boe7bXcefXBYx8wyq%2FVcw85q9BWcHssSMO22fj3EZ59IinWuRtwI6oHo1JmOHW2U3hcRoUQvuZNbuD4WcEfpyc6iva%2BIZKd2c8ehb0x82dPniyTWAGQMCxeaoShAPYBAb5ORE9DdRnSZo7unfN6iBtWz6vClXMn6UjfQPWJz9WshyZO1AEV%2FKDOzAHFRod1ZNTa2zSAd%2FdCvYc4liVyu6X0%2BQwo3E1xglNH2AH%2BTkE%2FazxNQEcCIip0A9TbimKCbj3TCCC0fTYfrMCnFmHXBHhOvqIbJM7V2EjHWMHUvrRIrhLSpghgeGT1IqgcPIz4vEkk%2B%2BAOk0gtj6%2B476H7SgLS90R2TYRqoSgq7OuaLnoa0UEReTo9Edo6KdPRwcEMX2i2tzJMHWGhq1TS0MaZiEYV7HLfy8MnMg5lYRBYzDoc3zqZRxynYKitL8%2B0220Aii28KSpngvw7Rc6xvlviEefjT%2FHvHJPzjTC4Td71Z40%2FiFCZZTrRy6Bz7RcKqaZm%2F7VSf2miMyJXSrFDRI5VcY3MYbmNHln%2BT410X36n4sNqMbGGnHc86bxWaEkixXZgtiT40sv%2BQDQuPVq%2FU1Uss85bjwEesMNLF7MMGOqUBeChXO4VCHJOrySYo20IFeb54bKBdGNpqvy2uT%2FtGqsynZZ0Sr8DhV%2BnaM%2FMzaMqKa2lGjeOLxz3b1gEk46gg%2BjwOn400InBVn8%2B58rweJIqjPlBsOGJd30O26kbps2kWD3TqNGbUT7SH2GzVzCEUvdoKCrLGHhjAirMJIh4ibZBBYstW9TJFlARi9GiEDktm3DMjBs%2Fa6R8WXTqUwR00YQnqwKXg&X-Amz-Signature=f7fd7c184486981a0ed9f9e39e28e8d20465baa44f0bdcf73d21ad91d019d78e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
