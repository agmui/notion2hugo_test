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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JOTGFGH%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCICEKkkW0C7ge1njCl%2FThvGkpUz1%2FiU0aM2Qx5u3tf%2FxgAiEAu4Jb24dnjTbci3%2FJivAKP6SuXTMQGyytLoS1mL322JIq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCxhwdTciBMbz7NBSircA2q0dJbZU0j6ZPKaagKX6bohtwgIz6p%2Fmbwup1dCbKUjBNr%2BLPJNZLpcejI%2Ft95ohg1Vc9wsYfgrdZfHp%2B3fyjyTqOkUuEXvxoC9jwANm2w01cgdNwLqEp26s92QP0eNuhIaWBxz5QM1BQUKkE4NB9JIa%2FoIBhGwqz%2FC8xdmS4skFGzteCbhlM86bqD5Og2ZI2ForcWnAdJepHZmpabXA8mN8C4x%2FlkwrdJzLODhFG%2FZ9orGx7lXydt25hodVQ%2B0GmuQuhYJzLwrbfeZSRn8oHigzrM%2B75WnJbRviPB9PhSKMarbO7TyPnIXanMgNeZRY%2Bj2FPw8uHyh1YfDmJ3skTL6a5ie3pcjPK1r2MzJF8mlHa3OJ6oeCVBwj5Fxev4UdgIlbAq6%2FIQFwEfeP3DzDc6fWU5j8yDhUp9OtD2YNSBE4Kfcwonh44FQ5hg8ohaw8lOZhmac55M92ZupRe8c8yhtLtVKL2RJOjlMP1%2B5tK1aIOQWSqAbgWUDT%2FMqFSXs6Lpnt1zPTTfU%2FLYQY9qAl3AP3msGIsEuiXzNvsj%2FQtitxKr7qq5woz1n%2ByfwL4Lhrw%2BPAR4Ry5mnH4n%2FXp61PEYzUphyyq2a97m6fesoyBmeTXUDDSAB%2FnEIlNxQMLyC9L0GOqUBf%2BmUXAt%2BxoZkA0hnLSFz1C6XbiUiE0mYYYQZ6A4bGq%2FTqNMW3NarQ95FjnXGSDx7iduCy%2BVns%2FhtlexLzxjAAhxthfqCHN6BQNBbSYiA4hyxmyHnKjd%2B27FwT0%2BFh4DpI%2Bl1sAn6hyOBgEFyQx9eSiVTkqC19sMdEvpNAP6RIzLVGlAzpYQFNr%2FdSPCW7QUA1w3NUHKSdrZn2uGWk9u9vY7ZBYY3&X-Amz-Signature=c5daa425f00006bf158fc57e34693d07d172924882a90caa27d4331114b0a1b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
