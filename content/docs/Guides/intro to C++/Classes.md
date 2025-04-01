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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN7XFK2Q%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIEY5Ddti757fWuVAE894UJS015C%2FATQu7b%2Fn8AetrjuFAiEAzIko0cyyc0QIwIr3f0oDNKkr28bZF%2Bj0umz6Xvv0Mx4qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdMkmeRj3bR7gFQlyrcA0vxsv7giAkjetEbdqi4AOb%2BuNCC7l%2FLZiMt7IZ9GchiauZlsGhpZqqHFPM23cOJTApuZOyIgm4Dgu6eDFaZEv1KW5BZsmqTMqeII7an4MJWXJ9R4t%2F9gfuaOj7rNWRBwMAJgmDzPr4sCsfCzKHCHSJHDFFWUmKHLYfR4H7OScxrim9O19Hc%2FDMbvwhZ8KWZm2x0rDLrRGUVx9f3sw2jfCRGtul0e0PSJ2O6Gufb0xbGztLnazho1jE4vqPZOisNdh2wSGvD%2BYmVR9Qaptg7a6Qeebkskunc6L5xbxM6KbJ2Pl76fhVJ%2BYRi0LJfCkRUTLGiRZp%2Bak02EEIZB4oLE2pajRfLzXdVuFf00XgnDtZC9wRJU3IBGSTr27xaNlMSvkC452IDd6K0mU%2F4hHhWvWCMnjLfw8lP%2BOy1Em1uAEHOXP9vTR2E%2FcNeocWIvDMm8boKPGykgVriP2KyoBT%2BH%2F74zivnlM52kh9TNzlvkpNP5aihB0R%2F9SkBh%2BGuqVvhhL%2FCIXtTkdOIeiItktHv7sVUzjGB%2FD1KZ%2FICWx7ZlxgRicRnuw0NQvJvBPtTR2cPbSefwQqd7s%2BZblrkeig5hsrcT%2FA15DcZOTBXqw4BHj%2FCNHWR%2FHUY8Ylccvo3MM%2FZrL8GOqUBXSmMifdbZhuD3BCcHNSp%2FMV2Dia8qdk6bwGGUT3%2FVoHOPdqzf0X5F9MkhuPsfdQrDoXy44OiUgrL0pgiodhoP9XLh7OIFDp5fgrBuXlJQIyy50aofcY15fkocs4qqu3uKs2Er%2Br3ludvHsxG60998fmx8nRMGMx6mNNafW8Npdze06Gj8ju4D5iETbDVRwZY0i%2FaukONMrWe6UEwmd8LE3WaxlEH&X-Amz-Signature=4f8f135ca2b569314480f4cf4610d06d788511030e02ad579e2e600aac26bf56&X-Amz-SignedHeaders=host&x-id=GetObject)

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
