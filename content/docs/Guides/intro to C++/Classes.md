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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSH3R44T%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDGKGCi7lToWy8HPuyxj0mc40gUUsYhq4riSO5nRUU2%2BAIgbwaLqvZc%2BXNHH92R%2B0BUYup7MyWgyQMsVKxQuTlerNMq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJxGTXI821nks36%2BAircA1ct1sgSjmtbUxltkLSpUHGkhVsgWhZXABrdojQ6XV0AoHbpUDeq9I3j3OBtRRZR4k7%2FkMIyiKwYOwsbAgku02rwrDqwTr1uS6RBYjilkVp1Am9uab1lpBqjxG9HgFo4G2givW8zr1cG%2FfzJbK8nVr6q7lD5xqdxoGOEU%2Fs4d10mZ7jD%2F%2BJ7f9ugV8wd%2F21jKUcv93XqdkvcZnhU8m7mt9297syNI%2B1JzgdMh0h8ptcIyOZPdWgWVDGkT16vS7NNiOu2thyFhj%2FBQT%2FueXaZ5gdERWlFabm4TuRdy%2Btk4%2FsP5ORpgjB6Fhl4VVtAZuP%2BowY5oTnarUTfPrQzsNNmL37ZmvrhLGhS36usvPo91tmixe7gWuaSXDM2l11dWksoIdAx%2ByIg3f0dn9CjcMmFTvJRE%2FICW0V9R9%2BVpiZDN3QCv7ptcTcEJIq9B8MFizln77a%2BypJai8RSgrjOT%2Blkzag2YG9WdoXoccJUWAtMZ21PIuBTFlscvsotUZJHWyGextqlr2QSy9s%2BwBBVxMof8jDmGgQdMYxzfNpQllcRmEd%2Fpk095xK5l8Yj7jS7vBpEOQpKU1t8RyRiYoZMtvbDZvexhGNwBRZqxaBErjr0Tp57pGviHTva2vM%2B1sjCMLXZ7L4GOqUBjJfYSa7HlY22wt87p9nKTt7%2BKTR7zm0278MA3A8S%2FSyl%2F4Guara%2Bo9pe7cbvcOkgmcmsk8oGWutHEAhubRh35pZtlLxCQKys35YS2lQrPHsOsrxyE4%2F2wnARg%2FoADfkDCido%2FzLTBCVXRPZKi7a%2B4zM7pR0G4wfe81Sv4V2HAF81QIHwXui2pOTxSEcqCKY1s6oDTORWI2%2Bwv1YzkSUsnyzr%2FLAQ&X-Amz-Signature=365611042bea5a88542936a891e18d8ed6dee93384a0a9146674b03535539dc7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
