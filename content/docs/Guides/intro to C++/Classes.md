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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWXOSYTR%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrEanJ%2F7EZyna4s31nHIyuqhYXk16auQDTPkBqv%2FbTmAIgdxJIDWY02GwMxGEu%2FEY%2BATb%2BnbV9mO0INfDv2Dkgci4q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDGRw28VJXxMBYAAQNCrcAy%2BSHSM5x942zvq5GJ8a3CAeS%2BIK6%2F4wmtOP1CSFDhNEDoYK6w9WKJ0Lm%2F0mKG3zmp%2FmqqBCQWxjyxzSOc1ul4jBMcdAcA%2F3jqkk2RK0TRb%2B4n33hLIpAJexbPrVbyyIAIz28ZLfAYxJbWLEZpA7hPTIId6LBWIYmYTFv%2BlAdWdKXMcvfLl5xMT1gUzlYX06IBfqD6%2B2hP%2BfgvWZ3dQavOYdW6O7j4DbhV5syN0ynyTo5b4rJbzajDqIk4k246izabHZIdLRUjAuuAzto6E8oezkFYTH%2BdgX4i4J6ypOsZrEjnZqxAF4gXCJtm5dVSb404K4MGgSzn4QMs1JaWwHnXUmyzHHpSPMOdYM6EKdWPP1sS4FofxKU3Cz2KI1hwM5zXn8hkdb%2BwMVC%2BLhKnLtSHHOvnNE2EI97et36pioePQrqTOCnky9WOPufGlbc6vcEX0%2BuykzhH26LI%2BSoOKC9CJkbyUC0Uf8D9dNup5DIucc%2FtmWjeOAKy3YPLhGoRNfOTng0XCRtvS7975USvWxfRs8uHG7LsybpgrnB76c1AgrWZneEdV8W0hEHrulNjhKmbNIQKz6UvT3%2F2LEHzpNvEoDJl%2FtqEx6C0KRdgk%2FfC%2FmMDOEMqY1AFBzRuf3MK%2FC8MAGOqUB8%2Bv9COUXv%2BvEpimqy2hr9zasmngL9oFEgdTAt12me8idbIYeclk%2FuZyhaF9oj6UeLQW1oGJt6palEZVSKUsUnWutrUx8bN7nCuIVc3Rb%2B%2F%2F0xXsnPSH8w3HXKNwlaCHBMb9CAd6x8QH5OmAS4wMKm4x8hZf99pI86lWUHp3mH%2BVvlYSEb0LNJ%2FCk%2BueE3MaWWgREmT%2Fz6gvcQaG8xbVg33iD%2FndJ&X-Amz-Signature=14c5a56fba89411e21e696c759ce3e09b43784c976b0173a47f3aaa18c53871f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
