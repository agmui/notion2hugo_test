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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLRH4S7K%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCICcRnXwv4e1wXm7WOhj0Pad51BnrOOEeQruWNw%2BE9SJlAiA%2BrEp1uNhgJKN23tYP%2BCMQoPreOYYmVMJ8WWbcsLASBir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMzD39nMSdMVL9MkkQKtwDYLswu2ZSjHMAMOmV4vXxR36Er7AUrU6bOzZqVbeEJS1SmIafv05TVBetnHoWG19eqSIin9qCrxxxHZ6iayxvwJptrs3VFFNZWHxTsgZL1%2BhkXquDhmRrFK94IkfoO2f40f7JJFqUoTA908ilRt2JkyXpL19S2ARdicA9GQyliRcpRMxBzfPx33Wtxlv8DaaYdNiu2ZW3hJjAsNtqrpXyRykL%2BH60BdXfeCDKJ0LFyDpTLA7RcGeCnUolHsp2w56EusF19SY6hqYeFPLfjG9YEnjNagdh8s3YIGiu7fkERfaqdOCv8u9i8Ka9LJMrrhtSQ9B6hIcpziZ0YNezn3ay7%2Fg7b5cUgTTygyn8EKiksZNA8eWlQxvBtOemRKuDXE%2FdvdjEJcx1VaitWTyOM2GvWqEuqx876IYXHYLXr5r6Jl3R9ujNOeN9q9VPJZQ9lUYY4eU4gqrfQno4he%2FPeH241FiIr8mvEkYL%2FHAhoyc6THHux0uHVeKh56lA21FK0cTaoMo7FJfcl%2FrxZU8ecshdCyDRyE8pAg%2FBF6kfE43oWQVCYyuhvJ2g7yracrMbrmFeWLciFpkQ41%2FoH9iIzWUDfZUc3VT%2FsqkPfrdYQe1To%2FlGYkh80WL9wH2Y%2Blgw9K7EvQY6pgGIwuorcepQcSkPgNp0mLf5AvWyaS6LjOuV14p5edmOhY2tdYCcB%2Fxwuw2SkBWLlQBPUu2lDRDFYYlZtPOpES3Gahe%2FMQ9Ef7o4TF5fWP83IBN60Mqm0Z6B%2FzCrxeBR5z7BB0yZ%2BTdaYESZYOPyOjAAwjQYDBwPglZchKzwdq9Ma85yvznMGToRkJb6xJIWqPHzGVF42PZG0XKyBhvSbWA9ew3Qw9qN&X-Amz-Signature=6990fe9a21215d4397e9ccf188c0992b5382491925282aef92be9c5ade59814d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
