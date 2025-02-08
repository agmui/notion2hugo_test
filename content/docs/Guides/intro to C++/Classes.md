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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6KUWFIV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T121144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD86rYSXlcNf05x9Sbm6ErmJbN9Qh1r1IyU97LyucBrfQIgFbpifPByKXJ9RvKq5mmeXi1zUeRkuIYha4XlN7PfdeMqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFCD8YckS8wX2qyEGyrcA4pOtxFgOxpp3lCBRIYYh9IZ6dWbo7b82J3iD%2B8VJjGUjivD792WIPJzIZ7aZRUxRNWYBNzvJXXVWS5GNr0N03Sj7OwuxYyE38yPFkFhz1tSPv6Tyd1DSf3o2cQzV8C%2FDXP%2BNr9OJK9weWhVOHxl7Q4mY8s%2B3o24rXETmzmEs5KiWzp8nRGspt9ouT%2BENALkZrijWuV7s0kBPYqIaFWgpdl8Ownxo31H9dFY3ACjnjVVc0ykVM6IW4dq8BmL5M%2BAh8kdGencPXlmkxqQmAFZ1A0O%2FWLGuetUCVjYmVUeuK%2FhQsLHzW7hGMn6LIDiL2sPwXIZ7D7YV7wiQRLsVOgDgm0kng43Tl3iec7pAU1CySYBNBoHlxPgb%2FiqIIdcMu%2FKoYj9qYxOyEav%2BIfsUurHiqLgTXK5c2HJaB3g2Vki4mieKKZ0UvrAtPXN%2Fb1zHztWJLBY4lt7JIft8yAk%2BmwpJwClvfqO8xLSXCTVtKm5Yg3lcX6%2Fl1kwp0saEM0wyXBOF1JozW0i%2BZpMxSlXQSIzlWREkxBeFVuvRqxqx0HiBRM%2F1qPYD0015gYiDmKC3S%2BdSZcnJfew3TI6IE4cN4Ifbn337ILoqo4nckc5nQC5qf5cebfriPIaGWADhOJ9MKSGnb0GOqUB%2Fo5wuj%2BedmiAh4AKSYY9JTeEn3p9VDFGEPAZA8QMFucD4i0NQTY3syLh8SbOPLDgzb3bUqkGQZTjI7Yxt%2BWVmo4HWMJBJIHSMOGH%2FibUX%2FNkSL3A92GVWUoGKG9PQsddgy2LFZna8uhd0l1oDDRCowVrSS7Ybix1N7YeYSlq22W1vq%2FOGwLlDoiEUstwgqLmnm26ntp4LLwE1Cd3H3LeA6qnFWFF&X-Amz-Signature=5eef3d7f4e51c40b921e05b3b7306c9fe21859d125b68233cdfa4f0b56127d72&X-Amz-SignedHeaders=host&x-id=GetObject)

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
