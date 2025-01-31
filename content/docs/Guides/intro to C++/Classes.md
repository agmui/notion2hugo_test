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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EA34T7K%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFuogAeEi6DbZtccWHc7d0aGqCT6m%2F7gKPsjsafPjL4vAiBcC%2Fsm7t%2BJHPB2U81lnascHwTRuGyTZDGJs8eNmegTpSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEFuOm1KChMWpviG2KtwDzSDs7ofOvAknlee2yneiPLMtPitPI1TpPNvLwXKzvdiZeLykm8A6Ju0tEYeTjt%2BpAoiCYb%2B6XQ7nPgXex6p4CfTVFL0kvOGCJKR8WWG2u%2BSgx%2FYhBPtbV0E0sJBIupHBhLHLOxUD96YlCZ9LudwUwygEz6uZBqamcUam9eF06QCP418SqRKEjKKHN8XraWyLjK3CTgVj9ArplVGJIFDAO%2BmNRF%2FbBgK96EQfB%2B%2FBP4SQ2PDqdNcqiaqa6wsIJZIOOjzSECWLXV19BdMV1xAnic5NSY8WYJDbmvQLN6UTqrWEtFUFSnmEZ8zlkMFzFLHmlt905dqsEnPm2pThtv4jQfa4Y23oIRS9QDoNR%2BURVWWzp%2BQq%2Bop28r8%2F1C63JvuHCwZJEYR61cz%2FA5z7HgMZX4LsKUpOFNbsOQSvM4r%2Bd4Ih3%2BStoR85aAwc7dcNBFTnbVUKWyeZ5sYMdjG5ejuKZiz60tRGNVGkWVDSyFuyHE4gEXrLt%2FC0FDiv5sEYpPNZvR1%2FLZpQqvU11zW8%2BnwoIHj%2FeDSz5B3PLdYw98kC5Aei3bhQia8MkrbJIdVqYJGX2i8BOddrj95F6WCsnHI9lVyoQVIIP8tDaoOBTUGMxQzKWH3tz7wD9iptn%2BYwhuzzvAY6pgHg%2FkHdIfI%2Bjm3P2rzruEPZoZbAn8VTsv6E137gWjuRI76TySz1C0g5U4c1c6uKW4W2jRKdZknT3fOKkIDzrkc42fN%2Fy5YvMphMujmpibBpBbp3gNJoPrKazGsqLkX9KDyexMIhukqcj%2BEvbwRgeil74X6R8XUsgWIFVem2WZSnJ9wdig8Cp5e2eoh1pF37HUfu92PEuJFCWft81zBVHCvsnhhmy7PR&X-Amz-Signature=f9b4ba1ae914d0d241ce86e79bf94fd27fef97b7e28baabcfafc83e5e9e788b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
