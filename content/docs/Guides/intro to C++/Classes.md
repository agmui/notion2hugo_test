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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTXPKVAN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGdoeIXuysnvMI5JNtMCNRmQEDjPZtAuvUOM%2FIch4GKxAiBy1%2F6qXPyXBLA7U59sQcJ5NSO5lq8dOONwy6GKVXH8mCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP8Qdwi0NN5o8WOGaKtwDChZa77QuDoQsA7y%2FUT65nBerm6PjS6ZXlOb2cTK9sCoc1S9M%2BiVDcxAEOWcUu27%2BAsr0JVxNs7YkRKsDtkhXeCV%2FoqlUSuPq%2BQkm3FL%2FnEQulzQXFvU1C4GrV3b%2BF3X%2Bn6m6JNLzb%2F0bP%2FteQ5S9M3QOSLqQEXLcfzpOKhIDSVuQkLSNRuGPIzJY%2FNIlGOwJ%2FrN9aBf2oZ%2FE90WSN4FIxLtRSzI1il%2B%2FwiwqO23yrlrzpPaeLF4dYR9h%2FGaz02uJ3WIuOAF%2FzPy8H4n25VQoXaZTgcg3fivnKaSnqBsSfeJDODyKnmI46TNKyX6FW8fXaHZlIY4lMbGXroIgcPkYQwsHAHi6%2BtwbP8NHpIvh%2FCgM%2BEyn0Je22nh0PDM65L9PJ92QE47%2Fi7i5bUIDJxrlIzEG8sA51rnSEY1IcQh09K3mN1gNUqpN4nJAtvdgVbLBQb6SIwU18DyNyrBr94UTpD4wVgD29%2Feo61HUvAMJ6M3A%2FDjo%2B4VwR58XzRGOuiCtUP6ntxB6Wt9kEDar1NCLEcnvPXTo78Q5bRAZa5esTqqAhxaYrlqUYplv928HCUKUSN2vQRLasgphf2tdpP8YLvjNX8tOea9Fm2yzus5swvh46lYNUBNe9XEXLPAw6ofdwgY6pgF2IOMDe%2BcygbVf2UGgl%2BSiHYaCYclcxKvjWwisoTYKSCTKIC3wBRvqxHEd2EWN351hvhY2toiauQLR8N2boIf4qFmKSnWnKyhR%2BRXetoiwUobTxFKA5rZqzcWyzr4NnemMNx7MqwKaG9MyTerFCydWYu%2FLIdIi2%2FI0AIY1SAnVCc8N8XEkWmD3tXrNmxRaMsmW%2FaPeAXSxZdadHvz0MaFhnxMGDxUp&X-Amz-Signature=f399930f87adfaaec6b1c5189eb29d0f2fa4365716f83888da2ad5dbbb195300&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
