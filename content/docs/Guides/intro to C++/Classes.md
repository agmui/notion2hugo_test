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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ICNGPFG%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIBJ%2F0VgHbo%2FZA7edNkouwGG0FMaRhQXtZ%2BVKkXOqV%2FJGAiB82Y%2FCM7yJEnQjjg1waU82vsdXZIcMFwub8DeJzU4xhSr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMxBSg1cJVByAfP2ADKtwD1QxcK7cQMdJpZucAykaJik7T9%2FVqSmNWzZHhyWnDYI%2FndSg9331UB%2F4Z4IKIZBCGJYREifIu1ZW7rW9NbAhFZBwKNucWYaNjPDRc1k1xLNnzwxOSRSzI3xJMZAul079XZ3TdMUEds370T7MGx4ohBjm13BszdHGp7WDRd0uCRBRazWi6E3GYhvei0APGtlUpHJZpXwiI4st%2FNDmxZMTzQSTCRSY88ZiGjYwfQP6sgnAXuhYldRtS9KT0ar2oyeRoSFRvFe7xJu5xqdsOUiffi2E%2BfF%2Bot9UnALnHVnT66QSML4mwHIyu1xaCUr5xEjGaeWKKK%2B%2B82NJbXvcnHZrOnP69cUmihNlm7n0UqoJhOm8aEh5o1c5ZNgv%2BIUH7iJpHX6UtJDsTMiht3FS%2BqSiNxKOxaoGYH1oaypndKTZ3U%2BJqQQO6xF7gNixiqQmnSo9YQ2YGQ0kCQFRp3UphNSJvWeBzf5esRyl5en4p6sJ%2Bpbd5Bgkx1MUG9cTCFvj1L6GLtddow5TLnYbEvTiKAs9VfJhXD6H03xZOl9QGvVyqO9DdetcHTJrVRR0oxGKPDwq3anSHuPNR%2Fks862xCgGgqjTD1iGJDlhB4AI2uoG8krFqLpfH%2BYfmp0vYeT2gw6eGTwQY6pgFVDeXl8MRtr%2BfqT26RDz5tuj1Y%2BAfooB%2Fg7Pk%2FW8AmaYG7w4MHX3yn%2Fuf3Q1JYZLERiBBoVZ29aTRju47U%2FULvx6yndLHrounMBch8fokBo5q3HR9s3HgfxmVUWI1Wjgpt1gKWaVLP0utZ5c6xYgAqUdSCWYIOUhJI%2FIxZK0R8b5N%2FivmxIz6yBLrp5a4Zu%2FJPaPfaiXI3RSPgjEwnxGal2%2FvTacA1&X-Amz-Signature=37c94e7b157dd12e55596c748b1d5d2abd783265de5134deec554a59c7282498&X-Amz-SignedHeaders=host&x-id=GetObject)

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
