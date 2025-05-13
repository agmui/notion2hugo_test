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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY3PFQNP%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGq3%2B98cjV6EkTKoVw77oUHUuXLcU76yPxb1BbGYpg%2FXAiBZMSwFLtgLZ87wVNokZz1pNogByucyxY%2BH%2FTLRsC%2FlJSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ%2FeFKuOTu5wqgL%2FvKtwDS4d1j85cMmz4Vfd6Nib%2BQAO0%2BPH2Zn7YyOmhJrL1%2FxAz1S29SPIg%2F%2FTmwanNAE%2Ft7f5%2FPjgxaWzeIc15zUzrkZg4qf4GfwCFuVBbYrFwMniVTqEdJLQsG43GpjqmBwaZM4GW1ZAJy9luBtC9PeyY5VJuo1mq7vHzUcXrFoOnCO7YZ4xaMcy0CrnkXC5qsrk1AnXQZ7WE8GgviwBhsSDEmLOE%2FbmGV8XvWj2y5xWAxoMO1agmtGLjoR8ua0QAz9lOCLAyxHpMze52xV1FhsD79oH1OzI%2BKVLs1L9W9vcHoHYkbEQpBTcCvVqWmBEFbJ4UYaw%2Fh3l7GqJJE9ffqXp8ugINOzPpssMGfzoDwR1IdL13l2HSrkszrxuZvm6oJ5aWXxBKxn775dUKoVXj5SEfh%2BGap0BttbFDiDHlG2A72aMkVDIR%2FbK211Yaaw7nOIn0mZghTj3fDw6KqDdusASOt144AK37yhw7YVh%2BeamtGm2xn8VV3hMIGHgpMpMnYGXnl2Hhki5r0Flmna00FIoxSeepzml83rvJU48la9Rs1WuqF2pLN6pBpR1wbpd0Sq6RYR6gdnhH7cEoBuk3S1BJHJZo4Lj%2BasZn%2FnMQmhyTU7TRW4wNRZx6ixv8ZSkw0Y2PwQY6pgFdgQtABEa7DQWI1xHURyZeOZBVDWiyXztxoiJPFmSc1dHsa43yEKo1QaKC50l5dnKl8Y%2FqKkP7XHQ46Mbns%2BuG%2FWBKEyZWP3fWXF%2BBkeRjNQLvwNN1%2Fb1PjttSkkkAy6asAb7JtlszI1MFgahU4ZAcJ4Jv7rS9JYdH%2Bzi9fC5nKXkbgnLQwX7%2FmH1HPeZfxHvCa62LX2%2B5SnJKHXEX7P5dhWM3CEpP&X-Amz-Signature=0a5b0c2af5b3ba20373b5716cd603a8162041bdc92893be5b7bc0a7f0c2840c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
