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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WPKL4NF%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWok60XCBaIPituCrZyM%2BjVaJrL1fKyxGYJVmAvHOnIAiBiI%2FLqOOLidpbZwgFXED5%2BVvxzjqBEH3mjYu6IWXskgir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM%2BHbo5wbFNtHPchuIKtwD2MpdeRGWwUXuycgj4JmOdyLN%2F9S18soKIg4UQimK%2FNR21o%2Bgvv%2Bwq5I3pSXAGvkNdK%2FDYnTpqXOIW%2FBoqeNASRQj4zRWyRDZMfVQudBh6Ss9xhmD6hDBHEqM2DdOf7f%2BAVT3vYC50cnr5w3S1NEZvH%2FRlgFqrG9ZfUtPor390SWNt%2BpbKO5ZAO1OR8oFeJly0caa2jOTbf93NWSUue1WnllXbIS8JGXtx5PPINulc1SIM3q1KyEJTycFmbdi49d9RBrvNOLn8syVAofJ402V8r7dWreinON8i%2FzbftF6POnwvCBky48T0Ty6shCxTOhTpjmJBgLYnSXl2Vg%2Bk3q%2FSLXQOmbDG94SY3ymWoP0mZoFwtHig9JdyQWGUYu1rINT9lusLGAM2ZL7BXtd8PmH6m5ew1IjNaSf0iFZje1qfDJJkUrVcEOGfqik%2F4yd7hqYVGkfavsVmh3wGKI4qrijRKHsWQWr4IEWVH5gQzH%2BWmEnkt2yytmFQ%2Fy9HqjjODFKd93rM%2F8w%2BDGxYlEHitQuICFgPQz8z4%2BMl5dilmIrjg3EFHZEe5Rjvlg6R66ENv1zRUwfsvjbKdk81iaxs28%2BuZbvmsDlP1wVt4CReOwuTQquInbR1uELfRuQ9f8wutGavwY6pgETJck8hZN%2F0CMCPZ%2Be0cEwAqaj8n9a8kwAMnSU18aRRE%2BH2CF3bs74snHba8vAPClclM3%2Bj6JfY7H63nniGivICLjjNeCojUvUNHhNsFN5%2BMoUwNus1YX7DSBwANKS2KMnlytsnEiW4vIZpp8l%2BBelgwUzQ5mBNL7pG0IJrICHm6kl19K7vitwfzjpasTOXBo6xJHz0C%2FrHvgWmbdD%2FjRQguOG31Ov&X-Amz-Signature=7dcdb465f5dab1964a673c7a50d60840912ecc0417a0aaf1d43d365baf85ff84&X-Amz-SignedHeaders=host&x-id=GetObject)

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
