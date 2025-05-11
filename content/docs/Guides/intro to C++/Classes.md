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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3SMELR4%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIE9D%2Ft7lPbiji7MqRhOnAAN3Hl%2FxXfEYZatEmPvX96nOAiAnFG%2B6IheeiGRuDjakOXNr8L0kZIn0xUyAiPLzFJ%2FreyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXyswkPOZeq7XKwDyKtwDM8Q4eaEj%2B%2BQWeHs9ctkLTYfqTKiXY5B9IuYlSS2bKcv2J2M7K%2FfJkvwwfHMV8nAKY4eXzcXcZwDMaBm%2FhIBXatXbV%2FdpsTc%2BuTPUYOtkOLkXzQcrpugdrVxnGWjbR1RlK9JgeszewpDXM2b%2B1tviDI%2F6HaTwLpKLfMUd%2BJuCwJnhd9yyKGG7LV7wuBXqonN9a4N3ajnIoBYwpn%2FoTGuL7F9rpfuPgN98ELvZB%2FX7eXDuKgVFJDSeVZHzEQ3HEQHIfP4XxJuyv2P96aK3EfrAmQ%2Bd9SHTFAtISp1F8p6fs4U%2Fvyx1VnaZPwzgZ6elz5gc5q%2FeR3CS6IgxszqDukEzlW86QZm3kvMWcHPt1Ckg%2Bi%2BPBgNF1qNcETLB0zjcCTIsUpvOsSjy23i37HnjR1hzrGhMj3l58rfzmepeFMeujW6rajXWLRu5zj2ad%2FL4ty8tu2uI9bac8NK9rH57QGaSi0jOjly3rixt33WO2HooTdYd2giNnbatcnJyZmiJ0Zm9%2FncVQNOaxjeJez9Dvf24EXmORZPRngLLS1bPU0lcnO1g9QVzGQh0Np5TN1T8g1E4Q%2Fa2%2FveCb88%2FZRgPci9%2BHq1M%2FVHA13cYAQtyrrJGinaRidWMbMn%2FEOKQj0YwrtuCwQY6pgF5N3%2Fw71%2FnKkYE0%2FbIlcU%2Bm0Kj0A6Rz7bB94xR3T8dHHci%2BiqvyLrRNZdCoJjhBXyJCZqTyBwvHToDiqOh%2FneX7xSYya57qg%2BzjxqGyqjSX7JrwCOL%2FEd8xqagqC3M6rWQD5TwHilm7g4OQnuqjUEj9JsvpW6SKNnuvy4OWMi7jdNeZ9pvwxAGBzomfHWa%2BAea4b02VQm%2BtzmyUqvem%2FM5EhOwFpn8&X-Amz-Signature=f3a4e29a92edfd05567cddd758625d17812fb9d93c9e5e829b1cf3ce85a137f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
