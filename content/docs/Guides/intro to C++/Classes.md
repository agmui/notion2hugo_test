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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDQI4SF7%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIERTz%2FberZkBOH2EXQaZiQ2Ky%2FqodrPFz9LizaTPWmVdAiEAnkrqy%2Frw1%2BAdD7%2Bxl09vgskCP3P9ryJpDYmNc9ctSfgqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKBdaSC%2BB8ppXtDiCrcA8okeoAaNOVXyLesQVYrkIS34PsO9zHD999Pc52v7KBLDjSQRxtV4JWs9AdZMtUOewPu%2Ft9dXFxtEvgLXzlFsH3cKjG4LTCT%2FYWGMkpKv9BEyQzDKvcZ80rUlELSMtMze7CDSrvHSTmzDKTGTcGV%2FSn1lBZK%2B%2FbrkoR2EJbkkDJGKIT9xtaJz4X%2FvXQE%2BKaZOH3h%2FIeuHAa4bvqzRwWN33jWIcNtZhFiwg%2BAJpabFEQC1HUEZFxXQAZZkYSW93wOTyiUTylFap%2FUJOMMoBSiIkSoIGbmRUzWyKb3b%2BGE%2BTSMXLZld5jPpuHsABweiuB2l%2BxsNMLme6dS2X09kSQOreKE8uoQxZO8JtSSVbysQoBVGnpNbMTjt2VisTxvY1deo3kRMX9vRiNecj%2Br7GkUlZlhYtBptao3zjZxJ02wfEf3OgnS%2FeLiQ0B3FfY92EXtOqIHgLzPA73AcmFslxo%2BTQpOyu98zsIdx0qgW%2BC31XdeYcfUNX5JI0ut50KVDPDBnS8VYoP3PXdg0m%2Ft9AV1HVKF0iMMbiUHONDULSjoeS%2F6%2BjyQyu4DbvrAyqovDxjjEXC1jwWUTrZ01zbUXwOmUWkqXCAtoHALXjiTDuhGJuWrnV%2BZSoWq6jpwBPcVMKyl8L4GOqUBL0LhNKry2fXNUyamo%2F74W6l8Wfw3KCF3yqenhlqBJz%2FOxR9qoXB6GGkUSKOtTiRnIZoPnEib8RoMoh%2BLlItHNE533oxwyhIrTSQubufVyA1S8ohlL5nwyR%2B5YqCRcEfyk%2FHHX5UY%2Bp5jm3CfDLvwVt%2BlfI8l2TjgbgY%2FBeZbFHqYJSV8FonlO%2B6mx9Fs5Q4RuEO7BCefCyESv05gZFJXq3Zv%2FgR4&X-Amz-Signature=67a33b662b288a96903c43cf18497d3a42505834b8e6103ea40fb4a3dcf0468f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
