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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIDA2SCH%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCl2hpREMFgDx7MF9LqKshMt7rVTiJwgO8BYAI4Cu2TrwIgIuN2iQVdYY5oyEPLQhX00xqsOy4lIRvmh6JVu6utzXMqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCF0ALTcsuaRiW0T6SrcA%2Brpnk8jEnmdpPoSd%2FsG%2BLLTTIe88a10gPrzUZLCAywyQLHijX40eVYND2B2mTr2m1pOHzbb6f0JYgILpjx%2FaWheuz3pjdgUBL1Em3PMPY4ke3jOxbuJGbs3lICrcNIevYp9AqWHFGJLxGws93CleucR5DqEJkH05u5zZBYhVuAWSUkhhMuz%2FCm%2BE%2FdGlb9DZBjyxkYk5RABPin38e3Hqh9uN9hMHYbA3kbouvD73yxuNC3EWIaY7ViMsdxMEpz1Bk7kRsuwA6yjR4kMlFGZwYYRiOSxzA6fPHl4OtiCie6%2BJ58idrFxvvqvYnhPcA%2BqprO0EbrqgHXeQdEoz%2BDlulK3CibCnqDVi3%2B5dzPPc98r1SnUNDW%2FHnIO1wGi9RUpATqnQlYAnFZV%2BYALm2asW6lqYP%2Bu1AONvdQqNR1XyZHQfqRm0Rnrv%2FvQAy%2FevcFYTbnBu8vFyT2oAIdikEbqxEtajq94Hl8ZUA1Yi%2BcUuE54H2YYTLrQT%2BGdKblTMrW1D1sR%2BNURIk1dmo%2BMX9mzfhNkjmt4ZdR3pCtdiIa72VZ4RI%2B2gFOoY16ty98RI63eMq8yq%2FaZe4wxeiNBptEA8cpAt38nAamAbiCyJOhRGPMwGUvKKRPFVI9vNTowMNf388EGOqUBhz9qlfP4oE3haZgZvta4zJ6KutEnJs5PRwsMQ04x94h9zWqi8VIWCvf91oSzYx6uvgbWVL3YvgGYXwnMH6cLFO7Tq1QBD0G%2FbdII8RMJgZbqVuOk7zP4uT%2BkjHCy4OTEUUdCoAihOsxuMG4binvRNYWWV4o9wXsfvDiaTtMgAYHQlDhKvbMNajsjPDtIyjZeo1heWIq5Mji75DB3Si1BTXf2i6SM&X-Amz-Signature=f09a7596f542a64e674aba2835a8e4399079474ad74d41d2025196fab4444503&X-Amz-SignedHeaders=host&x-id=GetObject)

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
