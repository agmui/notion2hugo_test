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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2RSX27R%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJvMj3Vpn4YyGbQmzyo8k0%2FhqoYjZnxDgwLBJq0Z4piAiBDy1ehm1oRwoKXCJfOAWXGpqnTTJEcwE%2Fy5V6NNMx62CqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNRCvO%2F1BiRzLpyENKtwDDopA18Sdm1ug9HJS%2FXOlutZ2qvSLQlQnKw9wKE2pYinBu2gy%2BZBQmO7oUSeTXdGDc9XZGscZIWK8YpIapth%2BBuC7mGpwUau6wL2o27upT7owGuiCUw8hheu7%2FSoyCdmD5iC5Hgbt8IebhzkiLjvsw51ndMHt8LKjWHZF5JcNFIDzWA1fwKNOzcQBvFeyeAwP%2BrFKOuTlyn%2F0K%2FBObZhFqoIKOvvkd3t1cMe%2BznjYmegtUbO1f9GsyUVi2uBPeyOJQh7p5Mm4m2fjH7yyQ7AbDDP4ZcWeFMfSGnsoWXzFMfiJe%2BoVSNQqEAr%2FLZ3pNxQsG5LesCxx0dksBwloIukpyfdChcDm7PG2HFhLrRVtfywCXAr07puCIGrMZCk24mL2o6Za90Fymw85OuIL8zDZsaQeKj9ppdL27SQ1XCsEjYxHFVOxJOmjltSBBgZ0rtiZpAUPB3V1nVq%2FUR1CUwMpREW3HP01M5OZvBYaALLamhKfWUPQT3dZUqk2W311frnozySCsSmQprkw4G4RrTwAoyTnR1cGQubwZ%2FuV54T2SC36phD68sLjM6hd4Z52JP8xGS10pm%2F4TvNML5pZ4LvahS7S%2F7tWa4%2FheIujb6WTcAK05W9NNV5owv1qTy0wsYjsvAY6pgE0%2BgToTzIltoibJP9fgSB8apq1I0%2BxRHcm2Z19NXI3szfTBHeJx3TQYh89doqSvsT7kqZZRLxegidVWlJCGa1ns2nnncVX7sCNsuKQn07oFG03lLRAKnFeyVzxYdVEqhNe4gtxzSR%2BOoQlgyi%2BQkFP%2BUbt2EElO%2B9qmU8ki6l9iRgEXiK2%2FUJ%2BK5XL4DrgI00PNxrYtTc%2FqT0caGKUKPB4UOHzPKQi&X-Amz-Signature=e59f8c20d3e0853117ca93b8c6d21220ecc1f74f167814816e22507113445d0f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
