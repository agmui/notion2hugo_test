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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJPOXL3Q%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDxh%2BAG9hQH4hLyY3vsvpTqZyTUTaKfZLCIJVCWdhyjJAIgCVqe3lADuAGVi7Y1EWqjjbevZBg07kzI4wpUdAIo0vkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiEKlQoa9BJb1j2VCrcAwlSDUKFF2jv5heAKT6meJNt4bM3D7mnabVs0uEkmGL3FrNfUq7MJVvER6R7AOjQmd92xBZbvasPNdX5EMLxpj%2B25YCq1RJ%2BLkmq6j4kjsZD2IB%2B2fn7%2FMw%2FhxolElP%2BlbgVVCDS9jbNS7RqeYBtaWvj9WDkTEZqFD1h7q%2F1K5sU%2FC37R6vP%2BB34AB6A0g1mkIOx02LHk3%2Bn%2BoSqNU5R4rAgK4TKtReTN4tey2QCB8GwVRjTjjcEVxt8lANV5IxalhUgS967ar78jZF3p%2BvYbjSp5QYNTC7Q2Ua0uN%2F4p0leuZcc8fjLVYy8946Gio89VXL9qW1gd1glhm%2B0Vkt7CtK8A7zG0UsoU6oEnFe9GQYcHug%2FUDyNlA4ioHK2AzZ4jW8ek8kHZY8OTVTP5kJxnrRB6UR1GZifGKOPt1XsTuudBUzKwgdE5wsgEHT16x0OTkVx%2BBLelnlNjhq6%2FvBQ27VTmMFHzkAlR5b5SLuheS4zGsLU7hVav6OlFHGsJn9qtLyjTZ5i8pKDM1E6MJIO3sEeUH3HRH6VGo4pB4WLOjndDHYs3HMU3UY5gn%2B2UPHZ9RfNQ%2FVgDKJnGkx8YU5SiYXhv1jkBI5umEkbSjTKxscWaoWSF%2BDqOqNytBcaMNjs0MQGOqUBlApKn5cXzqEZceIOeUCDuqIWMKPFwDaQ7IMuzm4tXz3mUujHuhYt5%2BMi3bstuo3eVkOMRBry2XUy28cw12q5STj%2BFedxh8zpdvL55mEeYJLA7lo1IeA3qyk%2BCHZYNsmtZ9h2G%2Bn4RjEl09qSBEv7jCvTA8fQpESgcAgeEVnGN6HhE1T0Q7ORKCpwm313kDlhWNhQDIduqbHxcpHh3qV0fYc%2Fdm54&X-Amz-Signature=e25f8dd10aa50d7c31bf8787ca644cee34b0581dd0e222824da177100fe78018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
