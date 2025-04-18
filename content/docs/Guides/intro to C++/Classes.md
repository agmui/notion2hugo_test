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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2HMVA5R%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkRwJ7AXXCouzksoiwLSkupQQAleQd2Rfh6tm5N9SrywIhAMbfj4BU5sFxePvtzPwd7NRaXMYxlMrNoN3%2BfjnSs1IfKv8DCG4QABoMNjM3NDIzMTgzODA1IgwF44mCQ2WOF%2FNGhnUq3ANoTdyHeML1P%2B1lEJ21IbLlDzLN4Xkm6O1Fnh5VzXpr6VHCsfOzD3PMC%2BnDvsbe5iY%2F5avolnU8%2F6Ed9vom76DesgHXQ9rNMZIxpzFH3L%2FVpivDhFR0pgK%2FIdXaZc%2BtjJH374aMjJSqhqWJk0jccq8jDRLIeM0f5HO4MpZnFsSQOAimKw3pOPVuAGL1HT%2FdbjQeW%2BpMiHs8Ea3%2FFYcUHk%2BL%2FNp3QyBpoTDEVeDi84OgiAzOsHTEqIhlDgLIBemjuDsllnC2Ar6sD26XTuw6XE%2FkoljVYRuczytY%2Febch3rOu%2BmwpZfIU1Ghj8KzJAunTZOUXc2VxfNaDtt7iEhxOGA1Mlp6K0wyQY8BPbzTRItoWjFe%2BUxb73GwyB7T340Coxh5pLY8guYH9fPLlx7tMLrQTAgtVJ%2Bnm%2BEcyxm3gYPj%2BTsjNAm0YvXhXk4tQwAhOwCm6%2F59VbLk18DJ7waMT2%2BVLTtw0KbcHM077eRcekPgUeMQNl756Me%2BCsDEFu3mgQJrN6YyxSWe8mxSkiyf9cJJPT0z2P0Bx7Az4r0Gdt7qEG%2FeLtQl2wSHN%2FvzjomTYZfyIGuB2einGEnQUJC1%2BCt%2BCueyYy7qQyQPUGre3SlxRhkkLsr0sccwLrV4lzDtwofABjqkAR%2B6LPhTmMe7780rizjSK8cntKw%2B6DTNMYrW5raLGA%2BFf1Sr6eqaC6ZfZ0Glp9MfOQcWpfXgtam3zk0Yot5%2FozddzfyE8g1bbhS2fM2rauQVwrlu%2BgOgHxDV9PiYWcFggSliWom5clzxzGcDhir5Sq6RmpapljaHMVqfbGopMdqHJWg2Z%2BQvaXGyJKC2w9sd9wQe4r6Fdy9OywVw9eHYjOEqOo2d&X-Amz-Signature=93af27ed01eb849ee1130a1fddf5b55e34ec1e8e59c6d40d0d97b8d44b89a53c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
