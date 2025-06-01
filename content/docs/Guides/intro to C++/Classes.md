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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IJVMGIK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCEY8hV8FKQHwjs%2B94d6W4F30RGkc3AHKRtNetOBXBbgQIgRDQbfBwyC0NOA9e91QvmhjvJyov4Op5Ar4QY%2BTfGuzcqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpToHHnbL0l6tSkhSrcA1cbwGCGdiZjwhJldBjDIXpZQyot0E5nFx5jcVSL29%2BpbkGp9NPsEDj6H3MGERecvaS9rq8PqklW2G3fQpdy3axRj4TSQ9%2BXyLGURDWYhKGy7VX%2FH7zHci%2FiloepQvfIYv1RvztFOUGZjrTUMJoVA5myskF4cfZu6a%2FpcBkzHrXdfezNIRgy0n2olKkOBx%2FKBHEz5ua6v3Zy%2B1Qi7MtW%2FVOdDxgvWNOcDWktiHo0CP6i4jDwhEOfzwg74s%2BtjkCWXUEzurA5UM1t0gYJGdUPxYxlY7TVjaCt%2B8oe5dy7H4buek7FtJk5EOpZf7f4vkv4K1e1KbQIiQj2FjS6%2B3JXRX4IuylPTXsB1qkfEuhZer8Oa9rbmcxJYLlk7c%2BDMLKqq7zEe%2B2NToT5XPnMuZEVGMe%2FcOi1AoCdy96no2OVBGPhHSktP73vMrM6%2F7Un9ar4hVSrTyygNT%2FyzmY7QGcZw6YOw9kJ9jNqvf0fATfIlBW3tpD0uCdFaVXDYY1G4ueSxAprZdo7L8ICS74pV%2BigTcFKJHsq%2FS0e1E3yRM07PgvhuvlRg3n16LPfs0lCxhQMm3Qsc53H9iEtn5nXrxt0bx3aOD4L5fviEUcvbG%2BgnG1yjCsxRYNvc64owg8OMOGD78EGOqUBt29GjiyEHQu8Yh30dZZEa%2B7wOxvbz7X5NKlDRh4cyQrDnsin7jrMU1gcIL2mYlJAlUT3agn9YUp2SqPXUXBU70M4hffOLFiYNA6pneEFrrQxfdmlUyIOhdfIAZWYmmfZhwS2xvQ7N1qdj5h3FCioRfeXKxd3SZM1oCa9KnohCGij%2B1rP%2B0tWYeaKtKmLZhSQk%2BhodxFDlsnV8bgCbfmrmtOtVIEc&X-Amz-Signature=b14c71bff2f8b881a8f3b71de3b3cadc69b01a0e0c3c58cc0c7139f0331b200c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
