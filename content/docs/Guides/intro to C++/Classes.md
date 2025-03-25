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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXBYI6UY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMVY3qsth3lh4G9sEqWJZ7W%2F2JaHovlKz66NnK3XffzAiEAvjGO2NBhIrkqrA%2FPqnXPQ2NyCK6KPkcfEFYJBVc1zssqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE67AI%2BhoFWR1YvoQyrcA9PHhrjcDwO3yBaWl3LiUUGrt%2B%2Bu5s8vbduJRhJVU%2Fy%2B%2F0PbmHPwBTal71a7e1vV4ZToHb8dP5PYjScVuBUQ3IyZvTqV08ziYYQTm4kxA7ZneX2hS6Hi8UlG6m%2BqU03oOW1%2BLR1UMlPFrc3m5ZOcWrzXz%2F6n6XlXuV%2FF0OMTtORRFHBDFrJUD3yC1iGcyhuTeeEHI58exzfoSC0P%2FxByEMNlqdGUkeQZjs%2B1TP7LwKGoTxrk%2BWdkTDwVKgc8T186cUZvMsNz1SfBD94NZl80NT1uKOWsCPKT7XkbsQEB9UKI9YqvBmiKrybU5jHpnrDeSG8XDAg7XyAZS1cK0g6yU%2BvbZIWs2yUbM8rUqB%2FLU6hPlPzopC3QZCNV%2FY1FyiAwFRhCS5FzCpULXjjX5uKVFim416zKodWjtoRqAJjZa9rdD%2B%2FAbVwQXUpdVh%2Fj3hOeQo2qlUHQvsH0JIDauBcfVRvHa%2FpCludWmjCSiNhSbw6kATuNCrZNPkEVopZgIYzfMUsvlvB8QXNtTaj6%2BUsCbB5AYDS42ThfXuPrtfezxf54kywPl9UF6lAUdrTHaGDTysQhPI1nl0tJGt3NAxqSKKvz7T3GibyfNrKMPhO5MD63nlEY3qzTuKYQGrymMPqOib8GOqUBhMgjRQd1npvNh2K0QbnuF3wxeg33LQOs5mjJPFpSnqiJipr%2FQS4nW%2BIGgZCoaf3yBd4dArTrQFzcu7k4GaQ9MdQkKXNq%2BmE%2BvwH1Bs6%2FIeKB2%2BWS9z5vPhDFab52bnp3idW4k0qrwfOovVeqQNHJa4Hlk5T69iUdQyhHkPR78oPTuPPK8IgtoDInTL693DGPhdtml1jlkyjMdGPGwLSWXePiqcvo&X-Amz-Signature=632a40d840afb32183227b8c5dabaa27fec2f5d570d55ef7fc078a5b1ce7a49e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
