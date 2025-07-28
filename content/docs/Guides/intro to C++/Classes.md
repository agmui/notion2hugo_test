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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666H6CTX37%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDlcCpzTN9QlyQw2y%2FSVFghbPM%2BGNh5LhQ2%2F5W2UzehHgIhANTWphiRoSiXh5tUh4oNZGjxi%2F2wFULXkBqoYn9pZfh%2BKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyC4vClubPYeMFdTYkq3AOsY3%2BHcfjPkgXFwWOAnWd6nW5lpjilvYz9BCuGsLZOVriOxrWZJ8jix5xIRYbSO9q1k1wGstxLUVgb5kSrUlMwrZZ1MYJnWBmtLhUHHbS3Ub38gMP77tR%2BptmugqkRpGkle%2B7BcS2KEee65a9m1MgBiogI8yU9ih%2BtMIEMdo4VcgPSnojUX6wwcTr458KXYWfG21Zb7xkP9oRcVHmlFt7IuLpz9xfczP9znS69RoZs10qMEa32fWP1D0ppdfqxozuvNptrpqwM4EjgGyqbRL5RXRBzExYFkp63V8C9npGCyasT3uy5Qpwhmb469fVO2CyTEzF1IEfdHnQujRFxzM6aLLkXFEv591DcIhNuXcbOkBWfReufk206KQ3uB%2F5rnLnkUK5BtKkDL9Qd0OvGX8h4cvw1vZBbMVtGX1wta6x9nEpuoOHyhdyqmlUukh6lM010T9aOihA1yb9g2Ej7xv5k0ZYG%2BWOFHQ1qKFiK0EkVY1ypsUWPt%2BCHaCiFXQGEsIWas10vrQYQITK4YIy%2Blz9AvIIj8PlcVxYhcEvS0XfcgYhhZxSxhf%2BqZbjt3ZGLQgLLYfoV7C4ZJPd9Cha%2F%2FtXDCp4VNUvgmhyjc1Z7WHfbtmDI6fwunK7fKBX99jDFop7EBjqkATlHiEWH2It49i2%2Fv4IIJ6LoeQZ5IgLdGj70YaNVLGQD5sth5FYP1Xfhvd5QqlWyud%2Bh6gCFGPxZBeQP9P7Pw9SdrxCahqJYNbM5eoqFkOK871LQRkXt9QE5%2BQc3R%2F5SL%2Fw%2Ff4gZFCZUkyeMndkYrQHpZOEcIRw3fFvfW7G4nE3w0LOt5%2B9fN1%2BLcFeDBHLkVOfP%2FGX8LBf5XihBM1IuqEFXxiHu&X-Amz-Signature=88c781eae194d4fd3233de5b3c8323dd5b412c53f3fb1e1dc2347ef68f80a3ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
