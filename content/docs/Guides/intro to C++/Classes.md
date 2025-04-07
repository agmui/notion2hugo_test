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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTDVROVL%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T121505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8kzrdQ3hQMp%2FtiqLUm2Z1%2F0LdhE9zvvIbAIPPycCgZAiBYoX%2BNqrLFTOK0EeipBuPqoUXv0R5XstXwrIoW2obMzSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM%2Fv0YvnDw1wd7kjtTKtwDcsDOT3NHtmWFE5xesEgeW8cL2c2A0C6%2BRba0dpecLDwQjFoMOedCnqYwt9JxabIreWwOEksJ1ooRw8ER54XonAfIkE7T1jX5l%2BCQ97%2F98xBUrjIWfBHn1n4sQSyafB%2Fi%2BnI64ZKGC9OOQ%2BpdIpfnKe23lut98HKT6ZDwhsLg7ptHhSG5dX2N5RVl0bBuR%2BRVcS6e0EZUvao9xVlA2iFNwQc6ieIblsdQbi4C8dGg70nSmSOX69gDYIu0O3dFKnTReb%2F1Cu2maV6JtPr9OPKThBcHvLU9B2vUfhYJgvwm5IpdMl3LTbtddXDPnf308t1Ub8Ip9oWe%2BfOoRbkTvSxotJ%2Bck4ol05BUmauXhkwmJQjjn6xFVMEMbsxVjsvkgFkOrJ8cqpY9otku0CTHUeCjFu1lUgJteTMYaTkK0gAR1L%2FFe%2BAT7bl9Mk5ePqYhCJY3MhdufDkwnkctbVcWS1MTQeX9Ary%2BQ5ugd9yNJaUc3jg6K8EKLhhkG0rZ95D5mf9aeIo2OhHSnE97L8x%2FYUcy1AanTKQS1vQQPuGeXMggl8eEHgOKT58dcYx0e07DGdAUucw5v7RTGKlWPvr9BRiEBkhO7MDALem%2BeI892nKG7p2imkAtwDO6ODl3kXswsO3OvwY6pgFNt3vojg8TEmVs7XzdAfIT3h6kZ1jBKo6QcXmx7WQ%2BoQEK7Cf8MrAHjtiZrJmMwPt7hfGLuLYEOfQ8K0S2k5WrCOykKsFJVVUQupzKsowVoEyOFVaun2iuSVwrray8xm2BwTEHiu0NMoQdn20BtCgXgkQXa9nnQ%2FKwxVAxO1hdt0ljbN6UQ8RoU4VePNKPXCPz0p5Lyt8%2FtQmavtxgazGbEJdwoSTY&X-Amz-Signature=fbc27e62825dd186c53bb74b8c676b27da787c323468c8fbb844df094fc0b28b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
