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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSEAWIJ5%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T190513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCShA0di6DJr516AuWUMDzqimaeKfYgboFHGO9V%2Fl7cgwIhANvD9F1I8ON2i6ilGozQE5UrhA0wdUa2zc1%2BtSIc6Nn7Kv8DCDQQABoMNjM3NDIzMTgzODA1IgzdLpDSFMwOa%2Fq%2Fytoq3AMTLPFgLgtrfEu6bZDpxIClu2WFUc2Id9cbgzeWd8BtF9Ve19Mb4fAFOy7SCruldFEIJj5v0uI%2FdLjjUVPMux8G4EKFfjXOrVHjfHr3My1KxwkwzsCzT6u8wzsFgphtUBfsSXs8O7mnVBNS2veUExT2%2BLmWICiD5%2BO2NKGHg8xVDbJXFWxLorMFlzsTmtxIa1d3YlQkIzUl0eG9etIvdtCWCzIzzA99wQ5dv1WMVA62hF8hb35%2BfsVBAdDuFcldNCvrmb%2Bt28EUpMDmBUyw0VdT1pQF9ucxssKBvqWYPbGsgRhsyNWR96E0u1e2fgioPrxZbf%2Bj2a5lXPtHjjGSFI3DJ2AGf87NgDdwtO4tCbHcM3AmOp3bU%2FbW%2FX4ujHOdvNehovKiZxP7b%2B7fhzmBK8Zqh4ynjPJIK6%2BDh8VLd2e35oRkqw5dST1juqc%2BuoEsYxn0otnEqF0A%2FGoJlkMgOx4npXdqNcm08S0FnGciVP5YbzCZGKBz%2FbEU%2BuxdObABBVn%2BrKlxEuhJ%2Fo4V3wWkyHZLx8o58RZEJ15uIUE%2F1QOvoL0jZq0ax%2BBbAtRbIRK1K8KhvmGxIfJuQhzSVmmUZQrtb8bAIsTc5tRPlvxYgg3D1v8KLzaZVoytupt6JTCzt6%2FABjqkARJuTbWiclrYwo6vplXQyQA1n%2BCQjnnSgJ1zrB3fQ%2Fx1qZECRkj%2Fv%2FqHYvsKjg3YTFSpBWf4zRNQvQiE%2BLHt%2FzrGFVwCY2YpvMAsclD0ywkU6DC9qL1DAG342QiNl8ugkvPSY6W1uwQujoGCe1%2B5YBtBqbKNIYunGfES3GHDUsgjw%2BP%2F8wBs5ttZR8eOQGB8UDBNA6BrUAsjliiKHamc9wd3QKIz&X-Amz-Signature=5e01a8ea624c762a0c0c2ffac1285c6a1b2b35dd46c2c50441654409c4371af1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
