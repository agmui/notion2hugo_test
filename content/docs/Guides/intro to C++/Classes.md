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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P3MARGP%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGoPK%2F0TUUndjO%2FBzb3h3RLUHsQUpkIJ42%2B7sB11TEVsAiA7Kjdq%2BvOzld52pFrhSXJdDI5VSuIzFsroULYNUVtaIyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMGfdZhuJMasskF%2F8XKtwDvqrG1eCXT2uVF2vmXn1uxZFJRl8nM4XhnknAz0nr0vBgWAKcbd0elE2uusf33tXhaT92tdOGYE4R0favqRyu3mmroTfu4gjHwnDB7nx3kGApISnjrofY3kxleQLlgV7UbvdWswBprvjxlgC9zOoNmM3N0K%2BpYSgmQkHW9LzyAVZ2BLl8iXDdE8%2FuiZmhWHcTGJXJ9a%2FKWWw71XZB%2FFHvYW491wXdfLcfWjhfrF%2BGdqLpFv5Rndrv5N0ixXi0Mgf3Z%2FlQpCncYM8c%2BklY4Q1SiwxhEP6kC4hoIph1LMF3qQ1oqcl4IgmW6b7zY1D1trpDK%2B5d%2BOsqp%2BsF3F1%2FSuo4xGVdAW8QeySpPVPxwt8Ct%2B2lJjwkk3kkxjOSKUrbtCGevP%2BLT1f3jpZ6LYyDF1u7FlEmAsRb785Jj6BfNsMpQyOdOF1yyBKEBTaTMdV4ylLJzKGyc6sgPrQNLJCI7uB6NK8uJCja51dmr%2Fn8s7WTuxYN35kJ8BUBBYpydut29coyXb3I%2F96BE9hNZ%2Fk%2BM74ZwUB8wliybwaOe%2FPu5CH1Xg1gP9BxL79FEytZn6%2B0jhGgSsz0vtpRWGtGoHDMFpNO1fbzPDtdicPR6RR%2B8iNbXp9MDNTRXVZfoqrkOE0wgafFwgY6pgEfJvmjqdoG%2FygHHh9tOUYxfOKgxBHUidfI0Rh8LUKodxL%2BJmJ3RTQ6gJTrbyUdDelpdzX0KaoEpp5ehk3r%2FdJid67YKq6LNml8%2FJoZ3O7R3hQQbkJGpeMIDdyXAO20s%2FEvkej4bVJj%2FgSj89b9otNW1ZxT%2FTM6yoUYYtn283iXSI4dWUVPWFNIM%2BC8rktD2V0efewsEkZ%2BXOFjZaI0cz1PR%2FJfr0sw&X-Amz-Signature=44be09c2c9f4cd3f8b1bafaf02c03b353eb101c054a3b4bcc882cad87b41b9b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
