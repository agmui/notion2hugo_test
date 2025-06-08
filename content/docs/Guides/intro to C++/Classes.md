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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXLRHITX%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuI9xH95zVhK%2FwI2vvAAUybReT4ZreGKwdyToMlBVVBAiEA4M288%2Fa4EMs5Lw3XpWPNvQfYKM6bvbZMJhv8LAHHM18qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzz7z%2F7XvIIxJA%2BAircA%2FR0LAGaXq92OuFIwhRSJMsIr5VgckxQ1%2BEOFbELJyC1vQBiUpdXhbVgcgLlGQ4Z3be3c31UYF4vHsJwfWUKymgYvlusJ25hcc20Su1%2FHI8fV7iL1WQ3bzRscDUNkOIpN4ycGFgaqo8tDw89ukSMlXFJbkgaHEEARJmLQufjEDFKeHX68fDKvm9aQSChfnyiK81OZWoSM4LvfNiwwp0S0gi9JumXpwBINTJGPQALPtatLuPG%2BTz7pNuDG7jyJwCAow2puiJYeK25gR%2BMOzVv9Lqc3V5qRJtZwZCALaKh%2F%2FZ5rxq%2BCPLRNJ5rYtxC7KEduUjSRnEzE7%2Fy0AWQhtF11UUU71iZcKnDlEdMsvAFIVFQnDpH9K%2BweAcFuVYDEBAVdOBp5Du8pCtQhOjWOTLEiiVmVeI4iPJ97d3oI5ZoEeRK0f2AnXQRrdHaHJNUkw89BEuOddBVnHOlsrulEAAvVKoEPL12gp65VITOEoBndDTrj2GOBz9xT%2FGj7gZROUbiKmTJYAhXBW52Ps%2BUd0jaDsJzY%2FxKtyDYOkCuloWnlY5b%2FYOsnii1yT7Pe0EU5ONksHEs8OaKFzzRZCg0YCVCf%2BafZ%2B55fJFBhWGsr%2B7xPM4ATopScZTWv%2FDe37kNMLeimMIGOqUBNDB6jY2JACSWH52EbNZtud3WLlYxolpyzS25HP3NIuK5fHv6Ok%2Fml2W7AxF1RUifI6YNpuXL6WO431RuMgAKpYJRPXibIc1Qt8wFf8PrGnPp5Y%2FwWoSC76YsPbtxAifmnUvCjRR9PeHAPfH3OQ%2BIjm5osjk5W%2BpAGnPOxBqYTaHjl1iZn4GqpumqOhDk0hLTWLQiogFAA27zNQDKyMjc1PRIp2xh&X-Amz-Signature=39ccf55943d826b10fa2182d176647765f64065489bdd4df6932bc55ef97a5b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
