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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPWFXTAN%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T200705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5Gh7kBJBoxJUk2IJLjHJAcpUmFqPIYd5MDAZw9xCm5AiB%2F6zXJOOuK914Hoyks6dhl5yAuPNPM8g5QSE1WL96WsiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBS1dTyN4Kpx9AqZeKtwD1oHIe9y2rBocIVnBaxprSExl6Y%2B6uGI4dle1yI0p%2FpbSzmFNhZkJjuJFssFiFhXLX6B2YhxVMYUN6WQuZkIMdD0LgX9mRWJBe0wqVwKwwNgHnUE6t08b47emXColXx8wZRDmQXi1pTWvPIV7OdttYzXRvnCQJzpOx56A%2BurAI6qrd9VJpgZGDyFTYxFlccp1qDtTJ8j6PVCvI0MowO5RhrihpIoKwmejn%2BrX6jkySnH2ZO7KaEY31f1waEkL99jcT9pq1JEXdcc1HM5sZ1sMX0Ka8LS9nXYwrbbS%2Fh9HKtubm04jQu7olc4w%2Fisr5z9yDfNCSLW5nAZzWQ7wnTAXJmd%2B9Y0QoRqczmQgw6B80GyQMQ8xTgs74E2EjN%2BuZfWJfK6Lf2pm5Cy42enJldpGe8zCmSaBbALSOfTbYPd3gdyKqPAJXEH0N0AVxl%2Fl9cwJaDhgdO8xjPv8lwqGMG05XCqYatGh6mVs8uWp7FsqGVKztE7FH%2FNMnIIe69lrbk9kVJB4zPLE4ggS%2F91fTiJE%2FlGDPxS5u2goYRj18RSjrj%2FRitp5Ti9ch9bYTuSeyE%2BQxqEm4V%2BBfLOVEIQbni1By3qfxd3%2FxZLKBrZFU1mf047NjIvpgIUU7kOfkhQwjo%2BkvQY6pgEX0MiBRMaxoHNJ2gvNFn8e2TUCLI4Wyh6Q%2FmsY3G4ILWYnWGMhPrJg%2Fu0HEYbbhWA0FHlBFqXIxBJ68J4ukgnXGFb2H9svlYImYPpDJjV3U%2F%2FeUl39R41skoLeiUM0meubhdJ7FB6bUnJ6PZUrOLxVtMV9d3yVM9wNyUUqtsFiC6xb9cpneh3NRETrB3fPQkiixz9wMHCFnEq0kvHbd6EpbhYuPMKc&X-Amz-Signature=7879f2c64b5c955f5f5ab3630ada3c60d2a6732d8a4fefd428302348e289b593&X-Amz-SignedHeaders=host&x-id=GetObject)

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
