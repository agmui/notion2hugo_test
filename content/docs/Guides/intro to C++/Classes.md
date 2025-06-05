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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD4FLLP6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDZxmOmQR7wsWHzRbFRgCpprQBPgWXcWbyZ5dBM3ArOogIgCM5BRZzvdmvu%2BywS3IEUjrr80fWSeHGV2G%2F515%2BoL9Uq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDIsqmSa63WRC257b%2FSrcAxTo4LggAK5dwzmc6BbTaRgsEwgQmycINdznm2SXrD6of3yyR6%2BswxwwgxQqZzBA6ZRPYEVzFxUIHOM8%2FCfR9woG8Riz7ovTUIh7K4K3eQ3fH0la4B07TRurtrFcVNO8wIcJiMfbH2sTNoUojfaO4pYjOX7iJ2cTP4F%2FwpnxIGcjD4SMpQJb8X5YYfbgF%2BhV10tbSgUrUkC4bDsR%2BhI4rAoOauXLyBkGGN5MN8z32s%2FexUTu24xQShfZnRxQyDfeCj1a9XeMO6kWaaMqjqRE1KlEMG1ecJ8fmbo2RqqZKUAa70wTgFqXJZaHhdhoqrvTZx512wuowTqEW9iZl%2FwrdublaVDYstd%2BkDCJy6%2F0GQJI3T3MDu%2FB2%2B3ZoqgQ9uoTK0P2y%2BHehn0Bybqs6SIZg3TeNIoqafL3sN0qh66vLSDqO6mmumtEBd7oWkXTcNEkZdZzuaJrcrtCFpKrYQ44GnUMDKQNC8Npj1J84kB3G0%2BUr%2FgaBMAPezNmA275UEs59EKJjkdRbxpYovaDNqXQSrVc13EUXQh4erHYschnaN4jFNjXMLGIEUBQOLu4skuYcIQ5StY%2BC%2FQZtuzyiFuWtkuFCOW3gdi9ULJQvJ1xg%2B0eDsrxoCJlaGjh%2FJ6dMNemhMIGOqUBGhPiJlVbnYvOxRIf%2FA%2FrVXlYbS9f9tCoKqHfeF%2FQpRonFLr%2BQitbHIEWGwyxBGzCXKW3PDgPj0P50%2BOKuAtepYnr7GU4Un%2BiuFmR5c5dmF7he%2FENm4H30w5I2dsx8t5Z8RXy5hhD0eOeZL11esViI%2Bxdn7bPSBOYWonDFr2ouM66ls8wOEnUAv%2BeYP%2Bu%2BQWmO9pF0PPsBluyS%2B7lm0CnDm1ecZ7K&X-Amz-Signature=b1be1a49d796623a0e7a6d6f8f5ca243d3f774944d402aba38327ee1bdca50e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
