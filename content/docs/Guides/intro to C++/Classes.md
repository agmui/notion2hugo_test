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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP65ZW7S%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T041132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIFWegj%2B6Dg6rAwWahYHHk%2B9qvWyl0SbqNRTduwsCkzG%2BAiEAqWk7bgsiiztMJLP4c6fT00f1LWEJdUZJ6Grorl3s4BoqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHSwOCxrYXcehXFpoCrcA8zhHnB7LigElTq%2BPb3D%2BOVAnZ9Lc9o9%2B6%2FwsE8TyXGeeESoPyzVsLY4OIWh%2FcveP0akswE7h1U3Igjvjfbs2UNqKYlWptVjrl4ITSR1F86ekVilIznkGG4POGN%2Fw%2FCXFLG3e9STEhr36dCqLHg2jz29OQqesp9fysvQ%2BXG0B%2Fqaq7Mg2jgIA6q3ADDLJ3m%2Fiml9jCkiSLTP6JEkijizJbarV%2BXOzW%2Bcsdczxhh9ejzI4TaRwTYT6FTT3E%2F5xkBrXev3yCmZ2XDmOq%2FoFCEtIByPNTiU4jXp3LLGe553XziSsyUbEaIuYdzW2G2yxADOTVSVFNMhEjBOrSKZFKvcWo3gUbUxm%2BqsXmBbBMjD0bbnUPzPux1Muf5td0VjNWPq9PiR1QBJa%2Bt59Voy4ZSBQRSlMQayMh3g%2BcMWIQndlt125nXSf%2BBzihMZ0FD%2FwA%2FwsQvzqjoxknEeFIVQnW9RH2qpeGtZdq%2F%2Bth0BW1Ig9V2BG%2Bmuelm8ZVuCMR4%2BmPpBiQMA%2B6MF0rtAJc9I9%2FWTIk9gyABlu0nMEZ6INPzgCwDY889S2b1q0Wf1zSXFd1z20mAjagt9WkA6D7R0smRg6AQxjMRnqwmkCjF0RC8mUbu08u8e7Jb08xp7ve9JMMukrb8GOqUBTBFWea8MIz5PSglaqcfNQo0kQjDQf4zkMa1QcVr%2Bn2cqZs7QpTOmwRK1GtGqWbkxIpthSGD%2BiAnqqy8%2B%2FlVHKqKedOmAgPJUbmR4OjFYb1DHqHmsmM5FqkCJ38bgE8jToCyrdgj74DeamqV9rauwNG31za%2FQeZsqL7vluQbfdTVUnR5lbABF6ei%2Bx%2FmOmGpfX5MbyVPCoPjYNK9DQq59kSHO2mil&X-Amz-Signature=2d9625b86f9f4ad8f55d83e8e6aa43907b561e4ee6a4508495727035b03820fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
