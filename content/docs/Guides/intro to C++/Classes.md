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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYLBJK7U%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACWpdIbCJCHNC2DzyDb%2BVyKFfCcdXmLdvHG7AADOflAAiEAmOPCoMBcxZfoImmXYYP9bwGw0h0mHsB1dnhJzxFM9A0qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyKAV4Qf3i9Cl%2FZRircA4g6o26DCQdiOjnomMUZJsBuZF9d8LLrGBK67kqOxreAQsKkR7alU%2Fkz0S1bjA60SgMfx2qvS2NcIQvEXGEMsim0qBFZyM73cOXO%2FZrNIM%2BLM9lpfYHmbu2f972rsiZecaV4qh4EErI3QaAW35%2BiPF84OJX%2BiUXmIFlodmUgn6cAOw7nRmJtY7MtaLeqrWcJbdxObRZkCZBg5KUfBcXwi%2BF%2B%2Br5tiEGKt0rB65qXkUTDgO%2FpMu5S0bQNCQYsYWF2kHNeTLL8HJY2189j4RdsL6WIhs6Z3S66dUNzIfkfj90yhF6Lt%2Bj3ShHZ4pqhzj2lrloA2J6CHjBf7KjDMtNqKc4oCE1mbQkLuJUNCqvNFrcDw0cFYPl1FwXyp3LlMIqZmrNvfzWb5ab%2BTVasqFkNNgsziVOWhQUx0x3ZljpeXF7KIZ6%2FuI6SrPTcmK%2BbV%2BrXFh9MSpatt99hcfofbgPE8z8kl1lKRjvOnuwf%2FUAMHRBuXFAEQH%2FGQovLGuH%2FYrTGl%2B90qHy2BydVrWvaiV0gARlu4OR3E6vf8nlgbt8i%2FdlEQWoZ6LCWd4h7IM5nn3jwdKMQnKXIb0ANvE9rTugRUub4XyjdIvPfFkZSPxPOaoMpiPxpHZuYe5jnwtr5MPzK370GOqUBjJ%2FJWXT0%2F3Sy%2B8TXRRUxSZAEUI6rPWKDHi6rQgGbWQdfkECp6oEk4h%2FcWcWe7UbXezXzNNHsWfGz9G4mzGiOrV297%2FQtbHsJ7bLiqIdWxt8VqmTWAut2Zb4dMyX26WvQCq5IsocYCN1PmmIF42lYq7CJ3pFNi2LnlXY8%2B%2B7GwW9ghcorsNLLX2vy3v9ffAlLrAeW8Mf%2FrsRkeA6zPPIffaHlrjCu&X-Amz-Signature=a09fab4b6362ead5eab3e18859bba7e8b5cf5e4403942d7f8cd8a081c641f903&X-Amz-SignedHeaders=host&x-id=GetObject)

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
