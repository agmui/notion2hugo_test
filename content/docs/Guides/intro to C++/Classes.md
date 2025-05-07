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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REH5ZQEW%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl8cLSIQ6mye3fE1Ef3huANwuV1mo4k%2BSfwKP3%2FG8cAgIhALv0aTe8Bo6%2B3EPnl92cUuC9S%2FtLS%2B87RWLTByIlIrNuKv8DCGMQABoMNjM3NDIzMTgzODA1IgwwI3401tV%2Be%2B2dYd8q3APq2b05rDT5IqftxQv9JSSEVvpDro%2FvMZ8v9wVLhqdoFj4asKyB7ux3ENXVk4a1IoR8P91Wd0MXw6swGGCDYiI9HYII2wP%2F4oTlXq6QBtBNoRIEfeVI6UPIpOE08XRldZQ2OJOqyrZmCle6bxCl313HRbXCtrr9HQblkgN6A6kkVSW3ANoPvWrhWVWE8QxpIuge89ahIsTUEWYZFDPLD%2BBTfwywLvSkUbGNtDvb1KS2U0Jj2NPlK%2BZBD%2BO36PIIYPvTQVAm7tOkvgxhe%2F8OGGp30TID0ttWR7bZCKsolNTzD3XYuDmnx6hB9CtO4acc7gzQvpRgfDyqibXvyf17PCBBKg7sAKYkcb6uzhWYDzZbOL1HbReFestpSGYZZXulch1%2Foj1KxRwOd8Ssx1Eiu1Qg2W1KdSfaeQ9J0ZZUlWAyQObAiLlYS11horewcwRz0tv6%2Fs6rVpiTqtRW8LnsvoTTJ2IOnDD3esC0NS22mlQCb6ELe%2B9kHF5ddNVDvsxPUxJznBDqpqZCFq3I3gBU9BK4q%2FZonHt5MCenBUEpv%2FWL2X1bTE9pyGVp5oC9ctVT5ShrYrfMsBmgIYt1MnE%2B3IAcD5%2FHwHANWxNl%2B%2BtDRmqkF1u3DAPv1P1HiX1cvzCuue7ABjqkAfQO4IEUCbJEhrLCxrCc%2B67D5U%2FAjQNs4LK3No%2Fj66lE6gipJJp1Nx41hIaD1bo%2FFAsKLAD4nDBynZU8auOy9j5vEB3%2BmZrQnvfTdl9A0jQ5qMCDbJWXw7ORT46Yx7lFKO0O9PCAjo%2FLxUvC4lds%2BO5o3YzTKG47cAxYYYFW8fUjW4Ia0fSXw8rr7WbAu25MZv9SlD5NPGRgGaZk60zf7ZKmvyTV&X-Amz-Signature=2eba244eef96cc7347bdbf0e8a139b131593dad5fc32456db5135de96d612f93&X-Amz-SignedHeaders=host&x-id=GetObject)

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
