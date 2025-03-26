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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMFZZWAC%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbw3y%2B%2BQzotrza9MDsLiqPipQthCv8tHWM8TFr4xZm1AiBlbcZbJ8UItqSuKy9kxFvcBB8bfQjy8qmqZuFsDG44bSr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMDvwSxnSRCuQlV5ejKtwDo4%2FrEiWMOS%2F3XXEDYtWjlwNr%2FIrQtu7WPxI%2BRjFnBKMJmRlNhYsWeIM9ESPV3%2BTKruHuOEKpUeY2fBJWmToigmePA%2BRILA7NSbRL4TpfoejOnmzGZxLTP9TbUUzgvSFpDSh7h%2FKzDDtp8A943o02%2FtwgqikWuN5dVaeP8V78xpvpmN%2FXOPp420TL9c2DtRxwmIvZaeXf%2FBaGUrJfEPbjn08vdKSX0UA37eeRqdjyyCuTLRQA2f7%2BFQLw3hZaYfu8WWK9YTaK5MUe%2BfDU2JgYSrOU9phEdhcNjCnRufHjOgIZIXrphIa8VCyjarma%2B1b%2FhVmSgiLqlGw1wDXvSfX%2Blj1xwH%2FlQ%2BLXj2IiJKzrtPmPVRwpoFk0DsmTewThtyOtlAqH0up7xiSXnS4UsfA%2FQFRu9Kdfz3VV9SO26C1zOS1it6mJgnIWg6Q9T4abY0las8TUYoC9DUUDUkskZ4Ox%2FlYkRhUEeWRgmw2nf%2FSvUc6X2w4vbJSmgX9BLwAP1D4PCi77pt7PklSLWuCpplMG0mjTd7FAoiUGomjufAPpE8Rrn4m7yUlvWjrpeVQZ21e96CX0K0HTkOFKBZuByXeOxJ%2BnU%2Fw677%2FLdIrWBgMmgmRMNDQphiR4%2Fkz9DAkw2Y6NvwY6pgFEzxoC3ZmLqiyQapiSL2%2B50mV9eq7eQZW3%2FvH9dro%2BL%2B87vgwV57E%2BZQmTSRxB1Sby7BwQLub3CZ4Sr6H8xlUJv0m8q%2FIkM0dLoodhKR8%2F3MlKKcLhQydVQ7nDhksfy6180ygVM2RbQc84gxadygJtM4lOfbFrKm0X2MOI3J88WhQH1Cc%2FUuZ7%2F7q5l9k09iAynAaKm94k5BQAGtkxzFjHGRE0MzRN&X-Amz-Signature=ada84eaf26b312f5c062056e057b2b0d7f98d7acdb2bc8d3b39644ec982762e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
