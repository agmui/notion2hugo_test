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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZML5MZGQ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T040957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHa8zKkiUATOpfx1O0mZoJpbrug49neZtUaXKgNg1O9AiEA6NrtXMxiPqAt%2B%2BMroqBygyImxnpnBeN2m2BpGIRRkrcqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWocCW4eT2mPxhiFircA6GUp41kxQn8iOCoYibkD6%2FUGeBrzzPOsNZHUQNr6c2iXyCijDX8hZnsM%2Bj0HsTcsjtsneyHC8hCGUyGmln4t8L3fhlGA1rZYv855Qz4PhipOH887LwC1HAn5HA6jWYKMr4pYxGyh2m8v0ivcppfS%2Btp%2BI02gDzwJgJoD0CtBlk%2FNtsi113iJ21lyZFYjSkhSbQYYX4K9PhBMREuOcaI%2B4Uu4obFzXVb9Y65AkFgziS1yJvk8Np%2FCpK%2FrLB4BD97tTaPsjQYsAZRh26ihJE%2BiT6sJH%2B%2FLEi8KpciwXzWYDAigVgXWDXIMVgtXVUJt4%2BUE3nkX1acIXPUqqGwCm8yeFHBqfXdA%2F2rYxdHXfqeqOVbZ3BVzC2Zk%2Blg%2BnO5e%2BBSf1w7pcH53l%2FlMyyEP8ol4Uec0ksDbpofb9R9vFCk8G0%2B2BRrhZWpAcn37aIdiGK1GSVzLI3A6Z5Zl6woKLS7gZ9bXkGWONFmsU8We7%2FoKH%2FdDRSndKY4%2BYvuwJTdCjplHor%2FdB6vy1kGQI2g2QaDkW30sWGS9vWo%2Fs%2B0siJKcPWlLB3iVqb7%2F4WQtP5BzLR7uwGbFalUmmgrbbbGUUOdQ5O6BgJoKeWToQjeSHvpBTAbKB311FnkG3Z6NSk9MLydyb4GOqUBSORz65Pq9pnCNjTFuZk%2F5mPZenEjogDjj2KRb9RsqJ%2BXWPoaDpVxg36GoySnQmLTesH4J9nozYjZbgKHhBPVnPuS4gsT00Q7sRgHa%2FfzbjFw8pYaDHb1O%2BUSme4plNBfqONG4oyt7XrA6Pr4VCnlUivxwwudGfipd68f%2B2XN6es8ongr0dt3H%2Fu0k2PGo2MBfi97ahyJQQ%2BwRc8TBClRHvtLK%2Fia&X-Amz-Signature=811aba5e6b07d6f44fb09b8b980c6546ebe8f039e1678d005714362f1008b4fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
