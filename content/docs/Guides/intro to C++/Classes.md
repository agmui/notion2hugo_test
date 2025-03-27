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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XGRNB3L%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2B3%2FJlu9HBb4uDf7v6pEM62gnKPxnqpeGHI5Q8LPDyeAiEAgH2WyZBXtfEQaF6FPbbq31rykOYULmA55m4rE3MQhsUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFmyFNNCB%2BdATL9eRCrcA8VUoIyiW9sbJEvrnQus7mU4RfRrOLYq9Dr46KGKqiVHobjm01HcOAWlyb1o3tAsmLCGyWTDDIn7PSyZo7xgm%2BUnIUsYjApzf5gon%2B%2F2s9hQrPmlH%2FV05KH%2FLiPl0oNGRGpb%2BNQaGpGUH2hfK1GRc0weXf0MKg0p2RZpJK2M5QAAiE5yOaMc45Nk7Mn4UQpjhXuu%2FtpHGFyLnl%2Fxt%2B3pP3AkqAozgYh4x9XAsVcbMwdc7sb7uWlhgLCrruMnLRSqF0GT6AeVPn%2BPkbNXHSPHQ2a9BXQ9dedvxUg6eULpIO2wSaTJNyGZa5KrWcVAObcq3HwZNG9hDk6PzdwbAZMb%2BcXq0y1RIskwIa0E0GvSIEPVe571pxRBFl8ksmHiMHDcymOnkUNAsUTx6imPQCt0n7OCUo%2FGfJGyHoXCZ7anUpUi16FYYeOv2FLH2JcDWf%2BM%2F5ZtlsEemU7FFugDxXVxyr9Ea5tjNibl1EFKhCau1vT5D5Juyq9iQtOamzZJtxb7YXil1Xj86BDxNeb%2FvCwoUj%2BkngnwsHIh2i9qDvMAOEa63mV3b6qpHF1%2FfRgnHZc0LtZ%2Ba4eknXyH6Krn8r2p3ibgOk0PaJcmm6KRawyoa6aZx8gvvwVDWJqMivRPMPq%2Flr8GOqUBpXE5RC%2Bl%2F%2F6Pf3g3qkKZNCegLgjx%2BcZW99YFJ%2B%2FZ8QXPxRIm1qKEVtYO3%2BTX%2BesOI9nlgMA0F8oOIoUobbKlmI81g3a3Ep7WsVqJHiw8xvm9oXa1niF%2FT2GP0ZfmRBntFJ8hU3z9RW15MKfUH0CPbC2Q8XOlZxqdbTfdwPsQfxNQGmuvFwUpwfmYU5KQoMUAfafxG89atSmPrAKldy8QWWScw8xq&X-Amz-Signature=28bdd21733ed807ade90aa593bf3e83b62b19b323e51a76161c3c2867a9b4436&X-Amz-SignedHeaders=host&x-id=GetObject)

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
