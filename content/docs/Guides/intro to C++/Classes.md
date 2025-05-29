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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY23J7JM%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz4k%2FNWvexspCxH7osGxWSl8jCu2J2ftn88r6UXZ8ffAIhAI3tK6oJEsFIDi2Dj3yw2Wjg9MwoBpgxC7O9%2FrjggCO1KogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDH7TXVubDj0vJtIAq3ANx9hb3cGAUIvNjoIBj6S6VNSCOG8MfW5AyJxDrTGhHL3Ouckz%2FsUl3U177qmUqW8wJVg8OYGzyR7dORnJqYS0oZflLeQ7RT2P73kkuPEAHFDAeR9YMy49GGplOlWZXfFnS9e%2BGUx9OS4PvEwvn0iBAJuo3fIUMeKJvLBr%2BLvoz797yebdtotpjsIMMK3HdCjUzr2Mn8BNX4hoj3I6h5ULtKbxR7L409VTKT8gNq2J4QWgUqH2iqOaM7EvJk%2FYVwbkDmHDuQy1QTkYMItGmC4cAvzXEi9KPXlQaJiv8cqlLdxO3OcEWO18YjOmBpdR4pjpsyCdSQD98j6GpBrEpghxgDG2LCC6pCDAYBkW8bi%2FK7AVd7qMaZa7%2Fq8C74Q6lTz5Vor7RoRAvQ2qTjvoZrHXWWaqdqa5gXo1jcPwLHyqyCF8XtKVaVzb%2BMg499Ix76UcQurrFoXJ%2Ba%2BmMZyM%2FXV%2FLvzUm3xG5bdSNb7EOe67P%2FjGgcZ10LNIwJBxyKSkrql9v3MsBpzZDLjtwFdGob1wee0mZC2CqmHPdZnHKHY5v45t9wdGozc37SwpeSOKDmWo0E%2FNZnyN0Z%2FcdEhL2U5QOpP3VCojiEH1%2BAvzzvXNgpIzCq0fb7qPkpM6RKjCB4%2BLBBjqkASMJ9q8icNPDU7BjuOX%2FUlz5W8Vn2aVm16BxKaKZFOrPm%2BusgrYJt400DUpg80UG0YQc2d1miF%2FxUOaWEOrjNjt2f9waauXiX8tUlhhdQP%2B6PhJsB7yB8p5wB29iH1kDRk91w%2BOjDTkOTxyD6T0x0CyulqIdY85SNwAgIL24qAP%2Bht%2BLvHpXgCuEPSmcn2N%2BAQ2bJ4Pn%2BcrRJswWLUNTyqk1JH0F&X-Amz-Signature=32f06b0f88cfd0855c0456a8f55f2af9c65f1bc3fda4e070efad8662c58c51ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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
