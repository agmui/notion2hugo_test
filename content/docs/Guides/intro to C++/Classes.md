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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DEJNWJU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAYR1y0z6vzFgmo5xAWUMry4eHP1wDIvF28C%2BNQrlwtQIgYZ4KEqwQlXqjy3VvhSC1i3McVPKKZ%2FPWLDa5QabP82wqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0aY%2FQI12luEPMIyyrcA1auByszFp80N%2FVXOUHn7z9OYcRtipp2koYBwpGdaf5xb5f786rDHZyrn2gWCQ7VeoStf5OATIRElLYhU3D2bT9CT%2BypyKiHBHDEkmHIawuhaFjDYBx3XFauUqEW95KCPf%2FT4nNCl0uLgin17LMx6DMZ7y69BhU264juETyJk7HW792Or9Hgcd2og7%2BY590Ih34HfIhh%2F3bqH8S7WOFWQVLXf6%2BIuZd4ZhcPcZ5%2BOk5P5VONI9L4hWhu69MRiuCNRoev4%2Be9r%2BlS20q4uQK6aE7PspelSsRw2hy%2FL8dfj%2F%2FNT3yBNoXtW4b8NKP%2Bp47TOqeYTDouB2i1KNDYgAV1tIaNqApDXdOpsyIo4mSguqVIigr0XE1Ngg3mbNnTD1%2BlB5FC%2FkKlYF5HSFyPm39U5FrBglV354rmwtlG7S%2FHqJud4mIKdHaTcqTM6GHJxqmKhWu%2FE0cVmGSmN0qo8K4GWHKB4byfv7cMbovz7x0oWpvKY9Wn3mM%2B7MSB1pucVpAJQw9R7Ad8GGnCycjyRIOyCE%2Bo4AnAhdbvuJC%2BcimFgGqM8j9HdHkmKuMRb9yFiIXgK4apmXgQVvIKE99sOGS22eujHf2wdESfOuLEEJeivWpuQ27Wkp8Hn8beegZaMJyws8QGOqUBZ75CljBBKmpNRRY78q4RFqb0dZQmtDJFINYXYaGIR%2FGA5xWq8OjAwWe9kcDMOi84VNG1yxa8ZVFkVPRXgLmjvzUTyWJlSXkremTmCTbUu4D3XUseesU3i4B2lVVtCqRU549PLv1ursNPRNJRM0LgABeGhw8L4xXhBY7lykhFAMGYWzaucLMP76eIf6RQQ93dvSULIkbU2QvH%2BXEJfSN%2B9z8XhbZZ&X-Amz-Signature=b38eb0ecf38544b664c6644c0613d8e49be54bce088e09edfb8c701b204af8d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
