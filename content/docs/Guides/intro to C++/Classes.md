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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626JRKKQP%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIGq0N0nqQh8a1Ueh6HcQv39PzkKZ%2FbpKrTERnxcozTk5AiBQ7KdkbMAdjg5Qfn%2FTk2%2B2QywzumotT4xMgVP8EoFh%2FCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMnvbkdkE9gL%2BGsGz4KtwDaIuNsVL7KUPeRAUIGJHTzljPWssrJsT5VQhcejI1C8zwJTAKbdUKjFcvzUPo8i15VosxMiILG8gmRx%2Fa1wy27Zw%2B%2B1N87fSAmi%2F0ZtHTsQChjzUETSQV%2BT5oTKL2prRFd7zPdgeCS54lQ4ALNUj5Y1OAv5rDOjc3rejMQ%2FUE2WQuqDskAOEMn1cHxwTGhpGXhwvtqSwm8MuDuHrR4B0tWab65hWq9HBwsMu1sG%2FhgwvHeZztm5z9Ld9Pre79FEXYD%2BEibU9QSrfFmfAZP%2Bu7HVJmYQVuygYz9SaF%2F%2F0Smz3NuAEVgu4cBFw4yyl9L6q%2Bvuj63%2FapSrqhgODE%2FfjvMTjk93PH2dxzZTpv7hmDmhZ5iE1umpeafuM89WezpftuZpckQhoQcFhye8IeeHzUXYMcIveiJHV8nlr5LLYikyhA3kaDnSb%2FdWMbJyBZySN9zDdzj2Nnjs25%2BwEB4%2Fa69j3zkmPDLwHUb4oIX8tVhTQ5zqI%2FwEv8aBrezHAk5ZRxloI45%2BM4nFoCdkj9dRTV7crihNcaMR34cbNS5gQitOTa9sSWuy1lD6et5Kmh6jY6S80W8%2B0YEBg8oEcKaSbxwgo%2BhyV7Lo06MZZgzbw13g165ApeM8ZodOkoLpcw74X9wQY6pgGLCI82btgiAulIebltAodBhnOMj9TWQ6ss%2FKv4O5J4ezqSIQY2aCnz8rNpSNzrT4tm3BQLsXLmvw3e9CLnDH%2FF778ASIsS7NV5lOHNvP147oYRObMnQ6H2M6VXLnYxdMgkqrUbweRixKM301bl4%2Bei63vqvC56UiqIjWiAVJ6xMWUePvL%2BBTR4F9hEa1qX2IIdWhe6wb9n9WY1zb5HkV6vnWaHtvvw&X-Amz-Signature=b77d5dc46086243f06e3225572053ddc5bd19d158558c0969e4a03c75b3e46fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
